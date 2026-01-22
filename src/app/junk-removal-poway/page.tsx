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
  title: 'Poway Junk Removal | Ranch Property Specialists | (619) 750-0114',
  description: 'Poway ranch property junk removal for 4S Ranch, Stone Ridge, equestrian estates. Barn cleanouts, large lots. Call (619) 750-0114',
  keywords: [
    'Poway junk removal',
    'junk hauling Poway',
    'junk pickup Poway',
    'trash removal Poway',
    'Poway San Diego junk removal',
    'ranch junk removal'
  ],
  openGraph: {
    title: 'Poway Junk Removal | Ranch & Family Home Specialists | Same-Day Service',
    description: 'Professional Poway junk removal for ranches, family homes, business parks. Large property specialists with eco-friendly service. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-poway',
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Poway Junk Removal - Severin Cleaners'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poway Junk Removal | Ranch & Family Home Specialists | Same-Day Service',
    description: 'Professional Poway junk removal for ranches, family homes, business parks. Large property specialists with eco-friendly service. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-poway',
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
    question: "How much does junk removal cost in Poway?",
    answer: "Our Poway junk removal pricing is transparent and upfront with no hidden fees. We offer special rates for ranch properties, large estates, and volume discounts for multi-acre cleanouts:"
  },
  {
    question: "Do you handle junk hauling for large ranch or equestrian properties?",
    answer: "Yes, our junk hauling Poway service specializes in ranch and equestrian properties throughout Poway's rural areas. We handle barn cleanouts, arena maintenance debris, fence removal, and agricultural equipment disposal. Our team is experienced with multi-acre properties and understands the unique needs of horse facilities."
  },
  {
    question: "Can you provide same-day junk pickup in Poway?",
    answer: "Absolutely. We offer same-day junk pickup Poway service for urgent needs throughout all Poway neighborhoods, from Old Poway Village to Green Valley. Our local team can respond quickly for family emergencies, ranch property issues, or time-sensitive business cleanouts."
  },
  {
    question: "Do you work with Poway Business Park offices and commercial properties?",
    answer: "Yes, our trash removal Poway service includes comprehensive commercial support for Poway Business Park and local businesses. We provide office cleanouts, warehouse clearing, retail renovation debris removal, and regular commercial waste management with flexible scheduling to minimize business disruption."
  },
  {
    question: "Are your junk removal services eco-friendly in Poway?",
    answer: "Absolutely. Our Poway San Diego junk removal prioritizes environmental responsibility through comprehensive recycling, donation programs, and disposal methods that comply with all local regulations."
  }
];

export default function JunkRemovalPowayPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Poway",
    serviceName: "Junk Removal",
    description: "Professional Poway junk removal for ranches, family homes, business parks. Large property specialists with eco-friendly service.",
    url: "https://severincleaners.com/junk-removal-poway",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Poway Junk Removal", url: "https://severincleaners.com/junk-removal-poway" },
  ]);

  const faqSchema = generateFAQSchema(powayFAQs);

  // Remove @context from individual schemas since they'll be in @graph
  const { "@context": _serviceContext, ...serviceSchemaWithoutContext } = serviceSchema;
  const { "@context": _breadcrumbContext, ...breadcrumbSchemaWithoutContext } = breadcrumbSchema;
  const { "@context": _faqContext, ...faqSchemaWithoutContext } = faqSchema;

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchemaWithoutContext, breadcrumbSchemaWithoutContext, faqSchemaWithoutContext],
  };

  const nearbyLocations = [
    { name: "Rancho Santa Fe", slug: "junk-removal-rancho-santa-fe" },
    { name: "Escondido", slug: "junk-removal-escondido" },
    { name: "Carmel Valley", slug: "junk-removal-carmel-valley" },
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
                #1 Poway Junk Removal Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Poway Junk Removal
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
                      Professional Junk Hauling Poway – The City in the Country
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      Poway junk removal serves a unique North County community known as "The City in the Country." From multi-acre ranch properties in 4S Ranch to family neighborhoods near Lake Poway, our junk hauling Poway team handles the distinctive challenges of this sprawling 39-square-mile city. We provide same-day trash removal Poway for large estates, equestrian facilities, and suburban family homes throughout this diverse community with transparent pricing and eco-friendly disposal.
                    </p>

                    <p className="text-gray-700 mb-6">
                      Our Poway operation is uniquely equipped to handle properties that range from half-acre family lots to multi-acre ranch estates. We understand that Poway San Diego junk removal requires specialized equipment for long driveways, gated properties, and rural access situations that typical haulers can't accommodate. Whether you're clearing barn debris from an equestrian property in Stone Ridge, removing accumulated storage from a three-car garage in Green Valley, or handling a complete estate cleanout in Twin Peaks, our team brings the capacity and experience Poway's large properties demand.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Poway Neighborhoods We Serve</h3>
                    <p className="text-gray-700 mb-4">
                      Our junk removal Poway service covers every corner of this expansive North County city, from historic Old Poway Village to modern developments bordering Rancho Bernardo. We've completed thousands of junk removal jobs throughout Poway's diverse neighborhoods, each with unique property characteristics that inform our service approach:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        <li><strong>Old Poway Village:</strong> Historic downtown area with vintage homes, antique shops, and community events requiring careful scheduling</li>
                        <li><strong>Green Valley:</strong> Established family neighborhoods with mature trees, three-car garages, and extensive storage accumulation</li>
                        <li><strong>Twin Peaks:</strong> Hillside homes with canyon views, challenging driveway access, and multi-level property layouts</li>
                        <li><strong>4S Ranch:</strong> Newer developments with HOA regulations, modern family homes, and garage organization needs</li>
                      </ul>
                      <ul className="space-y-2">
                        <li><strong>Stone Ridge:</strong> Premium properties on larger lots, equestrian estates, and ranch-style homes with barn structures</li>
                        <li><strong>Bridlewood:</strong> Family community near Lake Poway with recreational equipment storage and seasonal cleanout needs</li>
                        <li><strong>Garden Road Area:</strong> Agricultural zone with ranch properties, livestock facilities, and rural junk removal requirements</li>
                        <li><strong>Poway Business Park:</strong> Commercial corridor requiring after-hours coordination and business cleanout services</li>
                      </ul>
                    </div>

                    {/* Major Streets */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Key Streets & Access</h3>
                    <p className="text-gray-700 mb-4">
                      Our Poway San Diego junk removal team knows every major road and rural route in this sprawling city. This local expertise matters when navigating Poway's mix of suburban streets and rural roads—winding hillside approaches, long private driveways, equestrian crossings, and properties set back from main roads. We plan each junk pickup Poway job with detailed route mapping to ensure our trucks can access your property efficiently:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      <li>• <strong>Pomerado Road:</strong> Main north-south corridor connecting to I-15 and Rancho Bernardo</li>
                      <li>• <strong>Poway Road:</strong> Central east-west route through downtown and residential areas</li>
                      <li>• <strong>Espola Road:</strong> Rural northern route with ranch properties and agricultural access</li>
                      <li>• <strong>Community Road:</strong> Lake Poway access with recreational equipment and seasonal traffic</li>
                      <li>• <strong>Highland Valley Road:</strong> Hillside connector with steep grades and canyon properties</li>
                      <li>• <strong>Garden Road:</strong> Equestrian corridor with horse facilities and barn structures</li>
                      <li>• <strong>Rancho Bernardo Road:</strong> Southern boundary with mixed residential and commercial</li>
                      <li>• <strong>Twin Peaks Road:</strong> Hillside neighborhoods with challenging driveway approaches</li>
                    </ul>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Poway Landmarks</h3>
                    <p className="text-gray-700 mb-4">
                      We provide junk removal Poway service near all major landmarks throughout this extensive city. These familiar reference points help us navigate quickly to your property and provide accurate arrival time estimates. Our crews use local landmarks for efficient routing throughout this sprawling community where properties can be miles apart:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• Lake Poway Recreation Area—north Poway outdoor recreation hub</li>
                        <li>• Old Poway Park & Museum—historic downtown landmark and event venue</li>
                        <li>• Blue Sky Ecological Reserve—wilderness trailhead and open space preserve</li>
                        <li>• Poway Center for the Performing Arts—central community cultural facility</li>
                        <li>• Twin Peaks Plaza—shopping center serving hillside neighborhoods</li>
                        <li>• Lake Poway Sports Complex—athletic fields and recreation facilities</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Poway Business Park—commercial district off Pomerado Road</li>
                        <li>• Stone Brewing World Bistro—craft brewery destination landmark</li>
                        <li>• Iron Mountain Trailhead—popular hiking access point and parking area</li>
                        <li>• Poway High School—central community anchor and event location</li>
                        <li>• Poway Community Park—sports fields and family recreation area</li>
                        <li>• 4S Commons—newer shopping center serving eastern developments</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Traffic & Service Timing</h3>
                    <p className="text-gray-700 mb-4">
                      Poway's suburban layout and I-15 commuter traffic create predictable congestion patterns that affect junk hauling Poway timing. Our dispatch team actively monitors traffic conditions and coordinates with you to schedule service windows that work around commute hours and maximize efficiency:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      <li><strong>Weekday commute hours (7-9 AM, 4-6 PM):</strong> Pomerado Road and Rancho Bernardo Road experience heavy I-15 commuter traffic as workers travel to/from San Diego and North County employment centers. We schedule early morning (6 AM start) or mid-day (10 AM-3 PM) service windows to avoid these peak periods, particularly for properties near freeway access points.</li>
                      <li><strong>Weekend family activity (Sat-Sun 9 AM-5 PM):</strong> Lake Poway, Old Poway Park, and hiking trailheads create recreational traffic on Community Road, Espola Road, and Highland Valley Road. For properties near these attractions, we recommend Sunday evening or weekday scheduling when trail parking lots and park facilities are less congested.</li>
                      <li><strong>School schedule impacts:</strong> Poway Unified School District operates on traditional calendar with concentrated September start and June finish. Back-to-school and summer transition periods create demand surges for garage organization and storage cleanouts. Book 2-3 weeks ahead during August-September and May-June for best availability.</li>
                      <li><strong>Rural property access:</strong> Ranch properties off Garden Road, Espola Road, and Highland Valley Road often have private driveways exceeding quarter-mile length. We coordinate advance arrival notifications and plan extra time for rural access. Equestrian properties require special coordination to avoid disturbing horses during feeding times (typically 6-8 AM and 4-6 PM).</li>
                    </ul>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Inland Climate Considerations</h3>
                    <p className="text-gray-700 mb-6">
                      Poway's inland location creates warmer, drier conditions compared to coastal San Diego neighborhoods. Summer temperatures (June-September) regularly exceed 85-90°F, making early morning or late afternoon scheduling preferable for both crew efficiency and client comfort during property walkthroughs. The warmer climate accelerates deterioration of outdoor storage items—sun-damaged patio furniture, heat-warped plastics, and dried-out wooden structures accumulate faster than in coastal areas, creating regular junk removal needs. Winter months (December-February) bring occasional heavy rainfall that can make unpaved rural driveways temporarily inaccessible, requiring schedule flexibility for ranch properties. Poway's dry heat also creates year-round fire season awareness—we prioritize rapid removal of accumulated brush, dead vegetation, and fire hazard materials to help homeowners maintain defensible space around properties, particularly in hillside and canyon interface areas near Blue Sky Reserve and Iron Mountain.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in Poway</h3>
                    <p className="text-gray-700 mb-4">
                      Our Poway junk removal service handles the diverse mix of items common to this community's ranch properties, family homes, and equestrian facilities. We remove everything from single furniture pieces to complete multi-acre estate cleanouts:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Furniture & Household</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">Sofas, sectionals, couches</a> from family room upgrades</li>
                          <li>• <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">Mattresses</a>, bed frames, bedroom furniture sets</li>
                          <li>• Dining tables, chairs, china cabinets for downsizing</li>
                          <li>• Desks, office furniture, home workspace equipment</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances & Electronics</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Refrigerators, freezers, washers, dryers</a> from upgrades</li>
                          <li>• Dishwashers, stoves, microwaves during remodels</li>
                          <li>• TVs, computers, electronics from tech updates</li>
                          <li>• Exercise equipment, treadmills, home gym gear</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Ranch & Outdoor Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Barn equipment, tack, riding supplies no longer needed</li>
                          <li>• Fencing materials, posts, wire from property updates</li>
                          <li>• Patio furniture, BBQ grills, outdoor entertaining equipment</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs and spas</a> from backyard renovations</li>
                          <li>• <a href="/piano-removal-san-diego" className="text-blue-600 hover:underline">Pianos and heavy instruments</a> from estate sales</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Cleanouts & Debris</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">Estate cleanouts</a> for multi-generation family properties</li>
                          <li>• Garage and storage shed complete clearances</li>
                          <li>• <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">Construction debris</a> from home additions and remodels</li>
                          <li>• Yard waste, tree trimmings, landscaping materials</li>
                        </ul>
                      </div>
                    </div>

                    {/* How Our Service Works */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">How Our Poway Junk Removal Service Works</h3>
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <ol className="space-y-3 text-gray-700">
                        <li><strong>1. Contact Us:</strong> Call (619) 750-0114 or book online. Describe what you need removed and your Poway location. We'll provide estimated pricing based on volume and schedule your service window.</li>
                        <li><strong>2. Same-Day Scheduling Available:</strong> Call before noon for same-day junk pickup Poway service. We coordinate arrival times around your schedule and property access requirements, including gate codes and livestock considerations for ranch properties.</li>
                        <li><strong>3. We Arrive & Assess:</strong> Our uniformed crew arrives in clearly marked trucks during your scheduled window. We assess items for removal and provide a final quote before starting work—no hidden fees or surprises.</li>
                        <li><strong>4. We Load & Haul Everything:</strong> Our team does all lifting, loading, and hauling. We protect floors and doorways, navigate long driveways and multi-level properties, and complete removal efficiently. You simply point—we handle the rest.</li>
                        <li><strong>5. Eco-Friendly Disposal:</strong> We sort items for donation, recycling, and responsible disposal. Usable furniture goes to local charities, recyclables to proper facilities, and only true trash to landfill as last resort.</li>
                        <li><strong>6. Clean Sweep & Payment:</strong> We sweep the area clean after removal and collect payment. Most jobs are completed in under two hours from arrival to departure.</li>
                      </ol>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Cleaners for Poway Junk Removal</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Large Property Specialists:</strong> We handle Poway's unique property types with specialized equipment and expertise. From multi-acre ranch estates to hillside homes with long driveways, our team has completed thousands of Poway junk removal jobs. We navigate gated properties, coordinate around livestock and horses, and work efficiently on properties where typical haulers struggle with access and capacity.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Same-Day Service Available:</strong> Call before noon for same-day junk removal throughout Poway and surrounding North County areas. Our dispatch team coordinates arrival windows that work around your schedule, ensuring reliable service even for urgent ranch maintenance or time-sensitive estate cleanouts.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> No hidden fees, no surprises. Upfront quotes based on volume with all labor, hauling, and disposal included. Rural access and long driveways don't change our rates—you pay for volume removed. Most Poway jobs range from half-truck to full-truck loads with clear pricing communicated before work begins.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Insured:</strong> Fully licensed California junk removal company with comprehensive liability insurance. We carry proper coverage for large property access, including protection for navigating private drives, working around equestrian facilities, and handling the unique requirements of Poway's ranch properties and family estates.</span>
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
          contextParagraph="Ranch property cleanouts and family home clearances throughout Poway—from 4S Ranch to Old Poway Village—all use the same transparent pricing. No hidden fees, same-day service available."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Poway" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Junk Removal Poway"
          description="Get answers to common questions about our junk removal Poway services, pricing, and same-day availability."
          faqs={powayFAQs}
          ctaTitle="Still Have Questions About Poway Junk Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our junk removal Poway services, provide detailed quotes, or schedule your same-day pickup."
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
