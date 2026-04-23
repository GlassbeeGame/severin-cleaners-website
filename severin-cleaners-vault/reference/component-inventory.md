# Component Inventory — Severin Hauling

> All 26 React components in `src/components/`. Reference this to know what exists before building anything new.

---

## Page Type → Component Map

Use this to quickly see which components belong on which page type:

| Component | Location Pages | Service Pages | Blog Posts | All Pages |
|-----------|:---:|:---:|:---:|:---:|
| Header | | | | ✓ |
| Footer | | | | ✓ |
| SchemaMarkup | ✓ | ✓ | ✓ | |
| LocationSidebarCTA | ✓ | ✓ (via props) | ✓ (reused) | |
| LocationPricingSection | ✓ | ✓ (via props) | | |
| TrustSignalsSection | ✓ | ✓ | | |
| GoogleTagManager | | | | ✓ |

**How the sidebar works across page types**: `LocationSidebarCTA` is one flexible component used everywhere. Location pages pass nearby city pages to `nearbyLocations` with the default `nearbyHeading` ("Nearby Areas We Serve"). Service pages pass related service pages to `nearbyLocations` and override `nearbyHeading` to "Services We Provide". Blog posts use the location pattern. There is no separate `ServiceSidebarCTA` component — this prop-based approach handles all cases.

**How pricing works across page types**: `LocationPricingSection` is one flexible component used on both location and service pages. Pass the city name or service name as `locationName`. The heading renders as "Transparent [locationName] Junk Removal Pricing". There is no separate `ServicePricingSection` component.

---

## Full Component List

### Layout & Navigation

| Component | File | Purpose |
|-----------|------|---------|
| Header | `Header.tsx` | Site-wide header and navigation |
| Footer | `Footer.tsx` | Site-wide footer with links, contact info |

### SEO & Schema

| Component | File | Purpose |
|-----------|------|---------|
| SchemaMarkup | `SchemaMarkup.tsx` | Injects JSON-LD schema into page head |
| StructuredData | `StructuredData.tsx` | Alternative structured data component |
| GoogleTagManager | `GoogleTagManager.tsx` | GTM/analytics with deferred loading |

### Conversion & CTAs

| Component | File | Purpose |
|-----------|------|---------|
| LocationSidebarCTA | `LocationSidebarCTA.tsx` | Sticky sidebar: phone CTA, nearby locations/related services (prop-driven), trust badges, services list. Used on ALL content page types. |
| PhoneLink | `PhoneLink.tsx` | Clickable phone number link |
| Contact | `Contact.tsx` | Contact form |

### Content Sections

| Component | File | Purpose |
|-----------|------|---------|
| Hero | `Hero.tsx` | Homepage hero section |
| OptimizedGradientHero | `OptimizedGradientHero.tsx` | GPU-accelerated gradient hero (NOT used on location pages — they use inline section) |
| Introduction | `Introduction.tsx` | Page intro content block |
| Services | `Services.tsx` | Services listing/grid |
| ServiceHub | `ServiceHub.tsx` | Services hub page component |
| About | `About.tsx` | About section content |
| FAQ | `FAQ.tsx` | Shared FAQ accordion |
| FAQSection | `FAQSection.tsx` | FAQ section wrapper |
| Testimonials | `Testimonials.tsx` | Customer testimonials |
| EcoFriendly | `EcoFriendly.tsx` | Eco-friendly disposal messaging |
| NeighborhoodCoverage | `NeighborhoodCoverage.tsx` | Neighborhood listing for location pages |
| BeforeAfter | `BeforeAfter.tsx` | Before/after image comparison |

### Pricing & Trust

| Component | File | Purpose |
|-----------|------|---------|
| LocationPricingSection | `LocationPricingSection.tsx` | 4-tier pricing cards with gradient. Used on ALL content page types — pass city name or service name as `locationName` prop. |
| TrustSignalsSection | `TrustSignalsSection.tsx` | 4-stat trust signal grid with icons |
| TrustFactors | `TrustFactors.tsx` | Trust factor badges/icons |

### Utility

| Component | File | Purpose |
|-----------|------|---------|
| CheckIcon | `CheckIcon.tsx` | Checkmark icon component |
| CriticalCSS | `CriticalCSS.tsx` | Critical CSS inlining for performance |
| DeferredHydration | `DeferredHydration.tsx` | Deferred component hydration for CWV |

---

## Important Notes

1. **Location page heroes**: Use inline `<section>` with exact Tailwind classes (see `architecture/location-pages.md` → Hero Specification). Do NOT use `<OptimizedGradientHero />`.

2. **FAQ sections**: Most pages build their FAQ inline rather than using the shared `FAQ.tsx` or `FAQSection.tsx` component, because each page needs unique questions.

3. **Schema utilities** live in `src/lib/schema.ts`, not in components. The `SchemaMarkup` component is just the wrapper that injects the JSON-LD.
