'use client';

import { useState } from 'react';

export default function HotTubFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much does hot tub removal cost in San Diego?",
      answer: "Hot tub removal San Diego costs range from $299 for portable spas to $1,499+ for built-in Jacuzzi removal. Spa removal San Diego pricing depends on size, type, and access difficulty. Our Jacuzzi removal San Diego service includes disconnection, removal, and disposal with transparent upfront pricing and no hidden fees."
    },
    {
      question: "Do you remove both portable and built-in spas?",
      answer: "Yes, our spa disposal San Diego service handles all types including portable hot tubs, above-ground spas, built-in Jacuzzis, and custom installations. We have specialized equipment for backyard hot tub demolition San Diego and experience with both simple removals and complex demolition projects."
    },
    {
      question: "Can you disconnect plumbing, gas, and electrical lines?",
      answer: "Absolutely. Our licensed team safely disconnects all utilities including 220V electrical lines, plumbing connections, and gas lines for heated spas. Professional hot tub disposal includes proper utility disconnection, water draining, and safe capping of all connections to meet local codes."
    },
    {
      question: "What happens to the old hot tub after removal?",
      answer: "Our eco-friendly spa removal San Diego service recycles materials whenever possible. Fiberglass and acrylic shells are recycled, metal components go to scrap yards, and working equipment may be donated or resold. We ensure responsible disposal at licensed facilities while maximizing material recovery."
    },
    {
      question: "Do you provide same-day hot tub removal?",
      answer: "Yes, we offer same-day hot tub removal San Diego when you call before 2 PM. Our rapid Jacuzzi removal San Diego service is perfect for emergency situations, property staging, or when you need immediate spa disposal. Same-day service available throughout San Diego County at standard rates."
    }
  ];

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
            Frequently Asked Questions - Hot Tub Removal San Diego
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Answers to common questions about our hot tub removal services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 0 ? null : 0)}
              >
                <h3 className="font-bold text-gray-900 text-lg">How much does hot tub removal cost in San Diego?</h3>
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
                    Hot tub removal San Diego costs range from $299 for portable spas to $1,499+ for built-in Jacuzzi removal. Spa removal San Diego pricing depends on size, type, and access difficulty. Our Jacuzzi removal San Diego service includes disconnection, removal, and disposal with transparent upfront pricing and no hidden fees.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you remove both portable and built-in spas?</h3>
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
                    Yes, our spa disposal San Diego service handles all types including portable hot tubs, above-ground spas, built-in Jacuzzis, and custom installations. We have specialized equipment for backyard hot tub demolition San Diego and experience with both simple removals and complex demolition projects.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Can you disconnect plumbing, gas, and electrical lines?</h3>
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
                    Absolutely. Our licensed team safely disconnects all utilities including 220V electrical lines, plumbing connections, and gas lines for heated spas. Professional hot tub disposal includes proper utility disconnection, water draining, and safe capping of all connections to meet local codes.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
              >
                <h3 className="font-bold text-gray-900 text-lg">What happens to the old hot tub after removal?</h3>
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
                    Our eco-friendly spa removal San Diego service recycles materials whenever possible. Fiberglass and acrylic shells are recycled, metal components go to scrap yards, and working equipment may be donated or resold. We ensure responsible disposal at licensed facilities while maximizing material recovery.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 4 ? null : 4)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you provide same-day hot tub removal?</h3>
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
                    Yes, we offer same-day hot tub removal San Diego when you call before 2 PM. Our rapid Jacuzzi removal San Diego service is perfect for emergency situations, property staging, or when you need immediate spa disposal. Same-day service available throughout San Diego County at standard rates.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Have More Questions?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Call for a free consultation about your hot tub removal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16197500114"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              Call (619) 750-0114
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
    </>
  );
}
