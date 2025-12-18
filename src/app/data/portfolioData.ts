export interface Project {
    title: string;
    description: string;
    tech: string[];
    link: string;
    links?: { label: string; url: string }[]; // Optional array for multiple links
  }
  
  export interface ContactLink {
    icon: string;
    label: string;
    href: string;
  }
  
  export const projects: Project[] = [
    {
      title: "EASE - Exercise App",
      description: "EASE - known as Enhanced Arthritis Support and Exercise, best known for winning the AI/ML track at UB Hacking 2025! Using computer vision, users can complete arthritis exercises with real-time form monitoring. There is also a RAG-based voice AI agent that allows users to navigate the website and learn all things arthritis!",
      tech: ["React", "Node.js", "Express.js", "Firebase", "MediaPipe", "Gemini AI", "ElevenLabs", "Tailwind CSS"],
      link: "https://devpost.com/software/eas-e",
      links: [
        { label: "View on Devpost", url: "https://devpost.com/software/eas-e" },
        { label: "View on GitHub", url: "https://github.com/mafruhamanal/ease" }
      ]
    },
    {
      title: "StudySync",
      description: "StudySync - your all-in-one productivity platform for students, designed to eliminate the chaos of scattered notes and deadlines! This web app supports notes, tasks, and schedules across 5 content types with daily reminders and real-time search functionality. With Firebase powering the backend, your study life stays seamlessly synchronized across all devices!",
      tech: ["React", "TypeScript", "Next.js", "Firebase", "Tailwind CSS"],
      link: "https://github.com/tahminaf/StudySync"
    },
    {
      title: "Super Hero Catalog",
      description: "Super Hero Catalog - a comprehensive full-stack application showcasing over 4000+ superhero films with dynamic search and rating capabilities! Users can rate their favorite movies, discover hidden gems, and explore a vast database of superhero content. Built with secure JWT authentication and bcrypt hashing to keep your superhero preferences safe and personalized!",
      tech: ["React", "TypeScript", "Spring Boot", "Java", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Personal Portfolio",
      description: "Personal Portfolio - the website you're exploring right now, built from scratch to showcase my projects and skills! Features smooth animations, full dark mode support, and a completely responsive design that looks great on any device. Deployed on Vercel with Next.js and Tailwind CSS for optimal performance and modern aesthetics!",
      tech: ["React", "Next.js", "Tailwind CSS"],
      link: "https://github.com/tahminaf/Personal-Portfolio"
    }
  ];
  
  export const skills: string[] = [
    "Python", "Java", "C", "C#", "MIPS Assembly" ,"TypeScript", "React", "Angular", "Next.js", "T-SQL", ".NET", "JavaScript", "VS Code", "Visual Studio", "SSMS", "Git", "Canva", "Latex"
  ];
  
  export const contactLinks = [
    { 
      icon: 'Mail', 
      label: 'Email', 
      href: 'mailto:tahmina.fayezi33@gmail.com' 
    },
    { 
      icon: 'Github', 
      label: 'GitHub', 
      href: 'https://github.com/tahminaf' 
    },
    { 
      icon: 'Linkedin', 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/tahmina-fayezi/' 
    }
    // ,
    // { 
    //     icon: 'Download My Resume', 
    //     label: 'Resume', 
    //     href: 'https://github.com/tahminaf' 
    //   }
  ];

  
  export const personalInfo = {
    name: "Tahmina Fayezi",
    title: "CS @ University at Buffalo & Tech Lover",
    subtitle: "Learning more about my passion, one line of code at a time",
    aboutText: {
      paragraph1: "I'm currently studying Computer Science as a University Honors College student at UB with a concentration in software systems. I love coding, and I love to learn new things about the world of tech!",
      paragraph2: "When I'm not coding, I love reading, photography, and traveling!"
    
  }

  
  };