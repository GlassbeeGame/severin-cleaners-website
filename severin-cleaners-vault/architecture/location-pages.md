# Location Pages Blueprint — Severin Hauling

> **This file is ONLY for location pages** (`/junk-removal-[city]`). Do not use this for service pages or blog posts. Those have their own blueprint files.

> Read this file every time you create, update, or audit a location page.

---

## What Is a Location Page?

A location page targets a specific city or neighborhood in San Diego County. The URL format is always `/junk-removal-[city-name]`. There are currently 25 location pages.

**Examples**: `/junk-removal-la-jolla`, `/junk-removal-chula-vista`, `/junk-removal-carlsbad`

**Not location pages**: `/furniture-disposal-san-diego` (service page), `/blog/santee-dump-guide` (blog post), `/areas-we-serve` (hub page)

---

## Step-by-Step Prompt: Creating or Updating a Location Page

Follow these steps in order. Do not skip any step.

### Step 1: Gather Location Info

Before writing any code, collect this information:

```
City Name: _______________
URL slug: /junk-removal-_______________
Positioning Angle: _______________ (luxury, family-oriented, beach, master-planned, urban, military, border, etc.)
Unique Local Challenge: _______________ (hillside access, HOA requirements, narrow streets, gated communities, etc.)
Zip Codes Served: _______________
Neighborhoods (8+): _______________
Landmarks (12+): _______________
Nearby Locations for Sidebar (4): _______________
City Coordinates (lat, long): _______________
```

### Step 2: Set Up Metadata

Use these exact patterns:

**Title**: `[City] Junk Removal | [Unique Positioning] | (619) 750-0114`
- Must be 50-60 characters
- Unique positioning should reference what makes this city different (e.g., "Bilingual • HOA-Compliant" for Chula Vista)

**Description**: 150-155 characters. Must include: city name, key service feature, phone number.

**Keywords**: 5-8 location-specific keywords:
```
[city] junk removal, junk hauling [city], trash removal [city], junk pickup [city], [city] junk removal service
```

**Geo Tags** (use the CITY's coordinates, not La Mesa HQ):
```typescript
other: {
  'geo.region': 'US-CA',
  'geo.placename': '[City Name]',
  'geo.position': '[lat];[long]',
  'ICBM': '[lat], [long]',
}
```

**Canonical**: `https://severinhauling.com/junk-removal-[city-slug]`

### Step 3: Build the Schema

Every location page `@graph` must include ALL of these:

1. **localBusinessSchema** — with `paymentAccepted`, `currenciesAccepted`, `knowsAbout` (8 location-specific signals), `hasOfferCatalog` (4 location-specific offerings)
2. **serviceSchema** — junk removal service for this location
3. **breadcrumbSchema** — Home → Areas We Serve → [City] Junk Removal
4. **faqSchema** — from the FAQ section (8-10 questions)
5. **neighborhoodSchema** (ItemList) — 10+ local neighborhoods/zones
6. **howToSchema** — the service process

Use `generateLocationServiceSchema()` and `generateBreadcrumbSchema()` from `src/lib/schema.ts`.

### Step 4: Build the Page Layout

**2-column grid layout**:
- Left column (lg:col-span-2): Main content box — `bg-white rounded-lg shadow-md p-8`
- Right column (lg:col-span-1): Sticky sidebar CTA

**Full page structure (top to bottom)**:

1. `<Header />` component
2. **Hero Section** (see Hero Specification below)
3. **Main Content Grid** (`lg:grid-cols-3`)
   - Left: Content box with all content sections
   - Right: `<LocationSidebarCTA />` component
4. `<LocationPricingSection />` component
5. `<TrustSignalsSection />` component
6. **FAQ Section** (custom per location)
7. **Related Services Grid** (3 cards linking to service pages)
8. `<Footer />` component

### Step 5: Write the Content Sections

**Target word count: 2,000-2,500 words total.** Scannable, conversion-optimized.

Write these sections in this order:

1. **City-Specific Intro** (150 words max)
   - Opening paragraph with primary keyword naturally placed
   - Unique value proposition for this location
   - Why Severin Hauling understands this area

2. **Neighborhoods Served** (40 words)
   - Bullet list, 8+ neighborhoods
   - Scannable format, no paragraphs

3. **Unique City Characteristics** (50-60 words each, 1-3 characteristics)
   - What makes this city different: hillside terrain, coastal properties, HOA rules, military base proximity, border location, master-planned communities
   - These must be genuinely specific to THIS city — not generic

4. **Weather/Climate Considerations** (40 words)
   - Coastal fog, June Gloom, Santa Ana winds, heat, rain, terrain challenges
   - Only if genuinely relevant to junk removal in this area

5. **Major Landmarks** (30 words)
   - Bullet list, 12+ landmarks
   - Helps Google understand the page is genuinely about this location

6. **What We Remove** (200 words)
   - Grid or list format with links to service pages
   - Only list services Severin Hauling actually offers

7. **Why Choose Us** (80 words)
   - 4 bullet points, benefits-focused

8. **FAQ Section** (8-10 questions, 2-4 sentence answers each)
   - Location-specific questions about terrain, access, parking, response time
   - Include: pricing, unique challenges, eco-friendly practices, free estimates
   - **Every answer must be a complete sentence — never end with a colon**

### Step 6: Configure the Sidebar

Use `<LocationSidebarCTA />` component with:
- Call CTA button with phone number
- Get Quote CTA button
- What We Remove list
- **4 Nearby Locations** (links to adjacent location pages)
- Trust Badges (Licensed, Insured, Eco-Friendly)
- Quick Stats (years in business, reviews, areas served)

### Step 7: Add Internal Links

Location pages need **10-13 internal links** total:
- 6 contextual links in body content
- 4-7 structured links (sidebar, related services, nearby locations)

**Service page links**: Link to 5-7 service pages that match this city's demographic tier (see `architecture/seo-standards.md` → Location Demographic Tiers)

**Nearby location links**: 4 geographically adjacent cities in the sidebar

### Step 8: Run the Pre-Publishing Checklist

See `architecture/seo-standards.md` → Pre-Publishing Checklist. Every item must pass.

---

## Hero Section Specification

**All 25 location pages must use this exact hero structure.** Reference standard: Del Mar page.

```tsx
<section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      {/* Badge, H1, Subtitle, Features */}
    </div>
  </div>
</section>
```

### Hero Elements

**1. Badge** (orange pill, top of hero):
- Classes: `bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold`
- Text: `#1 [City Name] Junk Removal Service`

**2. H1 Title**:
- Classes: `text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight`
- Text: `[City Name] Junk Removal`

**3. Subtitle** (three positioning points):
- Classes: `text-xl md:text-2xl mb-8 text-blue-100`
- Format: `[Point 1] • [Point 2] • [Point 3]`
- Must be unique to each location (e.g., "Luxury Estate Specialists • White-Glove Service • Discreet & Professional")

**4. Features Line** (three checkmarks):
- Classes: `text-lg mb-8`
- Format: `✓ [Feature 1]  ✓ [Feature 2]  ✓ [Feature 3]`

### Hero Rules

- **DO NOT** use `<OptimizedGradientHero />` component — use inline `<section>` with exact classes above
- **DO NOT** use different gradient colors
- **DO NOT** add CTA buttons in the hero
- **DO NOT** change spacing or text sizes
- Gradient colors: blue-600 (#2563eb), blue-700 (#1d4ed8), blue-900 (#1e3a8a)
- Badge color: orange-500 (#f97316)

---

## Content Sections to NEVER Include on Location Pages

These sections are generic, repetitive, or describe services Severin Hauling doesn't offer:

- Major Streets & Access Routes (standalone section)
- Traffic Patterns & Service Timing (detailed/repetitive)
- DIY vs. Professional Comparison
- "Dump Alternative" standalone section
- "How It Works" as a standalone section (covered in FAQs)
- Over-detailed neighborhood descriptions (paragraphs instead of lists)
- Case study examples
- Multiple paragraphs explaining the same concept
- Any mention of: cleaning services, moving services, organizing, Airbnb turnovers, equestrian specialists, property management services

---

## Pricing (Standard Across All Locations)

| Tier | Price |
|------|-------|
| Single item | $69-$100 |
| Quarter-load | $249 |
| Half-load | $349 |
| Full load | $495 |

All prices include labor, hauling, and eco-friendly disposal.

---

## Components Used by Location Pages

| Component | File | Purpose |
|-----------|------|---------|
| LocationSidebarCTA | `src/components/LocationSidebarCTA.tsx` | Sticky sidebar with CTAs, nearby locations, trust badges |
| LocationPricingSection | `src/components/LocationPricingSection.tsx` | 4-tier pricing cards with gradient |
| TrustSignalsSection | `src/components/TrustSignalsSection.tsx` | 4-stat trust signal grid with icons |
| SchemaMarkup | `src/components/SchemaMarkup.tsx` | Wraps page to inject JSON-LD schema |
| Header | `src/components/Header.tsx` | Site header/nav |
| Footer | `src/components/Footer.tsx` | Site footer |

**Custom per page**: Each location page has its own FAQ section built inline (not a shared component).
