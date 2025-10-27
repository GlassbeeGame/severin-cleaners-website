'use client';

import { useState } from 'react';

export default function EstateFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much does estate cleanout cost in San Diego?",
      answer: "Estate cleanout costs depend on how much needs to be hauled away. Most full estates range from $1,500-$3,000 depending on property size and volume of items. Single trailer loads start at $100-$495. We provide written estimates after seeing what needs to be removed."
    },
    {
      question: "Can you help with probate cleanout deadlines in San Diego?",
      answer: "Yes. Our probate cleanout San Diego service works efficiently to meet court deadlines. We haul away furniture, clear rooms, and remove all items so you can meet legal requirements. We understand the timeline pressure and schedule accordingly."
    },
    {
      question: "Do you handle estate sale cleanout in San Diego?",
      answer: "Absolutely. Our estate sale cleanout San Diego service removes everything left over after an estate sale. We'll haul away unsold furniture, boxes, and miscellaneous items so you can close out the property."
    },
    {
      question: "What if there are items I want to keep?",
      answer: "Simply point out what you want to keep and we'll work around it. We only haul away what you tell us to remove. Some families set aside items beforehand, others direct us during the cleanout—either way works."
    },
    {
      question: "Can you help with senior downsizing in San Diego?",
      answer: "Yes. Our senior downsizing San Diego service removes furniture and items that won't fit in the new place. We work at a comfortable pace and treat seniors with patience and respect. We handle the heavy lifting so transitions go smoothly."
    },
    {
      question: "What happens to the items after you haul them away?",
      answer: "Usable furniture and items in good condition go to local charities when appropriate. Everything else is disposed of responsibly—we comply with San Diego disposal regulations to ensure proper handling."
    },
    {
      question: "Do you offer estate junk removal services in San Diego?",
      answer: "Yes. Our estate junk removal San Diego service handles the disposal of unwanted furniture, old belongings, and accumulated items. We remove everything you don't need—from single rooms to entire houses."
    },
    {
      question: "How quickly can you start?",
      answer: "We can typically start within a few days, depending on your schedule and readiness. For urgent probate situations, we can often begin within 24-48 hours. We work around your timeline—some families need immediate help, others need time. Either way, we're here when you're ready."
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
            Frequently Asked Questions - Estate Cleanout San Diego
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our <strong>estate cleanout San Diego</strong> services, compassionate support, and respectful junk hauling process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 0 ? null : 0)}
              >
                <h3 className="font-bold text-gray-900 text-lg">How much does estate cleanout cost in San Diego?</h3>
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
                    Estate cleanout costs depend on how much needs to be hauled away. Most full estates range from $1,500-$3,000 depending on property size and volume of items. Single trailer loads start at $100-$495. We provide written estimates after seeing what needs to be removed.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Can you help with probate cleanout deadlines in San Diego?</h3>
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
                    Yes. Our probate cleanout San Diego service works efficiently to meet court deadlines. We haul away furniture, clear rooms, and remove all items so you can meet legal requirements. We understand the timeline pressure and schedule accordingly.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you handle estate sale cleanout in San Diego?</h3>
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
                    Absolutely. Our estate sale cleanout San Diego service removes everything left over after an estate sale. We'll haul away unsold furniture, boxes, and miscellaneous items so you can close out the property.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
              >
                <h3 className="font-bold text-gray-900 text-lg">What if there are items I want to keep?</h3>
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
                    Simply point out what you want to keep and we'll work around it. We only haul away what you tell us to remove. Some families set aside items beforehand, others direct us during the cleanout—either way works.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 4 ? null : 4)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Can you help with senior downsizing in San Diego?</h3>
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
                    Yes. Our senior downsizing San Diego service removes furniture and items that won't fit in the new place. We work at a comfortable pace and treat seniors with patience and respect. We handle the heavy lifting so transitions go smoothly.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 6 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 5 ? null : 5)}
              >
                <h3 className="font-bold text-gray-900 text-lg">What happens to the items after you haul them away?</h3>
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
                    Usable furniture and items in good condition go to local charities when appropriate. Everything else is disposed of responsibly—we comply with San Diego disposal regulations to ensure proper handling.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 7 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 6 ? null : 6)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you offer estate junk removal services in San Diego?</h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFAQ === 6 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {openFAQ === 6 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">
                    Yes. Our estate junk removal San Diego service handles the disposal of unwanted furniture, old belongings, and accumulated items. We remove everything you don't need—from single rooms to entire houses.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 8 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 7 ? null : 7)}
              >
                <h3 className="font-bold text-gray-900 text-lg">How quickly can you start?</h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFAQ === 7 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {openFAQ === 7 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">
                    We can typically start within a few days, depending on your schedule and readiness. For urgent probate situations, we can often begin within 24-48 hours. We work around your timeline—some families need immediate help, others need time. Either way, we're here when you're ready.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions About Estate Cleanout?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our experienced team is ready to answer any questions about our <strong>estate cleanout San Diego</strong> services, provide detailed quotes, or schedule your compassionate service.
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
    </>
  );
}
