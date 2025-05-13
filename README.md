# Markdown to Mermaid Converter

A modern web application that converts Markdown files into beautiful Mermaid diagrams. Built with React, TypeScript, and Tailwind CSS.

![MD to Mermaid](https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

## Features

- 📝 Upload Markdown files directly from your computer
- 🔄 Convert Markdown content to Mermaid diagrams in real-time
- 👀 Live preview of both Markdown and rendered diagrams
- 💾 Download generated diagrams as SVG files
- 🎨 Beautiful, responsive UI with theme toggle
- 🌙 Seamless dark mode and pure white light mode, with instant site-wide switching based on user preference
- ⚡ Fast and efficient processing

## Roadmap

Here's a list of planned features and improvements. Check them off as they're completed!

- [ ] Export diagrams as PNG, PDF, or copy SVG to clipboard
- [ ] Download the full Markdown with rendered diagrams as a PDF
- [ ] Add a live Mermaid code editor for direct diagram tweaking
- [ ] Syntax highlighting and real-time error feedback for Mermaid code
- [ ] Provide a gallery of common diagram templates users can insert and customize
- [ ] Save user-created diagrams for reuse
- [ ] Render Markdown preview alongside diagrams (side-by-side)
- [ ] Support for other code block visualizations (e.g., PlantUML, Graphviz)
- [ ] Generate shareable links for diagrams
- [ ] Allow users to comment on or annotate diagrams
- [ ] Add keyboard shortcuts for common actions
- [ ] Improve accessibility (ARIA labels, better color contrast)
- [ ] Let users choose Mermaid themes or customize diagram styles
- [ ] Allow resizing and rearranging diagrams in the UI
- [ ] Show detailed error messages for invalid Mermaid syntax
- [ ] Suggest corrections or highlight syntax errors in diagrams
- [ ] Integrate with cloud storage (Google Drive, Dropbox) for saving/loading Markdown files
- [ ] Add support for importing Markdown from URLs or GitHub repositories
- [ ] Add a help section with Mermaid syntax examples and usage tips
- [ ] Provide floating tooltips and onboarding for new users

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/md-to-mermaid-converter.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Click the "Select File" button or drag and drop your Markdown file
2. The file content will appear in the editor
3. Click "Convert" to generate Mermaid diagrams
4. Download individual diagrams using the download button

### Example Markdown

```markdown
# Project Overview

## Features
- User Authentication
- Data Processing
- API Integration

## Architecture
- Frontend (React)
- Backend (Node.js)
- Database (PostgreSQL)
```

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Mermaid.js
- Vite
- Lucide Icons

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Mermaid.js](https://mermaid.js.org/) for the diagram rendering engine
- [React](https://reactjs.org/) for the frontend framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide](https://lucide.dev/) for beautiful icons

## Support

If you find this project helpful, please give it a ⭐️ on GitHub!
