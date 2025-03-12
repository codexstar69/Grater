
// Mobile viewport utility to handle mobile browser quirks

// Fix for mobile viewport height issue (100vh includes address bar)
export function setMobileViewportHeight() {
  // Only run on client side
  if (typeof window === 'undefined') return;
  
  const setHeight = () => {
    // First we get the viewport height and we multiply it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  
  // Set the height initially
  setHeight();
  
  // We listen to the resize event (and orientation change through resize)
  window.addEventListener('resize', setHeight);
  
  // Return cleanup function
  return () => window.removeEventListener('resize', setHeight);
}

// Pause animations during scroll for better performance on mobile
export function optimizeScrollPerformance() {
  if (typeof window === 'undefined') return;
  
  let timeout: number;
  const body = document.body;
  
  const scrollHandler = () => {
    if (body.classList.contains('is-scrolling')) return;
    
    // Add class to body to indicate scrolling
    body.classList.add('is-scrolling');
    
    // Clear previous timeout
    clearTimeout(timeout);
    
    // Set timeout to remove class after scrolling stops
    timeout = window.setTimeout(() => {
      body.classList.remove('is-scrolling');
    }, 100);
  };
  
  window.addEventListener('scroll', scrollHandler, { passive: true });
  
  return () => window.removeEventListener('scroll', scrollHandler);
}
