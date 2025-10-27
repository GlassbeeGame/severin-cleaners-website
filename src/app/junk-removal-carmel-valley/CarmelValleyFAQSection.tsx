'use client';

import { useState } from 'react';

export default function CarmelValleyFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions - Carmel Valley Junk Removal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our professional <strong>Carmel Valley junk removal</strong> services,
            luxury community support, Torrey Highlands service, and Del Mar Mesa coverage.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 0 ? null : 0)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you provide same-day junk removal in Carmel Valley?</h3>
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
                  <p className="text-gray-700 leading-relaxed">
                    Yes, we offer same-day junk pickup throughout Carmel Valley including Torrey Highlands, Del Mar Mesa, and Pacific Highlands Ranch. Call (619) 750-0114 before 2 PM for same-day service availability.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
              >
                <h3 className="font-bold text-gray-900 text-lg">What areas of Carmel Valley do you serve?</h3>
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
                    We serve all neighborhoods in Carmel Valley 92130 including Torrey Highlands, Del Mar Mesa, Pacific Highlands Ranch, Carmel Creek, and Torrey Hills. We also cover surrounding areas like 4S Ranch and Rancho Penasquitos.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
              >
                <h3 className="font-bold text-gray-900 text-lg">How much does junk removal cost in Carmel Valley?</h3>
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
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our <strong>Carmel Valley junk removal</strong> pricing is transparent and upfront with no hidden fees:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Single Item Pickup:</strong> Starting at $100</li>
                      <li><strong>1/4 Trailer Load:</strong> $249</li>
                      <li><strong>3/8 Trailer Load:</strong> $319</li>
                      <li><strong>1/2 Trailer Load:</strong> $349</li>
                      <li><strong>5/8 Trailer Load:</strong> $366</li>
                      <li><strong>3/4 Trailer Load:</strong> $429</li>
                      <li><strong>7/8 Trailer Load:</strong> $462</li>
                      <li><strong>Full Trailer Load:</strong> $495</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Price includes labor, disposal fees, and cleanup. Call for a free quote tailored to your specific needs.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you remove furniture and appliances from Carmel Valley homes?</h3>
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
                    Yes, we remove all types of furniture, appliances, and household items. This includes sofas, mattresses, refrigerators, washers, dryers, and exercise equipment. We handle both indoor and outdoor removal.
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
                    Yes, Severin Cleaners is fully licensed and insured for junk removal services throughout San Diego County. We carry comprehensive liability insurance and proper waste hauling permits.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 5 ? null : 5)}
              >
                <h3 className="font-bold text-gray-900 text-lg">What items cannot be removed during junk hauling?</h3>
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
                    We cannot remove hazardous materials like paint, chemicals, asbestos, or medical waste. However, we handle electronics, furniture, appliances, yard waste, construction debris, and most household items.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready for Professional Junk Removal in Carmel Valley?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            From Torrey Highlands luxury estates to Del Mar Mesa family homes, our <strong>Carmel Valley junk removal</strong>
            service meets your community's high standards with reliable, professional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16197500114"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              📞 Call (619) 750-0114 – Same-Day Service
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