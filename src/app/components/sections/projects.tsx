'use client';

import React from 'react';
import { Rocket, ExternalLink } from 'lucide-react';
import { projects } from '../../data/portfolioData';

interface ProjectsProps {
  isDarkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  return (
    <section id="projects" className="relative z-10 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-1000 opacity-0 translate-y-10 animate-fade-in-up">
          <span className="gradient-text">
            My Projects
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-gradient-to-br rounded-2xl border p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl opacity-0 translate-y-8 animate-fade-in-up hover-scale ${
                isDarkMode 
                  ? 'from-purple-900/20 to-pink-900/20 border-purple-500/20 hover:border-purple-400/40 hover:shadow-purple-500/10' 
                  : 'from-purple-50 to-pink-50 border-purple-200 hover:border-purple-300 hover:shadow-purple-200/20'
              }`}
              style={{ animationDelay: `${200 + index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <div className="mb-4">
                <Rocket className="text-purple-400 mb-3" size={32} />
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4>
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-xs ${
                      isDarkMode 
                        ? 'bg-purple-500/10 border border-purple-500/30 text-purple-300' 
                        : 'bg-purple-100 border border-purple-200 text-purple-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};