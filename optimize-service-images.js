const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Images specifically flagged by PageSpeed Insights
const imagesToOptimize = [
  { name: '5Q8A8965', targetSize: 46 },      // 100KB → 46KB (53.7KB savings)
  { name: 'toiletteam', targetSize: 46 },    // 88KB → 46KB (41.9KB savings)
  { name: 'estate', targetSize: 46 },        // 67KB → 46KB (21.1KB savings)
  { name: 'construction', targetSize: 46 },  // 61KB → 46KB (14.6KB savings)
  { name: 'commercial', targetSize: 46 },    // 57KB → 46KB (10.7KB savings)
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

  // Aggressive optimization - target quality 50-55 for service images
  let bestQuality = 50;
  let closestSize = Infinity;

  for (let q = 45; q <= 60; q += 2) {
    const tempPath = path.join(__dirname, 'public', 'optimized', `${imageName}_temp.webp`);

    await sharp(inputPath)
      .resize(750, null, { withoutEnlargement: true }) // Resize to 750px width max
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

  // Apply best quality with resize
  await sharp(inputPath)
    .resize(750, null, { withoutEnlargement: true })
    .webp({ quality: bestQuality, effort: 6 })
    .toFile(outputPath.replace('.webp', '_optimized.webp'));

  fs.renameSync(outputPath.replace('.webp', '_optimized.webp'), outputPath);

  const newStats = fs.statSync(outputPath);
  const newSizeKB = Math.round(newStats.size / 1024);
  const savings = originalSizeKB - newSizeKB;
  const savingsPercent = Math.round((savings / originalSizeKB) * 100);

  console.log(`✓ ${imageName}.webp: ${originalSizeKB}KB → ${newSizeKB}KB (saved ${savings}KB / ${savingsPercent}% at quality ${bestQuality})`);
}

async function main() {
  console.log('🚀 Optimizing service images for PageSpeed Insights...\n');

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
