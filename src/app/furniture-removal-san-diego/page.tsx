import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Furniture Removal San Diego | Couch & Mattress Pickup | Licensed Haulers",
  description: "Professional furniture removal San Diego - same-day couch removal, mattress pickup, sofa disposal & eco-friendly furniture hauling. Licensed & insured. Call (619) 750-0114!",
  keywords: "furniture removal San Diego, couch removal San Diego, mattress removal San Diego, sofa removal San Diego, furniture pickup San Diego, old furniture disposal San Diego, licensed furniture haulers San Diego, eco-friendly furniture removal",
  openGraph: {
    title: "Furniture Removal San Diego | Couch & Mattress Pickup",
    description: "Professional furniture removal service in San Diego. Couch, mattress, sofa and complete furniture hauling with same-day availability.",
    url: "https://severincleaners.com/furniture-removal-san-diego",
  },
  alternates: {
    canonical: "https://severincleaners.com/furniture-removal-san-diego",
  },
};

export default function FurnitureRemovalPage() {
  return (
    <div className={`${inter.variable} font-sans antialiased`}>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Furniture Removal San Diego - Licensed Haulers
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Same-Day Couch Removal • Mattress Pickup • Eco-Friendly Furniture Disposal
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  CALL FOR SAME-DAY FURNITURE PICKUP: (619) 750-0114
                </a>
                <a
                  href="#contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  GET FURNITURE REMOVAL QUOTE
                </a>
              </div>
              <p className="mt-6 text-sm text-blue-100">
                🚛 Licensed & insured furniture haulers • Eco-friendly disposal • Same-day service available
              </p>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why San Diego Chooses Our Licensed Furniture Haulers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10l1 2H6l1-2zM6 6v14a2 2 0 002 2h8a2 2 0 002-2V6M9 10v6M15 10v6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Eco-Friendly Furniture Removal</h3>
                <p className="text-gray-600">
                  Responsible old furniture disposal San Diego with 70% donation and recycling rate. Licensed for proper waste handling.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Same-Day San Diego Service</h3>
                <p className="text-gray-600">
                  Rapid furniture pickup San Diego wide with same-day availability. Serving all neighborhoods with professional crews.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Licensed & Transparent Pricing</h3>
                <p className="text-gray-600">
                  Upfront pricing for all furniture removal services. Licensed furniture haulers San Diego with no hidden fees or surprises.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Professional Furniture Removal San Diego - Same-Day Service Available
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                  When you need reliable <strong>furniture removal San Diego</strong> service, Severin Cleaners provides licensed, professional furniture hauling that makes disposing of unwanted furniture simple and stress-free. Our experienced team of licensed furniture haulers San Diego handles everything from single item pickup to complete home furniture cleanouts.
                </p>

                <p className="text-lg mb-6">
                  Our <strong>couch removal San Diego</strong> service goes beyond basic furniture pickup. We're fully licensed, insured, and equipped to handle all types of furniture disposal with eco-friendly practices. Whether you need mattress removal San Diego or complete living room furniture disposal, our team provides safe, efficient service that protects your property and the environment.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Complete Furniture Pickup San Diego Services</h3>
                <p className="text-lg mb-4">
                  Severin Cleaners offers comprehensive <strong>furniture removal San Diego</strong> services for residential and commercial properties throughout San Diego County:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Living Room Furniture Removal</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Couch removal San Diego</strong> - sectionals, loveseats, recliners of all sizes</li>
                      <li><strong>Sofa removal San Diego</strong> - sleeper sofas, modular seating, leather furniture</li>
                      <li>Coffee tables, end tables, and accent furniture</li>
                      <li>Entertainment centers and TV stands</li>
                      <li>Bookshelves, display cabinets, and storage units</li>
                      <li>Chairs, ottomans, and lounge furniture</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Bedroom Furniture Disposal</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Mattress removal San Diego</strong> - all sizes including California king</li>
                      <li>Box springs, bed frames, and platform beds</li>
                      <li>Dressers, nightstands, and armoires</li>
                      <li>Wardrobes and walk-in closet systems</li>
                      <li>Mirrors, headboards, and bedroom sets</li>
                      <li>Children's furniture, cribs, and bunk beds</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Dining & Kitchen Furniture</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Dining tables, chairs, and dining room sets</li>
                      <li>Kitchen islands, carts, and breakfast nooks</li>
                      <li>Bar stools, pub tables, and counter seating</li>
                      <li>China cabinets, hutches, and buffets</li>
                      <li>Kitchen appliances (<Link href="/appliance-removal-san-diego" className="text-blue-600 underline">see our appliance removal service</Link>)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Office & Specialty Furniture</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Office desks, chairs, and conference tables</li>
                      <li>Filing cabinets, storage units, and bookcases</li>
                      <li>Outdoor patio furniture and umbrellas</li>
                      <li>Exercise equipment and gym furniture</li>
                      <li>Pianos, organs, and large musical instruments</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Our Licensed Furniture Removal Process</h3>
                <p className="text-lg mb-4">
                  When you choose our <strong>furniture pickup San Diego</strong> service, here's what our licensed team provides:
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                  <li><strong>Free Phone Estimate:</strong> Get transparent pricing over the phone based on furniture type and quantity</li>
                  <li><strong>Same-Day Scheduling:</strong> Book convenient times including evenings and weekends</li>
                  <li><strong>Professional Crew Arrival:</strong> Licensed, uniformed team arrives with proper equipment and protection</li>
                  <li><strong>Safe Furniture Removal:</strong> Careful removal protecting your walls, floors, and doorways</li>
                  <li><strong>Eco-Friendly Disposal:</strong> Items donated, recycled, or responsibly disposed of at licensed facilities</li>
                  <li><strong>Complete Cleanup:</strong> Area swept clean and ready for new furniture or other use</li>
                </ol>

                <h3 className="text-2xl font-bold mt-8 mb-4">Specialized Old Furniture Disposal San Diego</h3>

                <h4 className="text-xl font-bold mb-3">Expert Mattress Removal San Diego</h4>
                <p className="text-lg mb-4">
                  Our professional <strong>mattress removal San Diego</strong> service handles the complexities of mattress disposal in compliance with California regulations. We ensure your old mattress is recycled through certified facilities, keeping springs, foam, and fabric out of local landfills while supporting sustainable waste management practices.
                </p>

                <h4 className="text-xl font-bold mb-3">Heavy Couch and Sectional Removal</h4>
                <p className="text-lg mb-4">
                  <strong>Couch removal San Diego</strong> requires specialized equipment and techniques for safe handling. Our licensed furniture haulers are trained in maneuvering oversized sectionals, sleeper sofas, and recliners through tight spaces, stairs, and challenging doorways without damage to your property.
                </p>

                <h4 className="text-xl font-bold mb-3">Estate and Inherited Furniture Cleanouts</h4>
                <p className="text-lg mb-4">
                  We provide sensitive estate furniture removal services for families dealing with inherited properties. Our <Link href="/estate-cleanout-san-diego" className="text-blue-600 underline">estate cleanout specialists</Link> understand the emotional aspects of furniture disposal during difficult times while ensuring valuable pieces are properly identified and preserved.
                </p>

                <h4 className="text-xl font-bold mb-3">Commercial Furniture Disposal</h4>
                <p className="text-lg mb-4">
                  Our business <strong>furniture removal San Diego</strong> service helps offices, restaurants, and retail spaces upgrade or relocate efficiently. We handle everything from office cubicles to restaurant seating with minimal disruption to your business operations.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">San Diego Neighborhoods We Serve for Furniture Pickup</h3>
                <p className="text-lg mb-4">
                  Our licensed <strong>furniture removal San Diego</strong> service covers all major neighborhoods with same-day availability:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <ul className="list-disc pl-4">
                    <li>Downtown & Gaslamp Quarter</li>
                    <li>Hillcrest & University Heights</li>
                    <li>Pacific Beach & Mission Beach</li>
                    <li>La Jolla & Bird Rock</li>
                    <li>Point Loma & Ocean Beach</li>
                  </ul>
                  <ul className="list-disc pl-4">
                    <li>Chula Vista & Eastlake</li>
                    <li>National City & Paradise Hills</li>
                    <li>El Cajon & Fletcher Hills</li>
                    <li>La Mesa & Mount Helix</li>
                    <li>Santee & Lakeside</li>
                  </ul>
                  <ul className="list-disc pl-4">
                    <li>Oceanside & Carlsbad</li>
                    <li>Escondido & San Marcos</li>
                    <li>Poway & Rancho Penasquitos</li>
                    <li>Imperial Beach & Coronado</li>
                    <li>Bonita & Spring Valley</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Eco-Friendly Furniture Removal Practices</h3>
                <p className="text-lg mb-4">
                  Severin Cleaners leads San Diego in sustainable <strong>old furniture disposal San Diego</strong> practices. Our licensed team prioritizes environmental responsibility while providing efficient furniture removal services:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Donation Programs:</strong> Good condition furniture donated to local San Diego charities and families in need</li>
                  <li><strong>Material Recycling:</strong> Metal frames, wood components, and fabric separated for specialized recycling</li>
                  <li><strong>Certified Disposal:</strong> Non-recyclable items disposed of at licensed facilities following California regulations</li>
                  <li><strong>Component Salvage:</strong> Usable hardware, springs, and materials recovered for reuse</li>
                  <li><strong>Documentation Provided:</strong> Detailed receipts for tax-deductible donations and proper disposal records</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Transparent Furniture Removal Pricing</h3>
                <p className="text-lg mb-4">
                  Our <strong>furniture pickup San Diego</strong> pricing is honest, competitive, and includes all services. Factors affecting cost include:
                </p>
                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                  <ul className="space-y-2">
                    <li><strong>Single Item:</strong> $89-$149 (chairs, small tables, single mattress)</li>
                    <li><strong>Medium Furniture:</strong> $149-$249 (couches, dressers, dining sets)</li>
                    <li><strong>Large Items:</strong> $249-$399 (sectionals, bedroom sets, office furniture)</li>
                    <li><strong>Specialty Handling:</strong> $399+ (pianos, pool tables, complex removals)</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4">
                    * Pricing includes labor, transportation, eco-friendly disposal, and cleanup. Additional fees for stairs or complex access.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Licensed Furniture Haulers San Diego</h3>
                <p className="text-lg mb-4">
                  Professional furniture removal requires proper licensing, insurance, and expertise:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Licensed & Insured:</strong> Full business license and liability coverage for your protection</li>
                  <li><strong>Trained Crews:</strong> Experienced in safe furniture handling and property protection</li>
                  <li><strong>Proper Equipment:</strong> Dollies, straps, blankets, and tools for safe furniture removal</li>
                  <li><strong>Environmental Compliance:</strong> Following all California waste disposal regulations</li>
                  <li><strong>Same-Day Service:</strong> Quick response when you need furniture removed immediately</li>
                  <li><strong>No Hidden Fees:</strong> Transparent pricing with all costs included upfront</li>
                </ul>

                {/* FAQ Section */}
                <div className="bg-blue-50 p-8 rounded-lg mt-12 mb-8">
                  <h2 className="text-3xl font-bold mb-8 text-blue-900">
                    Frequently Asked Questions - Furniture Removal San Diego
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        How much does furniture removal cost in San Diego?
                      </h3>
                      <p className="text-gray-700">
                        Furniture removal San Diego costs range from $89 for single items to $399+ for large pieces. Couch removal San Diego typically costs $149-$249, while mattress removal San Diego averages $89-$149. Our licensed furniture haulers provide upfront pricing with no hidden fees, including all labor, transportation, and eco-friendly disposal.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        Do you take couches, mattresses, and large items?
                      </h3>
                      <p className="text-gray-700">
                        Yes! Our furniture pickup San Diego service handles all furniture types including sectional couches, king-size mattresses, dining sets, and specialty items like pianos. We're equipped with proper tools and trained crews for safe removal of oversized furniture from any location in your home or business.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        Can you donate furniture in San Diego?
                      </h3>
                      <p className="text-gray-700">
                        Absolutely. Our eco-friendly furniture removal service partners with local San Diego charities to donate usable furniture. We provide detailed donation receipts for tax purposes and ensure good-condition furniture reaches families in need rather than landfills. This is part of our commitment to sustainable old furniture disposal San Diego.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        Do you provide same-day furniture pickup?
                      </h3>
                      <p className="text-gray-700">
                        Yes, we offer same-day furniture removal San Diego when you call before 2 PM. Our licensed furniture haulers San Diego maintain flexible scheduling including evenings and weekends. We understand furniture removal is often urgent, especially for moves, deliveries, or space clearing situations.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        How do I get rid of old furniture legally in San Diego?
                      </h3>
                      <p className="text-gray-700">
                        Legal furniture disposal in San Diego requires using licensed waste haulers and proper disposal facilities. Our licensed team ensures compliance with all California waste regulations. We handle mattress recycling requirements, donation documentation, and proper disposal at certified facilities, giving you peace of mind that your old furniture disposal San Diego follows all local laws.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg mt-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">
                    🚛 Ready for Professional Furniture Removal?
                  </h3>
                  <p className="text-lg mb-4 text-gray-800">
                    Don't struggle with heavy furniture removal on your own. Our licensed <strong>furniture removal San Diego</strong> team makes the process simple, safe, and environmentally responsible. Same-day service available throughout San Diego County.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:+16197500114"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-center font-bold transition-colors inline-block"
                    >
                      Call Today for Same-Day Furniture Pickup: (619) 750-0114
                    </a>
                    <a
                      href="#contact"
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg text-center font-bold transition-colors inline-block"
                    >
                      Get Your Furniture Removal Quote
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Licensed & insured • Same-day service • Eco-friendly disposal • All San Diego neighborhoods
                  </p>
                </div>

                {/* Trust Signals */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="grid md:grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold text-blue-600">500+</p>
                      <p className="text-sm text-gray-600">Furniture Removals Completed</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">Same-Day</p>
                      <p className="text-sm text-gray-600">Service Available</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">70%</p>
                      <p className="text-sm text-gray-600">Donation & Recycling Rate</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">Licensed</p>
                      <p className="text-sm text-gray-600">Bonded & Insured</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}