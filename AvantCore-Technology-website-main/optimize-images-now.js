#!/usr/bin/env node

/**
 * Aggressive Image Optimization Script
 * Optimizes all images in public folder for web delivery
 */

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, 'public');
const QUALITY = 60;
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1440;

let optimized = 0;
let failed = 0;
let totalOriginal = 0;
let totalOptimized = 0;

async function optimizeImage(filePath) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    
    // Skip already processed files and WebP files
    if (![ '.jpg', '.jpeg', '.png', '.jfif'].includes(ext)) {
      return;
    }
    
    // Skip temporary files
    if (filePath.includes('.tmp.')) {
      return;
    }

    const stats = fs.statSync(filePath);
    const originalSize = stats.size;
    totalOriginal += originalSize;

    // Get image metadata
    const metadata = await sharp(filePath).metadata();
    
    let width = metadata.width;
    let height = metadata.height;
    
    if (width > MAX_WIDTH || height > MAX_HEIGHT) {
      const scale = Math.min(MAX_WIDTH / width, MAX_HEIGHT / height);
      width = Math.round(width * scale);
      height = Math.round(height * scale);
    }

    // Use temporary file
    const tempPath = filePath + '.tmp.jpg';
    
    await sharp(filePath)
      .resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({ quality: QUALITY, progressive: true })
      .toFile(tempPath);

    // Create WebP version only if it doesn't exist
    const webpPath = filePath.replace(ext, '.webp');
    if (!fs.existsSync(webpPath)) {
      try {
        await sharp(filePath)
          .resize(width, height, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .webp({ quality: QUALITY })
          .toFile(webpPath);
      } catch (webpError) {
        // Continue even if WebP conversion fails
      }
    }

    // Replace original with optimized
    fs.unlinkSync(filePath);
    fs.renameSync(tempPath, filePath.replace(ext, '.jpg'));

    const newPath = filePath.replace(ext, '.jpg');
    const optimizedSize = fs.statSync(newPath).size;
    totalOptimized += optimizedSize;

    const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
    console.log(`✓ ${path.basename(filePath)} | ${(originalSize/1024).toFixed(0)}KB → ${(optimizedSize/1024).toFixed(0)}KB (${savings}% saved)`);

    optimized++;
  } catch (error) {
    console.error(`✗ ${path.basename(filePath)}: ${error.message}`);
    failed++;
  }
}

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else if (stat.isFile()) {
      await optimizeImage(filePath);
    }
  }
}

async function main() {
  console.log('🖼️  Starting aggressive image optimization...\n');
  
  try {
    await processDirectory(PUBLIC_DIR);
    
    console.log('\n✅ Optimization Complete!\n');
    console.log(`📊 Results:`);
    console.log(`   Images optimized: ${optimized}`);
    console.log(`   Failed: ${failed}`);
    console.log(`   Original size: ${(totalOriginal/1024/1024).toFixed(2)} MB`);
    console.log(`   Optimized size: ${(totalOptimized/1024/1024).toFixed(2)} MB`);
    if (totalOriginal > 0) {
      const percent = ((1 - totalOptimized/totalOriginal)*100).toFixed(1);
      console.log(`   Total saved: ${((totalOriginal - totalOptimized)/1024/1024).toFixed(2)} MB (${percent}% reduction)\n`);
    }
  } catch (error) {
    console.error('Error during optimization:', error);
    process.exit(1);
  }
}

main();
