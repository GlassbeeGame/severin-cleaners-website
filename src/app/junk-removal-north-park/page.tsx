import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NorthParkFAQSection from "./NorthParkFAQSection";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: 'North Park Junk Removal | Urban Neighborhood Experts | (619) 750-0114',
  description: 'North Park urban junk removal 30th St to University Ave. Craftsman homes, street parking, apartment turnovers. (619) 750-0114',
  keywords: 'North Park junk removal, junk hauling North Park, junk pickup North Park, trash removal North Park, North Park San Diego junk removal, University Avenue junk hauling, 30th Street junk removal',
  openGraph: {
    title: 'North Park Junk Removal | Same-Day Hauling | Licensed & Insured',
    description: 'Professional North Park junk removal for University Avenue, 30th Street, apartments & historic homes. Same-day service, transparent pricing. Licensed & insured. Call (619) 750-0114!',
    url: 'https://severincleaners.com/junk-removal-north-park',
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-north-park',
  },
};

const serviceSchema = generateLocationServiceSchema({
  locationName: "North Park",
  serviceName: "Junk Removal",
  description: "Professional North Park junk removal for University Avenue, 30th Street, apartments & historic homes. Same-day service, transparent pricing. Licensed & insured.",
  url: "https://severincleaners.com/junk-removal-north-park",
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://severincleaners.com" },
  { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
  { name: "North Park Junk Removal", url: "https://severincleaners.com/junk-removal-north-park" },
]);

export default function JunkRemovalNorthParkPage() {
  const nearbyLocations = [
    { name: "Hillcrest", slug: "hillcrest" },
    { name: "Kearny Mesa", slug: "kearny-mesa" },
    { name: "Clairemont", slug: "clairemont" },
    { name: "El Cajon", slug: "el-cajon" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [serviceSchema, breadcrumbSchema],
          }),
        }}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center text-white">
                <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  ✓ Same-Day Service • Licensed & Insured • Transparent Pricing
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  North Park Junk Removal | Urban Neighborhood Experts
                </h1>

                <h2 className="text-xl md:text-2xl font-semibold mb-6 text-blue-100">
                  Professional Junk Hauling for University Avenue, 30th Street & Craftsman Homes
                </h2>

                <div className="text-xl mb-6">
                  ⭐⭐⭐⭐⭐ 5.0 Rating • University Avenue to Morley Field • Local Experts
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <a
                    href="tel:6197500114"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                  >
                    📞 Call (619) 750-0114
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                  >
                    Book Your North Park Junk Pickup – Save 15% Online
                  </a>
                </div>

                <p className="text-lg">
                  ✓ <a href="/same-day-junk-removal-san-diego" className="text-white hover:underline">Same-Day Service</a> Available ✓ Licensed & Insured ✓ Eco-Friendly Disposal
                </p>
              </div>
            </div>
          </section>

          {/* Main Content with Sidebar */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Main Content Column */}
                  <div className="lg:col-span-2">
                    <div className="prose prose-lg max-w-none">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Expert Junk Removal North Park Residents Trust
                      </h2>

                      <p className="text-lg text-gray-700 mb-6">
                        North Park junk removal requires specialized knowledge of San Diego's most vibrant urban neighborhood. From historic Craftsman bungalows along tree-lined streets to modern apartment complexes near the University Avenue corridor, our <strong>junk hauling North Park</strong> service navigates the unique challenges of this densely populated arts district with expertise. We understand tight street parking near 30th Street's nightlife scene, narrow driveways off Idaho and Utah Streets, and the coordination needed for multi-story apartment cleanouts throughout the 92104 zip code.
                      </p>

                      <p className="text-lg text-gray-700 mb-6">
                        Whether you need <strong>junk pickup North Park</strong> for an apartment turnover near the craft brewery district, furniture removal from a century-old Craftsman home, or commercial cleanout along the bustling restaurant corridor, our team delivers efficient service that respects this neighborhood's unique character. From Balboa Park's eastern edge to El Cajon Boulevard's commercial zone, we provide same-day <strong>trash removal North Park</strong> that urban residents and business owners depend on.
                      </p>

                      <p className="text-lg text-gray-700 mb-6">
                        Our <strong>North Park San Diego junk removal</strong> operation serves one of the city's most walkable, bikeable, and transit-connected communities. The neighborhood's mix of historic homes, modern condos, and active street life creates distinct challenges—limited parking zones, narrow stairwells in older buildings, and timing coordination around the area's busy nightlife schedule. We've removed everything from single furniture pieces during apartment moves to complete estate cleanouts in multi-generational Craftsman homes, always maintaining the professional, community-focused approach that North Park residents expect.
                      </p>

                      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                        North Park Neighborhoods We Serve
                      </h2>

                      <p className="text-lg text-gray-700 mb-6">
                        Our comprehensive <strong>junk hauling North Park</strong> coverage extends throughout all distinct sub-neighborhoods of this diverse urban community:
                      </p>

                      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                        <ul className="space-y-3 text-gray-700">
                          <li><strong>University Avenue Arts Corridor</strong> — The neighborhood's vibrant main street from Park Boulevard to Texas Street, featuring craft breweries, independent restaurants, and mixed-use developments with ground-floor retail and upper-story apartments requiring coordinated building access</li>
                          <li><strong>30th Street Restaurant District</strong> — North Park's culinary and nightlife heart with high-density dining, bars, and entertainment venues needing flexible commercial cleanout scheduling around business hours</li>
                          <li><strong>North Park Community Park Area</strong> — Family-friendly residential zone surrounding the neighborhood's central green space, featuring Craftsman homes, bungalows, and apartment complexes along Idaho, Kansas, and Mississippi Streets</li>
                          <li><strong>Morley Field Recreation Area</strong> — Eastern neighborhood boundary adjacent to Balboa Park's sports facilities, with established single-family homes on larger lots along Pershing Avenue and Upas Street</li>
                          <li><strong>El Cajon Boulevard Corridor</strong> — North Park's northern commercial boundary with multi-family housing, older apartment complexes, and mixed-use properties requiring apartment-specific junk removal expertise</li>
                          <li><strong>Ray Street Arts District</strong> — Concentrated creative community with artist studios, galleries, and converted commercial spaces needing specialized cleanout services for creative materials</li>
                          <li><strong>Historic Dryden District</strong> — Concentrated collection of 1920s-1930s Spanish Colonial Revival and Craftsman architecture requiring careful historic property handling</li>
                          <li><strong>Boundary Residential Streets</strong> — Utah Street, Texas Street, Ohio Street, and Iowa Street corridors with mixed housing types from historic bungalows to contemporary infill developments</li>
                          <li><strong>Park Boulevard Gateway</strong> — Western edge providing Balboa Park access, featuring hillside homes with canyon views and challenging driveway access</li>
                          <li><strong>Louisiana Purchase Complex Area</strong> — Mid-century apartment communities along Louisiana Street and surrounding blocks with multi-story building coordination needs</li>
                          <li><strong>Polk Avenue Commercial</strong> — Mixed residential-commercial zone with small business spaces, live-work units, and urban apartments requiring flexible service</li>
                          <li><strong>32nd Street Corridor</strong> — Eastern residential boundary transitioning to Normal Heights, featuring established single-family neighborhoods with mature landscaping and tree-lined streets</li>
                        </ul>
                      </div>

                      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                        Major Streets & Access Routes in North Park
                      </h2>

                      <p className="text-lg text-gray-700 mb-6">
                        North Park's grid street pattern and proximity to major freeways provides excellent access, though urban parking requires local expertise:
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-blue-600">Primary Corridors</h3>
                          <ul className="space-y-2 text-gray-700">
                            <li><strong>University Avenue</strong> — Main east-west commercial spine with metered parking, bike lanes, and frequent bus service creating midday congestion</li>
                            <li><strong>30th Street</strong> — North-south restaurant and nightlife corridor with evening parking challenges and loading zone restrictions</li>
                            <li><strong>El Cajon Boulevard</strong> — Northern boundary providing I-805 freeway access via El Cajon Boulevard on-ramps</li>
                            <li><strong>Park Boulevard</strong> — Western gateway connecting to Balboa Park and downtown San Diego with hillside terrain</li>
                            <li><strong>Interstate 805</strong> — Eastern freeway boundary providing rapid regional access via University Avenue and El Cajon Boulevard interchanges</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-blue-600">Residential Streets</h3>
                          <ul className="space-y-2 text-gray-700">
                            <li><strong>Idaho Street & Utah Street</strong> — Prime residential streets with Craftsman homes and narrow driveways requiring careful vehicle positioning</li>
                            <li><strong>Texas Street</strong> — Mixed residential corridor with apartments and single-family homes, popular bike route with limited parking</li>
                            <li><strong>Mississippi Street</strong> — Quiet residential street near community park with family homes and established trees creating access considerations</li>
                            <li><strong>Polk Avenue</strong> — Connecting corridor with mixed property types and commercial-residential transitions</li>
                            <li><strong>32nd Street</strong> — Eastern boundary street providing Normal Heights access and residential neighborhood connections</li>
                          </ul>
                        </div>
                      </div>

                      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                        North Park Landmarks & Navigation Reference Points
                      </h2>

                      <p className="text-lg text-gray-700 mb-6">
                        Our crews navigate efficiently using North Park's well-known landmarks and community anchors:
                      </p>

                      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                        <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                          <li><strong>North Park Theatre</strong> — Historic 1928 cinema landmark at University and 29th, arts district anchor</li>
                          <li><strong>North Park Community Park</strong> — 2-acre neighborhood green space with recreation center and playground</li>
                          <li><strong>Morley Field Sports Complex</strong> — Balboa Park athletics facility with disc golf, tennis, pool, velodrome</li>
                          <li><strong>North Park Water Tower</strong> — Iconic 1924 landmark visible throughout neighborhood</li>
                          <li><strong>Birch North Park Theatre</strong> — Second-run movie house and community gathering space</li>
                          <li><strong>Lafayette Hotel & Swim Club</strong> — Historic 1946 hotel and neighborhood institution</li>
                          <li><strong>Ray Street Arts District</strong> — Concentrated gallery and studio corridor</li>
                          <li><strong>North Park Farmers Market</strong> — Thursday evening market at North Park Community Park</li>
                          <li><strong>Observatory North Park</strong> — Craft beer destination and neighborhood landmark</li>
                          <li><strong>North Park Main Street</strong> — Business improvement district organization offices</li>
                          <li><strong>Balboa Park Eastern Entrance</strong> — Park Boulevard access to cultural institutions</li>
                          <li><strong>Mike Hess Brewing</strong> — Landmark craft brewery in North Park brewing corridor</li>
                        </ul>
                      </div>

                      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                        Traffic Patterns & Service Timing in North Park
                      </h2>

                      <p className="text-lg text-gray-700 mb-6">
                        Urban North Park experiences distinct traffic patterns that inform our <strong>junk pickup North Park</strong> scheduling:
                      </p>

                      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                        <h3 className="text-xl font-bold mb-3 text-yellow-900">Peak Congestion Times</h3>
                        <p className="text-gray-700 mb-3">
                          University Avenue and 30th Street see heavy traffic during weekday commute hours (7-9 AM, 4-7 PM) as the neighborhood serves as a pass-through route between I-805 and downtown. Evening congestion intensifies Thursday-Saturday nights (7 PM-midnight) when the restaurant and bar scene peaks. We schedule most North Park services for mid-morning or early afternoon to avoid both commuter traffic and nightlife parking challenges.
                        </p>
                        <p className="text-gray-700">
                          Interstate 805 access via University Avenue and El Cajon Boulevard ramps provides efficient regional connections, though rush hour backups on I-805 northbound (4-7 PM weekdays) can delay access. Our crews monitor real-time traffic and use Park Boulevard or Texas Street alternatives when freeway delays occur.
                        </p>
                      </div>

                      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                        Weather Considerations for North Park Junk Removal
                      </h2>

                      <p className="text-lg text-gray-700 mb-6">
                        North Park's urban environment creates a microclimate slightly warmer than coastal San Diego:
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                          <h3 className="font-bold mb-2 text-orange-900">☀️ Urban Heat Island Effect</h3>
                          <p className="text-gray-700">Dense development and limited tree canopy in commercial areas create temperatures 5-10°F warmer than coastal neighborhoods during summer afternoons. We schedule physically demanding multi-story apartment cleanouts for morning hours during June-September heat.</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <h3 className="font-bold mb-2 text-blue-900">🌤️ Year-Round Service Weather</h3>
                          <p className="text-gray-700">North Park's inland-but-not-too-far location provides comfortable 65-75°F temperatures most of the year. Occasional winter rain (December-March) is our only weather consideration, rarely impacting service schedules. Perfect conditions for junk removal projects year-round.</p>
                        </div>
                      </div>

                      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                        What We Remove in North Park
                      </h2>

                      <p className="text-lg text-gray-700 mb-6">
                        Our comprehensive <strong>trash removal North Park</strong> service handles the unique mix of urban residential and commercial junk:
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-green-600">Residential Items</h3>
                          <ul className="space-y-2 text-gray-700">
                            <li><strong>Apartment furniture:</strong> Sofas, beds, dining sets from University Avenue and 30th Street multi-story buildings</li>
                            <li><strong>Craftsman home items:</strong> Built-in furniture, vintage fixtures, renovation debris from historic properties</li>
                            <li><strong>Appliances:</strong> Refrigerators, washers, dryers, dishwashers from older homes and apartment complexes</li>
                            <li><strong>Exercise equipment:</strong> Treadmills, weight benches, home gym equipment from urban condos</li>
                            <li><strong>Electronics:</strong> TVs, computers, stereo equipment for eco-friendly recycling</li>
                            <li><strong>Mattresses & box springs:</strong> From apartment turnovers and bedroom updates</li>
                            <li><strong>Yard waste:</strong> Tree trimmings, plant debris, landscaping materials from residential properties</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-green-600">Commercial & Creative Items</h3>
                          <ul className="space-y-2 text-gray-700">
                            <li><strong>Restaurant equipment:</strong> Kitchen appliances, tables, chairs from 30th Street dining establishments</li>
                            <li><strong>Bar fixtures:</strong> Glassware, furniture, equipment from nightlife venues</li>
                            <li><strong>Retail displays:</strong> Shelving, fixtures, signage from University Avenue shops</li>
                            <li><strong>Office furniture:</strong> Desks, chairs, filing cabinets from mixed-use buildings</li>
                            <li><strong>Art supplies:</strong> Materials, equipment, installations from Ray Street studios and galleries</li>
                            <li><strong>Brewery equipment:</strong> Kegs, furniture, materials from craft beer businesses</li>
                            <li><strong>Construction debris:</strong> Renovation materials, drywall, flooring from commercial and residential remodels</li>
                          </ul>
                        </div>
                      </div>

                      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                        How Our North Park Junk Removal Service Works
                      </h2>

                      <p className="text-lg text-gray-700 mb-6">
                        Our streamlined process makes <strong>junk hauling North Park</strong> simple and stress-free:
                      </p>

                      <div className="bg-blue-50 rounded-lg p-6 mb-8">
                        <ol className="space-y-4 text-gray-700">
                          <li><strong>1. Contact & Quote:</strong> Call (619) 750-0114 or book online. Describe your location (University Avenue apartment, Craftsman home near Morley Field, etc.) and items for removal. We provide transparent pricing based on volume.</li>
                          <li><strong>2. Flexible Scheduling:</strong> Choose a 2-hour service window that works with your schedule. Same-day service available for calls before 2 PM. We coordinate with building managers for apartment and condo access.</li>
                          <li><strong>3. Professional Arrival:</strong> Our uniformed crew arrives in clearly marked vehicles, finds parking near your property (we handle all parking logistics), and assesses items to confirm pricing.</li>
                          <li><strong>4. Efficient Removal:</strong> We handle all lifting, loading, and cleanup. Multi-story apartments, narrow Craftsman home hallways, tight parking—we navigate it all professionally. Most North Park jobs complete within 1-2 hours.</li>
                          <li><strong>5. Eco-Friendly Disposal:</strong> Usable items go to local charities. Recyclables reach proper facilities. We minimize landfill waste and provide documentation when requested.</li>
                          <li><strong>6. Final Walkthrough:</strong> We ensure complete satisfaction, sweep the area clean, and process payment. Many North Park clients use our service repeatedly for ongoing needs.</li>
                        </ol>
                      </div>

                      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                        Why North Park Residents Choose Severin Cleaners
                      </h2>

                      <p className="text-lg text-gray-700 mb-6">
                        North Park's unique urban character demands specialized expertise. Our <strong>North Park San Diego junk removal</strong> team delivers:
                      </p>

                      <div className="bg-gray-50 rounded-lg p-6 mb-8">
                        <ul className="space-y-3 text-gray-700">
                          <li><strong>Urban Parking Expertise:</strong> We navigate 2-hour parking limits, metered zones, and restricted areas along University Avenue and 30th Street without impacting your schedule or generating parking citations.</li>
                          <li><strong>Multi-Story Building Experience:</strong> Extensive work in apartment buildings throughout the neighborhood means we know elevator scheduling, loading zone coordination, and building management communication protocols.</li>
                          <li><strong>Historic Property Care:</strong> Careful handling of Craftsman homes' original hardwood floors, architectural details, and narrow doorways prevents damage to century-old properties.</li>
                          <li><strong>Flexible Timing:</strong> We schedule around North Park's active nightlife, working with restaurant and bar owners on timing that doesn't disrupt business operations.</li>
                          <li><strong>Community Connection:</strong> As local San Diego professionals, we support North Park's arts scene through material donations to galleries and studios, furniture donations to community organizations, and eco-friendly practices.</li>
                          <li><strong>Same-Day Response:</strong> Urban needs often require fast service. We provide same-day <strong>junk pickup North Park</strong> for apartment turnovers, business emergencies, and time-sensitive situations.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar Column */}
                  <div className="lg:col-span-1">
                    <LocationSidebarCTA
                      locationName="North Park"
                      nearbyLocations={nearbyLocations}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <LocationPricingSection
            locationName="North Park"
            contextParagraph="Transparent pricing for urban North Park junk removal—from University Avenue apartments to historic Craftsman homes near Morley Field. Whether you're clearing a studio apartment or updating a multi-story building, you'll know the exact cost before we begin."
          />

          {/* Trust Signals Section */}
          <TrustSignalsSection locationName="North Park" coverageArea="Urban San Diego" />

          {/* FAQ Section */}
          <NorthParkFAQSection />

          {/* Final CTA Section */}
          <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">
                  Book Your North Park Junk Removal Today
                </h2>
                <p className="text-xl mb-8 leading-relaxed">
                  Whether you're clearing out a University Avenue apartment, renovating a Craftsman home, or managing a restaurant cleanout on 30th Street, Severin Cleaners delivers the trusted junk removal North Park residents and businesses depend on.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <a
                    href="tel:+16197500114"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                  >
                    📞 Call (619) 750-0114
                  </a>
                  <a
                    href="/contact"
                    className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                  >
                    Request Your Free Quote Now
                  </a>
                </div>
                <p className="text-blue-200 text-lg">
                  Serving all of North Park — from University Avenue to Morley Field • Same-Day Service Available • Licensed & Insured
                </p>
              </div>
            </div>
          </section>

          {/* Related Services */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <h3 className="text-2xl font-bold text-center mb-8">Related North Park Services</h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                  <p className="text-gray-600">Apartment and historic home furniture removal throughout North Park with eco-friendly donation options</p>
                </a>
                <a href="/appliance-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal San Diego</h4>
                  <p className="text-gray-600">Safe appliance removal from condos and multi-family units near El Cajon Boulevard</p>
                </a>
                <a href="/construction-debris-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
                  <p className="text-gray-600">Renovation and remodel debris hauling for North Park's historic Craftsman homes</p>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
