import { REVIEW_CONFIG, FEATURED_TESTIMONIALS } from '@/config/reviews';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://severincleaners.com/#business",
        "name": "Severin Cleaners - Best Junk Removal San Diego",
        "alternateName": ["Severin Junk Removal", "Best Junk Removal San Diego", "Top Rated Junk Removal San Diego"],
        "description": "San Diego's best junk removal service. Professional, licensed & insured full-service junk hauling. Same-day service for estate cleanouts, furniture removal, construction debris.",
        "url": "https://severincleaners.com",
        "telephone": "+1-619-750-0114",
        "email": "severincleaners@gmail.com",
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
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": REVIEW_CONFIG.ratingValue,
          "reviewCount": REVIEW_CONFIG.totalReviews.toString(),
          "bestRating": REVIEW_CONFIG.bestRating
        },
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
        "image": [
          "https://severincleaners.com/optimized/couchwithlogo.jpg",
          "https://severincleaners.com/optimized/tableteam.jpg",
          "https://severincleaners.com/optimized/toiletteam.jpg",
          "https://severincleaners.com/optimized/commercial.jpg",
          "https://severincleaners.com/optimized/debris.jpg",
          "https://severincleaners.com/optimized/before.jpg",
          "https://severincleaners.com/optimized/after.jpg"
        ],
        "logo": "https://severincleaners.com/logo.png",
        "sameAs": REVIEW_CONFIG.socialProfiles
      },
      // Individual Review schemas for SEO rich snippets
      ...FEATURED_TESTIMONIALS.map((testimonial) => ({
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
          "@id": "https://severincleaners.com/#business"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Google",
          "url": REVIEW_CONFIG.googleBusinessUrl
        }
      })),
      {
        "@type": "Service",
        "@id": "https://severincleaners.com/#junk-removal",
        "serviceType": "Junk Removal",
        "provider": {
          "@id": "https://severincleaners.com/#business"
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
                "url": "https://severincleaners.com/furniture-removal-san-diego"
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
                "url": "https://severincleaners.com/couch-removal-san-diego"
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
                "url": "https://severincleaners.com/appliance-removal-san-diego"
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
                "url": "https://severincleaners.com/estate-cleanout-san-diego"
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
                "url": "https://severincleaners.com/construction-debris-removal-san-diego"
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
                "url": "https://severincleaners.com/commercial-junk-removal-san-diego"
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
                "url": "https://severincleaners.com/hoarding-cleanup-san-diego"
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
                "url": "https://severincleaners.com/same-day-junk-removal-san-diego"
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
                "url": "https://severincleaners.com/emergency-junk-removal-san-diego"
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
                "url": "https://severincleaners.com/cleanout-services-san-diego"
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
                "url": "https://severincleaners.com/foreclosure-eviction-cleanout-san-diego"
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
                "url": "https://severincleaners.com/hot-tub-removal-san-diego"
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
                "url": "https://severincleaners.com/san-diego-mattress-disposal"
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
                "url": "https://severincleaners.com/scrap-metal-removal"
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
                "url": "https://severincleaners.com/piano-removal-san-diego"
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
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How quickly can you remove junk in El Cajon?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer same-day junk removal service in El Cajon and surrounding areas. Call us at (619) 750-0114 for immediate assistance."
            }
          },
          {
            "@type": "Question",
            "name": "What types of junk do you remove?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We remove furniture, appliances, electronics, yard waste, construction debris, and general household junk. We handle everything except hazardous materials."
            }
          },
          {
            "@type": "Question",
            "name": "How much does junk removal cost in San Diego?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our junk removal prices vary based on volume and type of items. We offer free estimates and transparent pricing with no hidden fees."
            }
          },
          {
            "@type": "Question",
            "name": "Are you licensed and insured?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Severin Cleaners is fully licensed and insured for all junk removal services in San Diego County."
            }
          }
        ]
      },
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
            "name": "Services",
            "item": "https://severincleaners.com/#services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Contact",
            "item": "https://severincleaners.com/#contact"
          }
        ]
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