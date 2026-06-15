# Typography System - Quick Reference Card

## 🎯 Most Common Components

```tsx
import { 
  DisplayMd,      // Hero titles (48px)
  HeadingXL,      // Section titles (36px)
  HeadingMd,      // Subsection titles (24px)
  BodyMd,         // Standard text (16px)
  LabelMd         // Labels & badges (12px)
} from '@/components/Typography';
```

---

## 📐 Size Chart

| Component | Size | Best For |
|-----------|------|----------|
| **DisplayMd** | 48px | Page heroes, landing headlines |
| **HeadingXL** | 36px | Main section titles (use most often) |
| **HeadingMd** | 24px | Subsection, card headers |
| **BodyMd** | 16px | Regular paragraphs (default) |
| **LabelMd** | 12px | Metadata, tags, labels |

---

## 🔧 Real-World Examples

### Example 1: Landing Page Section
```tsx
<HeadingXL>Why Choose AVANTCORE</HeadingXL>
<BodyMd>Enterprise clients trust AVANTCORE...</BodyMd>
```

### Example 2: Feature Card
```tsx
<HeadingMd>Enterprise Technology Expertise</HeadingMd>
<BodyMd>Two decades delivering scalable software...</BodyMd>
```

### Example 3: Blog Article
```tsx
<DisplayMd>Article Title</DisplayMd>
<BodySm>Published: June 11, 2026</BodySm>
<BodyMd>Article content starts here...</BodyMd>
```

### Example 4: Form
```tsx
<LabelMd>Full Name</LabelMd>
<input type="text" />
```

---

## ✅ Implementation Checklist

**When adding content to a page:**

- [ ] Page hero uses `DisplayMd`
- [ ] Main titles use `HeadingXL`
- [ ] Subtitles use `HeadingMd`
- [ ] Body text uses `BodyMd`
- [ ] Labels use `LabelMd`
- [ ] No inline font sizes
- [ ] Test on mobile (320px)
- [ ] Test on tablet (768px)

---

## 🚀 Quick Start (3 Steps)

### Step 1: Import
```tsx
import { HeadingXL, BodyMd } from '@/components/Typography';
```

### Step 2: Replace Old Code
```tsx
// ❌ Old
<h2 className="text-4xl font-bold">Title</h2>

// ✅ New
<HeadingXL>Title</HeadingXL>
```

### Step 3: Done
Typography is automatically:
- Sized correctly
- Responsive on mobile
- Colored appropriately
- Spaced properly

---

## 📱 Responsive Behavior

**Automatic on all components:**
- Desktop (1024px+): Full size
- Tablet (768px): 1 size smaller
- Mobile (480px): 2-3 sizes smaller

No extra code needed!

---

## 🎨 All Available Components

### Display Headings
- `DisplayLg` - 60px
- `DisplayMd` - 48px

### Section Headings
- `HeadingXL` - 36px (most common)
- `HeadingLg` - 30px
- `HeadingMd` - 24px (second most common)
- `HeadingSm` - 20px
- `HeadingXs` - 18px

### Subheadings
- `SubheadingLg` - 20px
- `SubheadingMd` - 18px
- `SubheadingSm` - 16px

### Body Text
- `BodyLg` - 18px
- `BodyMd` - 16px (most common)
- `BodySm` - 14px

### Labels
- `LabelLg` - 14px
- `LabelMd` - 12px (most common)
- `LabelSm` - 10px

---

## 🔗 Useful Links

- Full documentation: `TYPOGRAPHY_SYSTEM.md`
- Implementation guide: `TYPOGRAPHY_MIGRATION_GUIDE.md`
- Components: `src/components/Typography/index.tsx`
- Styles: `src/styles/typography.css`

---

## ⚡ Pro Tips

1. **Consistency**: Use HeadingXL for all main section titles
2. **Readability**: Always use BodyMd for body text (16px, 1.5 line-height)
3. **Hierarchy**: Don't jump sizes (e.g., HeadingXL → BodyMd, not BodySm)
4. **Mobile**: Test your page on a phone to verify scaling
5. **Labels**: Use LabelMd for all metadata and UI labels

---

## ❌ Common Mistakes to Avoid

- Don't use hardcoded font sizes
- Don't mix Typography components with inline styles
- Don't use different headings for same-level sections
- Don't forget to test on mobile
- Don't change colors without documentation

---

## 💡 When In Doubt

Use this hierarchy:
```
Hero/Title → DisplayMd
Section Title → HeadingXL
Subsection → HeadingMd
Regular Text → BodyMd
Label/Meta → LabelMd
```

---

## 📊 Page Implementation Progress

Track which pages have been updated:

- [ ] HomeNew.tsx
- [ ] AboutEnterprise.tsx
- [ ] Services.tsx
- [ ] Products.tsx
- [ ] Contact.tsx
- [ ] NewsEvents.tsx
- [ ] Custom pages (if any)

---

**Remember:** When in doubt, use the documentation files or check existing implementations.

Consistent typography = Professional enterprise website ✓
