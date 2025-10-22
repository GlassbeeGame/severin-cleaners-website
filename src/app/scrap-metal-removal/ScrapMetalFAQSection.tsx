'use client';

import { useState } from 'react';

export default function ScrapMetalFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions - Scrap Metal Removal San Diego
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers about our scrap metal recycling services, metal types we accept,
            pricing, and proper disposal throughout San Diego County.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 0 ? null : 0)}
              >
                <h3 className="font-bold text-gray-900 text-lg">What types of scrap metal do you accept?</h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFAQ === 0 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {openFAQ === 0 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We accept all ferrous and non-ferrous metals including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li><strong>Appliances:</strong> Refrigerators, washers, dryers, stoves, water heaters, dishwashers, microwaves</li>
                    <li><strong>Copper:</strong> Pipes, wire, plumbing fixtures, electrical components</li>
                    <li><strong>Aluminum:</strong> Siding, gutters, window frames, cans</li>
                    <li><strong>Steel & Iron:</strong> Beams, rebar, railings, gates, fencing, metal furniture</li>
                    <li><strong>Brass:</strong> Fixtures, hardware, decorative items</li>
                    <li><strong>Other:</strong> Filing cabinets, metal shelving, exercise equipment</li>
                  </ul>
                  <p className="text-gray-700">
                    We handle both residential and commercial scrap metal removal throughout San Diego County.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
              >
                <h3 className="font-bold text-gray-900 text-lg">How much does scrap metal removal cost in San Diego?</h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFAQ === 1 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {openFAQ === 1 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our scrap metal removal pricing is volume-based and transparent:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="flex justify-between">
                        <span className="font-semibold">Single Appliance:</span>
                        <span className="text-blue-600 font-bold">Starting at $100</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">1/4 Trailer Load:</span>
                        <span className="text-green-600 font-bold">$249</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">1/2 Trailer Load:</span>
                        <span className="text-orange-600 font-bold">$349</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Full Trailer Load:</span>
                        <span className="text-purple-600 font-bold">$495</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Large quantities of valuable metals (copper, aluminum, brass) may qualify for pricing credits. All prices include labor, transportation, and proper recycling disposal.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you remove refrigerators and appliances with Freon?</h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFAQ === 2 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {openFAQ === 2 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">
                    Yes, we safely remove all appliances including refrigerators, freezers, air conditioners, and other Freon-containing units. We follow EPA regulations and California environmental standards for proper Freon removal and disposal before recycling the metal components. All hazardous materials are handled by certified technicians at licensed facilities.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Where do you take scrap metal for recycling?</h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFAQ === 3 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {openFAQ === 3 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">
                    We partner with licensed, certified metal recycling facilities throughout San Diego County. All metals are properly sorted, processed, and recycled according to California environmental regulations. Copper, aluminum, and brass are sent to specialized processors, while ferrous metals go to steel recycling centers. Appliances are processed at e-waste facilities where Freon and other hazardous materials are properly handled before metal recovery.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 4 ? null : 4)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you offer same-day scrap metal pickup in San Diego?</h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFAQ === 4 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {openFAQ === 4 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">
                    Yes, we offer same-day scrap metal removal throughout San Diego County including El Cajon, La Mesa, Santee, Chula Vista, and all surrounding areas. Call before 2 PM for same-day service availability. We serve both residential and commercial properties with fast, professional metal pickup and hauling services.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 5 ? null : 5)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Can I get paid for my scrap metal?</h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFAQ === 5 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {openFAQ === 5 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">
                    For large quantities of valuable metals like copper, aluminum, and brass, we offer pricing credits that can offset or eliminate your removal cost. Small amounts of mixed scrap metal typically don't generate payment but help reduce your overall hauling fees. Call us at (619) 750-0114 to discuss your specific situation and get a custom quote based on the type and quantity of metal you have.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready for Professional Scrap Metal Removal?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our licensed team provides fast, eco-friendly scrap metal recycling throughout
            San Diego County with transparent pricing and same-day service available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16197500114"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              📞 Call (619) 750-0114 Now
            </a>
            <a
              href="/contact"
              className="bg-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-700 transition-colors"
            >
              Get Your Free Metal Removal Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
