export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://severincleaners.com/#business",
        "name": "Severin Cleaners",
        "alternateName": "Severin Junk Removal",
        "description": "Professional junk removal and hauling services in El Cajon, San Diego. Same-day service for estate cleanouts, furniture removal, construction debris. Licensed & insured.",
        "url": "https://severincleaners.com",
        "telephone": "+1-619-750-0114",
        "email": "severincleaners@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "El Cajon",
          "addressRegion": "CA",
          "postalCode": "92020",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "32.7948",
          "longitude": "-116.9625"
        },
        "areaServed": [
          "El Cajon, CA",
          "La Mesa, CA",
          "Santee, CA",
          "Lakeside, CA",
          "Spring Valley, CA",
          "Lemon Grove, CA",
          "San Diego, CA",
          "Chula Vista, CA",
          "National City, CA",
          "Bonita, CA",
          "Alpine, CA",
          "Jamul, CA"
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
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "18",
          "bestRating": "5"
        },
        "image": [
          "https://severincleaners.com/junk-removal-truck.jpg",
          "https://severincleaners.com/team-photo.jpg",
          "https://severincleaners.com/before-after.jpg"
        ],
        "logo": "https://severincleaners.com/logo.png"
      },
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
                "name": "Residential Junk Removal",
                "description": "Home cleanouts, furniture removal, appliance disposal, garage cleanouts"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Commercial Junk Removal",
                "description": "Office cleanouts, retail space clearing, warehouse debris removal"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Estate Cleanouts",
                "description": "Complete estate clearing with sorting, donation coordination, and disposal"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Construction Debris Removal",
                "description": "Demolition waste, renovation debris, construction material disposal"
              }
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