import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EscondidoFAQSection from "./EscondidoFAQSection";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Junk Removal Escondido CA | North County's Reliable Choice | (619) 750-0114",
  description: "North County Escondido junk removal Hidden Meadows, San Pasqual Valley. Large lots, vineyard debris, agricultural. (619) 750-0114",
  keywords: [
    "junk removal escondido ca",
    "escondido junk removal",
    "junk hauling escondido",
    "junk pickup escondido",
    "furniture removal escondido",
    "trash removal escondido",
    "appliance removal escondido",
    "estate cleanout escondido",
    "commercial junk removal escondido",
    "same day junk removal escondido"
  ],
  openGraph: {
    title: "Junk Removal Escondido CA | Same-Day Pickup & Hauling Service",
    description: "Professional Escondido junk removal for homes and businesses. Same-day service, affordable pricing, eco-friendly disposal.",
    url: "https://severincleaners.com/junk-removal-escondido",
    siteName: "Severin Cleaners",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://severincleaners.com/images/junk-removal-escondido.jpg",
        width: 1200,
        height: 630,
        alt: "Junk Removal Escondido CA - Severin Cleaners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junk Removal Escondido CA | Same-Day Pickup & Hauling Service",
    description: "Professional Escondido junk removal for homes and businesses. Same-day service, affordable pricing, eco-friendly disposal.",
    images: ["https://severincleaners.com/images/junk-removal-escondido.jpg"],
  },
  alternates: {
    canonical: "https://severincleaners.com/junk-removal-escondido",
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
    'geo.placename': 'Escondido',
    'geo.position': '33.1192;-117.0864',
    'ICBM': '33.1192, -117.0864',
  },
};

const serviceSchema = generateLocationServiceSchema({
  locationName: "Escondido",
  serviceName: "Junk Removal",
  description: "Professional Escondido junk removal services for residential and commercial properties. Fast, reliable, eco-friendly disposal with same-day service available.",
  url: "https://severincleaners.com/junk-removal-escondido",
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://severincleaners.com" },
  { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
  { name: "Junk Removal Escondido", url: "https://severincleaners.com/junk-removal-escondido" },
]);

export default function EscondidoJunkRemovalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [serviceSchema, breadcrumbSchema],
          }),
        }}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Junk Removal Escondido CA | North County's Reliable Choice
                <span className="block text-blue-300 mt-2 text-3xl md:text-4xl">
                  Fast, Reliable, and Local Junk Hauling Throughout Escondido and North County Inland
                </span>
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  📞 Call (619) 750-0114
                </a>
                <a
                  href="/contact"
                  className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  Request Your Free Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Same-Day Service</h3>
                <p className="text-gray-600">Call before 2 PM for guaranteed same-day junk removal in Escondido</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Locally Owned</h3>
                <p className="text-gray-600">North County based — not a franchise. Your money stays local.</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">Full protection for your property and complete peace of mind</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted Junk Removal Escondido CA Residents Rely On</h2>

                <p className="text-lg text-gray-700 mb-6">
                  Locally owned, licensed, and insured — Escondido's trusted choice for cleanouts, furniture removal, and property-wide junk hauling with transparent pricing and same-day service available.
                </p>

                <p className="text-lg text-gray-700 mb-6">
                  From downtown Escondido homes to hillside estates in Hidden Meadows, our Escondido junk removal team provides full-service hauling that's fast, affordable, and handled with care.
                </p>

                <p className="text-lg mb-6">
                  We remove everything from old furniture and appliances to renovation debris and yard waste — always disposing responsibly in accordance with San Diego County regulations.
                </p>

                <p className="text-lg mb-8">
                  Our crews are known for professionalism and respect for your property. Whether you need a one-item pickup or a full estate cleanout, we make junk removal simple and stress-free.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Escondido Service Areas & Neighborhood Coverage</h3>
                <p className="text-lg mb-4">
                  We proudly offer junk pickup Escondido services across all neighborhoods, including:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8 bg-blue-50 rounded-lg p-6">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <div>
                        <strong>Downtown Escondido</strong> – Historic homes, retail, and apartment cleanouts
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <div>
                        <strong>Midway & Mission Avenue Corridor</strong> – Commercial junk hauling and small business cleanouts
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <div>
                        <strong>Felicita Park Area</strong> – Family homes and large-lot properties
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <div>
                        <strong>San Pasqual Valley</strong> – Agricultural and rural debris removal
                      </div>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <div>
                        <strong>Hidden Meadows & Jesmond Dene</strong> – Hillside access and estate cleanouts
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <div>
                        <strong>Rancho Bernardo Border</strong> – Suburban developments and HOA neighborhoods
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <div>
                        <strong>North Broadway & El Norte Parkway</strong> – Garage, yard, and storage unit cleanouts
                      </div>
                    </li>
                  </ul>
                </div>

                <p className="text-lg mb-8">
                  No matter where you are in 92025, 92026, or 92027, Severin Cleaners provides same-day junk removal Escondido CA service tailored to your neighborhood's needs.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">How It Works</h3>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                    <h4 className="font-bold mb-2">Call or Book Online</h4>
                    <p className="text-sm text-gray-600">Quick quote over the phone or request service online</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                    <h4 className="font-bold mb-2">We Arrive & Quote</h4>
                    <p className="text-sm text-gray-600">Upfront pricing before we start — no hidden fees</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                    <h4 className="font-bold mb-2">We Haul It Away</h4>
                    <p className="text-sm text-gray-600">Fast, professional removal with responsible disposal</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Driving Directions & Response Times</h3>
                <p className="text-lg mb-4">
                  We're based right here in North County, allowing for fast, same-day service across Escondido and surrounding communities.
                </p>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>10 minutes from Downtown Escondido</strong> – Quick response for apartment and office pickups</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>15 minutes from Hidden Meadows and Jesmond Dene</strong> – Larger-lot and estate service</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>20 minutes from Rancho Bernardo</strong> – Residential and commercial cleanouts</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>25 minutes from San Marcos or Valley Center</strong> – Regional coverage for connected communities</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg mb-8 font-medium text-blue-900">
                  Call before 2 PM for same-day junk removal in Escondido CA — most jobs are completed the same day you call.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Local Weather & Seasonal Junk Removal Challenges</h3>
                <p className="text-lg mb-4">
                  Escondido's inland climate brings unique challenges for property maintenance:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <h4 className="font-bold mb-2 text-orange-900">☀️ Summer Heat</h4>
                    <p className="text-gray-700">Outdoor junk piles attract pests; fast pickup prevents issues.</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-bold mb-2 text-blue-900">🌧️ Winter Rains</h4>
                    <p className="text-gray-700">Storm debris and fallen branches increase demand for yard waste hauling.</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h4 className="font-bold mb-2 text-green-900">🌸 Spring Cleaning</h4>
                    <p className="text-gray-700">Peak season for garage and attic cleanouts.</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <h4 className="font-bold mb-2 text-red-900">🔥 Fire Season</h4>
                    <p className="text-gray-700">Brush clearance and debris removal help maintain defensible space in hillside neighborhoods.</p>
                  </div>
                </div>

                <p className="text-lg mb-8">
                  Our trucks and crews operate year-round — we adjust to local weather to keep your property clear, safe, and compliant.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Major Employers & Properties We Serve in Escondido</h3>
                <p className="text-lg mb-4">
                  We partner with homeowners, contractors, and property managers — as well as major local institutions, including:
                </p>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Palomar Medical Center – Facility and staff housing cleanouts</li>
                    <li>Escondido Union School District – Maintenance and remodeling debris removal</li>
                    <li>California Center for the Arts – Event cleanup and backstage hauling</li>
                    <li>Stone Brewing World Bistro & Gardens – Commercial junk hauling and recycling</li>
                    <li>Local property management companies along East Valley Parkway and Centre City Parkway</li>
                  </ul>
                </div>

                <p className="text-lg mb-8">
                  Our junk hauling Escondido CA crews are trained to work efficiently on both residential and commercial properties — with full insurance coverage and professional safety standards.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Common Junk Removal Projects in Escondido</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Residential Services</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Furniture and mattress removal</li>
                      <li>Appliance hauling and recycling</li>
                      <li>Yard waste, fencing, and storm debris cleanup</li>
                      <li>Garage and storage unit clearouts</li>
                      <li>Estate and downsizing cleanouts</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Commercial & Construction Services</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Office furniture and equipment removal</li>
                      <li>Contractor and remodel debris hauling</li>
                      <li>Retail and restaurant cleanouts</li>
                      <li>Warehouse and industrial property clearing</li>
                      <li>Tenant move-out and eviction cleanups</li>
                    </ul>
                  </div>
                </div>

                <p className="text-lg mb-8">
                  Every job is handled responsibly, with an emphasis on recycling and donation wherever possible.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Local Competitor Comparison – Why Escondido Chooses Us</h3>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="p-4 text-left font-semibold">Feature</th>
                        <th className="p-4 text-center font-semibold">Severin Cleaners</th>
                        <th className="p-4 text-center font-semibold">National Franchises</th>
                        <th className="p-4 text-center font-semibold">Independent Haulers</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-4 font-medium text-gray-900">Same-Day Service</td>
                        <td className="p-4 text-center">
                          <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-sm text-gray-600 block mt-1">Guaranteed</span>
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-gray-500">⚠️ Limited</span>
                        </td>
                        <td className="p-4 text-center">
                          <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                          <span className="text-sm text-gray-600 block mt-1">Unreliable</span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="p-4 font-medium text-gray-900">Local Expertise</td>
                        <td className="p-4 text-center">
                          <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-sm text-gray-600 block mt-1">North County Based</span>
                        </td>
                        <td className="p-4 text-center">
                          <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                          <span className="text-sm text-gray-600 block mt-1">Centralized</span>
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-gray-500">⚠️ Varies</span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-4 font-medium text-gray-900">Transparent Pricing</td>
                        <td className="p-4 text-center">
                          <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-sm text-gray-600 block mt-1">Upfront, Flat Rate</span>
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-gray-500">⚠️ Add-Ons</span>
                        </td>
                        <td className="p-4 text-center">
                          <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                          <span className="text-sm text-gray-600 block mt-1">No Guarantee</span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="p-4 font-medium text-gray-900">Licensed & Insured</td>
                        <td className="p-4 text-center">
                          <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-sm text-gray-600 block mt-1">Yes</span>
                        </td>
                        <td className="p-4 text-center">
                          <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-sm text-gray-600 block mt-1">Yes</span>
                        </td>
                        <td className="p-4 text-center">
                          <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                          <span className="text-sm text-gray-600 block mt-1">Usually Not</span>
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-4 font-medium text-gray-900">Professional Crews</td>
                        <td className="p-4 text-center">
                          <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-sm text-gray-600 block mt-1">Uniformed & Vetted</span>
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-gray-500">⚠️ Inconsistent</span>
                        </td>
                        <td className="p-4 text-center">
                          <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                          <span className="text-sm text-gray-600 block mt-1">Unverified</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-lg mb-8">
                  We're not a franchise — we're local, fully insured, and familiar with Escondido's roads, traffic patterns, and city regulations. That means faster service and fewer surprises.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Cleaners for Junk Removal Escondido CA</h3>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 mb-8">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>Same-Day Pickup Available:</strong> Call before 2 PM for same-day service.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>Transparent Pricing:</strong> $100–$495 based on load size — no hidden fees.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>North County Expertise:</strong> We navigate Hidden Meadows hillside roads, San Pasqual Valley agricultural properties, and downtown Escondido with ease.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>Professional Crews:</strong> Friendly, trained, and background-checked staff.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mt-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">Book Your Junk Removal in Escondido CA Today</h3>
                  <p className="text-lg mb-4">
                    From hillside estates in Hidden Meadows to businesses along Valley Parkway, Severin Cleaners delivers reliable, professional junk removal Escondido CA residents and business owners trust.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:+16197500114"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-center font-bold transition-colors"
                    >
                      📞 Call (619) 750-0114
                    </a>
                    <a
                      href="/contact"
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg text-center font-bold transition-colors"
                    >
                      Request Your Free Quote Today
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 text-center">
                    Serving all of Escondido — including Downtown, Felicita Park, Hidden Meadows, and Rancho Bernardo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <EscondidoFAQSection />

        {/* Related Services */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related San Diego Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal</h4>
                <p className="text-gray-600">Professional furniture and couch removal with same-day service</p>
              </a>
              <a href="/commercial-junk-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Commercial Junk Removal</h4>
                <p className="text-gray-600">Office and business cleanouts for North County companies</p>
              </a>
              <a href="/appliance-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal</h4>
                <p className="text-gray-600">Safe removal of refrigerators, washers, and all appliances</p>
              </a>
            </div>
          </div>
        </section>
      </main>

        <Footer />
      </div>
    </>
  );
}
