'use client';

import { useState } from 'react';

export default function ForeclosureFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are your foreclosure and eviction cleanout prices?",
      answer: "Our foreclosure junk removal San Diego and eviction junk removal San Diego pricing is based on volume: Single Item Pickup: Starting at $100, 1/4 Trailer Load: $249 (3 cubic yards), 3/8 Trailer Load: $319, 1/2 Trailer Load: $349 (6 cubic yards), 5/8 Trailer Load: $366, 3/4 Trailer Load: $429, 7/8 Trailer Load: $462, Full Trailer Load: $495 (12 cubic yards). All prices include labor, hauling, proper disposal, and cleanup. We provide detailed documentation for banks and property managers when requested."
    },
    {
      question: "How quickly can you clear a foreclosure or eviction property?",
      answer: "We offer same-day service for urgent property cleanout San Diego situations and typically complete most residential cleanouts within 24-48 hours. Our team works efficiently to meet tight deadlines for banks, landlords, and property managers."
    },
    {
      question: "Can you handle large or multi-unit properties?",
      answer: "Yes, we have the crew capacity and equipment to handle everything from single-family homes to large apartment complexes and commercial properties. We scale our team size based on project scope for efficient completion."
    },
    {
      question: "Is your foreclosure cleanout service discreet?",
      answer: "Absolutely. Our teams work with professionalism and respect for all parties involved. We provide unmarked vehicles when requested and ensure all junk hauling work is conducted discreetly to maintain neighborhood relations."
    },
    {
      question: "Do you provide documentation for banks and landlords?",
      answer: "Yes, we provide comprehensive documentation including detailed invoices, before and after photos, itemized removal lists, and disposal certificates. We understand financial institution requirements and ensure all paperwork meets their standards."
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
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our professional foreclosure cleanout San Diego and eviction cleanout San Diego services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 0 ? null : 0)}
              >
                <h3 className="font-bold text-gray-900 text-lg">What are your foreclosure and eviction cleanout prices?</h3>
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
                    Our foreclosure junk removal San Diego and eviction junk removal San Diego pricing is based on volume:
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Single Item Pickup:</strong> Starting at $100<br />
                    <strong>1/4 Trailer Load:</strong> $249 (3 cubic yards)<br />
                    <strong>3/8 Trailer Load:</strong> $319<br />
                    <strong>1/2 Trailer Load:</strong> $349 (6 cubic yards)<br />
                    <strong>5/8 Trailer Load:</strong> $366<br />
                    <strong>3/4 Trailer Load:</strong> $429<br />
                    <strong>7/8 Trailer Load:</strong> $462<br />
                    <strong>Full Trailer Load:</strong> $495 (12 cubic yards)
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    All prices include labor, hauling, proper disposal, and cleanup. We provide detailed documentation for banks and property managers when requested.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
              >
                <h3 className="font-bold text-gray-900 text-lg">How quickly can you clear a foreclosure or eviction property?</h3>
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
                    We offer same-day service for urgent property cleanout San Diego situations and typically complete most residential cleanouts within 24-48 hours. Our team works efficiently to meet tight deadlines for banks, landlords, and property managers.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Can you handle large or multi-unit properties?</h3>
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
                    Yes, we have the crew capacity and equipment to handle everything from single-family homes to large apartment complexes and commercial properties. We scale our team size based on project scope for efficient completion.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Is your foreclosure cleanout service discreet?</h3>
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
                    Absolutely. Our teams work with professionalism and respect for all parties involved. We provide unmarked vehicles when requested and ensure all junk hauling work is conducted discreetly to maintain neighborhood relations.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 4 ? null : 4)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you provide documentation for banks and landlords?</h3>
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
                    Yes, we provide comprehensive documentation including detailed invoices, before and after photos, itemized removal lists, and disposal certificates. We understand financial institution requirements and ensure all paperwork meets their standards.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions About Foreclosure or Eviction Cleanouts?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our experienced team is ready to answer any questions about our foreclosure cleanout San Diego and eviction cleanout services, provide detailed quotes, or schedule your urgent cleanout.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16197500114"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              Call (619) 750-0114 - Fast Response
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
