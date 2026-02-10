const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const heroImagePath = path.join(__dirname, 'public', 'optimized', 'landingpage.webp');

// Generate responsive sizes optimized for mobile
const sizes = [
  { width: 640, quality: 55, suffix: '-mobile' },    // Mobile portrait
  { width: 768, quality: 58, suffix: '-tablet' },    // Tablet portrait
  { width: 1024, quality: 60, suffix: '-desktop' },  // Small desktop
  { width: 1280, quality: 62, suffix: '-large' },    // Desktop
  { width: 1920, quality: 65, suffix: '-xl' },       // Full size
];

async function generateResponsiveImages() {
  console.log('🚀 Generating responsive hero images...\n');

  for (const size of sizes) {
    const outputPath = path.join(
      __dirname,
      'public',
      'optimized',
      `landingpage${size.suffix}.webp`
    );

    await sharp(heroImagePath)
      .resize(size.width, null, { withoutEnlargement: true })
      .webp({ quality: size.quality, effort: 6 })
      .toFile(outputPath);

    const stats = fs.statSync(outputPath);
    const sizeKB = Math.round(stats.size / 1024);

    console.log(`✓ landingpage${size.suffix}.webp: ${size.width}px wide, ${sizeKB}KB (quality: ${size.quality})`);
  }

  console.log('\n✅ All responsive images generated!');
}

generateResponsiveImages().catch(console.error);
