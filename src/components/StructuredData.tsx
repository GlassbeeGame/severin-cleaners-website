import { REVIEW_CONFIG, FEATURED_TESTIMONIALS } from '@/config/reviews';
import { generateAggregateRatingSchema } from '@/lib/schema';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.severinhauling.com/#business",
        "name": "Severin Hauling - Best Junk Removal San Diego",
        "alternateName": ["Severin Junk Removal", "Best Junk Removal San Diego", "Top Rated Junk Removal San Diego"],
        "description": "San Diego's best junk removal service. Professional, licensed & insured full-service junk hauling. Same-day service for estate cleanouts, furniture removal, construction debris.",
        "url": "https://www.severinhauling.com",
        "telephone": "+1-619-750-0114",
        "email": "severinhauling@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "8900 Grossmont Blvd, Suite 1",
          "addressLocality": "La Mesa",
          "addressRegion": "CA",
          "postalCode": "91941",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "32.7781",
          "longitude": "-117.0229"
        },
        "hasMap": "https://www.google.com/maps?q=32.7781,-117.0229",
        "areaServed": [
          {
            "@type": "City",
            "name": "San Diego",
            "containedInPlace": {
              "@type": "State",
              "name": "California"
            }
          },
          {
            "@type": "City",
            "name": "El Cajon",
            "containedInPlace": "California"
          },
          {
            "@type": "City",
            "name": "La Mesa",
            "containedInPlace": "California"
          },
          {
            "@type": "City",
            "name": "Santee",
            "containedInPlace": "California"
          },
          {
            "@type": "City",
            "name": "Lakeside",
            "containedInPlace": "California"
          },
          {
            "@type": "City",
            "name": "Spring Valley",
            "containedInPlace": "California"
          },
          {
            "@type": "City",
            "name": "Lemon Grove",
            "containedInPlace": "California"
          },
          {
            "@type": "City",
            "name": "Chula Vista",
            "containedInPlace": "California"
          },
          {
            "@type": "City",
            "name": "Carmel Valley",
            "containedInPlace": "California"
          },
          {
            "@type": "City",
            "name": "Del Mar",
            "containedInPlace": "California"
          },
          {
            "@type": "City",
            "name": "Hillcrest",
            "containedInPlace": "California"
          },
          {
            "@type": "City",
            "name": "La Jolla",
            "containedInPlace": "California"
          },
          {
            "@type": "City",
            "name": "North Park",
            "containedInPlace": "California"
          },
          {
            "@type": "City",
            "name": "Oceanside",
            "containedInPlace": "California"
          },
          {
            "@type": "City",
            "name": "Pacific Beach",
            "containedInPlace": "California"
          },
          {
            "@type": "City",
            "name": "Point Loma",
            "containedInPlace": "California"
          },
          {
            "@type": "City",
            "name": "Poway",
            "containedInPlace": "California"
          },
          {
            "@type": "City",
            "name": "Rancho Santa Fe",
            "containedInPlace": "California"
          },
          {
            "@type": "City",
            "name": "Vista",
            "containedInPlace": "California"
          }
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        },
        "priceRange": "$$",
        "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Check", "Venmo", "Zelle"],
        "currenciesAccepted": "USD",
        "slogan": "From Junk to Shine, We Handle Every Grime",
        "keywords": "best junk removal san diego, junk removal near me, professional junk removal, top rated junk removal, licensed junk removal, local junk removal, full service junk removal",
        "knowsAbout": [
          "Junk Removal",
          "Furniture Removal",
          "Appliance Disposal",
          "Estate Cleanouts",
          "Construction Debris Removal",
          "Hoarding Cleanup",
          "Commercial Junk Removal",
          "Hot Tub Removal",
          "Mattress Disposal",
          "Foreclosure Cleanouts",
          "Emergency Junk Removal",
          "Same-Day Service",
          "Eco-Friendly Disposal",
          "Property Cleanouts",
          "Residential Junk Hauling",
          "Couch Removal",
          "Piano Removal",
          "Scrap Metal Recycling"
        ],
        "aggregateRating": generateAggregateRatingSchema(),
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "license",
            "name": "Licensed Junk Removal Service"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "certification",
            "name": "Insured Junk Removal Business"
          }
        ],
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "Same-Day Service Available",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Eco-Friendly Disposal & Recycling",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Licensed & Insured Business",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Free On-Site Estimates",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Bilingual Service (English/Spanish)",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Full-Service Hauling (We Do All The Work)",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Donation Coordination",
            "value": true
          }
        ],
        "image": [
          "https://www.severinhauling.com/optimized/couchwithlogo.jpg",
          "https://www.severinhauling.com/optimized/toiletteam.jpg",
          "https://www.severinhauling.com/optimized/commercial.jpg",
          "https://www.severinhauling.com/optimized/construction.jpg",
          "https://www.severinhauling.com/optimized/before.jpg",
          "https://www.severinhauling.com/optimized/after.jpg"
        ],
        "logo": "https://www.severinhauling.com/logo.png",
        "sameAs": REVIEW_CONFIG.socialProfiles
      },
      // Individual Review schemas for SEO rich snippets
      ...FEATURED_TESTIMONIALS.map((testimonial) => ({
        "@type": "Review",
        "@id": `https://www.severinhauling.com/#review-${testimonial.id}`,
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
          "@id": "https://www.severinhauling.com/#business",
          "name": "Severin Hauling",
          "telephone": "+1-619-750-0114",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "8900 Grossmont Blvd, Suite 1",
            "addressLocality": "La Mesa",
            "addressRegion": "CA",
            "postalCode": "91941",
            "addressCountry": "US"
          },
          "priceRange": "$$",
          "image": [
            "https://www.severinhauling.com/optimized/couchwithlogo.jpg",
            "https://www.severinhauling.com/optimized/toiletteam.jpg",
            "https://www.severinhauling.com/optimized/commercial.jpg"
          ]
        },
        "publisher": {
          "@type": "Organization",
          "name": "Google",
          "url": REVIEW_CONFIG.googleBusinessUrl
        }
      })),
      {
        "@type": "Service",
        "@id": "https://www.severinhauling.com/#junk-removal",
        "serviceType": "Junk Removal",
        "provider": {
          "@id": "https://www.severinhauling.com/#business"
        },
        "areaServed": {
          "@type": "State",
          "name": "California"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Junk Removal Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Furniture Removal",
                "description": "Professional furniture removal including couches, sofas, desks, beds, and all furniture types. Same-day service available.",
                "url": "https://www.severinhauling.com/furniture-disposal-san-diego"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "100",
                "maxPrice": "495",
                "priceCurrency": "USD"
              },
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Couch & Sofa Removal",
                "description": "Affordable couch removal starting at $100. Same-day sofa disposal, sectionals, loveseats, and recliners.",
                "url": "https://www.severinhauling.com/couch-removal-san-diego"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "100",
                "maxPrice": "495",
                "priceCurrency": "USD"
              },
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Appliance Removal",
                "description": "Professional appliance removal for refrigerators, washers, dryers, stoves, and all appliance types. Eco-friendly disposal.",
                "url": "https://www.severinhauling.com/appliance-removal-san-diego"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "100",
                "maxPrice": "495",
                "priceCurrency": "USD"
              },
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Estate Cleanouts",
                "description": "Compassionate estate cleanout services with sorting, donation coordination, and complete property clearing.",
                "url": "https://www.severinhauling.com/estate-cleanout-san-diego"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "100",
                "maxPrice": "495",
                "priceCurrency": "USD"
              },
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Construction Debris Removal",
                "description": "Efficient removal of construction waste, renovation debris, and demolition materials for contractors and homeowners.",
                "url": "https://www.severinhauling.com/construction-debris-removal-san-diego"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "100",
                "maxPrice": "495",
                "priceCurrency": "USD"
              },
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Commercial Junk Removal",
                "description": "Business-focused junk removal for offices, retail spaces, warehouses, and commercial properties.",
                "url": "https://www.severinhauling.com/commercial-junk-removal-san-diego"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "100",
                "maxPrice": "495",
                "priceCurrency": "USD"
              },
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hoarding Cleanup",
                "description": "Compassionate hoarding cleanup services with professional organizing. Judgment-free, confidential service.",
                "url": "https://www.severinhauling.com/hoarding-cleanup-san-diego"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "100",
                "maxPrice": "495",
                "priceCurrency": "USD"
              },
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Same-Day Junk Removal",
                "description": "Fast same-day junk removal service available 7 days a week. No rush fees or emergency charges.",
                "url": "https://www.severinhauling.com/same-day-junk-removal-san-diego"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "100",
                "maxPrice": "495",
                "priceCurrency": "USD"
              },
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Emergency Junk Removal",
                "description": "Emergency junk removal service for urgent cleanouts and immediate needs. Available 24/7.",
                "url": "https://www.severinhauling.com/emergency-junk-removal-san-diego"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "100",
                "maxPrice": "495",
                "priceCurrency": "USD"
              },
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cleanout Services",
                "description": "Complete property cleanout services for homes, garages, sheds, basements, and storage units.",
                "url": "https://www.severinhauling.com/cleanout-services-san-diego"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "100",
                "maxPrice": "495",
                "priceCurrency": "USD"
              },
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Foreclosure & Eviction Cleanout",
                "description": "Professional foreclosure and eviction cleanout services for property managers, banks, and real estate agents.",
                "url": "https://www.severinhauling.com/foreclosure-eviction-cleanout-san-diego"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "100",
                "maxPrice": "495",
                "priceCurrency": "USD"
              },
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hot Tub Removal",
                "description": "Complete hot tub and spa removal including dismantling, hauling, and eco-friendly disposal.",
                "url": "https://www.severinhauling.com/hot-tub-removal-san-diego"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "100",
                "maxPrice": "495",
                "priceCurrency": "USD"
              },
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mattress Disposal",
                "description": "Eco-friendly mattress disposal and recycling services. Same-day pickup available.",
                "url": "https://www.severinhauling.com/san-diego-mattress-disposal"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "100",
                "maxPrice": "495",
                "priceCurrency": "USD"
              },
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Scrap Metal Removal",
                "description": "Scrap metal removal and recycling for metal debris, appliances, and construction materials.",
                "url": "https://www.severinhauling.com/scrap-metal-removal"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "100",
                "maxPrice": "495",
                "priceCurrency": "USD"
              },
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Piano Removal",
                "description": "Professional piano removal services for upright, grand, and baby grand pianos. Expert handling and transport.",
                "url": "https://www.severinhauling.com/piano-removal-san-diego"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "100",
                "maxPrice": "495",
                "priceCurrency": "USD"
              },
              "availability": "https://schema.org/InStock"
            }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.severinhauling.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.severinhauling.com/#services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Contact",
            "item": "https://www.severinhauling.com/#contact"
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://www.severinhauling.com/#organization",
        "name": "Severin Hauling",
        "url": "https://www.severinhauling.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.severinhauling.com/logo.png",
          "width": 500,
          "height": 500
        },
        "image": [
          "https://www.severinhauling.com/optimized/couchwithlogo.jpg",
          "https://www.severinhauling.com/optimized/toiletteam.jpg",
          "https://www.severinhauling.com/optimized/commercial.jpg",
          "https://www.severinhauling.com/optimized/construction.jpg",
          "https://www.severinhauling.com/optimized/before.jpg"
        ],
        "telephone": "+1-619-750-0114",
        "email": "severinhauling@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "8900 Grossmont Blvd, Suite 1",
          "addressLocality": "La Mesa",
          "addressRegion": "CA",
          "postalCode": "91941",
          "addressCountry": "US"
        },
        "sameAs": REVIEW_CONFIG.socialProfiles,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-619-750-0114",
          "contactType": "customer service",
          "areaServed": "US-CA",
          "availableLanguage": ["en", "es"],
          "email": "severinhauling@gmail.com"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.severinhauling.com/#website",
        "url": "https://www.severinhauling.com",
        "name": "Severin Hauling - Best Junk Removal San Diego",
        "description": "San Diego's best junk removal service. Professional, licensed & insured full-service junk hauling. Same-day service for estate cleanouts, furniture removal, construction debris.",
        "publisher": {
          "@id": "https://www.severinhauling.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.google.com/search?q={search_term_string}+site:severinhauling.com"
          },
          "query-input": "required name=search_term_string"
        },
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}