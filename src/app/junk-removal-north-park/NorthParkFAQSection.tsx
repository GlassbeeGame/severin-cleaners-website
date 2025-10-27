'use client';

import { useState } from 'react';

export default function NorthParkFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions - North Park Junk Removal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our <strong>North Park junk removal</strong> services,
            eco-friendly practices, and community support for the arts district.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 0 ? null : 0)}
              >
                <h3 className="font-bold text-gray-900 text-lg">How much does junk removal cost in North Park?</h3>
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
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Our <strong>North Park junk removal</strong> pricing is transparent and based on trailer volume:
                  </p>
                  <ul className="list-disc pl-6 mb-3 space-y-1 text-gray-700">
                    <li><strong>Single Item Pickup:</strong> Starting at $100</li>
                    <li><strong>1/4 Trailer Load:</strong> $249</li>
                    <li><strong>3/8 Trailer Load:</strong> $319</li>
                    <li><strong>1/2 Trailer Load:</strong> $349</li>
                    <li><strong>5/8 Trailer Load:</strong> $366</li>
                    <li><strong>3/4 Trailer Load:</strong> $429</li>
                    <li><strong>7/8 Trailer Load:</strong> $462</li>
                    <li><strong>Full Trailer Load:</strong> $495</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    For the most accurate estimate, please call <a href="tel:6197500114" className="text-blue-600 hover:underline">(619) 750-0114</a> for a custom quote based on your specific needs in North Park.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Can you remove heavy items like couches and appliances in North Park?</h3>
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
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Absolutely! Our <strong>junk hauling North Park</strong> team specializes in removing heavy furniture and appliances from apartments, condos, and Craftsman homes throughout North Park. We safely handle:
                  </p>
                  <ul className="list-disc pl-6 mb-3 space-y-1 text-gray-700">
                    <li>Sofas, sectionals, and bulky furniture from University Avenue apartments</li>
                    <li>Refrigerators, washers, dryers, and kitchen appliances</li>
                    <li>Entertainment centers and bookshelves from condos near El Cajon Blvd</li>
                    <li>Hot tubs and outdoor furniture from historic homes</li>
                    <li>Exercise equipment and home office furniture</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Our crew is experienced with North Park's tight parking near 30th Street and University Avenue, narrow staircases in historic Craftsman homes, and multi-story apartment buildings along the nightlife corridor.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you provide same-day junk hauling in North Park?</h3>
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
                    Yes! We offer same-day <strong>junk pickup North Park</strong> service when you call before 2 PM. This is especially helpful for apartment cleanouts near University Avenue, restaurant or bar waste removal from the 30th Street nightlife district, and emergency situations throughout the North Park arts community. During busy weekends, we recommend scheduling morning appointments to guarantee same-day service.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
              >
                <h3 className="font-bold text-gray-900 text-lg">What types of junk do you not remove?</h3>
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
                    We handle all standard household items, furniture, appliances, construction debris, yard waste, and more in accordance with local regulations. If you're unsure about a specific item, please call us at <a href="tel:6197500114" className="text-blue-600 hover:underline">(619) 750-0114</a> and we can discuss it — there are various factors that can affect pricing and service options.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 4 ? null : 4)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Are you licensed and insured for junk removal in San Diego?</h3>
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
                    Yes! Severin Cleaners is fully licensed and insured to provide <strong>North Park San Diego junk removal</strong> services throughout North Park and all of San Diego County. We carry comprehensive liability insurance to protect your property during removal, and we dispose of all items responsibly at licensed facilities. Our team follows all local regulations for waste handling and environmental compliance.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready for Same-Day Junk Removal in North Park?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Whether you're managing an apartment cleanout near University Avenue, clearing out a Craftsman home east of Balboa Park, or handling a business renovation on 30th Street, we're your local <strong>North Park junk removal</strong> experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16197500114"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              📞 Call (619) 750-0114 – North Park Service
            </a>
            <a
              href="/contact"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}