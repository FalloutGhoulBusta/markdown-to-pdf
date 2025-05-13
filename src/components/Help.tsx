import React from 'react';

const Help: React.FC = () => (
  <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-700 mt-8 mb-8 text-neutral-900 dark:text-white">
    <h2 className="text-2xl font-bold mb-4 text-primary-500">Help & Documentation</h2>
    <p className="mb-4">Welcome to the Markdown to Mermaid Converter! Here’s how to use the app and get the most out of it.</p>
    <h3 className="text-xl font-semibold mt-6 mb-2">How to Use</h3>
    <ol className="list-decimal ml-6 mb-4">
      <li>Upload a <b>.md</b> file using the upload button.</li>
      <li>The app extracts and renders any Mermaid diagrams found in your Markdown.</li>
      <li>Preview your Markdown and diagrams side-by-side in real time.</li>
      <li>Download diagrams as SVG files.</li>
    </ol>
    <h3 className="text-xl font-semibold mt-6 mb-2">Supported Mermaid Diagram Types</h3>
    <ul className="list-disc ml-6 mb-4">
      <li>Flowcharts</li>
      <li>Sequence diagrams</li>
      <li>Class diagrams</li>
      <li>State diagrams</li>
      <li>Gantt charts</li>
      <li>Pie charts</li>
      <li>User journey diagrams</li>
      <li>Entity relationship diagrams</li>
    </ul>
    <p className="mb-4">See the <a className="text-primary-600 underline" href="https://mermaid-js.github.io/mermaid/#/" target="_blank" rel="noopener noreferrer">Mermaid documentation</a> for more examples.</p>
    <h3 className="text-xl font-semibold mt-6 mb-2">FAQ</h3>
    <ul className="mb-4">
      <li><b>My diagram isn’t rendering?</b> Ensure your code block starts with <code> ```mermaid </code> and follows valid Mermaid syntax.</li>
      <li><b>Can I edit diagrams directly?</b> Not yet, but you can edit your Markdown and re-upload.</li>
      <li><b>How do I report bugs or request features?</b> Use the Issues tab on GitHub.</li>
    </ul>
    <h3 className="text-xl font-semibold mt-6 mb-2">Troubleshooting</h3>
    <ul className="mb-4">
      <li>Check the browser console for errors.</li>
      <li>Ensure your Markdown file contains valid Mermaid code blocks.</li>
    </ul>
    <p>Need more help? <a className="text-primary-600 underline" href="https://github.com/FalloutGhoulBusta/markdown-to-pdf/issues" target="_blank" rel="noopener noreferrer">Open an issue on GitHub</a>.</p>
  </div>
);

export default Help;
