import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/SchemaMarkup";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: 'Hillcrest Junk Removal | Urban Core Specialists | (619) 750-0114',
  description: 'Hillcrest urban junk removal for condos, 5th Ave corridor. Tight parking, historic homes, apartment cleanouts. (619) 750-0114',
  keywords: [
    'Hillcrest junk removal',
    'junk hauling Hillcrest',
    'junk pickup Hillcrest',
    'trash removal Hillcrest',
    'University Heights junk removal',
    'urban junk removal San Diego'
  ],
  openGraph: {
    title: 'Hillcrest Junk Removal | Historic Home & Urban Core Specialists | Same-Day Service',
    description: 'Professional Hillcrest junk removal for condos, historic homes, University Heights. Urban core specialists with limited parking solutions. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-hillcrest',
    siteName: 'Severin Cleaners',
    type: 'website',
    locale: 'en_US',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Hillcrest Junk Removal - Severin Cleaners'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hillcrest Junk Removal | Historic Home & Urban Core Specialists',
    description: 'Professional Hillcrest junk removal for condos, historic homes, University Heights. Urban core specialists with limited parking solutions.',
    images: ['https://severincleaners.com/og-image.jpg']
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-hillcrest',
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
    'geo.placename': 'Hillcrest',
    'geo.position': '32.7489;-117.1661',
    'ICBM': '32.7489, -117.1661',
  },
};

const hillcrestFAQs = [
  {
    question: "How much does junk removal cost in Hillcrest?",
    answer: "Small Items: $69+ • Standard Items: $100+<br /> <strong>1/4 Trailer Load:</strong> $249<br /> <strong>3/8 Trailer Load:</strong> $319<br /> <strong>1/2 Trailer Load:</strong> $349<br /> <strong>5/8 Trailer Load:</strong> $366<br /> <strong>3/4 Trailer Load:</strong> $429<br /> <strong>7/8 Trailer Load:</strong> $462<br /> <strong>Full Trailer Load:</strong> $495"
  },
  {
    question: "Do you provide junk removal for high-rise condos and apartments?",
    answer: "Yes, our junk hauling Hillcrest service specializes in high-rise and apartment cleanouts. We coordinate with building management, schedule elevator time, and handle all access logistics. Our team is experienced with condo association requirements and maintains professional standards for upscale properties throughout the urban core."
  },
  {
    question: "Can you handle limited parking and narrow streets in Hillcrest?",
    answer: "Absolutely. Our urban junk removal San Diego team specializes in navigating Hillcrest's narrow streets, limited parking, and time-restricted loading zones. We secure necessary permits, coordinate with city regulations, and use appropriately sized vehicles to access urban properties while minimizing neighborhood disruption."
  },
  {
    question: "Do you offer same-day junk hauling in Hillcrest and University Heights?",
    answer: "Yes, we provide same-day junk pickup Hillcrest and University Heights junk removal for urgent needs. Our urban-focused team can respond quickly throughout the central San Diego area. Same-day availability depends on scheduling and may require coordination with building management for access."
  },
  {
    question: "Are you experienced with historic homes and older buildings?",
    answer: "Yes, our trash removal Hillcrest service has extensive experience with historic properties and vintage buildings. We understand preservation requirements, structural considerations, and special handling needs for historic homes. Our team protects architectural features and follows best practices for working in sensitive historic environments."
  }
];

export default function JunkRemovalHillcrestPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Hillcrest Junk Removal", url: "https://severincleaners.com/junk-removal-hillcrest" },
  ]);

  const faqSchema = generateFAQSchema(hillcrestFAQs);

  const serviceSchema = {
    "@type": "Service",
    "name": "Junk Removal in Hillcrest",
    "description": "Professional Hillcrest junk removal for condos, historic homes, University Heights. Urban core specialists with limited parking solutions.",
    "url": "https://severincleaners.com/junk-removal-hillcrest",
    "serviceType": "Junk Removal",
    "provider": {
      "@id": "https://severincleaners.com/junk-removal-hillcrest#business"
    }
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://severincleaners.com/junk-removal-hillcrest#business",
    "name": "Severin Cleaners LLC",
    "image": "https://severincleaners.com/og-image.jpg",
    "telephone": "+1-619-750-0114",
    "priceRange": "$69-$495",
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
    "url": "https://severincleaners.com/junk-removal-hillcrest",
    "areaServed": [
      {
        "@type": "City",
        "name": "Hillcrest",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "PostalCode",
        "postalCode": "92103",
        "addressLocality": "San Diego",
        "addressRegion": "CA"
      }
    ],
    "openingHours": "Mo-Su 00:00-23:59",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "27",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/severinhauling",
      "https://www.instagram.com/severinhauling/",
      "https://www.yelp.com/biz/severin-cleaners-san-diego",
      "https://www.thumbtack.com/ca/la-mesa/junk-removal/severin-hauling/service/541381661422116888"
    ]
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema]
  };

  const nearbyLocations = [
    { name: "North Park", slug: "junk-removal-north-park" },
    { name: "Point Loma", slug: "junk-removal-point-loma" },
    { name: "Clairemont", slug: "junk-removal-clairemont" },
    { name: "Kearny Mesa", slug: "junk-removal-kearny-mesa" },
  ];

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />

      <Header />
        <main>
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center text-white">
                <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  ✓ Historic Urban Neighborhood with Diverse Housing
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Hillcrest Junk Removal | Urban Core Specialists
                </h1>

                <h2 className="text-xl md:text-2xl font-semibold mb-6 text-blue-100">
                  Professional Junk Hauling for Fifth Avenue, Medical District & Historic Homes
                </h2>

                <div className="text-xl mb-6">
                  ⭐⭐⭐⭐⭐ 5.0 Rating • Historic Building Specialists • Same-Day Service
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <a
                    href="tel:6197500114"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                  >
                    📞 Call (619) 750-0114
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                  >
                    Get Free Quote
                  </a>
                </div>

                <p className="text-lg">
                  ✓ <a href="/same-day-junk-removal-san-diego" className="text-white hover:underline">Same-Day Service</a> Available ✓ Licensed & Insured ✓ Local Specialists
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
                        Expert Junk Removal Hillcrest Residents Trust
                      </h2>

                      <p className="text-lg text-gray-700 mb-6">
                        Hillcrest junk removal demands specialized understanding of San Diego's historic urban core. From hillside bungalows with narrow street access to modern high-rise condos requiring building coordination, our junk hauling Hillcrest service navigates this neighborhood's unique challenges with expertise. We understand limited parking on Fifth Avenue, steep hillside driveways, elevator scheduling for Robinson Avenue towers, and the historic property care that century-old homes require throughout the 92103 zip code.
                      </p>

                      <p className="text-lg text-gray-700 mb-6">
                        Whether you need junk pickup Hillcrest for a medical district condo cleanout near UCSD Hillcrest or Mercy Hospital, furniture removal from a Victorian home on Fourth Avenue, or apartment turnover in one of the neighborhood's many multi-story buildings, our team provides efficient service. From Washington Street's commercial corridor to the residential streets climbing toward Balboa Park, we deliver same-day trash removal Hillcrest that urban core residents depend on.
                      </p>

                      <p className="text-lg text-gray-700 mb-6">
                        Our urban junk removal San Diego operation serves one of the city's most densely populated and diverse communities. Hillcrest's mix of historic homes, modern condos, medical facilities, and active LGBTQ+ community creates distinct service requirements—parking permits, building access coordination, and timing around the neighborhood's vibrant street life. We've handled everything from single furniture pieces in walk-up apartments to complete estate cleanouts in multi-level Victorian homes, always respecting Hillcrest's inclusive community character.
                      </p>

                      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                        Hillcrest Neighborhoods We Serve
                      </h2>

                      <p className="text-lg text-gray-700 mb-6">
                        Our comprehensive junk hauling Hillcrest coverage extends throughout all distinct areas of this historic urban neighborhood:
                      </p>

                      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                        <ul className="space-y-3 text-gray-700">
                          <li><strong>Fifth Avenue Corridor</strong> — Hillcrest's vibrant main street from University Avenue to Washington Street, featuring restaurants, shops, and mixed-use buildings with ground-floor retail and upper apartments requiring coordinated access</li>
                          <li><strong>Medical District</strong> — High-density area surrounding UCSD Hillcrest Medical Center and Mercy Hospital, with medical office buildings, high-rise condos, and healthcare facilities along Washington Street and Front Street</li>
                          <li><strong>Hillcrest Historic District</strong> — Concentration of early 20th century homes along First, Second, Third, and Fourth Avenues, featuring Victorian, Craftsman, and Spanish Colonial Revival architecture requiring careful historic property handling</li>
                          <li><strong>Park West High-Rises</strong> — Modern condo towers along Robinson Avenue and neighboring streets with elevator coordination and building management requirements</li>
                          <li><strong>University Heights Border</strong> — Eastern boundary transitioning to University Heights along Park Boulevard, featuring hillside homes and canyon-edge properties with challenging driveway access</li>
                          <li><strong>Mission Valley Hillside</strong> — Southern slope descending toward Mission Valley along steep streets like Lewis Street and Dove Street, requiring navigation of significant elevation changes</li>
                          <li><strong>Uptown District</strong> — Northwest area transitioning to Mission Hills, with mixed residential and professional buildings along Richmond Street and Washington Street</li>
                          <li><strong>LGBTQ+ Community Hub</strong> — Central Hillcrest's inclusive neighborhood core with rainbow crosswalks, community organizations, and diverse housing from apartments to historic homes</li>
                          <li><strong>Commercial Village</strong> — University Avenue commercial zone with restaurants, theaters, and entertainment venues requiring flexible business-hour scheduling</li>
                          <li><strong>Bankers Hill Boundary</strong> — Western edge transitioning to Bankers Hill along Fourth and Fifth Avenues, featuring hillside mansions with panoramic bay views</li>
                        </ul>
                      </div>

                      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                        Major Streets & Access Routes in Hillcrest
                      </h2>

                      <p className="text-lg text-gray-700 mb-6">
                        Hillcrest's hillside topography and urban density create unique access patterns requiring local navigation expertise:
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-blue-600">Primary Corridors</h3>
                          <ul className="space-y-2 text-gray-700">
                            <li><strong>Fifth Avenue</strong> — Main north-south commercial spine with metered parking, rainbow crosswalks, and vibrant street life creating parking challenges</li>
                            <li><strong>University Avenue</strong> — Major east-west corridor connecting downtown to North Park, providing I-163 freeway access and public transit</li>
                            <li><strong>Washington Street</strong> — Northern boundary providing access to Mission Hills and medical district facilities</li>
                            <li><strong>Park Boulevard</strong> — Eastern boundary connecting to Balboa Park with steep hillside grades and canyon views</li>
                            <li><strong>Interstate 163</strong> — Western freeway providing downtown and I-8 access via Washington Street interchange</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-blue-600">Residential Streets</h3>
                          <ul className="space-y-2 text-gray-700">
                            <li><strong>First through Fourth Avenues</strong> — Historic residential corridors with Victorian and Craftsman homes, narrow streets, and limited parking</li>
                            <li><strong>Robinson Avenue</strong> — High-rise condo corridor requiring building coordination and elevator scheduling</li>
                            <li><strong>Front Street</strong> — Medical district street with professional buildings and limited loading zones</li>
                            <li><strong>Lewis Street & Dove Street</strong> — Steep hillside streets descending toward Mission Valley with significant grade challenges</li>
                            <li><strong>Essex Street & Cleveland Avenue</strong> — Residential streets with mixed housing types and neighborhood character</li>
                          </ul>
                        </div>
                      </div>

                      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                        Hillcrest Landmarks & Navigation Reference Points
                      </h2>

                      <p className="text-lg text-gray-700 mb-6">
                        Our crews navigate efficiently using Hillcrest's prominent landmarks and community institutions:
                      </p>

                      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                        <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                          <li><strong>Hillcrest Pride Flag</strong> — Iconic Pride flag at University and Normal, LGBTQ+ community landmark</li>
                          <li><strong>UCSD Hillcrest Medical Center</strong> — Major hospital and medical district anchor on Washington Street</li>
                          <li><strong>Mercy Hospital</strong> — Historic medical facility and neighborhood institution</li>
                          <li><strong>Hillcrest Farmers Market</strong> — Sunday market at DMV parking lot on Normal Street</li>
                          <li><strong>The Hillcrest Sign</strong> — Neighborhood gateway sign at University and Fifth Avenue</li>
                          <li><strong>Balboa Park Western Entrance</strong> — Park Boulevard access to museums and cultural institutions</li>
                          <li><strong>San Diego LGBT Community Center</strong> — Major community organization and social services hub</li>
                          <li><strong>Hillcrest Cinemas</strong> — Landmark movie theater on Fifth Avenue</li>
                          <li><strong>Whole Foods Hillcrest</strong> — Major grocery anchor at University and Vermont</li>
                          <li><strong>Joyce Beers Community Center</strong> — LGBT resource center and gathering space</li>
                          <li><strong>Hillcrest DMV</strong> — Department of Motor Vehicles and community reference point</li>
                          <li><strong>Scripps Mercy Hospital Campus</strong> — Expanded medical district presence</li>
                        </ul>
                      </div>

                      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                        Traffic Patterns & Service Timing in Hillcrest
                      </h2>

                      <p className="text-lg text-gray-700 mb-6">
                        Urban Hillcrest experiences dense traffic patterns influenced by medical district operations and downtown proximity:
                      </p>

                      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                        <h3 className="text-xl font-bold mb-3 text-yellow-900">Urban Core Congestion</h3>
                        <p className="text-gray-700 mb-3">
                          University Avenue and Fifth Avenue see continuous traffic throughout weekdays as commuters use Hillcrest as a pass-through route between I-163 and I-805. Medical district shift changes (7 AM, 3 PM, 11 PM) create additional congestion near Washington Street and Front Street. Parking on Fifth Avenue is particularly challenging during lunch hours (11 AM-2 PM) and evening dining times (6-9 PM). We schedule most Hillcrest services for mid-morning or early afternoon to optimize parking access.
                        </p>
                        <p className="text-gray-700">
                          Interstate 163 access via Washington Street provides rapid downtown connections, though rush hour backups (7-9 AM southbound, 4-7 PM northbound) can impact service timing. Our crews monitor traffic patterns and use Park Boulevard or Fourth Avenue alternatives when freeway congestion occurs.
                        </p>
                      </div>

                      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                        Weather & Climate Considerations
                      </h2>

                      <p className="text-lg text-gray-700 mb-6">
                        Hillcrest's hillside urban environment creates a microclimate warmer than coastal areas but milder than inland valleys:
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                          <h3 className="font-bold mb-2 text-orange-900">☀️ Hillside Heat Patterns</h3>
                          <p className="text-gray-700">Hillcrest's elevation and urban density create temperatures averaging 3-7°F warmer than coastal neighborhoods during summer. South-facing hillside properties receive intense afternoon sun. We schedule physically demanding multi-story building cleanouts for morning hours June-September.</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <h3 className="font-bold mb-2 text-blue-900">🌤️ Comfortable Year-Round Service</h3>
                          <p className="text-gray-700">Hillcrest enjoys mild 60-75°F temperatures most of the year with minimal seasonal variation. Occasional winter rain (December-March) rarely impacts service. The neighborhood's urban character provides excellent year-round junk removal conditions.</p>
                        </div>
                      </div>

                      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                        What We Remove in Hillcrest
                      </h2>

                      <p className="text-lg text-gray-700 mb-6">
                        Our comprehensive trash removal Hillcrest service handles urban residential, medical district, and historic property needs:
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-green-600">Residential & Historic Items</h3>
                          <ul className="space-y-2 text-gray-700">
                            <li><strong>High-rise <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">furniture</a>:</strong> Sofas, beds, dining sets from Robinson Avenue and Fifth Avenue condo towers</li>
                            <li><strong>Historic home items:</strong> Victorian furniture, antique fixtures, built-ins from First-Fourth Avenue homes</li>
                            <li><strong>Apartment turnovers:</strong> Complete cleanouts from Hillcrest's many multi-story apartment buildings</li>
                            <li><strong><a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Appliances</a>:</strong> Refrigerators, washers, dryers from condos and older homes</li>
                            <li><strong>Exercise equipment:</strong> Treadmills, bikes, weight benches from urban apartments</li>
                            <li><strong>Electronics:</strong> TVs, computers, stereo equipment for eco-friendly disposal</li>
                            <li><strong><a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">Mattresses</a>:</strong> Box springs and frames from frequent apartment moves</li>
                            <li><strong>Old <a href="/couch-removal-san-diego" className="text-blue-600 hover:underline">couches</a>:</strong> From condo renovations and apartment updates</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-green-600">Medical & Commercial Items</h3>
                          <ul className="space-y-2 text-gray-700">
                            <li><strong>Medical office furniture:</strong> Waiting room chairs, desks, filing cabinets from physician offices</li>
                            <li><strong>Restaurant equipment:</strong> Kitchen items, furniture from Fifth Avenue dining establishments with <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">commercial junk removal</a></li>
                            <li><strong>Retail fixtures:</strong> Displays, shelving, signage from University Avenue businesses</li>
                            <li><strong>Professional office items:</strong> Cubicles, desks, chairs from medical district buildings</li>
                            <li><strong>Renovation debris:</strong> Construction materials from historic home restorations and condo updates</li>
                            <li><strong><a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">Estate items</a>:</strong> Full-home cleanouts from Victorian and Craftsman properties</li>
                            <li><strong><a href="/emergency-junk-removal-san-diego" className="text-blue-600 hover:underline">Emergency service</a>:</strong> Rapid response for urgent medical district and business needs</li>
                            <li><strong>Community organization materials:</strong> Furniture and equipment from LGBTQ+ center cleanouts</li>
                          </ul>
                        </div>
                      </div>

                      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                        How Our Hillcrest Junk Removal Service Works
                      </h2>

                      <p className="text-lg text-gray-700 mb-6">
                        Our streamlined process makes junk hauling Hillcrest simple for urban residents and businesses:
                      </p>

                      <div className="bg-blue-50 rounded-lg p-6 mb-8">
                        <ol className="space-y-4 text-gray-700">
                          <li><strong>1. Contact & Quote:</strong> Call (619) 750-0114 or book online. Describe your location (Fifth Avenue condo, historic home, medical office, etc.) and items for removal. We provide transparent volume-based pricing.</li>
                          <li><strong>2. Urban Scheduling:</strong> Choose a 2-hour window that fits your schedule. Same-day service available for calls before 2 PM. We coordinate with building managers, HOAs, and parking authorities as needed.</li>
                          <li><strong>3. Professional Arrival:</strong> Our crew arrives in marked vehicles, secures parking (handling all permits and logistics), and assesses items to confirm pricing before starting work.</li>
                          <li><strong>4. Efficient Urban Removal:</strong> We handle all aspects—elevator scheduling, stair navigation, historic property protection, multi-story coordination. Most Hillcrest jobs complete within 1-2 hours.</li>
                          <li><strong>5. Community-Focused Disposal:</strong> Usable items donated to local organizations, recyclables processed properly, minimal landfill waste. Documentation provided when requested.</li>
                          <li><strong>6. Final Walkthrough:</strong> Complete satisfaction check, area swept clean, payment processed. Many Hillcrest clients become repeat customers for ongoing needs.</li>
                        </ol>
                      </div>

                      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                        Why Hillcrest Residents Choose Severin Cleaners
                      </h2>

                      <p className="text-lg text-gray-700 mb-6">
                        Hillcrest's dense urban environment and historic character demand specialized expertise. Our Hillcrest junk removal team provides:
                      </p>

                      <div className="bg-gray-50 rounded-lg p-6 mb-8">
                        <ul className="space-y-3 text-gray-700">
                          <li><strong>Urban Parking Navigation:</strong> Expert handling of limited parking, permit zones, and time restrictions along Fifth Avenue and throughout the neighborhood without delays or citations.</li>
                          <li><strong>High-Rise Building Expertise:</strong> Extensive experience with elevator scheduling, loading dock coordination, and building management communication protocols for Park West and Robinson Avenue towers.</li>
                          <li><strong>Historic Property Care:</strong> Specialized training in protecting Victorian and Craftsman homes' original features—hardwood floors, architectural details, narrow staircases, and period fixtures.</li>
                          <li><strong>Medical District Coordination:</strong> Understanding of medical facility schedules, professional building requirements, and healthcare industry standards for office cleanouts.</li>
                          <li><strong>Community Respect:</strong> As LGBTQ+-friendly professionals serving San Diego's most inclusive neighborhood, we treat every resident and property with dignity and respect.</li>
                          <li><strong>Same-Day Urban Response:</strong> Fast service for apartment turnovers, business emergencies, and time-sensitive situations common in high-density urban living.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar Column */}
                  <div className="lg:col-span-1">
                    <LocationSidebarCTA
                      locationName="Hillcrest"
                      nearbyLocations={nearbyLocations}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <LocationPricingSection
            locationName="Hillcrest"
            contextParagraph="Transparent pricing for urban Hillcrest junk removal—from Fifth Avenue condos to historic Victorian homes. Whether clearing a medical office or updating a multi-story apartment, you'll know the exact cost before we begin."
          />

          {/* Trust Signals Section */}
          <TrustSignalsSection locationName="Hillcrest" coverageArea="Urban Core San Diego" />

          {/* FAQ Section */}
          <FAQSection
          title="Frequently Asked Questions - Junk Removal Hillcrest"
          description="Get answers to common questions about our junk removal Hillcrest services, pricing, and same-day availability."
          faqs={hillcrestFAQs}
          ctaTitle="Still Have Questions About Hillcrest Junk Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our junk removal Hillcrest services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

          {/* Final CTA Section */}
          <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">
                  Book Your Hillcrest Junk Removal Today
                </h2>
                <p className="text-xl mb-8 leading-relaxed">
                  Whether you're clearing a Fifth Avenue condo, renovating a historic home, or managing a medical district office cleanout, Severin Cleaners delivers the trusted junk removal Hillcrest residents and professionals depend on.
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
                  Serving all of Hillcrest — from the Medical District to Park West • Same-Day Service Available • Licensed & Insured
                </p>
              </div>
            </div>
          </section>

          {/* Related Services */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <h3 className="text-2xl font-bold text-center mb-8">Related Urban Core Services</h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <a href="/furniture-disposal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                  <p className="text-gray-600">Apartment and condo furniture removal for urban core properties</p>
                </a>
                <a href="/estate-cleanout-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
                  <p className="text-gray-600">Historic property estate cleanouts and inherited home services</p>
                </a>
                <a href="/appliance-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal</h4>
                  <p className="text-gray-600">High-rise appliance removal with elevator coordination</p>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
    </>
  );
}
