import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { safeFromTo, initVisibilityFixes } from '../utils/gsapFixes';
import { useLanguage } from '../contexts/LanguageContext';
import animationManager from '../utils/animationManager';
import { companyInfo } from '../config/companyInfo';
import '../styles/AppDownload.scss';

gsap.registerPlugin(ScrollTrigger);

const AppDownload = () => {
  const { t, currentLanguage } = useLanguage();
  useEffect(() => {
    // Force immediate visibility via CSS
    const section = document.querySelector('.app-download');
    if (section) {
      section.style.opacity = '1';
      section.style.visibility = 'visible';
    }
    
    // Initialize visibility fixes
    initVisibilityFixes();
    
    // Ensure app download elements are visible
    gsap.set(['.app-download', '.app-download-title', '.app-download-description', '.app-store-button', '.app-download-visual .phone-mockup'], {
      opacity: 1,
      visibility: 'visible',
      clearProps: 'transform'
    });
    
    // Title animation
    safeFromTo('.app-download-title',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      {
        trigger: '.app-download',
        start: 'top 80%'
      }
    );
    
    // Description animation
    safeFromTo('.app-download-description',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.2 },
      {
        trigger: '.app-download',
        start: 'top 80%'
      }
    );
    
    // App store buttons animation
    safeFromTo('.app-store-button',
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, stagger: 0.15, delay: 0.4, ease: 'back.out(1.7)' },
      {
        trigger: '.app-download',
        start: 'top 75%'
      }
    );
    
    // Phone mockup animation
    safeFromTo('.app-download-visual .phone-mockup',
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
      {
        trigger: '.app-download',
        start: 'top 70%'
      }
    );
    
    // Continuous floating animation for phone
    gsap.to('.app-download-visual .phone-mockup', {
      y: -20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('.app-store-button');
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
    
    // Mark AppDownload component as animation-ready
    animationManager.markComponentReady('AppDownload');
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <section className="app-download">
      <div className="app-download-container">
        <div className="app-download-content">
          <h2 className="app-download-title">{t('appDownload.title')}</h2>
          <p className="app-download-description">
            {t('appDownload.description')}
          </p>
          
          <div className="app-download-buttons">
            <a 
              href={companyInfo.appStore.ios}
              target="_blank"
              rel="noopener noreferrer"
              className="app-store-button"
              aria-label="Download on the App Store"
            >
              <img 
                src={currentLanguage === 'hu' ? "/assets/get-apple-store-hu.png" : "/assets/get-apple-store.png"} 
                alt="Download on the App Store"
                className="app-store-img"
              />
            </a>
            
            <a 
              href={companyInfo.appStore.android}
              target="_blank"
              rel="noopener noreferrer"
              className="app-store-button"
              aria-label="Get it on Google Play"
            >
              <img 
                src={currentLanguage === 'hu' ? "/assets/get-google-play-hu.png" : "/assets/get-google-play.png"} 
                alt="Get it on Google Play"
                className="app-store-img"
              />
            </a>
          </div>
        </div>
        
        <div className="app-download-visual">
          <div className="phone-mockup">
            <img 
              src="/assets/scan.png" 
              alt="Outfino App"
              className="phone-screen"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;