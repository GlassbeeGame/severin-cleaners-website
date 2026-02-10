import { Metadata } from 'next';
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
  title: 'Junk Removal Oceanside CA | Military & Coastal Specialists | (619) 750-0114',
  description: 'Professional junk removal Oceanside CA serving Camp Pendleton, coastal properties, and vacation rentals. Military discounts, same-day service. Licensed & insured. Call (619) 750-0114.',
  keywords: [
    'junk removal oceanside',
    'junk removal oceanside ca',
    'Oceanside junk removal',
    'junk hauling Oceanside',
    'junk pickup Oceanside',
    'trash removal Oceanside',
    'Oceanside San Diego junk removal',
    'Camp Pendleton junk removal'
  ],
  openGraph: {
    title: 'Oceanside Junk Removal | Camp Pendleton & Coastal Property Specialists | Same-Day Service',
    description: 'Professional Oceanside junk removal for Camp Pendleton, coastal properties, vacation rentals. Military discounts available. North County experts. Call (619) 750-0114.',
    url: 'https://www.severinhauling.com/junk-removal-oceanside',
    siteName: 'Severin Hauling',
    images: [{
      url: 'https://www.severinhauling.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Oceanside Junk Removal - Severin Hauling'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oceanside Junk Removal | Camp Pendleton & Coastal Property Specialists | Same-Day Service',
    description: 'Professional Oceanside junk removal for Camp Pendleton, coastal properties, vacation rentals. Military discounts available. North County experts. Call (619) 750-0114.',
    images: ['https://www.severinhauling.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.severinhauling.com/junk-removal-oceanside',
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
    'geo.placename': 'Oceanside',
    'geo.position': '33.1959;-117.3795',
    'ICBM': '33.1959, -117.3795',
  },
};

const oceansideFAQs = [
  {
    question: "How much does junk removal cost in Oceanside?",
    answer: "Our pricing is transparent and volume-based: quarter-load $100-$150, half-load $200-$295, three-quarter load $350-$425, full-load $450-$495. All prices include labor, loading, hauling, and disposal. Active duty military families receive special discount pricing. Call (619) 750-0114 for a free quote."
  },
  {
    question: "Do you provide junk removal for Camp Pendleton military housing?",
    answer: "Yes, we specialize in military PCS moves and base housing cleanouts. Our crews handle all base access procedures and security protocols, coordinate with housing offices, and work within tight inspection timelines. Active duty families receive military discounts. We complete most PCS jobs within 1-2 hours. <a href='/same-day-junk-removal-san-diego' className='text-blue-600 hover:underline'>Same-day service</a> available when you call before 2 PM."
  },
  {
    question: "Can you handle same-day junk pickup for vacation rentals in Oceanside?",
    answer: "Absolutely. We provide same-day service for vacation rental turnovers from The Strand to the pier district. We offer priority scheduling for property managers, coordinate with cleaning crews, and complete work efficiently to minimize vacancy gaps. Common items include guest-damaged <a href='/furniture-disposal-san-diego' className='text-blue-600 hover:underline'>furniture</a> and <a href='/san-diego-mattress-disposal' className='text-blue-600 hover:underline'>mattresses</a> requiring immediate replacement."
  },
  {
    question: "Do you offer coastal property cleanouts and storm debris removal?",
    answer: "Yes, coastal property cleanouts are our specialty. We regularly remove salt-damaged patio furniture, corroded bicycles, and outdoor equipment from harbor properties and beachfront homes. We handle storm debris from winter weather systems including damaged deck furniture, wind-blown debris, and flooding-related damage. Our crews protect Oceanside's beaches through responsible disposal."
  },
  {
    question: "Are your junk removal services eco-friendly in North County?",
    answer: "Absolutely. We donate usable items to charities and military family support programs. Recyclables go to certified North County facilities. E-waste receives special handling to prevent toxic materials from entering landfills. We comply with California coastal environmental regulations to protect Oceanside's beaches and marine environment."
  },
  {
    question: "How fast can you respond for junk removal in Oceanside?",
    answer: "Most calls receive same-day service when you contact us before 2 PM. We serve Camp Pendleton base housing, downtown pier district, and Fire Mountain neighborhoods. Same-day service is critical for military PCS deadlines and vacation rental turnovers. We monitor I-5 traffic and Camp Pendleton gate congestion to coordinate efficient arrival times."
  },
  {
    question: "What areas of Oceanside do you serve?",
    answer: "We serve all Oceanside neighborhoods: Camp Pendleton base housing, downtown/pier district, South Oceanside beachfront/harbor, Fire Mountain, Rancho Del Oro, Loma Alta, and Mission Avenue Corridor. We cover all three zip codes (92054, 92056, 92057). We also serve neighboring <a href='/junk-removal-carlsbad' className='text-blue-600 hover:underline'>Carlsbad</a>, <a href='/junk-removal-vista' className='text-blue-600 hover:underline'>Vista</a>, and <a href='/junk-removal-escondido' className='text-blue-600 hover:underline'>Escondido</a>."
  },
  {
    question: "Can you remove furniture and appliances in Oceanside CA?",
    answer: "Yes, we handle all furniture (sofas, dining sets, <a href='/san-diego-mattress-disposal' className='text-blue-600 hover:underline'>mattresses</a>, patio furniture) and appliances (refrigerators, washers, dryers) with proper refrigerant handling. We specialize in military PCS moves, vacation rental turnovers, and salt-damaged coastal items. We navigate base housing protocols, elevator reservations for downtown buildings, and beach access routes. Furniture goes to charities; appliances to recycling facilities."
  }
];

export default function JunkRemovalOceansidePage() {
  const serviceSchema = {
    "@type": "Service",
    "name": "Junk Removal in Oceanside",
    "description": "Professional Oceanside junk removal for Camp Pendleton, coastal properties, vacation rentals. Military discounts available. North County experts.",
    "url": "https://www.severinhauling.com/junk-removal-oceanside",
    "serviceType": "Junk Removal",
    "provider": {
      "@id": "https://www.severinhauling.com/junk-removal-oceanside#business"
    }
  };

  // Enhanced LocalBusiness schema for Oceanside
  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://www.severinhauling.com/junk-removal-oceanside#business",
    "name": "Severin Hauling LLC",
    "image": "https://www.severinhauling.com/og-image.jpg",
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
    "url": "https://www.severinhauling.com/junk-removal-oceanside",
    "areaServed": {
      "@type": "City",
      "name": "Oceanside",
      "containedInPlace": {
        "@type": "State",
        "name": "California"
      }
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Venmo", "Zelle"],
    "acceptsReservations": true,
    "currenciesAccepted": "USD",
    "aggregateRating": generateAggregateRatingSchema(),
    "knowsAbout": [
      "Camp Pendleton Base Access Procedures",
      "Military PCS Move Coordination",
      "Vacation Rental Property Management",
      "Coastal Property Maintenance",
      "Salt Air Damage Assessment",
      "Storm Debris Removal"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Oceanside Junk Removal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Junk Removal Oceanside",
            "description": "Professional junk hauling and removal service for Oceanside and North County"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Camp Pendleton Junk Removal",
            "description": "Military housing and PCS move junk removal for Camp Pendleton"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vacation Rental Cleanout Oceanside",
            "description": "Same-day junk removal for coastal vacation rental turnovers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Coastal Property Junk Removal",
            "description": "Specialized junk removal for beachfront and harbor properties"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/severinhauling",
      "https://www.instagram.com/severinhauling/",
      "https://www.yelp.com/biz/severin-hauling-san-diego",
      "https://www.thumbtack.com/ca/la-mesa/junk-removal/severin-hauling/service/541381661422116888"
    ]
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.severinhauling.com" },
    { name: "Areas We Serve", url: "https://www.severinhauling.com/areas-we-serve" },
    { name: "Oceanside Junk Removal", url: "https://www.severinhauling.com/junk-removal-oceanside" },
  ]);

  const faqSchema = generateFAQSchema(oceansideFAQs);

  const howToSchema = generateHowToSchema({
    cityName: "Oceanside",
    pageUrl: "https://www.severinhauling.com/junk-removal-oceanside"
  });

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema, howToSchema]
  };

  const nearbyLocations = [
    { name: "Carlsbad", slug: "junk-removal-carlsbad" },
    { name: "Vista", slug: "junk-removal-vista" },
    { name: "Escondido", slug: "junk-removal-escondido" },
    { name: "Rancho Santa Fe", slug: "junk-removal-rancho-santa-fe" },
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
                #1 Oceanside Junk Removal Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Oceanside Junk Removal
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Camp Pendleton • Coastal Properties • Vacation Rentals • Same-Day Service
              </p>

              <p className="text-lg mb-8">
                ✓ Military Discounts Available ✓ Same-Day Hauling ✓ Licensed & Insured
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
                      Professional Junk Removal Oceanside – Military & Coastal Property Experts
                    </h2>

                    <p className="text-lg mb-6 text-gray-700">
                      Looking for junk removal Oceanside CA residents trust? We serve North County's largest coastal city from our La Mesa headquarters, specializing in Camp Pendleton military housing (PCS moves, base access coordination), vacation rental turnovers (pier district, The Strand), and coastal properties with salt air damage. Our team navigates strict PCS inspection timelines, vacation rental schedules, and beachfront property challenges. Active duty military families receive special discount pricing. We provide <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">same-day service</a> throughout the 92054, 92056, and 92057 areas. Call (619) 750-0114 for transparent pricing and military-friendly service.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Oceanside Neighborhoods We Serve</h3>
                    <ul className="list-disc pl-6 mb-6 text-gray-700 columns-2">
                      <li>Camp Pendleton Base</li>
                      <li>Downtown/Pier District</li>
                      <li>South Oceanside/Harbor</li>
                      <li>Fire Mountain</li>
                      <li>Rancho Del Oro</li>
                      <li>Loma Alta</li>
                      <li>Mission Avenue Corridor</li>
                      <li>The Strand beachfront</li>
                    </ul>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Major Landmarks</h3>
                    <ul className="list-disc pl-6 mb-6 text-gray-700 columns-2">
                      <li>Camp Pendleton Main Gate</li>
                      <li>Oceanside Pier</li>
                      <li>Oceanside Harbor</li>
                      <li>The Strand beachfront</li>
                      <li>Mission San Luis Rey</li>
                      <li>Fire Mountain Park</li>
                    </ul>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Traffic & Military Scheduling</h3>
                    <p className="text-gray-700 mb-6">
                      Camp Pendleton gate traffic (6-8 AM weekdays) creates massive backups during morning formation—we recommend mid-morning service windows. Military PCS moves follow strict 30-day timelines from orders to departure; we coordinate with housing offices and prioritize inspection deadlines. Active duty families receive priority scheduling and military discounts. Vacation rental turnovers require same-day service—we work around cleaning crews for properties along The Strand and pier district. Summer weekends (May-September) bring heavy beach traffic; we schedule early morning or evening for coastal properties to avoid congestion.
                    </p>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Coastal Weather</h3>
                    <p className="text-gray-700 mb-6">
                      Marine layer fog (May-August) deposits salt on coastal properties—we regularly remove salt-damaged patio furniture and corroded beach equipment. Winter storms (December-February) occasionally bring heavy rain and coastal wind requiring schedule flexibility. Harbor areas can experience minor flooding during king tides combined with storms.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Junk Removal Oceanside Services</h3>
                    <p className="text-gray-700 mb-4">
                      Our junk removal Oceanside team handles <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">furniture</a> and <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">appliances</a> exceeding military moving allowances, salt-damaged patio furniture from coastal properties, vacation rental turnovers (<a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">mattresses</a>, guest-damaged items), beach gear and surfboards, <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanouts</a>, base housing inspection preparation, storage unit contents from deployments, storm debris, and <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">construction debris</a> from coastal renovations. We specialize in PCS moves and vacation rental property management.
                    </p>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Hauling for Oceanside Junk Removal</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Military & Coastal Expertise:</strong> We navigate Camp Pendleton base access, understand PCS timelines, and specialize in vacation rental turnovers. Our crews handle salt air damage, coordinate with housing offices and property managers, and complete thousands of North County jobs annually.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Same-Day Service:</strong> Call before noon for same-day service throughout the 92054, 92056, and 92057 areas. We monitor I-5 traffic and military gate congestion, scheduling around base schedules and vacation rental turnovers even during peak PCS and summer seasons.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Military Discounts & Transparent Pricing:</strong> Active duty families receive special discount pricing. No hidden fees—upfront quotes include all labor, hauling, and disposal. Clear pricing tiers from quarter-truck to full-truck loads communicated before work begins.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Insured:</strong> Fully licensed California company with comprehensive liability insurance for military base access, vacation rental properties, and coastal homes.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Oceanside"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Oceanside"
          contextParagraph="Military housing and vacation rental cleanouts throughout Oceanside—from Camp Pendleton to the pier—all use the same transparent pricing. Military discounts available, same-day service."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Oceanside" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Junk Removal Oceanside"
          description="Get answers to common questions about our junk removal Oceanside services, pricing, and same-day availability."
          faqs={oceansideFAQs}
          ctaTitle="Still Have Questions About Oceanside Junk Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our junk removal Oceanside services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related North County Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
                <p className="text-gray-600">Inherited coastal properties and military family estate transitions throughout North County</p>
              </a>
              <a href="/commercial-junk-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Commercial Junk Removal</h4>
                <p className="text-gray-600">Vacation rental and property management cleanout specialists for Oceanside</p>
              </a>
              <a href="/furniture-disposal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Military PCS furniture disposal and coastal property furnishing removal services</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
