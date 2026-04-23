# Service Pages Blueprint — Severin Hauling

> **This file is ONLY for service pages** (e.g., `/furniture-disposal-san-diego`, `/appliance-removal-san-diego`). Do not use this for location pages or blog posts. Those have their own blueprint files.

> Read this file every time you create, update, or audit a service page.

---

## What Is a Service Page?

A service page targets a specific type of junk removal service across the San Diego metro area. The URL format is typically `/[service-name]-san-diego` or `/[service-name]`.

There are currently 15 service pages.

**Examples**: `/furniture-disposal-san-diego`, `/appliance-removal-san-diego`, `/hot-tub-removal-san-diego`, `/commercial-junk-removal-san-diego`

**Not service pages**: `/junk-removal-la-jolla` (location page), `/blog/how-much-does-junk-removal-cost-san-diego` (blog post)

---

## How Service Pages Differ from Location Pages

| | Service Pages | Location Pages |
|---|---|---|
| **Targets** | A specific service type | A specific city/neighborhood |
| **URL pattern** | `/[service]-san-diego` | `/junk-removal-[city]` |
| **Geo tags** | San Diego metro coordinates | Specific city coordinates |
| **Sidebar links** | Related services (3-4) | Nearby locations (4) |
| **Sidebar component** | `LocationSidebarCTA` (pass related services to `nearbyLocations`, set `nearbyHeading="Services We Provide"`) | `LocationSidebarCTA` (default nearby locations) |
| **Schema focus** | ServiceSchema | localBusinessSchema with location signals |
| **Content focus** | What we remove, how the service works, benefits | City characteristics, neighborhoods, landmarks |
| **Internal links to** | 8-10 location pages | 5-7 service pages |

---

## Step-by-Step Prompt: Creating or Updating a Service Page

Follow these steps in order. Do not skip any step.

### Step 1: Gather Service Info

Before writing any code, collect this information:

```
Service Name: _______________
URL slug: /_______________
Service Category: _______________ (furniture, appliances, specialty, cleanout, construction, etc.)
Primary Keywords: _______________
Target Audience: _______________ (homeowners, businesses, property managers, landlords, etc.)
Unique Selling Point: _______________ (same-day available, specialty equipment, licensed disposal, etc.)
Items Removed (16+ items in 4 categories): _______________
Related Services for Sidebar (3-4): _______________
```

### Step 2: Set Up Metadata

**Title**: `[Service Name] San Diego | [Key Benefit] | Severin Hauling`
- 50-60 characters
- Key benefit should be specific (e.g., "Same-Day Pickup" or "Licensed Disposal")

**Description**: 150-155 characters. Must include: service name, key features, phone number or pricing.
- Example: `Professional furniture removal in San Diego. Same-day service available. Licensed disposal included. Call (619) 750-0114. Starting at $100.`

**Keywords**: 5-8 service-specific keywords:
```
[service] San Diego, [service variant] San Diego, [related service], San Diego [service] cost
```

**Geo Tags** (use SAN DIEGO metro coordinates, not La Mesa HQ, not a specific city):
```typescript
other: {
  'geo.region': 'US-CA',
  'geo.placename': 'San Diego',
  'geo.position': '32.7157;-117.1611',
  'ICBM': '32.7157, -117.1611',
}
```

**Canonical**: `https://severinhauling.com/[service-slug]`

### Step 3: Build the Schema

Service pages require these schemas in `@graph`:

1. **ServiceSchema** — service type, description, areaServed (San Diego County), price range
2. **BreadcrumbSchema** — Home → Services → [Service Name]

Use `generateServiceSchema()` and `generateBreadcrumbSchema()` from `src/lib/schema.ts`.

### Step 4: Build the Page Layout

**Same 2-column grid as location pages, but with service-specific sidebar:**

1. `<Header />` component
2. **Hero Section** (same gradient as location pages — see Hero rules in `architecture/location-pages.md`)
3. **Main Content Grid** (`lg:grid-cols-3`)
   - Left (lg:col-span-2): Content box — `bg-white rounded-lg shadow-md p-8`
   - Right (lg:col-span-1): `<LocationSidebarCTA />` with `nearbyLocations` set to related service pages and `nearbyHeading="Services We Provide"`
4. `<LocationPricingSection />` component with service name passed as `locationName` prop
5. `<TrustSignalsSection />` component (same as location pages)
6. **FAQ Section** (custom per service)
7. **Related Services Grid** (3 cards linking to OTHER service pages)
8. `<Footer />` component

### Step 5: Write the Content Sections

**Target: 2,000-3,000 words.** Focused on the service, not on any specific city.

1. **Introduction** (2-3 paragraphs)
   - What the service is, who needs it, why professional removal matters
   - Primary keyword in first paragraph

2. **What We Remove** (200 words, grid format)
   - 16+ items organized into 4 categories
   - Each category is a logical grouping (e.g., for furniture: living room, bedroom, office, outdoor)
   - Links to related service pages where relevant

3. **Service Details** (key features and benefits)
   - What makes this service different
   - Equipment or expertise required
   - Disposal/recycling approach

4. **How It Works** (6 steps)
   - Clear numbered process from call to completion
   - Specific to this service type

5. **Why Choose Us** (4-6 bullet points)
   - Benefits-focused, not feature-focused
   - Specific to this service (not generic "we're great" copy)

6. **Service Areas** (list or linked grid)
   - Link to 8-10 relevant location pages
   - Match to demographic tiers (see `architecture/seo-standards.md`)

7. **FAQ Section** (6-8 questions, 2-4 sentence answers)
   - Service-specific: cost, process, what items qualify, scheduling, disposal method
   - **Every answer must be a complete sentence — never end with a colon**

### Step 6: Configure the Sidebar

Use `<LocationSidebarCTA />` component with these props:
- `locationName` — the service name (e.g., "Couch Removal")
- `nearbyLocations` — array of 3-4 related service pages (NOT location pages)
- `nearbyHeading="Services We Provide"` — overrides the default "Nearby Areas We Serve" heading
- Default `serviceItems` (What We Remove checklist) is fine as-is unless the service needs custom items

### Step 7: Add Internal Links

Service pages need **12-15 internal links** total:
- 8 contextual links in body content
- 4-7 structured links (sidebar, related services, service areas)

**Location page links**: Link to 8-10 location pages that match this service's most relevant demographics (see tier system in `architecture/seo-standards.md`)

**Service cross-links**: Link to 3-4 related services in the sidebar and 3 in the related services grid at bottom

### Step 8: Run the Pre-Publishing Checklist

See `architecture/seo-standards.md` → Pre-Publishing Checklist. Every item must pass.

---

## Services Severin Hauling ACTUALLY Offers

**Only reference these services on service pages. Never mention services not on this list.**

1. Furniture Disposal/Removal
2. Appliance Removal
3. Mattress Disposal
4. Couch Removal
5. Hot Tub Removal
6. Piano Removal
7. Scrap Metal Removal
8. Concrete Disposal
9. Construction Debris Removal
10. Commercial Junk Removal
11. Estate Cleanout
12. Hoarding Cleanup
13. Foreclosure/Eviction Cleanout
14. Emergency Junk Removal
15. Same-Day Junk Removal
16. Cleanout Services (general)

**Never mention**: Cleaning services, moving services, organizing, Airbnb turnovers, equestrian specialists, property management services.

---

## Components Used by Service Pages

| Component | File | Purpose |
|-----------|------|---------|
| LocationSidebarCTA | `src/components/LocationSidebarCTA.tsx` | Sticky sidebar with CTAs. Pass related services to `nearbyLocations` and set `nearbyHeading="Services We Provide"` |
| LocationPricingSection | `src/components/LocationPricingSection.tsx` | 4-tier pricing cards. Pass service name as `locationName` prop |
| TrustSignalsSection | `src/components/TrustSignalsSection.tsx` | 4-stat trust signal grid (shared with location pages) |
| SchemaMarkup | `src/components/SchemaMarkup.tsx` | Wraps page to inject JSON-LD schema |
| Header | `src/components/Header.tsx` | Site header/nav |
| Footer | `src/components/Footer.tsx` | Site footer |

**Custom per page**: Each service page has its own FAQ section built inline.

---

## Common Mistakes When Working on Service Pages

1. **Not overriding the sidebar heading** — on service pages, always set `nearbyHeading="Services We Provide"` so the sidebar shows related services, not the default "Nearby Areas We Serve"
2. **Using La Mesa or a specific city in geo tags** — service pages use San Diego metro coordinates
3. **Mentioning services not offered** — stick to the list above
4. **Writing location-specific content** — service pages are about the SERVICE across all of San Diego, not about a specific city
5. **Duplicating location page content** — if it talks about neighborhoods, landmarks, or city characteristics, it belongs on a location page
