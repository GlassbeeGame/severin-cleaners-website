# Service Page Template - Severin Cleaners

## Quick Start

When creating a new service page, provide this information:

```
CREATE A NEW SERVICE PAGE USING THE SERVICE_PAGE_TEMPLATE.md

Service Details:
- Service Name: [e.g., "Garage Cleanout"]
- Location: [e.g., "San Diego" or "North Park"]
- URL Slug: [e.g., "garage-cleanout-san-diego"]
- Primary Keyword: [e.g., "garage cleanout San Diego"]
- Secondary Keywords: [list 3-5 related keywords]
- Target Audience: [e.g., "homeowners, property managers, landlords"]
- Unique Selling Points: [list 2-3 key differentiators]
- Service-Specific Features: [any unique aspects of this service]

Content Details:
- Key Benefits (3): [list 3 main benefits]
- Process Steps (4): [describe the 4-step process]
- What We Remove (8-10 items): [list items specific to this service]
- FAQs (5-7): [list questions customers typically ask]
- Service Areas: [use default San Diego County list or customize]
```

---

## File Structure

```
/src/app/[service-name-location]/
  ├── page.tsx
  └── [ServiceName]FAQSection.tsx
```

---

## Template Code Structure

### `page.tsx` Boilerplate

```tsx
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import [ServiceName]FAQSection from "./[ServiceName]FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "[Service Name] [Location] - [Key Benefit/USP]",
  description: "[150-160 char description with primary keyword, location, USP, and phone CTA]",
  keywords: "[primary keyword], [variation 1], [variation 2], [variation 3], [related keywords]",
  openGraph: {
    title: "[Service Name] [Location] - [Key Benefit/USP]",
    description: "[Same as meta description]",
    url: 'https://severincleaners.com/[service-url-slug]',
  },
  twitter: {
    card: 'summary_large_image',
    title: "[Service Name] [Location]",
    description: "[Same as meta description]",
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: "https://severincleaners.com/[service-url-slug]",
  },
};

export default function [ServiceName]Page() {
  const serviceSchema = generateServiceSchema({
    name: "[Service Name] [Location]",
    description: "[1-2 sentence service description]",
    url: "https://severincleaners.com/[service-url-slug]",
    serviceType: "[Service Type]",
    areaServed: "[Location] County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "[Service Name]", url: "https://severincleaners.com/[service-url-slug]" },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema]
  };

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* SECTIONS GO HERE - See section templates below */}
        </main>
        <Footer />
      </div>
    </>
  );
}
```

---

## Section Templates (in order)

### 1. HERO SECTION
**Purpose:** Grab attention, state value proposition, primary CTA
**Background:** `bg-gradient-to-br from-blue-900 to-blue-700`

```tsx
<section className="bg-gradient-to-br from-blue-900 to-blue-700 py-20">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center text-white">
      <h1 className="text-5xl font-bold mb-6">
        [Service Name] [Location]
      </h1>
      <p className="text-xl mb-8 leading-relaxed">
        [2-3 sentences: Who you serve + what you do + coverage area + key benefits. Include primary keyword naturally.]
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+16197500114"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
        >
          📞 Call (619) 750-0114 - [CTA: e.g., "Fast Response"]
        </a>
        <a
          href="#process"
          className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
        >
          [Secondary CTA: e.g., "Learn Our Process"]
        </a>
      </div>
    </div>
  </div>
</section>
```

---

### 2. KEY BENEFITS SECTION (3-Column)
**Purpose:** Establish trust and core value props
**Background:** `bg-white`

```tsx
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        [H2 with Secondary Keyword]
      </h2>
      <p className="text-xl text-gray-600 mb-12 text-center">
        [Supporting paragraph explaining the benefits]
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="[ICON_PATH]"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">[Benefit 1 Title]</h3>
          <p className="text-gray-600">[Benefit 1 description]</p>
        </div>

        <div className="text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="[ICON_PATH]"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">[Benefit 2 Title]</h3>
          <p className="text-gray-600">[Benefit 2 description]</p>
        </div>

        <div className="text-center">
          <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="[ICON_PATH]"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">[Benefit 3 Title]</h3>
          <p className="text-gray-600">[Benefit 3 description]</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Icon Colors Rotation:** `bg-blue-500`, `bg-green-500`, `bg-purple-500`, `bg-orange-500`

---

### 3. SECONDARY BENEFITS (2-Column Cards)
**Purpose:** Expand on service features
**Background:** `bg-gray-50`

```tsx
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        [H2 with Keyword Variation]
      </h2>
      <p className="text-xl text-gray-600 mb-12 text-center">
        [Supporting paragraph]
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">[Icon] [Feature Title]</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              [Bullet point 1]
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              [Bullet point 2]
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              [Bullet point 3]
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">[Icon] [Feature Title]</h3>
          <ul className="space-y-3 text-gray-600">
            {/* Same bullet structure */}
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### 4. WHAT WE REMOVE/HANDLE (2-Column Lists)
**Purpose:** Comprehensive service scope, keyword-rich
**Background:** `bg-white`

```tsx
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        What We Remove/Handle for [Service Name]
      </h2>
      <p className="text-xl text-gray-600 mb-12 text-center">
        [Description of comprehensive service]
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">[Icon] [Category 1]</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-700">[Item 1 with details]</span>
            </li>
            {/* 4-5 items */}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">[Icon] [Category 2]</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-700">[Item 1 with details]</span>
            </li>
            {/* 4-5 items */}
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-blue-50 p-8 rounded-xl">
        <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">[Icon] [Special Note Title]</h3>
        <p className="text-gray-700 text-center">
          [Additional information about service scope or special handling]
        </p>
      </div>
    </div>
  </div>
</section>
```

---

### 5. PRICING SECTION (4-Card Grid)
**Purpose:** Transparent pricing, conversion-focused
**Background:** `bg-gray-50`

```tsx
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Transparent [Service Name] Pricing
      </h2>
      <p className="text-xl text-gray-600 mb-12 text-center">
        [Include primary and secondary keywords naturally about pricing transparency]
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Single Item</h3>
          <p className="text-4xl font-bold mb-2">$100</p>
          <p className="text-sm opacity-90">Starting at</p>
          <p className="text-sm mt-4 opacity-90">[Use case description]</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-2">1/4 Load</h3>
          <p className="text-4xl font-bold mb-2">$249</p>
          <p className="text-sm opacity-90">3 cubic yards</p>
          <p className="text-sm mt-4 opacity-90">[Use case description]</p>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-2">1/2 Load</h3>
          <p className="text-4xl font-bold mb-2">$349</p>
          <p className="text-sm opacity-90">6 cubic yards</p>
          <p className="text-sm mt-4 opacity-90">[Use case description]</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Full Load</h3>
          <p className="text-4xl font-bold mb-2">$495</p>
          <p className="text-sm opacity-90">12 cubic yards</p>
          <p className="text-sm mt-4 opacity-90">[Use case description]</p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">Additional sizes available: 3/8 load ($319), 5/8 load ($366), 3/4 load ($429), 7/8 load ($462)</p>
        <p className="text-sm text-gray-500">All prices include labor, hauling, disposal, and cleanup. [Any service-specific note]</p>
      </div>

      <div className="mt-8 text-center">
        <a
          href="tel:+16197500114"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
        >
          📞 Call (619) 750-0114 for Free Quote
        </a>
      </div>
    </div>
  </div>
</section>
```

---

### 6. PROCESS SECTION (4-Step Numbered)
**Purpose:** Build trust through transparency
**Background:** `bg-gray-50` or `bg-white`
**ID:** `id="process"` (for hero anchor link)

```tsx
<section id="process" className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Our [Service Name] Process
      </h2>
      <p className="text-xl text-gray-600 mb-12 text-center">
        [Brief description of streamlined process]
      </p>

      <div className="space-y-8">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">[Step 1 Title]</h3>
            <p className="text-gray-600">[Step 1 detailed description]</p>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">[Step 2 Title]</h3>
            <p className="text-gray-600">[Step 2 detailed description]</p>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">[Step 3 Title]</h3>
            <p className="text-gray-600">[Step 3 detailed description]</p>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">[Step 4 Title]</h3>
            <p className="text-gray-600">[Step 4 detailed description]</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Typical Steps:**
1. Initial Consultation & Free Quote
2. Flexible Scheduling & Coordination
3. Efficient & Professional Removal
4. Eco-Friendly Disposal & Documentation

---

### 7. WHY CHOOSE US (2-Column Feature Grid)
**Purpose:** Competitive differentiation
**Background:** `bg-white`

```tsx
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Why Choose Us for [Service Name] [Location]?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <svg className="w-8 h-8 text-blue-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="[ICON_PATH]"></path>
            </svg>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">[Feature 1 Title]</h3>
              <p className="text-gray-600">[Feature 1 description]</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <svg className="w-8 h-8 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="[ICON_PATH]"></path>
            </svg>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">[Feature 2 Title]</h3>
              <p className="text-gray-600">[Feature 2 description]</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <svg className="w-8 h-8 text-purple-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="[ICON_PATH]"></path>
            </svg>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">[Feature 3 Title]</h3>
              <p className="text-gray-600">[Feature 3 description]</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* 3 more features with orange, green-600, blue-600 colors */}
        </div>
      </div>
    </div>
  </div>
</section>
```

**Typical Features:**
- Licensed & Insured Local Team
- Fast & Reliable Turnaround
- Discreet & Respectful Service
- Eco-Friendly Disposal Practices
- Transparent Pricing
- Complete Documentation

---

### 8. SERVICE AREAS SECTION (Multi-Column Grid)
**Purpose:** Local SEO, geo-targeting
**Background:** `bg-blue-50`

```tsx
<section className="py-16 bg-blue-50">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        [Service Name] Service Areas
      </h2>
      <p className="text-xl text-gray-600 mb-8 text-center">
        [Coverage description with keywords about serving all of San Diego County]
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
        {[
          "Downtown San Diego", "North Park", "Hillcrest", "La Jolla", "Pacific Beach", "Mission Valley",
          "Chula Vista", "Clairemont", "Point Loma", "University City", "Del Mar", "Encinitas",
          "El Cajon", "La Mesa", "Santee", "Poway", "Escondido", "Oceanside"
        ].map((area, index) => (
          <div key={index} className="bg-white p-3 rounded-lg hover:bg-blue-100 transition-colors">
            <span className="text-sm font-semibold text-gray-700">{area}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
```

---

### 9. FAQ SECTION (Separate Component)
**Purpose:** Answer objections, long-tail keywords, FAQ schema
**Background:** `bg-white`

See full component template in next section.

---

### 10. TRUST SIGNALS (4-Stat Grid)
**Purpose:** Social proof and credibility
**Background:** `bg-gray-50`

```tsx
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        Trusted [Service Name] Specialists
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">200+</h3>
          <p className="text-gray-600 font-semibold">Cleanout & Hauling Projects Completed</p>
        </div>

        <div className="text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Licensed</h3>
          <p className="text-gray-600 font-semibold">& Insured</p>
        </div>

        <div className="text-center">
          <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Same-Day</h3>
          <p className="text-gray-600 font-semibold">Service Available</p>
        </div>

        <div className="text-center">
          <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Serving All</h3>
          <p className="text-gray-600 font-semibold">San Diego</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### 11. FINAL CTA SECTION
**Purpose:** Final conversion opportunity
**Background:** `bg-gradient-to-br from-blue-900 to-blue-700`

```tsx
<section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold mb-6">
      Call Today for [Service Name] [Location]
    </h2>
    <p className="text-xl mb-8 max-w-4xl mx-auto">
      [Final persuasive paragraph: Urgency + benefits + keywords + trust elements. 3-4 sentences.]
    </p>
    <div className="flex flex-col sm:flex-row gap-6 justify-center">
      <a
        href="tel:+16197500114"
        className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 rounded-lg font-bold text-2xl transition-colors"
      >
        📞 CALL (619) 750-0114
      </a>
      <a
        href="mailto:severincleaners@gmail.com"
        className="bg-white hover:bg-gray-100 text-blue-700 px-12 py-6 rounded-lg font-bold text-2xl transition-colors"
      >
        📧 Email for Quote
      </a>
    </div>
    <p className="text-blue-200 mt-6 text-lg">
      Available 7 Days a Week • Same-Day Service • Licensed & Insured • [Service-Specific Trust Point]
    </p>
  </div>
</section>
```

---

## FAQ Component Template

### `[ServiceName]FAQSection.tsx`

```tsx
'use client';

import { useState } from 'react';

export default function [ServiceName]FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "[Question 1 - Include primary keyword variation]",
      answer: "[Detailed answer with specifics, pricing if relevant, and keywords]"
    },
    {
      question: "[Question 2 - Common objection or concern]",
      answer: "[Answer addressing concern]"
    },
    {
      question: "[Question 3 - Service-specific]",
      answer: "[Answer]"
    },
    {
      question: "[Question 4 - Pricing or timeline]",
      answer: "[Answer with specific details]"
    },
    {
      question: "[Question 5 - Process or logistics]",
      answer: "[Answer]"
    },
    // 5-7 FAQs total recommended
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our [service name] [location] services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <h3 className="font-bold text-gray-900 text-lg">{faq.question}</h3>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 py-4 bg-white">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions About [Service Name]?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Our experienced team is ready to answer questions, provide detailed quotes, or schedule your service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+16197500114"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                Call (619) 750-0114 - Fast Response
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
    </>
  );
}
```

---

## SEO Checklist

### Meta & Schema
- [ ] Unique meta title (50-60 chars)
- [ ] Unique meta description (150-160 chars)
- [ ] Primary keyword in title (front-loaded)
- [ ] Location in title
- [ ] Keywords field populated
- [ ] OpenGraph tags complete
- [ ] Twitter card tags complete
- [ ] Canonical URL set
- [ ] Service schema generated
- [ ] Breadcrumb schema generated
- [ ] FAQ schema in FAQ component

### Content Optimization
- [ ] Primary keyword in H1
- [ ] Primary keyword in first paragraph
- [ ] Secondary keywords in H2s (at least 3)
- [ ] Long-tail keywords in FAQs (5-7 questions)
- [ ] Location name mentioned 8-12 times naturally
- [ ] Service name variations throughout
- [ ] 800-1200 words total content
- [ ] Natural keyword density (1-2%)

### Technical
- [ ] Component imports correct
- [ ] Schema functions imported
- [ ] FAQ component created
- [ ] All internal links working
- [ ] Phone number consistent: (619) 750-0114
- [ ] Email consistent: severincleaners@gmail.com
- [ ] Anchor link (#process) working
- [ ] Responsive grid classes used

### UX/Styling
- [ ] Section backgrounds alternate (white/gray-50)
- [ ] Icons colored properly (blue/green/purple/orange rotation)
- [ ] All CTAs styled consistently
- [ ] Pricing cards use gradient backgrounds
- [ ] Hover states on all interactive elements
- [ ] Text hierarchy clear (5xl > 4xl > 2xl > xl)

---

## Common Icon SVG Paths

**Checkmark:**
```
M5 13l4 4L19 7
```

**Shield/Security:**
```
M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z
```

**Clock/Time:**
```
M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z
```

**Lock:**
```
M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z
```

**People/Team:**
```
M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z
```

**Location/Pin:**
```
M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z
M15 11a3 3 0 11-6 0 3 3 0 016 0z
```

**Recycling:**
```
M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15
```

**Document/Clipboard:**
```
M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m5 0h2a2 2 0 002-2V7a2 2 0 00-2-2h-2m-5 4h5
```

**Home/Building:**
```
M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9
```

---

## Keyword Research Tips

**Primary Keyword Format:**
- [service] [location]
- Example: "garage cleanout San Diego"

**Secondary Keywords (3-5):**
- [service] service [location]
- [service] near me
- [specific use case] [location]
- [service] pricing [location]
- cheap/affordable [service] [location]

**Long-tail Keywords (FAQs):**
- How much does [service] cost in [location]?
- What does [service] include?
- Do you remove [specific items]?
- How long does [service] take?
- Are you licensed for [service]?

---

## Word Count Targets

- **Total Page:** 800-1,200 words
- **Hero Section:** 40-60 words
- **Benefit Sections:** 150-200 words each
- **What We Remove:** 100-150 words
- **Process Section:** 150-200 words
- **Why Choose Us:** 150-200 words
- **FAQs:** 400-500 words total
- **Final CTA:** 50-75 words
