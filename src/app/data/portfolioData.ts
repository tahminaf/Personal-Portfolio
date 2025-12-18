export interface Project {
    title: string;
    description: string;
    tech: string[];
    link: string;
  }
  
  export interface ContactLink {
    icon: string;
    label: string;
    href: string;
  }
  
  export const projects: Project[] = [
    {
      title: "EASE - Exercise App",
      description: "This one's special - it won Best AI/ML Hack at UB Hacking 2025! I built it to help people with arthritis stay active. It uses your phone camera to watch your form while you exercise and gives you real-time feedback through voice. Think of it as your encouraging workout buddy that never gets tired!",
      tech: ["React", "Node.js", "Express.js", "Firebase", "MediaPipe", "Gemini AI", "ElevenLabs", "Tailwind CSS", "Framer Motion"],
      link: "https://github.com/mafruhamanal/ease"
    },
    {
      title: "StudySync",
      description: "I made this because I was drowning in sticky notes and random docs everywhere. Now I can keep all my study stuff - notes, tasks, schedules - in one place. It syncs across all my devices thanks to Firebase, so I can study anywhere without losing track of things.",
      tech: ["React", "TypeScript", "Next.js", "Firebase", "Tailwind CSS"],
      link: "https://github.com/tahminaf/StudySync"
    },
    {
      title: "Super Hero Catalog",
      description: "Ever wanted to browse through thousands of superhero movies without getting lost? That's what this is for! You can rate your favorites, see what others think, and discover movies you might've missed. I built it with secure authentication so your superhero opinions stay yours.",
      tech: ["React", "TypeScript", "Spring Boot", "Java", "PostgreSQL", "JWT"],
      link: "#"
    },
    {
      title: "Personal Portfolio",
      description: "You're looking at it right now! I wanted a clean, modern space to show what I've been working on. It's got smooth animations, dark mode (because who doesn't love dark mode?), and it's fully responsive. Built it from scratch and deployed on Vercel.",
      tech: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
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