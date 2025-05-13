# Help & Documentation

Welcome to the Markdown to Mermaid Converter!

## How to Use

1. **Upload a Markdown file**: Click the upload button and select a `.md` file from your computer.
2. **Convert**: The app will automatically extract and render any Mermaid diagrams found in your Markdown.
3. **Preview**: See your Markdown and diagrams side-by-side in real time.
4. **Download**: Save rendered diagrams as SVG files.

## Supported Mermaid Diagram Types

- **Flowcharts**
  ```mermaid
  graph TD
    A[Start] --> B{Is it a Markdown file?}
    B -->|Yes| C[Process Markdown]
    B -->|No| D[Show Error]
    C --> E[Extract Mermaid syntax]
    E --> F[Render diagrams]
    D --> G[End]
    F --> G
  ```
- **Sequence Diagrams**
  ```mermaid
  sequenceDiagram
    participant User
    participant App
    participant Mermaid
    User->>App: Upload Markdown
    App->>App: Parse Markdown
    App->>Mermaid: Extract diagram syntax
    Mermaid->>App: Return rendered diagram
    App->>User: Display diagram
  ```
- **Class Diagrams**
  ```mermaid
  classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
  ```
- **State Diagrams**
- **Gantt Charts**
- **Pie Charts**
- **User Journey Diagrams**
- **Entity Relationship Diagrams**

For more, see the [Mermaid documentation](https://mermaid-js.github.io/mermaid/#/).

## FAQ

**Q: My diagram isn’t rendering?**
- Make sure your code block starts with ```mermaid and follows valid Mermaid syntax.

**Q: Can I edit diagrams directly?**
- Not yet, but you can edit your Markdown and re-upload.

**Q: How do I report bugs or request features?**
- Please use the Issues tab on GitHub.

## Troubleshooting
- Check the browser console for errors.
- Make sure your Markdown file contains valid Mermaid code blocks.

## Need more help?
- Open an issue on GitHub or check the README for more info.
