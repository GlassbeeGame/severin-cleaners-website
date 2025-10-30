#!/usr/bin/env node

/**
 * Helper script to extract FAQ data from existing FAQ components
 * Usage: node extract-faq-data.js <path-to-faq-component.tsx>
 */

const fs = require('fs');
const path = require('path');

function extractFAQData(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath);

  console.log(`\n${'='.repeat(80)}`);
  console.log(`Extracting from: ${fileName}`);
  console.log('='.repeat(80));

  // Check if it has the newer pattern with faqs array
  if (content.includes('const faqs = [')) {
    extractFromArray(content, fileName);
  } else {
    extractFromHardcoded(content, fileName);
  }
}

function extractFromArray(content, fileName) {
  // Extract the faqs array
  const faqsMatch = content.match(/const faqs = \[([\s\S]*?)\];/);
  if (faqsMatch) {
    console.log('\n// FAQ data (already in correct format):');
    console.log(`const faqs = [${faqsMatch[1]}];`);
  }

  // Extract title
  const titleMatch = content.match(/<h2 className="text-4xl[^>]*>\s*([^<]+)/);
  if (titleMatch) {
    console.log(`\n// Title:`);
    console.log(`// "${titleMatch[1].trim()}"`);
  }

  // Extract description
  const descMatch = content.match(/<p className="text-xl text-gray-600[^>]*>\s*([\s\S]*?)\s*<\/p>/);
  if (descMatch) {
    console.log(`\n// Description:`);
    console.log(`// ${descMatch[1].trim().replace(/\n\s*/g, ' ')}`);
  }

  // Extract CTA title
  const ctaTitleMatch = content.match(/<h3 className="text-2xl[^>]*>\s*([^<]+)/);
  if (ctaTitleMatch) {
    console.log(`\n// CTA Title:`);
    console.log(`// "${ctaTitleMatch[1].trim()}"`);
  }

  // Extract CTA description
  const ctaDescMatch = content.match(/<p className="text-gray-700 mb-6[^>]*>\s*([\s\S]*?)\s*<\/p>/);
  if (ctaDescMatch) {
    console.log(`\n// CTA Description:`);
    console.log(`// ${ctaDescMatch[1].trim().replace(/\n\s*/g, ' ')}`);
  }
}

function extractFromHardcoded(content, fileName) {
  console.log('\n// FAQ data (needs to be converted to array):');
  console.log('const faqs = [');

  // Extract all FAQ items
  const faqPattern = /<h3 className="font-bold[^>]*>([^<]+)<\/h3>[\s\S]*?<p className="text-gray-700[^>]*>([\s\S]*?)<\/p>/g;
  let match;
  const faqs = [];

  while ((match = faqPattern.exec(content)) !== null) {
    const question = match[1].trim();
    const answer = match[2].trim()
      .replace(/\n\s*/g, ' ')
      .replace(/"/g, '\\"');

    faqs.push({
      question,
      answer
    });
  }

  faqs.forEach((faq, index) => {
    console.log(`  {`);
    console.log(`    question: "${faq.question}",`);
    console.log(`    answer: "${faq.answer}"`);
    console.log(`  }${index < faqs.length - 1 ? ',' : ''}`);
  });

  console.log('];');

  // Extract title
  const titleMatch = content.match(/<h2 className="text-4xl[^>]*>\s*([^<]+)/);
  if (titleMatch) {
    console.log(`\n// Title:`);
    console.log(`const title = "${titleMatch[1].trim()}";`);
  }

  // Extract description
  const descMatch = content.match(/<p className="text-xl text-gray-600[^>]*>\s*([\s\S]*?)\s*<\/p>/);
  if (descMatch) {
    const desc = descMatch[1].trim().replace(/\n\s*/g, ' ').replace(/"/g, '\\"');
    console.log(`\nconst description = "${desc}";`);
  }

  // Extract CTA title
  const ctaTitleMatch = content.match(/<h3 className="text-2xl[^>]*>\s*([^<]+)/);
  if (ctaTitleMatch) {
    console.log(`\nconst ctaTitle = "${ctaTitleMatch[1].trim()}";`);
  }

  // Extract CTA description
  const ctaDescMatch = content.match(/<p className="text-gray-700 mb-6[^>]*>\s*([\s\S]*?)\s*<\/p>/);
  if (ctaDescMatch) {
    const ctaDesc = ctaDescMatch[1].trim().replace(/\n\s*/g, ' ').replace(/"/g, '\\"');
    console.log(`\nconst ctaDescription = "${ctaDesc}";`);
  }
}

// Main
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('Usage: node extract-faq-data.js <path-to-faq-component.tsx>');
  console.error('Or: node extract-faq-data.js --all  (to process all FAQ components)');
  process.exit(1);
}

if (args[0] === '--all') {
  const { execSync } = require('child_process');
  const faqFiles = execSync('find src/app -name "*FAQSection.tsx"', { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(Boolean);

  faqFiles.forEach(file => {
    try {
      extractFAQData(file);
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });
} else {
  extractFAQData(args[0]);
}
