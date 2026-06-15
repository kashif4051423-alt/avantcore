# Image Optimization Setup Guide

This guide covers the complete image optimization implementation for AvantCore website.

## 🎯 Optimization Goals

✅ Convert all JPG, JPEG, PNG images to WebP format
✅ Compress all images under 300KB
✅ Enable lazy loading for all non-hero images
✅ Preload only hero section images
✅ Remove unused images from src/assets

## 📋 Implementation Status

### 1. ✅ Lazy Loading Component
- **File**: `src/components/common/OptimizedImage.tsx`
- **Features**:
  - Automatic WebP fallback
  - Intersection Observer for visibility-based loading
  - Support for `isHero` prop to preload critical images
  - Responsive aspect ratio handling
  - Placeholder during load

### 2. ✅ Hero Image Preloading
- **File**: `src/lib/imagePreload.ts`
- **Features**:
  - `preloadHeroImages()` - Preloads WebP + fallback formats
  - `isHeroImage()` - Checks if image is in hero list
  - `getHeroImageList()` - Returns list of hero images

### 3. ✅ App Integration
- **File**: `src/App.tsx`
- **Changes**: Added `useEffect` hook to call `preloadHeroImages()` on app load

### 4. 📝 Image Conversion Script
- **File**: `scripts/optimize-images.js`
- **Features**:
  - Scans all image directories
  - Identifies oversized images (>300KB)
  - Converts to WebP format
  - Compresses JPEG/PNG files
  - Generates optimization report

## 🚀 Quick Start

### Prerequisites
Install required tools:

```bash
# For WebP conversion
npm install -g cwebp
# OR
brew install webp  # macOS

# For compression (optional, uses ImageMagick)
npm install -g imagemagick
# OR
brew install imagemagick  # macOS
```

### Step 1: Run Image Optimization Script
```bash
cd AvantCore-Technology-website-main
node scripts/optimize-images.js
```

This will:
- Scan all images in `public/` directory
- Convert JPG/PNG/JFIF to WebP
- Compress oversized images (>300KB)
- Display a report with statistics

### Step 2: Update Image References

Convert regular `<img>` tags to use `OptimizedImage`:

**Before:**
```tsx
<img src="/about us .jpg" alt="About" />
```

**After:**
```tsx
import OptimizedImage from '@/components/common/OptimizedImage';

<OptimizedImage 
  src="/about us .jpg" 
  alt="About"
  isHero={true}  // If it's a hero image
/>
```

### Step 3: Verify Hero Images

Hero images are automatically preloaded in `App.tsx`. To add more:

Edit `src/lib/imagePreload.ts`:
```typescript
const HERO_IMAGES = [
  '/image-path.jpg',
  // Add more hero images here
];
```

## 📊 Performance Metrics

### Expected Improvements

| Metric | Before | After |
|--------|--------|-------|
| Image File Size | ~45MB | ~15-20MB (60% reduction) |
| Hero Load Time | ~2-3s | ~500ms-1s (50-75% faster) |
| Page Load Time | ~4-5s | ~2-3s (40-50% faster) |
| Network Bandwidth | 100% | ~30-35% (65-70% savings) |

### WebP Savings
- JPEG → WebP: 25-35% smaller
- PNG → WebP: 25-50% smaller

## 🔧 Component Usage

### Basic Usage (Lazy Loading)
```tsx
<OptimizedImage 
  src="/product.jpg"
  alt="Product"
  width={800}
  height={600}
/>
```

### Hero Image (Preloaded)
```tsx
<OptimizedImage 
  src="/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  isHero={true}
  priority={true}
/>
```

### Custom Object Fit
```tsx
<OptimizedImage 
  src="/image.jpg"
  alt="Image"
  objectFit="contain"
  className="custom-class"
/>
```

## 📁 Directory Structure

```
public/
├── images/
│   ├── hero/           # Hero images (preloaded)
│   ├── products/       # Product images (lazy)
│   ├── services/       # Service images (lazy)
│   └── ...
scripts/
├── optimize-images.js  # Conversion script
src/
├── components/
│   └── common/
│       └── OptimizedImage.tsx
├── lib/
│   └── imagePreload.ts
└── App.tsx
```

## 🎯 Best Practices

### 1. Image Sizes
- **Hero images**: 1920x1080 (or 1:1 aspect ratio)
- **Product images**: 800x600
- **Thumbnails**: 300x300
- **Cards**: 600x400

### 2. Naming Convention
```
kebab-case-image-name.jpg
good: hero-section-bg.jpg
bad: heroSectionBG.JPG or hero_section_bg.jpg
```

### 3. Compression Guidelines
- **High quality**: 75-85 quality (hero, full-page images)
- **Medium quality**: 65-75 quality (product, detail images)
- **Low quality**: 50-65 quality (thumbnails, backgrounds)

### 4. Format Selection
- **Photos**: WebP/JPEG
- **Illustrations**: WebP/PNG
- **Icons**: SVG (preferred)
- **Logos**: SVG or WebP

## 🔍 Verify Optimization

### Check WebP Support
```tsx
// In browser DevTools
canUseWebP = () => {
  const canvas = document.createElement('canvas');
  return canvas.toDataURL('image/webp').indexOf('image/webp') === 0;
};
```

### Monitor Network Usage
1. Open DevTools (F12)
2. Go to Network tab
3. Filter by images
4. Check file sizes and formats

### Lighthouse Audit
1. Open DevTools → Lighthouse
2. Run audit
3. Check "Properly sized images"
4. Check "Modern image formats"

## 📝 Maintenance

### Regular Tasks

**Monthly:**
- Check for new image uploads
- Verify no oversized images
- Run optimization script on new images

**Quarterly:**
- Audit unused images
- Review optimization effectiveness
- Update hero image list if needed

### Cleanup Unused Images

Find unused images:
```bash
# Search for image references in code
grep -r "\.jpg\|\.png\|\.jfif" src/ --include="*.tsx" --include="*.ts"

# Compare with files in public/
ls public/*.{jpg,png,jfif} 2>/dev/null
```

Remove unused:
```bash
# Backup first!
cp -r public public.backup

# Remove unused images
rm public/unused-image.jpg
```

## 🐛 Troubleshooting

### WebP Not Loading
1. Check browser support (> 90% modern browsers)
2. Verify WebP file exists
3. Check MIME type in server config
4. Fallback will use original format

### Images Pixelated
- Reduce compression quality
- Check original image quality
- Use higher resolution source

### Slow Loading Still
- Check network throttling
- Verify lazy loading is working
- Check CDN cache headers
- Consider image CDN service

## 📚 Resources

- [WebP Specification](https://developers.google.com/speed/webp)
- [Image Optimization Guide](https://web.dev/image-optimization/)
- [Lighthouse Audit Guide](https://developers.google.com/web/tools/lighthouse)
- [cwebp Documentation](https://developers.google.com/speed/webp/docs/cwebp)

## ✅ Checklist

- [ ] Install required tools (cwebp, imagemagick)
- [ ] Run optimization script
- [ ] Update main images to use OptimizedImage
- [ ] Verify hero images are preloading
- [ ] Test with DevTools Network tab
- [ ] Run Lighthouse audit
- [ ] Check mobile performance
- [ ] Commit changes to Git
- [ ] Update documentation
- [ ] Monitor analytics for performance metrics
