// Script to remove black background from logo
// This creates a transparent PNG version

const fs = require('fs');
const path = require('path');

// Try to use sharp if available, otherwise use canvas
try {
  const sharp = require('sharp');
  
  const inputPath = path.join(__dirname, 'public', 'logo-avantcore99-10-768x154.jpg');
  const outputPath = path.join(__dirname, 'public', 'logo-avantcore.png');
  
  sharp(inputPath)
    .removeAlpha() // Ensure we're working with RGB
    .linear(1.2, 0) // Increase contrast slightly
    .toColorspace('srgb')
    .png({ quality: 100, effort: 10 })
    .toBuffer()
    .then(buffer => {
      // Now use canvas to remove black background and add transparency
      console.log('Processing logo to remove black background...');
      const Canvas = require('canvas');
      const Image = Canvas.Image;
      
      // Load the image
      const img = new Image();
      img.onload = () => {
        const canvas = Canvas.createCanvas(img.width, img.height);
        const ctx = canvas.getContext('2d');
        
        // Draw image
        ctx.drawImage(img, 0, 0);
        
        // Get image data
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        // Remove black background (change black pixels to transparent)
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          
          // If pixel is very dark (close to black), make it transparent
          if (r < 30 && g < 30 && b < 30) {
            data[i + 3] = 0; // Set alpha to 0 (transparent)
          }
        }
        
        ctx.putImageData(imageData, 0, 0);
        
        // Save as PNG
        const out = fs.createWriteStream(outputPath);
        const stream = canvas.createPNGStream();
        stream.pipe(out);
        
        out.on('finish', () => {
          console.log('Logo PNG created successfully at:', outputPath);
        });
      };
      
      img.src = buffer;
    })
    .catch(err => console.error('Error:', err));
    
} catch (e) {
  console.log('sharp not available, creating SVG logo instead...');
  console.log('Consider installing sharp: npm install sharp');
}
