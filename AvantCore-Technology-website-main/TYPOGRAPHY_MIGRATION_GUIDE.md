# Typography System Migration Guide

## Quick Start - 3 Steps

### Step 1: Import Components
```tsx
import {
  DisplayLg, DisplayMd,
  HeadingXL, HeadingLg, HeadingMd,
  BodyLg, BodyMd, BodySm,
  LabelMd
} from '@/components/Typography';
```

### Step 2: Use Components Instead of Div/P
**Before:**
```tsx
<div className="text-5xl font-bold">My Title</div>
<p className="text-base">My content</p>
```

**After:**
```tsx
<HeadingXL>My Title</HeadingXL>
<BodyMd>My content</BodyMd>
```

### Step 3: Test Responsive Behavior
Check mobile (320px), tablet (768px), desktop (1024px) views.

---

## Page-by-Page Implementation

### 1. HomeNew.tsx (Landing Page)

**Current Issues:**
- Inconsistent heading sizes
- Mixed font weights
- Variable line heights

**Implementation:**
```tsx
import { DisplayMd, HeadingXL, HeadingMd, BodyMd, BodyLg, LabelMd } from '@/components/Typography';

// Hero Section - Use DisplayMd
<motion.div>
  <DisplayMd>Sales And Distribution Management</DisplayMd>
  <BodyMd>Manage distribution operations effectively</BodyMd>
  <LabelMd>Enterprise Solution</LabelMd>
</motion.div>

// Why Choose Section - Use HeadingXL
<motion.div>
  <HeadingXL>Why Choose AVANTCORE</HeadingXL>
  <BodyMd>Enterprise clients trust AVANTCORE...</BodyMd>
</motion.div>

// Feature Cards - Use HeadingMd
{features.map(feature => (
  <div key={feature.id}>
    <HeadingMd>{feature.title}</HeadingMd>
    <BodyMd>{feature.description}</BodyMd>
  </div>
))}
```

---

### 2. AboutEnterprise.tsx

**Current Issues:**
- Mixed heading hierarchy
- Inconsistent spacing

**Implementation:**
```tsx
import { DisplayLg, HeadingXL, HeadingMd, BodyMd, BodyLg } from '@/components/Typography';

// Page Hero
<DisplayLg>Architecting Enterprise Solutions for Global Organizations</DisplayLg>

// Main Sections
<section>
  <HeadingXL>Two Decades of Enterprise Expertise</HeadingXL>
  <BodyLg>AVANTCORE has established itself as a trusted...</BodyLg>
  <BodyMd>From implementing complex enterprise systems...</BodyMd>
</section>

// Subsections
<section>
  <HeadingMd>Enterprise Technology Expertise</HeadingMd>
  <BodyMd>Two decades delivering scalable software...</BodyMd>
</section>
```

---

### 3. Services.tsx (Services Page)

**Implementation:**
```tsx
import { HeadingXL, HeadingMd, BodyMd } from '@/components/Typography';

export const Services = () => (
  <>
    {/* Page Title */}
    <HeadingXL>Our Services</HeadingXL>
    
    {/* Service Categories */}
    {categories.map(category => (
      <div key={category.id}>
        <HeadingMd>{category.name}</HeadingMd>
        <BodyMd>{category.description}</BodyMd>
        
        {/* Service Items */}
        {category.services.map(service => (
          <div key={service.id}>
            <HeadingMd>{service.title}</HeadingMd>
            <BodyMd>{service.description}</BodyMd>
          </div>
        ))}
      </div>
    ))}
  </>
);
```

---

### 4. Products.tsx (Products Page)

**Implementation:**
```tsx
import { HeadingXL, HeadingMd, BodyMd } from '@/components/Typography';

export const Products = () => (
  <>
    <HeadingXL>Our Products</HeadingXL>
    
    {products.map(product => (
      <div key={product.id}>
        <HeadingMd>{product.name}</HeadingMd>
        <BodyMd>{product.description}</BodyMd>
        
        {/* Features */}
        {product.features.map(feature => (
          <HeadingMd key={feature.id}>{feature.name}</HeadingMd>
        ))}
      </div>
    ))}
  </>
);
```

---

### 5. NewsEvents.tsx

**Implementation:**
```tsx
import { HeadingXL, HeadingMd, BodyMd, BodySm } from '@/components/Typography';

export const NewsEvents = () => (
  <>
    <HeadingXL>News & Events</HeadingXL>
    
    {newsItems.map(item => (
      <article key={item.id}>
        <HeadingMd>{item.title}</HeadingMd>
        <BodySm>{item.date}</BodySm>
        <BodyMd>{item.excerpt}</BodyMd>
      </article>
    ))}
  </>
);
```

---

### 6. Contact.tsx (Contact Page)

**Implementation:**
```tsx
import { HeadingXL, HeadingMd, BodyMd, LabelMd } from '@/components/Typography';

export const Contact = () => (
  <>
    <HeadingXL>Get In Touch</HeadingXL>
    <BodyMd>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</BodyMd>
    
    {/* Contact Form */}
    <form>
      <LabelMd>Full Name</LabelMd>
      <input type="text" />
      
      <LabelMd>Email</LabelMd>
      <input type="email" />
      
      <LabelMd>Message</LabelMd>
      <textarea></textarea>
    </form>
  </>
);
```

---

## Common Patterns

### Section Block
```tsx
<section>
  <HeadingXL>Section Title</HeadingXL>
  <BodyMd>Intro paragraph</BodyMd>
  
  {/* Content */}
</section>
```

### Feature Card
```tsx
<div>
  <HeadingMd>{feature.title}</HeadingMd>
  <BodyMd>{feature.description}</BodyMd>
</div>
```

### Page Hero
```tsx
<motion.div>
  <DisplayMd>Page Title</DisplayMd>
  <BodyLg>Page subtitle or description</BodyLg>
</motion.div>
```

### Metadata/Label
```tsx
<LabelMd>Category Name</LabelMd>
```

### List Item
```tsx
<ul>
  <li><BodyMd>Item text here</BodyMd></li>
</ul>
```

---

## Heading Size Reference

| Use Case | Component | Size | Weight |
|----------|-----------|------|--------|
| Page Hero | DisplayMd | 48px | Bold |
| Main Section Title | HeadingXL | 36px | Bold |
| Subsection Title | HeadingMd | 24px | Semibold |
| Card Header | HeadingMd | 24px | Semibold |
| Feature Title | HeadingSm | 20px | Semibold |
| Supporting Text | BodyMd | 16px | Normal |
| Small Labels | LabelMd | 12px | Semibold |

---

## Migration Order (Priority)

1. **HomeNew.tsx** - Most visible, sets standard
2. **AboutEnterprise.tsx** - Second major page
3. **Services.tsx** - Multiple sections
4. **Products.tsx** - Product showcase
5. **Contact.tsx** - Forms and CTAs
6. **NewsEvents.tsx** - Article pages
7. Other detail pages

---

## Testing Checklist

After applying typography to each page:

- [ ] Headings are consistent with other pages
- [ ] Body text is readable (16px, 1.5 line-height)
- [ ] Mobile view scales headings appropriately
- [ ] No text appears oversized or undersized
- [ ] Color contrast is sufficient
- [ ] Spacing between elements is consistent
- [ ] No hardcoded font sizes remain
- [ ] Components import from Typography library

---

## Before & After Examples

### Example 1: Section Header

**Before:**
```tsx
<h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose AVANTCORE</h2>
```

**After:**
```tsx
<HeadingXL>Why Choose AVANTCORE</HeadingXL>
```

### Example 2: Body Content

**Before:**
```tsx
<p className="text-base text-gray-600 leading-relaxed mb-4">
  AVANTCORE delivers comprehensive digital solutions...
</p>
```

**After:**
```tsx
<BodyMd>AVANTCORE delivers comprehensive digital solutions...</BodyMd>
```

### Example 3: Hero Section

**Before:**
```tsx
<h1 className="text-6xl font-bold text-gray-900 mb-4">Enterprise Solutions</h1>
```

**After:**
```tsx
<DisplayMd>Enterprise Solutions</DisplayMd>
```

---

## Quick Reference Card

```
DISPLAY HEADINGS (Hero)
├─ DisplayLg: 60px, Bold
└─ DisplayMd: 48px, Bold

SECTION HEADINGS
├─ HeadingXL: 36px, Bold       ← Default for sections
├─ HeadingLg: 30px, Bold
├─ HeadingMd: 24px, Semibold   ← Default for subsections
├─ HeadingSm: 20px, Semibold
└─ HeadingXs: 18px, Semibold

BODY TEXT
├─ BodyLg: 18px, Normal
├─ BodyMd: 16px, Normal        ← Default for content
└─ BodySm: 14px, Normal

LABELS
├─ LabelLg: 14px, Semibold
├─ LabelMd: 12px, Semibold     ← Default for labels
└─ LabelSm: 10px, Bold
```

---

## Support Resources

1. **Typography System Documentation**: `TYPOGRAPHY_SYSTEM.md`
2. **Component Library**: `src/components/Typography/index.tsx`
3. **Global Styles**: `src/styles/typography.css`
4. **Usage Examples**: Check implemented pages

---

**Remember:** Consistency across all pages creates a professional, enterprise-grade experience. When in doubt, refer to the typography system documentation.
