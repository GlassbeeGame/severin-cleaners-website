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
  title: 'Rancho Santa Fe Junk Removal | Luxury Estate Experts | (619) 750-0114',
  description: 'Rancho Santa Fe junk removal for luxury estates. Discreet, professional service. Licensed & insured. (619) 750-0114',
  keywords: [
    'Rancho Santa Fe junk removal',
    'junk hauling Rancho Santa Fe',
    'junk pickup Rancho Santa Fe',
    'trash removal Rancho Santa Fe',
    'Rancho Santa Fe San Diego junk removal'
  ],
  openGraph: {
    title: 'Rancho Santa Fe Junk Removal | Luxury Estate Specialists',
    description: 'Professional Rancho Santa Fe junk removal for luxury estates. Discreet service, white-glove handling. Licensed & insured. Call (619) 750-0114!',
    url: 'https://severincleaners.com/junk-removal-rancho-santa-fe',
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Rancho Santa Fe Junk Removal - Severin Cleaners'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rancho Santa Fe Junk Removal | Luxury Estate Specialists',
    description: 'Professional Rancho Santa Fe junk removal for luxury estates. Discreet service, white-glove handling. Licensed & insured. Call (619) 750-0114!',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-rancho-santa-fe',
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
    'geo.placename': 'Rancho Santa Fe',
    'geo.position': '33.0228;-117.2028',
    'ICBM': '33.0228, -117.2028',
  },
};

const ranchoSantaFeFAQs = [
  {
    question: "Do you service all areas of Rancho Santa Fe including gated communities?",
    answer: "Yes, our <strong>Rancho Santa Fe junk removal</strong> service covers all areas including The Covenant, Fairbanks Ranch, The Bridges, and other exclusive gated communities. We're pre-approved vendors familiar with gate access procedures and HOA requirements throughout Rancho Santa Fe."
  },
  {
    question: "How much does junk removal cost in Rancho Santa Fe?",
    answer: "Our <strong>Rancho Santa Fe junk removal</strong> pricing is transparent and based on trailer volume:"
  },
  {
    question: "Can you remove heavy items like couches, appliances, and large outdoor equipment in Rancho Santa Fe?",
    answer: "Absolutely! Our <strong>junk hauling Rancho Santa Fe</strong> team specializes in removing heavy and oversized items from luxury estates and equestrian properties. We safely handle:"
  },
  {
    question: "Do you provide same-day junk hauling in Rancho Santa Fe?",
    answer: "Yes! We offer same-day <strong>junk pickup Rancho Santa Fe</strong> service when you call before 2 PM. Our team understands the urgency often required for estate management, property staging, last-minute renovations, and HOA compliance issues. We coordinate with gate security, property managers, and household staff to provide discreet, professional service that respects your privacy and your community's standards throughout The Covenant, Fairbanks Ranch, and all Rancho Santa Fe gated communities."
  },
  {
    question: "What types of junk do you not remove?",
    answer: "We handle all standard household items, furniture, appliances, construction debris, yard waste, equestrian property materials, and more in accordance with local regulations. If you're unsure about a specific item, please call us at (619) 750-0114 and we can discuss it — there are various factors that can affect pricing and service options for luxury estates and large properties."
  },
  {
    question: "Are you licensed and insured for junk removal in San Diego County?",
    answer: "Yes! Severin Cleaners is fully licensed and insured to provide <strong>Rancho Santa Fe San Diego junk removal</strong> services throughout all of San Diego County, including exclusive communities like Rancho Santa Fe. We carry comprehensive liability insurance specifically covering luxury estates, valuable property contents, and equestrian facilities. Our <strong>trash removal Rancho Santa Fe</strong> service is pre-approved by multiple HOAs and provides all necessary documentation for gated community access, property management requirements, and compliance with local disposal regulations."
  }
];

export default function JunkRemovalRanchoSantaFePage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Rancho Santa Fe",
    serviceName: "Junk Removal",
    description: "Professional Rancho Santa Fe junk removal for luxury estates. Discreet service, white-glove handling. Licensed & insured.",
    url: "https://severincleaners.com/junk-removal-rancho-santa-fe",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Rancho Santa Fe Junk Removal", url: "https://severincleaners.com/junk-removal-rancho-santa-fe" },
  ]);

  const faqSchema = generateFAQSchema(ranchoSantaFeFAQs);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema, faqSchema],
  };

  const nearbyLocations = [
    { name: "Del Mar", slug: "junk-removal-del-mar" },
    { name: "Escondido", slug: "junk-removal-escondido" },
    { name: "Poway", slug: "junk-removal-poway" },
    { name: "Vista", slug: "junk-removal-vista" },
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
                Luxury Estate Junk Removal Specialists
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Rancho Santa Fe Junk Removal
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                The Covenant • Fairbanks Ranch • Luxury Estate Cleanouts
              </p>

              <p className="text-lg mb-8">
                ✓ <a href="/same-day-junk-removal-san-diego" className="text-white hover:underline">Same-Day Service</a> Available ✓ Licensed & Insured ✓ Discreet & Professional
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
                      Professional Rancho Santa Fe Junk Removal – Del Dios Highway to The Covenant
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      <strong>Rancho Santa Fe junk removal</strong> serves one of Southern California's most exclusive communities. Our <strong>junk hauling Rancho Santa Fe</strong> team provides discreet, professional service for luxury estates, gated properties, and multi-acre compounds throughout The Covenant, Fairbanks Ranch, and surrounding areas. We understand the unique requirements of high-end properties and deliver white-glove <strong>trash removal Rancho Santa Fe</strong> with complete respect for privacy and property.
                    </p>

                    <p className="text-gray-700 mb-6">
                      Rancho Santa Fe's 6,200-acre Covenant community represents one of the nation's premier luxury residential areas, where estate properties regularly span 2-10 acres and homes valued at $3-50 million require specialized junk removal services. Our <strong>Rancho Santa Fe San Diego junk removal</strong> operation is specifically structured to meet the exacting standards of this affluent community. We coordinate with private gate security, respect rigorous HOA requirements, and maintain the level of professionalism that Rancho Santa Fe property owners expect from service providers accessing their exclusive estates.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Rancho Santa Fe Communities We Serve</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>junk pickup Rancho Santa Fe</strong> service covers all of RSF's distinct communities. Each neighborhood presents unique characteristics—from sprawling Covenant estates with separate guest houses and pool complexes to gated Fairbanks Ranch properties with strict architectural review standards. We've successfully completed junk removal projects throughout every Rancho Santa Fe enclave:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        <li><strong>The Covenant:</strong> 6,200-acre exclusive community with multi-acre estates, guest houses, and complex property layouts requiring comprehensive junk removal coordination</li>
                        <li><strong>Fairbanks Ranch:</strong> Gated luxury estates with 24-hour guard security, requiring advance clearance and professional service protocols</li>
                        <li><strong>The Bridges:</strong> Golf course community with course-view properties and golf cart access considerations for junk removal logistics</li>
                        <li><strong>Rancho Valencia:</strong> Resort area estates near the five-star resort, requiring discrete service that maintains neighborhood prestige</li>
                      </ul>
                      <ul className="space-y-2">
                        <li><strong>Del Rayo Estates:</strong> Hilltop properties with panoramic views and steep driveway access requiring specialized hauling equipment</li>
                        <li><strong>Crosby Estates:</strong> Historic luxury homes with heritage features requiring careful handling during renovation debris removal</li>
                        <li><strong>RSF Village:</strong> Downtown shopping district with adjacent luxury residential properties and pedestrian-area access considerations</li>
                        <li><strong>Cielo:</strong> Gated enclave with exclusive access protocols and coordinated scheduling for all service providers</li>
                      </ul>
                    </div>

                    {/* Major Streets */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Key Roads & Access</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>Rancho Santa Fe San Diego junk removal</strong> team navigates all major routes throughout this sprawling community. Unlike urban neighborhoods with grid patterns, Rancho Santa Fe features winding roads, private drives, and gated access points that require local knowledge and advance planning for efficient junk removal service:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      <li>• <strong>Del Dios Highway (S6):</strong> Main west access from I-5 corridor, primary commercial truck route</li>
                      <li>• <strong>Via De La Valle:</strong> South corridor to I-5 and Del Mar, main estate access route</li>
                      <li>• <strong>Paseo Delicias:</strong> Village shopping area with restricted commercial vehicle hours</li>
                      <li>• <strong>La Granada:</strong> Covenant main road connecting major estate clusters</li>
                      <li>• <strong>Linea Del Cielo:</strong> Hilltop estates with elevation changes and winding access</li>
                      <li>• <strong>El Camino Del Norte:</strong> North properties connecting to San Dieguito areas</li>
                      <li>• <strong>San Dieguito Road:</strong> East access to inland Covenant properties</li>
                      <li>• <strong>Avenida De Acacias:</strong> Residential corridor with tree-lined estate driveways</li>
                    </ul>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Rancho Santa Fe Landmarks</h3>
                    <p className="text-gray-700 mb-4">
                      We provide <strong>junk pickup Rancho Santa Fe</strong> service near all community landmarks. These reference points help our crews navigate efficiently to multi-acre estates where street addresses and GPS coordinates often lead only to gated entrances, not actual service locations:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• Rancho Santa Fe Golf Club—historic club serving estate community</li>
                        <li>• The Inn at Rancho Santa Fe—historic luxury resort landmark</li>
                        <li>• RSF Village Shopping District—community commercial center</li>
                        <li>• Roger Rowe School—prestigious K-8 private school</li>
                        <li>• RSF Country Day School—exclusive prep school campus</li>
                        <li>• Helen Woodward Animal Center—regional equestrian and animal facility</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Rancho Valencia Resort & Spa—five-star luxury resort</li>
                        <li>• The Bridges Golf Club—exclusive member golf facility</li>
                        <li>• Morgan Run Resort—resort community golf course</li>
                        <li>• San Dieguito River Park—ecological preserve bordering estates</li>
                        <li>• Lake Hodges—reservoir recreation area and property boundary</li>
                        <li>• RSF Association Community Center—HOA headquarters and event venue</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Service Timing & Scheduling</h3>
                    <p className="text-gray-700 mb-4">
                      Rancho Santa Fe's low-traffic environment allows flexible scheduling, but specific timing considerations ensure our <strong>junk hauling Rancho Santa Fe</strong> service integrates seamlessly with your estate operations and community protocols:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      <li><strong>School hours (7:30-8:30 AM, 2:30-3:30 PM):</strong> We coordinate around Roger Rowe and Country Day School traffic on Paseo Delicias to avoid drop-off and pickup congestion. Many estate owners prefer mid-morning (9 AM-12 PM) service windows when roads are clear and household staff can coordinate access efficiently.</li>
                      <li><strong>Weekend service preferred:</strong> Many estates request Saturday service to minimize disruption during the work week when household staff maintain regular schedules. Weekend junk removal allows property owners to supervise personally when desired, and eliminates coordination challenges with weekday estate management activities.</li>
                      <li><strong>Gated community protocols:</strong> We coordinate 24-48 hours in advance with gate security, HOAs, and property managers for seamless access. Our crews carry all necessary clearance documentation and contact information, ensuring smooth entry to Fairbanks Ranch, The Bridges, and other secured communities without delays or access complications.</li>
                      <li><strong>Event coordination:</strong> We work around polo matches, fundraisers, and private events at estates and country clubs. Rancho Santa Fe's active social calendar includes numerous charity galas, golf tournaments, and private celebrations. We schedule junk removal services to avoid event preparation periods and coordinate with estate managers to ensure our work never conflicts with social functions.</li>
                    </ul>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Climate Considerations</h3>
                    <p className="text-gray-700 mb-6">
                      Rancho Santa Fe's Mediterranean climate means hot, dry summers (85-95°F) and mild winters with minimal rainfall. Santa Ana wind events (October-February) create fire-hazard conditions requiring defensible space clearance around estate structures. We schedule large estate cleanouts during cooler morning hours (6-10 AM) in summer months when temperatures are more comfortable for physical work, and help property owners maintain brush clearance requirements year-round to comply with San Diego County fire safety regulations. Our <strong>trash removal Rancho Santa Fe</strong> service includes proper disposal of brush, landscaping debris, and flammable materials that must be cleared from defensible space zones during fire season. Winter rainfall, though limited to 10-12 inches annually, occasionally impacts dirt access roads on larger estates, requiring advance weather monitoring and flexible rescheduling capabilities for remote property access.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove from Rancho Santa Fe Estates</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>Rancho Santa Fe junk removal</strong> service handles the sophisticated mix of items found in luxury estate environments. From <a href="/furniture-removal-san-diego" className="text-blue-600 hover:underline">designer furniture removal</a> and <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">high-end appliance disposal</a> to pool equipment and renovation debris, we remove everything with the care and professionalism that valuable estate property demands. <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">Estate cleanout services</a> and <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">same-day removal</a> available:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Estate Furniture</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/furniture-removal-san-diego" className="text-blue-600 hover:underline">Designer sofas, sectionals</a> from main residences</li>
                          <li>• <a href="/piano-removal-san-diego" className="text-blue-600 hover:underline">Antique furniture, grand pianos</a> requiring specialized handling</li>
                          <li>• Bedroom sets, armoires from guest house cleanouts</li>
                          <li>• Office furniture, libraries from home office renovations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances & Equipment</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Sub-Zero refrigerators</a> and luxury kitchen appliances</li>
                          <li>• Wine cellars, coolers from estate renovations</li>
                          <li>• Commercial-grade appliances from chef kitchens</li>
                          <li>• HVAC units, water heaters, whole-house systems</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Outdoor & Recreation</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Pool equipment, furniture from resort-style pools</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs and spas</a> from outdoor living spaces</li>
                          <li>• Tennis court equipment, court resurfacing debris</li>
                          <li>• Landscape materials, planters, estate garden equipment</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Renovation & Construction</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Kitchen and bath remodel debris from estate upgrades</li>
                          <li>• Flooring, cabinets, counters from luxury renovations</li>
                          <li>• Windows, doors, fixtures from whole-house remodels</li>
                          <li>• Drywall, lumber, materials from guest house additions</li>
                        </ul>
                      </div>
                    </div>

                    {/* How Our Service Works */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">How Our Rancho Santa Fe Estate Service Works</h3>
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <ol className="space-y-3 text-gray-700">
                        <li><strong>1. Initial Consultation:</strong> Call (619) 750-0114 to discuss your estate junk removal needs. For large or complex projects, we offer on-site consultations to assess scope, access requirements, and coordinate with gate security or property managers.</li>
                        <li><strong>2. Gate Clearance Coordination:</strong> We handle all advance coordination with your community's gate security, HOA, or property manager 24-48 hours before arrival, providing necessary documentation and crew information for seamless access.</li>
                        <li><strong>3. Discrete Arrival & Assessment:</strong> Our professional crews arrive in clearly marked trucks during your scheduled window. For estates requiring additional discretion, we can arrange unmarked vehicles. We assess items and provide final pricing before starting work.</li>
                        <li><strong>4. White-Glove Removal:</strong> We carefully remove all items with floor protection, proper equipment for valuable pieces, and respect for your estate's interior finishes. Our crews handle designer furniture, antiques, and luxury items with appropriate care.</li>
                        <li><strong>5. Responsible Disposal & Donation:</strong> High-value items can be coordinated with auction houses or consignment services. Usable items go to appropriate charities, while remaining materials are recycled or properly disposed of.</li>
                        <li><strong>6. Final Walkthrough & Payment:</strong> We complete a final property walkthrough to ensure satisfaction, sweep all areas clean, and process payment on completion.</li>
                      </ol>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Rancho Santa Fe Estate Owners Choose Us</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Discretion & Professionalism:</strong> Uniformed crews, unmarked vehicles available upon request, complete respect for privacy and property. We understand that Rancho Santa Fe estate owners value discretion and expect service providers to maintain professional standards that reflect the community's prestige. Our crews receive specific training in luxury property protocols, including proper communication with household staff, maintaining quiet operations, and respecting the privacy expectations of high-profile residents.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>White-Glove Service:</strong> Careful handling of high-value items, floor protection, minimal disruption to daily operations. Our estate junk removal service includes furniture padding, floor runners for interior protection, and specialized equipment for moving valuable antiques, pianos, and designer pieces. We coordinate timing to minimize impact on household routines and work efficiently to complete projects within agreed timeframes.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Multi-Acre Property Experience:</strong> We navigate large estates, guest houses, pool houses, and multiple structures with ease. Many Rancho Santa Fe properties span 2-10 acres with separate guest residences, casitas, pool pavilions, and detached garages requiring coordinated junk removal. Our crews plan logistics for multi-structure cleanouts, including staging areas and efficient routing to minimize disruption across expansive properties.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Fully Insured:</strong> Comprehensive liability coverage for luxury properties and high-value estates. We carry insurance appropriate for accessing multi-million dollar properties, with coverage limits that protect estate owners from any liability during our junk removal operations. Our bonded crews and proper licensing give Rancho Santa Fe property owners the confidence that they're working with a legitimate, professional service company.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Rancho Santa Fe"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Rancho Santa Fe"
          contextParagraph="Estate cleanouts and luxury property services throughout The Covenant, Fairbanks Ranch, and all Rancho Santa Fe communities use our transparent pricing. For multi-acre estates, call for custom quotes."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Rancho Santa Fe" coverageArea="North County Coastal" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Junk Removal Rancho Santa Fe"
          description="Get answers to common questions about our <strong>junk removal Rancho Santa Fe</strong> services, pricing, and same-day availability."
          faqs={ranchoSantaFeFAQs}
          ctaTitle="Still Have Questions About Rancho Santa Fe Junk Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our <strong>junk removal Rancho Santa Fe</strong> services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related North County Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Designer furniture and antique removal for luxury estates</p>
              </a>
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanout Services</h4>
                <p className="text-gray-600">Complete estate cleanouts with discretion and professionalism</p>
              </a>
              <a href="/construction-debris-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
                <p className="text-gray-600">Luxury home remodel and renovation debris cleanup</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </>
  );
}
