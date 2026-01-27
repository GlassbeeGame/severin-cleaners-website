import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/SchemaMarkup";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import OptimizedGradientHero from "@/components/OptimizedGradientHero";

export const metadata: Metadata = {
  title: 'Lakeside Junk Removal | Rural East County Service | (619) 750-0114',
  description: 'Lakeside rural junk removal Riverview, Winter Gardens. Large acreage, ranch debris, barn cleanouts, horse properties. (619) 750-0114',
  keywords: [
    'Lakeside junk removal',
    'junk hauling Lakeside',
    'junk pickup Lakeside',
    'trash removal Lakeside',
    'Lakeside San Diego junk removal',
    'large property junk removal'
  ],
  openGraph: {
    title: 'Lakeside Junk Removal | Large Property & Ranch Specialists | Same-Day Service',
    description: 'Professional Lakeside junk removal for large properties, ranches, Riverview, Winter Gardens. East County rural specialists with yard debris removal. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-lakeside',
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Lakeside Junk Removal - Severin Cleaners'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lakeside Junk Removal | Large Property & Ranch Specialists | Same-Day Service',
    description: 'Professional Lakeside junk removal for large properties, ranches, Riverview, Winter Gardens. East County rural specialists with yard debris removal. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-lakeside',
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
    'geo.placename': 'Lakeside',
    'geo.position': '32.8575;-116.9225',
    'ICBM': '32.8575, -116.9225',
  },
};

const lakesideFAQs = [
  {
    question: "How much does junk removal cost in Lakeside?",
    answer: "Our Lakeside junk removal pricing is transparent and upfront with no hidden fees. We offer special rates for large properties, ranches, and recurring rural property maintenance:"
  },
  {
    question: "Do you handle large property and ranch junk hauling?",
    answer: "Yes, our junk hauling Lakeside service specializes in large properties, ranches, and agricultural facilities. We handle multi-acre cleanouts, ranch equipment disposal, barn cleanouts, and agricultural waste removal. Our team is experienced with the scale and unique requirements of East County's rural properties."
  },
  {
    question: "Can you provide same-day junk pickup in Lakeside?",
    answer: "Absolutely. We provide same-day junk pickup Lakeside for urgent needs throughout East County rural areas. Our team can respond quickly for large property emergencies, seasonal cleanouts, or time-sensitive agricultural operations while respecting working ranch and farm schedules."
  },
  {
    question: "Do you remove yard debris and outdoor storage items?",
    answer: "Yes, our trash removal Lakeside includes comprehensive yard debris removal, outdoor storage cleanouts, and landscaping waste disposal. We handle tree trimming debris, seasonal cleanup, garden renovation waste, and outdoor equipment disposal common to Lakeside's rural lifestyle."
  },
  {
    question: "Are your junk removal services eco-friendly in East County?",
    answer: "Absolutely. Our Lakeside San Diego junk removal prioritizes environmental responsibility through agricultural waste recycling, donation programs with local East County charities, and eco-friendly disposal methods that exceed local regulations."
  }
];

export default function JunkRemovalLakesidePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Lakeside Junk Removal", url: "https://severincleaners.com/junk-removal-lakeside" },
  ]);

  const faqSchema = generateFAQSchema(lakesideFAQs);

  const serviceSchema = {
    "@type": "Service",
    "name": "Junk Removal in Lakeside",
    "description": "Professional Lakeside junk removal for large properties, ranches, Riverview, Winter Gardens. East County rural specialists with yard debris removal.",
    "url": "https://severincleaners.com/junk-removal-lakeside",
    "serviceType": "Junk Removal",
    "provider": {
      "@id": "https://severincleaners.com/junk-removal-lakeside#business"
    }
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://severincleaners.com/junk-removal-lakeside#business",
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
    "url": "https://severincleaners.com/junk-removal-lakeside",
    "areaServed": [
      {
        "@type": "City",
        "name": "Lakeside",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "PostalCode",
        "postalCode": "92040",
        "addressLocality": "Lakeside",
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
    { name: "El Cajon", slug: "junk-removal-el-cajon" },
    { name: "Santee", slug: "junk-removal-santee" },
    { name: "La Mesa", slug: "junk-removal-la-mesa" },
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
                #1 Lakeside Junk Removal Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Lakeside Junk Removal
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Rural Properties • Large Acreage • Ranch Cleanouts • Same-Day Service
              </p>

              <p className="text-lg mb-8">
                ✓ Large Property Specialists ✓ Same-Day Hauling ✓ Licensed & Insured
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
                      Professional Junk Hauling Lakeside – East County Rural Property Experts
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      Lakeside junk removal serves one of East County's most spacious rural communities. From Riverview's large family homes to Eucalyptus Hills' multi-acre ranch properties, our junk hauling Lakeside team navigates unpaved roads, long driveways, and expansive properties with specialized equipment and expertise. We provide same-day trash removal Lakeside for ranch cleanouts, barn debris, and large property maintenance throughout the 92040 area with transparent pricing and eco-friendly disposal.
                    </p>

                    <p className="text-gray-700 mb-6">
                      Our Lakeside operation is uniquely equipped to handle the challenges of East County's rural lifestyle. We understand that Lakeside San Diego junk removal requires more than standard hauling trucks—it demands experience with agricultural properties, barn access, livestock coordination, and the ability to work efficiently on multi-acre estates where driveways can stretch a quarter-mile from the road. Whether you're clearing decades of accumulated equipment from a Willowbrook Estates property, removing old fencing materials from a working ranch, or handling a complete barn cleanout near Lake Jennings, our team brings the specialized rural property experience Lakeside demands.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Lakeside Neighborhoods We Serve</h3>
                    <p className="text-gray-700 mb-4">
                      Our large property junk removal service covers every corner of Lakeside's rural and suburban neighborhoods, from waterfront homes along Lake Jennings to hillside ranch estates in the backcountry. We've completed thousands of junk removal jobs throughout Lakeside's diverse areas, each with unique access challenges and property characteristics that inform our service approach:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        <li><strong>Riverview:</strong> Established family neighborhoods with large lots, mature landscaping, and garage cleanout needs</li>
                        <li><strong>Winter Gardens:</strong> Residential community near schools, parks with standard suburban access and storage clearing</li>
                        <li><strong>Willowbrook Estates:</strong> Newer developments with larger homes requiring estate cleanouts and renovation debris removal</li>
                        <li><strong>Lake Jennings Area:</strong> Waterfront and recreation-adjacent properties with boat equipment and outdoor gear disposal</li>
                      </ul>
                      <ul className="space-y-2">
                        <li><strong>Moreno Valley:</strong> Rural hillside properties with long private roads and multi-acre lot maintenance needs</li>
                        <li><strong>Eucalyptus Hills:</strong> Ranch and equestrian properties requiring barn cleanouts and agricultural debris removal</li>
                        <li><strong>Lakeside Farms:</strong> Working agricultural properties with fence line clearing and equipment disposal</li>
                        <li><strong>Wildcat Canyon Area:</strong> Remote backcountry properties with challenging access and large-scale cleanout requirements</li>
                      </ul>
                    </div>

                    {/* Major Streets */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Key Streets & Access Routes</h3>
                    <p className="text-gray-700 mb-4">
                      Our Lakeside San Diego junk removal team knows every major road and private drive in East County's rural areas. This local expertise matters when navigating the region's challenging infrastructure—unpaved private roads, narrow ranch driveways, steep hillside access, and properties requiring four-wheel drive approach. We plan each junk pickup Lakeside job with detailed route assessment to ensure our trucks can reach remote properties efficiently:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      <li>• <strong>Woodside Avenue:</strong> Main north-south corridor through central Lakeside with standard residential access</li>
                      <li>• <strong>Winter Gardens Boulevard:</strong> Family neighborhood connector with school zones requiring timing coordination</li>
                      <li>• <strong>Riverford Road:</strong> Riverview area residential street with mature homes and garage access</li>
                      <li>• <strong>Lake Jennings Park Road:</strong> Recreation access with weekend traffic and parking considerations</li>
                      <li>• <strong>Wildcat Canyon Road:</strong> Remote rural access requiring careful navigation and property coordination</li>
                      <li>• <strong>El Monte Road:</strong> Southern Lakeside connector with mixed residential and ranch properties</li>
                      <li>• <strong>Los Coches Road:</strong> Eastern access with equestrian properties and agricultural facilities</li>
                      <li>• <strong>Moreno Avenue:</strong> Hillside residential with steep driveways and narrow street parking</li>
                    </ul>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Lakeside Landmarks & Reference Points</h3>
                    <p className="text-gray-700 mb-4">
                      We provide junk removal Lakeside service near all major East County landmarks. These familiar reference points help us navigate quickly to your property and provide accurate arrival time estimates. Our crews use local landmarks for efficient routing throughout this expansive rural community where GPS coordinates often matter more than street addresses:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• Lake Jennings Recreation Area—waterfront property reference and boat equipment disposal</li>
                        <li>• Lakeside Community Center—central gathering point and event venue</li>
                        <li>• The River Park—Riverview neighborhood landmark and family recreation hub</li>
                        <li>• Lindo Lake County Park—wildlife preserve and downtown Lakeside anchor</li>
                        <li>• Lakeside Rodeo Grounds—annual event venue and equestrian facility</li>
                        <li>• Lakeside Historical Society Museum—heritage district reference point</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Barona Casino (border)—eastern boundary landmark and major employer</li>
                        <li>• Lakeside Middle School—Winter Gardens neighborhood reference</li>
                        <li>• Moreno Valley Ranch—hillside development and rural residential area</li>
                        <li>• Eucalyptus Hills Elementary—equestrian community reference point</li>
                        <li>• Wildcat Canyon Preserve—backcountry access and remote property reference</li>
                        <li>• El Capitan Reservoir (nearby)—eastern rural property reference</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Traffic Patterns & Service Timing</h3>
                    <p className="text-gray-700 mb-4">
                      Lakeside's rural character and I-8 commuter traffic affect trash removal Lakeside timing differently than urban areas. Our dispatch team actively monitors East County traffic patterns and coordinates with you to schedule service windows that minimize travel time while respecting ranch and farm operations. We've developed specific timing protocols for different Lakeside areas and property types:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      <li><strong>Weekday commute hours (7-9 AM, 4-6 PM):</strong> I-8 freeway congestion affects our arrival times from central San Diego. Mapleview Street and Woodside Avenue experience school traffic morning and afternoon. For time-sensitive jobs, we recommend mid-morning (9 AM-12 PM) or early afternoon (1-3 PM) windows when roads are clear and we can navigate efficiently to rural properties.</li>
                      <li><strong>Ranch and farm operations:</strong> Working properties require coordination around feeding schedules, livestock movement, and agricultural activities. We schedule barn cleanouts and equipment removal during property owner availability, typically mid-morning after morning chores or early afternoon before evening routines. Our team understands working around animals and farm operations.</li>
                      <li><strong>Weekend access (Sat-Sun):</strong> Lake Jennings recreation traffic increases significantly on weekends, particularly during fishing season and summer months. Properties near the lake or along access roads may experience increased traffic and parking challenges. We offer early morning weekend service (7-9 AM) for waterfront properties before recreation crowds arrive.</li>
                      <li><strong>Remote property coordination:</strong> Backcountry properties off Wildcat Canyon Road or in Moreno Valley require advance planning for access. Some private roads need gate codes, others require property owner escort. We coordinate detailed access instructions 24 hours before service to ensure our crew can navigate efficiently to remote locations without delays.</li>
                    </ul>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">East County Weather & Seasonal Considerations</h3>
                    <p className="text-gray-700 mb-6">
                      Lakeside's inland East County location brings hotter summers and occasional winter rainfall that impact junk removal operations. Summer temperatures (June-September) regularly exceed 90 degrees, requiring early morning service windows (6-10 AM) for large outdoor cleanouts to protect both crew efficiency and prevent heat damage to items being transported. Our team starts ranch and barn cleanouts at first light during extreme heat periods, completing physical labor before midday temperatures peak. Winter rains (December-February) can make unpaved driveways and ranch roads temporarily impassable, requiring schedule flexibility when storms hit. Properties on hillside lots or with long dirt access roads may need 24-48 hour drying periods after significant rainfall before our trucks can safely navigate. We monitor weather forecasts closely and coordinate proactive rescheduling with property owners when conditions threaten access. Fall fire season (September-November) also brings increased debris removal as properties complete defensible space clearing and vegetation management, creating peak demand periods for our brush and yard waste hauling services.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in Lakeside</h3>
                    <p className="text-gray-700 mb-4">
                      Our Lakeside junk removal service handles the unique mix of items common to rural property living—from agricultural equipment to multi-acre yard debris to ranch building cleanouts. We remove everything from single items to complete multi-structure estate cleanouts:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Furniture & Household Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Large family home <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">furniture</a> and bedroom sets</li>
                          <li>• Outdoor patio furniture and weather-damaged pieces</li>
                          <li>• Garage storage units, workbenches, tool cabinets</li>
                          <li>• Estate cleanout contents from multi-generational homes</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances & Equipment</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Refrigerators, freezers, washers, dryers</a> from home renovations</li>
                          <li>• Workshop equipment, power tools, machinery</li>
                          <li>• RV appliances, boat equipment, recreational gear</li>
                          <li>• Water heaters, HVAC units, well pumps</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Ranch & Agricultural Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Barn cleanouts and livestock facility debris</li>
                          <li>• Fencing materials, gates, posts from property maintenance</li>
                          <li>• Feed storage equipment, water troughs, ranch supplies</li>
                          <li>• Agricultural vehicles, trailers, equipment disposal</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Yard Debris & Outdoor Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Tree trimming debris and brush clearing materials</li>
                          <li>• Fire safety defensible space vegetation removal</li>
                          <li>• Landscaping waste from multi-acre property maintenance</li>
                          <li>• Shed <a href="/cleanout-services-san-diego" className="text-blue-600 hover:underline">cleanouts</a> and outdoor storage building contents</li>
                        </ul>
                      </div>
                    </div>

                    {/* How Our Service Works */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">How Our Lakeside Junk Removal Service Works</h3>
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <ol className="space-y-3 text-gray-700">
                        <li><strong>1. Contact Us:</strong> Call (619) 750-0114 or book online. Describe what you need removed and your Lakeside location. For rural properties, provide access details like gate codes or dirt road conditions. We'll provide estimated pricing based on volume and schedule your service window.</li>
                        <li><strong>2. Same-Day Scheduling Available:</strong> Call before noon for <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">same-day</a> junk pickup Lakeside service throughout East County rural areas. For remote properties or large ranch cleanouts, we recommend scheduling 24-48 hours ahead to coordinate access and ensure appropriate equipment.</li>
                        <li><strong>3. We Arrive & Assess:</strong> Our uniformed crew arrives in clearly marked trucks during your scheduled window. We assess items for removal and provide a final quote before starting work—no hidden fees or surprises. For large properties, we walk the entire site to understand full scope.</li>
                        <li><strong>4. We Load & Haul Everything:</strong> Our team does all lifting, loading, and hauling. We protect floors and doorways, navigate barn access and ranch property challenges, and complete removal efficiently. You simply point—we handle the rest, including coordination around livestock and farm operations.</li>
                        <li><strong>5. Eco-Friendly Disposal:</strong> We sort items for donation, recycling, and responsible disposal. Usable furniture goes to local charities, agricultural materials to proper facilities, and recyclables to appropriate centers. Only true trash to landfill as last resort.</li>
                        <li><strong>6. Clean Sweep & Payment:</strong> We sweep the area clean after removal and collect payment. Large property cleanouts may take several hours depending on volume and property access, but most standard jobs are completed in under three hours from arrival to departure.</li>
                      </ol>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Cleaners for Lakeside Junk Removal</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Rural Property Expertise:</strong> We navigate Lakeside's unpaved roads, long driveways, and multi-acre estates with specialized equipment. Our crews have completed thousands of East County junk removal jobs and understand the specific challenges of ranch properties, barn access, and agricultural facilities. We coordinate with livestock operations, work around farm schedules, and complete jobs efficiently even on Lakeside's most remote properties.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Same-Day Service Available:</strong> Call before noon for same-day junk removal throughout Lakeside and East County. Our dispatch team actively monitors rural access conditions and weather patterns, scheduling arrival windows that work around agricultural operations, ensuring reliable service even during busy harvest or seasonal periods.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> No hidden fees, no surprises. Upfront quotes based on volume with all labor, hauling, and disposal included. Remote property access doesn't change our rates—you pay for volume removed, not distance or difficulty. Most Lakeside jobs range from half-truck to full-truck loads with clear pricing tiers communicated before work begins.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Insured:</strong> Fully licensed California junk removal company with comprehensive liability insurance. We carry proper coverage for rural property access, including protection for long driveways, barn structures, and ranch facilities that require careful navigation of agricultural equipment and livestock areas.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Lakeside"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Lakeside"
          contextParagraph="Large property cleanouts and ranch debris removal throughout Lakeside—from Riverview to Eucalyptus Hills—all use the same transparent pricing. No hidden fees, same-day service available."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Lakeside" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Junk Removal Lakeside"
          description="Get answers to common questions about our junk removal Lakeside services, pricing, and same-day availability."
          faqs={lakesideFAQs}
          ctaTitle="Still Have Questions About Lakeside Junk Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our junk removal Lakeside services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related East County Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/construction-debris-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
                <p className="text-gray-600">Ranch improvements and large property construction cleanup services</p>
              </a>
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
                <p className="text-gray-600">Multi-generational rural properties and inherited ranch estate transitions</p>
              </a>
              <a href="/furniture-disposal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Large family home and ranch property furniture disposal throughout East County</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </>
  );
}
