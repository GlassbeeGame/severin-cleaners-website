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
  title: "Junk Removal Vista | Brewery District • Business Park | (619) 750-0114",
  description: "Junk removal Vista CA: Craft brewery district specialists, Business Park warehouse experts, Shadowridge golf community. Same-day junk hauling vista ca service. Licensed & insured (619) 750-0114",
  keywords: [
    "junk removal vista",
    "junk removal vista ca",
    "junk hauling vista ca",
    "vista junk removal",
    "same day junk removal vista",
    "commercial junk removal vista",
    "junk removal vista business park",
    "downtown vista junk removal"
  ],
  openGraph: {
    title: "Junk Removal Vista | Brewery District • Business Park | (619) 750-0114",
    description: "Junk removal Vista CA: Craft brewery district specialists, Business Park warehouse experts, Shadowridge golf community. Same-day junk hauling vista ca service.",
    url: "https://www.severinhauling.com/junk-removal-vista",
    siteName: 'Severin Hauling',
    images: [{
      url: 'https://www.severinhauling.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Vista Junk Removal - Severin Hauling'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Junk Removal Vista | Brewery District • Business Park | (619) 750-0114",
    description: "Junk removal Vista CA: Craft brewery district specialists, Business Park warehouse experts, Shadowridge golf community. Same-day junk hauling vista ca service.",
    images: ['https://www.severinhauling.com/og-image.jpg'],
  },
  alternates: {
    canonical: "https://www.severinhauling.com/junk-removal-vista",
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
    'geo.placename': 'Vista',
    'geo.position': '33.2000;-117.2425',
    'ICBM': '33.2000, -117.2425',
  },
};

const vistaFAQs = [
  {
    question: "How much does junk removal Vista cost?",
    answer: "Our junk removal vista pricing is transparent and volume-based. Small items start at $69. Standard items (couches, mattresses, appliances) start at $100. Quarter-load service costs $249, half-load runs $349, three-quarter load is $429, and full-load service tops out at $495. All prices include labor, hauling, disposal fees, and eco-friendly sorting. We charge no surcharges for downtown access, Shadowridge hillside properties, or Business Park after-hours service. Free estimates provided over the phone or on-site."
  },
  {
    question: "Do you handle apartment and condo junk hauling in Vista?",
    answer: "Yes, our junk hauling vista ca team specializes in apartment and condo services throughout Downtown Vista Village, Shadowridge complexes, and all North County multi-family properties. We navigate narrow hallways, tight staircases, and elevator coordination while protecting walls, doors, and common areas. We coordinate with property managers, respect HOA guidelines, and handle tenant turnovers, estate transitions, and downsizing projects. We serve all three Vista zip codes (92081, 92083, and 92084) with professional, efficient service."
  },
  {
    question: "Can you provide same-day junk removal Vista service?",
    answer: "Yes, our junk removal vista team offers same-day service 7 days a week throughout North County when you call before noon. We often arrive within 2-4 hours for emergency cleanouts, moving deadlines, rental property turnovers, real estate closing cleanouts, estate sales, and business closures. We monitor Vista Village Drive and SR-78 traffic conditions to provide accurate arrival windows. We serve Shadowridge, Rancho Buena Vista, Downtown Vista, and all surrounding neighborhoods. Call (619) 750-0114 before noon for same-day service."
  },
  {
    question: "Do you work with Vista businesses and warehouses?",
    answer: "Yes, we provide comprehensive commercial junk hauling vista ca services throughout Vista Business Park, downtown brewery district, retail centers, and warehouse facilities. Our services include office furniture removal, brewery and restaurant equipment disposal, warehouse inventory liquidation, and construction debris removal. We offer flexible scheduling with after-hours service (evenings and weekends), early morning service, and coordinated scheduling around production timelines. We're licensed, insured, and experienced with Vista's commercial landscape from compact brewery spaces to expansive Business Park warehouses with dock access."
  },
  {
    question: "Are your junk removal Vista services eco-friendly?",
    answer: "Yes, our Vista clean junk removal approach prioritizes eco-friendly disposal. We sort every load to maximize recycling and donation opportunities. Usable furniture, appliances, and household goods are donated to North County charities including Goodwill, Salvation Army, and local churches. Metal items go to San Diego recycling facilities. Mattresses go to specialized recycling centers. Electronics receive certified e-waste recycling with proper handling of hazardous materials per California regulations. As a San Diego County service provider, we're committed to responsible disposal practices that reduce environmental impact."
  },
  {
    question: "What areas of Vista do you serve?",
    answer: "Our local junk removal company covers all Vista CA neighborhoods. We serve Downtown Vista Village, Shadowridge hillside community, Rancho Buena Vista, Buena Creek, Vista Business Park, Vista Village Drive corridor, Brengle Terrace, and North Vista. We also serve all three Vista CA zip codes—92081 (central Vista including downtown and Business Park), 92083 (eastern Vista including Shadowridge), and 92084 (western and southern Vista areas). Our North County San Diego positioning allows us to efficiently serve Vista along with neighboring communities like Oceanside, San Marcos, Carlsbad, and Escondido."
  },
  {
    question: "Do you offer free estimates for Vista junk removal?",
    answer: "Yes, we provide free, no-obligation estimates for all junk removal vista jobs throughout North County. You can get an initial estimate over the phone by describing what needs to be removed based on our quarter-load, half-load, three-quarter, and full-load pricing structure. For larger or complex projects, we offer free on-site estimates for estate cleanouts, apartment turnovers, warehouse liquidations, or commercial clearances. During same-day service calls, we provide final pricing upon arrival before starting any work. Our transparent volume-based pricing includes all labor, hauling, disposal fees, and eco-friendly sorting with no hidden fees. Call (619) 750-0114 for your free estimate."
  },
  {
    question: "Can you remove furniture and appliances in Vista?",
    answer: "Yes, furniture and appliance removal is one of our primary junk hauling vista ca services. We handle all types of furniture including sofas, sectionals, dining sets, bedroom furniture, mattresses, office furniture, patio furniture, and specialized items like pianos and pool tables. For appliances, we remove refrigerators, washers, dryers, dishwashers, stoves, water heaters, and commercial-grade appliances with proper handling of refrigerants per California regulations. We navigate downtown apartments, Shadowridge hillside homes, and Business Park commercial spaces. All furniture in good condition is donated to North County charities, and appliances go to certified recycling facilities."
  }
];

export default function JunkRemovalVistaPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.severinhauling.com" },
    { name: "Areas We Serve", url: "https://www.severinhauling.com/areas-we-serve" },
    { name: "Vista Junk Removal", url: "https://www.severinhauling.com/junk-removal-vista" },
  ]);

  const faqSchema = generateFAQSchema(vistaFAQs);

  const serviceSchema = {
    "@type": "Service",
    "name": "Junk Removal in Vista",
    "description": "Professional junk removal vista service for families, apartments & businesses. Same-day junk hauling vista ca, eco-friendly disposal. Serving Shadowridge, Downtown Vista Village, Rancho Buena Vista, Buena Creek.",
    "url": "https://www.severinhauling.com/junk-removal-vista",
    "serviceType": "Junk Removal",
    "provider": {
      "@id": "https://www.severinhauling.com/junk-removal-vista#business"
    }
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://www.severinhauling.com/junk-removal-vista#business",
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
    "url": "https://www.severinhauling.com/junk-removal-vista",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Venmo", "Zelle", "Cash App"],
    "currenciesAccepted": "USD",
    "areaServed": {
      "@type": "City",
      "name": "Vista",
      "containedInPlace": {
        "@type": "State",
        "name": "California"
      }
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "aggregateRating": generateAggregateRatingSchema(),
    "knowsAbout": [
      "Craft Brewery Equipment and Restaurant Fixtures",
      "Vista Business Park Industrial Cleanouts",
      "Shadowridge Golf Community HOA Compliance",
      "Tri-City Medical Center Healthcare District",
      "Downtown Vista Mixed-Use Property Management",
      "North County Commercial Warehouse Operations",
      "Vista Village Drive Retail Corridor Services",
      "Rancho Buena Vista Family Home Expertise"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vista Junk Removal Specialized Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Craft Brewery & Restaurant Equipment Removal",
            "description": "Downtown Vista Main Street brewery district equipment, fixtures, and commercial kitchen cleanouts with after-hours scheduling"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vista Business Park Industrial Cleanouts",
            "description": "Warehouse inventory liquidation, commercial office furniture, and industrial equipment removal with dock access coordination"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Shadowridge Golf Community Services",
            "description": "Premium hillside estate cleanouts with HOA compliance and golf community property standards"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tri-City Medical District Property Services",
            "description": "Healthcare facility cleanouts, medical office furniture, and hospital district property management support"
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

  const howToSchema = generateHowToSchema({
    cityName: "Vista",
    pageUrl: "https://www.severinhauling.com/junk-removal-vista"
  });

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema, howToSchema]
  };

  const nearbyLocations = [
    { name: "Oceanside", slug: "junk-removal-oceanside" },
    { name: "San Marcos", slug: "junk-removal-san-marcos" },
    { name: "Carlsbad", slug: "junk-removal-carlsbad" },
    { name: "Escondido", slug: "junk-removal-escondido" },
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
                #1 Vista Junk Removal Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Junk Removal Vista
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Brewery District • Business Park • Shadowridge Golf Community
              </p>

              <p className="text-lg mb-8">
                ✓ North County Specialists ✓ Same-Day Hauling ✓ Licensed & Insured
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
                      Professional Junk Hauling Vista – Downtown to Shadowridge
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      Severin Hauling provides professional Vista clean junk removal for North County San Diego. From the craft brewery district in Downtown Vista Village to hillside homes in Shadowridge, our junk removal company handles the diverse needs of this 19-square-mile North County community. We offer same day junk removal Vista CA for family homes, apartments, and business properties throughout the 92081, 92083, and 92084 areas with transparent pricing and eco-friendly services.
                    </p>

                    <p className="text-gray-700 mb-4">
                      Our junk removal team is your complete junk removal solution for North County's varied property landscape. Vista CA junk removal services require expertise with:
                    </p>

                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      <li>Compact downtown apartments near the Civic Center</li>
                      <li>Expansive family homes in Rancho Buena Vista</li>
                      <li>Brewery cleanouts on Main Street</li>
                      <li>Warehouse clearances in Vista Business Park</li>
                      <li>Commercial junk removal for San Diego businesses</li>
                    </ul>

                    <p className="text-gray-700 mb-6">
                      Whether you need to remove unwanted items from a downtown condo, clear garage junk removal trash from a Shadowridge family home, or handle construction debris from a Buena Creek business, our junk removal team brings versatility and local expertise. We handle all the heavy lifting so you don't have to.
                    </p>

                    {/* Craft Brewery District Specialists */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Downtown Vista Craft Brewery District</h3>
                    <p className="text-gray-700 mb-6">
                      Vista's Main Street brewery district requires specialized commercial equipment removal. We handle brewery tanks, commercial kitchen equipment, bar furniture, and restaurant fixtures with after-hours scheduling (Sunday mornings, 6-9 AM) to minimize business disruption. Our team navigates downtown parking restrictions and narrow alley access for complete brewery and restaurant cleanouts.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Vista Neighborhoods We Serve</h3>
                    <p className="text-gray-700 mb-4">
                      Our junk removal Vista service covers every corner of this diverse North County city. We've completed thousands of jobs throughout Vista's varied neighborhoods, each with unique characteristics:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        <li><strong>Downtown Vista Village:</strong> Historic core with breweries, restaurants, mixed-use buildings, and vintage homes requiring careful access coordination</li>
                        <li><strong>Shadowridge:</strong> Hillside golf course community with modern family homes, HOA regulations, and panoramic views</li>
                        <li><strong>Rancho Buena Vista:</strong> Established family neighborhood with larger lots, mature landscaping, and multi-car garages</li>
                        <li><strong>Buena Creek:</strong> Northern residential area with schools, parks, and family-oriented development</li>
                      </ul>
                      <ul className="space-y-2">
                        <li><strong>Vista Business Park:</strong> Commercial and industrial corridor off Sycamore Avenue requiring after-hours service options</li>
                        <li><strong>Vista Village Drive Area:</strong> Central corridor with retail centers, apartments, and mixed commercial-residential</li>
                        <li><strong>Brengle Terrace:</strong> Central park area surrounded by established neighborhoods and community facilities</li>
                        <li><strong>North Vista:</strong> Newer developments near Oceanside boundary with contemporary family homes</li>
                      </ul>
                    </div>

                    {/* Business Park Industrial Hub */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Vista Business Park Commercial Services</h3>
                    <p className="text-gray-700 mb-6">
                      Vista Business Park requires large-scale commercial service. We handle warehouse inventory liquidation, office furniture removal, and industrial equipment disposal with after-hours scheduling (6-9 PM weekdays, weekends) to minimize disruption. Our team coordinates loading dock access and provides recurring service contracts for property managers.
                    </p>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Vista Landmarks</h3>
                    <p className="text-gray-700 mb-4">
                      We provide junk removal Vista service near all major North County landmarks:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• Vista Civic Center—government hub and community services</li>
                        <li>• Shadowridge Golf Club—centerpiece of hillside community</li>
                        <li>• Brengle Terrace Park—central recreation area and amphitheater</li>
                        <li>• Downtown Vista Brewery District—craft beer corridor and nightlife</li>
                        <li>• Vista Historical Museum—heritage preservation and cultural center</li>
                        <li>• Rancho Minerva Park—community park and sports facilities</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Vista Business Park—commercial and industrial employment center</li>
                        <li>• Tri-City Medical Center—regional hospital and healthcare campus</li>
                        <li>• Vista Village Shopping Center—retail anchor for central neighborhoods</li>
                        <li>• Buena Vista Park—northern recreation area and family destination</li>
                        <li>• Vista Entertainment Center—movie theater and retail complex</li>
                        <li>• Antique Gas & Steam Engine Museum—unique cultural attraction</li>
                      </ul>
                    </div>

                    {/* Shadowridge Golf Community */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Shadowridge Golf Community Services</h3>
                    <p className="text-gray-700 mb-6">
                      Shadowridge's hillside golf course community requires HOA-compliant service and hillside access expertise. We handle estate cleanouts, garage renovations, and family downsizing with afternoon scheduling (1-5 PM) to avoid peak golf traffic. Our team protects premium finishes and coordinates with property managers to meet community standards.
                    </p>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Traffic & Service Timing</h3>
                    <p className="text-gray-700 mb-6">
                      We schedule around Vista's traffic patterns: mid-morning (9 AM-12 PM) or early afternoon (1-3 PM) for weekday commute hours on Vista Village Drive and SR-78. Downtown brewery cleanouts use Sunday mornings or 6-9 AM slots before business hours.
                    </p>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">North County Inland Climate</h3>
                    <p className="text-gray-700 mb-6">
                      Vista's inland position creates hot summers (85-95°F) and mild winters. Early morning service (7-10 AM) is preferable during summer months for crew efficiency and client comfort.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in Vista CA</h3>
                    <p className="text-gray-700 mb-4">
                      Our Vista CA junk removal services handle diverse items reflecting North County San Diego's mixed residential and commercial character. We remove unwanted items of all types with eco-friendly junk removal practices:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Furniture Removal</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">Furniture removal for sofas, sectionals, recliners</a></li>
                          <li>• <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">Mattresses</a>, bed frames, bedroom sets</li>
                          <li>• Dining tables, chairs, kitchen sets</li>
                          <li>• Desks, office furniture, bookshelves</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances & Fitness</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Refrigerators, washers, dryers, freezers</a></li>
                          <li>• Dishwashers, stoves, microwaves, ovens</li>
                          <li>• TVs, computers, electronics disposal</li>
                          <li>• Exercise equipment, treadmills, ellipticals, weight benches, home gym gear</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Commercial Junk Removal</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">Commercial junk removal for offices</a>, cubicles, conference tables</li>
                          <li>• Brewery equipment, restaurant fixtures, displays</li>
                          <li>• Warehouse inventory, shelving, storage racks</li>
                          <li>• <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">Construction debris removal</a> from renovations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Cleanouts & Debris</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">Estate cleanouts</a> for family property transitions</li>
                          <li>• Apartment complex turnovers and tenant move-outs</li>
                          <li>• <a href="/cleanout-services-san-diego" className="text-blue-600 hover:underline">Garage and storage unit</a> complete clearances</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs and spas</a> from backyard renovations</li>
                          <li>• <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">Same-day service</a> throughout North County Vista</li>
                        </ul>
                      </div>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Our Local Junk Removal Company for Vista CA</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>North County San Diego Versatility:</strong> Our junk removal team handles Vista CA's diverse property mix with equal expertise. From downtown brewery cleanouts to Shadowridge family homes to Business Park warehouse clearances, we've completed thousands of Vista jobs. We navigate everything from compact downtown apartments to sprawling Rancho Buena Vista estates, understanding the unique requirements of each Vista neighborhood and property type. We also serve nearby San Marcos.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>We Offer Same Day Service:</strong> Our junk removal company offers same day service throughout Vista CA and North County San Diego. Call before noon for same-day junk removal services. Our dispatch monitors Vista Village Drive and SR-78 traffic conditions, scheduling arrival windows that work around commute congestion and ensure reliable, on-time service even during busy North County periods.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing - No Heavy Lifting Required:</strong> No hidden fees with our junk removal solution. Upfront volume-based quotes with all labor, heavy lifting, hauling, and disposal included. Downtown access challenges or Shadowridge hillside locations don't change our rates—you pay for volume removed. Most Vista CA jobs range from quarter-truck to full-truck loads with clear pricing communicated before work begins.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Insured Junk Removal Company:</strong> Fully licensed California local junk removal company with comprehensive liability insurance. We carry proper coverage for residential homes, apartment complexes, and commercial junk removal properties throughout Vista's diverse North County San Diego landscape—from downtown businesses to hillside family estates.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Vista"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Vista"
          contextParagraph="Family home and business cleanouts throughout Vista—from Downtown Village to Shadowridge—all use the same transparent pricing. No hidden fees, same-day service available."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Vista" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Junk Removal Vista"
          description="Get answers to common questions about our junk removal Vista services, pricing, and same-day availability."
          faqs={vistaFAQs}
          ctaTitle="Still Have Questions About Vista Junk Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our junk removal Vista services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related North County Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/commercial-junk-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Commercial Junk Removal</h4>
                <p className="text-gray-600">Vista Business Park and brewery district commercial cleanouts</p>
              </a>
              <a href="/furniture-disposal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Family home and apartment furniture disposal services</p>
              </a>
              <a href="/appliance-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal San Diego</h4>
                <p className="text-gray-600">Refrigerator, washer, dryer disposal for homes and businesses</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </>
  );
}
