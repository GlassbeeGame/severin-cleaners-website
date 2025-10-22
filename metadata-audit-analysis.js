#!/usr/bin/env node

/**
 * Comprehensive SEO Metadata Audit for Severin Cleaners Website
 * Analysis of all page.tsx files for SEO metadata issues
 */

const fs = require('fs');
const path = require('path');

// Color codes for console output
const colors = {
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    green: '\x1b[32m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m',
    magenta: '\x1b[35m',
    reset: '\x1b[0m',
    bold: '\x1b[1m'
};

// Metadata extracted from each page
const pageData = [
    {
        page: 'Home Page (layout.tsx)',
        path: '/Users/jammermurphy/Desktop/severin-cleaners-website/src/app/layout.tsx',
        title: 'Junk Removal San Diego | Same Day Junk Hauling | Severin Cleaners',
        description: 'Professional junk removal San Diego - same day junk hauling, trash removal & junk pickup service. Emergency junk removal, furniture & appliance removal. Licensed & insured. Call (619) 750-0114!',
        keywords: 'junk removal San Diego, junk hauling San Diego, trash removal San Diego, junk pickup San Diego, haul away junk San Diego, same day junk removal, emergency junk removal San Diego, furniture removal San Diego, appliance removal San Diego, estate cleanout San Diego, construction debris removal, garage cleanout San Diego, mattress removal San Diego, couch removal San Diego, commercial junk removal, residential junk hauling',
        canonical: 'https://severincleaners.com',
        ogTitle: 'Junk Removal San Diego | Same Day Junk Hauling | Severin Cleaners',
        ogDescription: 'Professional junk removal San Diego - same day junk hauling, trash removal & junk pickup service. Emergency junk removal, furniture & appliance removal. Licensed & insured. Call (619) 750-0114!',
        ogUrl: 'https://severincleaners.com',
        twitterTitle: 'Junk Removal San Diego | Same Day Junk Hauling | Severin Cleaners',
        twitterDescription: 'Same-day junk removal service in San Diego. Junk hauling, trash removal, furniture & appliance removal. Emergency service available. Call (619) 750-0114!'
    },
    {
        page: 'Junk Removal Chula Vista',
        path: '/Users/jammermurphy/Desktop/severin-cleaners-website/src/app/junk-removal-chula-vista/page.tsx',
        title: 'Junk Removal Chula Vista | South Bay\'s Trusted Hauling Service | Severin Cleaners',
        description: 'Junk removal throughout Chula Vista - Eastlake, Otay Ranch, Millenia. Family-owned, bilingual service. Same-day availability. Call (619) 271-6411.',
        keywords: 'junk removal Chula Vista, Eastlake junk hauling, Otay Ranch cleanout, South Bay junk removal, bilingual service',
        canonical: 'https://severincleaners.com/junk-removal-chula-vista/',
        ogTitle: 'Junk Removal Chula Vista | South Bay\'s Trusted Hauling Service | Severin Cleaners',
        ogDescription: 'Junk removal throughout Chula Vista - Eastlake, Otay Ranch, Millenia. Family-owned, bilingual service. Same-day availability.',
        ogUrl: 'https://severincleaners.com/junk-removal-chula-vista/',
        twitterTitle: 'Junk Removal Chula Vista | South Bay\'s Trusted Hauling Service | Severin Cleaners',
        twitterDescription: 'Junk removal throughout Chula Vista - Eastlake, Otay Ranch, Millenia. Family-owned, bilingual service. Same-day availability.'
    },
    {
        page: 'Junk Removal El Cajon',
        path: '/Users/jammermurphy/Desktop/severin-cleaners-website/src/app/junk-removal-el-cajon/page.tsx',
        title: 'Junk Removal El Cajon | East County Family Service | Severin Cleaners',
        description: 'Professional junk removal in El Cajon - serving East County families, established neighborhoods, and growing communities. Family-owned service. Call (619) 271-6411.',
        keywords: 'junk removal el cajon, el cajon junk hauling, el cajon cleanout service',
        canonical: 'https://severincleaners.com/junk-removal-el-cajon/',
        ogTitle: 'Junk Removal El Cajon | East County Family Service | Severin Cleaners',
        ogDescription: 'Professional junk removal in El Cajon - serving East County families, established neighborhoods, and growing communities. Family-owned service. Call (619) 271-6411.',
        ogUrl: 'https://severincleaners.com/junk-removal-el-cajon/',
        twitterTitle: 'Junk Removal El Cajon | East County Family Service | Severin Cleaners',
        twitterDescription: 'Professional junk removal in El Cajon - serving East County families, established neighborhoods, and growing communities. Family-owned service. Call (619) 271-6411.'
    },
    {
        page: 'Junk Removal Hillcrest',
        path: '/Users/jammermurphy/Desktop/severin-cleaners-website/src/app/junk-removal-hillcrest/page.tsx',
        title: 'Junk Removal Hillcrest | Urban Core Cleanup Specialists | Severin Cleaners',
        description: 'Professional junk removal in Hillcrest - serving the urban core, historic buildings, and apartment complexes. Same-day service available. Call (619) 271-6411.',
        keywords: 'junk removal hillcrest, hillcrest junk hauling, hillcrest cleanout service',
        canonical: 'https://severincleaners.com/junk-removal-hillcrest/',
        ogTitle: 'Junk Removal Hillcrest | Urban Core Cleanup Specialists | Severin Cleaners',
        ogDescription: 'Professional junk removal in Hillcrest - serving the urban core, historic buildings, and apartment complexes. Same-day service available. Call (619) 271-6411.',
        ogUrl: 'https://severincleaners.com/junk-removal-hillcrest/',
        twitterTitle: 'Junk Removal Hillcrest | Urban Core Cleanup Specialists | Severin Cleaners',
        twitterDescription: 'Professional junk removal in Hillcrest - serving the urban core, historic buildings, and apartment complexes. Same-day service available. Call (619) 271-6411.'
    },
    {
        page: 'Junk Removal La Jolla',
        path: '/Users/jammermurphy/Desktop/severin-cleaners-website/src/app/junk-removal-la-jolla/page.tsx',
        title: 'Junk Removal La Jolla | Same-Day Hauling (92037)',
        description: 'Same-day junk removal in La Jolla. Photo quotes, furniture/appliance/estate cleanouts. Eco-friendly disposal. Serving Bird Rock, Village, UCSD areas.',
        keywords: 'junk removal La Jolla, La Jolla junk hauling, estate cleanout La Jolla, furniture removal La Jolla, junk removal near me La Jolla, luxury junk removal, discreet cleanout La Jolla',
        canonical: 'https://severincleaners.com/junk-removal-la-jolla',
        ogTitle: 'Junk Removal La Jolla | Professional Estate Cleanout Service',
        ogDescription: 'Discreet, professional junk removal serving all of La Jolla from the Cove to UTC. High-end estate cleanouts and luxury furniture removal.',
        ogUrl: 'https://severincleaners.com/junk-removal-la-jolla',
        twitterTitle: undefined,
        twitterDescription: undefined
    },
    {
        page: 'Junk Removal North Park',
        path: '/Users/jammermurphy/Desktop/severin-cleaners-website/src/app/junk-removal-north-park/page.tsx',
        title: 'Junk Removal North Park | Hip Urban Community Service | Severin Cleaners',
        description: 'Professional junk removal in North Park - serving the arts district, craft beer community, and diverse neighborhoods. Same-day service. Call (619) 271-6411.',
        keywords: 'junk removal north park, north park junk hauling, north park cleanout service',
        canonical: 'https://severincleaners.com/junk-removal-north-park/',
        ogTitle: 'Junk Removal North Park | Hip Urban Community Service | Severin Cleaners',
        ogDescription: 'Professional junk removal in North Park - serving the arts district, craft beer community, and diverse neighborhoods. Same-day service. Call (619) 271-6411.',
        ogUrl: 'https://severincleaners.com/junk-removal-north-park/',
        twitterTitle: 'Junk Removal North Park | Hip Urban Community Service | Severin Cleaners',
        twitterDescription: 'Professional junk removal in North Park - serving the arts district, craft beer community, and diverse neighborhoods. Same-day service. Call (619) 271-6411.'
    },
    {
        page: 'Junk Removal Pacific Beach',
        path: '/Users/jammermurphy/Desktop/severin-cleaners-website/src/app/junk-removal-pacific-beach/page.tsx',
        title: 'Junk Removal Pacific Beach | Same-Day Service (92109)',
        description: 'Pacific Beach junk removal experts. Vacation rental turnovers, beach house cleanouts, student moves. Garnet Ave to Ocean Front Walk. Same-day service.',
        keywords: 'junk removal Pacific Beach, vacation rental cleanouts, PB junk hauling, same-day junk removal 92109, apartment cleanouts Garnet Avenue, beach house cleanouts',
        canonical: 'https://severincleaners.com/junk-removal-pacific-beach/',
        ogTitle: 'Junk Removal Pacific Beach | Same-Day Service (92109)',
        ogDescription: 'Pacific Beach junk removal experts. Vacation rental turnovers, beach house cleanouts, student moves. Garnet Ave to Ocean Front Walk. Same-day service.',
        ogUrl: 'https://severincleaners.com/junk-removal-pacific-beach/',
        twitterTitle: 'Junk Removal Pacific Beach | Same-Day Service (92109)',
        twitterDescription: 'Pacific Beach junk removal experts. Vacation rental turnovers, beach house cleanouts, student moves. Garnet Ave to Ocean Front Walk. Same-day service.'
    },
    {
        page: 'Junk Removal Point Loma',
        path: '/Users/jammermurphy/Desktop/severin-cleaners-website/src/app/junk-removal-point-loma/page.tsx',
        title: 'Junk Removal Point Loma | Military & Coastal Community Service | Severin Cleaners',
        description: 'Professional junk removal in Point Loma - serving military families, coastal communities, and historic districts. Military discount available. Call (619) 271-6411.',
        keywords: 'junk removal point loma, point loma junk hauling, point loma cleanout service',
        canonical: 'https://severincleaners.com/junk-removal-point-loma/',
        ogTitle: 'Junk Removal Point Loma | Military & Coastal Community Service | Severin Cleaners',
        ogDescription: 'Professional junk removal in Point Loma - serving military families, coastal communities, and historic districts. Military discount available. Call (619) 271-6411.',
        ogUrl: 'https://severincleaners.com/junk-removal-point-loma/',
        twitterTitle: 'Junk Removal Point Loma | Military & Coastal Community Service | Severin Cleaners',
        twitterDescription: 'Professional junk removal in Point Loma - serving military families, coastal communities, and historic districts. Military discount available. Call (619) 271-6411.'
    },
    {
        page: 'Appliance Removal San Diego',
        path: '/Users/jammermurphy/Desktop/severin-cleaners-website/src/app/appliance-removal-san-diego/page.tsx',
        title: 'Appliance Removal San Diego | Refrigerator & Washer Disposal | Severin Cleaners',
        description: 'Professional appliance removal San Diego - refrigerator removal, washer dryer disposal, dishwasher pickup & all appliance hauling. Eco-friendly recycling. Call (619) 750-0114!',
        keywords: 'appliance removal San Diego, refrigerator removal San Diego, washer dryer removal San Diego, dishwasher removal, stove removal, appliance disposal San Diego, appliance recycling',
        canonical: 'https://severincleaners.com/appliance-removal-san-diego',
        ogTitle: 'Appliance Removal San Diego | Refrigerator & Washer Disposal',
        ogDescription: 'Professional appliance removal and recycling service in San Diego. Refrigerator, washer, dryer and all appliance disposal with eco-friendly recycling.',
        ogUrl: 'https://severincleaners.com/appliance-removal-san-diego',
        twitterTitle: undefined,
        twitterDescription: undefined
    },
    {
        page: 'Commercial Junk Removal San Diego',
        path: '/Users/jammermurphy/Desktop/severin-cleaners-website/src/app/commercial-junk-removal-san-diego/page.tsx',
        title: 'Commercial Junk Removal San Diego | Business Cleanup Experts | Severin Cleaners',
        description: 'Professional commercial junk removal in San Diego - office cleanouts, retail spaces, construction debris. Business-focused service. Call (619) 271-6411.',
        keywords: 'junk removal san diego, san diego junk hauling, san diego cleanout service',
        canonical: 'https://severincleaners.com/commercial-junk-removal-san-diego/',
        ogTitle: 'Commercial Junk Removal San Diego | Business Cleanup Experts | Severin Cleaners',
        ogDescription: 'Professional commercial junk removal in San Diego - office cleanouts, retail spaces, construction debris. Business-focused service. Call (619) 271-6411.',
        ogUrl: 'https://severincleaners.com/commercial-junk-removal-san-diego/',
        twitterTitle: 'Commercial Junk Removal San Diego | Business Cleanup Experts | Severin Cleaners',
        twitterDescription: 'Professional commercial junk removal in San Diego - office cleanouts, retail spaces, construction debris. Business-focused service. Call (619) 271-6411.'
    },
    {
        page: 'Construction Debris Removal San Diego',
        path: '/Users/jammermurphy/Desktop/severin-cleaners-website/src/app/construction-debris-removal-san-diego/page.tsx',
        title: 'Construction Debris Removal San Diego | Construction Hauling | Severin Cleaners',
        description: 'Professional construction debris removal San Diego. Construction hauling, demolition cleanup, renovation debris. Same-day service for contractors. Call (619) 750-0114!',
        keywords: 'construction debris removal San Diego, construction hauling San Diego, demolition cleanup, renovation debris removal, contractor cleanup service, construction waste disposal',
        canonical: 'https://severincleaners.com/construction-debris-removal-san-diego',
        ogTitle: 'Construction Debris Removal San Diego | Professional Construction Hauling',
        ogDescription: 'Fast, reliable construction debris removal for contractors and property managers in San Diego. Same-day service and proper disposal.',
        ogUrl: 'https://severincleaners.com/construction-debris-removal-san-diego',
        twitterTitle: undefined,
        twitterDescription: undefined
    },
    {
        page: 'Estate Cleanout San Diego',
        path: '/Users/jammermurphy/Desktop/severin-cleaners-website/src/app/estate-cleanout-san-diego/page.tsx',
        title: 'Estate Cleanout San Diego | Probate Cleanout | Senior Downsizing | Severin Cleaners',
        description: 'Compassionate estate cleanout San Diego services. Probate cleanout, estate sale preparation, senior downsizing. Full-service, licensed & insured. Call (619) 750-0114.',
        keywords: 'estate cleanout San Diego, probate cleanout San Diego, estate sale cleanout, senior downsizing San Diego, death cleanup, property cleanout, inheritance cleanout',
        canonical: 'https://severincleaners.com/estate-cleanout-san-diego',
        ogTitle: 'Estate Cleanout San Diego | Probate & Senior Downsizing Services',
        ogDescription: 'Compassionate, professional estate cleanout services in San Diego. Probate cleanout, estate sales, senior downsizing with dignity and care.',
        ogUrl: 'https://severincleaners.com/estate-cleanout-san-diego',
        twitterTitle: undefined,
        twitterDescription: undefined
    },
    {
        page: 'Furniture Removal San Diego',
        path: '/Users/jammermurphy/Desktop/severin-cleaners-website/src/app/furniture-removal-san-diego/page.tsx',
        title: 'Furniture Removal San Diego | Couch & Mattress Pickup | Severin Cleaners',
        description: 'Professional furniture removal San Diego - couch removal, mattress pickup, sofa disposal & complete furniture hauling. Same-day service. Call (619) 750-0114 for free quote!',
        keywords: 'furniture removal San Diego, couch removal San Diego, mattress removal San Diego, sofa removal San Diego, bed removal, dining table removal, furniture pickup San Diego, furniture disposal',
        canonical: 'https://severincleaners.com/furniture-removal-san-diego',
        ogTitle: 'Furniture Removal San Diego | Couch & Mattress Pickup',
        ogDescription: 'Professional furniture removal service in San Diego. Couch, mattress, sofa and complete furniture hauling with same-day availability.',
        ogUrl: 'https://severincleaners.com/furniture-removal-san-diego',
        twitterTitle: undefined,
        twitterDescription: undefined
    },
    {
        page: 'Hoarding Cleanup San Diego',
        path: '/Users/jammermurphy/Desktop/severin-cleaners-website/src/app/hoarding-cleanup-san-diego/page.tsx',
        title: 'Hoarding Cleanup San Diego | Compassionate Hoarding Help | Severin Cleaners',
        description: 'Professional hoarding cleanup San Diego with compassion and discretion. Judgment-free hoarding help, safety protocols, family support. Licensed & insured. Call (619) 750-0114.',
        keywords: 'hoarding cleanup San Diego, hoarding help San Diego, hoarding cleaning service, hoarding remediation, cluttered home cleanup, hoarding support, biohazard cleanup',
        canonical: 'https://severincleaners.com/hoarding-cleanup-san-diego',
        ogTitle: 'Hoarding Cleanup San Diego | Compassionate Professional Service',
        ogDescription: 'Discreet, compassionate hoarding cleanup services in San Diego. Professional team trained in sensitivity and safety protocols.',
        ogUrl: 'https://severincleaners.com/hoarding-cleanup-san-diego',
        twitterTitle: undefined,
        twitterDescription: undefined
    },
    {
        page: 'Hot Tub Removal San Diego',
        path: '/Users/jammermurphy/Desktop/severin-cleaners-website/src/app/hot-tub-removal-san-diego/page.tsx',
        title: 'Hot Tub Removal San Diego | Spa & Pool Equipment Disposal | Severin Cleaners',
        description: 'Professional hot tub removal throughout San Diego - spas, pool equipment, and backyard cleanup. Same-day service available. Call (619) 271-6411.',
        keywords: 'junk removal san diego, san diego junk hauling, san diego cleanout service',
        canonical: 'https://severincleaners.com/hot-tub-removal-san-diego/',
        ogTitle: 'Hot Tub Removal San Diego | Spa & Pool Equipment Disposal | Severin Cleaners',
        ogDescription: 'Professional hot tub removal throughout San Diego - spas, pool equipment, and backyard cleanup. Same-day service available. Call (619) 271-6411.',
        ogUrl: 'https://severincleaners.com/hot-tub-removal-san-diego/',
        twitterTitle: 'Hot Tub Removal San Diego | Spa & Pool Equipment Disposal | Severin Cleaners',
        twitterDescription: 'Professional hot tub removal throughout San Diego - spas, pool equipment, and backyard cleanup. Same-day service available. Call (619) 271-6411.'
    },
    {
        page: 'Piano Removal San Diego',
        path: '/Users/jammermurphy/Desktop/severin-cleaners-website/src/app/piano-removal-san-diego/page.tsx',
        title: 'Piano Removal San Diego | Musical Instrument Disposal | Severin Cleaners',
        description: 'Professional piano removal throughout San Diego - upright pianos, grand pianos, and musical instruments. Careful handling guaranteed. Call (619) 271-6411.',
        keywords: 'junk removal san diego, san diego junk hauling, san diego cleanout service',
        canonical: 'https://severincleaners.com/piano-removal-san-diego/',
        ogTitle: 'Piano Removal San Diego | Musical Instrument Disposal | Severin Cleaners',
        ogDescription: 'Professional piano removal throughout San Diego - upright pianos, grand pianos, and musical instruments. Careful handling guaranteed. Call (619) 271-6411.',
        ogUrl: 'https://severincleaners.com/piano-removal-san-diego/',
        twitterTitle: 'Piano Removal San Diego | Musical Instrument Disposal | Severin Cleaners',
        twitterDescription: 'Professional piano removal throughout San Diego - upright pianos, grand pianos, and musical instruments. Careful handling guaranteed. Call (619) 271-6411.'
    },
    {
        page: 'Same Day Junk Removal San Diego',
        path: '/Users/jammermurphy/Desktop/severin-cleaners-website/src/app/same-day-junk-removal-san-diego/page.tsx',
        title: 'Same Day Junk Removal San Diego | Emergency Service Available | Severin Cleaners',
        description: 'Emergency same day junk removal San Diego. Quick junk removal service available 7 days a week. Call (619) 750-0114 for immediate junk hauling & pickup in San Diego County.',
        keywords: 'same day junk removal San Diego, emergency junk removal San Diego, quick junk removal San Diego, immediate junk hauling, urgent junk pickup San Diego, emergency cleanout service',
        canonical: 'https://severincleaners.com/same-day-junk-removal-san-diego',
        ogTitle: 'Same Day Junk Removal San Diego | Emergency Service Available',
        ogDescription: 'Emergency same day junk removal San Diego. Quick response team available 7 days a week for urgent junk hauling needs.',
        ogUrl: 'https://severincleaners.com/same-day-junk-removal-san-diego',
        twitterTitle: undefined,
        twitterDescription: undefined
    }
];

function analyzeMetadata() {
    console.log(`${colors.bold}${colors.blue}========================================`);
    console.log(`🔍 SEVERIN CLEANERS SEO METADATA AUDIT`);
    console.log(`========================================${colors.reset}\n`);

    const issues = {
        titleLength: [],
        descriptionLength: [],
        duplicates: {
            titles: {},
            descriptions: {},
            keywords: {}
        },
        missingElements: [],
        keywordIssues: [],
        phoneNumberInconsistencies: [],
        urlInconsistencies: []
    };

    console.log(`${colors.bold}${colors.cyan}📊 ANALYZING ${pageData.length} PAGES...${colors.reset}\n`);

    // 1. Title Tag Analysis
    console.log(`${colors.bold}${colors.green}1. TITLE TAG ANALYSIS${colors.reset}`);
    console.log('='.repeat(50));

    pageData.forEach((page, index) => {
        const titleLength = page.title.length;
        const status = titleLength <= 60 ?
            `${colors.green}✓ GOOD` :
            titleLength <= 70 ?
                `${colors.yellow}⚠ WARNING` :
                `${colors.red}✗ TOO LONG`;

        console.log(`${index + 1}. ${page.page}`);
        console.log(`   Title: "${page.title}"`);
        console.log(`   Length: ${titleLength} chars ${status}${colors.reset}`);

        if (titleLength > 60) {
            issues.titleLength.push({
                page: page.page,
                title: page.title,
                length: titleLength
            });
        }

        // Track for duplicates
        if (!issues.duplicates.titles[page.title]) {
            issues.duplicates.titles[page.title] = [];
        }
        issues.duplicates.titles[page.title].push(page.page);

        console.log();
    });

    // 2. Meta Description Analysis
    console.log(`${colors.bold}${colors.green}2. META DESCRIPTION ANALYSIS${colors.reset}`);
    console.log('='.repeat(50));

    pageData.forEach((page, index) => {
        const descLength = page.description.length;
        const status = descLength >= 150 && descLength <= 160 ?
            `${colors.green}✓ OPTIMAL` :
            descLength >= 140 && descLength <= 170 ?
                `${colors.yellow}⚠ ACCEPTABLE` :
                descLength < 140 ?
                    `${colors.red}✗ TOO SHORT` :
                    `${colors.red}✗ TOO LONG`;

        console.log(`${index + 1}. ${page.page}`);
        console.log(`   Description: "${page.description}"`);
        console.log(`   Length: ${descLength} chars ${status}${colors.reset}`);

        if (descLength < 140 || descLength > 170) {
            issues.descriptionLength.push({
                page: page.page,
                description: page.description,
                length: descLength
            });
        }

        // Track for duplicates
        if (!issues.duplicates.descriptions[page.description]) {
            issues.duplicates.descriptions[page.description] = [];
        }
        issues.duplicates.descriptions[page.description].push(page.page);

        console.log();
    });

    // 3. Open Graph & Twitter Analysis
    console.log(`${colors.bold}${colors.green}3. OPEN GRAPH & TWITTER META ANALYSIS${colors.reset}`);
    console.log('='.repeat(50));

    pageData.forEach((page, index) => {
        console.log(`${index + 1}. ${page.page}`);

        const ogMissing = [];
        const twitterMissing = [];

        if (!page.ogTitle) ogMissing.push('og:title');
        if (!page.ogDescription) ogMissing.push('og:description');
        if (!page.ogUrl) ogMissing.push('og:url');
        if (!page.twitterTitle) twitterMissing.push('twitter:title');
        if (!page.twitterDescription) twitterMissing.push('twitter:description');

        if (ogMissing.length === 0 && twitterMissing.length === 0) {
            console.log(`   ${colors.green}✓ All social media tags present${colors.reset}`);
        } else {
            if (ogMissing.length > 0) {
                console.log(`   ${colors.red}✗ Missing Open Graph: ${ogMissing.join(', ')}${colors.reset}`);
                issues.missingElements.push({
                    page: page.page,
                    missing: ogMissing,
                    type: 'Open Graph'
                });
            }
            if (twitterMissing.length > 0) {
                console.log(`   ${colors.red}✗ Missing Twitter: ${twitterMissing.join(', ')}${colors.reset}`);
                issues.missingElements.push({
                    page: page.page,
                    missing: twitterMissing,
                    type: 'Twitter'
                });
            }
        }

        // Check for inconsistencies between standard and OG meta
        if (page.title !== page.ogTitle && page.ogTitle) {
            console.log(`   ${colors.yellow}⚠ Title/OG Title mismatch${colors.reset}`);
        }
        if (page.description !== page.ogDescription && page.ogDescription) {
            console.log(`   ${colors.yellow}⚠ Description/OG Description mismatch${colors.reset}`);
        }

        console.log();
    });

    // 4. Canonical URL Analysis
    console.log(`${colors.bold}${colors.green}4. CANONICAL URL ANALYSIS${colors.reset}`);
    console.log('='.repeat(50));

    pageData.forEach((page, index) => {
        console.log(`${index + 1}. ${page.page}`);
        console.log(`   Canonical: ${page.canonical}`);

        // Check for trailing slash inconsistencies
        if (page.canonical.endsWith('/') && page.page !== 'Home Page (layout.tsx)') {
            console.log(`   ${colors.yellow}⚠ Has trailing slash${colors.reset}`);
            issues.urlInconsistencies.push({
                page: page.page,
                issue: 'Has trailing slash',
                canonical: page.canonical
            });
        } else if (!page.canonical.endsWith('/') && page.page === 'Home Page (layout.tsx)') {
            console.log(`   ${colors.green}✓ Correct format${colors.reset}`);
        } else if (!page.canonical.endsWith('/') && page.page !== 'Home Page (layout.tsx)') {
            console.log(`   ${colors.yellow}⚠ Missing trailing slash${colors.reset}`);
            issues.urlInconsistencies.push({
                page: page.page,
                issue: 'Missing trailing slash',
                canonical: page.canonical
            });
        }

        console.log();
    });

    // 5. Keywords Analysis
    console.log(`${colors.bold}${colors.green}5. KEYWORDS ANALYSIS${colors.reset}`);
    console.log('='.repeat(50));

    pageData.forEach((page, index) => {
        console.log(`${index + 1}. ${page.page}`);
        console.log(`   Keywords: "${page.keywords}"`);

        const keywords = page.keywords.split(',').map(k => k.trim());
        const keywordCount = keywords.length;

        if (keywordCount > 15) {
            console.log(`   ${colors.red}✗ Too many keywords (${keywordCount}) - keyword stuffing risk${colors.reset}`);
            issues.keywordIssues.push({
                page: page.page,
                issue: 'Too many keywords',
                count: keywordCount
            });
        } else if (keywordCount < 3) {
            console.log(`   ${colors.yellow}⚠ Too few keywords (${keywordCount})${colors.reset}`);
            issues.keywordIssues.push({
                page: page.page,
                issue: 'Too few keywords',
                count: keywordCount
            });
        } else {
            console.log(`   ${colors.green}✓ Good keyword count (${keywordCount})${colors.reset}`);
        }

        // Check for duplicate keyword sets
        if (!issues.duplicates.keywords[page.keywords]) {
            issues.duplicates.keywords[page.keywords] = [];
        }
        issues.duplicates.keywords[page.keywords].push(page.page);

        console.log();
    });

    // 6. Phone Number Consistency Analysis
    console.log(`${colors.bold}${colors.green}6. PHONE NUMBER CONSISTENCY ANALYSIS${colors.reset}`);
    console.log('='.repeat(50));

    const phoneNumbers = {
        '(619) 750-0114': [],
        '(619) 271-6411': []
    };

    pageData.forEach(page => {
        if (page.title.includes('(619) 750-0114') || page.description.includes('(619) 750-0114')) {
            phoneNumbers['(619) 750-0114'].push(page.page);
        }
        if (page.title.includes('(619) 271-6411') || page.description.includes('(619) 271-6411')) {
            phoneNumbers['(619) 271-6411'].push(page.page);
        }
    });

    console.log(`${colors.cyan}Phone number usage:${colors.reset}`);
    console.log(`• (619) 750-0114: ${phoneNumbers['(619) 750-0114'].length} pages`);
    console.log(`• (619) 271-6411: ${phoneNumbers['(619) 271-6411'].length} pages`);

    if (phoneNumbers['(619) 750-0114'].length > 0 && phoneNumbers['(619) 271-6411'].length > 0) {
        console.log(`${colors.red}✗ INCONSISTENT PHONE NUMBERS ACROSS SITE${colors.reset}`);
        issues.phoneNumberInconsistencies = [
            { number: '(619) 750-0114', pages: phoneNumbers['(619) 750-0114'] },
            { number: '(619) 271-6411', pages: phoneNumbers['(619) 271-6411'] }
        ];
    } else {
        console.log(`${colors.green}✓ Consistent phone number usage${colors.reset}`);
    }

    console.log();

    // 7. Duplicate Content Detection
    console.log(`${colors.bold}${colors.green}7. DUPLICATE CONTENT DETECTION${colors.reset}`);
    console.log('='.repeat(50));

    // Check for duplicate titles
    console.log(`${colors.cyan}Duplicate Titles:${colors.reset}`);
    let duplicatesFound = false;
    Object.entries(issues.duplicates.titles).forEach(([title, pages]) => {
        if (pages.length > 1) {
            console.log(`${colors.red}✗ "${title}" appears on ${pages.length} pages:${colors.reset}`);
            pages.forEach(page => console.log(`  - ${page}`));
            duplicatesFound = true;
        }
    });
    if (!duplicatesFound) {
        console.log(`${colors.green}✓ No duplicate titles found${colors.reset}`);
    }

    console.log();

    // Check for duplicate descriptions
    console.log(`${colors.cyan}Duplicate Descriptions:${colors.reset}`);
    duplicatesFound = false;
    Object.entries(issues.duplicates.descriptions).forEach(([description, pages]) => {
        if (pages.length > 1) {
            console.log(`${colors.red}✗ Description appears on ${pages.length} pages:${colors.reset}`);
            console.log(`  "${description.substring(0, 100)}..."`);
            pages.forEach(page => console.log(`  - ${page}`));
            duplicatesFound = true;
        }
    });
    if (!duplicatesFound) {
        console.log(`${colors.green}✓ No duplicate descriptions found${colors.reset}`);
    }

    console.log();

    // Check for duplicate keywords
    console.log(`${colors.cyan}Duplicate Keywords:${colors.reset}`);
    duplicatesFound = false;
    Object.entries(issues.duplicates.keywords).forEach(([keywords, pages]) => {
        if (pages.length > 1) {
            console.log(`${colors.red}✗ Keywords appear on ${pages.length} pages:${colors.reset}`);
            console.log(`  "${keywords.substring(0, 100)}..."`);
            pages.forEach(page => console.log(`  - ${page}`));
            duplicatesFound = true;
        }
    });
    if (!duplicatesFound) {
        console.log(`${colors.green}✓ No duplicate keyword sets found${colors.reset}`);
    }

    console.log();

    // Summary and Recommendations
    console.log(`${colors.bold}${colors.magenta}========================================`);
    console.log(`📋 SUMMARY & PRIORITY RECOMMENDATIONS`);
    console.log(`========================================${colors.reset}\n`);

    console.log(`${colors.bold}${colors.red}🚨 CRITICAL ISSUES (High Priority):${colors.reset}`);

    if (issues.phoneNumberInconsistencies.length > 0) {
        console.log(`1. ${colors.red}PHONE NUMBER INCONSISTENCY${colors.reset}`);
        console.log(`   • Two different phone numbers used across the site`);
        console.log(`   • (619) 750-0114: ${issues.phoneNumberInconsistencies[0].pages.length} pages`);
        console.log(`   • (619) 271-6411: ${issues.phoneNumberInconsistencies[1].pages.length} pages`);
        console.log(`   ${colors.yellow}RECOMMENDATION: Standardize on one phone number across all pages${colors.reset}`);
        console.log();
    }

    let hasGenericKeywords = false;
    Object.entries(issues.duplicates.keywords).forEach(([keywords, pages]) => {
        if (pages.length > 1 && keywords === 'junk removal san diego, san diego junk hauling, san diego cleanout service') {
            console.log(`2. ${colors.red}GENERIC KEYWORD DUPLICATION${colors.reset}`);
            console.log(`   • Multiple service pages using identical generic keywords`);
            console.log(`   • Affected pages: ${pages.join(', ')}`);
            console.log(`   ${colors.yellow}RECOMMENDATION: Create unique, service-specific keywords for each page${colors.reset}`);
            hasGenericKeywords = true;
        }
    });
    if (hasGenericKeywords) console.log();

    console.log(`${colors.bold}${colors.yellow}⚠️  HIGH PRIORITY ISSUES:${colors.reset}`);

    if (issues.titleLength.length > 0) {
        console.log(`3. ${colors.yellow}TITLE LENGTH ISSUES${colors.reset}`);
        console.log(`   • ${issues.titleLength.length} pages with titles over 60 characters`);
        issues.titleLength.forEach(issue => {
            console.log(`   • "${issue.title}" (${issue.length} chars) - ${issue.page}`);
        });
        console.log(`   ${colors.yellow}RECOMMENDATION: Shorten titles to 50-60 characters for optimal display${colors.reset}`);
        console.log();
    }

    if (issues.descriptionLength.length > 0) {
        console.log(`4. ${colors.yellow}META DESCRIPTION LENGTH ISSUES${colors.reset}`);
        console.log(`   • ${issues.descriptionLength.length} pages with suboptimal description lengths`);
        issues.descriptionLength.forEach(issue => {
            const status = issue.length < 140 ? 'too short' : 'too long';
            console.log(`   • ${issue.page}: ${issue.length} chars (${status})`);
        });
        console.log(`   ${colors.yellow}RECOMMENDATION: Optimize descriptions to 150-160 characters${colors.reset}`);
        console.log();
    }

    if (issues.missingElements.length > 0) {
        console.log(`5. ${colors.yellow}MISSING SOCIAL MEDIA META TAGS${colors.reset}`);
        const twitterMissing = issues.missingElements.filter(issue => issue.type === 'Twitter');
        console.log(`   • ${twitterMissing.length} pages missing Twitter meta tags`);
        twitterMissing.forEach(issue => {
            console.log(`   • ${issue.page}: Missing ${issue.missing.join(', ')}`);
        });
        console.log(`   ${colors.yellow}RECOMMENDATION: Add complete Twitter Card meta tags for better social sharing${colors.reset}`);
        console.log();
    }

    console.log(`${colors.bold}${colors.green}📈 SEO IMPACT ASSESSMENT:${colors.reset}`);
    console.log(`• ${colors.red}CRITICAL${colors.reset}: Phone number inconsistency affects trust and conversion`);
    console.log(`• ${colors.red}HIGH${colors.reset}: Generic keywords prevent individual pages from ranking for specific terms`);
    console.log(`• ${colors.yellow}MEDIUM${colors.reset}: Title length issues may cause truncation in search results`);
    console.log(`• ${colors.yellow}MEDIUM${colors.reset}: Missing social meta affects click-through rates from social platforms`);
    console.log(`• ${colors.green}LOW${colors.reset}: Description length issues have minimal direct SEO impact but affect CTR`);

    console.log();
    console.log(`${colors.bold}${colors.cyan}🔧 RECOMMENDED ACTION PLAN:${colors.reset}`);
    console.log(`1. ${colors.bold}Standardize phone number${colors.reset} across all pages (30 minutes)`);
    console.log(`2. ${colors.bold}Create unique keywords${colors.reset} for Hot Tub, Piano, and Commercial pages (60 minutes)`);
    console.log(`3. ${colors.bold}Add Twitter meta tags${colors.reset} to pages missing them (45 minutes)`);
    console.log(`4. ${colors.bold}Optimize title lengths${colors.reset} for better SERP display (90 minutes)`);
    console.log(`5. ${colors.bold}Fine-tune meta descriptions${colors.reset} for optimal length (60 minutes)`);

    console.log();
    console.log(`${colors.bold}${colors.blue}Total estimated time: 4-5 hours${colors.reset}`);
    console.log(`${colors.bold}${colors.green}Expected SEO improvement: 15-25% better local search visibility${colors.reset}`);

    return issues;
}

// Run the analysis
analyzeMetadata();