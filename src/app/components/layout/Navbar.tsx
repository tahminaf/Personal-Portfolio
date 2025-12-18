'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../UI/ThemeToggle';
import { scrollToSection } from '../../utils/scrollUtils';
import { personalInfo } from '../../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isLoaded: boolean;
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeSection, 
  setActiveSection, 
  isLoaded, 
  isDarkMode, 
  onThemeToggle 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ['home', 'about', 'experiences', 'projects', 'contact'];

  const handleNavClick = (item: string) => {
    scrollToSection(item, setActiveSection);
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 glass-effect border-b theme-transition ${
        isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${
        isDarkMode 
          ? 'bg-gray-900/20 border-purple-500/20' 
          : 'bg-white/30 border-purple-300/30'
      }`}>
        <div className="max-w-12xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-2xl font-bold gradient-text transition-all duration-300 hover:scale-105 cursor-pointer focus-outline ${
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              {personalInfo.name}
            </button>
            
            {/* Desktop Navigation */}
            <div className={`hidden md:flex space-x-8 items-center transition-all duration-1000 delay-300 ${
              isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`capitalize transition-all duration-450 focus-outline scroll-indicator ${
                    activeSection === item 
                      ? 'text-purple-400 active' 
                      : isDarkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-500'
                  }`}
                >
                  {item}
                </button>
              ))}
              
              <ThemeToggle isDarkMode={isDarkMode} onToggle={onThemeToggle} />
            </div>

            {/* Mobile Menu Button */}
            <div className={`md:hidden flex items-center space-x-4 transition-all duration-1000 delay-300 ${
              isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <ThemeToggle isDarkMode={isDarkMode} onToggle={onThemeToggle} />
              <button
                onClick={toggleMobileMenu}
                className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-purple-500/10 hover:bg-purple-500/20 text-purple-400' 
                    : 'bg-purple-100 hover:bg-purple-200 text-purple-600'
                }`}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Mobile Menu */}
          <div className={`fixed top-20 right-4 left-4 glass-effect rounded-2xl border p-6 theme-transition animate-fade-in-up ${
            isDarkMode 
              ? 'bg-gray-900/95 border-purple-500/20' 
              : 'bg-white/95 border-purple-300/30'
          }`}>
            <div className="space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`block w-full text-left px-4 py-3 rounded-lg capitalize transition-all duration-300 transform hover:scale-105 opacity-0 translate-y-4 animate-fade-in-up ${
                    activeSection === item 
                      ? 'text-purple-400 bg-purple-500/10 active' 
                      : isDarkMode 
                        ? 'text-gray-300 hover:text-purple-400 hover:bg-purple-500/10' 
                        : 'text-gray-600 hover:text-purple-500 hover:bg-purple-100'
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`, 
                    animationFillMode: 'forwards' 
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};