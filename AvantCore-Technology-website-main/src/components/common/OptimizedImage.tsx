import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  isHero?: boolean;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down';
}

/**
 * OptimizedImage Component
 * 
 * Features:
 * - Automatic WebP format with fallbacks
 * - Lazy loading for non-critical images
 * - Proper aspect ratio and width/height attributes
 * - Intersection Observer for visibility-based loading
 * - Picture element for multiple formats
 * 
 * Usage:
 * <OptimizedImage
 *   src="/image.jpg"
 *   alt="Description"
 *   width={800}
 *   height={600}
 *   priority={false}
 * />
 */

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 800,
  height = 600,
  priority = false,
  isHero = false,
  className = '',
  objectFit = 'cover',
}) => {
  const [isVisible, setIsVisible] = useState(priority || isHero);
  const [imageSrc, setImageSrc] = useState(priority || isHero ? src : '');
  const ref = useRef<HTMLDivElement>(null);

  // Convert image path to WebP format
  const getWebPSource = (imagePath: string): string => {
    return imagePath
      .replace(/\.(jpg|jpeg|png|gif)$/i, '.webp')
      .replace(/%20/g, '-')
      .replace(/%28/g, '')
      .replace(/%29/g, '');
  };

  const webpSrc = getWebPSource(src);
  const fallbackSrc = src;

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isHero) {
      setIsVisible(true);
      setImageSrc(src);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setImageSrc(src);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [priority, isHero, src]);

  const aspectRatio = `${width}/${height}`;

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio,
        width: '100%',
        height: 'auto',
      }}
    >
      {isVisible ? (
        <picture>
          {/* WebP format (primary) */}
          <source
            srcSet={webpSrc}
            type="image/webp"
            media="(min-width: 0px)"
          />
          
          {/* JPEG/PNG fallback */}
          <source
            srcSet={fallbackSrc}
            type={`image/${fallbackSrc.split('.').pop()?.toLowerCase()}`}
          />
          
          {/* Fallback image */}
          <img
            src={imageSrc || fallbackSrc}
            alt={alt}
            width={width}
            height={height}
            loading={priority || isHero ? 'eager' : 'lazy'}
            decoding="async"
            className="w-full h-full"
            style={{
              objectFit,
              objectPosition: 'center',
            }}
            onError={() => {
              // Fallback to original if WebP fails
              setImageSrc(fallbackSrc);
            }}
          />
        </picture>
      ) : (
        // Placeholder while loading
        <div
          className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"
          style={{
            aspectRatio,
          }}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
