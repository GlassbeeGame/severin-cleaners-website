import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/SchemaMarkup";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import { generateLocationServiceSchema, generateBreadcrumbSchema, generateAggregateRatingSchema, generateHowToSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: 'Junk Removal La Mesa | Our HQ • Mount Helix Estates | (619) 750-0114',
  description: 'Junk removal La Mesa CA headquarters: Mount Helix estate specialists, Grossmont medical district, Village urban properties. HQ means fastest response. Same-day service (619) 750-0114',
  keywords: [
    'junk removal la mesa ca',
    'la mesa junk removal',
    'junk removal la mesa',
    'junk hauling la mesa',
    'junk removal mount helix',
    'mount helix junk removal',
    'grossmont junk removal',
    'estate cleanout la mesa',
    'furniture removal la mesa',
    'same day junk removal la mesa',
    'la mesa dump alternative',
    'junk removal grossmont hospital area'
  ],
  openGraph: {
    title: 'Junk Removal La Mesa | Our HQ • Mount Helix Estates | (619) 750-0114',
    description: 'Junk removal La Mesa CA headquarters: Mount Helix estate specialists, Grossmont medical district, Village urban properties. HQ means fastest response.',
    url: 'https://severincleaners.com/junk-removal-la-mesa',
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'La Mesa Junk Removal - Severin Cleaners'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junk Removal La Mesa | Our HQ • Mount Helix Estates | (619) 750-0114',
    description: 'Junk removal La Mesa CA headquarters: Mount Helix estate specialists, Grossmont medical district, Village urban properties. HQ means fastest response.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-la-mesa',
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
    'geo.placename': 'La Mesa',
    'geo.position': '32.7678;-117.0231',
    'ICBM': '32.7678, -117.0231',
  },
};

const laMesaFAQs = [
  {
    question: "How much does junk removal La Mesa CA cost?",
    answer: "Our pricing is transparent and volume-based with no hidden fees. Small items start at $69. Standard items (couches, mattresses, appliances) start at $100. Quarter-load service costs $249 for small cleanouts like a closet or bathroom. Half-load runs $349 for garage corners or bedroom furniture sets. Three-quarter load is $429 for larger projects like full garage sections. Full-load service tops out at $495 for complete garage, estate, or commercial property cleanouts. All prices include labor, hauling, and disposal fees with no surcharges for hillside access in Mount Helix or downtown Village parking challenges. We provide free estimates over the phone and confirm final pricing on-site before starting work. Our local location means lower travel costs and faster response times compared to companies coming from North County or downtown San Diego."
  },
  {
    question: "Can you handle hillside homes in Mount Helix and Fletcher Hills?",
    answer: "Yes, our team specializes in hillside properties throughout Mount Helix, Fletcher Hills, and surrounding East County hills. We navigate steep driveways, winding access roads, and elevation changes regularly—these challenging properties are our specialty as a locally-based service. Our trucks are appropriately sized for narrow hillside streets, and our crews plan routes in advance to handle tight turns and steep grades safely. Mount Helix properties often require extended carries from house to truck due to limited driveway access, and we bring the right equipment and crew size for these situations. We've serviced hundreds of hillside homes in the 91941, 91942, and 91944 zip codes, from modest hillside cottages to large estates with panoramic views. No driveway is too steep, no access too narrow, and no elevation too challenging for our experienced East County team."
  },
  {
    question: "How fast can you respond?",
    answer: "Most calls receive same-day or next-day service when you contact us before noon. Our local headquarters at Grossmont Boulevard means minimal travel time to any neighborhood—we can often arrive within 1-2 hours for urgent situations throughout the 91941, 91942, and 91944 zip codes. Same-day service is especially valuable for time-sensitive needs like rental property turnovers with tight deadlines, real estate closing cleanouts, HOA violation notices requiring immediate compliance, or emergency situations after unexpected events. We coordinate scheduling around local traffic patterns—avoiding Fletcher Parkway congestion during commute hours and planning routes that minimize response time. Whether you're in Mount Helix, downtown Village, Grossmont area, Fletcher Hills, or anywhere in the area, our local presence ensures faster response than companies based in other cities. Even during busy weekends and peak moving season, our expanded crew capacity and proximity to all neighborhoods keeps response times minimal."
  },
  {
    question: "Why does it matter that Severin Cleaners is headquartered locally?",
    answer: "Our local headquarters at 8900 Grossmont Blvd provides significant advantages for customers throughout East County. Response time is the most immediate benefit—our crews start their day from here, meaning we can arrive at your property within 1-2 hours rather than the 2-4 hours required by companies driving from North County, Carlsbad, or downtown San Diego. This proximity enables genuine same-day service when you call before noon, not just theoretical same-day availability that depends on schedule gaps. Operating costs are lower because we're not driving 30-40 miles each direction to reach East County properties, and we pass those savings to customers through competitive pricing without travel surcharges. Local knowledge matters significantly—our crews navigate Mount Helix's steep hillside roads daily, understand Village parking logistics intimately, and know exactly which streets have width restrictions or access challenges. We're invested in this community as residents and business owners, not an outside company making occasional trips into the area. When you hire Severin Cleaners, you're supporting a true local business headquartered in your community."
  }
];

export default function JunkRemovalLaMesaPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "La Mesa Junk Removal", url: "https://severincleaners.com/junk-removal-la-mesa" },
  ]);

  const faqSchema = generateFAQSchema(laMesaFAQs);

  const serviceSchema = {
    "@type": "Service",
    "name": "Junk Removal in La Mesa",
    "description": "Affordable junk removal in La Mesa CA. Same-day hauling, transparent pricing, and a faster alternative to the La Mesa dump. Serving Mount Helix, Fletcher Hills, La Mesa Village, Grossmont Center, and all East County neighborhoods.",
    "url": "https://severincleaners.com/junk-removal-la-mesa",
    "serviceType": "Junk Removal",
    "provider": {
      "@id": "https://severincleaners.com/junk-removal-la-mesa#business"
    }
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://severincleaners.com/junk-removal-la-mesa#business",
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
    "url": "https://severincleaners.com/junk-removal-la-mesa",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Venmo", "Zelle", "Cash App"],
    "acceptsReservations": true,
    "currenciesAccepted": "USD",
    "areaServed": [
      {
        "@type": "City",
        "name": "La Mesa",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "PostalCode",
        "postalCode": "91941",
        "addressLocality": "La Mesa",
        "addressRegion": "CA"
      },
      {
        "@type": "PostalCode",
        "postalCode": "91942",
        "addressLocality": "La Mesa",
        "addressRegion": "CA"
      },
      {
        "@type": "PostalCode",
        "postalCode": "91944",
        "addressLocality": "La Mesa",
        "addressRegion": "CA"
      }
    ],
    "openingHours": "Mo-Su 00:00-23:59",
    "aggregateRating": generateAggregateRatingSchema(),
    "knowsAbout": [
      "Mount Helix Hillside Estate Properties",
      "Grossmont Hospital Medical District Services",
      "La Mesa Village Urban Property Management",
      "East County Headquarters Operations",
      "Fletcher Hills Premium Home Service",
      "Grossmont College Student Housing Cycles",
      "Lake Murray Residential Areas",
      "Trolley-Accessible Property Logistics"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "La Mesa Junk Removal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mount Helix Estate Property Cleanouts",
            "description": "Specialized hillside estate junk removal for Mount Helix's premium properties with challenging access and large-volume needs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Grossmont Medical District Property Services",
            "description": "Medical office cleanouts, healthcare facility transitions, and hospital employee housing services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "La Mesa Village Urban Property Cleanouts",
            "description": "Downtown retail, restaurant, and multi-unit residential junk removal with coordinated parking logistics"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Student Housing Move-Out Services",
            "description": "Grossmont College area rental property turnovers and seasonal student move-out cleanouts"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/severinhauling",
      "https://www.instagram.com/severinhauling/",
      "https://www.yelp.com/biz/severin-cleaners-san-diego",
      "https://www.thumbtack.com/ca/la-mesa/junk-removal/severin-hauling/service/541381661422116888"
    ]
  };

  const howToSchema = generateHowToSchema({
    cityName: "La Mesa",
    pageUrl: "https://severincleaners.com/junk-removal-la-mesa"
  });

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema, howToSchema]
  };

  const nearbyLocations = [
    { name: "El Cajon", slug: "junk-removal-el-cajon" },
    { name: "Spring Valley", slug: "junk-removal-spring-valley" },
    { name: "Lemon Grove", slug: "junk-removal-lemon-grove" },
    { name: "Santee", slug: "junk-removal-santee" },
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
                #1 La Mesa Junk Removal Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Junk Removal La Mesa CA
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Our Headquarters Location • Mount Helix Estates • 1-2 Hour Response Time
              </p>

              <p className="text-lg mb-8">
                ✓ Hillside Access Experts ✓ Village Area Specialists ✓ Licensed & Insured
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
                      Junk Removal La Mesa CA – Fast, Professional Service
                    </h2>

                    <p className="text-lg mb-6 text-gray-700">
                      Looking for junk removal La Mesa CA residents can trust? Severin Cleaners operates from our headquarters at 8900 Grossmont Blvd, providing same-day service throughout Mount Helix hillside estates, Fletcher Hills family homes, and La Mesa Village downtown properties. We're your faster, easier alternative to the dump with transparent pricing and professional service across all 91941 and 91942 zip codes.
                    </p>

                    {/* Why Our HQ Matters */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Our La Mesa Junk Removal Service</h3>
                    <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                      <li><strong>Fast 1-2 hour response:</strong> Our Grossmont Blvd headquarters means rapid service to Mount Helix, Fletcher Hills, and all neighborhoods</li>
                      <li><strong>Competitive pricing:</strong> No long drives means lower costs without travel surcharges</li>
                      <li><strong>Local expertise:</strong> Daily navigation of hillside roads and Village parking restrictions</li>
                    </ul>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Neighborhoods We Serve</h3>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1 text-gray-700">
                        <li>• Mount Helix</li>
                        <li>• Fletcher Hills</li>
                        <li>• La Mesa Village</li>
                        <li>• Grossmont Center</li>
                      </ul>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Lake Murray</li>
                        <li>• Spring Street Corridor</li>
                        <li>• College Area</li>
                        <li>• All 91941, 91942, 91944 zip codes</li>
                      </ul>
                    </div>

                    {/* Mount Helix Estate Specialists */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Mount Helix & Hillside Property Specialists</h3>
                    <p className="text-gray-700 mb-6">
                      Mount Helix's premium hillside estates require specialized expertise for junk removal. La mesa junk removal on steep terrain demands experience—we navigate driveways with grades up to 25%, narrow winding roads, and challenging access daily. Our team handles estate-scale cleanouts for 3,000-5,000 sq ft properties with proper equipment and full insurance coverage.
                    </p>

                    {/* Grossmont Medical District */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Grossmont Hospital Area</h3>
                    <p className="text-gray-700 mb-6">
                      Grossmont Hospital is East County's largest employer. We serve medical offices, healthcare facilities, senior living centers, and busy medical professionals with flexible scheduling and facility coordination. Our Grossmont Blvd headquarters is minutes from the medical complex.
                    </p>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Major Landmarks We Serve</h3>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1 text-gray-700">
                        <li>• Grossmont Hospital</li>
                        <li>• Grossmont Center</li>
                        <li>• Mount Helix Park</li>
                        <li>• La Mesa Village</li>
                        <li>• Lake Murray</li>
                      </ul>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Grossmont College</li>
                        <li>• Helix Charter High School</li>
                        <li>• Community Center</li>
                        <li>• Trolley Stations</li>
                        <li>• Peter Pan Theater</li>
                      </ul>
                    </div>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Weather Considerations</h3>
                    <p className="text-gray-700 mb-6">
                      Inland East County summers regularly exceed 90°F—we schedule early morning starts (7-10 AM) during heat waves. Winter rainy season makes Mount Helix's steep roads more challenging, so we monitor forecasts and adjust timing for hillside properties during wet conditions to ensure crew safety.
                    </p>

                    {/* La Mesa Village Urban Property */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">La Mesa Village Downtown Services</h3>
                    <p className="text-gray-700 mb-6">
                      Downtown La Mesa Village requires specialized coordination—limited street parking, alley access, and business-hour scheduling. We serve retail businesses, restaurants, apartments, and condos with off-peak scheduling and parking permits to minimize disruption.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Furniture & Household</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">Sofas, couches, sectionals</a> from living rooms</li>
                          <li>• <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">Mattresses</a>, box springs, bed frames</li>
                          <li>• Tables, chairs, dining sets</li>
                          <li>• Dressers, desks, cabinets, bookshelves</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances & Electronics</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Refrigerators, washers, dryers</a></li>
                          <li>• Stoves, dishwashers, microwaves</li>
                          <li>• TVs, computers, entertainment systems</li>
                          <li>• Water heaters and HVAC units</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Outdoor & Garage</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Patio furniture and outdoor equipment</li>
                          <li>• Garage cleanouts and storage items</li>
                          <li>• Yard waste and landscaping debris</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs and spas</a> from renovations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Cleanouts & Projects</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">Estate cleanouts</a> for inherited properties</li>
                          <li>• Apartment and condo move-outs with <a href="/cleanout-services-san-diego" className="text-blue-600 hover:underline">professional cleanout services</a></li>
                          <li>• Storage unit clearing</li>
                          <li>• <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">Construction debris</a> from remodels</li>
                        </ul>
                      </div>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Cleaners</h3>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Local Expertise:</strong> Daily navigation of Mount Helix hillside roads, Village parking restrictions, and all East County neighborhoods</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>1-2 Hour Response:</strong> Same-day service from our Grossmont Blvd headquarters—faster than companies based in North County</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Faster Than DIY:</strong> We arrive and complete removal in under 2 hours—quicker than driving to the dump yourself</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> $69-$495 based on volume with all labor, hauling, and disposal included—no extra charges for hillside access</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="La Mesa"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="La Mesa"
          contextParagraph="Hillside estate cleanouts and Village area projects—from Mount Helix to Grossmont—all use the same transparent pricing. No hidden fees, faster than the dump."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="La Mesa" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions"
          description="Get answers to common questions about our junk removal services, pricing, and same-day availability."
          faqs={laMesaFAQs}
          ctaTitle="Still Have Questions?"
          ctaDescription="Our experienced team is ready to answer any questions about our services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related East County Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-disposal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Mount Helix estate furniture and family home removal throughout East County</p>
              </a>
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
                <p className="text-gray-600">Inherited hillside properties and family estate transitions</p>
              </a>
              <a href="/construction-debris-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
                <p className="text-gray-600">Family home renovations and hillside property improvement projects</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </>
  );
}
