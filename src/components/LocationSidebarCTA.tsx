import Link from 'next/link';

interface LocationSidebarCTAProps {
  /** Current location name (e.g., "Pacific Beach") */
  locationName: string;
  /** Array of nearby/similar location objects with name and slug */
  nearbyLocations: Array<{ name: string; slug: string }>;
}

export default function LocationSidebarCTA({
  locationName,
  nearbyLocations,
}: LocationSidebarCTAProps) {
  return (
    <aside className="lg:sticky lg:top-24 space-y-6">
      {/* Main CTA Card */}
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-4 px-6">
          <h3 className="text-xl font-bold">GET IMMEDIATE HELP</h3>
        </div>

        {/* CTA Buttons */}
        <div className="p-6 space-y-3">
          <a
            href="tel:6197500114"
            className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-4 px-6 rounded-lg font-bold text-lg transition-colors duration-200"
          >
            📞 CALL NOW: (619) 750-0114
          </a>

          <Link
            href="/contact"
            className="block w-full bg-white hover:bg-gray-50 text-orange-600 text-center py-3 px-6 rounded-lg font-semibold border-2 border-orange-500 transition-colors duration-200"
          >
            Get Free Quote Online
          </Link>

          <p className="text-center text-sm text-gray-600 mt-2">
            ⚡ Same-Day Service Available
          </p>
        </div>

        {/* Services Checklist */}
        <div className="px-6 pb-6">
          <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">
            What We Remove
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              <span>Furniture & Mattresses</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              <span>Appliances & Electronics</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              <span>Estate & Garage Cleanouts</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              <span>Construction Debris</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              <span>Hot Tubs & Large Items</span>
            </li>
          </ul>
        </div>

        {/* Nearby Locations */}
        <div className="bg-gray-50 px-6 py-5 border-t border-gray-200">
          <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">
            Nearby Areas We Serve
          </h4>
          <ul className="space-y-2 text-sm mb-4">
            {nearbyLocations.map((location) => (
              <li key={location.slug}>
                <Link
                  href={`/junk-removal-${location.slug}`}
                  className="text-blue-600 hover:text-blue-800 hover:underline flex items-center"
                >
                  <span className="text-blue-400 mr-2">→</span>
                  {location.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/areas-we-serve"
            className="block w-full text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold text-sm transition-colors duration-200"
          >
            See All Locations Served
          </Link>
        </div>

        {/* Trust Badge */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-2 text-xs text-gray-700">
            <span className="font-semibold">✓ Licensed & Insured</span>
            <span>•</span>
            <span className="font-semibold">✓ Eco-Friendly</span>
          </div>
        </div>
      </div>

      {/* Quick Stats Card */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600">200+</div>
            <div className="text-xs text-gray-600 mt-1">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">Same-Day</div>
            <div className="text-xs text-gray-600 mt-1">Service Available</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
