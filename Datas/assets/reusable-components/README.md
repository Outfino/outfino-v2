# Outfino Reusable Components

This directory contains all the reusable components, services, and configurations extracted from the current Outfino website that **DO NOT need to be remade** for the redesign.

## 📁 Directory Structure

```
reusable-components/
├── components/          # React components ready to use
├── pages/              # Page-level components  
├── services/           # API and data services
├── config/             # Configuration files
├── styles/             # SCSS stylesheets
└── README.md           # This file
```

## 🔧 Components

### `components/Validate.js`
- **Purpose**: Email validation system with token-based verification
- **Dependencies**: `react-router-dom`, `react-bootstrap-icons`, Bootstrap
- **API**: Uses `Data.fetchValidation(token)`
- **Features**: Loading states, success/error feedback, automatic redirects

### `components/ResetPassword.js` 
- **Purpose**: Secure password reset with form validation
- **Dependencies**: `react-router-dom`, `react-bootstrap-icons`
- **API**: Uses `Data.fetchResetPassword(token, password)`
- **Features**: Password validation, confirmation matching, loading states

### `components/Support.js`
- **Purpose**: Contact form for customer support
- **Dependencies**: Bootstrap for styling
- **API**: Uses `Data.sendSupportRequest(name, email, message)`
- **Features**: Form validation, email format validation, success/error handling

### `components/Privacy.js`
- **Purpose**: Privacy policy page with professional legal formatting
- **Dependencies**: `../styles/Privacy.scss`
- **Features**: GDPR compliant content, responsive design

## 📄 Pages

### `pages/Download.js`
- **Purpose**: Smart device detection and app store redirection
- **Features**: iOS/Android detection, SEO meta tags, automatic redirects
- **No Dependencies**: Pure React component

## 🔌 Services

### `services/Data.js`
- **Purpose**: Centralized API communication layer
- **Base URL**: `https://api.outfino.io/v3`
- **Methods**: 
  - `fetchValidation(token)` - Email verification
  - `fetchResetPassword(token, password)` - Password reset
  - `sendSupportRequest(name, email, message)` - Support tickets
- **Features**: Language detection, error handling, consistent headers

## ⚙️ Configuration

### `config/companyInfo.js`
- **Purpose**: Centralized company information and constants
- **Contents**:
  - Legal entity details (VAT, registration, address)
  - Contact information
  - App store links
  - Social media URLs
  - Awards and recognition
  - API configuration
  - Branding information

## 🎨 Styles

### `styles/Privacy.scss`
- **Purpose**: Styling for Privacy policy component
- **Features**: Responsive design, branded colors, clean typography
- **Variables**: Configurable SCSS variables for easy customization

## 🚀 How to Use in Remake

### 1. Copy Components
```bash
# Copy all components to your new project
cp -r reusable-components/* /path/to/new-project/src/
```

### 2. Install Dependencies
Ensure your new project has these dependencies:
```json
{
  "react-router-dom": "^6.26.2",
  "react-bootstrap-icons": "^1.11.4",
  "bootstrap": "^5.3.3"
}
```

### 3. Update Imports
Update import paths in your components to match your project structure:
```javascript
// From
import Data from '../services/Data';

// To (adjust as needed)
import Data from './services/Data';
```

### 4. Add Routes
Add these routes to your main App.js:
```javascript
import Validate from './components/Validate';
import ResetPassword from './components/ResetPassword';
import Privacy from './components/Privacy';
import Support from './components/Support';
import Download from './pages/Download';

// In your Routes component:
<Route path="/validate" element={<Validate />} />
<Route path="/reset-password" element={<ResetPassword />} />
<Route path="/privacy" element={<Privacy />} />
<Route path="/support" element={<Support />} />
<Route path="/download" element={<Download />} />
```

### 5. Use Company Info
```javascript
import companyInfo from './config/companyInfo';

// Use anywhere in your components
<p>{companyInfo.branding.tagline}</p>
<a href={companyInfo.appStore.ios}>Download iOS App</a>
```

## ✅ Testing Checklist

Before using in production:
- [ ] Test email validation flow with valid tokens
- [ ] Test password reset flow with valid tokens
- [ ] Test support form submission
- [ ] Test download page device detection
- [ ] Verify all API endpoints are accessible
- [ ] Test responsive design on mobile devices
- [ ] Validate privacy policy content is up-to-date

## 🔄 Updates Needed

- **Privacy Policy**: Update the "Last Updated" date if content changes
- **Awards**: Add new F6S awards as they're received
- **Company Info**: Update if legal details change
- **API**: No changes needed - endpoints are stable

## 📝 Notes

- All components are fully functional and production-ready
- No modifications needed for basic functionality
- Styling can be customized by updating SCSS variables
- API service layer handles errors and language detection automatically
- All components follow React best practices and hooks patterns