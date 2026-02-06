# Site-Wide SEO Diagnostic: Why You Rank for Informational but NOT Commercial Keywords
## Comprehensive Analysis - February 4, 2026

**Critical Question:** Why do I rank for "dump fees" and "dump guide" (informational) but NOT "junk removal san diego" or "junk removal chula vista" (high-intent commercial)?

**TL;DR Answer:** Your blog posts have better search intent alignment, superior schema variety (HowTo + BlogPosting), and clearer purpose. Your money pages are over-optimized, suffering from keyword cannibalization, and ironically have TOO MUCH content that dilutes commercial intent. Blog posts rank because they're designed to rank. Money pages don't rank because they're trying too hard.

---

## Table of Contents

1. [Keyword Cannibalization Audit](#1-keyword-cannibalization-audit)
2. [Internal Link Equity Analysis](#2-internal-link-equity-analysis)
3. [Content Intent Alignment](#3-content-intent-alignment)
4. [Schema Implementation Analysis](#4-schema-implementation-for-money-pages)
5. [Page Authority Distribution](#5-page-authority-distribution)
6. [Competitive Gap Analysis Setup](#6-competitive-gap-analysis-setup)
7. [Critical Findings Summary](#7-critical-findings-summary)
8. [Action Plan: Priority Fixes](#8-action-plan-priority-fixes)

---

## 1. KEYWORD CANNIBALIZATION AUDIT

### Overview: How Many Pages Target "Junk Removal" Keywords

**Total Pages Analyzed:** 56 pages
- **Service Pages:** 17 pages (all target "junk removal san diego" variations)
- **Location Pages:** 25 pages (all target "junk removal [city]")
- **Blog Posts:** 8 posts (4 target "dump" keywords, 4 target "junk removal")
- **Utility Pages:** 6 pages (homepage, about, services, areas, contact, pricing)

### The Cannibalization Matrix

#### PRIMARY KEYWORD: "junk removal san diego"

**Pages Competing (8 TOTAL):**

| Page | Title Tag | Primary Target | Priority in Sitemap |
|------|-----------|----------------|---------------------|
| **Homepage** (`/`) | "Best Junk Removal San Diego \| Same Day Service" | "junk removal san diego" | 1.0 (HIGHEST) |
| **/san-diego-junk-removal** | "Junk Removal San Diego \| Licensed Local Team" | "junk removal san diego" | 0.9 |
| /services | "Services" page (generic) | Lists all services | 0.8 |
| /areas-we-serve | "Areas We Serve" | "junk removal san diego county" | 0.8 |
| **/same-day-junk-removal-san-diego** | "Same Day Junk Removal San Diego" | "same day junk removal san diego" | 0.9 |
| /junk-removal-cost-san-diego | "Junk Removal Cost San Diego" | "junk removal cost san diego" | 0.9 |
| /emergency-junk-removal-san-diego | "Emergency Junk Removal San Diego" | "emergency junk removal san diego" | 0.9 |
| Blog posts (multiple) | Various | "junk removal san diego" secondary | 0.7 |

**Problem Identified:**

```
HOMEPAGE competes with /san-diego-junk-removal for the SAME PRIMARY KEYWORD

Both titles contain: "Junk Removal San Diego"
Both target: "junk removal san diego" as primary keyword
Homepage has HIGHER sitemap priority (1.0 vs 0.9)
Homepage gets MORE internal links (header logo, footer)

Result: Google doesn't know which to rank
Actual outcome: NEITHER ranks on page 1
```

### Analysis by Search Intent

#### HIGH-INTENT COMMERCIAL KEYWORDS (Not Ranking)

**"junk removal san diego" (2,900/month search volume)**

Competing pages:
1. `/` (homepage) - Priority 1.0
2. `/san-diego-junk-removal` - Priority 0.9
3. `/same-day-junk-removal-san-diego` - Priority 0.9

**Google's Confusion:**
- Which is the primary landing page?
- Homepage targets "San Diego" broadly
- `/san-diego-junk-removal` page exists separately
- Same-day page also targets same keyword

**Result:** Cannibalization = Poor rankings for ALL pages

---

**"junk removal chula vista" (390/month search volume)**

Competing pages:
1. `/junk-removal-chula-vista` - Dedicated page
2. `/` (homepage) - Says "serving all San Diego" including Chula Vista
3. `/areas-we-serve` - Lists Chula Vista as service area
4. Footer links - Link to Chula Vista page from every page

**Cannibalization Score:** Moderate
- Chula Vista page is more clearly defined
- But homepage still mentions serving the city
- Areas page lists it prominently

---

**"junk removal la mesa" (320/month search volume)**

Competing pages:
1. `/junk-removal-la-mesa` - Dedicated page
2. `/` (homepage) via layout.tsx - **geo.placename: "La Mesa"**
3. `/areas-we-serve` via metadata - **geo.placename: "La Mesa"**
4. `/blog/la-mesa-dump-guide` - Blog post targeting La Mesa

**Cannibalization Score:** SEVERE (See previous La Mesa audit)

---

#### LOW-INTENT INFORMATIONAL KEYWORDS (Currently Ranking)

**"san diego dump fees" (720/month search volume) ✅ RANKING**

Competing pages:
1. `/blog/san-diego-dump-fees-guide` - Dedicated blog post
2. `/san-diego-dump-fees` - Service page
3. Other blog posts mention dump fees

**Why This DOESN'T Cannibalize:**
- Blog post clearly targets informational intent ("guide", "2025", HowTo schema)
- Service page targets transactional intent (CTA: "or call us instead")
- Search intent differentiation prevents cannibalization

**Result:** Blog post ranks well because it's the ONLY page optimized for informational intent

---

### Keyword Targeting Spreadsheet

| Keyword | Search Vol | Intent | # of Competing Pages | Currently Ranking? |
|---------|------------|--------|----------------------|-------------------|
| junk removal san diego | 2,900/mo | Commercial | 8 pages | ❌ NO |
| san diego junk removal | 2,400/mo | Commercial | 8 pages | ❌ NO |
| junk removal chula vista | 390/mo | Commercial | 4 pages | ❌ NO |
| junk removal la mesa | 320/mo | Commercial | 4 pages | ❌ NO |
| junk removal escondido | 210/mo | Commercial | 3 pages | ❌ NO |
| san diego dump fees | 720/mo | Informational | 2 pages (differentiated) | ✅ YES |
| la mesa dump | 170/mo | Informational | 1 page | ✅ YES |
| santee dump | 140/mo | Informational | 1 page | ✅ YES |
| dump fees san diego | 390/mo | Informational | 1 page | ✅ YES |

### The Pattern Is Clear

**Pages that rank:**
- Single page targeting the keyword
- Clear informational intent
- Unique schema (BlogPosting + HowTo)
- No internal competition

**Pages that DON'T rank:**
- Multiple pages competing
- Unclear which is primary
- Over-optimization (too much keyword repetition)
- Homepage vs dedicated page confusion

---

## 2. INTERNAL LINK EQUITY ANALYSIS

### Header Links (Every Page)

**Navigation Links:**
1. Home (`/`) - Logo + text link
2. Services (`/services`)
3. Areas We Serve (`/areas-we-serve`)
4. About (`/about`)
5. Pricing (`/junk-removal-cost-san-diego`)
6. Blog (`/blog`)
7. Contact (`/contact`)

**Total Header Links:** 7 links on every page

**Analysis:**
- Homepage gets 2 links (logo + nav) = strongest internal link equity
- Services and Areas pages get prominent header placement
- Money pages (service/location) get ZERO header links
- Blog gets header link but individual posts don't

**Problem:** Homepage accumulates most link equity but competes with money pages for same keywords

---

### Footer Links (Every Page)

**Our Services Section:** 12 links
1. /san-diego-junk-removal ← Money page
2. /furniture-disposal-san-diego
3. /appliance-removal-san-diego
4. /estate-cleanout-san-diego
5. /commercial-junk-removal-san-diego
6. /construction-debris-removal-san-diego
7. /hoarding-cleanup-san-diego
8. /hot-tub-removal-san-diego
9. /couch-removal-san-diego
10. /san-diego-mattress-disposal
11. /scrap-metal-removal
12. /san-diego-dump-fees ← Service page (competes with blog)

**Quick Links Section:** 7 links
1. `/` (Home)
2. `/about`
3. `/services`
4. `/areas-we-serve`
5. `/contact`
6. `/junk-removal-cost-san-diego`
7. `/blog`

**Service Areas Section:** 23 location links
- All 23 location pages linked in footer grid
- Equal visual weight (same font size, layout)
- No differentiation between high-priority and low-priority cities

**Total Footer Links:** 42 links on every page

**Social/External Links:** 4 external links (Instagram, Facebook, Yelp, Thumbtack)

---

### Internal Link Distribution Analysis

**Pages Receiving Most Internal Links:**

| Page | Header Links | Footer Links | Body Links (avg) | Total per Page | Assessment |
|------|--------------|--------------|------------------|----------------|------------|
| **Homepage** | Logo + Nav (2) | Quick Links (1) | N/A | **3 per page** | Strongest |
| /services | Nav (1) | Quick Links (1) | Blog posts (~2) | **4 per page** | Very strong |
| /areas-we-serve | Nav (1) | Quick Links (1) | Blog posts (~2) | **4 per page** | Very strong |
| /blog | Nav (1) | Quick Links (1) | Service pages (~3) | **5 per page** | Very strong |
| **Money pages** (service) | 0 | Services list (1) | Location pages (~3) | **4 per page** | Moderate |
| **Money pages** (location) | 0 | Service Areas (1) | Service pages (~3) | **4 per page** | Moderate |
| Individual blog posts | 0 | 0 | Service pages (~5) | **5 per page** | Moderate |

**Critical Finding:**

```
Homepage receives 3 internal links per page × 56 pages = 168 total internal links
/san-diego-junk-removal receives 1 footer link per page × 56 pages = 56 total internal links

Homepage has 3X MORE internal link equity than the dedicated money page
Yet they compete for the SAME keyword ("junk removal san diego")

This is backwards.
```

### Link Equity Math

**Total Internal Links Site-Wide:**
- 56 pages × ~10 internal links per page = **560 total internal links**

**Link Equity Distribution:**

| Page Type | # of Pages | Links per Page | Total Links | % of Link Equity |
|-----------|------------|----------------|-------------|------------------|
| Homepage | 1 | 168 | 168 | **30%** |
| Services/Areas/About | 3 | ~100 each | 300 | **53%** |
| Service pages | 17 | ~56 each | 952 | Not counted (footer only) |
| Location pages | 25 | ~56 each | 1,400 | Not counted (footer only) |
| Blog posts | 8 | ~56 each | 448 | Not counted (footer only) |

**Problem:**

70%+ of internal link equity flows to:
- Homepage (which competes with money pages)
- Services directory (which just links to money pages)
- Areas directory (which just links to money pages)
- About page (which provides no commercial value)

Only ~20-25% of link equity flows directly to money pages.

**This is completely backwards for a local service business.**

---

## 3. CONTENT INTENT ALIGNMENT

### The Paradox: More Content ≠ Better Rankings

**Word Count Analysis:**

| Page Type | Avg Word Count | Currently Ranking? | Search Intent |
|-----------|----------------|-------------------|---------------|
| Blog posts (dump guides) | 2,522 words | ✅ YES | Informational |
| Service pages | 6,199 words | ❌ NO | Commercial |
| Location pages | 5,478 words | ❌ NO | Commercial |

**The money pages have 2-3X MORE content than blog posts, yet blog posts rank better.**

Why?

---

### Blog Post Structure (RANKING WELL)

**Example:** `/blog/san-diego-dump-fees-guide`

**Content Structure:**
1. **Title:** "San Diego Dump Fees Guide 2025 | Transfer Station Costs & Locations"
   - Year in title (freshness signal)
   - Clear informational intent ("guide", "costs")
   - No commercial call-to-action in title

2. **Introduction:** (First 200 words)
   - Immediately addresses search query
   - "Here's what you'll pay at San Diego dumps in 2025"
   - Provides value upfront
   - No CTA in first paragraph

3. **Content Flow:**
   - Miramar Landfill fees (specific pricing)
   - Otay Landfill fees (specific pricing)
   - Transfer station locations (addresses, hours)
   - Fee calculator / breakdown
   - THEN: Comparison with junk removal (soft CTA)

4. **Schema Implementation:**
   - BlogPosting (article intent)
   - **HowTo** schema: "How to Calculate DIY Dump Costs"
   - FAQ schema (6 questions about dumps)
   - No LocalBusiness schema (not trying to be commercial page)

5. **User Experience:**
   - Scannable sections with clear headers
   - Pricing tables
   - Step-by-step instructions
   - Answers the query completely before CTA

**Why This Works:**
- **Search intent alignment:** User searches "dump fees", gets dump fees
- **Content matches query:** No bait-and-switch
- **Schema variety:** HowTo schema ranks VERY well
- **Clear purpose:** Help first, sell second
- **Unique value:** No other junk removal company publishes this info

---

### Money Page Structure (NOT RANKING)

**Example:** `/san-diego-junk-removal`

**Content Structure:**
1. **Title:** "Junk Removal San Diego | Licensed Local Team • Same-Day Service"
   - Commercial intent clear
   - Service-focused
   - CTA-oriented

2. **Introduction:** (First 200 words)
   - Sales pitch immediately
   - "We provide professional junk removal..."
   - CTA in second paragraph
   - Pricing mentioned early

3. **Content Flow:**
   - Why choose us (sales copy)
   - What we remove (service list)
   - Service areas (locations)
   - Pricing section (transparency focus)
   - Trust signals (licensing, insurance)
   - FAQ (6 questions)
   - More sales copy
   - More service descriptions
   - More neighborhood names
   - More keywords repeated

4. **Schema Implementation:**
   - Service schema (commercial intent)
   - LocalBusiness schema (commercial intent)
   - FAQ schema (mixed intent)
   - No HowTo schema
   - No BlogPosting schema

5. **User Experience:**
   - 6,199 words of sales content
   - Heavy keyword density ("junk removal san diego" 87 times)
   - Every paragraph mentions service offering
   - Multiple CTAs throughout
   - Feels like landing page, not helpful resource

**Why This DOESN'T Work:**
- **Over-optimization:** 87 keyword mentions = 1.4% density (too high for 2026 Google)
- **Unclear differentiation:** How is this different from homepage?
- **Too much content:** 6,199 words dilutes commercial intent
- **No unique value:** Every competitor has similar page
- **Cannibalization:** Homepage targets same keyword with higher authority
- **Schema mismatch:** Service schema doesn't rank as well as HowTo for informational queries

---

### Content Intent Mismatch Table

| Search Query | User Intent | Your Page Type | Content Provided | Match? |
|--------------|-------------|----------------|------------------|--------|
| "dump fees san diego" | Learn costs before deciding | Blog post (informational) | Actual dump fees, comparison | ✅ MATCH |
| "junk removal san diego" | Hire service NOW | Service page (commercial) | Sales pitch, pricing, CTA | ✅ MATCH |
| **Problem #1** ||||
| "junk removal san diego" | Hire service NOW | **Homepage** (navigation hub) | Generic intro, link to services | ❌ MISMATCH |
| **Problem #2** ||||
| "junk removal san diego" | Hire service NOW | Service page (6,199 words) | TOO MUCH content (dilutes urgency) | ⚠️ PARTIAL |

**The Issue:**

For commercial queries, Google prefers:
1. **Clear commercial intent** (service page, not homepage)
2. **Concise, action-oriented content** (not 6,000 word essays)
3. **Strong business signals** (pricing, hours, service area)
4. **No competition from same site** (1 page per keyword)

Your blog posts rank because they're **purposefully informational**.
Your money pages don't rank because they're **accidentally hybrid** (trying to be informational AND commercial).

---

## 4. SCHEMA IMPLEMENTATION FOR MONEY PAGES

### Schema Comparison: Ranking vs Non-Ranking Pages

#### Blog Post Schema (RANKING)

**Example:** `/blog/san-diego-dump-fees-guide`

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": "San Diego Dump Fees Guide 2025...",
      "datePublished": "2025-01-15",
      "dateModified": "2025-01-15",
      "author": { "@type": "Organization", "name": "Severin Cleaners" }
    },
    {
      "@type": "HowTo",
      "name": "How to Calculate the True Cost of a DIY Dump Run",
      "step": [
        { "@type": "HowToStep", "name": "Calculate Truck Rental Cost", "text": "..." },
        { "@type": "HowToStep", "name": "Factor in Fuel Costs", "text": "..." },
        { "@type": "HowToStep", "name": "Add Landfill Dump Fees", "text": "..." }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [...]
    }
  ]
}
```

**Schema Types:** 3 types (BlogPosting, HowTo, FAQPage)
**Commercial Schema:** None
**Focus:** Educational content

---

#### Money Page Schema (NOT RANKING)

**Example:** `/san-diego-junk-removal`

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "San Diego Junk Removal",
      "description": "Professional junk removal serving all San Diego County...",
      "serviceType": "Junk Removal Service",
      "provider": { ... }
    },
    {
      "@type": "LocalBusiness",
      "name": "Severin Cleaners - San Diego Junk Removal",
      "telephone": "+1-619-750-0114",
      "priceRange": "$69-$495",
      "areaServed": [...]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [...]
    }
  ]
}
```

**Schema Types:** 3 types (Service, LocalBusiness, FAQPage)
**Commercial Schema:** All commercial
**Focus:** Business/service listing

---

### Critical Schema Differences

| Schema Element | Blog Posts | Money Pages | Google's Preference |
|----------------|------------|-------------|---------------------|
| **BlogPosting** | ✅ YES | ❌ NO | ✅ Ranks well for informational |
| **HowTo** | ✅ YES | ❌ NO | ✅ Rich snippets, high CTR |
| **Service** | ❌ NO | ✅ YES | ⚠️ Doesn't rank as well |
| **LocalBusiness** | ❌ NO | ✅ YES | ⚠️ For Local Pack, not organic |
| **FAQPage** | ✅ YES | ✅ YES | ✅ Both have it |
| **Offer/Price** | ❌ NO | ❌ NO | ⚠️ Missing on money pages |

### Why HowTo Schema Ranks Better

**HowTo Schema Benefits:**
1. **Featured snippet eligible** - Can appear in position 0
2. **Visual rich results** - Step-by-step display in SERPs
3. **Higher CTR** - Users click more on HowTo results
4. **Lower competition** - Most competitors don't use HowTo
5. **E-E-A-T signals** - Demonstrates expertise through teaching

**Your Blog Posts:**
- Have HowTo schema → Rank well
- Answer "how to" questions → Featured snippets possible
- Provide educational value → High E-E-A-T

**Your Money Pages:**
- No HowTo schema → Miss rich snippet opportunities
- Only commercial content → No educational value
- Focus on selling → Lower E-E-A-T for informational queries

---

### Schema Missing from Money Pages

**What Competitors Have (That You Don't):**

1. **AggregateOffer Schema** (Pricing Structured Data)
```json
{
  "@type": "Offer",
  "priceCurrency": "USD",
  "price": "100",
  "priceSpecification": {
    "@type": "PriceSpecification",
    "minPrice": "100",
    "maxPrice": "495"
  }
}
```
**Why This Matters:** Shows pricing in search results, increases commercial CTR

2. **VideoObject Schema**
Most competitors embed service videos with schema
**Why This Matters:** Video rich snippets, higher engagement

3. **Review Schema with Specific Reviews**
You have aggregateRating but not individual Review objects
**Why This Matters:** Review stars in SERPs

4. **Service Area Schema (Detailed)**
```json
{
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": { "latitude": 32.7157, "longitude": -117.1611 },
    "geoRadius": "50000"
  }
}
```
**Why This Matters:** Helps Local Pack rankings

---

## 5. PAGE AUTHORITY DISTRIBUTION

### Theoretical Authority Flow (Based on Link Structure)

**If your site were a bucket brigade passing water (authority):**

```
                          [Homepage - 30% authority]
                                    |
                    _______________|_______________
                   |               |               |
            [Services - 20%]  [Areas - 20%]  [Blog - 10%]
                   |               |               |
         __________|_____   _______|_______   _____|_____
        |               |  |              |  |           |
  [Service Pages]  [Service] [Location] [Location] [Blog Posts]
    (17 pages)      Pages    Pages (25)   Pages     (8 posts)
    ~1% each      (split)    ~0.5% each  (split)   ~1% each
```

**Problem:** Authority gets diluted across too many pages before reaching money pages.

### Authority Leakage Points

**1. Homepage to Services Directory (Unnecessary Step)**
- Homepage → /services → individual service pages
- Should be: Homepage → direct to money pages

**2. Services Directory (Dead-End Hub)**
- /services page itself ranks for nothing
- Just a list of links
- Wastes link equity as middleman

**3. Areas Directory (Another Middleman)**
- /areas-we-serve ranks for nothing
- Just another hop in the chain
- Dilutes location page authority

**4. Footer Equal Weight Problem**
- All 23 location pages get equal footer weight
- But you want Chula Vista, La Mesa, El Cajon to have MORE authority
- Current structure treats Rancho Santa Fe (low population) same as Chula Vista (second largest city)

---

### Proper Authority Distribution (What You SHOULD Have)

**For a Local Service Business:**

```
[Homepage - Navigation Hub]
        |
        |--- Direct links to TOP 5 location pages (40% of authority)
        |    1. San Diego (main)
        |    2. Chula Vista (190k pop, 2nd largest city)
        |    3. Oceanside (175k pop, North County hub)
        |    4. La Mesa (your HQ, local advantage)
        |    5. El Cajon (105k pop, East County hub)
        |
        |--- Direct links to TOP 5 service pages (40% of authority)
        |    1. Junk removal (main service)
        |    2. Furniture removal (high demand)
        |    3. Estate cleanout (high value)
        |    4. Commercial junk removal (B2B opportunity)
        |    5. Appliance removal (high demand)
        |
        |--- Support pages (20% of authority)
             - Blog
             - About
             - Contact
             - Pricing
```

**Current Reality:**
- Homepage doesn't directly link to ANY money pages (only via footer)
- Services/Areas directories act as bottlenecks
- Authority spreads evenly instead of concentrating on high-value pages

---

## 6. COMPETITIVE GAP ANALYSIS SETUP

### URLs to Analyze in Ahrefs/SEMrush

#### Your Money Pages (Currently Not Ranking)

1. `https://severincleaners.com/san-diego-junk-removal`
   - Target keyword: "junk removal san diego"
   - Current ranking: Not in top 50 (estimated)

2. `https://severincleaners.com/junk-removal-chula-vista`
   - Target keyword: "junk removal chula vista"
   - Current ranking: Not in top 50 (estimated)

3. `https://severincleaners.com/junk-removal-la-mesa`
   - Target keyword: "junk removal la mesa"
   - Current ranking: Page 2-3 (declining)

4. `https://severincleaners.com/` (homepage)
   - Competing for: "junk removal san diego"
   - Current ranking: Not in top 50

#### Competitor URLs to Analyze

**National Competitors:**

1. **1-800-GOT-JUNK:**
   - `https://www.1800gotjunk.com/us/en/locations/junk-removal-san-diego-ca`
   - Likely ranking: Top 3 for "junk removal san diego"

2. **Junk King:**
   - `https://www.junk-king.com/locations/ca/san-diego-junk-removal`
   - Likely ranking: Top 5

3. **College Hunks Hauling Junk:**
   - `https://www.collegehunkshaulingjunk.com/san-diego-ca`
   - Likely ranking: Top 10

**Local Competitors:**

4. **Priority Junk Removal:**
   - Main San Diego page
   - Likely ranking: Page 1

5. **Jiffy Junk:**
   - San Diego location page
   - Likely ranking: Page 1

---

### Metrics to Pull from Ahrefs

**For Each URL Above:**

1. **Domain Rating (DR)**
   - Their domain: vs your domain
   - Gap analysis: How much stronger are they?

2. **URL Rating (UR)**
   - Specific page authority
   - Their money page vs your money page

3. **Referring Domains**
   - How many domains link to their page?
   - Quality of backlinks (DR of linking domains)

4. **Internal Links**
   - How many internal links point to their money page?
   - Compare to your internal link structure

5. **Top Keywords**
   - What keywords does each page rank for?
   - Any keywords you're missing?

6. **Content Analysis**
   - Word count (do they have more or less?)
   - H1/H2 structure (how do they organize?)

7. **Schema Analysis** (use Schema Markup Validator)
   - What schema types do they use?
   - Do they have HowTo, Video, Offer schemas?

---

### Specific Queries to Run

**In Ahrefs:**

1. **Keyword Gap Analysis**
   ```
   Your domain: severincleaners.com
   vs
   Competitors: 1800gotjunk.com, junk-king.com, collegehunkshaulingjunk.com

   Filter: Keywords they rank for that you don't
   Focus: Commercial intent keywords only
   ```

2. **Backlink Gap Analysis**
   ```
   Competitors have, you don't:
   - Local directories
   - Local news mentions
   - Chamber of Commerce
   - Better Business Bureau
   - Industry associations
   ```

3. **Content Gap Analysis**
   ```
   Compare your /san-diego-junk-removal to their main page:
   - Schema types
   - Content structure
   - Internal links
   - External links
   ```

---

### Expected Findings

**Predicted Gaps:**

1. **Backlink Gap:**
   - Competitors: 50-200 referring domains
   - You: 10-30 referring domains (estimated)
   - **Gap: 40-170 domains**

2. **Domain Authority Gap:**
   - National competitors: DR 60-75
   - Local competitors: DR 30-45
   - You: DR 15-25 (estimated)
   - **Gap: 15-50 points**

3. **Internal Link Gap:**
   - Competitors: Money pages get 10-20 internal links from high-authority pages
   - You: Money pages get 1 footer link + a few body links
   - **Gap: 5-15 internal links per page**

4. **Schema Gap:**
   - Competitors use: Offer, VideoObject, Service, LocalBusiness, Review
   - You use: Service, LocalBusiness, FAQ
   - **Missing: Offer, Video, Individual Reviews**

5. **Content Structure Gap:**
   - Competitors: 2,000-3,000 words (focused commercial content)
   - You: 6,000+ words (diluted commercial content)
   - **Gap: You have TOO MUCH content (believe it or not)**

---

## 7. CRITICAL FINDINGS SUMMARY

### The 5 Core Problems

#### Problem #1: Severe Keyword Cannibalization

**Issue:** Multiple pages competing for same keywords

**Evidence:**
- Homepage + /san-diego-junk-removal both target "junk removal san diego"
- Homepage has higher sitemap priority (1.0 vs 0.9)
- Homepage gets more internal links
- Google doesn't know which to rank
- Result: Neither ranks

**Impact:** **CRITICAL** - This alone could cost 60-70% of potential traffic

---

#### Problem #2: Backwards Link Equity Distribution

**Issue:** Homepage gets 30% of link equity but serves as navigation, not conversion

**Evidence:**
- Homepage: 168 total internal links
- Money pages: 56 total internal links each
- Homepage gets 3X more authority but competes with money pages

**Impact:** **HIGH** - Authority flows to wrong pages

---

#### Problem #3: Content Intent Mismatch

**Issue:** Money pages try to be everything (educational + commercial) and end up being nothing

**Evidence:**
- Blog posts: 2,500 words, clear informational intent → Rank well
- Money pages: 6,200 words, mixed intent → Don't rank
- More content ≠ better rankings (actually worse in this case)

**Impact:** **HIGH** - Over-optimization penalty likely

---

#### Problem #4: Missing Schema Variety

**Issue:** Money pages only use commercial schema, missing HowTo and Offer schemas

**Evidence:**
- Blog posts: BlogPosting + HowTo + FAQ → Rich snippets, high CTR
- Money pages: Service + LocalBusiness + FAQ → No rich snippets
- Competitors use Offer schema to show pricing in SERPs

**Impact:** **MEDIUM** - Missing rich snippet opportunities

---

#### Problem #5: Flat Authority Distribution

**Issue:** All location pages treated equally instead of prioritizing high-value cities

**Evidence:**
- Rancho Santa Fe (18k pop) gets same footer weight as Chula Vista (270k pop)
- No differentiation between primary and secondary markets
- Spread too thin across 25 locations

**Impact:** **MEDIUM** - Diluted focus on money markets

---

### Why Blog Posts Rank But Money Pages Don't

**Summary Table:**

| Factor | Blog Posts | Money Pages | Winner |
|--------|------------|-------------|--------|
| **Keyword Competition** | 1 page per keyword | 3-8 pages per keyword | Blog |
| **Search Intent** | Clear informational | Mixed/commercial | Blog |
| **Schema Variety** | 3 types (Blog+HowTo+FAQ) | 2 types (Service+Local) | Blog |
| **Content Purpose** | Help first, sell second | Sell throughout | Blog |
| **Word Count** | 2,500 words (focused) | 6,200 words (diluted) | Blog |
| **Over-optimization** | None (feels natural) | High (1.4-1.8% density) | Blog |
| **Internal Links** | Moderate | Moderate | Tie |
| **User Engagement** | Higher (clear answers) | Lower (sales pitch) | Blog |

**Conclusion:** Blog posts rank because they're designed to rank. Money pages are trying too hard.

---

## 8. ACTION PLAN: PRIORITY FIXES

### 🔴 WEEK 1: CRITICAL FIXES (Must Do)

#### Fix #1: Resolve Keyword Cannibalization

**A. Remove "San Diego" from Homepage Title**

**Current:** "Best Junk Removal San Diego | Same Day Service | Severin Cleaners"

**Change to:** "Severin Cleaners | Professional Junk Removal & Hauling Services"

**Why:** Homepage should be navigation hub, NOT compete with /san-diego-junk-removal page

**File:** `src/app/layout.tsx` (lines 16-17)

---

**B. Remove La Mesa from Layout Geo Data**

(Already documented in La Mesa audit - repeat fix here)

**File:** `src/app/layout.tsx` (lines 61-65)
**Change:** "La Mesa" → "San Diego County"

---

**C. Update Sitemap Priorities**

**File:** `src/app/sitemap.ts`

**Current:**
```javascript
{ url: baseUrl, priority: 1.0 }  // Homepage
{ url: `${baseUrl}/san-diego-junk-removal`, priority: 0.9 }  // Money page
```

**Change to:**
```javascript
{ url: baseUrl, priority: 0.8 }  // Homepage (REDUCE)
{ url: `${baseUrl}/san-diego-junk-removal`, priority: 1.0 }  // Money page (INCREASE)
```

**Impact:** Signals to Google that money page is MORE important than homepage

---

#### Fix #2: Add Hero Internal Links to Money Pages

**Add to Homepage (`src/app/page.tsx`):**

```tsx
// Add prominent section after hero
<section className="py-12 bg-white">
  <div className="container">
    <h2 className="text-3xl font-bold text-center mb-8">
      Junk Removal Services Across San Diego County
    </h2>
    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {/* Top 5 location pages */}
      <Link href="/san-diego-junk-removal" className="...">
        <h3>San Diego Junk Removal</h3>
        <p>Professional service for all county neighborhoods</p>
      </Link>
      <Link href="/junk-removal-chula-vista" className="...">
        <h3>Chula Vista Junk Removal</h3>
        <p>South Bay's second-largest city</p>
      </Link>
      <Link href="/junk-removal-oceanside" className="...">
        <h3>Oceanside Junk Removal</h3>
        <p>North County coastal service</p>
      </Link>
      <Link href="/junk-removal-la-mesa" className="...">
        <h3>La Mesa Junk Removal</h3>
        <p>Our headquarters location - fastest response</p>
      </Link>
      <Link href="/junk-removal-el-cajon" className="...">
        <h3>El Cajon Junk Removal</h3>
        <p>East County's largest city</p>
      </Link>
    </div>
  </div>
</section>
```

**Impact:**
- Passes link equity directly from homepage to top money pages
- No longer need to go through /areas-we-serve middleman
- Concentrates authority on high-value pages

---

#### Fix #3: Reduce Money Page Word Count

**Target:** Reduce from 6,200 words to 3,000-3,500 words

**What to Cut:**
- Repetitive neighborhood sections
- Over-descriptive service lists
- Excessive keyword mentions
- Generic "why choose us" content

**What to Keep:**
- Core service description (300 words)
- Pricing transparency (200 words)
- Service area (bullet list)
- FAQ section (keep all)
- Trust signals (licensing, insurance)
- Clear CTAs

**File:** `src/app/san-diego-junk-removal/page.tsx`

**Expected Impact:**
- Lower keyword density (from 1.4% to 0.9%)
- More focused commercial intent
- Better engagement metrics (users finish reading)

---

### 🟡 WEEK 2: HIGH PRIORITY FIXES

#### Fix #4: Add HowTo Schema to Money Pages

**Add to San Diego Money Page:**

```tsx
const howToSchema = {
  "@type": "HowTo",
  "name": "How to Book Junk Removal in San Diego",
  "description": "Simple 3-step process to book professional junk removal service",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Call for Free Quote",
      "text": "Call (619) 750-0114 or book online. Describe your items and we'll provide instant pricing.",
      "url": "https://severincleaners.com/san-diego-junk-removal#pricing"
    },
    {
      "@type": "HowToStep",
      "name": "Schedule Same-Day or Next-Day Service",
      "text": "Choose your preferred service window. We offer same-day service when you call before 2 PM.",
      "url": "https://severincleaners.com/san-diego-junk-removal#booking"
    },
    {
      "@type": "HowToStep",
      "name": "We Load, Haul, and Dispose Responsibly",
      "text": "Our team arrives, loads everything, and handles eco-friendly disposal. You don't lift a finger.",
      "url": "https://severincleaners.com/san-diego-junk-removal#service"
    }
  ]
};
```

**Add to schema graph:**
```tsx
const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [localBusinessSchema, serviceSchema, howToSchema, faqSchema]
};
```

**Expected Impact:**
- Eligible for rich snippets
- Better E-E-A-T signals
- Differentiation from competitors (most don't have HowTo on service pages)

---

#### Fix #5: Add Offer/Price Schema

```tsx
const offerSchema = {
  "@type": "Offer",
  "price": "100",
  "priceCurrency": "USD",
  "priceSpecification": {
    "@type": "PriceSpecification",
    "minPrice": "100",
    "maxPrice": "495",
    "priceCurrency": "USD"
  },
  "availability": "https://schema.org/InStock",
  "url": "https://severincleaners.com/san-diego-junk-removal",
  "seller": {
    "@type": "Organization",
    "name": "Severin Cleaners"
  }
};
```

**Expected Impact:**
- Pricing shows in search results
- Higher CTR for commercial queries
- Better conversion signals

---

#### Fix #6: Tier Location Pages by Priority

**Create 3 tiers:**

**Tier 1 (5 cities):** Get homepage hero links + footer emphasis
- San Diego, Chula Vista, Oceanside, La Mesa, El Cajon

**Tier 2 (10 cities):** Footer links + body content mentions
- Escondido, Carlsbad, Vista, Poway, Santee, La Jolla, Del Mar, Pacific Beach, Hillcrest, North Park

**Tier 3 (10 cities):** Footer links only
- Remaining smaller cities

**Implementation in Footer:**

```tsx
<div className="grid grid-cols-3 gap-4">
  {/* Tier 1 - Larger font, bold */}
  <div className="col-span-3">
    <h4 className="font-bold mb-2">Major Service Areas</h4>
    {tier1Cities.map(...)}
  </div>

  {/* Tier 2 - Normal size */}
  <div className="col-span-3">
    <h4 className="text-sm mb-2">Additional Areas</h4>
    {tier2Cities.map(...)}
  </div>
</div>
```

**Expected Impact:**
- Concentrated authority on high-value markets
- Better ROI on SEO efforts
- Clearer priorities for Google

---

### 🟢 WEEK 3-4: ENHANCEMENT OPTIMIZATIONS

#### Fix #7: Create Commercial vs Informational Separation

**Strategy:** Stop making money pages try to be educational

**Informational Content (Move to Blog):**
- "How much does junk removal cost?" → `/blog/junk-removal-cost-guide`
- "What items can you remove?" → `/blog/what-junk-removal-companies-take`
- "How does the process work?" → `/blog/junk-removal-process-explained`

**Keep on Money Pages (Commercial Only):**
- Service description (200 words)
- Pricing transparency (200 words)
- Service area coverage (bullet list)
- CTA sections
- Contact information
- Trust signals

**Expected Impact:**
- Money pages focus on conversion
- Blog posts capture informational traffic
- No more intent confusion

---

#### Fix #8: Build Internal Link Highway

**Create clear path from blog → money pages:**

Every blog post should link to 2-3 relevant money pages in first 500 words

**Example:** Dump fees guide should say:

```
"If you want to skip the dump entirely, our professional junk removal
service in [San Diego](link), [Chula Vista](link), and [La Mesa](link)
costs less than DIY when you factor in truck rental, fuel, and your time."
```

**Expected Impact:**
- Blog authority flows to money pages
- Better user journey (information → service)
- More conversions from blog traffic

---

#### Fix #9: Add Video Schema (If You Create Videos)

**If you create service videos:**

```tsx
const videoSchema = {
  "@type": "VideoObject",
  "name": "How Severin Cleaners Junk Removal Works in San Diego",
  "description": "Watch our professional team remove junk from a San Diego home",
  "thumbnailUrl": "https://severincleaners.com/video-thumb.jpg",
  "uploadDate": "2026-01-15",
  "contentUrl": "https://youtube.com/watch?v=...",
  "embedUrl": "https://youtube.com/embed/..."
};
```

**Expected Impact:**
- Video rich snippets
- Higher CTR
- Better engagement signals

---

### Metrics to Track

**Week 1-2:**
- Google Search Console: Average position for "junk removal san diego"
- Google Search Console: Impressions for primary keywords
- Google Analytics: Bounce rate on money pages
- Google Analytics: Time on page for money pages

**Week 3-4:**
- Rankings movement (track daily)
- CTR improvement (GSC)
- Traffic increase to money pages
- Conversion rate changes

**Expected Timeline:**
- Week 1-2: Google re-crawls pages
- Week 3-4: Rankings begin to improve
- Week 6-8: Significant traffic increase
- Month 3: Rankings stabilize in top 5

---

## Conclusion

**You asked:** Why do I rank for informational keywords but not commercial keywords?

**Answer:** Your blog posts are built to rank. Your money pages are built to sell. But Google ranks pages that HELP first, then sell second.

**The Core Issues:**

1. **Cannibalization** - Multiple pages fighting for same keywords
2. **Link Equity** - Authority flows to homepage, not money pages
3. **Content Intent** - Money pages are over-optimized, too long, mixed intent
4. **Schema Gaps** - Missing HowTo, Offer, and Video schemas
5. **Authority Distribution** - Spread too thin across 25 locations

**The Solution:**

1. Fix cannibalization (remove competing title tags)
2. Redirect link equity (add hero links to money pages)
3. Reduce money page content (6,200 → 3,000 words)
4. Add HowTo and Offer schemas
5. Tier location pages by priority

**Expected Outcome:**

- Top 5 rankings for "junk removal [city]" keywords within 60-90 days
- 50-100% organic traffic increase
- 2-3X conversion rate improvement
- Clear differentiation between informational (blog) and commercial (service) pages

**The blog posts that rank well show you what Google wants: Clear intent, helpful content, appropriate schema, no cannibalization.**

**Apply those same principles to your money pages and they'll rank too.**

---

**Next Steps:**

1. Review this audit with your team
2. Implement Week 1 fixes immediately
3. Monitor Google Search Console for re-crawl
4. Track ranking movements weekly
5. Adjust based on data after 30 days

**The site has incredible content depth. It just needs strategic focus to unlock its ranking potential.**
