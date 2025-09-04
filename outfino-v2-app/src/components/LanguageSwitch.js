import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './LanguageSwitch.scss';

const LanguageSwitch = () => {
  const { currentLanguage, switchLanguage } = useLanguage();

  return (
    <div className="language-switch">
      <button
        className={`lang-btn ${currentLanguage === 'en' ? 'active' : ''}`}
        onClick={() => switchLanguage('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="divider">|</span>
      <button
        className={`lang-btn ${currentLanguage === 'hu' ? 'active' : ''}`}
        onClick={() => switchLanguage('hu')}
        aria-label="Váltás magyarra"
      >
        HU
      </button>
    </div>
  );
};

export default LanguageSwitch;