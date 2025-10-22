'use client';

import { useState } from 'react';

export default function EmergencyFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are your emergency junk removal prices?",
      answer: "Single Item Pickup: Starting at $100, 1/4 Trailer Load: $249, 3/8 Trailer Load: $319, 1/2 Trailer Load: $349, 5/8 Trailer Load: $366, 3/4 Trailer Load: $429, 7/8 Trailer Load: $462, Full Trailer Load: $495. Prices include labor, hauling, proper disposal, and cleanup. Additional fees may apply for unusually heavy items or special handling."
    },
    {
      question: "Do you offer same day junk removal in San Diego?",
      answer: "Yes, we specialize in same day junk removal San Diego with emergency crews available throughout the county. Most requests are handled within 2-4 hours of your call, depending on location and current demand."
    },
    {
      question: "Can you come on weekends for emergency junk removal?",
      answer: "Absolutely. We provide weekend junk removal San Diego Saturday Sunday service with dedicated emergency crews. Weekend availability is one of our specialties for urgent situations."
    },
    {
      question: "How quickly can you arrive for urgent trash removal San Diego?",
      answer: "For emergency junk removal San Diego today requests, we typically arrive within 2-4 hours. In some cases, we can dispatch crews within 1 hour for true emergencies like foreclosure cleanouts or tenant issues."
    },
    {
      question: "Do you handle bulky or heavy items during emergency calls?",
      answer: "Yes, our emergency crews are equipped to handle everything from single items like refrigerators and couches to complete property cleanouts. We bring the necessary equipment for heavy lifting and safe removal."
    },
    {
      question: "Is there an extra cost for last minute or emergency service?",
      answer: "Our pricing remains transparent even for last minute junk removal San Diego requests. While emergency service may include a small urgency fee, we provide upfront pricing with no hidden charges."
    },
    {
      question: "What areas do you cover for emergency junk removal San Diego?",
      answer: "We provide emergency junk removal service throughout the entire county, from coastal areas like La Jolla and Pacific Beach to inland communities like El Cajon and Santee. Call to confirm immediate availability in your area."
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
            Frequently Asked Questions - Emergency Junk Removal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our <strong>emergency junk removal San Diego</strong> services,
            same-day availability, and urgent response times.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 0 ? null : 0)}
              >
                <h3 className="font-bold text-gray-900 text-lg">What are your emergency junk removal prices?</h3>
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
                    <strong>Single Item Pickup:</strong> Starting at $100<br />
                    <strong>1/4 Trailer Load:</strong> $249<br />
                    <strong>3/8 Trailer Load:</strong> $319<br />
                    <strong>1/2 Trailer Load:</strong> $349<br />
                    <strong>5/8 Trailer Load:</strong> $366<br />
                    <strong>3/4 Trailer Load:</strong> $429<br />
                    <strong>7/8 Trailer Load:</strong> $462<br />
                    <strong>Full Trailer Load:</strong> $495
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Prices include labor, hauling, proper disposal, and cleanup. Additional fees may apply for unusually heavy items or special handling.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you offer same day junk removal in San Diego?</h3>
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
                    Yes, we specialize in same day junk removal San Diego with emergency crews available throughout the county. Most requests are handled within 2-4 hours of your call, depending on location and current demand.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Can you come on weekends for emergency junk removal?</h3>
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
                    Absolutely. We provide weekend junk removal San Diego Saturday Sunday service with dedicated emergency crews. Weekend availability is one of our specialties for urgent situations.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
              >
                <h3 className="font-bold text-gray-900 text-lg">How quickly can you arrive for urgent trash removal San Diego?</h3>
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
                    For emergency junk removal San Diego today requests, we typically arrive within 2-4 hours. In some cases, we can dispatch crews within 1 hour for true emergencies like foreclosure cleanouts or tenant issues.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 4 ? null : 4)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you handle bulky or heavy items during emergency calls?</h3>
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
                    Yes, our emergency crews are equipped to handle everything from single items like refrigerators and couches to complete property cleanouts. We bring the necessary equipment for heavy lifting and safe removal.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 5 ? null : 5)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Is there an extra cost for last minute or emergency service?</h3>
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
                    Our pricing remains transparent even for last minute junk removal San Diego requests. While emergency service may include a small urgency fee, we provide upfront pricing with no hidden charges.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 6 ? null : 6)}
              >
                <h3 className="font-bold text-gray-900 text-lg">What areas do you cover for emergency junk removal San Diego?</h3>
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
                    We provide emergency junk removal service throughout the entire county, from coastal areas like La Jolla and Pacific Beach to inland communities like El Cajon and Santee. Call to confirm immediate availability in your area.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions About Emergency Service?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our emergency team is ready to answer any questions about our <strong>emergency junk removal San Diego</strong>
            services, provide immediate quotes, or dispatch crews for same-day service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16197500114"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              📞 Call (619) 750-0114 – Emergency Line
            </a>
            <a
              href="mailto:severincleaners@gmail.com"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Get Emergency Quote
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}