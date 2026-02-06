# Complete Rebrand Audit: Severin Cleaners → Severin Hauling
**Date:** February 6, 2026
**Audit Type:** Comprehensive Site-Wide Brand Name Change

## Executive Summary

This audit identifies ALL instances of "Severin Cleaners" across the entire website, including:
- Frontend code (React/TypeScript components)
- Backend configuration
- SEO metadata and schema markup
- Domain references
- Email addresses
- Image files
- Documentation files
- Configuration files

**Total Files Requiring Changes:** 95+ files
**Categories of Changes Required:** 8 major categories

---

## 1. CORE BRANDING FILES

### Header Component
**File:** `src/components/Header.tsx`
- Line 23: Logo alt text: "Severin Cleaners Logo"
- Line 31: Brand name in header: `<span className="text-blue-500"> Cleaners</span>`

### Footer Component
**File:** `src/components/Footer.tsx`
- Line 52: Yelp URL: `https://www.yelp.com/biz/severin-cleaners-san-diego`
- Line 95: Email link: `mailto:severincleaners@gmail.com`
- Line 98: Email display text: "severincleaners@gmail.com"
- Line 299: Copyright: "© 2024 Severin Cleaners. All rights reserved."

### About Component
**File:** `src/components/About.tsx`
- Line 11: Section heading: "About Severin Cleaners"
- Line 15: Description: "Severin Cleaners has built a reputation..."

### Other Components
**File:** `src/components/Introduction.tsx`
- Line 8: Multiple references to "Severin Cleaners" in intro text

**File:** `src/components/Contact.tsx`
- Line 7: CTA heading: "Contact Severin Cleaners Today"

**File:** `src/components/Testimonials.tsx`
- Line 44: "Join hundreds of satisfied customers who trust Severin Cleaners..."

**File:** `src/components/TrustFactors.tsx`
- Line 40: "Why Choose Severin Cleaners for Junk Removal San Diego?"
- Line 79: "Join hundreds of satisfied customers who chose Severin Cleaners..."

**File:** `src/components/StructuredData.tsx`
- Line 11: Organization name: "Severin Cleaners - Best Junk Removal San Diego"
- Line 16: Email: "severincleaners@gmail.com"
- Line 241: Provider name: "Severin Cleaners"
- Line 548: Business name: "Severin Cleaners"
- Line 564: Email: "severincleaners@gmail.com"
- Line 580: Email: "severincleaners@gmail.com"
- Line 587: Organization name: "Severin Cleaners - Best Junk Removal San Diego"

---

## 2. SCHEMA MARKUP & SEO

### Schema Library
**File:** `src/lib/schema.ts`
- Line 55: Organization name: "Severin Cleaners"
- Line 160: Author name: "Severin Cleaners"
- Line 231: Business name: "Severin Cleaners"
- Line 237: Author name: "Severin Cleaners"
- Line 239: Email: "severincleaners@gmail.com"
- Line 411: Author name: "Severin Cleaners"
- Line 523: Business name: "Severin Cleaners"
- Line 531: Email: "severincleaners@gmail.com"
- Line 560: Business name: "Severin Cleaners"
- Line 567: Email: "severincleaners@gmail.com"
- Line 634: Description: "...offered by Severin Cleaners"
- Line 643: Provider: "Severin Cleaners"
- Line 661: Description: "...where Severin Cleaners provides..."
- Line 686: Blog name: "Severin Cleaners Blog"
- Line 691: Author name: "Severin Cleaners"

---

## 3. LAYOUT & METADATA

### Main Layout
**File:** `src/app/layout.tsx`
- Line 17: Meta title: "Severin Cleaners | Professional Junk Removal & Hauling Services"
- Line 18: Meta description: "Severin Cleaners is your trusted partner..."
- Line 20: Authors: "Severin Cleaners"
- Line 36: OG title: "Severin Cleaners | Professional Junk Removal & Hauling Services"
- Line 37: OG description: "Severin Cleaners is your trusted partner..."
- Line 41: Site name: "Severin Cleaners - Junk Removal San Diego"
- Line 47: Image alt: "Severin Cleaners - Professional Junk Removal Service..."
- Line 53: Twitter title: "Severin Cleaners | Professional Junk Removal & Hauling Services"
- Line 54: Twitter description: "Severin Cleaners is your trusted partner..."

### Homepage
**File:** `src/app/page.tsx`
- Line 22: Breadcrumb URL: "https://severincleaners.com"

---

## 4. DOMAIN REFERENCES (severincleaners.com)

### Sitemap
**File:** `src/app/sitemap.ts`
- Line 4: Base URL: "https://severincleaners.com"

### Robots.txt
**File:** `public/robots.txt`
- Line 18: Sitemap URL: "https://severincleaners.com/sitemap.xml"

### Vercel Configuration
**File:** `vercel.json`
- Line 8: Redirect source: "www.severincleaners.com"
- Line 11: Redirect destination: "https://severincleaners.com/:path*"

### Package Configuration
**File:** `package.json`
- Line 2: Package name: "severin-cleaners-website"

---

## 5. LOCATION PAGES (25 files)

All location pages contain multiple references:
- `/junk-removal-chula-vista/page.tsx` - Meta titles, descriptions, schema, content
- `/junk-removal-el-cajon/page.tsx` - Meta titles, descriptions, schema, content
- `/junk-removal-la-mesa/page.tsx` - Meta titles, descriptions, schema, content
- `/junk-removal-santee/page.tsx` - Meta titles, descriptions, schema, content
- `/junk-removal-oceanside/page.tsx` - Meta titles, descriptions, schema, content
- `/junk-removal-carlsbad/page.tsx` - Meta titles, descriptions, schema, content
- `/junk-removal-la-jolla/page.tsx` - Meta titles, descriptions, schema, content
- `/junk-removal-pacific-beach/page.tsx` - Meta titles, descriptions, schema, content
- `/junk-removal-north-park/page.tsx` - Meta titles, descriptions, schema, content
- `/junk-removal-hillcrest/page.tsx` - Meta titles, descriptions, schema, content
- `/junk-removal-point-loma/page.tsx` - Meta titles, descriptions, schema, content
- `/junk-removal-escondido/page.tsx` - Meta titles, descriptions, schema, content
- `/junk-removal-vista/page.tsx` - Meta titles, descriptions, schema, content
- `/junk-removal-poway/page.tsx` - Meta titles, descriptions, schema, content
- `/junk-removal-spring-valley/page.tsx` - Meta titles, descriptions, schema, content
- `/junk-removal-lakeside/page.tsx` - Meta titles, descriptions, schema, content
- `/junk-removal-lemon-grove/page.tsx` - Meta titles, descriptions, schema, content
- `/junk-removal-san-marcos/page.tsx` - Meta titles, descriptions, schema, content
- `/junk-removal-rancho-santa-fe/page.tsx` - Meta titles, descriptions, schema, content
- `/junk-removal-del-mar/page.tsx` - Meta titles, descriptions, schema, content
- `/junk-removal-kearny-mesa/page.tsx` - Meta titles, descriptions, schema, content
- `/junk-removal-mira-mesa/page.tsx` - Meta titles, descriptions, schema, content
- `/junk-removal-carmel-valley/page.tsx` - Meta titles, descriptions, schema, content
- `/junk-removal-clairemont/page.tsx` - Meta titles, descriptions, schema, content
- `/san-diego-junk-removal/page.tsx` - Meta titles, descriptions, schema, content

Each file contains approximately 5-15 references to "Severin Cleaners" in:
- Meta titles
- Meta descriptions
- OpenGraph titles
- Schema markup (LocalBusiness, Organization)
- Page content (headings, paragraphs)
- Yelp URL: `https://www.yelp.com/biz/severin-cleaners-san-diego`

---

## 6. SERVICE PAGES (15 files)

All service pages contain multiple references:
- `/appliance-removal-san-diego/page.tsx`
- `/cleanout-services-san-diego/page.tsx`
- `/commercial-junk-removal-san-diego/page.tsx`
- `/concrete-disposal-san-diego/page.tsx`
- `/construction-debris-removal-san-diego/page.tsx`
- `/couch-removal-san-diego/page.tsx`
- `/emergency-junk-removal-san-diego/page.tsx`
- `/estate-cleanout-san-diego/page.tsx`
- `/foreclosure-eviction-cleanout-san-diego/page.tsx`
- `/furniture-disposal-san-diego/page.tsx`
- `/hoarding-cleanup-san-diego/page.tsx`
- `/hot-tub-removal-san-diego/page.tsx`
- `/piano-removal-san-diego/page.tsx`
- `/same-day-junk-removal-san-diego/page.tsx`
- `/san-diego-mattress-disposal/page.tsx`

Each contains references in:
- Meta titles (e.g., "| Severin Cleaners")
- Site names
- Image alt text
- Schema markup
- Page content sections

---

## 7. BLOG POSTS & OTHER PAGES

### Blog Pages
- `/blog/page.tsx` - Title: "...| Severin Cleaners"
- `/blog/escondido-dump-guide/page.tsx` - Multiple references to service
- `/blog/la-mesa-dump-guide/page.tsx` - Multiple references
- `/blog/santee-dump-guide/page.tsx` - Multiple references
- `/blog/dumpster-rental-san-diego-alternatives/page.tsx`
- `/blog/san-diego-dump-fees-guide/page.tsx`
- `/blog/how-much-does-junk-removal-cost-san-diego/page.tsx`
- `/blog/same-day-junk-removal-guide/page.tsx`

### Other Pages
- `/about/page.tsx` - Multiple references throughout
- `/contact/page.tsx` - Title, descriptions
- `/contact/ContactPageClient.tsx` - Email references
- `/services/page.tsx` - Section headings
- `/areas-we-serve/page.tsx` - Meta data
- `/junk-removal-cost-san-diego/page.tsx` - Content and tables
- `/san-diego-dump-fees/page.tsx` - Schema markup
- `/scrap-metal-removal/page.tsx` - Schema markup
- `/not-found.tsx` - 404 page title and alt text

---

## 8. REVIEWS & CONFIGURATION

### Reviews Configuration
**File:** `src/config/reviews.ts`
- Line 34: Yelp URL: "https://www.yelp.com/biz/severin-cleaners-san-diego"
- Line 70: Review text: "Severin Cleaners made a difficult time..."
- Line 103: Review text: "...Thank you Severin Cleaners!"
- Line 125: Review text: "Severin Cleaners worked around our schedule..."

---

## 9. IMAGE FILES

### Files to Rename
**File:** `public/Webphotos/Severin Cleaners Thumbtack.jpg`
- **Action:** Rename to "Severin Hauling Thumbtack.jpg"

---

## 10. DOCUMENTATION FILES (Informational Only)

These markdown files document the site but are not served to users:
- `README.md` - "# Severin Cleaners Website"
- `auto-backup.sh` - Script comment
- Multiple SEO audit files (`.md`)
- Blueprint and template files
- Strategy guides

**Note:** These can be updated but are not critical for the rebrand.

---

## 11. YELP BUSINESS PAGE REFERENCES

**Current URL Pattern:** `https://www.yelp.com/biz/severin-cleaners-san-diego`

**Files Containing Yelp URL (40+ instances):**
- All location page files
- All service page files
- Footer component
- Reviews configuration
- Blog posts
- Schema markup files

**IMPORTANT:** After rebranding to "Severin Hauling", you will need to:
1. Update your Yelp business listing name
2. Check if Yelp updates the URL slug automatically
3. Update all references to the Yelp URL in code

**Possible New URL:** `https://www.yelp.com/biz/severin-hauling-san-diego`

---

## REPLACEMENT STRATEGY

### Phase 1: Text Replacements
1. "Severin Cleaners" → "Severin Hauling"
2. "severincleaners@gmail.com" → TBD (likely "severinhauling@gmail.com")
3. "severincleaners.com" → TBD (likely "severinhauling.com")
4. "severin-cleaners-website" (package name) → "severin-hauling-website"

### Phase 2: URL & Domain Updates
1. Update all domain references
2. Update sitemap base URL
3. Update robots.txt sitemap reference
4. Update vercel.json redirects
5. Configure DNS for new domain

### Phase 3: External Updates
1. Update Yelp business listing
2. Update Yelp URL references in code (after Yelp updates)
3. Update Google Business Profile
4. Update email addresses

### Phase 4: Asset Updates
1. Rename image file: "Severin Cleaners Thumbtack.jpg"
2. Potentially update logo files if they contain "Cleaners" text

---

## ESTIMATED CHANGES

- **Frontend Components:** 10 files
- **Page Files:** 55+ files
- **Configuration Files:** 5 files
- **Schema/SEO Files:** 3 files
- **Documentation:** 20+ files
- **Image Files:** 1 file
- **Total Estimated Changes:** 95+ files

---

## NEXT STEPS

1. ✅ Audit Complete
2. ⏳ Get approval for new business name "Severin Hauling"
3. ⏳ Determine new email address
4. ⏳ Determine new domain name
5. ⏳ Execute find-and-replace operations
6. ⏳ Update external listings (Yelp, Google)
7. ⏳ Test all pages
8. ⏳ Deploy changes

---

## CRITICAL CONSIDERATIONS

### Email Address
**Current:** severincleaners@gmail.com
**New:** Likely severinhauling@gmail.com
- Need to create new Gmail account OR forward old to new

### Domain Name
**Current:** severincleaners.com
**New:** Likely severinhauling.com
- Need to purchase domain
- Configure DNS
- Set up redirects from old domain
- Update all hardcoded URLs

### Yelp Business URL
**Current:** /severin-cleaners-san-diego
**New:** May automatically update to /severin-hauling-san-diego
- Contact Yelp support to confirm behavior
- Update 40+ references after Yelp updates

### Google Business Profile
- Update business name
- URL may change
- Update all schema markup references

---

**Audit Completed:** February 6, 2026
**Auditor:** Claude Code
**Status:** Ready for implementation upon approval
