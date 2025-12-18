'use client';

import React, { useState } from 'react';
import { Rocket, ChevronLeft, ChevronRight, Trophy, X } from 'lucide-react';
import { projects } from '../../data/portfolioData';

interface ProjectsProps {
  isDarkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedProjectTech, setSelectedProjectTech] = useState<string[] | null>(null);
  const [selectedProjectTitle, setSelectedProjectTitle] = useState<string>('');
  const projectsPerPage = 3;

  // Calculate which projects to show
  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < projectsPerPage; i++) {
      const index = (startIndex + i) % projects.length;
      visible.push({ ...projects[index], originalIndex: index });
    }
    return visible;
  };

  const nextProjects = () => {
    setStartIndex((prev) => (prev + projectsPerPage) % projects.length);
  };

  const prevProjects = () => {
    setStartIndex((prev) => (prev - projectsPerPage + projects.length) % projects.length);
  };

  const openTechModal = (tech: string[], title: string) => {
    setSelectedProjectTech(tech);
    setSelectedProjectTitle(title);
  };

  const closeTechModal = () => {
    setSelectedProjectTech(null);
    setSelectedProjectTitle('');
  };

  const visibleProjects = getVisibleProjects();
  
  // Check if we're at the end
  const isAtEnd = startIndex + projectsPerPage >= projects.length;
  const isAtStart = startIndex === 0;

  return (
    <section id="projects" className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-1000 opacity-0 translate-y-10 animate-fade-in-up">
          <span className="gradient-text">
            My Projects
          </span>
        </h2>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevProjects}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-3 rounded-full transition-all duration-300 transform hover:scale-110 focus-outline ${
              isAtStart && isDarkMode
                ? 'bg-gray-700/50 text-gray-500 border border-gray-600/30 cursor-default'
                : isAtStart && !isDarkMode
                ? 'bg-gray-200/50 text-gray-400 border border-gray-300 cursor-default'
                : isDarkMode 
                ? 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/30' 
                : 'bg-purple-100 hover:bg-purple-200 text-purple-700 border border-purple-200'
            }`}
            aria-label="Previous projects"
            disabled={isAtStart}
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={nextProjects}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-3 rounded-full transition-all duration-300 transform hover:scale-110 focus-outline ${
              isAtEnd && isDarkMode
                ? 'bg-gray-700/50 text-gray-500 border border-gray-600/30 cursor-default'
                : isAtEnd && !isDarkMode
                ? 'bg-gray-200/50 text-gray-400 border border-gray-300 cursor-default'
                : isDarkMode 
                ? 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/30' 
                : 'bg-purple-100 hover:bg-purple-200 text-purple-700 border border-purple-200'
            }`}
            aria-label="Next projects"
            disabled={isAtEnd}
          >
            <ChevronRight size={28} />
          </button>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-6 px-2 md:px-0">
            {visibleProjects.map((project, idx) => (
              <div
                key={`${project.originalIndex}-${idx}`}
                className={`bg-gradient-to-br rounded-2xl border p-6 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                  isDarkMode 
                    ? 'from-purple-900/20 to-pink-900/20 border-purple-500/20 hover:border-purple-400/40 hover:shadow-purple-500/10' 
                    : 'from-purple-50 to-pink-50 border-purple-200 hover:border-purple-300 hover:shadow-purple-200/20'
                }`}
              >
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-3">
                    {project.originalIndex === 0 ? (
                      <Trophy className="text-yellow-400" size={32} />
                    ) : (
                      <Rocket className="text-purple-400" size={32} />
                    )}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                </div>
                
                {/* Tech Stack Preview */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tech.slice(0, 3).map((tech) => (
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
                  {project.tech.length > 3 && (
                    <button
                      onClick={() => openTechModal(project.tech, project.title)}
                      className={`text-xs underline transition-colors duration-200 ${
                        isDarkMode 
                          ? 'text-purple-400 hover:text-purple-300' 
                          : 'text-purple-600 hover:text-purple-700'
                      }`}
                    >
                      View all {project.tech.length} technologies
                    </button>
                  )}
                </div>

                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm px-4 py-2 gradient-bg rounded-lg font-semibold text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 focus-outline"
                  >
                    <span>View on GitHub</span>
                    <Rocket size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* End of Content Indicator */}
          {isAtEnd && (
            <div className={`text-center mt-8 py-4 px-6 rounded-lg border ${
              isDarkMode 
                ? 'bg-purple-900/10 border-purple-500/20 text-purple-300' 
                : 'bg-purple-50 border-purple-200 text-purple-700'
            }`}>
              <p className="text-sm font-medium">
                🎉 You&apos;ve reached the end! That&apos;s all my projects (for now).
              </p>
            </div>
          )}

          {/* Navigation Hint */}
          <div className={`text-center mt-4 text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            {isAtEnd 
              ? 'All projects viewed'
              : `Showing ${startIndex + 1}-${Math.min(startIndex + projectsPerPage, projects.length)} of ${projects.length} projects`
            }
          </div>
        </div>
      </div>

      {/* Tech Stack Modal */}
      {selectedProjectTech && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeTechModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          
          {/* Modal */}
          <div 
            className={`relative max-w-2xl w-full rounded-2xl border p-8 shadow-2xl animate-fade-in-up ${
              isDarkMode 
                ? 'bg-gray-900 border-purple-500/30' 
                : 'bg-white border-purple-200'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeTechModal}
              className={`absolute top-4 right-4 p-2 rounded-lg transition-all duration-300 hover:scale-110 focus-outline ${
                isDarkMode 
                  ? 'bg-purple-500/10 hover:bg-purple-500/20 text-purple-300' 
                  : 'bg-purple-100 hover:bg-purple-200 text-purple-700'
              }`}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <h3 className={`text-2xl font-bold mb-6 pr-10 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {selectedProjectTitle} - Tech Stack
            </h3>

            <div className="flex flex-wrap gap-3">
              {selectedProjectTech.map((tech) => (
                <span
                  key={tech}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover-scale ${
                    isDarkMode 
                      ? 'bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:border-purple-400/50' 
                      : 'bg-purple-100 border border-purple-200 text-purple-700 hover:border-purple-300'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className={`mt-6 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Total: {selectedProjectTech.length} technologies
            </p>
          </div>
        </div>
      )}
    </section>
  );
};