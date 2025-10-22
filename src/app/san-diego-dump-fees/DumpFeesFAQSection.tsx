'use client';

import { useState } from 'react';

export default function DumpFeesFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much are San Diego landfill dump fees right now?",
      answer: "Small loads are typically $70–$100. Weighed general trash is about $97–$103 per ton at the City site and ~$100+/ton at private landfills."
    },
    {
      question: "Which San Diego landfill is cheapest?",
      answer: "Miramar's posted rates are transparent and competitive. Private sites can be similar per ton but some cities offer resident passes (e.g., Santee, Chula Vista) that make certain trips free up to 1 ton."
    },
    {
      question: "Is green waste cheaper than regular trash?",
      answer: "Yes. Separated green waste and clean wood are discounted. Keep loads clean to qualify for lower rates."
    },
    {
      question: "Are mattresses free to dump?",
      answer: "At select sites, yes—San Diego participates in the state mattress recycling program. Keep items dry/unsoiled and use designated drop areas and hours."
    },
    {
      question: "What's the uncovered load fee?",
      answer: "Plan on about $50 extra at City facilities if your load isn't tarped. Private sites require covered loads too and may charge or refuse entry."
    },
    {
      question: "Do landfills take cash?",
      answer: "Miramar does not; it accepts card or check only. Private sites commonly accept cash—always confirm before you go."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions - San Diego Dump Fees
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about <strong>San Diego landfill dump fees</strong> and <strong>dump prices</strong> at local facilities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <h3 className="font-bold text-gray-900 text-lg">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {openFAQ === index && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Skip the Dump Trip—We'll Handle It
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Save time, fuel, and hassle. Our locally owned San Diego junk removal team handles loading, hauling, and disposal—with transparent pricing and same-day availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16197500114"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              Call (619) 750-0114 for Quote
            </a>
            <a
              href="/contact"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Book Online & Save 15%
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
