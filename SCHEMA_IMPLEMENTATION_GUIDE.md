# Schema Markup Implementation Guide

This guide shows how to add proper schema markup to all pages using the utility functions in `/src/lib/schema.ts`.

## What's Already Done

✅ **Homepage** - LocalBusiness + BreadcrumbList schema
✅ **La Jolla Location Page** - Location Service + BreadcrumbList schema
✅ **Same Day Service Page** - Service + BreadcrumbList schema

## Remaining Pages (35 pages)

### Location Pages (18 remaining)

For each location page, add these imports and schema:

```typescript
// Add to imports
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

// In the component function, before return:
export default function JunkRemoval[Location]Page() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "[Location Name]",
    serviceName: "Junk Removal",
    description: "[First sentence from meta description]",
    url: "https://severincleaners.com/junk-removal-[location-slug]",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "[Location] Junk Removal", url: "https://severincleaners.com/junk-removal-[location-slug]" },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema],
  };

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <div className={`${inter.variable} font-sans antialiased`}>
        {/* existing JSX */}
      </div>
    </>
  );
}
```

**Location pages to update:**

1. `/junk-removal-carmel-valley` - locationName: "Carmel Valley"
2. `/junk-removal-chula-vista` - locationName: "Chula Vista"
3. `/junk-removal-clairemont` - locationName: "Clairemont"
4. `/junk-removal-del-mar` - locationName: "Del Mar"
5. `/junk-removal-el-cajon` - locationName: "El Cajon"
6. `/junk-removal-hillcrest` - locationName: "Hillcrest"
7. `/junk-removal-kearny-mesa` - locationName: "Kearny Mesa"
8. `/junk-removal-la-mesa` - locationName: "La Mesa"
9. `/junk-removal-lakeside` - locationName: "Lakeside"
10. `/junk-removal-lemon-grove` - locationName: "Lemon Grove"
11. `/junk-removal-north-park` - locationName: "North Park"
12. `/junk-removal-oceanside` - locationName: "Oceanside"
13. `/junk-removal-pacific-beach` - locationName: "Pacific Beach"
14. `/junk-removal-point-loma` - locationName: "Point Loma"
15. `/junk-removal-poway` - locationName: "Poway"
16. `/junk-removal-rancho-santa-fe` - locationName: "Rancho Santa Fe"
17. `/junk-removal-santee` - locationName: "Santee"
18. `/junk-removal-spring-valley` - locationName: "Spring Valley"
19. `/junk-removal-vista` - locationName: "Vista"

---

### Service Pages (13 remaining)

For each service page, add these imports and schema:

```typescript
// Add to imports
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

// In the component function, before return:
export default function [ServiceName]Page() {
  const serviceSchema = generateServiceSchema({
    name: "[Full Service Name]",
    description: "[First sentence from meta description]",
    url: "https://severincleaners.com/[service-slug]",
    serviceType: "[Service Type]",
    areaServed: [
      "San Diego",
      "El Cajon",
      "La Jolla",
      "Chula Vista",
      // Add more as relevant
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "[Service Name]", url: "https://severincleaners.com/[service-slug]" },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema],
  };

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <div className={`${inter.variable} font-sans antialiased`}>
        {/* existing JSX */}
      </div>
    </>
  );
}
```

**Service pages to update:**

1. `/san-diego-junk-removal` - serviceType: "Junk Removal"
2. `/appliance-removal-san-diego` - serviceType: "Appliance Removal"
3. `/cleanout-services-san-diego` - serviceType: "Cleanout Services"
4. `/commercial-junk-removal-san-diego` - serviceType: "Commercial Junk Removal"
5. `/construction-debris-removal-san-diego` - serviceType: "Construction Debris Removal"
6. `/emergency-junk-removal-san-diego` - serviceType: "Emergency Junk Removal"
7. `/estate-cleanout-san-diego` - serviceType: "Estate Cleanout"
8. `/foreclosure-eviction-cleanout-san-diego` - serviceType: "Foreclosure Cleanout"
9. `/furniture-removal-san-diego` - serviceType: "Furniture Removal"
10. `/hoarding-cleanup-san-diego` - serviceType: "Hoarding Cleanup"
11. `/hot-tub-removal-san-diego` - serviceType: "Hot Tub Removal"
12. `/piano-removal-san-diego` - serviceType: "Piano Removal"
13. `/junk-removal-cost-san-diego` - serviceType: "Junk Removal Pricing"

---

### Other Pages (4 remaining)

#### `/about`

```typescript
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateBreadcrumbSchema } from "@/lib/schema";

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "About", url: "https://severincleaners.com/about" },
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      {/* existing JSX */}
    </>
  );
}
```

#### `/contact`

```typescript
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateBreadcrumbSchema } from "@/lib/schema";

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Contact", url: "https://severincleaners.com/contact" },
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      {/* existing JSX */}
    </>
  );
}
```

#### `/services`

```typescript
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateBreadcrumbSchema } from "@/lib/schema";

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      {/* existing JSX */}
    </>
  );
}
```

#### `/areas-we-serve`

```typescript
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateBreadcrumbSchema } from "@/lib/schema";

export default function AreasWeServePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      {/* existing JSX */}
    </>
  );
}
```

---

## Canonical URLs - Verification Checklist

All pages should already have canonical URLs in their metadata. Verify each page has this in the `metadata` export:

```typescript
export const metadata: Metadata = {
  // ... other metadata
  alternates: {
    canonical: "https://severincleaners.com/[page-slug]",
  },
};
```

**Pages to verify canonical URLs:**

- ✅ Homepage (in layout.tsx)
- ✅ La Jolla (already checked)
- ✅ Same Day (already checked)
- ⚠️ All other 35 pages - need verification

---

## Meta Descriptions - Verification Checklist

Each page must have a unique meta description. Check that no two pages share the same description.

**Current meta descriptions to verify:**

1. All location pages should mention the specific location
2. All service pages should mention the specific service
3. No generic descriptions like "San Diego junk removal" on multiple pages

---

## Quick Implementation Checklist

For each page:

1. [ ] Add schema imports
2. [ ] Generate appropriate schemas (Service or LocationService + Breadcrumb)
3. [ ] Add SchemaMarkup component in JSX
4. [ ] Verify canonical URL exists in metadata
5. [ ] Verify unique meta description
6. [ ] Test page builds without errors

---

## Testing Schema

After implementation, validate schema using:

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema.org Validator**: https://validator.schema.org/
3. **Chrome DevTools**: Check `<script type="application/ld+json">` in page source

---

## Common Patterns

### Wrapping the return statement

**Before:**
```typescript
return (
  <div>
    <Header />
    {/* content */}
  </div>
);
```

**After:**
```typescript
return (
  <>
    <SchemaMarkup schema={combinedSchema} />
    <div>
      <Header />
      {/* content */}
    </div>
  </>
);
```

### Combining multiple schemas

```typescript
const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [serviceSchema, breadcrumbSchema],
};
```

All schemas should be combined into a single `@graph` array for better organization.
