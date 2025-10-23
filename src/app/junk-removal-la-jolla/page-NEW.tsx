import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LaJollaFAQSection from "./LaJollaFAQSection";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "La Jolla Junk Removal | Luxury Estate Service | (619) 750-0114",
  description: "La Jolla luxury estate junk removal Bird Rock to UTC. White-glove $5M+ properties. Discreet, professional. (619) 750-0114",
  keywords: "La Jolla junk removal, junk hauling La Jolla, trash removal La Jolla, junk pickup La Jolla, estate cleanout La Jolla, La Jolla furniture removal, luxury junk removal",
  openGraph: {
    title: "La Jolla Junk Removal | Estate Cleanouts & Luxury Furniture Disposal | Same-Day Service",
    description: "Premium La Jolla junk removal for estates, luxury homes, Bird Rock, Muirlands. Discreet service with unmarked vehicles. Expert luxury furniture handling. Call (619) 750-0114.",
    url: "https://severincleaners.com/junk-removal-la-jolla",
  },
  alternates: {
    canonical: "https://severincleaners.com/junk-removal-la-jolla",
  },
};

const serviceSchema = generateLocationServiceSchema({
  locationName: "La Jolla",
  serviceName: "Junk Removal",
  description: "Premium La Jolla junk removal for estates, luxury homes, Bird Rock, Muirlands. Discreet service with unmarked vehicles. Expert luxury furniture handling.",
  url: "https://severincleaners.com/junk-removal-la-jolla",
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://severincleaners.com" },
  { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
  { name: "La Jolla Junk Removal", url: "https://severincleaners.com/junk-removal-la-jolla" },
]);

export default function JunkRemovalLaJollaPage() {
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
                  ✓ Luxury Estate Specialists Serving La Jolla's Exclusive Communities
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Junk Removal La Jolla | Luxury Estate Service
                </h1>

                <h2 className="text-xl md:text-2xl font-semibold mb-6 text-blue-100">
                  Discreet, Luxury Junk Removal Services for La Jolla's Exclusive Homes and Estates
                </h2>

                <div className="text-xl mb-6">
                  ⭐⭐⭐⭐⭐ 5.0 Rating • White-Glove Service • Unmarked Vehicles
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
                    Get 15% Off La Jolla Estate Quote
                  </a>
                </div>

                <p className="text-lg">
                  ✓ Same-Day Service Available ✓ Licensed & Insured ✓ La Jolla Estate Specialists
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <LocationPricingSection
            locationName="La Jolla"
            contextParagraph="Transparent pricing for luxury estates throughout La Jolla—from oceanfront Bird Rock to hillside Muirlands. Whether you're clearing a multi-million dollar estate or updating a Village condo, you'll know the exact cost before we begin."
          />

          {/* Introduction Content */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Expert Junk Removal La Jolla Homeowners Trust
                  </h2>

                  <p className="text-lg text-gray-700 mb-6">
                    As one of the top-rated services for junk removal in La Jolla, Severin Cleaners proudly serves homes from the Cove to UTC — offering same-day pickups, white-glove handling, and discreet service trusted by La Jolla's most exclusive neighborhoods.
                  </p>

                  <p className="text-lg text-gray-700 mb-6">
                    From oceanfront mansions to hillside estates, our La Jolla junk removal specialists handle every detail with care. We provide premium property cleanouts, furniture removal, and eco-conscious disposal — all completed quickly, quietly, and professionally.
                  </p>

                  <p className="text-lg text-gray-700 mb-6">
                    Whether you're renovating, preparing for sale, or managing an estate transition, we handle every phase from sorting and hauling to donation and documentation.
                  </p>

                  <p className="text-lg mb-6 font-semibold text-gray-800 italic">
                    "Our before-and-after junk removal results throughout La Jolla show what white-glove service truly means — fast, discreet, and spotless."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Complete Neighborhood Coverage */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  La Jolla Neighborhoods We Serve
                </h2>
                <p className="text-xl text-gray-600 mb-8 text-center">
                  Serving the entire La Jolla region with same-day junk removal service that's as professional as your property.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Coastal & Village Areas */}
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-blue-600">Coastal & Village La Jolla</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li><strong>La Jolla Village</strong> — Boutique luxury homes and historic properties near Girard Avenue, downtown shopping district</li>
                        <li><strong>Bird Rock</strong> — Oceanfront estates with private access, coastal residential junk removal, beachside properties</li>
                        <li><strong>Windansea</strong> — Coastal homes near the iconic beach, estate cleanouts and furniture removal for surf culture landmarks</li>
                        <li><strong>La Jolla Shores & Cove</strong> — Beachfront residences, luxury condos, and vacation properties along Camino del Oro</li>
                        <li><strong>Prospect Street Corridor</strong> — Historic mansions, oceanfront compounds, multi-million dollar estates with panoramic views</li>
                      </ul>
                    </div>

                    {/* Hillside & Inland Areas */}
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-blue-600">Hillside & Inland La Jolla</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li><strong>Muirlands & Hidden Valley</strong> — Family compounds, canyon view homes, gated estate communities</li>
                        <li><strong>Mount Soledad</strong> — Hillside estates, 360-degree view properties, luxury junk hauling for exclusive addresses</li>
                        <li><strong>Upper Hermosa</strong> — Canyon-view and hillside properties, challenging terrain requiring specialized access</li>
                        <li><strong>UTC / Torrey Pines</strong> — Executive residences, high-end remodels, <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:text-blue-700 underline">medical and dental office junk removal</a></li>
                        <li><strong>La Jolla Farms</strong> — Exclusive coastal plateau estates, agricultural heritage properties, private gated community</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <p className="text-gray-700 font-semibold">📞 Call (619) 750-0114 for immediate service in any La Jolla neighborhood</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Major Routes & Streets Coverage */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Major Routes & Streets We Cover in La Jolla
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Major Corridors */}
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-blue-600">Major Streets & Corridors</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>La Jolla Boulevard</strong> — Main coastal corridor connecting Bird Rock to Windansea, narrow winding road</li>
                      <li><strong>Torrey Pines Road</strong> — Scenic route to UTC and North County, hillside estates and coastal access</li>
                      <li><strong>Girard Avenue</strong> — Downtown Village shopping district, historic commercial core</li>
                      <li><strong>Prospect Street</strong> — Iconic oceanfront mansions, $20M+ estate properties, most exclusive addresses</li>
                      <li><strong>La Jolla Parkway</strong> — Access to Torrey Pines State Reserve and coastal developments</li>
                      <li><strong>Soledad Mountain Road</strong> — Winding hillside access to Mount Soledad estates</li>
                    </ul>
                  </div>

                  {/* Key Residential Streets */}
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-blue-600">Key Residential Streets</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Camino de la Costa</strong> — Luxury oceanfront estates, challenging coastal access</li>
                      <li><strong>Camino del Oro</strong> — La Jolla Shores beachfront properties</li>
                      <li><strong>Waverly Avenue</strong> — Bird Rock residential corridor, mixed housing types</li>
                      <li><strong>Hidden Valley Road</strong> — Secluded canyon estates, private gated properties</li>
                      <li><strong>Midway Street</strong> — Upper Hermosa hillside homes</li>
                      <li><strong>Silverado Street</strong> — Muirlands family estates</li>
                      <li><strong>Colima Street</strong> — Bird Rock coastal neighborhood</li>
                      <li><strong>Nautilus Street</strong> — Windansea beach community</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Local Landmarks & Reference Points */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  La Jolla Landmarks & Community Reference Points
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We know La Jolla's iconic landmarks and use them to navigate efficiently to your luxury property, ensuring discreet and timely service throughout this exclusive coastal community.
                </p>

                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                    <li><strong>La Jolla Cove</strong> — World-famous coastal landmark, tourist destination, sea lion habitat</li>
                    <li><strong>Mount Soledad Memorial</strong> — Iconic 360-degree viewpoint, navigational landmark for hillside estates</li>
                    <li><strong>Torrey Pines Golf Course</strong> — Prestigious public golf course, adjacent luxury estates</li>
                    <li><strong>UCSD Campus</strong> — Major employer, research institution, UTC area anchor</li>
                    <li><strong>Scripps Institution of Oceanography</strong> — World-renowned research facility</li>
                    <li><strong>Westfield UTC Mall</strong> — Premium shopping, executive residential surroundings</li>
                    <li><strong>Birch Aquarium</strong> — Educational landmark, Scripps campus</li>
                    <li><strong>La Jolla Playhouse</strong> — Tony Award-winning theater, UCSD campus</li>
                    <li><strong>The Windansea Shack</strong> — Historic surf culture landmark</li>
                    <li><strong>La Jolla Country Day School</strong> — Elite private school, family community hub</li>
                    <li><strong>Museum of Contemporary Art</strong> — Cultural institution, oceanfront Prospect Street</li>
                    <li><strong>La Valencia Hotel</strong> — Historic pink palace, Village landmark since 1926</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Traffic Patterns & Coastal Logistics */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Navigating La Jolla's Unique Traffic Patterns
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our <strong>junk hauling La Jolla</strong> crews understand the community's challenging coastal traffic patterns and navigate them expertly to ensure on-time arrivals at your luxury property:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <h3 className="font-bold mb-2 text-orange-900">🚗 Peak Tourist Season (Summer)</h3>
                    <p className="text-gray-700 mb-2">Memorial Day through Labor Day brings massive tourist traffic to the Cove, Shores, and Village. We schedule early morning or late afternoon appointments to avoid 10 AM - 6 PM congestion on La Jolla Boulevard and Torrey Pines Road.</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h3 className="font-bold mb-2 text-blue-900">🎓 UCSD Academic Calendar</h3>
                    <p className="text-gray-700 mb-2">Quarter start/end weeks create significant UTC and Torrey Pines corridor congestion. We adjust routing through Genesee Avenue and use La Jolla Village Drive alternatives during peak student move periods.</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h3 className="font-bold mb-2 text-green-900">🏖️ Weekend Beach Traffic</h3>
                    <p className="text-gray-700 mb-2">La Jolla Shores parking lot fills by 9 AM on summer weekends. Camino del Oro and La Jolla Shores Drive experience heavy beach-goer traffic. We prioritize weekday service or early weekend appointments for coastal properties.</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <h3 className="font-bold mb-2 text-purple-900">🛍️ UTC Shopping District</h3>
                    <p className="text-gray-700 mb-2">Westfield UTC and surrounding retail creates consistent weekday evening and weekend congestion. We use Nobel Drive and Genesee Avenue routing to access executive residences efficiently during peak shopping hours.</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                  <h3 className="text-xl font-bold mb-3 text-yellow-900">Narrow Coastal Roads & Access Challenges</h3>
                  <p className="text-gray-700 mb-3">
                    La Jolla's winding, narrow coastal roads require specialized navigation expertise:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><strong>La Jolla Boulevard:</strong> Narrow two-lane road with blind curves, limited truck turnaround, requires careful timing</li>
                    <li><strong>Mount Soledad access roads:</strong> Steep grades up to 15%, tight switchbacks, limited parking zones</li>
                    <li><strong>Hidden Valley estates:</strong> Private gated communities, single-lane canyon roads, security clearance requirements</li>
                    <li><strong>Prospect Street mansions:</strong> Limited street parking, permit zones, valet-style positioning for discrete service</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Weather & Coastal Conditions */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  La Jolla Weather & Coastal Environmental Factors
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  La Jolla's unique microclimate and coastal location create specific challenges for <strong>trash removal La Jolla</strong> services. Our luxury-focused team adapts to these conditions:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h3 className="font-bold mb-2 text-blue-900">🌊 Marine Layer & June Gloom</h3>
                    <p className="text-gray-700">May through July brings dense morning fog that burns off by afternoon. Coastal properties experience moisture and reduced visibility until 11 AM. We schedule outdoor estate work for late morning or afternoon when conditions improve.</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h3 className="font-bold mb-2 text-green-900">☀️ Consistent Mild Climate</h3>
                    <p className="text-gray-700">La Jolla averages 70°F year-round with minimal seasonal variation. Perfect conditions for estate projects year-round. Peak comfort March-May and September-November for outdoor cleanout work at luxury properties.</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <h3 className="font-bold mb-2 text-orange-900">💨 Santa Ana Winds</h3>
                    <p className="text-gray-700">October through February brings occasional hot, dry Santa Ana wind events from inland deserts. Creates fire hazard conditions on brushy hillside estates. We provide extra debris containment and careful disposal during high wind days.</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <h3 className="font-bold mb-2 text-purple-900">🌧️ Winter Rainfall</h3>
                    <p className="text-gray-700">December through March receives 10-12 inches annual rainfall concentrated in occasional storm systems. Hillside estates may experience temporary access issues. We monitor forecasts and schedule around storm events for client convenience.</p>
                  </div>
                </div>

                <div className="bg-blue-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-blue-900">Salt Air & Coastal Corrosion Protection</h3>
                  <p className="text-gray-700">
                    Oceanfront and coastal properties from Bird Rock to La Jolla Farms experience constant salt air exposure that accelerates deterioration of stored items. Our <strong>junk pickup La Jolla</strong> service helps luxury homeowners maintain pristine coastal properties by removing salt-damaged furniture, corroded appliances, and weather-exposed outdoor items before they cause property damage.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us - La Jolla Specific */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why La Jolla Residents Choose Severin Cleaners
                </h2>

                <div className="prose prose-lg max-w-none">
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold mb-3">🔒 Discreet Service for Exclusive Properties</h3>
                    <p className="text-gray-700 mb-3">
                      Our junk removal La Jolla crews use unmarked vehicles and professional uniforms to ensure complete privacy for homeowners in gated and high-profile neighborhoods. We understand the discretion required when servicing $5-50 million properties where celebrity residents and high-net-worth families expect confidential, low-profile service.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Unmarked vehicles maintain estate privacy and property appearance</li>
                      <li>Professional uniforms without flashy branding or logos</li>
                      <li>Signed non-disclosure agreements available for celebrity and executive clients</li>
                      <li>Coordinated security clearance with gate staff and property managers</li>
                      <li>Flexible scheduling to avoid high-visibility daytime hours when requested</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold mb-3 text-blue-900">🏔️ Expert Navigation of Challenging Terrain</h3>
                    <p className="text-gray-700 mb-3">
                      La Jolla's steep hillside estates, winding coastal roads, and exclusive gated communities require specialized expertise that most junk removal services lack. Our crews receive training specific to La Jolla's challenging topography:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Mount Soledad hillside estates with 15% grade driveways and switchback access</li>
                      <li>Hidden Valley canyon properties with single-lane private roads</li>
                      <li>Narrow La Jolla Boulevard coastal access requiring precision maneuvering</li>
                      <li>Tight Bird Rock residential streets with limited parking and turnaround space</li>
                      <li>Prospect Street mansion access with valet-style positioning for discrete loading</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold mb-3 text-green-900">💎 Luxury Item Handling Expertise</h3>
                    <p className="text-gray-700 mb-3">
                      La Jolla estates feature museum-quality furnishings, priceless antiques, and designer pieces that require white-glove handling expertise. Our specialized <strong>La Jolla furniture removal</strong> team receives training in proper techniques for valuable items:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Custom Italian leather furniture and designer piece expertise</li>
                      <li>Antique and heirloom furniture preservation techniques</li>
                      <li>Fine art and sculpture coordination with certified art handlers</li>
                      <li>Piano and specialty instrument removal with bonded professionals</li>
                      <li>Auction house coordination (Sotheby's, Christie's) for high-value items</li>
                      <li>Insurance documentation and value assessment partnerships</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-yellow-900">🌊 Understanding Coastal Environmental Priorities</h3>
                    <p className="text-gray-700">
                      La Jolla residents are passionate about protecting their pristine coastal environment. Our <strong>trash removal La Jolla</strong> service reflects these values with premium eco-luxury practices that exceed California coastal environmental standards while maintaining the discrete, professional service luxury estates demand.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Premium Services Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Premium Junk Removal Services in La Jolla
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-blue-600">Luxury Estate Services</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Luxury Estate Cleanouts</strong> — Trust properties, inheritances, and estate transitions</li>
                      <li><strong>High-End Furniture Removal</strong> — Antiques, designer pieces, fine art coordination</li>
                      <li><strong>Property Sale Preparation</strong> — Decluttering and staging for $5M+ listings</li>
                      <li><strong>Eco-Luxury Disposal</strong> — Donation, recycling, consignment partnerships</li>
                      <li><strong>White-Glove Service</strong> — Floor protection, careful handling, discrete removal</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-blue-600">Specialized La Jolla Services</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Renovation Debris Removal</strong> — Discreet cleanup for luxury remodels</li>
                      <li><strong>Coastal Property Maintenance</strong> — Salt-damaged item removal</li>
                      <li><strong>Executive Relocations</strong> — Corporate housing transitions</li>
                      <li><strong>Vacation Home Management</strong> — Seasonal cleanouts, rental turnovers</li>
                      <li><strong>UCSD Faculty Services</strong> — Academic community support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Estate Cleanouts Detailed Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold mb-6">Estate Cleanouts in La Jolla</h2>
                  <p className="text-lg mb-4">
                    Our specialized <strong>estate cleanout La Jolla</strong> service handles multi-million dollar estates with the discretion and expertise that high-net-worth families require. From $20M oceanfront compounds to historic Prospect Street mansions, we understand both the emotional sensitivity and substantial financial value involved in luxury estate transitions.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-bold mb-3 text-gray-900">Premium Estate Services Include:</h3>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Expert appraisal coordination for valuable art, antiques, and collectibles</li>
                      <li>White-glove handling of designer furniture and luxury furnishings</li>
                      <li>Coordination with Sotheby's, Christie's, and premier auction houses</li>
                      <li>Confidential service with signed non-disclosure agreements</li>
                      <li>Secure transportation and storage of high-value items</li>
                      <li>Insurance coordination for valuable item handling and transport</li>
                      <li>Estate sale company partnerships and luxury consignment coordination</li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-bold mt-8 mb-4">Luxury Home Renovation Support</h3>
                  <p className="text-lg mb-4">
                    La Jolla's luxury properties frequently undergo multi-million dollar renovations to enhance ocean views, update historic details, or modernize for contemporary living. Our premium <strong>junk hauling La Jolla</strong> service provides construction debris removal and renovation support that maintains project timelines while preserving the neighborhood's ultra-exclusive character.
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700">
                    <li>High-end kitchen and bathroom remodel debris coordination</li>
                    <li>Historic home restoration material handling and disposal</li>
                    <li>Luxury outdoor living space and landscape renovation cleanup</li>
                    <li>Home theater and wine cellar installation support</li>
                    <li>Pool house and guest cottage renovation debris removal</li>
                    <li>View enhancement project coordination and cleanup</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Trust Signals Section */}
          <TrustSignalsSection locationName="La Jolla" coverageArea="Coastal San Diego" />

          {/* FAQ Section */}
          <LaJollaFAQSection />

          {/* Final CTA Section */}
          <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">
                  Book Your La Jolla Junk Removal Today
                </h2>
                <p className="text-xl mb-8 leading-relaxed">
                  Whether you're clearing out a Muirlands estate, renovating a Bird Rock home, or updating a La Jolla Shores property, Severin Cleaners delivers the trusted junk removal La Jolla residents depend on. Discreet, professional, white-glove service for La Jolla's most exclusive properties.
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
                  Serving all of La Jolla — from the Village to UTC • Same-Day Service Available • Licensed & Insured
                </p>
              </div>
            </div>
          </section>

          {/* Related Services */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <h3 className="text-2xl font-bold text-center mb-8">Premium La Jolla Services</h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <a href="/estate-cleanout-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
                  <p className="text-gray-600">Luxury estate cleanouts for inherited properties and high-value family transitions</p>
                </a>
                <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Luxury Furniture Removal</h4>
                  <p className="text-gray-600">Expert handling of designer furniture, antiques, and museum-quality pieces</p>
                </a>
                <a href="/appliance-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Luxury Appliance Removal</h4>
                  <p className="text-gray-600">Professional removal of high-end kitchen equipment and luxury appliances</p>
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
