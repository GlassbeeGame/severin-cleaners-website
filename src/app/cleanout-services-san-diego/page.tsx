import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cleanout Services San Diego - Fast, Affordable & Reliable",
  description: "Professional cleanout services in San Diego. Same-day garage, attic, house & apartment cleanouts. Free quotes, licensed & insured. Call (619) 750-0114!",
  keywords: "cleanout services San Diego, garage cleanouts, attic cleanouts, house cleanouts, apartment cleanouts, storage unit cleanouts, same day cleanouts, move out cleanouts",
  openGraph: {
    title: "Cleanout Services San Diego - Fast, Affordable & Reliable",
    description: "Professional cleanout services in San Diego. Same-day garage, attic, house & apartment cleanouts. Free quotes, licensed & insured.",
    url: 'https://severincleaners.com/cleanout-services-san-diego',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cleanout Services San Diego - Fast, Affordable & Reliable",
    description: "Professional cleanout services in San Diego. Same-day garage, attic, house & apartment cleanouts. Free quotes, licensed & insured.",
    images: ['https://severincleaners.com/og-image.jpg'],
  },
};

export default function CleanoutServicesPage() {
  const cleanoutTypes = [
    {
      title: "Garage & Attic Cleanouts",
      time: "2-3 hours",
      priceRange: "$200-$400",
      description: "Professional decluttering with heavy lifting and careful sorting of stored items.",
      items: ["Old furniture", "Storage boxes", "Tools & equipment", "Seasonal decorations", "Sports equipment"],
      icon: "🏠"
    },
    {
      title: "Storage Unit Cleanouts",
      time: "1-2 hours",
      priceRange: "$150-$350",
      description: "Complete unit clear-out with sorting for donation and responsible disposal.",
      items: ["Storage boxes", "Furniture pieces", "Appliances", "Electronics", "Personal belongings"],
      icon: "📦"
    },
    {
      title: "Apartment & Condo Cleanouts",
      time: "2-4 hours",
      priceRange: "$250-$450",
      description: "Multi-story hauling with expertise in tight-space removals and building navigation.",
      items: ["Living room furniture", "Mattresses & beds", "Kitchen appliances", "Personal belongings", "Electronics"],
      icon: "🏠"
    },
    {
      title: "Whole House Cleanouts",
      time: "Full day+",
      priceRange: "$500-$1,200+",
      description: "Complete estate-level clearing with room-by-room systematic approach.",
      items: ["All furniture", "Major appliances", "Personal belongings", "Household goods", "Yard debris"],
      icon: "🏡"
    },
    {
      title: "Basement Cleanouts",
      time: "2-3 hours",
      priceRange: "$200-$400",
      description: "Specialized service for often cluttered or damp basement environments.",
      items: ["Storage containers", "Old furniture", "Exercise equipment", "Tools & hardware", "Seasonal items"],
      icon: "⬇️"
    },
    {
      title: "Move-out Cleanouts",
      time: "2-5 hours",
      priceRange: "$300-$600",
      description: "Rapid turnaround service to meet moving deadlines and lease requirements.",
      items: ["Leftover furniture", "Unwanted appliances", "Moving boxes", "Personal items", "General debris"],
      icon: "📦"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl font-bold mb-6">
                Cleanout Services San Diego
                <span className="block text-blue-300 mt-2">Fast, Affordable & Reliable</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Professional cleanout services throughout San Diego with same-day availability. From garage cleanouts to whole house clearing, we handle all types of cleanouts with transparent pricing and eco-friendly disposal. Trusted by homeowners, property managers, and real estate professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  📞 Call (619) 750-0114 - Free Quote
                </a>
                <a
                  href="#cleanout-types"
                  className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  View Cleanout Types
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Cleanouts Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">Same Day</div>
                  <div className="text-gray-600">Service Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                  <div className="text-gray-600">Licensed & Insured</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">5-Star</div>
                  <div className="text-gray-600">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Cleanouts */}
        <section id="cleanout-types" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Types of Cleanout Services We Provide
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center">
                From small storage units to complete estate cleanouts, we handle every type of cleanout with professional service and transparent pricing.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cleanoutTypes.map((cleanout, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 h-full flex flex-col">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-3">{cleanout.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{cleanout.title}</h3>
                    </div>

                    <div className="flex-grow">
                      <p className="text-gray-600 mb-4 text-sm">{cleanout.description}</p>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-blue-50 p-3 rounded-lg text-center">
                          <div className="text-sm font-semibold text-blue-700">Time Required</div>
                          <div className="text-blue-600">{cleanout.time}</div>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <div className="text-sm font-semibold text-green-700">Price Range</div>
                          <div className="text-green-600">{cleanout.priceRange}</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Common Items Removed:</h4>
                        <ul className="space-y-1">
                          {cleanout.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-xs text-gray-600 flex items-center">
                              <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors mt-auto">
                      Get Free Quote
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Gallery Placeholder */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Results That Speak for Themselves
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                See the dramatic difference our professional cleanout crews make. From cluttered chaos to clean, organized spaces ready for their next chapter.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1v3M4 7h16"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Before: Cluttered Chaos</h3>
                    <p className="text-gray-600 text-sm">Overwhelming accumulation of items making spaces unusable and stressful</p>
                  </div>

                  <div>
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">During: Professional Service</h3>
                    <p className="text-gray-600 text-sm">Systematic sorting, careful handling, and efficient removal by trained crews</p>
                  </div>

                  <div>
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">After: Clean & Organized</h3>
                    <p className="text-gray-600 text-sm">Spacious, clean areas ready for new purposes or occupants</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Same-Day Availability */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Same-Day Cleanout Availability
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center">
                When you need emergency cleanout services, we're ready to respond quickly with professional crews and all necessary equipment.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Emergency Response</h3>
                  <p className="text-gray-600 text-sm">Same-day service available for urgent situations and tight deadlines</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a4 4 0 118 0v4m-4 12v-4"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Evening & Weekend</h3>
                  <p className="text-gray-600 text-sm">Flexible scheduling including evenings and weekends when needed</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Immediate Quotes</h3>
                  <p className="text-gray-600 text-sm">Fast phone estimates and on-site assessments for larger projects</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value-Added Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Value-Added Cleanout Services
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-8 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Donation Handling</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    We partner with local San Diego charities to ensure items in good condition find new homes instead of landfills. Our crews sort carefully to maximize donations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Local charity partnerships
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Tax-deductible receipt coordination
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Furniture, clothing, and household goods
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-8 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Deep Cleaning Add-Ons</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    After junk removal, we offer optional deep cleaning services to leave your space move-in ready or perfectly prepared for its next use.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Surface wiping and sanitization
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Floor sweeping and mopping
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Dust removal and basic sanitization
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Property Manager Partnerships */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Trusted by Property Managers & Real Estate Professionals
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                We're the reliable cleanout provider for tenant turnovers, evictions, staging preparation, and realtor partnerships throughout San Diego County.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Tenant Turnovers</h3>
                  <p className="text-gray-600 text-sm">Fast cleanouts to minimize vacancy periods and maximize rental income</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.82 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Eviction Support</h3>
                  <p className="text-gray-600 text-sm">Discreet, professional cleanouts following eviction proceedings</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Staging Prep</h3>
                  <p className="text-gray-600 text-sm">Property preparation for faster sales and improved showing results</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Realtor Partners</h3>
                  <p className="text-gray-600 text-sm">Trusted cleanout service for real estate professionals and their clients</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Why Choose Severin Cleaners for San Diego Cleanouts?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <svg className="w-8 h-8 text-blue-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed & Insured Protection</h3>
                      <p className="text-gray-600">Fully licensed San Diego business with comprehensive insurance coverage for your peace of mind</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg className="w-8 h-8 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                      <p className="text-gray-600">Upfront, honest pricing with no hidden fees or surprise charges after the work is done</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly Disposal</h3>
                      <p className="text-gray-600">Responsible disposal with donation programs and recycling to minimize environmental impact</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <svg className="w-8 h-8 text-orange-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted Across San Diego</h3>
                      <p className="text-gray-600">Local family business serving all San Diego neighborhoods with consistent, reliable service</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg className="w-8 h-8 text-purple-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day Availability</h3>
                      <p className="text-gray-600">Emergency cleanout service available when you need it most, including evenings and weekends</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg className="w-8 h-8 text-yellow-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                    </svg>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">5-Star Service Record</h3>
                      <p className="text-gray-600">Consistently high customer satisfaction with professional crews and quality results</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Cleanout Service Areas Throughout San Diego
              </h2>
              <p className="text-xl text-gray-600 mb-8 text-center">
                Professional cleanout services available across all San Diego County neighborhoods and communities.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
                {[
                  "Downtown San Diego", "North Park", "Hillcrest", "La Jolla", "Pacific Beach", "Mission Valley",
                  "Chula Vista", "Clairemont", "Point Loma", "University City", "Del Mar", "Encinitas",
                  "El Cajon", "La Mesa", "Santee", "Poway", "Escondido", "Oceanside",
                  "National City", "Imperial Beach", "Coronado", "Lemon Grove", "Spring Valley", "Bonita"
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
                Frequently Asked Questions About Cleanout Services
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    How long does a typical cleanout take?
                  </h3>
                  <p className="text-gray-600">
                    Cleanout duration depends on the size and complexity of the job. Small storage units or garages typically take 1-3 hours, while whole house cleanouts can take a full day or more. We provide accurate time estimates during our free consultation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Do you handle heavy or bulky items during cleanouts?
                  </h3>
                  <p className="text-gray-600">
                    Yes, our crews are equipped and trained to handle all types of items including heavy furniture, appliances, pianos, hot tubs, and exercise equipment. We bring all necessary equipment for safe removal and transport.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    How much does a typical cleanout cost in San Diego?
                  </h3>
                  <p className="text-gray-600">
                    Cleanout costs vary based on volume, type of items, and complexity. Small cleanouts start around $150-$200, while large whole-house projects can range from $500-$1,200+. We provide free, detailed estimates with transparent pricing.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Do you provide same-day cleanout service?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we offer same-day cleanout service for urgent situations. Availability depends on crew schedules and the scope of work, but we can often accommodate emergency requests within hours of your call.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Can you coordinate with property managers and landlords?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. We work closely with property managers, landlords, and real estate professionals throughout San Diego. We can coordinate timing, provide documentation, and work within your specific requirements and schedules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready for Professional Cleanout Services?
            </h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto">
              Get your free cleanout quote today! Fast, affordable, and reliable cleanout services throughout San Diego with same-day availability and transparent pricing.
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
              Licensed & Insured • Same-Day Service • Eco-Friendly Disposal • Trusted Across San Diego
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

/* SEO Metadata:
Meta Title: "Cleanout Services San Diego - Fast, Affordable & Reliable"
Meta Description: "Professional cleanout services in San Diego. Same-day garage, attic, house & apartment cleanouts. Free quotes, licensed & insured. Call (619) 750-0114!"
Suggested URL: /cleanout-services-san-diego

Word Count: ~1,150 words
Target Keywords:
- cleanout services San Diego
- garage cleanouts
- attic cleanouts
- house cleanouts
- apartment cleanouts
- storage unit cleanouts
- same day cleanouts
- move out cleanouts
*/