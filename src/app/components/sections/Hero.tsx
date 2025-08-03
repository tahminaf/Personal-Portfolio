'use client';

import React from 'react';
import { Code, ChevronDown } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollUtils';
import { personalInfo } from '../../data/portfolioData';

interface HeroProps {
  isVisible: boolean;
  isLoaded: boolean;
  isDarkMode: boolean;
  setActiveSection: (section: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ isVisible, isLoaded, isDarkMode, setActiveSection }) => {
  return (
    <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-6">
      <div className={`text-center transition-all duration-1500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
      }`}>
        <div className={`mb-6 transition-all duration-1000 delay-500 ${
          isLoaded ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-10 -rotate-12'
        }`}>
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
            <div className={`w-full h-full rounded-full flex items-center justify-center theme-transition ${
              isDarkMode ? 'bg-gray-900' : 'bg-white'
            }`}>
              <Code size={60} className="text-purple-400" />
            </div>
          </div>
        </div>
        
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1200 delay-700 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="gradient-text">
            Hey! I&apos;m
          </span>
          <br />
          <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>{personalInfo.name}</span>
        </h1>
        
        <p className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto transition-all duration-1200 delay-900 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {personalInfo.title}
          <br />
          <span className="text-purple-400">{personalInfo.subtitle}</span>
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1200 delay-1100 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button
            onClick={() => scrollToSection('projects', setActiveSection)}
            className="px-8 py-4 gradient-bg rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 focus-outline"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact', setActiveSection)}
            className="px-8 py-4 border border-purple-500 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105 focus-outline"
          >
            Contact Me
          </button>
        </div>

        <div className={`animate-bounce transition-all duration-1000 delay-1300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}>
          <ChevronDown size={32} className="mx-auto text-purple-400" />
        </div>
      </div>
    </section>
  );
};