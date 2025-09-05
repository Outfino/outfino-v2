import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { safeFromTo, initVisibilityFixes } from '../utils/gsapFixes';
import { useLanguage } from '../contexts/LanguageContext';
import animationManager from '../utils/animationManager';
import Partners from './Partners';
import '../styles/Features.scss';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRefs = useRef([]);
  const [activeMessage, setActiveMessage] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    // Initialize visibility fixes
    initVisibilityFixes();
    
    // Scan Section Animations
    safeFromTo('.scan-section .feature-heading', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      {
        trigger: '.scan-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    );
    
    safeFromTo('.scan-section .feature-description',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.2 },
      {
        trigger: '.scan-section',
        start: 'top 80%'
      }
    );
    
    safeFromTo('.scan-section .phone-mockup',
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
      {
        trigger: '.scan-section',
        start: 'top 70%'
      }
    );
    
    // Analysis Section Animations
    safeFromTo('.analysis-section .feature-heading',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      {
        trigger: '.analysis-section',
        start: 'top 80%'
      }
    );
    
    safeFromTo('.analysis-section .left-phone',
      { x: -80, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 },
      {
        trigger: '.analysis-section',
        start: 'top 70%'
      }
    );
    
    safeFromTo('.analysis-section .right-phone',
      { x: 80, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.2 },
      {
        trigger: '.analysis-section',
        start: 'top 70%'
      }
    );
    
    safeFromTo('.style-tag',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)' },
      {
        trigger: '.style-tags',
        start: 'top 85%'
      }
    );
    
    // AI Section Animations
    safeFromTo('.ai-section .feature-heading',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      {
        trigger: '.ai-section',
        start: 'top 80%'
      }
    );
    
    safeFromTo('.chat-message',
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.15 },
      {
        trigger: '.chat-preview',
        start: 'top 85%'
      }
    );
    
    // AI Visualization entrance
    safeFromTo('.ai-core',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' },
      {
        trigger: '.ai-visualization',
        start: 'top 70%'
      }
    );
    
    safeFromTo('.particles .particle',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, stagger: 0.1, delay: 0.5 },
      {
        trigger: '.ai-visualization',
        start: 'top 70%'
      }
    );
    
    // Paint blobs scale animation
    safeFromTo('.feature-section .paint-blob',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out' },
      {
        trigger: '.features-container',
        start: 'top 60%'
      }
    );
    
    // Continuous Animations
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
    gsap.to('.feature-icon img', {
      scale: 1.1,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
    
    // Mobile optimizations
    if (window.innerWidth <= 768) {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.scrub) {
          trigger.disable();
        }
      });
    }

    // Mark Features component as animation-ready
    animationManager.markComponentReady('Features');

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="features-container">
      {/* Partners Section */}
      <Partners />

      {/* Scan Your Style Section */}
      <section 
        id="scan"
        className="feature-section scan-section"
        ref={(el) => (sectionRefs.current[0] = el)}
      >
        <div className="feature-content">
          <div className="content-side">
            <h2 className="feature-heading">
              {t('features.scan.title')} <span className="italic-style">{t('features.scan.titleHighlight')}</span>
            </h2>
            <p className="feature-description">
              {t('features.scan.description')}
            </p>
          </div>
          <div className="visual-side">
            <div className="phone-mockup floating">
              <div className="phone-glow"></div>
              <img src="/assets/mockups/dropok-products.png" alt="Dropok products" className="phone-screen" />
            </div>
            <div className="paint-blob blue-blob"></div>
          </div>
        </div>
      </section>

      {/* Style Analysis Section */}
      <section 
        id="analysis"
        className="feature-section analysis-section"
        ref={(el) => (sectionRefs.current[1] = el)}
      >
        <div className="feature-content reverse">
          <div className="visual-side">
            <div className="dual-phones">
              <div className="phone-mockup left-phone">
                <img src="/assets/mockups/outfit-evaluation.png" alt="Outfit evaluation interface" className="phone-screen" />
              </div>
              <div className="phone-mockup right-phone">
                <img src="/assets/mockups/outfit-of-the-day-categories.png" alt="Outfit of the day categories" className="phone-screen" />
              </div>
            </div>
            <div className="paint-blob purple-blob"></div>
            <div className="paint-blob cream-blob small"></div>
          </div>
          <div className="content-side">
            <h2 className="feature-heading">
              {t('features.analysis.title')} <span className="gradient-text">{t('features.analysis.titleHighlight')}</span>
            </h2>
            <p className="feature-description">
              {t('features.analysis.description')}
            </p>
            <div className="style-tags">
              <span className="style-tag">{t('features.analysis.tags.streetwear')}</span>
              <span className="style-tag">{t('features.analysis.tags.casual')}</span>
              <span className="style-tag">{t('features.analysis.tags.urban')}</span>
              <span className="style-tag">{t('features.analysis.tags.modern')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* AI Advice Section */}
      <section 
        id="advice"
        className="feature-section ai-section"
        ref={(el) => (sectionRefs.current[2] = el)}
      >
        <div className="feature-content">
          <div className="content-side">
            <h2 className="feature-heading ai-heading">
              <span className="ai-title-line">{t('features.ai.title')}</span>
              <span className="gradient-text ai-gradient">{t('features.ai.titleHighlight')}</span>
            </h2>
            <p className="feature-description">
              {t('features.ai.description')}
            </p>
            <div className="ai-chat-interface">
              <div className="chat-window">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="ai-response">
                  {activeMessage === 0 && (
                    <p className="fade-in">
                      "{t('features.ai.chatMessages.casual')}"
                    </p>
                  )}
                  {activeMessage === 1 && (
                    <p className="fade-in">
                      "{t('features.ai.chatMessages.streetwear')}"
                    </p>
                  )}
                  {activeMessage === 2 && (
                    <p className="fade-in">
                      "{t('features.ai.chatMessages.jacket')}"
                    </p>
                  )}
                </div>
              </div>
              <div className="chat-suggestions">
                <h4 className="suggestions-title">{t('features.ai.suggestions.title')}</h4>
                <div className="suggestion-pills">
                  <div 
                    className={`suggestion-pill ${activeMessage === 0 ? 'active' : ''}`}
                    onMouseEnter={() => setActiveMessage(0)}
                  >
                    {t('features.ai.suggestions.casualFriday')}
                  </div>
                  <div 
                    className={`suggestion-pill ${activeMessage === 1 ? 'active' : ''}`}
                    onMouseEnter={() => setActiveMessage(1)}
                  >
                    {t('features.ai.suggestions.streetwear')}
                  </div>
                  <div 
                    className={`suggestion-pill ${activeMessage === 2 ? 'active' : ''}`}
                    onMouseEnter={() => setActiveMessage(2)}
                  >
                    {t('features.ai.suggestions.perfectJacket')}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="visual-side">
            <div className="ai-visualization">
              <div className="ai-core">
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
                <div className="ring ring-3"></div>
                <div className="core-center"></div>
              </div>
              <div className="particles">
                <span className="particle"></span>
                <span className="particle"></span>
                <span className="particle"></span>
                <span className="particle"></span>
                <span className="particle"></span>
              </div>
            </div>
            <div className="paint-blob dark-blue-blob"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;