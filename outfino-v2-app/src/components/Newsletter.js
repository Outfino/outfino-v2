import React, { useEffect, useRef, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { safeFromTo, initVisibilityFixes } from '../utils/gsapFixes';
import { useLanguage } from '../contexts/LanguageContext';
import animationManager from '../utils/animationManager';
import '../styles/Newsletter.scss';

gsap.registerPlugin(ScrollTrigger);

const Newsletter = () => {
  const containerRef = useRef(null);
  const [expandedItems, setExpandedItems] = useState({});
  const { t } = useLanguage();

  const newsItems = useMemo(() => [
    {
      id: 1,
      title: t('newsletter.items.aiUpdate.title'),
      description: t('newsletter.items.aiUpdate.description'),
      date: t('newsletter.items.aiUpdate.date'),
      category: t('newsletter.items.aiUpdate.category')
    },
    {
      id: 2,
      title: t('newsletter.items.partnership.title'),
      description: t('newsletter.items.partnership.description'),
      date: t('newsletter.items.partnership.date'),
      category: t('newsletter.items.partnership.category')
    },
    {
      id: 3,
      title: t('newsletter.items.appFeature.title'),
      description: t('newsletter.items.appFeature.description'),
      date: t('newsletter.items.appFeature.date'),
      category: t('newsletter.items.appFeature.category')
    },
    {
      id: 4,
      title: t('newsletter.items.fashionWeek.title'),
      description: t('newsletter.items.fashionWeek.description'),
      date: t('newsletter.items.fashionWeek.date'),
      category: t('newsletter.items.fashionWeek.category')
    }
  ], [t]);

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  useEffect(() => {
    // Force immediate visibility via CSS
    const section = document.querySelector('.newsletter-section');
    if (section) {
      section.style.opacity = '1';
      section.style.visibility = 'visible';
    }
    
    // Initialize visibility fixes
    initVisibilityFixes();
    
    // Ensure elements are visible by default
    gsap.set(['.newsletter-section', '.newsletter-title', '.newsletter-title .title-line', '.news-item'], {
      visibility: 'visible',
      opacity: 1,
      clearProps: 'transform'
    });
    
    // Title animation
    safeFromTo('.newsletter-title',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      {
        trigger: '.newsletter-section',
        start: 'top 80%'
      }
    );
    
    // Title line animation
    safeFromTo('.newsletter-title .title-line',
      { scaleX: 0 },
      { scaleX: 1, duration: 1, delay: 0.5, ease: 'power3.out' },
      {
        trigger: '.newsletter-section',
        start: 'top 80%'
      }
    );
    
    // News items stagger animation
    safeFromTo('.news-item',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
      {
        trigger: '.news-grid',
        start: 'top 85%'
      }
    );
    
    // Mark Newsletter component as animation-ready
    animationManager.markComponentReady('Newsletter');
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);



  return (
    <section className="newsletter-section" ref={containerRef}>
      <div className="newsletter-container">
        <h2 className="newsletter-title">
          <span className="title-main">{t('newsletter.title')}</span>
          <span className="title-line"></span>
        </h2>
        
        <div className="news-grid">
          {newsItems.map((item) => (
            <article 
              key={item.id} 
              className={`news-item ${expandedItems[item.id] ? 'expanded' : ''}`}
            >
              <div className="news-header">
                <span className="news-category">{item.category}</span>
                <span className="news-date">{item.date}</span>
              </div>
              
              <h3 className="news-title">{item.title}</h3>
              
              <p className={`news-description ${expandedItems[item.id] ? 'expanded' : ''}`}>
                {item.description}
              </p>
              
              <button 
                className="read-more-btn"
                onClick={() => toggleExpand(item.id)}
                aria-expanded={expandedItems[item.id]}
                aria-label={expandedItems[item.id] ? 'Read less' : 'Read more'}
              >
                <span>{expandedItems[item.id] ? t('newsletter.readLess') : t('newsletter.readMore')}</span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  className={expandedItems[item.id] ? 'rotated' : ''}
                >
                  <path 
                    d="M6 9L12 15L18 9" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </article>
          ))}
        </div>
        
        <div className="newsletter-subscribe">
          <h3 className="subscribe-title">{t('newsletter.subscribe.title')}</h3>
          <p className="subscribe-description">{t('newsletter.subscribe.description')}</p>
          
          <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder={t('newsletter.subscribe.emailPlaceholder')}
              className="email-input"
              required
            />
            <button type="submit" className="subscribe-btn">
              {t('newsletter.subscribe.button')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;