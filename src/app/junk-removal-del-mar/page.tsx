import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/SchemaMarkup";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import { generateLocationServiceSchema, generateBreadcrumbSchema, generateAggregateRatingSchema } from "@/lib/schema";
import OptimizedGradientHero from "@/components/OptimizedGradientHero";

export const metadata: Metadata = {
  title: 'Del Mar Junk Removal | Coastal Luxury Experts | (619) 750-0114',
  description: 'Del Mar junk removal from Del Mar Village to Del Mar Heights. Coastal property specialists. Licensed & insured. (619) 750-0114',
  keywords: [
    'Del Mar junk removal',
    'junk hauling Del Mar',
    'junk pickup Del Mar',
    'trash removal Del Mar',
    'Del Mar San Diego junk removal',
    'junk removal 92014',
    'Camino Del Mar junk hauling'
  ],
  openGraph: {
    title: 'Del Mar Junk Removal | Coastal Luxury Specialists',
    description: 'Professional Del Mar junk removal from Village to Heights. Expert coastal property service. Licensed & insured. Call (619) 750-0114!',
    url: 'https://severincleaners.com/junk-removal-del-mar',
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Del Mar Junk Removal - Severin Cleaners'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Del Mar Junk Removal | Coastal Luxury Specialists',
    description: 'Professional Del Mar junk removal from Village to Heights. Expert coastal property service. Licensed & insured. Call (619) 750-0114!',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-del-mar',
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
    'geo.placename': 'Del Mar',
    'geo.position': '32.9595;-117.2653',
    'ICBM': '32.9595, -117.2653',
  },
};

const delMarFAQs = [
  {
    question: "Do you provide same-day junk removal in Del Mar?",
    answer: "Yes, we offer same-day junk pickup throughout Del Mar including Del Mar Village, Del Mar Heights, and Carmel Valley border areas. Call (619) 750-0114 before 2 PM for same-day service availability."
  },
  {
    question: "What areas of Del Mar do you serve for junk removal?",
    answer: "We serve all neighborhoods in Del Mar 92014 including Del Mar Village, Del Mar Heights, Flower Hill, and the border areas with Carmel Valley and Solana Beach. Our service extends to coastal properties and inland estates."
  },
  {
    question: "How much does junk removal cost in Del Mar?",
    answer: "Our transparent pricing: $95 single item, $250 quarter truck, $450 half truck, $700 full truck. All prices include labor, disposal fees, and cleanup. No hidden charges or surprise fees for Del Mar residents."
  },
  {
    question: "Do you handle luxury home cleanouts in Del Mar?",
    answer: "Yes, we specialize in luxury property cleanouts throughout Del Mar. Our team understands the unique requirements of high-end coastal homes and provides discreet, professional service with proper handling of valuable items."
  },
  {
    question: "Are you licensed and insured for junk removal in San Diego County?",
    answer: "Yes, Severin Cleaners is fully licensed and insured for junk removal services throughout San Diego County including Del Mar. We carry comprehensive liability insurance and proper waste hauling permits."
  },
  {
    question: "Can you remove items from Del Mar vacation rentals and beach houses?",
    answer: "Absolutely. We provide specialized vacation rental cleanout services for Del Mar beach houses and short-term rentals. We work around guest schedules and provide quick turnaround for property managers and owners."
  }
];

export default function JunkRemovalDelMarPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Del Mar Junk Removal", url: "https://severincleaners.com/junk-removal-del-mar" },
  ]);

  const faqSchema = generateFAQSchema(delMarFAQs);

  const serviceSchema = {
    "@type": "Service",
    "name": "Junk Removal in Del Mar",
    "description": "Professional Del Mar junk removal from Village to Heights. Expert coastal property service. Licensed & insured.",
    "url": "https://severincleaners.com/junk-removal-del-mar",
    "serviceType": "Junk Removal",
    "provider": {
      "@id": "https://severincleaners.com/junk-removal-del-mar#business"
    }
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://severincleaners.com/junk-removal-del-mar#business",
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
    "url": "https://severincleaners.com/junk-removal-del-mar",
    "areaServed": [
      {
        "@type": "City",
        "name": "Del Mar",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "PostalCode",
        "postalCode": "92014",
        "addressLocality": "Del Mar",
        "addressRegion": "CA"
      }
    ],
    "openingHours": "Mo-Su 00:00-23:59",
    "aggregateRating": generateAggregateRatingSchema(),
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
    { name: "Carlsbad", slug: "junk-removal-carlsbad" },
    { name: "Rancho Santa Fe", slug: "junk-removal-rancho-santa-fe" },
    { name: "Carmel Valley", slug: "junk-removal-carmel-valley" },
    { name: "La Jolla", slug: "junk-removal-la-jolla" },
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
                #1 Del Mar Junk Removal Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Del Mar Junk Removal
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Del Mar Village • Del Mar Heights • Coastal Luxury Service
              </p>

              <p className="text-lg mb-8">
                ✓ Transparent Pricing ✓ Eco-Friendly Disposal ✓ Coastal Property Experts
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
                      Professional Junk Hauling Del Mar – Del Mar Village to Del Mar Heights
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      Del Mar junk removal serves one of San Diego's most exclusive coastal communities. From oceanfront homes near Powerhouse Park to Del Mar Heights estates overlooking the Pacific, our junk hauling Del Mar team delivers premium service with discretion and professionalism. We're fully licensed and insured, providing same-day trash removal Del Mar throughout the 92014 area with transparent pricing and eco-friendly disposal practices.
                    </p>

                    <p className="text-gray-700 mb-6">
                      Del Mar's unique character as both a charming coastal village and an upscale residential community creates specific junk removal challenges. Our Del Mar San Diego junk removal crews understand the narrow Village streets where historic homes sit steps from boutique shopping, the winding hillside roads of Del Mar Heights where luxury estates command panoramic ocean views, and the seasonal traffic patterns driven by the world-famous Del Mar Racetrack. We've been providing expert Camino Del Mar junk hauling service for years, developing the local expertise that efficient coastal property service demands.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Del Mar Neighborhoods We Serve</h3>
                    <p className="text-gray-700 mb-4">
                      Our junk removal 92014 service covers every Del Mar neighborhood, from beach-level Village properties to hillside Heights estates. Each area presents distinct characteristics that inform our junk removal approach—Village homes often have limited street parking and shared access considerations, while Heights properties may involve steep driveways and panoramic settings that require careful equipment positioning:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        <li><strong>Del Mar Village:</strong> Downtown, beach access, shops with limited parking and pedestrian-area considerations for junk removal logistics</li>
                        <li><strong>Del Mar Heights:</strong> Hilltop estates, panoramic views with winding access roads and elevation challenges</li>
                        <li><strong>Flower Hill:</strong> Shopping, residential hillside with mixed commercial and residential access needs</li>
                        <li><strong>Del Mar Highlands:</strong> Master-planned community with HOA coordination and architectural standards</li>
                      </ul>
                      <ul className="space-y-2">
                        <li><strong>Stratford Court:</strong> Coastal homes near beach requiring careful navigation of narrow residential streets</li>
                        <li><strong>Coastal Zone:</strong> Beachfront properties with salt-air equipment considerations and limited turnaround space</li>
                        <li><strong>Carmel Valley Border:</strong> East Del Mar connecting to inland communities with standard residential access</li>
                        <li><strong>North Beach:</strong> Torrey Pines border area with coastal bluff properties and environmental sensitivity</li>
                      </ul>
                    </div>

                    {/* Major Streets */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Key Streets & Access</h3>
                    <p className="text-gray-700 mb-4">
                      Our Del Mar San Diego junk removal team navigates all major routes throughout this compact coastal community. Del Mar's geography creates unique access challenges—the Village's grid of narrow streets, the winding hillside roads climbing to the Heights, and the seasonal congestion around the Racetrack all require local knowledge for efficient junk removal routing:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      <li>• <strong>Camino Del Mar:</strong> Main coastal road with two-lane limitations and peak traffic</li>
                      <li>• <strong>Del Mar Heights Road:</strong> Hilltop access with winding ascent and estate driveways</li>
                      <li>• <strong>Jimmy Durante Boulevard:</strong> Commercial corridor to Fairgrounds and I-5 access</li>
                      <li>• <strong>Via de la Valle:</strong> Fairgrounds, I-5 access, racing season congestion point</li>
                      <li>• <strong>Coast Boulevard:</strong> Beachfront homes with limited parking and narrow street</li>
                      <li>• <strong>15th Street:</strong> Village downtown with pedestrian activity and meter parking</li>
                      <li>• <strong>Stratford Court:</strong> Residential enclave requiring careful navigation</li>
                      <li>• <strong>Durango Drive:</strong> Heights area connecting hillside estates</li>
                    </ul>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Del Mar Landmarks</h3>
                    <p className="text-gray-700 mb-4">
                      We provide junk removal 92014 service near all Del Mar landmarks. These well-known locations help our crews navigate efficiently and provide accurate arrival estimates in this relatively small coastal city where local knowledge of landmarks matters more than GPS coordinates alone:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• Del Mar Racetrack & Fairgrounds—seasonal traffic epicenter requiring schedule coordination</li>
                        <li>• Del Mar Plaza (shopping)—Village retail center with limited loading access</li>
                        <li>• Del Mar City Beach—coastal recreation area affecting weekend traffic</li>
                        <li>• Flower Hill Promenade—shopping and dining district with residential surroundings</li>
                        <li>• Del Mar Highlands Town Center—east community retail and services hub</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Torrey Pines State Reserve (border)—protected ecological area and property boundary</li>
                        <li>• Del Mar Civic Center—city government and community services</li>
                        <li>• L'Auberge Del Mar (resort)—luxury beachfront resort landmark</li>
                        <li>• Del Mar Country Club—exclusive golf and social club</li>
                        <li>• San Dieguito Lagoon—ecological preserve and coastal wetland</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Traffic & Service Timing</h3>
                    <p className="text-gray-700 mb-4">
                      Del Mar's seasonal traffic patterns affect Camino Del Mar junk hauling scheduling more dramatically than most North County communities. The world-famous Del Mar Racetrack drives massive seasonal congestion, while summer beach traffic and the Village's narrow streets create year-round timing considerations for efficient junk removal:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      <li><strong>Racing Season (July-Sept, November):</strong> Via de la Valle and Jimmy Durante experience heavy traffic on race days (Wednesday-Sunday during meets). Afternoon post-racing traffic (5-7 PM) creates significant delays. We schedule residential service early mornings (6-9 AM) or Monday-Tuesday non-race days during summer and fall racing seasons to ensure efficient access throughout Del Mar.</li>
                      <li><strong>Summer Beach Traffic:</strong> Camino Del Mar and Coast Boulevard congested 10 AM-5 PM weekends from Memorial Day through Labor Day. Beach-goers fill metered parking and create access challenges throughout the Village. We offer early morning (6-9 AM) premium service windows for beachfront properties, allowing junk removal completion before peak beach traffic arrives and parking becomes impossible.</li>
                      <li><strong>Del Mar Village narrow streets:</strong> 15th Street and Stratford Court require strategic parking coordination with neighbors and use of hand trucks for tight access. Many Village properties lack driveways, requiring street parking of junk removal trucks. We coordinate with property owners and neighbors to minimize disruption and schedule during periods when resident parking is lightest.</li>
                      <li><strong>Del Mar Heights winding roads:</strong> Hillside estates accessed via Del Mar Heights Road and connecting residential streets require careful navigation of curves, limited turnaround areas, and steep driveways. Our crews pre-plan routes using satellite imagery and coordinate with property owners about specific driveway access, gate codes, and any seasonal weather impacts on steep paved or dirt driveways.</li>
                    </ul>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Coastal Climate Considerations</h3>
                    <p className="text-gray-700 mb-6">
                      Del Mar's coastal microclimate brings May-August marine layer (cool, foggy mornings ideal for physical work) and year-round mild temperatures averaging 60-75°F. This comfortable climate makes Del Mar one of California's most desirable coastal communities, but salt air accelerates corrosion on outdoor furniture and appliances stored near the ocean. We protect electronics during transport and schedule around winter storm systems that occasionally cause street flooding in low-lying Village areas near the beach. Our trash removal Del Mar service includes proper handling of salt-damaged items—we've removed countless pieces of patio furniture, outdoor grills, and beach equipment that coastal exposure has rendered unusable. The marine layer's moisture content, while creating comfortable working conditions, also contributes to mold and mildew in stored items, particularly in garage and storage areas without climate control. We help Del Mar residents maintain healthy properties by efficiently removing moisture-damaged items before conditions worsen.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in Del Mar</h3>
                    <p className="text-gray-700 mb-4">
                      Our Del Mar junk removal service handles the sophisticated mix of items found in upscale coastal properties. From <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">designer furniture removal</a> that no longer suits updated interiors to salt-damaged outdoor equipment, construction debris from luxury remodels to complete <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanouts</a>, we remove everything efficiently with <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">same-day service</a> available:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Furniture & Household</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">Designer sofas, sectionals</a> from interior updates</li>
                          <li>• Bedroom sets, mattresses during estate transitions</li>
                          <li>• Dining tables, chairs from downsizing moves</li>
                          <li>• <a href="/piano-removal-san-diego" className="text-blue-600 hover:underline">Grand pianos and specialty instruments</a></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances & Electronics</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Refrigerators, wine coolers</a> from kitchen remodels</li>
                          <li>• Washers, dryers, dishwashers needing replacement</li>
                          <li>• TVs, electronics, computers from tech upgrades</li>
                          <li>• HVAC units, water heaters, tankless conversions</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Outdoor & Coastal Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Patio furniture, umbrellas damaged by salt air exposure</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs and spas</a> from backyard renovations</li>
                          <li>• BBQ grills, outdoor kitchens from landscaping updates</li>
                          <li>• Pool equipment, furniture from pool remodels</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Cleanouts & Debris</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">Estate & garage cleanouts</a> for entire properties</li>
                          <li>• Construction debris, remodels from luxury upgrades</li>
                          <li>• Yard waste, landscaping from drought-tolerant conversions</li>
                          <li>• Storage unit contents and accumulated items</li>
                        </ul>
                      </div>
                    </div>

                    {/* How Our Service Works */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">How Our Del Mar Junk Removal Service Works</h3>
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <ol className="space-y-3 text-gray-700">
                        <li><strong>1. Contact Us:</strong> Call (619) 750-0114 or book online. Describe items for removal and your Del Mar location (Village, Heights, or Highlands helps us plan routing). We provide estimated pricing and schedule your service window.</li>
                        <li><strong>2. Traffic-Smart Scheduling:</strong> We coordinate arrival times around Del Mar's unique traffic patterns—racing season, beach traffic, and Village congestion. Our dispatch monitors conditions to ensure reliable on-time arrival.</li>
                        <li><strong>3. Professional Arrival & Quote:</strong> Our uniformed crew arrives in marked trucks during your window. We assess items and provide final pricing before starting—transparent quotes with no surprises or hidden fees.</li>
                        <li><strong>4. Careful Loading & Removal:</strong> We handle all lifting, loading, and hauling with appropriate care for your coastal property. Floor protection, doorway padding, and efficient work means most Del Mar jobs complete in under two hours.</li>
                        <li><strong>5. Eco-Conscious Disposal:</strong> Items go to donation centers when usable, recycling facilities when appropriate, and only to landfill as last resort. We maximize diversion from waste stream.</li>
                        <li><strong>6. Clean Finish & Payment:</strong> We sweep the area clean and collect payment. Many Del Mar residents become repeat customers for seasonal cleanouts and ongoing junk removal needs.</li>
                      </ol>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Del Mar Residents Choose Us</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Coastal Access Expertise:</strong> We navigate narrow Village streets, beachfront access, and hillside Heights properties with skill developed through years of Del Mar junk removal service. Our crews know the challenging intersections, the streets with tightest turning radii, and the properties requiring hand-carry access. We coordinate parking with neighbors in the Village and handle steep driveways in the Heights safely and efficiently.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Racing Season Scheduling:</strong> We work around Del Mar Racetrack events and summer crowds with flexible timing tailored to Del Mar's unique seasonal patterns. During racing season, we prioritize early morning service (6-9 AM) or Monday-Tuesday scheduling to avoid race-day traffic. Our dispatch team actively monitors racing calendars and adjusts routing to ensure reliable service even during Del Mar's busiest periods.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> Volume-based pricing that doesn't change with racing season or beach traffic. No hidden fees, no time-based charges that penalize you for traffic delays. You pay for junk removed, period. Most Del Mar residential jobs range from quarter-truck to full-truck loads, with clear pricing tiers communicated upfront before any work begins.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Insured:</strong> Comprehensive coverage for luxury coastal properties and high-value estates throughout Del Mar. Our insurance protects your property during junk removal operations, and our California contractor's license ensures you're working with a legitimate, professional service company that stands behind its work.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Del Mar"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Del Mar"
          contextParagraph="Estate cleanouts and property services from Del Mar Village to Del Mar Heights all use transparent, volume-based pricing. Racing season or beach traffic doesn't change our rates."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Del Mar" coverageArea="North County Coastal" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Junk Removal Del Mar"
          description="Get answers to common questions about our junk removal Del Mar services, pricing, and same-day availability."
          faqs={delMarFAQs}
          ctaTitle="Still Have Questions About Del Mar Junk Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our junk removal Del Mar services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related Coastal Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-disposal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Designer furniture and coastal property furnishing removal</p>
              </a>
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanout Services</h4>
                <p className="text-gray-600">Complete estate cleanouts for Del Mar luxury properties</p>
              </a>
              <a href="/construction-debris-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
                <p className="text-gray-600">Coastal home remodel and renovation debris cleanup</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </>
  );
}
