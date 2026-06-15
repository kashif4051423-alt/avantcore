import React from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

/**
 * ResponsiveImage Component
 * - Automatically generates srcset for different screen sizes
 * - Loads appropriate image size based on device
 * - Supports WebP with fallback
 */
const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 100vw',
}) => {
  // Generate responsive srcsets
  const baseName = src.replace(/\.(jpg|jpeg|png|jfif)$/i, '');
  const ext = src.match(/\.(jpg|jpeg|png|jfif)$/i)?.[0] || '.jpg';

  // Mobile, tablet, desktop sizes
  const jpgSrcSet = `
    ${baseName}-sm${ext} 640w,
    ${baseName}-md${ext} 1024w,
    ${baseName}${ext} 1920w
  `;

  const webpSrcSet = `
    ${baseName}-sm.webp 640w,
    ${baseName}-md.webp 1024w,
    ${baseName}.webp 1920w
  `;

  return (
    <picture>
      {/* WebP for modern browsers */}
      <source srcSet={webpSrcSet} sizes={sizes} type="image/webp" />
      
      {/* JPEG fallback */}
      <source srcSet={jpgSrcSet} sizes={sizes} type="image/jpeg" />
      
      {/* Fallback img */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    </picture>
  );
};

export default ResponsiveImage;
