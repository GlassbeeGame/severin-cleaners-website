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
  title: 'Junk Removal El Cajon | Multi-Generational Family Property | (619) 750-0114',
  description: 'Professional junk removal El Cajon CA for multi-generational family properties, Fletcher Hills estates, East County homes. Same-day service, licensed & insured. (619) 750-0114',
  keywords: [
    'junk removal el cajon ca',
    'scrap metal el cajon',
    'metal recycling el cajon ca',
    'junk hauling east county',
    'trash removal east county',
    'junk pickup el cajon ca',
    'fletcher hills junk removal',
    'multi generational home cleanout',
    'east county scrap metal',
    'rancho san diego junk removal',
    'east county junk removal'
  ],
  openGraph: {
    title: 'Junk Removal El Cajon | Multi-Generational Family Property Specialists',
    description: 'Professional junk removal El Cajon CA for family properties, Fletcher Hills estates, East County homes. Same-day service, licensed & insured. (619) 750-0114',
    url: 'https://www.severinhauling.com/junk-removal-el-cajon',
    siteName: 'Severin Hauling',
    images: [{
      url: 'https://www.severinhauling.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'El Cajon Junk Removal - Severin Hauling'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junk Removal El Cajon | Multi-Generational Family Property Specialists',
    description: 'Professional junk removal El Cajon CA for family properties, Fletcher Hills estates, East County homes. Same-day service, licensed & insured.',
    images: ['https://www.severinhauling.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.severinhauling.com/junk-removal-el-cajon',
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
    'geo.placename': 'El Cajon',
    'geo.position': '32.7948;-116.9625',
    'ICBM': '32.7948, -116.9625',
  },
};

const elCajonFAQs = [
  {
    question: "How much does junk removal El Cajon CA cost?",
    answer: "Our pricing is transparent and volume-based: quarter load $100-$150, half load $200-$295, three-quarter load $350-$425, and full load $450-$495. All prices include labor, hauling, and disposal with no extra charges for hillside access. Call (619) 750-0114 for a free quote specific to your project. Learn more about <a href='/blog/how-much-does-junk-removal-cost-san-diego' className='text-blue-600 hover:underline'>junk removal pricing in San Diego</a>."
  },
  {
    question: "Do you provide same-day service in East County?",
    answer: "Yes, we offer <a href='/same-day-junk-removal-san-diego' className='text-blue-600 hover:underline'>same-day service</a> throughout East County including Fletcher Hills, Rancho San Diego, Granite Hills, and Crest. Call before 2 PM for same-day availability. We prioritize family emergencies and estate situations. Learn more about <a href='/blog/same-day-junk-removal-guide' className='text-blue-600 hover:underline'>securing same-day pickup</a>."
  },
  {
    question: "What neighborhoods in El Cajon do you cover?",
    answer: "Our East County junk removal covers all El Cajon neighborhoods including Fletcher Hills, Rancho San Diego, Granite Hills, Bostonia, Crest, Mount Helix, Downtown El Cajon, Jamacha-Lomita, Casa de Oro, and the Fletcher Parkway corridor. We serve from Parkway Plaza to the mountain communities, including hillside properties, master-planned communities, and established family neighborhoods throughout East County."
  },
  {
    question: "Can you handle large family properties or multi-generational homes?",
    answer: "Absolutely. We specialize in large family properties and multi-generational households common throughout East County. Our <a href='/estate-cleanout-san-diego' className='text-blue-600 hover:underline'>estate cleanout services</a> provide compassionate handling of inherited homes with decades of accumulation. We work at your pace and coordinate with family members throughout the process."
  },
  {
    question: "Do you serve Fletcher Hills and Rancho San Diego?",
    answer: "Yes, we provide comprehensive trash removal El Cajon service throughout Fletcher Hills and Rancho San Diego. We specialize in these premier East County neighborhoods, understanding their unique characteristics - from Fletcher Hills' established hillside properties and luxury estates to Rancho San Diego's master-planned communities and HOA requirements. Our team delivers professional service that respects community standards and family values in both areas."
  },
  {
    question: "Do you offer scrap metal removal and recycling in El Cajon?",
    answer: "Yes, our El Cajon scrap metal removal service accepts all types of metal including appliances, copper wire, aluminum, steel, brass, iron, and more. We provide fair pricing for scrap metal recycling El Cajon and haul to certified recycling facilities in East County. Whether you have old appliances, construction metal, or yard scrap, we offer same-day metal pickup El Cajon CA for residential and commercial properties throughout East County."
  },
  {
    question: "What types of scrap metal do you accept in East County?",
    answer: "Our metal recycling El Cajon service accepts: refrigerators, washers, dryers, stoves, water heaters, copper pipes and wire, aluminum siding and gutters, steel beams and rebar, brass fixtures, iron railings and gates, metal furniture, filing cabinets, and more. We handle both ferrous and non-ferrous metals. For large quantities of scrap metal removal East County, we offer competitive pricing and can often provide credits toward your total cost."
  },
  {
    question: "Why choose a local East County junk removal service?",
    answer: "Our La Mesa headquarters is just 10-15 minutes from Fletcher Hills, Rancho San Diego, and Downtown properties. We understand East County's hillside terrain, multi-generational family homes, and automotive DIY culture. Local ownership means faster response times and genuine understanding of your property needs."
  }
];

export default function JunkRemovalElCajonPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.severinhauling.com" },
    { name: "Areas We Serve", url: "https://www.severinhauling.com/areas-we-serve" },
    { name: "El Cajon Junk Removal", url: "https://www.severinhauling.com/junk-removal-el-cajon" },
  ]);

  const faqSchema = generateFAQSchema(elCajonFAQs);

  const serviceSchema = {
    "@type": "Service",
    "name": "Junk Removal in El Cajon",
    "description": "Professional service for Fletcher Hills, Rancho San Diego, Granite Hills. East County family property specialists with same-day availability. Call (619) 750-0114.",
    "url": "https://www.severinhauling.com/junk-removal-el-cajon",
    "serviceType": "Junk Removal",
    "provider": {
      "@id": "https://www.severinhauling.com/junk-removal-el-cajon#business"
    }
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://www.severinhauling.com/junk-removal-el-cajon#business",
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
    "url": "https://www.severinhauling.com/junk-removal-el-cajon",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Venmo", "Zelle", "Cash App"],
    "currenciesAccepted": "USD",
    "knowsAbout": [
      "East County Family Property Management",
      "Multi-Generational Home Cleanouts",
      "Fletcher Hills Hillside Property Access",
      "Scrap Metal Recycling and Valuation",
      "Estate Transition and Inheritance Cleanouts",
      "Large Property Garage and Storage Cleanouts",
      "Automotive and DIY Equipment Removal",
      "La Mesa Border Community Service"
    ],
    "areaServed": {
      "@type": "City",
      "name": "El Cajon",
      "containedInPlace": {
        "@type": "State",
        "name": "California"
      }
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "aggregateRating": generateAggregateRatingSchema(),
    "sameAs": [
      "https://www.facebook.com/severinhauling",
      "https://www.instagram.com/severinhauling/",
      "https://www.yelp.com/biz/severin-hauling-san-diego",
      "https://www.thumbtack.com/ca/la-mesa/junk-removal/severin-hauling/service/541381661422116888"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "El Cajon Junk Removal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Multi-Generational Family Property Cleanouts",
            "description": "Compassionate estate and family transition cleanout services for East County families"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fletcher Hills Hillside Estate Service",
            "description": "Luxury hillside property junk removal with challenging terrain access expertise"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Scrap Metal Recycling El Cajon",
            "description": "Comprehensive metal recycling El Cajon CA with fair pricing for copper, aluminum, steel, and appliances"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Large Garage and Automotive Workshop Cleanouts",
            "description": "Extensive garage, shed, and automotive storage clearance for East County DIY properties"
          }
        }
      ]
    }
  };

  const howToSchema = generateHowToSchema({
    cityName: "El Cajon",
    pageUrl: "https://www.severinhauling.com/junk-removal-el-cajon"
  });

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema, howToSchema]
  };

  const nearbyLocations = [
    { name: "La Mesa", slug: "junk-removal-la-mesa" },
    { name: "Santee", slug: "junk-removal-santee" },
    { name: "Lakeside", slug: "junk-removal-lakeside" },
    { name: "Spring Valley", slug: "junk-removal-spring-valley" },
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
                #1 El Cajon Junk Removal Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                El Cajon Junk Removal
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Scrap Metal Recycling • Multi-Gen Family Homes • Fletcher Hills Estates
              </p>

              <p className="text-lg mb-8">
                ✓ East County Specialists ✓ Metal Recycling Experts ✓ Licensed & Insured
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
                      Junk Removal El Cajon CA – East County Family Property Specialists
                    </h2>

                    {/* El Cajon Junk Removal Image - Integrated */}
                    <div className="float-right ml-6 mb-6 w-80 hidden md:block">
                      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                        <Image
                          src="/optimized/junkchairs.jpg"
                          alt="junk removal El Cajon CA - furniture disposal service in 92019, 92020, 92021"
                          fill
                          className="object-cover"
                          sizes="320px"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <p className="text-lg mb-6 text-gray-700">
                      Looking for junk removal El Cajon CA residents trust in 2026? <a href="/" className="text-blue-600 hover:underline font-medium">Severin Hauling</a> specializes in East County family properties across the 92019, 92020, and 92021 zip codes—from Fletcher Hills hillside estates off Fletcher Parkway to Rancho San Diego master-planned communities near Jamacha Road. We navigate steep driveways along Fuerte Drive and Avocado Boulevard, handle multi-generational home cleanouts near Magnolia Avenue and Main Street, and provide expert <a href="/scrap-metal-removal" className="text-blue-600 hover:underline">scrap metal recycling</a> services throughout the area. Whether you're clearing an inherited estate, organizing decades of garage accumulation, or need <a href="/blog/same-day-junk-removal-guide" className="text-blue-600 hover:underline">same-day emergency pickup</a>, our locally-based team brings compassionate, professional service to every East County property. We also serve nearby <a href="/junk-removal-la-mesa" className="text-blue-600 hover:underline">La Mesa</a>, <a href="/junk-removal-santee" className="text-blue-600 hover:underline">Santee</a>, <a href="/junk-removal-lakeside" className="text-blue-600 hover:underline">Lakeside</a>, and <a href="/junk-removal-spring-valley" className="text-blue-600 hover:underline">Spring Valley</a>.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">El Cajon Neighborhoods We Serve (92019, 92020, 92021)</h3>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• Fletcher Hills</li>
                        <li>• Rancho San Diego</li>
                        <li>• Granite Hills</li>
                        <li>• Bostonia</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Mount Helix</li>
                        <li>• Crest</li>
                        <li>• Casa de Oro</li>
                        <li>• Downtown El Cajon</li>
                      </ul>
                    </div>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Major Landmarks & Cross Streets</h3>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• Parkway Plaza (Fletcher Parkway)</li>
                        <li>• Grossmont College</li>
                        <li>• Sycuan Casino</li>
                        <li>• Mount Helix Park</li>
                        <li>• Main Street Downtown</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Water Conservation Garden</li>
                        <li>• Rancho San Diego Parkway</li>
                        <li>• Cottonwood Golf Club</li>
                        <li>• Magnolia Avenue</li>
                        <li>• Jamacha Road</li>
                      </ul>
                    </div>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">East County Weather & Scheduling</h3>
                    <p className="text-gray-700 mb-6">
                      Inland East County summers (June-September) regularly exceed 95°F, requiring early morning scheduling (6-10 AM) for crew safety during physical hauling work. Winter rains (December-February) occasionally make unpaved hillside driveways temporarily inaccessible in Fletcher Hills and Mount Helix. We monitor weather conditions year-round and adjust scheduling to ensure safe, efficient service. Learn more about <a href="/blog/same-day-junk-removal-guide" className="text-blue-600 hover:underline">planning your junk removal pickup</a>.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Haul From El Cajon Properties</h3>
                    <p className="text-gray-700 mb-4">
                      We handle everything from single items to complete <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanouts</a>:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Household Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">Furniture</a>, <a href="/couch-removal-san-diego" className="text-blue-600 hover:underline">couches</a>, <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">mattresses</a></li>
                          <li>• <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Appliances</a> and electronics</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs</a> and outdoor equipment</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Specialty Services</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/scrap-metal-removal" className="text-blue-600 hover:underline">Scrap metal recycling</a></li>
                          <li>• <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">Estate cleanouts</a></li>
                          <li>• Garage and workshop clearance</li>
                        </ul>
                      </div>
                    </div>

                    {/* Scrap Metal Section */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Scrap Metal Recycling El Cajon</h3>
                    <p className="text-gray-700 mb-4">
                      East County properties accumulate scrap metal from years of automotive work and home improvements. Our <a href="/scrap-metal-removal" className="text-blue-600 hover:underline">scrap metal El Cajon</a> service provides fair pricing for valuable metals and professional disposal. We accept <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">appliances</a> (refrigerators, washers, dryers, water heaters), copper wire and pipes, aluminum siding and gutters, steel beams and rebar, brass fixtures, and iron materials. Large metal quantities often qualify for credits toward your total cost. We haul to certified recycling facilities and handle proper Freon disposal for cooling appliances.
                    </p>

                    {/* Multi-Generational Family Property Section */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Multi-Generational Family Property Specialists</h3>
                    <p className="text-gray-700 mb-6">
                      East County's family-centered culture means many properties house multiple generations or serve as inherited estates. We handle decades of accumulation with compassion, coordinate with estate executors during transitions, and work at your family's pace. Our crews understand the emotional weight of clearing inherited homes and provide patient sorting with family members present. This sensitive approach to <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanouts</a> sets us apart in East County.
                    </p>

                    {/* Fletcher Hills & Hillside Estate Section */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Fletcher Hills & Hillside Estate Expertise</h3>
                    <p className="text-gray-700 mb-6">
                      Fletcher Hills luxury estates and Mount Helix properties require specialized hillside access expertise. We navigate steep driveways off Fuerte Drive, winding access roads along Avocado Boulevard, and narrow mountain streets near Vista Grande Drive with terrain-capable trucks. Full insurance coverage protects challenging property access, and our crews provide discreet, professional service matching the quality of these premium East County neighborhoods.
                    </p>

                    {/* Automotive Workshop Section */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Garage & Automotive Workshop Cleanouts</h3>
                    <p className="text-gray-700 mb-6">
                      East County's automotive DIY culture creates extensive garage workshops with decades of tools, equipment, and project materials. We handle automotive tool collections, car parts, workshop machinery, and hazardous materials with proper disposal. Fair metal recycling pricing provides credits for valuable copper, aluminum, and steel scrap commonly found in workshops. See our <a href="/junk-removal-cost-san-diego" className="text-blue-600 hover:underline">pricing guide</a> for large-scale cleanout details.
                    </p>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Hauling for El Cajon</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>East County Specialists:</strong> We handle hillside access off Fletcher Parkway, multi-generational properties near Main Street, and family estate transitions throughout Fletcher Hills, Rancho San Diego, and Granite Hills.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Scrap Metal Experts:</strong> Fair pricing for valuable metals with credits toward your total cost. Certified recycling facilities ensure proper handling.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Large Property Capacity:</strong> Complete estate clearances and garage cleanouts with decades of accumulation. Same-day service available for emergencies.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> Volume-based rates with no hidden fees. Same price for hillside and valley properties. See our <a href="/junk-removal-cost-san-diego" className="text-blue-600 hover:underline">complete pricing guide</a>.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="El Cajon"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="El Cajon"
          contextParagraph="Estate cleanouts and family property projects throughout El Cajon—from Fletcher Hills to Rancho San Diego—all use the same transparent pricing. No hidden fees for hillside access, same-day service available."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="El Cajon" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - El Cajon Junk Removal"
          description="Get answers to common questions about our East County services, pricing, and same-day availability."
          faqs={elCajonFAQs}
          ctaTitle="Still Have Questions About Our Services?"
          ctaDescription="Our experienced team is ready to answer your questions, provide detailed quotes, or schedule your same-day pickup throughout East County."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related East County Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-disposal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Large family home furniture removal for Fletcher Hills and East County properties</p>
              </a>
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
                <p className="text-gray-600">Compassionate estate services for multi-generational El Cajon families</p>
              </a>
              <a href="/appliance-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance & Scrap Metal Removal</h4>
                <p className="text-gray-600">Professional metal recycling and appliance disposal for East County</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
