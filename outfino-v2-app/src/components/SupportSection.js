import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { safeFromTo, initVisibilityFixes } from '../utils/gsapFixes';
import { useLanguage } from '../contexts/LanguageContext';
import animationManager from '../utils/animationManager';
import Support from './Support';
import '../styles/SupportSection.scss';

gsap.registerPlugin(ScrollTrigger);

const SupportSection = () => {
  const { t } = useLanguage();
  useEffect(() => {
    // Initialize visibility fixes
    initVisibilityFixes();
    
    // Ensure support elements are visible
    gsap.set(['.support-title', '.support-form-wrapper', '.support-alternative', '.support-section .paint-splatter'], {
      opacity: 1,
      visibility: 'visible'
    });
    
    // Title animation
    safeFromTo('.support-title',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      {
        trigger: '.support-section',
        start: 'top 80%'
      }
    );
    
    // Form wrapper animation
    safeFromTo('.support-form-wrapper',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3 },
      {
        trigger: '.support-section',
        start: 'top 75%'
      }
    );
    
    // Alternative text animation
    safeFromTo('.support-alternative',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.5 },
      {
        trigger: '.support-section',
        start: 'top 70%'
      }
    );
    
    // Paint splatter animations
    safeFromTo('.support-section .paint-splatter',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, stagger: 0.2, ease: 'back.out(1.7)' },
      {
        trigger: '.support-section',
        start: 'top 85%'
      }
    );
    
    // Continuous floating for paint splatters
    gsap.to('.support-section .paint-splatter', {
      y: 'random(-20, 20)',
      x: 'random(-15, 15)',
      rotation: 'random(-5, 5)',
      duration: 'random(10, 15)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: {
        each: 2,
        from: 'random'
      }
    });
    
    // Mark SupportSection component as animation-ready
    animationManager.markComponentReady('SupportSection');
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <section id="support" className="support-section">
      <div className="paint-splatter paint-splatter-1"></div>
      <div className="paint-splatter paint-splatter-2"></div>
      <div className="paint-splatter paint-splatter-3"></div>
      
      <div className="support-container">
        <div className="support-content">
          <h2 className="support-title">
            <span className="title-text">{t('support.title')}</span>
            <span className="title-accent"></span>
          </h2>
          
          <div className="support-form-wrapper">
            <Support />
          </div>
          
          <div className="support-alternative">
            <p className="alternative-text">
              {t('support.alternativeText')}{' '}
              <a href="mailto:support@outfino.com" className="email-link">
                support@outfino.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;