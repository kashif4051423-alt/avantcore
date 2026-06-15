import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down';
  priority?: boolean; // Skip lazy loading for above-the-fold images
  blurDataURL?: string; // Optional blur placeholder
}

/**
 * OptimizedImageWithLazyLoad Component
 * - Lazy loads images (IntersectionObserver)
 * - Supports WebP with JPEG fallback
 * - Shows blur placeholder while loading
 * - Prevents Cumulative Layout Shift (CLS)
 */
const OptimizedImageWithLazyLoad = React.forwardRef<
  HTMLImageElement,
  OptimizedImageProps
>(
  (
    {
      src,
      alt,
      width = '100%',
      height = 'auto',
      className = '',
      objectFit = 'cover',
      priority = false,
      blurDataURL,
    },
    ref
  ) => {
    const [isLoaded, setIsLoaded] = useState(priority);
    const [imageSrc, setImageSrc] = useState(priority ? src : '');
    const imgRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      // If priority, load immediately
      if (priority) {
        setImageSrc(src);
        return;
      }

      // Use Intersection Observer for lazy loading
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '50px', // Start loading 50px before visible
          threshold: 0.01,
        }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }, [src, priority]);

    // Handle image load
    const handleLoad = () => {
      setIsLoaded(true);
    };

    // Generate WebP path
    const webpSrc = imageSrc.replace(/\.(jpg|jpeg|png|jfif)$/i, '.webp');

    const containerStyle: React.CSSProperties = {
      width,
      height,
      overflow: 'hidden',
      backgroundColor: blurDataURL ? 'rgba(0,0,0,0.1)' : 'transparent',
    };

    const imgStyle: React.CSSProperties = {
      width: '100%',
      height: '100%',
      objectFit,
      objectPosition: 'center',
      filter: !isLoaded ? 'blur(10px)' : 'blur(0)',
      transition: 'filter 0.3s ease-out',
    };

    return (
      <div ref={containerRef} style={containerStyle}>
        <motion.picture
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
          style={{ display: 'contents' }}
        >
          {/* WebP for modern browsers */}
          <source srcSet={webpSrc} type="image/webp" />
          
          {/* JPEG fallback */}
          <img
            ref={ref || imgRef}
            src={imageSrc}
            alt={alt}
            style={imgStyle}
            className={className}
            onLoad={handleLoad}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
          />
        </motion.picture>
      </div>
    );
  }
);

OptimizedImageWithLazyLoad.displayName = 'OptimizedImageWithLazyLoad';

export default OptimizedImageWithLazyLoad;
