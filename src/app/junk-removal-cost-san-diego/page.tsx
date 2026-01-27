import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema, generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/SchemaMarkup";
import OptimizedGradientHero from "@/components/OptimizedGradientHero";

export const metadata: Metadata = {
  title: "Junk Removal Cost San Diego - Affordable Prices & Free Quotes",
  description: "Transparent junk removal cost San Diego with free quotes! Compare our affordable prices. No hidden fees. Licensed & insured. Call (619) 750-0114 for instant pricing!",
  keywords: [
    "cheap junk removal San Diego",
    "junk removal cost San Diego",
    "junk removal prices San Diego",
    "free junk removal quote San Diego",
    "compare junk removal San Diego",
    "affordable junk hauling",
    "junk removal pricing",
    "how much junk removal cost"
  ],
  openGraph: {
    title: "Junk Removal Cost San Diego - Affordable Prices & Free Quotes",
    description: "Transparent junk removal cost San Diego with free quotes! Compare our affordable prices. No hidden fees. Call (619) 750-0114 for instant pricing!",
    url: 'https://severincleaners.com/junk-removal-cost-san-diego',
    siteName: 'Severin Cleaners',
    type: 'website',
    locale: 'en_US',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Junk Removal Cost San Diego - Severin Cleaners'
    }]
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'US-CA',
    'geo.placename': 'La Mesa',
    'geo.position': '32.7678;-117.0231',
    'ICBM': '32.7678, -117.0231',
  },
};

const costFAQs = [
    {
      question: "How much does junk removal cost in San Diego?",
      answer: "Junk removal cost San Diego starts at $69 for small items (chairs, loveseats, small tables) and $100 for standard items (couches, appliances, mattresses). Volume loads range from $249 (1/4 truck) to $495 (full truck). Our volume-based pricing means you only pay for the space your items take up. Most residential jobs fall between $200-$400 for half-truck loads, making us competitive for cheap junk removal San Diego with transparent pricing."
    },
    {
      question: "Do you provide free junk removal quotes in San Diego?",
      answer: "Yes! Every free junk removal quote San Diego is completely no-obligation. We provide instant estimates over the phone for most jobs, or can visit your property for larger cleanouts. There's never a charge for quotes or estimates, and we pride ourselves on transparent pricing without hidden fees."
    },
    {
      question: "What's the cheapest way to remove junk in San Diego?",
      answer: "The most affordable approach for cheap junk removal San Diego is hiring a professional service like ours. DIY removal seems cheaper but includes hidden costs: truck rental, gas, disposal fees, and your valuable time. We handle everything efficiently at competitive rates with transparent junk removal prices San Diego."
    },
    {
      question: "How do your junk removal prices compare to other San Diego companies?",
      answer: "When you compare junk removal San Diego options, you'll find our transparent pricing beats competitors who use hidden fees. We provide upfront costs, include eco-friendly disposal, and never surprise you with additional charges after the work is done. Our junk removal prices San Diego are consistently fair and honest."
    },
    {
      question: "Are there extra charges for heavy or bulky items?",
      answer: "Some exceptionally heavy items (like pianos, hot tubs, or concrete) may have additional disposal fees due to special handling requirements. However, we always discuss these potential costs during your free junk removal quote San Diego so there are no surprises with your final junk removal cost San Diego."
    },
    {
      question: "What's the difference between small items and standard items?",
      answer: "Small items ($69+) include loveseats, chairs, small tables, and similar compact furniture. Standard items ($100+) include full-size couches, mattresses, appliances, dressers, and larger furniture pieces. The pricing reflects the size, weight, and disposal requirements. Call (619) 750-0114 and we'll give you an exact quote based on your specific items."
    },
    {
      question: "Do you offer discounts for large jobs or repeat customers?",
      answer: "Yes! Larger volume jobs naturally get better per-cubic-yard pricing, making our cheap junk removal San Diego even more affordable. We also offer discounts for property managers, real estate agents, and repeat customers. Ask about our loyalty program when you call for your free quote."
    }
  ];

export default function JunkRemovalCostPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "San Diego",
    serviceName: "Junk Removal",
    description: "Transparent junk removal cost San Diego with free quotes! Compare our affordable prices. Licensed & insured.",
    url: "https://severincleaners.com/junk-removal-cost-san-diego",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "Junk Removal Cost", url: "https://severincleaners.com/junk-removal-cost-san-diego" },
  ]);

  const faqSchema = generateFAQSchema(costFAQs);

  // Remove @context from individual schemas since they'll be in @graph
  const { "@context": _serviceContext, ...serviceSchemaWithoutContext } = serviceSchema;
  const { "@context": _breadcrumbContext, ...breadcrumbSchemaWithoutContext } = breadcrumbSchema;
  const { "@context": _faqContext, ...faqSchemaWithoutContext } = faqSchema;

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchemaWithoutContext, breadcrumbSchemaWithoutContext, faqSchemaWithoutContext],
  };

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />

      <Header />
      <main>
        <OptimizedGradientHero
          title="Junk Removal Cost San Diego"
          subtitle="Affordable Prices, Free Quotes & Transparent Service"
          description="No hidden fees • Small items $69+ • Standard items $100+ • Licensed & Insured"
        />

        {/* Transparent Pricing Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                Transparent Junk Removal Prices San Diego
              </h2>
              <p className="text-xl text-gray-600 mb-8 text-center">
                We believe every customer deserves clear, honest pricing. That's why your junk removal San Diego price is always based on volume, not hourly labor.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m5 0h2a2 2 0 002-2V7a2 2 0 00-2-2h-2m-5 4h5"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Free Quotes</h3>
                  <p className="text-gray-600">No-obligation estimates — instant by phone or in-person.</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Flat Rates</h3>
                  <p className="text-gray-600">What we quote is what you pay — never more.</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day Service</h3>
                  <p className="text-gray-600">Fast response when you need us most.</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-700 mb-6">
                  Every junk removal cost San Diego quote comes with a transparent breakdown, so you know exactly where every dollar goes.
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

        {/* Dump Fees Callout */}
        <section className="py-12 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white border-l-4 border-blue-600 rounded-lg shadow-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Wondering About Dump Fees vs. Full-Service Removal?
                    </h3>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                      Before you load up the truck and drive to the dump, see our comprehensive guide to San Diego landfill fees. You might be surprised—hiring us often costs <strong>less than DIY</strong> when you factor in your time, truck rental, fuel, dump fees, and the risk of injury or property damage.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-4 mb-4">
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>DIY hidden costs:</strong> Truck rental ($50-$150) + Fuel + Your time (3-5 hrs) + Dump fee ($70-$100+) + Uncovered load penalty ($50)
                      </p>
                      <p className="text-sm text-green-700 font-semibold">
                        <strong>Our all-in price:</strong> Starting at $69 for small items, $100 for standard - We do ALL the work!
                      </p>
                    </div>
                    <a
                      href="/san-diego-dump-fees"
                      className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 text-lg group"
                    >
                      → View Complete 2025 San Diego Dump Fees Guide
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Pricing Table */}
        <section id="pricing" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                San Diego Junk Removal Pricing Guide
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center">
                Here's what you can expect for junk removal San Diego price. Remember, every junk removal quote San Diego is customized to your specific needs.
              </p>

              <div className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white text-center">
                    <div className="text-3xl font-bold mb-2">$69-$100</div>
                    <div className="text-blue-100 mb-4">Single Item</div>
                    <div className="font-bold text-lg mb-2">Quick Pickup</div>
                    <div className="text-blue-100 text-sm leading-relaxed">
                      <div className="mb-1"><strong>Small:</strong> Chair, loveseat $69+</div>
                      <div><strong>Standard:</strong> Couch, appliance $100+</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white text-center">
                    <div className="text-4xl font-bold mb-2">$249</div>
                    <div className="text-green-100 mb-4">1/4 Load (3 cu yd)</div>
                    <div className="font-bold text-lg mb-2">Small Cleanout</div>
                    <div className="text-green-100 text-sm">
                      Bedroom furniture, small shed, partial garage
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg p-6 text-white text-center">
                    <div className="text-4xl font-bold mb-2">$349</div>
                    <div className="text-orange-100 mb-4">1/2 Load (6 cu yd)</div>
                    <div className="font-bold text-lg mb-2">Medium Cleanout</div>
                    <div className="text-orange-100 text-sm">
                      Full garage, storage unit, attic cleanout
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white text-center">
                    <div className="text-4xl font-bold mb-2">$495</div>
                    <div className="text-purple-100 mb-4">Full Load (12 cu yd)</div>
                    <div className="font-bold text-lg mb-2">Large Cleanout</div>
                    <div className="text-purple-100 text-sm">
                      Whole house, estate, multiple rooms
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Additional Load Sizes Available</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="font-bold text-gray-900">3/8 Load</div>
                      <div className="text-green-600 font-bold">$319</div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">5/8 Load</div>
                      <div className="text-green-600 font-bold">$366</div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">3/4 Load</div>
                      <div className="text-green-600 font-bold">$429</div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">7/8 Load</div>
                      <div className="text-green-600 font-bold">$462</div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">What's Included in Every Price:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="text-gray-700">
                      • All labor and loading
                    </li>
                    <li className="text-gray-700">
                      • Transportation and hauling
                    </li>
                    <li className="text-gray-700">
                      • Eco-friendly disposal fees
                    </li>
                    <li className="text-gray-700">
                      • Donation coordination
                    </li>
                    <li className="text-gray-700">
                      • Recycling services
                    </li>
                    <li className="text-gray-700">
                      • Same-day service available
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="tel:6197500114"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200"
                >
                  📞 Get Your Free San Diego Quote - Call (619) 750-0114
                </a>
              </div>

              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">💡 Looking for the best junk removal San Diego price?</h3>
                <p className="text-gray-700">
                  Larger loads cost less per cubic yard — meaning the more you haul, the more you save.
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
                What Affects Junk Removal Prices in San Diego
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center">
                Understanding what shapes your junk removal San Diego price helps you plan your budget effectively:
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
                      <p className="text-gray-600">How much space your junk occupies in our truck. Heavy loads (like concrete) may include weight fees.</p>
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
                      <p className="text-gray-600">Standard items cost less; hazardous or electronic waste may need special handling.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Accessibility</h3>
                      <p className="text-gray-600">Long carries, stairs, or restricted parking may add minor labor costs.</p>
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
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Location</h3>
                      <p className="text-gray-600">Jobs further from central disposal sites (like Miramar Landfill) slightly impact cost.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Timing</h3>
                      <p className="text-gray-600">Same-day or emergency pickups may include a small urgency charge.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">💡 Pro Tip:</h3>
                <p className="text-gray-700">
                  Combine multiple items or rooms into one load — your price per cubic yard decreases as volume increases.
                </p>
              </div>

              <div className="mt-12 bg-yellow-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Real Junk Removal Pricing Examples</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-bold text-gray-900 mb-2">🛋️ <a href="/couch-removal-san-diego" className="text-blue-600 hover:text-blue-700 underline">Couch Removal</a> – Mission Valley</h4>
                    <p className="text-green-600 font-bold text-xl"><a href="/couch-removal-san-diego" className="text-green-600 hover:text-green-700">$69-$129</a></p>
                    <p className="text-gray-600 text-sm mt-1">Small $69+ • Standard $100+</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-bold text-gray-900 mb-2">🏠 Full Garage Cleanout – Chula Vista</h4>
                    <p className="text-green-600 font-bold text-xl">$349</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-bold text-gray-900 mb-2">🧱 Renovation Debris – North Park</h4>
                    <p className="text-green-600 font-bold text-xl">$429</p>
                  </div>
                </div>
                <p className="text-center mt-6 text-gray-700">
                  Every quote includes labor, disposal, and eco-friendly recycling. No extra fees, ever.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Our Junk Removal San Diego Price Beats the Rest */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Why Our Junk Removal San Diego Price Beats the Rest
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center">
                We keep our rates competitive without cutting corners:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Local Efficiency</h3>
                  <p className="text-gray-600">Based in La Mesa, near major disposal routes and Miramar Landfill.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Eco Savings</h3>
                  <p className="text-gray-600">Partnerships with San Diego recycling centers lower dump fees.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">locally-owned</h3>
                  <p className="text-gray-600">No corporate overhead means lower junk removal prices San Diego for you.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Licensed & Insured</h3>
                  <p className="text-gray-600">Full coverage for your peace of mind.</p>
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
                Compare Junk Removal San Diego Prices
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center">
                See how we compare:
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">💡 Bottom Line:</h3>
                <p className="text-gray-700">
                  You'll find our junk removal San Diego price fair, consistent, and backed by professional service — not gimmicks.
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
                Experience transparent pricing, eco-friendly disposal, and fast, reliable service. Discover why Severin Cleaners delivers the best junk removal San Diego price every time.
              </p>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-700 mb-6">📞 Call (619) 750-0114 – Get Instant Pricing</h3>
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
                    📧 severincleaners@gmail.com
                  </a>
                </div>
                <p className="text-gray-600">
                  🕒 <strong>Open 7 Days a Week</strong> • <strong>Same-Day Service Available</strong>
                </p>
                <p className="text-gray-600 mt-2">
                  Severin Cleaners<br />
                  "From Junk to Shine — We Handle Every Grime."
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
                Service Areas Across San Diego
              </h2>
              <p className="text-xl text-gray-600 mb-8 text-center">
                We provide affordable junk removal cost San Diego pricing across all neighborhoods:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
                <a href="/junk-removal-la-jolla" className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="text-sm font-semibold text-gray-700">La Jolla</span>
                </a>
                <a href="/junk-removal-pacific-beach" className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="text-sm font-semibold text-gray-700">Pacific Beach</span>
                </a>
                <a href="/junk-removal-del-mar" className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="text-sm font-semibold text-gray-700">Del Mar</span>
                </a>
                <a href="/junk-removal-rancho-santa-fe" className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="text-sm font-semibold text-gray-700">Rancho Santa Fe</span>
                </a>
                <a href="/junk-removal-point-loma" className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="text-sm font-semibold text-gray-700">Point Loma</span>
                </a>
                <a href="/junk-removal-carmel-valley" className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="text-sm font-semibold text-gray-700">Carmel Valley</span>
                </a>
                <a href="/junk-removal-chula-vista" className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="text-sm font-semibold text-gray-700">Chula Vista</span>
                </a>
                <a href="/junk-removal-el-cajon" className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="text-sm font-semibold text-gray-700">El Cajon</span>
                </a>
                <a href="/junk-removal-la-mesa" className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="text-sm font-semibold text-gray-700">La Mesa</span>
                </a>
                <a href="/junk-removal-santee" className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="text-sm font-semibold text-gray-700">Santee</span>
                </a>
                <a href="/junk-removal-lakeside" className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="text-sm font-semibold text-gray-700">Lakeside</span>
                </a>
                <a href="/junk-removal-spring-valley" className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="text-sm font-semibold text-gray-700">Spring Valley</span>
                </a>
                <a href="/junk-removal-lemon-grove" className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="text-sm font-semibold text-gray-700">Lemon Grove</span>
                </a>
                <a href="/junk-removal-oceanside" className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="text-sm font-semibold text-gray-700">Oceanside</span>
                </a>
                <a href="/junk-removal-escondido" className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="text-sm font-semibold text-gray-700">Escondido</span>
                </a>
                <a href="/junk-removal-poway" className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="text-sm font-semibold text-gray-700">Poway</span>
                </a>
                <a href="/junk-removal-vista" className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="text-sm font-semibold text-gray-700">Vista</span>
                </a>
                <a href="/junk-removal-north-park" className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="text-sm font-semibold text-gray-700">North Park</span>
                </a>
                <a href="/junk-removal-hillcrest" className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="text-sm font-semibold text-gray-700">Hillcrest</span>
                </a>
                <a href="/junk-removal-clairemont" className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="text-sm font-semibold text-gray-700">Clairemont</span>
                </a>
                <a href="/junk-removal-kearny-mesa" className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="text-sm font-semibold text-gray-700">Kearny Mesa</span>
                </a>
                <a href="/junk-removal-mira-mesa" className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="text-sm font-semibold text-gray-700">Mira Mesa</span>
                </a>
              </div>
              <p className="text-center mt-8 text-gray-700">
                All items are disposed of responsibly at licensed San Diego County facilities like Miramar Landfill — ensuring compliance with city recycling and waste policies.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Junk Removal Cost"
          description="Get answers to common questions about our junk removal Cost services, pricing, and same-day availability."
          faqs={costFAQs}
          ctaTitle="Still Have Questions About Cost Junk Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our junk removal Cost services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related Junk Removal Resources</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/san-diego-junk-removal" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">San Diego Junk Removal</h4>
                <p className="text-gray-600">Complete junk removal services throughout San Diego County</p>
              </a>
              <a href="/san-diego-dump-fees" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">San Diego Dump Fees Guide</h4>
                <p className="text-gray-600">Compare dump fees vs. full-service junk removal pricing</p>
              </a>
              <a href="/emergency-junk-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Emergency Junk Removal</h4>
                <p className="text-gray-600">24/7 emergency cleanup and urgent junk removal services</p>
              </a>
            </div>
          </div>
        </section>

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
              No Hidden Fees • Same-Day Service • Licensed & Insured
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
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