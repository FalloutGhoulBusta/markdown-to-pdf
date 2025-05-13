import React from 'react';
import { Github } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-900 transition-colors">
      <header className="sticky top-0 z-10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-700 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <a href="/" className="focus:outline-none">
              <div className="bg-primary-500 text-white w-8 h-8 flex items-center justify-center rounded-lg hover:opacity-80 transition-opacity">
                <span className="font-bold">M</span>
              </div>
            </a>
            <h1 className="text-xl font-bold text-neutral-900 dark:text-white">
              <span className="text-primary-500">MD to Mermaid</span>
            </h1>
            <a href="/help" className="ml-6 text-primary-600 dark:text-primary-400 hover:underline text-base">Help</a>
            <DarkModeToggle />
          </div>
          <a 
            href="https://github.com/FalloutGhoulBusta/markdown-to-pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
            aria-label="GitHub Repository"
          >
            <Github size={20} />
          </a>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto px-4 py-6">
        {children}
      </main>
      
      <footer className="bg-neutral-100 dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700 py-4">
        <div className="container mx-auto px-4 text-sm text-neutral-600 dark:text-neutral-400">
          <p className="text-center">
            &copy; {new Date().getFullYear()} MD to Mermaid Converter. Built with React and Mermaid.js
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;