# NAP Strategy — Severin Hauling

> NAP (Name, Address, Phone) consistency is one of the top local SEO ranking factors. This file defines the exact format and rules. Read this before touching any schema, citation, or business listing.

---

## Business Classification: Service Area Business (SAB)

Severin Hauling is a **Service Area Business** — the business travels to customers (not a storefront). Customers do not visit the physical address.

This means:
- Physical headquarters in La Mesa (for Google verification and trust)
- Service area covers all of San Diego County (24+ cities)
- Google Business Profile should show service areas, not a pin on the map

---

## Exact NAP Format

**This format must be identical everywhere — website, schema, citations, directories, social profiles.**

```
Name:    Severin Hauling LLC
Address: 8900 Grossmont Blvd, Suite 1, La Mesa, CA 91941
Phone:   (619) 750-0114
Email:   severinhauling@gmail.com
```

### Format Rules (No Exceptions)

| Field | Correct | Wrong |
|-------|---------|-------|
| Name | Severin Hauling LLC | Severin Hauling, Severin Cleaners LLC, Severin Hauling Co. |
| Suite | Suite 1 | Ste 1, Ste. 1, #1, Unit 1 |
| City | La Mesa | LaMesa, la mesa, La Mesa California |
| Phone | (619) 750-0114 | 619-750-0114, 6197500114, +1 619 750 0114 |
| Email | severinhauling@gmail.com | severincleaners@gmail.com (old pre-rebrand email) |

---

## Two-Layer NAP Strategy for SABs

### Layer 1: Physical Headquarters (La Mesa)

**Where it appears**: Google Business Profile, schema markup (LocalBusiness), About page, Contact page, Footer, all business directories

**Purpose**: Verifies the business is real, enables Google verification, legal correspondence address, trust signal for customers

### Layer 2: Service Areas (All of San Diego County)

**Where it appears**: Google Business Profile service areas, service page schema (areaServed), location pages, service area hub page

**Purpose**: Tells Google WHERE the business operates, helps rank in those areas, clarifies service coverage without confusing the physical address

---

## Schema Markup NAP Rules

### Address in Schema: Always La Mesa HQ

```javascript
"address": {
  "@type": "PostalAddress",
  "streetAddress": "8900 Grossmont Blvd, Suite 1",
  "addressLocality": "La Mesa",
  "addressRegion": "CA",
  "postalCode": "91941",
  "addressCountry": "US"
}
```

### Geo Coordinates in Schema: Always La Mesa HQ

```javascript
"geo": {
  "@type": "GeoCoordinates",
  "latitude": "32.7781",
  "longitude": "-117.0229"
}
```

### areaServed in Schema: All Cities

```javascript
"areaServed": [
  { "@type": "City", "name": "San Diego" },
  { "@type": "City", "name": "La Jolla" },
  { "@type": "City", "name": "Chula Vista" },
  { "@type": "City", "name": "El Cajon" },
  { "@type": "City", "name": "Escondido" },
  { "@type": "City", "name": "Oceanside" },
  { "@type": "City", "name": "Carlsbad" },
  // ... all 24+ cities
]
```

**This tells Google**: "Business is physically in La Mesa, but SERVES all of San Diego County."

---

## Geo Tag Strategy

**Different from schema.** Geo meta tags tell Google what geographic area a specific page is about.

See `architecture/seo-standards.md` → Geo Tag Strategy for the full rules. Quick summary:

- **Service pages**: Use San Diego metro coordinates (32.7157, -117.1611)
- **Location pages**: Use that specific city's coordinates
- **Company pages**: Use La Mesa HQ coordinates (32.7781, -117.0229)

---

## Google Business Profile Setup

**Recommended configuration for SABs:**
- **Hide** the physical address from public view
- **Show** service areas instead (list all 24+ cities)
- **Benefits**: Ranks in ALL service areas, looks professional for a mobile service business, avoids customer confusion about whether you're a storefront

---

## Citation Verification Checklist

All these directories must show the EXACT NAP format above:

- [ ] Google Business Profile
- [ ] Yelp
- [ ] Facebook Business Page
- [ ] Better Business Bureau
- [ ] Thumbtack
- [ ] Angi's List / HomeAdvisor
- [ ] Yellow Pages
- [ ] Bing Places

**Check quarterly.** Directories sometimes auto-update or revert to old data.

---

## Common Mistakes to Avoid

1. **Name variation**: "Severin Hauling" without LLC, or old name "Severin Cleaners"
2. **Suite format**: "Ste 1" or "#1" instead of "Suite 1"
3. **Phone format**: Missing parentheses or using dashes only
4. **Using San Diego as address**: The address is La Mesa, not San Diego — using a service area city as the address triggers Google penalties
5. **Using PO Box or virtual office**: Must be a real physical address
6. **Old email**: `severincleaners@gmail.com` was the pre-rebrand email — all references should now use `severinhauling@gmail.com`

---

## Why This Matters for Rankings

Consistent NAP across 50+ directories gives a 20-30% ranking advantage over competitors who have inconsistencies. Google cross-references your website schema, GBP, and directory listings — any mismatch reduces trust and hurts local pack rankings.

Most competitors in San Diego junk removal have:
- Inconsistent NAP across listings
- No proper SAB configuration
- No comprehensive areaServed in schema
- Generic content without location depth

Getting NAP right is one of the easiest competitive advantages to maintain.
