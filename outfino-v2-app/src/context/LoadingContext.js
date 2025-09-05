import React, { createContext, useContext, useState, useEffect } from 'react';
import animationManager from '../utils/animationManager';

const LoadingContext = createContext();

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within LoadingProvider');
  }
  return context;
};

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [assetsLoaded, setAssetsLoaded] = useState({
    images: false,
    videos: false,
    fonts: false,
    animations: false
  });

  useEffect(() => {
    // Register expected components for animation readiness tracking
    const expectedComponents = ['Hero', 'Features', 'Awards', 'Newsletter', 'SupportSection', 'AppDownload', 'Navigation'];
    expectedComponents.forEach(component => {
      animationManager.registerComponent(component);
    });

    // Extended fallback timeout for animations to give more time for components to load
    const animationTimeout = setTimeout(() => {
      console.warn('Animation readiness timeout - forcing animations as ready');
      setAssetsLoaded(prev => ({ ...prev, animations: true }));
    }, 8000); // 8 second fallback - increased from 3 seconds

    // Setup animation readiness callback
    animationManager.onAllReady(() => {
      clearTimeout(animationTimeout);
      setAssetsLoaded(prev => ({ ...prev, animations: true }));
    });

    const loadAssets = async () => {
      try {
        // Check if fonts are loaded
        if (document.fonts) {
          await document.fonts.ready;
          setAssetsLoaded(prev => ({ ...prev, fonts: true }));
        } else {
          setAssetsLoaded(prev => ({ ...prev, fonts: true }));
        }

        // Preload critical images
        const criticalImages = [
          '/assets/camera.png',
          '/assets/glasses.png',
          '/assets/chat.svg',
          '/assets/scan.png',
          '/assets/result1.png',
          '/assets/result2.png',
          '/assets/get-google-play.png',
          '/assets/get-apple-store.png',
          '/assets/get-google-play-hu.png',
          '/assets/get-apple-store-hu.png'
        ];

        const imagePromises = criticalImages.map(src => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve; // Still resolve on error to not block
            img.src = src;
          });
        });

        await Promise.all(imagePromises);
        setAssetsLoaded(prev => ({ ...prev, images: true }));

        // Wait a moment for DOM to be ready
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Check for video readiness - will be created after component mounts
        const checkVideos = async () => {
          const videos = document.querySelectorAll('video');
          if (videos.length > 0) {
            const videoPromises = Array.from(videos).map(video => {
              return new Promise((resolve) => {
                if (video.readyState >= 3) {
                  resolve();
                } else {
                  video.addEventListener('canplaythrough', resolve, { once: true });
                  video.addEventListener('loadeddata', resolve, { once: true });
                  // Fallback timeout
                  setTimeout(resolve, 2000);
                }
              });
            });
            await Promise.all(videoPromises);
          }
        };
        
        // Try checking for videos after a delay
        setTimeout(async () => {
          await checkVideos();
          setAssetsLoaded(prev => ({ ...prev, videos: true }));
        }, 500);

      } catch (error) {
        console.error('Error loading assets:', error);
        // Still mark assets as loaded after error
        setAssetsLoaded(prev => ({ 
          ...prev, 
          images: true, 
          videos: true, 
          fonts: true 
        }));
      }
    };

    loadAssets();

    // Cleanup function
    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  // Wait for all assets AND animations to be ready
  useEffect(() => {
    const allAssetsReady = Object.values(assetsLoaded).every(loaded => loaded);
    if (allAssetsReady && isLoading) {
      // Extended minimum loading time to ensure newsletter loads fully
      setTimeout(() => {
        // Force Newsletter, Awards, and AppDownload visibility as backup
        const forceVisibility = () => {
          const newsletter = document.querySelector('.newsletter-section');
          const awards = document.querySelector('.awards-section');
          const appDownload = document.querySelector('.app-download');
          
          if (newsletter) {
            newsletter.style.opacity = '1';
            newsletter.style.visibility = 'visible';
            const newsletterElements = newsletter.querySelectorAll('.newsletter-title, .news-item');
            newsletterElements.forEach(el => {
              el.style.opacity = '1';
              el.style.visibility = 'visible';
            });
          }
          
          if (awards) {
            awards.style.opacity = '1';
            awards.style.visibility = 'visible';
            const awardElements = awards.querySelectorAll('.awards-title, .award-card-item');
            awardElements.forEach(el => {
              el.style.opacity = '1';
              el.style.visibility = 'visible';
            });
          }
          
          if (appDownload) {
            appDownload.style.opacity = '1';
            appDownload.style.visibility = 'visible';
            const appDownloadElements = appDownload.querySelectorAll('.app-download-title, .app-download-description, .app-store-button');
            appDownloadElements.forEach(el => {
              el.style.opacity = '1';
              el.style.visibility = 'visible';
            });
          }
        };
        
        forceVisibility();
        setIsLoading(false);
      }, 2000); // Increased from 300ms to 2000ms
    }
  }, [assetsLoaded, isLoading]);

  return (
    <LoadingContext.Provider value={{ isLoading, assetsLoaded }}>
      {children}
    </LoadingContext.Provider>
  );
};