'use client';

import React from 'react';
import { personalInfo } from '../../data/portfolioData';

interface FooterProps {
  isDarkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer className={`relative z-10 border-t py-8 px-6 theme-transition ${
      isDarkMode ? 'border-purple-500/20' : 'border-purple-200'
    }`}>
      <div className="max-w-6xl mx-auto text-center">
        <p className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
          © 2025 {personalInfo.name}. Built with React, Tailwind, and lots of 💗
        </p>
      </div>
    </footer>
  );
};