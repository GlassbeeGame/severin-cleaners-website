const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = './public/Webphotos';
const outputDir = './public/optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(inputPath, filename) {
  const baseName = path.parse(filename).name;
  const outputPathWebp = path.join(outputDir, `${baseName}.webp`);
  const outputPathJpg = path.join(outputDir, `${baseName}.jpg`);

  try {
    const metadata = await sharp(inputPath).metadata();
    console.log(`Processing ${filename} (${Math.round(metadata.size / 1024 / 1024 * 10) / 10}MB)...`);

    // Generate optimized WebP (priority for modern browsers)
    await sharp(inputPath)
      .resize(1920, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: 80, effort: 6 })
      .toFile(outputPathWebp);

    // Generate optimized JPG fallback
    await sharp(inputPath)
      .resize(1920, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ quality: 82, progressive: true, mozjpeg: true })
      .toFile(outputPathJpg);

    const webpSize = fs.statSync(outputPathWebp).size;
    const jpgSize = fs.statSync(outputPathJpg).size;

    console.log(`✓ ${filename} -> WebP: ${Math.round(webpSize / 1024)}KB, JPG: ${Math.round(jpgSize / 1024)}KB`);

  } catch (error) {
    console.error(`✗ Error processing ${filename}:`, error.message);
  }
}

async function optimizeLogo() {
  const logoPath = './public/logo.png';
  const outputPath = path.join(outputDir, 'logo.webp');
  const outputPathPng = path.join(outputDir, 'logo.png');

  try {
    console.log('Processing logo.png...');

    // WebP version
    await sharp(logoPath)
      .resize(200, 200, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 90, effort: 6 })
      .toFile(outputPath);

    // Optimized PNG fallback
    await sharp(logoPath)
      .resize(200, 200, { fit: 'inside', withoutEnlargement: true })
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(outputPathPng);

    const webpSize = fs.statSync(outputPath).size;
    const pngSize = fs.statSync(outputPathPng).size;

    console.log(`✓ logo.png -> WebP: ${Math.round(webpSize / 1024)}KB, PNG: ${Math.round(pngSize / 1024)}KB`);
  } catch (error) {
    console.error('✗ Error processing logo:', error.message);
  }
}

async function main() {
  console.log('🎨 Starting image optimization...\n');

  const files = fs.readdirSync(imagesDir);
  const imageFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file));

  for (const file of imageFiles) {
    const inputPath = path.join(imagesDir, file);
    await optimizeImage(inputPath, file);
  }

  await optimizeLogo();

  console.log('\n✅ Image optimization complete!');
  console.log(`📁 Optimized images saved to: ${outputDir}`);
}

main();
