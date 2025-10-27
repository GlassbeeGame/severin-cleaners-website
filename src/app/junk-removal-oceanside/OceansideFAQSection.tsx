'use client';

import { useState } from 'react';

export default function OceansideFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions - Oceanside Junk Removal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our professional <strong>Oceanside junk removal</strong> services,
            Camp Pendleton military support, coastal property maintenance, and vacation rental assistance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 0 ? null : 0)}
              >
                <h3 className="font-bold text-gray-900 text-lg">How much does junk removal cost in Oceanside?</h3>
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
                    Our <strong>Oceanside junk removal</strong> pricing is transparent and upfront, with special military discounts for active duty families and competitive rates for vacation rental properties:
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
                    Active duty military families receive special discounts. Vacation rental turnovers typically range from $249-$349, while most residential projects run $349-$495. Custom quotes available for large coastal properties and commercial cleanouts.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you provide junk removal for Camp Pendleton military housing?</h3>
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
                    Yes, our <strong>Camp Pendleton junk removal</strong> service specializes in military PCS moves and base housing cleanouts. We coordinate with base housing offices, understand inspection requirements, and work within tight military timelines. Active duty families receive special discounts, and we're familiar with all base access procedures.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Can you handle same-day junk pickup for vacation rentals in Oceanside?</h3>
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
                    Absolutely. Our <strong>junk pickup Oceanside</strong> team provides same-day service for vacation rental turnovers throughout coastal Oceanside. We understand the importance of quick turnarounds for maintaining bookings and reviews, offering priority scheduling for property managers and vacation rental owners.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you offer coastal property cleanouts and storm debris removal?</h3>
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
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Yes, while we're a general <strong>junk removal Oceanside</strong> company serving all types of properties, we excel at coastal property cleanouts including storm debris removal, salt air damaged furniture disposal, and beach equipment cleanup.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our <strong>trash removal Oceanside</strong> team responds quickly to weather events affecting coastal properties, handles post-storm cleanup, and provides environmentally responsible disposal that protects Oceanside's beautiful beaches and marine environment. We work with all types of coastal property needs while maintaining our core junk removal expertise.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 4 ? null : 4)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Are your junk removal services eco-friendly in North County?</h3>
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
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Absolutely. Our <strong>Oceanside San Diego junk removal</strong> prioritizes environmental protection through comprehensive recycling, donation programs, and disposal methods that comply with all local coastal regulations.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We handle all items in accordance with San Diego County and North County Coastal regulations, so you don't have to worry about a thing. Our team works with local North County charities for donations, protects beach and marine environments through proper disposal practices, and ensures all materials are handled responsibly to minimize environmental impact on Oceanside's beautiful coastal ecosystem.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions About Oceanside Service?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our military and coastal specialists are ready to answer any questions about our <strong>Oceanside junk removal</strong>
            services, coordinate base access, or schedule same-day service for your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16197500114"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              📞 Call (619) 750-0114 – Military & Coastal Service
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