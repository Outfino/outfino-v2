import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Default animation settings
const defaultEase = 'power3.out';
const defaultDuration = 1.2;

// Initialize GSAP settings
export const initAnimations = () => {
  // Set default ease
  gsap.defaults({ ease: defaultEase, duration: defaultDuration });
  
  // Update on window resize
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
  });
};

// Hero Section Animations
export const animateHero = () => {
  // Split title text for stagger effect
  const titleWords = document.querySelectorAll('.hero-title span, .hero-title');
  
  // Create main timeline
  const tl = gsap.timeline({ delay: 0.2 });
  
  // Fade in video background
  tl.from('.video-background', {
    opacity: 0,
    duration: 1.5,
    ease: 'power2.inOut'
  })
  
  // Title animation with word stagger
  .from('.hero-title', {
    y: 60,
    opacity: 0,
    duration: 1.2,
    stagger: 0.1,
    ease: 'power4.out'
  }, '-=1')
  
  // Subtitle fade in
  .from('.hero-subtitle', {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  }, '-=0.8')
  
  // CTA buttons slide up
  .from('.cta-button', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'back.out(1.7)'
  }, '-=0.6')
  
  // Style tips animation
  .from('.style-tip', {
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
  }, '-=0.5')
  
  // Scroll indicator
  .from('.scroll-indicator', {
    y: 20,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  }, '-=0.3');
  
  // Paint blobs continuous floating
  gsap.to('.hero-section .paint-blob', {
    y: 'random(-30, 30)',
    x: 'random(-20, 20)',
    rotation: 'random(-5, 5)',
    duration: 'random(15, 25)',
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    stagger: {
      each: 2,
      from: 'random'
    }
  });
  
  // Scroll indicator bounce
  gsap.to('.scroll-line', {
    scaleY: 1.3,
    y: 5,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  });
  
  // Parallax on scroll
  if (window.innerWidth > 768) {
    gsap.to('.video-background', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });
    
    gsap.to('.hero-content', {
      yPercent: -20,
      opacity: 0.3,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });
  }
};

// Features Section Animations
export const animateFeatures = () => {
  // Scan Section
  gsap.from('.scan-section .feature-heading', {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.scan-section',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
  
  gsap.from('.scan-section .feature-description', {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
      trigger: '.scan-section',
      start: 'top 80%'
    }
  });
  
  gsap.from('.scan-section .cta-button', {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.scan-section',
      start: 'top 80%'
    }
  });
  
  gsap.from('.scan-section .phone-mockup', {
    x: 100,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.scan-section',
      start: 'top 70%'
    }
  });
  
  // Analysis Section
  gsap.from('.analysis-section .feature-heading', {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.analysis-section',
      start: 'top 80%'
    }
  });
  
  gsap.from('.analysis-section .left-phone', {
    x: -80,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.analysis-section',
      start: 'top 70%'
    }
  });
  
  gsap.from('.analysis-section .right-phone', {
    x: 80,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
      trigger: '.analysis-section',
      start: 'top 70%'
    }
  });
  
  gsap.from('.style-tag', {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.style-tags',
      start: 'top 85%'
    }
  });
  
  // AI Section
  gsap.from('.ai-section .feature-heading', {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.ai-section',
      start: 'top 80%'
    }
  });
  
  gsap.from('.chat-message', {
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.chat-preview',
      start: 'top 85%'
    }
  });
  
  // AI Visualization entrance
  gsap.from('.ai-core', {
    scale: 0,
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.ai-visualization',
      start: 'top 70%'
    }
  });
  
  gsap.from('.particles .particle', {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    delay: 0.5,
    scrollTrigger: {
      trigger: '.ai-visualization',
      start: 'top 70%'
    }
  });
  
  // Paint blobs scale animation
  gsap.from('.feature-section .paint-blob', {
    scale: 0,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.features-container',
      start: 'top 60%'
    }
  });
};

// Continuous Animations
export const continuousAnimations = () => {
  // Phone mockups floating
  gsap.to('.phone-mockup', {
    y: -15,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    stagger: {
      each: 0.5,
      from: 'random'
    }
  });
  
  // AI rings rotation
  gsap.to('.ring-1', {
    rotation: 360,
    duration: 20,
    repeat: -1,
    ease: 'none'
  });
  
  gsap.to('.ring-2', {
    rotation: -360,
    duration: 30,
    repeat: -1,
    ease: 'none'
  });
  
  gsap.to('.ring-3', {
    rotation: 360,
    duration: 40,
    repeat: -1,
    ease: 'none'
  });
  
  // Particles floating
  gsap.to('.particle', {
    x: 'random(-50, 50)',
    y: 'random(-50, 50)',
    duration: 'random(3, 6)',
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    stagger: {
      each: 0.5,
      from: 'random'
    }
  });
  
  // Paint blobs morphing
  gsap.to('.features-container .paint-blob', {
    scale: 'random(0.9, 1.1)',
    x: 'random(-20, 20)',
    y: 'random(-20, 20)',
    rotation: 'random(-10, 10)',
    duration: 'random(8, 15)',
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    stagger: {
      each: 2,
      from: 'random'
    }
  });
  
  // Pulsing animation for icons
  gsap.to('.feature-icon.pulsing', {
    scale: 1.1,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });
};

// Button Hover Animations
export const initButtonAnimations = () => {
  const buttons = document.querySelectorAll('.cta-button, .streetwear-btn');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });
};

// Text Gradient Animation
export const animateGradientText = () => {
  gsap.to('.gradient-text', {
    backgroundPosition: '200% center',
    duration: 3,
    repeat: -1,
    ease: 'none'
  });
};

// Mobile Optimizations
export const optimizeForMobile = () => {
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    // Disable heavy animations on mobile
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.scrub) {
        trigger.disable();
      }
    });
    
    // Reduce particle count on mobile
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
      if (index > 2) {
        particle.style.display = 'none';
      }
    });
  }
};

// Initialize all animations
export const initAllAnimations = () => {
  initAnimations();
  animateHero();
  animateFeatures();
  continuousAnimations();
  initButtonAnimations();
  animateGradientText();
  optimizeForMobile();
  
  // Refresh ScrollTrigger after all animations are set
  ScrollTrigger.refresh();
};

// Cleanup function
export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  gsap.killTweensOf('*');
};