import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection, { generateFAQSchema } from "@/components/FAQSection";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Pacific Beach Junk Removal | Beach House & Rental Experts | (619) 750-0114',
  description: 'Pacific Beach junk removal Crystal Pier to Crown Point. Boardwalk debris, beach furniture. Same-day service. (619) 750-0114',
  keywords: [
    'Pacific Beach junk removal',
    'junk hauling Pacific Beach',
    'junk pickup PB',
    'trash removal Pacific Beach',
    'PB San Diego junk removal',
    'junk removal 92109',
    'Garnet Avenue junk hauling'
  ],
  openGraph: {
    title: 'Pacific Beach Junk Removal | Same-Day Hauling | Licensed & Insured',
    description: 'Professional Pacific Beach junk removal from Crystal Pier to Crown Point. Same-day service, transparent pricing. Licensed & insured. Call (619) 750-0114!',
    url: 'https://severincleaners.com/junk-removal-pacific-beach',
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Pacific Beach Junk Removal - Severin Cleaners'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pacific Beach Junk Removal | Same-Day Hauling | Licensed & Insured',
    description: 'Professional Pacific Beach junk removal from Crystal Pier to Crown Point. Same-day service, transparent pricing. Licensed & insured. Call (619) 750-0114!',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-pacific-beach',
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
    'geo.placename': 'Pacific Beach',
    'geo.position': '32.7942;-117.2347',
    'ICBM': '32.7942, -117.2347',
  },
};

const pacificBeachFAQs = [
  {
    question: "Do you service all of Pacific Beach?",
    answer: "Yes! We service every street in PB from Tourmaline Surf Beach to Belmont Park, including Crown Point, Bay Park, and all of Garnet Avenue. Our team knows every alley and access point."
  },
  {
    question: "Do you work around PB's Tuesday Farmers Market?",
    answer: "Yes, we're familiar with all PB events including the Tuesday Farmers Market on Bayard Street, Over-the-Line Tournament, and summer concerts. We schedule accordingly."
  },
  {
    question: "How much does junk removal cost in Pacific Beach?",
    answer: "Our <strong>Pacific Beach junk removal</strong> pricing is transparent and based on trailer volume:"
  },
  {
    question: "Do you offer same-day or evening pickups?",
    answer: "Yes, we provide same-day service when scheduled before 2 PM and offer evening pickups for urgent situations. Perfect for vacation rental emergencies or move-out deadlines."
  },
  {
    question: "Can you remove heavy items like couches and appliances in PB?",
    answer: "Absolutely! Our <strong>junk hauling Pacific Beach</strong> team specializes in removing heavy furniture and appliances from Ocean Front Walk condos, Garnet Avenue apartments, and Crown Point homes. We safely handle:"
  },
  {
    question: "Do you provide same-day junk hauling in Pacific Beach?",
    answer: "Yes! We offer same-day <strong>junk pickup PB</strong> service when you call before 2 PM. This is especially helpful for vacation rental turnovers on Ocean Front Walk, student move-outs near Garnet Avenue, and emergency cleanouts near Tourmaline Surf Park. During peak summer season, we recommend scheduling morning appointments to guarantee same-day service throughout the 92109 area."
  },
  {
    question: "What types of junk do you not remove?",
    answer: "We handle all standard household items, furniture, appliances, construction debris, yard waste, and beach-damaged items in accordance with local regulations. If you're unsure about a specific item, please call us at (619) 750-0114 and we can discuss it - there are various factors that can affect pricing and service options."
  },
  {
    question: "Are you licensed and insured for junk removal in San Diego?",
    answer: "Yes! Severin Cleaners is fully licensed and insured to provide <strong>PB San Diego junk removal</strong> services throughout Pacific Beach and all of San Diego County. We carry comprehensive liability insurance to protect your property during removal, and we dispose of all items responsibly at licensed facilities. Our team follows all local regulations for waste handling and environmental compliance."
  }
];

export default function JunkRemovalPacificBeachPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Pacific Beach",
    serviceName: "Junk Removal",
    description: "Professional Pacific Beach junk removal from Crystal Pier to Crown Point. Same-day service, transparent pricing. Licensed & insured.",
    url: "https://severincleaners.com/junk-removal-pacific-beach",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Pacific Beach Junk Removal", url: "https://severincleaners.com/junk-removal-pacific-beach" },
  ]);

  const faqSchema = generateFAQSchema(pacificBeachFAQs);

  const nearbyLocations = [
    { name: "La Jolla", slug: "la-jolla" },
    { name: "Point Loma", slug: "point-loma" },
    { name: "Clairemont", slug: "clairemont" },
    { name: "Del Mar", slug: "del-mar" },
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
                #1 Pacific Beach Junk Removal Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Pacific Beach Junk Removal
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Crystal Pier to Crown Point • Beach House Cleanouts • Same-Day Service
              </p>

              <p className="text-lg mb-8">
                ✓ Beach Property Experts ✓ Same-Day Hauling ✓ Licensed & Insured
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
                      Professional Junk Hauling Pacific Beach – Crystal Pier to Crown Point
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      <strong>Pacific Beach junk removal</strong> serves one of San Diego's most vibrant beach communities. From Crystal Pier boardwalk apartments to Crown Point bay-front homes, our <strong>junk hauling Pacific Beach</strong> team navigates narrow beach streets, shared alley access, and dense summer crowds with expertise. We provide same-day <strong>trash removal Pacific Beach</strong> for beach houses, student housing, and garage cleanouts throughout the 92109 area with transparent pricing and eco-friendly disposal.
                    </p>

                    <p className="text-gray-700 mb-6">
                      Our Pacific Beach operation is uniquely equipped to handle the challenges of this iconic beach neighborhood. We understand that <strong>PB San Diego junk removal</strong> requires more than just hauling trucks—it demands local knowledge of parking restrictions, alley access protocols, beach community etiquette, and the ability to work efficiently in one of San Diego's most congested beach areas. Whether you're clearing out a boardwalk apartment after tenant turnover, removing salt-damaged patio furniture from a Crown Point bay house, or handling a full garage cleanout near Kate Sessions Park, our team brings the specialized experience Pacific Beach properties demand.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Pacific Beach Neighborhoods We Serve</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>junk removal 92109</strong> service covers every corner of Pacific Beach, from oceanfront boardwalk properties to residential streets bordering Clairemont. We've completed thousands of junk removal jobs throughout PB's diverse neighborhoods, each with unique access challenges and community characteristics that inform our service approach:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        <li><strong>North Pacific Beach:</strong> Kate Sessions Park area, family homes with garage cleanouts and yard waste removal needs</li>
                        <li><strong>Crown Point:</strong> Bayside properties, Mission Bay waterfront homes requiring marine equipment and beach furniture disposal</li>
                        <li><strong>Garnet District:</strong> Commercial corridor, mixed-use buildings with tight parking and shared dumpster access challenges</li>
                        <li><strong>Beach Area:</strong> Ocean Front Walk, Crystal Pier, boardwalk apartments with narrow alley-only truck access</li>
                      </ul>
                      <ul className="space-y-2">
                        <li><strong>Bay Park:</strong> Residential hillside, Clairemont border with standard residential junk removal access</li>
                        <li><strong>The Promenade:</strong> Shopping center, central location with both commercial and residential service needs</li>
                        <li><strong>Fanuel Street:</strong> Residential corridor near UCSD with student housing turnover and furniture removal</li>
                        <li><strong>Pacific Plaza:</strong> Mission Boulevard commercial area requiring after-hours service coordination</li>
                      </ul>
                    </div>

                    {/* Major Streets */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Key Streets & Access</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>PB San Diego junk removal</strong> team knows every street and alley in Pacific Beach. This local expertise matters when navigating the neighborhood's challenging infrastructure—narrow one-way streets, shared alleys behind boardwalk apartments, residential permit parking zones, and limited commercial loading areas. We plan each <strong>Garnet Avenue junk hauling</strong> job with detailed route mapping to ensure our trucks can access your property efficiently without blocking traffic or frustrating neighbors:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      <li>• <strong>Garnet Avenue:</strong> Main commercial corridor with metered parking and peak congestion challenges</li>
                      <li>• <strong>Mission Boulevard:</strong> Beachfront thoroughfare with summer tourist traffic requiring early service</li>
                      <li>• <strong>Grand Avenue:</strong> Central residential with standard street parking and alley access</li>
                      <li>• <strong>Cass Street:</strong> Farmers market location requiring Tuesday schedule adjustments</li>
                      <li>• <strong>Ingraham Street:</strong> North-south connector with consistent traffic flow year-round</li>
                      <li>• <strong>Lamont Street:</strong> Student housing area with May and August move-out surge periods</li>
                      <li>• <strong>Bayard Street:</strong> Library, community center with daytime parking restrictions</li>
                      <li>• <strong>Crown Point Drive:</strong> Bay access with limited turnaround space for large trucks</li>
                    </ul>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Pacific Beach Landmarks</h3>
                    <p className="text-gray-700 mb-4">
                      We provide <strong>junk removal 92109</strong> service near all major PB landmarks. These familiar reference points help us navigate quickly to your property and provide accurate arrival time estimates. Our crews use local landmarks for efficient routing throughout this densely-packed beach community where street addresses alone don't always tell the complete access story:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• Crystal Pier & Hotel—boardwalk access challenges</li>
                        <li>• Kate Sessions Memorial Park—north PB family neighborhood hub</li>
                        <li>• PB Library & Recreation Center—central community gathering point</li>
                        <li>• Tourmaline Surfing Park—north beach access and parking coordination</li>
                        <li>• Belmont Park (border)—Mission Beach boundary landmark</li>
                        <li>• Mission Bay Park—bay-front property reference point</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Crown Point Shores—bayside residential community</li>
                        <li>• The Promenade Shopping Center—central retail and residential mix</li>
                        <li>• PB Shore Club—Garnet Avenue entertainment district</li>
                        <li>• Fanuel Park—residential neighborhood green space</li>
                        <li>• Kendall-Frost Marsh Reserve—Crown Point ecological preserve</li>
                        <li>• Garnet Avenue Bar District—nightlife corridor with special timing needs</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Traffic & Service Timing</h3>
                    <p className="text-gray-700 mb-4">
                      Pacific Beach's beach traffic and student population affect <strong>Garnet Avenue junk hauling</strong> timing more dramatically than most San Diego neighborhoods. Our dispatch team actively monitors PB traffic patterns and coordinates with you to schedule service windows that minimize wait times and maximize efficiency. We've developed specific timing protocols for different PB areas and seasons:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      <li><strong>Summer weekends (June-Sept):</strong> Heavy beach traffic 10 AM-6 PM clogs Mission Boulevard, Garnet Avenue, and all beach approach streets. We offer early morning (6-9 AM) or evening (after 6 PM) service windows to avoid these peak congestion hours. Many PB residents prefer Saturday morning 7 AM starts to complete junk removal before beach crowds arrive.</li>
                      <li><strong>Student move-outs (May, Aug):</strong> SDSU and UCSD students create massive demand surges during finals weeks and summer transition periods. Lamont Street, Fanuel Street, and areas near campus see U-Haul traffic and moving trucks blocking alleys. Book 2-3 weeks ahead during these periods or expect longer arrival windows as we navigate congested student housing areas.</li>
                      <li><strong>Tuesday Farmers Market:</strong> Bayard Street closes 12-8 PM every Tuesday year-round for PB's popular farmers market. We route via Grand Avenue or schedule Wednesday-Monday for nearby properties. This weekly closure affects central PB access and requires advance planning for properties within two blocks of the market location.</li>
                      <li><strong>Garnet nightlife (Fri-Sat):</strong> Bar district parking disappears 5 PM-2 AM Friday-Saturday as nightlife crowds arrive. Restaurant and bar dumpster areas become inaccessible. We prioritize Sunday morning (6-10 AM) for commercial <strong>trash removal Pacific Beach</strong> in the Garnet corridor, when streets are clear and business dumpsters are accessible for disposal coordination.</li>
                    </ul>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Coastal Weather Considerations</h3>
                    <p className="text-gray-700 mb-6">
                      Pacific Beach's coastal climate impacts junk removal year-round in ways inland neighborhoods never experience. May-August marine layer brings cool, foggy mornings that create ideal working conditions for our crews—comfortable temperatures and reduced sun exposure make physical hauling work more efficient. However, this same marine layer deposits salt moisture on stored items, which is why many PB residents schedule regular junk removal to clear salt-damaged beach furniture, corroded bicycles, and rusted outdoor equipment before deterioration spreads. We tarp electronics and sensitive items during coastal fog transport to prevent additional moisture exposure. Winter storm systems (December-February) occasionally cause street flooding near Crown Point's low-lying bayside areas, requiring schedule flexibility and alternative routing during heavy rainfall events.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in Pacific Beach</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>Pacific Beach junk removal</strong> service handles the unique mix of items common to beach community living—from salt-damaged outdoor furniture to student housing leftovers to beach recreation equipment that's reached end-of-life. We remove everything from single items to complete house cleanouts:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Furniture & Household</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/furniture-removal-san-diego" className="text-blue-600 hover:underline">Sofas, couches, sectionals</a> damaged by salt air</li>
                          <li>• <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">Mattresses</a>, box springs, bed frames from turnovers</li>
                          <li>• Dressers, tables, chairs from student housing</li>
                          <li>• Desks, bookshelves, cabinets for garage cleanouts</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances & Electronics</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Refrigerators, washers, dryers</a> from rental properties</li>
                          <li>• Dishwashers, stoves, microwaves needing replacement</li>
                          <li>• TVs, computers, electronics from tech upgrades</li>
                          <li>• Air conditioners, heaters, dehumidifiers</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Beach & Outdoor Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Surfboards, paddleboards, kayaks no longer used</li>
                          <li>• Beach cruisers, bicycles damaged by salt corrosion</li>
                          <li>• Patio furniture, BBQ grills with rust damage</li>
                          <li>• Old <a href="/couch-removal-san-diego" className="text-blue-600 hover:underline">couches and sectionals</a> from beach rentals</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs and spas</a> for backyard renovations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Cleanouts & Debris</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Estate & garage cleanouts for entire properties</li>
                          <li>• Storage unit contents and accumulated items</li>
                          <li>• Construction debris from beach house remodels</li>
                          <li>• Yard waste, branches, landscaping materials</li>
                        </ul>
                      </div>
                    </div>

                    {/* How Our Service Works */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">How Our Pacific Beach Junk Removal Service Works</h3>
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <ol className="space-y-3 text-gray-700">
                        <li><strong>1. Contact Us:</strong> Call (619) 750-0114 or book online. Describe what you need removed and your Pacific Beach location. We'll provide estimated pricing based on volume and schedule your service window.</li>
                        <li><strong>2. Same-Day Scheduling Available:</strong> Call before noon for <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">same-day</a> <strong>junk pickup PB</strong> service throughout the 92109 area. We coordinate arrival times around beach traffic patterns and your schedule preferences.</li>
                        <li><strong>3. We Arrive & Assess:</strong> Our uniformed crew arrives in clearly marked trucks during your scheduled window. We assess items for removal and provide a final quote before starting work—no hidden fees or surprises.</li>
                        <li><strong>4. We Load & Haul Everything:</strong> Our team does all lifting, loading, and hauling. We protect floors and doorways, navigate stairs and tight beach house hallways, and complete removal efficiently. You simply point—we handle the rest.</li>
                        <li><strong>5. Eco-Friendly Disposal:</strong> We sort items for donation, recycling, and responsible disposal. Usable furniture goes to local charities, recyclables to proper facilities, and only true trash to landfill as last resort.</li>
                        <li><strong>6. Clean Sweep & Payment:</strong> We sweep the area clean after removal and collect payment. Most jobs are completed in under two hours from arrival to departure.</li>
                      </ol>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Cleaners for Pacific Beach Junk Removal</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Beach Community Expertise:</strong> We navigate PB's narrow streets, alley access, and beach parking restrictions with ease. Our crews have completed thousands of Pacific Beach junk removal jobs and know the specific challenges of boardwalk apartments, Crown Point bay houses, and Garnet Avenue mixed-use buildings. We coordinate with neighbors, work around shared alley access, and complete jobs efficiently even in PB's most congested areas.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Same-Day Service Available:</strong> Call before noon for same-day junk removal throughout Pacific Beach and the 92109 area. Our dispatch team actively monitors PB traffic and schedules arrival windows that work around beach congestion, ensuring reliable service even during busy summer weekends and student move-out periods.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> No hidden fees, no surprises. Upfront quotes based on volume with all labor, hauling, and disposal included. Summer beach traffic doesn't change our rates—you pay for volume removed, not time or traffic conditions. Most Pacific Beach jobs range from half-truck to full-truck loads with clear pricing tiers communicated before work begins.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Insured:</strong> Fully licensed California junk removal company with comprehensive liability insurance. We carry proper coverage for beach property access, including protection for narrow hallways, shared building entry, and coastal property that requires careful navigation of sandy stairs and boardwalk approaches.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Pacific Beach"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Pacific Beach"
          contextParagraph="Beach house cleanouts and garage clearances throughout PB—from Crystal Pier to Crown Point—all use the same transparent pricing. No hidden fees, same-day service available."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Pacific Beach" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Junk Removal Pacific Beach"
          description="Get answers to common questions about our <strong>junk removal Pacific Beach</strong> services, pricing, and same-day availability."
          faqs={pacificBeachFAQs}
          ctaTitle="Still Have Questions About Pacific Beach Junk Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our <strong>junk removal Pacific Beach</strong> services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related Beach Community Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Sofas, mattresses, and bulky beach-damaged furniture removal throughout PB</p>
              </a>
              <a href="/appliance-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal San Diego</h4>
                <p className="text-gray-600">Fridges, washers, dryers, and salt-air damaged appliance disposal</p>
              </a>
              <a href="/construction-debris-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
                <p className="text-gray-600">Beach house remodel and renovation debris cleanup services</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
