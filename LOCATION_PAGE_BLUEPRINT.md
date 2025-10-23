# Location Page Blueprint Template
## Severin Cleaners - Standardized Location Page Structure

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
```

---

## 🏗️ **SECTION-BY-SECTION BLUEPRINT**

---

### **SECTION 1: METADATA & SCHEMA**

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

### **SECTION 2: HERO SECTION**

```tsx
<section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
  <div className="container mx-auto px-4">
    <div className="text-center mb-8">
      {/* BADGE */}
      <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
        ✓ [LOCAL UNIQUE BADGE TEXT]
      </div>

      {/* H1 HEADLINE */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Junk Removal [LOCATION] | [POSITIONING]
      </h1>

      {/* H2 SUBHEADLINE */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
        [DESCRIPTIVE SUBHEADLINE WITH LOCAL CONTEXT]
      </h2>

      {/* TRUST SIGNALS */}
      <div className="text-xl mb-6">
        ⭐⭐⭐⭐⭐ 5.0 Rating • [TRUST SIGNAL] • [TRUST SIGNAL]
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
        <a href="tel:6197500114" className="btn btn-primary text-lg px-8 py-4">
          📞 Call (619) 750-0114
        </a>
        <a href="/contact" className="btn btn-secondary text-lg px-8 py-4">
          [CTA TEXT WITH 15% OFF]
        </a>
      </div>

      {/* BOTTOM TRUST LINE */}
      <p className="text-lg">
        ✓ Same-Day Service Available ✓ Licensed & Insured ✓ [LOCAL SPECIALIST]
      </p>
    </div>
  </div>
</section>
```

**CONTENT TO EXTRACT FROM EXISTING PAGE:**
- [ ] Badge text (local community descriptor)
- [ ] Main positioning (luxury, family, beach, etc.)
- [ ] Subheadline
- [ ] Trust signals (2-3)
- [ ] CTA button text
- [ ] Bottom trust line elements

---

### **SECTION 3: PRICING SECTION** (Condensed - Option A)

```tsx
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Transparent [LOCATION] Junk Removal Pricing
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          [LOCAL PRICING CONTEXT - mention neighborhoods served]
        </p>
      </div>

      <div className="mb-12">
        {/* 4 GRADIENT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Card 1: Single Item - $100 */}
          {/* Card 2: 1/4 Load - $249 */}
          {/* Card 3: 1/2 Load - $349 */}
          {/* Card 4: Full Load - $495 */}
        </div>

        {/* ADDITIONAL SIZES */}
        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <h3>Additional Load Sizes Available</h3>
          {/* 3/8: $319, 5/8: $366, 3/4: $429, 7/8: $462 */}
        </div>

        {/* WHAT'S INCLUDED */}
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3>What's Included in Every Price:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* 6 checkmark items */}
          </ul>
        </div>
      </div>

      {/* CTA + LINK TO FULL PRICING */}
      <div className="text-center">
        <a href="tel:6197500114" className="btn btn-primary">
          📞 Get Your Free [LOCATION] Quote
        </a>
        <p className="mt-4">
          <a href="/junk-removal-cost-san-diego">
            → See Complete Pricing Guide & All Load Sizes
          </a>
        </p>
      </div>
    </div>
  </div>
</section>
```

**CONTENT TO EXTRACT:**
- [ ] Local pricing context paragraph (mentions neighborhoods)
- [ ] Any pricing variations or notes

---

### **SECTION 4: INTRODUCTION PARAGRAPHS** (2-4 paragraphs)

```tsx
<section className="py-16">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <div className="prose prose-lg max-w-none">
        <h2>[LOCATION]'s Premier Junk Removal Service</h2>

        {/* PARAGRAPH 1: Service overview + key neighborhoods */}
        <p>
          [Opening sentence about service]. We serve [3-5 KEY NEIGHBORHOODS].
          [Service features: same-day, professional, etc.]
        </p>

        {/* PARAGRAPH 2: Trust & local expertise */}
        <p>
          [Local ownership/expertise angle]. [Types of properties served].
          [Service quality statements].
        </p>

        {/* PARAGRAPH 3: Community values (optional) */}
        <p>
          [Community-specific messaging]. [Service approach].
        </p>

        {/* OPTIONAL: Image float-right here */}
      </div>
    </div>
  </div>
</section>
```

**CONTENT TO EXTRACT:**
- [ ] Opening introduction (2-4 paragraphs)
- [ ] Key neighborhoods mentioned
- [ ] Local expertise points
- [ ] Community values messaging
- [ ] Image (if exists) - note placement

---

### **SECTION 5: COMPLETE NEIGHBORHOOD COVERAGE**

```tsx
<div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
  <h3>[LOCATION] Neighborhoods We Serve</h3>

  <div className="grid md:grid-cols-2 gap-8 mb-8">
    {/* COLUMN 1: North/West Areas */}
    <div>
      <h3 className="text-xl font-bold mb-3 text-blue-600">
        [GEOGRAPHIC SECTION 1 NAME]
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li><strong>[Neighborhood 1]</strong> - [Description]</li>
        <li><strong>[Neighborhood 2]</strong> - [Description]</li>
        <li><strong>[Neighborhood 3]</strong> - [Description]</li>
        {/* 5-8 neighborhoods per column */}
      </ul>
    </div>

    {/* COLUMN 2: South/East Areas */}
    <div>
      <h3 className="text-xl font-bold mb-3 text-blue-600">
        [GEOGRAPHIC SECTION 2 NAME]
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li><strong>[Neighborhood 4]</strong> - [Description]</li>
        <li><strong>[Neighborhood 5]</strong> - [Description]</li>
        <li><strong>[Neighborhood 6]</strong> - [Description]</li>
        {/* 5-8 neighborhoods per column */}
      </ul>
    </div>
  </div>

  <div className="mt-4 text-center">
    <p>📞 Call (619) 750-0114 for immediate service</p>
  </div>
</div>
```

**CONTENT TO EXTRACT:**
- [ ] All neighborhoods mentioned (aim for 10-15+)
- [ ] Neighborhood descriptions (1-2 sentences each)
- [ ] Geographic grouping logic (North/South, East/West, etc.)

---

### **SECTION 6: STREETS & ROUTES COVERAGE**

```tsx
<h2>Major Routes & Streets We Cover</h2>

<div className="grid md:grid-cols-2 gap-8 mb-8">
  {/* COLUMN 1: Major Corridors */}
  <div>
    <h3 className="text-xl font-bold mb-3 text-blue-600">Major Streets & Corridors</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>[Street Name] - [Description/Type]</li>
      <li>[Highway/Freeway] - [Access point]</li>
      {/* 5-8 major routes */}
    </ul>
  </div>

  {/* COLUMN 2: Residential Streets */}
  <div>
    <h3 className="text-xl font-bold mb-3 text-blue-600">Key Residential Streets</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>[Street Name] - [Neighborhood context]</li>
      <li>[Street Name] - [Property type]</li>
      {/* 8-12 streets */}
    </ul>
  </div>
</div>
```

**CONTENT TO EXTRACT:**
- [ ] Major highways/corridors (5-8)
- [ ] Key residential streets (8-12)
- [ ] Street descriptions/context

---

### **SECTION 7: LOCAL LANDMARKS & REFERENCE POINTS**

```tsx
<h3>Local Landmarks & Reference Points</h3>
<p>[INTRO TEXT]</p>

<ul className="list-disc pl-6 mb-6">
  <li><strong>[Landmark 1]</strong> - [Type/Description]</li>
  <li><strong>[Landmark 2]</strong> - [Type/Description]</li>
  <li><strong>[Landmark 3]</strong> - [Type/Description]</li>
  {/* 8-12 landmarks */}
</ul>
```

**CONTENT TO EXTRACT:**
- [ ] Schools (elementary, high schools)
- [ ] Shopping centers/malls
- [ ] Parks & recreation centers
- [ ] Major employers/institutions
- [ ] Community landmarks (8-12 total)

---

### **SECTION 8: WHY [LOCATION] RESIDENTS CHOOSE US**

```tsx
<h2>Why [LOCATION] Residents Choose Us</h2>

{/* 4-6 PARAGRAPHS covering: */}
<p>[TERRAIN/GEOGRAPHY CHALLENGES specific to location]</p>
<p>[ACCESS/PARKING/HOA CHALLENGES specific to location]</p>
<p>[PROPERTY TYPES/DEMOGRAPHICS specific to location]</p>
<p>[WEATHER/CLIMATE considerations specific to location]</p>
<p>[ROUTING/TRAFFIC/LOGISTICS specific to location]</p>
```

**CONTENT TO EXTRACT:**
- [ ] Geographic/terrain challenges
- [ ] HOA/community requirements
- [ ] Property type considerations
- [ ] Weather/seasonal factors
- [ ] Traffic/routing expertise
- [ ] Any unique local factors

---

### **SECTION 9: SPECIALTY SERVICES** (If applicable)

```tsx
<h2>[SPECIALTY SERVICE HEADLINE]</h2>

{/* EXAMPLES: */}
{/* - Scrap Metal Removal (El Cajon) */}
{/* - Luxury Estate Cleanouts (La Jolla, Rancho Santa Fe) */}
{/* - Vacation Rental Turnovers (Pacific Beach) */}
{/* - Equestrian Properties (Rancho Santa Fe) */}

<div className="bg-gray-50 p-6 rounded-lg mb-8">
  <h4>[Specialty Service 1]</h4>
  <p>[Description]</p>
  <ul className="list-disc pl-6 space-y-2">
    <li>[Detail 1]</li>
    <li>[Detail 2]</li>
  </ul>
</div>
```

**CONTENT TO EXTRACT:**
- [ ] Does location have specialty service angle?
- [ ] Specialty service name/type
- [ ] Service description
- [ ] Key features/details
- [ ] Pricing considerations

---

### **SECTION 10: STICKY CTA BAR** (Mid-page)

```tsx
<div className="sticky top-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg shadow-lg mb-8 z-10">
  <div className="flex items-center justify-between gap-4">
    <div>
      <p className="font-semibold">[CTA HEADLINE]</p>
      <p className="text-sm opacity-90">[TRUST SIGNALS]</p>
    </div>
    <a href="tel:6197500114" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold">
      📞 Call Now
    </a>
  </div>
</div>
```

**CONTENT TO EXTRACT:**
- [ ] CTA headline
- [ ] Trust signals for sticky bar

---

### **SECTION 11: SERVICES WE PROVIDE**

```tsx
<h2>Services We Provide in [LOCATION]</h2>

<div className="grid md:grid-cols-2 gap-6 mb-8">
  <div>
    <h4 className="text-xl font-bold mb-3 text-blue-600">[Category 1]</h4>
    <ul className="list-disc pl-6 space-y-1 text-gray-700">
      <li>[Service 1]</li>
      <li>[Service 2]</li>
      {/* 4-6 services */}
    </ul>
  </div>

  <div>
    <h4 className="text-xl font-bold mb-3 text-blue-600">[Category 2]</h4>
    <ul className="list-disc pl-6 space-y-1 text-gray-700">
      <li>[Service 3]</li>
      <li>[Service 4]</li>
      {/* 4-6 services */}
    </ul>
  </div>
</div>
```

**CONTENT TO EXTRACT:**
- [ ] Service categories (usually 2: Residential, Commercial/Specialized)
- [ ] List of 8-12 services
- [ ] Any location-specific services

---

### **SECTION 12: TESTIMONIAL** (If available)

```tsx
<h3>Customer Testimonial: [Neighborhood]</h3>
<div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
  <div className="flex items-center mb-2">
    <div className="text-yellow-500 text-lg mr-2">⭐⭐⭐⭐⭐</div>
    <p className="font-bold text-gray-900">[Customer Name]</p>
  </div>
  <p className="text-gray-700 italic mb-2">
    "[TESTIMONIAL TEXT]"
  </p>
  <p className="text-sm text-gray-600">
    <strong>Location:</strong> [Neighborhood] • <strong>Service:</strong> [Service Type]
  </p>
</div>
```

**CONTENT TO EXTRACT:**
- [ ] Customer name
- [ ] Testimonial quote
- [ ] Neighborhood/location
- [ ] Service provided

---

### **SECTION 13: FINAL CTA SECTION**

```tsx
<div className="text-center bg-blue-900 text-white p-8 rounded-lg">
  <h3>Get [LOCATION] Junk Removal Quote Today</h3>
  <p>[CLOSING PARAGRAPH with local context]</p>

  <a href="tel:6197500114" className="btn btn-primary">
    📞 Call (619) 750-0114 Now
  </a>

  <div className="bg-blue-800 rounded-lg p-4">
    <p className="text-yellow-300 font-semibold mb-2">⭐ [LOCATION] Special ⭐</p>
    <div className="text-sm">
      <strong>15% Off [LOCATION] Bookings</strong> • <strong>[SPECIAL FEATURE]</strong>
    </div>
  </div>

  <p className="text-sm mt-4">
    [TRUST SIGNALS LINE]
  </p>
</div>
```

**CONTENT TO EXTRACT:**
- [ ] Final CTA headline
- [ ] Closing paragraph
- [ ] Special offer text
- [ ] Trust signals

---

### **SECTION 14: FAQ SECTION**

```tsx
<LocationFAQSection />
```

**CONTENT TO EXTRACT:**
- [ ] Note: FAQ component already exists - just import it

---

### **SECTION 15: TRUST SIGNALS SECTION** (Standardized)

```tsx
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        Trusted [LOCATION] Junk Removal Service
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* STAT 1: Customers Served */}
        <div className="text-center">
          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">200+</h3>
          <p className="text-gray-600 font-semibold">Customers Served</p>
        </div>

        {/* STAT 2: Licensed & Insured */}
        <div className="text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Licensed</h3>
          <p className="text-gray-600 font-semibold">& Insured</p>
        </div>

        {/* STAT 3: Same-Day Service */}
        <div className="text-center">
          <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Same-Day</h3>
          <p className="text-gray-600 font-semibold">Service Available</p>
        </div>

        {/* STAT 4: Coverage Area */}
        <div className="text-center">
          <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">All of</h3>
          <p className="text-gray-600 font-semibold">[COVERAGE AREA]</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

**CONTENT TO CUSTOMIZE:**
- [ ] Location name in heading
- [ ] Coverage area text (last stat): "San Diego County", "East County", "[Location] Area", etc.

**NOTE:** This section is **standardized across all pages** - only the location name and coverage area text change

---

### **SECTION 16: RELATED SERVICES**

```tsx
<section className="py-12 bg-white">
  <div className="container mx-auto px-4">
    <h3 className="text-2xl font-bold text-center mb-8">Related [LOCATION/TYPE] Services</h3>
    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {/* SERVICE CARD 1 */}
      <a href="[SERVICE_URL_1]" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
        <h4 className="font-semibold text-lg mb-2 text-blue-600">[Service 1 Title]</h4>
        <p className="text-gray-600">[Service 1 Description]</p>
      </a>

      {/* SERVICE CARD 2 */}
      <a href="[SERVICE_URL_2]" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
        <h4 className="font-semibold text-lg mb-2 text-blue-600">[Service 2 Title]</h4>
        <p className="text-gray-600">[Service 2 Description]</p>
      </a>

      {/* SERVICE CARD 3 */}
      <a href="[SERVICE_URL_3]" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
        <h4 className="font-semibold text-lg mb-2 text-blue-600">[Service 3 Title]</h4>
        <p className="text-gray-600">[Service 3 Description]</p>
      </a>
    </div>
  </div>
</section>
```

**CONTENT TO EXTRACT:**
- [ ] 3 related service URLs
- [ ] 3 related service titles
- [ ] 3 related service descriptions

**NOTE:** Card styling is **standardized** - `bg-gray-50 rounded-lg shadow hover:shadow-lg`

---

## 📊 **CONTENT EXTRACTION CHECKLIST**

For each existing location page, extract:

### **Hero/Header Content:**
- [ ] Badge text
- [ ] H1 title
- [ ] H2 subtitle
- [ ] Trust signals
- [ ] CTA button text

### **Local Information:**
- [ ] 10-15+ neighborhood names + descriptions
- [ ] 5-8 major streets/highways
- [ ] 8-12 residential streets
- [ ] 8-12 local landmarks
- [ ] Geographic grouping logic

### **Why Choose Us:**
- [ ] Terrain/geography challenges
- [ ] HOA/access requirements
- [ ] Property type considerations
- [ ] Weather/climate factors
- [ ] Traffic/routing expertise

### **Services:**
- [ ] Service categories (2)
- [ ] 8-12 specific services
- [ ] Specialty services (if any)

### **Other Content:**
- [ ] Introduction paragraphs (2-4)
- [ ] Pricing context paragraph
- [ ] Testimonial (if exists)
- [ ] Final CTA messaging
- [ ] Related services (3)

---

## 🔄 **MIGRATION PROCESS**

### **Step 1: Content Extraction**
1. Open existing location page
2. Fill out content extraction checklist
3. Copy content into organized notes/spreadsheet

### **Step 2: Categorization**
1. Identify location positioning (luxury/family/beach/urban)
2. Determine specialty services angle
3. Note unique local challenges

### **Step 3: Template Population**
1. Copy blueprint template
2. Replace all `[PLACEHOLDER]` markers with extracted content
3. Maintain exact formatting/structure

### **Step 4: Review & Enhance**
1. Fill any gaps (missing neighborhoods, streets, etc.)
2. Ensure 10-15+ neighborhoods listed
3. Verify all sections present
4. Add local landmarks if missing

---

## 🎯 **POSITIONING GUIDE**

Match location to positioning category:

| Category | Locations | Key Angles |
|----------|-----------|------------|
| **Luxury** | La Jolla, Rancho Santa Fe, Del Mar | White-glove, estate, discretion |
| **Family** | El Cajon, Clairemont, Santee | Multi-generational, community, respectful |
| **Beach** | Pacific Beach, Ocean Beach | Vacation rental, salt damage, turnover speed |
| **Master-Planned** | Carmel Valley, 4S Ranch | HOA-compliant, gated access, organized |
| **Urban** | Hillcrest, North Park | Quick/efficient, parking, multi-story |
| **North County** | Escondido, Oceanside, Vista | Regional, agricultural, large lots |

---

## ✅ **QUALITY CHECKLIST**

Before marking a page "complete":

- [ ] All 15 sections present
- [ ] 10-15+ neighborhoods mentioned
- [ ] 5-8 major streets listed
- [ ] 8-12 local landmarks included
- [ ] Pricing section included (condensed)
- [ ] Specialty service angle (if applicable)
- [ ] "Why Choose Us" has local specifics
- [ ] FAQ component imported
- [ ] Related services (3) linked
- [ ] Metadata complete
- [ ] Schema markup included

---

## 📝 **NEXT STEPS**

1. **Review this blueprint** - make sure it captures everything
2. **Extract content from El Cajon page** (reference model)
3. **Create first migrated page** using template
4. **Refine template** based on learnings
5. **Batch migrate remaining pages**

---

**Ready to start migration?** Let me know and I'll help extract content from the first page!
