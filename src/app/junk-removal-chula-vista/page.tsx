import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChulaVistaFAQSection from "./ChulaVistaFAQSection";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Chula Vista Junk Removal | South Bay\'s Most Trusted | (619) 750-0114',
  description: 'South Bay junk removal serving Eastlake, Otay Ranch, Bonita. HOA-compliant townhomes, condos, homes. Call (619) 750-0114',
  keywords: 'Chula Vista junk removal, junk hauling Chula Vista, junk pickup Chula Vista, trash removal Chula Vista, South Bay junk removal, Eastlake junk removal',
  openGraph: {
    title: 'Chula Vista Junk Removal | Same-Day Junk Hauling | South Bay Specialists',
    description: 'Professional Chula Vista junk removal for Eastlake, Otay Ranch, Millenia. Bilingual junk hauling service, HOA compliant. Same-day pickup. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-chula-vista',
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
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
};

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

  const nearbyLocations = [
    { name: "Bonita", slug: "bonita" },
    { name: "National City", slug: "national-city" },
    { name: "Imperial Beach", slug: "imperial-beach" },
    { name: "Spring Valley", slug: "spring-valley" },
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
                #1 Chula Vista Junk Removal Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Chula Vista Junk Removal
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Eastlake to Otay Ranch • Bilingual Service • HOA Compliant
              </p>

              <p className="text-lg mb-8">
                ✓ South Bay Specialists ✓ Same-Day Hauling ✓ Licensed & Insured
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
                      Our <strong>Chula Vista junk removal</strong> service handles the unique mix of items common to South Bay living—from large family home furniture to multi-generational household accumulation to commercial property cleanouts. We remove everything from single items to complete house cleanouts:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Furniture & Household</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Large family sofas, sectionals, and living room sets</li>
                          <li>• Multi-bedroom furniture from family homes</li>
                          <li>• Dining sets, tables, and chairs for large households</li>
                          <li>• Bedroom sets, mattresses, and guest room furniture</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances & Electronics</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Refrigerators, washers, dryers from large households</li>
                          <li>• Multiple appliances from multi-generational homes</li>
                          <li>• Entertainment systems and family room electronics</li>
                          <li>• Kitchen appliance upgrades and replacements</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Outdoor & Garage</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Patio furniture and outdoor dining sets</li>
                          <li>• Garage storage and accumulated items</li>
                          <li>• Yard equipment and landscaping materials</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs and spas</a> from backyard renovations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Cleanouts & Special Projects</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Estate cleanouts for multi-generational properties</li>
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
        <ChulaVistaFAQSection />

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
    </div>
  );
}
