import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ value, onChange }) => {
  return (
    <div className="h-full relative rounded-md overflow-hidden border border-neutral-200">
      <div className="absolute inset-0 flex">
        <div className="w-1/2 h-full overflow-hidden">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full h-full p-4 font-mono text-sm resize-none focus:outline-none border-r border-neutral-200"
            placeholder="# Your Markdown content here..."
          />
        </div>
        <div className="w-1/2 h-full overflow-auto bg-neutral-50">
          <SyntaxHighlighter
            language="markdown"
            style={githubGist}
            customStyle={{
              margin: 0,
              padding: '1rem',
              height: '100%',
              backgroundColor: 'rgb(249 250 251)',
              fontSize: '0.875rem',
              lineHeight: '1.5',
            }}
          >
            {value || '# Your Markdown content here...'}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;