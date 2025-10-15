import type { Metadata } from "next";
import Image from 'next/image';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BeforeAfter from "@/components/BeforeAfter";

export const metadata: Metadata = {
  title: "About Us | Severin Cleaners | Locally Owned San Diego Junk Removal",
  description: "Learn about Severin Cleaners, a locally owned San Diego junk removal company serving 200+ happy clients. Licensed, insured, and trusted for same-day junk hauling across San Diego County.",
  keywords: "San Diego junk removal, about Severin Cleaners, junk hauling San Diego, trash removal San Diego, locally owned junk removal",
  openGraph: {
    title: "About Severin Cleaners | Locally Owned San Diego Junk Removal",
    description: "Locally owned and trusted by 200+ San Diego clients. Same-day junk removal with transparent pricing and professional service.",
    url: "https://severincleaners.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section with Logo */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center text-white">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/optimized/logo.png"
                  alt="Severin Cleaners Logo"
                  width={128}
                  height={128}
                  className="h-32 w-32 object-contain drop-shadow-2xl"
                  priority
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                About Severin Cleaners
              </h1>
              <p className="text-2xl md:text-3xl mb-6 text-blue-100 font-semibold italic">
                "From Junk to Shine, We Handle Every Grime."
              </p>
              <p className="text-lg text-blue-100">
                Locally owned and trusted by over 200 San Diego families and businesses
              </p>
            </div>
          </div>
        </section>

        {/* Our Story with Before/After Images */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Before/After Images */}
              <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-4xl mx-auto">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/optimized/before.webp"
                    alt="Before junk removal - cluttered space"
                    fill
                    className="object-cover object-[60%_center]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                    BEFORE
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/optimized/after.webp"
                    alt="After junk removal - clean space"
                    fill
                    className="object-cover object-[60%_center]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                    AFTER
                  </div>
                </div>
              </div>

              {/* Mission Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
                  Our Mission
                </h2>
                <div className="max-w-4xl mx-auto mb-8">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    At Severin Cleaners, our mission is simple: deliver reliable, licensed, and insured <strong>San Diego junk removal</strong> that homeowners and businesses can count on. We understand that dealing with unwanted items can be overwhelming. That's why we founded Severin Cleaners: to remove the stress from <strong>junk hauling San Diego</strong> projects of all sizes.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    As a locally owned and operated business, we take pride in building long-term trust within our San Diego County community. Every job represents our commitment to professionalism, transparency, and respect for your property—guided by our principle: <strong>"From Junk to Shine, We Handle Every Grime."</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">

              {/* What Sets Us Apart */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What Sets Us Apart</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Same-Day Service</h4>
                      <p className="text-gray-700 text-sm">Fast response when you need it most</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Transparent Pricing</h4>
                      <p className="text-gray-700 text-sm">Upfront quotes with no hidden fees</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Professional Crews</h4>
                      <p className="text-gray-700 text-sm">Treat your property with care and respect</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Trusted Partner</h4>
                      <p className="text-gray-700 text-sm">Reliable <strong>trash removal San Diego</strong> depends on</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values - Mobile Optimized */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
                Our Core Values
              </h2>

              {/* Mobile: Compact 2-column grid */}
              <div className="md:hidden grid grid-cols-2 gap-3">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xs font-bold text-gray-900 text-center leading-tight">Quality of Work</h3>
                </div>

                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xs font-bold text-gray-900 text-center leading-tight">Speed & Efficiency</h3>
                </div>

                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xs font-bold text-gray-900 text-center leading-tight">Attention to Detail</h3>
                </div>

                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xs font-bold text-gray-900 text-center leading-tight">Responsiveness</h3>
                </div>

                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xs font-bold text-gray-900 text-center leading-tight">Transparency</h3>
                </div>

                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xs font-bold text-gray-900 text-center leading-tight">Customer-Focused</h3>
                </div>
              </div>

              {/* Desktop: Standard grid with descriptions */}
              <div className="hidden md:grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Quality of Work</h3>
                  <p className="text-gray-600 text-sm">
                    Every removal handled carefully and professionally, leaving your space clean and ready to use.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Speed & Efficiency</h3>
                  <p className="text-gray-600 text-sm">
                    Same-day pickups that keep your life moving. Efficient crews work quickly without sacrificing quality.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Attention to Detail</h3>
                  <p className="text-gray-600 text-sm">
                    Thorough cleanouts that leave spaces spotless. We clean up completely before we leave.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Responsiveness</h3>
                  <p className="text-gray-600 text-sm">
                    Quick scheduling, regular updates, and on-time arrivals. Clear communication from start to finish.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Transparency</h3>
                  <p className="text-gray-600 text-sm">
                    Upfront pricing with no hidden fees. Honest quotes before we start—no surprises, no fine print.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Customer-Focused</h3>
                  <p className="text-gray-600 text-sm">
                    Your satisfaction is our priority. We listen to your needs and deliver personalized solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Stats Grid */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-gray-900 text-center">
                Why Choose Severin Cleaners?
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">200+</div>
                  <div className="text-gray-900 font-semibold mb-2">Happy Clients</div>
                  <p className="text-gray-600 text-sm">
                    Satisfied customers across San Diego County
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-5xl font-bold text-orange-500 mb-2">100%</div>
                  <div className="text-gray-900 font-semibold mb-2">Licensed & Insured</div>
                  <p className="text-gray-600 text-sm">
                    Professional protection for every job
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-5xl font-bold text-green-600 mb-2">Same-Day</div>
                  <div className="text-gray-900 font-semibold mb-2">Fast Service</div>
                  <p className="text-gray-600 text-sm">
                    Quick response when you need us
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🏠</span>
                    Locally Owned Business
                  </h3>
                  <p className="text-gray-700 hidden md:block">
                    As a locally owned company, we treat your property with the same respect and care we'd give our own homes. We're invested in our San Diego community.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">⚡</span>
                    Reliable & Professional
                  </h3>
                  <p className="text-gray-700 hidden md:block">
                    Our experienced crews provide consistent, high-quality service with transparent pricing and clear communication from start to finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area - Condensed */}
        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
                Serving All of San Diego County
              </h2>
              <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
                Severin Cleaners provides comprehensive <strong>San Diego junk removal</strong> services throughout every neighborhood and community. Professional crews ready to help wherever you're located.
              </p>

              <div className="grid md:grid-cols-5 gap-4 mb-8">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-blue-900 mb-2 text-sm">Coastal</h3>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li>• <a href="/junk-removal-la-jolla" className="hover:text-blue-600">La Jolla</a></li>
                    <li>• <a href="/junk-removal-pacific-beach" className="hover:text-blue-600">Pacific Beach</a></li>
                    <li>• <a href="/junk-removal-del-mar" className="hover:text-blue-600">Del Mar</a></li>
                    <li>• <a href="/junk-removal-point-loma" className="hover:text-blue-600">Point Loma</a></li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-blue-900 mb-2 text-sm">Central</h3>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li>• <a href="/junk-removal-north-park" className="hover:text-blue-600">North Park</a></li>
                    <li>• <a href="/junk-removal-hillcrest" className="hover:text-blue-600">Hillcrest</a></li>
                    <li>• Downtown</li>
                    <li>• <a href="/junk-removal-clairemont" className="hover:text-blue-600">Clairemont</a></li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-blue-900 mb-2 text-sm">East County</h3>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li>• <a href="/junk-removal-el-cajon" className="hover:text-blue-600">El Cajon</a></li>
                    <li>• <a href="/junk-removal-la-mesa" className="hover:text-blue-600">La Mesa</a></li>
                    <li>• <a href="/junk-removal-santee" className="hover:text-blue-600">Santee</a></li>
                    <li>• <a href="/junk-removal-lakeside" className="hover:text-blue-600">Lakeside</a></li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-blue-900 mb-2 text-sm">South Bay</h3>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li>• <a href="/junk-removal-chula-vista" className="hover:text-blue-600">Chula Vista</a></li>
                    <li>• National City</li>
                    <li>• Imperial Beach</li>
                    <li>• Bonita</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-blue-900 mb-2 text-sm">North County</h3>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li>• <a href="/junk-removal-vista" className="hover:text-blue-600">Vista</a></li>
                    <li>• <a href="/junk-removal-oceanside" className="hover:text-blue-600">Oceanside</a></li>
                    <li>• <a href="/junk-removal-poway" className="hover:text-blue-600">Poway</a></li>
                    <li>• Carlsbad</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <p className="text-gray-700">
                  We handle <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:text-blue-700 font-semibold">residential</a>, <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:text-blue-700 font-semibold">commercial</a>, and <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:text-blue-700 font-semibold">construction debris</a> projects across all of San Diego County.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action - Modern Design */}
        <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready for Fast, Reliable Junk Removal?
              </h2>
              <p className="text-xl text-blue-100 mb-6">
                Join over 200 satisfied customers across San Diego County
              </p>
              <p className="text-2xl font-semibold text-orange-400 mb-8 italic">
                "From Junk to Shine, We Handle Every Grime."
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  (619) 750-0114
                </a>
                <a
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
