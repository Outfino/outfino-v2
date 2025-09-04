import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../translations/en';
import hu from '../translations/hu';

const translations = {
  en,
  hu
};

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const detectBrowserLanguage = () => {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('hu')) {
      return 'hu';
    }
    return 'en';
  };

  const getInitialLanguage = () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && (savedLang === 'en' || savedLang === 'hu')) {
      return savedLang;
    }
    return detectBrowserLanguage();
  };

  const [currentLanguage, setCurrentLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem('preferredLanguage', currentLanguage);
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const switchLanguage = (lang) => {
    if (lang === 'en' || lang === 'hu') {
      setCurrentLanguage(lang);
    }
  };

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'en' ? 'hu' : 'en');
  };

  const t = (path) => {
    const keys = path.split('.');
    let value = translations[currentLanguage];
    
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        console.warn(`Translation missing for: ${path} in language: ${currentLanguage}`);
        return path;
      }
    }
    
    return value;
  };

  const value = {
    currentLanguage,
    switchLanguage,
    toggleLanguage,
    t,
    translations: translations[currentLanguage]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;