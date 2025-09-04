import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { companyInfo } from '../config/companyInfo';
import '../styles/Footer.scss';

const Footer = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-gradient-line"></div>
      
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="footer-heading">{t('footer.company')}</h3>
            <div className="company-info">
              <p className="company-name">{companyInfo.companyName} © {currentYear}</p>
              <p className="company-detail">VAT Number: {companyInfo.vatNumber}</p>
              <p className="company-detail">Company Reg. No.: {companyInfo.companyRegNumber}</p>
              <p className="company-detail">{companyInfo.address.fullAddress}</p>
              <a href={`mailto:${companyInfo.contact.supportEmail}`} className="company-email">
                {companyInfo.contact.supportEmail}
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">{t('footer.usefulLinks')}</h3>
            <ul className="footer-links">
              <li>
                <button 
                  onClick={() => scrollToSection('scan')}
                  className="footer-link"
                >
                  {t('footer.links.scanFriends')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('analysis')}
                  className="footer-link"
                >
                  {t('footer.links.actualStyle')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('advice')}
                  className="footer-link"
                >
                  {t('footer.links.adviceFromAI')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('support')}
                  className="footer-link"
                >
                  {t('footer.links.support')}
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">{t('footer.documents')}</h3>
            <ul className="footer-links">
              <li>
                <a 
                  href="https://outfino.io/gdpr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  {t('footer.links.gdpr')}
                </a>
              </li>
              <li>
                <Link to="/privacy" className="footer-link">
                  {t('footer.links.privacyPolicy')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">{t('footer.connect')}</h3>
            <div className="social-links">
              <a 
                href={companyInfo.socialMedia.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              
              <a 
                href={companyInfo.socialMedia.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              
              <a 
                href={companyInfo.socialMedia.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="X (Twitter)"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4l11.733 16h4.267l-11.733-16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 20l6.768-6.768m2.46-2.46L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              
              <a 
                href={companyInfo.socialMedia.tiktok} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="TikTok"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19.321 5.562a5.122 5.122 0 01-.443-.258 6.228 6.228 0 01-1.137-.984c-.849-.971-1.166-1.956-1.282-2.645h.004C16.366 1.113 16.32 1 16.32 1h-3.842v14.697c0 .201 0 .4-.008.595a3.78 3.78 0 01-.045.433v.012a3.77 3.77 0 01-3.743 3.264 3.735 3.735 0 01-1.938-.54 3.767 3.767 0 01-1.816-3.231 3.769 3.769 0 013.754-3.77c.392 0 .768.064 1.123.178v-3.85a7.619 7.619 0 00-1.123-.083c-1.242 0-2.479.307-3.579.889a7.666 7.666 0 00-2.7 2.42 7.628 7.628 0 00-1.098 3.942c0 1.558.462 3.065 1.337 4.358a7.665 7.665 0 002.71 2.406A7.6 7.6 0 008.905 24c1.334 0 2.646-.35 3.799-1.014a7.676 7.676 0 002.705-2.71 7.629 7.629 0 001.071-3.911V8.242a10.008 10.008 0 003.584 1.382V5.781s-1.744 0-3.743-2.218z" fill="currentColor"/>
                </svg>
              </a>
              
              <a 
                href={companyInfo.socialMedia.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} {companyInfo.companyName} {t('footer.copyright')}
          </p>
        </div>
      </div>

      <div className="footer-paint-splatter"></div>
    </footer>
  );
};

export default Footer;