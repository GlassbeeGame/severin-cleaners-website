import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LaJollaFAQSection from "./LaJollaFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "La Jolla Junk Removal | Estate Cleanouts & Luxury Furniture Disposal | Same-Day Service",
  description: "Premium La Jolla junk removal for estates, luxury homes, Bird Rock, Muirlands. Discreet service with unmarked vehicles. Expert luxury furniture handling. Call (619) 750-0114.",
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

export default function JunkRemovalLaJollaPage() {
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

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema],
  };

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <div className={`${inter.variable} font-sans antialiased`}>
        <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                La Jolla Junk Removal
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Discreet, luxury junk removal services for La Jolla's exclusive coastal estates and luxury homes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  CALL NOW: (619) 750-0114
                </a>
                <a
                  href="#contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  Get La Jolla Estate Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why La Jolla Residents Choose Severin Cleaners
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Discreet Service</h3>
                <p className="text-gray-600">Unmarked vehicles and professional approach. We understand privacy matters in La Jolla&apos;s exclusive neighborhoods.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Same Day Service</h3>
                <p className="text-gray-600">Quick response throughout La Jolla - from Bird Rock to Mount Soledad. Same-day pickup available for urgent needs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Luxury Service Standards</h3>
                <p className="text-gray-600">White-glove handling of valuable items and luxury furnishings. Service standards that match La Jolla&apos;s expectations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Luxury Junk Removal & Estate Cleanouts in La Jolla
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                  Our <strong>La Jolla junk removal</strong> service provides discreet, premium cleanout solutions for the area's most exclusive properties. From oceanfront estates to luxury condos, we deliver same-day service throughout 92037 with unmarked vehicles and white-glove handling standards that meet La Jolla's expectations.
                </p>

                <p className="text-lg mb-6">
                  Whether you need <strong>La Jolla furniture removal</strong> for a Prospect Street mansion or comprehensive <strong>estate cleanout La Jolla</strong> services in Muirlands, our professionally trained crew handles every project with discretion and care. We understand that luxury properties require specialized attention to protect valuable finishes, floors, and architectural details.
                </p>

                <p className="text-lg mb-6">
                  Our <strong>junk hauling La Jolla</strong> team specializes in high-value items, from designer furniture and art collections to luxury appliances and estate pieces. We coordinate with auction houses, estate sale companies, and specialty disposal services to ensure maximum value recovery and appropriate handling of luxury items.
                </p>

                <h2 className="text-3xl font-bold mt-8 mb-4">Exclusive La Jolla Neighborhoods We Serve</h2>
                <p className="text-lg mb-4">
                  Our premium <strong>junk pickup La Jolla</strong> service covers every prestigious enclave of this exclusive coastal community:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Coastal & Village Areas</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>La Jolla Village</strong> - Historic downtown estates near Girard Avenue</li>
                      <li><strong>Bird Rock</strong> - Oceanfront properties with panoramic coastal views</li>
                      <li><strong>La Jolla Shores</strong> - Luxury beachfront condos and estate homes</li>
                      <li><strong>La Jolla Cove</strong> - Prestigious clifftop mansions and luxury residences</li>
                      <li><strong>Windansea</strong> - Exclusive beachside homes and compounds</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Hillside & Inland Estates</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Muirlands</strong> - Family estate properties and luxury family homes</li>
                      <li><strong>Country Club</strong> - Golf course estate community and luxury homes</li>
                      <li><strong>Mount Soledad</strong> - Hillside mansions with panoramic city and ocean views</li>
                      <li><strong>Hidden Valley</strong> - Private estate properties and gated communities</li>
                      <li><strong>Upper Hermosa</strong> - Canyon view estates and luxury hillside homes</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Premium Services for La Jolla Luxury Properties</h3>
                <p className="text-lg mb-4">
                  La Jolla's exclusive character - from $10M+ oceanfront estates to historic Village mansions - demands specialized <strong>trash removal La Jolla</strong> expertise. Our luxury-focused team understands the particular requirements, security considerations, and discretion expectations of this ultra-prestigious community.
                </p>

                <p className="text-lg mb-6">
                  We provide comprehensive <strong>La Jolla junk removal</strong> services that protect property values, maintain privacy, and handle valuable items with the expertise they deserve. Our unmarked vehicles and professionally trained crews ensure your estate cleanout or luxury furniture removal meets the highest standards.
                </p>

                <h4 className="text-xl font-bold mb-3">Estate Cleanouts in La Jolla</h4>
                <p className="text-lg mb-4">
                  Our specialized <strong>estate cleanout La Jolla</strong> service handles multi-million dollar estates with the discretion and expertise that high-net-worth families require. From $20M oceanfront compounds to historic Prospect Street mansions, we understand both the emotional sensitivity and substantial financial value involved in luxury estate transitions.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h5 className="text-lg font-bold mb-3 text-gray-900">Premium Estate Services Include:</h5>
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

                <h4 className="text-xl font-bold mb-3">Luxury Furniture Removal in La Jolla</h4>
                <p className="text-lg mb-4">
                  La Jolla estates feature museum-quality furnishings that demand specialized handling expertise. Our <strong>La Jolla furniture removal</strong> team receives training in proper techniques for designer pieces, from custom Italian leather collections to priceless antique sets, ensuring every item maintains its condition and value during removal.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h5 className="text-lg font-bold mb-3 text-blue-900">Specialized Luxury Handling:</h5>
                  <ul className="list-disc pl-6 space-y-1 text-blue-800">
                    <li>Custom Italian furniture and designer piece expertise</li>
                    <li>Antique and heirloom furniture preservation techniques</li>
                    <li>Fine art and sculpture coordination with art handlers</li>
                    <li>Piano and specialty instrument removal with certified movers</li>
                    <li>Wine collection and cellar cleanout with temperature control</li>
                    <li>Luxury appliance removal including commercial-grade kitchen equipment</li>
                  </ul>
                </div>

                <h4 className="text-xl font-bold mb-3">Luxury Home Renovation Support</h4>
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

                <h3 className="text-2xl font-bold mt-8 mb-4">Understanding La Jolla's Exclusive Requirements</h3>
                <p className="text-lg mb-4">
                  When La Jolla residents search for premium <strong>trash removal La Jolla</strong> services, they expect providers who understand the community's extraordinary standards and unique challenges. Our luxury-focused expertise includes:
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                  <h5 className="text-lg font-bold mb-3 text-yellow-900">La Jolla Luxury Service Standards:</h5>
                  <ul className="list-disc pl-6 space-y-1 text-yellow-800">
                    <li><strong>Discreet Operations:</strong> Unmarked vehicles and professional uniforms that maintain estate privacy</li>
                    <li><strong>Security Awareness:</strong> Understanding of gated communities, security systems, and privacy protocols</li>
                    <li><strong>Coastal Navigation:</strong> Expert navigation of narrow winding roads and challenging coastal terrain</li>
                    <li><strong>Permit Coordination:</strong> Knowledge of exclusive community regulations and city permit requirements</li>
                    <li><strong>Architectural Preservation:</strong> Specialized care around historic mansions and architectural landmark properties</li>
                    <li><strong>Environmental Excellence:</strong> Premium eco-friendly practices that protect the pristine coastal environment</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Luxury La Jolla Property Projects</h3>
                <p className="text-lg mb-4">
                  Our premium <strong>junk pickup La Jolla</strong> service specializes in high-value projects typical of this ultra-affluent coastal enclave, where property values routinely exceed $5-50 million:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Ultra-Luxury Estate Projects</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Multi-million dollar estate sales and trust property cleanouts</li>
                      <li>Luxury home staging for $10M+ property sales</li>
                      <li>Executive relocation and corporate housing transitions</li>
                      <li>Oceanfront vacation home seasonal management</li>
                      <li>Museum-quality art collection and rare collectible handling</li>
                      <li>Guest house, pool house, and luxury outbuilding clearouts</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Luxury Property Enhancements</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>$500K+ kitchen and spa bathroom renovation debris</li>
                      <li>Luxury landscape and infinity pool project materials</li>
                      <li>Ocean view enhancement and terrace expansion cleanup</li>
                      <li>Historic mansion restoration and preservation debris</li>
                      <li>Resort-style outdoor living and entertainment space updates</li>
                      <li>Home theater, wine cellar, and luxury amenity installations</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Same-Day Luxury Service Throughout La Jolla</h3>
                <p className="text-lg mb-4">
                  We understand that La Jolla's high-net-worth residents require immediate response for time-sensitive luxury property situations. Our same-day <strong>La Jolla junk removal</strong> service provides rapid, discreet response for urgent estate needs:
                </p>
                <div className="bg-green-50 p-6 rounded-lg mb-8">
                  <h5 className="text-lg font-bold mb-3 text-green-900">Priority Response Services:</h5>
                  <ul className="list-disc pl-6 space-y-1 text-green-800">
                    <li>Emergency estate sale preparation for high-value properties</li>
                    <li>Luxury real estate closing deadlines and staging requirements</li>
                    <li>Executive family emergency cleanouts and urgent relocations</li>
                    <li>Storm and weather damage debris removal from coastal estates</li>
                    <li>Property management emergencies for luxury rental portfolios</li>
                    <li>High-profile event preparation and post-event cleanup</li>
                    <li>Probate court deadlines and trust property requirements</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Environmental Excellence for Coastal La Jolla</h3>
                <p className="text-lg mb-4">
                  As an environmentally conscious luxury coastal community, La Jolla demands the highest standards of environmental responsibility. Our premium <strong>trash removal La Jolla</strong> service exceeds these expectations with comprehensive eco-luxury practices:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Partnerships with luxury consignment and high-end resale establishments</li>
                  <li>Donation coordination with prestigious La Jolla and San Diego charities</li>
                  <li>Specialized recycling for luxury materials, metals, and electronics</li>
                  <li>Certified hazardous material disposal away from sensitive coastal areas</li>
                  <li>Antique and luxury furniture restoration referrals to preserve valuable pieces</li>
                  <li>Carbon-neutral transportation options for environmentally conscious clients</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Serving La Jolla&apos;s Diverse Community</h3>
                <p className="text-lg mb-4">
                  From longtime residents in historic Village properties to new families in modern UTC developments, our <strong>junk removal La Jolla</strong> service adapts to the diverse needs of this dynamic community. We work with:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li><strong>Families:</strong> Busy households needing efficient cleanout services</li>
                  <li><strong>Seniors:</strong> Downsizing and estate planning support</li>
                  <li><strong>Professionals:</strong> UCSD faculty and biotech executives with demanding schedules</li>
                  <li><strong>Property Managers:</strong> Luxury rental and condominium maintenance</li>
                  <li><strong>Real Estate Agents:</strong> Property staging and sale preparation</li>
                  <li><strong>Contractors:</strong> Renovation and construction project support</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Local La Jolla Expertise</h3>
                <p className="text-lg mb-4">
                  When searching for <strong>&quot;junk removal near me La Jolla,"</strong> choosing a service with local expertise makes all the difference. Our team&apos;s familiarity with La Jolla ensures:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Efficient navigation of local streets and traffic patterns</li>
                  <li>Understanding of community expectations and standards</li>
                  <li>Knowledge of local disposal and recycling facilities</li>
                  <li>Relationships with La Jolla-area charities and donation centers</li>
                  <li>Respect for the community&apos;s environmental values</li>
                  <li>Professional service that maintains La Jolla&apos;s reputation</li>
                </ul>

                <div className="bg-blue-50 p-6 rounded-lg mt-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">Ready for Professional Junk Removal in La Jolla?</h3>
                  <p className="text-lg mb-4">
                    Whether you&apos;re in a beachfront condo or a Mount Soledad estate, Severin Cleaners provides the discreet, professional <strong>junk removal La Jolla</strong> service that meets your community&apos;s high standards.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:+16197500114"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-center font-bold transition-colors"
                    >
                      Call Now: (619) 750-0114
                    </a>
                    <a
                      href="#contact"
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg text-center font-bold transition-colors"
                    >
                      Get Free La Jolla Quote
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 text-center">
                    Serving all of La Jolla from the Cove to UTC • Same-day service available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LaJollaFAQSection />

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