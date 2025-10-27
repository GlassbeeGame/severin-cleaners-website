'use client';

import { useState } from 'react';

export default function EscondidoFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much does junk removal cost in Escondido?",
      answer: "Most jobs range from $100 for single items to $495 for full-load cleanouts. Quotes are always upfront and include labor and disposal."
    },
    {
      question: "Do you offer same-day service in Escondido?",
      answer: "Yes — we provide same-day and next-day junk hauling when booked before 2 PM."
    },
    {
      question: "Do you serve rural or hillside properties?",
      answer: "Absolutely. We handle hard-to-access areas like Hidden Meadows and Jesmond Dene with the right vehicles and crew size."
    },
    {
      question: "Do you recycle or donate items?",
      answer: "Yes. We partner with North County charities and recycling centers to minimize landfill use."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes — we're fully licensed, insured, and compliant with San Diego County waste regulations."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Frequently Asked Questions – Junk Removal Escondido CA
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Get answers to common questions about our Escondido junk removal services
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-lg text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center border border-blue-100">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Still Have Questions?
            </h3>
            <p className="text-gray-700 mb-6 text-lg">
              Our Escondido junk removal team is here to help. Call us for a free quote and personalized service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+16197500114"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors inline-block"
              >
                📞 Call (619) 750-0114
              </a>
              <a
                href="/contact"
                className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-bold transition-colors inline-block"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
