'use client';

import { useState } from 'react';

export default function FurnitureFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much does furniture removal cost in San Diego?",
      answer: "Furniture removal San Diego pricing starts at $100 for single items and ranges up to $495 for a full trailer load. Couch removal San Diego typically costs $100-$319 depending on size, while bedroom furniture runs $249-$429. All prices include labor, transportation, and proper disposal with no hidden fees. Call (619) 750-0114 for a free quote on your specific furniture."
    },
    {
      question: "Do you remove heavy furniture like pianos or safes?",
      answer: "Yes! Our furniture hauling San Diego team specializes in heavy and oversized items including pianos, pool tables, safes, and commercial furniture. We bring specialized equipment like piano dollies, furniture straps, and protective blankets. Our professional crew is trained in safe removal techniques for heavy items from any floor or location in San Diego."
    },
    {
      question: "Can you remove furniture from upstairs or apartments?",
      answer: "Absolutely. Our furniture removal San Diego service handles multi-story homes, apartments, condos, and buildings with elevators or stairs. We navigate tight hallways, narrow staircases, and challenging doorways while protecting your walls and floors. There's no need to move furniture yourself – we handle all the heavy lifting regardless of location."
    },
    {
      question: "Do I need to move furniture to the curb?",
      answer: "No! With our full-service furniture disposal San Diego, you don't lift a finger. We come inside your home, office, or building to remove furniture from wherever it's located. Our team handles all the heavy lifting, maneuvering, and loading. Just show us what goes, and we'll take care of everything from there."
    },
    {
      question: "What happens to the furniture after removal?",
      answer: "We handle old furniture removal San Diego professionally and responsibly. Our furniture removal service works to ensure items are disposed of according to local San Diego regulations and requirements. When possible, usable furniture in good condition is directed to appropriate facilities rather than landfills. We're committed to proper furniture disposal methods throughout San Diego County, ensuring all items are handled in compliance with local disposal requirements."
    },
    {
      question: "Do you offer same-day furniture removal?",
      answer: "Yes, we provide same-day furniture removal San Diego when you call before 2 PM. Our flexible scheduling includes evenings and weekends at no extra charge. Whether you need urgent couch removal San Diego for a new delivery or last-minute space clearing, we can typically arrive within hours. Call (619) 750-0114 to check today's availability."
    },
    {
      question: "Can you remove office furniture from commercial buildings?",
      answer: "Absolutely. Our office furniture removal San Diego service handles commercial properties including office buildings, retail spaces, and warehouses. We remove desks, cubicles, conference tables, filing cabinets, and all office equipment. Our team works efficiently to minimize disruption to your business operations and can schedule after-hours or weekend service throughout San Diego."
    },
    {
      question: "Do you disassemble furniture before removal?",
      answer: "Yes, when necessary. Our furniture hauling San Diego team disassembles bed frames, large tables, sectional sofas, and other furniture that won't fit through doorways intact. We bring all necessary tools and handle disassembly carefully to avoid property damage. This is included in our service at no extra charge for standard San Diego furniture removal jobs."
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
            Frequently Asked Questions - Furniture Removal San Diego
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our professional <strong>furniture removal San Diego</strong> services,
            pricing, and responsible disposal process.
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
                    <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions About Furniture Removal?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our experienced team is ready to answer any questions about our <strong>furniture removal San Diego</strong> services, provide detailed quotes, or schedule your same-day service.
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
              Get Free Furniture Quote
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
