import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "./FAQSection";

export const metadata: Metadata = {
  title: "Junk Removal Cost San Diego - Affordable Prices & Free Quotes",
  description: "Transparent junk removal cost San Diego with free quotes! Compare our affordable prices. No hidden fees. Licensed & insured. Call (619) 750-0114 for instant pricing!",
  keywords: "cheap junk removal San Diego, junk removal cost San Diego, junk removal prices San Diego, free junk removal quote San Diego, compare junk removal San Diego, affordable junk hauling",
  openGraph: {
    title: "Junk Removal Cost San Diego - Affordable Prices & Free Quotes",
    description: "Transparent junk removal cost San Diego with free quotes! Compare our affordable prices. No hidden fees. Call (619) 750-0114 for instant pricing!",
    url: 'https://severincleaners.com/junk-removal-cost-san-diego',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Junk Removal Cost San Diego - Affordable Prices & Free Quotes",
    description: "Transparent junk removal cost San Diego with free quotes! Compare our affordable prices. Licensed & insured. Call (619) 750-0114!",
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: "https://severincleaners.com/junk-removal-cost-san-diego",
  },
};

export default function JunkRemovalCostPage() {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl font-bold mb-6">
                Junk Removal Cost San Diego
                <span className="block text-blue-300 mt-2">Affordable Prices & Free Quotes</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Looking for cheap junk removal San Diego without compromising quality? Get transparent junk removal prices San Diego with no hidden fees. We provide upfront, honest pricing and free junk removal quote San Diego for all residential and commercial cleanouts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  📞 Call (619) 750-0114 - Free Quote
                </a>
                <a
                  href="#pricing"
                  className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  View Pricing Guide
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Transparent Pricing Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                Transparent Junk Removal Prices in San Diego
              </h2>
              <p className="text-xl text-gray-600 mb-8 text-center">
                We believe in honest, upfront pricing for junk removal cost San Diego. No surprise fees, no bait-and-switch tactics. Every free junk removal quote San Diego includes a detailed breakdown so you know exactly what you're paying for before we start.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No Hidden Fees</h3>
                  <p className="text-gray-600">What we quote is what you pay - no surprise charges or last-minute add-ons</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m5 0h2a2 2 0 002-2V7a2 2 0 00-2-2h-2m-5 4h5"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Free Estimates</h3>
                  <p className="text-gray-600">Every quote is completely free with no obligation - call for instant pricing</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Volume-Based Pricing</h3>
                  <p className="text-gray-600">Pay only for the space your junk takes up in our truck - fair and simple</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-700 mb-6">
                  Our junk removal prices San Diego are based on the volume of items removed, not hourly rates. This means you get affordable, predictable pricing every time.
                </p>
                <a
                  href="tel:+16197500114"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  Get Your Free Quote Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Pricing Table */}
        <section id="pricing" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Sample Junk Removal Pricing Guide
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center">
                Here's what you can expect for cheap junk removal San Diego pricing. Remember, every free junk removal quote San Diego is customized to your specific needs.
              </p>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-blue-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-bold">Load Size</th>
                        <th className="px-6 py-4 text-left font-bold">Average Price Range</th>
                        <th className="px-6 py-4 text-left font-bold">Typical Jobs</th>
                        <th className="px-6 py-4 text-left font-bold">Items Included</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">Single Item Pickup</td>
                        <td className="px-6 py-4 text-green-600 font-bold">Starting at $175</td>
                        <td className="px-6 py-4 text-gray-600">Quick pickups</td>
                        <td className="px-6 py-4 text-gray-600">Couch, mattress, refrigerator, desk</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">1/4 Trailer Load</td>
                        <td className="px-6 py-4 text-green-600 font-bold">$249</td>
                        <td className="px-6 py-4 text-gray-600">Small cleanouts</td>
                        <td className="px-6 py-4 text-gray-600">Bedroom furniture, small appliances</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">3/8 Trailer Load</td>
                        <td className="px-6 py-4 text-green-600 font-bold">$319</td>
                        <td className="px-6 py-4 text-gray-600">Medium cleanouts</td>
                        <td className="px-6 py-4 text-gray-600">Multiple furniture pieces, boxes</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">1/2 Trailer Load</td>
                        <td className="px-6 py-4 text-green-600 font-bold">$349</td>
                        <td className="px-6 py-4 text-gray-600">Garage cleanouts</td>
                        <td className="px-6 py-4 text-gray-600">Moving leftovers, garage items, yard waste</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">5/8 Trailer Load</td>
                        <td className="px-6 py-4 text-green-600 font-bold">$366</td>
                        <td className="px-6 py-4 text-gray-600">Large cleanouts</td>
                        <td className="px-6 py-4 text-gray-600">Room contents, multiple appliances</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">3/4 Trailer Load</td>
                        <td className="px-6 py-4 text-green-600 font-bold">$429</td>
                        <td className="px-6 py-4 text-gray-600">Full room cleanouts</td>
                        <td className="px-6 py-4 text-gray-600">Living room sets, multiple appliances</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">7/8 Trailer Load</td>
                        <td className="px-6 py-4 text-green-600 font-bold">$462</td>
                        <td className="px-6 py-4 text-gray-600">Near-full cleanouts</td>
                        <td className="px-6 py-4 text-gray-600">Multi-room contents, large volumes</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">Full Trailer Load</td>
                        <td className="px-6 py-4 text-green-600 font-bold">$495</td>
                        <td className="px-6 py-4 text-gray-600">Complete cleanouts</td>
                        <td className="px-6 py-4 text-gray-600">Estate cleanouts, renovation debris</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">💡 Money-Saving Tip</h3>
                <p className="text-gray-700">
                  Combine multiple items or rooms for better value! The more volume you have, the better price per cubic yard you'll receive for your junk removal cost San Diego.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Affects Pricing */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                What Affects Junk Removal Prices in San Diego?
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center">
                Understanding these factors helps you get the most accurate free junk removal quote San Diego and plan your budget effectively.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Volume & Weight</h3>
                      <p className="text-gray-600">The primary factor - how much space your items take up in our truck. Heavier items may have additional disposal fees.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Type of Materials</h3>
                      <p className="text-gray-600">Regular household items vs. hazardous materials (paint, chemicals) or electronics that require special disposal.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Accessibility & Complexity</h3>
                      <p className="text-gray-600">Stairs, long carries, or difficult access points may affect pricing. Ground floor pickups are most affordable.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Location in San Diego</h3>
                      <p className="text-gray-600">Distance from disposal facilities and accessibility of your neighborhood can slightly impact pricing.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Timing & Urgency</h3>
                      <p className="text-gray-600">Same-day or emergency service may include a small urgency fee, but we always discuss this upfront.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Disposal & Recycling Fees</h3>
                      <p className="text-gray-600">We prioritize eco-friendly disposal and recycling, which is included in our transparent pricing.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-yellow-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Real Pricing Examples</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-bold text-gray-900 mb-2">🛋️ Single Couch Removal</h4>
                    <p className="text-gray-600 mb-2">Ground floor pickup in Mission Valley</p>
                    <p className="text-green-600 font-bold text-xl">Starting at $175</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-bold text-gray-900 mb-2">🏠 Full Garage Cleanout</h4>
                    <p className="text-gray-600 mb-2">Mixed items, 1/2 trailer load in Chula Vista</p>
                    <p className="text-green-600 font-bold text-xl">$349</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Cheap Doesn't Mean Low Quality */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Why Cheap Junk Removal San Diego Doesn't Mean Low Quality
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center">
                When you compare junk removal San Diego options, you'll find we offer the best value by combining affordable rates with professional service and eco-friendly practices.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Efficient Operations</h3>
                  <p className="text-gray-600">Local crews and optimized routes keep our costs low, savings we pass on to you</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Eco-Friendly Focus</h3>
                  <p className="text-gray-600">Donation partnerships and recycling programs reduce disposal costs and help the environment</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Family-Owned Business</h3>
                  <p className="text-gray-600">No corporate overhead means better prices and more personalized service for you</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Licensed & Insured</h3>
                  <p className="text-gray-600">Full licensing and comprehensive insurance protect you and your property</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">No Hidden Costs</h3>
                  <p className="text-gray-600">Transparent pricing means no surprise fees that other companies add later</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5-Star Service</h3>
                  <p className="text-gray-600">Professional crews deliver exceptional service every time at affordable rates</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compare Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Compare Junk Removal San Diego - How We Stack Up
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center">
                When you compare junk removal San Diego companies, the differences become clear. We combine competitive pricing with superior service and transparency.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold">Feature</th>
                      <th className="px-6 py-4 text-center font-bold">Severin Cleaners</th>
                      <th className="px-6 py-4 text-center font-bold">Other Companies</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-semibold text-gray-900">Free Quotes</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-green-600 font-bold">✓ Always Free</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-red-600">❌ Often Charge Fees</span>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">Transparent Pricing</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-green-600 font-bold">✓ Upfront & Clear</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-red-600">❌ Hidden Fees Common</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-gray-900">Same-Day Service</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-green-600 font-bold">✓ Available Daily</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-yellow-600">⚠️ Limited Availability</span>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">Eco-Friendly Disposal</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-green-600 font-bold">✓ Always Prioritized</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-red-600">❌ Often Ignored</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-gray-900">Licensed & Insured</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-green-600 font-bold">✓ Fully Covered</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-yellow-600">⚠️ Varies by Company</span>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">Local Family Business</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-green-600 font-bold">✓ San Diego Owned</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-red-600">❌ Often Corporate</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 bg-green-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">💡 The Bottom Line</h3>
                <p className="text-gray-700">
                  While others use bait-and-switch tactics with low initial quotes and hidden fees, we provide honest junk removal cost San Diego pricing from the start. No surprises, no regrets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Free Quote CTA */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Get Your Free Junk Removal Quote San Diego
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to discover exactly how affordable our junk removal prices San Diego can be? Get your completely free junk removal quote San Diego with no obligation. We provide instant pricing over the phone or can visit for larger jobs.
              </p>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-700 mb-6">📞 Call Now for Instant Pricing</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <a
                    href="tel:+16197500114"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-bold text-xl transition-colors"
                  >
                    📞 Call (619) 750-0114
                  </a>
                  <a
                    href="mailto:severincleaners@gmail.com"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-bold text-xl transition-colors"
                  >
                    📧 Email for Quote
                  </a>
                </div>
                <p className="text-gray-600">
                  ⏰ <strong>Open 7 Days a Week</strong> • ✅ <strong>Same-Day Service Available</strong> • 💯 <strong>100% Free Quotes</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Affordable Junk Removal Throughout San Diego
              </h2>
              <p className="text-xl text-gray-600 mb-8 text-center">
                We provide consistent, cheap junk removal San Diego pricing across all neighborhoods. No matter where you're located, you'll get the same fair, transparent rates.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
                {[
                  "Downtown", "North Park", "Hillcrest", "La Jolla", "Pacific Beach", "Mission Valley",
                  "Chula Vista", "Clairemont", "Point Loma", "University City", "Del Mar", "Encinitas",
                  "El Cajon", "La Mesa", "Santee", "Poway", "Escondido", "Oceanside"
                ].map((area, index) => (
                  <div key={index} className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                    <span className="text-sm font-semibold text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Call Now for Your Free Junk Removal Quote
            </h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto">
              Experience the best value for junk removal cost San Diego with transparent pricing, professional service, and eco-friendly disposal. Get your free junk removal quote San Diego today - compare junk removal San Diego options and see why we're the smart choice for cheap junk removal San Diego without compromising on quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+16197500114"
                className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 rounded-lg font-bold text-2xl transition-colors"
              >
                📞 GET FREE QUOTE: (619) 750-0114
              </a>
              <a
                href="/services"
                className="bg-white hover:bg-gray-100 text-blue-700 px-12 py-6 rounded-lg font-bold text-2xl transition-colors"
              >
                View All Services
              </a>
            </div>
            <p className="text-blue-200 mt-6 text-lg">
              No Hidden Fees • Same-Day Service • Eco-Friendly • Licensed & Insured
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

/* SEO Metadata:
Meta Title: "Junk Removal Cost San Diego - Affordable Prices & Free Quotes"
Meta Description: "Transparent junk removal cost San Diego with free quotes! Compare our affordable prices. No hidden fees. Licensed & insured. Call (619) 750-0114 for instant pricing!"
Suggested URL: /junk-removal-cost-san-diego

Word Count: ~1,150 words
Target Keywords Coverage:
- cheap junk removal San Diego: 7 times
- junk removal cost San Diego: 8 times
- junk removal prices San Diego: 6 times
- free junk removal quote San Diego: 9 times
- compare junk removal San Diego: 6 times
*/