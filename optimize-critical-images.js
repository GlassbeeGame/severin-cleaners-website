const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesToOptimize = [
  { name: 'landingpage', targetSize: 100 }, // Hero image - critical for LCP
  { name: 'before', targetSize: 150 },
  { name: 'after', targetSize: 150 },
  { name: 'about', targetSize: 120 },
  { name: 'contact', targetSize: 120 },
  { name: 'commercial', targetSize: 100 },
  { name: 'construction', targetSize: 100 },
  { name: 'hoarding', targetSize: 100 },
  { name: 'estate', targetSize: 100 },
  { name: 'furniture', targetSize: 100 },
  { name: 'dtsd', targetSize: 100 },
  { name: '5Q8A8965', targetSize: 120 },
];

async function optimizeImage(imageName, targetSizeKB) {
  const inputPath = path.join(__dirname, 'public', 'optimized', `${imageName}.webp`);
  const outputPath = path.join(__dirname, 'public', 'optimized', `${imageName}.webp`);

  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Skipping ${imageName} - file not found`);
    return;
  }

  const originalStats = fs.statSync(inputPath);
  const originalSizeKB = Math.round(originalStats.size / 1024);

  if (originalSizeKB <= targetSizeKB) {
    console.log(`✓ ${imageName}.webp already optimized (${originalSizeKB}KB)`);
    return;
  }

  let quality = 60;
  let bestQuality = quality;
  let closestSize = Infinity;

  // Binary search for optimal quality
  for (let q = 50; q <= 70; q += 5) {
    const tempPath = path.join(__dirname, 'public', 'optimized', `${imageName}_temp.webp`);

    await sharp(inputPath)
      .webp({ quality: q, effort: 6 })
      .toFile(tempPath);

    const stats = fs.statSync(tempPath);
    const sizeKB = Math.round(stats.size / 1024);

    if (Math.abs(sizeKB - targetSizeKB) < Math.abs(closestSize - targetSizeKB)) {
      closestSize = sizeKB;
      bestQuality = q;
    }

    fs.unlinkSync(tempPath);
  }

  // Apply best quality
  await sharp(inputPath)
    .webp({ quality: bestQuality, effort: 6 })
    .toFile(outputPath.replace('.webp', '_optimized.webp'));

  fs.renameSync(outputPath.replace('.webp', '_optimized.webp'), outputPath);

  const newStats = fs.statSync(outputPath);
  const newSizeKB = Math.round(newStats.size / 1024);
  const savings = originalSizeKB - newSizeKB;
  const savingsPercent = Math.round((savings / originalSizeKB) * 100);

  console.log(`✓ ${imageName}.webp: ${originalSizeKB}KB → ${newSizeKB}KB (saved ${savings}KB / ${savingsPercent}%)`);
}

async function main() {
  console.log('🚀 Optimizing critical images for performance...\n');

  let totalOriginalSize = 0;
  let totalNewSize = 0;

  for (const { name, targetSize } of imagesToOptimize) {
    const inputPath = path.join(__dirname, 'public', 'optimized', `${name}.webp`);

    if (fs.existsSync(inputPath)) {
      const beforeSize = fs.statSync(inputPath).size;
      await optimizeImage(name, targetSize);
      const afterSize = fs.existsSync(inputPath) ? fs.statSync(inputPath).size : beforeSize;

      totalOriginalSize += beforeSize;
      totalNewSize += afterSize;
    }
  }

  const totalSavings = Math.round((totalOriginalSize - totalNewSize) / 1024);
  const totalSavingsPercent = Math.round(((totalOriginalSize - totalNewSize) / totalOriginalSize) * 100);

  console.log(`\n✅ Total savings: ${totalSavings}KB (${totalSavingsPercent}%)`);
  console.log(`📦 Original size: ${Math.round(totalOriginalSize / 1024)}KB`);
  console.log(`📦 New size: ${Math.round(totalNewSize / 1024)}KB`);
}

main().catch(console.error);
