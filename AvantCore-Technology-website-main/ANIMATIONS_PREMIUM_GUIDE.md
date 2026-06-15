# Premium Enterprise Animations Guide

## Overview

Your website now features premium, enterprise-grade animations inspired by Systems Limited. These animations are **subtle**, **refined**, and designed to enhance user experience without distraction.

**Key Philosophy**: Motion should feel like natural, purposeful movement—not flashy or attention-seeking.

---

## Animation Principles

### ✅ Do's

- **Subtle motion**: 0.3-1.0 second durations
- **Refined easing**: Custom cubic-bezier `[0.25, 0.46, 0.45, 0.94]`
- **Purposeful timing**: Animations guide attention thoughtfully
- **Restrained scale**: 1.01-1.10 scale ranges (not 1.5x jumps)
- **Professional shadow transitions**: Depth without excess
- **Smooth stagger timing**: 0.08-0.15s between children

### ❌ Don'ts

- **Bounce effects**: Avoid playful bounces (startup-style)
- **Excessive motion**: No 2+ second animations
- **Fast easing**: Avoid harsh linear easing
- **Aggressive scale**: Don't zoom beyond 1.1x on hover
- **Rapid flashing**: No attention-grabbing pulse effects
- **Startup style**: No trendy, exaggerated movements

---

## Animation Categories

### 1. Scroll Reveal Animations

Elements animate in as they enter the viewport. Perfect for revealing content during page scrolling.

#### Available Animations

**Premium Scroll Reveal** (Recommended for most content)
```tsx
import { premiumScrollReveal } from '@/constants/animations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function ContentSection() {
  const { ref, inView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={premiumScrollReveal}
    >
      Content fades in with subtle upward motion
    </motion.div>
  );
}
```

**Premium Scroll Reveal Left**
```tsx
export function ImageWithText() {
  const { ref, inView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={premiumScrollRevealLeft}
    >
      Slides in from left with fade
    </motion.div>
  );
}
```

**Premium Scroll Reveal Right**
```tsx
export function ReverseLayout() {
  const { ref, inView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={premiumScrollRevealRight}
    >
      Slides in from right with fade
    </motion.div>
  );
}
```

**Characteristics**:
- Duration: 0.8-0.85 seconds
- Easing: Custom premium bezier
- Movement: 40-50px Y, 50px X
- Effect: Smooth, refined entry

---

### 2. Image Fade Transitions

Smooth image loading animations with premium feel.

#### Available Animations

**Image Fade In**
```tsx
import { imageFadeIn } from '@/constants/animations';

export function HeroImage() {
  const { ref, inView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={imageFadeIn}
    >
      <img src="/hero.jpg" alt="Hero" />
    </motion.div>
  );
}
```

**Image Fade In Left / Right**
```tsx
// For left-to-right layouts
variants={imageFadeInLeft}

// For right-to-left layouts
variants={imageFadeInRight}
```

**Characteristics**:
- Duration: 0.9-1.0 seconds
- Includes subtle scale (0.97-0.98 to 1.0)
- Fade + slide + scale combination
- Perfect for hero images and featured visuals

---

### 3. Content Fade-In Animations

Text and content appear smoothly with staggered children.

#### Available Animations

**Content Fade In Container** (Parent)
```tsx
import { contentFadeIn, contentFadeInItem } from '@/constants/animations';

export function ArticleContent() {
  const { ref, inView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={contentFadeIn}
    >
      {/* Each paragraph fades in with stagger */}
      <motion.p variants={contentFadeInItem}>Paragraph 1</motion.p>
      <motion.p variants={contentFadeInItem}>Paragraph 2</motion.p>
      <motion.p variants={contentFadeInItem}>Paragraph 3</motion.p>
    </motion.div>
  );
}
```

**Characteristics**:
- Container duration: 0.7 seconds
- Item duration: 0.6 seconds each
- Stagger: 0.08 seconds between items
- Effect: Sequential, elegant reveal

---

### 4. Card Hover Effects

Premium hover states for cards without excessive bounce.

#### Available Animations

**Premium Card Hover** (Recommended)
```tsx
import { premiumCardHover } from '@/constants/animations';
import { motion } from 'framer-motion';

export function FeatureCard() {
  return (
    <motion.div
      className="card"
      {...premiumCardHover}
    >
      Card Content
    </motion.div>
  );
}
```

**Premium Card Hover Subtle** (For dense layouts)
```tsx
// Less elevation, suitable for tightly packed grids
{...premiumCardHoverSubtle}
```

**Characteristics**:
- Elevation: 3-6px on hover
- Shadow: Refined, 12-35px blur
- Scale: None (only Y movement)
- Tap state: Returns to near original position
- Duration: 0.3-0.35 seconds

---

### 5. Button Hover States

Refined button interactions with professional feel.

#### Available Animations

**Premium Button Hover** (Standard CTA)
```tsx
import { premiumButtonHover } from '@/constants/animations';

export function CTAButton() {
  return (
    <motion.button
      className="btn-primary"
      {...premiumButtonHover}
    >
      Click Me
    </motion.button>
  );
}
```

**Premium Button Hover with Shadow** (Emphasis)
```tsx
// For important CTAs with enhanced shadow
{...premiumButtonHoverWithShadow}
```

**Characteristics**:
- Scale: 1.01-1.02 (very subtle)
- Movement: 1-2px upward on hover
- Shadow: Blue-tinted, 12-24px blur
- Tap: Slight scale down (0.98-0.99)
- Duration: 0.25-0.3 seconds

**Example Usage**:
```tsx
<motion.button
  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold"
  {...premiumButtonHoverWithShadow}
>
  Learn More
</motion.button>
```

---

### 6. Image Hover Effects

Smooth zoom for interactive images without excessive motion.

#### Available Animations

**Premium Image Hover**
```tsx
import { premiumImageHover } from '@/constants/animations';

export function PortfolioImage() {
  return (
    <motion.div
      className="overflow-hidden rounded-lg"
      {...premiumImageHover}
    >
      <img src="/portfolio.jpg" alt="Project" />
    </motion.div>
  );
}
```

**Premium Image Hover Subtle** (For gallery grids)
```tsx
// Minimal scale for consistent gallery experience
{...premiumImageHoverSubtle}
```

**Characteristics**:
- Scale: 1.01-1.03 on hover
- Duration: 0.35-0.4 seconds
- No rotation or angle change
- Effect: Smooth, controlled zoom

---

### 7. Parallax Scroll Effects

Subtle depth effect without causing motion sickness.

#### Available Animations

**Parallax Scroll** (Recommended)
```tsx
import { parallaxScroll } from '@/constants/animations';
import { motion } from 'framer-motion';

export function ParallaxSection() {
  return (
    <motion.div
      {...parallaxScroll(20)} // 20px offset
    >
      <img src="/background.jpg" alt="Parallax" />
    </motion.div>
  );
}
```

**Characteristics**:
- Multiplier: 0.3x of viewport movement (subtle)
- Offset: 10-50px range recommended
- Duration: 0.8 seconds
- Viewport trigger: 100px before entering
- Effect: Depth perception without dizziness

---

### 8. Staggered Icon Animations

Icons appear in sequence for elegant product/feature reveals.

#### Available Animations

**Staggered Icons** (Parent + Children)
```tsx
import { staggerIconContainer, staggerIconItem } from '@/constants/animations';

export function FeatureGrid() {
  const { ref, inView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerIconContainer}
      className="grid grid-cols-4 gap-8"
    >
      {features.map((feature, i) => (
        <motion.div key={i} variants={staggerIconItem}>
          <feature.Icon className="w-12 h-12" />
          <p>{feature.name}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
```

**Characteristics**:
- Stagger: 0.1s between items
- Initial delay: 0.15s
- Item duration: 0.5 seconds
- Scale: 0.9 to 1.0 (subtle pop)
- Perfect for: 4-8 item grids

---

### 9. Button Icon Hover

Refined icon interactions within buttons.

#### Available Animations

**Premium Icon Hover**
```tsx
import { premiumIconHover } from '@/constants/animations';

export function IconButton() {
  return (
    <motion.button
      {...premiumIconHover}
      className="p-2"
    >
      <ArrowRight className="w-5 h-5" />
    </motion.button>
  );
}
```

**Characteristics**:
- Scale: 1.1 on hover (10% growth)
- No rotation
- Tap state: 0.95 scale
- Duration: 0.3 seconds

---

### 10. Text Slide & Fade

Text enters with refined motion for readability.

#### Available Animations

**Text Slide Fade**
```tsx
import { textSlideFade, textSlideFadeLeft, textSlideFadeRight } from '@/constants/animations';

export function ArticleTitle() {
  const { ref, inView } = useScrollReveal();

  return (
    <motion.h1
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={textSlideFade}
    >
      Your Article Title
    </motion.h1>
  );
}
```

**Variants**:
- `textSlideFade`: Up from bottom
- `textSlideFadeLeft`: From left
- `textSlideFadeRight`: From right

**Characteristics**:
- Duration: 0.7-0.8 seconds
- Movement: 25-30px
- Effect: Smooth entrance with readable easing

---

## Common Usage Patterns

### Pattern 1: Hero Section with Image
```tsx
export function HeroSection() {
  const { ref, inView } = useScrollReveal();

  return (
    <Section spacing="hero">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={imageFadeIn}
      >
        <img src="/hero.jpg" alt="Hero" className="w-full" />
      </motion.div>
    </Section>
  );
}
```

### Pattern 2: Feature Cards Grid
```tsx
export function FeaturesGrid({ features }) {
  const { ref, inView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={premiumStaggerContainer}
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {features.map(feature => (
        <motion.div
          key={feature.id}
          variants={premiumStaggerItem}
          className="card"
          {...premiumCardHover}
        >
          {feature.name}
        </motion.div>
      ))}
    </motion.div>
  );
}
```

### Pattern 3: Text Content Block
```tsx
export function ContentBlock({ content }) {
  const { ref, inView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={contentFadeIn}
    >
      {content.paragraphs.map((para, i) => (
        <motion.p
          key={i}
          variants={contentFadeInItem}
          className="typography-body mb-6"
        >
          {para}
        </motion.p>
      ))}
    </motion.div>
  );
}
```

### Pattern 4: CTA Button
```tsx
export function CallToAction() {
  return (
    <motion.button
      className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg"
      {...premiumButtonHoverWithShadow}
    >
      Get Started
    </motion.button>
  );
}
```

---

## Available Animation Objects

### Scroll Reveal (Entrance)
- `premiumScrollReveal` - Center entry ⭐
- `premiumScrollRevealLeft` - From left
- `premiumScrollRevealRight` - From right

### Image Animations
- `imageFadeIn` - Center fade-in ⭐
- `imageFadeInLeft` - Fade in from left
- `imageFadeInRight` - Fade in from right

### Content Animations
- `contentFadeIn` - Staggered container ⭐
- `contentFadeInItem` - Individual item
- `textSlideFade` - Text entrance ⭐
- `textSlideFadeLeft` - Text from left
- `textSlideFadeRight` - Text from right

### Hover Effects
- `premiumCardHover` - Strong elevation ⭐
- `premiumCardHoverSubtle` - Gentle elevation
- `premiumButtonHover` - Minimal button scale ⭐
- `premiumButtonHoverWithShadow` - Button with shadow
- `premiumImageHover` - 3% zoom ⭐
- `premiumImageHoverSubtle` - 1% zoom

### Icon Animations
- `staggerIconContainer` - Parent container ⭐
- `staggerIconItem` - Individual icon
- `premiumIconHover` - Icon hover effect ⭐

### Stagger Containers
- `premiumStaggerContainer` - Grid/list parent ⭐
- `premiumStaggerItem` - Grid/list item

### Section Transitions
- `smoothSectionEntry` - Full section reveal ⭐
- `parallaxScroll()` - Depth effect

---

## Performance Optimization

### Best Practices

1. **Use `once: true` for scroll reveals** (default)
   - Elements animate only once
   - Better performance for long pages

2. **Lazy load images** before animating
   - Use `useImageFadeIn()` hook
   - Wait for image load event

3. **Limit parallax to key elements**
   - Not on every image
   - 2-3 parallax effects per page maximum

4. **Group animations with containers**
   - Use stagger containers for grids
   - Don't animate each item independently

5. **Test on lower-end devices**
   - Disable animations on mobile if needed
   - Use `prefers-reduced-motion` media query

---

## Accessibility

### Motion Preferences

```tsx
// Respect user's motion preferences
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

export function AccessibleAnimation() {
  const { ref, inView } = useScrollReveal();
  
  const variants = prefersReducedMotion 
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : premiumScrollReveal;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      Content
    </motion.div>
  );
}
```

### Guidelines

- Never use animations as the only way to communicate information
- Provide fallback content for users with motion disabilities
- Test with screen readers (animations shouldn't affect readability)
- Keep animations under 1 second for accessibility

---

## Easing Curve Explanation

**Premium Easing**: `[0.25, 0.46, 0.45, 0.94]`

This custom cubic-bezier curve creates:
- Quick initial acceleration
- Smooth deceleration at the end
- Natural, professional feel
- Similar to macOS and iOS animations

**Result**: Motion feels purposeful and refined, not mechanical.

---

## Duration Guidelines

| Use Case | Duration | Easing |
|----------|----------|--------|
| Button hover | 0.25s | Premium |
| Card hover | 0.3-0.35s | Premium |
| Scroll reveal | 0.8-0.85s | Premium |
| Image fade | 0.9-1.0s | Premium |
| Parallax | 0.8s | easeOut |
| Stagger item | 0.5-0.6s | Premium |
| Section entry | 0.7-0.9s | Premium |

---

## Avoiding Common Mistakes

### ❌ Too Much Motion
```tsx
// DON'T: Combine multiple animations on one element
<motion.div
  animate={{ y: [0, -20, 0], scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
>
```

### ✅ Restrained Motion
```tsx
// DO: Single, purposeful animation
<motion.div
  animate={{ y: -6 }}
  transition={{ duration: 0.3 }}
>
```

---

### ❌ Startup Style Bounce
```tsx
// DON'T: Playful bounce animations
animate={{ y: [0, -15, -8, 0] }}
transition={{ type: 'spring', stiffness: 200, damping: 10 }}
```

### ✅ Enterprise Smoothness
```tsx
// DO: Smooth, professional easing
animate={{ y: -6 }}
transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
```

---

### ❌ Excessive Stagger
```tsx
// DON'T: Long wait between items
staggerChildren: 0.3  // Too long!
```

### ✅ Professional Stagger
```tsx
// DO: Snappy, refined timing
staggerChildren: 0.08  // Just right
delayChildren: 0.1
```

---

## Migration from Old Animations

### Before (Old System)
```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, ease: 'easeOut' }}
>
  Content
</motion.div>
```

### After (Premium System)
```tsx
import { premiumScrollReveal } from '@/constants/animations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const { ref, inView } = useScrollReveal();

<motion.div
  ref={ref}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  variants={premiumScrollReveal}
>
  Content
</motion.div>
```

**Benefits**:
- Cleaner, more semantic code
- Professional easing curve included
- Reusable, consistent animations
- Better organized and maintained

---

## Testing Animations

### Manual Testing
1. Test on 60fps (smooth performance)
2. Test on 30fps (reduced motion device)
3. Test on slow 4G (performance check)
4. Test with keyboard navigation
5. Test with screen reader

### Browser DevTools
```bash
# Slow down animations 4x for testing
Chrome DevTools → Animations panel → Slow playback
```

---

## Summary

Your premium animation system includes:

✅ **30+ animation presets** for all use cases  
✅ **Premium easing curve** `[0.25, 0.46, 0.45, 0.94]`  
✅ **Scroll reveal hooks** for easy implementation  
✅ **Subtle, refined motion** (no bounce or flash)  
✅ **Enterprise-grade timing** (0.25-1.0 seconds)  
✅ **Accessibility built-in** with motion preferences  
✅ **Performance optimized** for large pages  

**Start using premium animations in your components today!**

