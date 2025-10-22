'use client';

import { useState } from 'react';

export default function MattressDisposalFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I get rid of a mattress in San Diego?",
      answer: "Just call us at (619) 750-0114 or book online — we'll pick it up from anywhere on your property and handle the rest. We offer same-day and next-day mattress pickup throughout San Diego County, including all labor, hauling, and responsible disposal or recycling. No need to transport it yourself or wait for limited city programs."
    },
    {
      question: "Does San Diego offer free mattress pickup?",
      answer: "City programs are limited and often require advanced scheduling with specific drop-off requirements. We offer fast, flexible pickup when you need it — including same-day service. Our affordable pricing starts around $100 and includes all labor, hauling, and eco-friendly disposal, saving you time and hassle."
    },
    {
      question: "Do you recycle mattresses in San Diego?",
      answer: "Yes, we recycle when we can by working with San Diego recycling facilities that safely break down materials for reuse. Mattress components like steel springs, foam padding, wood frames, and fabric are separated and recycled. If recycling isn't possible, we ensure proper disposal in compliance with all San Diego County waste regulations."
    },
    {
      question: "Can you pick up from apartments or multi-unit buildings?",
      answer: "Absolutely. Our crew is experienced with apartment pickups, elevators, narrow stairways, and tight hallways. We handle all the heavy lifting and logistics, whether you're on the first floor or the tenth. Just let us know your location details when you call for a quote."
    },
    {
      question: "How much does mattress removal cost in San Diego?",
      answer: "Mattress pickup typically starts around $100, depending on size, quantity, location, and accessibility. This includes all labor, hauling, transportation, and responsible disposal or recycling. We also offer volume-based pricing if you're removing multiple items: 1/4 Load ($249), 1/2 Load ($349), Full Load ($495). Call (619) 750-0114 for an exact quote — we'll give you upfront pricing with no hidden fees."
    },
    {
      question: "Do you remove box springs and bed frames too?",
      answer: "Yes! We remove mattresses, box springs, bed frames, headboards, and any other bedroom furniture. We can handle multiple items in one trip, making it easy to clear out an entire bedroom or upgrade your whole sleep setup at once."
    },
    {
      question: "Can you haul away my mattress the same day?",
      answer: "Yes, we offer same-day mattress haul away in San Diego for urgent needs. We also provide quick and affordable mattress haul away in San Diego, perfect for removing old or damaged mattresses that you just want gone. Just call us as early as possible and we'll do our best to fit you into our schedule."
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
            Get answers to common questions about our San Diego mattress disposal and pickup services.
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
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions About Mattress Disposal?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our experienced team is ready to answer questions, provide detailed quotes, or schedule your same-day mattress pickup.
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
