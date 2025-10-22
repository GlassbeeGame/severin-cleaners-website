'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How much does junk removal cost in San Diego?",
      answer: "Our junk removal San Diego pricing depends on volume and type of items. We offer transparent, upfront pricing with no hidden fees. Most residential junk hauling San Diego projects range from $150-$600. Commercial jobs vary based on scope. Call (619) 750-0114 for a free estimate tailored to your specific junk pickup San Diego needs."
    },
    {
      question: "Do you offer same-day junk removal in San Diego?",
      answer: "Yes! We provide same-day junk removal San Diego services 7 days a week. Our emergency junk hauling San Diego team can often arrive within 2-4 hours of your call. Whether you need urgent trash removal San Diego for moving deadlines or unexpected cleanouts, we're ready to help with immediate service."
    },
    {
      question: "What types of junk do you haul away in San Diego?",
      answer: "Our junk removal San Diego services handle furniture, appliances, electronics, construction debris, yard waste, estate cleanouts, and general household clutter. We provide specialized services including furniture removal San Diego, appliance removal San Diego, and hoarding cleanup San Diego. We don't handle hazardous materials like asbestos, but we can recommend proper disposal methods."
    },
    {
      question: "Do you recycle or donate items during San Diego junk hauling?",
      answer: "Absolutely! Our eco-friendly junk removal San Diego approach includes recycling metals, electronics, and materials whenever possible. Usable furniture and appliances are donated to local charities including Salvation Army and Goodwill. We're committed to responsible junk pickup San Diego that benefits our community and environment."
    },
    {
      question: "Are your services available in all San Diego neighborhoods?",
      answer: "Yes, we provide comprehensive junk hauling San Diego coverage throughout all neighborhoods and communities. From coastal areas like La Jolla and Pacific Beach to inland communities like El Cajon and Poway, our trash removal San Diego team serves the entire county with the same professional service and competitive pricing."
    },
    {
      question: "Can you provide commercial junk removal in San Diego?",
      answer: "Yes, we specialize in commercial junk removal San Diego for offices, retail stores, restaurants, warehouses, and construction sites. Our business-focused services include scheduled pickups, large-scale cleanouts, and ongoing waste management solutions. We work with contractors, property managers, and business owners throughout San Diego County."
    },
    {
      question: "Do you handle large items like hot tubs and appliances?",
      answer: "Absolutely! We provide specialized hot tub removal San Diego and appliance removal San Diego services. Our team has the equipment and expertise to safely remove and dispose of refrigerators, washers, dryers, hot tubs, pianos, and other large items. All large item junk removal San Diego projects include proper disconnection and eco-friendly disposal."
    },
    {
      question: "Is bilingual junk removal service available in San Diego?",
      answer: "Yes, we proudly offer bilingual junk removal San Diego services in both English and Spanish. Our diverse team ensures clear communication throughout your junk hauling San Diego experience. We understand the importance of serving San Diego's multicultural community with professional, accessible trash removal San Diego services."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions – Junk Removal San Diego
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our <strong>junk hauling San Diego</strong> services,
            pricing, and process. Can&apos;t find what you&apos;re looking for? Call us directly!
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
            Still Have Questions About Junk Removal San Diego?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our friendly team is ready to answer any questions about our <strong>junk pickup San Diego</strong>
            services, provide detailed quotes, or schedule your same-day service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16197500114"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              📞 Call (619) 750-0114 – Speak with an Expert
            </a>
            <a
              href="#contact"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Get Free Quote Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}