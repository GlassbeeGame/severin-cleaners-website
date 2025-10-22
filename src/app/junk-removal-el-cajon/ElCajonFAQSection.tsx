'use client';

import { useState } from 'react';

export default function ElCajonFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions - El Cajon Junk Removal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our professional El Cajon junk removal services,
            East County coverage, family property specialists, and multi-generational home support.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 0 ? null : 0)}
              >
                <h3 className="font-bold text-gray-900 text-lg">How much does junk removal cost in El Cajon?</h3>
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
                    Our El Cajon junk removal pricing is transparent and volume-based with no hidden fees. We offer comprehensive service to all Fletcher Hills, Rancho San Diego, Granite Hills, and East County neighborhoods with family-focused service:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="flex justify-between">
                        <span className="font-semibold">Single Item Pickup:</span>
                        <span className="text-blue-600 font-bold">Starting at $100</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">1/4 Trailer Load:</span>
                        <span className="text-green-600 font-bold">$249</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">3/8 Trailer Load:</span>
                        <span className="text-green-600 font-bold">$319</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">1/2 Trailer Load:</span>
                        <span className="text-orange-600 font-bold">$349</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">5/8 Trailer Load:</span>
                        <span className="text-orange-600 font-bold">$366</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">3/4 Trailer Load:</span>
                        <span className="text-purple-600 font-bold">$429</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">7/8 Trailer Load:</span>
                        <span className="text-purple-600 font-bold">$462</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Full Trailer Load:</span>
                        <span className="text-purple-600 font-bold">$495</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    All prices include labor, hauling, disposal fees, and eco-friendly recycling. Volume discounts available for large East County family properties and multi-generational homes. Call for your free estimate today.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you provide same-day junk hauling in East County?</h3>
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
                  <p className="text-gray-700 leading-relaxed">
                    Yes, we offer same-day junk hauling El Cajon service for urgent needs throughout East County. Whether you're in Fletcher Hills, Rancho San Diego, Granite Hills, Crest, or Downtown El Cajon, our locally owned team can respond quickly for emergency cleanouts, estate situations, and time-sensitive property needs. Same-day availability depends on scheduling and crew availability.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
              >
                <h3 className="font-bold text-gray-900 text-lg">What neighborhoods in El Cajon do you cover?</h3>
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
                    Our East County junk removal covers all El Cajon neighborhoods including Fletcher Hills, Rancho San Diego, Granite Hills, Bostonia, Crest, Mount Helix, Downtown El Cajon, Jamacha-Lomita, Casa de Oro, and the Fletcher Parkway corridor. We serve from Parkway Plaza to the mountain communities, including hillside properties, master-planned communities, and established family neighborhoods throughout East County.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Can you handle large family properties or multi-generational homes?</h3>
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
                    Absolutely. Our junk pickup El Cajon service specializes in large family properties and multi-generational households common throughout East County. As a locally owned business, we understand the unique needs of family cleanouts, inherited properties, and estate transitions. We provide respectful, compassionate service that preserves important family memories while handling extensive property cleanouts with care and professionalism.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 4 ? null : 4)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you serve Fletcher Hills and Rancho San Diego?</h3>
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
                    Yes, we provide comprehensive trash removal El Cajon service throughout Fletcher Hills and Rancho San Diego. We specialize in these premier East County neighborhoods, understanding their unique characteristics - from Fletcher Hills' established hillside properties and luxury estates to Rancho San Diego's master-planned communities and HOA requirements. Our team delivers professional service that respects community standards and family values in both areas.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 5 ? null : 5)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you offer scrap metal removal and recycling in El Cajon?</h3>
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
                    Yes, our El Cajon scrap metal removal service accepts all types of metal including appliances, copper wire, aluminum, steel, brass, iron, and more. We provide fair pricing for scrap metal recycling El Cajon and haul to certified recycling facilities in East County. Whether you have old appliances, construction metal, or yard scrap, we offer same-day metal pickup El Cajon CA for residential and commercial properties throughout East County.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 6 ? null : 6)}
              >
                <h3 className="font-bold text-gray-900 text-lg">What types of scrap metal do you accept in East County?</h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFAQ === 6 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {openFAQ === 6 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">
                    Our metal recycling El Cajon service accepts: refrigerators, washers, dryers, stoves, water heaters, copper pipes and wire, aluminum siding and gutters, steel beams and rebar, brass fixtures, iron railings and gates, metal furniture, filing cabinets, and more. We handle both ferrous and non-ferrous metals. For large quantities of scrap metal removal East County, we offer competitive pricing and can often provide credits toward your total cost.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions About El Cajon Service?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our locally owned team is ready to answer any questions about our East County junk removal
            services, provide free estimates, or schedule same-day service for your El Cajon property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16197500114"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              📞 Call (619) 750-0114 - East County Service
            </a>
            <a
              href="/contact"
              className="bg-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-700 transition-colors"
            >
              Get Your Free El Cajon Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}