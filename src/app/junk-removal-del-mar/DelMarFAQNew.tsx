"use client";

import { useState } from "react";

export default function DelMarFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How much does junk removal cost in Del Mar?",
      answer: (
        <>
          <p className="mb-3">
            Our <strong>Del Mar junk removal</strong> pricing is transparent and based on trailer volume:
          </p>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li><strong>Single Item Pickup:</strong> Starting at $100</li>
            <li><strong>1/4 Trailer Load:</strong> $249</li>
            <li><strong>3/8 Trailer Load:</strong> $319</li>
            <li><strong>1/2 Trailer Load:</strong> $349</li>
            <li><strong>5/8 Trailer Load:</strong> $366</li>
            <li><strong>3/4 Trailer Load:</strong> $429</li>
            <li><strong>7/8 Trailer Load:</strong> $462</li>
            <li><strong>Full Trailer Load:</strong> $495</li>
          </ul>
          <p>
            For the most accurate estimate for your Del Mar property, please call <a href="tel:6197500114" className="text-blue-600 hover:underline">(619) 750-0114</a> for a custom quote based on your specific items and location.
          </p>
        </>
      ),
    },
    {
      question: "Can you remove heavy items like couches and appliances in Del Mar?",
      answer: (
        <>
          <p className="mb-3">
            Absolutely! Our <strong>junk hauling Del Mar</strong> team specializes in removing heavy furniture and appliances from Del Mar Village homes, Del Mar Heights estates, and oceanfront properties. We safely handle:
          </p>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li>Sofas, sectionals, and designer furniture from luxury coastal homes</li>
            <li>Refrigerators, washers, dryers, and high-end kitchen appliances</li>
            <li>Entertainment centers and custom built-in furniture</li>
            <li>Hot tubs, outdoor kitchen equipment, and salt-air damaged patio sets</li>
            <li>Exercise equipment and home gym installations</li>
            <li>Piano removal and oversized artwork</li>
          </ul>
          <p>
            Our crew is experienced with Del Mar's luxury properties, narrow coastal access roads, gated communities, and multi-story estates with challenging stairways.
          </p>
        </>
      ),
    },
    {
      question: "Do you provide same-day junk hauling in Del Mar?",
      answer: (
        <p>
          Yes! We offer same-day <strong>junk pickup Del Mar</strong> service when you call before 2 PM. This is especially helpful for vacation rental turnovers near Del Mar Village, estate cleanouts in Del Mar Heights, and emergency removals near the Fairgrounds and Racetrack. We understand the premium nature of Del Mar properties and provide prompt, professional service throughout the 92014 area.
        </p>
      ),
    },
    {
      question: "What types of junk do you not remove?",
      answer: (
        <>
          <p className="mb-3">
            For safety and regulatory compliance, our <strong>trash removal Del Mar</strong> service cannot haul:
          </p>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li>Hazardous materials such as paints, chemicals, solvents, or fuel</li>
            <li>Asbestos-containing materials</li>
            <li>Medical waste and biohazards</li>
            <li>Propane tanks and compressed gas cylinders</li>
            <li>Tires and automotive fluids</li>
          </ul>
          <p>
            However, if you need help with these items, we'll coordinate proper disposal so you're fully taken care of. We handle all standard household items, furniture, appliances, construction debris, yard waste, and coastal property materials in accordance with local regulations. Call us at <a href="tel:6197500114" className="text-blue-600 hover:underline">(619) 750-0114</a> if you have questions about specific items.
          </p>
        </>
      ),
    },
    {
      question: "Are you licensed and insured for junk removal in San Diego?",
      answer: (
        <p>
          Yes! Severin Cleaners is fully licensed and insured to provide <strong>Del Mar San Diego junk removal</strong> services throughout Del Mar and all of San Diego County. We carry comprehensive liability insurance to protect your luxury coastal property during removal, and we dispose of all items responsibly at licensed facilities. Our team follows all local regulations for waste handling and environmental compliance, which is especially important for Del Mar's protected coastal environment.
        </p>
      ),
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions – Del Mar Junk Removal
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 pr-8">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-6 h-6 text-blue-600 transform transition-transform flex-shrink-0 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
