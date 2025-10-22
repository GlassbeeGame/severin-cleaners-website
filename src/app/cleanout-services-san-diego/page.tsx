import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CleanoutFAQSection from "./CleanoutFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Cleanout Services San Diego | Property & Garage",
  description: "Expert cleanout services San Diego for garages, attics, basements, sheds, storage units & full properties. Same-day junk hauling available. Licensed & insured. Call (619) 750-0114 for free quote!",
  keywords: "cleanout services San Diego, property cleanout San Diego, garage cleanout San Diego, attic cleanout San Diego, basement cleanout San Diego, storage unit cleanout San Diego, shed cleanout San Diego, junk hauling San Diego",
  openGraph: {
    title: "Cleanout Services San Diego - Professional Junk Hauling & Property Cleanouts",
    description: "Expert cleanout services San Diego for all types of properties. Same-day service, eco-friendly disposal, transparent pricing. Free quotes!",
    url: 'https://severincleaners.com/cleanout-services-san-diego',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cleanout Services San Diego - Professional Junk Hauling & Property Cleanouts",
    description: "Expert cleanout services San Diego for all types of properties. Same-day service, eco-friendly disposal, transparent pricing.",
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: "https://severincleaners.com/cleanout-services-san-diego",
  },
};

export default function CleanoutServicesPage() {
  const serviceSchema = generateServiceSchema({
    name: "Cleanout Services San Diego",
    description: "Expert cleanout services for garages, attics, basements, sheds, storage units, and full properties. Same-day junk hauling available.",
    url: "https://severincleaners.com/cleanout-services-san-diego",
    serviceType: "Property Cleanout Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "Cleanout Services", url: "https://severincleaners.com/cleanout-services-san-diego" },
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
                Cleanout Services San Diego
                <span className="block text-blue-300 mt-2">Professional Junk Hauling for Every Space</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                We handle all types of cleanout projects in San Diego. Garages, attics, basements, storage units, and full properties. Same-day service available with transparent pricing. Trusted by homeowners, landlords, and real estate pros.
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
                  View Pricing
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
                  <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                  <div className="text-gray-600">Cleanout Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">Same Day</div>
                  <div className="text-gray-600">Service Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">Licensed</div>
                  <div className="text-gray-600">& Insured</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">All SD</div>
                  <div className="text-gray-600">Locations Served</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Garage Cleanout Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Garage Cleanout San Diego Services
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                We transform cluttered garages into clean, functional spaces. Years of tools, decorations, furniture, and automotive equipment add up fast. Our team clears everything out efficiently. You get your garage back in just a few hours.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Most garage projects take 2-3 hours. Pricing ranges from $249 to $429 based on volume. We handle all heavy lifting and sort items carefully. Donations go to local charities, recyclables get recycled properly. Your garage is left broom-clean and ready to use. Our crews work carefully around vehicles and fit through tight spaces easily.
              </p>
              <p className="text-lg text-gray-600">
                Common reasons for garage cleanouts include preparing homes for sale and creating workshop areas. Some clients need room for vehicles again. Others just want their storage space back. We've helped hundreds of homeowners reclaim their garages. Every project gets efficient, professional service.
              </p>
            </div>
          </div>
        </section>

        {/* Attic Cleanout Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Attic Cleanout San Diego - Safe & Thorough Junk Removal
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Attic cleanouts require special care. Our trained crews safely handle stairs, tight spaces, and extreme temperatures. We remove decades of belongings, old insulation, holiday decorations, and forgotten items. Safety is always our priority.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Most attic projects take 2-4 hours. Time varies based on access and volume. We handle fragile items with extra care. Often we find valuables you forgot about. Nothing damages your home during removal. Many clients discover family heirlooms they thought were lost. Our thorough approach protects what matters.
              </p>
              <p className="text-lg text-gray-600">
                Common needs include preparing for renovations and dealing with pest problems. Some clients simply need storage space freed up. We provide complete clearing every time. Your belongings receive respectful handling throughout. Full insurance protects you during this specialized work.
              </p>
            </div>
          </div>
        </section>

        {/* Basement Cleanout Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Basement Cleanout San Diego - Complete Underground Space Clearing
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Basements present unique cleanout challenges. Stairs, moisture damage, heavy equipment, and years of storage accumulate quickly. Our experienced crews handle it all. Exercise equipment, old furniture, storage boxes, and water heaters are no problem.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Most basement jobs take 3-5 hours. Size and access determine the timeline. We're equipped for narrow stairways and low ceilings. Tight doorways are common in San Diego homes. Our team navigates carefully to prevent wall damage. Every item is removed safely and efficiently.
              </p>
              <p className="text-lg text-gray-600">
                Common situations include flood cleanup preparation and basement conversions. Estate clearing often requires basement work too. Mold-prone stored items should be removed promptly. We work efficiently to restore usable space. Professional service makes basements functional again.
              </p>
            </div>
          </div>
        </section>

        {/* Storage Unit Cleanout Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Storage Unit Cleanout San Diego - Fast Unit Clearing
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Stop paying monthly fees for units you don't need. We clear rental units completely in 1-2 hours. This helps you avoid additional rental charges. Furniture, boxes, and everything else gets removed. Units are left broom-clean for final inspection.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Projects typically cost $249 to $366. Unit size determines the price. We work quickly and efficiently. Our team handles coordination with storage facilities. All disposal is managed professionally. Many facilities recommend our services for rapid turnovers.
              </p>
              <p className="text-lg text-gray-600">
                Common situations include downsizing, relocating, and clearing inherited units. Same-day clearing is available when you need it. Usable items go to donations. Recyclables get recycled whenever possible. Every service follows our comprehensive approach.
              </p>
            </div>
          </div>
        </section>

        {/* Shed Cleanout Section - NEW */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Shed Cleanout San Diego - Outdoor Storage Building Clearing
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Sheds often become dumping grounds over the years. Tools, lawn equipment, garden supplies, and misc items pile up. We clear outdoor storage buildings completely. Small tool sheds to large storage buildings all get the same thorough service.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Most shed projects take 1-2 hours. Cost ranges from $100 to $349. Size and contents determine the price. We remove rusty tools, old paint cans, and yard chemicals. Broken equipment and weathered furniture go too. Hazardous materials receive proper disposal according to regulations.
              </p>
              <p className="text-lg text-gray-600">
                Common reasons include preparing properties for sale. Some clients want their yard space back. Others need to eliminate pest habitats. Shed demolition prep is another frequent need. We coordinate with contractors when shed removal follows our cleanout.
              </p>
            </div>
          </div>
        </section>

        {/* Property Cleanout Section - EXPANDED */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Property Cleanout San Diego - Complete Estate & Multi-Unit Clearing
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                We handle complete property cleanouts. Entire homes, estates, multi-unit buildings, and commercial spaces all receive professional service. Families settling estates trust us. Landlords use us for tenant turnovers. Realtors prepare homes for sale with our help. Property managers rely on us for cleanouts.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Project scope varies widely. Single-family homes typically take 4-8 hours. Estate cleanouts may need multiple days. We work room by room systematically. Personal items receive careful handling. Family members get coordination when needed. Complete junk hauling is included every time.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Move-out situations require speed to meet tight deadlines. Landlords appreciate our rapid turnaround. Apartment cleanouts often finish in 2-4 hours. This minimizes vacancy periods and lost income. Realtors trust us to prep homes properly. All unwanted items and debris get removed for staging.
              </p>
              <p className="text-lg text-gray-600">
                Estate cleanouts require sensitivity and care. These situations are often emotional and stressful. Our crews work respectfully every time. Items of value or sentiment get set aside. Discretion is maintained throughout the entire process. Dozens of San Diego families have trusted us during difficult transitions. Compassionate service makes hard times easier.
              </p>
            </div>
          </div>
        </section>

        {/* Eco-Friendly Disposal Section - NEW */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Eco-Friendly Disposal & Donation Services
              </h2>
              <p className="text-xl text-gray-600 mb-8 text-center">
                Every project includes responsible disposal. We minimize environmental impact. Our local community benefits from our practices. Doing the right thing matters to us.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Charitable Donations</h3>
                  <p className="text-gray-600 text-center">
                    Furniture, clothing, household goods, and electronics in good condition go to Goodwill, Salvation Army, and local San Diego charities. We coordinate donation pickups and provide documentation.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Recycling Programs</h3>
                  <p className="text-gray-600 text-center">
                    Metal, cardboard, plastics, and electronics are separated and taken to San Diego recycling facilities. We follow all local recycling regulations to keep materials out of landfills.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Compliant Disposal</h3>
                  <p className="text-gray-600 text-center">
                    Items that cannot be donated or recycled go to licensed San Diego County landfills. We handle all disposal fees and documentation, ensuring environmental compliance.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-white p-6 rounded-lg text-center">
                <p className="text-lg text-gray-700">
                  <strong>Our goal:</strong> Divert over 60% of cleanout materials from landfills through donation and recycling programs integrated into every cleanout services San Diego project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section - STANDARDIZED */}
        <section id="pricing" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Transparent Cleanout Services Pricing
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center">
                Our pricing is volume-based and transparent. No hidden fees ever. No surprises at the end. Just honest rates for quality work.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white text-center">
                  <div className="text-4xl font-bold mb-2">$100</div>
                  <div className="text-blue-100 mb-4">Starting Price</div>
                  <div className="font-bold text-lg mb-2">Single Item Pickup</div>
                  <div className="text-blue-100 text-sm">
                    Perfect for one couch, appliance, mattress, or similar item
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

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
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
                    Cleanup and sweeping
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals Section - NEW */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                Why Choose Our Cleanout Services San Diego
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">200+ Projects</h3>
                  <p className="text-gray-600">Completed cleanout and hauling projects across San Diego County</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed & Insured</h3>
                  <p className="text-gray-600">Fully licensed San Diego business with comprehensive liability coverage</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day Service</h3>
                  <p className="text-gray-600">Available for urgent cleanout needs and tight deadlines</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">All San Diego</h3>
                  <p className="text-gray-600">Serving every neighborhood throughout San Diego County</p>
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
                Cleanout Services Throughout San Diego County
              </h2>
              <p className="text-xl text-gray-600 mb-8 text-center">
                We serve all neighborhoods and communities. Professional service reaches every area. No location is too far.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
                {[
                  "Downtown San Diego", "North Park", "Hillcrest", "La Jolla", "Pacific Beach", "Mission Valley",
                  "Chula Vista", "Clairemont", "Point Loma", "University City", "Del Mar", "Encinitas",
                  "El Cajon", "La Mesa", "Santee", "Poway", "Escondido", "Oceanside",
                  "National City", "Imperial Beach", "Coronado", "Lemon Grove", "Spring Valley", "Carmel Valley"
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
        <CleanoutFAQSection />

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready for Professional Cleanout Services?
            </h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto">
              Get your free quote today. We handle all types of cleanouts. Garages, attics, full properties, and everything in between. Same-day service is available. Pricing is always transparent. Disposal is eco-friendly. Quality work is guaranteed.
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
                Get Free Quote
              </a>
            </div>
            <p className="text-blue-200 mt-6 text-lg">
              Licensed & Insured • Same-Day Service • Eco-Friendly Disposal • All San Diego Locations
            </p>
          </div>
        </section>
      </main>
      <Footer />
      </div>
    </>
  );
}
