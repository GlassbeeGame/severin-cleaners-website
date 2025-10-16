import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CleanoutFAQSection from "./CleanoutFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Cleanout Services San Diego - Professional Junk Hauling & Property Cleanouts",
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
                From garage cleanout San Diego to full property cleanout San Diego projects, we handle all types of junk hauling with same-day availability, transparent pricing, and eco-friendly disposal. Trusted by homeowners, landlords, and real estate professionals throughout San Diego County.
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
                Our garage cleanout San Diego service transforms cluttered, overfilled garages into clean, functional spaces. Whether you've accumulated years of tools, seasonal decorations, old furniture, or automotive equipment, our professional junk hauling team efficiently clears everything out.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Most garage cleanout San Diego projects take 2-3 hours and range from $249-$429 depending on volume. We handle heavy lifting, sort items for donation or recycling, and leave your garage broom-clean. Our crews work carefully around vehicles and navigate tight spaces with ease.
              </p>
              <p className="text-lg text-gray-600">
                Common garage cleanout San Diego scenarios include preparing for home sales, creating workshop space, making room for vehicles, or simply reclaiming storage. We've helped hundreds of San Diego homeowners rediscover their garage space with our efficient cleanout services San Diego.
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
                Attic cleanout San Diego requires special care and expertise. Our trained crews safely navigate stairs, tight spaces, and temperature extremes to remove decades of accumulated belongings, insulation debris, old holiday decorations, and forgotten storage items.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Typical attic cleanout San Diego projects take 2-4 hours depending on accessibility and volume. We carefully handle fragile items, identify valuables you may have forgotten, and ensure nothing damages your home during removal. Many clients discover family heirlooms during our thorough attic cleanout San Diego service.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're preparing for renovations, dealing with pest issues, or need extra storage space, our attic cleanout San Diego service provides complete clearing with respectful handling of your belongings. We're insured for your protection during this specialized junk hauling work.
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
                Basement cleanout San Diego presents unique challenges including stairs, moisture-damaged items, heavy equipment, and years of accumulated storage. Our experienced crews handle everything from exercise equipment to old furniture, storage boxes, and water heaters.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Most basement cleanout San Diego jobs take 3-5 hours depending on basement size and access. We're equipped to handle narrow stairways, low ceilings, and tight doorways common in San Diego homes. Our basement cleanout San Diego service includes careful navigation to prevent wall damage during removal.
              </p>
              <p className="text-lg text-gray-600">
                Common basement cleanout San Diego situations include flood cleanup preparation, converting basements to living space, estate clearing, or eliminating mold-prone stored items. We work efficiently to restore your basement to usable condition through professional cleanout services San Diego.
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
                Stop paying monthly fees for units you no longer need. Our storage unit cleanout San Diego service completely clears rental units in 1-2 hours, helping you avoid additional rental charges. We handle everything from furniture to boxes, leaving units broom-clean for final inspection.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Storage unit cleanout San Diego projects typically range from $249-$366 depending on unit size. We work quickly and efficiently, coordinating with storage facilities and handling all disposal. Many San Diego storage facilities recommend our services for rapid tenant turnovers.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're downsizing, relocating, or clearing an inherited unit, our storage unit cleanout San Diego service provides same-day clearing. We donate usable items and recycle whenever possible as part of our comprehensive cleanout services San Diego.
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
                Shed cleanout San Diego is a specialty service for clearing outdoor storage buildings that have become dumping grounds for years of accumulated tools, lawn equipment, garden supplies, and miscellaneous items. From small tool sheds to large storage buildings, we clear them completely.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Most shed cleanout San Diego projects take 1-2 hours and cost between $175-$349 depending on shed size and contents. We remove everything including rusty tools, old paint cans, yard chemicals, broken equipment, and weathered furniture. Our shed cleanout San Diego service includes proper disposal of hazardous materials.
              </p>
              <p className="text-lg text-gray-600">
                Common reasons for shed cleanout San Diego include preparing properties for sale, reclaiming yard space, eliminating pest habitats, or preparing for shed demolition. We can coordinate with contractors if you're planning shed removal after our cleanout services San Diego are complete.
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
                Our comprehensive property cleanout San Diego service handles entire homes, estates, multi-unit buildings, and commercial spaces. We work with families settling estates, landlords dealing with tenant turnovers, realtors preparing homes for sale, and property managers handling eviction cleanouts.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Property cleanout San Diego projects vary widely in scope and duration. Single-family homes typically take 4-8 hours, while estate cleanouts may require multiple days. We provide systematic room-by-room clearing, careful handling of personal items, coordination with family members, and complete junk hauling services.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                For move-out situations, our property cleanout San Diego team works quickly to meet tight deadlines. Landlords appreciate our rapid turnaround for rental properties - we can often complete apartment cleanouts in 2-4 hours, minimizing vacancy periods. Realtors trust us to stage-prep homes by removing all unwanted items and debris.
              </p>
              <p className="text-lg text-gray-600">
                Estate property cleanout San Diego requires sensitivity and professionalism. We understand these situations are often emotional and stressful. Our crews work respectfully, set aside items of potential value or sentiment, and maintain discretion throughout the process. We've helped dozens of San Diego families through difficult transitions with compassionate cleanout services San Diego.
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
                Every cleanout services San Diego project includes responsible disposal practices that minimize environmental impact and support our local community.
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
                Volume-based pricing for all cleanout services San Diego. No hidden fees, no surprises - just honest junk hauling rates.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white text-center">
                  <div className="text-4xl font-bold mb-2">$175</div>
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
                Professional cleanout services San Diego available in all neighborhoods and communities.
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
              Get your free cleanout quote today! From garage cleanout San Diego to full property cleanout San Diego, we handle all junk hauling with same-day availability, transparent pricing, and eco-friendly disposal.
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
