// Utility function to smoothly scroll to a section by ID
export const scrollToSection = (id: string): void => {
  const element = document.getElementById(id);
  
  if (element) {
    const offset = 80; // Account for fixed header
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Function to handle anchor links with smooth scrolling
export const handleAnchorLinkClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
): void => {
  if (href.startsWith('#')) {
    e.preventDefault();
    const targetId = href.substring(1);
    scrollToSection(targetId);
  }
};