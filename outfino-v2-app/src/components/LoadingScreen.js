import React, { useEffect, useState } from 'react';
import '../styles/LoadingScreen.scss';

const LoadingScreen = ({ isLoading }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setIsExiting(true);
      // Remove from DOM after animation
      const timer = setTimeout(() => {
        const loadingElement = document.querySelector('.loading-screen');
        if (loadingElement) {
          loadingElement.style.display = 'none';
        }
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <div className={`loading-screen ${isExiting ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="logo-container">
          <h1 className="loading-logo">OUTFINO</h1>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
        </div>
        <p className="loading-text">Preparing your style experience...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;