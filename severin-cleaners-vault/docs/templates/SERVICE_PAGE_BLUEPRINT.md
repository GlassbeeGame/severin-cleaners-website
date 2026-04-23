# Service Page Blueprint Template
## Severin Cleaners - Complete Service Page Configuration

---

## 📋 **PAGE ARCHITECTURE OVERVIEW**

Every service page follows this exact structure (SAME as location pages):

### **Visual Page Flow:**

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (Component)                                          │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│ HERO SECTION (Blue gradient, H1, subheadline)              │
└─────────────────────────────────────────────────────────────┘
┌──────────────────────────────────┬──────────────────────────┐
│ LEFT COLUMN (2/3 width)          │ RIGHT COLUMN (1/3 width) │
│ ┌──────────────────────────────┐ │ ┌──────────────────────┐ │
│ │ White Content Box            │ │ │ SIDEBAR (Sticky)     │ │
│ │ • Introduction (2-3 ¶s)      │ │ │ • Call CTA           │ │
│ │ • What We Remove (grid)      │ │ │ • Get Quote CTA      │ │
│ │ • Service Details            │ │ │ • What We Remove     │ │
│ │ • How It Works (3 steps)     │ │ │ • Related Services   │ │
│ │ • Why Choose Us              │ │ │ • Trust Badges       │ │
│ │ • Service Areas (list)       │ │ │ • Quick Stats        │ │
│ │ • Additional subsections     │ │ └──────────────────────┘ │
│ └──────────────────────────────┘ │                          │
└──────────────────────────────────┴──────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│ PRICING SECTION (Component - ServicePricingSection)         │
│ 4 gradient cards + additional sizes + what's included      │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│ TRUST SIGNALS (Component - TrustSignalsSection)            │
│ 4-stat grid with icons                                      │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│ FAQ SECTION (Custom Component per service)                 │
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

### **Key Similarities to Location Pages:**

| Feature | Location Pages | Service Pages |
|---------|----------------|---------------|
| **Layout** | 2-column grid (content + sidebar) | 2-column grid (content + sidebar) ✓ |
| **Sidebar** | `<LocationSidebarCTA />` | `<ServiceSidebarCTA />` (same structure) |
| **Content Box** | White rounded box `bg-white rounded-lg shadow-md p-8` | White rounded box `bg-white rounded-lg shadow-md p-8` ✓ |
| **Pricing** | `<LocationPricingSection />` component | `<ServicePricingSection />` component |
| **Trust Signals** | `<TrustSignalsSection />` component | `<TrustSignalsSection />` component ✓ |
| **FAQ** | Custom per location with CTA box | Custom per service with CTA box ✓ |
| **Related Cards** | 3 related service cards | 3 related service cards ✓ |
| **Grid Layout** | `lg:grid-cols-3` (2:1 ratio) | `lg:grid-cols-3` (2:1 ratio) ✓ |

### **Key Differences:**

| Element | Location Pages | Service Pages |
|---------|----------------|---------------|
| **Content Focus** | Geographic (neighborhoods, streets, landmarks) | Service-specific (what we remove, how it works, benefits) |
| **Sidebar List** | Nearby location links | Related service links |
| **H2 Intro Pattern** | "[Location]'s Premier Junk Removal Service" | "Professional [Service Name] San Diego – [Benefit]" |
| **Keywords** | Location-focused bolding | Service-focused bolding |

---

## 📋 **CONTENT COLLECTION WORKSHEET**

Before coding, fill out this worksheet for each service:

### **BASIC INFO**
```
Service Name: _______________
Service Category: _______________ (furniture, appliances, specialty, cleanout, etc.)
Primary Keywords: _______________
Target Audience: _______________ (homeowners, businesses, property managers, etc.)
Unique Selling Point: _______________ (same-day, specialty equipment, licensed, etc.)
Related Services (4 for sidebar): _______________
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
import [Service]FAQSection from "./[Service]FAQSection"; // Custom per service
import ServiceSidebarCTA from "@/components/ServiceSidebarCTA"; // Reusable
import TrustSignalsSection from "@/components/TrustSignalsSection"; // Reusable
import ServicePricingSection from "@/components/ServicePricingSection"; // Reusable
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
```

**NOTE:** Same component structure as location pages with service-specific variants.

---

### **SECTION 2: METADATA**

```typescript
export const metadata: Metadata = {
  title: '[Service Name] San Diego | [Key Benefit] | Severin Cleaners',
  description: 'Professional [service] in San Diego. [Key features]. Same-day service available. Call (619) 750-0114. Starting at $100.',
  keywords: '[service] San Diego, [service variant] San Diego, [related service], San Diego [service] cost',
  openGraph: {
    title: '[Service Name] San Diego | [Key Benefit] | Severin Cleaners',
    description: 'Professional [service] in San Diego. [Key features]. Same-day service available. Starting at $100.',
    url: 'https://severincleaners.com/[service-slug]-san-diego',
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '[Service Name] San Diego | [Key Benefit] | Severin Cleaners',
    description: 'Professional [service] in San Diego. [Key features]. Same-day service available. Starting at $100.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/[service-slug]-san-diego',
  },
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
  },
};
```

**Metadata Patterns:**

| Element | Format |
|---------|--------|
| **Title** | `[Service] San Diego \| [Benefit] \| Severin Cleaners` |
| **Title Length** | 50-60 characters |
| **Description** | Include service name, key features, pricing, phone |
| **Keywords** | Service-focused, 5-8 keywords |
| **URL** | `/[service-slug]-san-diego` |

**CONTENT TO EXTRACT:**
- [ ] Service name
- [ ] Key benefit/USP
- [ ] Meta description (155 characters)
- [ ] 5-8 keywords

---

### **SECTION 3: SCHEMA GENERATION**

```typescript
export default function [Service]SanDiegoPage() {
  const serviceSchema = generateServiceSchema({
    name: "[Service Name] San Diego",
    description: "[Service description with key features and coverage area]",
    url: "https://severincleaners.com/[service-slug]-san-diego",
    serviceType: "[Service Type] Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "[Service Name]", url: "https://severincleaners.com/[service-slug]-san-diego" },
  ]);

  const relatedServices = [
    { name: "[Related Service 1]", slug: "[service-1-slug]" },
    { name: "[Related Service 2]", slug: "[service-2-slug]" },
    { name: "[Related Service 3]", slug: "[service-3-slug]" },
    { name: "[Related Service 4]", slug: "[service-4-slug]" },
  ];
```

**CONTENT TO EXTRACT:**
- [ ] Service description (2-3 sentences)
- [ ] 4 related services with slugs (for sidebar)

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
        #1 San Diego [Service Name] Service
      </div>

      {/* H1 HEADLINE */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        [Service Name] San Diego
      </h1>

      {/* SUBHEADLINE (p tag, not h2) */}
      <p className="text-xl md:text-2xl mb-8 text-blue-100">
        [Key Feature 1] • [Key Feature 2] • [Key Feature 3]
      </p>

      {/* BOTTOM TRUST LINE */}
      <p className="text-lg mb-8">
        ✓ [Trust Signal 1] ✓ [Trust Signal 2] ✓ [Trust Signal 3]
      </p>
    </div>
  </div>
</section>
```

**Hero Section Styling (IDENTICAL to location pages):**

| Element | Classes |
|---------|---------|
| **Section** | `relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24` |
| **Badge** | `inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6` |
| **H1** | `text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight` |
| **Subheadline** | `text-xl md:text-2xl mb-8 text-blue-100` |
| **Trust Line** | `text-lg mb-8` |

**Content Patterns:**
- **Badge:** "#1 San Diego [Service] Service"
- **H1:** "[Service Name] San Diego"
- **Subheadline:** 3 features separated by bullets
- **Trust Line:** 3 trust signals with checkmarks

**CONTENT TO EXTRACT:**
- [ ] Badge text
- [ ] H1 service name
- [ ] 3 subheadline features
- [ ] 3 trust signals

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
          <ServiceSidebarCTA
            serviceName="[Service Name]"
            relatedServices={relatedServices}
          />
        </div>

      </div>
    </div>
  </div>
</section>
```

**GRID CONFIGURATION (IDENTICAL to location pages):**
- Total grid: `lg:grid-cols-3`
- Left column: `lg:col-span-2` (2/3 width) - Main content
- Right column: `lg:col-span-1` (1/3 width) - Sticky sidebar

---

### **SECTION 7: SIDEBAR COMPONENT - ServiceSidebarCTA**

**Component:** `<ServiceSidebarCTA />` (Reusable, imported from `@/components/ServiceSidebarCTA`)

**Props Required:**
```typescript
{
  serviceName: string;  // e.g., "Furniture Removal"
  relatedServices: Array<{ name: string; slug: string }>;  // 4 related services
}
```

**Usage Example:**
```tsx
<ServiceSidebarCTA
  serviceName="Furniture Removal"
  relatedServices={[
    { name: "Couch Removal", slug: "couch-removal-san-diego" },
    { name: "Mattress Disposal", slug: "san-diego-mattress-disposal" },
    { name: "Appliance Removal", slug: "appliance-removal-san-diego" },
    { name: "Hot Tub Removal", slug: "hot-tub-removal-san-diego" },
  ]}
/>
```

**Component Contents (STANDARDIZED - same structure as LocationSidebarCTA):**

1. **Main CTA Card** (`lg:sticky lg:top-24`):
   - Header: "GET IMMEDIATE HELP" (gradient blue background)
   - **Call Now Button**: `📞 CALL NOW: (619) 750-0114` (orange, bold)
   - **Get Free Quote Button**: Links to `/contact` (white/outlined)
   - "⚡ Same-Day Service Available" text

2. **"What We Remove" Checklist** (same as location sidebar):
   - Furniture & Mattresses ✓
   - Appliances & Electronics ✓
   - Estate & Garage Cleanouts ✓
   - Construction Debris ✓
   - Hot Tubs & Large Items ✓

3. **"Related [Service Category] Services"**:
   - Lists 4 related services passed via props
   - Each links to `/[service-slug]`
   - "See All Services" button → `/services`

4. **Trust Badge Footer**:
   - "✓ Licensed & Insured • ✓ Eco-Friendly"

5. **Quick Stats Card**:
   - "200+ Happy Customers"
   - "Same-Day Service Available"

**CONTENT TO EXTRACT:**
- [ ] 4 related service names and slugs

---

### **SECTION 8: LEFT COLUMN CONTENT - INTRODUCTION SECTION**

**Location:** Inside left column's white card (`<div className="bg-white rounded-lg shadow-md p-8">`)

```tsx
{/* Introduction */}
<h2 className="text-3xl font-bold mb-6 text-gray-900">
  Professional [Service Name] San Diego – [Key Positioning/Benefit]
</h2>

<p className="text-lg mb-4 text-gray-700">
  <strong>[Service Name] San Diego</strong> provides [SERVICE OVERVIEW].
  Our <strong>[service variant keyword]</strong> team [KEY DIFFERENTIATORS].
  We offer same-day <strong>[service keyword] San Diego</strong> for [TARGET CUSTOMERS/SITUATIONS].
</p>

<p className="text-gray-700 mb-6">
  [SECOND PARAGRAPH - Service expertise, unique capabilities, service approach]
</p>

<p className="text-gray-700 mb-6">
  [OPTIONAL THIRD PARAGRAPH - Additional details, coverage, special capabilities]
</p>
```

**CONTENT TO EXTRACT:**
- [ ] H2 positioning tagline
- [ ] 2-3 opening paragraphs with service overview + keywords

---

### **SECTION 9: LEFT COLUMN - WHAT WE REMOVE**

```tsx
{/* What We Remove */}
<h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in San Diego</h3>
<p className="text-gray-700 mb-4">
  Our <strong>[service] San Diego</strong> service handles [DESCRIPTION].
</p>
<div className="grid md:grid-cols-2 gap-4 mb-6">
  <div>
    <h4 className="font-bold mb-2">[Category 1]</h4>
    <ul className="space-y-1 text-gray-700">
      <li>• [Item 1]</li>
      <li>• [Item 2]</li>
      <li>• [Item 3]</li>
      <li>• [Item 4]</li>
    </ul>
  </div>
  <div>
    <h4 className="font-bold mb-2">[Category 2]</h4>
    <ul className="space-y-1 text-gray-700">
      <li>• [Item 1]</li>
      <li>• [Item 2]</li>
      <li>• [Item 3]</li>
      <li>• [Item 4]</li>
    </ul>
  </div>
  <div>
    <h4 className="font-bold mb-2">[Category 3]</h4>
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
- [ ] Intro paragraph
- [ ] 4 categories
- [ ] 16 items total (4 per category)

---

### **SECTION 10: LEFT COLUMN - SERVICE DETAILS**

```tsx
{/* Service Details / Specialty Information */}
<h3 className="text-2xl font-bold mt-8 mb-4">[Service Detail Section Title]</h3>
<p className="text-gray-700 mb-4">
  [Paragraph about specific service capabilities, equipment, expertise]
</p>
<ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
  <li>[Service detail 1]</li>
  <li>[Service detail 2]</li>
  <li>[Service detail 3]</li>
  <li>[Service detail 4]</li>
  <li>[Service detail 5]</li>
  <li>[Service detail 6]</li>
</ul>
```

**CONTENT TO EXTRACT:**
- [ ] H3 section title
- [ ] Intro paragraph
- [ ] 6+ service details

---

### **SECTION 11: LEFT COLUMN - HOW OUR SERVICE WORKS**

```tsx
{/* How Our Service Works */}
<h3 className="text-2xl font-bold mt-8 mb-4">How Our [Service] Service Works</h3>
<div className="bg-blue-50 rounded-lg p-6 mb-6">
  <ol className="space-y-3 text-gray-700">
    <li><strong>1. Contact Us:</strong> [Step description]</li>
    <li><strong>2. Same-Day Scheduling Available:</strong> [Step description]</li>
    <li><strong>3. We Arrive & Assess:</strong> [Step description]</li>
    <li><strong>4. We Handle Everything:</strong> [Step description]</li>
    <li><strong>5. Eco-Friendly Disposal:</strong> [Step description]</li>
    <li><strong>6. Clean Sweep & Payment:</strong> [Step description]</li>
  </ol>
</div>
```

**CONTENT TO EXTRACT:**
- [ ] 6 step descriptions

---

### **SECTION 12: LEFT COLUMN - WHY CHOOSE US**

```tsx
{/* Why Choose Us */}
<h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Cleaners for [Service]</h3>
<ul className="space-y-3 mb-6">
  <li className="flex items-start">
    <span className="text-green-500 text-xl mr-3">✓</span>
    <span><strong>[Benefit 1 Title]:</strong> [Detailed description]</span>
  </li>
  <li className="flex items-start">
    <span className="text-green-500 text-xl mr-3">✓</span>
    <span><strong>[Benefit 2 Title]:</strong> [Detailed description]</span>
  </li>
  <li className="flex items-start">
    <span className="text-green-500 text-xl mr-3">✓</span>
    <span><strong>[Benefit 3 Title]:</strong> [Detailed description]</span>
  </li>
  <li className="flex items-start">
    <span className="text-green-500 text-xl mr-3">✓</span>
    <span><strong>[Benefit 4 Title]:</strong> [Detailed description]</span>
  </li>
</ul>
```

**CONTENT TO EXTRACT:**
- [ ] 4 benefits with titles and detailed descriptions

---

### **SECTION 13: LEFT COLUMN - SERVICE AREAS**

```tsx
{/* Service Areas */}
<h3 className="text-2xl font-bold mt-8 mb-4">San Diego Areas We Serve</h3>
<p className="text-gray-700 mb-4">
  We provide fast, professional <strong>[service] San Diego</strong> service throughout the county.
</p>
<div className="grid md:grid-cols-3 gap-4 mb-6">
  <ul className="space-y-1 text-gray-700">
    <li>• <a href="/junk-removal-[location]" className="text-blue-600 hover:underline">[Location 1]</a></li>
    <li>• [Location 2]</li>
    <li>• [Location 3]</li>
    <li>• [Location 4]</li>
    <li>• [Location 5]</li>
  </ul>
  <ul className="space-y-1 text-gray-700">
    <li>• [Location 6]</li>
    <li>• [Location 7]</li>
    <li>• [Location 8]</li>
    <li>• [Location 9]</li>
    <li>• [Location 10]</li>
  </ul>
  <ul className="space-y-1 text-gray-700">
    <li>• [Location 11]</li>
    <li>• [Location 12]</li>
    <li>• [Location 13]</li>
    <li>• [Location 14]</li>
    <li>• [Location 15]</li>
  </ul>
</div>
```

**CONTENT TO EXTRACT:**
- [ ] 15+ San Diego locations/areas
- [ ] 3-5 internal links to location pages

---

### **SECTION 14: LEFT COLUMN - ADDITIONAL SUBSECTIONS**

Add 2-4 more H3 subsections as needed:
- Common use cases/scenarios
- Service variants (residential vs. commercial)
- Specialty features
- Environmental responsibility
- Safety & compliance
- Customer types served

```tsx
{/* Additional Subsection */}
<h3 className="text-2xl font-bold mt-8 mb-4">[Subsection Title]</h3>
<p className="text-gray-700 mb-6">
  [Content paragraph]
</p>
```

**CONTENT TO EXTRACT:**
- [ ] 2-4 additional H3 subsections

**NOTE:** This closes the `</div>` for the left column white card and `</div>` for lg:col-span-2

---

### **SECTION 15: PRICING COMPONENT - ServicePricingSection**

**Component:** `<ServicePricingSection />` (Reusable, similar to LocationPricingSection)

**Location:** After main content grid closes

**Props Required:**
```typescript
{
  serviceName: string;
  contextParagraph?: string;
}
```

**Usage Example:**
```tsx
<ServicePricingSection
  serviceName="Furniture Removal"
  contextParagraph="Whether you're clearing out a single couch or an entire office, our furniture removal pricing is transparent and based on volume."
/>
```

**Component Contents (STANDARDIZED):**
- H2: "Transparent {serviceName} Pricing"
- 4 gradient pricing cards ($100, $249, $349, $495)
- Additional sizes box
- What's included box
- CTA button

**CONTENT TO EXTRACT:**
- [ ] Custom contextParagraph (optional)

---

### **SECTION 16: TRUST SIGNALS COMPONENT - TrustSignalsSection**

**Component:** `<TrustSignalsSection />` (Reusable, identical to location pages)

**Props Required:**
```typescript
{
  serviceName: string;
  coverageArea?: string;
}
```

**Usage Example:**
```tsx
<TrustSignalsSection serviceName="Furniture Removal" />
```

**Component Contents (STANDARDIZED):**
- H2: "Trusted {serviceName} Service"
- 4-stat grid (200+ Customers, Licensed, Same-Day, Coverage Area)

**CONTENT TO EXTRACT:**
- [ ] Optional coverageArea override

---

### **SECTION 17: FAQ COMPONENT**

**Component:** `<[Service]FAQSection />` (Custom per service, local import)

**File Location:** `./[Service]FAQSection.tsx`

**Structure:** IDENTICAL to location page FAQs

```tsx
// Includes:
// - FAQ heading + intro
// - 6-8 accordion Q&As
// - Blue CTA box: "Ready for Same-Day [Service] in San Diego?"
//   with 3 scenarios + 2 buttons
```

**CONTENT TO EXTRACT:**
- [ ] FAQ intro paragraph
- [ ] 6-8 FAQ Q&As
- [ ] CTA box with 3 scenarios
- [ ] Service abbreviation for button

---

### **SECTION 18: RELATED SERVICES**

**Location:** After FAQ, before Footer

```tsx
<section className="py-12 bg-gray-50">
  <div className="container mx-auto px-4">
    <h3 className="text-2xl font-bold text-center mb-8">Related [Category] Services</h3>
    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <a href="[URL_1]" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
        <h4 className="font-semibold text-lg mb-2 text-blue-600">[Service 1]</h4>
        <p className="text-gray-600">[Description]</p>
      </a>
      <a href="[URL_2]" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
        <h4 className="font-semibold text-lg mb-2 text-blue-600">[Service 2]</h4>
        <p className="text-gray-600">[Description]</p>
      </a>
      <a href="[URL_3]" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
        <h4 className="font-semibold text-lg mb-2 text-blue-600">[Service 3]</h4>
        <p className="text-gray-600">[Description]</p>
      </a>
    </div>
  </div>
</section>
```

**CONTENT TO EXTRACT:**
- [ ] 3 related service URLs, titles, descriptions

---

## 📊 **COMPLETE CONTENT EXTRACTION CHECKLIST**

### **Metadata & Setup:**
- [ ] Service name
- [ ] Meta title (50-60 chars)
- [ ] Meta description (155 chars)
- [ ] 5-8 keywords
- [ ] Service description for schema
- [ ] 4 related services (name + slug)

### **Hero Section:**
- [ ] Badge text
- [ ] H1 service name
- [ ] 3 subheadline features
- [ ] 3 trust signals

### **Introduction:**
- [ ] H2 positioning tagline
- [ ] 2-3 opening paragraphs

### **Main Content:**
- [ ] "What We Remove" intro + 16 items in 4 categories
- [ ] Service details section with 6+ bullets
- [ ] 6 "How It Works" steps
- [ ] 4 "Why Choose Us" benefits
- [ ] 15+ San Diego areas/locations
- [ ] 2-4 additional H3 subsections

### **Components:**
- [ ] Pricing context paragraph (optional)
- [ ] Coverage area override (optional)
- [ ] FAQ component created with 6-8 Q&As + CTA
- [ ] 3 related services

---

## ✅ **QUALITY CHECKLIST**

Before marking complete:

- [ ] All 18 sections present
- [ ] No `[PLACEHOLDER]` text remaining
- [ ] 2-column grid with sticky sidebar
- [ ] White content box with proper styling
- [ ] "What We Remove" has 16 items in 4 categories
- [ ] "How It Works" has 6 steps
- [ ] "Why Choose Us" has 4 benefits
- [ ] 15+ San Diego locations
- [ ] 3-5 internal links
- [ ] 4 related services in sidebar
- [ ] FAQ with CTA box
- [ ] 3 related services at bottom
- [ ] All keywords bolded
- [ ] Schema URLs correct

---

## 📝 **COMPONENT PROP REFERENCE**

```typescript
// ServiceSidebarCTA
<ServiceSidebarCTA
  serviceName="Furniture Removal"
  relatedServices={[
    { name: "Couch Removal", slug: "couch-removal-san-diego" },
    { name: "Mattress Disposal", slug: "san-diego-mattress-disposal" },
    { name: "Appliance Removal", slug: "appliance-removal-san-diego" },
    { name: "Hot Tub Removal", slug: "hot-tub-removal-san-diego" },
  ]}
/>

// ServicePricingSection
<ServicePricingSection
  serviceName="Furniture Removal"
  contextParagraph="Optional custom pricing context..."
/>

// TrustSignalsSection
<TrustSignalsSection
  serviceName="Furniture Removal"
  coverageArea="San Diego County"
/>
```

---

**Blueprint Complete!** This document represents the complete target configuration for all service pages using the same 2-column layout structure as location pages.
