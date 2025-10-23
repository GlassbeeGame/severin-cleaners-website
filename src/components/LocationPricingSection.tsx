interface LocationPricingSectionProps {
  locationName: string;
  contextParagraph?: string; // Optional custom context about pricing for this location
}

export default function LocationPricingSection({
  locationName,
  contextParagraph
}: LocationPricingSectionProps) {
  const defaultContext = `All pricing is transparent and based on volume—no hidden fees. Whether you're in ${locationName} for a single-item pickup or a full property cleanout, you'll know the exact cost before we begin.`;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transparent {locationName} Junk Removal Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {contextParagraph || defaultContext}
            </p>
          </div>

          <div className="mb-12">
            {/* 4 GRADIENT CARDS - Top Pricing Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Single Item - $100 */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white text-center">
                <div className="text-4xl font-bold mb-2">$100</div>
                <div className="text-blue-100 mb-4">Single Item</div>
                <div className="font-bold text-lg mb-2">Quick Pickup</div>
                <div className="text-blue-100 text-sm">
                  One large item, couch, appliance, mattress
                </div>
              </div>

              {/* 1/4 Load - $249 */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white text-center">
                <div className="text-4xl font-bold mb-2">$249</div>
                <div className="text-green-100 mb-4">1/4 Load (3 cu yd)</div>
                <div className="font-bold text-lg mb-2">Small Cleanout</div>
                <div className="text-green-100 text-sm">
                  Bedroom furniture, small shed, partial garage
                </div>
              </div>

              {/* 1/2 Load - $349 */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg p-6 text-white text-center">
                <div className="text-4xl font-bold mb-2">$349</div>
                <div className="text-orange-100 mb-4">1/2 Load (6 cu yd)</div>
                <div className="font-bold text-lg mb-2">Medium Cleanout</div>
                <div className="text-orange-100 text-sm">
                  Full garage, storage unit, attic cleanout
                </div>
              </div>

              {/* Full Load - $495 */}
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white text-center">
                <div className="text-4xl font-bold mb-2">$495</div>
                <div className="text-purple-100 mb-4">Full Load (12 cu yd)</div>
                <div className="font-bold text-lg mb-2">Large Cleanout</div>
                <div className="text-purple-100 text-sm">
                  Whole house, estate, multiple rooms
                </div>
              </div>
            </div>

            {/* ADDITIONAL SIZES */}
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

            {/* WHAT'S INCLUDED */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What's Included in Every Price:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  All labor and loading
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Transportation and hauling
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Eco-friendly disposal fees
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Donation coordination
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Recycling services
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Same-day service available
                </li>
              </ul>
            </div>
          </div>

          {/* CTA + LINK TO FULL PRICING */}
          <div className="text-center">
            <a
              href="tel:6197500114"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 mb-4"
            >
              📞 Get Your Free {locationName} Quote - Call (619) 750-0114
            </a>
            <p className="text-gray-600">
              <a href="/junk-removal-cost-san-diego" className="text-blue-600 hover:text-blue-700 font-semibold">
                → See Complete Pricing Guide & All Load Sizes
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
