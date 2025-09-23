import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ApplianceFAQSection from "./ApplianceFAQSection";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Appliance Removal San Diego | Refrigerator & Washer Disposal | Same-Day Service",
  description: "Professional appliance removal San Diego - same-day refrigerator removal, washer dryer disposal, eco-friendly appliance recycling. Licensed appliance haulers. Call (619) 750-0114!",
  keywords: "appliance removal San Diego, refrigerator removal San Diego, washer dryer removal San Diego, appliance disposal San Diego, appliance recycling San Diego, appliance pickup San Diego, licensed appliance haulers San Diego, eco-friendly appliance disposal",
  openGraph: {
    title: "Appliance Removal San Diego | Refrigerator & Washer Disposal",
    description: "Professional appliance removal and recycling service in San Diego. Refrigerator, washer, dryer and all appliance disposal with eco-friendly recycling.",
    url: "https://severincleaners.com/appliance-removal-san-diego",
  },
  alternates: {
    canonical: "https://severincleaners.com/appliance-removal-san-diego",
  },
};

export default function ApplianceRemovalPage() {

  return (
    <div className={`${inter.variable} font-sans antialiased`}>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Appliance Removal San Diego – Refrigerator, Washer & Dryer Disposal
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Same-Day Appliance Pickup • Eco-Friendly Recycling • Licensed Appliance Haulers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  CALL FOR SAME-DAY APPLIANCE REMOVAL: (619) 750-0114
                </a>
                <a
                  href="#contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  GET APPLIANCE REMOVAL QUOTE
                </a>
              </div>
              <p className="mt-6 text-sm text-blue-100">
                🔌 Licensed appliance haulers • EPA-compliant recycling • Don't wait—free up space today!
              </p>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why San Diego Trusts Our Licensed Appliance Haulers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Eco-Friendly Appliance Recycling</h3>
                <p className="text-gray-600">
                  EPA-compliant appliance recycling San Diego with 85% material recovery rate. Licensed for refrigerant handling and hazardous waste disposal.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Professional Appliance Handling</h3>
                <p className="text-gray-600">
                  Licensed appliance haulers San Diego with specialized equipment. Safe disconnection and removal without property damage.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Same-Day Appliance Pickup</h3>
                <p className="text-gray-600">
                  Rapid appliance pickup San Diego with same-day and emergency scheduling. Perfect for kitchen renovations and urgent removals.
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
                Professional Appliance Removal San Diego - Licensed & EPA Compliant
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                  When you need reliable <strong>appliance removal San Diego</strong> service, Severin Cleaners provides licensed, professional appliance disposal that combines convenience with environmental responsibility. Our experienced team of licensed appliance haulers San Diego handles all types of appliance removal with proper permits, specialized equipment, and EPA-compliant recycling practices.
                </p>

                <p className="text-lg mb-6">
                  Our <strong>refrigerator removal San Diego</strong> service extends to all major appliances, ensuring safe disconnection and eco-friendly disposal that meets strict California environmental standards. We understand that appliances contain refrigerants, metals, and electronic components requiring specialized handling – that's why we're certified for hazardous material disposal and appliance recycling San Diego.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Complete Appliance Pickup San Diego Services</h3>
                <p className="text-lg mb-4">
                  Severin Cleaners offers comprehensive <strong>appliance removal San Diego</strong> services for residential, commercial, and industrial properties throughout San Diego County:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Kitchen Appliance Removal</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Refrigerator removal San Diego</strong> - all sizes including commercial walk-in units</li>
                      <li>Freezers, ice makers, and beverage centers</li>
                      <li>Dishwashers and garbage disposal units</li>
                      <li>Gas and electric stoves, ovens, and cooktops</li>
                      <li>Built-in microwaves and range hoods</li>
                      <li>Wine coolers and under-counter refrigerators</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Laundry & Utility Appliances</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Washer dryer removal San Diego</strong> - front load, top load, and stackable units</li>
                      <li>Commercial laundry equipment and coin-operated machines</li>
                      <li>Water heaters (gas, electric, and tankless)</li>
                      <li>Boilers and utility heating systems</li>
                      <li>Utility sinks, laundry tubs, and washbasins</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">HVAC & Climate Control</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Window and central air conditioning units</li>
                      <li>Heating units, furnaces, and heat pumps</li>
                      <li>Dehumidifiers, humidifiers, and air purifiers</li>
                      <li>Evaporative coolers and industrial fans</li>
                      <li>Pool heaters, pumps, and spa equipment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Commercial & Specialty Equipment</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Restaurant equipment and commercial kitchen appliances</li>
                      <li>Medical and laboratory equipment disposal</li>
                      <li>Exercise equipment with electronic components</li>
                      <li>Industrial machinery and manufacturing equipment</li>
                      <li>E-waste and computer server equipment</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Our Licensed Appliance Removal Process</h3>
                <p className="text-lg mb-4">
                  When you choose our <strong>appliance pickup San Diego</strong> service, here's our certified professional process:
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                  <li><strong>Professional Assessment:</strong> Licensed technician evaluates appliances and disconnection requirements</li>
                  <li><strong>Transparent Pricing:</strong> Upfront quote including all disconnection, removal, and recycling fees</li>
                  <li><strong>Safe Disconnection:</strong> Proper shutdown of gas, water, and electrical connections by certified technicians</li>
                  <li><strong>Professional Removal:</strong> Safe extraction using specialized equipment, dollies, and protective materials</li>
                  <li><strong>EPA-Compliant Disposal:</strong> Certified recycling and disposal at licensed facilities</li>
                  <li><strong>Complete Cleanup:</strong> Area cleaned and ready for new appliance installation or other use</li>
                </ol>

                <h3 className="text-2xl font-bold mt-8 mb-4">Specialized Appliance Disposal San Diego Services</h3>

                <h4 className="text-xl font-bold mb-3">Expert Refrigerator Removal San Diego</h4>
                <p className="text-lg mb-4">
                  Our professional <strong>refrigerator removal San Diego</strong> service handles the complex requirements of refrigeration equipment disposal. We're certified for refrigerant recovery, ensuring proper removal of R-134a, R-410A, and other cooling gases. Our team safely recycles valuable metals, plastic components, and electronic parts while ensuring full EPA compliance for refrigerator disposal throughout San Diego County.
                </p>

                <h4 className="text-xl font-bold mb-3">Safe Washer Dryer Removal San Diego</h4>
                <p className="text-lg mb-4">
                  <strong>Washer dryer removal San Diego</strong> requires careful disconnection from water lines, gas connections, and electrical systems. Our licensed appliance haulers are trained in safe utility disconnection, preventing water damage, gas leaks, and electrical hazards. We handle both standard and stackable units, including complex built-in installations that require special removal techniques.
                </p>

                <h4 className="text-xl font-bold mb-3">Commercial Appliance Disposal</h4>
                <p className="text-lg mb-4">
                  For businesses requiring commercial appliance removal, we provide specialized services for restaurants, hotels, hospitals, and industrial facilities. Our team understands commercial equipment regulations, OSHA compliance, and business continuity needs. We schedule removals during off-hours to minimize operational disruption and ensure proper disposal of commercial-grade appliances.
                </p>

                <h4 className="text-xl font-bold mb-3">Emergency Appliance Removal</h4>
                <p className="text-lg mb-4">
                  When appliances fail catastrophically or pose safety hazards, our emergency <strong>appliance pickup San Diego</strong> service provides rapid response. We handle water-damaged units, gas appliance emergencies, and electrical hazards with immediate removal to protect your property and family safety.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Comprehensive When to Schedule Appliance Removal Guide</h3>
                <p className="text-lg mb-4">
                  Consider our professional <strong>appliance removal San Diego</strong> service for these common situations:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="text-lg font-bold mb-3">Home Improvement Projects</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Kitchen Renovations:</strong> Removing old appliances before cabinet installation</li>
                      <li><strong>Appliance Upgrades:</strong> Energy-efficient replacements for older units</li>
                      <li><strong>Home Sales:</strong> Clearing non-conveying appliances for staging</li>
                      <li><strong>New Construction:</strong> Removing temporary or damaged appliances</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-3">Property Management Needs</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Tenant Turnover:</strong> Removing abandoned or damaged appliances</li>
                      <li><strong>Estate Cleanouts:</strong> (<Link href="/estate-cleanout-san-diego" className="text-blue-600 underline">see our estate services</Link>) Clearing inherited properties</li>
                      <li><strong>Property Flips:</strong> Removing outdated appliances for modernization</li>
                      <li><strong>Business Closures:</strong> Commercial equipment and appliance disposal</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">San Diego Areas We Serve for Appliance Pickup</h3>
                <p className="text-lg mb-4">
                  Our licensed <strong>appliance removal San Diego</strong> service covers all major neighborhoods with same-day availability:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <ul className="list-disc pl-4">
                    <li>Downtown & Gaslamp Quarter</li>
                    <li>Hillcrest & Bankers Hill</li>
                    <li>Pacific Beach & Mission Beach</li>
                    <li>La Jolla & UC San Diego</li>
                    <li>Point Loma & Sunset Cliffs</li>
                  </ul>
                  <ul className="list-disc pl-4">
                    <li>Chula Vista & Eastlake</li>
                    <li>National City & Lincoln Acres</li>
                    <li>El Cajon & Rancho San Diego</li>
                    <li>La Mesa & Spring Valley</li>
                    <li>Santee & Lakeside</li>
                  </ul>
                  <ul className="list-disc pl-4">
                    <li>Oceanside & Vista</li>
                    <li>Escondido & San Marcos</li>
                    <li>Poway & Scripps Ranch</li>
                    <li>Imperial Beach & Coronado</li>
                    <li>Bonita & Paradise Hills</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Advanced Eco-Friendly Appliance Disposal</h3>
                <p className="text-lg mb-4">
                  Severin Cleaners leads San Diego in sustainable <strong>appliance recycling San Diego</strong> practices. Our licensed team follows strict environmental protocols while maximizing material recovery:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Refrigerant Recovery:</strong> EPA-certified removal and recycling of R-134a, R-410A, and other cooling gases</li>
                  <li><strong>Metal Recovery:</strong> Steel, aluminum, copper, and stainless steel separation for specialized recycling</li>
                  <li><strong>Electronic Component Recycling:</strong> Circuit boards, wiring, and control panels processed at certified e-waste facilities</li>
                  <li><strong>Hazardous Material Handling:</strong> Safe disposal of mercury switches, asbestos insulation, and lead components</li>
                  <li><strong>Plastic and Glass Recovery:</strong> Separation and recycling of appliance plastic housings and glass components</li>
                  <li><strong>Documentation Provided:</strong> Detailed recycling certificates and disposal records for regulatory compliance</li>
                </ul>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                  <p className="font-bold text-yellow-800">
                    🏗️ Renovation Project with Multiple Items?
                  </p>
                  <p className="text-yellow-700 mt-2">
                    If your appliance removal is part of a larger renovation involving construction debris, <Link href="/construction-debris-removal-san-diego" className="text-blue-600 underline">see our construction debris removal services</Link> for comprehensive project cleanup.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Transparent Appliance Removal Pricing</h3>
                <p className="text-lg mb-4">
                  Our <strong>appliance pickup San Diego</strong> pricing is competitive, comprehensive, and includes all services:
                </p>
                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                  <ul className="space-y-2">
                    <li><strong>Single Appliance:</strong> $89-$149 (dishwashers, microwaves, small units)</li>
                    <li><strong>Large Appliances:</strong> $149-$249 (refrigerators, washers, dryers)</li>
                    <li><strong>HVAC Equipment:</strong> $199-$349 (AC units, water heaters, furnaces)</li>
                    <li><strong>Commercial Equipment:</strong> $299-$599+ (restaurant, medical, industrial)</li>
                    <li><strong>Same-Day Service:</strong> Standard pricing - no emergency fees</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4">
                    * Pricing includes disconnection, removal, transportation, eco-friendly disposal, and cleanup. Additional fees for complex installations or hazardous material handling.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Licensed Appliance Haulers San Diego</h3>
                <p className="text-lg mb-4">
                  Professional appliance disposal requires proper licensing, certifications, and specialized knowledge:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>EPA Certification:</strong> Licensed for refrigerant handling and hazardous waste disposal</li>
                  <li><strong>California Compliance:</strong> Following all state regulations for appliance recycling and disposal</li>
                  <li><strong>Insurance Coverage:</strong> Full liability and workers compensation for your protection</li>
                  <li><strong>Specialized Equipment:</strong> Appliance dollies, refrigerant recovery units, and safety gear</li>
                  <li><strong>Trained Technicians:</strong> Certified in safe disconnection and hazardous material handling</li>
                  <li><strong>Environmental Responsibility:</strong> 85% material recovery rate exceeding industry standards</li>
                </ul>

        {/* FAQ Section */}
        <ApplianceFAQSection />

                <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg mt-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">
                    🔌 Ready for Professional Appliance Removal?
                  </h3>
                  <p className="text-lg mb-4 text-gray-800">
                    Don't let old appliances take up valuable space or pose safety hazards. Our licensed <strong>appliance removal San Diego</strong> team provides safe, eco-friendly disposal with same-day service throughout San Diego County. Call today for immediate appliance pickup!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:+16197500114"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-center font-bold transition-colors inline-block"
                    >
                      Call Today for Same-Day Appliance Removal: (619) 750-0114
                    </a>
                    <a
                      href="#contact"
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg text-center font-bold transition-colors inline-block"
                    >
                      Get Your Appliance Removal Quote
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Licensed & EPA certified • Same-day service • 85% recycling rate • All San Diego neighborhoods
                  </p>
                </div>

                {/* Trust Signals */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="grid md:grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold text-blue-600">800+</p>
                      <p className="text-sm text-gray-600">Appliances Removed</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">EPA</p>
                      <p className="text-sm text-gray-600">Certified & Licensed</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">85%</p>
                      <p className="text-sm text-gray-600">Material Recovery Rate</p>
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
  );
}