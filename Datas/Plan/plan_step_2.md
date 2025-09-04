# Step 2: Design System & Base Styling

## 📋 Objective
Create the foundational design system with color variables, typography, base styles, and reusable CSS patterns for the streetwear aesthetic.

## ⚡ Prerequisites
- Step 1 completed (project setup)
- Understanding of color palette from plan_general.md
- Familiarity with SCSS/Sass

## 📝 Tasks to Complete

### 2.1 Create Variables System
Set up SCSS variables and CSS custom properties for:
- **Color Palette**: Black (primary), Cream, Light Blue, Purple, Dark Blue, Turquoise
- **Spacing Scale**: From extra small to extra extra large
- **Border Radius**: Standard (20px), small, and large variants
- **Transitions**: Fast, normal, and slow timing functions
- **Shadows**: Multiple levels including glow effects for blue and purple
- **Breakpoints**: Mobile-first responsive breakpoints
- **Z-index Layers**: Organized stacking contexts

### 2.2 Implement Typography System
- Import and configure Playfair Display font from Google Fonts
- Set up font families (primary serif, secondary sans-serif)
- Create responsive typography scale using clamp() for fluid sizing
- Define heading styles (H1-H4) with appropriate weights and spacing
- Create body text variations (large, regular, small)
- Add special streetwear text styles (uppercase, bold, wide letter-spacing)
- Implement gradient text effect using background-clip

### 2.3 Create Global Base Styles
- Reset default browser styles
- Set black background as primary
- Configure smooth scrolling behavior
- Style default text color (white)
- Create selection highlighting styles
- Define link styles with hover transitions
- Set up container with responsive padding
- Create section spacing system for full-height layouts

### 2.4 Design Paint Splatter Background System
- Create paint splatter container class
- Implement organic blob shapes using border-radius morphing
- Add blur effects for soft edges
- Create floating animations for movement
- Set up color variants for each palette color
- Implement morphing animations for shape changes
- Position blobs strategically without interfering with content

### 2.5 Create Button Component Styles
- **Primary Button**: Light blue background with black text
- **Secondary Button**: Transparent with purple border
- **App Store Buttons**: White background with proper spacing for logos
- **Streetwear Button**: Black with white border and offset shadow effect
- Add ripple effect on click
- Implement hover states with transforms and shadows
- Ensure all buttons are keyboard accessible

### 2.6 Design Form Styles
- Create form group spacing system
- Style labels with uppercase streetwear aesthetic
- Design input fields with semi-transparent backgrounds
- Add focus states with blue glow effect
- Style textareas with proper resizing
- Create error message styling
- Ensure all form elements are accessible

### 2.7 Build Utility Classes
Create helper classes for:
- **Display**: none, block, flex, grid
- **Flexbox**: direction, justification, alignment, gaps
- **Spacing**: margin and padding utilities
- **Text**: alignment, transformation, weight, colors
- **Animations**: fade-in, slide-up effects
- Common layout patterns

### 2.8 Organize Style Files
- Create modular SCSS file structure
- Set up main import file
- Ensure proper import order
- Test all styles compile correctly
- Verify no naming conflicts

## ✅ Success Criteria
- All color variables accessible throughout project
- Typography hierarchy clearly defined
- Black background dominant throughout
- Paint splatter effects render smoothly
- Buttons have consistent styling and interactions
- Forms are styled and accessible
- Utility classes work as expected
- Streetwear aesthetic achieved

## 🎨 Design Principles to Follow
- **Black Dominant**: Ensure black is the primary background
- **Paint Splatter**: Use organic, fluid shapes with blur
- **Streetwear**: Bold, uppercase, high contrast
- **Mobile-First**: Start with mobile, enhance for desktop
- **Performance**: Use GPU acceleration for animations
- **Accessibility**: Maintain proper contrast ratios

## 🚨 Potential Issues to Watch
- Font loading delays
- Paint splatter performance on mobile
- Color contrast accessibility
- Animation performance
- SCSS compilation errors
- Browser compatibility for blur effects

## ➡️ Next Step
Once design system is complete, proceed to Step 3: Hero Section Implementation