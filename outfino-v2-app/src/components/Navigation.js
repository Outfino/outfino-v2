import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { safeFromTo, initVisibilityFixes } from '../utils/gsapFixes';
import { useLanguage } from '../contexts/LanguageContext';
import animationManager from '../utils/animationManager';
import LanguageSwitch from './LanguageSwitch';
import '../styles/Navigation.scss';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navigationTimeoutRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    // Initialize visibility fixes
    initVisibilityFixes();
    
    // Ensure navigation is visible
    gsap.set(['.nav-brand', '.nav-desktop .nav-link', '.nav-hamburger'], {
      opacity: 1,
      visibility: 'visible'
    });
    
    // Initial navigation animation
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo('.nav-brand', 
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo('.nav-desktop .nav-link',
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo('.nav-hamburger',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' },
      '-=0.3'
    );

    // Mark Navigation component as animation-ready
    animationManager.markComponentReady('Navigation');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Skip updating active section if we have an active navigation timeout
      if (navigationTimeoutRef.current) return;

      // Determine active section based on scroll position
      const sections = ['hero', 'scan', 'analysis', 'advice', 'awards', 'news'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Clear any existing timeout
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
      
      setActiveSection(sectionId);
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      
      // Set new timeout to re-enable scroll detection
      navigationTimeoutRef.current = setTimeout(() => {
        navigationTimeoutRef.current = null;
      }, 1000);
    }
  };

  const navItems = [
    { id: 'features', label: t('navigation.aboutApp'), action: () => scrollToSection('scan') },
    { id: 'awards', label: t('navigation.awards'), action: () => scrollToSection('awards') },
    { id: 'news', label: t('navigation.news'), action: () => scrollToSection('news') },
    { 
      id: 'download', 
      label: t('navigation.downloadApp'), 
      isLink: true, 
      path: '/download',
      onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  ];

  return (
    <>
      <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-brand" onClick={() => {
            setActiveSection('hero');
            scrollToSection('hero');
          }}>
            <span className="brand-text">OUTFINO</span>
          </div>

          <div className="nav-desktop">
            {navItems.map(item => (
              item.isLink ? (
                <Link 
                  key={item.id} 
                  to={item.path} 
                  className="nav-link"
                  onClick={item.onClick}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  className={`nav-link ${(item.id === 'features' && (activeSection === 'scan' || activeSection === 'analysis' || activeSection === 'advice')) || activeSection === item.id ? 'active' : ''}`}
                  onClick={item.action}
                >
                  {item.label}
                </button>
              )
            ))}
            <LanguageSwitch />
          </div>

          <button 
            className={`nav-hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`nav-mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {navItems.map(item => (
            item.isLink ? (
              <Link 
                key={item.id} 
                to={item.path} 
                className="mobile-nav-link"
                onClick={() => {
                  setIsMenuOpen(false);
                  if (item.onClick) item.onClick();
                }}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.id}
                className={`mobile-nav-link ${(item.id === 'features' && (activeSection === 'scan' || activeSection === 'analysis' || activeSection === 'advice')) || activeSection === item.id ? 'active' : ''}`}
                onClick={item.action}
              >
                {item.label}
              </button>
            )
          ))}
          <div className="mobile-language-switch">
            <LanguageSwitch />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div 
          className="nav-overlay" 
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;