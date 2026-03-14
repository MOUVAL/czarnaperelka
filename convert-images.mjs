import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PRODUCTS_DIR = './public/images/products';
const QUALITY = 75;

async function convertImages() {
  const files = fs.readdirSync(PRODUCTS_DIR).filter(f => f.endsWith('.jpg'));
  
  console.log(`Converting ${files.length} images to WebP...`);
  
  for (const file of files) {
    const inputPath = path.join(PRODUCTS_DIR, file);
    const outputPath = path.join(PRODUCTS_DIR, file.replace('.jpg', '.webp'));
    
    try {
      await sharp(inputPath)
        .webp({ quality: QUALITY, effort: 4 })
        .toFile(outputPath);
      
      const originalSize = fs.statSync(inputPath).size;
      const newSize = fs.statSync(outputPath).size;
      const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
      
      console.log(`✓ ${file} → ${file.replace('.jpg', '.webp')} (${savings}% smaller)`);
    } catch (err) {
      console.error(`✗ Failed: ${file}`, err.message);
    }
  }
  
  console.log('\nDone!');
}

convertImages();
