'use client';

import { useState } from 'react';
import type { FAQ } from '@/lib/schema';

interface FAQSectionProps {
  title: string;
  description: string;
  faqs: FAQ[];
  ctaTitle: string;
  ctaDescription: string;
  includeSchema?: boolean;
}

export default function FAQSection({
  title,
  description,
  faqs,
  ctaTitle,
  ctaDescription,
  includeSchema = false,
}: FAQSectionProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqSchema = includeSchema ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/<[^>]*>/g, '')
      }
    }))
  } : null;

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: description }}
            />
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
                      <p
                        className="text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {ctaTitle}
            </h3>
            <p
              className="text-gray-700 mb-6 max-w-2xl mx-auto"
              dangerouslySetInnerHTML={{ __html: ctaDescription }}
            />
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
