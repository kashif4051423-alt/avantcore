# Premium Animations Quick Reference

## Most Common Animations

### 1. Scroll Reveal (Content Entering Viewport)
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
  Your content here
</motion.div>
```
**Best For**: Text blocks, feature sections  
**Duration**: 0.8s  
**Feel**: Subtle upward fade

---

### 2. Image Fade In
```tsx
import { imageFadeIn } from '@/constants/animations';

const { ref, inView } = useScrollReveal();

<motion.div
  ref={ref}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  variants={imageFadeIn}
>
  <img src="/image.jpg" alt="" />
</motion.div>
```
**Best For**: Hero images, featured photos  
**Duration**: 1.0s  
**Feel**: Subtle fade with scale

---

### 3. Card Hover
```tsx
import { premiumCardHover } from '@/constants/animations';

<motion.div
  className="card"
  {...premiumCardHover}
>
  Card content
</motion.div>
```
**Best For**: Feature cards, product cards  
**Hover Effect**: Lifts 6px with shadow  
**Feel**: Refined elevation

---

### 4. Button Hover
```tsx
import { premiumButtonHoverWithShadow } from '@/constants/animations';

<motion.button
  {...premiumButtonHoverWithShadow}
>
  Click Me
</motion.button>
```
**Best For**: CTA buttons  
**Hover Effect**: Slight scale + lift + shadow  
**Feel**: Professional interaction

---

### 5. Staggered Grid/List
```tsx
import { premiumStaggerContainer, premiumStaggerItem } from '@/constants/animations';

const { ref, inView } = useScrollReveal();

<motion.div
  ref={ref}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  variants={premiumStaggerContainer}
>
  {items.map(item => (
    <motion.div key={item.id} variants={premiumStaggerItem}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```
**Best For**: Grids, lists  
**Stagger Delay**: 0.08-0.12s  
**Feel**: Sequential, elegant reveal

---

## Animation Types Reference

### Scroll Reveals
- `premiumScrollReveal` - Fade up ⭐
- `premiumScrollRevealLeft` - From left
- `premiumScrollRevealRight` - From right

### Image Animations
- `imageFadeIn` - Fade in center ⭐
- `imageFadeInLeft` - From left
- `imageFadeInRight` - From right

### Hover Effects
- `premiumCardHover` - Card lift ⭐
- `premiumButtonHover` - Button subtle
- `premiumButtonHoverWithShadow` - Button prominent ⭐
- `premiumImageHover` - Image zoom 3%
- `premiumIconHover` - Icon scale 1.1x

### Content
- `contentFadeIn` - Stagger container ⭐
- `contentFadeInItem` - Stagger item
- `textSlideFade` - Text entrance ⭐

### Containers
- `premiumStaggerContainer` - Grid parent ⭐
- `premiumStaggerItem` - Grid item

---

## Import Quick Copy

```tsx
// Animations constants
import {
  premiumScrollReveal,
  premiumScrollRevealLeft,
  premiumScrollRevealRight,
  imageFadeIn,
  imageFadeInLeft,
  imageFadeInRight,
  contentFadeIn,
  contentFadeInItem,
  textSlideFade,
  premiumCardHover,
  premiumButtonHoverWithShadow,
  premiumImageHover,
  premiumStaggerContainer,
  premiumStaggerItem,
} from '@/constants/animations';

// Hooks
import { useScrollReveal } from '@/hooks/useScrollReveal';

// UI
import { motion } from 'framer-motion';
```

---

## Template: Hero Section
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
        <img src="/hero.jpg" alt="Hero" className="w-full rounded-lg" />
      </motion.div>
    </Section>
  );
}
```

---

## Template: Feature Cards
```tsx
export function Features({ features }) {
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
          className="card p-6"
          {...premiumCardHover}
        >
          <h3 className="typography-subsection mb-4">
            {feature.title}
          </h3>
          <p className="typography-body-secondary">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
```

---

## Template: Text Content Block
```tsx
export function ArticleContent({ paragraphs }) {
  const { ref, inView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={contentFadeIn}
      className="max-w-3xl"
    >
      {paragraphs.map((paragraph, i) => (
        <motion.p
          key={i}
          variants={contentFadeInItem}
          className="typography-body mb-6 paragraph-readable"
        >
          {paragraph}
        </motion.p>
      ))}
    </motion.div>
  );
}
```

---

## Template: CTA Button
```tsx
export function CallToAction() {
  return (
    <motion.button
      className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg"
      {...premiumButtonHoverWithShadow}
    >
      Get Started Today
    </motion.button>
  );
}
```

---

## Key Numbers to Remember

| Property | Value | Use |
|----------|-------|-----|
| Button Hover Scale | 1.02 | Small, professional |
| Card Hover Lift | 6px | Noticeable elevation |
| Image Hover Scale | 1.03 | Subtle zoom |
| Scroll Reveal Duration | 0.8-0.85s | Comfortable entrance |
| Stagger Delay | 0.08-0.12s | Snappy sequence |
| Icon Scale | 1.1 | 10% growth |
| Easing | `[0.25, 0.46, 0.45, 0.94]` | Premium curve |

---

## Common Mistakes ❌

### Too many animations on one element
```tsx
// DON'T
<motion.div
  animate={{ y: -10, scale: 1.1, rotate: 5 }}
>
```

### Too long hover animations
```tsx
// DON'T
transition={{ duration: 1.5 }}
```

### Excessive scale on hover
```tsx
// DON'T
whileHover={{ scale: 1.3 }}
```

### Too much stagger delay
```tsx
// DON'T
staggerChildren: 0.3
```

---

## Do's ✅

### Keep it subtle
```tsx
// DO
whileHover={{ scale: 1.02 }}
transition={{ duration: 0.3 }}
```

### Purposeful motion
```tsx
// DO: Only animate what matters
animate={{ y: 0 }}  // Not: y, scale, rotate, skew...
```

### Professional easing
```tsx
// DO
ease: [0.25, 0.46, 0.45, 0.94]
```

### Consistent timing
```tsx
// DO: Use same duration across similar elements
// Button hover: 0.25-0.3s
// Card hover: 0.3-0.35s
// Scroll reveal: 0.8-0.85s
```

---

## Performance Tips

### Lazy Load Heavy Animations
```tsx
const { ref, inView } = useScrollReveal();
// Only animate when visible
{inView && <AnimatedElement />}
```

### Skip Animations for Reduced Motion
```tsx
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

// Skip animation if needed
disabled={prefersReducedMotion}
```

### Test on Real Devices
- Desktop (60fps baseline)
- Tablet (can be slower)
- Mobile (test on actual phone)

---

## When to Use Each Animation

| Animation | When to Use |
|-----------|------------|
| `premiumScrollReveal` | Content blocks, features, sections |
| `imageFadeIn` | Hero images, large photos |
| `contentFadeIn` | Article text, multiple paragraphs |
| `premiumCardHover` | Product cards, feature cards |
| `premiumButtonHoverWithShadow` | Important CTAs |
| `premiumStaggerContainer` | Grids, lists, multiple items |
| `textSlideFade` | Headlines, titles |
| `premiumImageHover` | Gallery images, portfolio |

---

## Quick Troubleshooting

**Animation not working?**
- Check if `ref` is set on element
- Verify `inView` state is changing
- Test in browser console: `inView ? "visible" : "hidden"`

**Animation too slow?**
- Reduce duration (0.8s → 0.6s)
- Check easing curve is applied

**Animation too fast?**
- Increase duration (0.3s → 0.5s)
- Add stagger delay between items

**Jittery animation?**
- Check for CSS `transition` conflicts
- Use `whileInView` over custom scroll tracking
- Test on different browsers

---

## Animation Timing Cheat Sheet

```
Quick reactions:     0.15-0.25s  (hover, click)
Standard interaction: 0.3s        (button, card)
Content entrance:    0.6-0.8s    (scroll reveal)
Heavy content:       0.9-1.0s    (images, parallax)
```

---

## System Features

✅ 30+ premium animation presets  
✅ Custom easing curve included  
✅ Scroll reveal hooks provided  
✅ Performance optimized  
✅ Accessibility compliant  
✅ No excessive motion  
✅ No bounce effects  
✅ Professional, subtle feel  

**Start animating like Systems Limited today!**

