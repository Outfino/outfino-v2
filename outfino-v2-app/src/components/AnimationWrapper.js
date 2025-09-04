import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const AnimationWrapper = ({ children, delay = 0 }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Wait for all critical resources
    const checkReadiness = async () => {
      // Check if GSAP is ready
      if (typeof gsap === 'undefined') {
        setTimeout(checkReadiness, 100);
        return;
      }

      // Check if fonts are loaded
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }

      // Additional delay if specified
      if (delay > 0) {
        await new Promise(resolve => setTimeout(resolve, delay));
      }

      setIsReady(true);
    };

    checkReadiness();
  }, [delay]);

  return (
    <div className={`animation-wrapper ${isReady ? 'ready' : 'preparing'}`}>
      {children}
    </div>
  );
};

export default AnimationWrapper;