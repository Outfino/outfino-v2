import React, { useEffect, useRef, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { safeFromTo, initVisibilityFixes } from '../utils/gsapFixes';
import { useLanguage } from '../contexts/LanguageContext';
import animationManager from '../utils/animationManager';
import '../styles/Awards.scss';

gsap.registerPlugin(ScrollTrigger);

const Awards = () => {
  const trackRef = useRef(null);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { t } = useLanguage();

  const awards = useMemo(() => [
    {
      id: 1,
      title: t('awards.items.topStartup.title'),
      description: t('awards.items.topStartup.description'),
      year: t('awards.items.topStartup.year')
    },
    {
      id: 2,
      title: t('awards.items.innovation.title'),
      description: t('awards.items.innovation.description'),
      year: t('awards.items.innovation.year')
    },
    {
      id: 3,
      title: t('awards.items.bestDesign.title'),
      description: t('awards.items.bestDesign.description'),
      year: t('awards.items.bestDesign.year')
    }
  ], [t]);

  // Triple the awards for infinite scrolling
  const infiniteAwards = [...awards, ...awards, ...awards];

  const slideToDirection = (direction) => {
    if (isAnimating || !trackRef.current) return;
    setIsAnimating(true);

    const cardWidth = trackRef.current.querySelector('.award-card-item')?.offsetWidth || 400;
    const gap = 32;
    const slideDistance = cardWidth + gap;
    const totalWidth = (cardWidth + gap) * awards.length;
    
    let newPosition = currentPosition + (direction === 'left' ? slideDistance : -slideDistance);
    
    // Animate the slide
    gsap.to(trackRef.current, {
      x: newPosition,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        // Check if we need to reset position for infinite loop
        if (Math.abs(newPosition) >= totalWidth) {
          // Reset to the beginning smoothly
          newPosition = newPosition % totalWidth;
          gsap.set(trackRef.current, { x: newPosition });
        } else if (newPosition > 0) {
          // Reset to the end smoothly
          newPosition = newPosition - totalWidth;
          gsap.set(trackRef.current, { x: newPosition });
        }
        
        setCurrentPosition(newPosition);
        setIsAnimating(false);
      }
    });
  };

  useEffect(() => {
    // Force immediate visibility via CSS
    const section = document.querySelector('.awards-section');
    if (section) {
      section.style.opacity = '1';
      section.style.visibility = 'visible';
    }
    
    // Initialize visibility fixes
    initVisibilityFixes();
    
    // Set initial position to show middle set of awards
    if (trackRef.current) {
      const cardWidth = trackRef.current.querySelector('.award-card-item')?.offsetWidth || 400;
      const gap = 32;
      const totalWidth = (cardWidth + gap) * awards.length;
      const initialPosition = -totalWidth; // Start with middle set
      gsap.set(trackRef.current, { x: initialPosition });
      setCurrentPosition(initialPosition);
    }
    
    // Ensure elements are visible by default
    gsap.set(['.awards-section', '.awards-title', '.title-line', '.award-card-item'], {
      visibility: 'visible',
      opacity: 1,
      clearProps: 'transform'
    });
    
    // Title animation
    safeFromTo('.awards-title',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      {
        trigger: '.awards-section',
        start: 'top 80%'
      }
    );
    
    // Title line animation
    safeFromTo('.title-line',
      { scaleX: 0 },
      { scaleX: 1, duration: 1, delay: 0.5, ease: 'power3.out' },
      {
        trigger: '.awards-section',
        start: 'top 80%'
      }
    );
    
    // Award cards stagger animation
    safeFromTo('.award-card-item',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
      {
        trigger: '.awards-carousel-wrapper',
        start: 'top 85%'
      }
    );
    
    // Mark Awards component as animation-ready
    animationManager.markComponentReady('Awards');
    
    // Smooth badge scale on hover
    if (!('ontouchstart' in window)) {
      const badges = document.querySelectorAll('.award-badge');
      badges.forEach(badge => {
        badge.addEventListener('mouseenter', () => {
          gsap.to(badge, {
            scale: 1.15,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
        
        badge.addEventListener('mouseleave', () => {
          gsap.to(badge, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    // Auto-scroll functionality (optional)
    const autoScrollInterval = setInterval(() => {
      if (!isAnimating && document.visibilityState === 'visible') {
        slideToDirection('right');
      }
    }, 4000); // Auto-scroll every 4 seconds
    
    return () => {
      clearInterval(autoScrollInterval);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isAnimating]);

  return (
    <section className="awards-section">
      <div className="awards-container">
        <h2 className="awards-title">
          <span className="title-main">{t('awards.title')}</span>
          <span className="title-line"></span>
        </h2>
        
        <div className="awards-carousel-wrapper">
          <button 
            className={`scroll-btn scroll-btn-left ${isAnimating ? 'disabled' : ''}`}
            onClick={() => slideToDirection('left')}
            disabled={isAnimating}
            aria-label="Previous award"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="awards-viewport">
            <div className="awards-horizontal-track" ref={trackRef}>
              {infiniteAwards.map((award, index) => (
                <div key={`${award.id}-${index}`} className="award-card-item">
                  <div className="award-badge-section">
                    <img 
                      src="/assets/f6s-award.png" 
                      alt="Award" 
                      className="award-badge"
                    />
                  </div>
                  
                  <div className="award-content">
                    <h3 className="award-title">{award.title}</h3>
                    <p className="award-description">{award.description}</p>
                    <div className="award-footer">
                      <span className="award-year">{award.year}</span>
                      <a 
                        href="https://www.f6s.com/outfino" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="award-link"
                      >
                        <span>{t('awards.viewOnF6S')}</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className={`scroll-btn scroll-btn-right ${isAnimating ? 'disabled' : ''}`}
            onClick={() => slideToDirection('right')}
            disabled={isAnimating}
            aria-label="Next award"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Awards;