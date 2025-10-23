import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MiraMesaFAQSection from "./MiraMesaFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mira Mesa Junk Removal | Residential & Commercial | (619) 750-0114",
  description: "Mira Mesa junk removal Scripps Ranch to Sorrento Valley. Tech campuses, apartments, condos, offices. (619) 750-0114",
  keywords: "Mira Mesa junk removal, junk hauling Mira Mesa, trash removal Mira Mesa, junk pickup Mira Mesa, Mira Mesa furniture removal, commercial junk removal Mira Mesa",
  openGraph: {
    title: "Mira Mesa Junk Removal | Same-Day Pickup & Hauling Service",
    description: "Professional Mira Mesa junk removal for homes and businesses. Same-day service, affordable pricing, eco-friendly disposal. Call (619) 750-0114!",
    url: "https://severincleaners.com/junk-removal-mira-mesa",
  },
  alternates: {
    canonical: "https://severincleaners.com/junk-removal-mira-mesa",
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
};

export default function JunkRemovalMiraMesaPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Mira Mesa",
    serviceName: "Junk Removal",
    description: "Professional Mira Mesa junk removal for homes and businesses. Same-day service, affordable pricing, eco-friendly disposal from Sorrento Valley to Black Mountain Road.",
    url: "https://severincleaners.com/junk-removal-mira-mesa",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Mira Mesa Junk Removal", url: "https://severincleaners.com/junk-removal-mira-mesa" },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema],
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
                Junk Removal Mira Mesa | Residential & Commercial
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Reliable, Local Junk Hauling for Mira Mesa Homes and Businesses
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  CALL NOW: (619) 750-0114
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  Request Free Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why Mira Mesa Chooses Severin Cleaners
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Fast & Next-Day Service</h3>
                <p className="text-gray-600">Quick response across all Mira Mesa neighborhoods. <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">Same-day pickup</a> available when you call before 2 PM.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Locally Owned</h3>
                <p className="text-gray-600">Not a franchise — your money stays in the San Diego community. Local expertise that understands Mira Mesa.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">Full protection for your property and items. Professional crews you can trust.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Trusted Junk Removal Mira Mesa Homeowners Depend On
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                  Looking for professional, affordable junk removal in Mira Mesa? Severin Cleaners provides fast pickup (including <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">same-day service</a> when you call before 2 PM), furniture removal, estate cleanouts, and full-service hauling for homes, offices, and commercial properties throughout the Mira Mesa area.
                </p>

                <p className="text-lg mb-6">
                  Locally owned and fully insured, we're known for transparent pricing, fast response times, and eco-friendly disposal practices that keep Mira Mesa clean.
                </p>

                <p className="text-lg mb-6">
                  Our Mira Mesa junk removal service combines professionalism and local expertise. From suburban homes along Camino Ruiz to commercial properties near Miramar Road, we handle every removal job with care and efficiency.
                </p>

                <p className="text-lg mb-6">
                  Whether it's furniture, appliances, yard debris, or full property cleanouts, we make junk hauling simple, affordable, and environmentally responsible.
                </p>

                <p className="text-lg mb-8">
                  We understand the mix of residential neighborhoods, tech corridors, and business parks that make Mira Mesa unique — and we're proud to serve them all.
                </p>

                <h2 className="text-3xl font-bold mt-8 mb-4">Mira Mesa Neighborhoods & Service Areas</h2>
                <p className="text-lg mb-4">
                  Our junk pickup Mira Mesa service covers every part of this central San Diego community, including:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Sorrento Valley Border</strong> – Tech companies, labs, and office park cleanouts</li>
                      <li><strong>West Mira Mesa</strong> – Family neighborhoods and suburban homes near Parkdale Ave</li>
                      <li><strong>East Mira Mesa</strong> – Older homes and new developments near Black Mountain Road</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Mira Mesa Boulevard Corridor</strong> – Apartments, condos, and small businesses</li>
                      <li><strong>Camino Santa Fe Area</strong> – Warehouses, storage facilities, and commercial sites</li>
                      <li><strong>Los Peñasquitos Canyon Edge</strong> – Larger properties and hillside cleanups</li>
                    </ul>
                  </div>
                </div>

                <p className="text-lg mb-8">
                  No matter where you live or work in Mira Mesa, our local team is nearby and ready for fast junk removal service, including <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">same-day pickup</a> when needed.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">How Junk Removal Works in Mira Mesa</h3>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <p className="text-lg mb-4 font-semibold text-gray-900">Our process is simple:</p>
                  <ol className="space-y-2 text-gray-700 list-decimal pl-6">
                    <li>Call or book online for your free quote.</li>
                    <li>Get upfront pricing based on volume — no hidden fees.</li>
                    <li>We arrive quickly, with <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">same-day service</a> available when you call before 2 PM.</li>
                    <li>We load, clean up, and haul away everything safely.</li>
                    <li>We recycle and donate whenever possible.</li>
                  </ol>
                  <p className="text-gray-700 mt-4">
                    You only pay for the space your junk takes up — not by hour or item. Prices start around $100 for a single item and scale up to $495 for a full load.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Local Service Knowledge Matters</h3>
                <p className="text-lg mb-4">
                  Mira Mesa is one of San Diego's most dynamic communities — with residential, commercial, and industrial zones all within a few square miles. That mix creates unique junk removal needs.
                </p>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Apartments & Condos:</strong> We handle tight access, shared parking, and multi-story removals.</li>
                    <li><strong>Military & Contractor Housing:</strong> Fast response for move-outs near Marine Corps Air Station Miramar.</li>
                    <li><strong>Business Parks:</strong> Professional hauling for offices and labs near Distribution Avenue and Carroll Road.</li>
                    <li><strong>Family Homes:</strong> Full-service removal for garages, yards, and remodel debris.</li>
                  </ul>
                </div>

                <p className="text-lg mb-8">
                  Because we're based locally, our team navigates Mira Mesa's neighborhoods efficiently, saving you time and keeping costs low.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Driving Directions & Response Times</h3>
                <p className="text-lg mb-4">
                  We're based just minutes from Mira Mesa via the I-15 and Miramar Road, allowing for rapid response across all neighborhoods:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-gray-700"><strong>10 minutes from Sorrento Valley</strong> – Fast service for tech and commercial clients</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-gray-700"><strong>15 minutes from Miramar Base Housing</strong> – Ideal for move-out junk removal</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-gray-700"><strong>20 minutes from Black Mountain Road area</strong> – Fast residential cleanouts</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-gray-700"><strong>25 minutes from Los Peñasquitos Canyon</strong> – Larger property debris removal</p>
                  </div>
                </div>

                <p className="text-lg mb-8">
                  Because we operate within San Diego County daily, we can usually offer <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">same-day service</a> in Mira Mesa when you call before 2 PM.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Common Junk Removal Projects in Mira Mesa</h3>
                <p className="text-lg mb-4">
                  We handle a full range of residential and commercial junk removal services, including:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Residential Junk Removal</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Furniture, mattresses, and appliance removal</li>
                      <li>Yard debris, fencing, and outdoor cleanup</li>
                      <li>Garage, attic, and storage unit cleanouts</li>
                      <li>HOA compliance and property maintenance support</li>
                      <li>Move-out and downsizing projects</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Commercial & Industrial Junk Removal</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Office cleanouts and equipment removal</li>
                      <li>Lab and warehouse debris disposal</li>
                      <li>Contractor and construction debris hauling</li>
                      <li>Retail fixture and display disposal</li>
                      <li>Rental property turnover and eviction cleanouts</li>
                    </ul>
                  </div>
                </div>

                <p className="text-lg mb-8">
                  We recycle or donate whenever possible — reducing landfill waste while supporting local organizations.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Major Mira Mesa Employers We Serve</h3>
                <p className="text-lg mb-4">
                  We frequently work with businesses, contractors, and institutions near:
                </p>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Marine Corps Air Station Miramar</li>
                    <li>Qualcomm & General Atomics (Sorrento Valley)</li>
                    <li>UC San Diego Extension and Educational Facilities</li>
                    <li>Target, Home Depot, and local retail centers along Mira Mesa Blvd</li>
                    <li>Property management firms maintaining local apartments and commercial centers</li>
                  </ul>
                </div>

                <p className="text-lg mb-8">
                  Our junk hauling Mira Mesa team is familiar with access policies, loading dock procedures, and scheduling coordination needed for commercial clients.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Cleaners for Junk Removal Mira Mesa</h3>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 mb-8">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>Fast & Next-Day Service:</strong> <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">Same-day pickup</a> available when you call before 2 PM.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>Mira Mesa Expertise:</strong> We navigate Sorrento Valley tech campuses, Black Mountain cul-de-sacs, and Miramar Road corridors daily.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>Licensed & Insured:</strong> Full protection for your property and items.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>Eco-Conscious:</strong> Donations and recycling are part of every job.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>Professional Crews:</strong> Courteous, uniformed, and efficient staff.</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold mt-12 mb-6">Local Competitor Comparison</h3>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="p-4 text-left font-semibold">Feature</th>
                        <th className="p-4 text-center font-semibold">Severin Cleaners</th>
                        <th className="p-4 text-center font-semibold">National Chains</th>
                        <th className="p-4 text-center font-semibold">Budget Haulers</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-4 font-medium text-gray-900"><a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">Same-Day Service</a></td>
                        <td className="p-4 text-center">
                          <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-gray-500">Limited</span>
                        </td>
                        <td className="p-4 text-center">
                          <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="p-4 font-medium text-gray-900">Licensed & Insured</td>
                        <td className="p-4 text-center">
                          <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </td>
                        <td className="p-4 text-center">
                          <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-gray-500">Varies</span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-4 font-medium text-gray-900">Recycling & Donations</td>
                        <td className="p-4 text-center">
                          <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-gray-500">Sometimes</span>
                        </td>
                        <td className="p-4 text-center">
                          <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="p-4 font-medium text-gray-900">Locally Owned</td>
                        <td className="p-4 text-center">
                          <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </td>
                        <td className="p-4 text-center">
                          <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-gray-500">Varies</span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-4 font-medium text-gray-900">Transparent Pricing</td>
                        <td className="p-4 text-center">
                          <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-gray-500">Hidden Fees</span>
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-gray-500">Varies</span>
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-4 font-medium text-gray-900">Professional Crew</td>
                        <td className="p-4 text-center">
                          <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </td>
                        <td className="p-4 text-center">
                          <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-gray-500">Varies</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mt-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">Book Your Junk Removal Mira Mesa Service Today</h3>
                  <p className="text-lg mb-4">
                    From large estate cleanouts to single-item pickups, Severin Cleaners makes junk removal in Mira Mesa fast, affordable, and environmentally responsible.
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
                    Serving all Mira Mesa neighborhoods — from Sorrento Valley to Black Mountain Road
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MiraMesaFAQSection />

        {/* Related Services */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related San Diego Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal</h4>
                <p className="text-gray-600">Professional furniture and couch removal with fast, flexible scheduling</p>
              </a>
              <a href="/commercial-junk-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Commercial Junk Removal</h4>
                <p className="text-gray-600">Office and business cleanouts for Mira Mesa companies</p>
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
