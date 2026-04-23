# Blog Posts Blueprint — Severin Hauling

> **This file is ONLY for blog posts** (`/blog/[slug]`). Do not use this for location pages or service pages. Those have their own blueprint files.

> Read this file every time you create, update, or audit a blog post.

---

## What Is a Blog Post?

Blog posts target informational search intent — people looking for guides, how-tos, cost breakdowns, and local resource information. They rank for keywords that service and location pages can't naturally target.

**URL format**: `/blog/[descriptive-slug]`

There are currently 8 blog posts (7 guides + 1 index page).

**Examples**: `/blog/santee-dump-guide`, `/blog/how-much-does-junk-removal-cost-san-diego`, `/blog/dumpster-rental-san-diego-alternatives`

**Not blog posts**: `/junk-removal-santee` (location page), `/furniture-disposal-san-diego` (service page)

---

## How Blog Posts Differ from Other Page Types

| | Blog Posts | Location Pages | Service Pages |
|---|---|---|---|
| **Search intent** | Informational | Local | Commercial/transactional |
| **URL** | `/blog/[slug]` | `/junk-removal-[city]` | `/[service]-san-diego` |
| **Schema** | 7-10 types (BlogPosting, FAQ, HowTo, etc.) | 6 types (LocalBusiness focus) | 2 types (Service focus) |
| **Word count** | 1,500-2,500 | 2,000-2,500 | 2,000-3,000 |
| **Sidebar** | LocationSidebarCTA (reused) | LocationSidebarCTA | LocationSidebarCTA (pass related services + `nearbyHeading="Services We Provide"`) |
| **Goal** | Educate → convert to call | Rank locally → convert | Rank for service → convert |

---

## Step-by-Step Prompt: Creating or Updating a Blog Post

Follow these steps in order. Do not skip any step.

### Step 1: Validate the Topic

Before writing anything:

1. **Run `keyword-research` skill** to confirm the topic has real search demand
2. **Check for cannibalization**: Does an existing page already target this keyword? If yes, either improve that page or differentiate by intent
3. Blog posts should target **informational intent** — questions, guides, comparisons, local resource lists. If the keyword has commercial intent, it belongs on a service or location page instead.

### Step 2: Gather Post Info

```
Title: _______________
URL slug: /blog/_______________
Primary Keyword: _______________
Secondary Keywords (3-5): _______________
Target Word Count: _______________ (1,500-2,500)
Geographic Focus: _______________ (specific city, San Diego metro, or general)
Related Service Pages to Link (3-5): _______________
Related Blog Posts to Link (1-3): _______________
```

### Step 3: Set Up Metadata

**Title Tag**: `[Topic] | [Year if relevant] | Severin Hauling`
- 50-60 characters
- Include primary keyword

**Description**: 150-155 characters. Include: topic, key takeaway, phone CTA if relevant.

**Keywords**: 5-8 informational keywords.

**Geo Tags** (match the geographic focus of the post):
- If about a specific city: use that city's coordinates
- If about San Diego generally: use San Diego metro coordinates (32.7157, -117.1611)
- If about a specific facility (dump, transfer station): use that facility's coordinates

**OG Type**: `"article"` (not "website")

**Article Meta Tags** (required for blog posts):
```typescript
'article:published_time': '[ISO 8601 date]',
'article:modified_time': '[ISO 8601 date]',
'article:section': '[Category — e.g., Local Resources, Guides, Cost Guides]',
'article:tag': '[comma-separated keywords]',
```

**Canonical**: `https://severinhauling.com/blog/[slug]`

### Step 4: Build the Schema

Blog posts use the most comprehensive schema pattern — **7-10 types in `@graph`**:

1. **BreadcrumbList** — Home → Blog → [Post Title] (appears in search results)
2. **BlogPosting** (enhanced):
   - `wordCount`: actual word count
   - `keywords`: array of target keywords
   - `timeRequired`: ISO 8601 duration (e.g., `PT8M` for 8-minute read)
   - `author`: Organization with name, URL, logo, sameAs social links
   - `publisher`: Organization with logo
   - `articleSection`: category
   - `datePublished` and `dateModified`: ISO 8601 with timezone
3. **FAQPage** — 10-13 questions (this generates rich snippets in search results)
4. **HowTo** — if the post includes a step-by-step process
5. **CivicStructure/Place** — if discussing a specific location or facility
6. **LocalBusiness** — Severin Hauling as service area business
7. **Service** — junk removal service offering
8. **ItemList** — if listing materials, items, or resources
9. **AggregateRating** — optional, can attach to LocalBusiness
10. **Organization** — additional business context

### Step 5: Build the Page Layout

```
<Header />
<article>
  <Hero / Title Section>
  <Main Content Grid (lg:grid-cols-3)>
    <Left (lg:col-span-2)>
      Content in white rounded box
    </Left>
    <Right (lg:col-span-1)>
      <LocationSidebarCTA /> (reused from location pages)
    </Right>
  </Main Content Grid>
</article>
<Footer />
```

**Note**: Blog posts reuse `<LocationSidebarCTA />` (same component as location pages) for the sidebar, configured with relevant services and trust badges.

### Step 6: Write the Content

**Target: 1,500-2,500 words.** Comprehensive but scannable.

**Structure**:
- H1 (only one per page)
- H2s for main sections (3-6 total)
- H3s for subsections as needed
- Short paragraphs (2-4 sentences)
- Tables, lists, and visual breaks where they add clarity

**Mandatory CTA Placements** (3 touchpoints):
1. **Sticky sidebar CTA** — always visible via LocationSidebarCTA component
2. **Mid-content CTA box** — blue gradient block inserted roughly halfway through:
   ```tsx
   <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 my-12 text-center">
   ```
3. **Final CTA section** — at end of article before footer

**Content Box Styles**:

| Box Type | Classes |
|----------|---------|
| Info (blue) | `bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8` |
| Warning (yellow) | `bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r` |
| Success (green) | `bg-green-50 border-l-4 border-green-500 p-5 rounded-r mb-8` |
| Pro Tip | `bg-blue-50 rounded-lg p-5 mb-6` |

**FAQ Section**: 10-13 questions covering:
- Cost/pricing
- Hours/availability
- Location/address of facility (if relevant)
- Requirements/restrictions
- What items are accepted/not accepted
- Payment methods
- Time requirements
- Alternatives (your service as an option)

Each answer: 2-4 sentences, 40-60 words max. **Must be complete sentences.**

### Step 7: Add Internal Links

Blog posts need **8-12 internal links**:
- 3-5 links to relevant service pages (in body content, naturally placed)
- 1-3 links to related blog posts
- Structured links in sidebar (via LocationSidebarCTA)
- Use descriptive anchor text — never "click here"
- Place at least one link in the first paragraph

### Step 8: Run Pre-Publishing Checklist

See `architecture/seo-standards.md` → Pre-Publishing Checklist, plus these blog-specific checks:

- [ ] `article:published_time` and `article:modified_time` set correctly
- [ ] BlogPosting schema includes `wordCount`, `keywords`, `timeRequired`
- [ ] FAQPage schema has 10-13 questions
- [ ] At least 3 CTA touchpoints (sidebar, mid-content, final)
- [ ] Phone number appears prominently and is clickable
- [ ] Run `seo-content` skill with full humanize phase before publishing

---

## Working Example

The **Santee Dump Guide** (`/blog/santee-dump-guide`) is a fully implemented reference with all 10 schemas, proper metadata, sidebar CTA, and 2,400 words. Use it as a template when building new blog posts.

---

## Components Used by Blog Posts

| Component | File | Purpose |
|-----------|------|---------|
| LocationSidebarCTA | `src/components/LocationSidebarCTA.tsx` | Reused for blog sidebar (same as location pages) |
| SchemaMarkup | `src/components/SchemaMarkup.tsx` | Wraps page to inject JSON-LD schema |
| Header | `src/components/Header.tsx` | Site header/nav |
| Footer | `src/components/Footer.tsx` | Site footer |

---

## Blog Expansion Opportunities (Not Yet Executed)

These topics have search demand but no blog post yet:
- Seasonal: spring cleaning, holiday decluttering, summer garage cleanout
- Service deep dives: hot tub removal costs, estate cleanout checklist, construction debris regulations
- Comparison: junk removal vs. dumpster rental, what items dumps won't accept
- Commercial/B2B: office cleanouts, retail space renovation, property management junk removal

**Before writing any of these**: Run `keyword-research` skill to confirm demand and check for cannibalization.
