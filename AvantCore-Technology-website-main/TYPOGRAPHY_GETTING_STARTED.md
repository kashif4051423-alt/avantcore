# Typography System - Getting Started Guide

## Welcome! 👋

You now have a complete, enterprise-grade typography system for AVANTCORE. This guide will get you started in 10 minutes.

---

## 🎯 What You Need to Know (1 Minute Read)

The typography system is **already integrated**. You just need to:

1. Import components
2. Use them instead of hardcoded HTML elements
3. That's it! Responsive, styled, and professional.

---

## 🚀 5-Minute Quick Start

### Import (30 seconds)
```tsx
import { 
  HeadingXL,    // For section titles
  BodyMd,       // For paragraphs
  LabelMd       // For labels/badges
} from '@/components/Typography';
```

### Use (1 minute)
```tsx
// Instead of this:
<h2 className="text-4xl font-bold text-gray-900">My Title</h2>

// Write this:
<HeadingXL>My Title</HeadingXL>
```

### Result (3 minutes)
- ✓ Correct size (36px)
- ✓ Correct weight (bold)
- ✓ Correct color (slate-900)
- ✓ Correct spacing (1.35 line-height)
- ✓ Responsive on mobile
- ✓ Done!

---

## 📱 Real-World Example

### Before (No System)
```tsx
export const HomePage = () => (
  <div>
    <h2 className="text-5xl font-bold text-gray-900 mb-6">Why Choose AVANTCORE</h2>
    <p className="text-base text-gray-600 leading-relaxed mb-4">
      Enterprise clients trust AVANTCORE...
    </p>
  </div>
);
```

### After (With System)
```tsx
import { HeadingXL, BodyMd } from '@/components/Typography';

export const HomePage = () => (
  <div>
    <HeadingXL>Why Choose AVANTCORE</HeadingXL>
    <BodyMd>Enterprise clients trust AVANTCORE...</BodyMd>
  </div>
);
```

**Benefits:**
- ✓ Cleaner code
- ✓ Consistent everywhere
- ✓ Easy to maintain
- ✓ Professional appearance

---

## 🎨 Three Most Common Components

| Component | Size | Use For | Example |
|-----------|------|---------|---------|
| **HeadingXL** | 36px | Main section titles | "Why Choose AVANTCORE" |
| **BodyMd** | 16px | Regular paragraphs | "Enterprise clients trust..." |
| **LabelMd** | 12px | Badges & metadata | "Enterprise Solution" |

Use these 80% of the time!

---

## 🔄 Replace Pattern

Use this pattern to update existing elements:

```tsx
// FIND THIS:
<h2 className="text-4xl font-bold">...</h2>

// REPLACE WITH THIS:
<HeadingXL>...</HeadingXL>

// FIND THIS:
<p className="text-base text-gray-600">...</p>

// REPLACE WITH THIS:
<BodyMd>...</BodyMd>

// FIND THIS:
<span className="text-xs font-semibold uppercase">...</span>

// REPLACE WITH THIS:
<LabelMd>...</LabelMd>
```

---

## ✅ Checklist for Your First Page

- [ ] Import `HeadingXL`, `BodyMd`, `LabelMd`
- [ ] Find all `<h2>` elements with custom classes → Replace with `<HeadingXL>`
- [ ] Find all `<p>` elements with custom classes → Replace with `<BodyMd>`
- [ ] Find all label/badge elements → Replace with `<LabelMd>`
- [ ] Test on desktop (1024px)
- [ ] Test on tablet (768px)
- [ ] Test on mobile (320px)
- [ ] Done!

**Expected time:** 15-30 minutes for one page

---

## 📚 Component Sizes (Bookmark This)

### For Headings
```
Main Title:     HeadingXL   (36px)
Subsection:     HeadingMd   (24px)
Feature Title:  HeadingSm   (20px)
```

### For Body Text
```
Standard:  BodyMd   (16px)  ← Use this for everything
Large:     BodyLg   (18px)
Small:     BodySm   (14px)
```

### For Labels
```
Standard:  LabelMd  (12px)  ← Use this most often
```

---

## 🎯 Page Priority (Do These First)

1. **HomeNew.tsx** (Landing page) - Most visible
2. **AboutEnterprise.tsx** - Second priority
3. **Services.tsx** - Then services
4. **Products.tsx** - Then products
5. **Others** - Less priority

**Pro tip:** Start with your landing page to see the improvement immediately!

---

## 🔗 Full Documentation

When you need more details:

1. **Quick Reference:** `TYPOGRAPHY_QUICK_REFERENCE.md`
2. **Step-by-Step:** `TYPOGRAPHY_MIGRATION_GUIDE.md`
3. **Complete Details:** `TYPOGRAPHY_SYSTEM.md`
4. **Overview:** `TYPOGRAPHY_README.md`

---

## 💡 Pro Tips

### Tip 1: Start Small
Don't update your entire site at once. Start with the hero section of one page, test it, then move on.

### Tip 2: Copy & Paste
These components work in any file:
```tsx
import { HeadingXL, BodyMd } from '@/components/Typography';
```

### Tip 3: Test Mobile
Always check how it looks on a phone. Typography responsiveness is automatic!

### Tip 4: Be Consistent
Use `HeadingXL` for all main section titles (not sometimes `HeadingXL`, sometimes `HeadingLg`).

---

## 🚫 Common Mistakes (Avoid These)

### ❌ Mistake 1: Mixing Styles
```tsx
// DON'T do this:
<HeadingXL className="text-2xl font-light">Title</HeadingXL>

// DO this:
<HeadingXL>Title</HeadingXL>
```

### ❌ Mistake 2: Wrong Component Size
```tsx
// DON'T use LabelMd for section titles
<LabelMd>My Section Title</LabelMd>  // Wrong! Too small

// DO use HeadingXL
<HeadingXL>My Section Title</HeadingXL>  // Right!
```

### ❌ Mistake 3: Forgetting Mobile Test
Always test on mobile. The system auto-scales, but you should verify.

---

## ✨ What Happens Automatically

You don't need to do anything for these - they're built in:

✓ **Mobile scaling** - Headings get smaller on mobile
✓ **Color** - All headings are dark blue, all body text is softer gray
✓ **Line height** - Perfect spacing for readability
✓ **Letter spacing** - Professional spacing
✓ **Margins** - Proper bottom spacing

---

## 🎓 Learning Flow

**Beginner:** Just use the 3 main components
```
HeadingXL → BodyMd → LabelMd
```

**Intermediate:** Explore more sizes when needed
```
DisplayMd, HeadingXL, HeadingMd, BodyLg, BodyMd, LabelMd
```

**Advanced:** Use the `Text` component for full control
```tsx
<Text variant="heading-xl" as="h2">Title</Text>
```

---

## 🆘 Troubleshooting

### Problem: "Cannot find module '@/components/Typography'"
**Solution:** Make sure you're importing from the exact path:
```tsx
import { HeadingXL } from '@/components/Typography';  // ✓ Correct
import { HeadingXL } from '@components/Typography';   // ✗ Wrong
```

### Problem: "Heading looks too small on mobile"
**Solution:** Mobile scaling is automatic. This is the design. It should look good!

### Problem: "I don't know which component to use"
**Solution:** Use this guide:
- Page title → `DisplayMd` or `HeadingXL`
- Section title → `HeadingXL`
- Subsection → `HeadingMd`
- Regular text → `BodyMd`
- Label/badge → `LabelMd`

---

## 🎉 Next Steps

1. **Open HomeNew.tsx** in your editor
2. **Find a `<h2>` element** with custom classes
3. **Add import line** at the top of the file
4. **Replace the element** with `<HeadingXL>`
5. **Save and preview**

You've now used the typography system!

---

## 📞 Need Help?

1. Check `TYPOGRAPHY_QUICK_REFERENCE.md` for component sizes
2. Read `TYPOGRAPHY_MIGRATION_GUIDE.md` for page-by-page instructions
3. Look at existing page implementations
4. Reference `TYPOGRAPHY_SYSTEM.md` for complete details

---

## 🏆 Success Criteria

When you've done it right:

✓ Section titles are consistently sized across pages
✓ Body text is readable (16px, 1.5 line-height)
✓ Mobile view looks professional
✓ No hardcoded font sizes in code
✓ Page looks more professional than before

---

## 💪 You've Got This!

Typography might seem complex, but with this system it's simple:

1. Import
2. Use
3. Done!

The system handles everything else.

---

**Ready? Let's go!** 🚀

Start with `TYPOGRAPHY_QUICK_REFERENCE.md` → Then implement first page

---

**Questions?** Check the documentation files above.
**Stuck?** Look at an already-implemented component.
**Confident?** Start updating pages!

Happy implementing! ✨
