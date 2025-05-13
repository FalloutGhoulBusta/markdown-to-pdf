---
trigger: always_on
---

# AI Agent Rule File for Markdown to Mermaid Converter

## 1. Goal

The primary goal of this AI agent is to assist users in converting Markdown content containing Mermaid diagrams into visual representations. The agent should ensure a smooth and efficient conversion process, providing helpful feedback and addressing potential issues.

## 2. Core Behaviors

### 2.1. Input Handling

- **File Upload**:
  - When a user uploads a Markdown file, the agent should automatically parse the file content.
  - If the file is not a Markdown file, the agent should provide an error message.
- **Content Modification**:
  - The agent should monitor changes in the Markdown editor.
  - On content change, it should clear any previously rendered diagrams and prepare for a new conversion.

### 2.2. Conversion Process

- **Initiation**:
  - The agent should respond to a "Convert" command from the user.
  - Before conversion, it should validate that the Markdown content is not empty.
- **Mermaid Diagram Extraction**:
  - The agent should use the `parseMermaidFromMarkdown` function to extract Mermaid diagrams from the Markdown content.
- **Rendering**:
  - The agent should render the extracted diagrams using Mermaid.js.
  - If any diagram fails to render, the agent should display an error message, including the specific error from Mermaid.js.
- **Feedback**:
  - During the conversion process, the agent should display a loading indicator.
  - After conversion, it should display the rendered diagrams or an appropriate message if no diagrams were found.

### 2.3. User Interaction

- **Reset**:
  - The agent should respond to a "Reset" command by clearing the Markdown content, diagrams, and conversion state.
- **Example Loading**:
  - The agent should load example Markdown content when the user requests it.
- **Download**:
  - The agent should allow users to download individual diagrams as SVG files.

### 2.4. Error Handling

- **Invalid Markdown**:
  - If the Markdown content is invalid or does not contain Mermaid syntax, the agent should display a message indicating this.
- **Mermaid Rendering Errors**:
  - If Mermaid.js fails to render a diagram, the agent should display the error message in a user-friendly format.
- **File Handling Errors**:
  - If there are issues reading the uploaded file, the agent should display an appropriate error message.

## 3. Constraints

- **Performance**:
  - The agent should ensure that the conversion process is as fast as possible, providing quick feedback to the user.
- **Resource Usage**:
  - The agent should minimize resource usage to ensure smooth operation in the browser.
- **Security**:
  - The agent should sanitize any user-provided content to prevent XSS attacks or other security vulnerabilities.
- **Compatibility**:
  - The agent should be compatible with modern web browsers.

## 4. Knowledge Base

- **Mermaid.js**:
  - The agent should have a basic understanding of Mermaid.js syntax and capabilities.
- **Markdown**:
  - The agent should understand Markdown syntax for headings, lists, and code blocks.
- **React**:
  - The agent should be aware of React component lifecycle and state management.

## 5. Actions

- **Modify `src/components/ConverterApp.tsx`**:
  - Update state variables for managing Markdown content, diagrams, and conversion status.
  - Implement the `handleConvert` function to extract and render diagrams.
- **Modify `src/components/DiagramRenderer.tsx`**:
  - Handle Mermaid.js initialization and rendering.
  - Implement error handling for diagram rendering.
  - Implement the download SVG functionality.
- **Modify `src/components/FileUpload.tsx`**:
  - Handle file uploads and example loading.
  - Implement error handling for file reading.
- **Modify `src/utils/markdownParser.ts`**:
  - Ensure the `parseMermaidFromMarkdown` function correctly extracts Mermaid diagrams.
  - Implement checks for valid Mermaid syntax.

## 6. Example Scenarios

- **User uploads a valid Markdown file with Mermaid diagrams**:
  - The agent parses the file, extracts diagrams, renders them, and displays them to the user.
- **User uploads a Markdown file with invalid Mermaid syntax**:
  - The agent displays an error message indicating the invalid syntax.
- **User uploads a non-Markdown file**:
  - The agent displays an error message indicating that only Markdown files are supported.
- **User clicks the "Convert" button with empty Markdown content**:
  - The agent displays a message indicating that the content cannot be empty.

## 7. Continuous Improvement

- The agent should continuously monitor user feedback and adapt its behavior to improve the conversion process.
- The agent should be updated with new features and capabilities as they become available.
