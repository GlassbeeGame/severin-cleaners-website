import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/SchemaMarkup";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import LocationPricingSection from "@/components/LocationPricingSection";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import { generateLocationServiceSchema, generateBreadcrumbSchema, generateAggregateRatingSchema, generateHowToSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: 'Clairemont Junk Removal | Same-Day Service | (619) 750-0114',
  description: 'Junk removal in Clairemont, CA. Garage cleanouts, commercial hauling, and estate transitions. Same-day pickup. Licensed and insured. Call (619) 750-0114.',
  keywords: [
    'Clairemont junk removal',
    'junk hauling Clairemont',
    'junk pickup Clairemont Mesa',
    'trash removal Clairemont',
    'Clairemont San Diego junk removal',
    'garage cleanouts'
  ],
  openGraph: {
    title: 'Clairemont Junk Removal | Garage Cleanouts & Commercial Hauling | Same-Day Service',
    description: 'Professional Clairemont junk removal for family homes and businesses. Garage cleanouts, estate transitions, commercial hauling on Balboa Avenue. Call (619) 750-0114.',
    url: 'https://www.severinhauling.com/junk-removal-clairemont',
    siteName: 'Severin Hauling',
    images: [{
      url: 'https://www.severinhauling.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Clairemont Junk Removal - Severin Hauling'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clairemont Junk Removal | Garage Cleanouts & Commercial Hauling | Same-Day Service',
    description: 'Professional Clairemont junk removal for family homes and businesses. Garage cleanouts, estate transitions, commercial hauling on Balboa Avenue. Call (619) 750-0114.',
    images: ['https://www.severinhauling.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.severinhauling.com/junk-removal-clairemont',
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
    'geo.placename': 'Clairemont',
    'geo.position': '32.8304;-117.2056',
    'ICBM': '32.8304, -117.2056',
  },
};

const clairemontFAQs = [
  {
    question: "How much does junk removal cost in Clairemont?",
    answer: "Our Clairemont junk removal pricing is volume-based and transparent: small items start at $69, standard furniture $100, quarter-load $249, half-load $349, three-quarter load $429, and full-load $495. All prices include labor, hauling, and disposal with no hidden fees for hillside access or parking."
  },
  {
    question: "Do you provide same-day junk hauling in Clairemont Mesa?",
    answer: "Yes. We offer same-day junk pickup in Clairemont Mesa for residential and commercial needs. Call before 2 PM and we can often dispatch the same day. Our team serves North Clairemont, South Clairemont, Bay Ho, and Clairemont Mesa East and West."
  },
  {
    question: "Can you handle garage and attic cleanouts in Clairemont?",
    answer: "Yes. We handle full garage cleanouts, attic clearing, and storage room hauls throughout Clairemont. We remove old furniture, appliances, boxes, and accumulated household items from homes in Bay Ho, North Clairemont, and the Balboa Avenue corridor."
  },
  {
    question: "Do you recycle or donate items collected in Clairemont?",
    answer: "Yes. We recycle and donate whenever possible. Usable furniture and household items go to local donation centers. Recyclable materials go to certified facilities. Only true waste that cannot be diverted goes to landfill."
  },
  {
    question: "Is commercial junk removal available for Clairemont businesses?",
    answer: "Yes. We provide commercial junk hauling for Clairemont businesses along Balboa Avenue and throughout Clairemont Mesa. We remove office furniture, retail fixtures, restaurant equipment, and general commercial debris with flexible scheduling to minimize disruption."
  },
  {
    question: "What Clairemont neighborhoods do you serve?",
    answer: "We serve the entire 92117 zip code: North Clairemont, South Clairemont, Clairemont Mesa East, Clairemont Mesa West, Bay Ho, Clairemont Village, Tecolote Canyon area, Mount Acadia, Linda Vista border, and the full Balboa Avenue corridor."
  },
  {
    question: "Do you remove appliances and furniture from Clairemont homes?",
    answer: "Yes. We haul refrigerators, washing machines, dryers, dishwashers, and other large appliances, as well as sofas, mattresses, beds, dining sets, and any other furniture. We handle all the heavy lifting from inside the home to our truck."
  },
  {
    question: "Can you help with estate cleanouts in Clairemont?",
    answer: "Yes. We regularly handle estate cleanouts for Clairemont families clearing mid-century homes after a transition or loss. We work at your pace, remove everything from furniture to decades of accumulated items, and leave the space broom-clean. Contact us for a walk-through and quote."
  }
];

export default function JunkremovalclairemontPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.severinhauling.com" },
    { name: "Areas We Serve", url: "https://www.severinhauling.com/areas-we-serve" },
    { name: "Clairemont Junk Removal", url: "https://www.severinhauling.com/junk-removal-clairemont" },
  ]);

  const faqSchema = generateFAQSchema(clairemontFAQs);

  const serviceSchema = {
    "@type": "Service",
    "name": "Junk Removal in Clairemont",
    "description": "Professional Clairemont junk removal for family homes and businesses. Garage cleanouts, estate transitions, commercial hauling on Balboa Avenue. Call (619) 750-0114.",
    "url": "https://www.severinhauling.com/junk-removal-clairemont",
    "serviceType": "Junk Removal",
    "provider": {
      "@id": "https://www.severinhauling.com/junk-removal-clairemont#business"
    }
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://www.severinhauling.com/junk-removal-clairemont#business",
    "name": "Severin Hauling LLC",
    "image": "https://www.severinhauling.com/og-image.jpg",
    "telephone": "+1-619-750-0114",
    "priceRange": "$69-$495",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Venmo", "Zelle", "Cash App"],
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
    "url": "https://www.severinhauling.com/junk-removal-clairemont",
    "knowsAbout": [
      "Mid-Century Home Junk Removal (1950s-1970s Architecture)",
      "Attached Garage Cleanouts for Multi-Generational Families",
      "North Clairemont Hillside Access and Canyon-Adjacent Properties",
      "Balboa Avenue Corridor Commercial Property Hauling",
      "Mount Acadia Steep Driveway Access",
      "Tecolote Canyon Street Grid Interruptions",
      "Bay Ho Hillside Estate Cleanouts",
      "Bay Ho and South Clairemont Appliance and Furniture Removal"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Clairemont Junk Removal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mid-Century Family Home Garage Cleanouts",
            "description": "Specialized junk removal for Clairemont's 1950s-1970s homes with attached garages, decades of family accumulation, and limited access points"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "North Clairemont Hillside and Canyon Property Access",
            "description": "Expert access to Mount Acadia hillside driveways, Tecolote Canyon street interruptions, and Bay Ho elevation challenges"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Multi-Generational Estate Transitions and Downsizing",
            "description": "Compassionate junk removal for established Clairemont families downsizing, inheriting properties, or transitioning to senior living"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Balboa Avenue Corridor Commercial Junk Removal",
            "description": "Business junk hauling for Clairemont Mesa offices, Clairemont Village retail, and Balboa Avenue commercial properties with flexible scheduling"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/severinhauling",
      "https://www.instagram.com/severinhauling/",
      "https://www.yelp.com/biz/severin-hauling-san-diego",
      "https://www.thumbtack.com/ca/la-mesa/junk-removal/severin-hauling/service/541381661422116888"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Clairemont",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "PostalCode",
        "postalCode": "92117",
        "addressLocality": "San Diego",
        "addressRegion": "CA"
      }
    ],
    "openingHours": "Mo-Su 00:00-23:59",
    "aggregateRating": generateAggregateRatingSchema()
  };

  const howToSchema = generateHowToSchema({
    cityName: "Clairemont",
    pageUrl: "https://www.severinhauling.com/junk-removal-clairemont"
  });

  const neighborhoodSchema = {
    "@type": "ItemList",
    "name": "Clairemont San Diego Neighborhoods Served",
    "description": "Complete junk removal coverage throughout all Clairemont neighborhoods and zones in the 92117 zip code",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Place",
          "name": "North Clairemont",
          "address": { "@type": "PostalAddress", "addressLocality": "Clairemont", "addressRegion": "CA", "postalCode": "92117" }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Place",
          "name": "South Clairemont",
          "address": { "@type": "PostalAddress", "addressLocality": "Clairemont", "addressRegion": "CA", "postalCode": "92117" }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Place",
          "name": "Clairemont Mesa East",
          "address": { "@type": "PostalAddress", "addressLocality": "Clairemont", "addressRegion": "CA", "postalCode": "92117" }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Place",
          "name": "Clairemont Mesa West",
          "address": { "@type": "PostalAddress", "addressLocality": "Clairemont", "addressRegion": "CA", "postalCode": "92117" }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Place",
          "name": "Bay Ho",
          "address": { "@type": "PostalAddress", "addressLocality": "Clairemont", "addressRegion": "CA", "postalCode": "92117" }
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Place",
          "name": "Clairemont Village",
          "address": { "@type": "PostalAddress", "addressLocality": "Clairemont", "addressRegion": "CA", "postalCode": "92117" }
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "Place",
          "name": "Tecolote Canyon Area",
          "address": { "@type": "PostalAddress", "addressLocality": "Clairemont", "addressRegion": "CA", "postalCode": "92117" }
        }
      },
      {
        "@type": "ListItem",
        "position": 8,
        "item": {
          "@type": "Place",
          "name": "Mount Acadia",
          "address": { "@type": "PostalAddress", "addressLocality": "Clairemont", "addressRegion": "CA", "postalCode": "92117" }
        }
      },
      {
        "@type": "ListItem",
        "position": 9,
        "item": {
          "@type": "Place",
          "name": "Balboa Avenue Corridor",
          "address": { "@type": "PostalAddress", "addressLocality": "Clairemont", "addressRegion": "CA", "postalCode": "92117" }
        }
      },
      {
        "@type": "ListItem",
        "position": 10,
        "item": {
          "@type": "Place",
          "name": "Linda Vista Border",
          "address": { "@type": "PostalAddress", "addressLocality": "Clairemont", "addressRegion": "CA", "postalCode": "92117" }
        }
      }
    ]
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema, neighborhoodSchema, howToSchema]
  };

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />

        <Header />
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  #1 Clairemont Junk Removal Service
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Clairemont Junk Removal
                </h1>

                <p className="text-xl md:text-2xl mb-8 text-blue-100">
                  Bay Park to Bay Ho • Mid-Century Home Experts • Garage Cleanout Specialists
                </p>

                <p className="text-lg mb-8">
                  ✓ Same-Day Service Available • ✓ Licensed &amp; Insured • ✓ Free Estimates
                </p>
              </div>
            </div>
          </section>

          {/* Main Content with Sidebar */}
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-8">

                  {/* Main Content - Left Column */}
                  <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-md p-8">

                      {/* Introduction */}
                      <h2 className="text-3xl font-bold mb-6 text-gray-900">
                        Clairemont's Premier Junk Removal Service
                      </h2>

                      <p className="text-lg mb-4 text-gray-700">
                        Clairemont junk removal requires knowing one of San Diego's most established family communities, from historic Clairemont Village to the Balboa Avenue business corridor. Known for mid-century homes, family-friendly parks, and a central location, Clairemont has a mix of residential properties from North Clairemont hillside homes to South Clairemont bay-area neighborhoods and active commercial strips. Our junk hauling Clairemont service handles garage cleanouts, residential property hauls, and <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">commercial junk removal</a> throughout the 92117 zip code.
                      </p>

                      <p className="text-lg mb-6 text-gray-700">
                        Whether you need junk pickup in Clairemont Mesa for a garage renovation or an estate cleanout, our trash removal Clairemont team gives you reliable service that respects this community's character. Need it done today? Check our <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">same-day junk removal</a> availability. From Bay Park to Tecolote Canyon, we cover every corner of Clairemont.
                      </p>

                      {/* Neighborhoods */}
                      <h3 className="text-2xl font-bold mt-8 mb-4">Clairemont Neighborhoods We Serve</h3>
                      <p className="text-gray-700 mb-4">
                        Our Clairemont San Diego junk removal service covers every part of 92117, from residential family neighborhoods to commercial corridors:
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <ul className="space-y-2 text-gray-700">
                          <li><strong>North Clairemont:</strong> Hillside family homes, mature trees, canyon-view properties near Mount Acadia</li>
                          <li><strong>South Clairemont:</strong> Bay Park border area, proximity to Mission Bay, recreational access</li>
                          <li><strong>Clairemont Mesa East:</strong> Residential neighborhoods with schools, parks, family-oriented streets</li>
                          <li><strong>Clairemont Mesa West:</strong> Mixed residential and light commercial, convenient freeway access</li>
                          <li><strong>Bay Ho:</strong> Hillside community with bay views, established homes, quiet streets</li>
                        </ul>
                        <ul className="space-y-2 text-gray-700">
                          <li><strong>Clairemont Village:</strong> Historic downtown district, original commercial core, walkable community</li>
                          <li><strong>Linda Vista Border:</strong> Adjacent neighborhoods, university area influence</li>
                          <li><strong>Tecolote Canyon Area:</strong> Natural open space, canyon-adjacent properties, recreational trails</li>
                          <li><strong>Mount Acadia:</strong> Hillside views, winding streets, elevation challenges</li>
                          <li><strong>Balboa Avenue Corridor:</strong> Commercial spine, mixed-use properties, business district</li>
                        </ul>
                      </div>

                      {/* Major Streets */}
                      <h3 className="text-2xl font-bold mt-8 mb-4">Key Streets &amp; Access Routes</h3>
                      <p className="text-gray-700 mb-4">
                        Our junk hauling Clairemont team knows every street in this sprawling community. This local expertise matters when working through Clairemont's grid-pattern streets, canyon interruptions, and freeway crossings. We plan each route efficiently to serve your property without unnecessary delays:
                      </p>

                      <ul className="grid md:grid-cols-2 gap-2 mb-6 text-gray-700">
                        <li>• <strong>Balboa Avenue:</strong> Main east-west corridor, commercial spine, heavy traffic during commute hours</li>
                        <li>• <strong>Clairemont Drive:</strong> Central north-south route connecting neighborhoods, schools access</li>
                        <li>• <strong>Clairemont Mesa Boulevard:</strong> Major thoroughfare, eastern boundary, commercial development</li>
                        <li>• <strong>Genesee Avenue:</strong> Western border, university connection, canyon crossings</li>
                        <li>• <strong>Mount Acadia Boulevard:</strong> Hillside residential access, elevation gain, scenic views</li>
                        <li>• <strong>Burgener Boulevard:</strong> South Clairemont connector, Bay Park access</li>
                        <li>• <strong>I-5 &amp; I-805:</strong> Freeway access north and south, commuter routes</li>
                        <li>• <strong>Tecolote Road:</strong> Canyon access, recreational area connection</li>
                      </ul>

                      {/* Landmarks */}
                      <h3 className="text-2xl font-bold mt-8 mb-4">Clairemont Landmarks &amp; Community Reference Points</h3>
                      <p className="text-gray-700 mb-4">
                        We use Clairemont's well-known landmarks to reach your property efficiently:
                      </p>

                      <ul className="grid md:grid-cols-2 gap-3 mb-6 text-gray-700">
                        <li><strong>Clairemont Town Square</strong> — Community shopping center, central gathering place</li>
                        <li><strong>Bay Ho Park</strong> — Neighborhood park, recreational facilities, community events</li>
                        <li><strong>Tecolote Canyon Natural Park</strong> — Urban canyon, hiking trails, open space preserve</li>
                        <li><strong>Mount Everest Academy</strong> — Educational institution, neighborhood landmark</li>
                        <li><strong>North Clairemont Recreation Center</strong> — Community center, family programs</li>
                        <li><strong>Clairemont Community Park</strong> — Central park, sports fields, family gatherings</li>
                        <li><strong>Bay Park Elementary</strong> — Historic school, neighborhood anchor</li>
                        <li><strong>Clairemont Square Shopping Center</strong> — Balboa Avenue retail, commercial services</li>
                        <li><strong>Clairemont Library</strong> — Community resource, educational programs</li>
                        <li><strong>Morena Boulevard Corridor</strong> — Retail and auto services, western boundary</li>
                        <li><strong>South Clairemont Bowl</strong> — Recreation landmark, family entertainment</li>
                        <li><strong>Mount Acadia Viewpoints</strong> — Hillside overlooks, bay and ocean views</li>
                      </ul>

                      {/* Traffic Patterns */}
                      <h3 className="text-2xl font-bold mt-8 mb-4">Clairemont Traffic Patterns</h3>
                      <p className="text-gray-700 mb-4">
                        Our trash removal Clairemont crews understand the neighborhood's traffic patterns and work around them to ensure on-time arrivals:
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                          <h4 className="font-bold mb-2 text-orange-900">Rush Hour Commute Patterns</h4>
                          <p className="text-gray-700 text-sm">Clairemont's central location creates I-5 and I-805 commuter traffic weekday mornings (7-9 AM) and evenings (4-6 PM). Balboa Avenue and Clairemont Mesa Boulevard experience heavy east-west flow. We schedule around peak hours or use residential streets for efficient access.</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <h4 className="font-bold mb-2 text-blue-900">School Zone Timing</h4>
                          <p className="text-gray-700 text-sm">Multiple elementary and middle schools create morning drop-off (8-8:30 AM) and afternoon pickup (2:30-3 PM) congestion on residential streets. We coordinate with school schedules to avoid traffic delays and ensure safe neighborhood access.</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                          <h4 className="font-bold mb-2 text-green-900">Shopping District Access</h4>
                          <p className="text-gray-700 text-sm">Clairemont Town Square and Balboa Avenue shopping centers create weekend and evening retail traffic. We use strategic routing through residential neighborhoods to access properties efficiently while respecting parking and loading zones.</p>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                          <h4 className="font-bold mb-2 text-purple-900">Canyon Crossings &amp; Dead Ends</h4>
                          <p className="text-gray-700 text-sm">Tecolote Canyon interrupts Clairemont's street grid, creating limited crossing points and cul-de-sac neighborhoods. Our team knows which streets connect and which require alternate routing to reach canyon-adjacent properties efficiently.</p>
                        </div>
                      </div>

                      {/* Services */}
                      <h3 className="text-2xl font-bold mt-8 mb-4">Junk Removal Services for Clairemont Homes and Businesses</h3>
                      <p className="text-gray-700 mb-4">
                        Our junk pickup Clairemont Mesa service handles the area's classic mid-century family homes and active Balboa Avenue businesses. Many homes feature attached garages, spacious yards, and decades of accumulated household items. We understand what it takes to clear these properties and do it without damaging floors, doorframes, or vintage architectural details.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-lg font-bold mb-3 text-blue-600">Residential Services</h4>
                          <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><a href="/cleanout-services-san-diego" className="text-blue-600 hover:underline">Garage cleanouts</a> for mid-century homes with decades of accumulation</li>
                            <li>Attic and storage area clearing for established properties with limited access</li>
                            <li>Backyard and patio furniture disposal near canyons and recreational areas</li>
                            <li>Exercise equipment and recreational gear removal from family homes</li>
                            <li><a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Appliance removal</a> including refrigerators, washers, and dryers</li>
                            <li><a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">Furniture disposal</a> including mid-century pieces and vintage items</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold mb-3 text-blue-600">Estate &amp; Commercial Services</h4>
                          <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">Estate cleanouts</a> and downsizing for multi-generational Clairemont families</li>
                            <li>Senior downsizing assistance for long-time residents</li>
                            <li>Property management coordination for rental turnovers</li>
                            <li>Home renovation debris and remodeling cleanup</li>
                            <li><a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">Commercial junk hauling</a> for Balboa Avenue offices and retail</li>
                            <li><a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">Construction debris removal</a> from remodels and renovation projects</li>
                          </ul>
                        </div>
                      </div>

                      {/* Mid-Century Focus */}
                      <h3 className="text-2xl font-bold mt-8 mb-4">Mid-Century Home Specialists</h3>
                      <p className="text-gray-700 mb-4">
                        Clairemont's classic homes from the 1950s-1970s present challenges our team knows well. Attached garages filled with decades of family history, attics with limited access points, and floor plans requiring careful maneuvering demand real experience. We protect original hardwood floors, work through narrow hallways characteristic of mid-century design, and reach difficult storage spaces without damaging walls or doorframes.
                      </p>

                      <p className="text-gray-700 mb-6">
                        We know North Clairemont's hillside access challenges, South Clairemont's proximity to canyons, and the Balboa Avenue corridor's mix of residential and commercial properties. Multi-generational households are common in Clairemont, and we approach each project with patience and respect. Whether you're helping a family downsize, clearing an inherited property, or reclaiming a garage that hasn't been used for parking in years, we handle it.
                      </p>

                      {/* How It Works */}
                      <h3 className="text-2xl font-bold mt-8 mb-4">How Our Clairemont Service Works</h3>
                      <div className="bg-blue-50 rounded-lg p-6 mb-6">
                        <ol className="space-y-3 text-gray-700">
                          <li><strong>1. Contact Us:</strong> Call (619) 750-0114 or book online. Describe your location in Clairemont (North, South, Bay Ho, etc.) and what items need removal. We provide transparent pricing estimates over the phone.</li>
                          <li><strong>2. Schedule Service:</strong> We offer flexible scheduling including same-day service when you call before 2 PM. Choose a service window that works for your family's schedule, including weekends and after-hours appointments.</li>
                          <li><strong>3. Professional Arrival:</strong> Our uniformed crew arrives on time with proper equipment. We assess items in person and confirm final pricing before beginning any work — no surprises or hidden fees.</li>
                          <li><strong>4. Efficient Removal:</strong> We handle all the heavy lifting, loading, and hauling. Most Clairemont garage cleanouts complete within 2-3 hours. We protect your mid-century home's floors, doorways, and landscaping throughout the process.</li>
                          <li><strong>5. Eco-Friendly Disposal:</strong> Usable items go to local charities and donation centers. Recyclables are processed through certified facilities. Only true waste goes to landfill as a last resort.</li>
                          <li><strong>6. Final Walkthrough:</strong> We sweep and clean the area, complete a satisfaction walkthrough, and process payment. Many Clairemont families use our service repeatedly for ongoing home needs.</li>
                        </ol>
                      </div>

                      {/* Why Choose Us */}
                      <h3 className="text-2xl font-bold mt-8 mb-4">Why Clairemont Chooses Severin Hauling</h3>

                      <div className="bg-gray-50 p-6 rounded-lg mb-4">
                        <h4 className="text-lg font-bold mb-3 text-gray-900">Local Community Knowledge</h4>
                        <p className="text-gray-700 mb-3">
                          We know Clairemont's neighborhoods from Bay Ho's hillside streets to South Clairemont's bay-area access. Our team understands mid-century home layouts, works through canyon-interrupted street grids, and respects the family-oriented community that makes Clairemont a place people stay for decades.
                        </p>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg mb-4">
                        <h4 className="text-lg font-bold mb-3 text-gray-900">Garage Cleanout Expertise</h4>
                        <p className="text-gray-700 mb-3">
                          Clairemont's attached garages often hold decades of family history. We approach these projects with care, helping families sort through what stays and what goes while efficiently removing unwanted items. We've cleared hundreds of Clairemont garages, turning cluttered storage back into functional space.
                        </p>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg mb-6">
                        <h4 className="text-lg font-bold mb-3 text-gray-900">Licensed, Insured, and On Time</h4>
                        <p className="text-gray-700 mb-3">
                          We show up when we say we will, give you a firm price before starting, and do not add fees at the end. Clairemont families and businesses trust us because the process is straightforward from the first call to the final walkthrough.
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* Sidebar - Right Column */}
                  <div className="lg:col-span-1">
                    <LocationSidebarCTA
                      locationName="Clairemont"
                      nearbyLocations={[
                        { name: "Kearny Mesa", slug: "junk-removal-kearny-mesa" },
                        { name: "Pacific Beach", slug: "junk-removal-pacific-beach" },
                        { name: "North Park", slug: "junk-removal-north-park" },
                        { name: "Hillcrest", slug: "junk-removal-hillcrest" },
                      ]}
                    />
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <LocationPricingSection
            locationName="Clairemont"
            contextParagraph="Transparent pricing for Clairemont junk removal from Bay Ho hillside homes to Balboa Avenue businesses. Whether you're clearing a garage or managing an estate cleanout, you'll know the exact cost before we begin."
          />

          {/* Trust Signals Section */}
          <TrustSignalsSection locationName="Clairemont" coverageArea="Central San Diego" />

          {/* FAQ Section */}
          <FAQSection
          title="Frequently Asked Questions - Junk Removal Clairemont"
          description="Get answers to common questions about our junk removal Clairemont services, pricing, and same-day availability."
          faqs={clairemontFAQs}
          ctaTitle="Still Have Questions About Clairemont Junk Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our Clairemont junk removal services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

          {/* Final CTA Section */}
          <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">
                  Book Your Clairemont Junk Removal Today
                </h2>
                <p className="text-xl mb-8 leading-relaxed">
                  Whether you're clearing a garage in Bay Ho, hauling debris from a North Clairemont renovation, or managing an estate cleanout in Clairemont Mesa, Severin Hauling delivers the trusted junk removal Clairemont families and businesses depend on.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <a
                    href="tel:+16197500114"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                  >
                    Call (619) 750-0114
                  </a>
                  <a
                    href="/contact"
                    className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                  >
                    Get Free Quote
                  </a>
                </div>
                <p className="text-blue-200 text-lg">
                  Serving all of Clairemont — Bay Park to Bay Ho • Same-Day Service Available • Licensed &amp; Insured
                </p>
              </div>
            </div>
          </section>

          {/* Related Services */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <h3 className="text-2xl font-bold text-center mb-8">Related Services in Clairemont</h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <a href="/commercial-junk-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Commercial Junk Removal</h4>
                  <p className="text-gray-600">Office cleanouts, retail clearing, and commercial hauling along Balboa Avenue</p>
                </a>
                <a href="/construction-debris-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
                  <p className="text-gray-600">Home remodeling cleanup and renovation debris disposal</p>
                </a>
                <a href="/estate-cleanout-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
                  <p className="text-gray-600">Multi-generational family homes and estate transition support</p>
                </a>
              </div>
            </div>
          </section>

        </main>
        <Footer />

    </>
  );
}
