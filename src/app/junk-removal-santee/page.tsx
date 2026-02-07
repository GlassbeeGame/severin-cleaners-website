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
  title: 'Junk Removal Santee | Santee Lakes RV • Trolley Square | (619) 750-0114',
  description: 'Junk removal Santee specialists: Santee Lakes RV equipment, Trolley Square apartments, Carlton Hills garages. Recreation gear, family homes, commercial. Same-day service.',
  keywords: [
    'junk removal santee',
    'santee junk removal',
    'junk hauling santee',
    'santee lakes rv equipment removal',
    'trolley square apartment cleanout',
    'carlton hills garage cleanout',
    'sky ranch junk removal',
    'recreation equipment disposal santee',
    'family garage cleanout santee',
    'mission gorge commercial junk removal',
    'santee family home cleanout',
    'east county junk hauling'
  ],
  openGraph: {
    title: 'Junk Removal Santee | Santee Lakes RV • Trolley Square • Carlton Hills',
    description: 'Junk removal Santee: Santee Lakes RV equipment, Trolley Square apartments, Carlton Hills family garages. Recreation gear specialists. Call (619) 750-0114.',
    url: 'https://www.severinhauling.com/junk-removal-santee',
    siteName: 'Severin Hauling',
    images: [{
      url: 'https://www.severinhauling.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Santee Junk Removal - Severin Hauling'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junk Removal Santee | Santee Lakes RV • Trolley Square • Carlton Hills',
    description: 'Junk removal Santee: Santee Lakes RV equipment, Trolley Square apartments, Carlton Hills family garages. Recreation gear specialists. Call (619) 750-0114.',
    images: ['https://www.severinhauling.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.severinhauling.com/junk-removal-santee',
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
    'geo.placename': 'Santee',
    'geo.position': '32.8384;-116.9739',
    'ICBM': '32.8384, -116.9739',
  },
};

const santeeFAQs = [
  {
    question: "How much does junk removal Santee cost?",
    answer: "Pricing ranges from $69 for small items to $495 for full-truck loads. Quarter-load ($249), half-load ($349), and three-quarter load ($429) options available. All prices include labor, hauling, disposal, and cleanup. No hidden fees or surcharges for Carlton Hills hillside access. Free phone estimates with final pricing confirmed on-site before work begins."
  },
  {
    question: "Do you handle garage cleanouts and bulky item pickup in Santee?",
    answer: "Yes, we specialize in garage cleanouts for Carlton Hills, Sky Ranch, and West Hills family homes. We remove furniture, appliances, exercise equipment, RV gear, camping equipment, and household storage. Our team protects walls and flooring, works efficiently (most jobs complete in 1-2 hours), and sweeps clean when finished. Same-day availability for urgent cleanouts."
  },
  {
    question: "Can you provide same-day junk removal in Santee?",
    answer: "Yes, call before noon for same-day service throughout the 92071 zip code. We often arrive within 2-4 hours for urgent rental turnovers, real estate closings, or family emergencies. Our dispatch team coordinates around traffic patterns for reliable arrival times. Property managers near Trolley Square receive priority scheduling. Evening and weekend appointments available."
  },
  {
    question: "Do you work with Santee property managers and apartment complexes?",
    answer: "Yes, we provide tenant turnovers, common area cleanouts, and bulk item removal for Trolley Square and hillside multi-family properties. We offer certificates of insurance, coordinate elevator access, and schedule after-hours service to avoid disrupting tenants. Regular service contracts available with priority scheduling and volume discounts for consistent turnover needs."
  },
  {
    question: "Are you licensed and insured for junk removal in Santee?",
    answer: "Yes, we're fully licensed and insured with comprehensive liability coverage for all San Diego County operations. Our insurance protects your property during garage cleanouts, apartment turnovers, and estate projects. We comply with California waste hauling regulations and use only licensed disposal facilities. Certificates of insurance provided upon request for property managers and HOA communities."
  },
  {
    question: "Do you recycle or donate items in Santee?",
    answer: "Yes, we maximize recycling and donation for every load. Usable items go to Goodwill, Salvation Army, and East County family resource centers. Metal components are recycled, mattresses go to specialized recycling centers, and electronics to certified e-waste facilities. Our eco-friendly approach reduces landfill fees and supports competitive pricing for East County families."
  },
  {
    question: "What areas of Santee do you serve for junk removal?",
    answer: "We serve the entire 92071 zip code including Carlton Hills, Sky Ranch, Santee Trolley Square, West Hills, Carlton Oaks, Edgemoor, Mission Gorge, and Santee Lakes. We also cover nearby El Cajon, La Mesa, Lakeside, and Spring Valley. All areas receive the same transparent pricing and reliable service."
  },
  {
    question: "Can you remove construction debris in Santee?",
    answer: "Yes, we remove renovation debris, drywall, lumber, roofing materials, flooring, and fixtures from Carlton Hills remodels and Sky Ranch kitchen updates. We coordinate with contractors for same-day or next-day service to keep job sites clear. All debris goes to licensed facilities with materials sorted for recycling when possible."
  }
];

export default function JunkRemovalSanteePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.severinhauling.com" },
    { name: "Areas We Serve", url: "https://www.severinhauling.com/areas-we-serve" },
    { name: "Santee Junk Removal", url: "https://www.severinhauling.com/junk-removal-santee" },
  ]);

  const faqSchema = generateFAQSchema(santeeFAQs);

  const serviceSchema = {
    "@type": "Service",
    "name": "Junk Removal in Santee",
    "description": "Professional junk removal Santee for family homes, garage cleanouts, Carlton Hills, Sky Ranch. East County specialists with same-day service and eco-friendly disposal.",
    "url": "https://www.severinhauling.com/junk-removal-santee",
    "serviceType": "Junk Removal",
    "provider": {
      "@id": "https://www.severinhauling.com/junk-removal-santee#business"
    }
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://www.severinhauling.com/junk-removal-santee#business",
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
    "url": "https://www.severinhauling.com/junk-removal-santee",
    "areaServed": [
      {
        "@type": "City",
        "name": "Santee",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "PostalCode",
        "postalCode": "92071",
        "addressLocality": "Santee",
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
    ],
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Venmo", "Zelle", "Cash App"],
    "acceptsReservations": true,
    "currenciesAccepted": "USD",
    "knowsAbout": [
      "Santee Lakes Recreation Equipment and RV Disposal",
      "Trolley Square Mixed-Use Property Management",
      "Carlton Hills Hillside Estate Access",
      "Mission Gorge Commercial Corridor Services",
      "Sky Ranch Family Neighborhood Expertise",
      "Santee Lakes Camping and Outdoor Recreation Gear",
      "Transit-Oriented Development Cleanout Logistics",
      "East County Suburban Family Home Service"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Santee Junk Removal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Santee Lakes Recreation & RV Equipment Removal",
            "description": "Specialized removal for camping gear, RV equipment, boats, kayaks, outdoor recreation equipment, and patio furniture serving Santee Lakes Recreation Preserve families and campers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trolley Square Mixed-Use Property Cleanouts",
            "description": "Transit-oriented apartment turnovers, mixed-use property debris removal, elevator access coordination, and limited-parking logistics for Santee Trolley Square developments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Carlton Hills & Sky Ranch Family Garage Cleanouts",
            "description": "Two-car and three-car garage clearing, hillside property access, family storage overflow, and recreational equipment disposal for Santee's suburban neighborhoods"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mission Gorge Commercial Corridor Business Services",
            "description": "Retail store closures, office furniture disposal, restaurant equipment removal, and business park warehouse cleanouts along Mission Gorge Road commercial district"
          }
        }
      ]
    }
  };

  const howToSchema = generateHowToSchema({
    cityName: "Santee",
    pageUrl: "https://www.severinhauling.com/junk-removal-santee"
  });

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema, howToSchema]
  };

  const nearbyLocations = [
    { name: "El Cajon", slug: "junk-removal-el-cajon" },
    { name: "La Mesa", slug: "junk-removal-la-mesa" },
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
                #1 Santee Junk Removal Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Junk Removal Santee
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Santee Lakes RV Specialists • Trolley Square Experts • Family Garages
              </p>

              <p className="text-lg mb-8">
                ✓ Family Home Specialists ✓ Same-Day Hauling ✓ Licensed & Insured
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
                      Professional Junk Removal Santee – East County Specialists
                    </h2>

                    <p className="text-lg mb-6 text-gray-700">
                      Looking for junk removal Santee CA residents trust? We serve East County's family-oriented community from our La Mesa headquarters, specializing in Santee Lakes RV equipment removal, Trolley Square apartment turnovers, Carlton Hills family garages, and Mission Gorge commercial cleanouts. Our team navigates hillside access, two-car and three-car garage accumulation, and mixed-use property coordination throughout the 92071 zip code. We provide same-day service for family homes, recreation equipment disposal, and <a href="/cleanout-services-san-diego" className="text-blue-600 hover:underline">apartment complex cleanouts</a>. Call (619) 750-0114 for transparent pricing and eco-friendly disposal that East County families depend on.
                    </p>

                    {/* Santee Junk Removal Image */}
                    <div className="my-8 max-w-3xl mx-auto">
                      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src="/optimized/morewood.jpg"
                          alt="Junk removal Santee CA - wood debris, outdoor equipment, and yard waste hauling"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 768px"
                        />
                      </div>
                    </div>

                    {/* Santee Lakes Recreation & RV Equipment Specialists */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Santee Lakes Recreation & RV Equipment Specialists</h3>
                    <p className="text-gray-700 mb-4">
                      Santee Lakes Recreation Preserve creates unique disposal needs for East County families. We specialize in RV equipment (awnings, generators, tanks, hitches, RV furniture), camping gear (tents, coolers, outdoor equipment), boats and kayaks, and patio furniture from Santee's outdoor lifestyle. Families upgrading RVs or clearing years of accumulated camping equipment benefit from our donation coordination with youth programs and metal recycling expertise. We reclaim garage space occupied by recreation equipment that multiplies over time near Santee Lakes.
                    </p>

                    {/* Trolley Square Mixed-Use Development Specialists */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Trolley Square Mixed-Use Development Specialists</h3>
                    <p className="text-gray-700 mb-6">
                      Santee Trolley Square represents East County's only significant transit-oriented development with 300+ apartments generating consistent turnover. We provide rapid apartment cleanouts between tenants, elevator access coordination with building management, and limited parking logistics for mixed-use properties. Property managers rely on our same-day service during peak turnover seasons, professional crews that respect shared spaces, and Green Line trolley schedule coordination for residents without vehicles. This transit-oriented expertise is unique to Santee.
                    </p>

                    {/* Carlton Hills & Sky Ranch Family Garage Specialists */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Carlton Hills & Sky Ranch Family Garage Specialists</h3>
                    <p className="text-gray-700 mb-6">
                      Santee's 18,000+ family homes feature two-car and three-car garages that accumulate storage over 10-15 years. We help families reclaim space during life transitions (kids leaving for college, retirement downsizing, estate cleanouts). Our team navigates Carlton Hills steep driveways and hillside access safely while removing bikes, sports equipment, camping gear, and outgrown furniture. We donate usable equipment to youth programs and recycle metal items, helping families transition from storage overflow to organized vehicle parking.
                    </p>

                    {/* Mission Gorge Commercial Corridor Services */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Mission Gorge Commercial Corridor Services</h3>
                    <p className="text-gray-700 mb-6">
                      Mission Gorge Road's retail and business corridor creates B2B removal opportunities. We handle retail store closures, office furniture disposal, and restaurant kitchen cleanouts with after-hours scheduling that avoids disrupting active businesses. Our commercial insurance coverage, licensed disposal for regulatory compliance, and established relationships with property managers position us for recurring commercial contracts along Santee's business district.
                    </p>


                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Santee Neighborhoods We Serve</h3>
                    <p className="text-gray-700 mb-6">
                      Carlton Hills • Sky Ranch • Santee Trolley Square • West Hills • Carlton Oaks • Edgemoor • Mission Gorge • Santee Lakes
                    </p>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Santee Landmarks We Serve</h3>
                    <p className="text-gray-700 mb-4">
                      Santee Trolley Square • Santee Lakes Recreation Preserve • Carlton Oaks Golf Course • Costco Santee • Mission Trails Regional Park • Town Center Community Park
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in Santee</h3>
                    <p className="text-gray-700 mb-6">
                      We remove <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">furniture</a>, <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">appliances</a>, <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">mattresses</a>, RV equipment, camping gear, patio furniture, exercise equipment, and electronics. We handle <a href="/cleanout-services-san-diego" className="text-blue-600 hover:underline">garage cleanouts</a>, apartment turnovers, <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanouts</a>, <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">hot tubs</a>, and <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">construction debris</a> throughout East County.
                    </p>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Us for Santee Junk Removal</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>East County Expertise:</strong> We specialize in Santee's unique needs—RV equipment removal, Trolley Square apartment logistics, Carlton Hills hillside access, and family garage reclamation.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Same-Day Service:</strong> Call before noon for same-day removal throughout the 92071 zip code with reliable arrival windows.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> Upfront quotes with no hidden fees. All labor, hauling, and disposal included.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Insured:</strong> Comprehensive liability coverage for all property types throughout East County.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Santee"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Santee"
          contextParagraph="Garage cleanouts and family home clearances throughout Santee—from Carlton Hills to Santee Trolley Square—all use the same transparent pricing. No hidden fees, same-day service available."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Santee" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Junk Removal Santee"
          description="Get answers to common questions about our junk removal Santee services, pricing, and same-day availability."
          faqs={santeeFAQs}
          ctaTitle="Still Have Questions About Santee Junk Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our junk removal Santee services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related East County Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-disposal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Family home furniture disposal and apartment complex cleanouts</p>
              </a>
              <a href="/construction-debris-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
                <p className="text-gray-600">Home remodeling cleanup and renovation debris removal</p>
              </a>
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
                <p className="text-gray-600">Family estate transitions and downsizing support</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </>
  );
}
