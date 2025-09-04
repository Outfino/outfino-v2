import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

class AnimationManager {
  constructor() {
    this.initialized = false;
    this.animations = new Map();
    this.cleanupFunctions = [];
    this.componentReadiness = new Map();
    this.readyCallbacks = [];
    this.allComponentsReady = false;
  }

  // Register an animation to prevent duplicates
  register(key, animationFn) {
    if (this.animations.has(key)) {
      console.warn(`Animation ${key} already registered, skipping...`);
      return false;
    }
    this.animations.set(key, animationFn);
    return true;
  }

  // Run a registered animation once
  run(key, ...args) {
    const animationFn = this.animations.get(key);
    if (animationFn && !this.animations.get(`${key}_executed`)) {
      this.animations.set(`${key}_executed`, true);
      const cleanup = animationFn(...args);
      if (cleanup && typeof cleanup === 'function') {
        this.cleanupFunctions.push(cleanup);
      }
      return true;
    }
    return false;
  }

  // Check if an animation has been executed
  hasRun(key) {
    return this.animations.get(`${key}_executed`) === true;
  }

  // Kill all animations and clear ScrollTriggers
  cleanup() {
    // Kill all GSAP tweens
    gsap.killTweensOf('*');
    
    // Kill all ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    // Run cleanup functions
    this.cleanupFunctions.forEach(fn => fn());
    
    // Clear the maps
    this.animations.clear();
    this.cleanupFunctions = [];
    this.initialized = false;
  }

  // Refresh ScrollTrigger instances
  refresh() {
    ScrollTrigger.refresh();
  }

  // Batch ScrollTrigger creation for better performance
  batchScrollTriggers(triggers) {
    // Disable refreshing during batch creation
    ScrollTrigger.config({ autoRefreshEvents: false });
    
    triggers.forEach(config => {
      ScrollTrigger.create(config);
    });
    
    // Re-enable and refresh once
    ScrollTrigger.config({ autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load,resize' });
    ScrollTrigger.refresh();
  }

  // Debounce function for resize events
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Setup optimized resize handler
  setupResizeHandler() {
    const debouncedRefresh = this.debounce(() => {
      ScrollTrigger.refresh();
    }, 250);

    window.addEventListener('resize', debouncedRefresh);
    
    return () => {
      window.removeEventListener('resize', debouncedRefresh);
    };
  }

  // Register expected components
  registerComponent(componentName) {
    this.componentReadiness.set(componentName, false);
  }

  // Mark a component as ready
  markComponentReady(componentName) {
    this.componentReadiness.set(componentName, true);
    this.checkAllComponentsReady();
  }

  // Check if all components are ready
  checkAllComponentsReady() {
    const allReady = Array.from(this.componentReadiness.values()).every(ready => ready);
    if (allReady && !this.allComponentsReady) {
      this.allComponentsReady = true;
      this.readyCallbacks.forEach(callback => callback());
      this.readyCallbacks = [];
    }
  }

  // Add callback for when all animations are ready
  onAllReady(callback) {
    if (this.allComponentsReady) {
      callback();
    } else {
      this.readyCallbacks.push(callback);
    }
  }

  // Reset readiness state
  resetReadiness() {
    this.componentReadiness.clear();
    this.readyCallbacks = [];
    this.allComponentsReady = false;
  }
}

// Create singleton instance
const animationManager = new AnimationManager();

// Setup global error handler for GSAP
gsap.config({
  nullTargetWarn: false, // Don't warn about missing targets
  trialWarn: false
});

// Export singleton
export default animationManager;