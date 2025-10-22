import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FurnitureFAQSection from "./FurnitureFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Furniture Removal San Diego | Couch & Sofa Disposal | Severin Cleaners",
  description: "Professional furniture removal in San Diego. We remove couches, sofas, desks, and all furniture types. Same-day service available. Call (619) 750-0114. Starting at $100.",
  openGraph: {
    title: "Furniture Removal San Diego | Couch & Sofa Disposal | Severin Cleaners",
    description: "Professional furniture removal in San Diego. We remove couches, sofas, desks, and all furniture types. Same-day service available. Starting at $100.",
    url: "https://severincleaners.com/furniture-removal-san-diego",
  },
  alternates: {
    canonical: "https://severincleaners.com/furniture-removal-san-diego",
  },
};

export default function FurnitureRemovalPage() {
  const serviceSchema = generateServiceSchema({
    name: "Furniture Removal San Diego",
    description: "Professional furniture removal in San Diego. We remove couches, sofas, desks, beds, and all furniture types. Same-day service available.",
    url: "https://severincleaners.com/furniture-removal-san-diego",
    serviceType: "Furniture Removal Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "Furniture Removal", url: "https://severincleaners.com/furniture-removal-san-diego" },
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
                Furniture Removal San Diego
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Fast, Professional Service • We Do the Heavy Lifting • Same-Day Available
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  Call Now: (619) 750-0114
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  Get Free Quote
                </a>
              </div>
              <p className="mt-6 text-sm text-blue-100">
                Licensed & Insured • Starting at $100 • Serving All San Diego County
              </p>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why Choose Us for Furniture Hauling
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Same-Day Service</h3>
                <p className="text-gray-600">
                  Need that couch gone today? We offer same-day pickup throughout San Diego when you call early.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">We Do All the Work</h3>
                <p className="text-gray-600">
                  Don't lift a finger. Our team handles everything—from your upstairs bedroom to the curb and beyond.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Upfront Pricing</h3>
                <p className="text-gray-600">
                  No surprises. You'll know exactly what you're paying before we start. Free quotes by phone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
                Simple, Straightforward Pricing
              </h2>
              <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                Know what you'll pay before we arrive. All prices include labor, hauling, and proper disposal.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-blue-600 mb-2">SINGLE ITEM</p>
                    <p className="text-4xl font-bold text-blue-900 mb-1">$100</p>
                    <p className="text-sm text-blue-700">Starting at</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    One couch, desk, dresser, or similar
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-green-600 mb-2">MULTIPLE PIECES</p>
                    <p className="text-4xl font-bold text-green-900 mb-1">$249</p>
                    <p className="text-sm text-green-700">1/4 Trailer Load</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    A few pieces of furniture
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-purple-600 mb-2">FULL ROOM</p>
                    <p className="text-4xl font-bold text-purple-900 mb-1">$349</p>
                    <p className="text-sm text-purple-700">1/2 Trailer Load</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    Bedroom or living room set
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-200">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-orange-600 mb-2">FULL LOAD</p>
                    <p className="text-4xl font-bold text-orange-900 mb-1">$495</p>
                    <p className="text-sm text-orange-700">Complete removal</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    Multiple rooms or small apartment
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-lg mb-4 text-gray-900">Additional Load Sizes:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-300">
                    <span className="font-semibold text-gray-700">Half Room (3/8 Trailer Load)</span>
                    <span className="text-xl font-bold text-gray-900">$319</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-300">
                    <span className="font-semibold text-gray-700">Multiple Rooms (5/8 Trailer)</span>
                    <span className="text-xl font-bold text-gray-900">$366</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-300">
                    <span className="font-semibold text-gray-700">2-3 Rooms (3/4 Trailer Load)</span>
                    <span className="text-xl font-bold text-gray-900">$429</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-300">
                    <span className="font-semibold text-gray-700">Small Apartment (7/8 Trailer)</span>
                    <span className="text-xl font-bold text-gray-900">$462</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Note:</strong> Prices shown are for standard furniture removal. Heavy items like pianos or items requiring special handling may have additional fees. Call <a href="tel:+16197500114" className="text-blue-600 font-bold hover:underline">(619) 750-0114</a> for an accurate quote.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Got Old Furniture? We'll Haul It Away.
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-4">
                  Redecorating? Downsizing? Moving? Or maybe you just bought new furniture and need to get rid of the old stuff.
                </p>

                <p className="text-lg mb-6">
                  Whatever the reason, our <strong>furniture removal San Diego</strong> service makes it easy. We handle <a href="/couch-removal-san-diego" className="text-blue-600 hover:text-blue-700 underline font-semibold">couches and sofa pickup</a>, desks, mattresses, dressers—anything you need gone. From La Jolla to Chula Vista, we're helping San Diego homeowners and businesses clear out unwanted furniture every day, including <a href="/couch-removal-san-diego" className="text-blue-600 hover:text-blue-700 underline">couch removal</a> and sectional disposal.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">What We Remove</h3>
                <p className="text-lg mb-4">
                  If it's furniture, we'll take it. Here's what we haul away most often:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">Living Room</h4>
                    <ul className="list-disc pl-4 space-y-2 text-gray-700">
                      <li>Couches & sectionals</li>
                      <li>Sofas & loveseats</li>
                      <li>Recliners & armchairs</li>
                      <li>Coffee tables & end tables</li>
                      <li>Entertainment centers</li>
                      <li>Bookshelves & cabinets</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">Bedroom</h4>
                    <ul className="list-disc pl-4 space-y-2 text-gray-700">
                      <li>Beds, <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:text-blue-700 underline">mattresses & box springs</a></li>
                      <li>Dressers & nightstands</li>
                      <li>Armoires & wardrobes</li>
                      <li>Mirrors & headboards</li>
                      <li>Children's furniture</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">Office</h4>
                    <ul className="list-disc pl-4 space-y-2 text-gray-700">
                      <li>Desks (all sizes)</li>
                      <li>Office chairs</li>
                      <li>Conference tables</li>
                      <li>Filing cabinets</li>
                      <li>Cubicles & workstations</li>
                      <li>Storage units</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">Other Items</h4>
                    <ul className="list-disc pl-4 space-y-2 text-gray-700">
                      <li>Dining tables & chairs</li>
                      <li>Patio furniture</li>
                      <li>Exercise equipment</li>
                      <li>Pianos</li>
                      <li>Pool tables</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4">How It Works</h3>
                <p className="text-lg mb-4">
                  Getting rid of unwanted furniture couldn't be simpler:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
                    <h4 className="font-bold text-lg mb-2">Call or Book Online</h4>
                    <p className="text-gray-700 text-sm">
                      Give us a call at <a href="tel:+16197500114" className="text-blue-600 underline font-semibold">(619) 750-0114</a> or request a quote. We'll give you upfront pricing.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
                    <h4 className="font-bold text-lg mb-2">We Show Up & Haul It</h4>
                    <p className="text-gray-700 text-sm">
                      Our team arrives on time, handles all the lifting, and carefully removes your furniture without damaging your home.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
                    <h4 className="font-bold text-lg mb-2">Done!</h4>
                    <p className="text-gray-700 text-sm">
                      We dispose of your furniture properly according to local regulations. You're done—no truck rental, no heavy lifting.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4">Couch Removal</h3>
                <p className="text-lg mb-6">
                  Old couches are bulky, heavy, and a pain to move. Our <strong>couch removal San Diego</strong> service takes care of everything. Whether it's a sectional that won't fit through the door or a sleeper sofa weighing 300 pounds, we've got the equipment and expertise to get it out safely—even from upstairs apartments.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Sofa Removal</h3>
                <p className="text-lg mb-6">
                  Need a <strong>sofa removal San Diego</strong> team that shows up on time and does the job right? That's us. We handle loveseats, futons, and modular seating. Just point us to what needs to go, and we'll handle the rest.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Office Furniture Removal</h3>
                <p className="text-lg mb-6">
                  Closing an office? Upgrading your workspace? Our <strong>office furniture removal San Diego</strong> service handles corporate cleanouts of all sizes. We remove desks, cubicles, conference tables, and filing cabinets quickly and professionally—with minimal disruption to your business.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Desk Removal</h3>
                <p className="text-lg mb-6">
                  Those big executive desks can be surprisingly heavy. Our <strong>desk removal San Diego</strong> team has the tools to disassemble and remove desks of any size—from home office setups to industrial metal desks weighing hundreds of pounds.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Old Furniture Disposal</h3>
                <p className="text-lg mb-6">
                  When it comes to <strong>old furniture removal San Diego</strong>, we've seen it all. Worn-out recliners, broken bed frames, outdated dining sets—if it's furniture and you need it gone, we'll haul it away and dispose of it properly according to local San Diego regulations.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">When You Might Need Us</h3>
                <p className="text-lg mb-4">
                  San Diego homeowners and businesses call us for <strong>furniture disposal San Diego</strong> in all kinds of situations:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Moving or Downsizing</h4>
                    <p className="text-gray-700 text-sm">
                      Can't fit all your furniture in the new place? We'll haul away what doesn't make the cut.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Redecorating</h4>
                    <p className="text-gray-700 text-sm">
                      Out with the old, in with the new. We'll remove your old furniture to make room for fresh pieces.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Estate Cleanouts</h4>
                    <p className="text-gray-700 text-sm">
                      Need to clear an inherited property? We handle full-house furniture removal with care and respect.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Office Closures</h4>
                    <p className="text-gray-700 text-sm">
                      Corporate relocations or closures. We remove office furniture quickly so you can move on.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Broken or Damaged Items</h4>
                    <p className="text-gray-700 text-sm">
                      That broken dresser has been in the garage for months. Time to get your space back.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Property Management</h4>
                    <p className="text-gray-700 text-sm">
                      Tenant left furniture behind? We'll clear it out fast so you can re-list the unit.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4">Why Hire Professionals for Furniture Hauling?</h3>
                <p className="text-lg mb-4">
                  You could try to move that couch yourself. But here's why that's usually a bad idea:
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Heavy & Awkward:</strong> Furniture is heavier than it looks. Couches can weigh 200+ lbs, and they're awkward to carry.</li>
                  <li><strong>Risk of Injury:</strong> Back strains, pinched fingers, and worse. It happens more often than you'd think.</li>
                  <li><strong>Property Damage:</strong> Scratched floors, dented walls, broken railings. One wrong move can cost you.</li>
                  <li><strong>No Truck Needed:</strong> Why rent a truck and make multiple trips when we handle it all?</li>
                  <li><strong>Proper Disposal:</strong> Furniture can't just go to the curb. We know where it needs to go.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4">Serving All of San Diego</h3>
                <p className="text-lg mb-4">
                  We provide fast, professional <strong>furniture hauling San Diego</strong> service throughout the county—from coastal neighborhoods to inland communities.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-blue-600">Central San Diego</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Downtown</li>
                      <li>• La Jolla</li>
                      <li>• Pacific Beach</li>
                      <li>• North Park</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-blue-600">East County</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• El Cajon</li>
                      <li>• La Mesa</li>
                      <li>• Santee</li>
                      <li>• Lakeside</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-blue-600">South & North</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Chula Vista</li>
                      <li>• Oceanside</li>
                      <li>• Carlsbad</li>
                      <li>• Poway</li>
                    </ul>
                  </div>
                </div>

        {/* FAQ Section */}
        <FurnitureFAQSection />

        {/* Related Services */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related Specialized Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/couch-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Couch Removal</h4>
                <p className="text-gray-600">Fast sofa and sectional pickup throughout San Diego</p>
              </a>
              <a href="/san-diego-mattress-disposal" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Mattress Disposal</h4>
                <p className="text-gray-600">Eco-friendly mattress and box spring removal</p>
              </a>
              <a href="/appliance-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal</h4>
                <p className="text-gray-600">Safe removal and disposal of all household appliances</p>
              </a>
            </div>
          </div>
        </section>

              </div>
            </div>
          </div>
        </section>
      </main>

        <Footer />
      </div>
    </>
  );
}
