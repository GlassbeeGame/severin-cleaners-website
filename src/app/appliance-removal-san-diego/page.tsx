import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApplianceFAQSection from "./ApplianceFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Appliance Removal San Diego | Fridge & Washer Disposal",
  description: "Professional appliance removal in San Diego. We remove refrigerators, washers, dryers, stoves, and all appliance types. Same-day service available. Call (619) 750-0114. Starting at $100.",
  openGraph: {
    title: "Appliance Removal San Diego | Refrigerator & Washer Disposal | Severin Cleaners",
    description: "Professional appliance removal in San Diego. We remove refrigerators, washers, dryers, stoves, and all appliance types. Same-day service available. Call (619) 750-0114. Starting at $100.",
    url: "https://severincleaners.com/appliance-removal-san-diego",
  },
  alternates: {
    canonical: "https://severincleaners.com/appliance-removal-san-diego",
  },
};

export default function ApplianceRemovalPage() {
  const serviceSchema = generateServiceSchema({
    name: "Appliance Removal San Diego",
    description: "Professional appliance removal in San Diego. We remove refrigerators, washers, dryers, stoves, and all appliance types. Eco-friendly disposal.",
    url: "https://severincleaners.com/appliance-removal-san-diego",
    serviceType: "Appliance Removal Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "Appliance Removal", url: "https://severincleaners.com/appliance-removal-san-diego" },
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
                Appliance Removal San Diego
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Fast, Professional Service • We Handle the Heavy Lifting • Same-Day Pickup Available
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
                Licensed & Insured • Starting at $100 • Serving All of San Diego County
              </p>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why San Diego Homeowners Choose Severin Cleaners
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">We Do the Heavy Lifting</h3>
                <p className="text-gray-600">
                  No need to move appliances to the curb. Our appliance removal San Diego team handles everything—from basements to second floors—with professional equipment and full liability coverage.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Upfront, Honest Pricing</h3>
                <p className="text-gray-600">
                  No surprises. Every appliance disposal San Diego quote includes labor, hauling, and proper disposal at licensed local facilities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Same-Day Service</h3>
                <p className="text-gray-600">
                  Need it gone today? We offer same-day appliance removal San Diego across the county. Early morning calls can often be scheduled within hours.
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
                Old Appliances Taking Up Space? We'll Haul Them Away.
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-4">
                  Whether you just upgraded your kitchen or have a broken washer collecting dust, we make appliance removal in San Diego easy.
                </p>

                <p className="text-lg mb-6">
                  We remove refrigerators, washers, dryers, stoves, dishwashers—you name it. From La Jolla to Chula Vista, Point Loma to North Park, we help homeowners reclaim their space daily with safe, eco-friendly appliance hauling.
                </p>

                {/* Pricing Section */}
                <h3 className="text-2xl font-bold mt-8 mb-4">Transparent, Straightforward Pricing</h3>
                <p className="text-lg mb-6">
                  No hidden fees. No upcharges. Just fair appliance removal San Diego pricing:
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-blue-600 mb-2">SINGLE APPLIANCE</p>
                      <p className="text-4xl font-bold text-blue-900 mb-1">$100</p>
                      <p className="text-sm text-blue-700">Starting at</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-4 text-center">
                      One refrigerator, washer, dryer, stove, or similar
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-green-600 mb-2">¼ TRAILER LOAD</p>
                      <p className="text-4xl font-bold text-green-900 mb-1">$249</p>
                      <p className="text-sm text-green-700">3 cubic yards</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-4 text-center">
                      2-3 appliances or small cleanout
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-purple-600 mb-2">½ TRAILER LOAD</p>
                      <p className="text-4xl font-bold text-purple-900 mb-1">$349</p>
                      <p className="text-sm text-purple-700">6 cubic yards</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-4 text-center">
                      Multiple appliances or kitchen remodel
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-200">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-orange-600 mb-2">FULL TRAILER LOAD</p>
                      <p className="text-4xl font-bold text-orange-900 mb-1">$495</p>
                      <p className="text-sm text-orange-700">12 cubic yards</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-4 text-center">
                      Complete property or estate cleanout
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                  <p className="text-sm text-blue-900">
                    💡 All prices include labor, loading, and eco-friendly disposal at licensed San Diego facilities like Miramar Landfill.
                  </p>
                  <p className="text-sm text-blue-900 mt-2">
                    Built-in appliances or disconnections (gas/water lines) may require minor additional fees. Call <a href="tel:+16197500114" className="underline font-bold">(619) 750-0114</a> for an exact quote.
                  </p>
                  <p className="text-sm text-blue-900 mt-2">
                    Also offering <a href="/couch-removal-san-diego" className="underline font-bold">couch removal</a>, <a href="/san-diego-mattress-disposal" className="underline font-bold">mattress disposal</a>, and more. See our <a href="/junk-removal-cost-san-diego" className="underline font-bold">pricing guide</a>.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove</h3>
                <p className="text-lg mb-4">
                  If it's an appliance and you need it gone, we'll take it. Here's what we haul away most often:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">Kitchen Appliances</h4>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Refrigerators & freezers (all sizes)</li>
                      <li>Stoves, ovens & cooktops (gas or electric)</li>
                      <li>Dishwashers & range hoods</li>
                      <li>Microwaves, garbage disposals, ice makers</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">Laundry & Home Appliances</h4>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Washers & dryers (stackable or side-by-side)</li>
                      <li>Water heaters & dehumidifiers</li>
                      <li>AC units, fans, and small appliances</li>
                      <li>Space heaters & compact freezers</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">How It Works</h3>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
                    <h4 className="font-bold text-lg mb-2">Call or Book Online</h4>
                    <p className="text-gray-700">
                      Request your appliance removal San Diego quote and get instant pricing.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
                    <h4 className="font-bold text-lg mb-2">We Show Up & Haul It</h4>
                    <p className="text-gray-700">
                      Our crew arrives on time, handles disconnections, and removes your appliance safely—no floor damage, no mess.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
                    <h4 className="font-bold text-lg mb-2">Proper Disposal</h4>
                    <p className="text-gray-700">
                      We handle legal disposal and recycling according to City of San Diego regulations, keeping harmful materials out of landfills.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Specialized Appliance Removal Services</h3>

                <h4 className="text-xl font-bold mt-6 mb-3">Refrigerator Removal San Diego</h4>
                <p className="text-lg mb-6">
                  Our refrigerator removal specialists handle units from garages, condos, or upstairs kitchens. We safely navigate tight spaces and recycle Freon-compliant units responsibly.
                </p>

                <h4 className="text-xl font-bold mt-6 mb-3">Washer & Dryer Removal San Diego</h4>
                <p className="text-lg mb-6">
                  We disconnect, remove, and haul both units together—perfect for laundry upgrades or new appliance deliveries.
                </p>

                <h4 className="text-xl font-bold mt-6 mb-3">Stove & Dishwasher Removal San Diego</h4>
                <p className="text-lg mb-6">
                  From gas ranges to built-in dishwashers, our stove removal San Diego team handles careful extraction without damaging cabinetry.
                </p>

                <h4 className="text-xl font-bold mt-6 mb-3">Freezer Removal San Diego</h4>
                <p className="text-lg mb-6">
                  We remove garage or chest freezers of all sizes—no need to lift a thing. Just empty the contents, and we'll handle the rest.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">When San Diego Homeowners Call Us</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Kitchen Remodels</h4>
                    <p className="text-gray-700 text-sm">
                      Old units out before the new ones arrive.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Upgrading Appliances</h4>
                    <p className="text-gray-700 text-sm">
                      We'll remove your old fridge before tomorrow's delivery.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Moving Out</h4>
                    <p className="text-gray-700 text-sm">
                      Leave the property appliance-free for sale or rental.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Broken Units</h4>
                    <p className="text-gray-700 text-sm">
                      Non-working dishwashers or washers? We'll handle it.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Property Management</h4>
                    <p className="text-gray-700 text-sm">
                      Fast service for turnover or eviction cleanouts.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Estate Cleanouts</h4>
                    <p className="text-gray-700 text-sm">
                      Multiple appliances removed in one visit.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Hire Professionals</h3>
                <p className="text-lg mb-4">
                  Removing large appliances yourself risks injury, damage, and disposal violations. We provide safe, compliant, and efficient appliance disposal San Diego service that includes:
                </p>

                <ul className="list-none space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Proper disconnection from gas/electric/water lines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Floor and wall protection during removal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Recycling through certified facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Licensed and insured handling</span>
                  </li>
                </ul>

                <p className="text-lg mb-6">
                  Avoid back injuries, scratches, and fines — let the pros handle it.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Serving All of San Diego County</h3>
                <p className="text-lg mb-4">
                  We provide appliance removal San Diego and appliance disposal services everywhere:
                </p>

                <p className="text-lg mb-6 text-gray-700">
                  La Jolla • Pacific Beach • Downtown • North Park • Hillcrest • Mission Valley • La Mesa • Santee • Poway • El Cajon • Chula Vista • Oceanside • Vista • Del Mar
                </p>

                <p className="text-lg mb-6">
                  Disposal and recycling handled through licensed centers including Miramar Landfill and Allan Company Recycling.
                </p>

        {/* FAQ Section */}
        <ApplianceFAQSection />

                {/* Trust Signals */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold text-blue-600">200+</p>
                      <p className="text-sm text-gray-600">Jobs Completed</p>
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
