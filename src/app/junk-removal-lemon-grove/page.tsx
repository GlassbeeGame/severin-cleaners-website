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
  title: 'Junk Removal Lemon Grove | Same-Day Service | (619) 750-0114',
  description: 'Lemon Grove budget junk removal apartments, Broadway corridor. Affordable multi-family, student rentals. (619) 750-0114',
  keywords: [
    'Lemon Grove junk removal',
    'junk hauling Lemon Grove',
    'junk pickup Lemon Grove',
    'trash removal Lemon Grove',
    'Lemon Grove San Diego junk removal',
    'apartment junk removal'
  ],
  openGraph: {
    title: 'Junk Removal Lemon Grove | Family Homes & Apartment Specialists',
    description: 'Professional junk removal lemon grove for apartments, family homes, Broadway corridor. Same-day service, transparent pricing, eco-friendly disposal. Call (619) 750-0114.',
    url: 'https://www.severinhauling.com/junk-removal-lemon-grove',
    siteName: 'Severin Hauling',
    images: [{
      url: 'https://www.severinhauling.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Junk Removal Lemon Grove - Severin Hauling'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junk Removal Lemon Grove | Family Homes & Apartment Specialists',
    description: 'Professional junk removal lemon grove for apartments, family homes, Broadway corridor. Same-day service, transparent pricing. Call (619) 750-0114.',
    images: ['https://www.severinhauling.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.severinhauling.com/junk-removal-lemon-grove',
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
    'geo.placename': 'Lemon Grove',
    'geo.position': '32.7425;-117.0314',
    'ICBM': '32.7425, -117.0314',
  },
};

const lemonGroveFAQs = [
  {
    question: "How much does junk removal lemon grove cost?",
    answer: "Our pricing is transparent and volume-based: small items $69, standard items $100, quarter-load $249, half-load $349, three-quarter load $429, and full-load $495. All prices include labor, hauling, and disposal with no hidden fees. We provide free estimates and confirm final pricing on-site before starting work."
  },
  {
    question: "Do you offer same-day service?",
    answer: "Yes, call before noon for <a href='/same-day-junk-removal-san-diego' className='text-blue-600 hover:underline'>same-day service</a> throughout the 91945 area. We often arrive within 2-4 hours for urgent situations like apartment move-outs or emergency cleanouts. We coordinate with property managers and schedule around your availability."
  },
  {
    question: "Can you handle apartments and multifamily housing?",
    answer: "Absolutely. We specialize in apartment complexes and multifamily properties throughout the community. We coordinate with property managers, navigate hallways and elevators, and work efficiently to minimize disruption. Our team handles turnover cleanouts, bulk item removal, and property maintenance support with affordable pricing."
  },
  {
    question: "What areas of Lemon Grove do you serve?",
    answer: "We serve all of Lemon Grove including Downtown, Broadway Corridor, Berry Street area, Trolley Station area, Massachusetts Avenue, Lemon Grove Avenue, Lincoln Street, and Central Avenue. We also serve nearby <a href='/junk-removal-la-mesa' className='text-blue-600 hover:underline'>La Mesa</a>, <a href='/junk-removal-spring-valley' className='text-blue-600 hover:underline'>Spring Valley</a>, and <a href='/junk-removal-el-cajon' className='text-blue-600 hover:underline'>El Cajon</a>."
  },
  {
    question: "Can you remove heavy furniture and appliances?",
    answer: "Yes, we handle all heavy lifting for <a href='/furniture-disposal-san-diego' className='text-blue-600 hover:underline'>furniture</a>, <a href='/appliance-removal-san-diego' className='text-blue-600 hover:underline'>appliances</a>, exercise equipment, and accumulated household items. We protect floors and doorways during all removals and navigate compact streets and apartment buildings with care."
  },
  {
    question: "Do you work with small businesses?",
    answer: "Yes, we support local small businesses along Broadway and throughout the community. We offer flexible scheduling, competitive commercial rates, and regular service options. Whether it's office furniture, retail fixtures, or restaurant equipment, we handle small business cleanouts efficiently and affordably."
  },
  {
    question: "Do you recycle or donate items?",
    answer: "Yes, we sort every load for recycling and donation. Usable items go to local East County charities, recyclables to proper facilities, and only true trash to landfill as last resort. This eco-friendly approach reduces landfill fees and supports our competitive pricing."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we're fully licensed and insured throughout Lemon Grove and San Diego County. Our comprehensive liability insurance protects your property during service. We carry proper coverage for apartment complexes, residential properties, and commercial spaces."
  }
];

export default function JunkRemovalLemonGrovePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.severinhauling.com" },
    { name: "Areas We Serve", url: "https://www.severinhauling.com/areas-we-serve" },
    { name: "Junk Removal Lemon Grove", url: "https://www.severinhauling.com/junk-removal-lemon-grove" },
  ]);

  const faqSchema = generateFAQSchema(lemonGroveFAQs);

  const serviceSchema = {
    "@type": "Service",
    "name": "Junk Removal Lemon Grove - Family & Apartment Specialists",
    "description": "Professional junk removal lemon grove service for apartments, family homes, and small businesses. Same-day availability, transparent pricing, eco-friendly disposal. Serving all 91945 neighborhoods.",
    "url": "https://www.severinhauling.com/junk-removal-lemon-grove",
    "serviceType": "Junk Removal",
    "provider": {
      "@id": "https://www.severinhauling.com/junk-removal-lemon-grove#business"
    }
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://www.severinhauling.com/junk-removal-lemon-grove#business",
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
    "url": "https://www.severinhauling.com/junk-removal-lemon-grove",
    "areaServed": [
      {
        "@type": "City",
        "name": "Lemon Grove",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "PostalCode",
        "postalCode": "91945",
        "addressLocality": "Lemon Grove",
        "addressRegion": "CA"
      },
      {
        "@type": "PostalCode",
        "postalCode": "91946",
        "addressLocality": "Lemon Grove",
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
    cityName: "Lemon Grove",
    pageUrl: "https://www.severinhauling.com/junk-removal-lemon-grove"
  });

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema, howToSchema]
  };

  const nearbyLocations = [
    { name: "La Mesa", slug: "junk-removal-la-mesa" },
    { name: "Spring Valley", slug: "junk-removal-spring-valley" },
    { name: "El Cajon", slug: "junk-removal-el-cajon" },
    { name: "Chula Vista", slug: "junk-removal-chula-vista" },
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
                #1 Lemon Grove Junk Removal Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Junk Removal Lemon Grove
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Family Homes • Apartments • Broadway Corridor • Same-Day Service
              </p>

              <p className="text-lg mb-8">
                ✓ Community-Focused Service ✓ Same-Day Hauling ✓ Licensed & Insured
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
                      Junk Removal Lemon Grove – Family Homes &amp; Apartment Specialists
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      Need junk removal lemon grove residents trust? <a href="/" className="text-blue-600 hover:underline font-medium">Severin Hauling</a> serves the entire 91945 area—from Broadway's commercial corridor to Berry Street Park's family neighborhoods. We handle apartment turnovers, family home cleanouts, and small business needs with same-day service and transparent pricing.
                    </p>

                    <p className="text-lg mb-4 text-gray-700">
                      Our crew knows this tight-knit East County community. We navigate compact streets, coordinate with apartment property managers, and work efficiently throughout downtown, the trolley station area, and residential zones. Whether it's a single item or full property cleanout, we do all the heavy lifting.
                    </p>

                    <p className="text-lg mb-6 text-gray-700">
                      Booking is simple: call, get a free no-obligation estimate, and we show up. Need it fast? We offer <a href="/blog/same-day-junk-removal-guide" className="text-blue-600 hover:underline">same-day pickup</a> when you call before noon.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">91945 Neighborhoods We Serve</h3>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• Downtown Lemon Grove</li>
                        <li>• Broadway Corridor</li>
                        <li>• Berry Street Area</li>
                        <li>• Massachusetts Avenue</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Lemon Grove Avenue</li>
                        <li>• Trolley Station Area</li>
                        <li>• Lincoln Street</li>
                        <li>• Central Avenue</li>
                      </ul>
                    </div>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Lemon Grove Landmarks & Reference Points</h3>
                    <p className="text-gray-700 mb-4">
                      We provide junk removal Lemon Grove service near all major community landmarks. These familiar reference points help us navigate quickly to your property and provide accurate arrival time estimates. Our crews use local landmarks for efficient routing throughout this close-knit community where neighbors know each other by name:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• The Big Lemon—iconic downtown landmark and community symbol</li>
                        <li>• Berry Street Park—central recreation area and family gathering space</li>
                        <li>• Lemon Grove Civic Center—government services and community hub</li>
                        <li>• Lemon Grove Trolley Station—transit access and downtown anchor</li>
                        <li>• Lemon Grove Library—educational resource and neighborhood reference</li>
                        <li>• Lemon Grove Historical Society—heritage center and downtown landmark</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Mt. Vernon Elementary—school zone and family neighborhood reference</li>
                        <li>• Lemon Grove Academy—educational facility and community landmark</li>
                        <li>• Veterans Memorial—civic plaza and downtown gathering space</li>
                        <li>• Broadway Plaza—commercial district and shopping reference</li>
                        <li>• Lemon Grove Community Church—central faith community landmark</li>
                        <li>• Lemon Grove Village—historic downtown commercial district</li>
                      </ul>
                    </div>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">East County Weather Considerations</h3>
                    <p className="text-gray-700 mb-6">
                      Inland location means hot summers (80s-90s) from June to September—we offer early morning service windows for comfort. Winter rains (December-February) occasionally affect outdoor work scheduling.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Haul From Lemon Grove Properties</h3>
                    <p className="text-gray-700 mb-4">
                      Our junk removal lemon grove service handles everything from single items to complete <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanouts</a>:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Furniture & Household Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">Sofas, couches, sectionals</a> from apartment turnovers</li>
                          <li>• <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">Mattresses</a>, box springs, bed frames from family homes</li>
                          <li>• Dining tables, chairs, kitchen furniture</li>
                          <li>• Dressers, nightstands, bedroom sets from downsizing</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances & Electronics</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Refrigerators, washers, dryers</a> from apartment upgrades</li>
                          <li>• Dishwashers, stoves, microwaves for kitchen renovations</li>
                          <li>• TVs, computers, outdated electronics disposal</li>
                          <li>• Window AC units, portable heaters, fans</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Family Home & Garage Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/cleanout-services-san-diego" className="text-blue-600 hover:underline">Garage cleanouts</a> with tools, equipment, storage items</li>
                          <li>• Kids' toys, play equipment, outgrown furniture</li>
                          <li>• Exercise equipment, weights, home gym items</li>
                          <li>• Holiday decorations and seasonal storage clearance</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Business & Office Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Small business cleanouts and office furniture</li>
                          <li>• Retail fixtures, shelving, display equipment</li>
                          <li>• Restaurant equipment and commercial appliances</li>
                          <li>• Office electronics, filing cabinets, desks</li>
                        </ul>
                      </div>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Our Junk Removal Lemon Grove Service</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Community-Focused Service:</strong> We navigate Lemon Grove's compact streets, apartment complexes, and family neighborhoods with care and efficiency. Our crews have completed thousands of East County junk removal jobs and understand the specific needs of working families, apartment residents, and small businesses. We coordinate with property managers, respect neighbor parking, and complete jobs efficiently even during peak periods.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Same-Day Service Available:</strong> Call before noon for same-day junk removal throughout Lemon Grove and surrounding East County areas. Our dispatch team actively monitors local traffic patterns and coordinates with apartment management offices, ensuring reliable service for both residential and commercial properties with flexible scheduling around your needs.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> No hidden fees, no surprises. Upfront quotes based on volume with all labor, hauling, and disposal included. We offer affordable pricing structures for apartment turnovers, family home cleanouts, and small business needs. Most Lemon Grove jobs range from quarter-truck to full-truck loads with clear pricing tiers communicated before work begins.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Insured:</strong> Fully licensed California junk removal company with comprehensive liability insurance. We carry proper coverage for apartment complex access, including protection for hallways, elevators, shared building entry, and residential properties that require careful navigation of narrow streets and limited parking areas common to Lemon Grove's family neighborhoods.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Lemon Grove"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Lemon Grove"
          contextParagraph="Apartment cleanouts and family home projects throughout Lemon Grove—from Broadway to Berry Street—all use the same transparent pricing. No hidden fees, same-day service available."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Lemon Grove" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Junk Removal Lemon Grove"
          description="Get answers to common questions about our junk removal Lemon Grove services, pricing, and same-day availability."
          faqs={lemonGroveFAQs}
          ctaTitle="Still Have Questions About Lemon Grove Junk Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our junk removal Lemon Grove services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related East County Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-disposal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Affordable furniture disposal for apartments and family homes throughout East County</p>
              </a>
              <a href="/commercial-junk-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Commercial Junk Removal</h4>
                <p className="text-gray-600">Small business cleanouts with budget-friendly pricing for Lemon Grove businesses</p>
              </a>
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
                <p className="text-gray-600">Compassionate family estate transitions and downsizing support in East County</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </>
  );
}
