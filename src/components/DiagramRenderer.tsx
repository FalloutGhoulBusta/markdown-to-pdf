import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import { Download } from 'lucide-react';

interface DiagramRendererProps {
  diagrams: string[];
}

const DiagramRenderer: React.FC<DiagramRendererProps> = ({ diagrams }) => {
  const [renderedDiagrams, setRenderedDiagrams] = useState<{ svg: string; id: string }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      fontSize: 16,
      flowchart: {
        htmlLabels: true,
        curve: 'basis'
      },
      sequence: {
        diagramMarginX: 50,
        diagramMarginY: 10,
        actorMargin: 50,
        width: 150,
        height: 65,
        boxMargin: 10,
        boxTextMargin: 5,
        noteMargin: 10,
        messageMargin: 35
      },
      themeVariables: {
        fontFamily: 'Inter, system-ui, sans-serif'
      }
    });

    const renderDiagrams = async () => {
      try {
        const rendered = await Promise.all(
          diagrams.map(async (diagram, index) => {
            const id = `diagram-${index}`;
            try {
              const { svg } = await mermaid.render(id, diagram);
              return { svg, id };
            } catch (error) {
              console.error('Error rendering diagram:', error);
              return { 
                svg: `<div class="p-4 bg-error-50 text-error-700 rounded-md">
                        <p>Error rendering diagram:</p>
                        <pre>${String(error).replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
                      </div>`, 
                id 
              };
            }
          })
        );
        setRenderedDiagrams(rendered);
      } catch (error) {
        console.error('Error rendering diagrams:', error);
      }
    };

    if (diagrams.length > 0) {
      renderDiagrams();
    }
  }, [diagrams]);

  const downloadSvg = (svg: string, index: number) => {
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `diagram-${index + 1}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div ref={containerRef} className="space-y-6">
      {renderedDiagrams.length > 0 ? (
        renderedDiagrams.map((diagram, index) => (
          <div key={diagram.id} className="diagram-container relative">
            <div className="diagram-header flex justify-between items-center mb-2">
              <h4 className="text-sm font-medium text-neutral-700">Diagram {index + 1}</h4>
              <button
                className="text-neutral-600 hover:text-primary-500 transition-colors"
                onClick={() => downloadSvg(diagram.svg, index)}
                aria-label="Download SVG"
              >
                <Download size={16} />
              </button>
            </div>
            <div 
              className="bg-white p-4 rounded-md border border-neutral-200 overflow-auto fade-in"
              dangerouslySetInnerHTML={{ __html: diagram.svg }} 
            />
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center h-48 text-neutral-600">
          Processing diagrams...
        </div>
      )}
    </div>
  );
};

export default DiagramRenderer;