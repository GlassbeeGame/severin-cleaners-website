'use client';

import { useState } from 'react';

export default function LakesideFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions - Lakeside Junk Removal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our <strong>Lakeside junk removal</strong> services,
            large property specialists, and East County rural community support.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 0 ? null : 0)}
              >
                <h3 className="font-bold text-gray-900 text-lg">How much does junk removal cost in Lakeside?</h3>
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
                    Our <strong>Lakeside junk removal</strong> pricing is transparent and upfront with no hidden fees. We offer special rates for large properties, ranches, and recurring rural property maintenance:
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
                    Large properties and ranch cleanouts may qualify for volume discounts. Final pricing depends on volume, property accessibility, and disposal requirements. Contact us for a free quote tailored to your rural property needs.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you handle large property and ranch junk hauling?</h3>
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
                    Yes, our <strong>junk hauling Lakeside</strong> service specializes in large properties, ranches, and agricultural facilities. We handle multi-acre cleanouts, ranch equipment disposal, barn cleanouts, and agricultural waste removal. Our team is experienced with the scale and unique requirements of East County's rural properties.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Can you provide same-day junk pickup in Lakeside?</h3>
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
                    Absolutely. We provide same-day <strong>junk pickup Lakeside</strong> for urgent needs throughout East County rural areas. Our team can respond quickly for large property emergencies, seasonal cleanouts, or time-sensitive agricultural operations while respecting working ranch and farm schedules.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you remove yard debris and outdoor storage items?</h3>
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
                    Yes, our <strong>trash removal Lakeside</strong> includes comprehensive yard debris removal, outdoor storage cleanouts, and landscaping waste disposal. We handle tree trimming debris, seasonal cleanup, garden renovation waste, and outdoor equipment disposal common to Lakeside's rural lifestyle.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 4 ? null : 4)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Are your junk removal services eco-friendly in East County?</h3>
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
                    Absolutely. Our <strong>Lakeside San Diego junk removal</strong> prioritizes environmental responsibility through agricultural waste recycling, donation programs with local East County charities, and eco-friendly disposal methods that exceed local regulations.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We handle all items in full compliance with San Diego County and East County environmental regulations, so you don't have to worry about a thing. Our team sorts materials for agricultural waste recycling, donation, and proper disposal—ensuring minimal landfill impact while supporting local rural community organizations. We understand East County's rural communities' commitment to environmental stewardship and work to protect our natural spaces and working lands.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions About Lakeside Junk Removal?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our experienced team is ready to answer any questions about our <strong>Lakeside junk removal</strong>
            services, provide detailed quotes, or schedule your same-day service for large properties and East County areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16197500114"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              📞 Call (619) 750-0114 – Speak with an Expert
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