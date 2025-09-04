#!/bin/bash

# Color variables
sed -i 's/\$color-black/var(--color-black)/g' *.scss
sed -i 's/\$color-white/var(--color-white)/g' *.scss
sed -i 's/\$color-cream/var(--color-cream)/g' *.scss
sed -i 's/\$color-light-blue/var(--color-light-blue)/g' *.scss
sed -i 's/\$color-purple/var(--color-purple)/g' *.scss
sed -i 's/\$color-dark-blue/var(--color-dark-blue)/g' *.scss
sed -i 's/\$color-turquoise/var(--color-turquoise)/g' *.scss
sed -i 's/\$color-success/var(--color-success)/g' *.scss
sed -i 's/\$color-error/var(--color-error)/g' *.scss
sed -i 's/\$color-warning/var(--color-warning)/g' *.scss

# Gray scale
sed -i 's/\$gray-100/var(--color-gray-100)/g' *.scss
sed -i 's/\$gray-200/var(--color-gray-200)/g' *.scss
sed -i 's/\$gray-300/var(--color-gray-300)/g' *.scss
sed -i 's/\$gray-400/var(--color-gray-400)/g' *.scss
sed -i 's/\$gray-500/var(--color-gray-500)/g' *.scss
sed -i 's/\$gray-600/var(--color-gray-600)/g' *.scss
sed -i 's/\$gray-700/var(--color-gray-700)/g' *.scss
sed -i 's/\$gray-800/var(--color-gray-800)/g' *.scss
sed -i 's/\$gray-900/var(--color-gray-900)/g' *.scss

# Spacing
sed -i 's/\$spacing-xs/var(--spacing-xs)/g' *.scss
sed -i 's/\$spacing-sm/var(--spacing-sm)/g' *.scss
sed -i 's/\$spacing-md/var(--spacing-md)/g' *.scss
sed -i 's/\$spacing-lg/var(--spacing-lg)/g' *.scss
sed -i 's/\$spacing-xl/var(--spacing-xl)/g' *.scss
sed -i 's/\$spacing-2xl/var(--spacing-2xl)/g' *.scss
sed -i 's/\$spacing-3xl/var(--spacing-3xl)/g' *.scss
sed -i 's/\$spacing-4xl/var(--spacing-4xl)/g' *.scss
sed -i 's/\$spacing-5xl/var(--spacing-5xl)/g' *.scss

# Radius
sed -i 's/\$radius-sm/var(--radius-sm)/g' *.scss
sed -i 's/\$radius-md/var(--radius-md)/g' *.scss
sed -i 's/\$radius-lg/var(--radius-lg)/g' *.scss
sed -i 's/\$radius-xl/var(--radius-xl)/g' *.scss
sed -i 's/\$radius-2xl/var(--radius-2xl)/g' *.scss
sed -i 's/\$radius-full/var(--radius-full)/g' *.scss

# Transitions
sed -i 's/\$transition-fast/var(--transition-fast)/g' *.scss
sed -i 's/\$transition-normal/var(--transition-normal)/g' *.scss
sed -i 's/\$transition-slow/var(--transition-slow)/g' *.scss
sed -i 's/\$transition-slower/var(--transition-slower)/g' *.scss
sed -i 's/\$ease-in-out/var(--ease-in-out)/g' *.scss
sed -i 's/\$ease-out/var(--ease-out)/g' *.scss
sed -i 's/\$ease-in/var(--ease-in)/g' *.scss
sed -i 's/\$ease-elastic/var(--ease-elastic)/g' *.scss

# Shadows
sed -i 's/\$shadow-xs/var(--shadow-xs)/g' *.scss
sed -i 's/\$shadow-sm/var(--shadow-sm)/g' *.scss
sed -i 's/\$shadow-md/var(--shadow-md)/g' *.scss
sed -i 's/\$shadow-lg/var(--shadow-lg)/g' *.scss
sed -i 's/\$shadow-xl/var(--shadow-xl)/g' *.scss
sed -i 's/\$shadow-2xl/var(--shadow-2xl)/g' *.scss
sed -i 's/\$glow-blue/var(--glow-blue)/g' *.scss
sed -i 's/\$glow-purple/var(--glow-purple)/g' *.scss
sed -i 's/\$glow-cream/var(--glow-cream)/g' *.scss
sed -i 's/\$shadow-offset-lg/var(--shadow-offset-lg)/g' *.scss
sed -i 's/\$shadow-offset/var(--shadow-offset)/g' *.scss

# Z-index
sed -i 's/\$z-negative/var(--z-negative)/g' *.scss
sed -i 's/\$z-base/var(--z-base)/g' *.scss
sed -i 's/\$z-blob/var(--z-blob)/g' *.scss
sed -i 's/\$z-content/var(--z-content)/g' *.scss
sed -i 's/\$z-dropdown/var(--z-dropdown)/g' *.scss
sed -i 's/\$z-sticky/var(--z-sticky)/g' *.scss
sed -i 's/\$z-overlay/var(--z-overlay)/g' *.scss
sed -i 's/\$z-modal/var(--z-modal)/g' *.scss
sed -i 's/\$z-popover/var(--z-popover)/g' *.scss
sed -i 's/\$z-tooltip/var(--z-tooltip)/g' *.scss
sed -i 's/\$z-notification/var(--z-notification)/g' *.scss
sed -i 's/\$z-max/var(--z-max)/g' *.scss

# Fonts
sed -i 's/\$font-primary/var(--font-primary)/g' *.scss
sed -i 's/\$font-secondary/var(--font-secondary)/g' *.scss
sed -i 's/\$font-mono/var(--font-mono)/g' *.scss
sed -i 's/\$font-regular/var(--font-weight-regular)/g' *.scss
sed -i 's/\$font-medium/var(--font-weight-medium)/g' *.scss
sed -i 's/\$font-semibold/var(--font-weight-semibold)/g' *.scss
sed -i 's/\$font-bold/var(--font-weight-bold)/g' *.scss
sed -i 's/\$font-extrabold/var(--font-weight-extrabold)/g' *.scss
sed -i 's/\$font-black/var(--font-weight-black)/g' *.scss

# Line height
sed -i 's/\$line-tight/var(--line-height-tight)/g' *.scss
sed -i 's/\$line-snug/var(--line-height-snug)/g' *.scss
sed -i 's/\$line-normal/var(--line-height-normal)/g' *.scss
sed -i 's/\$line-relaxed/var(--line-height-relaxed)/g' *.scss
sed -i 's/\$line-loose/var(--line-height-loose)/g' *.scss

# Letter spacing
sed -i 's/\$letter-tighter/var(--letter-spacing-tighter)/g' *.scss
sed -i 's/\$letter-tight/var(--letter-spacing-tight)/g' *.scss
sed -i 's/\$letter-normal/var(--letter-spacing-normal)/g' *.scss
sed -i 's/\$letter-wide/var(--letter-spacing-wide)/g' *.scss
sed -i 's/\$letter-wider/var(--letter-spacing-wider)/g' *.scss
sed -i 's/\$letter-widest/var(--letter-spacing-widest)/g' *.scss
sed -i 's/\$letter-streetwear/var(--letter-spacing-streetwear)/g' *.scss

# Containers
sed -i 's/\$container-xs/var(--container-xs)/g' *.scss
sed -i 's/\$container-sm/var(--container-sm)/g' *.scss
sed -i 's/\$container-md/var(--container-md)/g' *.scss
sed -i 's/\$container-lg/var(--container-lg)/g' *.scss
sed -i 's/\$container-xl/var(--container-xl)/g' *.scss
sed -i 's/\$container-2xl/var(--container-2xl)/g' *.scss
sed -i 's/\$container-max/var(--container-max)/g' *.scss

# Breakpoints - these stay as SCSS variables for media queries
# Don't replace these

echo "Fixed all SCSS variable references to CSS custom properties"
