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
      title: "Personal Portfolio",
      description: "Built with Vercel, displays all of my accomplishments, including work experience, projects, and my skillset. Fully interactive and dynamic!",
      tech: ["React", "Next. JS", "Tailwind CSS"],
      link: "https://github.com/tahminaf/Personal-Portfolio"
    },
    {
      title: "Super Hero Catalog",
      description: "Developed a full-stack web app to showcase over 2000 superhero movies, integrating search features for streamlined content discovery.",
      tech: ['React', 'Spring Boot', 'Java', 'PostgreSQL', 'Javascript'],
      link: "#"
    },
    {
      title: "StudySync",
      description: "Created a study planner, similar to Notion, to organize my schedule. Not only was the schedule fully dynamic, but it can also allow me to track all of my classes!",
      tech: ["React", "Next. JS", "Tailwind CSS"],
      link: "#"
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