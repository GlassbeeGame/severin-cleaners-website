'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much does junk removal cost in San Diego?",
      answer: "Junk removal cost San Diego typically ranges from $75 for single items to $750+ for full truckloads. Our volume-based pricing means you only pay for the space your items take up. Most residential jobs fall between $200-$400 for half-truck loads, making us competitive for cheap junk removal San Diego with transparent pricing."
    },
    {
      question: "Do you provide free junk removal quotes in San Diego?",
      answer: "Yes! Every free junk removal quote San Diego is completely no-obligation. We provide instant estimates over the phone for most jobs, or can visit your property for larger cleanouts. There's never a charge for quotes or estimates, and we pride ourselves on transparent pricing without hidden fees."
    },
    {
      question: "What's the cheapest way to remove junk in San Diego?",
      answer: "The most affordable approach for cheap junk removal San Diego is hiring a professional service like ours. DIY removal seems cheaper but includes hidden costs: truck rental, gas, disposal fees, and your valuable time. We handle everything efficiently at competitive rates with transparent junk removal prices San Diego."
    },
    {
      question: "How do your junk removal prices compare to other San Diego companies?",
      answer: "When you compare junk removal San Diego options, you'll find our transparent pricing beats competitors who use hidden fees. We provide upfront costs, include eco-friendly disposal, and never surprise you with additional charges after the work is done. Our junk removal prices San Diego are consistently fair and honest."
    },
    {
      question: "Are there extra charges for heavy or bulky items?",
      answer: "Some exceptionally heavy items (like pianos, hot tubs, or concrete) may have additional disposal fees due to special handling requirements. However, we always discuss these potential costs during your free junk removal quote San Diego so there are no surprises with your final junk removal cost San Diego."
    },
    {
      question: "Do you offer discounts for large jobs or repeat customers?",
      answer: "Yes! Larger volume jobs naturally get better per-cubic-yard pricing, making our cheap junk removal San Diego even more affordable. We also offer discounts for property managers, real estate agents, and repeat customers. Ask about our loyalty program when you call for your free quote."
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
            Frequently Asked Questions About Junk Removal Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about <strong>junk removal cost San Diego</strong>, our transparent pricing, and what affects your <strong>free junk removal quote San Diego</strong>.
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
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Junk removal cost San Diego</strong> typically ranges from $75 for single items to $750+ for full truckloads. Our volume-based pricing means you only pay for the space your items take up. Most residential jobs fall between $200-$400 for half-truck loads, making us competitive for cheap junk removal San Diego with transparent pricing.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you provide free junk removal quotes in San Diego?</h3>
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
                    Yes! Every <strong>free junk removal quote San Diego</strong> is completely no-obligation. We provide instant estimates over the phone for most jobs, or can visit your property for larger cleanouts. There's never a charge for quotes or estimates, and we pride ourselves on transparent pricing without hidden fees.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
              >
                <h3 className="font-bold text-gray-900 text-lg">What's the cheapest way to remove junk in San Diego?</h3>
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
                    The most affordable approach for <strong>cheap junk removal San Diego</strong> is hiring a professional service like ours. DIY removal seems cheaper but includes hidden costs: truck rental, gas, disposal fees, and your valuable time. We handle everything efficiently at competitive rates with transparent junk removal prices San Diego.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
              >
                <h3 className="font-bold text-gray-900 text-lg">How do your junk removal prices compare to other San Diego companies?</h3>
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
                    When you <strong>compare junk removal San Diego</strong> options, you'll find our transparent pricing beats competitors who use hidden fees. We provide upfront costs, include eco-friendly disposal, and never surprise you with additional charges after the work is done. Our junk removal prices San Diego are consistently fair and honest.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 4 ? null : 4)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Are there extra charges for heavy or bulky items?</h3>
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
                    Some exceptionally heavy items (like pianos, hot tubs, or concrete) may have additional disposal fees due to special handling requirements. However, we always discuss these potential costs during your <strong>free junk removal quote San Diego</strong> so there are no surprises with your final junk removal cost San Diego.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 5 ? null : 5)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you offer discounts for large jobs or repeat customers?</h3>
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
                    Yes! Larger volume jobs naturally get better per-cubic-yard pricing, making our cheap junk removal San Diego even more affordable. We also offer discounts for property managers, real estate agents, and repeat customers. Ask about our loyalty program when you call for your free quote.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions About Junk Removal Pricing?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our experienced team is ready to provide your <strong>free junk removal quote San Diego</strong>
            and answer any questions about our transparent junk removal cost San Diego pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16197500114"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              📞 Call (619) 750-0114 – Get Instant Pricing
            </a>
            <a
              href="mailto:severincleaners@gmail.com"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Email for Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}