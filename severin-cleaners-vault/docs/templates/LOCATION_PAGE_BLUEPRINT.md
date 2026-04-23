# Location Page Blueprint Template
## Severin Cleaners - Complete Location Page Configuration

---

## 📋 **PAGE ARCHITECTURE OVERVIEW**

Every location page follows this exact structure:

### **Visual Page Flow:**

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (Component)                                          │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│ HERO SECTION (Blue gradient, badge, H1, subheadline)       │
└─────────────────────────────────────────────────────────────┘
┌──────────────────────────────────┬──────────────────────────┐
│ LEFT COLUMN (2/3 width)          │ RIGHT COLUMN (1/3 width) │
│ ┌──────────────────────────────┐ │ ┌──────────────────────┐ │
│ │ White Content Box            │ │ │ SIDEBAR (Sticky)     │ │
│ │ • Introduction (2 ¶s)        │ │ │ • Call CTA           │ │
│ │ • Neighborhoods (8+)         │ │ │ • Get Quote CTA      │ │
│ │ • Streets (8+)               │ │ │ • What We Remove     │ │
│ │ • Landmarks (12+)            │ │ │ • Nearby Locations   │ │
│ │ • Traffic Patterns           │ │ │ • Trust Badges       │ │
│ │ • Weather                    │ │ │ • Quick Stats        │ │
│ │ • What We Remove             │ │ └──────────────────────┘ │
│ │ • Specialty (optional)       │ │                          │
│ │ • How It Works               │ │                          │
│ │ • Why Choose Us              │ │                          │
│ └──────────────────────────────┘ │                          │
└──────────────────────────────────┴──────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│ PRICING SECTION (Component)                                 │
│ 4 gradient cards + additional sizes + what's included      │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│ TRUST SIGNALS (Component)                                   │
│ 4-stat grid with icons                                      │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│ FAQ SECTION (Custom Component per location)                │
│ • FAQ heading + intro                                       │
│ • 6-8 accordion Q&As                                        │
│ • Blue CTA box: "Ready for Same-Day..." + 2 buttons        │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│ RELATED SERVICES                                            │
│ 3 service cards in grid                                     │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│ FOOTER (Component)                                          │
└─────────────────────────────────────────────────────────────┘
```

### **Code Structure:**

1. **Imports & Metadata** (Lines 1-54)
2. **Schema Generation** (Lines 57-75)
3. **Page Component Structure**:
   - Header (imported component)
   - Hero Section (custom per location)
   - **Main Content Area with 2-Column Grid** (lg:grid-cols-3):
     - **Left Column (lg:col-span-2)**: Main content sections
     - **Right Column (lg:col-span-1)**: `<LocationSidebarCTA />` sticky sidebar
   - `<LocationPricingSection />` component
   - `<TrustSignalsSection />` component
   - FAQ Section (custom component per location - **includes built-in CTA box**)
   - Related Services Section (custom per location)
   - Footer (imported component)

---

## 📋 **CONTENT COLLECTION WORKSHEET**

Before coding, fill out this worksheet for each location:

### **BASIC INFO**
```
Location Name: _______________
Positioning Angle: _______________ (luxury, family-oriented, beach, master-planned, urban, etc.)
Unique Local Challenge: _______________ (hillside access, HOA requirements, etc.)
Primary Service Area: _______________
Zip Codes: _______________
Nearby Locations (4): _______________ (for sidebar)
```

---

## 🏗️ **COMPLETE PAGE STRUCTURE**

---

### **SECTION 1: IMPORTS & SETUP**

```typescript
import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import [Location]FAQSection from "./[Location]FAQSection"; // Custom per location
import LocationSidebarCTA from "@/components/LocationSidebarCTA"; // Reusable
import TrustSignalsSection from "@/components/TrustSignalsSection"; // Reusable
import LocationPricingSection from "@/components/LocationPricingSection"; // Reusable
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
```

---

### **SECTION 2: METADATA**

```typescript
export const metadata: Metadata = {
  title: 'Junk Removal [LOCATION] | [UNIQUE POSITIONING] | (619) 750-0114',
  description: '[LOCATION] junk removal [AREA1], [AREA2]. [KEY SERVICE], [KEY FEATURE]. (619) 750-0114',
  keywords: '[location] junk removal, junk hauling [location], trash removal [location], junk pickup [location]',
  // ... rest of metadata
};
```

**CONTENT TO EXTRACT FROM EXISTING PAGE:**
- [ ] Title format
- [ ] Meta description
- [ ] Keywords list
- [ ] Unique positioning angle

---

### **SECTION 3: SCHEMA GENERATION**

```typescript
export default function JunkRemoval[Location]Page() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "[Location]",
    serviceName: "Junk Removal",
    description: "[Full service description with neighborhoods and key features]",
    url: "https://severincleaners.com/junk-removal-[location-slug]",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "[Location] Junk Removal", url: "https://severincleaners.com/junk-removal-[location-slug]" },
  ]);

  const nearbyLocations = [
    { name: "[Nearby 1]", slug: "[nearby-1-slug]" },
    { name: "[Nearby 2]", slug: "[nearby-2-slug]" },
    { name: "[Nearby 3]", slug: "[nearby-3-slug]" },
    { name: "[Nearby 4]", slug: "[nearby-4-slug]" },
  ];
```

**CONTENT TO EXTRACT:**
- [ ] Service description (2-3 sentences with key neighborhoods)
- [ ] 4 nearby locations with slugs

---

### **SECTION 4: PAGE RETURN & SCHEMA INJECTION**

```typescript
  return (
    <div className={`${inter.variable} font-sans`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main>
        {/* All page sections go here */}
      </main>

      <Footer />
    </div>
  );
}
```

---

### **SECTION 5: HERO SECTION**

```tsx
<section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      {/* BADGE */}
      <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
        #1 [Location] Junk Removal Service
      </div>

      {/* H1 HEADLINE */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        [Location] Junk Removal
      </h1>

      {/* SUBHEADLINE (p tag, not h2) */}
      <p className="text-xl md:text-2xl mb-8 text-blue-100">
        [Neighborhood 1] to [Neighborhood 2] • [Key Feature] • Same-Day Service
      </p>

      {/* BOTTOM TRUST LINE */}
      <p className="text-lg mb-8">
        ✓ [Local Specialist] ✓ [Key Feature] ✓ Licensed & Insured
      </p>
    </div>
  </div>
</section>
```

**CONTENT TO EXTRACT FROM EXISTING PAGE:**
- [ ] Badge text (local community descriptor)
- [ ] Main headline (usually just "[Location] Junk Removal")
- [ ] Subheadline (neighborhood range, positioning, features)
- [ ] 3 trust signals for bottom line

---

### **SECTION 6: MAIN CONTENT AREA - 2-COLUMN GRID**

```tsx
<section className="py-12 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-8">

        {/* LEFT COLUMN - Main Content (lg:col-span-2) */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-8">
            {/* All main content sections go here */}
          </div>
        </div>

        {/* RIGHT COLUMN - Sidebar (lg:col-span-1) */}
        <div className="lg:col-span-1">
          <LocationSidebarCTA
            locationName="[Location]"
            nearbyLocations={nearbyLocations}
          />
        </div>

      </div>
    </div>
  </div>
</section>
```

**GRID CONFIGURATION:**
- Total grid: `lg:grid-cols-3` (3 columns on large screens)
- Left column: `lg:col-span-2` (takes 2/3 width) - Main content
- Right column: `lg:col-span-1` (takes 1/3 width) - Sticky sidebar

---

### **SECTION 7: SIDEBAR COMPONENT - LocationSidebarCTA**

**Component:** `<LocationSidebarCTA />` (Reusable, imported from `@/components/LocationSidebarCTA`)

**Props Required:**
```typescript
{
  locationName: string;  // e.g., "El Cajon"
  nearbyLocations: Array<{ name: string; slug: string }>;  // 4 nearby locations
}
```

**Component Contents (STANDARDIZED - DO NOT CUSTOMIZE):**
1. **Main CTA Card** (`lg:sticky lg:top-24`):
   - Header: "GET IMMEDIATE HELP" (gradient blue background)
   - **Call Now Button**: `📞 CALL NOW: (619) 750-0114` (orange, bold)
   - **Get Free Quote Button**: Links to `/contact` (white/outlined)
   - "⚡ Same-Day Service Available" text

2. **"What We Remove" Checklist**:
   - Furniture & Mattresses ✓
   - Appliances & Electronics ✓
   - Estate & Garage Cleanouts ✓
   - Construction Debris ✓
   - Hot Tubs & Large Items ✓

3. **"Nearby Areas We Serve"**:
   - Lists 4 nearby locations passed via props
   - Each links to `/junk-removal-{slug}`
   - "See All Locations Served" button → `/areas-we-serve`

4. **Trust Badge Footer**:
   - "✓ Licensed & Insured • ✓ Eco-Friendly"

5. **Quick Stats Card**:
   - "200+ Happy Customers"
   - "Same-Day Service Available"

**CONTENT TO EXTRACT:**
- [ ] 4 nearby location names and slugs (already collected in Section 3)

---

### **SECTION 8: LEFT COLUMN CONTENT - INTRODUCTION SECTION**

**Location:** Inside left column's white card (`<div className="bg-white rounded-lg shadow-md p-8">`)

```tsx
{/* Introduction */}
<h2 className="text-3xl font-bold mb-6 text-gray-900">
  Professional Junk Removal [Location] – [POSITIONING TAGLINE]
</h2>

<p className="text-lg mb-4 text-gray-700">
  <strong>Junk removal [Location]</strong> serves [AREA DESCRIPTION].
  Our <strong>junk hauling [Location]</strong> team [KEY DIFFERENTIATORS].
  We provide same-day <strong>junk pickup [Location] CA</strong> for [SERVICE TYPES].
</p>

<p className="text-gray-700 mb-6">
  [SECOND PARAGRAPH - Local expertise, unique challenges, specialized experience]
</p>
```

**CONTENT TO EXTRACT:**
- [ ] H2 positioning tagline (e.g., "East County Family Property Specialists")
- [ ] Opening paragraph (2-3 sentences with service overview + keywords)
- [ ] Second paragraph (local expertise and specialization)

---

### **SECTION 9: LEFT COLUMN - NEIGHBORHOODS SERVED**

```tsx
{/* Neighborhoods Served */}
<h3 className="text-2xl font-bold mt-8 mb-4">[Location] Neighborhoods We Serve</h3>
<p className="text-gray-700 mb-4">
  Our <strong>trash removal [Location]</strong> service covers [INTRO PARAGRAPH].
</p>
<div className="grid md:grid-cols-2 gap-4 mb-6">
  <ul className="space-y-2">
    <li><strong>[Neighborhood 1]:</strong> [Description]</li>
    <li><strong>[Neighborhood 2]:</strong> [Description]</li>
    <li><strong>[Neighborhood 3]:</strong> [Description]</li>
    <li><strong>[Neighborhood 4]:</strong> [Description]</li>
  </ul>
  <ul className="space-y-2">
    <li><strong>[Neighborhood 5]:</strong> [Description]</li>
    <li><strong>[Neighborhood 6]:</strong> [Description]</li>
    <li><strong>[Neighborhood 7]:</strong> [Description]</li>
    <li><strong>[Neighborhood 8]:</strong> [Description]</li>
  </ul>
</div>
```

**CONTENT TO EXTRACT:**
- [ ] Intro paragraph describing coverage
- [ ] 8+ neighborhoods with detailed descriptions (1-2 sentences each)
- [ ] Split into 2 columns (4 per side recommended)

---

### **SECTION 10: LEFT COLUMN - KEY STREETS & ACCESS ROUTES**

```tsx
{/* Major Streets */}
<h3 className="text-2xl font-bold mt-8 mb-4">Key Streets & Access Routes</h3>
<p className="text-gray-700 mb-4">
  Our <strong>junk hauling [Location]</strong> team knows [LOCAL EXPERTISE INTRO].
</p>
<ul className="grid md:grid-cols-2 gap-2 mb-6">
  <li>• <strong>[Street 1]:</strong> [Description/Type]</li>
  <li>• <strong>[Street 2]:</strong> [Description/Type]</li>
  <li>• <strong>[Street 3]:</strong> [Description/Type]</li>
  <li>• <strong>[Street 4]:</strong> [Description/Type]</li>
  <li>• <strong>[Street 5]:</strong> [Description/Type]</li>
  <li>• <strong>[Street 6]:</strong> [Description/Type]</li>
  <li>• <strong>[Street 7]:</strong> [Description/Type]</li>
  <li>• <strong>[Street 8]:</strong> [Description/Type]</li>
</ul>
```

**CONTENT TO EXTRACT:**
- [ ] Intro paragraph about local route knowledge
- [ ] 8+ major streets/highways with descriptions
- [ ] Mix of commercial corridors and residential routes

---

### **SECTION 11: LEFT COLUMN - LOCAL LANDMARKS**

```tsx
{/* Local Landmarks */}
<h3 className="text-2xl font-bold mt-8 mb-4">[Location] Landmarks</h3>
<p className="text-gray-700 mb-4">
  We provide <strong>junk pickup [Location] CA</strong> service near all major landmarks.
  [INTRO ABOUT LANDMARKS HELPING NAVIGATION]
</p>
<div className="grid md:grid-cols-2 gap-2 mb-6">
  <ul className="space-y-1">
    <li>• [Landmark 1]—[Type]</li>
    <li>• [Landmark 2]—[Type]</li>
    <li>• [Landmark 3]—[Type]</li>
    <li>• [Landmark 4]—[Type]</li>
    <li>• [Landmark 5]—[Type]</li>
    <li>• [Landmark 6]—[Type]</li>
  </ul>
  <ul className="space-y-1">
    <li>• [Landmark 7]—[Type]</li>
    <li>• [Landmark 8]—[Type]</li>
    <li>• [Landmark 9]—[Type]</li>
    <li>• [Landmark 10]—[Type]</li>
    <li>• [Landmark 11]—[Type]</li>
    <li>• [Landmark 12]—[Type]</li>
  </ul>
</div>
```

**CONTENT TO EXTRACT:**
- [ ] Intro about landmarks for navigation
- [ ] 12+ landmarks (schools, parks, shopping, community centers)
- [ ] Split into 2 columns (6 per side)

---

### **SECTION 12: LEFT COLUMN - TRAFFIC PATTERNS & TIMING**

```tsx
{/* Traffic & Timing */}
<h3 className="text-2xl font-bold mt-8 mb-4">Traffic Patterns & Service Timing</h3>
<p className="text-gray-700 mb-4">
  [Location]'s [TRAFFIC CONTEXT] create specific traffic challenges...
</p>
<ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
  <li><strong>Morning rush hours (X-X AM):</strong> [Description + recommendation]</li>
  <li><strong>Afternoon rush hours (X-X PM):</strong> [Description + scheduling]</li>
  <li><strong>[Location-specific timing consideration]:</strong> [Details]</li>
  <li><strong>Weekend availability:</strong> [Weekend scheduling info]</li>
</ul>
```

**CONTENT TO EXTRACT:**
- [ ] Traffic patterns description
- [ ] 4 timing considerations with recommendations

---

### **SECTION 13: LEFT COLUMN - WEATHER CONSIDERATIONS**

```tsx
{/* Weather */}
<h3 className="text-2xl font-bold mt-8 mb-4">[Area Name] Weather Considerations</h3>
<p className="text-gray-700 mb-6">
  [Full paragraph about climate, seasonal considerations, how weather affects operations]
</p>
```

**CONTENT TO EXTRACT:**
- [ ] 1 comprehensive paragraph about climate/weather impacts

---

### **SECTION 14: LEFT COLUMN - WHAT WE REMOVE**

```tsx
{/* What We Remove */}
<h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in [Location]</h3>
<p className="text-gray-700 mb-4">
  Our <strong>[Location] junk removal</strong> service handles [DESCRIPTION].
</p>
<div className="grid md:grid-cols-2 gap-4 mb-6">
  <div>
    <h4 className="font-bold mb-2">Furniture & Household</h4>
    <ul className="space-y-1 text-gray-700">
      <li>• [Item 1]</li>
      <li>• [Item 2]</li>
      <li>• [Item 3]</li>
      <li>• [Item 4]</li>
    </ul>
  </div>
  <div>
    <h4 className="font-bold mb-2">Appliances & Scrap Metal</h4>
    <ul className="space-y-1 text-gray-700">
      <li>• [Item 1]</li>
      <li>• [Item 2]</li>
      <li>• [Item 3]</li>
      <li>• [Item 4]</li>
    </ul>
  </div>
  <div>
    <h4 className="font-bold mb-2">Garage & Outdoor</h4>
    <ul className="space-y-1 text-gray-700">
      <li>• [Item 1]</li>
      <li>• [Item 2]</li>
      <li>• [Item 3]</li>
      <li>• [Item 4]</li>
    </ul>
  </div>
  <div>
    <h4 className="font-bold mb-2">[Category 4]</h4>
    <ul className="space-y-1 text-gray-700">
      <li>• [Item 1]</li>
      <li>• [Item 2]</li>
      <li>• [Item 3]</li>
      <li>• [Item 4]</li>
    </ul>
  </div>
</div>
```

**CONTENT TO EXTRACT:**
- [ ] 4 categories of items
- [ ] 16 items total (4 per category)
- [ ] Any links to specialty service pages

---

### **SECTION 15: LEFT COLUMN - SPECIALTY SERVICE** (Optional)

```tsx
{/* Specialty Service Section - Only if location has one */}
<h3 className="text-2xl font-bold mt-8 mb-4">[Specialty Service Name]</h3>
<p className="text-gray-700 mb-4">
  [Intro paragraph about specialty service]
</p>
<div className="grid md:grid-cols-2 gap-4 mb-6">
  <div className="bg-gray-50 p-4 rounded-lg">
    <h4 className="font-bold mb-2 text-blue-600">[Sub-category 1]</h4>
    <ul className="list-disc pl-6 space-y-1 text-gray-700">
      <li>[Detail 1]</li>
      <li>[Detail 2]</li>
      <li>[Detail 3]</li>
      <li>[Detail 4]</li>
    </ul>
  </div>
  <div className="bg-gray-50 p-4 rounded-lg">
    <h4 className="font-bold mb-2 text-blue-600">[Sub-category 2]</h4>
    <ul className="list-disc pl-6 space-y-1 text-gray-700">
      <li>[Detail 1]</li>
      <li>[Detail 2]</li>
      <li>[Detail 3]</li>
      <li>[Detail 4]</li>
    </ul>
  </div>
</div>
```

**CONTENT TO EXTRACT:**
- [ ] Does this location have a specialty service? (e.g., Scrap Metal for El Cajon)
- [ ] Specialty service name and description
- [ ] 2 sub-categories with 4 details each

---

### **SECTION 16: LEFT COLUMN - HOW OUR SERVICE WORKS**

```tsx
{/* How Our Service Works */}
<h3 className="text-2xl font-bold mt-8 mb-4">How Our [Location] Junk Removal Service Works</h3>
<div className="bg-blue-50 rounded-lg p-6 mb-6">
  <ol className="space-y-3 text-gray-700">
    <li><strong>1. Contact Us:</strong> [Step description]</li>
    <li><strong>2. Same-Day Scheduling Available:</strong> [Step description]</li>
    <li><strong>3. We Arrive & Assess:</strong> [Step description]</li>
    <li><strong>4. We Load & Haul Everything:</strong> [Step description]</li>
    <li><strong>5. Eco-Friendly Disposal & Recycling:</strong> [Step description]</li>
    <li><strong>6. Clean Sweep & Payment:</strong> [Step description]</li>
  </ol>
</div>
```

**CONTENT TO EXTRACT:**
- [ ] 6 step descriptions (usually standardized with minor location tweaks)

---

### **SECTION 17: LEFT COLUMN - WHY CHOOSE US**

```tsx
{/* Why Choose Us */}
<h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Cleaners for [Location] Junk Removal</h3>
<ul className="space-y-3 mb-6">
  <li className="flex items-start">
    <span className="text-green-500 text-xl mr-3">✓</span>
    <span><strong>[Benefit 1 Title]:</strong> [Description]</span>
  </li>
  <li className="flex items-start">
    <span className="text-green-500 text-xl mr-3">✓</span>
    <span><strong>[Benefit 2 Title]:</strong> [Description]</span>
  </li>
  <li className="flex items-start">
    <span className="text-green-500 text-xl mr-3">✓</span>
    <span><strong>[Benefit 3 Title]:</strong> [Description]</span>
  </li>
  <li className="flex items-start">
    <span className="text-green-500 text-xl mr-3">✓</span>
    <span><strong>[Benefit 4 Title]:</strong> [Description]</span>
  </li>
</ul>
```

**CONTENT TO EXTRACT:**
- [ ] 4 location-specific benefits with detailed descriptions
- [ ] Each should address unique local challenges/expertise

**NOTE:** This closes the `</div>` for the left column white card and `</div>` for lg:col-span-2

---

### **SECTION 18: PRICING COMPONENT - LocationPricingSection**

**Component:** `<LocationPricingSection />` (Reusable, imported from `@/components/LocationPricingSection`)

**Location:** After main content grid closes, outside the 2-column layout

**Props Required:**
```typescript
{
  locationName: string;  // e.g., "El Cajon"
  contextParagraph?: string;  // Optional custom pricing context
}
```

**Usage Example:**
```tsx
<LocationPricingSection
  locationName="El Cajon"
  contextParagraph="Estate cleanouts and family property projects throughout El Cajon—from Fletcher Hills to Rancho San Diego—all use the same transparent pricing. No hidden fees, same-day service available."
/>
```

**Component Contents (STANDARDIZED - DO NOT CUSTOMIZE):**
1. **Section Header**:
   - H2: "Transparent {locationName} Junk Removal Pricing"
   - Context paragraph (custom or default)

2. **4 Gradient Pricing Cards**:
   - **Single Item** - $100 (blue gradient)
   - **1/4 Load (3 cu yd)** - $249 (green gradient)
   - **1/2 Load (6 cu yd)** - $349 (orange gradient)
   - **Full Load (12 cu yd)** - $495 (purple gradient)

3. **Additional Load Sizes** (gray box):
   - 3/8 Load - $319
   - 5/8 Load - $366
   - 3/4 Load - $429
   - 7/8 Load - $462

4. **What's Included** (blue box with checkmarks):
   - All labor and loading
   - Transportation and hauling
   - Eco-friendly disposal fees
   - Donation coordination
   - Recycling services
   - Same-day service available

5. **CTA + Link**:
   - Orange button: "Get Your Free {locationName} Quote - Call (619) 750-0114"
   - Link to `/junk-removal-cost-san-diego` for complete pricing guide

**CONTENT TO EXTRACT:**
- [ ] Custom contextParagraph (optional - mentions local neighborhoods/areas)

---

### **SECTION 19: TRUST SIGNALS COMPONENT - TrustSignalsSection**

**Component:** `<TrustSignalsSection />` (Reusable, imported from `@/components/TrustSignalsSection`)

**Props Required:**
```typescript
{
  locationName: string;  // e.g., "El Cajon"
  coverageArea?: string;  // Optional, defaults to "San Diego County"
}
```

**Usage Example:**
```tsx
<TrustSignalsSection locationName="El Cajon" />
```

**Component Contents (STANDARDIZED - DO NOT CUSTOMIZE):**
- H2: "Trusted {locationName} Junk Removal Service"
- **4-stat grid** with colored circle icons:
  1. **200+** Customers Served (blue icon)
  2. **Licensed** & Insured (green shield icon)
  3. **Same-Day** Service Available (orange clock icon)
  4. **All of** {coverageArea} (purple location icon)

**CONTENT TO EXTRACT:**
- [ ] Optional coverageArea override (e.g., "East County", "North County", etc.)

---

### **SECTION 20: FAQ COMPONENT**

**Component:** `<[Location]FAQSection />` (Custom per location, local import)

**File Location:** `./[Location]FAQSection.tsx` (in same directory as page.tsx)

**Usage Example:**
```tsx
import PacificBeachFAQSection from "./PacificBeachFAQSection";

// In page:
<PacificBeachFAQSection />
```

**Component Structure:**

```tsx
'use client';

import { useState } from 'react';

export default function [Location]FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* FAQ HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions - [Location] Junk Removal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our <strong>[Location] junk removal</strong> services,
            [location-specific context].
          </p>
        </div>

        {/* FAQ ACCORDION ITEMS */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {/* FAQ ITEM 1-8 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 0 ? null : 0)}
              >
                <h3 className="font-bold text-gray-900 text-lg">[Question Text]</h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFAQ === 0 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {openFAQ === 0 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">
                    [Answer text with location-specific details]
                  </p>
                </div>
              )}
            </div>
            {/* Repeat for 6-8 total FAQ items */}
          </div>
        </div>

        {/* CTA BOX - "Ready for Same-Day..." */}
        <div className="bg-blue-50 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready for Same-Day Junk Removal in [Location]?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Whether you're [local scenario 1], [local scenario 2], or [local scenario 3], we're your local <strong>[Location] junk removal</strong> experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16197500114"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              📞 Call (619) 750-0114 – [Location Abbrev] Service
            </a>
            <a
              href="/contact"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Section Styling Reference:**

| Element | Classes |
|---------|---------|
| **Outer Section** | `py-16 bg-white` |
| **FAQ Header H2** | `text-4xl font-bold text-gray-900 mb-4` |
| **FAQ Intro Text** | `text-xl text-gray-600 max-w-3xl mx-auto` |
| **FAQ Container** | `max-w-4xl mx-auto` |
| **FAQ Items Wrapper** | `space-y-4` |
| **FAQ Item Border** | `border border-gray-200 rounded-xl overflow-hidden` |
| **FAQ Button** | `w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between` |
| **FAQ Question** | `font-bold text-gray-900 text-lg` |
| **FAQ Answer Container** | `px-6 py-4 bg-white` |
| **FAQ Answer Text** | `text-gray-700 leading-relaxed` |
| **CTA Box** | `bg-blue-50 rounded-xl p-8 mt-12 text-center` |
| **CTA H3** | `text-2xl font-bold text-gray-900 mb-4` |
| **CTA Paragraph** | `text-gray-700 mb-6 max-w-2xl mx-auto` |
| **CTA Buttons Container** | `flex flex-col sm:flex-row gap-4 justify-center` |
| **Call Button** | `bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors` |
| **Quote Button** | `bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors` |

**Content Structure for CTA Box:**

1. **H3 Heading Pattern:**
   - Format: "Ready for Same-Day Junk Removal in [Location]?"
   - Always includes "Same-Day" and location name
   - Ends with question mark

2. **Paragraph Pattern:**
   - Starts with "Whether you're..."
   - Lists 3 local scenarios specific to the location
   - Examples from Pacific Beach:
     - "managing a vacation rental on Ocean Front Walk"
     - "clearing out a beach cottage near Crystal Pier"
     - "handling a student move-out on Garnet Avenue"
   - Ends with "we're your local **[Location] junk removal** experts."

3. **Button Configuration:**
   - **Left button (dark blue):**
     - Icon: 📞
     - Text: "Call (619) 750-0114 – [Abbrev] Service"
     - Abbreviation examples: "PB Service", "El Cajon Service", etc.
     - Link: `tel:+16197500114`
   - **Right button (white/outlined):**
     - Text: "Get Free Quote" (standardized)
     - Link: `/contact`

**CONTENT TO EXTRACT:**

- [ ] FAQ section heading intro paragraph
- [ ] 6-8 FAQ questions (location-specific)
- [ ] 6-8 FAQ answers (with local details, keywords, pricing if applicable)
- [ ] CTA box paragraph with 3 local scenarios
- [ ] Location abbreviation for phone button (e.g., "PB", "El Cajon", "La Jolla")

**NOTE:** FAQ accordion uses React useState hook. Each FAQ item has unique index for open/close state management.

---

### **SECTION 21: RELATED SERVICES**

**Location:** After FAQ, before Footer

```tsx
<section className="py-12 bg-gray-50">
  <div className="container mx-auto px-4">
    <h3 className="text-2xl font-bold text-center mb-8">Related [Area] Services</h3>
    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {/* SERVICE CARD 1 */}
      <a href="[SERVICE_URL_1]" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
        <h4 className="font-semibold text-lg mb-2 text-blue-600">[Service 1 Title]</h4>
        <p className="text-gray-600">[Service 1 Description]</p>
      </a>

      {/* SERVICE CARD 2 */}
      <a href="[SERVICE_URL_2]" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
        <h4 className="font-semibold text-lg mb-2 text-blue-600">[Service 2 Title]</h4>
        <p className="text-gray-600">[Service 2 Description]</p>
      </a>

      {/* SERVICE CARD 3 */}
      <a href="[SERVICE_URL_3]" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
        <h4 className="font-semibold text-lg mb-2 text-blue-600">[Service 3 Title]</h4>
        <p className="text-gray-600">[Service 3 Description]</p>
      </a>
    </div>
  </div>
</section>
```

**Styling (STANDARDIZED):**
- Card styling: `bg-white rounded-lg shadow hover:shadow-lg transition-shadow`
- 3-column grid on desktop
- Blue text for titles, gray for descriptions

**CONTENT TO EXTRACT:**
- [ ] Section heading (e.g., "Related East County Services")
- [ ] 3 related service URLs
- [ ] 3 related service titles
- [ ] 3 related service descriptions (1-2 sentences each)

---

## 📊 **COMPLETE CONTENT EXTRACTION CHECKLIST**

Use this master checklist when migrating an existing location page:

### **Metadata & Setup:**
- [ ] Page title
- [ ] Meta description
- [ ] Keywords
- [ ] OpenGraph tags
- [ ] Service schema description
- [ ] 4 nearby locations (name + slug)

### **Hero Section:**
- [ ] Badge text
- [ ] H1 headline
- [ ] Subheadline with neighborhoods
- [ ] 3 trust signals

### **Introduction:**
- [ ] H2 positioning tagline
- [ ] 2 opening paragraphs

### **Local Coverage:**
- [ ] 8+ neighborhoods with descriptions
- [ ] 8+ major streets with descriptions
- [ ] 12+ local landmarks

### **Operational Details:**
- [ ] Traffic patterns paragraph + 4 timing points
- [ ] Weather considerations paragraph

### **Services:**
- [ ] "What We Remove" intro + 16 items in 4 categories
- [ ] Specialty service section (if applicable)
- [ ] 6 "How It Works" steps
- [ ] 4 "Why Choose Us" benefits

### **Components:**
- [ ] Pricing context paragraph (optional)
- [ ] Coverage area override (optional)
- [ ] FAQ component created with:
  - [ ] FAQ intro paragraph
  - [ ] 6-8 FAQ Q&As
  - [ ] CTA box paragraph (3 local scenarios)
  - [ ] Location abbreviation for phone button

### **Related Services:**
- [ ] 3 service titles, URLs, and descriptions

---

## 🔄 **MIGRATION PROCESS**

### **Step 1: Content Extraction**
1. Open existing location page
2. Fill out complete content extraction checklist above
3. Copy all content into organized document

### **Step 2: File Setup**
1. Create new page.tsx file in correct directory
2. Copy imports from Section 1
3. Set up metadata from Section 2
4. Create FAQ component file

### **Step 3: Build Page Structure**
1. Copy complete page structure (Sections 3-4)
2. Add hero section (Section 5)
3. Set up 2-column grid (Section 6)
4. Add sidebar component (Section 7)

### **Step 4: Populate Left Column**
1. Add all 10 left column sections (Sections 8-17)
2. Replace all `[PLACEHOLDER]` text with extracted content
3. Ensure all keywords are bolded properly

### **Step 5: Add Components**
1. Add LocationPricingSection (Section 18)
2. Add TrustSignalsSection (Section 19)
3. Add FAQ component (Section 20)
4. Add Related Services (Section 21)

### **Step 6: Review**
1. Verify all placeholders replaced
2. Check all links work
3. Ensure nearby locations array populated
4. Confirm schema URLs correct

---

## ✅ **QUALITY CHECKLIST**

Before marking a page "complete":

- [ ] All 21 sections present and populated
- [ ] No `[PLACEHOLDER]` text remaining
- [ ] 8+ neighborhoods with descriptions
- [ ] 8+ streets with descriptions
- [ ] 12+ landmarks listed
- [ ] Traffic, weather sections complete
- [ ] "What We Remove" has 16 items
- [ ] "Why Choose Us" has 4 benefits
- [ ] Pricing context customized
- [ ] 4 nearby locations configured
- [ ] FAQ component created and imported
- [ ] 3 related services linked
- [ ] All keywords properly bolded
- [ ] Schema URLs correct
- [ ] Metadata complete

---

## 📝 **COMPONENT PROP REFERENCE**

Quick reference for all component props:

```typescript
// LocationSidebarCTA
<LocationSidebarCTA
  locationName="El Cajon"
  nearbyLocations={[
    { name: "La Mesa", slug: "la-mesa" },
    { name: "Santee", slug: "santee" },
    { name: "Lakeside", slug: "lakeside" },
    { name: "Spring Valley", slug: "spring-valley" },
  ]}
/>

// LocationPricingSection
<LocationPricingSection
  locationName="El Cajon"
  contextParagraph="Optional custom pricing context..."
/>

// TrustSignalsSection
<TrustSignalsSection
  locationName="El Cajon"
  coverageArea="East County"  // Optional, defaults to "San Diego County"
/>
```

---

**Blueprint Complete!** This document now represents the complete, accurate configuration for all location pages.
