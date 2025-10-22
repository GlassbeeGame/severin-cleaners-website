import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HoardingFAQSection from "./HoardingFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hoarding Cleanup San Diego | Compassionate Service",
  description: "Professional hoarding cleanup San Diego with compassion and discretion. Judgment-free hoarding junk removal, confidential service. Licensed & insured. Call (619) 750-0114.",
  openGraph: {
    title: "Hoarding Cleanup San Diego | Compassionate Professional Service",
    description: "Discreet, compassionate hoarding cleanup services in San Diego. Professional junk removal team trained in sensitivity.",
    url: "https://severincleaners.com/hoarding-cleanup-san-diego",
  },
  alternates: {
    canonical: "https://severincleaners.com/hoarding-cleanup-san-diego",
  },
};

export default function HoardingCleanupPage() {
  const serviceSchema = generateServiceSchema({
    name: "Hoarding Cleanup San Diego",
    description: "Compassionate hoarding cleanup services with professional organizing. Judgment-free, confidential hoarding junk removal.",
    url: "https://severincleaners.com/hoarding-cleanup-san-diego",
    serviceType: "Hoarding Cleanup Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "Hoarding Cleanup", url: "https://severincleaners.com/hoarding-cleanup-san-diego" },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema]
  };

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <div className={`${inter.variable} font-sans antialiased`}>
        <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hoarding Cleanup San Diego
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Compassionate Junk Removal • Judgment-Free Support • Confidential Service
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  Call for Confidential Help: (619) 750-0114
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  Get Private Consultation
                </a>
              </div>
              <p className="mt-6 text-sm text-blue-100">
                Judgment-Free Support • Complete Confidentiality • Licensed & Insured
              </p>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Compassionate Junk Hauling for Hoarding Situations
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Compassionate Service</h3>
                <p className="text-gray-600">
                  Non-judgmental, respectful approach that treats every person with dignity and understanding.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Complete Confidentiality</h3>
                <p className="text-gray-600">
                  Unmarked vehicles and discreet service. Your privacy and dignity are our top priorities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Safe Handling</h3>
                <p className="text-gray-600">
                  We follow safe handling practices and comply with San Diego disposal regulations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Confidential Hoarding Junk Removal Services
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-4">
                  Hoarding situations are complex and deeply personal. When it's time for cleanup, you need a junk hauling service that understands the emotional challenges involved.
                </p>

                <p className="text-lg mb-6">
                  Our hoarding cleanup San Diego team provides compassionate junk removal for individuals and families dealing with hoarding situations. We're not counselors or therapists—we're a professional hauling company that specializes in discreet, respectful removal of accumulated items while treating everyone involved with dignity and understanding.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Understanding Hoarding Situations</h3>
                <p className="text-lg mb-6">
                  Hoarding disorder affects many people and can create overwhelming accumulations of items. Our hoarder cleanup San Diego service approaches each situation with patience and respect, working at a pace that's comfortable for the individual while clearing spaces safely and efficiently.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">What We Handle</h3>
                <p className="text-lg mb-4">
                  Our hoarder junk removal San Diego service removes all types of accumulated items:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">General Junk & Belongings</h4>
                    <ul className="list-disc pl-4 space-y-2 text-gray-700">
                      <li>Furniture, boxes, and household items</li>
                      <li>Clothing, papers, and accumulated belongings</li>
                      <li>Electronics, appliances, and equipment</li>
                      <li>Books, magazines, and stored materials</li>
                      <li>General debris and accumulated items</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">Hoarded Waste Handling</h4>
                    <ul className="list-disc pl-4 space-y-2 text-gray-700">
                      <li>Room-by-room clearing services</li>
                      <li>Basement, attic, and garage cleanouts</li>
                      <li>Accumulated storage and clutter</li>
                      <li>Safe removal of items from all areas</li>
                      <li>Property clearing and cleanup</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4">Our Compassionate Process</h3>
                <p className="text-lg mb-4">
                  Every hoarding cleanout services San Diego project is unique. Here's how we approach each situation:
                </p>

                <div className="space-y-4 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">1. Private Consultation</h4>
                    <p className="text-gray-700">
                      Confidential, judgment-free discussion to understand your needs, timeline, and concerns.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">2. Respectful Sorting</h4>
                    <p className="text-gray-700">
                      Work with you to identify items to keep, donate, or remove. We move at your pace.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">3. Careful Removal</h4>
                    <p className="text-gray-700">
                      Discreet hauling using unmarked trucks. Safe handling of all items with proper disposal.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">4. Property Cleanup</h4>
                    <p className="text-gray-700">
                      Basic cleaning and clearing of spaces. Leave the property clean and ready for next steps.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4">Handling Complex Situations</h3>
                <p className="text-lg mb-6">
                  Some hoarding situations involve complications beyond standard junk removal—severe biohazards, extensive pest infestations, or significant mold issues. We follow safe handling practices and comply with San Diego disposal regulations for general debris. For severe biohazard, pest, or mold issues, we coordinate with trusted professionals to ensure the situation is handled properly and completely.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Extreme Cleaning San Diego</h3>
                <p className="text-lg mb-6">
                  When hoarding situations require extensive cleaning beyond junk removal, our extreme cleaning San Diego service includes thorough post-removal cleanup. We handle the heavy-duty cleaning needed after items are hauled away, working to restore spaces to livable condition.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Complete Discretion</h3>
                <p className="text-lg mb-4">
                  We understand hoarding cleanup is deeply personal. Our service includes:
                </p>

                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li>Unmarked vehicles for neighborhood discretion</li>
                  <li>Flexible scheduling including evenings and weekends</li>
                  <li>Confidentiality agreements with all team members</li>
                  <li>Use of private entrances when possible</li>
                  <li>Respectful, non-judgmental approach throughout</li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4">Transparent Pricing</h3>
                <p className="text-lg mb-6">
                  Pricing is based on volume removed. We provide upfront quotes with no hidden fees.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-blue-600 mb-2">SINGLE ITEM</p>
                      <p className="text-4xl font-bold text-blue-900 mb-1">$100</p>
                      <p className="text-sm text-blue-700">Starting at</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-green-600 mb-2">1/4 TRAILER LOAD</p>
                      <p className="text-4xl font-bold text-green-900 mb-1">$249</p>
                      <p className="text-sm text-green-700">3 cubic yards</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-purple-600 mb-2">1/2 TRAILER LOAD</p>
                      <p className="text-4xl font-bold text-purple-900 mb-1">$349</p>
                      <p className="text-sm text-purple-700">6 cubic yards</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-200">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-orange-600 mb-2">FULL TRAILER LOAD</p>
                      <p className="text-4xl font-bold text-orange-900 mb-1">$495</p>
                      <p className="text-sm text-orange-700">12 cubic yards</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-xl p-6 mb-8">
                  <h4 className="font-bold text-lg mb-4 text-gray-900">Additional Load Sizes:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-300">
                      <span className="font-semibold text-gray-700">3/8 Trailer Load (4.5 cubic yards)</span>
                      <span className="text-xl font-bold text-gray-900">$319</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-300">
                      <span className="font-semibold text-gray-700">5/8 Trailer Load (7.5 cubic yards)</span>
                      <span className="text-xl font-bold text-gray-900">$366</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-300">
                      <span className="font-semibold text-gray-700">3/4 Trailer Load (9 cubic yards)</span>
                      <span className="text-xl font-bold text-gray-900">$429</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-300">
                      <span className="font-semibold text-gray-700">7/8 Trailer Load (10.5 cubic yards)</span>
                      <span className="text-xl font-bold text-gray-900">$462</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Note: Most hoarding cleanouts require multiple trailer loads. Typical projects range from $1,500-$5,000+ depending on property size and volume. We provide detailed written estimates. Call <a href="tel:+16197500114" className="text-blue-600 font-bold hover:underline">(619) 750-0114</a> for a confidential assessment.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4">Working with Families</h3>
                <p className="text-lg mb-6">
                  Family members often feel overwhelmed when helping a loved one with a hoarding situation. We provide patient, understanding service that respects both the individual and the family's needs. We're here to handle the physical work so families can focus on emotional support.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Serving All San Diego County</h3>
                <p className="text-lg mb-4">
                  Our discreet hoarding cleanup service is available throughout San Diego County:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <ul className="list-disc pl-4 text-gray-700">
                    <li>Downtown & Central San Diego</li>
                    <li>Pacific Beach & Mission Beach</li>
                    <li>La Jolla & UTC</li>
                    <li>Point Loma & Ocean Beach</li>
                  </ul>
                  <ul className="list-disc pl-4 text-gray-700">
                    <li>Chula Vista & South Bay</li>
                    <li>El Cajon & East County</li>
                    <li>La Mesa & Santee</li>
                    <li>Spring Valley & Lemon Grove</li>
                  </ul>
                  <ul className="list-disc pl-4 text-gray-700">
                    <li>Escondido & North County</li>
                    <li>Oceanside & Carlsbad</li>
                    <li>Vista & San Marcos</li>
                    <li>Poway & Scripps Ranch</li>
                  </ul>
                </div>

                {/* Trust Signals */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold text-blue-600">200+</p>
                      <p className="text-sm text-gray-600">Cleanout & Hauling Projects Completed</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">100%</p>
                      <p className="text-sm text-gray-600">Confidential Service</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">Licensed</p>
                      <p className="text-sm text-gray-600">& Fully Insured</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <HoardingFAQSection />
      </main>

        <Footer />
      </div>
    </>
  );
}
