import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Foreclosure & Eviction Cleanout Services San Diego - Fast & Discreet",
  description: "Professional foreclosure & eviction cleanout services in San Diego. Discreet, fast turnaround for banks, landlords & property managers. Call (619) 750-0114!",
  keywords: "foreclosure cleanout San Diego, eviction cleanout services, REO property cleanup, tenant cleanout San Diego, property management cleanouts, bank foreclosure cleanup",
  openGraph: {
    title: "Foreclosure & Eviction Cleanout Services San Diego - Fast & Discreet",
    description: "Professional foreclosure & eviction cleanout services in San Diego. Discreet, fast turnaround for banks, landlords & property managers.",
    url: 'https://severincleaners.com/foreclosure-eviction-cleanout-san-diego',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Foreclosure & Eviction Cleanout Services San Diego",
    description: "Professional foreclosure & eviction cleanout services in San Diego. Discreet, fast turnaround for banks, landlords & property managers.",
    images: ['https://severincleaners.com/og-image.jpg'],
  },
};

export default function ForeclosureEvictionCleanoutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl font-bold mb-6">
                Foreclosure & Eviction Cleanout Services
                <span className="block text-blue-300 mt-2">Professional, Discreet, Compassionate</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                When you need sensitive property cleanouts handled with professionalism and discretion, Severin Cleaners provides fast, respectful foreclosure and eviction cleanout services throughout San Diego. We understand the challenges facing property managers, banks, landlords, and families during difficult transitions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  📞 Call (619) 750-0114 - Fast Response
                </a>
                <a
                  href="#process"
                  className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  Learn Our Process
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Discreet Service Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                Discreet Cleanout Services You Can Trust
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center">
                We understand that foreclosures and evictions are sensitive situations requiring the utmost professionalism and respect for all parties involved.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Privacy</h3>
                  <p className="text-gray-600">Unmarked vehicles available upon request to maintain neighborhood discretion during sensitive cleanouts</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Respectful Crews</h3>
                  <p className="text-gray-600">Trained professionals who understand the emotional nature of these situations and work with compassion</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Standards</h3>
                  <p className="text-gray-600">Licensed, insured, and bonded service with strict confidentiality protocols for all property cleanouts</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fast Turnaround Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                Fast Turnaround for Sensitive Timelines
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center">
                We understand that foreclosure and eviction cleanouts often have strict deadlines. Our team is equipped to meet urgent court orders, bank requirements, and landlord timelines.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">⚡ Emergency Response</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Same-day service available for urgent situations
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Next-day scheduling for most property cleanouts
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Weekend and evening availability when needed
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">📋 Deadline Compliance</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Court-ordered cleanout deadlines met reliably
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Bank and REO property requirements fulfilled
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Property manager schedules accommodated
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Property Management Partnerships */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                Trusted by Property Managers & Realtors
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center">
                Our established partnerships with San Diego property management companies and real estate professionals demonstrate our reliability and expertise in tenant turnovers and property preparation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Landlord Services</h3>
                  <p className="text-gray-600 text-sm">Quick tenant turnover cleanouts to minimize vacancy periods and maximize rental income</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Realtor Support</h3>
                  <p className="text-gray-600 text-sm">Property staging preparation and listing-ready cleanouts for faster sales and showings</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Multi-Unit Properties</h3>
                  <p className="text-gray-600 text-sm">Comprehensive cleanouts for apartment complexes, condos, and multi-family properties</p>
                </div>
              </div>

              <div className="mt-12 bg-yellow-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">🤝 Established Partnerships</h3>
                <p className="text-gray-700 text-center mb-6">
                  We've built lasting relationships with San Diego's top property management companies by delivering consistent, professional service that meets tight deadlines and exceeds expectations.
                </p>
                <div className="text-center">
                  <a
                    href="tel:+16197500114"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors"
                  >
                    Discuss Partnership Opportunities
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bank & REO Experience */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                Experience with Banks & REO Properties
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center">
                Our specialized experience with foreclosed and bank-owned (REO) properties ensures efficient cleanouts that meet lending institution requirements and prepare properties for resale.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">🏦 Bank Requirements</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <div>
                        <h4 className="font-semibold text-gray-900">Documentation & Compliance</h4>
                        <p className="text-gray-600 text-sm">Complete photo documentation, detailed invoices, and compliance with all banking protocols</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <div>
                        <h4 className="font-semibold text-gray-900">Secure & Insured Service</h4>
                        <p className="text-gray-600 text-sm">Full licensing, bonding, and insurance coverage to protect financial institutions</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <div>
                        <h4 className="font-semibold text-gray-900">Timeline Adherence</h4>
                        <p className="text-gray-600 text-sm">Strict deadline compliance for asset management and resale preparation schedules</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">🏠 REO Preparation</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <div>
                        <h4 className="font-semibold text-gray-900">Market-Ready Condition</h4>
                        <p className="text-gray-600 text-sm">Complete property cleanouts that prepare foreclosed homes for immediate market listing</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <div>
                        <h4 className="font-semibold text-gray-900">Damage Assessment Support</h4>
                        <p className="text-gray-600 text-sm">Clear debris to allow proper property inspections and damage evaluations</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <div>
                        <h4 className="font-semibold text-gray-900">Value Preservation</h4>
                        <p className="text-gray-600 text-sm">Protect property value through careful, professional cleanout practices</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Remove Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                What We Remove from Foreclosure & Eviction Properties
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center">
                Our comprehensive cleanout services handle all types of belongings and debris commonly found in foreclosure and eviction situations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">🏠 Interior Items</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Furniture of all sizes (sofas, beds, tables, chairs)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Appliances (refrigerators, washers, dryers, stoves)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Personal belongings and clothing</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Electronics and entertainment systems</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Household goods and kitchen items</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">🌿 Exterior & Misc Items</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Yard debris and landscaping materials</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Construction or renovation leftovers</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Garage and storage items</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Trash and general debris</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Hot tubs, pools, and outdoor equipment</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 bg-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">📋 Special Handling</h3>
                <p className="text-gray-700 text-center">
                  We handle valuable items, important documents, and personal belongings with extra care, following your specific instructions for preservation, donation, or disposal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Our Foreclosure & Eviction Cleanout Process
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center">
                We've streamlined our process to provide fast, efficient service while maintaining the highest standards of professionalism and discretion.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Initial Consultation & Free Quote</h3>
                    <p className="text-gray-600">Contact us for a free, detailed estimate. We can provide quotes over the phone or visit the property for larger cleanouts. All quotes include transparent pricing with no hidden fees.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Flexible Scheduling & Coordination</h3>
                    <p className="text-gray-600">We work around your timeline, whether it's same-day emergency service, next-day scheduling, or planned cleanouts. Coordination with property managers, banks, and legal teams as needed.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Efficient & Discreet Removal</h3>
                    <p className="text-gray-600">Our professional crews arrive on time with all necessary equipment. We work efficiently to complete cleanouts quickly while maintaining respect for the property and neighborhood.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Eco-Friendly Disposal & Documentation</h3>
                    <p className="text-gray-600">Items are sorted for donation, recycling, or proper disposal. We provide complete documentation including before/after photos, itemized receipts, and disposal certificates when required.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Why Choose Us for San Diego Foreclosure & Eviction Cleanouts?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <svg className="w-8 h-8 text-blue-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed & Insured Local Team</h3>
                      <p className="text-gray-600">Fully licensed San Diego business with comprehensive insurance coverage and bonding for maximum protection</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg className="w-8 h-8 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Discreet & Respectful Service</h3>
                      <p className="text-gray-600">Professional crews trained in sensitive situation handling with unmarked vehicles available when requested</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg className="w-8 h-8 text-purple-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9"></path>
                    </svg>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Bank & Property Manager Experience</h3>
                      <p className="text-gray-600">Established relationships with lending institutions and property management companies throughout San Diego</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <svg className="w-8 h-8 text-orange-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Fast & Reliable Turnaround</h3>
                      <p className="text-gray-600">Same-day and next-day service available with consistent deadline compliance for urgent situations</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly Disposal Practices</h3>
                      <p className="text-gray-600">Responsible disposal with donation and recycling programs to minimize environmental impact</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m5 0h2a2 2 0 002-2V7a2 2 0 00-2-2h-2m-5 4h5"></path>
                    </svg>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Documentation</h3>
                      <p className="text-gray-600">Detailed invoices, photo documentation, and disposal certificates provided for all institutional requirements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Foreclosure & Eviction Cleanout Service Areas
              </h2>
              <p className="text-xl text-gray-600 mb-8 text-center">
                We provide professional foreclosure and eviction cleanout services throughout San Diego County, serving property managers, banks, landlords, and families across all neighborhoods.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
                {[
                  "Downtown San Diego", "North Park", "Hillcrest", "La Jolla", "Pacific Beach", "Mission Valley",
                  "Chula Vista", "Clairemont", "Point Loma", "University City", "Del Mar", "Encinitas",
                  "El Cajon", "La Mesa", "Santee", "Poway", "Escondido", "Oceanside"
                ].map((area, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg hover:bg-blue-100 transition-colors">
                    <span className="text-sm font-semibold text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                Frequently Asked Questions
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    How quickly can you clear a foreclosure or eviction property?
                  </h3>
                  <p className="text-gray-600">
                    We offer same-day service for urgent situations and can typically complete most residential cleanouts within 24-48 hours. For larger properties or complex situations, we provide detailed timelines during our initial consultation to ensure all deadlines are met.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Can you handle large or multi-unit properties?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we have the equipment and crew capacity to handle everything from single-family homes to large apartment complexes and commercial properties. We scale our team size and resources based on the scope of each project to ensure efficient completion.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Is your foreclosure cleanout service discreet?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. Our teams work with the utmost professionalism and respect for all parties involved. We can provide unmarked vehicles when requested and ensure all work is conducted discreetly to maintain neighborhood relations and protect privacy.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Do you provide documentation for banks and landlords?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we provide comprehensive documentation including detailed invoices, before and after photos, itemized removal lists, and disposal certificates. We understand the documentation requirements of financial institutions and property management companies and ensure all paperwork meets their standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Call Today for San Diego Foreclosure & Eviction Cleanouts
            </h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto">
              When you need professional, discreet foreclosure and eviction cleanout services in San Diego, trust our experienced team to handle the job with compassion and efficiency. Fast turnaround, transparent pricing, and complete discretion guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+16197500114"
                className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 rounded-lg font-bold text-2xl transition-colors"
              >
                📞 CALL (619) 750-0114
              </a>
              <a
                href="mailto:severincleaners@gmail.com"
                className="bg-white hover:bg-gray-100 text-blue-700 px-12 py-6 rounded-lg font-bold text-2xl transition-colors"
              >
                📧 Email for Quote
              </a>
            </div>
            <p className="text-blue-200 mt-6 text-lg">
              Available 7 Days a Week • Same-Day Service • Licensed & Insured • Completely Discreet
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

/* SEO Metadata:
Meta Title: "Foreclosure & Eviction Cleanout Services San Diego - Fast & Discreet"
Meta Description: "Professional foreclosure & eviction cleanout services in San Diego. Discreet, fast turnaround for banks, landlords & property managers. Call (619) 750-0114!"
Suggested URL: /foreclosure-eviction-cleanout-san-diego

Word Count: ~850 words
Focus Keywords:
- foreclosure cleanout San Diego
- eviction cleanout services
- REO property cleanup
- tenant cleanout San Diego
- property management cleanouts
- bank foreclosure cleanup
*/