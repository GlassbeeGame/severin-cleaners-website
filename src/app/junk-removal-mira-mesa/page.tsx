import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MiraMesaFAQSection from "./MiraMesaFAQSection";
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
  title: "Mira Mesa Junk Removal | Residential & Commercial | (619) 750-0114",
  description: "Mira Mesa junk removal Scripps Ranch to Sorrento Valley. Tech campuses, apartments, condos, offices. (619) 750-0114",
  keywords: [
    "Mira Mesa junk removal",
    "junk hauling Mira Mesa",
    "trash removal Mira Mesa",
    "junk pickup Mira Mesa",
    "Mira Mesa furniture removal",
    "commercial junk removal Mira Mesa"
  ],
  openGraph: {
    title: "Mira Mesa Junk Removal | Same-Day Pickup & Hauling Service",
    description: "Professional Mira Mesa junk removal for homes and businesses. Same-day service, affordable pricing, eco-friendly disposal. Call (619) 750-0114!",
    url: "https://severincleaners.com/junk-removal-mira-mesa",
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Mira Mesa Junk Removal - Severin Cleaners'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mira Mesa Junk Removal | Same-Day Pickup & Hauling Service",
    description: "Professional Mira Mesa junk removal for homes and businesses. Same-day service, affordable pricing, eco-friendly disposal. Call (619) 750-0114!",
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: "https://severincleaners.com/junk-removal-mira-mesa",
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
    'geo.placename': 'Mira Mesa',
    'geo.position': '32.9153;-117.1439',
    'ICBM': '32.9153, -117.1439',
  },
};

export default function JunkRemovalMiraMesaPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Mira Mesa",
    serviceName: "Junk Removal",
    description: "Professional Mira Mesa junk removal for homes and businesses. Same-day service, affordable pricing, eco-friendly disposal from Sorrento Valley to Black Mountain Road.",
    url: "https://severincleaners.com/junk-removal-mira-mesa",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Mira Mesa Junk Removal", url: "https://severincleaners.com/junk-removal-mira-mesa" },
  ]);

  const nearbyLocations = [
    { name: "Poway", slug: "poway" },
    { name: "Kearny Mesa", slug: "kearny-mesa" },
    { name: "Rancho Santa Fe", slug: "rancho-santa-fe" },
    { name: "Escondido", slug: "escondido" },
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
                #1 Mira Mesa Junk Removal Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Mira Mesa Junk Removal
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Tech Corridor • Family Neighborhoods • Commercial Properties • Same-Day Service
              </p>

              <p className="text-lg mb-8">
                ✓ Residential & Commercial Experts ✓ Same-Day Hauling ✓ Licensed & Insured
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
                      Professional Junk Hauling Mira Mesa – Residential & Commercial Specialists
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      <strong>Mira Mesa junk removal</strong> serves one of San Diego's most diverse communities. From Sorrento Valley tech campuses to Black Mountain family neighborhoods, our <strong>junk hauling Mira Mesa</strong> team navigates business parks, apartment complexes, and residential streets with expertise and efficiency. We provide same-day <strong>trash removal Mira Mesa</strong> for office cleanouts, apartment turnovers, and family home projects throughout the 92126 and 92145 areas with transparent pricing and eco-friendly disposal.
                    </p>

                    <p className="text-gray-700 mb-6">
                      Our Mira Mesa operation is uniquely equipped to handle the challenges of this dynamic community. We understand that <strong>Mira Mesa San Diego junk removal</strong> requires more than standard hauling services—it demands experience with tech company office moves, military housing near MCAS Miramar, commercial warehouse cleanouts, and the ability to work efficiently in one of San Diego's most economically diverse areas. Whether you're clearing out a Sorrento Valley office after downsizing, removing furniture from an apartment complex along Mira Mesa Boulevard, or handling a complete garage cleanout near Los Penasquitos Canyon, our team brings the specialized local knowledge Mira Mesa properties demand.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Mira Mesa Neighborhoods We Serve</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>commercial junk removal Mira Mesa</strong> service covers every corner of this sprawling community, from industrial parks along Camino Santa Fe to residential cul-de-sacs in East Mira Mesa. We've completed thousands of junk removal jobs throughout Mira Mesa's diverse neighborhoods, each with unique access challenges and property characteristics:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        <li><strong>Sorrento Valley Border:</strong> Tech companies, biotech labs, research facilities requiring after-hours office cleanouts</li>
                        <li><strong>West Mira Mesa:</strong> Established family neighborhoods near Parkdale Avenue with garage and estate cleanout needs</li>
                        <li><strong>Mira Mesa Boulevard Corridor:</strong> Apartment complexes, condos, retail spaces with high turnover and tight parking</li>
                        <li><strong>Carroll Canyon:</strong> Business parks, warehouses, distribution centers requiring commercial-scale hauling</li>
                      </ul>
                      <ul className="space-y-2">
                        <li><strong>East Mira Mesa:</strong> Newer residential developments near Black Mountain Road with standard access and modern homes</li>
                        <li><strong>MCAS Miramar Area:</strong> Military housing, contractor properties requiring flexible scheduling and security coordination</li>
                        <li><strong>Camino Santa Fe Industrial:</strong> Warehouse complexes, storage facilities, commercial properties with loading dock access</li>
                        <li><strong>Los Penasquitos Canyon Edge:</strong> Hillside properties, larger lots with outdoor debris and yard waste removal needs</li>
                      </ul>
                    </div>

                    {/* Major Streets */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Key Streets & Commercial Corridors</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>Mira Mesa San Diego junk removal</strong> team knows every major street and business park in this expansive community. This local expertise matters when navigating the area's complex infrastructure—busy commercial corridors, apartment complex parking restrictions, business park security protocols, and residential HOA requirements. We plan each <strong>junk pickup Mira Mesa</strong> job with detailed route coordination:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      <li>• <strong>Mira Mesa Boulevard:</strong> Main east-west artery with retail, apartments, and peak congestion during rush hours</li>
                      <li>• <strong>Camino Ruiz:</strong> Central north-south connector with residential neighborhoods and school zone timing</li>
                      <li>• <strong>Miramar Road:</strong> Major commercial corridor with business parks and warehouse access requirements</li>
                      <li>• <strong>Black Mountain Road:</strong> Eastern boundary with newer developments and hillside property access</li>
                      <li>• <strong>Camino Santa Fe:</strong> Industrial corridor with warehouse complexes and loading dock coordination</li>
                      <li>• <strong>Carroll Road:</strong> Business park access with office buildings and tech company facilities</li>
                      <li>• <strong>Parkdale Avenue:</strong> Residential street network with family neighborhoods and standard driveway access</li>
                      <li>• <strong>Distribution Avenue:</strong> Commercial zone requiring after-hours scheduling for business cleanouts</li>
                    </ul>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Mira Mesa Landmarks & Business Districts</h3>
                    <p className="text-gray-700 mb-4">
                      We provide <strong>junk removal Mira Mesa</strong> service near all major landmarks and commercial districts. These familiar reference points help us navigate quickly to your property and provide accurate arrival time estimates. Our crews use local landmarks for efficient routing throughout this diverse community:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• MCAS Miramar—military installation and eastern boundary reference</li>
                        <li>• Mira Mesa Community Park—central recreation hub and family neighborhood anchor</li>
                        <li>• Mira Mesa Library—educational resource and community gathering point</li>
                        <li>• Hourglass Field Community Park—sports complex and west Mira Mesa landmark</li>
                        <li>• Mira Mesa Mall area—retail district and commercial reference point</li>
                        <li>• Los Penasquitos Canyon Preserve—natural boundary and trailhead access</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Sorrento Valley Tech Corridor—biotech and research company district</li>
                        <li>• Qualcomm campus area—major employer and tech industry reference</li>
                        <li>• General Atomics facilities—industrial district landmark</li>
                        <li>• Mira Mesa High School—central educational facility and traffic reference</li>
                        <li>• Epicentre commercial area—business park and office complex hub</li>
                        <li>• Target/Home Depot corridor—retail and home improvement reference</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Traffic Patterns & Commercial Scheduling</h3>
                    <p className="text-gray-700 mb-4">
                      Mira Mesa's tech corridor traffic and residential congestion affect <strong>trash removal Mira Mesa</strong> timing throughout the week. Our dispatch team actively monitors both I-15 freeway conditions and local street traffic, coordinating service windows that maximize efficiency while minimizing disruption. We've developed specific protocols for different property types:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      <li><strong>Weekday rush hours (7-9 AM, 4-6 PM):</strong> Mira Mesa Boulevard and Miramar Road experience heavy commuter traffic as tech workers head to Sorrento Valley and military personnel access MCAS Miramar. I-15 freeway congestion backs up onto local streets. We recommend mid-morning (9 AM-12 PM) or early afternoon (1-3 PM) windows when traffic clears and commercial parking becomes available for efficient truck access and loading.</li>
                      <li><strong>Business park coordination (Mon-Fri):</strong> Sorrento Valley tech campuses and Carroll Road office buildings require security check-in, loading dock reservations, and coordination with facility management. We schedule commercial cleanouts during business hours when security staff are present, or arrange after-hours access with proper authorization. Most office moves happen Friday afternoons or weekends to minimize employee disruption.</li>
                      <li><strong>Apartment complex scheduling:</strong> Mira Mesa Boulevard apartment complexes experience peak parking pressure evenings and weekends when residents are home. We prioritize weekday mid-morning (9 AM-2 PM) service for apartment turnovers, coordinating with property management to ensure access to units, elevators, and dumpster areas. Weekend scheduling available but requires advance coordination for parking space reservation.</li>
                      <li><strong>School zone awareness (8-9 AM, 2-3 PM):</strong> Areas near Mira Mesa High School and elementary schools experience increased traffic during drop-off and pickup hours. Streets around Camino Ruiz require extra caution and slower navigation during these periods. We plan routes to avoid school zones during peak times or schedule service windows outside these hours for nearby residential properties.</li>
                    </ul>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Inland Climate & Seasonal Considerations</h3>
                    <p className="text-gray-700 mb-6">
                      Mira Mesa's inland location brings warmer temperatures and occasional weather events that impact junk removal operations year-round. Summer heat (June-September) regularly reaches the 90s, with some days exceeding 100 degrees in the eastern neighborhoods near Black Mountain. Our crews start large outdoor cleanouts early morning (6-10 AM) during extreme heat periods to protect both worker safety and prevent heat damage to electronics and sensitive items during transport. Business park and warehouse cleanouts benefit from afternoon scheduling when industrial air conditioning systems are fully operational. Winter rains (December-February) are infrequent but can create temporary flooding in low-lying parking lots and business park access roads. We monitor weather forecasts and coordinate flexible rescheduling when heavy rainfall threatens outdoor loading operations. Fall Santa Ana wind events (September-November) can create dusty conditions and occasional wildfire smoke, requiring protective tarping for furniture and upholstered items during transport. Spring and early summer offer ideal conditions with moderate temperatures and minimal weather disruptions for all types of junk removal from office cleanouts to residential garage projects.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in Mira Mesa</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>Mira Mesa junk removal</strong> service handles the diverse mix of items common to both residential and commercial properties—from office equipment to household furniture to industrial materials. We remove everything from single items to complete building cleanouts:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Residential & Household Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Furniture, sofas, mattresses from apartment turnovers</li>
                          <li>• Appliances, refrigerators, washers, dryers from home upgrades</li>
                          <li>• Garage cleanouts with tools, equipment, storage items</li>
                          <li>• Yard debris, patio furniture, outdoor equipment</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Office & Commercial Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Office furniture, desks, cubicles, conference tables</li>
                          <li>• Electronics, computers, servers, networking equipment</li>
                          <li>• Filing cabinets, storage units, shelving systems</li>
                          <li>• Lab equipment, biotech materials, research facility items</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Warehouse & Industrial Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Warehouse racking, shelving, storage equipment</li>
                          <li>• Pallets, packaging materials, shipping supplies</li>
                          <li>• Manufacturing equipment, machinery, industrial tools</li>
                          <li>• <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">Construction debris</a> from tenant improvements and renovations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Retail & Restaurant Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Retail fixtures, displays, shelving units</li>
                          <li>• Restaurant equipment, commercial kitchen appliances</li>
                          <li>• Signage, decorations, promotional materials</li>
                          <li>• Inventory, unsold merchandise, store fixtures</li>
                        </ul>
                      </div>
                    </div>

                    {/* How Our Service Works */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">How Our Mira Mesa Junk Removal Service Works</h3>
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <ol className="space-y-3 text-gray-700">
                        <li><strong>1. Contact Us:</strong> Call (619) 750-0114 or book online. Describe what you need removed and your Mira Mesa location. For commercial properties, provide building access details and any security requirements. We'll provide estimated pricing based on volume and schedule your service window.</li>
                        <li><strong>2. Same-Day Scheduling Available:</strong> Call before noon for same-day <strong>junk pickup Mira Mesa</strong> service throughout residential and commercial areas. We coordinate with building management, security offices, and property owners to ensure smooth access and efficient service timing.</li>
                        <li><strong>3. We Arrive & Assess:</strong> Our uniformed crew arrives in clearly marked trucks during your scheduled window. We assess items for removal and provide a final quote before starting work—no hidden fees or surprises. For commercial jobs, we coordinate with facility managers and security personnel as needed.</li>
                        <li><strong>4. We Load & Haul Everything:</strong> Our team does all lifting, loading, and hauling. We protect floors and doorways, navigate office hallways and loading docks, and complete removal efficiently. You simply point—we handle the rest, including coordination with building management for elevator reservations and loading zone access.</li>
                        <li><strong>5. Eco-Friendly Disposal:</strong> We sort items for donation, recycling, and responsible disposal. Office furniture goes to local charities and resale facilities, electronics to certified e-waste recyclers, and construction materials to appropriate processors. Only true trash goes to landfill as last resort.</li>
                        <li><strong>6. Clean Sweep & Payment:</strong> We sweep the area clean after removal and collect payment. Residential jobs typically complete in under two hours; commercial cleanouts may take longer depending on volume and building access protocols, but we work efficiently to minimize disruption.</li>
                      </ol>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Cleaners for Mira Mesa Junk Removal</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Commercial & Residential Expertise:</strong> We navigate Mira Mesa's business parks, tech campuses, apartment complexes, and family neighborhoods with equal expertise. Our crews have completed thousands of Mira Mesa junk removal jobs and understand the specific challenges of office building access, warehouse loading docks, apartment parking restrictions, and residential HOA requirements. We coordinate with facility managers, security teams, and property owners for seamless service.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Same-Day Service Available:</strong> Call before noon for same-day junk removal throughout Mira Mesa's residential and commercial areas. Our dispatch team actively monitors I-15 traffic and local street conditions, scheduling arrival windows that work around tech corridor congestion and business park access hours, ensuring reliable service even during peak periods.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> No hidden fees, no surprises. Upfront quotes based on volume with all labor, hauling, and disposal included. Commercial office cleanouts and residential projects use the same fair pricing structure—you pay for volume removed, not property type or building complexity. Most Mira Mesa jobs range from quarter-truck to full-truck loads with clear pricing tiers communicated before work begins.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Insured:</strong> Fully licensed California junk removal company with comprehensive commercial liability insurance. We carry proper coverage for business property access, including protection for office buildings, warehouse facilities, tech campuses, and residential properties. Our insurance meets requirements for commercial landlords, property management companies, and HOA communities throughout Mira Mesa.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Mira Mesa"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Mira Mesa"
          contextParagraph="Office cleanouts and residential projects throughout Mira Mesa—from Sorrento Valley to Black Mountain—all use the same transparent pricing. No hidden fees, same-day service available."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Mira Mesa" />

        {/* FAQ Section */}
        <MiraMesaFAQSection />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related San Diego Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Professional furniture and office equipment removal with flexible scheduling</p>
              </a>
              <a href="/commercial-junk-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Commercial Junk Removal</h4>
                <p className="text-gray-600">Office and business cleanouts for Mira Mesa tech companies and warehouses</p>
              </a>
              <a href="/appliance-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal San Diego</h4>
                <p className="text-gray-600">Safe removal of refrigerators, washers, and commercial appliances</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
