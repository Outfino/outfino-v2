import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for Intersection Observer
 * Triggers animations only when elements are in viewport
 */
export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      
      // Track if element has ever been visible
      if (entry.isIntersecting && !hasIntersected) {
        setHasIntersected(true);
      }
    }, observerOptions);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasIntersected, options]);

  return { elementRef, isIntersecting, hasIntersected };
};