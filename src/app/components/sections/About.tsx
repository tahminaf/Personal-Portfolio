import React from 'react';
import { Zap } from 'lucide-react';
import { skills, personalInfo } from '../../data/portfolioData';

interface AboutProps {
  isDarkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <section id="about" className="relative z-10 py-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto overflow-x-hidden">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-1000 opacity-100 translate-y-0">
          <span className="gradient-text">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="transition-all duration-1000 delay-200 opacity-100 translate-x-0">
            <p className={`text-base sm:text-lg md:text-xl mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {personalInfo.aboutText.paragraph1}
            </p>
            <p className={`text-base sm:text-lg md:text-xl mb-8 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {personalInfo.aboutText.paragraph2}
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className={`px-4 py-2 bg-gradient-to-r rounded-full text-sm font-medium transition-all duration-300 opacity-100 translate-y-0 hover-scale ${
                    isDarkMode
                      ? 'from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-300 hover:border-purple-400/40'
                      : 'from-purple-100 to-pink-100 border border-purple-200 text-purple-700 hover:border-purple-300'
                  }`}
                  style={{ animationDelay: `${600 + index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="relative transition-all duration-1000 delay-400 opacity-100 translate-x-0">
            <div className="text-center">
              <img src="/purple.jpg" alt="picture of Tahmina Fayezi" className="w-full max-w-sm mx-auto rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
