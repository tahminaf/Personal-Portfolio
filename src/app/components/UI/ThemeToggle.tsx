'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 focus-outline ${
        isDarkMode 
          ? 'bg-purple-500/10 hover:bg-purple-500/20 text-purple-400' 
          : 'bg-purple-100 hover:bg-purple-200 text-purple-600'
      }`}
      aria-label="Toggle theme"
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};