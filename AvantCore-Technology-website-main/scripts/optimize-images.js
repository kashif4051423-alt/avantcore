#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const HERO_IMAGES = [
  'Business Transformation.jfif',
  'Advanced Analytics.jpg',
  'Cloud Solutions.jfif',
  'Digital Consulting',
  'ERP.jpg',
  'GIS.jpg',
  'HCM.jpg',
];

const MAX_SIZE = 300 * 1024; // 300KB

function getHeroImages() {
  return HERO_IMAGES;
}

function isImageFile(file) {
  const ext = path.extname(file).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.jfif'].includes(ext);
}

function isHeroImage(filepath) {
  return HERO_IMAGES.some(heroImg => filepath.includes(heroImg));
}

function getImageSize(filepath) {
  try {
    const stats = fs.statSync(filepath);
    return stats.size;
  } catch (e) {
    return 0;
  }
}

function scanImages(dir) {
  let images = [];
  
  try {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filepath = path.join(dir, file);
      const stat = fs.statSync(filepath);
      
      if (stat.isDirectory() && !file.startsWith('.')) {
        images = images.concat(scanImages(filepath));
      } else if (isImageFile(file)) {
        images.push({
          path: filepath,
          name: file,
          size: stat.size,
          isHero: isHeroImage(filepath),
        });
      }
    });
  } catch (e) {
    console.error(`Error scanning ${dir}:`, e.message);
  }
  
  return images;
}

function shouldCompress(image) {
  return image.size > MAX_SIZE;
}

function convertToWebP(inputPath) {
  const outputPath = inputPath.replace(/\.(jpg|jpeg|png|jfif)$/i, '.webp');
  
  try {
    console.log(`Converting: ${inputPath}`);
    execSync(`cwebp -q 80 "${inputPath}" -o "${outputPath}"`, { stdio: 'inherit' });
    console.log(`✓ Created: ${outputPath}`);
    return outputPath;
  } catch (e) {
    console.error(`✗ Failed to convert ${inputPath}:`, e.message);
    return null;
  }
}

function compressImage(inputPath) {
  try {
    console.log(`Compressing: ${inputPath}`);
    
    const ext = path.extname(inputPath).toLowerCase();
    if (['.jpg', '.jpeg'].includes(ext)) {
      execSync(`magick "${inputPath}" -quality 80 -strip "${inputPath}"`, { stdio: 'inherit' });
    } else if (ext === '.png') {
      execSync(`magick "${inputPath}" -strip "${inputPath}"`, { stdio: 'inherit' });
    }
    
    console.log(`✓ Compressed: ${inputPath}`);
    return true;
  } catch (e) {
    console.error(`✗ Failed to compress ${inputPath}:`, e.message);
    return false;
  }
}

function generateImageReport(images) {
  console.log('\n=== IMAGE OPTIMIZATION REPORT ===\n');
  
  const heroImages = images.filter(img => img.isHero);
  const nonHeroImages = images.filter(img => !img.isHero);
  const oversized = images.filter(img => img.size > MAX_SIZE);
  
  console.log(`Total Images: ${images.length}`);
  console.log(`Hero Images: ${heroImages.length}`);
  console.log(`Non-Hero Images: ${nonHeroImages.length}`);
  console.log(`Oversized (>300KB): ${oversized.length}\n`);
  
  console.log('Oversized Images:');
  oversized.forEach(img => {
    console.log(`  - ${img.name}: ${(img.size / 1024).toFixed(2)}KB`);
  });
  
  console.log('\nHero Images (for preloading):');
  heroImages.forEach(img => {
    console.log(`  - ${img.name}: ${(img.size / 1024).toFixed(2)}KB`);
  });
}

function main() {
  console.log('Starting image optimization...\n');
  
  const publicDir = path.join(__dirname, '../public');
  const images = scanImages(publicDir);
  
  if (images.length === 0) {
    console.log('No images found.');
    return;
  }
  
  generateImageReport(images);
  
  console.log('\n=== OPTIMIZATION ACTIONS ===\n');
  
  let converted = 0;
  let compressed = 0;
  
  // First, compress oversized images
  images.filter(shouldCompress).forEach(image => {
    if (compressImage(image.path)) {
      compressed++;
    }
  });
  
  // Then convert to WebP
  images.forEach(image => {
    if (convertToWebP(image.path)) {
      converted++;
    }
  });
  
  console.log(`\n=== SUMMARY ===`);
  console.log(`Converted to WebP: ${converted}/${images.length}`);
  console.log(`Compressed: ${compressed}/${images.filter(shouldCompress).length}`);
  
  console.log('\n=== HERO IMAGES (FOR PRELOADING) ===');
  images.filter(img => img.isHero).forEach(img => {
    console.log(`<link rel="preload" as="image" href="/${path.relative(publicDir, img.path)}" />`);
  });
}

main();
