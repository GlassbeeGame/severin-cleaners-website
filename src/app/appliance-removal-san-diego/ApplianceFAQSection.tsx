'use client';

import { useState } from 'react';

export default function ApplianceFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much does appliance removal cost in San Diego?",
      answer: "Our appliance removal San Diego pricing starts at $100 for a single appliance. Two appliances (like a washer and dryer set) cost $249, while 3-4 appliances cost $319. For larger jobs with 5-6 appliances, pricing is $349, and a full kitchen with 7+ appliances is $495. All prices include removal from anywhere on your property, loading, hauling, and proper disposal. Call (619) 750-0114 for an accurate quote based on your specific needs."
    },
    {
      question: "Do you disconnect appliances before removal?",
      answer: "For basic disconnection of already-accessible appliances (unplugging, unhooking water lines), this is typically included in our standard appliance removal San Diego pricing. However, built-in appliances or items requiring special disconnection (gas lines, hardwired electrical, complex installations) may have additional fees. We'll provide a clear quote upfront so you know exactly what to expect."
    },
    {
      question: "Can you remove built-in appliances?",
      answer: "Yes, we handle appliance disposal San Diego for built-in units including dishwashers, microwaves, ovens, and more. Built-in appliances often require additional labor to safely disconnect and extract without damaging cabinetry or countertops. We'll assess the situation and provide an accurate quote that includes any necessary additional work."
    },
    {
      question: "Do I need to empty the refrigerator before removal?",
      answer: "Yes, please empty all food and liquids from refrigerators and freezers before our refrigerator removal San Diego team arrives. This prevents spills during transport and ensures safe handling. Remove all shelves and drawers if they're loose, or let us know if you'd like us to secure them for transport."
    },
    {
      question: "Can you remove appliances from upstairs?",
      answer: "Absolutely! Our professional team handles washer dryer removal San Diego from any floor, including upstairs units, basements, and tight spaces. We have the specialized equipment and experience to safely navigate stairs and doorways. We take care to protect your walls, floors, and railings during the removal process."
    },
    {
      question: "What happens to old appliances after pickup?",
      answer: "After appliance disposal San Diego, all items are professionally disposed of according to local San Diego regulations and requirements. We work to ensure appliances are handled in compliance with local disposal standards. Our team ensures all items are processed at appropriate facilities according to San Diego County disposal requirements."
    },
    {
      question: "Do you offer same-day appliance removal?",
      answer: "Yes! Same-day appliance removal San Diego is available throughout San Diego when you call early. We offer flexible scheduling including evenings and weekends at no extra charge. Same-day service is perfect for kitchen remodels, emergency removals, or when your new appliances are being delivered and you need the old ones hauled away immediately."
    },
    {
      question: "Can you remove multiple appliances at once?",
      answer: "Yes! We specialize in removing multiple appliances in a single trip. Whether you're doing a complete kitchen remodel, clearing out a rental property, or handling an estate cleanout, we can remove all your appliances at once. Our pricing structure offers better value for multiple items - for example, 3-4 appliances cost $319 total, which is more economical than individual removal. Call (619) 750-0114 for a quote on your specific project."
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
            Frequently Asked Questions - Appliance Removal San Diego
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our professional <strong>appliance removal San Diego</strong> service and pricing.
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
            Still Have Questions About Appliance Removal?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our experienced team is ready to answer any questions about our <strong>appliance removal San Diego</strong> services, provide detailed quotes, or schedule your same-day service.
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
              Get Free Appliance Quote
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
