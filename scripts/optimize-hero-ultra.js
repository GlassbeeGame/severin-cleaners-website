const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeHero() {
  const inputPath = path.join(__dirname, 'public', 'optimized', 'landingpage-mobile.webp');
  const outputPath = path.join(__dirname, 'public', 'optimized', 'landingpage-mobile.webp');

  const originalStats = fs.statSync(inputPath);
  const originalSizeKB = Math.round(originalStats.size / 1024);

  console.log('🚀 Ultra-optimizing hero image for LCP...\n');
  console.log(`Original size: ${originalSizeKB}KB`);
  console.log(`Target size: ~15KB`);
  console.log(`Required savings: ~9KB\n`);

  // Try quality 40
  await sharp(inputPath)
    .webp({ quality: 40, effort: 6 })
    .toFile(outputPath.replace('.webp', '_ultra.webp'));

  const newStats = fs.statSync(outputPath.replace('.webp', '_ultra.webp'));
  const newSizeKB = Math.round(newStats.size / 1024);
  const savings = originalSizeKB - newSizeKB;

  console.log(`✓ Optimized at quality 40: ${newSizeKB}KB`);
  console.log(`✓ Savings: ${savings}KB (${Math.round((savings / originalSizeKB) * 100)}%)`);

  if (newSizeKB <= 15) {
    fs.renameSync(outputPath.replace('.webp', '_ultra.webp'), outputPath);
    console.log(`\n✅ SUCCESS! Hero image now ${newSizeKB}KB (target: 15KB)`);
  } else {
    console.log(`\n⚠️  Still ${newSizeKB - 15}KB over target, trying quality 35...`);

    await sharp(inputPath)
      .webp({ quality: 35, effort: 6 })
      .toFile(outputPath.replace('.webp', '_ultra.webp'));

    const stats2 = fs.statSync(outputPath.replace('.webp', '_ultra.webp'));
    const size2KB = Math.round(stats2.size / 1024);

    console.log(`✓ Optimized at quality 35: ${size2KB}KB`);

    fs.renameSync(outputPath.replace('.webp', '_ultra.webp'), outputPath);
    console.log(`\n✅ Final hero image: ${size2KB}KB`);
  }
}

optimizeHero().catch(console.error);
