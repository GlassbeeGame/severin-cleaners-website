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
  title: 'Oceanside Junk Removal | Coastal & Military Friendly | (619) 750-0114',
  description: 'Oceanside junk removal for Camp Pendleton, beach rentals, pier district. Military discounts, PCS moves. (619) 750-0114',
  keywords: [
    'Oceanside junk removal',
    'junk hauling Oceanside',
    'junk pickup Oceanside',
    'trash removal Oceanside',
    'Oceanside San Diego junk removal',
    'Camp Pendleton junk removal'
  ],
  openGraph: {
    title: 'Oceanside Junk Removal | Camp Pendleton & Coastal Property Specialists | Same-Day Service',
    description: 'Professional Oceanside junk removal for Camp Pendleton, coastal properties, vacation rentals. Military discounts available. North County experts. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-oceanside',
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Oceanside Junk Removal - Severin Cleaners'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oceanside Junk Removal | Camp Pendleton & Coastal Property Specialists | Same-Day Service',
    description: 'Professional Oceanside junk removal for Camp Pendleton, coastal properties, vacation rentals. Military discounts available. North County experts. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-oceanside',
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
    'geo.placename': 'Oceanside',
    'geo.position': '33.1959;-117.3795',
    'ICBM': '33.1959, -117.3795',
  },
};

const oceansideFAQs = [
  {
    question: "How much does junk removal cost in Oceanside?",
    answer: "Our <strong>Oceanside junk removal</strong> pricing is transparent and upfront, with special military discounts for active duty families and competitive rates for vacation rental properties:"
  },
  {
    question: "Do you provide junk removal for Camp Pendleton military housing?",
    answer: "Yes, our <strong>Camp Pendleton junk removal</strong> service specializes in military PCS moves and base housing cleanouts. We coordinate with base housing offices, understand inspection requirements, and work within tight military timelines. Active duty families receive special discounts, and we're familiar with all base access procedures."
  },
  {
    question: "Can you handle same-day junk pickup for vacation rentals in Oceanside?",
    answer: "Absolutely. Our <strong>junk pickup Oceanside</strong> team provides same-day service for vacation rental turnovers throughout coastal Oceanside. We understand the importance of quick turnarounds for maintaining bookings and reviews, offering priority scheduling for property managers and vacation rental owners."
  },
  {
    question: "Do you offer coastal property cleanouts and storm debris removal?",
    answer: "Yes, while we're a general <strong>junk removal Oceanside</strong> company serving all types of properties, we excel at coastal property cleanouts including storm debris removal, salt air damaged furniture disposal, and beach equipment cleanup."
  },
  {
    question: "Are your junk removal services eco-friendly in North County?",
    answer: "Absolutely. Our <strong>Oceanside San Diego junk removal</strong> prioritizes environmental protection through comprehensive recycling, donation programs, and disposal methods that comply with all local coastal regulations."
  }
];

export default function JunkRemovalOceansidePage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Oceanside",
    serviceName: "Junk Removal",
    description: "Professional Oceanside junk removal for Camp Pendleton, coastal properties, vacation rentals. Military discounts available. North County experts.",
    url: "https://severincleaners.com/junk-removal-oceanside",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Oceanside Junk Removal", url: "https://severincleaners.com/junk-removal-oceanside" },
  ]);

  const faqSchema = generateFAQSchema(oceansideFAQs);

  const nearbyLocations = [
    { name: "Vista", slug: "junk-removal-vista" },
    { name: "Escondido", slug: "junk-removal-escondido" },
    { name: "Rancho Santa Fe", slug: "junk-removal-rancho-santa-fe" },
    { name: "Poway", slug: "junk-removal-poway" },
  ];

  return (
    <>
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
        <OptimizedGradientHero
          title="Oceanside Junk Removal"
          subtitle="Camp Pendleton • Coastal Properties • Vacation Rentals • Same-Day Service"
          description="✓ Military Discounts Available ✓ Same-Day Hauling ✓ Licensed & Insured"
        />

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
                      Professional Junk Hauling Oceanside – Military & Coastal Property Experts
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      <strong>Oceanside junk removal</strong> serves North County's largest coastal city and home to Camp Pendleton. From military housing near the base to beachfront vacation rentals along the pier, our <strong>junk hauling Oceanside</strong> team navigates military access protocols, coastal property challenges, and vacation rental schedules with precision and care. We provide same-day <strong>trash removal Oceanside</strong> for PCS moves, vacation property turnovers, and residential cleanouts throughout the 92054, 92056, and 92057 areas with transparent pricing and military-friendly service.
                    </p>

                    <p className="text-gray-700 mb-6">
                      Our Oceanside operation is uniquely equipped to serve this diverse military and coastal community. We understand that <strong>Oceanside San Diego junk removal</strong> requires more than standard hauling services—it demands experience with Camp Pendleton base access procedures, knowledge of strict PCS move timelines, coordination with vacation rental managers, and the ability to work efficiently in one of North County's most dynamic areas. Whether you're clearing out base housing before inspection, removing furniture from a harbor-front vacation rental between guests, or handling a complete estate cleanout in Fire Mountain, our team brings the specialized military and coastal property experience Oceanside demands.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Oceanside Neighborhoods We Serve</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>Camp Pendleton junk removal</strong> service covers every corner of Oceanside's diverse community, from military housing on base to coastal vacation rentals downtown. We've completed thousands of junk removal jobs throughout Oceanside's varied neighborhoods, each with unique access challenges and community characteristics:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        <li><strong>Camp Pendleton Base:</strong> Military housing requiring base access, security coordination, and understanding of PCS inspection standards</li>
                        <li><strong>Downtown Oceanside:</strong> Transit village, pier district with vacation rentals, restaurants, and mixed-use redevelopment</li>
                        <li><strong>South Oceanside:</strong> Beachfront properties, harbor area with marina access and coastal home challenges</li>
                        <li><strong>Fire Mountain:</strong> Hillside family neighborhoods with larger homes and standard residential access</li>
                      </ul>
                      <ul className="space-y-2">
                        <li><strong>Rancho Del Oro:</strong> Master-planned community with HOA requirements and newer homes needing cleanout coordination</li>
                        <li><strong>Oceanside Harbor:</strong> Waterfront properties, marina facilities requiring salt air damage furniture disposal</li>
                        <li><strong>Loma Alta:</strong> Residential neighborhoods with established homes and garage storage cleanout needs</li>
                        <li><strong>Mission Avenue Corridor:</strong> Commercial district with retail, offices, and apartment complex access</li>
                      </ul>
                    </div>

                    {/* Major Streets */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Key Streets & Coastal Access Routes</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>Oceanside San Diego junk removal</strong> team knows every major street and access route in North County's coastal hub. This local expertise matters when navigating the area's complex infrastructure—I-5 freeway congestion, beach district parking restrictions, military base access protocols, and vacation rental property coordination. We plan each <strong>junk pickup Oceanside</strong> job with detailed route assessment:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      <li>• <strong>Coast Highway (PCH):</strong> Scenic coastal route with beach traffic and vacation rental property access</li>
                      <li>• <strong>Mission Avenue:</strong> Main east-west commercial corridor with retail and apartment complexes</li>
                      <li>• <strong>Oceanside Boulevard:</strong> Downtown connector to pier with pedestrian traffic and limited parking</li>
                      <li>• <strong>Hill Street:</strong> Central north-south route with residential neighborhoods and school zones</li>
                      <li>• <strong>Vista Way:</strong> Commercial corridor with business access and peak congestion periods</li>
                      <li>• <strong>Harbor Drive:</strong> Waterfront access to marina and harbor properties with salt air considerations</li>
                      <li>• <strong>Vandegrift Boulevard:</strong> Camp Pendleton main gate access requiring military ID and security clearance</li>
                      <li>• <strong>Fire Mountain Drive:</strong> Hillside residential with winding roads and driveway access challenges</li>
                    </ul>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Oceanside Landmarks & Military References</h3>
                    <p className="text-gray-700 mb-4">
                      We provide <strong>junk removal Oceanside</strong> service near all major landmarks and military facilities. These familiar reference points help us navigate quickly to your property and provide accurate arrival time estimates. Our crews use local landmarks for efficient routing throughout this military and beach community:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• Camp Pendleton Main Gate—military base access and housing reference point</li>
                        <li>• Oceanside Pier—iconic downtown landmark and vacation rental district</li>
                        <li>• Oceanside Harbor—marina, waterfront dining, and coastal property hub</li>
                        <li>• California Surf Museum—downtown cultural landmark and beach district reference</li>
                        <li>• The Strand beachfront—coastal walkway and vacation property area</li>
                        <li>• Oceanside Transit Center—downtown redevelopment anchor and parking hub</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Mission San Luis Rey—historic mission and eastern Oceanside reference</li>
                        <li>• Fire Mountain Park—hillside recreation area and family neighborhood landmark</li>
                        <li>• Rancho Del Oro Community Park—master-planned community center</li>
                        <li>• Oceanside Museum of Art—downtown cultural institution and pier district</li>
                        <li>• Buccaneer Beach—south Oceanside coastal access and vacation rental area</li>
                        <li>• Camp Pendleton North Beach—military recreation and coastal boundary</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Traffic Patterns & Military Scheduling</h3>
                    <p className="text-gray-700 mb-4">
                      Oceanside's military traffic and coastal tourism affect <strong>trash removal Oceanside</strong> timing year-round. Our dispatch team actively monitors I-5 freeway conditions, Camp Pendleton gate traffic, and beach area congestion, coordinating service windows that respect military schedules while maximizing efficiency. We've developed specific protocols for different property types:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      <li><strong>Weekday morning rush (6-8 AM):</strong> Camp Pendleton gate traffic creates massive backups as military personnel report for morning formation. I-5 freeway northbound and southbound experience heavy commuter loads. Mission Avenue and Vista Way become congested with local traffic. We recommend mid-morning (9 AM-12 PM) service windows after military rush clears and before lunch hour traffic begins for optimal access to both base and civilian properties.</li>
                      <li><strong>Camp Pendleton PCS coordination:</strong> Military PCS (Permanent Change of Station) moves follow strict timelines—typically 30 days from orders to departure. Base housing inspections require complete removal of all personal items and thorough cleaning. We coordinate with housing offices, schedule around inspection appointments, and understand the critical importance of meeting military deadlines. Active duty families receive priority scheduling and special military discount pricing.</li>
                      <li><strong>Vacation rental turnovers:</strong> Oceanside's thriving vacation rental market demands same-day service for guest turnovers. Properties along The Strand, near the pier, and in harbor areas require quick furniture removal between bookings. We offer priority scheduling for property managers, coordinate around cleaning crews, and complete work efficiently to minimize revenue loss between guest stays. Summer season (Memorial Day-Labor Day) creates peak demand requiring advance booking.</li>
                      <li><strong>Beach traffic weekends (May-Sept):</strong> Summer weekends bring massive beach crowds to Oceanside Pier, Harbor, and coastal areas. Coast Highway parking disappears 9 AM-sunset, pedestrian traffic clogs downtown streets, and vacation rental neighborhoods experience constant turnover. We prioritize early morning (7-9 AM) or evening (after 5 PM) service windows for coastal properties during peak season to avoid congestion and ensure parking access for our trucks.</li>
                    </ul>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Coastal Climate & Seasonal Considerations</h3>
                    <p className="text-gray-700 mb-6">
                      Oceanside's coastal location brings unique weather patterns that impact junk removal operations year-round. Marine layer fog (May-August) creates cool, overcast mornings ideal for physical hauling work—comfortable temperatures for our crews and reduced sun exposure for items during transport. However, this same ocean moisture deposits salt on coastal properties, which is why many Oceanside residents schedule regular junk removal to clear salt-damaged patio furniture, corroded beach equipment, and rust-affected metal items before deterioration spreads. We tarp electronics and sensitive materials during foggy morning transport to prevent additional moisture exposure. Winter storm systems (December-February) occasionally bring significant rainfall and coastal wind, requiring schedule flexibility and alternative routing when weather threatens access to beachfront properties. Harbor and marina areas can experience minor flooding during king tides combined with winter storms, affecting low-lying parking areas and requiring coordination with property managers. Summer months offer the most stable conditions with minimal rain and consistent temperatures, though vacation rental demand peaks during this period requiring advance scheduling. Fall and spring provide ideal weather windows with moderate temperatures, reduced crowds, and flexible scheduling availability for all types of junk removal from military housing to coastal estate cleanouts.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in Oceanside</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>Oceanside junk removal</strong> service handles the unique mix of items common to military and coastal living—from PCS move leftovers to salt-damaged beach furniture to vacation rental turnover debris. We remove everything from single items to complete property cleanouts:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Military Housing & PCS Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/furniture-removal-san-diego" className="text-blue-600 hover:underline">Furniture</a>, <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">appliances</a> too large for military moving allowances</li>
                          <li>• Storage unit contents from deployment periods</li>
                          <li>• Base housing cleanout debris for inspection preparation</li>
                          <li>• Items left behind by previous tenants in base housing</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Coastal & Beach Property Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Salt-damaged patio furniture and outdoor equipment</li>
                          <li>• Beach gear, surfboards, water sports equipment</li>
                          <li>• Corroded bicycles, rusted metal items from ocean air</li>
                          <li>• Storm debris from coastal weather events</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Vacation Rental Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Guest-damaged furniture requiring immediate replacement</li>
                          <li>• <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">Mattresses</a> from vacation rental turnovers</li>
                          <li>• Seasonal furniture rotation and storage clearing</li>
                          <li>• Property renovation debris between booking seasons</li>
                          <li>• Abandoned items left by vacation renters</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Residential & Estate Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">Estate cleanouts</a> for North County family properties</li>
                          <li>• Garage and shed cleanouts from family homes</li>
                          <li>• Downsizing projects for retirees and military families</li>
                          <li>• <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">Construction debris</a> from coastal home renovations</li>
                          <li>• <a href="/foreclosure-eviction-cleanout-san-diego" className="text-blue-600 hover:underline">Foreclosure cleanouts</a> and property transitions</li>
                        </ul>
                      </div>
                    </div>

                    {/* How Our Service Works */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">How Our Oceanside Junk Removal Service Works</h3>
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <ol className="space-y-3 text-gray-700">
                        <li><strong>1. Contact Us:</strong> Call (619) 750-0114 or book online. Describe what you need removed and your Oceanside location. For Camp Pendleton properties, provide base access details and housing office contact. For vacation rentals, note any property manager coordination needs. We'll provide estimated pricing based on volume and schedule your service window.</li>
                        <li><strong>2. Same-Day Scheduling Available:</strong> Call before noon for <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">same-day</a> <strong>junk pickup Oceanside</strong> service throughout North County. We coordinate with base housing offices for military properties and property managers for vacation rentals, ensuring efficient service that meets your timeline requirements.</li>
                        <li><strong>3. We Arrive & Assess:</strong> Our uniformed crew arrives in clearly marked trucks during your scheduled window. For base housing, we handle all security check-in procedures. We assess items for removal and provide a final quote before starting work—no hidden fees or surprises. Active duty families receive special military discount pricing.</li>
                        <li><strong>4. We Load & Haul Everything:</strong> Our team does all lifting, loading, and hauling. We protect floors and doorways, navigate base housing protocols and vacation rental property requirements, and complete removal efficiently. You simply point—we handle the rest, including coordination around inspection schedules and guest check-in times.</li>
                        <li><strong>5. Eco-Friendly Disposal:</strong> We sort items for donation, recycling, and responsible disposal. Military families often donate usable furniture to base family support programs. Coastal properties' recyclable materials go to proper facilities, and only true trash goes to landfill as last resort. We protect Oceanside's beaches and marine environment through responsible disposal practices.</li>
                        <li><strong>6. Clean Sweep & Payment:</strong> We sweep the area clean after removal and collect payment. Military housing jobs receive extra attention to meet inspection standards. Most jobs complete in under two hours from arrival to departure, ensuring minimal disruption to your schedule or guest turnover timeline.</li>
                      </ol>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Cleaners for Oceanside Junk Removal</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Military & Coastal Expertise:</strong> We navigate Camp Pendleton base access, understand PCS move timelines, and respect military family needs with specialized service. Our crews have completed thousands of North County junk removal jobs and understand coastal property challenges from salt air damage to vacation rental schedules. We coordinate with housing offices, property managers, and HOA requirements for seamless service throughout Oceanside.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Same-Day Service Available:</strong> Call before noon for same-day junk removal throughout Oceanside and Camp Pendleton. Our dispatch team actively monitors I-5 traffic and military gate congestion, scheduling arrival windows that work around base schedules and vacation rental turnovers, ensuring reliable service even during peak PCS season and summer vacation periods.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing with Military Discounts:</strong> No hidden fees, no surprises. Upfront quotes based on volume with all labor, hauling, and disposal included. Active duty military families receive special discount pricing as our thank you for service. Most Oceanside jobs range from quarter-truck to full-truck loads with clear pricing tiers communicated before work begins.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Insured:</strong> Fully licensed California junk removal company with comprehensive liability insurance. We carry proper coverage for military base access and coastal property work, including protection for base housing, vacation rental properties, and beachfront homes that require careful navigation of sandy approaches and salt air environments.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Oceanside"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Oceanside"
          contextParagraph="Military housing and vacation rental cleanouts throughout Oceanside—from Camp Pendleton to the pier—all use the same transparent pricing. Military discounts available, same-day service."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Oceanside" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Junk Removal Oceanside"
          description="Get answers to common questions about our <strong>junk removal Oceanside</strong> services, pricing, and same-day availability."
          faqs={oceansideFAQs}
          ctaTitle="Still Have Questions About Oceanside Junk Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our <strong>junk removal Oceanside</strong> services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related North County Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
                <p className="text-gray-600">Inherited coastal properties and military family estate transitions throughout North County</p>
              </a>
              <a href="/commercial-junk-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Commercial Junk Removal</h4>
                <p className="text-gray-600">Vacation rental and property management cleanout specialists for Oceanside</p>
              </a>
              <a href="/furniture-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Military PCS furniture disposal and coastal property furnishing removal services</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
