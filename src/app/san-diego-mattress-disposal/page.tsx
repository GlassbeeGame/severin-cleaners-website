import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MattressDisposalFAQSection from "./MattressDisposalFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";

export const metadata: Metadata = {
  title: "San Diego Mattress Disposal & Pickup | Locally Owned Service",
  description: "Affordable mattress pickup in San Diego starting at $100. Same-day service, upfront pricing, and compliant disposal. Call (619) 750-0114 today.",
  keywords: "mattress disposal San Diego, mattress pickup San Diego, mattress removal San Diego, San Diego mattress recycling, box spring removal San Diego, mattress haul away, old mattress removal, cheap mattress disposal San Diego, same day mattress pickup",
  openGraph: {
    title: "San Diego Mattress Disposal & Pickup | Locally Owned Service",
    description: "Affordable mattress pickup in San Diego starting at $100. Same-day service, upfront pricing, and compliant disposal.",
    url: 'https://severincleaners.com/san-diego-mattress-disposal',
  },
  twitter: {
    card: 'summary_large_image',
    title: "San Diego Mattress Disposal & Pickup | Locally Owned Service",
    description: "Affordable mattress pickup in San Diego starting at $100. Same-day service, upfront pricing, and compliant disposal.",
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: "https://severincleaners.com/san-diego-mattress-disposal",
  },
};

export default function MattressDisposalPage() {
  const relatedServices = [
    { name: "Furniture Removal", slug: "furniture-removal-san-diego" },
    { name: "Couch Removal", slug: "couch-removal-san-diego" },
    { name: "Same-Day Junk Removal", slug: "same-day-junk-removal-san-diego" },
    { name: "Estate Cleanouts", slug: "estate-cleanout-san-diego" },
  ];

  const serviceSchema = generateServiceSchema({
    name: "Mattress Disposal San Diego",
    description: "Professional mattress pickup and disposal services in San Diego. Same-day service available with compliant disposal and upfront pricing.",
    url: "https://severincleaners.com/san-diego-mattress-disposal",
    serviceType: "Mattress Removal Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "Mattress Disposal", url: "https://severincleaners.com/san-diego-mattress-disposal" },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema]
  };

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <div className="min-h-screen bg-background">
        <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl font-bold mb-6">
                San Diego Mattress Disposal & Pickup Services
              </h1>
              <p className="text-lg mb-8 text-blue-100">
                Locally Owned • Same-Day Pickup • Responsible Disposal
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  📞 Call (619) 750-0114 - Same-Day Pickup
                </a>
                <a
                  href="#pricing"
                  className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  See Pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section with 2-Column Layout */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* LEFT COLUMN - Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Why San Diego Chooses Our Mattress Pickup Service
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Fast, affordable, and responsible mattress removal from a team that cares about our community.
                  </p>
                  <p className="text-lg text-gray-700 mb-12 leading-relaxed">
                    Need to get rid of an old mattress? Our locally owned <a href="/san-diego-junk-removal" className="text-blue-600 hover:text-blue-700 underline">San Diego junk removal</a> team makes it fast, easy, and affordable to dispose of mattresses the right way. We handle the heavy lifting, hauling, and proper disposal — whether you&apos;re cleaning out a guest room, upgrading your bed, or clearing a <a href="/foreclosure-eviction-cleanout-san-diego" className="text-blue-600 hover:text-blue-700 underline">rental property</a>.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Locally Owned & Operated</h3>
                      <p className="text-gray-600">Not a franchise — just your neighbors serving San Diego with honest, reliable service</p>
                    </div>

                    <div className="text-center">
                      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day & Next-Day Service</h3>
                      <p className="text-gray-600">We work around your schedule with fast pickup across all San Diego County neighborhoods</p>
                    </div>

                    <div className="text-center">
                      <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Compliant Disposal</h3>
                      <p className="text-gray-600">All mattresses disposed of in accordance with City of San Diego regulations and guidelines</p>
                    </div>

                    <div className="text-center">
                      <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Upfront Pricing</h3>
                      <p className="text-gray-600">No surprises, ever — you&apos;ll know the exact cost before we start the job</p>
                    </div>

                    <div className="text-center">
                      <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted Across San Diego</h3>
                      <p className="text-gray-600">Homeowners, renters, and property managers rely on us for hassle-free mattress disposal</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN - Sidebar */}
              <div className="lg:col-span-1">
                <LocationSidebarCTA
                  locationName="Mattress Disposal"
                  nearbyLocations={relatedServices}
                />
              </div>
            </div>
          </div>
        </section>

        {/* What We Remove Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Mattresses & Items We Remove
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center">
                We handle all types of mattresses, box springs, and bed-related items — no matter the size, style, or condition.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">🛏️ Mattresses & Bedding</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Twin, full, queen, and king mattresses</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Memory foam and pillow-top beds</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Box springs and bed frames</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Crib and toddler mattresses</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Futons and sofa beds</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">🔧 Specialty Beds & More</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Adjustable and electric bed frames</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Bed-in-a-box mattresses (Purple, Casper, Nectar, etc.)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Air mattresses and waterbeds</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Bunk beds and loft bed frames</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Headboards and <a href="/furniture-removal-san-diego" className="text-blue-600 hover:text-blue-700 underline">bedroom furniture</a></span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 bg-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">💚 Donation & Proper Disposal</h3>
                <p className="text-gray-700 text-center mb-4">
                  Mattresses in good condition may be donated to local charities whenever possible. All items are disposed of in full compliance with City of San Diego waste management regulations.
                </p>
                <p className="text-gray-700 text-center">
                  We also provide quick and affordable mattress haul away in San Diego, perfect for removing old or damaged mattresses that you just want gone. Need other items removed too? Check out our <a href="/furniture-removal-san-diego" className="text-blue-600 hover:text-blue-700 font-semibold underline">furniture removal services</a> or full <a href="/san-diego-junk-removal" className="text-blue-600 hover:text-blue-700 font-semibold underline">junk removal in San Diego</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mattress Recycling Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                Mattress Recycling in San Diego
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center">
                We care about keeping San Diego clean. All mattresses are disposed of in accordance with City of San Diego regulations. We offer the same <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:text-blue-700 font-semibold underline">same-day service</a> for all our junk removal needs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">♻️ Mattress Recycling San Diego</h3>
                  <p className="text-gray-700 mb-4">
                    San Diego has mattress recycling facilities that can break down old mattresses into reusable materials:
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Steel springs for metal recycling
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Foam padding for carpet underlay
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Wood frames for mulch and fuel
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Fabric for industrial use
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">📋 Compliant Disposal</h3>
                  <p className="text-gray-700 mb-4">
                    All mattresses are handled in full compliance with City of San Diego and San Diego County waste management regulations.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Licensed disposal facilities only
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Full compliance with local regulations
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      No illegal dumping — ever
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Supporting San Diego&apos;s waste management goals
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Mattress Disposal"
          contextParagraph="Mattress pickup typically starts around $100, depending on location, access, and total load size. We can handle multiple items in one trip including box springs, bed frames, and other furniture. Every price includes hauling, labor, and responsible disposal."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Mattress Disposal" />

        {/* FAQ Section */}
        <MattressDisposalFAQSection />

        {/* Still Have Questions CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-12 text-center text-white shadow-xl">
              <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Our team is here to help. Call us today for a free quote and fast, friendly service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
                >
                  Call (619) 750-0114
                </a>
                <a
                  href="/contact"
                  className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                San Diego Neighborhoods Served
              </h2>
              <p className="text-xl text-gray-600 mb-8 text-center">
                We provide mattress pickup and disposal throughout all San Diego neighborhoods — from coastal communities to East County and beyond. Whether you&apos;re in North Park, La Mesa, Pacific Beach, Hillcrest, or Downtown San Diego, we&apos;ve got you covered.
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

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Call Today for San Diego Mattress Pickup
            </h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto">
              Quick service, upfront pricing, and responsible disposal — locally owned and proud to serve San Diego. We handle the heavy lifting so you don&apos;t have to. <a href="/same-day-junk-removal-san-diego" className="text-blue-200 hover:text-white underline">Same-day</a> and next-day pickup available throughout San Diego County. View all our <a href="/services" className="text-blue-200 hover:text-white underline">junk removal services</a>.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+16197500114"
                className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 rounded-lg font-bold text-2xl transition-colors"
              >
                📞 CALL (619) 750-0114
              </a>
              <a
                href="/contact"
                className="bg-white hover:bg-gray-100 text-blue-700 px-12 py-6 rounded-lg font-bold text-2xl transition-colors"
              >
                Get Free Quote
              </a>
            </div>
            <p className="text-blue-200 mt-6 text-lg">
              Available 7 Days a Week • Same-Day Service • Licensed & Insured • Compliant Disposal
            </p>
          </div>
        </section>
      </main>
      <Footer />
      </div>
    </>
  );
}
