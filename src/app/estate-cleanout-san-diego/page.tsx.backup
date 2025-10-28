import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EstateFAQSection from "./EstateFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Estate Cleanout San Diego | Respectful Probate Cleanout Services",
  description: "Compassionate estate cleanout San Diego services. Probate cleanout, senior downsizing, inheritance property cleanout. Licensed, respectful, professional. Call (619) 750-0114.",
  openGraph: {
    title: "Estate Cleanout San Diego | Respectful Probate & Senior Downsizing",
    description: "Compassionate, professional estate cleanout services in San Diego. Probate cleanout, estate sales, senior downsizing with dignity and care.",
    url: "https://severincleaners.com/estate-cleanout-san-diego",
  },
  alternates: {
    canonical: "https://severincleaners.com/estate-cleanout-san-diego",
  },
};

export default function EstateCleanoutPage() {
  const serviceSchema = generateServiceSchema({
    name: "Estate Cleanout San Diego",
    description: "Compassionate estate cleanout services in San Diego. Professional probate cleanout, senior downsizing, and inheritance property cleanout with dignity and care.",
    url: "https://severincleaners.com/estate-cleanout-san-diego",
    serviceType: "Estate Cleanout Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "Estate Cleanout", url: "https://severincleaners.com/estate-cleanout-san-diego" },
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
                Estate Cleanout San Diego
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Compassionate Junk Hauling for Difficult Times • Licensed & Insured • Respectful Service
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
                Respectful • Professional • Understanding
              </p>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Junk Hauling That Makes a Difficult Time Easier
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Compassionate & Respectful</h3>
                <p className="text-gray-600">
                  We understand this is emotional. Our team handles every item with care and treats your family with dignity.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">We Do All the Work</h3>
                <p className="text-gray-600">
                  You don't lift anything. We haul away furniture, boxes, appliances—everything you need gone.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Flexible & Understanding</h3>
                <p className="text-gray-600">
                  Work at your own pace. We schedule around your timeline and emotional readiness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Estate Junk Removal When You Need It Most
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-4">
                  Clearing a loved one's home is never easy. There's <a href="/furniture-removal-san-diego" className="text-blue-600 hover:text-blue-700 underline">furniture to move</a>, including <a href="/couch-removal-san-diego" className="text-blue-600 hover:text-blue-700 underline">old furniture and sofa removal services</a>, boxes to haul, appliances to dispose of—and you're dealing with it all while grieving or managing family logistics.
                </p>

                <p className="text-lg mb-6">
                  Our estate cleanout San Diego service takes the physical burden off your shoulders. We're a junk hauling company that specializes in estate situations. We remove everything you need gone—respectfully, efficiently, and with compassion for what you're going through.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">What We Remove</h3>
                <p className="text-lg mb-4">
                  We haul away everything from single rooms to entire homes:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">Common Items We Haul</h4>
                    <ul className="list-disc pl-4 space-y-2 text-gray-700">
                      <li>Furniture (beds, couches, dressers, tables)</li>
                      <li>Appliances (refrigerators, washers, dryers)</li>
                      <li>Boxes of belongings and packed items</li>
                      <li>Clothing, linens, and personal items</li>
                      <li>Garage contents (tools, equipment, storage)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">Full Property Clearing</h4>
                    <ul className="list-disc pl-4 space-y-2 text-gray-700">
                      <li>Complete house cleanouts</li>
                      <li>Basement and attic clearing</li>
                      <li>Yard equipment and outdoor items</li>
                      <li>Accumulated items from storage areas</li>
                      <li>Anything else that needs hauling</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4">Probate Cleanout San Diego</h3>
                <p className="text-lg mb-6">
                  Dealing with probate? Courts often require the property to be cleared by certain deadlines. Our probate cleanout San Diego service works efficiently to meet those timelines. We haul away furniture, clear rooms, and prepare the property—helping you meet legal requirements without the stress of doing it yourself. For bank-owned properties or tenant situations, see our <a href="/foreclosure-eviction-cleanout-san-diego" className="text-blue-600 hover:underline">foreclosure and eviction cleanouts</a>.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Estate Sale Cleanout San Diego</h3>
                <p className="text-lg mb-6">
                  Had an estate sale but items are left over? Our estate sale cleanout San Diego service removes everything that didn't sell. We'll haul away the remaining furniture, boxes, and miscellaneous items so you can close out the property and move forward.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Senior Downsizing San Diego</h3>
                <p className="text-lg mb-6">
                  Helping a parent or loved one move to assisted living or a smaller home? Our senior downsizing San Diego service handles the heavy lifting. We remove furniture that won't fit in the new place, haul away items they no longer need, and make the transition easier for everyone involved.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Deceased Estate Cleanup San Diego</h3>
                <p className="text-lg mb-6">
                  After losing someone, the last thing you need is the burden of clearing their home alone. Our deceased estate cleanup San Diego service provides compassionate junk hauling during a difficult time. We handle all the physical work—removing furniture, hauling boxes, clearing rooms—so you can focus on family and healing.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Estate Junk Removal San Diego</h3>
                <p className="text-lg mb-6">
                  Not everything in an estate has value or needs to be kept. Our estate junk removal San Diego service removes unwanted furniture, old belongings, and accumulated items. We're the hauling solution that makes clearing a property manageable, whether it's one room or an entire house.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">How It Works</h3>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
                    <h4 className="font-bold text-lg mb-2">Call for Quote</h4>
                    <p className="text-gray-700 text-sm">
                      Tell us what needs to be removed. We'll provide an upfront price based on volume.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
                    <h4 className="font-bold text-lg mb-2">We Haul It Away</h4>
                    <p className="text-gray-700 text-sm">
                      Our team loads everything, hauls it away, and cleans up. You don't lift a finger.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
                    <h4 className="font-bold text-lg mb-2">Property Is Clear</h4>
                    <p className="text-gray-700 text-sm">
                      We dispose of items properly and leave the property clean and ready.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4">Transparent Pricing</h3>
                <p className="text-lg mb-6">
                  Estate cleanout costs vary based on how much needs to be removed. We provide upfront quotes with no hidden fees. All prices include hauling and proper disposal.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-blue-600 mb-2">SINGLE ITEM PICKUP</p>
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

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Note: Most full estate cleanouts require multiple trailer loads. Typical estates range from $1,500-$3,000 depending on property size and amount of items. We provide written estimates after seeing the property. Call <a href="tel:+16197500114" className="text-blue-600 font-bold hover:underline">(619) 750-0114</a> for a free assessment. For more information about disposal costs, visit our <a href="/blog/san-diego-dump-fees-guide" className="text-blue-600 font-bold hover:underline">San Diego dump fees guide</a>.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4">What Happens to the Items?</h3>
                <p className="text-lg mb-6">
                  Usable furniture and items in good condition go to local charities when appropriate. Everything else is disposed of responsibly—we comply with San Diego disposal regulations to ensure proper handling.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Serving All San Diego County</h3>
                <p className="text-lg mb-4">
                  From La Jolla to Chula Vista, we provide estate cleanout services countywide. Our team serves families in all San Diego neighborhoods with the same care and professionalism.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-blue-600">Coastal Areas</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• La Jolla</li>
                      <li>• Del Mar</li>
                      <li>• Pacific Beach</li>
                      <li>• Point Loma</li>
                      <li>• Coronado</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-blue-600">Central San Diego</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Downtown</li>
                      <li>• Hillcrest</li>
                      <li>• North Park</li>
                      <li>• Mission Valley</li>
                      <li>• Kensington</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-blue-600">East & South County</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• El Cajon</li>
                      <li>• La Mesa</li>
                      <li>• Chula Vista</li>
                      <li>• Santee</li>
                      <li>• Poway</li>
                    </ul>
                  </div>
                </div>

        {/* FAQ Section */}
        <EstateFAQSection />

                {/* Trust Signals */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold text-blue-600">200+</p>
                      <p className="text-sm text-gray-600">Estate Cleanouts Completed</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">Licensed</p>
                      <p className="text-sm text-gray-600">Bonded & Insured</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">Respectful</p>
                      <p className="text-sm text-gray-600">Compassionate Service</p>
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
    </>
  );
}
