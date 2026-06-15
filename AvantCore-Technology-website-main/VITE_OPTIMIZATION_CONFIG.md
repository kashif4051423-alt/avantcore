# Vite Configuration for Image Optimization

## Current Setup

Add these configurations to your `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Image optimization
    assetsInlineLimit: 4096, // 4KB - inline small images as data URIs
    chunkSizeWarningLimit: 500, // Show warnings for chunks > 500KB
    
    // Rollup options for better bundling
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': [
            'react',
            'react-dom',
            'react-router-dom',
            'framer-motion',
            'lucide-react',
          ],
        },
      },
    },
  },

  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
    ],
  },
})
```

## Firebase Hosting Configuration

Update `firebase.json` for proper caching:

```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "cleanUrls": true,
    
    "headers": [
      {
        "source": "**/*.@(webp|svg|woff|woff2|ttf|otf|eot)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          },
          {
            "key": "Content-Type",
            "value": "image/webp;charset=UTF-8"
          }
        ]
      },
      {
        "source": "**/*.@(jpg|jpeg|png|gif)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=2592000"
          }
        ]
      },
      {
        "source": "**/*.@(js|mjs)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      },
      {
        "source": "/index.html",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=3600"
          }
        ]
      }
    ],
    
    "redirects": [],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

## Performance Tips

### 1. Image Loading Priority

```typescript
// Priority images (hero section)
<OptimizedImage src="/hero.webp" alt="Hero" priority={true} />

// Lazy load images (below fold)
<OptimizedImage src="/section.webp" alt="Section" priority={false} />
```

### 2. Responsive Images with srcSet

```typescript
// For responsive variants
const getResponsiveImage = (basePath: string) => ({
  mobile: `${basePath}-480w.webp 480w`,
  tablet: `${basePath}-800w.webp 800w`,
  desktop: `${basePath}-1400w.webp 1400w`,
});

// Usage in picture element
<picture>
  <source media="(max-width: 640px)" srcSet={getResponsiveImage('/image').mobile} />
  <source media="(max-width: 1024px)" srcSet={getResponsiveImage('/image').tablet} />
  <source srcSet={getResponsiveImage('/image').desktop} />
  <img src="/image-800w.webp" alt="Responsive" />
</picture>
```

### 3. Build Size Analysis

```bash
# Add to package.json scripts
"build": "vite build",
"analyze": "vite build --analyze",

# Install analyzer
npm install vite-plugin-visualizer

# Update vite.config.ts
import { visualizer } from 'vite-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  ]
})
```

## Monitoring Performance

### 1. Web Vitals

```typescript
// src/lib/web-vitals.ts
export const reportWebVitals = () => {
  if ('web-vital' in window) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log)
      getFID(console.log)
      getFCP(console.log)
      getLCP(console.log)
      getTTFB(console.log)
    })
  }
}
```

### 2. Lighthouse CI

```json
{
  "ci": {
    "collect": {
      "url": ["http://localhost:3000"],
      "staticDistDir": "./dist",
      "numberOfRuns": 3
    },
    "assert": {
      "preset": "lighthouse:recommended",
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.9 }],
        "categories:best-practices": ["error", { "minScore": 0.9 }]
      }
    },
    "upload": {
      "target": "temporary-public-storage"
    }
  }
}
```

## Next Steps

1. **Convert Images**: Run image conversion scripts
2. **Update Paths**: Replace all image references with WebP
3. **Add Component**: Use OptimizedImage component
4. **Configure**: Update vite.config.ts and firebase.json
5. **Test**: Run Lighthouse audit
6. **Monitor**: Track Core Web Vitals

## Resources

- [Vite Documentation](https://vitejs.dev/)
- [WebP Format](https://developers.google.com/speed/webp)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [Web Vitals](https://web.dev/vitals/)
