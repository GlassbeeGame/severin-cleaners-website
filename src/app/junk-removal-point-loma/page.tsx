import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import OptimizedGradientHero from "@/components/OptimizedGradientHero";

export const metadata: Metadata = {
  title: 'Point Loma Junk Removal | Military & Coastal Experts | (619) 750-0114',
  description: 'Point Loma junk removal from Naval Base to Sunset Cliffs. Military PCS support. Licensed & insured. (619) 750-0114',
  keywords: [
    'Point Loma junk removal',
    'junk hauling Point Loma',
    'junk pickup Point Loma',
    'trash removal Point Loma',
    'Point Loma San Diego junk removal',
    'military PCS moves'
  ],
  openGraph: {
    title: 'Point Loma Junk Removal | Military & Coastal Specialists',
    description: 'Professional Point Loma junk removal from Naval Base to Sunset Cliffs. Military PCS support. Licensed & insured. Call (619) 750-0114!',
    url: 'https://severincleaners.com/junk-removal-point-loma',
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Point Loma Junk Removal - Severin Cleaners'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Point Loma Junk Removal | Military & Coastal Specialists',
    description: 'Professional Point Loma junk removal from Naval Base to Sunset Cliffs. Military PCS support. Licensed & insured. Call (619) 750-0114!',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-point-loma',
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
    'geo.placename': 'Point Loma',
    'geo.position': '32.7242;-117.2431',
    'ICBM': '32.7242, -117.2431',
  },
};

const pointLomaFAQs = [
  {
    question: "Do you provide junk removal for military PCS moves in Point Loma?",
    answer: "Yes, our <strong>Point Loma junk removal</strong> service specializes in military PCS moves and base housing transitions. We coordinate with Naval Base San Diego housing offices, work within tight PCS timelines, and provide special military discounts for active duty families. Our team understands base housing regulations and inspection requirements."
  },
  {
    question: "How much does junk removal cost in Point Loma?",
    answer: "<strong>Single Item Pickup:</strong> Starting at $100<br /> <strong>1/4 Trailer Load:</strong> $249<br /> <strong>3/8 Trailer Load:</strong> $319<br /> <strong>1/2 Trailer Load:</strong> $349<br /> <strong>5/8 Trailer Load:</strong> $366<br /> <strong>3/4 Trailer Load:</strong> $429<br /> <strong>7/8 Trailer Load:</strong> $462<br /> <strong>Full Trailer Load:</strong> $495"
  },
  {
    question: "Do you handle coastal property cleanouts and storm debris?",
    answer: "Absolutely. Our <strong>trash removal Point Loma</strong> service specializes in coastal property maintenance including storm debris cleanup, salt air corrosion disposal, and weather damage removal. We understand the unique challenges of Sunset Cliffs and oceanfront properties, providing environmentally responsible disposal methods."
  },
  {
    question: "Can you provide same-day junk hauling in Liberty Station or Sunset Cliffs?",
    answer: "Yes, we offer same-day <strong>junk pickup Point Loma</strong> service throughout Liberty Station, Sunset Cliffs, and all Point Loma neighborhoods. Our local team can respond quickly for urgent military moves, storm cleanup, or emergency coastal property needs while maintaining our commitment to quality and environmental responsibility."
  },
  {
    question: "Are your junk removal services eco-friendly and HOA-compliant?",
    answer: "Yes, our <strong>Point Loma San Diego junk removal</strong> prioritizes environmental responsibility and community compliance. We donate usable items, recycle materials, and follow HOA guidelines for Liberty Station and coastal communities. Our service protects Point Loma's beautiful environment while respecting community standards."
  }
];

export default function JunkRemovalPointLomaPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Point Loma",
    serviceName: "Junk Removal",
    description: "Professional Point Loma junk removal from Naval Base to Sunset Cliffs. Military PCS support. Licensed & insured.",
    url: "https://severincleaners.com/junk-removal-point-loma",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Point Loma Junk Removal", url: "https://severincleaners.com/junk-removal-point-loma" },
  ]);

  const faqSchema = generateFAQSchema(pointLomaFAQs);

  const nearbyLocations = [
    { name: "Pacific Beach", slug: "junk-removal-pacific-beach" },
    { name: "La Jolla", slug: "junk-removal-la-jolla" },
    { name: "Clairemont", slug: "junk-removal-clairemont" },
    { name: "Hillcrest", slug: "junk-removal-hillcrest" },
  ];

  return (
    <div className={`${inter.variable} font-sans`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Military & Coastal Junk Removal Specialists
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Point Loma Junk Removal
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Naval Base • Liberty Station • Sunset Cliffs • Military PCS Support
              </p>

              <p className="text-lg mb-8">
                ✓ <a href="/same-day-junk-removal-san-diego" className="text-white hover:underline">Same-Day Service</a> Available ✓ Licensed & Insured ✓ Military Discounts
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
                      Military & Coastal Point Loma Junk Removal Experts
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      <strong>Point Loma junk removal</strong> serves one of San Diego's most unique peninsulas, combining military base housing, historic coastal neighborhoods, and waterfront properties. Our <strong>junk hauling Point Loma</strong> team navigates Naval Base San Diego access protocols, Liberty Station's historic district, and Sunset Cliffs' narrow coastal streets with expertise. We provide same-day <strong>trash removal Point Loma</strong> with special support for military PCS moves, transparent pricing, and eco-friendly disposal throughout the Point Loma peninsula.
                    </p>

                    <p className="text-gray-700 mb-6">
                      Point Loma's geography creates specific challenges for junk removal operations. The peninsula's narrow shape means most properties are within a mile of either the Pacific Ocean or San Diego Bay, exposing outdoor items to constant salt air that accelerates deterioration. Our <strong>Point Loma San Diego junk removal</strong> service has developed specialized expertise in this unique environment—we understand the base housing requirements that military families face during PCS moves, the access challenges of Sunset Cliffs' narrow coastal streets, and the historic property considerations at Liberty Station's converted Naval Training Center. Whether you're clearing base housing before transfer, renovating a Sunset Cliffs home, or managing a Liberty Station property, our team brings the specialized local experience that Point Loma's diverse neighborhoods require.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Point Loma Neighborhoods We Serve</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>junk pickup Point Loma</strong> service covers the entire peninsula, from Naval Base housing to Cabrillo National Monument at the southern tip. Each Point Loma neighborhood presents unique characteristics—base housing requires security clearance coordination, Sunset Cliffs properties need careful coastal access navigation, and Liberty Station combines historic preservation considerations with modern mixed-use development:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        <li><strong>Naval Base San Diego:</strong> Base housing, barracks requiring gate clearance, housing office coordination, and PCS schedule flexibility</li>
                        <li><strong>Liberty Station/NTC:</strong> Historic redevelopment with converted barracks, loft apartments, and cultural facilities</li>
                        <li><strong>Sunset Cliffs:</strong> Coastal bluff properties with spectacular views, narrow street access, and salt-air exposure challenges</li>
                        <li><strong>Wooded Area/Roseville:</strong> Central residential neighborhoods with tree-lined streets and standard access</li>
                        <li><strong>Loma Portal:</strong> Family neighborhoods near schools with residential garage and estate cleanout needs</li>
                      </ul>
                      <ul className="space-y-2">
                        <li><strong>La Playa:</strong> Waterfront, yacht clubs with marina access and upscale coastal property considerations</li>
                        <li><strong>Shelter Island:</strong> Marina, hotels, and waterfront residential properties with marine equipment disposal</li>
                        <li><strong>Harbor Island:</strong> High-rises, marinas with elevator access and parking coordination requirements</li>
                        <li><strong>Point Loma Heights:</strong> Hillside homes overlooking the bay with elevation access considerations</li>
                      </ul>
                    </div>

                    {/* Major Streets */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Key Streets & Base Access</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>Point Loma San Diego junk removal</strong> team knows all access routes throughout this peninsula community. Point Loma's unique geography—a narrow strip of land between Pacific and bay—creates limited through-routes, and our local knowledge ensures efficient navigation regardless of your property location:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      <li>• <strong>Rosecrans Street (CA-209):</strong> Main corridor running peninsula length with peak military commute traffic</li>
                      <li>• <strong>Catalina Boulevard:</strong> Coastal route to Cabrillo Monument with scenic views and winding sections</li>
                      <li>• <strong>Nimitz Boulevard:</strong> Waterfront access along bay side with marina and base connections</li>
                      <li>• <strong>Sports Arena Boulevard:</strong> North entry connecting to I-8 and Midway District</li>
                      <li>• <strong>Voltaire Street:</strong> Commercial area connecting to Ocean Beach with business access</li>
                      <li>• <strong>Sunset Cliffs Boulevard:</strong> Coastal homes along Pacific bluffs with limited parking</li>
                      <li>• <strong>Hill Street:</strong> Central residential corridor through Wooded Area neighborhoods</li>
                      <li>• <strong>Canon Street:</strong> Base housing access requiring gate clearance coordination</li>
                    </ul>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                      <p className="text-sm text-gray-700">
                        <strong>Naval Base Access:</strong> We coordinate with base housing offices for on-base junk removal. Active duty personnel should contact us 48 hours in advance for gate clearance coordination. We provide all necessary crew identification, vehicle registration, and insurance documentation required for base access approval.
                      </p>
                    </div>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Point Loma Landmarks</h3>
                    <p className="text-gray-700 mb-4">
                      We provide <strong>junk pickup Point Loma</strong> service near all community landmarks. These familiar locations help our crews navigate efficiently throughout the peninsula, where local knowledge of neighborhoods and landmark reference points ensures accurate routing and arrival estimates:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• Cabrillo National Monument—southern peninsula landmark and tourist destination</li>
                        <li>• Liberty Station/NTC Promenade—former Naval Training Center, now mixed-use development</li>
                        <li>• Sunset Cliffs Natural Park—dramatic coastal bluffs and surfing destination</li>
                        <li>• Naval Base San Diego—Pacific Fleet homeport, major military installation</li>
                        <li>• Point Loma Nazarene University—hilltop campus with panoramic views</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Shelter Island Yacht Basin—marina and waterfront dining district</li>
                        <li>• Liberty Public Market—converted commissary, food hall landmark</li>
                        <li>• Harbor Island Drive—hotel and marina corridor along bay</li>
                        <li>• Ocean Beach Pier (border)—northern peninsula boundary with OB</li>
                        <li>• Loma Portal Park—central neighborhood recreation area</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Traffic & Service Timing</h3>
                    <p className="text-gray-700 mb-4">
                      Point Loma's unique geography creates specific traffic patterns that affect <strong>junk hauling Point Loma</strong> scheduling. The peninsula's limited access points and large military base generate predictable congestion that our dispatch team actively works around:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      <li><strong>Military Base Commute (6:30-8:30 AM, 3:30-5:30 PM):</strong> Rosecrans Street and Nimitz Boulevard experience heavy base traffic during shift changes as thousands of military and civilian personnel access Naval Base San Diego. We schedule residential junk removal outside these windows, typically arriving 9 AM-3 PM or after 6 PM to ensure efficient access throughout Point Loma neighborhoods without fighting base commute congestion.</li>
                      <li><strong>Sunset Cliffs Recreation Traffic:</strong> Weekends bring surfers and tourists to Sunset Cliffs Boulevard from dawn through sunset. Parking becomes extremely limited along the bluffs, and narrow streets fill with recreation vehicles. Early morning service (6-9 AM) works best for Sunset Cliffs coastal homes, allowing us to complete junk removal before weekend crowds arrive and street parking disappears completely.</li>
                      <li><strong>Liberty Station Events:</strong> Farmers markets every Sunday, concerts during summer months, and community events create parking challenges throughout the Liberty Station district. We coordinate with Liberty Station event calendars and schedule around major gatherings to ensure truck access to properties in the former NTC area. Many Liberty Station residents prefer weekday service to avoid weekend event congestion.</li>
                      <li><strong>Sports Arena Events:</strong> Major concerts and events at Pechanga Arena (former Sports Arena) create significant traffic backups on Sports Arena Boulevard, particularly during evening events. We avoid scheduling Point Loma service during major arena events and monitor event calendars to prevent delays accessing the peninsula's north entry point.</li>
                    </ul>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Coastal Climate Considerations</h3>
                    <p className="text-gray-700 mb-6">
                      Point Loma's coastal position brings persistent marine layer May-August (cool, foggy mornings creating ideal working conditions) and mild year-round temperatures perfect for junk removal operations. However, the peninsula's exposure to both Pacific Ocean and San Diego Bay means double the salt air impact compared to single-coast locations. This accelerates rust on outdoor furniture, corrodes patio equipment, and deteriorates stored items faster than inland neighborhoods experience. We protect sensitive items during transport and schedule around winter storms that occasionally impact Sunset Cliffs coastal access roads. Our <strong>trash removal Point Loma</strong> service frequently handles salt-damaged outdoor items—from corroded patio furniture and rusted BBQ grills to weathered beach equipment that the harsh marine environment has rendered unusable. Many Point Loma residents schedule regular junk removal to clear deteriorating outdoor items before rust and corrosion spread to nearby property elements. The peninsula's wind exposure, particularly along Sunset Cliffs and Cabrillo Point, also means outdoor items take more abuse than sheltered inland locations, creating ongoing junk removal needs for coastal property owners.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in Point Loma</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>Point Loma junk removal</strong> service handles the diverse mix of items found in this unique peninsula community—from military household goods during PCS moves to salt-damaged coastal property items, Liberty Station loft renovations to complete <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanouts</a>. We offer <a href="/furniture-removal-san-diego" className="text-blue-600 hover:underline">furniture removal</a>, <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">appliance disposal</a>, and <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">same-day service</a>:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Furniture & Household</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/furniture-removal-san-diego" className="text-blue-600 hover:underline">Sofas, sectionals, recliners</a> from family homes and PCS moves</li>
                          <li>• Mattresses, bed frames during military relocations</li>
                          <li>• Tables, chairs, dressers from estate cleanouts</li>
                          <li>• <a href="/piano-removal-san-diego" className="text-blue-600 hover:underline">Pianos</a>, desks, bookshelves, cabinets</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances & Electronics</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Refrigerators, washers, dryers</a> from property turnovers</li>
                          <li>• Stoves, dishwashers, microwaves needing replacement</li>
                          <li>• TVs, computers, electronics from tech upgrades</li>
                          <li>• AC units, water heaters, HVAC systems</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Outdoor & Marine Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Patio furniture, grills damaged by salt air exposure</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs and spas</a> from backyard renovations</li>
                          <li>• Marine equipment, kayaks, paddleboards, surfboards</li>
                          <li>• Yard waste, landscaping materials, tree trimming debris</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Military PCS & Cleanouts</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• PCS move excess items not authorized for military moving</li>
                          <li>• Estate & garage cleanouts for entire properties</li>
                          <li>• Construction debris from home renovations and remodels</li>
                          <li>• Storage unit contents and accumulated household items</li>
                        </ul>
                      </div>
                    </div>

                    {/* How Our Service Works */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">How Our Point Loma Service Works</h3>
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <ol className="space-y-3 text-gray-700">
                        <li><strong>1. Contact Us:</strong> Call (619) 750-0114 to discuss your Point Loma junk removal needs. For military base housing, mention your base location for gate clearance coordination. For off-base properties, specify neighborhood for accurate routing.</li>
                        <li><strong>2. Base Clearance Coordination (if needed):</strong> For Naval Base San Diego properties, we coordinate gate access 48 hours in advance, providing necessary documentation to base housing offices. You'll receive confirmation once clearance is approved.</li>
                        <li><strong>3. Traffic-Smart Scheduling:</strong> We schedule arrival times to avoid base commute traffic, Sunset Cliffs weekend crowds, and Liberty Station event congestion. Our dispatch monitors conditions for reliable on-time service.</li>
                        <li><strong>4. Professional Arrival & Assessment:</strong> Our uniformed crew arrives in marked trucks during your window. We assess items, provide final transparent pricing, and begin work immediately upon approval.</li>
                        <li><strong>5. Efficient Loading & Hauling:</strong> We handle all lifting, loading, and removal work. For base housing, we ensure compliance with all base regulations. For coastal properties, we protect against salt-air exposure during transport.</li>
                        <li><strong>6. Responsible Disposal & Payment:</strong> Items go to appropriate destinations—donation, recycling, or proper disposal. We sweep areas clean and collect payment on completion.</li>
                      </ol>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Military Families & Coastal Residents Choose Us</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Military PCS Experience:</strong> We understand base housing requirements and coordinate with housing offices for smooth clearances during PCS moves. Our team knows the specific items military families typically need removed—furniture that won't fit at next duty station, appliances not authorized for military moving, and accumulated household goods that need disposal before final housing inspection. We work within military timelines and understand the urgency of PCS schedules.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Base Access Protocols:</strong> Our crews are experienced with NBSD gate procedures and vehicle inspections. We maintain current vehicle registrations, proper insurance documentation, and crew identification required for base access. We coordinate advance clearance through proper channels and arrive prepared with all necessary documentation to ensure smooth gate entry without delays that waste your valuable time.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Coastal Property Navigation:</strong> We handle Sunset Cliffs narrow streets, Liberty Station historic properties, and waterfront access with skill developed through years of Point Loma service. Our crews know the challenging coastal access points, the neighborhoods with limited parking, and the properties requiring special navigation considerations. We efficiently remove salt-damaged items and understand the accelerated deterioration that peninsula properties experience.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing with Military Discounts:</strong> Active duty military receive special discount pricing on all junk removal services. Our transparent volume-based rates don't change with base traffic or coastal access challenges—you pay for items removed, not time or difficulty. Call for details on current military discount programs available to Naval Base San Diego personnel and their families.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Point Loma"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Point Loma"
          contextParagraph="Military PCS moves and coastal property cleanouts all use the same transparent pricing. Active duty military families receive special discount pricing."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Point Loma" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Junk Removal Point Loma"
          description="Get answers to common questions about our <strong>junk removal Point Loma</strong> services, pricing, and same-day availability."
          faqs={pointLomaFAQs}
          ctaTitle="Still Have Questions About Point Loma Junk Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our <strong>junk removal Point Loma</strong> services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related Point Loma Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Military PCS and household furniture removal for Point Loma</p>
              </a>
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanout Services</h4>
                <p className="text-gray-600">Complete estate and garage cleanouts throughout Point Loma</p>
              </a>
              <a href="/appliance-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal San Diego</h4>
                <p className="text-gray-600">Refrigerators, washers, dryers, and appliance disposal</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
