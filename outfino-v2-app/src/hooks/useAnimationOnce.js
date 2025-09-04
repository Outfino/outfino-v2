import { useEffect, useRef } from 'react';

/**
 * Custom hook to ensure animations only run once
 * Prevents re-triggers on component re-renders
 */
export const useAnimationOnce = (animationFunction, dependencies = []) => {
  const hasRun = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Clear any pending timeouts on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasRun.current) {
      hasRun.current = true;
      
      // Small delay to ensure DOM is ready
      timeoutRef.current = setTimeout(() => {
        animationFunction();
      }, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  const reset = () => {
    hasRun.current = false;
  };

  return { reset };
};