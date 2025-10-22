'use client';

import { useState } from 'react';

export default function SameDayFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly can you arrive for same day junk removal?",
      answer: "We typically arrive within 2-4 hours for same day junk pickup San Diego requests. For immediate junk removal San Diego situations, call (619) 750-0114 and speak directly to our dispatch team. Book in the morning, and we can often arrive the same afternoon. Our local San Diego teams respond faster than national chains because we're right here in your community."
    },
    {
      question: "What items can be removed on a same day basis?",
      answer: "Our fast junk removal San Diego service handles virtually everything same-day: furniture, appliances, mattresses, construction debris, yard waste, electronics, and general household junk. We can remove single items or full truckloads today. The only items requiring advance scheduling are hazardous materials that need special permits. Everything else? We'll haul it today."
    },
    {
      question: "Do you offer same day service on weekends?",
      answer: "Yes! Our today junk removal San Diego service operates 7 days a week, including weekends and most holidays. Saturday and Sunday are our busiest days, so we recommend calling as early as possible for same-day weekend pickup. No extra fees for weekend service – same transparent pricing every day of the week."
    },
    {
      question: "Is same day junk removal more expensive?",
      answer: "No! We don't charge emergency fees or rush charges for immediate junk removal San Diego. Same day service costs exactly the same as scheduling for next week. Our pricing starts at $100 for single items and goes up to $495 for a full trailer load. Unlike some competitors, we believe in transparent pricing without penalizing customers who need urgent service."
    },
    {
      question: "What areas in San Diego qualify for same day service?",
      answer: "We provide quick junk removal San Diego county-wide! Priority same-day service zones include La Jolla, Pacific Beach, Chula Vista, El Cajon, Oceanside, and all central San Diego neighborhoods. Even North County and South Bay areas get same-day service when you call before 2 PM. Being locally based means faster response than national franchises operating from outside the county."
    },
    {
      question: "What's the latest I can call for same day pickup?",
      answer: "For guaranteed same day junk pickup San Diego, call before 2 PM. However, we often accommodate later calls depending on crew availability and location. It never hurts to call – even if it's 4 PM, we'll do everything possible to get there today. Our goal is to solve your junk problem NOW, not make you wait until tomorrow."
    },
    {
      question: "Can you handle emergency cleanouts the same day?",
      answer: "Absolutely. Our rapid junk removal San Diego team specializes in emergency situations: last-minute move-outs, property inspection deadlines, HOA violations, and urgent estate cleanouts. We bring extra crew members for large same-day projects to ensure completion within hours. Don't wait days – we'll handle your emergency cleanout TODAY."
    },
    {
      question: "Do I need to sort items for same day removal?",
      answer: "No sorting required! Our instant junk removal San Diego service handles everything as-is. Just point to what goes, and we'll load it up. We understand same-day situations are often urgent – you don't have time to organize. That's why our full-service approach includes all the heavy lifting, sorting during disposal, and complete cleanup. You relax while we work."
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
            Frequently Asked Questions - Same Day Junk Removal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our <strong>same day junk removal San Diego</strong> services,
            response times, and immediate pickup availability.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 0 ? null : 0)}
              >
                <h3 className="font-bold text-gray-900 text-lg">How quickly can you arrive for same day junk removal?</h3>
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
                    We typically arrive within 2-4 hours for <strong>same day junk pickup San Diego</strong> requests. For immediate junk removal San Diego situations, call (619) 750-0114 and speak directly to our dispatch team. Book in the morning, and we can often arrive the same afternoon. Our local San Diego teams respond faster than national chains because we're right here in your community.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
              >
                <h3 className="font-bold text-gray-900 text-lg">What items can be removed on a same day basis?</h3>
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
                    Our <strong>fast junk removal San Diego</strong> service handles virtually everything same-day: furniture, appliances, mattresses, construction debris, yard waste, electronics, and general household junk. We can remove single items or full truckloads today. The only items requiring advance scheduling are hazardous materials that need special permits. Everything else? We'll haul it today.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you offer same day service on weekends?</h3>
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
                    Yes! Our <strong>today junk removal San Diego</strong> service operates 7 days a week, including weekends and most holidays. Saturday and Sunday are our busiest days, so we recommend calling as early as possible for same-day weekend pickup. No extra fees for weekend service – same transparent pricing every day of the week.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Is same day junk removal more expensive?</h3>
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
                    No! We don't charge emergency fees or rush charges for <strong>immediate junk removal San Diego</strong>. Same day service costs exactly the same as scheduling for next week. Our pricing starts at $100 for single items and goes up to $495 for a full trailer load. Unlike some competitors, we believe in transparent pricing without penalizing customers who need urgent service.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 4 ? null : 4)}
              >
                <h3 className="font-bold text-gray-900 text-lg">What areas in San Diego qualify for same day service?</h3>
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
                    We provide <strong>quick junk removal San Diego</strong> county-wide! Priority same-day service zones include La Jolla, Pacific Beach, Chula Vista, El Cajon, Oceanside, and all central San Diego neighborhoods. Even North County and South Bay areas get same-day service when you call before 2 PM. Being locally based means faster response than national franchises operating from outside the county.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 5 ? null : 5)}
              >
                <h3 className="font-bold text-gray-900 text-lg">What's the latest I can call for same day pickup?</h3>
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
                    For guaranteed <strong>same day junk pickup San Diego</strong>, call before 2 PM. However, we often accommodate later calls depending on crew availability and location. It never hurts to call – even if it's 4 PM, we'll do everything possible to get there today. Our goal is to solve your junk problem NOW, not make you wait until tomorrow.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 6 ? null : 6)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Can you handle emergency cleanouts the same day?</h3>
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
                    Absolutely. Our <strong>rapid junk removal San Diego</strong> team specializes in emergency situations: last-minute move-outs, property inspection deadlines, HOA violations, and urgent estate cleanouts. We bring extra crew members for large same-day projects to ensure completion within hours. Don't wait days – we'll handle your emergency cleanout TODAY.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 7 ? null : 7)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do I need to sort items for same day removal?</h3>
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
                    No sorting required! Our <strong>instant junk removal San Diego</strong> service handles everything as-is. Just point to what goes, and we'll load it up. We understand same-day situations are often urgent – you don't have time to organize. That's why our full-service approach includes all the heavy lifting, sorting during disposal, and complete cleanup. You relax while we work.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions About Same Day Junk Removal?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our experienced team is ready to answer any questions about our <strong>same day junk removal San Diego</strong> services, provide detailed quotes, or schedule your same-day service for immediate pickup availability.
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
              Get Today's Pickup Quote
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
