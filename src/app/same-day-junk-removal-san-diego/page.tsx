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
  title: "Same Day Junk Removal San Diego | Licensed & Insured | Fast Response",
  description: "Same day junk removal San Diego - Emergency service in 2 hours! Licensed junk haulers for furniture, appliances & trash removal. Call (619) 750-0114 for immediate junk pickup San Diego.",
  keywords: "same day junk removal San Diego, emergency junk removal, junk hauling San Diego, trash removal San Diego, same-day junk pickup, licensed junk haulers, junk pickup San Diego, urgent junk disposal",
  openGraph: {
    title: "Same Day Junk Removal San Diego | Emergency Service Available",
    description: "Emergency same day junk removal San Diego. Quick response team available 7 days a week for urgent junk hauling needs.",
    url: "https://severincleaners.com/same-day-junk-removal-san-diego",
  },
  alternates: {
    canonical: "https://severincleaners.com/same-day-junk-removal-san-diego",
  },
};

export default function SameDayJunkRemovalPage() {
  return (
    <div className={`${inter.variable} font-sans antialiased`}>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Same Day Junk Removal San Diego - Licensed & Insured
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Emergency Junk Hauling Service • Response in 2 Hours • Available 7 Days
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  CALL NOW FOR IMMEDIATE DISPATCH: (619) 750-0114
                </a>
                <a
                  href="#contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  GET SAME-DAY JUNK REMOVAL QUOTE
                </a>
              </div>
              <p className="mt-6 text-sm text-blue-100">
                ⚡ Currently dispatching crews • Average arrival: 2-3 hours
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why We're San Diego's #1 Same-Day Junk Removal Service
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">2-Hour Emergency Response</h3>
                <p className="text-gray-600">
                  Fastest same day junk pickup San Diego. Our licensed junk haulers arrive within 2 hours for urgent situations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">24/7 Emergency Availability</h3>
                <p className="text-gray-600">
                  Emergency junk removal San Diego available around the clock. Weekend and after-hours service at no extra charge.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Licensed, Bonded & Insured</h3>
                <p className="text-gray-600">
                  Professional junk hauling San Diego team with $2M liability insurance. Workers comp and eco-friendly disposal included.
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
                Professional Same-Day Junk Hauling San Diego County
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                  When you need <strong>same day junk removal San Diego</strong> service, Severin Cleaners delivers immediate solutions. Our emergency response team specializes in urgent junk hauling San Diego residents trust for last-minute cleanouts, property emergencies, and time-sensitive situations.
                </p>

                <p className="text-lg mb-6">
                  As licensed junk haulers serving all of San Diego County, we've built our reputation on speed and reliability. Whether it's emergency trash removal San Diego properties need for inspections or same-day junk pickup for unexpected moves, our crews arrive fast and work efficiently.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Emergency Junk Removal Situations We Handle Daily</h3>
                <p className="text-lg mb-4">
                  Our <strong>emergency junk removal San Diego</strong> team responds to urgent calls 7 days a week:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li><strong>Estate Cleanout Deadlines:</strong> Court-ordered cleanouts and probate property clearing with same-day service</li>
                  <li><strong>Emergency Move-Outs:</strong> Eviction cleanouts and last-minute junk hauling San Diego landlords rely on</li>
                  <li><strong>Real Estate Emergencies:</strong> Pre-inspection junk removal and staging preparation within hours</li>
                  <li><strong>HOA Violations:</strong> Immediate trash removal San Diego HOAs require for compliance</li>
                  <li><strong>Construction Deadlines:</strong> Same-day debris hauling for permit inspections</li>
                  <li><strong>Health Hazards:</strong> Emergency hoarding cleanups and biohazard junk disposal</li>
                  <li><strong>Storm Damage:</strong> Urgent removal of damaged furniture and water-logged items</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">How Our Same-Day Junk Pickup San Diego Service Works</h3>
                <p className="text-lg mb-4">
                  Getting emergency junk removal is simple and fast:
                </p>
                <ol className="list-decimal pl-6 mb-6">
                  <li><strong>Call for Immediate Response:</strong> Speak directly to our dispatch team, not an answering service</li>
                  <li><strong>Instant Quote:</strong> Get transparent pricing for same-day junk hauling over the phone</li>
                  <li><strong>Priority Dispatch:</strong> Licensed junk haulers dispatched from nearest location</li>
                  <li><strong>Text Updates:</strong> Real-time arrival notifications and crew ETA</li>
                  <li><strong>Fast Removal:</strong> Efficient junk pickup San Diego style - in and out quickly</li>
                  <li><strong>Complete Cleanup:</strong> Sweep and sanitize area after trash removal</li>
                </ol>

                <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove Same Day - No Exceptions</h3>
                <p className="text-lg mb-4">
                  Our emergency junk hauling San Diego service handles everything:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold mb-2">Household & Furniture</h4>
                    <ul className="list-disc pl-4">
                      <li>Sofas, recliners, sectionals</li>
                      <li>Mattresses and box springs</li>
                      <li>Refrigerators, washers, dryers</li>
                      <li>Hot tubs and pool equipment</li>
                      <li>Pianos and exercise equipment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Construction & Yard</h4>
                    <ul className="list-disc pl-4">
                      <li>Concrete and asphalt chunks</li>
                      <li>Drywall and lumber scraps</li>
                      <li>Roofing tiles and shingles</li>
                      <li>Tree branches and yard waste</li>
                      <li>Fencing and deck materials</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <p className="font-bold text-yellow-800">
                    ⚠️ Special Handling Available Same Day:
                  </p>
                  <p className="text-yellow-700 mt-2">
                    E-waste recycling, paint disposal, tire removal, and hazardous material handling with proper permits. <Link href="/construction-debris-removal-san-diego" className="text-blue-600 underline">For large construction projects, see our debris removal service</Link>.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">San Diego Areas with Guaranteed Same-Day Service</h3>
                <p className="text-lg mb-4">
                  We provide <strong>same-day junk pickup San Diego</strong> wide, with priority response in:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <ul className="list-disc pl-4">
                    <li>Downtown & Gaslamp Quarter</li>
                    <li>Mission Valley & Fashion Valley</li>
                    <li>Pacific Beach & Mission Beach</li>
                    <li>La Jolla & Bird Rock</li>
                    <li>Point Loma & Ocean Beach</li>
                  </ul>
                  <ul className="list-disc pl-4">
                    <li>Chula Vista & Eastlake</li>
                    <li>El Cajon & La Mesa</li>
                    <li>Santee & Lakeside</li>
                    <li>Spring Valley & Bonita</li>
                    <li>National City & Imperial Beach</li>
                  </ul>
                  <ul className="list-disc pl-4">
                    <li>Carlsbad & Oceanside</li>
                    <li>Escondido & San Marcos</li>
                    <li>Vista & Encinitas</li>
                    <li>Poway & Rancho Bernardo</li>
                    <li>Del Mar & Solana Beach</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why San Diego Chooses Our Emergency Junk Removal</h3>
                <p className="text-lg mb-4">
                  When every minute counts, property owners trust our <strong>junk hauling San Diego</strong> service because:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li><strong>Fastest Response:</strong> Average 2-hour arrival for emergency junk pickup San Diego calls</li>
                  <li><strong>No Surge Pricing:</strong> Same rates for nights, weekends, and same-day service</li>
                  <li><strong>Full Crew Dispatch:</strong> 2-4 licensed junk haulers per truck for quick loading</li>
                  <li><strong>All-Inclusive Service:</strong> Labor, hauling, disposal, and cleanup included</li>
                  <li><strong>Digital Receipts:</strong> Email documentation for insurance and tax purposes</li>
                  <li><strong>Eco-Friendly:</strong> 70% recycling rate even on emergency trash removal San Diego jobs</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Pricing for Same-Day Junk Removal San Diego</h3>
                <p className="text-lg mb-4">
                  Transparent, fair pricing with no emergency fees:
                </p>
                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                  <ul className="space-y-3">
                    <li><strong>Single Item:</strong> $89-$149 (furniture, appliances)</li>
                    <li><strong>Quarter Load:</strong> $249 (5x5x5 feet of junk)</li>
                    <li><strong>Half Load:</strong> $399 (10x5x5 feet)</li>
                    <li><strong>Full Load:</strong> $599 (15x8x5 feet)</li>
                    <li><strong>Multiple Loads:</strong> Volume discounts available</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4">
                    * Prices include all labor, transportation, and disposal fees. No hidden charges.
                  </p>
                </div>

                <p className="text-lg mb-6">
                  For larger cleanout projects, check out our <Link href="/estate-cleanout-san-diego" className="text-blue-600 underline">estate cleanout service</Link> with dedicated crew assignments.
                </p>

                {/* FAQ Section */}
                <div className="bg-blue-50 p-8 rounded-lg mt-12 mb-8">
                  <h2 className="text-3xl font-bold mb-8 text-blue-900">
                    Frequently Asked Questions - Same Day Junk Removal
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        How much does same day junk removal cost in San Diego?
                      </h3>
                      <p className="text-gray-700">
                        Same day junk removal San Diego starts at $89 for single items and ranges up to $599 for a full truckload. We don't charge emergency fees or surge pricing - you pay the same fair rates whether you need junk hauling San Diego today or next week. Most residential cleanouts average $250-$400.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        Do you offer eco-friendly disposal for same-day service?
                      </h3>
                      <p className="text-gray-700">
                        Yes! Even with emergency junk removal San Diego jobs, we maintain our 70% recycling rate. We sort all items for donation, recycling, and proper disposal. Metal goes to scrap yards, e-waste to certified recyclers, and usable items to local charities. Same-day doesn't mean cutting corners on environmental responsibility.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        Can you handle large items like hot tubs or pianos on the same day?
                      </h3>
                      <p className="text-gray-700">
                        Absolutely. Our same-day junk pickup San Diego service handles everything from hot tubs to pianos. We bring specialized equipment for heavy items including dollies, straps, and dismantling tools. Our licensed junk haulers are trained in safe removal techniques for oversized items, stairs, and tight spaces.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        What areas of San Diego do you service for same-day removal?
                      </h3>
                      <p className="text-gray-700">
                        We provide same day junk removal throughout San Diego County, from Oceanside to Chula Vista. Priority zones with 2-hour response include Downtown, La Jolla, Mission Valley, and El Cajon. Even remote areas like Ramona and Alpine receive same-day service when you call before 2 PM. Our junk hauling San Diego coverage is the most comprehensive in the county.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 border-2 border-orange-500 p-6 rounded-lg mt-8">
                  <h3 className="text-2xl font-bold mb-4 text-orange-900">
                    ⚡ Need Emergency Junk Removal Right Now?
                  </h3>
                  <p className="text-lg mb-4 text-gray-800">
                    Don't let junk removal emergencies derail your plans. Our <strong>same day junk removal San Diego</strong> crews are standing by for immediate dispatch. Licensed, insured, and ready to solve your urgent junk problem today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:+16197500114"
                      className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg text-center font-bold transition-colors inline-block"
                    >
                      Call Now for Immediate Dispatch: (619) 750-0114
                    </a>
                    <a
                      href="#contact"
                      className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-6 py-3 rounded-lg text-center font-bold transition-colors inline-block"
                    >
                      Get Same-Day Quote Online
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Available 7 days a week • No emergency fees • Text updates on crew arrival
                  </p>
                </div>

                {/* Trust Signals */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold text-blue-600">100+</p>
                      <p className="text-sm text-gray-600">Same-Day Jobs Completed</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">2 Hours</p>
                      <p className="text-sm text-gray-600">Average Response Time</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">4.9★</p>
                      <p className="text-sm text-gray-600">Google Rating</p>
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