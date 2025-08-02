'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/projects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './utils/scrollUtils';
import { Experience } from './components/sections/experiences';

// Import CSS files
import './styles/globals.css';
import './styles/animations.css';

export default function PersonalWebsite() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    // Delay initial animations slightly for better effect
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Set up scroll spy for active section tracking
  useEffect(() => {
    const handleScroll = useScrollSpy(setActiveSection);
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen overflow-hidden theme-transition ${
      isDarkMode 
        ? 'bg-gray-900 text-white' 
        : 'bg-gradient-to-br from-gray-50 to-white text-gray-900'
    }`}>
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className={`absolute inset-0 theme-transition ${
          isDarkMode 
            ? 'bg-gradient-to-br from-purple-900/20 via-gray-900 to-pink-900/20' 
            : 'bg-gradient-to-br from-purple-100/30 via-white to-pink-100/30'
        }`}></div>
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-bg-pulse theme-transition ${
          isDarkMode ? 'bg-purple-500/10' : 'bg-purple-300/20'
        }`}></div>
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-bg-pulse delay-1000 theme-transition ${
          isDarkMode ? 'bg-pink-500/10' : 'bg-pink-300/20'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-2xl animate-bg-ping theme-transition ${
          isDarkMode ? 'bg-blue-500/5' : 'bg-blue-300/10'
        }`}></div>
      </div>

      {/* Navigation */}
      <Navbar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isLoaded={isLoaded}
        isDarkMode={isDarkMode}
        onThemeToggle={toggleTheme}
      />

      {/* Hero Section */}
      <Hero 
        isVisible={isVisible}
        isLoaded={isLoaded}
        isDarkMode={isDarkMode}
        setActiveSection={setActiveSection}
      />

      {/* About Section */}
      <About isDarkMode={isDarkMode} />

      {/* Experience Section */}
      <Experience isDarkMode={isDarkMode} />

      {/* Projects Section */}
      <Projects isDarkMode={isDarkMode} />

      {/* Contact Section */}
      <Contact isDarkMode={isDarkMode} />

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}