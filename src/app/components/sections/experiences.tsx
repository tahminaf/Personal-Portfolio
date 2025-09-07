'use client';

import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ChevronRight, Users, BookOpen } from 'lucide-react';

interface ExperiencesProps {
  isDarkMode: boolean;
}

interface ExperienceItem {
  type: 'work' | 'education' | 'achievement' | 'clubs' | 'coursework';
  title?: string;
  degree?: string;
  company?: string;
  institution?: string;
  organization?: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
  skills?: string[];
  link?: string;
}

interface ExperienceCardProps {
  item: ExperienceItem;
  index: number;
  animationDirection?: string;
}

export const Experience: React.FC<ExperiencesProps> = ({ isDarkMode }) => {
    const experiences: ExperienceItem[] = [
        {
          type: 'work',
          title: 'Software Engineering Intern',
          company: 'M&T Bank',
          location: 'Buffalo, NY',
          period: 'June 2025- August 2025',
          description: 'Built full-stack web apps using Angular, ASP.NET Core, and SQL. Delivered 15+ API endpoints and collaborated with stakeholders to refine features. Worked in an Agile team to meet sprint goals.',
          achievements: [
            'Developed 15+ secure, scalable API endpoints.',
            'Refined features based on real-time user feedback.',
            'Contributed to 100% on-time delivery of sprint goals within Agile development team over 10-week internship.'
          ],
          skills: ['Angular', 'ASP .NET Core', 'T-SQL'],
          link: '#'
        },
        
      ];
    
      const education: ExperienceItem[] = [
        {
          type: 'education',
          degree: 'Bachelor of Science in Computer Science',
          institution: 'University at Buffalo',
          location: 'Buffalo, NY',
          period: '2022 - 2027 (Expected)',
          description: 'Focusing on software engineering, algorithms, and data structures. Active in computer science organizations and hackathons.',
          achievements: [
            'Dean\'s List: Fall 2023, Spring 2024, Fall 2024, Spring 2025',
            'GPA: 3.8/4.0'
          ],
          skills: ['Data Structures', 'Algorithms and Complexity', 'Systems Engineering', 'Computer Organization', 'Discrete Structures'],
          link: '#'
        }
      ];

      const clubs: ExperienceItem[] = [
        {
          type: 'clubs',
          title: 'Director of Partnerships',
          company: 'UB Forge',
          location: 'University at Buffalo',
          period: 'June 2025 – Present',
          description: 'Lead partnerships for UB Forge, a collective of ambitious student builders where ideas turn into action. Foster connections between engineers, artists, designers, and founders to build the next generation of innovative projects and startups together.',
          achievements: [
            'Connect students with UB alumni network in Silicon Valley and startup founders from top tech companies.',
            'Facilitate collaborations across majors and skill levels, from first projects to potential billion-dollar ideas.',
            'Create an inclusive launchpad environment where students transform from builders into leaders through community-driven innovation.'
          ],
          skills: ['Community Building', 'Cross-functional Collaboration', 'Alumni Relations', 'Startup Ecosystem Development'],
          link: '#'
        },
        
      ];
      
      const coursework: ExperienceItem[] = [
        {
          type: 'coursework',
          title: 'Interview Prep Course',
          company: 'Codepath',
          location: 'Remote',
          period: 'September 2024 – May 2025',
          description: 'Completed a rigorous software engineering interview prep course focused on data structures, algorithms, and coding strategies.',
          achievements: [
            'Implemented 10+ coding projects using 20+ data structures.',
            'Solved 30+ medium/hard LeetCode problems with efficient algorithms.',
            'Studied best practices for tackling common technical interview questions.'
          ],
          skills: ['Data Structures', 'Algorithms', 'Problem Solving', 'Technical Interviews'],
          link: '#'
        },
        
      ];

  const ExperienceCard: React.FC<ExperienceCardProps> = ({ item, index }) => (
    <div
      className={`group bg-gradient-to-br rounded-2xl border p-6 transition-all duration-300 transform ${
        isDarkMode 
          ? 'from-purple-900/20 to-pink-900/20 border-purple-500/20' 
          : 'from-purple-50 to-pink-50 border-purple-200'
      }`}
      style={{ animationDelay: `${200 + index * 150}ms`, animationFillMode: 'forwards' }}
    >
      {/* Icon and Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${
            isDarkMode ? 'bg-purple-500/20' : 'bg-purple-100'
          }`}>
            {item.type === 'work' && <Briefcase className="text-purple-400" size={24} />}
            {item.type === 'education' && <GraduationCap className="text-purple-400" size={24} />}
            {item.type === 'achievement' && <Award className="text-purple-400" size={24} />}
            {item.type === 'clubs' && <Users className="text-purple-400" size={24} />}
            {item.type === 'coursework' && <BookOpen className="text-purple-400" size={24} />}
          </div>
          <div>
            <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {item.title || item.degree}
            </h3>
            <p className="text-purple-400 font-semibold">
              {item.company || item.institution || item.organization}
            </p>
          </div>
        </div>
      </div>

      {/* Location and Period */}
      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
        <div className={`flex items-center space-x-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <MapPin size={16} />
          <span>{item.location}</span>
        </div>
        <div className={`flex items-center space-x-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <Calendar size={16} />
          <span>{item.period}</span>
        </div>
      </div>

      {/* Description */}
      <p className={`mb-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {item.description}
      </p>

      {/* Achievements */}
      {item.achievements && (
        <div className="mb-4">
          <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Key Achievements:
          </h4>
          <ul className="space-y-1">
            {item.achievements.map((achievement: string, i: number) => (
              <li key={i} className={`flex items-start space-x-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <ChevronRight size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Skills */}
      {item.skills && (
        <div className="flex flex-wrap gap-2">
          {item.skills.map((skill: string) => (
            <span
              key={skill}
              className={`px-3 py-1 rounded-full text-xs transition-all duration-300 hover-scale ${
                isDarkMode 
                  ? 'bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:border-purple-400/50' 
                  : 'bg-purple-100 border border-purple-200 text-purple-700 hover:border-purple-300'
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section id="experiences" className="relative z-10 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-1000 opacity-0 translate-y-10 animate-fade-in-up">
          <span className="gradient-text">
            My Journey
          </span>
        </h2>

        {/* Education */}
        <div className="mb-16">
          <h3 className={`text-2xl md:text-3xl font-bold mb-8 transition-all duration-1000 delay-300 opacity-0 translate-y-8 animate-fade-in-up ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="flex items-center space-x-2">
              <GraduationCap className="text-purple-400" size={28} />
              <span>Education</span>
            </span>
          </h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <ExperienceCard 
                key={`edu-${index}`} 
                item={edu} 
                index={index}
                animationDirection="left"
              />
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className={`text-2xl md:text-3xl font-bold mb-8 transition-all duration-1000 delay-500 opacity-0 translate-y-8 animate-fade-in-up ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="flex items-center space-x-2">
              <Briefcase className="text-purple-400" size={28} />
              <span>Work Experience</span>
            </span>
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard 
                key={`work-${index}`} 
                item={exp} 
                index={index}
                animationDirection={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </div>
        </div>

        {/* Clubs */}
        <div className="mb-16">
          <h3 className={`text-2xl md:text-3xl font-bold mb-8 transition-all duration-1000 delay-500 opacity-0 translate-y-8 animate-fade-in-up ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="flex items-center space-x-2">
              <Users className="text-purple-400" size={28} />
              <span>Leadership & Organizations</span>
            </span>
          </h3>
          <div className="space-y-8">
            {clubs.map((club, index) => (
              <ExperienceCard 
                key={`club-${index}`} 
                item={club} 
                index={index}
                animationDirection="left"
              />
            ))}
          </div>
        </div>

        {/* Relevant Coursework */}
        <div className="mb-16">
          <h3 className={`text-2xl md:text-3xl font-bold mb-8 transition-all duration-1000 delay-500 opacity-0 translate-y-8 animate-fade-in-up ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="flex items-center space-x-2">
              <BookOpen className="text-purple-400" size={28} />
              <span>Relevant Coursework</span>
            </span>
          </h3>
          <div className="space-y-8">
            {coursework.map((course, index) => (
              <ExperienceCard 
                key={`coursework-${index}`} 
                item={course} 
                index={index}
                animationDirection="left"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};