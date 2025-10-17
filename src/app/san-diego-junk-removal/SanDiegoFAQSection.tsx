'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "How much does junk removal cost in San Diego?",
    answer: `Our San Diego junk removal pricing is transparent and based on trailer volume:

• Single Item Pickup: Starting at $175
• 1/4 Trailer Load: $249
• 3/8 Trailer Load: $319
• 1/2 Trailer Load: $349
• 5/8 Trailer Load: $366
• 3/4 Trailer Load: $429
• 7/8 Trailer Load: $462
• Full Trailer Load: $495

For large projects or custom needs, please call (619) 750-0114 for a tailored quote.`
  },
  {
    question: "Do you provide same-day junk hauling in San Diego?",
    answer: "Yes! We offer same-day junk hauling San Diego service when you call before 2 PM. This is especially helpful for urgent cleanouts, last-minute moves, renovation deadlines, and property management emergencies throughout San Diego County—from coastal communities to East County and North County inland areas."
  },
  {
    question: "Can you remove heavy items like couches and appliances?",
    answer: `Absolutely! Our junk pickup San Diego team specializes in removing heavy furniture and appliances from homes and businesses throughout San Diego County. We safely handle:

• Sofas, sectionals, mattresses, and bedroom sets
• Refrigerators, washers, dryers, and kitchen appliances
• Hot tubs, pool equipment, and outdoor furniture
• Exercise equipment and home gym setups
• Office furniture and commercial equipment
• Construction debris and renovation materials

Our crew handles all the heavy lifting and navigates stairs, tight spaces, and challenging property access throughout San Diego neighborhoods.`
  },
  {
    question: "What types of junk do you not remove?",
    answer: "We handle all standard household items, furniture, appliances, construction debris, and yard waste in accordance with San Diego County regulations. If you're unsure about a specific item, please call us at (619) 750-0114 and we can discuss it — some items require special handling, and we'll help coordinate so you're fully taken care of."
  },
  {
    question: "Are you licensed and insured for junk removal in San Diego County?",
    answer: "Yes! Severin Cleaners is fully licensed and insured to provide trash removal San Diego services throughout all of San Diego County. We carry comprehensive liability insurance to protect your property during removal, and we dispose of all items in accordance with local disposal regulations. Our team follows all San Diego County waste handling requirements and environmental compliance standards."
  }
];

export default function SanDiegoFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Generate FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions - San Diego Junk Removal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our <strong>San Diego junk removal</strong> services,
            pricing, and county-wide coverage.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 0 ? null : 0)}
              >
                <h3 className="font-bold text-gray-900 text-lg">How much does junk removal cost in San Diego?</h3>
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
                    Our <strong>San Diego junk removal</strong> pricing is transparent and based on trailer volume:
                  </p>
                  <ul className="list-disc pl-6 mb-3 space-y-1 text-gray-700">
                    <li><strong>Single Item Pickup:</strong> Starting at $175</li>
                    <li><strong>1/4 Trailer Load:</strong> $249</li>
                    <li><strong>3/8 Trailer Load:</strong> $319</li>
                    <li><strong>1/2 Trailer Load:</strong> $349</li>
                    <li><strong>5/8 Trailer Load:</strong> $366</li>
                    <li><strong>3/4 Trailer Load:</strong> $429</li>
                    <li><strong>7/8 Trailer Load:</strong> $462</li>
                    <li><strong>Full Trailer Load:</strong> $495</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    For large projects or custom needs, please call <a href="tel:6197500114" className="text-blue-600 hover:underline">(619) 750-0114</a> for a tailored quote.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you provide same-day junk hauling in San Diego?</h3>
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
                    Yes! We offer same-day <strong>junk hauling San Diego</strong> service when you call before 2 PM. This is especially helpful for urgent cleanouts, last-minute moves, renovation deadlines, and property management emergencies throughout San Diego County—from coastal communities to East County and North County inland areas.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Can you remove heavy items like couches and appliances?</h3>
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
                    Absolutely! Our <strong>junk pickup San Diego</strong> team specializes in removing heavy furniture and appliances from homes and businesses throughout San Diego County. We safely handle:
                  </p>
                  <ul className="list-disc pl-6 mb-3 space-y-1 text-gray-700">
                    <li>Sofas, sectionals, mattresses, and bedroom sets</li>
                    <li>Refrigerators, washers, dryers, and kitchen appliances</li>
                    <li>Hot tubs, pool equipment, and outdoor furniture</li>
                    <li>Exercise equipment and home gym setups</li>
                    <li>Office furniture and commercial equipment</li>
                    <li>Construction debris and renovation materials</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Our crew handles all the heavy lifting and navigates stairs, tight spaces, and challenging property access throughout San Diego neighborhoods.
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
                    We handle all standard household items, furniture, appliances, construction debris, and yard waste in accordance with San Diego County regulations. If you're unsure about a specific item, please call us at <a href="tel:6197500114" className="text-blue-600 hover:underline">(619) 750-0114</a> and we can discuss it — some items require special handling, and we'll help coordinate so you're fully taken care of.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 4 ? null : 4)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Are you licensed and insured for junk removal in San Diego County?</h3>
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
                    Yes! Severin Cleaners is fully licensed and insured to provide <strong>trash removal San Diego</strong> services throughout all of San Diego County. We carry comprehensive liability insurance to protect your property during removal, and we dispose of all items in accordance with local disposal regulations. Our team follows all San Diego County waste handling requirements and environmental compliance standards.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready for Same-Day Junk Removal in San Diego?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Whether you're in coastal San Diego, East County, North County, or South Bay, we're your local <strong>San Diego junk removal</strong> experts serving the entire county.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16197500114"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              📞 Call (619) 750-0114 – San Diego Service
            </a>
            <a
              href="/contact"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Get Free San Diego Quote
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
