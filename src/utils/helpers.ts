
/**
 * Helper utility functions for XCollaber website
 */

// Scroll reveal animation handler
export const initScrollReveal = () => {
  const revealElements = document.querySelectorAll('.reveal');
  
  const reveal = () => {
    for (let i = 0; i < revealElements.length; i++) {
      const elementTop = revealElements[i].getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        revealElements[i].classList.add('active');
      }
    }
  };
  
  window.addEventListener('scroll', reveal);
  // Initial check
  reveal();
  
  return () => {
    window.removeEventListener('scroll', reveal);
  };
};

// Form validation helper
export const validateEmail = (email: string): boolean => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// Debounce function for scroll events
export const debounce = <F extends (...args: any[]) => any>(
  func: F,
  wait: number
): ((...args: Parameters<F>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return (...args: Parameters<F>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
