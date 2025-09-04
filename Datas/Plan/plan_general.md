# Outfino V2 - General Project Information

## 🎯 Project Overview
**Objective**: Redesign Outfino website with streetwear aesthetic, black dominant color scheme with paint splatter design elements, while preserving all functional utility systems.

## 🎨 Design System & Guidelines

### Color Palette
```css
:root {
  --color-black: #000000;        /* Primary background */
  --color-cream: #FFE6C7;        /* Accent highlights */
  --color-light-blue: #4FCFF8;   /* Primary CTA buttons */
  --color-purple: #AB5DEC;       /* Secondary accents */
  --color-dark-blue: #024BE8;    /* Tertiary accents */
  --color-turquoise: #00b2ca;    /* Legacy accent (use sparingly) */
}
```

### Typography
- **Primary**: Playfair Display (sophisticated serif for headings)
- **Secondary**: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto' (body text)
- **Accent**: Bold, condensed fonts for streetwear elements

### Design Standards
- **Border Radius**: 20px standard
- **Shadows**: Subtle, layered shadows
- **Spacing**: Mobile-first with full-height sections on desktop
- **Background**: Black dominant with paint splatter accents
- **Transitions**: Gradient transitions from top-left to bottom-right

## 📁 Project Structure

### Available Assets
```
assets/
├── bg-hero.jpg              # Hero background
├── bg-payment.jpg           # Payment background  
├── camera.png               # Camera icon
├── chat.svg                 # Chat icon
├── glasses.png              # Glasses icon
├── outfino-avatar.jpg       # Avatar image
├── scan.png                 # Scanning feature
├── result1.png              # Result screen 1
├── result2.png              # Result screen 2
├── f6s-award.png            # F6S award
├── f6s-logo-square.svg      # F6S logo
├── get-apple-store.png      # App Store button
├── get-google-play.png      # Google Play button
├── outfino-commercial.mp4   # Commercial video
└── payment/
    ├── mastercard.png
    └── visa.png
```

### Reusable Components (DO NOT MODIFY)
```
reusable-components/
├── components/
│   ├── Validate.js          # Email validation
│   ├── ResetPassword.js     # Password reset
│   ├── Support.js           # Support form
│   └── Privacy.js           # Privacy policy
├── pages/
│   └── Download.js          # Download redirect
├── services/
│   └── Data.js              # API layer
├── config/
│   └── companyInfo.js       # Company info
└── styles/
    └── Privacy.scss         # Privacy styles
```

## 🔗 API & External Resources

### API Configuration
- **Base URL**: `https://api.outfino.io/v3`
- **Endpoints**:
  - Email validation: `/validate`
  - Password reset: `/reset-password`
  - Support tickets: `/support`

### App Store Links
- **iOS**: `https://apps.apple.com/hu/app/outfino/id6736884918`
- **Android**: `https://play.google.com/store/apps/details?id=com.outfino.mobile`

### Social Media
- Facebook: `https://www.facebook.com/profile.php?id=61566263469126`
- Instagram: `https://www.instagram.com/outfino.io/`
- Twitter/X: `https://x.com/outfino_io`
- TikTok: `https://www.tiktok.com/@outfino.io`
- LinkedIn: `https://www.linkedin.com/company/outfino`

## 📋 Core Content & Copy

### Hero Section
- **Main Heading**: "Elevate Your Style with Outfino"
- **Subheading**: "Discover Fashion Designed for You."
- **CTA Buttons**: "Get it on Google Play" | "Download on the App Store"

### Feature Sections

#### Scan Your Style
- **Heading**: "Scan Your Style"
- **Description**: "Effortlessly capture and analyze your unique style wherever you are with our quick scan feature. Anytime, anywhere—discover personalized fashion insights designed just for you!"

#### Style Analysis
- **Heading**: "Let's get to know your actual style"
- **Description**: "Discover styles that match your personality. We analyze your preferences to help you find outfits that reflect your unique taste."

#### AI Advice
- **Heading**: "Get advice from the AI"
- **Description**: "Receive personalized fashion tips instantly. Let our AI suggest outfits tailored just for you."

### Support Section
- **Heading**: "Need help?"
- **Email Alternative**: "Or send an e-mail to support@outfino.com"

### Footer
```
Outfino Europe Kft. © 2024
VAT Number: HU32853601
Company Reg. No.: 01-09-446114
1145 Budapest, Tallér str 15.
```

## 🛠 Technical Stack

### Required Dependencies
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.26.2",
  "react-bootstrap-icons": "^1.11.4",
  "bootstrap": "^5.3.3",
  "gsap": "^3.12.2",
  "sass": "^1.69.5"
}
```

### Routes Configuration
```javascript
"/" - Home page (NEW)
"/validate" - Email validation (REUSE)
"/reset-password" - Password reset (REUSE)
"/privacy" - Privacy policy (REUSE)
"/support" - Support form (REUSE)
"/download" - Download redirect (REUSE)
```

## ✅ Success Criteria

### Technical Requirements
- Lighthouse score > 90 (all categories)
- Core Web Vitals in "Good" range
- Mobile loading time < 3 seconds
- All reusable components working
- Cross-browser compatibility

### Design Requirements
- Black dominant background
- Streetwear aesthetic implemented
- Paint splatter design elements
- Mobile-first responsive design
- Smooth GSAP animations

### Functional Requirements
- All utility pages working
- API connections functional
- App store redirects working
- Form validations working
- SEO optimized

## 📝 Important Notes

### DO NOT CHANGE
- Any files in `reusable-components/`
- API endpoints or structure
- Company information
- App store links
- Social media URLs

### MUST IMPLEMENT
- Black background as primary
- Paint splatter design elements
- Streetwear aesthetic
- Mobile-first approach
- All existing functionality

### Key Design Principles
1. **Black Dominant**: Use black as primary background
2. **Paint Splatter**: Integrate colors in organic arrangements
3. **Streetwear**: Bold, urban, modern edge
4. **Mobile-First**: Design for mobile, enhance for desktop
5. **Performance**: Optimize for speed and smooth animations