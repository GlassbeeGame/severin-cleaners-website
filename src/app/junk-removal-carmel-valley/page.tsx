import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/SchemaMarkup";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import OptimizedGradientHero from "@/components/OptimizedGradientHero";

export const metadata: Metadata = {
  title: "Junk Removal Carmel Valley | North County Premium Service | (619) 750-0114",
  description: "Carmel Valley junk removal for Torrey Highlands, Pacific Highlands Ranch. Estate cleanouts, luxury furniture. Licensed. (619) 750-0114",
  keywords: [
    "junk removal Carmel Valley",
    "Carmel Valley junk hauling",
    "estate cleanout Carmel Valley",
    "furniture removal Carmel Valley",
    "junk removal near me Carmel Valley",
    "same-day junk pickup",
    "Del Mar Mesa junk removal"
  ],
  openGraph: {
    title: "Junk Removal Carmel Valley | Professional Hauling Service",
    description: "Reliable junk removal serving all of Carmel Valley from Torrey Highlands to Del Mar Mesa. Upscale residential cleanouts and luxury home services.",
    url: "https://severincleaners.com/junk-removal-carmel-valley",
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Carmel Valley Junk Removal - Severin Cleaners'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Junk Removal Carmel Valley | Professional Hauling Service",
    description: "Reliable junk removal serving all of Carmel Valley from Torrey Highlands to Del Mar Mesa. Upscale residential cleanouts and luxury home services.",
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: "https://severincleaners.com/junk-removal-carmel-valley",
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
    'geo.placename': 'Carmel Valley',
    'geo.position': '32.9283;-117.2217',
    'ICBM': '32.9283, -117.2217',
  },
};

const carmelValleyFAQs = [
  {
    question: "Do you provide same-day junk removal in Carmel Valley?",
    answer: "Yes, we offer same-day junk pickup throughout Carmel Valley including Torrey Highlands, Del Mar Mesa, and Pacific Highlands Ranch. Call (619) 750-0114 before 2 PM for same-day service availability."
  },
  {
    question: "What areas of Carmel Valley do you serve?",
    answer: "We serve all neighborhoods in Carmel Valley 92130 including Torrey Highlands, Del Mar Mesa, Pacific Highlands Ranch, Carmel Creek, and Torrey Hills. We also cover surrounding areas like 4S Ranch and Rancho Penasquitos."
  },
  {
    question: "How much does junk removal cost in Carmel Valley?",
    answer: "Our Carmel Valley junk removal pricing is transparent and upfront with no hidden fees:"
  },
  {
    question: "Do you remove furniture and appliances from Carmel Valley homes?",
    answer: "Yes, we remove all types of furniture, appliances, and household items. This includes sofas, mattresses, refrigerators, washers, dryers, and exercise equipment. We handle both indoor and outdoor removal."
  },
  {
    question: "Are you licensed and insured for junk removal in San Diego?",
    answer: "Yes, Severin Cleaners is fully licensed and insured for junk removal services throughout San Diego County. We carry comprehensive liability insurance and proper waste hauling permits."
  },
  {
    question: "What items cannot be removed during junk hauling?",
    answer: "We cannot remove hazardous materials like paint, chemicals, asbestos, or medical waste. However, we handle electronics, furniture, appliances, yard waste, construction debris, and most household items."
  }
];

export default function JunkRemovalCarmelValleyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Carmel Valley Junk Removal", url: "https://severincleaners.com/junk-removal-carmel-valley" },
  ]);

  const faqSchema = generateFAQSchema(carmelValleyFAQs);

  const serviceSchema = {
    "@type": "Service",
    "name": "Junk Removal in Carmel Valley",
    "description": "Professional junk removal services in Carmel Valley, San Diego. Same-day pickup, eco-friendly disposal, and transparent pricing.",
    "url": "https://severincleaners.com/junk-removal-carmel-valley",
    "serviceType": "Junk Removal",
    "provider": {
      "@id": "https://severincleaners.com/junk-removal-carmel-valley#business"
    }
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://severincleaners.com/junk-removal-carmel-valley#business",
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
    "url": "https://severincleaners.com/junk-removal-carmel-valley",
    "areaServed": [
      {
        "@type": "City",
        "name": "Carmel Valley",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "PostalCode",
        "postalCode": "92130",
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
    { name: "Del Mar", slug: "junk-removal-del-mar" },
    { name: "Rancho Santa Fe", slug: "junk-removal-rancho-santa-fe" },
    { name: "La Jolla", slug: "junk-removal-la-jolla" },
    { name: "Mira Mesa", slug: "junk-removal-mira-mesa" },
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
                #1 Carmel Valley Junk Removal Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Carmel Valley Junk Removal
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Torrey Highlands to Del Mar Mesa • Master-Planned Community Experts • Same-Day Service
              </p>

              <p className="text-lg mb-8">
                ✓ Luxury Home Specialists ✓ HOA Compliant ✓ Licensed & Insured
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
                      Professional Junk Removal Carmel Valley – Master-Planned Community Experts
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      Junk removal Carmel Valley serves one of San Diego's most prestigious North County communities. From Torrey Highlands gated estates to Pacific Highlands Ranch master-planned neighborhoods, our Carmel Valley junk hauling team navigates HOA requirements, luxury home standards, and upscale community expectations with professionalism. We provide same-day junk pickup Carmel Valley for executive relocations, estate cleanouts, and home staging projects throughout the 92130 area with transparent pricing and white-glove service.
                    </p>

                    <p className="text-gray-700 mb-6">
                      Our Carmel Valley operation is uniquely equipped to handle the challenges of this premier North County neighborhood. We understand that <strong>estate cleanout Carmel Valley</strong> requires more than just hauling trucks—it demands respect for luxury finishes, coordination with property management, adherence to HOA scheduling restrictions, and the ability to work discreetly in exclusive communities. Whether you're clearing out a Torrey Highlands executive estate after a corporate relocation, removing home office furniture from a Del Mar Mesa telecommuter upgrade, or handling a complete garage cleanout near the Carmel Valley Recreation Center, our team brings the specialized experience that upscale properties demand.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Carmel Valley Neighborhoods We Serve</h3>
                    <p className="text-gray-700 mb-4">
                      Our junk removal near me Carmel Valley service covers every corner of this diverse North County community, from oceanview estates bordering Del Mar to family neighborhoods near the I-15 corridor. We've completed thousands of junk removal jobs throughout Carmel Valley's master-planned developments, each with unique HOA requirements and community characteristics that inform our service approach:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        <li><strong>Torrey Highlands:</strong> Gated luxury estates, executive homes with multi-car garages and pool house cleanout needs</li>
                        <li><strong>Pacific Highlands Ranch:</strong> Newer master-planned community with strict HOA guidelines and modern family homes</li>
                        <li><strong>Del Mar Mesa:</strong> Family-oriented neighborhoods with large properties and garage organization projects</li>
                        <li><strong>Carmel Creek:</strong> Established residential area with mature landscaping and yard waste removal needs</li>
                      </ul>
                      <ul className="space-y-2">
                        <li><strong>Torrey Hills:</strong> Business park proximity with commercial and residential service demands</li>
                        <li><strong>Village of Fairbanks Ranch:</strong> Ultra-luxury equestrian community requiring specialized estate services</li>
                        <li><strong>Santaluz:</strong> Golf course community with upscale property standards and staging requirements</li>
                        <li><strong>Carmel Mountain Ranch:</strong> Family neighborhoods with standard residential junk removal access</li>
                      </ul>
                    </div>

                    {/* Major Streets */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Key Streets & Access Routes</h3>
                    <p className="text-gray-700 mb-4">
                      Our Carmel Valley junk hauling team knows every street and can navigate the community's master-planned layout. This local expertise matters when coordinating with security gates, understanding HOA truck restrictions, and planning efficient routes through winding residential streets. We coordinate each job with detailed access planning to ensure smooth service:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      <li>• <strong>Carmel Valley Road:</strong> Main east-west thoroughfare connecting to I-5 and inland communities</li>
                      <li>• <strong>Del Mar Heights Road:</strong> Coastal connection with ocean access and upscale properties</li>
                      <li>• <strong>Carmel Mountain Road:</strong> North County corridor linking to Rancho Penasquitos and Poway</li>
                      <li>• <strong>El Camino Real:</strong> Primary north-south route with business and residential mix</li>
                      <li>• <strong>Torrey Santa Fe Road:</strong> Business district access serving Torrey Hills offices</li>
                      <li>• <strong>High Bluff Drive:</strong> Torrey Pines area connection with corporate park access</li>
                      <li>• <strong>Pacific Rim Court:</strong> Pacific Highlands Ranch residential streets with HOA coordination</li>
                      <li>• <strong>Torrey Mesa Way:</strong> Torrey Highlands estates requiring security gate clearance</li>
                    </ul>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Carmel Valley Landmarks</h3>
                    <p className="text-gray-700 mb-4">
                      We provide furniture removal Carmel Valley service near all major landmarks. These familiar reference points help us navigate quickly to your property and coordinate with community amenities and local institutions that define daily life in this upscale neighborhood:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• Torrey Pines High School—premier educational facility</li>
                        <li>• Del Mar Highlands Town Center—major shopping hub</li>
                        <li>• Carmel Valley Library—community gathering center</li>
                        <li>• Torrey Pines Golf Course—world-renowned golf destination</li>
                        <li>• One Paseo—upscale mixed-use development</li>
                        <li>• Carmel Valley Recreation Center—sports and activities</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Sage Canyon Elementary—family neighborhood school</li>
                        <li>• Whole Foods Carmel Valley—central shopping location</li>
                        <li>• Torrey Hills Center—business park and offices</li>
                        <li>• Pacific Highlands Ranch Community Park—recreation hub</li>
                        <li>• Carmel Creek Trail System—neighborhood open space</li>
                        <li>• Del Mar Mesa Preserve—natural area boundary</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Traffic Patterns & Service Timing</h3>
                    <p className="text-gray-700 mb-4">
                      Carmel Valley's commuter patterns and school traffic affect junk removal Carmel Valley scheduling more than many realize. Our dispatch team actively monitors North County traffic and coordinates with you to schedule service windows that respect HOA quiet hours and minimize neighborhood disruption. We've developed specific timing protocols for different Carmel Valley areas:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      <li><strong>Weekday rush hours (7-9 AM, 4-7 PM):</strong> Heavy commuter traffic on Carmel Valley Road, Del Mar Heights Road, and El Camino Real creates delays. We recommend mid-morning (9:30 AM-2 PM) service windows when streets are clear and neighbors are at work. HOA truck restrictions often apply during early morning hours anyway.</li>
                      <li><strong>School traffic (7:30-8:30 AM, 2-3:30 PM):</strong> Torrey Pines High School and elementary schools create localized congestion in residential neighborhoods. We avoid these windows for nearby properties or coordinate alternative access routes with advance planning.</li>
                      <li><strong>Weekend service:</strong> Saturday mornings are popular for Carmel Valley junk removal, but many HOAs restrict truck access before 8 AM or 9 AM. We confirm community-specific rules before scheduling and offer flexible Sunday appointments for properties with seven-day access approval.</li>
                      <li><strong>Executive relocation timing:</strong> Corporate clients often need weekday service during business hours while they're at the office. We coordinate discreet mid-day appointments (10 AM-3 PM) that allow us to work efficiently without homeowner presence, perfect for busy professionals managing moves remotely.</li>
                    </ul>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">North County Weather Considerations</h3>
                    <p className="text-gray-700 mb-6">
                      Carmel Valley's inland North County location creates distinct weather patterns that affect junk removal operations year-round. Summer temperatures (June-September) regularly exceed 85°F inland from the coast, with Torrey Highlands and Del Mar Mesa areas experiencing warmer conditions than coastal Del Mar just miles away. We schedule early morning starts (7-9 AM) during heat waves to protect crews and prevent heat damage to items being transported. Winter rainy season (December-February) brings occasional heavy rainfall that can create muddy conditions on unpaved driveways in newer construction areas—we bring protective floor coverings and take extra care during wet weather to preserve luxury flooring and carpets. The community's elevation and distance from the ocean means less marine layer fog than coastal areas, allowing consistent year-round scheduling without coastal weather delays.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in Carmel Valley</h3>
                    <p className="text-gray-700 mb-4">
                      Our junk removal Carmel Valley service handles the unique mix of items common to upscale North County living—from executive home office <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">furniture removal</a> to luxury outdoor equipment to home staging preparation. We provide <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">appliance removal</a>, <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanouts</a>, and <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">same-day service</a>:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Furniture & Household</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Executive office furniture and home office upgrades</li>
                          <li>• <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">Luxury sofas, sectionals</a>, and designer pieces</li>
                          <li>• Master bedroom sets and guest room furniture</li>
                          <li>• <a href="/piano-removal-san-diego" className="text-blue-600 hover:underline">Pianos</a>, dining tables, and formal furniture</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances & Electronics</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">High-end refrigerators</a> and wine coolers</li>
                          <li>• Washer, dryer sets from home renovations</li>
                          <li>• Home theater systems and entertainment centers</li>
                          <li>• Exercise equipment and home gym removal</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Outdoor & Recreation</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Patio furniture sets and outdoor kitchens</li>
                          <li>• Pool furniture and cabana equipment</li>
                          <li>• Playground equipment and sports gear</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs and spas</a> from backyard renovations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Cleanouts & Projects</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Estate cleanouts for luxury properties</li>
                          <li>• Multi-car garage organization and clearing</li>
                          <li>• Home staging preparation and decluttering</li>
                          <li>• Relocation cleanouts for corporate moves</li>
                        </ul>
                      </div>
                    </div>

                    {/* How Our Service Works */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">How Our Carmel Valley Junk Removal Service Works</h3>
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <ol className="space-y-3 text-gray-700">
                        <li><strong>1. Contact Us:</strong> Call (619) 750-0114 or book online. Describe what you need removed and your Carmel Valley location. We'll provide estimated pricing based on volume and confirm any HOA requirements for your community.</li>
                        <li><strong>2. Same-Day Scheduling Available:</strong> Call before noon for same-day service throughout the 92130 area. We coordinate arrival times around your schedule and community access requirements.</li>
                        <li><strong>3. We Arrive & Assess:</strong> Our uniformed crew arrives in professional vehicles during your scheduled window. We assess items for removal and provide a final quote before starting work—no hidden fees or surprises.</li>
                        <li><strong>4. We Load & Haul Everything:</strong> Our team does all lifting, loading, and hauling. We protect floors, walls, and doorways in luxury homes, navigate stairs and multi-level properties, and complete removal efficiently. You simply point—we handle the rest.</li>
                        <li><strong>5. Eco-Friendly Disposal:</strong> We sort items for donation, recycling, and responsible disposal. Luxury furniture goes to appropriate charities, recyclables to proper facilities, and only true waste to landfill as last resort.</li>
                        <li><strong>6. Clean Sweep & Payment:</strong> We sweep the area clean after removal and collect payment. Most jobs are completed in under two hours from arrival to departure.</li>
                      </ol>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Cleaners for Carmel Valley Junk Removal</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Luxury Home Expertise:</strong> We navigate Carmel Valley's gated communities, HOA restrictions, and upscale property standards with professionalism. Our crews have completed thousands of Carmel Valley junk removal jobs and understand the specific requirements of Torrey Highlands estates, Pacific Highlands Ranch master-planned homes, and Del Mar Mesa luxury properties. We coordinate with property management, work around community quiet hours, and maintain the discretion that exclusive neighborhoods expect.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Same-Day Service Available:</strong> Call before noon for same-day junk removal throughout Carmel Valley and the 92130 area. Our dispatch team coordinates with HOA access requirements and schedules arrival windows that work for busy professionals, ensuring reliable service even for last-minute executive relocations and urgent estate transitions.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> No hidden fees, no surprises. Upfront quotes based on volume with all labor, hauling, and disposal included. Gated community access and luxury home service don't change our rates—you pay for volume removed, not property type. Most Carmel Valley jobs range from half-truck to full-truck loads with clear pricing tiers communicated before work begins.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Insured:</strong> Fully licensed California junk removal company with comprehensive liability insurance. We carry proper coverage for luxury property access, including protection for high-end finishes, gated community entry, and upscale homes that require careful navigation of travertine floors, custom millwork, and premium landscaping.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Carmel Valley"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Carmel Valley"
          contextParagraph="Estate cleanouts and luxury home projects throughout Carmel Valley—from Torrey Highlands to Pacific Highlands Ranch—all use the same transparent pricing. No hidden fees, same-day service available."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Carmel Valley" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Junk Removal Carmel Valley"
          description="Get answers to common questions about our junk removal Carmel Valley services, pricing, and same-day availability."
          faqs={carmelValleyFAQs}
          ctaTitle="Still Have Questions About Carmel Valley Junk Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our junk removal Carmel Valley services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related North County Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-disposal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Executive home office and luxury furniture removal throughout Carmel Valley</p>
              </a>
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
                <p className="text-gray-600">Comprehensive estate services for upscale Torrey Highlands and Del Mar Mesa properties</p>
              </a>
              <a href="/construction-debris-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
                <p className="text-gray-600">Luxury home renovation and remodel debris cleanup services</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </>
  );
}
