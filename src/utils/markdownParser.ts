/**
 * Parses Markdown content and extracts Mermaid diagram syntax.
 * Looks for code blocks with the 'mermaid' language identifier.
 * 
 * @param markdownContent - The Markdown content to parse
 * @returns An array of extracted Mermaid diagram strings
 */
export function parseMermaidFromMarkdown(markdownContent: string): string[] {
  if (!markdownContent) return [];

  // Regular expression to match mermaid code blocks
  const mermaidBlockRegex = /```\s*mermaid\s*\n([\s\S]*?)```/g;
  const diagrams: string[] = [];
  let match;

  // First check for existing mermaid blocks
  while ((match = mermaidBlockRegex.exec(markdownContent)) !== null) {
    if (match[1]?.trim()) {
      diagrams.push(match[1].trim());
    }
  }

  // If we found existing mermaid diagrams, return them
  if (diagrams.length > 0) {
    return diagrams;
  }

  // If no existing mermaid diagrams found, convert the content to a flowchart
  const lines = markdownContent.split('\n');
  let flowchart = ['graph TD'];
  let lastNodeId = '';
  let nodeCounter = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Process headings
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2];
      const nodeId = `node${++nodeCounter}`;
      flowchart.push(`    ${nodeId}["${text}"]`);
      
      // Connect to previous node of higher level
      if (lastNodeId && level > 1) {
        flowchart.push(`    ${lastNodeId} --> ${nodeId}`);
      }
      lastNodeId = nodeId;
      continue;
    }

    // Process list items
    const listMatch = line.match(/^[\s]*[-*+]\s+(.+)$/);
    if (listMatch) {
      const nodeId = `node${++nodeCounter}`;
      flowchart.push(`    ${nodeId}["${listMatch[1]}"]`);
      if (lastNodeId) {
        flowchart.push(`    ${lastNodeId} --> ${nodeId}`);
      }
      lastNodeId = nodeId;
    }
  }

  // Only return the converted flowchart if we actually created nodes
  if (flowchart.length > 1) {
    diagrams.push(flowchart.join('\n'));
  }

  return diagrams;
}

/**
 * Checks if the given content contains valid Mermaid syntax.
 * 
 * @param content - The content to check
 * @returns True if valid Mermaid syntax is detected
 */
export function containsMermaidSyntax(content: string): boolean {
  if (!content) return false;
  
  // Simple check for common Mermaid diagram types
  const mermaidPatterns = [
    /^graph\s+[TBLR]?[DRLUD]?\s/m,    // Flowcharts
    /^sequenceDiagram/m,               // Sequence diagrams
    /^classDiagram/m,                  // Class diagrams
    /^stateDiagram/m,                  // State diagrams
    /^gantt/m,                         // Gantt charts
    /^pie/m,                           // Pie charts
    /^journey/m,                       // User journey
    /^erDiagram/m                      // Entity Relationship
  ];
  
  return mermaidPatterns.some(pattern => pattern.test(content));
}