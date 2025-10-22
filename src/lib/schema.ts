// Schema.org structured data utilities
import { REVIEW_CONFIG, type Testimonial } from '@/config/reviews';

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
      "priceRange": "$$",
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
      "priceRange": "$$",
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
 * Generate Service schema for junk removal (SEO optimized)
 * Uses ONLY actual information verified from the website
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Junk Removal Service",
    "name": "Severin Cleaners",
    "description": "Professional junk removal and hauling services in San Diego County. Same-day service available for furniture removal, appliance disposal, estate cleanouts, construction debris removal, and more.",
    "url": "https://severincleaners.com",
    "slogan": "From Junk to Shine, We Handle Every Grime",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Severin Cleaners",
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
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "18",
        "bestRating": "5",
      },
    },
    "areaServed": {
      "@type": "State",
      "name": "California",
      "containsPlace": {
        "@type": "AdministrativeArea",
        "name": "San Diego County",
      }
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "servicePhone": {
        "@type": "ContactPoint",
        "telephone": "+1-619-750-0114",
        "contactType": "customer service",
      }
    },
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "100",
        "maxPrice": "495",
        "priceCurrency": "USD",
      },
      "availability": "https://schema.org/InStock",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Junk Removal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Same Day Junk Removal",
            "description": "Emergency junk removal service for urgent cleanouts and immediate needs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Furniture Removal",
            "description": "Professional furniture removal for homes, offices, and businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Appliance Removal",
            "description": "Safe removal and eco-friendly disposal of household and commercial appliances"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Estate Cleanouts",
            "description": "Compassionate estate cleanout services for families dealing with inherited properties"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Construction Debris Removal",
            "description": "Efficient removal of construction waste, renovation debris, and demolition materials"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hoarding Cleanup",
            "description": "Sensitive hoarding cleanup with professional organizing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hot Tub Removal",
            "description": "Complete hot tub and spa removal including dismantling"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Junk Removal",
            "description": "Business-focused junk removal for offices, retail spaces, and warehouses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Junk Removal",
            "description": "Emergency junk removal service for urgent situations"
          }
        }
      ]
    }
  };
}

/**
 * Generate individual Review schema from testimonial
 * Used for SEO rich snippets with star ratings
 */
export function generateReviewSchema(testimonial: Testimonial) {
  return {
    "@type": "Review",
    "@id": `https://severincleaners.com/#review-${testimonial.id}`,
    "author": {
      "@type": "Person",
      "name": testimonial.name
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": testimonial.rating.toString(),
      "bestRating": "5"
    },
    "reviewBody": testimonial.text,
    "datePublished": testimonial.datePublished,
    "itemReviewed": {
      "@type": "LocalBusiness",
      "@id": "https://severincleaners.com/#business",
      "name": "Severin Cleaners"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Google",
      "url": REVIEW_CONFIG.googleBusinessUrl
    }
  };
}

/**
 * Generate multiple Review schemas from testimonials array
 */
export function generateReviewsSchema(testimonials: Testimonial[]) {
  return testimonials.map(testimonial => generateReviewSchema(testimonial));
}

/**
 * Generate AggregateRating schema with consistent review data
 */
export function generateAggregateRatingSchema() {
  return {
    "@type": "AggregateRating",
    "ratingValue": REVIEW_CONFIG.ratingValue,
    "reviewCount": REVIEW_CONFIG.totalReviews.toString(),
    "bestRating": REVIEW_CONFIG.bestRating
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
