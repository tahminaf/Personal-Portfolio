export const scrollToSection = (sectionId: string, setActiveSection?: (section: string) => void) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (setActiveSection) {
        setActiveSection(sectionId);
      }
    }
  };
  
  export const getActiveSection = (): string => {
    const sections = ['home', 'about', 'experiences', 'projects', 'contact'];
    const currentSection = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });
    
    return currentSection || 'home';
  };
  
  export const useScrollSpy = (setActiveSection: (section: string) => void) => {
    const handleScroll = () => {
      const activeSection = getActiveSection();
      setActiveSection(activeSection);
    };
  
    return handleScroll;
  };