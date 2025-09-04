import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Partners.scss';

const Partners = () => {
  const { t } = useLanguage();
  // Using CDN logos for popular fashion brands
  const partnerLogos = [
    { name: 'Nike', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg' },
    { name: 'Adidas', url: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg' },
    { name: 'Puma', url: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Puma_Logo.svg' },
    { name: 'New Balance', url: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/New_Balance_logo.svg' },
    { name: 'Under Armour', url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Under_armour_logo.svg' },
    { name: 'Reebok', url: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Reebok_red_logo.svg' },
    { name: 'Converse', url: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Converse_logo.svg' },
    { name: 'Vans', url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Vans-logo.svg' },
    { name: 'Tommy Hilfiger', url: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Tommy_hilfiger_logo.svg' },
    { name: 'Calvin Klein', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Calvin_klein_logo.svg' },
    { name: 'Lacoste', url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Lacoste_logo.svg' },
    { name: 'The North Face', url: 'https://upload.wikimedia.org/wikipedia/commons/7/74/The_North_Face_logo.svg' },
    { name: 'Champion', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Champion_Sportswear_logo.svg' }
  ];

  // Triple the logos for seamless scrolling
  const tripleLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section id="partners" className="partners-section">
      <div className="partners-container">
        <div className="partners-header">
          <h2 className="partners-title">{t('partners.trustedBy')}</h2>
        </div>
        <div className="logo-strip">
          <div className="logo-track">
            {tripleLogos.map((partner, index) => (
              <div key={index} className="partner-logo">
                <img src={partner.url} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;