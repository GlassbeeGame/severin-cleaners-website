# SEO Standards — Severin Hauling

> This is the single source of truth for all SEO rules. Read this before any SEO-related work. Every rule here exists because it directly affects rankings.

---

## Page Type Routing

**Before you do anything, identify which page type you're working on.** Each type has its own blueprint doc with a step-by-step prompt:

| If the task involves... | Read this file |
|------------------------|----------------|
| A `junk-removal-[city]` page | `architecture/location-pages.md` |
| A service page (e.g., `furniture-disposal-san-diego`) | `architecture/service-pages.md` |
| A blog post | `architecture/blog-posts.md` |
| NAP or business listing consistency | `architecture/nap-strategy.md` |
| Content writing or rewriting | `architecture/content-strategy.md` |

**Do not mix rules between page types.** Location pages, service pages, and blog posts have different schema, different metadata formats, different geo tags, and different internal linking rules.

---

## Metadata Standards

### Title Tags

| Page Type | Format | Length |
|-----------|--------|--------|
| Location | `[Location] Junk Removal \| [Unique Positioning] \| (619) 750-0114` | 50-60 chars |
| Service | `[Service Name] San Diego \| [Key Benefit] \| Severin Hauling` | 50-60 chars |
| Blog | `[Topic] \| [Year if relevant] \| Severin Hauling` | 50-60 chars |
| Utility | `[Page Name] \| Severin Hauling` | 50-60 chars |

### Meta Descriptions

- **Length**: 150-155 characters exactly
- **Must include**: primary keyword, location or service name, unique value proposition, phone CTA or pricing
- **Every page must have a UNIQUE description** — no duplicates across any two pages
- **Location pages**: Must mention the specific city name
- **Service pages**: Must mention the specific service

### Canonical URLs

Every page must have a canonical URL in its metadata:
```typescript
alternates: { canonical: "https://severinhauling.com/[page-slug]" }
```

### Open Graph Tags

| Tag | Value |
|-----|-------|
| `og:type` | "website" (pages) or "article" (blog) |
| `og:locale` | "en_US" |
| `og:site_name` | "Severin Hauling" |
| `og:image` | 1200x630px recommended |

### Twitter Card

- `twitter:card`: "summary_large_image"
- Title and description can match or vary from OG tags

### Robots Meta (Standard for All Pages)

```typescript
robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
}
```

### Keywords Meta Tag

- 5-8 keywords per page
- Location-specific for location pages
- Service-specific for service pages
- Include primary and secondary keywords

---

## Schema Markup Requirements

### Schema by Page Type

| Page Type | Required Schema Types | Combined In |
|-----------|----------------------|-------------|
| Location | localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema, neighborhoodSchema, howToSchema | `@graph` array |
| Service | ServiceSchema, BreadcrumbSchema | `@graph` array |
| Blog | BreadcrumbList, BlogPosting, FAQPage, HowTo (if applicable), CivicStructure/Place, LocalBusiness, Service, ItemList | `@graph` array (7-10 types) |
| Homepage | LocalBusiness (full NAP + areaServed), BreadcrumbSchema | `@graph` array |
| Utility (about, contact, etc.) | BreadcrumbSchema only | `@graph` array |

### Schema Generation Functions

All schemas use utilities from `src/lib/schema.ts`:
- `generateLocationServiceSchema()` — location pages
- `generateServiceSchema()` — service pages
- `generateBreadcrumbSchema()` — all pages

Schemas render via the `<SchemaMarkup>` component wrapping the return statement.

### LocalBusiness Schema Required Fields (Location Pages)

Every location page `localBusinessSchema` must include:
- `paymentAccepted`: ["Cash", "Credit Card", "Check", "Venmo", "Zelle", "Cash App"]
- `currenciesAccepted`: "USD"
- `knowsAbout`: 8 location-specific expertise signals
- `hasOfferCatalog`: 4 location-specific service offerings
- `neighborhoodSchema` (ItemList): 10+ local neighborhoods/zones

Every location page `@graph` must include: localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema, neighborhoodSchema, howToSchema.

### Schema Implementation Rules

1. All schemas must be in `@graph` array (never standalone)
2. All URLs must be absolute: `https://severinhauling.com/...`
3. Phone uses E.164 format: `+1-619-750-0114`
4. Dates use ISO 8601 with timezone: `2026-01-29T08:00:00-08:00`
5. Geo coordinates must be accurate (verify with Google Maps)
6. `areaServed` must list all relevant cities/areas
7. Test with Google Rich Results Test: https://search.google.com/test/rich-results

### FAQ Schema Rules

- All FAQ answers must be **complete sentences** — never end an answer with a colon
- FAQs feed directly into structured data schema
- Incomplete answers hurt mobile rich results
- Location pages: 8-10 questions
- Service pages: 6-8 questions
- Blog posts: 10-13 questions

---

## Geo Tag Strategy

Geo tags tell Google where a page is "about" geographically. **Different page types use different coordinates.**

### Service Pages (e.g., `furniture-disposal-san-diego`)

```typescript
other: {
  'geo.region': 'US-CA',
  'geo.placename': 'San Diego',        // SERVICE AREA — not La Mesa
  'geo.position': '32.7157;-117.1611', // San Diego center coordinates
  'ICBM': '32.7157, -117.1611',
}
```

### Location Pages (e.g., `junk-removal-la-jolla`)

```typescript
other: {
  'geo.region': 'US-CA',
  'geo.placename': 'La Jolla',         // SPECIFIC CITY being targeted
  'geo.position': '32.8328;-117.2713', // That city's coordinates
  'ICBM': '32.8328, -117.2713',
}
```

### Company Pages (homepage, about, contact)

```typescript
other: {
  'geo.region': 'US-CA',
  'geo.placename': 'La Mesa',          // HQ LOCATION
  'geo.position': '32.7781;-117.0229', // La Mesa HQ coordinates
  'ICBM': '32.7781, -117.0229',
}
```

**Common mistake**: Using La Mesa (HQ) coordinates on service pages. Service pages should use San Diego metro coordinates. Location pages should use that specific city's coordinates.

---

## Internal Linking Standards

### Link Quantity Targets

| Page Type | Total Internal Links | Breakdown |
|-----------|---------------------|-----------|
| Service pages | 12-15 | 8 contextual + 4-7 structured |
| Location pages | 10-13 | 6 contextual + 4-7 structured |
| Hub pages (areas-we-serve, services) | 20+ | Comprehensive navigation |
| Blog posts | 8-12 | Related content focus |

### Link Placement Hierarchy (by SEO Value)

1. **First paragraph contextual links** — highest value
2. **H2/H3 section header links** — high value
3. **Body content contextual links** — medium-high value
4. **Sidebar/related content links** — medium value
5. **Footer links** — lowest value

### Bidirectional Linking Rules

- Service pages must link to 8-10 relevant location pages
- Location pages must link to 5-7 relevant service pages
- Service-to-service cross-linking across all clusters
- Links must be contextually relevant — not random

### Location Demographic Tiers (for Link Matching)

**Tier 1 — Luxury/High-Value** (La Jolla, Del Mar, Rancho Santa Fe, Point Loma, Carmel Valley)
- Link to: Estate Cleanout, Furniture Removal, Hot Tub Removal, Piano Removal, Same-Day
- Anchor text focus: "luxury," "estate," "premium," "coastal property"

**Tier 2 — Family/Residential** (Chula Vista, El Cajon, La Mesa, Santee, Spring Valley, Lemon Grove, Lakeside, Poway)
- Link to: Furniture Removal, Appliance Removal, Garage Cleanout, Estate Cleanout, Mattress Disposal
- Anchor text focus: "affordable," "family," "residential," "home," "garage"

**Tier 3 — Urban/Coastal Lifestyle** (Pacific Beach, North Park, Hillcrest, Oceanside)
- Link to: Furniture Removal, Same-Day, Hot Tub Removal, Mattress Disposal, Commercial
- Anchor text focus: "beach house," "condo," "apartment," "rental property"

**Tier 4 — Commercial/Business** (Kearny Mesa, Mira Mesa, Escondido, Vista, Clairemont)
- Link to: Commercial Junk Removal, Construction Debris, Foreclosure/Eviction Cleanout, Emergency
- Anchor text focus: "commercial," "business," "office," "warehouse"

### Anchor Text Rules

- Use natural phrasing — not keyword-stuffed
- Vary anchor text for the same destination (don't always use the exact same phrase)
- Never use "click here" or generic anchor text
- Match anchor text to the destination page's primary keyword where natural

---

## Keyword Cannibalization Rules

**Problem**: Multiple pages targeting the same keyword compete with each other and none ranks well.

**Known issue**: "junk removal san diego" (2,900/mo) has 8 competing pages — result: none rank on page 1.

**Rule**: Every page must have a CLEAR search intent differentiation:
- Blog posts rank for **informational intent** ("dump fees guide," "how to") with HowTo + BlogPosting schema
- Service pages target **commercial/transactional intent** with Service schema
- Location pages target **local intent** with location-specific content + LocalBusiness schema

**Before creating any new page**: Check that no existing page already targets the same primary keyword. If it does, either improve the existing page or differentiate the new one by intent.

---

## Keyword Optimization Rules

### Density & Placement

- Overall keyword density: 1.0-1.3% for primary keyword (city name or service name)
- Primary keyword: 8-12 exact-match mentions
- Secondary keyword: 5-8 exact-match mentions
- **Strategic placement**: H1, H2, opening paragraph, 1-2 H3s, 1 FAQ question

### Readability Rules

- Use natural phrasing, not forced keywords
- After establishing context, use pronouns and regional terms ("the area," "downtown," "locally")
- Can say "the city" or neighborhood names instead of repeating the full city name
- No awkward keyword cramming — if it reads wrong, rewrite it

---

## Pre-Publishing Checklist

Run this before publishing ANY page:

- [ ] Unique meta title (50-60 chars) with primary keyword
- [ ] Unique meta description (150-155 chars) with service/location name + phone/pricing
- [ ] 5-8 keywords targeting search intent
- [ ] Canonical URL set and correct
- [ ] Schema markup complete (correct types for this page type)
- [ ] OG/Twitter tags filled in with image
- [ ] Geo tags correct for this page type (service area vs location vs HQ)
- [ ] H1 present, only ONE per page
- [ ] Proper heading hierarchy (H1 → H2 → H3, no skipping)
- [ ] Minimum internal links met (see quantities above)
- [ ] FAQ section present with complete-sentence answers
- [ ] NAP consistent if mentioned anywhere on page
- [ ] Mobile responsive (test at 320px width)
- [ ] Page speed tested (target 80+ score)
- [ ] Schema validated: https://search.google.com/test/rich-results
- [ ] No duplicate content with any other page on the site
- [ ] All links working (no 404s)

---

## Operational Workflows

### Weekly Execution Rhythm

Three focused blocks per week. Consistency compounds — sporadic effort does not.

**Content Day (2 hours)**
- Write one blog post OR create one new service/location page
- Expand one existing thin page (add 300-500 words of location-specific or service-specific depth)
- Run `keyword-research` before writing anything new

**Optimization Day (1 hour)**
- Check Google Search Console for crawl errors, indexing issues, and manual actions
- Run one page through PageSpeed Insights — fix anything below 80 mobile score
- Check for broken links (404s in GSC or Vercel logs)
- Update meta descriptions on pages with low CTR in GSC (below 3%)

**Analysis Day (1 hour)**
- Review GSC Performance report: which queries are gaining/losing impressions
- Check what new content competitors published (search your main keywords, see who's new)
- Identify keyword gaps: queries where you appear on page 2-3 that could be improved
- Update `reference/implementation-status.md` with any changes

### Google Search Console Workflow

Run this weekly during Optimization Day:

1. **Performance → Search Results**: Sort by impressions descending. Look for queries with high impressions but low CTR — these need better meta titles/descriptions
2. **Performance → Pages**: Find pages with declining clicks over the last 28 days. Check if content is stale or a competitor published better content
3. **Indexing → Pages**: Check for pages in "Not indexed" — fix crawl issues, noindex errors, or redirect chains
4. **Experience → Core Web Vitals**: Check for any URLs flagged as "Poor" or "Needs Improvement" — prioritize mobile
5. **Enhancements → FAQ / Breadcrumbs / Local Business**: Check for schema validation errors. Fix immediately — broken schema kills rich results

### Competitor Analysis Process

Run this monthly or when rankings drop unexpectedly:

1. Search your top 5 keywords ("junk removal san diego," "junk removal [city]" for your strongest cities)
2. Open the top 5 ranking competitors for each keyword
3. Document for each competitor: word count, schema types used, number of internal links, page speed score, content structure, and what they cover that you don't
4. Read their Google reviews — note top complaints (your opportunities) and top praise (you must match these)
5. Check if they added new pages or services since last analysis
6. Action items go into `reference/implementation-status.md` under a new "Competitor Insights" entry or directly into the relevant page's next update

### Quick Win Protocols

**"I Need Leads Fast"**
1. Create or update emergency/urgent service pages (these convert highest)
2. Update Google Business Profile with current photos, posts, and hours
3. Share service pages in local San Diego Facebook groups and Nextdoor
4. Reach out to past customers for reviews
5. Ensure click-to-call works on every mobile page

**"Competitor Launched a New Site"**
1. Run the full Competitor Analysis Process above
2. Identify what they improved — match or exceed it within one content day
3. Look for what they're still missing — create content for those gaps immediately
4. Check if their new site broke any of their backlinks (opportunity to outrank)

**"Rankings Dropped Suddenly"**
1. Check GSC for manual actions or security issues first
2. Check GSC Indexing for pages that dropped out of the index
3. Check if Google pushed an algorithm update (search "google algorithm update [current month]")
4. Compare your page against the new top-ranking page — what changed?
5. Fix technical issues first, then content gaps
6. Be patient after fixes — re-ranking takes 2-4 weeks

**"A Page Isn't Ranking Despite Good Content"**
1. Check for keyword cannibalization (see Keyword Cannibalization Rules above)
2. Verify schema is valid using Google Rich Results Test
3. Check internal links — does the page have enough inbound links from other pages?
4. Check if the page is actually indexed (search `site:severinhauling.com/[slug]`)
5. Compare content depth and specificity against the page that IS ranking

### Vercel + Redirect Best Practices

- Redirects are configured in `next.config.ts` — never in `.htaccess` or middleware
- Use 301 (permanent) redirects for pages that have moved permanently
- Use 308 redirects to preserve the HTTP method (POST stays POST)
- After adding a redirect, verify it works: `curl -I https://severinhauling.com/old-url`
- Check GSC for 404 errors monthly — add redirects for any old URLs still getting traffic
- The rebrand from severincleaners.com to severinhauling.com should have domain-level redirects handled at the registrar/DNS level — verify these are still active periodically
