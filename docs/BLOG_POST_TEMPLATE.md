# Blog Post Template - Severin Cleaners

This template provides the structure for blog posts with sidebar CTA matching the location page layout for maximum conversion.

## Quick Start

1. Copy the template code below to: `src/app/blog/[your-blog-slug]/page.tsx`
2. Update all `[PLACEHOLDER]` values
3. Fill in your content sections
4. Update schema, metadata, and nearbyLocations arrays
5. Test build: `npm run build`

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
  // ... see full template in santee-dump-guide/page.tsx
};

export default function BlogPostName() {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      // BlogPosting schema
      // FAQPage schema (optional)
      // Other relevant schema types
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

## Schema Types to Consider

- **BlogPosting**: Required for all blog posts
- **FAQPage**: If you have Q&A section
- **HowTo**: For step-by-step guides
- **Place**: For location-specific content
- **Service**: When discussing specific services

## Working Example

See the complete Santee Dump Guide for a fully implemented example:
- File: `src/app/blog/santee-dump-guide/page.tsx`
- URL: `/blog/santee-dump-guide`

This guide demonstrates:
- ✓ Sidebar CTA layout (like location pages)
- ✓ Multiple conversion points
- ✓ Comprehensive schema markup
- ✓ Natural keyword integration
- ✓ Helpful content that positions professional service
- ✓ Tables, info boxes, and visual elements
- ✓ Internal linking strategy

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
