'use client';

import { useState } from 'react';

export default function CleanoutFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are your cleanout service prices in San Diego?",
      answer: "Our cleanout services San Diego pricing is volume-based and completely transparent. Pricing includes: Single Item Pickup starting at $100, 1/4 Trailer Load (3 cubic yards) for $249, 1/2 Trailer Load (6 cubic yards) for $349, and Full Trailer Load (12 cubic yards) for $495. We also offer 3/8 load ($319), 5/8 load ($366), 3/4 load ($429), and 7/8 load ($462) options. All pricing includes labor, hauling, eco-friendly disposal, and recycling or donation coordination. No hidden fees or surprise charges."
    },
    {
      question: "Do you offer shed cleanout San Diego services?",
      answer: "Yes! Shed cleanout San Diego is one of our specialty services. We handle everything from small tool sheds to large storage buildings, removing years of accumulated tools, equipment, yard waste, and miscellaneous items. Most shed cleanouts take 1-2 hours and range from $200-$400 depending on volume. We can also assist with shed demolition coordination if needed."
    },
    {
      question: "Can you handle large property cleanouts like estates or multi-unit homes?",
      answer: "Absolutely. Property cleanout San Diego projects are our specialty, including estate cleanouts, multi-unit residential buildings, move-out situations, and properties being prepared for sale or rent. We work with families, realtors, and landlords to completely clear properties of all unwanted items, handling everything from furniture to appliances to personal belongings with care and professionalism."
    },
    {
      question: "What happens to items after you haul them away?",
      answer: "We prioritize eco-friendly disposal for all our cleanout services San Diego. Items in good condition are donated to local charities, recyclable materials go to San Diego recycling facilities, and only true waste goes to approved landfills. We partner with Goodwill, Salvation Army, and local nonprofits to give items a second life whenever possible."
    },
    {
      question: "How long does a typical cleanout take?",
      answer: "Cleanout duration varies by project size. Garage cleanout San Diego and attic cleanout San Diego jobs typically take 2-3 hours, storage unit cleanout San Diego takes 1-2 hours, while full property cleanout San Diego or basement cleanout San Diego projects may take 4-8 hours or require multiple visits for large estates."
    },
    {
      question: "Do you offer same-day cleanout service?",
      answer: "Yes! We offer same-day cleanout services San Diego for urgent situations including emergency move-outs, realtor deadlines, and property turnovers. Call us early in the day for best availability, and we'll do everything possible to accommodate your timeline with professional junk hauling service."
    },
    {
      question: "Do I need to be present during the cleanout?",
      answer: "Not necessarily. Many property cleanout San Diego clients provide us with access and clear instructions on what to remove, then let us work independently. This is common for landlords, property managers, and busy professionals. We can send before and after photos to document our work."
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
            Frequently Asked Questions About Cleanout Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our cleanout services San Diego, pricing, and what to expect when you hire our professional junk hauling team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 0 ? null : 0)}
              >
                <h3 className="font-bold text-gray-900 text-lg">What are your cleanout service prices in San Diego?</h3>
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
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Our cleanout services San Diego pricing is volume-based and completely transparent. Pricing includes: Single Item Pickup starting at $100, 1/4 Trailer Load (3 cubic yards) for $249, 1/2 Trailer Load (6 cubic yards) for $349, and Full Trailer Load (12 cubic yards) for $495. We also offer 3/8 load ($319), 5/8 load ($366), 3/4 load ($429), and 7/8 load ($462) options.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    All pricing includes labor, hauling, eco-friendly disposal, and recycling or donation coordination. No hidden fees or surprise charges.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
              >
<h3 className="font-bold text-gray-900 text-lg">Do you offer shed cleanout San Diego services?</h3>
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
                    Yes! Shed cleanout San Diego is one of our specialty services. We handle everything from small tool sheds to large storage buildings, removing years of accumulated tools, equipment, yard waste, and miscellaneous items. Most shed cleanouts take 1-2 hours and range from $200-$400 depending on volume. We can also assist with shed demolition coordination if needed.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Can you handle large property cleanouts like estates or multi-unit homes?</h3>
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
                    Absolutely. Property cleanout San Diego projects are our specialty, including estate cleanouts, multi-unit residential buildings, move-out situations, and properties being prepared for sale or rent. We work with families, realtors, and landlords to completely clear properties of all unwanted items, handling everything from furniture to appliances to personal belongings with care and professionalism.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
              >
                <h3 className="font-bold text-gray-900 text-lg">What happens to items after you haul them away?</h3>
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
                    We prioritize eco-friendly disposal for all our cleanout services San Diego. Items in good condition are donated to local charities, recyclable materials go to San Diego recycling facilities, and only true waste goes to approved landfills. We partner with Goodwill, Salvation Army, and local nonprofits to give items a second life whenever possible.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 4 ? null : 4)}
              >
                <h3 className="font-bold text-gray-900 text-lg">How long does a typical cleanout take?</h3>
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
                    Cleanout duration varies by project size. Garage cleanout San Diego and attic cleanout San Diego jobs typically take 2-3 hours, storage unit cleanout San Diego takes 1-2 hours, while full property cleanout San Diego or basement cleanout San Diego projects may take 4-8 hours or require multiple visits for large estates.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 5 ? null : 5)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you offer same-day cleanout service?</h3>
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
                    Yes! We offer same-day cleanout services San Diego for urgent situations including emergency move-outs, realtor deadlines, and property turnovers. Call us early in the day for best availability, and we'll do everything possible to accommodate your timeline with professional junk hauling service.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 6 ? null : 6)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do I need to be present during the cleanout?</h3>
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
                    Not necessarily. Many property cleanout San Diego clients provide us with access and clear instructions on what to remove, then let us work independently. This is common for landlords, property managers, and busy professionals. We can send before and after photos to document our work.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions About Our Cleanout Services?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our experienced team is ready to provide your free cleanout quote and answer any questions about garage cleanout San Diego, attic cleanout San Diego, or any other junk hauling needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16197500114"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              📞 Call (619) 750-0114 - Get Free Quote
            </a>
            <a
              href="mailto:severincleaners@gmail.com"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Email for Free Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
