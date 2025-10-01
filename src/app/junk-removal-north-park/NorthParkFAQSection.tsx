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
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Single Item Pickup:</strong> Starting at $175<br />
                    <strong>1/4 Trailer Load:</strong> $249<br />
                    <strong>3/8 Trailer Load:</strong> $319<br />
                    <strong>1/2 Trailer Load:</strong> $349<br />
                    <strong>5/8 Trailer Load:</strong> $366<br />
                    <strong>3/4 Trailer Load:</strong> $429<br />
                    <strong>7/8 Trailer Load:</strong> $462<br />
                    <strong>Full Trailer Load:</strong> $495
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our <strong>North Park junk removal</strong> pricing includes labor, hauling, eco-friendly disposal, and cleanup. We offer special rates for artists, students, and small businesses in the arts district.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you handle apartment and condo junk removal in North Park?</h3>
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
                    Yes, our <strong>junk hauling North Park</strong> service specializes in apartment and condo cleanouts throughout the arts district. We understand the unique challenges of urban living, including limited parking on 30th Street and University Avenue, narrow hallways, and building access requirements. Our team coordinates with property management, respects community living standards, and handles everything from vintage bungalow cleanouts to modern loft renovations.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Can you provide same-day junk hauling in North Park?</h3>
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
                    Yes, we provide same-day <strong>junk pickup North Park</strong> for urgent needs throughout the University Avenue arts corridor and 30th Street craft beer district. Our local team can respond quickly for apartment moves, artist studio transitions, small business cleanouts, or emergency situations while maintaining our commitment to eco-friendly disposal and community standards.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you offer junk removal for small businesses, bars, and restaurants in North Park?</h3>
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
                    Absolutely! Our <strong>trash removal North Park</strong> service supports the creative community with specialized cleanouts for craft breweries, coffee shops, art galleries, music venues, restaurants, and small businesses along the 30th Street and University Avenue corridors. We understand the unique needs of North Park's vibrant business community and provide flexible scheduling, commercial waste handling, and eco-friendly disposal that aligns with the neighborhood's sustainability values.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 4 ? null : 4)}
              >
                <h3 className="font-bold text-gray-900 text-lg">What eco-friendly practices do you use in North Park?</h3>
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
                    Our <strong>North Park San Diego junk removal</strong> service prioritizes environmental responsibility through donations to the North Park Community Foundation and local charities, art supply redistribution to schools and community programs, and a zero-landfill commitment for reusable materials. We recycle electronics from creative studios, repurpose artistic materials for emerging artists, support sustainable disposal methods that protect Balboa Park, and actively contribute to North Park's reputation as an environmentally conscious arts community.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions About North Park Junk Removal?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our community-focused team is ready to answer any questions about our <strong>North Park junk removal</strong>
            services, provide quotes, or schedule same-day service for the arts district.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16197500114"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              📞 Call (619) 750-0114
            </a>
            <a
              href="mailto:severincleaners@gmail.com"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Get North Park Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}