import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../contexts/LanguageContext';
import animationManager from '../utils/animationManager';
import '../styles/Hero.scss';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const contentRef = useRef(null);
  const { t } = useLanguage();
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);


  useEffect(() => {
    // Set initial state for animation
    gsap.set(['.video-background', '.hero-title', '.hero-subtitle', '.cta-button', '.style-tip'], {
      opacity: 0,
      visibility: 'visible'
    });
    
    // Set scroll indicator separately - don't override its opacity
    gsap.set('.scroll-indicator', {
      visibility: 'visible'
    });


    // Enhanced Hero Animations
    const tl = gsap.timeline({ delay: 0.2 });
    
    // Fade in video background
    tl.fromTo('.video-background', {
      opacity: 0
    }, {
      opacity: 1,
      duration: 1.5,
      ease: 'power2.inOut'
    })
    
    // Title animation with word stagger
    .fromTo('.hero-title', {
      y: 60,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power4.out'
    }, '-=1')
    
    // Subtitle fade in
    .fromTo('.hero-subtitle', {
      y: 40,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.8')
    
    // CTA buttons slide up with bounce
    .fromTo('.cta-button', {
      y: 40,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out(1.7)'
    }, '-=0.6')
    
    // Style tips animation
    .fromTo('.style-tip', {
      x: 100,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    }, '-=0.5')
    
    // Scroll indicator - simple slide up without opacity change
    .fromTo('.scroll-indicator', {
      y: 20
    }, {
      y: 0,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.3');

    // Enhanced paint blobs floating with rotation
    gsap.to('.hero-section .paint-blob', {
      y: 'random(-30, 30)',
      x: 'random(-20, 20)',
      rotation: 'random(-5, 5)',
      duration: 'random(15, 25)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: {
        each: 2,
        from: 'random'
      }
    });

    // Enhanced scroll indicator bounce
    gsap.to('.scroll-line', {
      scaleY: 1.3,
      y: 5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    // ScrollTrigger parallax for video
    if (window.innerWidth > 768) {
      gsap.to('.video-background', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });
      
      // ScrollTrigger for content fade
      gsap.to('.hero-content', {
        yPercent: -20,
        opacity: 0.3,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });
    }
    
    // Mark Hero component as animation-ready
    animationManager.markComponentReady('Hero');

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Separate useEffect for scroll indicator functionality
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log('Scroll Y:', currentScrollY, 'Last:', lastScrollY, 'Show:', showScrollIndicator);
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down - hide indicator
        console.log('Hiding scroll indicator');
        setShowScrollIndicator(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show indicator
        console.log('Showing scroll indicator');
        setShowScrollIndicator(true);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showScrollIndicator]);

  const styleTips = t('hero.styleTips');

  return (
    <section id="hero" className="hero-section" ref={heroRef}>
      {/* Video Background Layer */}
      <div className="video-background" ref={videoRef}>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="hero-video"
        >
          <source src="https://api.trophien.com/files/shared/Projektek/Stylevise/outfino-commercial.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Paint Splatter Effects Layer */}
      <div className="paint-splatter-layer">
        <div className="paint-blob cream-blob"></div>
        <div className="paint-blob blue-blob"></div>
        <div className="paint-blob purple-blob"></div>
      </div>

      {/* Content Layer */}
      <div className="hero-content" ref={contentRef}>
        <div className="content-wrapper">
          <h1 className="hero-title">
            {t('hero.title')} <span className="gradient-text">{t('hero.titleHighlight')}</span> {t('hero.titleSuffix')}
          </h1>
          <p className="hero-subtitle">
            {t('hero.subtitle')}
          </p>
          
          {/* CTA Buttons */}
          <div className="cta-buttons">
            <a 
              href="https://play.google.com/store/apps/details?id=com.outfino.mobile"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button google-play"
            >
              <img src="/assets/get-google-play.png" alt="Get it on Google Play" />
            </a>
            <a 
              href="https://apps.apple.com/hu/app/outfino/id6736884918"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button app-store"
            >
              <img src="/assets/get-apple-store.png" alt="Download on the App Store" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Style Tips (Desktop Only) */}
      <div className="style-tips-container">
        {styleTips.map((tip, index) => (
          <div key={index} className={`style-tip tip-${index + 1}`}>
            <span className="tip-icon">💡</span>
            <p>{tip}</p>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className={`scroll-indicator ${showScrollIndicator ? 'visible' : 'hidden'}`}>
        <span className="scroll-text">{t('hero.scrollDown').toUpperCase()}</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;