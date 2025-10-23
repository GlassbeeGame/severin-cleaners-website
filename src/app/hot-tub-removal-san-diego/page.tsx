import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import HotTubFAQSection from "./HotTubFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Hot Tub Removal San Diego | Spa & Jacuzzi Disposal | Same-Day Service',
  description: 'Professional hot tub removal San Diego - spa removal, Jacuzzi disposal, pool equipment. Licensed specialists for portable & built-in hot tubs. Call (619) 750-0114!',
  keywords: 'hot tub removal San Diego, spa removal San Diego, Jacuzzi removal San Diego, spa disposal San Diego, backyard hot tub demolition San Diego, pool equipment removal, hot tub disposal',
  openGraph: {
    title: 'Hot Tub Removal San Diego | Spa & Jacuzzi Disposal | Same-Day Service',
    description: 'Professional hot tub removal San Diego - spa removal, Jacuzzi disposal, pool equipment. Licensed specialists for portable & built-in hot tubs.',
    url: 'https://severincleaners.com/hot-tub-removal-san-diego',
    siteName: 'Severin Cleaners',
    type: 'website',
  },
  alternates: {
    canonical: 'https://severincleaners.com/hot-tub-removal-san-diego',
  },
};

export default function HotTubRemovalSanDiegoPage() {
  const serviceSchema = generateServiceSchema({
    name: "Hot Tub Removal San Diego",
    description: "Professional hot tub removal for spa removal, Jacuzzi disposal, and pool equipment. Licensed specialists for portable and built-in hot tubs.",
    url: "https://severincleaners.com/hot-tub-removal-san-diego",
    serviceType: "Hot Tub Removal Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "Hot Tub Removal", url: "https://severincleaners.com/hot-tub-removal-san-diego" },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema]
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
                Hot Tub Removal San Diego
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Same-Day Spa Removal • Licensed & Insured • Backyard Hot Tub Demolition
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  CALL FOR SAME-DAY HOT TUB REMOVAL: (619) 750-0114
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  GET FREE HOT TUB REMOVAL QUOTE
                </a>
              </div>
              <p className="mt-6 text-sm text-blue-100">
                🏊‍♂️ Book this week and save 15% on spa removal • Licensed specialists • Same-day service
              </p>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why San Diego Homeowners Choose Our Hot Tub Disposal Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Complete Spa Removal Service</h3>
                <p className="text-gray-600">
                  Professional spa removal San Diego including draining, disconnection, demolition, and disposal. Portable and built-in hot tub specialists.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Same-Day Hot Tub Removal</h3>
                <p className="text-gray-600">
                  Fast Jacuzzi removal San Diego with same-day service available. Perfect for backyard renovations and property improvements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Licensed & Insured Experts</h3>
                <p className="text-gray-600">
                  Licensed hot tub disposal San Diego with full insurance coverage. Safe disconnection of plumbing, gas, and electrical systems.
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
                Professional Hot Tub Removal San Diego - Complete Spa Disposal Services
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                  When your hot tub has reached the end of its life or you're ready for a backyard makeover, Severin Cleaners provides professional <strong>hot tub removal San Diego</strong> services that handle every aspect of spa disposal safely and efficiently. Our experienced team specializes in removing all types of hot tubs, spas, and pool equipment throughout San Diego County with same-day service available.
                </p>

                <p className="text-lg mb-6">
                  Our <strong>spa removal San Diego</strong> service covers everything from small portable spas to large built-in Jacuzzis, including proper disconnection of plumbing, gas, and electrical systems. Whether you're renovating your backyard, selling your home, or dealing with a broken hot tub, we provide complete spa disposal San Diego that's safe, fast, and environmentally responsible.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Complete Jacuzzi Removal San Diego Services</h3>
                <p className="text-lg mb-4">
                  Severin Cleaners offers comprehensive <strong>hot tub removal San Diego</strong> services for all types of spas and backyard water features:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Portable Hot Tub Removal</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Above-ground spa removal and disposal</li>
                      <li>Inflatable hot tub deflation and removal</li>
                      <li>Plug-and-play spa disconnection and hauling</li>
                      <li>Small backyard hot tub removal</li>
                      <li>Deck and patio spa removal</li>
                      <li>Electric-only hot tub disconnection</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Built-In Spa & Jacuzzi Removal</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Jacuzzi removal San Diego</strong> including demolition</li>
                      <li>In-ground spa excavation and removal</li>
                      <li>Custom-built hot tub dismantling</li>
                      <li>Concrete spa breaking and disposal</li>
                      <li>Tile and shell removal</li>
                      <li>Backyard hot tub demolition San Diego</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Pool Equipment & Accessories</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Hot tub pumps and heater removal</li>
                      <li>Filtration system disposal</li>
                      <li>Control panel and wiring removal</li>
                      <li>Chemical storage and equipment disposal</li>
                      <li>Hot tub covers and steps removal</li>
                      <li>Spa lighting and audio system removal</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Backyard Renovation Support</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Deck and gazebo removal around spas</li>
                      <li>Privacy screen and fence removal</li>
                      <li>Landscaping and hardscape cleanup</li>
                      <li>Patio furniture and outdoor equipment removal</li>
                      <li>Site preparation for new installations</li>
                      <li>Complete backyard renovation cleanup</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Our Professional Hot Tub Disposal Process</h3>
                <p className="text-lg mb-4">
                  When you choose our <strong>spa removal San Diego</strong> service, here's our comprehensive process for safe and efficient hot tub removal:
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                  <li><strong>Free Assessment & Quote:</strong> Professional evaluation of your hot tub type, access requirements, and utility connections for accurate pricing</li>
                  <li><strong>Utility Disconnection:</strong> Safe disconnection of electrical, plumbing, and gas lines by licensed technicians</li>
                  <li><strong>Water Draining:</strong> Complete draining of spa water using appropriate disposal methods</li>
                  <li><strong>Dismantling & Demolition:</strong> Careful dismantling of portable units or controlled demolition of built-in spas</li>
                  <li><strong>Safe Removal:</strong> Professional removal using appropriate equipment and protection for your property</li>
                  <li><strong>Eco-Friendly Disposal:</strong> Responsible disposal and recycling at licensed facilities</li>
                  <li><strong>Site Cleanup:</strong> Complete cleanup and preparation for your next backyard project</li>
                </ol>

                <h3 className="text-2xl font-bold mt-8 mb-4">Specialized Hot Tub Disposal San Diego Services</h3>

                <h4 className="text-xl font-bold mb-3">Emergency Hot Tub Removal</h4>
                <p className="text-lg mb-4">
                  When hot tubs leak, malfunction, or need immediate removal due to property damage, our emergency <strong>hot tub removal San Diego</strong> service provides rapid response. We handle emergency situations including storm damage, electrical problems, and structural issues that require immediate spa removal for safety.
                </p>

                <h4 className="text-xl font-bold mb-3">Luxury Spa & Custom Jacuzzi Removal</h4>
                <p className="text-lg mb-4">
                  San Diego's luxury homes in <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a>, <a href="/junk-removal-del-mar" className="text-blue-600 hover:underline">Del Mar</a>, and <a href="/junk-removal-carmel-valley" className="text-blue-600 hover:underline">Carmel Valley</a> often feature custom-built spas and high-end Jacuzzis requiring specialized removal techniques. Our <strong>Jacuzzi removal San Diego</strong> service includes experience with luxury installations, custom tile work, and integrated landscape features that require careful dismantling.
                </p>

                <h4 className="text-xl font-bold mb-3">Real Estate & Property Management Support</h4>
                <p className="text-lg mb-4">
                  Property managers and real estate agents rely on our spa disposal San Diego services for quick turnarounds between tenants, estate cleanouts, and property staging. We provide fast, professional hot tub removal that helps properties show better and sell faster.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Safety & Utility Disconnection Services</h3>
                <p className="text-lg mb-4">
                  Professional <strong>hot tub disposal</strong> requires safe disconnection of utilities that can pose safety hazards if handled improperly:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Electrical Disconnection:</strong> Safe disconnection of 220V electrical lines, GFCI systems, and control panels</li>
                  <li><strong>Plumbing Removal:</strong> Proper capping of water supply lines, drain connections, and circulation systems</li>
                  <li><strong>Gas Line Safety:</strong> Professional disconnection of natural gas or propane lines for gas-heated spas</li>
                  <li><strong>Chemical Disposal:</strong> Safe disposal of spa chemicals, sanitizers, and water treatment supplies</li>
                  <li><strong>Structural Assessment:</strong> Evaluation of decking, concrete, and structural elements before removal</li>
                  <li><strong>Property Protection:</strong> Use of protective materials to prevent damage during removal process</li>
                </ul>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                  <p className="font-bold text-yellow-800">
                    🏡 Complete Backyard Renovation?
                  </p>
                  <p className="text-yellow-700 mt-2">
                    If your hot tub removal is part of a larger backyard project, we also provide <Link href="/furniture-removal-san-diego" className="text-blue-600 underline">outdoor furniture removal services</Link> and coordinate with <Link href="/construction-debris-removal-san-diego" className="text-blue-600 underline">construction debris removal</Link> for complete renovation support.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">San Diego Areas We Serve for Spa Removal</h3>
                <p className="text-lg mb-4">
                  Our <strong>hot tub removal San Diego</strong> service covers all major neighborhoods with same-day availability:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <ul className="list-disc pl-4">
                    <li><a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a> & Bird Rock luxury homes</li>
                    <li><a href="/junk-removal-del-mar" className="text-blue-600 hover:underline">Del Mar</a> & Solana Beach coastal properties</li>
                    <li>Rancho Santa Fe estate spas</li>
                    <li><a href="/junk-removal-carmel-valley" className="text-blue-600 hover:underline">Carmel Valley</a> family homes</li>
                    <li><a href="/junk-removal-pacific-beach" className="text-blue-600 hover:underline">Pacific Beach</a> & Mission Beach</li>
                  </ul>
                  <ul className="list-disc pl-4">
                    <li>Point Loma & Ocean Beach</li>
                    <li>Hillcrest & Bankers Hill</li>
                    <li>Mission Hills & University Heights</li>
                    <li>Normal Heights & Kensington</li>
                    <li>Downtown & Little Italy condos</li>
                  </ul>
                  <ul className="list-disc pl-4">
                    <li>Chula Vista & Eastlake</li>
                    <li>El Cajon & Santee</li>
                    <li>Poway & Scripps Ranch</li>
                    <li>Escondido & San Marcos</li>
                    <li>All San Diego County areas</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Environmental Responsibility in Spa Disposal</h3>
                <p className="text-lg mb-4">
                  Severin Cleaners prioritizes environmentally responsible <strong>spa disposal San Diego</strong> practices:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Material Recycling:</strong> Fiberglass, acrylic, and metal components recycled through specialized facilities</li>
                  <li><strong>Water Management:</strong> Proper disposal of spa water according to local regulations</li>
                  <li><strong>Chemical Disposal:</strong> Safe handling and disposal of spa chemicals at licensed facilities</li>
                  <li><strong>Equipment Reuse:</strong> Working pumps, heaters, and accessories donated or resold when possible</li>
                  <li><strong>Concrete Recycling:</strong> Crushed concrete from built-in spas recycled for construction projects</li>
                  <li><strong>Landfill Diversion:</strong> Maximum material recovery to minimize landfill disposal</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Hot Tub Removal Pricing & Payment Options</h3>
                <p className="text-lg mb-6">
                  Our <strong>hot tub removal San Diego</strong> pricing is transparent and based on volume removed:
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-blue-600 mb-2">SINGLE ITEM</p>
                      <p className="text-4xl font-bold text-blue-900 mb-1">$100</p>
                      <p className="text-sm text-blue-700">Starting at</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-green-600 mb-2">1/4 TRAILER LOAD</p>
                      <p className="text-4xl font-bold text-green-900 mb-1">$249</p>
                      <p className="text-sm text-green-700">3 cubic yards</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-purple-600 mb-2">1/2 TRAILER LOAD</p>
                      <p className="text-4xl font-bold text-purple-900 mb-1">$349</p>
                      <p className="text-sm text-purple-700">6 cubic yards</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-200">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-orange-600 mb-2">FULL TRAILER LOAD</p>
                      <p className="text-4xl font-bold text-orange-900 mb-1">$495</p>
                      <p className="text-sm text-orange-700">12 cubic yards</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-xl p-6 mb-8">
                  <h4 className="font-bold text-lg mb-4 text-gray-900">Additional Load Sizes:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-300">
                      <span className="font-semibold text-gray-700">3/8 Trailer Load (4.5 cubic yards)</span>
                      <span className="text-xl font-bold text-gray-900">$319</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-300">
                      <span className="font-semibold text-gray-700">5/8 Trailer Load (7.5 cubic yards)</span>
                      <span className="text-xl font-bold text-gray-900">$366</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-300">
                      <span className="font-semibold text-gray-700">3/4 Trailer Load (9 cubic yards)</span>
                      <span className="text-xl font-bold text-gray-900">$429</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-300">
                      <span className="font-semibold text-gray-700">7/8 Trailer Load (10.5 cubic yards)</span>
                      <span className="text-xl font-bold text-gray-900">$462</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Note: Hot tub removal pricing varies based on size, type, and access requirements. Portable hot tubs typically range from $299-$799, while built-in spa removal with demolition ranges from $799-$1,499+. Pricing includes disconnection, removal, disposal, and cleanup. Call <a href="tel:+16197500114" className="text-blue-600 font-bold hover:underline">(619) 750-0114</a> for an accurate quote.
                  </p>
                </div>

                <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg mt-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">
                    🏊‍♂️ Ready for Professional Hot Tub Removal?
                  </h3>
                  <p className="text-lg mb-4 text-gray-800">
                    Transform your backyard with professional <strong>hot tub removal San Diego</strong> service. Same-day spa removal available throughout San Diego County. Book this week and save 15% on your spa disposal project!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:+16197500114"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-center font-bold transition-colors inline-block"
                    >
                      Call Today for Same-Day Hot Tub Removal: (619) 750-0114
                    </a>
                    <a
                      href="/contact"
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg text-center font-bold transition-colors inline-block"
                    >
                      Get Your Free Hot Tub Removal Quote
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Licensed & insured • Same-day service • 15% off this week • All San Diego County
                  </p>
                </div>

                {/* Trust Signals */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="grid md:grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold text-blue-600">200+</p>
                      <p className="text-sm text-gray-600">Cleanout & Hauling Projects Completed</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">Licensed</p>
                      <p className="text-sm text-gray-600">& Insured</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">Same-Day</p>
                      <p className="text-sm text-gray-600">Service Available</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">Serving</p>
                      <p className="text-sm text-gray-600">All San Diego</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <HotTubFAQSection />
      </main>
        <Footer />
      </div>
    </>
  );
}