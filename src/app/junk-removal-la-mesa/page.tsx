import { Metadata } from 'next';
import Image from "next/image";
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
  title: 'La Mesa Junk Removal • Local HQ = 1-Hour Response | (619) 750-0114',
  description: 'La Mesa junk removal from our local headquarters. Mount Helix specialists, same-day service, 1-hour response time. Professional junk hauling La Mesa trusts. Call (619) 750-0114',
  keywords: [
    'la mesa junk removal',
    'junk removal la mesa',
    'junk hauling la mesa',
    'junk removal la mesa ca',
    'mount helix junk removal',
    'la mesa hauling service',
    'same day junk removal la mesa',
    'furniture removal la mesa',
    'appliance removal la mesa',
    'la mesa junk pickup'
  ],
  openGraph: {
    title: 'La Mesa Junk Removal • Local HQ = 1-Hour Response | (619) 750-0114',
    description: 'La Mesa junk removal from our local headquarters. Mount Helix specialists, same-day service, professional hauling.',
    url: 'https://www.severinhauling.com/junk-removal-la-mesa',
    siteName: 'Severin Hauling',
    images: [{
      url: 'https://www.severinhauling.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'La Mesa Junk Removal - Severin Hauling'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Mesa Junk Removal • Local HQ = 1-Hour Response',
    description: 'La Mesa junk removal from our local headquarters. Mount Helix specialists, same-day service.',
    images: ['https://www.severinhauling.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.severinhauling.com/junk-removal-la-mesa',
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
    'article:published_time': '2026-02-12T09:00:00-08:00',
    'article:modified_time': '2026-02-12T09:00:00-08:00',
  },
};

const laMesaFAQs = [
  {
    question: "What's your response time for La Mesa junk removal?",
    answer: "Our La Mesa headquarters at 8900 Grossmont Blvd means we typically arrive within 1-2 hours for same-day requests. Call before 2 PM and we can usually service your property the same day. We're the fastest junk removal La Mesa has because we're based right here in the community."
  },
  {
    question: "How much does junk hauling La Mesa cost?",
    answer: "Pricing is simple and transparent: small single items start at $69, standard furniture pieces at $100, quarter-truck load $249, half-truck $349, three-quarter truck $429, and full truck $495. All prices include labor, hauling, disposal, and eco-friendly recycling. No hidden fees for hillside access or downtown parking."
  },
  {
    question: "Can you handle Mount Helix hillside properties?",
    answer: "Yes, hillside access is our specialty. We service Mount Helix, Fletcher Hills, and all La Mesa hillside communities daily. Our team navigates steep driveways, narrow roads, and challenging terrain with appropriately-sized trucks and experienced crews. Being locally based means we know every hillside neighborhood in the 91941, 91942, and 91944 zip codes."
  },
  {
    question: "Do you offer free estimates for junk removal La Mesa?",
    answer: "Absolutely. Call (619) 750-0114 for an instant phone estimate, or request a free on-site visit for larger projects. For most standard items (furniture, appliances, garage cleanouts), we can provide accurate pricing over the phone based on your description."
  },
  {
    question: "What items can you remove?",
    answer: "We handle everything: furniture (sofas, mattresses, dining sets), appliances (refrigerators, washers, dryers), electronics, yard waste, construction debris, hot tubs, estate cleanouts, and more. If you're unsure about a specific item, call us—we can handle almost anything that's non-hazardous."
  },
  {
    question: "Are you really based in La Mesa?",
    answer: "Yes, our physical headquarters is at 8900 Grossmont Blvd in La Mesa, CA 91941. This isn't just a mailing address—our trucks, crew, and operations are based here. That's why we can respond faster than companies driving in from North County or other areas."
  },
  {
    question: "Do you recycle or donate items?",
    answer: "Yes, we sort every load. Usable furniture goes to local East County charities including Goodwill on Fletcher Parkway. Metal items go to San Diego recycling facilities, mattresses to specialized recycling centers, and electronics receive certified e-waste processing with proper hazardous material handling."
  },
  {
    question: "What areas of La Mesa do you serve?",
    answer: "We serve all La Mesa neighborhoods: Mount Helix, Fletcher Hills, La Mesa Village, Grossmont Center area, College Area, Lake Murray, Spring Street corridor, and all residential streets. We also serve neighboring El Cajon, Spring Valley, Lemon Grove, and Santee. All three zip codes (91941, 91942, 91944) receive the same fast service."
  }
];

export default function LaMesaJunkRemovalPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.severinhauling.com" },
    { name: "Service Areas", url: "https://www.severinhauling.com/areas-we-serve" },
    { name: "La Mesa Junk Removal", url: "https://www.severinhauling.com/junk-removal-la-mesa" },
  ]);

  const faqSchema = generateFAQSchema(laMesaFAQs);

  const serviceSchema = {
    "@type": "Service",
    "name": "La Mesa Junk Removal and Hauling",
    "description": "Professional junk removal La Mesa CA. Locally headquartered with 1-hour response time, transparent pricing, and eco-friendly disposal. Serving Mount Helix, Fletcher Hills, La Mesa Village, and all East County neighborhoods.",
    "url": "https://www.severinhauling.com/junk-removal-la-mesa",
    "serviceType": "Junk Removal and Hauling",
    "provider": {
      "@id": "https://www.severinhauling.com/junk-removal-la-mesa#organization"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "La Mesa",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      }
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "69",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "69",
        "maxPrice": "495",
        "priceCurrency": "USD"
      }
    }
  };

  const organizationSchema = {
    "@type": "Organization",
    "@id": "https://www.severinhauling.com/junk-removal-la-mesa#organization",
    "name": "Severin Hauling LLC",
    "legalName": "Severin Hauling LLC",
    "url": "https://www.severinhauling.com",
    "logo": "https://www.severinhauling.com/logo.png",
    "image": "https://www.severinhauling.com/og-image.jpg",
    "telephone": "+1-619-750-0114",
    "email": "severinhauling@gmail.com",
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
    "priceRange": "$69-$495",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Venmo", "Zelle", "Cash App"],
    "currenciesAccepted": "USD",
    "openingHours": "Mo-Su 00:00-23:59",
    "aggregateRating": generateAggregateRatingSchema(),
    "areaServed": [
      {
        "@type": "City",
        "name": "La Mesa"
      },
      {
        "@type": "City",
        "name": "El Cajon"
      },
      {
        "@type": "City",
        "name": "Spring Valley"
      },
      {
        "@type": "City",
        "name": "Santee"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/severinhauling",
      "https://www.instagram.com/severinhauling/",
      "https://www.yelp.com/biz/severin-hauling-san-diego",
      "https://www.thumbtack.com/ca/la-mesa/junk-removal/severin-hauling/service/541381661422116888"
    ]
  };

  const howToSchema = generateHowToSchema({
    cityName: "La Mesa",
    pageUrl: "https://www.severinhauling.com/junk-removal-la-mesa"
  });

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, serviceSchema, breadcrumbSchema, faqSchema, howToSchema]
  };

  const nearbyLocations = [
    { name: "El Cajon", slug: "junk-removal-el-cajon" },
    { name: "Spring Valley", slug: "junk-removal-spring-valley" },
    { name: "Santee", slug: "junk-removal-santee" },
    { name: "Lemon Grove", slug: "junk-removal-lemon-grove" },
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
                Locally Headquartered • Same-Day Available
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                La Mesa Junk Removal
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                1-Hour Response Time from Our Grossmont Blvd HQ
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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

              <p className="text-lg">
                ✓ Mount Helix Specialists ✓ Licensed & Insured ✓ Eco-Friendly Disposal
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
                      Professional Junk Hauling La Mesa Homeowners Trust
                    </h2>

                    <div className="float-right ml-6 mb-6 w-80 hidden md:block">
                      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                        <Image
                          src="/optimized/junkinbushes.jpg"
                          alt="Professional junk removal La Mesa service - yard debris hauling"
                          fill
                          className="object-cover"
                          sizes="320px"
                        />
                      </div>
                    </div>

                    <p className="text-lg mb-4 text-gray-700">
                      Need junk removal La Mesa can count on? Severin Hauling operates from 8900 Grossmont Blvd—not driving in from North County or Carlsbad. Booking junk removal with us is easy and stress free: call, get a free estimate, and we're there.
                    </p>
                    <p className="text-lg mb-6 text-gray-700">
                      Our local headquarters means 1-2 hour response times throughout Mount Helix hillside estates, Fletcher Hills family homes, La Mesa Village downtown properties, and every neighborhood in the 91941, 91942, and 91944 zip codes.
                    </p>

                    <p className="text-lg mb-6 text-gray-700">
                      Being locally based isn't just about speed. We know Mount Helix's steep driveways. We navigate La Mesa Village parking restrictions daily. We understand Fletcher Hills access challenges. This is junk hauling La Mesa done by people who live and work here.
                    </p>

                    {/* What Makes Us Different */}
                    <h3 className="text-2xl font-bold mt-10 mb-4">The Local Advantage</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                      <div className="bg-blue-50 p-5 rounded-lg">
                        <h4 className="font-bold mb-2 text-gray-900">⚡ Faster Response</h4>
                        <p className="text-gray-700 text-sm">Our Grossmont Blvd location means 1-2 hour arrival vs. 3-4 hours from distant companies</p>
                      </div>
                      <div className="bg-blue-50 p-5 rounded-lg">
                        <h4 className="font-bold mb-2 text-gray-900">💰 Lower Costs</h4>
                        <p className="text-gray-700 text-sm">No long drive time surcharges. We're already here.</p>
                      </div>
                      <div className="bg-blue-50 p-5 rounded-lg">
                        <h4 className="font-bold mb-2 text-gray-900">🏔️ Hillside Experts</h4>
                        <p className="text-gray-700 text-sm">Daily navigation of Mount Helix's 25% grade driveways and narrow hillside roads</p>
                      </div>
                      <div className="bg-blue-50 p-5 rounded-lg">
                        <h4 className="font-bold mb-2 text-gray-900">🌱 Eco-Conscious</h4>
                        <p className="text-gray-700 text-sm">Partnership with East County charities and certified recycling facilities</p>
                      </div>
                    </div>

                    {/* Service Areas */}
                    <h3 className="text-2xl font-bold mt-10 mb-4">La Mesa Neighborhoods We Serve Daily</h3>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg mb-8">
                      <div className="grid md:grid-cols-3 gap-3">
                        <div>
                          <p className="font-semibold text-gray-900 mb-2">Hillside Communities</p>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Mount Helix</li>
                            <li>• Fletcher Hills</li>
                            <li>• Hillside estates</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 mb-2">Urban Areas</p>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• La Mesa Village</li>
                            <li>• Grossmont Center</li>
                            <li>• Spring Street corridor</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 mb-2">Residential Zones</p>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Lake Murray</li>
                            <li>• College Area</li>
                            <li>• All 91941-91944 zips</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Common Scenarios */}
                    <h3 className="text-2xl font-bold mt-10 mb-4">Common La Mesa Junk Removal Scenarios</h3>

                    <div className="space-y-5 mb-8">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-bold text-gray-900 mb-1">Mount Helix Estate Cleanouts</h4>
                        <p className="text-gray-700 text-sm">Large hillside properties often require full-truck removal for estate transitions, downsizing, or inheritance situations. We handle 3,000-5,000 sq ft properties with steep access regularly.</p>
                      </div>

                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-bold text-gray-900 mb-1">Grossmont Hospital Area Moves</h4>
                        <p className="text-gray-700 text-sm">Medical professionals relocating need fast turnaround. We coordinate with property managers and offer flexible scheduling for busy healthcare workers in the Grossmont medical district.</p>
                      </div>

                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-bold text-gray-900 mb-1">La Mesa Village Retail & Restaurant Turnover</h4>
                        <p className="text-gray-700 text-sm">Downtown businesses need off-peak service to minimize customer disruption. We schedule early morning or evening removal with coordinated parking permits.</p>
                      </div>

                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-bold text-gray-900 mb-1">College Area Student Move-Outs</h4>
                        <p className="text-gray-700 text-sm">Grossmont College area landlords need quick turnover between tenants. Our same-day service keeps vacancy time minimal during peak move-out seasons.</p>
                      </div>
                    </div>

                    {/* Items We Handle */}
                    <h3 className="text-2xl font-bold mt-10 mb-4">What We Remove</h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-bold mb-3 text-gray-900">Furniture & Household Items</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• <a href="/couch-removal-san-diego" className="text-blue-600 hover:underline">Sofas, couches, sectionals</a></li>
                          <li>• <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">Mattresses and box springs</a></li>
                          <li>• Dining sets, tables, chairs</li>
                          <li>• Dressers, cabinets, desks</li>
                          <li>• Patio furniture sets</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-3 text-gray-900">Appliances & Electronics</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Refrigerators, washers, dryers</a></li>
                          <li>• Stoves, dishwashers, microwaves</li>
                          <li>• TVs, computers, electronics</li>
                          <li>• Water heaters, HVAC units</li>
                          <li>• Certified e-waste processing</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-3 text-gray-900">Property Cleanouts</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">Estate cleanouts</a></li>
                          <li>• Garage and storage clearing</li>
                          <li>• Apartment move-out cleanouts</li>
                          <li>• Foreclosure property clearing</li>
                          <li>• Hoarding situation cleanup</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-3 text-gray-900">Specialty Removals</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs and spas</a></li>
                          <li>• <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">Construction debris</a></li>
                          <li>• Yard waste, tree branches</li>
                          <li>• Exercise equipment</li>
                          <li>• Office furniture</li>
                        </ul>
                      </div>
                    </div>

                    {/* How It Works */}
                    <h3 className="text-2xl font-bold mt-10 mb-4">Simple 3-Step Process</h3>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Call or Book Online</h4>
                          <p className="text-gray-700">Contact us at (619) 750-0114 or through our website. Describe what you need removed and we'll give you a free, no-obligation estimate—no surprises.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">We Arrive & Confirm Price</h4>
                          <p className="text-gray-700">Our crew arrives within your scheduled window (often same-day). We confirm the final price on-site before starting any work. Point to what goes, and we handle the rest.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">We Haul Everything Away</h4>
                          <p className="text-gray-700">We load, haul, and dispose of everything responsibly. Donations go to East County charities, recyclables to certified facilities. Your space is left clutter free—you reclaim your space without lifting a finger.</p>
                        </div>
                      </div>
                    </div>

                    {/* Local Knowledge */}
                    <h3 className="text-2xl font-bold mt-10 mb-4">Why Local Headquarters Matters</h3>
                    <p className="text-gray-700 mb-4">
                      A lot of junk removal companies claim to serve La Mesa while operating from North County or Orange County. Our 8900 Grossmont Blvd headquarters is the real thing. Here's what that means for you:
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span className="text-gray-700"><strong>Response speed:</strong> 1-2 hours vs. 3-4 hours from distant operators</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span className="text-gray-700"><strong>No travel fees:</strong> We don't charge extra for "coming out to East County"</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span className="text-gray-700"><strong>Local expertise:</strong> Daily familiarity with Mount Helix roads, Village parking, Grossmont area logistics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span className="text-gray-700"><strong>Community investment:</strong> We live and operate here—reputation matters more than one-time transactions</span>
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
          contextParagraph="From single-item pickup to full estate cleanouts across Mount Helix, Fletcher Hills, and La Mesa Village—transparent pricing with no hidden fees. Call for a free, no-obligation estimate."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="La Mesa" />

        {/* FAQ Section */}
        <FAQSection
          title="La Mesa Junk Removal Questions"
          description="Common questions about our junk hauling service, pricing, and availability in La Mesa."
          faqs={laMesaFAQs}
          ctaTitle="Ready to Schedule?"
          ctaDescription="Call our La Mesa team for same-day service and instant pricing on your junk removal project."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related East County Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/junk-removal-el-cajon" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Junk Removal El Cajon</h4>
                <p className="text-gray-600">Fast service for neighboring El Cajon communities</p>
              </a>
              <a href="/junk-removal-spring-valley" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Junk Removal Spring Valley</h4>
                <p className="text-gray-600">Same-day hauling throughout Spring Valley</p>
              </a>
              <a href="/furniture-disposal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Disposal</h4>
                <p className="text-gray-600">Specialized furniture removal and donation services</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </>
  );
}
