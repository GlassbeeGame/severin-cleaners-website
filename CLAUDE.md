# Severin Hauling — Project Context

## Business
**Severin Hauling LLC** is a junk removal and hauling company based in La Mesa, CA (8900 Grossmont Blvd Ste 1, 91941). They serve all of San Diego County.

- **Service**: Junk removal and hauling only. Not a cleaning company, not a moving company, not a turnover service.
- **Phone**: (619) 750-0114
- **Pricing**: $69–$100 single item, $249 quarter-load, $349 half-load, $495 full load. All prices include labor, hauling, and eco-friendly disposal.
- **Payment**: Cash, Credit Card, Check, Venmo, Zelle, Cash App
- **Hours**: 24/7 (Mo-Su 00:00-23:59)
- **License**: Fully licensed and insured in California

## Tech Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Deployed at severinhauling.com

## SEO — Required Skill Workflows

**Before adding any new content section to a page:**
Run `keyword-research` to confirm the topic has real search demand. Do not add sections based on what's already mentioned on the page.

**Before writing or rewriting any page content:**
Run `seo-content` — full workflow including the humanize phase. No exceptions.

**When fixing mobile vs desktop ranking discrepancies:**
Check in this order: (1) incomplete FAQ schema answers, (2) missing localBusinessSchema fields vs other location pages, (3) content depth gap, (4) heading hierarchy.

## Location Pages — Standard Schema Fields

Every location page `localBusinessSchema` must include:
- `paymentAccepted`: ["Cash", "Credit Card", "Check", "Venmo", "Zelle", "Cash App"]
- `currenciesAccepted`: "USD"
- `knowsAbout`: 8 location-specific expertise signals
- `hasOfferCatalog`: 4 location-specific service offerings
- `neighborhoodSchema` (ItemList): 10+ local neighborhoods/zones in `@graph`

Every location page `@graph` must include: localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema, neighborhoodSchema, howToSchema.

## FAQ Rules
- All FAQ answers must be complete sentences — never end an answer with a colon
- FAQs feed directly into structured data schema; incomplete answers hurt mobile rich results

## Content Voice
- This is a local San Diego trades business. Write like a knowledgeable local, not a content agency.
- No AI-isms: no "delve", "comprehensive", "leverage", "streamline", "navigate", "landscape"
- Specific over generic: name actual streets, landmarks, zip codes
- Do not describe services the business doesn't offer (cleaning, moving, organizing, turnovers)
