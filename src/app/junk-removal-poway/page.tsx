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
  title: 'Junk Removal Poway CA | Same-Day Service | (619) 750-0114',
  description: 'Professional service for ranch properties, family homes, and businesses in 4S Ranch, Stone Ridge, equestrian estates. Same-day hauling, licensed & insured.',
  keywords: [
    'junk removal poway ca',
    'poway junk removal',
    'junk hauling poway',
    'same day junk removal poway'
  ],
  openGraph: {
    title: 'Junk Removal Poway CA | Ranch & Family Home Specialists',
    description: 'Professional service for ranches, family homes, business parks. Large property specialists with eco-friendly disposal. Call (619) 750-0114.',
    url: 'https://www.severinhauling.com/junk-removal-poway',
    siteName: 'Severin Hauling',
    images: [{
      url: 'https://www.severinhauling.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Poway Junk Removal - Severin Hauling'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junk Removal Poway CA | Ranch & Family Home Specialists',
    description: 'Professional service for ranches, family homes, business parks. Large property specialists with eco-friendly disposal. Call (619) 750-0114.',
    images: ['https://www.severinhauling.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.severinhauling.com/junk-removal-poway',
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
    'geo.placename': 'Poway',
    'geo.position': '32.9628;-117.0359',
    'ICBM': '32.9628, -117.0359',
  },
};

const powayFAQs = [
  {
    question: "How much does junk removal Poway CA cost?",
    answer: "Our pricing is transparent and volume-based: small items $69, standard items $100, quarter-load $249, half-load $349, three-quarter load $429, and full-load $495. All prices include labor, hauling, and disposal with no surcharges for long driveways, rural access, or hillside properties. We provide free estimates and confirm final pricing on-site before starting work. Learn more about <a href='/blog/how-much-does-junk-removal-cost-san-diego' className='text-blue-600 hover:underline'>junk removal pricing in San Diego</a>."
  },
  {
    question: "Do you handle large ranch or equestrian properties?",
    answer: "Absolutely. We specialize in ranch and equestrian properties throughout Stone Ridge, Garden Road, and Espola Road. We handle barn cleanouts, tack, riding equipment, fencing materials, and agricultural equipment. We coordinate around horse feeding schedules (typically 6-8 AM and 4-6 PM), navigate long private driveways, and work safely around livestock."
  },
  {
    question: "Can you provide same-day service?",
    answer: "Yes, call before noon for <a href='/same-day-junk-removal-san-diego' className='text-blue-600 hover:underline'>same-day service</a> throughout the 92064 and 92074 zip codes. We often arrive within 2-4 hours for urgent situations. We coordinate around traffic patterns and provide ranch property access coordination for gate codes and long driveways. Next-day and weekend appointments also available. Learn more about <a href='/blog/same-day-junk-removal-guide' className='text-blue-600 hover:underline'>securing same-day pickup</a>."
  },
  {
    question: "Do you work with Poway Business Park and commercial properties?",
    answer: "Yes, we provide <a href='/commercial-junk-removal-san-diego' className='text-blue-600 hover:underline'>commercial support</a> for office cleanouts, warehouse clearing, and retail renovation debris. We offer after-hours service (evenings and weekends) to minimize business disruption. We provide certificates of insurance, coordinate with building security, and offer volume discounts for regular service contracts."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we're fully licensed and insured throughout San Diego County. Our comprehensive liability insurance protects your property during service—especially important for large properties with long driveways and equestrian facilities. We provide certificates of insurance upon request for HOA communities like 4S Ranch, commercial clients, and property managers."
  },
  {
    question: "Do you recycle or donate items?",
    answer: "Yes, we sort every load for recycling and donation. Usable items go to North County charities, metal to recycling facilities, mattresses to specialized recycling centers, and electronics to certified e-waste recyclers. Wood and organic materials from ranch properties go to composting facilities when possible. This eco-friendly approach reduces landfill fees and supports competitive pricing."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve all of the 92064 and 92074 zip codes including Old Poway Village, Green Valley, Twin Peaks, 4S Ranch, Stone Ridge, Bridlewood, Garden Road, and Poway Business Park. We also serve nearby Rancho Bernardo, Scripps Ranch, Sabre Springs, and Escondido with the same reliable service."
  },
  {
    question: "Can you remove construction debris?",
    answer: "Yes, we handle <a href='/construction-debris-removal-san-diego' className='text-blue-600 hover:underline'>construction debris</a> from kitchen and bathroom remodels, room additions, roofing projects, and barn renovations. We coordinate with contractors for same-day or next-day service to keep job sites clear. All debris goes to licensed facilities with recycling when possible."
  }
];

export default function JunkRemovalPowayPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.severinhauling.com" },
    { name: "Areas We Serve", url: "https://www.severinhauling.com/areas-we-serve" },
    { name: "Poway Junk Removal", url: "https://www.severinhauling.com/junk-removal-poway" },
  ]);

  const faqSchema = generateFAQSchema(powayFAQs);

  const serviceSchema = {
    "@type": "Service",
    "name": "Junk Removal in Poway CA",
    "description": "Professional junk removal Poway CA for ranches, family homes, business parks. Large property specialists with same-day service and eco-friendly disposal.",
    "url": "https://www.severinhauling.com/junk-removal-poway",
    "serviceType": "Junk Removal",
    "provider": {
      "@id": "https://www.severinhauling.com/junk-removal-poway#business"
    }
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://www.severinhauling.com/junk-removal-poway#business",
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
    "url": "https://www.severinhauling.com/junk-removal-poway",
    "areaServed": [
      {
        "@type": "City",
        "name": "Poway",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "PostalCode",
        "postalCode": "92064",
        "addressLocality": "Poway",
        "addressRegion": "CA"
      },
      {
        "@type": "PostalCode",
        "postalCode": "92074",
        "addressLocality": "Poway",
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
    cityName: "Poway",
    pageUrl: "https://www.severinhauling.com/junk-removal-poway"
  });

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema, howToSchema]
  };

  const nearbyLocations = [
    { name: "Escondido", slug: "junk-removal-escondido" },
    { name: "San Marcos", slug: "junk-removal-san-marcos" },
    { name: "Rancho Santa Fe", slug: "junk-removal-rancho-santa-fe" },
    { name: "Carmel Valley", slug: "junk-removal-carmel-valley" },
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
                #1 Poway Junk Removal Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Junk Removal Poway CA
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                City in the Country • Large Property Experts • Same-Day Service
              </p>

              <p className="text-lg mb-8">
                ✓ Ranch Property Specialists ✓ Same-Day Hauling ✓ Licensed & Insured
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
                      Junk Removal Poway CA – The City in the Country
                    </h2>

                    {/* Poway Junk Removal Image - Mobile Responsive */}
                    <div className="mb-6 md:float-right md:ml-6 w-full md:w-80">
                      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                        <Image
                          src="/optimized/oldgardeningappliances.jpg"
                          alt="junk removal Poway CA - garden equipment and ranch property cleanout in 92064, 92074"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 320px"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <p className="text-lg mb-4 text-gray-700">
                      Need junk removal in Poway? <a href="/" className="text-blue-600 hover:underline font-medium">Severin Hauling</a> serves North County's "City in the Country" across the 92064 and 92074 zip codes. Booking junk removal is easy and stress free: call, get a free no-obligation estimate, and we show up ready for whatever your property needs.
                    </p>
                    <p className="text-lg mb-4 text-gray-700">
                      We specialize in what Poway properties actually require. Multi-acre ranch estates along Espola Road and Garden Road. Long driveways and gated equestrian facilities in Stone Ridge and Bridlewood. <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">Estate cleanouts</a> in Twin Peaks and family homes in 4S Ranch. We handle it all with the right trucks and crew size.
                    </p>
                    <p className="text-lg mb-6 text-gray-700">
                      Whether it's a barn cleanout near Lake Poway or a full property clearance near Iron Mountain, we haul everything away and leave your space clutter free. We also serve nearby <a href="/junk-removal-escondido" className="text-blue-600 hover:underline">Escondido</a>, <a href="/junk-removal-san-marcos" className="text-blue-600 hover:underline">San Marcos</a>, <a href="/junk-removal-rancho-santa-fe" className="text-blue-600 hover:underline">Rancho Santa Fe</a>, and <a href="/junk-removal-carmel-valley" className="text-blue-600 hover:underline">Carmel Valley</a>.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Poway Neighborhoods We Serve (92064, 92074)</h3>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• Old Poway Village</li>
                        <li>• Green Valley</li>
                        <li>• Twin Peaks</li>
                        <li>• 4S Ranch</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Stone Ridge</li>
                        <li>• Bridlewood</li>
                        <li>• Garden Road Area</li>
                        <li>• Poway Business Park</li>
                      </ul>
                    </div>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Major Landmarks & Traffic Routes</h3>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• Lake Poway Recreation Area</li>
                        <li>• Old Poway Park & Museum</li>
                        <li>• Blue Sky Ecological Reserve</li>
                        <li>• Poway Center for the Performing Arts</li>
                        <li>• Twin Peaks Plaza</li>
                        <li>• Pomerado Road</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Poway Business Park</li>
                        <li>• Stone Brewing World Bistro</li>
                        <li>• Iron Mountain Trailhead</li>
                        <li>• Poway High School</li>
                        <li>• 4S Commons</li>
                        <li>• Rancho Bernardo Road</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">North County Traffic & Scheduling Considerations</h3>
                    <p className="text-gray-700 mb-4">
                      Weekday commute hours (7–9 AM, 4–6 PM) bring heavy I-15 traffic on Pomerado and Rancho Bernardo Roads. We recommend mid-day windows (10 AM–3 PM) for fastest arrival. Weekend Lake Poway recreational traffic also runs heavy Saturday–Sunday from 9 AM–5 PM along Community Road.
                    </p>
                    <p className="text-gray-700 mb-6">
                      Ranch properties with long driveways get advance coordination for gate codes and access. Equestrian facilities need timing around horse feeding hours (6–8 AM and 4–6 PM)—we plan around those automatically. <a href="/blog/same-day-junk-removal-guide" className="text-blue-600 hover:underline">Learn more about planning your pickup.</a>
                    </p>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Inland North County Climate & Service Planning</h3>
                    <p className="text-gray-700 mb-4">
                      Inland summers (June–September) regularly hit 85–90°F. We schedule early morning (6–9 AM) or late afternoon (4–7 PM) slots during heat waves. Heat also accelerates outdoor storage deterioration—sun-damaged patio furniture and dry wooden structures pile up faster than at the coast.
                    </p>
                    <p className="text-gray-700 mb-6">
                      Winter rains (December–February) can make unpaved rural driveways temporarily inaccessible. We also prioritize brush removal to help Poway properties reclaim their space and maintain defensible space near Blue Sky Reserve and Iron Mountain trailheads.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Haul From Poway Properties</h3>
                    <p className="text-gray-700 mb-4">
                      We handle everything from single items to complete multi-acre <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanouts</a>:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Household Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">Furniture</a>, <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">mattresses</a>, sofas</li>
                          <li>• <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Appliances</a> and electronics</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs</a>, <a href="/piano-removal-san-diego" className="text-blue-600 hover:underline">pianos</a></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Ranch & Specialty</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Barn equipment, tack, riding supplies</li>
                          <li>• Fencing materials and outdoor items</li>
                          <li>• <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">Estate</a> & <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">construction debris</a></li>
                        </ul>
                      </div>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Hauling for Poway</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Large Property Specialists:</strong> We handle multi-acre ranch estates along Espola Road and Pomerado Road, long driveways, gated properties, and equestrian facilities throughout 4S Ranch, Stone Ridge, and all of the 92064 and 92074 zip codes.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Same-Day Service:</strong> Call before noon for <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">same-day availability</a> throughout North County. We coordinate around horse feeding schedules and ranch property access with advance coordination for remote properties.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> Volume-based rates with no hidden fees. Rural access, long driveways, and multi-acre properties don't change our pricing. See our <a href="/junk-removal-cost-san-diego" className="text-blue-600 hover:underline">complete pricing guide</a>.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Insured:</strong> Full coverage for large property access, equestrian facilities, and unique ranch property requirements. Certificates of insurance available for 4S Ranch HOAs, commercial clients, and property managers.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Poway"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Poway"
          contextParagraph="Ranch property cleanouts and family home clearances throughout the city—from 4S Ranch to Old Poway Village—all use the same transparent pricing. No hidden fees for long driveways or rural access. Call for a free, no-obligation estimate."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Poway" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Poway"
          description="Get answers to common questions about our services, pricing, and same-day availability in North County."
          faqs={powayFAQs}
          ctaTitle="Still Have Questions?"
          ctaDescription="Our experienced team is ready to answer your questions, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related North County Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
                <p className="text-gray-600">Multi-generational family homes and ranch property estate transitions</p>
              </a>
              <a href="/construction-debris-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
                <p className="text-gray-600">Home additions, barn renovations, and property development cleanup</p>
              </a>
              <a href="/furniture-disposal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Large family home and ranch house furniture disposal services</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </>
  );
}
