'use client';

import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { contactLinks } from '../../data/portfolioData';

interface ContactProps {
  isDarkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const iconMap = {
    Mail,
    Github,
    Linkedin
  };

  return (
    <section id="contact" className="relative z-10 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 transition-all duration-1000 opacity-0 translate-y-10 animate-fade-in-up">
          <span className="gradient-text">
            Let&apos;s Connect
          </span>
        </h2>
        
        <p className={`text-xl mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-200 opacity-0 translate-y-8 animate-fade-in-up ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          I&apos;d love to get to know you! Feel free to reach out ✨
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {contactLinks.map(({ icon, label, href }, index) => {
            const IconComponent = iconMap[icon as keyof typeof iconMap];
            
            return (
              <a
                key={label}
                href={href}
                className={`flex items-center space-x-3 px-6 py-4 bg-gradient-to-r rounded-xl border transition-all duration-300 transform hover:scale-105 hover:shadow-lg opacity-0 translate-y-8 animate-fade-in-up focus-outline hover-scale ${
                  isDarkMode 
                    ? 'from-purple-900/30 to-pink-900/30 border-purple-500/20 hover:border-purple-400/40 text-white hover:text-purple-400 hover:shadow-purple-500/25' 
                    : 'from-purple-50 to-pink-50 border-purple-200 hover:border-purple-300 text-gray-900 hover:text-purple-600 hover:shadow-purple-200/25'
                }`}
                style={{ animationDelay: `${400 + index * 150}ms`, animationFillMode: 'forwards' }}
              >
                <IconComponent size={24} />
                <span className="font-medium">{label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};