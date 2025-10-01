import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VistaFAQSection from "./VistaFAQSection";

export const metadata: Metadata = {
  title: "Vista Junk Removal | Family Homes & Business Cleanout Specialists | Same-Day Service",
  description: "Professional Vista junk removal for families, apartments & businesses. Same-day junk hauling Vista, eco-friendly disposal. Serving Shadowridge, Downtown Vista Village, Business Park. Call (619) 750-0114!",
  keywords: "Vista junk removal, junk hauling Vista, junk pickup Vista, trash removal Vista, Vista San Diego junk removal, Shadowridge junk removal, Downtown Vista junk hauling, Vista Business Park cleanout",
  openGraph: {
    title: "Vista Junk Removal | Family Homes & Business Cleanout Specialists",
    description: "Professional Vista junk removal for families, apartments & businesses. Same-day junk hauling Vista, eco-friendly disposal. Serving all Vista neighborhoods.",
    url: "https://severincleaners.com/junk-removal-vista",
  },
};

export default function VistaJunkRemoval() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Vista Junk Removal – Serving Families, Apartments & Businesses
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Professional junk hauling for Downtown Vista Village, Shadowridge, and Buena Creek neighborhoods
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
                  Get Vista Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why Vista Residents Choose Severin Cleaners
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Same Day Service</h3>
                <p className="text-gray-600">Quick response throughout Vista - from Shadowridge to Downtown Village. Same-day pickup available for urgent needs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Family & Business Focus</h3>
                <p className="text-gray-600">Specialized service for Vista families, apartments, and businesses including the Vista Business Park.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Eco-Friendly Disposal</h3>
                <p className="text-gray-600">Responsible disposal with recycling and donation programs to benefit the Vista community.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Professional Vista Junk Removal for North County Families
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                  When Vista families and businesses need reliable <strong>Vista junk removal</strong> services, Severin Cleaners delivers professional solutions for the unique needs of this North County community. Our experienced team provides same-day <strong>junk hauling Vista</strong> with transparent pricing that works for family budgets and business operations.
                </p>
                <p className="text-lg mb-6">
                  From Downtown Vista Village to Shadowridge neighborhoods, we specialize in <strong>trash removal Vista</strong> for family homes, apartments, and business properties. Our reliable service supports the diverse Vista community with eco-friendly disposal and professional handling of all types of unwanted items.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Areas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Professional Vista San Diego Junk Removal for Every Need
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                When you need reliable <strong>Vista junk removal</strong> services, Severin Cleaners delivers professional solutions for families, apartment residents, and businesses throughout North County. Our experienced team provides same-day <strong>junk hauling Vista</strong> with transparent pricing and eco-friendly disposal methods that Vista residents trust.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                From Downtown Vista Village to Shadowridge neighborhoods, we handle everything from single-item pickup to complete estate cleanouts. Our <strong>trash removal Vista</strong> services support both residential families and local businesses with reliable, professional care.
              </p>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Junk Hauling in Shadowridge and Downtown Vista
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Downtown Vista Village</h3>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li>• Historic core apartments and condos</li>
                  <li>• Local brewery and restaurant cleanouts</li>
                  <li>• Small business junk removal</li>
                  <li>• Vintage home furniture removal</li>
                </ul>
                <a href="tel:+16197500114" className="text-blue-600 font-semibold hover:text-blue-700">
                  Call for Downtown Vista Service →
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Shadowridge & Buena Creek</h3>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li>• Family home cleanouts and moves</li>
                  <li>• Garage and storage clearing</li>
                  <li>• Backyard and patio furniture</li>
                  <li>• HOA community cleanups</li>
                </ul>
                <a href="tel:+16197500114" className="text-blue-600 font-semibold hover:text-blue-700">
                  Call for Shadowridge Service →
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Vista Business Park</h3>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li>• <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:text-blue-700">Commercial office cleanouts</a></li>
                  <li>• Warehouse and storage facility clearing</li>
                  <li>• Retail space renovation debris</li>
                  <li>• Industrial equipment removal</li>
                </ul>
                <a href="tel:+16197500114" className="text-blue-600 font-semibold hover:text-blue-700">
                  Call for Business Park Service →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Complete Junk Pickup Vista Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Residential Vista Families</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900"><a href="/furniture-removal-san-diego" className="text-blue-600 hover:text-blue-700">Furniture removal Vista</a> for family homes</h4>
                      <p className="text-gray-600 text-sm">Couches, beds, dining sets, and living room furniture</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Appliance and electronics disposal</h4>
                      <p className="text-gray-600 text-sm">Refrigerators, washers, TVs, and computer equipment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Garage and storage cleanouts</h4>
                      <p className="text-gray-600 text-sm">Decluttering and organizing family storage areas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Moving and downsizing support</h4>
                      <p className="text-gray-600 text-sm">Helping Vista families during transitions</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Vista Business & Commercial</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Office building cleanouts</h4>
                      <p className="text-gray-600 text-sm">Desk furniture, filing cabinets, and office equipment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Retail and restaurant spaces</h4>
                      <p className="text-gray-600 text-sm">Equipment removal for brewery and dining renovations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Warehouse and storage facilities</h4>
                      <p className="text-gray-600 text-sm">Large-scale commercial cleanouts in Business Park</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Construction and renovation debris</h4>
                      <p className="text-gray-600 text-sm">Supporting Vista contractors and property managers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="tel:+16197500114"
                className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-bold text-xl transition-colors inline-flex items-center"
              >
                📞 Call (619) 750-0114 - Same-Day Vista Junk Removal
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Vista Families & Businesses Choose Severin Cleaners
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Same-Day Service</h3>
                <p className="text-gray-600 text-sm">Emergency <strong>junk pickup Vista</strong> available within hours of your call</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Family-Owned Local</h3>
                <p className="text-gray-600 text-sm">Vista neighbors serving Vista families with personalized care</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Eco-Friendly Disposal</h3>
                <p className="text-gray-600 text-sm">Responsible recycling and donation programs for North County</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                <p className="text-gray-600 text-sm">Upfront quotes with no hidden fees for all Vista services</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Now using dropdown component */}
        <VistaFAQSection />

        {/* Contact CTA */}
        <section id="quote" className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Get Your Free Vista Junk Removal Quote Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional <strong>Vista junk removal</strong> with same-day service for families and businesses throughout Vista, Shadowridge, and surrounding North County areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+16197500114"
                className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-lg font-bold text-xl transition-colors inline-flex items-center justify-center"
              >
                📞 Call (619) 750-0114
              </a>
              <div className="flex flex-col items-center">
                <span className="text-gray-400 text-sm mb-2">Email Us</span>
                <a
                  href="mailto:severincleaners@gmail.com"
                  className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                  severincleaners@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}