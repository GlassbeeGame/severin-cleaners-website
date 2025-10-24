import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrapMetalFAQSection from "./ScrapMetalFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Scrap Metal Removal San Diego | Metal Recycling & Appliance Pickup",
  description: "Professional scrap metal removal in San Diego. We recycle copper, aluminum, steel, appliances & all metal types. Same-day pickup. Licensed & eco-friendly. Call (619) 750-0114.",
  keywords: "scrap metal removal San Diego, metal recycling San Diego, scrap metal pickup, copper recycling, aluminum recycling, appliance removal, scrap metal hauling, metal disposal San Diego",
  openGraph: {
    title: "Scrap Metal Removal San Diego | Metal Recycling & Appliance Pickup",
    description: "Professional scrap metal removal in San Diego. We recycle copper, aluminum, steel, appliances & all metal types. Same-day pickup available.",
    url: "https://severincleaners.com/scrap-metal-removal",
  },
  alternates: {
    canonical: "https://severincleaners.com/scrap-metal-removal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ScrapMetalRemovalPage() {
  const serviceSchema = generateServiceSchema({
    name: "Scrap Metal Removal San Diego",
    description: "Professional scrap metal removal and recycling in San Diego. We handle copper, aluminum, steel, appliances, and all metal types with eco-friendly disposal.",
    url: "https://severincleaners.com/scrap-metal-removal",
    serviceType: "Scrap Metal Removal & Recycling Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "Scrap Metal Removal", url: "https://severincleaners.com/scrap-metal-removal" },
  ]);

  const faqSchema = {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of scrap metal do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept all ferrous and non-ferrous metals including appliances (refrigerators, washers, dryers, stoves, water heaters), copper (pipes, wire, plumbing fixtures), aluminum (siding, gutters, window frames), steel and iron (beams, rebar, railings, gates), brass fixtures, and metal furniture throughout San Diego County."
        }
      },
      {
        "@type": "Question",
        "name": "How much does scrap metal removal cost in San Diego?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Scrap metal removal pricing is volume-based: Single Appliance starting at $100, 1/4 Trailer Load $249, 1/2 Trailer Load $349, Full Trailer Load $495. Large quantities of valuable metals (copper, aluminum, brass) may qualify for pricing credits. All prices include labor, transportation, and proper recycling disposal."
        }
      },
      {
        "@type": "Question",
        "name": "Do you remove refrigerators and appliances with Freon?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we safely remove all appliances including refrigerators, freezers, air conditioners, and other Freon-containing units. We follow EPA regulations and California environmental standards for proper Freon removal and disposal before recycling the metal components."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer same-day scrap metal pickup in San Diego?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer same-day scrap metal removal throughout San Diego County including El Cajon, La Mesa, Santee, Chula Vista, and all surrounding areas. Call before 2 PM for same-day service availability."
        }
      }
    ]
  };

  const reviewSchema = {
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "@id": "https://severincleaners.com/#business",
      "name": "Severin Cleaners"
    },
    "author": {
      "@type": "Person",
      "name": "Tony Murphy"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "They stopped by to help my grandfather remove his old fridge and install the new one. They were kind, quick to respond, and got everything done in no time. We thought it would be a hassle since the new fridge had to be picked up last minute, but they made it effortless and even took the time to coordinate everything.",
    "datePublished": "2025-01-15"
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema, faqSchema, reviewSchema]
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
                Scrap Metal Removal San Diego
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Professional Metal Recycling • Appliance Pickup • Eco-Friendly Disposal • Same-Day Service
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
              Why Choose Our Scrap Metal Recycling Service
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Same-Day Pickup</h3>
                <p className="text-gray-600">
                  Fast metal removal throughout San Diego County. Same-day service available when you call early.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Eco-Friendly Recycling</h3>
                <p className="text-gray-600">
                  All metals recycled at certified facilities. Proper Freon removal from appliances per EPA standards.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">
                  Transparent rates with possible credits for valuable metals. No surprises, just honest pricing.
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
                Transparent Scrap Metal Removal Pricing
              </h2>
              <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                Volume-based pricing with possible credits for valuable metals. All prices include labor, hauling, and proper recycling.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-blue-600 mb-2">SINGLE APPLIANCE</p>
                    <p className="text-4xl font-bold text-blue-900 mb-1">$100</p>
                    <p className="text-sm text-blue-700">Starting at</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    One refrigerator, washer, dryer, or water heater
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-green-600 mb-2">SMALL LOAD</p>
                    <p className="text-4xl font-bold text-green-900 mb-1">$249</p>
                    <p className="text-sm text-green-700">1/4 Trailer Load</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    Multiple small items or mixed scrap
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-purple-600 mb-2">MEDIUM LOAD</p>
                    <p className="text-4xl font-bold text-purple-900 mb-1">$349</p>
                    <p className="text-sm text-purple-700">1/2 Trailer Load</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    Several appliances or construction metal
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-200">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-orange-600 mb-2">FULL LOAD</p>
                    <p className="text-4xl font-bold text-orange-900 mb-1">$495</p>
                    <p className="text-sm text-orange-700">Complete removal</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    Large commercial cleanouts or bulk metal
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-lg mb-4 text-gray-900">Additional Load Sizes:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-300">
                    <span className="font-semibold text-gray-700">3/8 Trailer Load</span>
                    <span className="text-xl font-bold text-gray-900">$319</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-300">
                    <span className="font-semibold text-gray-700">5/8 Trailer Load</span>
                    <span className="text-xl font-bold text-gray-900">$366</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-300">
                    <span className="font-semibold text-gray-700">3/4 Trailer Load</span>
                    <span className="text-xl font-bold text-gray-900">$429</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-300">
                    <span className="font-semibold text-gray-700">7/8 Trailer Load</span>
                    <span className="text-xl font-bold text-gray-900">$462</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Note:</strong> Large quantities of valuable metals (copper, aluminum, brass) may qualify for pricing credits that can reduce or eliminate your removal cost. Call <a href="tel:+16197500114" className="text-blue-600 font-bold hover:underline">(619) 750-0114</a> for a custom quote.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Professional Scrap Metal Recycling in San Diego
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                  Looking for reliable <strong>scrap metal removal San Diego</strong> services? Our professional team handles all types of ferrous and non-ferrous metals throughout San Diego County. From single appliance pickup to large commercial metal cleanouts, we provide eco-friendly <strong>metal recycling San Diego</strong> with transparent pricing and same-day service available.
                </p>

                <p className="text-lg mb-6">
                  Whether you're a contractor with construction debris, a homeowner with old appliances, or a business clearing out metal equipment, our <strong>scrap metal hauling</strong> service makes disposal easy. We handle all the heavy lifting, proper transportation, and ensure your metals are recycled at certified facilities throughout San Diego County.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Types of Scrap Metal We Accept</h3>
                <p className="text-lg mb-4">
                  Our <strong>San Diego metal recycling</strong> service accepts virtually all metal types:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">Appliances & Large Items</h4>
                    <ul className="list-disc pl-4 space-y-2 text-gray-700">
                      <li>Refrigerators and freezers (Freon removal included)</li>
                      <li>Washers, dryers, and dishwashers</li>
                      <li>Stoves, ovens, and microwaves</li>
                      <li>Water heaters and HVAC units</li>
                      <li>Metal furniture and filing cabinets</li>
                      <li>Exercise equipment and weight sets</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">Construction & Raw Metals</h4>
                    <ul className="list-disc pl-4 space-y-2 text-gray-700">
                      <li>Copper pipes, wire, and plumbing fixtures</li>
                      <li>Aluminum siding, gutters, and window frames</li>
                      <li>Steel beams, rebar, and construction metal</li>
                      <li>Brass fixtures and hardware</li>
                      <li>Iron railings, gates, and fencing</li>
                      <li>Metal roofing and flashing materials</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4">Copper Recycling San Diego</h3>
                <p className="text-lg mb-6">
                  Copper is one of the most valuable recyclable metals. Our <strong>copper recycling San Diego</strong> service accepts copper pipes, electrical wiring, plumbing fixtures, air conditioning units, and more. We offer competitive pricing for large quantities of clean copper, and can often provide credits that reduce or eliminate your removal cost.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Aluminum Recycling & Removal</h3>
                <p className="text-lg mb-6">
                  From aluminum siding to gutters, window frames to cans, our <strong>aluminum recycling San Diego</strong> service handles all forms of aluminum scrap. Aluminum is highly recyclable and in-demand, making it another metal that may qualify for pricing credits on large quantities.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Steel & Iron Scrap Metal Pickup</h3>
                <p className="text-lg mb-6">
                  Contractors and homeowners trust our <strong>steel recycling</strong> service for removing construction debris, rebar, beams, railings, gates, and all ferrous metals. We have the equipment to handle heavy loads and transport your steel scrap to certified recycling facilities.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Appliance Removal with Freon Disposal</h3>
                <p className="text-lg mb-6">
                  Need <strong>refrigerator removal</strong> or other appliance disposal? We safely remove all appliances containing Freon, following EPA regulations for proper hazardous material handling. Our certified partners ensure refrigerant is recovered before metal recycling, protecting the environment and meeting California standards.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Where We Recycle Your Scrap Metal</h3>
                <p className="text-lg mb-4">
                  Transparency matters. Our <strong>metal disposal San Diego</strong> service partners with licensed recycling facilities throughout the region:
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Certified Metal Recyclers:</strong> Licensed facilities in El Cajon, La Mesa, and Santee for ferrous and non-ferrous metals</li>
                  <li><strong>E-Waste Facilities:</strong> California-certified processors for appliances with proper Freon and refrigerant recovery</li>
                  <li><strong>Specialized Processors:</strong> Dedicated copper and aluminum processing centers for high-value metals</li>
                  <li><strong>Steel Recycling Centers:</strong> Industrial facilities for rebar, beams, and heavy steel scrap</li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4">Commercial Scrap Metal Services</h3>
                <p className="text-lg mb-6">
                  We provide <strong>commercial metal recycling</strong> for businesses throughout San Diego County. Whether you're a contractor with ongoing debris, a manufacturer with scrap materials, or a business with metal equipment to dispose of, we offer regular pickup schedules, competitive pricing, and proper documentation for your recycling efforts.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Residential Metal Removal</h3>
                <p className="text-lg mb-6">
                  Homeowners choose our <strong>residential scrap metal pickup</strong> for appliance disposal, garage cleanouts, renovation debris, and more. We make it easy – just call for a quote, schedule your pickup, and we handle everything from there. No need to transport heavy metals yourself.
                </p>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-lg">
                  <h4 className="text-xl font-bold mb-3 text-green-900">Customer Testimonial</h4>
                  <div className="flex items-center mb-2">
                    <div className="text-yellow-500 text-lg mr-2">⭐⭐⭐⭐⭐</div>
                    <p className="font-bold text-gray-900">Tony Murphy - Rancho San Diego</p>
                  </div>
                  <p className="text-gray-700 italic mb-2">
                    "They stopped by to help my grandfather remove his old fridge and install the new one. They were kind, quick to respond, and got everything done in no time. We thought it would be a hassle since the new fridge had to be picked up last minute, but they made it effortless and even took the time to coordinate everything."
                  </p>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4">Serving All San Diego County</h3>
                <p className="text-lg mb-4">
                  Our <strong>scrap metal removal San Diego</strong> service covers the entire county:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-blue-600">East County</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• El Cajon</li>
                      <li>• La Mesa</li>
                      <li>• Santee</li>
                      <li>• Lakeside</li>
                      <li>• Rancho San Diego</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-blue-600">Central & Coastal</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Downtown San Diego</li>
                      <li>• La Jolla</li>
                      <li>• Pacific Beach</li>
                      <li>• Mission Valley</li>
                      <li>• North Park</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-blue-600">South & North County</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Chula Vista</li>
                      <li>• Oceanside</li>
                      <li>• Carlsbad</li>
                      <li>• Poway</li>
                      <li>• Carmel Valley</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-900 text-white p-8 rounded-lg text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Recycle Your Scrap Metal?</h3>
                  <p className="text-lg mb-6">
                    Fast, eco-friendly metal removal with transparent pricing and same-day service available
                  </p>
                  <a
                    href="tel:+16197500114"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block"
                  >
                    📞 Call (619) 750-0114 for Free Quote
                  </a>
                  <p className="text-sm mt-4">
                    Licensed & insured • Same-day pickup • Certified recycling facilities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <ScrapMetalFAQSection />

        {/* Related Services */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/junk-removal-el-cajon" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Junk Removal El Cajon</h4>
                <p className="text-gray-600">Comprehensive junk removal and scrap metal services for East County families and businesses</p>
              </a>
              <a href="/appliance-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal</h4>
                <p className="text-gray-600">Professional appliance disposal with proper Freon handling and eco-friendly recycling</p>
              </a>
              <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal</h4>
                <p className="text-gray-600">Fast furniture hauling and disposal for homes and businesses throughout San Diego</p>
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
