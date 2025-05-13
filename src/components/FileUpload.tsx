import React, { useState, useRef } from 'react';
import { Upload, FileText, ChevronRight } from 'lucide-react';

interface FileUploadProps {
  onFileContent: (content: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileContent }) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (file: File) => {
    if (!file.name.endsWith('.md')) {
      alert('Please select a Markdown (.md) file');
      return;
    }

    setIsLoading(true);
    
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const content = e.target?.result as string;
      onFileContent(content);
      setIsLoading(false);
    };
    
    reader.onerror = () => {
      alert('Error reading file');
      setIsLoading(false);
    };
    
    reader.readAsText(file);
  };

  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Example Markdown content with Mermaid syntax
  const loadExample = () => {
    const exampleContent = `# Sample Markdown with Mermaid

This is an example of a Markdown file containing Mermaid diagram syntax.

## Flowchart Example

\`\`\`mermaid
graph TD
    A[Start] --> B{Is it a Markdown file?}
    B -->|Yes| C[Process Markdown]
    B -->|No| D[Show Error]
    C --> E[Extract Mermaid syntax]
    E --> F[Render diagrams]
    D --> G[End]
    F --> G
\`\`\`

## Sequence Diagram Example

\`\`\`mermaid
sequenceDiagram
    participant User
    participant App
    participant Mermaid
    
    User->>App: Upload Markdown
    App->>App: Parse Markdown
    App->>Mermaid: Extract diagram syntax
    Mermaid->>App: Return rendered diagram
    App->>User: Display diagram
\`\`\`
`;
    onFileContent(exampleContent);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <input
        type="file"
        ref={fileInputRef}
        accept=".md"
        onChange={handleFileInputChange}
        className="hidden"
      />
      
      <div
        className={`card p-8 transition-all ${
          isDragging ? 'border-primary-400 bg-primary-50' : ''
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-500">
            <Upload size={32} />
          </div>
          <h3 className="text-xl font-semibold text-neutral-900">
            {isDragging ? 'Drop your file here' : 'Upload your Markdown file'}
          </h3>
          <p className="text-neutral-600 max-w-md">
            Drag and drop your Markdown file here, or click the button below to select a file from your computer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button
              className="btn-primary"
              onClick={openFileDialog}
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : (
                <>
                  <FileText size={18} />
                  Select File
                </>
              )}
            </button>
            <button className="btn-secondary" onClick={loadExample}>
              Load Example
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="font-semibold text-neutral-900 mb-4">How it works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              step: '1',
              title: 'Upload Markdown',
              description: 'Import your Markdown files containing Mermaid diagram syntax',
              icon: <FileText size={24} className="text-primary-500" />
            },
            {
              step: '2',
              title: 'Extract Diagrams',
              description: 'Our converter automatically extracts Mermaid syntax from your Markdown',
              icon: <ChevronRight size={24} className="text-primary-500" />
            },
            {
              step: '3',
              title: 'View Results',
              description: 'See your diagrams rendered beautifully alongside your Markdown',
              icon: <Upload size={24} className="text-primary-500" />
            }
          ].map((item, index) => (
            <div key={index} className="glass-card p-4 flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-medium flex-shrink-0">
                {item.step}
              </div>
              <div>
                <h4 className="font-medium text-neutral-900">{item.title}</h4>
                <p className="text-sm text-neutral-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;