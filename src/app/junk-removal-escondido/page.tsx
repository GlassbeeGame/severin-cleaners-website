import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EscondidoFAQSection from "./EscondidoFAQSection";
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
  title: "Junk Removal Escondido CA | North County's Reliable Choice | (619) 750-0114",
  description: "North County Escondido junk removal Hidden Meadows, San Pasqual Valley. Large lots, vineyard debris, agricultural. (619) 750-0114",
  keywords: [
    "junk removal escondido ca",
    "escondido junk removal",
    "junk hauling escondido",
    "junk pickup escondido",
    "furniture removal escondido",
    "trash removal escondido",
    "appliance removal escondido",
    "estate cleanout escondido",
    "commercial junk removal escondido",
    "same day junk removal escondido"
  ],
  openGraph: {
    title: "Junk Removal Escondido CA | Same-Day Pickup & Hauling Service",
    description: "Professional Escondido junk removal for homes and businesses. Same-day service, affordable pricing, eco-friendly disposal.",
    url: "https://severincleaners.com/junk-removal-escondido",
    siteName: "Severin Cleaners",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://severincleaners.com/images/junk-removal-escondido.jpg",
        width: 1200,
        height: 630,
        alt: "Junk Removal Escondido CA - Severin Cleaners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junk Removal Escondido CA | Same-Day Pickup & Hauling Service",
    description: "Professional Escondido junk removal for homes and businesses. Same-day service, affordable pricing, eco-friendly disposal.",
    images: ["https://severincleaners.com/images/junk-removal-escondido.jpg"],
  },
  alternates: {
    canonical: "https://severincleaners.com/junk-removal-escondido",
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
    'geo.placename': 'Escondido',
    'geo.position': '33.1192;-117.0864',
    'ICBM': '33.1192, -117.0864',
  },
};

export default function EscondidoJunkRemovalPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Escondido",
    serviceName: "Junk Removal",
    description: "Professional Escondido junk removal services for residential and commercial properties. Fast, reliable, eco-friendly disposal with same-day service available.",
    url: "https://severincleaners.com/junk-removal-escondido",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Junk Removal Escondido", url: "https://severincleaners.com/junk-removal-escondido" },
  ]);

  const nearbyLocations = [
    { name: "Vista", slug: "vista" },
    { name: "Poway", slug: "poway" },
    { name: "Oceanside", slug: "oceanside" },
    { name: "El Cajon", slug: "el-cajon" },
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
                #1 Escondido Junk Removal Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Junk Removal Escondido CA
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                North County's Reliable Choice • Hidden Meadows to Downtown • Same-Day Service
              </p>

              <p className="text-lg mb-8">
                ✓ North County Experts ✓ Same-Day Hauling ✓ Licensed & Insured
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
                      Professional Junk Hauling Escondido CA – Hidden Meadows to Downtown
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      <strong>Junk removal Escondido CA</strong> serves North County's most diverse inland community. From historic downtown bungalows to sprawling Hidden Meadows estates, from San Pasqual Valley vineyard properties to dense apartment complexes along Centre City Parkway, our <strong>Escondido junk removal</strong> team navigates steep hillside driveways, agricultural access roads, and narrow downtown streets with expertise. We provide same-day <strong>junk hauling Escondido</strong> for residential cleanouts, commercial properties, and estate sales throughout the 92025, 92026, and 92027 zip codes with transparent pricing and eco-friendly disposal.
                    </p>

                    <p className="text-gray-700 mb-6">
                      Our Escondido operation is uniquely equipped to handle the challenges of North County's largest inland city. We understand that <strong>junk pickup Escondido</strong> requires more than just hauling trucks—it demands local knowledge of hillside terrain, understanding of agricultural property access, familiarity with HOA requirements in planned communities, and the ability to work efficiently across Escondido's dramatic elevation changes and diverse property types. Whether you're clearing out a downtown apartment after tenant turnover, removing construction debris from a Hidden Meadows remodel, or handling a full estate cleanout in the historic core, our team brings the specialized experience Escondido properties demand.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Escondido Neighborhoods We Serve</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>furniture removal Escondido</strong> service covers every corner of North County's largest inland city, from downtown historic districts to hillside communities bordering the Cleveland National Forest. We've completed thousands of <strong>trash removal Escondido</strong> jobs throughout Escondido's diverse neighborhoods, each with unique access challenges and property characteristics that inform our service approach:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        <li><strong>Downtown Escondido:</strong> Historic core with narrow streets, mixed-use buildings, and older apartment complexes requiring careful navigation</li>
                        <li><strong>Hidden Meadows:</strong> Gated hillside community with steep driveways, custom estates, and long access roads requiring extended service times</li>
                        <li><strong>San Pasqual Valley:</strong> Rural agricultural properties, vineyards, horse properties with large-lot cleanouts and agricultural debris</li>
                        <li><strong>Felicita Park Area:</strong> Family neighborhoods with mature landscaping, garage cleanouts, and yard waste removal needs</li>
                      </ul>
                      <ul className="space-y-2">
                        <li><strong>Jesmond Dene:</strong> Semi-rural hillside homes with challenging access and estate-sized property cleanouts</li>
                        <li><strong>North Broadway Corridor:</strong> Commercial district with business cleanouts and mixed-use property service</li>
                        <li><strong>Mission Avenue South:</strong> Residential neighborhoods with standard access and consistent service demand</li>
                        <li><strong>Rancho Bernardo Border:</strong> Planned communities with HOA requirements and standard suburban junk removal needs</li>
                      </ul>
                    </div>

                    {/* Major Streets */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Key Streets & Access</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>appliance removal Escondido</strong> team knows every major thoroughfare and neighborhood street in Escondido. This local expertise matters when navigating North County's diverse terrain—steep hillside roads in Hidden Meadows, narrow downtown alleys, agricultural access roads in San Pasqual Valley, and busy commercial corridors. We plan each <strong>estate cleanout Escondido</strong> job with detailed route mapping to ensure our trucks can access your property efficiently:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      <li>• <strong>Centre City Parkway:</strong> Main commercial spine with peak congestion during rush hours</li>
                      <li>• <strong>Valley Parkway (Highway 78):</strong> East-west connector requiring morning traffic planning</li>
                      <li>• <strong>El Norte Parkway:</strong> Northern access with hillside neighborhood connections</li>
                      <li>• <strong>Escondido Boulevard:</strong> North-south arterial through downtown core</li>
                      <li>• <strong>Auto Park Way:</strong> Commercial district with business access requirements</li>
                      <li>• <strong>Bear Valley Parkway:</strong> Eastern corridor to rural properties and vineyards</li>
                      <li>• <strong>Broadway:</strong> Historic downtown with limited parking and narrow streets</li>
                      <li>• <strong>Mission Avenue:</strong> Residential corridor with consistent neighborhood access</li>
                    </ul>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Escondido Landmarks</h3>
                    <p className="text-gray-700 mb-4">
                      We provide <strong>commercial junk removal Escondido</strong> service near all major landmarks. These familiar reference points help us navigate quickly to your property and provide accurate arrival time estimates throughout this geographically expansive North County city:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• California Center for the Arts—downtown cultural hub</li>
                        <li>• Palomar Medical Center—major healthcare facility</li>
                        <li>• Westfield North County—regional shopping destination</li>
                        <li>• Stone Brewing World Bistro—craft brewery landmark</li>
                        <li>• Escondido City Hall—civic center location</li>
                        <li>• San Diego Zoo Safari Park—eastern boundary landmark</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Felicita Park—central recreation area</li>
                        <li>• Lake Dixon & Daley Ranch—outdoor recreation areas</li>
                        <li>• San Pasqual Battlefield—historic site reference</li>
                        <li>• Grape Day Park—downtown historic district</li>
                        <li>• Hidden Meadows Community Center—hillside hub</li>
                        <li>• Escondido High School—central educational landmark</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Traffic & Service Timing</h3>
                    <p className="text-gray-700 mb-4">
                      Escondido's inland location and commuter traffic patterns affect <strong>same day junk removal Escondido</strong> timing significantly. Our dispatch team actively monitors North County traffic patterns and coordinates with you to schedule service windows that minimize wait times and maximize efficiency:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      <li><strong>Morning commute (7-9 AM):</strong> Valley Parkway and Centre City Parkway experience heavy eastbound traffic as commuters head toward inland employment centers. We schedule early morning (6-7 AM) starts or wait until after 9:30 AM for properties requiring these corridor crossings.</li>
                      <li><strong>Afternoon commute (3:30-6 PM):</strong> Westbound traffic clogs Valley Parkway as workers return from Rancho Bernardo and Poway. Downtown Escondido sees increased congestion around Escondido Boulevard and Broadway. We prioritize mid-morning to early afternoon service windows for optimal access.</li>
                      <li><strong>Safari Park events:</strong> Special events at San Diego Zoo Safari Park create significant traffic on Via Rancho Parkway and eastbound Valley Parkway, particularly on summer weekends. We coordinate around these events when serving eastern Escondido and San Pasqual Valley properties.</li>
                      <li><strong>Downtown events:</strong> Friday night Cruisin' Grand car shows (April-September) close portions of downtown Grand Avenue 5-9 PM. We route around downtown core during these popular weekly events or schedule service earlier in the day for nearby properties.</li>
                    </ul>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Inland Climate Considerations</h3>
                    <p className="text-gray-700 mb-6">
                      Escondido's inland North County climate impacts junk removal year-round with temperature extremes and fire weather risks that coastal areas don't experience. Summer temperatures regularly exceed 95°F, making outdoor junk accumulation a pest attraction and odor concern—decomposing materials in garages and yards create urgent removal needs faster than in cooler coastal zones. Our crews schedule early morning starts (6-8 AM) during heat waves to complete physical hauling work during cooler hours, protecting both crew safety and preventing heat damage to items being transported. Winter brings Escondido's limited but intense rainfall, with December-February storms causing drainage issues in hillside neighborhoods, flash flooding in low-lying areas near creek beds, and significant landscape debris from wind and water damage. Most critically, Escondido faces elevated wildfire risk during Santa Ana wind events (September-December), when hillside communities like Hidden Meadows and Jesmond Dene require aggressive brush clearance and defensible space maintenance—we prioritize fire season debris removal for properties in high-risk zones, coordinating with Cal Fire guidelines and homeowner HOA requirements.

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in Escondido</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>junk removal Escondido CA</strong> service handles the unique mix of items common to North County inland living—from fire-season brush and agricultural debris to estate cleanouts and commercial property clearances. We remove everything from single items to complete property cleanouts:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Furniture & Household</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Sofas, couches, sectionals for estate sales</li>
                          <li>• Mattresses, box springs, bed frames from turnovers</li>
                          <li>• Dressers, tables, chairs from downsizing moves</li>
                          <li>• Desks, bookshelves, cabinets for garage cleanouts</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances & Electronics</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Refrigerators, washers, dryers from rental properties</li>
                          <li>• Dishwashers, stoves, microwaves needing replacement</li>
                          <li>• TVs, computers, electronics from tech upgrades</li>
                          <li>• Air conditioners, heaters, swamp coolers</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Outdoor & Yard Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Brush, branches, fire clearance debris</li>
                          <li>• Patio furniture, BBQ grills, outdoor equipment</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs and spas</a> for backyard renovations</li>
                          <li>• Fencing materials, landscaping waste, tree trimmings</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Cleanouts & Debris</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Estate & garage cleanouts for entire properties</li>
                          <li>• Storage unit contents and accumulated items</li>
                          <li>• <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">Construction debris</a> from home remodels</li>
                          <li>• Commercial property and business cleanouts</li>
                        </ul>
                      </div>
                    </div>

                    {/* How Our Service Works */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">How Our Escondido Junk Removal Service Works</h3>
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <ol className="space-y-3 text-gray-700">
                        <li><strong>1. Contact Us:</strong> Call (619) 750-0114 or book online. Describe what you need removed and your Escondido location. We'll provide estimated pricing based on volume and schedule your service window.</li>
                        <li><strong>2. Same-Day Scheduling Available:</strong> Call before noon for same-day <strong>junk pickup Escondido</strong> service throughout North County. We coordinate arrival times around traffic patterns and your schedule preferences.</li>
                        <li><strong>3. We Arrive & Assess:</strong> Our uniformed crew arrives in clearly marked trucks during your scheduled window. We assess items for removal and provide a final quote before starting work—no hidden fees or surprises.</li>
                        <li><strong>4. We Load & Haul Everything:</strong> Our team does all lifting, loading, and hauling. We protect floors and doorways, navigate stairs and hillside properties, and complete removal efficiently. You simply point—we handle the rest.</li>
                        <li><strong>5. Eco-Friendly Disposal:</strong> We sort items for donation, recycling, and responsible disposal. Usable furniture goes to local charities, recyclables to proper facilities, and only true trash to landfill as last resort.</li>
                        <li><strong>6. Clean Sweep & Payment:</strong> We sweep the area clean after removal and collect payment. Most jobs are completed in under two hours from arrival to departure.</li>
                      </ol>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Cleaners for Escondido Junk Removal</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>North County Expertise:</strong> We navigate Escondido's challenging terrain with ease—steep hillside driveways in Hidden Meadows, narrow downtown streets, agricultural property access in San Pasqual Valley, and everything in between. Our crews have completed thousands of Escondido junk removal jobs and understand the specific access challenges of North County's diverse property types.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Same-Day Service Available:</strong> Call before noon for same-day junk removal throughout Escondido and the 92025, 92026, 92027 zip codes. Our dispatch team actively monitors North County traffic and schedules arrival windows that work around commuter congestion, ensuring reliable service even during busy periods.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> No hidden fees, no surprises. Upfront quotes based on volume with all labor, hauling, and disposal included. Hillside access or downtown parking challenges don't change our rates—you pay for volume removed, not time or access difficulty.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Insured:</strong> Fully licensed California junk removal company with comprehensive liability insurance. We carry proper coverage for challenging property access, including protection for steep driveways, hillside terrain, and properties requiring extended access routes.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Escondido"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Escondido"
          contextParagraph="Estate cleanouts and garage clearances throughout Escondido—from Hidden Meadows hillside homes to downtown properties—all use the same transparent pricing. No hidden fees, same-day service available."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Escondido" />

        {/* FAQ Section */}
        <EscondidoFAQSection />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related North County Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Sofas, mattresses, and bulky furniture removal throughout Escondido</p>
              </a>
              <a href="/appliance-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal San Diego</h4>
                <p className="text-gray-600">Fridges, washers, dryers, and appliance disposal for North County</p>
              </a>
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanout San Diego</h4>
                <p className="text-gray-600">Complete property cleanouts for estates and downsizing moves</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
