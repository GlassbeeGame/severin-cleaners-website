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
  title: 'Junk Removal Chula Vista | Bilingual • HOA-Compliant | (619) 750-0114',
  description: 'Bilingual junk removal Chula Vista for Eastlake, Otay Ranch & South Bay. HOA-compliant, multi-generational home specialists. Same-day service, licensed & insured. Call (619) 750-0114',
  keywords: [
    'junk removal chula vista',
    'chula vista junk removal',
    'junk hauling chula vista',
    'same day junk removal chula vista',
    'bilingual junk removal chula vista',
    'hoa compliant junk removal',
    'eastlake junk removal',
    'otay ranch junk removal',
    'multi generational home cleanout',
    'south bay junk removal'
  ],
  openGraph: {
    title: 'Junk Removal Chula Vista | Bilingual • HOA-Compliant | South Bay',
    description: 'Bilingual junk removal Chula Vista for Eastlake, Otay Ranch & South Bay. HOA-compliant, multi-generational home specialists. Same-day service. Call (619) 750-0114.',
    url: 'https://www.severinhauling.com/junk-removal-chula-vista',
    siteName: 'Severin Hauling',
    images: [{
      url: 'https://www.severinhauling.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Chula Vista Junk Removal - Severin Hauling'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junk Removal Chula Vista | Bilingual • HOA-Compliant | South Bay',
    description: 'Bilingual junk removal Chula Vista for Eastlake, Otay Ranch & South Bay. HOA-compliant, multi-generational home specialists. Same-day service. Call (619) 750-0114.',
    images: ['https://www.severinhauling.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.severinhauling.com/junk-removal-chula-vista',
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
    'geo.placename': 'Chula Vista',
    'geo.position': '32.6401;-117.0842',
    'ICBM': '32.6401, -117.0842',
  },
};

const chulaVistaFAQs = [
  {
    question: "How much does junk removal Chula Vista cost?",
    answer: "Our pricing is transparent and volume-based: small items $69, standard items $100, quarter-load $249, half-load $349, three-quarter load $429, and full-load $495. All prices include labor, hauling, and disposal with no surcharges for HOA communities. We provide free estimates and confirm final pricing on-site before starting work."
  },
  {
    question: "Do you offer bilingual junk removal service in Chula Vista?",
    answer: "Yes, our service manager is fully bilingual in English and Spanish for all quotes, pricing, and scheduling. We provide comfortable communication for Chula Vista's diverse families where over 60% speak Spanish at home. We understand multi-generational family dynamics and coordinate respectfully across language preferences."
  },
  {
    question: "Can you provide same-day junk removal in Eastlake or Otay Ranch?",
    answer: "Yes, we offer same-day service throughout Eastlake, Otay Ranch, and all South Bay neighborhoods when you call before noon. Our team can often arrive within 2-4 hours. We coordinate around traffic patterns and HOA-approved service hours to ensure reliable arrival times."
  },
  {
    question: "Are your junk removal services HOA-compliant in Chula Vista?",
    answer: "Absolutely. We specialize in HOA compliance for Eastlake, Otay Ranch, Rolling Hills Ranch, Rancho del Rey, and Sunbow. Our uniformed crews arrive in marked trucks, schedule during approved hours (typically 8 AM-6 PM weekdays), park in designated areas, and provide insurance certificates upon request. We coordinate elevator reservations for townhomes and condos."
  },
  {
    question: "What areas of Chula Vista and South Bay do you serve?",
    answer: "We serve all Chula Vista neighborhoods: Eastlake, Otay Ranch, Rolling Hills Ranch, Rancho del Rey, Millenia, Sunbow, downtown, and bayfront. We also cover National City, Bonita, Imperial Beach, and San Ysidro. Our service area covers all 91910, 91911, and 91913 zip codes from the bay to the eastern hills."
  },
  {
    question: "Do you offer free estimates for Chula Vista junk removal?",
    answer: "Yes, we provide free estimates over the phone based on your description. For larger projects, we offer free on-site estimates. During same-day calls, we provide final pricing upon arrival before starting work. All pricing includes labor, hauling, disposal, and HOA coordination with no hidden fees."
  },
  {
    question: "Can you remove furniture and appliances in Chula Vista?",
    answer: "Yes, we handle all furniture (sofas, dining sets, mattresses, bedroom sets) and appliances (refrigerators, washers, dryers) with proper refrigerant handling. We specialize in large family home and multi-generational property cleanouts. Furniture in good condition is donated to South Bay charities. Appliances go to certified recycling facilities."
  },
  {
    question: "What payment methods do you accept in Chula Vista?",
    answer: "We accept cash, all major credit cards, debit cards, checks, Venmo, Zelle, and Cash App. Payment is collected after service completion. For commercial clients and property managers, we offer NET-30 invoicing. We provide itemized receipts for all services."
  }
];

export default function JunkRemovalChulaVistaPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.severinhauling.com" },
    { name: "Areas We Serve", url: "https://www.severinhauling.com/areas-we-serve" },
    { name: "Chula Vista Junk Removal", url: "https://www.severinhauling.com/junk-removal-chula-vista" },
  ]);

  const faqSchema = generateFAQSchema(chulaVistaFAQs);

  const serviceSchema = {
    "@type": "Service",
    "name": "Junk Removal in Chula Vista",
    "description": "Professional Chula Vista junk removal for Eastlake, Otay Ranch, Millenia. Bilingual junk hauling service, HOA compliant. Same-day pickup.",
    "url": "https://www.severinhauling.com/junk-removal-chula-vista",
    "serviceType": "Junk Removal",
    "provider": {
      "@id": "https://www.severinhauling.com/junk-removal-chula-vista#business"
    }
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://www.severinhauling.com/junk-removal-chula-vista#business",
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
    "url": "https://www.severinhauling.com/junk-removal-chula-vista",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Venmo", "Zelle", "Cash App"],
    "acceptsReservations": true,
    "currenciesAccepted": "USD",
    "knowsAbout": [
      "HOA Compliance in Master-Planned Communities",
      "Bilingual Junk Removal Service Coordination",
      "Multi-Generational Home Cleanouts",
      "South Bay Traffic Patterns",
      "Eastlake Community Regulations",
      "Otay Ranch HOA Requirements",
      "Hispanic Family Cultural Sensitivity",
      "Border Region Service Logistics"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Chula Vista Junk Removal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HOA-Compliant Junk Removal Eastlake",
            "description": "Master-planned community junk removal meeting HOA requirements for Eastlake, Eastlake Woods, and Eastlake Greens"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bilingual Junk Removal Service Chula Vista",
            "description": "Spanish and English service coordination for quotes, pricing, and scheduling throughout South Bay"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Multi-Generational Home Cleanouts",
            "description": "Specialized cleanout service for large family properties with cultural awareness and patient family coordination"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Otay Ranch Junk Removal",
            "description": "Community-specific junk hauling for Otay Ranch neighborhoods with HOA compliance coordination"
          }
        }
      ]
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Chula Vista",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "PostalCode",
        "postalCode": "91910",
        "addressLocality": "Chula Vista",
        "addressRegion": "CA"
      },
      {
        "@type": "PostalCode",
        "postalCode": "91911",
        "addressLocality": "Chula Vista",
        "addressRegion": "CA"
      },
      {
        "@type": "PostalCode",
        "postalCode": "91913",
        "addressLocality": "Chula Vista",
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
    cityName: "Chula Vista",
    pageUrl: "https://www.severinhauling.com/junk-removal-chula-vista"
  });

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema, howToSchema]
  };

  const nearbyLocations = [
    { name: "Spring Valley", slug: "junk-removal-spring-valley" },
    { name: "La Mesa", slug: "junk-removal-la-mesa" },
    { name: "El Cajon", slug: "junk-removal-el-cajon" },
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
                #1 South Bay Junk Removal Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Junk Removal Chula Vista
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Eastlake to Otay Ranch • Bilingual Service • HOA Compliant
              </p>

              <p className="text-lg mb-8">
                ✓ Same-Day Service ✓ Licensed & Insured ✓ South Bay Specialists
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
                      Professional Junk Removal Chula Vista – South Bay's Most Trusted Service
                    </h2>

                    <p className="text-lg mb-6 text-gray-700">
                      Looking for junk removal Chula Vista residents trust? We serve San Diego County's second-largest city from our La Mesa headquarters, specializing in HOA-compliant service for Eastlake and Otay Ranch, bilingual coordination (60% of residents speak Spanish at home), and multi-generational home cleanouts. Our team navigates master-planned community requirements, border region logistics, and South Bay traffic patterns. From bayfront properties to eastern hillside estates, we provide same-day service with transparent pricing and cultural awareness. Call (619) 750-0114 for professional junk hauling throughout South Bay.
                    </p>

                    {/* Chula Vista Junk Removal Image */}
                    <div className="my-8 rounded-lg overflow-hidden shadow-lg">
                      <img
                        src="/optimized/outdoorfurniture.jpg"
                        alt="Junk removal Chula Vista - professional outdoor furniture and patio disposal service"
                        width={1920}
                        height={1080}
                        className="w-full h-auto"
                        loading="lazy"
                      />
                    </div>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Chula Vista Neighborhoods We Serve</h3>
                    <ul className="list-disc pl-6 mb-6 text-gray-700 columns-2">
                      <li>Eastlake & Eastlake Woods</li>
                      <li>Otay Ranch</li>
                      <li>Rolling Hills Ranch</li>
                      <li>Rancho del Rey</li>
                      <li>Millenia</li>
                      <li>Sunbow</li>
                      <li>Downtown/Third Avenue</li>
                      <li>Olympic Training Center area</li>
                    </ul>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Major Landmarks</h3>
                    <ul className="list-disc pl-6 mb-6 text-gray-700 columns-2">
                      <li>Chula Vista Marina</li>
                      <li>Olympic Training Center</li>
                      <li>Eastlake Village Center</li>
                      <li>Third Avenue Village</li>
                      <li>Otay Ranch Town Center</li>
                      <li>Southwestern College</li>
                    </ul>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Traffic & Service Timing</h3>
                    <p className="text-gray-700 mb-6">
                      Commute hours (7-9 AM, 4-6 PM) bring heavy Olympic Parkway and I-805 congestion—we recommend mid-morning service windows. Chula Vista's location 7 miles from the Tijuana border creates weekend traffic patterns on Otay Mesa Road and Heritage Road, especially Saturday-Sunday when border crossing wait times increase. We build buffer time for eastern neighborhoods and Millenia properties during peak periods. HOA communities often restrict service hours (typically 8 AM-6 PM weekdays)—we confirm rules before scheduling.
                    </p>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Weather Considerations</h3>
                    <p className="text-gray-700 mb-6">
                      Summer temperatures exceed 85°F inland—we schedule early morning starts during heat waves. Winter rain (December-February) requires protective floor coverings for newer homes.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Services We Provide</h3>
                    <p className="text-gray-700 mb-4">
                      Our junk removal Chula Vista team handles <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">furniture removal</a> (sofas, sectionals, dining sets, mattresses, bedroom sets), <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">appliances</a> (refrigerators, washers, dryers), patio furniture, <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">hot tubs</a>, yard equipment, <a href="/cleanout-services-san-diego" className="text-blue-600 hover:underline">garage cleanouts</a>, <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanouts</a>, and <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">commercial property</a> clearing. We specialize in large family home cleanouts and multi-generational properties common throughout South Bay. <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">Same-day junk removal Chula Vista</a> service available when you call before noon.
                    </p>

                    {/* Multi-Generational Home Cleanouts */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Multi-Generational Home Specialists</h3>
                    <p className="text-gray-700 mb-6">
                      Over 25% of Chula Vista homes house three or more generations—the highest concentration in San Diego County. Our team specializes in these large family properties with patient sorting, bilingual coordination (English/Spanish), and respectful handling of cultural items and family heirlooms. We never rush families through decisions, providing separate staging areas for keep/donate/dispose items and flexible scheduling around multiple family members' availability.
                    </p>

                    {/* HOA-Compliant Service Details */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">HOA-Compliant Junk Removal for Master-Planned Communities</h3>
                    <p className="text-gray-700 mb-6">
                      Over 50% of Chula Vista homes are HOA-governed, including 30,000+ properties in Eastlake and 20,000+ in Otay Ranch. Our junk removal Chula Vista service specializes in compliance: uniformed crews in marked trucks, scheduling during approved service hours (typically 8 AM-6 PM weekdays), parking only in designated areas, insurance certificates upon request, and elevator coordination for townhomes. Our established reputation in Rolling Hills Ranch, Rancho del Rey, and Sunbow communities eliminates violation risk.
                    </p>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Hauling for Chula Vista Junk Removal</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>South Bay Community Expertise:</strong> We navigate Chula Vista's diverse neighborhoods, HOA requirements, and large family properties with ease. Our crews have completed thousands of jobs throughout the area and understand the specific challenges of Eastlake master-planned communities, Otay Ranch townhomes, and large multi-generational homes common throughout South Bay. We coordinate with HOAs, work efficiently in large properties, and respect community standards.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Bilingual Service Coordination:</strong> Our bilingual service manager handles all quotes, pricing, and scheduling communication in both English and Spanish, ensuring comfortable, clear communication for Chula Vista's diverse families. We understand cultural considerations for multi-generational South Bay homes and provide respectful, family-centered service coordination.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Same-Day Service Available:</strong> Call before noon for same-day junk removal Chula Vista service throughout South Bay. Our dispatch team actively monitors traffic and schedules arrival windows that work around border congestion, commuter patterns, and your schedule, ensuring reliable service even during busy periods.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> No hidden fees, no surprises. Upfront quotes based on volume with all labor, hauling, and disposal included. Large family home service and multi-generational property cleanouts don't change our rates—you pay for volume removed, not property size. Most Chula Vista jobs range from half-truck to full-truck loads with clear pricing tiers communicated before work begins.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Chula Vista"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Chula Vista"
          contextParagraph="Large family home cleanouts and estate projects throughout Chula Vista—from Eastlake to Otay Ranch—all use the same transparent pricing. No hidden fees, bilingual service available."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Chula Vista" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Junk Removal Chula Vista"
          description="Get answers to common questions about our junk removal Chula Vista services, pricing, and same-day availability."
          faqs={chulaVistaFAQs}
          ctaTitle="Still Have Questions About Chula Vista Junk Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our junk removal Chula Vista services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related South Bay Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-disposal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Large family home furniture removal for Eastlake estates and South Bay properties</p>
              </a>
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
                <p className="text-gray-600">Compassionate estate services for multi-generational Chula Vista families</p>
              </a>
              <a href="/appliance-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal San Diego</h4>
                <p className="text-gray-600">Professional appliance disposal for South Bay homes and businesses</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
