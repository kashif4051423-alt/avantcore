# Typography Scale Reference

## Heading Hierarchy

### Display Large (H1)
- **Desktop**: 52px, Weight 700, Line Height 1.15
- **Mobile**: 32px, Line Height 1.2
- **Letter Spacing**: -0.02em (tight)
- **Use**: Hero section main headline
- **Class**: `typography-display`

```
Driving Innovation Forward
```

---

### Display Medium (H2)
- **Desktop**: 40px, Weight 700, Line Height 1.25
- **Mobile**: 28px, Line Height 1.3
- **Letter Spacing**: -0.01em (compact)
- **Use**: Major section titles
- **Class**: `typography-display-sm`

```
Our Enterprise Solutions
```

---

### Heading Large (H3)
- **Desktop**: 28px, Weight 600, Line Height 1.35
- **Mobile**: 22px, Line Height 1.4
- **Letter Spacing**: 0 (normal)
- **Use**: Feature/card titles in grid layouts
- **Class**: `typography-section-title`

```
Sales & Distribution Management
```

---

### Heading Medium (H4)
- **Desktop**: 20px, Weight 600, Line Height 1.4
- **Mobile**: 18px, Line Height 1.45
- **Letter Spacing**: 0 (normal)
- **Use**: Secondary headings, card titles
- **Class**: `typography-subsection`

```
Key Features
```

---

## Body Text Hierarchy

### Body Large
- **Size**: 16px, Weight 400, Line Height 1.65
- **Letter Spacing**: 0.3px (expanded)
- **Use**: Main paragraph text, primary content
- **Class**: `typography-body`
- **Max Width**: 70 characters (optimal reading line)

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
```

---

### Body Medium (Secondary)
- **Size**: 15px, Weight 400, Line Height 1.6
- **Letter Spacing**: 0.2px (subtle)
- **Use**: Supporting text, descriptions
- **Class**: `typography-body-secondary`

```
Supporting information and descriptive text that provides 
additional context to the main content above.
```

---

### Caption/Label
- **Size**: 13px, Weight 500, Line Height 1.5
- **Letter Spacing**: 0.5px (wide)
- **Use**: Metadata, helper text, captions
- **Class**: `typography-label`

```
PUBLISHED ON MAY 15, 2024 | READING TIME: 5 MIN
```

---

### Label (Extra Small)
- **Size**: 12px, Weight 600, Line Height 1.4
- **Letter Spacing**: 0.8px (wider)
- **Text Transform**: Uppercase
- **Use**: Badges, tags, labels
- **Class**: `typography-label` (with `.uppercase`)

```
FEATURED | NEW | BESTSELLER
```

---

## Line Height Comparison

### Tight (1.15) - Headlines Only
```
Driving Innovation
Forward with Enterprise
Solutions
```
→ Use for `typography-display`

---

### Snug (1.25) - Major Headers
```
Our Enterprise Solutions
and Comprehensive Services
for Modern Businesses
```
→ Use for `typography-display-sm`

---

### Normal (1.35) - Section Titles
```
Sales and Distribution Management
Solutions for Efficient Operations
and Enhanced Productivity
```
→ Use for `typography-section-title`

---

### Relaxed (1.5) - Good Readability
```
This is a standard paragraph with relaxed line height.
It provides good readability for shorter blocks of text.
Each line has breathing room without feeling sparse.
```
→ Use for shorter content blocks

---

### Loose (1.65) - Optimal Reading
```
This is a paragraph with loose line height, optimized for reading longer
blocks of text. The increased vertical space between lines reduces eye strain
and improves comprehension. This is the recommended line height for body text
and the primary reading experience on the website.
```
→ Use for `typography-body` (main content)

---

## Letter Spacing Scale

| Spacing | Value | Use Case | Example |
|---------|-------|----------|---------|
| Tight | -0.02em | Headlines that feel premium | **Display Large** |
| Compact | -0.01em | Major section headers | **Display Medium** |
| Normal | 0px | Regular content | Body text |
| Subtle | 0.2px | Secondary body text | Supporting descriptions |
| Expanded | 0.3px | Body paragraphs | Main reading experience |
| Wide | 0.5px | Labels, captions | Metadata, secondary info |
| Wider | 0.8px | Uppercase labels | BADGES, TAGS |

---

## Section Spacing

### Compact (48px | 32px mobile)
Best for: Dense information, feature grids
```
┌─────────────────────┐
│  Content            │  12px margin
│  Content            │  12px margin
│  Content            │  12px margin
└─────────────────────┘
```

---

### Standard (64px | 40px mobile) - DEFAULT
Best for: General sections, blog posts
```
┌─────────────────────┐
│  Content            │  16px margin
│  Content            │  16px margin
│  Content            │  16px margin
└─────────────────────┘
```

---

### Generous (80px | 48px mobile)
Best for: Hero sections, CTA blocks
```
┌─────────────────────┐
│  Content            │  20px margin
│  Content            │  20px margin
│  Content            │  20px margin
└─────────────────────┘
```

---

### Hero (96px | 56px mobile)
Best for: Landing page hero, major features
```
┌─────────────────────┐
│  Content            │  24px margin
│  Content            │  24px margin
│  Content            │  24px margin
└─────────────────────┘
```

---

## Vertical Rhythm

Every text element should have consistent vertical spacing:

```
H2 (typography-display-sm)
↓ [spacing-subsection: mb-4/6/8]
H3 (typography-subsection)
↓ [spacing-tight: mb-3]
Body Paragraph (typography-body)
↓ [spacing-group: space-y-4/6]
Another Paragraph (typography-body)
↓ [spacing-section: mb-6/8/10]
New Section
```

---

## Measure (Reading Line Length)

Optimal paragraph width by content type:

```
Narrow (45 char)    Standard (65 char)   Wide (80 char)
────────────────    ─────────────────    ──────────────────
Short headlines     Body paragraphs      Wide layouts with
and taglines        & blog posts         multiple columns
```

### CSS Classes

```tsx
// Narrow: max-w-xl
<div className="max-w-xl mx-auto">
  <p className="typography-body">Short form content</p>
</div>

// Standard: max-w-2xl (paragraph-readable)
<div className="paragraph-readable">
  <p className="typography-body">This is the recommended width</p>
</div>

// Wide: No constraint (use full width)
<p className="typography-body">Full width content</p>
```

---

## Typography Scale Visualization

```
Size     | Example               | Weight | Use
────────────────────────────────────────────────
52px     | Driving Innovation    | 700    | H1 Hero
40px     | Our Solutions         | 700    | H2 Section
28px     | Feature Title         | 600    | H3 Feature
20px     | Card Title            | 600    | H4 Card
16px     | Lorem ipsum dolor...  | 400    | Body
15px     | Supporting text       | 400    | Secondary
13px     | METADATA              | 500    | Caption
12px     | BADGE                 | 600    | Label
```

---

## Color + Typography Combinations

### Light Theme (Default)

| Typography | Color | Contrast | Use |
|------------|-------|----------|-----|
| H1, H2 | text-gray-900 | 21:1 | Main headings |
| H3, H4 | text-gray-900 | 21:1 | Subheadings |
| Body | text-gray-700 | 12.6:1 | Main text ✓ |
| Secondary | text-gray-600 | 7:1 | Supporting text ✓ |
| Caption | text-gray-500 | 4.5:1 | Metadata |

### Dark Theme (Gradients, CTA sections)

| Typography | Color | Contrast | Use |
|------------|-------|----------|-----|
| H1, H2 | text-white | 21:1 | Main headings |
| H3, H4 | text-white | 21:1 | Subheadings |
| Body | text-white | 21:1 | Main text ✓ |
| Secondary | text-gray-50 | 21:1 | Supporting text ✓ |

---

## Responsive Scaling Example

```
Device          | H1       | H2       | Body
────────────────────────────────────────────
Mobile (375px)  | 32px     | 28px     | 16px
Tablet (768px)  | 40px     | 32px     | 16px
Desktop (1024+) | 52px     | 40px     | 16px
```

**Note**: All scaling is automatic with Tailwind responsive classes.

---

## Common Mistakes vs. Best Practices

### Mistake: Oversized Headlines
```
❌ 80px H1 headline
❌ 64px H2 section title
❌ 48px H3 feature title
```

**Fix**: Use enterprise sizing (28-52px for headers)
```
✅ 52px H1 headline
✅ 40px H2 section title
✅ 28px H3 feature title
```

---

### Mistake: Tight Line Height Everywhere
```
❌ <p className="text-base leading-tight">Long paragraph...</p>
❌ Feels cramped and hard to read
```

**Fix**: Increase line height for readability
```
✅ <p className="typography-body">Long paragraph...</p>
✅ Line height 1.65, more comfortable reading
```

---

### Mistake: No Vertical Rhythm
```
❌ Random spacing between elements
❌ Some gaps are 5px, some 20px, some 40px
❌ Feels chaotic and unprofessional
```

**Fix**: Use spacing system
```
✅ spacing-section (mb-6/8/10)
✅ spacing-subsection (mb-4/6/8)
✅ spacing-group (space-y-4/6)
✅ Consistent and professional
```

---

## Testing Typography

1. **Desktop View**: Test at 1920px - verify all sizes render cleanly
2. **Mobile View**: Test at 375px - ensure readability and hierarchy
3. **Contrast**: Use WCAG checker - body text should be 4.5:1 minimum
4. **Print**: Test print preview - ensure colors are web-safe
5. **Screen Reader**: Test with Lighthouse - proper semantic HTML
6. **Eye Test**: Step back - does hierarchy feel balanced?

