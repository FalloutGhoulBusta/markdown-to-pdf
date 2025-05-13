import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

// Simple two-state dark mode toggle
const DarkModeToggle: React.FC = () => {
  // Init state based on localStorage first, system preference second
  const [isDark, setIsDark] = useState(false);
  
  // On component mount, check if there's a stored preference
  useEffect(() => {
    // Check localStorage first
    const storedPreference = localStorage.getItem('theme');
    if (storedPreference === 'dark') {
      setIsDark(true);
      applyDarkMode();
    } else if (storedPreference === 'light') {
      setIsDark(false);
      applyLightMode();
    } else {
      // No stored preference, use system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
      prefersDark ? applyDarkMode() : applyLightMode();
    }
  }, []);
  
  // Apply dark mode styling
  const applyDarkMode = () => {
    document.documentElement.classList.add('dark');
    
    // Direct style targeting for consistent dark mode
    const elements = document.querySelectorAll('body, .card, header, main, footer');
    elements.forEach(el => {
      if (el instanceof HTMLElement) {
        if (el.tagName === 'BODY') {
          el.style.backgroundColor = '#171717'; // neutral-900
          el.style.color = '#f5f5f5';
        } else {
          el.style.backgroundColor = '#262626'; // neutral-800
          el.style.borderColor = '#404040'; // neutral-700
        }
      }
    });

    // Set text colors
    const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, p, span:not(.text-primary-500), a:not(.text-primary-600)');
    textElements.forEach(el => {
      if (el instanceof HTMLElement) {
        el.style.color = '#f5f5f5';
      }
    });

    localStorage.setItem('theme', 'dark');
  };
  
  // Apply light mode styling
  const applyLightMode = () => {
    document.documentElement.classList.remove('dark');
    
    // Clear all directly applied styles
    const elements = document.querySelectorAll('body, .card, header, main, footer, h1, h2, h3, h4, h5, p, span, a');
    elements.forEach(el => {
      if (el instanceof HTMLElement) {
        if (el.tagName === 'BODY') {
          el.style.backgroundColor = '#ffffff';
          el.style.color = '#171717';
        } else {
          el.style.backgroundColor = '';
          el.style.borderColor = '';
          el.style.color = '';
        }
      }
    });
    
    // Force white background on main sections
    const mainElements = document.querySelectorAll('header, main, footer');
    mainElements.forEach(el => {
      if (el instanceof HTMLElement) {
        el.style.backgroundColor = '#ffffff';
      }
    });

    localStorage.setItem('theme', 'light');
  };

  // Toggle between only two states
  const toggleDarkMode = () => {
    if (isDark) {
      setIsDark(false);
      applyLightMode();
    } else {
      setIsDark(true);
      applyDarkMode();
    }
  };

  return (
    <button
      className={`ml-4 p-2 rounded-lg border transition-colors cursor-pointer 
                ${isDark 
                  ? 'bg-neutral-800 border-neutral-700 text-neutral-200 hover:bg-neutral-700' 
                  : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100'}`}
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun size={18} className="text-yellow-400" /> 
      ) : (
        <Moon size={18} className="text-neutral-700" />
      )}
    </button>
  );
};

export default DarkModeToggle;
