import { Metadata } from 'next';
import Image from "next/image";
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
  title: 'Junk Removal Pacific Beach | Same-Day Service | (619) 750-0114',
  description: 'Professional junk removal Pacific Beach for beach houses, apartments, and properties in Crystal Pier, Crown Point, Garnet Avenue. Same-day hauling, free estimate, licensed & insured.',
  keywords: [
    'junk removal pacific beach',
    'pacific beach junk removal',
    'junk hauling pacific beach',
    'same day junk removal pb'
  ],
  openGraph: {
    title: 'Junk Removal Pacific Beach | Beach House & Property Specialists',
    description: 'Professional junk removal Pacific Beach from Crystal Pier to Crown Point. Same-day availability, free estimate, transparent pricing. Licensed & insured. Call (619) 750-0114!',
    url: 'https://www.severinhauling.com/junk-removal-pacific-beach',
    siteName: 'Severin Hauling',
    images: [{
      url: 'https://www.severinhauling.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Pacific Beach Junk Removal - Severin Hauling'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junk Removal Pacific Beach | Beach House & Property Specialists',
    description: 'Professional junk removal Pacific Beach from Crystal Pier to Crown Point. Same-day availability, free estimate, transparent pricing. Licensed & insured. Call (619) 750-0114!',
    images: ['https://www.severinhauling.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.severinhauling.com/junk-removal-pacific-beach',
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
    'geo.placename': 'Pacific Beach',
    'geo.position': '32.7942;-117.2347',
    'ICBM': '32.7942, -117.2347',
  },
};

const pacificBeachFAQs = [
  {
    question: "How much does junk removal Pacific Beach cost?",
    answer: "Our pricing is transparent and volume-based: small items $69, standard items $100, quarter-load $249, half-load $349, three-quarter load $429, and full-load $495. All prices include labor, hauling, and disposal with no surcharges for beach access or narrow alleys. We provide free estimates and confirm final pricing on-site before starting work. Learn more about <a href='/blog/how-much-does-junk-removal-cost-san-diego' className='text-blue-600 hover:underline'>junk removal pricing in San Diego</a>."
  },
  {
    question: "Do you provide same-day service?",
    answer: "Yes, call before noon for <a href='/same-day-junk-removal-san-diego' className='text-blue-600 hover:underline'>same-day service</a> throughout the 92109 area. We often arrive within 2-4 hours for urgent situations like vacation rental turnovers, student move-outs, or emergency cleanouts. We coordinate scheduling around summer beach traffic and Tuesday Farmers Market closures for reliable arrival times."
  },
  {
    question: "Can you remove heavy furniture and appliances?",
    answer: "Absolutely. We handle all heavy lifting for <a href='/furniture-disposal-san-diego' className='text-blue-600 hover:underline'>furniture</a>, <a href='/appliance-removal-san-diego' className='text-blue-600 hover:underline'>appliances</a>, exercise equipment, and salt-damaged outdoor items. We navigate Ocean Front Walk's narrow boardwalk alleys, Crown Point's limited parking, and Garnet Avenue multi-story buildings. We protect floors and doorways during all removals."
  },
  {
    question: "Do you service all of Pacific Beach?",
    answer: "Yes, we serve the entire 92109 zip code from Tourmaline Surfing Park to the Mission Beach border, Mission Bay to the Pacific Ocean. This includes Ocean Front Walk, Crystal Pier, Garnet Avenue, Crown Point, Kate Sessions Park area, Bay Park, The Promenade, and Fanuel/Lamont student housing corridors. We know every alley and access challenge throughout the area."
  },
  {
    question: "Do you work around PB's Tuesday Farmers Market and special events?",
    answer: "Yes, we schedule around all Pacific Beach events. Tuesday Farmers Market closes Bayard Street 12-8 PM weekly—we route via Grand Avenue or schedule other days. During summer events (BeachFest, concerts), we offer early morning or weekday service. Student move-outs in May/August require 2-3 weeks advance booking during peak periods."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we're fully licensed and insured throughout Pacific Beach and San Diego County. Our comprehensive liability insurance protects your property during service—especially important for narrow boardwalk access and sandy beach house floors. We provide certificates of insurance upon request for property management companies and vacation rental owners."
  },
  {
    question: "Do you recycle or donate items?",
    answer: "Yes, we sort every load for recycling and donation. Usable items go to local charities, scrap metal to recycling facilities, mattresses to specialized recycling centers, and electronics to certified e-waste recyclers. Surfboards and beach equipment in good condition are donated to youth programs. This eco-friendly approach reduces landfill fees and supports competitive pricing."
  },
  {
    question: "Can you remove construction debris?",
    answer: "Yes, we handle <a href='/construction-debris-removal-san-diego' className='text-blue-600 hover:underline'>construction debris</a> from beach house renovations including cabinets, countertops, drywall, flooring, and deck demolition. We coordinate with contractors for same-day or next-day removal to keep job sites clear. All debris goes to licensed facilities with recycling when possible."
  }
];

export default function JunkRemovalPacificBeachPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.severinhauling.com" },
    { name: "Areas We Serve", url: "https://www.severinhauling.com/areas-we-serve" },
    { name: "Pacific Beach Junk Removal", url: "https://www.severinhauling.com/junk-removal-pacific-beach" },
  ]);

  const faqSchema = generateFAQSchema(pacificBeachFAQs);

  const serviceSchema = {
    "@type": "Service",
    "name": "Junk Removal in Pacific Beach",
    "description": "Full service junk removal Pacific Beach from Crystal Pier to Crown Point. We do all the heavy lifting. Same-day service, free estimate, beach property specialists, transparent pricing. Licensed & insured San Diego company.",
    "url": "https://www.severinhauling.com/junk-removal-pacific-beach",
    "serviceType": "Junk Removal",
    "provider": {
      "@id": "https://www.severinhauling.com/junk-removal-pacific-beach#business"
    }
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://www.severinhauling.com/junk-removal-pacific-beach#business",
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
    "url": "https://www.severinhauling.com/junk-removal-pacific-beach",
    "knowsAbout": [
      "Beach House Property Access and Cleanouts",
      "Ocean Front Walk Boardwalk Alley Navigation",
      "Vacation Rental and Short-Term Rental Turnovers",
      "Student Housing Move-Outs on Fanuel and Lamont Streets",
      "Salt Air Corrosion and Coastal Environment Item Removal",
      "Crown Point Bay-Front Property Access",
      "Garnet Avenue Multi-Story Building Coordination",
      "Summer Beach Traffic and Tuesday Farmers Market Scheduling"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pacific Beach Junk Removal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Beach House and Coastal Property Cleanouts",
            "description": "Full-service junk removal for Crystal Pier boardwalk apartments, Crown Point bay-front homes, and Ocean Front Walk properties with narrow alley access"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vacation Rental Turnover Service",
            "description": "Fast, same-day junk removal for Airbnb and VRBO properties throughout the 92109 area, coordinated around guest check-in and check-out schedules"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Student Housing Move-Out Cleanouts",
            "description": "End-of-lease junk removal for student apartments on Fanuel and Lamont Streets near San Diego State University extension housing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Salt-Damaged Outdoor and Beach Equipment Removal",
            "description": "Removal of rust-corroded patio furniture, bikes, grills, surfboards, paddleboards, and other salt-air damaged coastal items"
          }
        }
      ]
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Pacific Beach",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "PostalCode",
        "postalCode": "92109",
        "addressLocality": "San Diego",
        "addressRegion": "CA"
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

  const howToSchema = generateHowToSchema({
    cityName: "Pacific Beach",
    pageUrl: "https://www.severinhauling.com/junk-removal-pacific-beach"
  });

  const neighborhoodSchema = {
    "@type": "ItemList",
    "name": "Pacific Beach San Diego Neighborhoods Served",
    "description": "Complete junk removal coverage throughout all Pacific Beach neighborhoods and zones in the 92109 zip code",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Place",
          "name": "North Pacific Beach",
          "address": { "@type": "PostalAddress", "addressLocality": "Pacific Beach", "addressRegion": "CA", "postalCode": "92109" }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Place",
          "name": "Crown Point",
          "address": { "@type": "PostalAddress", "addressLocality": "Pacific Beach", "addressRegion": "CA", "postalCode": "92109" }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Place",
          "name": "Garnet Avenue District",
          "address": { "@type": "PostalAddress", "addressLocality": "Pacific Beach", "addressRegion": "CA", "postalCode": "92109" }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Place",
          "name": "Ocean Front Walk",
          "address": { "@type": "PostalAddress", "addressLocality": "Pacific Beach", "addressRegion": "CA", "postalCode": "92109" }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Place",
          "name": "Bay Park",
          "address": { "@type": "PostalAddress", "addressLocality": "Pacific Beach", "addressRegion": "CA", "postalCode": "92109" }
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Place",
          "name": "The Promenade",
          "address": { "@type": "PostalAddress", "addressLocality": "Pacific Beach", "addressRegion": "CA", "postalCode": "92109" }
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "Place",
          "name": "Fanuel Street Corridor",
          "address": { "@type": "PostalAddress", "addressLocality": "Pacific Beach", "addressRegion": "CA", "postalCode": "92109" }
        }
      },
      {
        "@type": "ListItem",
        "position": 8,
        "item": {
          "@type": "Place",
          "name": "Mission Boulevard",
          "address": { "@type": "PostalAddress", "addressLocality": "Pacific Beach", "addressRegion": "CA", "postalCode": "92109" }
        }
      },
      {
        "@type": "ListItem",
        "position": 9,
        "item": {
          "@type": "Place",
          "name": "Tourmaline Surfing Park Area",
          "address": { "@type": "PostalAddress", "addressLocality": "Pacific Beach", "addressRegion": "CA", "postalCode": "92109" }
        }
      },
      {
        "@type": "ListItem",
        "position": 10,
        "item": {
          "@type": "Place",
          "name": "Kate Sessions Memorial Park Area",
          "address": { "@type": "PostalAddress", "addressLocality": "Pacific Beach", "addressRegion": "CA", "postalCode": "92109" }
        }
      }
    ]
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema, neighborhoodSchema, howToSchema]
  };

  const nearbyLocations = [
    { name: "La Jolla", slug: "junk-removal-la-jolla" },
    { name: "Point Loma", slug: "junk-removal-point-loma" },
    { name: "Clairemont", slug: "junk-removal-clairemont" },
    { name: "Del Mar", slug: "junk-removal-del-mar" },
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
                #1 Pacific Beach Junk Removal Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Junk Removal Pacific Beach
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Crystal Pier to Crown Point • Beach House Cleanouts • Same-Day Service
              </p>

              <p className="text-lg mb-8">
                ✓ Full Service San Diego Experts ✓ We Do All the Heavy Lifting ✓ Free Estimate ✓ Licensed & Insured
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
                      Beach House &amp; Coastal Property Cleanout Specialists
                    </h2>

                    {/* Pacific Beach Junk Removal Image - Integrated */}
                    <div className="mb-6 md:float-right md:ml-6 w-full md:w-80">
                      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                        <Image
                          src="/optimized/junkintrashbags.jpg"
                          alt="junk removal Pacific Beach - beach house cleanout service in 92109"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 320px"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <p className="text-lg mb-4 text-gray-700">
                      Need junk removal in Pacific Beach? <a href="/" className="text-blue-600 hover:underline font-medium">Severin Hauling</a> serves the entire 92109 area—from Crystal Pier boardwalk apartments to Crown Point bay-front homes. We do all the heavy lifting so you can reclaim your space without the stress.
                    </p>
                    <p className="text-lg mb-4 text-gray-700">
                      Our crew knows this neighborhood. We handle beach house cleanouts, vacation rental turnovers, and student housing move-outs on Fanuel and Lamont Streets. Narrow Ocean Front Walk alleys, Tuesday Farmers Market closures, summer beach traffic—we work around all of it.
                    </p>
                    <p className="text-lg mb-6 text-gray-700">
                      Booking junk removal with us is simple: call, get a free no-obligation estimate, and we show up. Easy and stress free. Whether it's a single item or a full property cleanout, we haul everything away and leave your place clutter free. Need it fast? We offer <a href="/blog/same-day-junk-removal-guide" className="text-blue-600 hover:underline">same-day pickup</a> when you call before noon.
                    </p>

                    {/* Vacation Rental Use Case */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Vacation Rental &amp; Airbnb Turnover Cleanouts</h3>
                    <p className="text-gray-700 mb-4">
                      Pacific Beach is one of San Diego's most active short-term rental markets. When guests check out and leave behind furniture, appliances, or accumulated junk, turnaround time is everything. We offer priority same-day scheduling for vacation rental owners and property managers throughout the 92109 area—including Ocean Front Walk, Crown Point, and Mission Boulevard—so you're not losing rental income waiting on a crew. We coordinate directly with property managers and can work around guest check-in windows.
                    </p>

                    {/* Student Housing Use Case */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Student Move-Outs on Lamont, Fanuel &amp; Surrounding Streets</h3>
                    <p className="text-gray-700 mb-6">
                      The Fanuel and Lamont Street corridors see heavy student move-out activity every May and August. We've handled dozens of end-of-lease cleanouts in PB's student housing—mattresses left on curbs, furniture abandoned in apartments, and accumulated semester debris. We recommend booking 2–3 weeks ahead during peak move-out season. Outside those windows, we're typically available within 24 hours. All removed items are sorted for donation or recycling before anything goes to landfill.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">92109 Neighborhoods We Serve</h3>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• North Pacific Beach</li>
                        <li>• Crown Point</li>
                        <li>• Garnet District</li>
                        <li>• Ocean Front Walk</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Bay Park</li>
                        <li>• The Promenade</li>
                        <li>• Fanuel Street</li>
                        <li>• Mission Boulevard</li>
                      </ul>
                    </div>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Major Landmarks & Cross Streets</h3>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• Crystal Pier & Hotel</li>
                        <li>• Kate Sessions Memorial Park</li>
                        <li>• PB Library & Recreation Center</li>
                        <li>• Tourmaline Surfing Park</li>
                        <li>• Mission Bay Park</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Crown Point Shores</li>
                        <li>• The Promenade Shopping Center</li>
                        <li>• Garnet Avenue District</li>
                        <li>• Fanuel Park</li>
                        <li>• Kendall-Frost Marsh Reserve</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Beach Traffic & Scheduling Considerations</h3>
                    <p className="text-gray-700 mb-4">
                      Summer weekends mean heavy traffic on Mission Boulevard and Garnet Avenue from 10 AM to 6 PM. We offer early morning (6–9 AM) or evening slots to stay on schedule.
                    </p>
                    <p className="text-gray-700 mb-6">
                      Tuesday Farmers Market closes Bayard Street between Garnet and Grand from 12–8 PM weekly—we route around it automatically. Student move-outs in May and August book fast on Lamont and Fanuel Streets, so <a href="/blog/same-day-junk-removal-guide" className="text-blue-600 hover:underline">plan ahead during those weeks</a>.
                    </p>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Coastal Weather & Salt Air Damage</h3>
                    <p className="text-gray-700 mb-4">
                      The coastal marine layer deposits salt moisture on outdoor items year-round. Beach furniture, bikes, grills, and metal equipment corrode faster here than anywhere inland. Most PB residents haul damaged items before the rust spreads—not after.
                    </p>
                    <p className="text-gray-700 mb-6">
                      Winter storms (typically December–February) can cause street flooding near Crown Point's bayside along Moorland Drive and Lamont Street. We stay flexible and reschedule around heavy rain when needed.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Haul From Pacific Beach Properties</h3>
                    <p className="text-gray-700 mb-4">
                      We handle everything from single items to complete <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanouts</a>:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Household Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">Furniture</a>, <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">mattresses</a>, sofas</li>
                          <li>• <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Appliances</a> and electronics</li>
                          <li>• Salt-damaged outdoor items</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Beach & Specialty</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Surfboards, paddleboards, beach cruisers</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs</a> and patio furniture</li>
                          <li>• <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">Construction debris</a> from beach house remodels</li>
                        </ul>
                      </div>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Hauling for Pacific Beach</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Beach Community Specialists:</strong> We navigate narrow boardwalk alleys off Ocean Front Walk, Crystal Pier access challenges, Tuesday Farmers Market closures, and summer beach traffic throughout the 92109 area. We also serve nearby <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a> and <a href="/junk-removal-point-loma" className="text-blue-600 hover:underline">Point Loma</a> coastal communities.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Same-Day Service:</strong> Call before noon for same-day availability. We schedule around beach congestion and student move-out periods for reliable arrival times.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> Volume-based rates with no hidden fees. Beach traffic, narrow alleys, and limited parking don't change our pricing. See our <a href="/junk-removal-cost-san-diego" className="text-blue-600 hover:underline">complete pricing guide</a>.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Insured:</strong> Full coverage for coastal property access, including boardwalk apartments and bay houses. Certificates of insurance available for property managers and vacation rental owners.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Pacific Beach"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Pacific Beach"
          contextParagraph="Beach house cleanouts throughout the 92109 area—from Crystal Pier to Crown Point—all use the same transparent pricing. No hidden fees for beach access or limited parking. Call for your free, no-obligation estimate."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Pacific Beach" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Pacific Beach"
          description="Get answers to common questions about our services, pricing, and same-day availability in the 92109 area."
          faqs={pacificBeachFAQs}
          ctaTitle="Still Have Questions?"
          ctaDescription="Our experienced team is ready to answer your questions, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Book Your Pacific Beach Junk Removal Today
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                Whether you're clearing a beach house, turning over a vacation rental on Ocean Front Walk, or handling a student move-out on Lamont Street, Severin Hauling delivers the fast, reliable junk removal Pacific Beach residents and property owners depend on.
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
                Serving all of Pacific Beach 92109 — Crystal Pier to Crown Point • Same-Day Service Available • Licensed &amp; Insured
              </p>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related Beach Community Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-disposal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal</h4>
                <p className="text-gray-600">Sofas, mattresses, and bulky beach-damaged furniture throughout the 92109 area</p>
              </a>
              <a href="/appliance-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal</h4>
                <p className="text-gray-600">Fridges, washers, dryers, and salt-air damaged appliances with eco-friendly disposal</p>
              </a>
              <a href="/construction-debris-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris</h4>
                <p className="text-gray-600">Beach house remodel debris and renovation cleanup services</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </>
  );
}
