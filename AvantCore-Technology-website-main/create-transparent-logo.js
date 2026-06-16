#!/usr/bin/env node
/**
 * Script to create a transparent PNG logo by removing black background
 * from the JPEG logo file
 */

const fs = require('fs');
const path = require('path');

// First, try with canvas package (if available)
async function createTransparentLogo() {
  try {
    // Try using canvas - most reliable for this task
    const canvas = require('canvas');
    const Image = canvas.Image;
    const fs = require('fs');
    
    const inputPath = path.join(__dirname, 'public', 'logo-avantcore99-10-768x154.jpg');
    const outputPath = path.join(__dirname, 'public', 'logo-avantcore.png');
    
    // Read the image file
    const imageBuffer = fs.readFileSync(inputPath);
    
    // Create image and load it
    const img = new Image();
    
    img.onload = () => {
      // Create canvas with same dimensions
      const c = canvas.createCanvas(img.width, img.height);
      const ctx = c.getContext('2d');
      
      // Draw the image
      ctx.drawImage(img, 0, 0);
      
      // Get image data
      const imgData = ctx.getImageData(0, 0, c.width, c.height);
      const data = imgData.data;
      
      // Process each pixel
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];
        
        // If pixel is very dark (near black), make it transparent
        const brightness = (r + g + b) / 3;
        if (brightness < 40) {
          data[i + 3] = 0; // Set alpha to 0
        }
      }
      
      // Put the modified image data back
      ctx.putImageData(imgData, 0, 0);
      
      // Save as PNG
      const buf = c.toBuffer('image/png');
      fs.writeFileSync(outputPath, buf);
      console.log(`✓ Transparent PNG created: ${outputPath}`);
      console.log(`  Size: ${img.width}x${img.height}`);
      console.log(`  File size: ${(buf.length / 1024).toFixed(1)}KB`);
    };
    
    img.onerror = () => {
      console.error('Failed to load image');
      process.exit(1);
    };
    
    img.src = imageBuffer;
    
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      console.log('Note: canvas module not installed.');
      console.log('To create transparent logos, install it with:');
      console.log('  npm install canvas');
      console.log('\nAlternatively, use an online tool or image editor to:');
      console.log('1. Open logo-avantcore99-10-768x154.jpg');
      console.log('2. Remove the black background');
      console.log('3. Export as PNG with transparency');
      console.log('4. Save as public/logo-avantcore.png');
    } else {
      console.error('Error:', err.message);
    }
    process.exit(1);
  }
}

createTransparentLogo();
