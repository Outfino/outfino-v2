import React, { useEffect, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { safeFromTo, initVisibilityFixes } from '../utils/gsapFixes';
import { useLanguage } from '../contexts/LanguageContext';
import animationManager from '../utils/animationManager';
import '../styles/Awards.scss';

gsap.registerPlugin(ScrollTrigger);

const Awards = () => {
  const { t } = useLanguage();

  const awards = useMemo(() => [
    {
      id: 1,
      title: t('awards.items.topStartup.title'),
      description: t('awards.items.topStartup.description'),
      year: t('awards.items.topStartup.year'),
      logo: '/assets/f6s-award.png'
    },
    {
      id: 2,
      title: t('awards.items.innovation.title'),
      description: t('awards.items.innovation.description'),
      year: t('awards.items.innovation.year'),
      logo: '/assets/f6s-fashion-award.png'
    }
  ], [t]);

  useEffect(() => {
    // Force immediate visibility via CSS
    const section = document.querySelector('.awards-section');
    if (section) {
      section.style.opacity = '1';
      section.style.visibility = 'visible';
    }
    
    // Initialize visibility fixes
    initVisibilityFixes();
    
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
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' },
      {
        trigger: '.awards-grid',
        start: 'top 85%'
      }
    );
    
    // Mark Awards component as animation-ready
    animationManager.markComponentReady('Awards');
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="awards" className="awards-section">
      <div className="awards-container">
        <h2 className="awards-title">
          <span className="title-main">{t('awards.title')}</span>
          <span className="title-line"></span>
        </h2>
        
        <div className="awards-grid">
          {awards.map((award) => (
            <div key={award.id} className="award-card-item">
              <div className="award-badge-section">
                <img 
                  src={award.logo} 
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
    </section>
  );
};

export default Awards;