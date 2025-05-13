import React, { useState } from 'react';
import FileUpload from './FileUpload';
import MarkdownEditor from './MarkdownEditor';
import DiagramRenderer from './DiagramRenderer';
import { parseMermaidFromMarkdown } from '../utils/markdownParser';
import EmptyState from './EmptyState';

const ConverterApp: React.FC = () => {
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [mermaidDiagrams, setMermaidDiagrams] = useState<string[]>([]);
  const [isConverted, setIsConverted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFileContent = (content: string) => {
    setMarkdownContent(content);
    setIsConverted(false);
  };

  const handleConvert = () => {
    if (!markdownContent.trim()) return;
    
    setIsLoading(true);
    
    // Simulate processing delay for better UX
    setTimeout(() => {
      const extractedDiagrams = parseMermaidFromMarkdown(markdownContent);
      setMermaidDiagrams(extractedDiagrams);
      setIsConverted(true);
      setIsLoading(false);
    }, 600);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Markdown to Mermaid Converter</h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          Upload your Markdown files containing Mermaid diagram syntax and convert them to visual diagrams.
        </p>
      </div>
      
      <div className="flex-1 flex flex-col min-h-0">
        {!markdownContent ? (
          <div className="flex-1 flex items-center justify-center">
            <FileUpload onFileContent={handleFileContent} />
          </div>
        ) : (
          <div className="flex-1 flex flex-col min-h-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 flex-1 min-h-0">
              <div className="card p-4 flex flex-col min-h-[400px] bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Markdown Source</h3>
                <div className="flex-1 min-h-0">
                  <MarkdownEditor 
                    value={markdownContent} 
                    onChange={setMarkdownContent} 
                  />
                </div>
              </div>
              
              <div className="card p-4 flex flex-col min-h-[400px] bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Mermaid Diagrams</h3>
                <div className="flex-1 min-h-0 overflow-auto">
                  {isConverted ? (
                    mermaidDiagrams.length > 0 ? (
                      <DiagramRenderer diagrams={mermaidDiagrams} />
                    ) : (
                      <EmptyState message="No Mermaid diagrams found in the Markdown content" />
                    )
                  ) : (
                    <EmptyState message="Click 'Convert' to generate diagrams" />
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-4 mt-4">
              <button 
                className="btn-secondary"
                onClick={() => {
                  setMarkdownContent('');
                  setMermaidDiagrams([]);
                  setIsConverted(false);
                }}
              >
                Reset
              </button>
              <button 
                className="btn-primary"
                onClick={handleConvert}
                disabled={isLoading}
              >
                {isLoading ? 'Converting...' : 'Convert'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConverterApp;