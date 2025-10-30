import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SanteeFAQSection from "./SanteeFAQSection";
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
  title: 'Santee Junk Removal | East County Family Service | (619) 750-0114',
  description: 'Santee family junk removal Carlton Hills, Trolley district. Garage cleanouts, RV debris, lake recreation equipment. (619) 750-0114',
  keywords: [
    'Santee junk removal',
    'junk hauling Santee',
    'junk pickup Santee',
    'trash removal Santee',
    'Santee San Diego junk removal',
    'garage cleanouts'
  ],
  openGraph: {
    title: 'Santee Junk Removal | Family Homes & Garage Cleanout Specialists | Same-Day Service',
    description: 'Professional Santee junk removal for family homes, garage cleanouts, Carlton Hills, Sky Ranch. East County specialists with trolley-accessible service. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-santee',
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Santee Junk Removal - Severin Cleaners'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santee Junk Removal | Family Homes & Garage Cleanout Specialists | Same-Day Service',
    description: 'Professional Santee junk removal for family homes, garage cleanouts, Carlton Hills, Sky Ranch. East County specialists with trolley-accessible service. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-santee',
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
    'geo.placename': 'Santee',
    'geo.position': '32.8384;-116.9739',
    'ICBM': '32.8384, -116.9739',
  },
};

export default function JunkRemovalSanteePage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Santee",
    serviceName: "Junk Removal",
    description: "Professional Santee junk removal for family homes, garage cleanouts, Carlton Hills, Sky Ranch. East County specialists with trolley-accessible service.",
    url: "https://severincleaners.com/junk-removal-santee",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Santee Junk Removal", url: "https://severincleaners.com/junk-removal-santee" },
  ]);

  const nearbyLocations = [
    { name: "El Cajon", slug: "el-cajon" },
    { name: "La Mesa", slug: "la-mesa" },
    { name: "Lakeside", slug: "lakeside" },
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
                #1 Santee Junk Removal Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Santee Junk Removal
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                East County Family Service • Garage Cleanout Experts • Same-Day Available
              </p>

              <p className="text-lg mb-8">
                ✓ Family Home Specialists ✓ Same-Day Hauling ✓ Licensed & Insured
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
                      Professional Junk Hauling Santee – East County's Family Community
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      <strong>Santee junk removal</strong> serves one of East County's most dynamic family-oriented communities. From established neighborhoods in Carlton Hills to newer developments in Sky Ranch, our <strong>junk hauling Santee</strong> team handles the unique challenges of this diverse suburban city. We provide same-day <strong>trash removal Santee</strong> for family homes, apartment complexes, and garage cleanouts throughout the 92071 area with transparent pricing and eco-friendly disposal.
                    </p>

                    <p className="text-gray-700 mb-6">
                      Our Santee operation is strategically positioned to serve East County's growing suburban landscape. We understand that <strong>Santee San Diego junk removal</strong> requires knowledge of family neighborhoods with two-car garages that accumulate years of storage, multi-family properties near the Trolley corridor, and hillside homes in Carlton Hills with unique access considerations. Whether you're clearing a garage packed with RV equipment and recreational gear, removing furniture from a family home upgrade, or handling apartment turnover near Santee Trolley Square, our team brings the local expertise East County properties demand.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Santee Neighborhoods We Serve</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>junk removal Santee</strong> service covers every corner of this East County community, from trolley-accessible developments to hillside family neighborhoods. We've completed thousands of junk removal jobs throughout Santee's diverse areas, each with unique characteristics that inform our service approach:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        <li><strong>Carlton Hills:</strong> Established hillside neighborhoods with panoramic views, challenging driveway access, and family homes with extensive storage</li>
                        <li><strong>Sky Ranch:</strong> Newer family developments with modern homes, HOA communities, and garage organization needs</li>
                        <li><strong>Santee Trolley Square:</strong> Mixed-use development with transit access, apartments, retail, and urban living density</li>
                        <li><strong>West Hills:</strong> Family neighborhoods near schools, parks, and recreation with seasonal cleanout patterns</li>
                      </ul>
                      <ul className="space-y-2">
                        <li><strong>Carlton Oaks:</strong> Golf course community with upscale family homes and garage accumulation challenges</li>
                        <li><strong>Edgemoor:</strong> Central residential area with mature trees, established homes, and multi-car garages</li>
                        <li><strong>Mission Gorge:</strong> Commercial corridor with business parks, retail centers, and mixed-use properties</li>
                        <li><strong>Santee Lakes:</strong> Recreation-oriented neighborhoods with RV storage, boats, and outdoor equipment disposal needs</li>
                      </ul>
                    </div>

                    {/* Major Streets */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Key Streets & Access</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>Santee San Diego junk removal</strong> team knows every street and access point in this sprawling East County city. This local expertise matters when navigating Santee's mix of suburban subdivisions, hillside roads, and commercial corridors. We plan each <strong>junk pickup Santee</strong> job with detailed routing to ensure efficient access:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      <li>• <strong>Mission Gorge Road:</strong> Main east-west corridor with shopping centers and business district traffic</li>
                      <li>• <strong>Magnolia Avenue:</strong> Central north-south route through established residential neighborhoods</li>
                      <li>• <strong>Cuyamaca Street:</strong> Eastern connector serving Sky Ranch and newer developments</li>
                      <li>• <strong>Carlton Hills Boulevard:</strong> Hillside access with winding roads and canyon view properties</li>
                      <li>• <strong>Mast Boulevard:</strong> Northern route connecting to Lakeside with rural transitions</li>
                      <li>• <strong>Prospect Avenue:</strong> Trolley corridor access with transit-oriented development</li>
                      <li>• <strong>Woodside Avenue:</strong> Residential connector through family neighborhoods and schools</li>
                      <li>• <strong>Riverford Road:</strong> Southern boundary with access to Santee Lakes and recreation areas</li>
                    </ul>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Santee Landmarks</h3>
                    <p className="text-gray-700 mb-4">
                      We provide <strong>junk removal Santee</strong> service near all major East County landmarks. These familiar reference points help us navigate quickly to your property and provide accurate arrival time estimates. Our crews use local landmarks for efficient routing throughout this family-friendly community:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• Santee Trolley Square—transit hub and mixed-use development center</li>
                        <li>• Santee Lakes Recreation Preserve—camping, fishing, and outdoor recreation area</li>
                        <li>• Costco Santee—major retail anchor and shopping destination</li>
                        <li>• Carlton Oaks Golf Course—community centerpiece and event venue</li>
                        <li>• Sportsplex USA—family entertainment and recreation complex</li>
                        <li>• Santee Drive-In Theatre—vintage entertainment landmark</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• West Hills High School—community education hub and event location</li>
                        <li>• Town Center Community Park—central recreation and sports facilities</li>
                        <li>• Trolley Barn Park—family playground and community gathering space</li>
                        <li>• Mission Trails Regional Park (border)—wilderness access and trailheads</li>
                        <li>• Santee Farmers Market—weekly community event at Town Center</li>
                        <li>• Santee Historical Society—Old West preservation and community history</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Traffic & Service Timing</h3>
                    <p className="text-gray-700 mb-4">
                      Santee's position as an East County commuter hub creates predictable traffic patterns that affect <strong>junk hauling Santee</strong> scheduling. Our dispatch team actively monitors conditions and coordinates with you to schedule service windows that maximize efficiency:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      <li><strong>Weekday commute hours (6:30-8:30 AM, 4-6 PM):</strong> Mission Gorge Road and SR-52 access points experience heavy traffic as East County residents commute to downtown San Diego and central employment centers. We schedule mid-morning (9 AM-12 PM) or early afternoon (1-3 PM) service windows to avoid these peak congestion periods, particularly for properties near freeway corridors.</li>
                      <li><strong>Trolley schedule coordination:</strong> Santee Trolley stations create localized traffic patterns during peak transit hours (7-9 AM, 4-6 PM weekdays). For properties near Trolley Square or Santee Town Center, we coordinate service timing around transit parking and pedestrian traffic to ensure clear truck access to apartment complexes and mixed-use buildings.</li>
                      <li><strong>Weekend recreation traffic (Sat-Sun 8 AM-4 PM):</strong> Santee Lakes, Mission Trails access points, and Sportsplex USA create recreational traffic surges on weekends. Costco Saturday crowds (10 AM-3 PM) congest Mission Gorge Road corridor. For properties near these attractions, Sunday evening or weekday scheduling provides clearer access and faster service completion.</li>
                      <li><strong>School calendar impacts:</strong> Grossmont Union High School District and Santee School District calendars drive family garage organization patterns. May-June end-of-school-year transitions and August back-to-school preparations create demand surges for garage cleanouts and storage reorganization. Book 2-3 weeks ahead during these peak family transition periods for best availability.</li>
                    </ul>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">East County Climate Considerations</h3>
                    <p className="text-gray-700 mb-6">
                      Santee's inland East County location creates warmer, drier conditions than coastal San Diego neighborhoods. Summer temperatures (June-September) regularly reach 85-95°F, making early morning (7-10 AM) scheduling ideal for both crew efficiency and client comfort during property walkthroughs and garage assessments. The warm, dry climate accelerates outdoor storage deterioration—sun-faded patio furniture, heat-damaged plastics, and weathered recreational equipment accumulate in Santee's generous garage spaces, creating year-round junk removal needs. Winter months (December-February) bring occasional heavy rainfall events that can cause temporary street flooding in low-lying areas near the San Diego River corridor, requiring schedule flexibility. Santee's position at the base of East County foothills creates occasional Santa Ana wind conditions (September-November) that make outdoor item staging challenging—we tarp and secure loads carefully during high wind periods to prevent debris migration and ensure safe transport to disposal facilities.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in Santee</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>Santee junk removal</strong> service handles the diverse mix of items common to East County family living—from garage storage overflow to RV equipment to family home upgrades. We remove everything from single items to complete house cleanouts:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Furniture & Household</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Sofas, sectionals, recliners from family room upgrades</li>
                          <li>• Mattresses, bed frames, bedroom sets from growing families</li>
                          <li>• Dining tables, chairs, kitchen furniture for downsizing</li>
                          <li>• Desks, bookshelves, home office equipment from remote work transitions</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances & Electronics</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Refrigerators, freezers, washers, dryers from kitchen remodels</li>
                          <li>• Dishwashers, stoves, microwaves during appliance upgrades</li>
                          <li>• TVs, computers, gaming systems from tech refreshes</li>
                          <li>• Exercise equipment, treadmills, ellipticals from home gym changes</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Recreation & Outdoor Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Camping gear, RV equipment, recreational vehicle accessories</li>
                          <li>• Bikes, scooters, outdoor toys from growing children</li>
                          <li>• Patio furniture, BBQ grills, outdoor entertaining equipment</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs and spas</a> from backyard renovations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Cleanouts & Debris</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Garage cleanouts for two-car and three-car storage spaces</li>
                          <li>• Apartment complex turnovers and tenant move-out debris</li>
                          <li>• Estate cleanouts for family property transitions</li>
                          <li>• Construction debris from home additions and remodeling projects</li>
                        </ul>
                      </div>
                    </div>

                    {/* How Our Service Works */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">How Our Santee Junk Removal Service Works</h3>
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <ol className="space-y-3 text-gray-700">
                        <li><strong>1. Contact Us:</strong> Call (619) 750-0114 or book online. Describe what you need removed and your Santee location. We'll provide estimated pricing based on volume and schedule your service window.</li>
                        <li><strong>2. Same-Day Scheduling Available:</strong> Call before noon for same-day <strong>junk pickup Santee</strong> service throughout East County. We coordinate arrival times around your schedule and Santee's traffic patterns for reliable, on-time service.</li>
                        <li><strong>3. We Arrive & Assess:</strong> Our uniformed crew arrives in clearly marked trucks during your scheduled window. We assess items for removal and provide a final quote before starting work—no hidden fees or surprises.</li>
                        <li><strong>4. We Load & Haul Everything:</strong> Our team does all lifting, loading, and hauling. We protect floors and doorways, navigate garage spaces and family homes efficiently, and complete removal quickly. You simply point—we handle the rest.</li>
                        <li><strong>5. Eco-Friendly Disposal:</strong> We sort items for donation, recycling, and responsible disposal. Usable furniture goes to local East County charities, recyclables to proper facilities, and only true trash to landfill as last resort.</li>
                        <li><strong>6. Clean Sweep & Payment:</strong> We sweep the area clean after removal and collect payment. Most jobs are completed in under two hours from arrival to departure.</li>
                      </ol>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Cleaners for Santee Junk Removal</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>East County Family Expertise:</strong> We understand Santee's family-oriented community and the unique junk removal needs that come with suburban East County living. From garage cleanouts in Carlton Hills to apartment turnovers near Trolley Square, our team has completed thousands of Santee jobs. We navigate hillside access, work efficiently around family schedules, and handle the storage overflow common to Santee's generous two-car and three-car garages.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Same-Day Service Available:</strong> Call before noon for same-day junk removal throughout Santee and East County. Our dispatch team actively monitors Mission Gorge Road traffic and schedules arrival windows that work around commute congestion, ensuring reliable service even during busy weekday periods or weekend recreation traffic near Santee Lakes.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> No hidden fees, no surprises. Upfront quotes based on volume with all labor, hauling, and disposal included. Hillside access in Carlton Hills doesn't change our rates—you pay for volume removed, not time or access challenges. Most Santee garage cleanouts range from quarter-truck to half-truck loads with clear pricing communicated before work begins.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Insured:</strong> Fully licensed California junk removal company with comprehensive liability insurance. We carry proper coverage for family home access, apartment complex coordination, and the diverse property types throughout Santee's neighborhoods—from single-family homes to multi-family developments near the Trolley corridor.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Santee"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Santee"
          contextParagraph="Garage cleanouts and family home clearances throughout Santee—from Carlton Hills to Santee Trolley Square—all use the same transparent pricing. No hidden fees, same-day service available."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Santee" />

        {/* FAQ Section */}
        <SanteeFAQSection />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related East County Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Family home furniture disposal and apartment complex cleanouts</p>
              </a>
              <a href="/construction-debris-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
                <p className="text-gray-600">Home remodeling cleanup and renovation debris removal</p>
              </a>
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
                <p className="text-gray-600">Family estate transitions and downsizing support</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
