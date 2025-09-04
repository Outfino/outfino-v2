import { gsap } from 'gsap';

// Helper function to safely animate elements with visibility fallback
export const safeFromTo = (selector, fromVars, toVars, scrollTriggerConfig = null) => {
  // First ensure elements are visible
  gsap.set(selector, { opacity: 1, visibility: 'visible' });
  
  // Create the animation config
  const animationConfig = {
    ...toVars,
    scrollTrigger: scrollTriggerConfig
  };
  
  // Use fromTo to ensure proper animation
  return gsap.fromTo(selector, fromVars, animationConfig);
};

// Helper to set initial visibility for all animated elements
export const ensureVisibility = () => {
  const animatedSelectors = [
    '.feature-heading',
    '.feature-description',
    '.cta-button',
    '.phone-mockup',
    '.style-tag',
    '.chat-message',
    '.ai-core',
    '.particle',
    '.paint-blob',
    '.feature-icon',
    '.video-background',
    '.hero-title',
    '.hero-subtitle',
    '.style-tip',
    '.scroll-indicator',
    '.award-item',
    '.app-download-content',
    '.support-content',
    '.footer',
    '.navigation'
  ];
  
  animatedSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
      gsap.set(selector, { 
        opacity: 1, 
        visibility: 'visible',
        clearProps: 'transform' // Clear any transform that might hide elements
      });
    }
  });
};

// Initialize visibility fixes
export const initVisibilityFixes = () => {
  // Run immediately
  ensureVisibility();
  
  // Run after a short delay to catch any late-rendered elements
  setTimeout(ensureVisibility, 100);
  
  // Run when DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureVisibility);
  }
  
  // Also listen for route changes (for SPAs)
  window.addEventListener('popstate', ensureVisibility);
};