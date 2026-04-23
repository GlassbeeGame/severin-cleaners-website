# Blog Post Template - Severin Cleaners

This template provides the structure for blog posts with sidebar CTA matching the location page layout for maximum conversion.

## Quick Start

1. Copy the Santee Dump Guide as starting point: `src/app/blog/santee-dump-guide/page.tsx`
2. Update metadata (title, description, keywords, OG tags, article meta tags)
3. Update all schema in `combinedSchema.@graph` array
4. Fill in your content sections (hero, main content, FAQs)
5. Update `nearbyLocations` array with related pages
6. Test build: `npm run build`
7. Validate schema: https://search.google.com/test/rich-results

## Schema Quick Reference

**Blog about a facility/location (dump, landfill, recycling center):**
- BreadcrumbList ✓
- BlogPosting (enhanced) ✓
- FAQPage (10-13 questions) ✓
- HowTo (steps to visit the facility) ✓
- CivicStructure (the facility itself) ✓
- LocalBusiness (Severin Cleaners - service area) ✓
- Service (your junk removal service) ✓
- ItemList (materials accepted) ✓

**Blog about a service topic (costs, alternatives, comparisons):**
- BreadcrumbList ✓
- BlogPosting (enhanced) ✓
- FAQPage (10-13 questions) ✓
- HowTo (if applicable) ✓
- LocalBusiness (Severin Cleaners - service area) ✓
- Service (your junk removal service) ✓
- ItemList (if listing items) ✓

**Blog about a specific junk removal task (mattress disposal, appliance removal):**
- BreadcrumbList ✓
- BlogPosting (enhanced) ✓
- FAQPage (10-13 questions) ✓
- HowTo (steps to dispose of item) ✓
- LocalBusiness (Severin Cleaners - service area) ✓
- Service (specific service type) ✓
- ItemList (types of items you handle) ✓

## Components Used

- **LocationSidebarCTA**: The conversion-focused sidebar (same as location pages)
- **SchemaMarkup**: For SEO schema
- **Header/Footer**: Standard site chrome

## Template Code

See the Santee Dump Guide for a complete working example:
`src/app/blog/santee-dump-guide/page.tsx`

## Key Structure

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";

export const metadata: Metadata = {
  title: "[TITLE TAG - 60 chars | Include Primary Keyword + Year]",
  description: "[META DESCRIPTION - 150-155 chars]",
  keywords: "[primary keyword], [secondary keyword], [location]",
  openGraph: {
    title: "[OG TITLE - Can be longer/more engaging than title tag]",
    description: "[OG DESCRIPTION - 150-200 chars]",
    url: "https://severincleaners.com/blog/[slug]",
    type: "article",
    images: [
      {
        url: "https://severincleaners.com/images/og/[blog-image].jpg",
        width: 1200,
        height: 630,
        alt: "[Image description]",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "[TWITTER TITLE]",
    description: "[TWITTER DESCRIPTION]",
  },
  other: {
    "geo.region": "US-CA",
    "geo.placename": "[City Name]",
    "geo.position": "[latitude];[longitude]",
    "ICBM": "[latitude], [longitude]",
    "article:published_time": "[ISO 8601 date with timezone]",
    "article:modified_time": "[ISO 8601 date with timezone]",
    "article:section": "[Section like 'Local Resources' or 'Guides']",
    "article:tag": "[comma-separated keywords]"
  }
};

export default function BlogPostName() {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. BreadcrumbList Schema (CRITICAL)
      // 2. Enhanced BlogPosting Schema
      // 3. Expanded FAQPage Schema (10+ questions)
      // 4. HowTo Schema (if applicable)
      // 5. CivicStructure/Place Schema (if discussing a location)
      // 6. LocalBusiness Schema (for Severin Cleaners - SERVICE AREA)
      // 7. Service Schema
      // 8. ItemList Schema (if listing items/materials)
      // See complete examples below
    ]
  };

  const nearbyLocations = [
    { name: "Related Service 1", slug: "/service-1" },
    { name: "Related Service 2", slug: "/service-2" },
    { name: "Related Location 1", slug: "/junk-removal-location-1" },
    { name: "Related Location 2", slug: "/junk-removal-location-2" },
  ];

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-12 md:py-16">
          {/* Breadcrumbs, title, metadata */}
        </section>

        {/* Main Content with Sidebar - THE KEY LAYOUT */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">

                {/* Main Content - Left (2/3) */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    {/* Your blog content here */}
                  </div>
                </div>

                {/* Sidebar - Right (1/3) - THE CONVERSION ENGINE */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="San Diego"
                    nearbyLocations={nearbyLocations}
                    nearbyHeading="Related Services"
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          {/* Final conversion section */}
        </section>

      </main>
      <Footer />
    </>
  );
}
```

## Pre-Built Component Styles

### Info Box (Blue)
```tsx
<div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
  <h2 className="text-2xl font-bold text-gray-900 mb-4">Title</h2>
  {/* Content */}
</div>
```

### Warning Box (Yellow)
```tsx
<div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
  <p className="text-sm text-gray-700"><strong>⚠️ Warning:</strong> Important info</p>
</div>
```

### Success Box (Green)
```tsx
<div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r mb-8">
  <p className="text-gray-700">Success message or tip</p>
</div>
```

### Pro Tip Box
```tsx
<div className="bg-blue-50 rounded-lg p-5 mb-6">
  <p className="text-gray-700 mb-2">
    <strong>💡 Pro Tip:</strong> Helpful insight
  </p>
  <p className="text-gray-700">
    Additional context with <Link href="/service">service link</Link>
  </p>
</div>
```

### Mid-Content CTA Box (CRITICAL FOR CONVERSION)
```tsx
<div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 my-12 text-center">
  <h3 className="text-3xl font-bold mb-4">Skip the Hassle — We Handle Everything</h3>
  <p className="text-xl text-blue-100 mb-6">
    Same-day junk removal throughout San Diego
  </p>
  <ul className="text-left max-w-xl mx-auto mb-6 space-y-2">
    <li className="flex items-center text-blue-100">
      <span className="text-green-400 text-xl mr-3">✓</span>
      Benefit 1
    </li>
    <li className="flex items-center text-blue-100">
      <span className="text-green-400 text-xl mr-3">✓</span>
      Benefit 2
    </li>
  </ul>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <a
      href="tel:6197500114"
      className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors inline-block"
    >
      📞 (619) 750-0114
    </a>
    <Link
      href="/contact"
      className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg text-xl font-bold transition-colors inline-block"
    >
      Get Free Quote
    </Link>
  </div>
  <p className="text-blue-200 text-sm mt-4">
    Starting at $69 for small items • Same-day service available
  </p>
</div>
```

### Comparison Table
```tsx
<div className="overflow-x-auto mb-8">
  <table className="w-full border-2 border-gray-200 rounded-lg">
    <thead className="bg-gray-100">
      <tr>
        <th className="py-3 px-4 text-left font-bold text-gray-900">Feature</th>
        <th className="py-3 px-4 text-center font-bold text-gray-900">Option 1</th>
        <th className="py-3 px-4 text-center font-bold text-gray-900">Option 2</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      <tr>
        <td className="py-3 px-4 text-gray-700">Feature name</td>
        <td className="py-3 px-4 text-center text-red-600">❌ No</td>
        <td className="py-3 px-4 text-center text-green-600 font-bold">✓ Yes</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Related Resources Grid
```tsx
<div className="grid md:grid-cols-2 gap-4 mb-8">
  <Link href="/page-1" className="block p-5 bg-gray-50 border-2 border-gray-200 hover:border-blue-400 rounded-lg transition-colors">
    <h4 className="font-bold text-lg mb-2 text-blue-600">Resource Title</h4>
    <p className="text-gray-600 text-sm">Brief description</p>
  </Link>
  {/* More cards */}
</div>
```

## SEO Best Practices

### 1. Keywords
- Use primary keyword in H1, first paragraph, and 2-3 H2s naturally
- Use secondary keywords in H2s and throughout content
- Don't stuff - aim for natural, helpful content

### 2. Internal Linking
- Link to 3-5 relevant service pages
- Link to related blog posts
- Use descriptive anchor text (not "click here")

### 3. Structure
- H1 (only one per page)
- H2s for main sections (3-6 total)
- H3s for subsections as needed
- Short paragraphs (2-4 sentences)

### 4. CTAs
- Include phone number prominently (it's clickable!)
- Use multiple CTAs throughout (sidebar + mid-content + bottom)
- Make CTAs benefit-focused, not feature-focused

### 5. Length
- Aim for 1,500-2,500 words for comprehensive guides
- Include tables, lists, and visual breaks
- Write for scanners (headers, bullet points, bold text)

## Complete Schema Implementation Guide

### Overview: 10-Schema Pattern for Maximum SEO

The Santee Dump Guide uses a comprehensive 10-schema pattern in the `@graph` array:

1. **BreadcrumbList** - CRITICAL (appears in search results)
2. **BlogPosting** - Enhanced with wordCount, keywords, timeRequired
3. **FAQPage** - 10-13 questions for rich snippets
4. **HowTo** - Step-by-step process (if applicable)
5. **CivicStructure/Place** - Location being discussed (dump, facility, etc.)
6. **LocalBusiness** - Severin Cleaners (SERVICE AREA BUSINESS)
7. **Service** - Junk removal service offering
8. **ItemList** - Materials/items (if applicable)
9. **AggregateRating** - Can be added to LocalBusiness
10. **Organization** - Additional business context

### 1. BreadcrumbList Schema (REQUIRED)

```typescript
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://severincleaners.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://severincleaners.com/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "[Blog Post Title]",
      "item": "https://severincleaners.com/blog/[slug]"
    }
  ]
}
```

### 2. Enhanced BlogPosting Schema

```typescript
{
  "@type": "BlogPosting",
  "headline": "[H1 Title - 60 chars max]",
  "description": "[Meta description]",
  "image": "https://severincleaners.com/images/og/[image].jpg",
  "datePublished": "2026-01-29T08:00:00-08:00",
  "dateModified": "2026-01-29T08:00:00-08:00",
  "wordCount": 2400, // Actual word count
  "articleSection": "Local Resources", // or "Guides", "Tips", etc.
  "inLanguage": "en-US",
  "keywords": ["keyword 1", "keyword 2", "keyword 3"],
  "timeRequired": "PT8M", // ISO 8601 duration (8 minutes to read)
  "author": {
    "@type": "Organization",
    "name": "Severin Cleaners",
    "url": "https://severincleaners.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://severincleaners.com/images/severin-cleaners-logo.png"
    },
    "sameAs": [
      "https://www.facebook.com/severinhauling",
      "https://www.instagram.com/severinhauling/",
      "https://www.yelp.com/biz/severin-cleaners-san-diego"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "Severin Cleaners",
    "logo": {
      "@type": "ImageObject",
      "url": "https://severincleaners.com/images/severin-cleaners-logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://severincleaners.com/blog/[slug]"
  }
}
```

### 3. Expanded FAQPage Schema (10-13 Questions)

```typescript
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question 1]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Comprehensive answer 2-4 sentences with specific details, numbers, and context. Include location names, zip codes, and pricing where relevant.]"
      }
    },
    {
      "@type": "Question",
      "name": "[Question 2]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer]"
      }
    },
    // Add 10-13 total questions covering:
    // - Cost/pricing
    // - Hours/availability
    // - Location/address
    // - Requirements/restrictions
    // - Accepted items
    // - Payment methods
    // - Time requirements
    // - Appointment needs
    // - Special circumstances
    // - Alternatives (your service)
  ]
}
```

### 4. HowTo Schema (For Step-by-Step Guides)

```typescript
{
  "@type": "HowTo",
  "name": "How to [Task Title]",
  "description": "[Brief description of the process]",
  "totalTime": "PT3H30M", // ISO 8601 duration (3 hours 30 minutes)
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "151" // Average cost
  },
  "tool": [
    {
      "@type": "HowToTool",
      "name": "Pickup truck or rental truck"
    },
    {
      "@type": "HowToTool",
      "name": "Tarp to cover load"
    },
    {
      "@type": "HowToTool",
      "name": "Closed-toe shoes (required)"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "[Step 1 Name]",
      "text": "[Detailed instructions for step 1. Include time, cost, and specific actions.]",
      "url": "https://severincleaners.com/blog/[slug]#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "[Step 2 Name]",
      "text": "[Step 2 instructions]",
      "url": "https://severincleaners.com/blog/[slug]#step-2"
    },
    // Add 5-7 steps total
  ]
}
```

### 5. CivicStructure/Place Schema (For Location Being Discussed)

```typescript
{
  "@type": "CivicStructure", // or "Place" for non-civic locations
  "name": "[Facility Name]",
  "alternateName": "[Common nickname]",
  "description": "[Full description of the facility]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street Address]",
    "addressLocality": "[City]",
    "addressRegion": "CA",
    "postalCode": "[Zip]",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 32.8384,
    "longitude": -116.9739
  },
  "telephone": "+1-[phone]",
  "url": "[Official website if applicable]",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "16:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "07:00",
      "closes": "16:30"
    }
  ],
  "isAccessibleForFree": false,
  "publicAccess": true
}
```

### 6. LocalBusiness Schema (SERVICE AREA BUSINESS - CRITICAL)

**IMPORTANT**: This business is NOT a storefront. It's a service area business that comes to customers.

```typescript
{
  "@type": "LocalBusiness",
  "@id": "https://severincleaners.com/#organization",
  "name": "Severin Cleaners",
  "description": "Professional junk removal service serving San Diego County. Service area business - we come to you.",
  "image": "https://severincleaners.com/images/severin-cleaners-logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "8900 Grossmont Blvd Ste 1",
    "addressLocality": "La Mesa",
    "addressRegion": "CA",
    "postalCode": "91941",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 32.7678,
    "longitude": -117.0230
  },
  "url": "https://severincleaners.com",
  "telephone": "+1-619-750-0114",
  "priceRange": "$69 - $495",
  "openingHours": "Mo-Su 00:00-23:59", // Available 24/7 (not storefront hours)
  "areaServed": [
    {
      "@type": "City",
      "name": "[Primary City]",
      "containedIn": {
        "@type": "State",
        "name": "California"
      }
    },
    {
      "@type": "City",
      "name": "[Secondary City]"
    },
    // Add all major cities served
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "312",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    "https://www.facebook.com/severinhauling",
    "https://www.instagram.com/severinhauling/",
    "https://www.yelp.com/biz/severin-cleaners-san-diego"
  ]
}
```

### 7. Service Schema

```typescript
{
  "@type": "Service",
  "serviceType": "Junk Removal",
  "name": "[City/Topic] Junk Removal Service",
  "description": "Professional junk removal service in [area] as a convenient alternative to [DIY option discussed in blog]",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Severin Cleaners"
  },
  "areaServed": {
    "@type": "City",
    "name": "[City]"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://severincleaners.com",
    "servicePhone": {
      "@type": "ContactPoint",
      "telephone": "+1-619-750-0114",
      "contactType": "Customer Service"
    }
  },
  "offers": {
    "@type": "Offer",
    "price": "69",
    "priceCurrency": "USD",
    "description": "Starting price for small items",
    "minPrice": "69",
    "maxPrice": "495"
  },
  "hoursAvailable": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  }
}
```

### 8. ItemList Schema (For Accepted Materials/Items)

```typescript
{
  "@type": "ItemList",
  "name": "Materials Accepted at [Location]",
  "description": "Complete list of materials and items accepted",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Municipal solid waste (household junk)"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Construction and demolition debris"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Furniture and appliances"
    },
    // Add 8-12 items total
  ]
}

## Schema Implementation Checklist

### Before Publishing:
- [ ] BreadcrumbList includes correct URL structure
- [ ] BlogPosting has accurate wordCount (run `wc -w` or count in editor)
- [ ] All dates use ISO 8601 format with timezone: `2026-01-29T08:00:00-08:00`
- [ ] timeRequired uses ISO 8601 duration: `PT8M` (8 minutes), `PT3H30M` (3.5 hours)
- [ ] LocalBusiness clearly marked as SERVICE AREA (not storefront)
- [ ] All URLs are absolute (https://severincleaners.com/...)
- [ ] FAQPage has 10-13 comprehensive questions
- [ ] Phone numbers use E.164 format: `+1-619-750-0114`
- [ ] Geo coordinates are accurate (use Google Maps)
- [ ] areaServed lists all relevant cities

### Testing Your Schema:
1. Build: `npm run build` (catches TypeScript/JSON errors)
2. Google Rich Results Test: https://search.google.com/test/rich-results
3. Schema Validator: https://validator.schema.org/
4. Monitor Google Search Console for schema errors after deployment

### Common Mistakes to Avoid:
- ❌ Don't mark service-area business as having storefront hours (use "Mo-Su 00:00-23:59")
- ❌ Don't use relative URLs in schema (always https://severincleaners.com/full-path)
- ❌ Don't forget timezone in dates (-08:00 for PST, -07:00 for PDT)
- ❌ Don't exceed character limits in headline (60) or description (155)
- ❌ Don't duplicate questions in FAQ schema
- ❌ Don't use placeholder values like "[CITY]" - fill everything in
- ❌ Don't forget to update dateModified when making changes

### Pro Tips:
- 💡 Use the same business info (NAP) across all schemas for consistency
- 💡 Link social profiles in sameAs array for entity recognition
- 💡 Add HowTo schema for any step-by-step content (Google loves these)
- 💡 Rich snippets can take 1-2 weeks to appear in search results
- 💡 More specific FAQ questions = more "People Also Ask" opportunities
- 💡 CivicStructure/Place schema helps with local pack rankings

## Working Example

See the complete Santee Dump Guide for a fully implemented example:
- File: `src/app/blog/santee-dump-guide/page.tsx`
- URL: `/blog/santee-dump-guide`
- Live example shows all 10 schema types implemented

This guide demonstrates:
- ✓ **10-Schema Pattern**: BreadcrumbList, Enhanced BlogPosting, 13 FAQ questions, HowTo with 7 steps, CivicStructure with geo coordinates, LocalBusiness (service area), Service, ItemList
- ✓ **Complete Metadata**: Article meta tags, geo tags, OG/Twitter tags, keywords
- ✓ **Sidebar CTA Layout**: LocationSidebarCTA component (same as location pages)
- ✓ **Multiple Conversion Points**: Sticky sidebar, mid-content CTA, final CTA section
- ✓ **Natural Keyword Integration**: Target keywords mentioned 15+ times naturally
- ✓ **Helpful Content First**: 2,400 words of genuinely useful information
- ✓ **Visual Elements**: Info boxes, comparison tables, lists, warnings
- ✓ **Strategic Internal Links**: Links to service pages and location pages
- ✓ **Service-Area Business Model**: LocalBusiness schema clearly marked as "we come to you"

## Conversion Strategy

The sidebar CTA is THE most important element for getting phone calls and quotes:

1. **Sticky Sidebar**: Stays visible as user scrolls
2. **Prominent Phone CTA**: Orange button, impossible to miss
3. **Service List**: Shows what you remove
4. **Nearby Locations**: Cross-links to related pages
5. **Trust Badges**: Licensed & Insured, Eco-Friendly

The layout mirrors location pages intentionally - we know this converts well!

## Notes

- Always test build after creating: `npm run build`
- Update the date in metadata when publishing
- Create unique OG images for major posts if possible
- Monitor Google Search Console for schema errors
