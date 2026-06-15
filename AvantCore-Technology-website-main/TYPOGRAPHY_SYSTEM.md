# AVANTCORE Global Typography System

## Overview
This document defines the unified typography system for the entire AVANTCORE website. All pages must use these styles for consistency and professional enterprise appearance.

---

## Typography Hierarchy

### Display Headings (Hero/Mega)
Used for page hero sections and major announcements.

| Class | Size | Weight | Usage |
|-------|------|--------|-------|
| `.typography-display-lg` | 3.75rem (60px) | Bold (700) | Main page heroes, landing hero sections |
| `.typography-display-md` | 3rem (48px) | Bold (700) | Alternative hero, major announcements |

**Example:**
```tsx
<h1 className="typography-display-lg">
  Enterprise Technology for Digital-First Organizations
</h1>
```

---

### Section Headings
Primary content section titles used throughout all pages.

| Class | Size | Weight | Usage |
|-------|------|--------|-------|
| `.typography-heading-xl` | 2.25rem (36px) | Bold (700) | Main section title - use everywhere |
| `.typography-heading-lg` | 1.875rem (30px) | Bold (700) | Alternative section title |
| `.typography-heading-md` | 1.5rem (24px) | Semibold (600) | Subsection titles, card headers |
| `.typography-heading-sm` | 1.25rem (20px) | Semibold (600) | Feature titles, component headers |
| `.typography-heading-xs` | 1.125rem (18px) | Semibold (600) | Small section titles |

**Usage Example:**
```tsx
import { HeadingXL, HeadingMd } from '@/components/Typography';

export const MyPage = () => (
  <>
    <HeadingXL>Why Choose AVANTCORE</HeadingXL>
    <HeadingMd>Key Benefit 1</HeadingMd>
  </>
);
```

---

### Subheadings
Secondary titles and labels, typically used with descriptions.

| Class | Size | Weight | Usage |
|-------|------|--------|-------|
| `.typography-subheading-lg` | 1.25rem (20px) | Medium (500) | Large subheadings, alternate titles |
| `.typography-subheading-md` | 1.125rem (18px) | Medium (500) | Regular subheadings |
| `.typography-subheading-sm` | 1rem (16px) | Medium (500) | Small subheadings, descriptions |

---

### Body Text
Regular paragraph content for all readable text.

| Class | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `.typography-body-lg` | 1.125rem (18px) | Normal (400) | 1.5 | Large body text, key paragraphs |
| `.typography-body-md` | 1rem (16px) | Normal (400) | 1.5 | Standard body text (default) |
| `.typography-body-sm` | 0.875rem (14px) | Normal (400) | 1.5 | Small body text, captions |

**Usage Example:**
```tsx
import { BodyMd } from '@/components/Typography';

<BodyMd>
  AVANTCORE delivers technology infrastructure that enables enterprises 
  to operate at scale, innovate with confidence, and compete globally.
</BodyMd>
```

---

### Labels & Captions
Small, uppercase labels used for UI elements and metadata.

| Class | Size | Weight | Text Transform | Usage |
|-------|------|--------|-----------------|-------|
| `.typography-label-lg` | 0.875rem (14px) | Semibold (600) | UPPERCASE | Section labels, badges |
| `.typography-label-md` | 0.75rem (12px) | Semibold (600) | UPPERCASE | Component labels, tags |
| `.typography-label-sm` | 0.625rem (10px) | Bold (700) | UPPERCASE | Small labels, metadata |

**Usage Example:**
```tsx
import { LabelMd } from '@/components/Typography';

<LabelMd>Why Choose AVANTCORE</LabelMd>
```

---

## Font Specifications

### Font Family
```css
--font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
                'Helvetica Neue', sans-serif;
```

### Font Weights
- **Light (300)**: Not typically used in body text
- **Normal (400)**: Body text, paragraphs
- **Medium (500)**: Subheadings, emphasis
- **Semibold (600)**: Headings, strong emphasis
- **Bold (700)**: Display headings, major titles

### Line Heights (Leading)
- **1.15 (tight)**: Display headings, small text
- **1.25 (snug)**: Headings, labels
- **1.35 (normal)**: Most headings
- **1.5 (relaxed)**: Body text, readability
- **1.65 (loose)**: Long-form content

### Letter Spacing (Tracking)
- **-0.02em (tight)**: Display headings
- **-0.01em (compact)**: Headings
- **0px (normal)**: Most text
- **0.2px (subtle)**: Slight emphasis
- **0.5px (wide)**: Labels, uppercase
- **0.8px (wider)**: Small labels, metadata

---

## Semantic HTML Elements

All standard HTML elements are automatically styled:

```tsx
<h1>Display heading size (5xl)</h1>
<h2>Large section heading (4xl)</h2>
<h3>Section heading (2xl)</h3>
<h4>Subsection heading (xl)</h4>
<h5>Small heading (lg)</h5>
<h6>Extra small heading (base)</h6>
<p>Body text (base)</p>
<strong>Bold emphasis (semibold)</strong>
<em>Italic emphasis</em>
<small>Small text (sm)</small>
```

---

## Component Usage Guide

### Import Typography Components
```tsx
import {
  DisplayLg, DisplayMd,
  HeadingXL, HeadingLg, HeadingMd, HeadingSm, HeadingXs,
  SubheadingLg, SubheadingMd, SubheadingSm,
  BodyLg, BodyMd, BodySm,
  LabelLg, LabelMd, LabelSm,
  Text
} from '@/components/Typography';
```

### Using the Flexible Text Component
```tsx
// Display heading
<Text variant="display-lg" as="h1">Hero Title</Text>

// Section heading
<Text variant="heading-xl" as="h2">Section Title</Text>

// Body text
<Text variant="body-md">Regular paragraph content</Text>

// Label
<Text variant="label-md">Feature Label</Text>
```

---

## Page Implementation Guide

### Landing Page (HomeNew.tsx)
```tsx
import { DisplayMd, HeadingXL, BodyMd, LabelMd } from '@/components/Typography';

export const HomePage = () => (
  <>
    {/* Hero Section */}
    <DisplayMd>Enterprise Solutions</DisplayMd>
    <BodyMd>Your business description here</BodyMd>

    {/* Content Sections */}
    <HeadingXL>Why Choose AVANTCORE</HeadingXL>
    <BodyMd>Explanation paragraph</BodyMd>
  </>
);
```

### About Page (AboutEnterprise.tsx)
```tsx
import { DisplayLg, HeadingXL, HeadingMd, BodyMd } from '@/components/Typography';

export const AboutPage = () => (
  <>
    <DisplayLg>Architecting Enterprise Solutions</DisplayLg>
    
    <section>
      <HeadingXL>Our Mission</HeadingXL>
      <BodyMd>Mission description</BodyMd>
    </section>
  </>
);
```

### Services/Products Pages
```tsx
import { HeadingXL, HeadingMd, BodyMd } from '@/components/Typography';

export const ServicesPage = () => (
  <>
    <HeadingXL>Our Services</HeadingXL>
    
    {services.map(service => (
      <div key={service.id}>
        <HeadingMd>{service.name}</HeadingMd>
        <BodyMd>{service.description}</BodyMd>
      </div>
    ))}
  </>
);
```

---

## Responsive Typography

Typography automatically scales down on smaller screens:

### Tablet (≤768px)
- Display headings: 2-3 sizes smaller
- Section headings: 1 size smaller
- Maintained readability

### Mobile (≤480px)
- Display headings: 3-4 sizes smaller
- Section headings: 2-3 sizes smaller
- Body text: Remains readable

**Example - Mobile Responsive:**
```tsx
{/* Desktop: 60px → Tablet: 48px → Mobile: 36px */}
<DisplayLg>Enterprise Solutions</DisplayLg>
```

---

## Color Application

### Heading Colors
- Primary color: `var(--color-slate-900)` (#0f172a)
- Used for all h1-h6 elements

### Body Text Colors
- Primary color: `var(--color-slate-600)` (#475569)
- Softer than headings for readability

### Links
- Default color: `var(--color-primary)` (#1A237E)
- Hover color: `var(--color-slate-900)` (#0f172a)

---

## Utilities & Helpers

### Text Truncation
```tsx
{/* Single line ellipsis */}
<p className="text-truncate">Long text...</p>

{/* Clamp to 2 lines */}
<p className="text-clamp-2">Long text...</p>

{/* Clamp to 3 lines */}
<p className="text-clamp-3">Long text...</p>
```

---

## Best Practices

### ✓ DO
- Use typography components for consistency
- Match heading sizes to section importance
- Keep body text at `body-md` by default
- Use labels for metadata and UI elements
- Apply consistent spacing below headings

### ✗ DON'T
- Override typography sizes arbitrarily
- Use different heading styles on same-level sections
- Mix font families
- Apply body-sm to large content areas
- Forget responsive scaling on mobile

---

## Migration Checklist

When updating existing pages:

- [ ] Replace hardcoded font sizes with typography classes
- [ ] Ensure h1-h3 use consistent sizes across pages
- [ ] Update body text to use `body-md` (16px, 1.5 line-height)
- [ ] Apply `label-md` to all metadata/badges
- [ ] Test responsive behavior on mobile/tablet
- [ ] Verify color contrast meets accessibility standards
- [ ] Remove inline style font properties
- [ ] Import Typography components instead of using classNames

---

## Support & Questions

For questions about typography implementation:
1. Reference this guide
2. Check existing component implementations
3. Use the Typography component library
4. Test responsive behavior across devices

---

**Last Updated:** 2026-06-11
**Version:** 1.0.0
**Status:** Enterprise Standard - Apply Consistently
