# Typography Visual Guide

## Heading Hierarchy Visualization

### Level 1: Hero Headline (H1)
```
█████████████████████████████████████
█ Driving Innovation Forward         █
█████████████████████████████████████

Desktop: 52px | Weight: 700 | Leading: 1.15
Mobile: 32px | Weight: 700 | Leading: 1.2
Letter Spacing: -0.02em (tight)

Use: Hero section main headlines, page titles
Class: typography-display
```

---

### Level 2: Section Title (H2)
```
████████████████████████████
█ Our Enterprise Solutions  █
████████████████████████████

Desktop: 40px | Weight: 700 | Leading: 1.25
Mobile: 28px | Weight: 700 | Leading: 1.3
Letter Spacing: -0.01em (compact)

Use: Major section titles, main feature headers
Class: typography-display-sm
```

---

### Level 3: Feature Title (H3)
```
████████████████████
█ Sales Management   █
████████████████████

Desktop: 28px | Weight: 600 | Leading: 1.35
Mobile: 22px | Weight: 600 | Leading: 1.4

Use: Feature cards, subsection headers
Class: typography-section-title
```

---

### Level 4: Card Title (H4)
```
███████████████
█ Key Features  █
███████████████

Desktop: 20px | Weight: 600 | Leading: 1.4
Mobile: 18px | Weight: 600 | Leading: 1.45

Use: Card titles, secondary headings
Class: typography-subsection
```

---

## Body Text Hierarchy

### Primary Body (16px)
```
█████████████████████████████████████████████████
█ This is primary body text. It's optimized for █
█ reading longer content and provides optimal   █
█ comfort with 1.65 line height. Perfect for   █
█ main paragraphs and article content.         █
█████████████████████████████████████████████████

Size: 16px | Weight: 400 | Leading: 1.65
Letter Spacing: 0.3px (expanded)

Use: Main paragraphs, primary content
Class: typography-body
Max Width: ~70 characters (max-w-2xl)
```

---

### Secondary Body (15px)
```
████████████████████████████████████
█ Supporting text with slightly     █
█ smaller size. Good for captions,  █
█ subtitles, and supplementary      █
█ information.                       █
████████████████████████████████████

Size: 15px | Weight: 400 | Leading: 1.6
Letter Spacing: 0.2px (subtle)

Use: Supporting text, descriptions, captions
Class: typography-body-secondary
```

---

### Label / Metadata (12px)
```
█████████████████████████
█ PUBLISHED MAY 15, 2024 █
█████████████████████████

Size: 12px | Weight: 600 | Leading: 1.4
Letter Spacing: 0.8px (wider)
Text Transform: UPPERCASE

Use: Badges, labels, metadata
Class: typography-label
```

---

## Line Height Comparison

### Tight (1.15) - Headlines Only
```
┌─────────────────────────────┐
│ Driving Innovation          │  Compact
│ Forward with Enterprise     │  Tight spacing
│ Solutions                   │  Premium feel
└─────────────────────────────┘

✓ Use for: Display headlines (H1, H2)
✗ Don't use for: Body text (too cramped)
```

---

### Snug (1.25) - Major Headers
```
┌─────────────────────────────┐
│ Our Enterprise Solutions    │  
│ for Modern Businesses       │  Good spacing
│ and Digital Transformation  │  Professional look
└─────────────────────────────┘

✓ Use for: Major section headers (H2)
✗ Don't use for: Body text (still tight)
```

---

### Normal (1.35) - Section Titles
```
┌──────────────────────────────────┐
│ Sales and Distribution            │  
│ Management Solutions              │  Balanced
│ for Efficient Operations           │  Good readability
└──────────────────────────────────┘

✓ Use for: Section titles (H3)
✓ Can use for: Short paragraphs
✗ Don't use for: Long-form content
```

---

### Relaxed (1.5) - Good Readability
```
┌───────────────────────────────────┐
│ This is text with relaxed line    │  
│ height. It provides comfortable   │  Readable spacing
│ reading for shorter paragraphs.   │  Good breathing room
└───────────────────────────────────┘

✓ Use for: Short content blocks
✓ OK for: Medium-length paragraphs
✗ Don't use for: Very long content
```

---

### Loose (1.65) - Optimal Reading ⭐
```
┌─────────────────────────────────────┐
│ This is text with loose line height,│  
│ optimized for reading longer        │  
│ content. The increased vertical     │  Optimal comfort
│ space between lines reduces eye     │  Perfect for reading
│ strain and improves comprehension.  │  Enterprise standard
└─────────────────────────────────────┘

✓ Use for: Main body paragraphs
✓ Use for: Blog articles
✓ Use for: Long-form content
✓ BEST FOR: Professional reading
```

---

## Letter Spacing Spectrum

```
-0.02em (Tight)     ▮▮▮▮▮▮▮▮▮▮▮  Use for H1
-0.01em (Compact)   ▮▮▮▮▮▮▮▮▮▮▯   Use for H2
 0.00px (Normal)    ▮▮▮▮▮▮▮▮▯▯▯   Use for content
 0.20px (Subtle)    ▮▮▮▮▮▮▯▯▯▯▯   Use for body
 0.30px (Expanded)  ▮▮▮▮▮▯▯▯▯▯▯   Use for paragraphs
 0.50px (Wide)      ▮▮▮▪▪▯▯▯▯▯▯   Use for captions
 0.80px (Wider)     ▮▮▪▪▪▯▯▯▯▯▯   Use for labels
```

---

## Section Spacing Visualization

### Compact (48px mobile / 64px desktop)
```
┌───────────────────────────┐
│  SECTION A                │
│  Content here             │
│                           │
│  48px gap (mobile)        │  <-- Mobile
│                           │
│  SECTION B                │
│  More content             │
└───────────────────────────┘

┌───────────────────────────────────┐
│  SECTION A                        │
│  Content here                     │
│                                   │
│  64px gap (desktop)               │  <-- Desktop
│                                   │
│  SECTION B                        │
│  More content                     │
└───────────────────────────────────┘

Use: Dense information, feature grids
Class: section-spacing-compact
```

---

### Standard (40px mobile / 64px desktop) - DEFAULT
```
┌──────────────────────────────┐
│  SECTION A                   │
│  Content here                │
│                              │
│                              │
│  40px gap (mobile)           │  <-- Mobile
│                              │
│                              │
│  SECTION B                   │
│  More content                │
└──────────────────────────────┘

┌────────────────────────────────────────┐
│  SECTION A                             │
│  Content here                          │
│                                        │
│                                        │
│  64px gap (desktop)                    │  <-- Desktop
│                                        │
│                                        │
│  SECTION B                             │
│  More content                          │
└────────────────────────────────────────┘

Use: General sections, blog posts (DEFAULT)
Class: section-spacing-standard
```

---

### Generous (48px mobile / 80px desktop)
```
┌──────────────────────────────┐
│  SECTION A                   │
│  Content here                │
│                              │
│                              │
│  48px gap (mobile)           │  <-- Mobile
│                              │
│                              │
│  SECTION B                   │
│  More content                │
└──────────────────────────────┘

┌──────────────────────────────────────────┐
│  SECTION A                               │
│  Content here                            │
│                                          │
│                                          │
│  80px gap (desktop)                      │  <-- Desktop
│                                          │
│                                          │
│  SECTION B                               │
│  More content                            │
└──────────────────────────────────────────┘

Use: Hero sections, CTA blocks
Class: section-spacing-generous
```

---

### Hero (56px mobile / 96px desktop)
```
┌──────────────────────────────┐
│  HERO SECTION                │
│  Big headline content        │
│                              │
│                              │
│  56px gap (mobile)           │  <-- Mobile
│                              │
│                              │
│  NEXT SECTION                │
│  Regular content             │
└──────────────────────────────┘

┌──────────────────────────────────────────┐
│  HERO SECTION                            │
│  Big headline content                    │
│                                          │
│                                          │
│  96px gap (desktop)                      │  <-- Desktop
│                                          │
│                                          │
│  NEXT SECTION                            │
│  Regular content                         │
└──────────────────────────────────────────┘

Use: Landing page hero, major features
Class: section-spacing-hero
```

---

## Vertical Rhythm Example

```
Section Starts
├─ spacing-section (mb-6/8/10)
│
├─ H2: typography-display-sm
│  "Our Solutions"
│
├─ spacing-subsection (mb-4/6/8)
│
├─ Grid of 3 columns
│  ├─ Card 1
│  │  ├─ H3: typography-subsection
│  │  │  "Feature 1"
│  │  ├─ spacing-tight (mb-3)
│  │  └─ P: typography-body-secondary
│  │     "Description..."
│  │
│  ├─ Card 2 (same structure)
│  │
│  └─ Card 3 (same structure)
│
├─ spacing-section (mb-6/8/10)
│
└─ Next Section Starts

Result: Professional, balanced, not crowded
```

---

## Responsive Scaling Example

### Mobile View (375px)
```
╔════════════════════╗
║ 32px Headline      ║  ← H1 scales down
╚════════════════════╝
Small gap (mb-4)
┌──────────────────┐
│ 22px Subtitle    │  ← H3 scales down
└──────────────────┘
Small gap (mb-3)
16px Body text that wraps at
this width, providing readable
content on mobile. No squinting!

48px vertical spacing between sections
```

### Desktop View (1920px)
```
╔════════════════════════════════════════╗
║ 52px Headline                          ║  ← H1 at full size
╚════════════════════════════════════════╝
Larger gap (mb-8)
┌────────────────────────────────────────┐
│ 28px Subtitle                          │  ← H3 at full size
└────────────────────────────────────────┘
Larger gap (mb-6)
16px Body text in a readable measure (max-w-2xl),
providing optimal comfort for extended reading.
Professional, balanced presentation on large screens.

80px+ vertical spacing between sections for premium feel
```

---

## Color + Typography Combinations

### Light Theme (Recommended)
```
╔═══════════════════════════════════╗
║  text-gray-900                    ║  Dark text on white
║  typography-display (52px)        ║  Highest contrast ✓✓
╚═══════════════════════════════════╝

╔═══════════════════════════════════╗
║  text-gray-700                    ║  Dark gray on white
║  typography-body (16px, 1.65lh)   ║  Good contrast ✓✓
╚═══════════════════════════════════╝

╔═══════════════════════════════════╗
║  text-gray-600                    ║  Medium gray on white
║  typography-body-secondary (15px) ║  Adequate contrast ✓
╚═══════════════════════════════════╝
```

### Dark Theme (Gradients)
```
╔═══════════════════════════════════╗
║  text-white                       ║  White text on dark
║  typography-display (52px)        ║  Highest contrast ✓✓
║  (on bg-blue-900)                 ║
╚═══════════════════════════════════╝

╔═══════════════════════════════════╗
║  text-white                       ║  White text on dark
║  typography-body (16px, 1.65lh)   ║  Excellent contrast ✓✓
║  (on bg-blue-900)                 ║
╚═══════════════════════════════════╝
```

---

## Common Layout Patterns

### Pattern 1: Hero with CTA
```
┌──────────────────────────────────────┐
│                                      │
│  52px Headline (typography-display)  │
│                                      │
│  Large section spacing (hero)        │
│                                      │
│  15px Body (typography-body-secondary)
│  Supporting text at smaller size     │
│                                      │
│  Button with label typography        │
│                                      │
└──────────────────────────────────────┘
```

### Pattern 2: Three Feature Cards
```
┌─────────────────────────────────────────┐
│  40px Section Title (typography-display-sm)
│  Standard section spacing               │
│                                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐
│  │ 20px    │  │ 20px    │  │ 20px    │
│  │ Card    │  │ Card    │  │ Card    │
│  │ Title   │  │ Title   │  │ Title   │
│  │         │  │         │  │         │
│  │ 15px    │  │ 15px    │  │ 15px    │
│  │ Descrip │  │ Descrip │  │ Descrip │
│  └─────────┘  └─────────┘  └─────────┘
│                                         │
└─────────────────────────────────────────┘
```

### Pattern 3: Blog Article
```
┌─────────────────────────────────────┐
│  40px Title (typography-display-sm)  │
│  spacing-subsection (mb-4/6/8)      │
│                                     │
│  16px Paragraph (typography-body)   │
│  Max width: max-w-2xl               │
│  spacing-group (space-y-4/6)        │
│                                     │
│  16px Paragraph (typography-body)   │
│  Comfortable 1.65 line-height       │
│  spacing-section (mb-6/8/10)        │
│                                     │
│  28px Subheading (typography-section-title)
│  spacing-subsection (mb-4/6/8)      │
│                                     │
│  16px Paragraph (typography-body)   │
│  Continuing article flow...         │
│                                     │
└─────────────────────────────────────┘
```

---

## Do's and Don'ts Visual

### ✅ DO: Balanced Hierarchy
```
52px ┏━━━━━━━━━━━━━━━━━━━━━━━━━━┓
     ┃ Main Headline            ┃  Premium size
40px ┣━━━━━━━━━━━━━━━━━━━━━━━━━━┫  Clear progression
     ┃ Section Title            ┃  Not oversized
28px ┣━━━━━━━━━━━━━━━━━━━━━━━━━━┫
     ┃ Feature Title            ┃  Professional
20px ┣━━━━━━━━━━━━━━━━━━━━━━━━━━┫  Balanced
     ┃ Card Title               ┃  Clear hierarchy
16px ┣━━━━━━━━━━━━━━━━━━━━━━━━━━┫
     ┃ Body text with 1.65 line ┃  Readable
     ┃ height for comfortable   ┃  Professional
     ┃ reading experience.      ┃  Enterprise feel
     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

### ❌ DON'T: Oversized AI-Style
```
96px ┏━━━━━━━━━━━━━━━━━━━━━━━━━━┓
     ┃ HUGE HEADLINE!!!         ┃  Oversized
84px ┣━━━━━━━━━━━━━━━━━━━━━━━━━━┫  Disproportionate
     ┃ BIG SUBHEADING           ┃  Marketing-y
48px ┣━━━━━━━━━━━━━━━━━━━━━━━━━━┫
     ┃ BOLD TAGLINE             ┃  Too much
32px ┣━━━━━━━━━━━━━━━━━━━━━━━━━━┫
     ┃ Body text at 12px        ┃  Feels cramped
     ┃ with 1.2 line-height     ┃  Hard to read
     ┃ looks tiny compared.     ┃  Unprofessional
     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

---

## Quick Reference Card

```
╔═════════════════════════════════════════════════════╗
║              TYPOGRAPHY QUICK REFERENCE             ║
╠═════════════════════════════════════════════════════╣
║                                                     ║
║  H1 HERO             52px / 700 / 1.15            ║
║  Class: typography-display                         ║
║                                                     ║
║  H2 SECTION          40px / 700 / 1.25            ║
║  Class: typography-display-sm                      ║
║                                                     ║
║  H3 FEATURE          28px / 600 / 1.35            ║
║  Class: typography-section-title                   ║
║                                                     ║
║  H4 CARD             20px / 600 / 1.4             ║
║  Class: typography-subsection                      ║
║                                                     ║
║  BODY                16px / 400 / 1.65 ⭐         ║
║  Class: typography-body                            ║
║  Max Width: max-w-2xl                              ║
║                                                     ║
║  SECONDARY           15px / 400 / 1.6             ║
║  Class: typography-body-secondary                  ║
║                                                     ║
║  LABEL               12px / 600 / 1.4             ║
║  Class: typography-label (UPPERCASE)               ║
║                                                     ║
╠═════════════════════════════════════════════════════╣
║  SPACING SYSTEM (Mobile / Desktop)                  ║
╠═════════════════════════════════════════════════════╣
║                                                     ║
║  Compact    48px / 64px                            ║
║  Standard   40px / 64px (DEFAULT)                  ║
║  Generous   48px / 80px                            ║
║  Hero       56px / 96px                            ║
║                                                     ║
╠═════════════════════════════════════════════════════╣
║  READABLE LINE MEASURE: max-w-2xl (65 chars)       ║
╚═════════════════════════════════════════════════════╝
```

---

This visual guide makes it easy to understand the typography system at a glance!

