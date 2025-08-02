'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Zap, Rocket, ChevronDown, ExternalLink, Sun, Moon } from 'lucide-react';

export default function PersonalWebsite() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Delay initial animations slightly for better effect
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsLoaded(true);
    }, 100);

    // Add custom CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fade-in-up {
        from {
          opacity: 0;
          transform: translateY(2rem);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes slide-in-left {
        from {
          opacity: 0;
          transform: translateX(-2.5rem);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes slide-in-right {
        from {
          opacity: 0;
          transform: translateX(2.5rem);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      .animate-fade-in-up {
        animation: fade-in-up 1s ease-out forwards;
      }

      .animate-slide-in-left {
        animation: slide-in-left 1s ease-out forwards;
      }

      .animate-slide-in-right {
        animation: slide-in-right 1s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      clearTimeout(timer);
      document.head.removeChild(style);
    };
  }, []);

  const scrollToSection = (sectionId: any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const projects = [
    {
      title: "AI Chat Bot",
      description: "Built with Python and TensorFlow, featuring natural language processing",
      tech: ["Python", "TensorFlow", "React"],
      link: "#"
    },
    {
      title: "Portfolio Dashboard",
      description: "Real-time data visualization dashboard with interactive charts",
      tech: ["Next.js", "D3.js", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Mobile Game",
      description: "Cross-platform mobile game built with React Native",
      tech: ["React Native", "Firebase", "TypeScript"],
      link: "#"
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Python", 
    "Node.js", "PostgreSQL", "AWS", "Docker", "Git"
  ];

  return (
    <div className={`min-h-screen overflow-hidden transition-colors duration-500 ${
      isDarkMode 
        ? 'bg-gray-900 text-white' 
        : 'bg-gradient-to-br from-gray-50 to-white text-gray-900'
    }`}>
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className={`absolute inset-0 transition-all duration-500 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-purple-900/20 via-gray-900 to-pink-900/20' 
            : 'bg-gradient-to-br from-purple-100/30 via-white to-pink-100/30'
        }`}></div>
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse transition-colors duration-500 ${
          isDarkMode ? 'bg-purple-500/10' : 'bg-purple-300/20'
        }`}></div>
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 transition-colors duration-500 ${
          isDarkMode ? 'bg-pink-500/10' : 'bg-pink-300/20'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-2xl animate-ping transition-colors duration-500 ${
          isDarkMode ? 'bg-blue-500/5' : 'bg-blue-300/10'
        }`}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg border-b transition-all duration-1000 ${
        isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${
        isDarkMode 
          ? 'bg-gray-900/20 border-purple-500/20' 
          : 'bg-white/30 border-purple-300/30'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className={`text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 delay-200 ${
              isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              Tahmina Fayezi
            </div>
            <div className={`hidden md:flex space-x-8 items-center transition-all duration-1000 delay-300 ${
              isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 ${
                    activeSection === item 
                      ? 'text-purple-400' 
                      : isDarkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-500'
                  }`}
                >
                  {item}
                </button>
              ))}
              
              {/* Theme Toggle Button */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-purple-500/10 hover:bg-purple-500/20 text-purple-400' 
                    : 'bg-purple-100 hover:bg-purple-200 text-purple-600'
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className={`text-center transition-all duration-1500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
        }`}>
          <div className={`mb-6 transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-10 -rotate-12'
          }`}>
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
              <div className={`w-full h-full rounded-full flex items-center justify-center transition-colors duration-500 ${
                isDarkMode ? 'bg-gray-900' : 'bg-white'
              }`}>
                <Code size={60} className="text-purple-400" />
              </div>
            </div>
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1200 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Hello, I'm
            </span>
            <br />
            <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Tahmina Fayezi</span>
          </h1>
          
          <p className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto transition-all duration-1200 delay-900 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            CS @ University at Buffalo & Tech Enthusiast
            <br />
            <span className="text-purple-400">Building the future, one line of code at a time</span>
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1200 delay-1100 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border border-purple-500 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          <div className={`animate-bounce transition-all duration-1000 delay-1300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}>
            <ChevronDown size={32} className="mx-auto text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-1000 opacity-0 translate-y-10 animate-fade-in-up">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="transition-all duration-1000 delay-200 opacity-0 -translate-x-10 animate-slide-in-left">
              <p className={`text-lg mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm a passionate developer who loves creating innovative solutions and bringing ideas to life through code. 
                With a strong foundation in modern web technologies, I enjoy tackling complex challenges and learning new skills.
              </p>
              <p className={`text-lg mb-8 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                When I'm not coding, you can find me exploring the latest tech trends, contributing to open source projects, 
                or experimenting with new frameworks and tools.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 bg-gradient-to-r rounded-full text-sm font-medium transition-all duration-300 opacity-0 translate-y-4 animate-fade-in-up ${
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
            
            <div className="relative transition-all duration-1000 delay-400 opacity-0 translate-x-10 animate-slide-in-right">
              <div className={`w-full h-96 bg-gradient-to-br rounded-2xl border flex items-center justify-center transition-colors duration-500 ${
                isDarkMode 
                  ? 'from-purple-900/30 to-pink-900/30 border-purple-500/20' 
                  : 'from-purple-50 to-pink-50 border-purple-200'
              }`}>
                <div className="text-center">
                  <Zap size={80} className="mx-auto mb-4 text-purple-400" />
                  <p className="text-purple-300 font-semibold">Always Learning</p>
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Always Growing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-1000 opacity-0 translate-y-10 animate-fade-in-up">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group bg-gradient-to-br rounded-2xl border p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl opacity-0 translate-y-8 animate-fade-in-up ${
                  isDarkMode 
                    ? 'from-purple-900/20 to-pink-900/20 border-purple-500/20 hover:border-purple-400/40 hover:shadow-purple-500/10' 
                    : 'from-purple-50 to-pink-50 border-purple-200 hover:border-purple-300 hover:shadow-purple-200/20'
                }`}
                style={{ animationDelay: `${200 + index * 150}ms`, animationFillMode: 'forwards' }}
              >
                <div className="mb-4">
                  <Rocket className="text-purple-400 mb-3" size={32} />
                  <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4>{project.description}</p>
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
                
                <a
                  href={project.link}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 transition-all duration-1000 opacity-0 translate-y-10 animate-fade-in-up">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          
          <p className={`text-xl mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-200 opacity-0 translate-y-8 animate-fade-in-up ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ready to collaborate or just want to say hello? I'd love to hear from you!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { icon: Mail, label: 'Email', href: 'mailto:tahmina.fayezi33@gmail.com' },
              { icon: Github, label: 'GitHub', href: 'https://github.com/tahminaf' },
              { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/tahmina-fayezi/' }
            ].map(({ icon: Icon, label, href }, index) => (
              <a
                key={label}
                href={href}
                className={`flex items-center space-x-3 px-6 py-4 bg-gradient-to-r rounded-xl border transition-all duration-300 transform hover:scale-105 hover:shadow-lg opacity-0 translate-y-8 animate-fade-in-up ${
                  isDarkMode 
                    ? 'from-purple-900/30 to-pink-900/30 border-purple-500/20 hover:border-purple-400/40 text-white hover:text-purple-400 hover:shadow-purple-500/25' 
                    : 'from-purple-50 to-pink-50 border-purple-200 hover:border-purple-300 text-gray-900 hover:text-purple-600 hover:shadow-purple-200/25'
                }`}
                style={{ animationDelay: `${400 + index * 150}ms`, animationFillMode: 'forwards' }}
              >
                <Icon size={24} />
                <span className="font-medium">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative z-10 border-t py-8 px-6 transition-colors duration-500 ${
        isDarkMode ? 'border-purple-500/20' : 'border-purple-200'
      }`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
            © 2025 Tahmina Fayezi. Built with React, Tailwind, and lots of 💜
          </p>
        </div>
      </footer>
    </div>
  );
}