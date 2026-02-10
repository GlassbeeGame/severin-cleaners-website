import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/SchemaMarkup";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import { generateLocationServiceSchema, generateBreadcrumbSchema, generateAggregateRatingSchema, generateHowToSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: 'North Park Junk Removal | Urban Neighborhood Experts | (619) 750-0114',
  description: 'North Park urban junk removal 30th St to University Ave. Craftsman homes, street parking, apartment turnovers. (619) 750-0114',
  keywords: [
    'North Park junk removal',
    'junk hauling North Park',
    'junk pickup North Park',
    'trash removal North Park',
    'North Park San Diego junk removal',
    'University Avenue junk hauling',
    '30th Street junk removal'
  ],
  openGraph: {
    title: 'North Park Junk Removal | Same-Day Hauling | Licensed & Insured',
    description: 'Professional North Park junk removal for University Avenue, 30th Street, apartments & historic homes. Same-day service, transparent pricing. Licensed & insured. Call (619) 750-0114!',
    url: 'https://www.severinhauling.com/junk-removal-north-park',
    siteName: 'Severin Hauling',
    type: 'website',
    locale: 'en_US',
    images: [{
      url: 'https://www.severinhauling.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'North Park Junk Removal - Severin Hauling'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'North Park Junk Removal | Same-Day Hauling | Licensed & Insured',
    description: 'Professional North Park junk removal for University Avenue, 30th Street, apartments & historic homes. Same-day service, transparent pricing. Licensed & insured.',
    images: ['https://www.severinhauling.com/og-image.jpg']
  },
  alternates: {
    canonical: 'https://www.severinhauling.com/junk-removal-north-park',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'US-CA',
    'geo.placename': 'North Park',
    'geo.position': '32.7406;-117.1292',
    'ICBM': '32.7406, -117.1292',
  },
};

const northParkFAQs = [
  {
    question: "How much does junk removal cost in North Park?",
    answer: "Our North Park junk removal pricing is transparent and based on trailer volume:"
  },
  {
    question: "Can you remove heavy items like couches and appliances in North Park?",
    answer: "Absolutely! Our junk hauling North Park team specializes in removing heavy furniture and appliances from apartments, condos, and Craftsman homes throughout North Park. We safely handle:"
  },
  {
    question: "Do you provide same-day junk hauling in North Park?",
    answer: "Yes! We offer same-day junk pickup North Park service when you call before 2 PM. This is especially helpful for apartment cleanouts near University Avenue, restaurant or bar waste removal from the 30th Street nightlife district, and emergency situations throughout the North Park arts community. During busy weekends, we recommend scheduling morning appointments to guarantee same-day service."
  },
  {
    question: "What types of junk do you not remove?",
    answer: "We handle all standard household items, furniture, appliances, construction debris, yard waste, and more in accordance with local regulations. If you're unsure about a specific item, please call us at (619) 750-0114 and we can discuss it — there are various factors that can affect pricing and service options."
  },
  {
    question: "Are you licensed and insured for junk removal in San Diego?",
    answer: "Yes! Severin Hauling is fully licensed and insured to provide North Park San Diego junk removal services throughout North Park and all of San Diego County. We carry comprehensive liability insurance to protect your property during removal, and we dispose of all items responsibly at licensed facilities. Our team follows all local regulations for waste handling and environmental compliance."
  },
  {
    question: "Do you handle apartment building junk removal in North Park?",
    answer: "Yes, we specialize in North Park apartment junk removal throughout the neighborhood's many multi-story buildings along University Avenue, 30th Street, and surrounding residential corridors. We coordinate with building managers and HOAs, schedule elevator use during non-peak hours, and navigate loading zones and street parking restrictions common in North Park's dense urban environment. Our crews are experienced with walk-up apartments, buildings without elevator access, and narrow stairwells in older Craftsman-era buildings. We handle single apartment turnovers, multi-unit property cleanouts, and tenant move-out situations throughout the 92104 zip code."
  },
  {
    question: "Can you remove junk from Craftsman homes in North Park?",
    answer: "Absolutely. North Park's historic Craftsman bungalows require specialized care during junk removal, and our team is experienced protecting original hardwood floors, narrow hallways, and period architectural details. We use floor protection, careful maneuvering techniques for tight doorways and staircases, and understand the challenges of century-old homes with limited turning radius. Whether you're clearing out built-in furniture, removing renovation debris from a historic remodel, or handling an estate cleanout in an original Craftsman along Idaho Street or Utah Street, we deliver professional service that respects North Park's architectural heritage."
  },
  {
    question: "Do you work around North Park's nightlife and restaurant schedule?",
    answer: "Yes, we understand that North Park's vibrant 30th Street and University Avenue corridors operate on nightlife schedules, and we coordinate junk removal for bars, restaurants, and entertainment venues around your business hours. We offer early morning service (6-8 AM) before opening time, late afternoon scheduling between lunch and dinner service, and flexible timing that doesn't disrupt your operations. Our crews have removed restaurant equipment, bar fixtures, and commercial debris from dozens of North Park establishments, always working efficiently to minimize business impact."
  },
  {
    question: "What's the best time to schedule junk removal in North Park to avoid parking issues?",
    answer: "North Park's street parking can be challenging, especially along University Avenue and 30th Street. We recommend scheduling service during mid-morning hours (9 AM - 1 PM) when metered parking is less congested and we can secure loading zones near your property. We handle all parking logistics including metered zones, 2-hour limits, and restricted areas, and our crews arrive with quarters and parking payment apps ready. For evening appointments, we navigate around North Park's nightlife parking demand by scheduling earlier in the day when street access is easier."
  },
  {
    question: "Do you donate items to North Park charities and community organizations?",
    answer: "Yes, we prioritize donating usable items to North Park and San Diego area charities whenever possible. Furniture in good condition, working appliances, and household goods go to local organizations including Goodwill, Salvation Army, and community resource centers. We're familiar with donation requirements and coordinate drop-offs at North County facilities. For North Park residents who want items to benefit the local community, we make every effort to support charitable organizations serving the 92104 area and broader San Diego region."
  }
];

export default function JunkRemovalNorthParkPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.severinhauling.com" },
    { name: "Areas We Serve", url: "https://www.severinhauling.com/areas-we-serve" },
    { name: "North Park Junk Removal", url: "https://www.severinhauling.com/junk-removal-north-park" },
  ]);

  const faqSchema = generateFAQSchema(northParkFAQs);

  const serviceSchema = {
    "@type": "Service",
    "name": "Junk Removal in North Park",
    "description": "Professional North Park junk removal for University Avenue, 30th Street, apartments & historic homes. Same-day service, transparent pricing. Licensed & insured.",
    "url": "https://www.severinhauling.com/junk-removal-north-park",
    "serviceType": "Junk Removal",
    "provider": {
      "@id": "https://www.severinhauling.com/junk-removal-north-park#business"
    }
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://www.severinhauling.com/junk-removal-north-park#business",
    "name": "Severin Hauling LLC",
    "image": "https://www.severinhauling.com/og-image.jpg",
    "telephone": "+1-619-750-0114",
    "priceRange": "$69-$495",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Venmo", "Zelle", "Cash App"],
    "acceptsReservations": true,
    "currenciesAccepted": "USD",
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
      "longitude": -117.0231
    },
    "url": "https://www.severinhauling.com/junk-removal-north-park",
    "knowsAbout": [
      "Urban Neighborhood Parking and Access",
      "Craftsman Home Historic Property Care",
      "Multi-Story Apartment Building Navigation",
      "University Avenue Commercial District Service",
      "30th Street Restaurant and Nightlife Coordination",
      "North Park Arts District Material Handling",
      "Dense Urban Property Logistics",
      "Historic Building Original Hardwood Protection"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "North Park Junk Removal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "University Avenue Apartment Complex Service",
            "description": "Multi-story apartment junk removal with elevator scheduling and building coordination for North Park's dense residential corridor"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Craftsman Home Historic Property Cleanouts",
            "description": "Careful junk removal for North Park's century-old Craftsman homes with hardwood floor and architectural detail protection"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "30th Street Commercial Restaurant Cleanouts",
            "description": "Flexible scheduling for North Park restaurant and bar equipment removal coordinated around business hours"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ray Street Arts District Studio Cleanouts",
            "description": "Art supplies, creative materials, and gallery installation removal for North Park's creative community"
          }
        }
      ]
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "North Park",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "PostalCode",
        "postalCode": "92104",
        "addressLocality": "San Diego",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    ],
    "openingHours": "Mo-Su 00:00-23:59",
    "aggregateRating": generateAggregateRatingSchema(),
    "sameAs": [
      "https://www.facebook.com/severinhauling",
      "https://www.instagram.com/severinhauling/",
      "https://www.yelp.com/biz/severin-hauling-san-diego",
      "https://www.thumbtack.com/ca/la-mesa/junk-removal/severin-hauling/service/541381661422116888"
    ]
  };

  const neighborhoodSchema = {
    "@type": "ItemList",
    "name": "North Park San Diego Neighborhoods Served",
    "description": "Complete junk removal coverage throughout all North Park sub-neighborhoods and districts",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Place",
          "name": "University Avenue Arts Corridor",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "North Park",
            "addressRegion": "CA",
            "postalCode": "92104"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Place",
          "name": "30th Street Restaurant District",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "North Park",
            "addressRegion": "CA",
            "postalCode": "92104"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Place",
          "name": "North Park Community Park Area",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "North Park",
            "addressRegion": "CA",
            "postalCode": "92104"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Place",
          "name": "Morley Field Recreation Area",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "North Park",
            "addressRegion": "CA",
            "postalCode": "92104"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Place",
          "name": "El Cajon Boulevard Corridor",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "North Park",
            "addressRegion": "CA",
            "postalCode": "92104"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Place",
          "name": "Ray Street Arts District",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "North Park",
            "addressRegion": "CA",
            "postalCode": "92104"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "Place",
          "name": "Historic Dryden District",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "North Park",
            "addressRegion": "CA",
            "postalCode": "92104"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 8,
        "item": {
          "@type": "Place",
          "name": "Boundary Residential Streets",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "North Park",
            "addressRegion": "CA",
            "postalCode": "92104"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 9,
        "item": {
          "@type": "Place",
          "name": "Park Boulevard Gateway",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "North Park",
            "addressRegion": "CA",
            "postalCode": "92104"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 10,
        "item": {
          "@type": "Place",
          "name": "Louisiana Purchase Complex Area",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "North Park",
            "addressRegion": "CA",
            "postalCode": "92104"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 11,
        "item": {
          "@type": "Place",
          "name": "Polk Avenue Commercial",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "North Park",
            "addressRegion": "CA",
            "postalCode": "92104"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 12,
        "item": {
          "@type": "Place",
          "name": "32nd Street Corridor",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "North Park",
            "addressRegion": "CA",
            "postalCode": "92104"
          }
        }
      }
    ]
  };

  const howToSchema = generateHowToSchema({
    cityName: "North Park",
    pageUrl: "https://www.severinhauling.com/junk-removal-north-park"
  });

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema, neighborhoodSchema, howToSchema]
  };

  const nearbyLocations = [
    { name: "Hillcrest", slug: "junk-removal-hillcrest" },
    { name: "Kearny Mesa", slug: "junk-removal-kearny-mesa" },
    { name: "Clairemont", slug: "junk-removal-clairemont" },
    { name: "El Cajon", slug: "junk-removal-el-cajon" },
  ];

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />

      <Header />
        <main>
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  #1 North Park Junk Removal Service
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Junk Removal North Park
                </h1>

                <p className="text-xl md:text-2xl mb-8 text-blue-100">
                  University Avenue • 30th Street • Craftsman Homes
                </p>

                <p className="text-lg mb-8">
                  ✓ Urban Neighborhood Experts ✓ Same-Day Service ✓ Licensed & Insured
                </p>
              </div>
            </div>
          </section>

          {/* Main Content with Sidebar */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Main Content Column */}
                  <div className="lg:col-span-2">
                    <div className="prose prose-lg max-w-none">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Expert Junk Removal North Park Residents Trust
                      </h2>

                      <p className="text-lg text-gray-700 mb-4">
                        North Park junk removal requires specialized knowledge of San Diego's most vibrant urban neighborhood. Our junk hauling North Park service navigates historic Craftsman bungalows along tree-lined streets, modern apartment complexes near the University Avenue corridor, and the unique challenges of this densely populated arts district with expertise.
                      </p>

                      <p className="text-lg text-gray-700 mb-6">
                        We understand tight street parking near 30th Street's nightlife scene, narrow driveways off Idaho and Utah Streets, and the coordination needed for multi-story apartment cleanouts throughout the 92104 zip code. This local knowledge ensures efficient service whether you're in a walk-up apartment or a century-old bungalow.
                      </p>

                      <p className="text-lg text-gray-700 mb-4">
                        Whether you need junk pickup North Park for an apartment turnover near the craft brewery district, furniture removal from a century-old Craftsman home, or commercial cleanout along the bustling restaurant corridor, our team delivers efficient service that respects this neighborhood's unique character.
                      </p>

                      <p className="text-lg text-gray-700 mb-6">
                        From Balboa Park's eastern edge to El Cajon Boulevard's commercial zone, we provide same-day trash removal North Park that urban residents and business owners depend on.
                      </p>

                      <p className="text-lg text-gray-700 mb-4">
                        Our North Park San Diego junk removal operation serves one of the city's most walkable, bikeable, and transit-connected communities. The neighborhood's mix of historic homes, modern condos, and active street life creates distinct challenges—limited parking zones, narrow stairwells in older buildings, and timing coordination around the area's busy nightlife schedule.
                      </p>

                      <p className="text-lg text-gray-700 mb-6">
                        We've removed everything from single furniture pieces during apartment moves to complete estate cleanouts in multi-generational Craftsman homes, always maintaining the professional, community-focused approach that North Park residents expect.
                      </p>

                      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                        North Park Neighborhoods We Serve
                      </h2>

                      <p className="text-lg text-gray-700 mb-6">
                        Our comprehensive junk hauling North Park coverage extends throughout all distinct sub-neighborhoods of this diverse urban community:
                      </p>

                      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                        <ul className="space-y-3 text-gray-700">
                          <li><strong>University Avenue Arts Corridor</strong> — The neighborhood's vibrant main street from Park Boulevard to Texas Street, featuring craft breweries, independent restaurants, and mixed-use developments with ground-floor retail and upper-story apartments requiring coordinated building access</li>
                          <li><strong>30th Street Restaurant District</strong> — North Park's culinary and nightlife heart with high-density dining, bars, and entertainment venues needing flexible commercial cleanout scheduling around business hours</li>
                          <li><strong>North Park Community Park Area</strong> — Family-friendly residential zone surrounding the neighborhood's central green space, featuring Craftsman homes, bungalows, and apartment complexes along Idaho, Kansas, and Mississippi Streets</li>
                          <li><strong>Morley Field Recreation Area</strong> — Eastern neighborhood boundary adjacent to Balboa Park's sports facilities, with established single-family homes on larger lots along Pershing Avenue and Upas Street</li>
                          <li><strong>El Cajon Boulevard Corridor</strong> — North Park's northern commercial boundary with multi-family housing, older apartment complexes, and mixed-use properties requiring apartment-specific junk removal expertise</li>
                          <li><strong>Ray Street Arts District</strong> — Concentrated creative community with artist studios, galleries, and converted commercial spaces needing specialized cleanout services for creative materials</li>
                          <li><strong>Historic Dryden District</strong> — Concentrated collection of 1920s-1930s Spanish Colonial Revival and Craftsman architecture requiring careful historic property handling</li>
                          <li><strong>Boundary Residential Streets</strong> — Utah Street, Texas Street, Ohio Street, and Iowa Street corridors with mixed housing types from historic bungalows to contemporary infill developments</li>
                          <li><strong>Park Boulevard Gateway</strong> — Western edge providing Balboa Park access, featuring hillside homes with canyon views and challenging driveway access</li>
                          <li><strong>Louisiana Purchase Complex Area</strong> — Mid-century apartment communities along Louisiana Street and surrounding blocks with multi-story building coordination needs</li>
                          <li><strong>Polk Avenue Commercial</strong> — Mixed residential-commercial zone with small business spaces, live-work units, and urban apartments requiring flexible service</li>
                          <li><strong>32nd Street Corridor</strong> — Eastern residential boundary transitioning to Normal Heights, featuring established single-family neighborhoods with mature landscaping and tree-lined streets</li>
                        </ul>
                      </div>

                      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                        Major Streets & Access Routes in North Park
                      </h2>

                      <p className="text-lg text-gray-700 mb-6">
                        North Park's grid street pattern and proximity to major freeways provides excellent access, though urban parking requires local expertise:
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-blue-600">Primary Corridors</h3>
                          <ul className="space-y-2 text-gray-700">
                            <li><strong>University Avenue</strong> — Main east-west commercial spine with metered parking, bike lanes, and frequent bus service creating midday congestion</li>
                            <li><strong>30th Street</strong> — North-south restaurant and nightlife corridor with evening parking challenges and loading zone restrictions</li>
                            <li><strong>El Cajon Boulevard</strong> — Northern boundary providing I-805 freeway access via El Cajon Boulevard on-ramps</li>
                            <li><strong>Park Boulevard</strong> — Western gateway connecting to Balboa Park and downtown San Diego with hillside terrain</li>
                            <li><strong>Interstate 805</strong> — Eastern freeway boundary providing rapid regional access via University Avenue and El Cajon Boulevard interchanges</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-blue-600">Residential Streets</h3>
                          <ul className="space-y-2 text-gray-700">
                            <li><strong>Idaho Street & Utah Street</strong> — Prime residential streets with Craftsman homes and narrow driveways requiring careful vehicle positioning</li>
                            <li><strong>Texas Street</strong> — Mixed residential corridor with apartments and single-family homes, popular bike route with limited parking</li>
                            <li><strong>Mississippi Street</strong> — Quiet residential street near community park with family homes and established trees creating access considerations</li>
                            <li><strong>Polk Avenue</strong> — Connecting corridor with mixed property types and commercial-residential transitions</li>
                            <li><strong>32nd Street</strong> — Eastern boundary street providing Normal Heights access and residential neighborhood connections</li>
                          </ul>
                        </div>
                      </div>

                      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                        North Park Landmarks & Navigation Reference Points
                      </h2>

                      <p className="text-lg text-gray-700 mb-6">
                        Our crews navigate efficiently using North Park's well-known landmarks and community anchors:
                      </p>

                      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                        <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                          <li><strong>North Park Theatre</strong> — Historic 1928 cinema landmark at University and 29th, arts district anchor</li>
                          <li><strong>North Park Community Park</strong> — 2-acre neighborhood green space with recreation center and playground</li>
                          <li><strong>Morley Field Sports Complex</strong> — Balboa Park athletics facility with disc golf, tennis, pool, velodrome</li>
                          <li><strong>North Park Water Tower</strong> — Iconic 1924 landmark visible throughout neighborhood</li>
                          <li><strong>Birch North Park Theatre</strong> — Second-run movie house and community gathering space</li>
                          <li><strong>Lafayette Hotel & Swim Club</strong> — Historic 1946 hotel and neighborhood institution</li>
                          <li><strong>Ray Street Arts District</strong> — Concentrated gallery and studio corridor</li>
                          <li><strong>North Park Farmers Market</strong> — Thursday evening market at North Park Community Park</li>
                          <li><strong>Observatory North Park</strong> — Craft beer destination and neighborhood landmark</li>
                          <li><strong>North Park Main Street</strong> — Business improvement district organization offices</li>
                          <li><strong>Balboa Park Eastern Entrance</strong> — Park Boulevard access to cultural institutions</li>
                          <li><strong>Mike Hess Brewing</strong> — Landmark craft brewery in North Park brewing corridor</li>
                        </ul>
                      </div>

                      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                        Traffic Patterns & Service Timing in North Park
                      </h2>

                      <p className="text-lg text-gray-700 mb-6">
                        Urban North Park experiences distinct traffic patterns that inform our junk pickup North Park scheduling:
                      </p>

                      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                        <h3 className="text-xl font-bold mb-3 text-yellow-900">Peak Congestion Times</h3>
                        <p className="text-gray-700 mb-3">
                          University Avenue and 30th Street see heavy traffic during weekday commute hours (7-9 AM, 4-7 PM) as the neighborhood serves as a pass-through route between I-805 and downtown. Evening congestion intensifies Thursday-Saturday nights (7 PM-midnight) when the restaurant and bar scene peaks. We schedule most North Park services for mid-morning or early afternoon to avoid both commuter traffic and nightlife parking challenges.
                        </p>
                        <p className="text-gray-700">
                          Interstate 805 access via University Avenue and El Cajon Boulevard ramps provides efficient regional connections, though rush hour backups on I-805 northbound (4-7 PM weekdays) can delay access. Our crews monitor real-time traffic and use Park Boulevard or Texas Street alternatives when freeway delays occur.
                        </p>
                      </div>

                      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                        Weather Considerations for North Park Junk Removal
                      </h2>

                      <p className="text-lg text-gray-700 mb-6">
                        North Park's urban environment creates a microclimate slightly warmer than coastal San Diego:
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                          <h3 className="font-bold mb-2 text-orange-900">☀️ Urban Heat Island Effect</h3>
                          <p className="text-gray-700">Dense development and limited tree canopy in commercial areas create temperatures 5-10°F warmer than coastal neighborhoods during summer afternoons. We schedule physically demanding multi-story apartment cleanouts for morning hours during June-September heat.</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <h3 className="font-bold mb-2 text-blue-900">🌤️ Year-Round Service Weather</h3>
                          <p className="text-gray-700">North Park's inland-but-not-too-far location provides comfortable 65-75°F temperatures most of the year. Occasional winter rain (December-March) is our only weather consideration, rarely impacting service schedules. Perfect conditions for junk removal projects year-round.</p>
                        </div>
                      </div>

                      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                        What We Remove in North Park
                      </h2>

                      <p className="text-lg text-gray-700 mb-6">
                        Our comprehensive trash removal North Park service handles the unique mix of urban residential and commercial junk:
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-green-600">Residential Items</h3>
                          <ul className="space-y-2 text-gray-700">
                            <li><strong>Apartment <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">furniture</a>:</strong> Sofas, beds, dining sets from University Avenue and 30th Street multi-story buildings</li>
                            <li><strong>Craftsman home items:</strong> Built-in furniture, vintage fixtures, renovation debris from historic properties</li>
                            <li><strong><a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Appliances</a>:</strong> Refrigerators, washers, dryers, dishwashers from older homes and apartment complexes</li>
                            <li><strong>Exercise equipment:</strong> Treadmills, weight benches, home gym equipment from urban condos</li>
                            <li><strong>Electronics:</strong> TVs, computers, stereo equipment for eco-friendly recycling</li>
                            <li><strong><a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">Mattresses</a> & box springs:</strong> From apartment turnovers and bedroom updates</li>
                            <li><strong>Old <a href="/couch-removal-san-diego" className="text-blue-600 hover:underline">couches</a>:</strong> From bungalows and apartment updates</li>
                            <li><strong>Yard waste:</strong> Tree trimmings, plant debris, landscaping materials from residential properties</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-green-600">Commercial & Creative Items</h3>
                          <ul className="space-y-2 text-gray-700">
                            <li><strong>Restaurant equipment:</strong> Kitchen appliances, tables, chairs from 30th Street dining establishments with <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">commercial junk removal</a></li>
                            <li><strong>Bar fixtures:</strong> Glassware, furniture, equipment from nightlife venues</li>
                            <li><strong>Retail displays:</strong> Shelving, fixtures, signage from University Avenue shops</li>
                            <li><strong>Office furniture:</strong> Desks, chairs, filing cabinets from mixed-use buildings</li>
                            <li><strong>Art supplies:</strong> Materials, equipment, installations from Ray Street studios and galleries</li>
                            <li><strong>Brewery equipment:</strong> Kegs, furniture, materials from craft beer businesses</li>
                            <li><strong>Construction debris:</strong> Renovation materials, drywall, flooring from commercial and residential remodels</li>
                          </ul>
                        </div>
                      </div>

                      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                        How Our North Park Junk Removal Service Works
                      </h2>

                      <p className="text-lg text-gray-700 mb-6">
                        Our streamlined process makes junk hauling North Park simple and stress-free:
                      </p>

                      <div className="bg-blue-50 rounded-lg p-6 mb-8">
                        <ol className="space-y-4 text-gray-700">
                          <li><strong>1. Contact & Quote:</strong> Call (619) 750-0114 or book online. Describe your location (University Avenue apartment, Craftsman home near Morley Field, etc.) and items for removal. We provide transparent pricing based on volume.</li>
                          <li><strong>2. Flexible Scheduling:</strong> Choose a 2-hour service window that works with your schedule. Same-day service available for calls before 2 PM. We coordinate with building managers for apartment and condo access.</li>
                          <li><strong>3. Professional Arrival:</strong> Our uniformed crew arrives in clearly marked vehicles, finds parking near your property (we handle all parking logistics), and assesses items to confirm pricing.</li>
                          <li><strong>4. Efficient Removal:</strong> We handle all lifting, loading, and cleanup. Multi-story apartments, narrow Craftsman home hallways, tight parking—we navigate it all professionally. Most North Park jobs complete within 1-2 hours.</li>
                          <li><strong>5. Eco-Friendly Disposal:</strong> Usable items go to local charities. Recyclables reach proper facilities. We minimize landfill waste and provide documentation when requested.</li>
                          <li><strong>6. Final Walkthrough:</strong> We ensure complete satisfaction, sweep the area clean, and process payment. Many North Park clients use our service repeatedly for ongoing needs.</li>
                        </ol>
                      </div>

                      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                        Why North Park Residents Choose Severin Hauling
                      </h2>

                      <p className="text-lg text-gray-700 mb-6">
                        North Park's unique urban character demands specialized expertise. Our North Park San Diego junk removal team delivers:
                      </p>

                      <div className="bg-gray-50 rounded-lg p-6 mb-8">
                        <ul className="space-y-3 text-gray-700">
                          <li><strong>Urban Parking Expertise:</strong> We navigate 2-hour parking limits, metered zones, and restricted areas along University Avenue and 30th Street without impacting your schedule or generating parking citations.</li>
                          <li><strong>Multi-Story Building Experience:</strong> Extensive work in apartment buildings throughout the neighborhood means we know elevator scheduling, loading zone coordination, and building management communication protocols.</li>
                          <li><strong>Historic Property Care:</strong> Careful handling of Craftsman homes' original hardwood floors, architectural details, and narrow doorways prevents damage to century-old properties.</li>
                          <li><strong>Flexible Timing:</strong> We schedule around North Park's active nightlife, working with restaurant and bar owners on timing that doesn't disrupt business operations.</li>
                          <li><strong>Community Connection:</strong> As local San Diego professionals, we support North Park's arts scene through material donations to galleries and studios, furniture donations to community organizations, and eco-friendly practices.</li>
                          <li><strong>Same-Day Response:</strong> Urban needs often require fast service. We provide same-day junk pickup North Park for apartment turnovers, business emergencies, and time-sensitive situations.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar Column */}
                  <div className="lg:col-span-1">
                    <LocationSidebarCTA
                      locationName="North Park"
                      nearbyLocations={nearbyLocations}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <LocationPricingSection
            locationName="North Park"
            contextParagraph="Transparent pricing for urban North Park junk removal—from University Avenue apartments to historic Craftsman homes near Morley Field. Whether you're clearing a studio apartment or updating a multi-story building, you'll know the exact cost before we begin."
          />

          {/* Trust Signals Section */}
          <TrustSignalsSection locationName="North Park" coverageArea="Urban San Diego" />

          {/* FAQ Section */}
          <FAQSection
          title="Frequently Asked Questions - Junk Removal North Park"
          description="Get answers to common questions about our junk removal North Park services, pricing, and same-day availability."
          faqs={northParkFAQs}
          ctaTitle="Still Have Questions About North Park Junk Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our junk removal North Park services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

          {/* Final CTA Section */}
          <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">
                  Book Your North Park Junk Removal Today
                </h2>
                <p className="text-xl mb-8 leading-relaxed">
                  Whether you're clearing out a University Avenue apartment, renovating a Craftsman home, or managing a restaurant cleanout on 30th Street, Severin Hauling delivers the trusted junk removal North Park residents and businesses depend on.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <a
                    href="tel:+16197500114"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                  >
                    📞 Call (619) 750-0114
                  </a>
                  <a
                    href="/contact"
                    className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                  >
                    Get Free Quote
                  </a>
                </div>
                <p className="text-blue-200 text-lg">
                  Serving all of North Park — from University Avenue to Morley Field • Same-Day Service Available • Licensed & Insured
                </p>
              </div>
            </div>
          </section>

          {/* Related Services */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <h3 className="text-2xl font-bold text-center mb-8">Related North Park Services</h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <a href="/furniture-disposal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                  <p className="text-gray-600">Apartment and historic home furniture removal throughout North Park with eco-friendly donation options</p>
                </a>
                <a href="/appliance-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal San Diego</h4>
                  <p className="text-gray-600">Safe appliance removal from condos and multi-family units near El Cajon Boulevard</p>
                </a>
                <a href="/construction-debris-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
                  <p className="text-gray-600">Renovation and remodel debris hauling for North Park's historic Craftsman homes</p>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
    </>
  );
}
