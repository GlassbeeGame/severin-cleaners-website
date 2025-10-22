'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "How much does junk removal cost in San Diego?",
    answer: `San Diego junk removal prices typically range from $100 for a single item pickup to $495 for a full trailer load. Costs vary based on several factors:

• Volume: The amount of space your junk takes up in our trailer
• Access: Stairs, elevators, parking distance from your property
• Weight: Heavier materials like concrete cost more than furniture
• Material type: Some items require special handling or disposal

Our transparent pricing includes all labor, hauling, and proper eco-friendly disposal—no hidden fees ever. Call (619) 750-0114 for an accurate upfront quote based on your specific needs.`
  },
  {
    question: "Do you offer same-day junk removal in San Diego?",
    answer: "Yes! We provide same-day and next-day junk removal across all San Diego neighborhoods when you call before 2 PM. Our locally-based team serves coastal areas (La Jolla, Pacific Beach, Del Mar), central urban (Downtown, North Park, Hillcrest), East County (El Cajon, La Mesa, Santee), North County (Oceanside, Poway, Rancho Santa Fe), and South Bay (Chula Vista, National City). Same-day availability depends on our schedule, so contact us early for the fastest service."
  },
  {
    question: "Where does the junk go after pickup?",
    answer: "We prioritize eco-friendly disposal through recycling and donation whenever possible. Usable furniture and items in good condition go to local San Diego charities like the San Diego Rescue Mission and Habitat for Humanity ReStore. Metal, wood, electronics, and appliances are sent to licensed recycling facilities. Only non-recyclable waste goes to approved disposal sites. We handle everything in full compliance with San Diego County environmental regulations, so you can trust your junk is disposed of responsibly."
  },
  {
    question: "Is your company licensed and insured for San Diego County?",
    answer: "Yes—Severin Cleaners is fully licensed and insured to operate throughout all of San Diego County. We carry comprehensive liability insurance to protect your property during removal and follow all local waste handling regulations. Our team is trained in safe lifting techniques, proper material handling, and San Diego County disposal compliance. You're working with legitimate, professional junk haulers who take responsibility seriously."
  },
  {
    question: "What areas do you serve in San Diego?",
    answer: "We serve all of San Diego County including coastal areas (La Jolla, Del Mar, Pacific Beach, Point Loma), central urban neighborhoods (Downtown, Gaslamp, North Park, Hillcrest, Mission Valley), East County (El Cajon, La Mesa, Santee, Lakeside), North County coastal and inland (Oceanside, Carlsbad, Poway, Rancho Santa Fe, Vista), and South Bay (Chula Vista, National City, Otay Ranch). Our central location allows fast response times—typically 15-30 minutes to most areas. We handle everything from beachfront condos to hillside estates to suburban family homes."
  }
];

export default function SanDiegoFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Generate FAQ schema
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
            Frequently Asked Questions - San Diego Junk Removal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our <strong>San Diego junk removal</strong> services,
            pricing, and county-wide coverage.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 0 ? null : 0)}
              >
                <h3 className="font-bold text-gray-900 text-lg">How much does junk removal cost in San Diego?</h3>
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
                    Our <strong>San Diego junk removal</strong> pricing is transparent and based on trailer volume:
                  </p>
                  <ul className="list-disc pl-6 mb-3 space-y-1 text-gray-700">
                    <li><strong>Single Item Pickup:</strong> Starting at $100</li>
                    <li><strong>1/4 Trailer Load:</strong> $249</li>
                    <li><strong>3/8 Trailer Load:</strong> $319</li>
                    <li><strong>1/2 Trailer Load:</strong> $349</li>
                    <li><strong>5/8 Trailer Load:</strong> $366</li>
                    <li><strong>3/4 Trailer Load:</strong> $429</li>
                    <li><strong>7/8 Trailer Load:</strong> $462</li>
                    <li><strong>Full Trailer Load:</strong> $495</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    For large projects or custom needs, please call <a href="tel:6197500114" className="text-blue-600 hover:underline">(619) 750-0114</a> for a tailored quote.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Do you provide same-day junk hauling in San Diego?</h3>
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
                    Yes! We offer same-day <strong>junk hauling San Diego</strong> service when you call before 2 PM. This is especially helpful for urgent cleanouts, last-minute moves, renovation deadlines, and property management emergencies throughout San Diego County—from coastal communities to East County and North County inland areas.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Can you remove heavy items like couches and appliances?</h3>
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
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Absolutely! Our <strong>junk pickup San Diego</strong> team specializes in removing heavy furniture and appliances from homes and businesses throughout San Diego County. We safely handle:
                  </p>
                  <ul className="list-disc pl-6 mb-3 space-y-1 text-gray-700">
                    <li>Sofas, sectionals, mattresses, and bedroom sets</li>
                    <li>Refrigerators, washers, dryers, and kitchen appliances</li>
                    <li>Hot tubs, pool equipment, and outdoor furniture</li>
                    <li>Exercise equipment and home gym setups</li>
                    <li>Office furniture and commercial equipment</li>
                    <li>Construction debris and renovation materials</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Our crew handles all the heavy lifting and navigates stairs, tight spaces, and challenging property access throughout San Diego neighborhoods.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
              >
                <h3 className="font-bold text-gray-900 text-lg">What types of junk do you not remove?</h3>
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
                    We handle all standard household items, furniture, appliances, construction debris, and yard waste in accordance with San Diego County regulations. If you're unsure about a specific item, please call us at <a href="tel:6197500114" className="text-blue-600 hover:underline">(619) 750-0114</a> and we can discuss it — some items require special handling, and we'll help coordinate so you're fully taken care of.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === 4 ? null : 4)}
              >
                <h3 className="font-bold text-gray-900 text-lg">Are you licensed and insured for junk removal in San Diego County?</h3>
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
                    Yes! Severin Cleaners is fully licensed and insured to provide <strong>trash removal San Diego</strong> services throughout all of San Diego County. We carry comprehensive liability insurance to protect your property during removal, and we dispose of all items in accordance with local disposal regulations. Our team follows all San Diego County waste handling requirements and environmental compliance standards.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready for Same-Day Junk Removal in San Diego?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Whether you're in coastal San Diego, East County, North County, or South Bay, we're your local <strong>San Diego junk removal</strong> experts serving the entire county.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16197500114"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              📞 Call (619) 750-0114 – San Diego Service
            </a>
            <a
              href="/contact"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Get Free San Diego Quote
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
