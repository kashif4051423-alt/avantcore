/**
 * Hero Image Preloading Utility
 * Preloads critical hero images for faster rendering
 */

const HERO_IMAGES = [
  '/about us .jpg',
  '/News & Events - AVANTCORE TECHNOLOGIES_files/Business Transformation.jfif',
  '/Advanced Analytics.jpg',
  '/Cloud Solutions.jfif',
  '/ERP.jpg',
  '/GIS.jpg',
  '/hcm.jpg',
];

export const preloadHeroImages = () => {
  if (typeof window === 'undefined') return;

  // Preload WebP versions first
  HERO_IMAGES.forEach(imagePath => {
    const webpPath = imagePath.replace(/\.(jpg|jpeg|png|jfif)$/i, '.webp');
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = webpPath;
    link.type = 'image/webp';
    document.head.appendChild(link);

    // Fallback to original format
    const fallbackLink = document.createElement('link');
    fallbackLink.rel = 'preload';
    fallbackLink.as = 'image';
    fallbackLink.href = imagePath;
    document.head.appendChild(fallbackLink);
  });
};

export const getHeroImageList = () => HERO_IMAGES;

export const isHeroImage = (imagePath: string): boolean => {
  return HERO_IMAGES.some(heroImg => 
    imagePath.includes(heroImg.replace(/\.(jpg|jpeg|png|jfif)$/i, ''))
  );
};
