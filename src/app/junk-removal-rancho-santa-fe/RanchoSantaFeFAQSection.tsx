'use client';

import { useState } from 'react';

export default function RanchoSantaFeFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions - Rancho Santa Fe Junk Removal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our exclusive <strong>Rancho Santa Fe junk removal</strong> services,
            luxury estate handling, and gated community protocols.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 0 ? null : 0)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you service all areas of Rancho Santa Fe including gated communities?</h3>
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
                    Yes, our <strong>Rancho Santa Fe junk removal</strong> service covers all areas including The Covenant, Fairbanks Ranch, The Bridges, and other exclusive gated communities. We're pre-approved vendors familiar with gate access procedures and HOA requirements throughout Rancho Santa Fe.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
              >
                <h3 className="font-bold text-gray-900 text-lg">How much does junk removal cost in Rancho Santa Fe?</h3>
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
                    Our <strong>Rancho Santa Fe junk removal</strong> pricing is transparent and based on trailer volume:
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
                    For large estate cleanouts, equestrian facilities, and multi-acre properties, please call <a href="tel:6197500114" className="text-blue-600 hover:underline">(619) 750-0114</a> for a custom quote tailored to your luxury property needs.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Can you remove heavy items like couches, appliances, and large outdoor equipment in Rancho Santa Fe?</h3>
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
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Absolutely! Our <strong>junk hauling Rancho Santa Fe</strong> team specializes in removing heavy and oversized items from luxury estates and equestrian properties. We safely handle:
                  </p>
                  <ul className="list-disc pl-6 mb-3 space-y-1 text-gray-700">
                    <li>High-end sofas, sectionals, and custom furniture from estate homes</li>
                    <li>Professional-grade kitchen appliances, wine refrigerators, and outdoor kitchens</li>
                    <li>Hot tubs, pool equipment, and outdoor entertainment systems</li>
                    <li>Gym equipment, exercise machines, and home theater components</li>
                    <li>Equestrian equipment, saddles, tack, and barn fixtures</li>
                    <li>Antiques, valuable furniture, and collectibles with white-glove handling</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Our crews are specially trained in white-glove handling of valuable items and understand the unique access challenges of gated estates, multi-acre properties, and equestrian facilities throughout The Covenant and Fairbanks Ranch.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you provide same-day junk hauling in Rancho Santa Fe?</h3>
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
                    Yes! We offer same-day <strong>junk pickup Rancho Santa Fe</strong> service when you call before 2 PM. Our team understands the urgency often required for estate management, property staging, last-minute renovations, and HOA compliance issues. We coordinate with gate security, property managers, and household staff to provide discreet, professional service that respects your privacy and your community's standards throughout The Covenant, Fairbanks Ranch, and all Rancho Santa Fe gated communities.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 4 ? null : 4)}
              >
                <h3 className="font-bold text-gray-900 text-lg">What types of junk do you not remove?</h3>
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
                    We handle all standard household items, furniture, appliances, construction debris, yard waste, equestrian property materials, and more in accordance with local regulations. If you're unsure about a specific item, please call us at <a href="tel:6197500114" className="text-blue-600 hover:underline">(619) 750-0114</a> and we can discuss it — there are various factors that can affect pricing and service options for luxury estates and large properties.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 5 ? null : 5)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Are you licensed and insured for junk removal in San Diego County?</h3>
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
                    Yes! Severin Cleaners is fully licensed and insured to provide <strong>Rancho Santa Fe San Diego junk removal</strong> services throughout all of San Diego County, including exclusive communities like Rancho Santa Fe. We carry comprehensive liability insurance specifically covering luxury estates, valuable property contents, and equestrian facilities. Our <strong>trash removal Rancho Santa Fe</strong> service is pre-approved by multiple HOAs and provides all necessary documentation for gated community access, property management requirements, and compliance with local disposal regulations.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions About Rancho Santa Fe Junk Removal?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our experienced team is ready to answer any questions about our exclusive <strong>Rancho Santa Fe junk removal</strong>
            services, provide detailed quotes, or schedule your discreet service for luxury estates and gated communities.
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