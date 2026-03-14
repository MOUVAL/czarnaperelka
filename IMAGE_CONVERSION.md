# Image Conversion Documentation

## Overview
All product images have been converted from JPG to WebP format for better performance and smaller file sizes.

## Conversion Details
- **Source format**: JPG
- **Target format**: WebP
- **Total images**: 30
- **Quality setting**: 75 (good balance of quality vs size)
- **Average compression**: ~40% smaller files

## How to Convert Images

### Using the included script:
```bash
node convert-images.mjs
```

### Script details (`convert-images.mjs`):
```javascript
import sharp from 'sharp';

const QUALITY = 75;

await sharp(inputPath)
  .webp({ quality: QUALITY, effort: 4 })
  .toFile(outputPath);
```

### Manual conversion with sharp CLI:
```bash
npm install -g sharp-cli
sharp -i "*.jpg" -o . -f webp -q 75
```

## File Locations
- **Original JPGs**: `public/images/products/*.jpg`
- **Converted WebPs**: `public/images/products/*.webp`

## Update Code References
When adding new products, use `.webp` extension:
```typescript
{ name: "Product Name", image: "/images/products/filename.webp", category: "Category" }
```

## Dependencies
- `sharp`: Node.js image processing library
- Install: `npm install sharp --save-dev`

## Performance Impact
- Faster page load times
- Reduced bandwidth usage
- Better SEO scores
- ~40% smaller image files on average
