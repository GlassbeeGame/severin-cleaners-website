// Schema.org structured data utilities

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string | string[];
  provider?: {
    name: string;
    telephone: string;
    url: string;
  };
}

export interface LocationServiceSchemaProps {
  locationName: string;
  serviceName: string;
  description: string;
  url: string;
}

/**
 * Generate BreadcrumbList schema for any page
 */
export function generateBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url,
    })),
  };
}

/**
 * Generate Service schema for service pages
 */
export function generateServiceSchema({
  name,
  description,
  url,
  serviceType,
  areaServed = "San Diego, CA",
  provider = {
    name: "Severin Cleaners",
    telephone: "+1-619-750-0114",
    url: "https://severincleaners.com",
  },
}: ServiceSchemaProps) {
  const areaServedData = Array.isArray(areaServed)
    ? areaServed.map((area) => ({
        "@type": "City",
        "name": area,
        "containedInPlace": {
          "@type": "State",
          "name": "California",
        },
      }))
    : {
        "@type": "City",
        "name": areaServed,
        "containedInPlace": {
          "@type": "State",
          "name": "California",
        },
      };

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url,
    "serviceType": serviceType,
    "provider": {
      "@type": "LocalBusiness",
      "name": provider.name,
      "telephone": provider.telephone,
      "url": provider.url,
    },
    "areaServed": areaServedData,
  };
}

/**
 * Generate location-specific service schema for location pages
 */
export function generateLocationServiceSchema({
  locationName,
  serviceName,
  description,
  url,
}: LocationServiceSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${serviceName} in ${locationName}`,
    "description": description,
    "url": url,
    "serviceType": serviceName,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Severin Cleaners",
      "telephone": "+1-619-750-0114",
      "url": "https://severincleaners.com",
    },
    "areaServed": {
      "@type": "City",
      "name": locationName,
      "containedInPlace": {
        "@type": "State",
        "name": "California",
      },
    },
  };
}

/**
 * Generate LocalBusiness schema for homepage
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Severin Cleaners - Best Junk Removal San Diego",
    "alternateName": [
      "Severin Junk Removal",
      "Best Junk Removal San Diego",
      "Top Rated Junk Removal San Diego",
    ],
    "description":
      "San Diego's best junk removal service. Professional, licensed & insured full-service junk hauling. Same-day service for estate cleanouts, furniture removal, construction debris.",
    "url": "https://severincleaners.com",
    "telephone": "+1-619-750-0114",
    "email": "severincleaners@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8900 Grossmont Blvd",
      "addressLocality": "La Mesa",
      "addressRegion": "CA",
      "postalCode": "91941",
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7781",
      "longitude": "-117.0229",
    },
    "areaServed": [
      { "@type": "City", "name": "San Diego", "containedInPlace": { "@type": "State", "name": "California" } },
      { "@type": "City", "name": "El Cajon", "containedInPlace": "California" },
      { "@type": "City", "name": "La Mesa", "containedInPlace": "California" },
      { "@type": "City", "name": "Santee", "containedInPlace": "California" },
      { "@type": "City", "name": "Lakeside", "containedInPlace": "California" },
      { "@type": "City", "name": "Spring Valley", "containedInPlace": "California" },
      { "@type": "City", "name": "Lemon Grove", "containedInPlace": "California" },
      { "@type": "City", "name": "Chula Vista", "containedInPlace": "California" },
      { "@type": "City", "name": "Carmel Valley", "containedInPlace": "California" },
      { "@type": "City", "name": "Del Mar", "containedInPlace": "California" },
      { "@type": "City", "name": "Hillcrest", "containedInPlace": "California" },
      { "@type": "City", "name": "La Jolla", "containedInPlace": "California" },
      { "@type": "City", "name": "North Park", "containedInPlace": "California" },
      { "@type": "City", "name": "Oceanside", "containedInPlace": "California" },
      { "@type": "City", "name": "Pacific Beach", "containedInPlace": "California" },
      { "@type": "City", "name": "Point Loma", "containedInPlace": "California" },
      { "@type": "City", "name": "Poway", "containedInPlace": "California" },
      { "@type": "City", "name": "Rancho Santa Fe", "containedInPlace": "California" },
      { "@type": "City", "name": "Vista", "containedInPlace": "California" },
      { "@type": "City", "name": "Clairemont", "containedInPlace": "California" },
      { "@type": "City", "name": "Kearny Mesa", "containedInPlace": "California" },
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "00:00",
      "closes": "23:59",
    },
    "priceRange": "$$",
    "paymentAccepted": [
      "Cash",
      "Credit Card",
      "Debit Card",
      "Check",
      "Venmo",
      "Zelle",
    ],
    "currenciesAccepted": "USD",
    "slogan": "From Junk to Shine, We Handle Every Grime",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "18",
      "bestRating": "5",
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "license",
        "name": "Licensed Junk Removal Service",
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "Insured Junk Removal Business",
      },
    ],
    "image": [
      "https://severincleaners.com/junk-removal-truck.jpg",
      "https://severincleaners.com/team-photo.jpg",
      "https://severincleaners.com/before-after.jpg",
    ],
    "logo": "https://severincleaners.com/logo.png",
  };
}

/**
 * Combine multiple schema objects into a @graph structure
 */
export function combineSchemas(...schemas: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas,
  };
}
