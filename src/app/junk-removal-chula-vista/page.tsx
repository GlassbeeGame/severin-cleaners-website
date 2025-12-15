import { Metadata } from 'next';
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
  title: 'Chula Vista Junk Removal | South Bay\'s Most Trusted | (619) 750-0114',
  description: 'South Bay junk removal serving Eastlake, Otay Ranch, Bonita. HOA-compliant townhomes, condos, homes. Call (619) 750-0114',
  keywords: [
    'Chula Vista junk removal',
    'junk hauling Chula Vista',
    'junk pickup Chula Vista',
    'trash removal Chula Vista',
    'South Bay junk removal',
    'Eastlake junk removal'
  ],
  openGraph: {
    title: 'Chula Vista Junk Removal | Same-Day Junk Hauling | South Bay Specialists',
    description: 'Professional Chula Vista junk removal for Eastlake, Otay Ranch, Millenia. Bilingual junk hauling service, HOA compliant. Same-day pickup. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-chula-vista',
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Chula Vista Junk Removal - Severin Cleaners'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chula Vista Junk Removal | Same-Day Junk Hauling | South Bay Specialists',
    description: 'Professional Chula Vista junk removal for Eastlake, Otay Ranch, Millenia. Bilingual junk hauling service, HOA compliant. Same-day pickup. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-chula-vista',
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
    question: "How much does junk removal cost in Chula Vista?",
    answer: "Our <strong>Chula Vista junk removal</strong> pricing is transparent and volume-based with no hidden fees. We offer comprehensive service to all Eastlake, Otay Ranch, and South Bay neighborhoods with HOA-compliant service:"
  },
  {
    question: "Do you offer bilingual junk removal service in Chula Vista?",
    answer: "Sí, ofrecemos servicio completamente bilingüe. Our <strong>junk hauling Chula Vista</strong> team includes Spanish-speaking crew members who can communicate effectively with all residents. We provide estimates, scheduling, and service in both English and Spanish to serve our diverse South Bay community."
  },
  {
    question: "Can you provide same-day junk removal in Eastlake or Otay Ranch?",
    answer: "Yes, we offer same-day <strong>junk pickup Chula Vista</strong> service for urgent needs in Eastlake, Otay Ranch, and throughout South Bay. Our team understands HOA requirements and can coordinate emergency cleanouts while maintaining community standards. Same-day availability depends on scheduling and crew availability."
  },
  {
    question: "Are your junk removal services HOA-compliant?",
    answer: "Absolutely. Our <strong>trash removal Chula Vista</strong> service is fully HOA-compliant for all neighborhoods including Eastlake, Otay Ranch, and Rolling Hills Ranch. We coordinate with property management, schedule during approved hours, maintain professional appearance, and provide documentation when required by HOA boards."
  },
  {
    question: "What areas of South Bay do you serve?",
    answer: "Our <strong>South Bay junk removal</strong> covers all Chula Vista neighborhoods, plus National City, Bonita, Imperial Beach, and San Ysidro. We serve from the bayfront to the hills, including all master-planned communities, established neighborhoods, commercial districts, and border region properties throughout South Bay."
  }
];

export default function JunkRemovalChulaVistaPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Chula Vista",
    serviceName: "Junk Removal",
    description: "Professional Chula Vista junk removal for Eastlake, Otay Ranch, Millenia. Bilingual junk hauling service, HOA compliant. Same-day pickup.",
    url: "https://severincleaners.com/junk-removal-chula-vista",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Chula Vista Junk Removal", url: "https://severincleaners.com/junk-removal-chula-vista" },
  ]);

  const faqSchema = generateFAQSchema(chulaVistaFAQs);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema, faqSchema],
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
        <OptimizedGradientHero
          title="Chula Vista Junk Removal"
          subtitle="Eastlake to Otay Ranch • Bilingual Service • HOA Compliant"
          description="✓ Same-Day Service ✓ Licensed & Insured ✓ South Bay Specialists"
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
                      Professional Junk Hauling Chula Vista – South Bay's Most Trusted Service
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      <strong>Chula Vista junk removal</strong> serves San Diego County's second-largest city, spanning from bayfront properties to rolling hills and master-planned communities. From Eastlake's luxury neighborhoods to Otay Ranch developments to historic Third Avenue, our <strong>junk hauling Chula Vista</strong> team navigates HOA requirements, bilingual service needs, and South Bay's diverse property types with expertise. We provide same-day <strong>junk pickup Chula Vista</strong> for large family homes, multi-generational households, and commercial properties throughout the South Bay with transparent pricing and culturally-aware service.
                    </p>

                    <p className="text-gray-700 mb-6">
                      Our Chula Vista operation is uniquely positioned to serve this vibrant community. We understand that <strong>South Bay junk removal</strong> requires more than just hauling capacity—it demands bilingual crews who communicate effectively with diverse families, knowledge of HOA regulations in master-planned communities, experience handling large family properties common throughout Chula Vista, and the ability to coordinate around South Bay's unique traffic patterns. Whether you're clearing out an Eastlake Woods estate during a family transition, removing furniture from an Otay Ranch townhome after a tenant turnover, or handling a commercial cleanout near the Chula Vista Marina, our team brings the specialized South Bay experience that this community demands.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Chula Vista Neighborhoods We Serve</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>trash removal Chula Vista</strong> service covers every corner of this expansive South Bay city, from bayfront marinas to eastern hillside developments. We've completed thousands of junk removal jobs throughout Chula Vista's diverse neighborhoods, each with unique characteristics—from historic downtown to modern master-planned communities—that inform our service approach:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        <li><strong>Eastlake:</strong> Master-planned luxury community with strict HOA guidelines, large family homes, and extensive garage cleanout needs</li>
                        <li><strong>Otay Ranch:</strong> Modern developments with townhomes, single-family homes, and HOA coordination requirements</li>
                        <li><strong>Rolling Hills Ranch:</strong> Premium neighborhood with estate properties and upscale service expectations</li>
                        <li><strong>Rancho del Rey:</strong> Established family community with multi-generational homes and large property cleanouts</li>
                      </ul>
                      <ul className="space-y-2">
                        <li><strong>Millenia:</strong> Newer development near the border with modern housing and commercial mix</li>
                        <li><strong>Sunbow:</strong> Family-oriented area with standard residential junk removal needs</li>
                        <li><strong>Downtown/Third Avenue:</strong> Historic district with commercial properties, small businesses, and urban housing</li>
                        <li><strong>Olympic Training Center Area:</strong> Mixed residential and recreational facilities requiring specialized scheduling</li>
                      </ul>
                    </div>

                    {/* Major Streets */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Key Streets & Access Routes</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>junk hauling Chula Vista</strong> team knows every major corridor and residential street throughout South Bay. This local expertise matters when navigating Chula Vista's spread-out geography, understanding traffic patterns on major thoroughfares, and planning efficient routes through diverse neighborhoods. We plan each <strong>Chula Vista junk removal</strong> job with detailed route mapping to ensure timely service:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      <li>• <strong>Olympic Parkway:</strong> Major east-west route serving Eastlake and Rolling Hills Ranch communities</li>
                      <li>• <strong>Bonita Road:</strong> Commercial corridor connecting western Chula Vista to eastern developments</li>
                      <li>• <strong>Main Street:</strong> Historic downtown thoroughfare with business and residential mix</li>
                      <li>• <strong>Broadway:</strong> Major commercial street serving central Chula Vista neighborhoods</li>
                      <li>• <strong>Heritage Road:</strong> Residential corridor serving Otay Ranch and southern communities</li>
                      <li>• <strong>Otay Lakes Road:</strong> Eastern route serving newer developments and border area</li>
                      <li>• <strong>Palomar Street:</strong> North-south connector linking central neighborhoods</li>
                      <li>• <strong>H Street:</strong> Bayfront access serving marina area and western communities</li>
                    </ul>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Chula Vista Landmarks</h3>
                    <p className="text-gray-700 mb-4">
                      We provide <strong>junk pickup Chula Vista</strong> service near all major landmarks. These familiar reference points help us navigate quickly to your property and provide accurate arrival time estimates throughout this large South Bay community where neighborhoods span from the bay to the hills:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• Chula Vista Marina—bayfront recreation and dining</li>
                        <li>• Olympic Training Center—world-class athletic facility</li>
                        <li>• Eastlake Village Center—master-planned community hub</li>
                        <li>• Third Avenue Village—historic downtown district</li>
                        <li>• Otay Ranch Town Center—major shopping destination</li>
                        <li>• Aquatica San Diego—aquatic theme park</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Southwestern College—community college campus</li>
                        <li>• Salt Creek Golf Club—Eastlake recreation</li>
                        <li>• Rolling Hills Plaza—neighborhood shopping center</li>
                        <li>• Chula Vista Center—regional mall</li>
                        <li>• Living Coast Discovery Center—bayfront education</li>
                        <li>• Millenia Plaza—border area shopping</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Traffic Patterns & Service Timing</h3>
                    <p className="text-gray-700 mb-4">
                      Chula Vista's South Bay location and border proximity create unique traffic patterns that affect <strong>junk removal Chula Vista</strong> scheduling. Our dispatch team actively monitors South Bay traffic and coordinates with you to schedule service windows that minimize wait times and maximize efficiency. We've developed specific timing protocols for different Chula Vista areas:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      <li><strong>Morning rush hours (6-9 AM):</strong> Heavy commuter traffic northbound on I-805 and I-5 creates localized congestion on Olympic Parkway, Bonita Road, and H Street as residents commute to San Diego. We recommend mid-morning (9:30 AM-1 PM) service windows for Eastlake and western neighborhoods when streets clear after morning commute ends.</li>
                      <li><strong>Evening rush hours (3:30-7 PM):</strong> Southbound freeway traffic creates delays throughout Chula Vista as residents return home. Olympic Parkway and Bonita Road see heavy eastbound traffic. We prioritize earlier service windows or coordinate evening appointments after 7 PM for clients who prefer post-commute scheduling.</li>
                      <li><strong>Border crossing traffic:</strong> Proximity to international border means Otay Mesa and Heritage Road areas experience unique traffic patterns, particularly on weekends and holidays. We build buffer time into schedules for eastern Chula Vista properties and coordinate alternative routes during peak crossing periods.</li>
                      <li><strong>Weekend service:</strong> HOA restrictions in Eastlake, Otay Ranch, and Rolling Hills Ranch often limit truck access before 8 AM on weekends. We confirm community-specific rules before scheduling and coordinate with property management for multi-unit buildings that have loading dock restrictions.</li>
                    </ul>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">South Bay Weather Considerations</h3>
                    <p className="text-gray-700 mb-6">
                      Chula Vista's inland South Bay location creates warmer, drier weather than coastal San Diego neighborhoods, affecting junk removal operations year-round. Summer temperatures (June-September) regularly exceed 85°F inland, with eastern neighborhoods near Otay Lakes experiencing conditions 10-15 degrees warmer than bayfront areas. We schedule early morning starts (6-9 AM) during heat waves to protect crews and prevent heat damage to items being transported in enclosed trailers. The community sees less marine layer fog than coastal neighborhoods, allowing consistent morning scheduling without weather delays. Winter rainy season (December-February) brings occasional heavy rainfall that creates muddy conditions on unpaved construction areas in newer developments—we bring protective floor coverings and take extra care during wet weather to preserve flooring in newer homes. Chula Vista's eastern hills can experience Santa Ana wind conditions that bring extremely dry, warm weather requiring fire safety awareness during outdoor debris removal.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in Chula Vista</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>Chula Vista junk removal</strong> service handles the unique mix of items common to South Bay living—from large family home <a href="/furniture-removal-san-diego" className="text-blue-600 hover:underline">furniture removal</a> to multi-generational household accumulation to commercial property cleanouts. We offer <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">appliance removal</a>, <a href="/cleanout-services-san-diego" className="text-blue-600 hover:underline">garage cleanout services</a>, <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanouts</a>, <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">mattress disposal</a>, and <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">same-day service</a>:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Furniture & Household</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/furniture-removal-san-diego" className="text-blue-600 hover:underline">Large family sofas, sectionals</a>, and living room sets</li>
                          <li>• Multi-bedroom furniture from family homes</li>
                          <li>• Dining sets, tables, and chairs for large households</li>
                          <li>• <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">Bedroom sets, mattresses</a>, and guest room furniture</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances & Electronics</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Refrigerators, washers, dryers</a> from large households</li>
                          <li>• Multiple appliances from multi-generational homes</li>
                          <li>• Entertainment systems and family room electronics</li>
                          <li>• Kitchen appliance upgrades and replacements</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Outdoor & Garage</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Patio furniture and outdoor dining sets</li>
                          <li>• <a href="/cleanout-services-san-diego" className="text-blue-600 hover:underline">Garage storage and cleanouts</a></li>
                          <li>• Yard equipment and landscaping materials</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs and spas</a> from backyard renovations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Cleanouts & Special Projects</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">Estate cleanouts</a> for multi-generational properties</li>
                          <li>• Large family home complete cleanouts</li>
                          <li>• <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">Commercial property</a> and retail space clearing</li>
                          <li>• Tenant turnover cleanouts for rental properties</li>
                        </ul>
                      </div>
                    </div>

                    {/* How Our Service Works */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">How Our Chula Vista Junk Removal Service Works</h3>
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <ol className="space-y-3 text-gray-700">
                        <li><strong>1. Contact Us:</strong> Call (619) 750-0114 or book online. Describe what you need removed and your Chula Vista location. Our bilingual team provides estimates in English or Spanish based on your preference.</li>
                        <li><strong>2. Same-Day Scheduling Available:</strong> Call before noon for same-day service throughout South Bay. We coordinate arrival times around traffic patterns and your schedule preferences.</li>
                        <li><strong>3. We Arrive & Assess:</strong> Our uniformed crew arrives in clearly marked trucks during your scheduled window. We assess items for removal and provide a final quote before starting work—no hidden fees or surprises.</li>
                        <li><strong>4. We Load & Haul Everything:</strong> Our team does all lifting, loading, and hauling. We protect floors and doorways, navigate stairs and multi-level homes, and complete removal efficiently. You simply point—we handle the rest.</li>
                        <li><strong>5. Eco-Friendly Disposal:</strong> We sort items for donation, recycling, and responsible disposal. Usable furniture goes to local South Bay charities, recyclables to proper facilities, and only true trash to landfill as last resort.</li>
                        <li><strong>6. Clean Sweep & Payment:</strong> We sweep the area clean after removal and collect payment. Most jobs are completed in under two hours from arrival to departure.</li>
                      </ol>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Cleaners for Chula Vista Junk Removal</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>South Bay Community Expertise:</strong> We navigate Chula Vista's diverse neighborhoods, HOA requirements, and large family properties with ease. Our crews have completed thousands of Chula Vista junk removal jobs and understand the specific challenges of Eastlake master-planned communities, Otay Ranch townhomes, and large multi-generational homes common throughout South Bay. We coordinate with HOAs, work efficiently in large properties, and respect community standards.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Bilingual Service:</strong> Our team includes Spanish-speaking crew members who communicate effectively with Chula Vista's diverse families. We provide estimates, scheduling, and complete service in both English and Spanish, ensuring clear communication and comfortable service for all South Bay residents.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Same-Day Service Available:</strong> Call before noon for same-day junk removal throughout Chula Vista and South Bay. Our dispatch team actively monitors South Bay traffic and schedules arrival windows that work around border traffic, commuter patterns, and your schedule, ensuring reliable service even during busy periods.</span>
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
          description="Get answers to common questions about our <strong>junk removal Chula Vista</strong> services, pricing, and same-day availability."
          faqs={chulaVistaFAQs}
          ctaTitle="Still Have Questions About Chula Vista Junk Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our <strong>junk removal Chula Vista</strong> services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related South Bay Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
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
