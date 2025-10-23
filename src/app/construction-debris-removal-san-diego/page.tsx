import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConstructionFAQSection from "./ConstructionFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Construction Debris Removal San Diego | Contractor Hauling & Cleanup",
  description: "Professional construction debris removal San Diego. Fast, reliable service for contractors. Same-day available. Licensed & insured. Call (619) 750-0114 for contractor quote.",
  openGraph: {
    title: "Construction Debris Removal San Diego | Contractor Hauling & Cleanup",
    description: "Professional construction debris removal San Diego. Fast, reliable service for contractors. Same-day available. Licensed & insured.",
    url: "https://severincleaners.com/construction-debris-removal-san-diego",
  },
  alternates: {
    canonical: "https://severincleaners.com/construction-debris-removal-san-diego",
  },
};

export default function ConstructionDebrisRemovalPage() {
  const serviceSchema = generateServiceSchema({
    name: "Construction Debris Removal San Diego",
    description: "Professional construction debris removal for contractors. Fast, reliable service for renovation debris, demolition materials, and construction waste.",
    url: "https://severincleaners.com/construction-debris-removal-san-diego",
    serviceType: "Construction Debris Removal Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "Construction Debris Removal", url: "https://severincleaners.com/construction-debris-removal-san-diego" },
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
                Construction Debris Removal San Diego
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Fast, Reliable Service for Contractors • Same-Day Available • Licensed & Insured
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
                  Get Contractor Quote
                </a>
              </div>
              <p className="mt-6 text-sm text-blue-100">
                Keep Your Project on Schedule • Licensed & Insured • Professional Service
              </p>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why Contractors Choose Us
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
                  Fast response when you need it. Call before 2 PM for same-day pickup. Keep your project moving.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Licensed & Compliant</h3>
                <p className="text-gray-600">
                  We comply with San Diego disposal regulations. Proper documentation for permits and inspections.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Straightforward Pricing</h3>
                <p className="text-gray-600">
                  Clear, upfront quotes. No surprises. Volume pricing available for ongoing projects.
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
                Professional Construction Hauling for San Diego Contractors
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-4">
                  Construction projects generate debris. That's where we come in.
                </p>

                <p className="text-lg mb-6">
                  Our construction debris removal San Diego service handles everything from daily site cleanup to full demolition hauling. We work with general contractors, remodelers, and property managers throughout San Diego County—keeping projects on schedule and job sites compliant.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">What We Haul</h3>
                <p className="text-lg mb-4">
                  We handle all types of construction and renovation debris:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">Common Materials</h4>
                    <ul className="list-disc pl-4 space-y-2 text-gray-700">
                      <li>Lumber, framing, and wood scraps</li>
                      <li>Drywall, sheetrock, and wallboard</li>
                      <li>Flooring (carpet, tile, hardwood, vinyl)</li>
                      <li>Roofing materials and shingles</li>
                      <li>Cabinets, countertops, and fixtures</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">Heavy Materials</h4>
                    <ul className="list-disc pl-4 space-y-2 text-gray-700">
                      <li>Concrete, brick, and masonry</li>
                      <li>Asphalt and paving materials</li>
                      <li>Steel beams and metal framing</li>
                      <li>HVAC equipment and ductwork</li>
                      <li>Mixed construction waste</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4">Construction Cleanup San Diego</h3>
                <p className="text-lg mb-6">
                  Need ongoing cleanup for an active job site? Our construction cleanup San Diego service provides scheduled pickups—daily, weekly, or as needed. Regular debris removal keeps your site safe, improves workflow, and helps you pass inspections without delays. For ongoing commercial construction projects, see our <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">commercial junk removal services</a>.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Renovation Debris Removal San Diego</h3>
                <p className="text-lg mb-6">
                  Kitchen remodels, bathroom renovations, whole-house updates—we handle it all. Our renovation debris removal San Diego service is designed for residential and commercial remodeling contractors who need fast, reliable hauling without the hassle of renting dumpsters or making multiple dump runs.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Demolition Debris Removal San Diego</h3>
                <p className="text-lg mb-6">
                  Full demolition projects generate massive amounts of debris. Our demolition debris removal San Diego team has the equipment and experience to handle large-scale cleanouts efficiently. We load, haul, and dispose of everything—from structural materials to mixed waste—so you can move to the next phase faster.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Drywall Removal San Diego</h3>
                <p className="text-lg mb-6">
                  Drywall is heavy, bulky, and creates dust everywhere. Our drywall removal San Diego service handles sheetrock debris from remodels, repairs, and demolition work. We'll haul it all away and dispose of it properly according to local regulations.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Concrete Removal San Diego</h3>
                <p className="text-lg mb-6">
                  Broken concrete, old foundations, demolished driveways—our concrete removal San Diego service handles heavy concrete debris that most haulers won't touch. We have the equipment to load and transport concrete, brick, and masonry waste to proper disposal facilities.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">How It Works</h3>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
                    <h4 className="font-bold text-lg mb-2">Call for Quote</h4>
                    <p className="text-gray-700 text-sm">
                      Tell us what you've got and when you need it gone. We'll give you an upfront price.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
                    <h4 className="font-bold text-lg mb-2">We Show Up & Load</h4>
                    <p className="text-gray-700 text-sm">
                      Our team arrives on schedule, loads everything safely, and cleans up the area.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
                    <h4 className="font-bold text-lg mb-2">Proper Disposal</h4>
                    <p className="text-gray-700 text-sm">
                      We haul it to licensed facilities and provide documentation when needed.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4">Transparent Pricing</h3>
                <p className="text-lg mb-6">
                  Pricing is based on volume. All prices include labor, hauling, and proper disposal.
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

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Note: Large construction projects often require multiple loads. Heavy materials like concrete may have additional fees. Call <a href="tel:+16197500114" className="text-blue-600 font-bold hover:underline">(619) 750-0114</a> for an accurate contractor quote. For information about local disposal costs, see our <a href="/blog/san-diego-dump-fees-guide" className="text-blue-600 font-bold hover:underline">San Diego dump fees guide</a>.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4">Compliance & Documentation</h3>
                <p className="text-lg mb-6">
                  We comply with San Diego disposal regulations and can provide documentation for permits, inspections, and project closeout. For materials requiring special handling, we coordinate with licensed facilities when required.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Serving All San Diego County</h3>
                <p className="text-lg mb-4">
                  From downtown San Diego to North County, we provide construction hauling across the county. Fast response wherever your project is located.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-blue-600">Central & Coastal</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Downtown San Diego</li>
                      <li>• La Jolla & UTC</li>
                      <li>• Pacific Beach</li>
                      <li>• Mission Valley</li>
                      <li>• Point Loma</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-blue-600">East County</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• El Cajon</li>
                      <li>• La Mesa</li>
                      <li>• Santee</li>
                      <li>• Lakeside</li>
                      <li>• Poway</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-blue-600">North County</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Oceanside</li>
                      <li>• Carlsbad</li>
                      <li>• Escondido</li>
                      <li>• Vista</li>
                      <li>• All North County</li>
                    </ul>
                  </div>
                </div>

        {/* FAQ Section */}
        <ConstructionFAQSection />

                {/* Trust Signals */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold text-blue-600">200+</p>
                      <p className="text-sm text-gray-600">Construction Projects Serviced</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">Licensed</p>
                      <p className="text-sm text-gray-600">& Fully Insured</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">Same-Day</p>
                      <p className="text-sm text-gray-600">Service Available</p>
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
