# Step 3: Hero Section Implementation

## 📋 Objective
Create the main hero section with streetwear aesthetic, video background, paint splatter effects, and call-to-action buttons.

## ⚡ Prerequisites
- Steps 1 & 2 completed
- Access to outfino-commercial.mp4 video
- App store button assets (SVG and PNG)
- Design system styles available

## 📝 Tasks to Complete

### 3.1 Create Hero Component Structure
Build the hero section with the following layers:
- **Video Background Layer**: Autoplay, loop, muted video with overlay
- **Paint Splatter Effects Layer**: Decorative blobs in cream, blue, and purple
- **Content Layer**: Main heading, subtitle, and CTA buttons
- **Floating Tips Layer**: Desktop-only style suggestions
- **Scroll Indicator**: Animated indicator at bottom

### 3.2 Implement Video Background
- Add the commercial video as background
- Set opacity to 30% for subtlety
- Apply gradient overlay for text readability
- Ensure video autoplays, loops, and is muted
- Add playsInline attribute for mobile compatibility
- Implement fallback image for browsers without video support

### 3.3 Add Paint Splatter Effects
Position paint blobs strategically:
- **Cream Blob**: Top-right corner, 300x300px, 20% opacity
- **Blue Blob**: Bottom-left corner, 400x400px, 25% opacity
- **Purple Blob**: Middle-right edge, 250x250px, 15% opacity
- Apply blur filter for soft edges
- Add floating animation with 20s duration
- Ensure blobs don't interfere with content (pointer-events: none)

### 3.4 Create Hero Content
**Main Title**:
- Text: "Elevate Your Style with Outfino"
- Apply gradient effect to "Style" word
- Use Playfair Display font
- Responsive sizing: 2.5rem to 5rem
- Add slide-up animation on load

**Subtitle**:
- Text: "Discover Fashion Designed for You."
- Cream color from palette
- Smaller font size with good contrast
- Delayed animation (0.2s after title)

### 3.5 Implement CTA Buttons
Create app store download buttons:
- Google Play Store button with official badge
- Apple App Store button with official badge
- Black background with white border (streetwear style)
- Hover effect: invert colors and lift shadow
- Link to correct app store URLs
- Add proper rel attributes for security
- Stagger animation (0.4s delay)

### 3.6 Add Floating Style Tips (Desktop Only)
Implement three floating tip bubbles:
- "Throw in a lightweight scarf for extra style points."
- "Consider khaki shorts for warmer days."
- "Mix it up with some boat shoes to lean into the nautical theme"
- Semi-transparent background with backdrop blur
- Position at different heights on right side
- Floating animation with different delays
- Hide on mobile and tablet views

### 3.7 Create Scroll Indicator
- Position at bottom center
- "SCROLL" text in uppercase
- Vertical line with gradient fade
- Bouncing animation (2s loop)
- Subtle but noticeable

### 3.8 Add Parallax Effect (Optional)
Implement smooth parallax scrolling:
- Video moves slower than scroll (0.5x speed)
- Content moves slightly (0.2x speed)
- Content fades out as user scrolls down
- Use requestAnimationFrame for performance
- Disable on mobile for better performance

### 3.9 Mobile Optimization
Adjust for mobile devices:
- Reduce title font size to 2rem
- Stack CTA buttons vertically
- Remove floating tips
- Adjust padding and spacing
- Ensure video doesn't drain battery
- Test touch interactions

## ✅ Success Criteria
- Video plays automatically and loops seamlessly
- Text is readable over video background
- Paint splatter effects add visual interest without distraction
- CTA buttons are prominent and functional
- Animations are smooth (60fps)
- Hero section fills viewport height
- Mobile experience is optimized
- Page loads quickly despite video

## 🎨 Design Requirements
- Maintain black dominant background
- Streetwear aesthetic with bold typography
- Paint splatter elements visible but subtle
- High contrast for readability
- Smooth, professional animations
- Mobile-first responsive design

## 🚨 Potential Issues to Watch
- Video file size and loading time
- Mobile video playback issues
- Text readability over video
- Paint splatter performance impact
- Button link functionality
- Animation performance on older devices
- Parallax effect causing jank

## ➡️ Next Step
Once hero section is complete, proceed to Step 4: Feature Sections Implementation