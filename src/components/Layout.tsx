import React from 'react';
import { Github } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-10 bg-white/70 backdrop-blur-md border-b border-neutral-200 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-primary-500 text-white w-8 h-8 flex items-center justify-center rounded-lg">
              <span className="font-bold">M</span>
            </div>
            <h1 className="text-xl font-bold text-neutral-900">
              <span className="text-primary-500">MD</span> to Mermaid
            </h1>
          </div>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
            aria-label="GitHub Repository"
          >
            <Github size={20} />
          </a>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto px-4 py-6">
        {children}
      </main>
      
      <footer className="bg-neutral-100 border-t border-neutral-200 py-4">
        <div className="container mx-auto px-4 text-sm text-neutral-600">
          <p className="text-center">
            &copy; {new Date().getFullYear()} MD to Mermaid Converter. Built with React and Mermaid.js
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;