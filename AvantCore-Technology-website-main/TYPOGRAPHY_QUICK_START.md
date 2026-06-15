# Typography Quick Start Guide

## Common Patterns

### Hero Headline
```tsx
<h1 className="typography-display">Main Title Goes Here</h1>
```
**Result**: 52px bold, tight leading, perfect for hero sections

---

### Section Title
```tsx
<h2 className="typography-display-sm">Section Title</h2>
```
**Result**: 40px bold, balanced spacing for major sections

---

### Subsection with Body Text
```tsx
<div className="spacing-section">
  <h3 className="typography-subsection mb-4">Feature Title</h3>
  <p className="typography-body paragraph-readable">
    Your descriptive text here...
  </p>
</div>
```
**Result**: Proper hierarchy with vertical rhythm

---

### Card with Content
```tsx
<div className="card-spacing">
  <h4 className="typography-subsection mb-3">Card Title</h4>
  <p className="typography-body-secondary">Card description text</p>
</div>
```
**Result**: Card padding (p-6 md:p-8 lg:p-10) with readable content

---

### Balanced Section
```tsx
<Section spacing="standard">
  <h2 className="typography-display-sm mb-12">Our Solutions</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 spacing-group">
    {/* Content */}
  </div>
</Section>
```
**Result**: Proper vertical rhythm with consistent spacing

---

## Typography Classes Cheat Sheet

| Class | Use Case | Size |
|-------|----------|------|
| `typography-display` | Hero headline | 52px |
| `typography-display-sm` | Section title | 40px |
| `typography-section-title` | Feature title | 28px |
| `typography-subsection` | Card title | 20px |
| `typography-body` | Main paragraph | 16px |
| `typography-body-secondary` | Supporting text | 15px |
| `typography-label` | Metadata/badges | 12px |

---

## Spacing Classes Cheat Sheet

| Class | Purpose | Values |
|-------|---------|--------|
| `section-spacing-compact` | Tight sections | py-12 md:py-16 lg:py-20 |
| `section-spacing-standard` | Standard sections | py-16 md:py-24 lg:py-32 |
| `section-spacing-generous` | Spacious sections | py-20 md:py-32 lg:py-40 |
| `section-spacing-hero` | Hero spacing | py-24 md:py-40 lg:py-48 |
| `spacing-section` | Between sections | mb-6 md:mb-8 lg:mb-10 |
| `spacing-subsection` | Between subsections | mb-4 md:mb-6 lg:mb-8 |
| `spacing-group` | Element groups | space-y-4 md:space-y-6 |
| `spacing-tight` | Lists/compact | space-y-2 md:space-y-3 |

---

## Mobile-First Responsive

All typography classes scale automatically:

```tsx
// No need for media queries!
<h1 className="typography-display">
  {/* Mobile: 32px, Tablet: 40px, Desktop: 52px */}
</h1>
```

---

## Color + Typography

```tsx
{/* White text on dark background */}
<div className="bg-blue-900 text-white">
  <h2 className="typography-display-sm">Light on Dark</h2>
  <p className="typography-body">Easily readable with white text</p>
</div>

{/* Dark text on light background */}
<div className="bg-white">
  <h2 className="typography-display-sm text-gray-900">Dark on Light</h2>
  <p className="typography-body text-gray-700">Good contrast</p>
</div>
```

---

## Avoid These Mistakes

```tsx
// ❌ DON'T: Mixing old and new
<h1 className="text-6xl font-bold leading-tight">Bad</h1>

// ✅ DO: Use typography classes
<h1 className="typography-display">Good</h1>

---

// ❌ DON'T: Random spacing
<div className="mb-20 py-10">Content</div>

// ✅ DO: Use spacing system
<div className="spacing-section">Content</div>

---

// ❌ DON'T: Overcrowded text
<p className="text-sm leading-tight">Too tight</p>

// ✅ DO: Proper readability
<p className="typography-body">Readable text</p>
```

---

## Real-World Example

```tsx
import Section from '@/components/ui/Section';

export function ProductShowcase() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="hero" background="blue-gradient">
        <div className="text-white max-w-2xl">
          <h1 className="typography-display mb-4">
            Enterprise Solutions Built for Scale
          </h1>
          <p className="typography-body-secondary mb-8">
            Trusted by leading companies worldwide to drive business growth
          </p>
        </div>
      </Section>

      {/* Features Section */}
      <Section spacing="standard">
        <h2 className="typography-display-sm mb-12 text-center">
          What We Offer
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="card-spacing spacing-section">
              <h3 className="typography-subsection mb-3">
                {product.name}
              </h3>
              <p className="typography-body-secondary paragraph-readable">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section spacing="generous" background="light">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="typography-display-sm mb-6">
            Ready to Get Started?
          </h2>
          <p className="typography-body mb-8 paragraph-readable">
            Join hundreds of companies transforming their operations
          </p>
          <button className="typography-label px-6 py-3 bg-orange-500 text-white rounded-lg">
            Request Demo
          </button>
        </div>
      </Section>
    </>
  );
}
```

---

## Why This System?

✅ **Professional**: Enterprise-sized headlines (not oversized)  
✅ **Readable**: Line heights optimized for comfort (1.5-1.65)  
✅ **Balanced**: Proper spacing prevents crowding  
✅ **Responsive**: Automatically scales on all devices  
✅ **Consistent**: Semantic classes prevent random styling  
✅ **Maintainable**: Changes in one place affect entire site  

---

## Need More Details?

See `TYPOGRAPHY_SYSTEM.md` for:
- Complete design principles
- Spacing guidelines
- Migration guide
- Testing procedures

