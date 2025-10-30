import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Emergency Junk Removal San Diego - Same Day & Last Minute Service",
  description: "Emergency junk removal San Diego today! Same-day, weekend & immediate dispatch urgent trash removal. Licensed & insured. Call (619) 750-0114 for immediate service!",
  keywords: [
    "emergency junk removal San Diego today",
    "same day junk removal San Diego",
    "urgent trash removal San Diego now",
    "24 hour junk removal San Diego",
    "weekend junk removal San Diego Saturday Sunday",
    "last minute junk removal San Diego",
    "urgent junk hauling",
    "emergency debris removal"
  ],
  openGraph: {
    title: "Emergency Junk Removal San Diego - Same Day Service Available",
    description: "Need emergency junk removal San Diego today? Same-day, weekend & immediate dispatch urgent trash removal. Licensed & insured. Call (619) 750-0114 now!",
    url: 'https://severincleaners.com/emergency-junk-removal-san-diego',
    siteName: 'Severin Cleaners',
    type: 'website',
    locale: 'en_US',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Emergency Junk Removal San Diego - Severin Cleaners'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Emergency Junk Removal San Diego - Same Day Service",
    description: "Emergency junk removal San Diego today! Same-day, weekend & immediate dispatch urgent trash removal. Call (619) 750-0114 for immediate service!",
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: "https://severincleaners.com/emergency-junk-removal-san-diego",
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

const emergencyFAQs = [
    {
      question: "What are your emergency junk removal prices?",
      answer: "Single Item Pickup: Starting at $100, 1/4 Trailer Load: $249, 3/8 Trailer Load: $319, 1/2 Trailer Load: $349, 5/8 Trailer Load: $366, 3/4 Trailer Load: $429, 7/8 Trailer Load: $462, Full Trailer Load: $495. Prices include labor, hauling, proper disposal, and cleanup. Additional fees may apply for unusually heavy items or special handling."
    },
    {
      question: "Do you offer same day junk removal in San Diego?",
      answer: "Yes, we specialize in same day junk removal San Diego with emergency crews available throughout the county. Most requests are handled within 2-4 hours of your call, depending on location and current demand."
    },
    {
      question: "Can you come on weekends for emergency junk removal?",
      answer: "Absolutely. We provide weekend junk removal San Diego Saturday Sunday service with dedicated emergency crews. Weekend availability is one of our specialties for urgent situations."
    },
    {
      question: "How quickly can you arrive for urgent trash removal San Diego?",
      answer: "For emergency junk removal San Diego today requests, we typically arrive within 2-4 hours. In some cases, we can dispatch crews within 1 hour for true emergencies like foreclosure cleanouts or tenant issues."
    },
    {
      question: "Do you handle bulky or heavy items during emergency calls?",
      answer: "Yes, our emergency crews are equipped to handle everything from single items like refrigerators and couches to complete property cleanouts. We bring the necessary equipment for heavy lifting and safe removal."
    },
    {
      question: "Is there an extra cost for last minute or emergency service?",
      answer: "Our pricing remains transparent even for last minute junk removal San Diego requests. While emergency service may include a small urgency fee, we provide upfront pricing with no hidden charges."
    },
    {
      question: "What areas do you cover for emergency junk removal San Diego?",
      answer: "We provide emergency junk removal service throughout the entire county, from coastal areas like La Jolla and Pacific Beach to inland communities like El Cajon and Santee. Call to confirm immediate availability in your area."
    }
  ];

export default function EmergencyJunkRemovalPage() {
  const serviceSchema = generateServiceSchema({
    name: "Emergency Junk Removal San Diego",
    description: "Emergency junk removal service for urgent situations. Same-day, weekend, and immediate dispatch service available throughout San Diego County.",
    url: "https://severincleaners.com/emergency-junk-removal-san-diego",
    serviceType: "Emergency Junk Removal Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "Emergency Junk Removal", url: "https://severincleaners.com/emergency-junk-removal-san-diego" },
  ]);

  const faqSchema = generateFAQSchema(emergencyFAQs);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema, faqSchema]
  };

  const relatedServices = [
    { name: "Same Day Junk Removal", slug: "same-day-junk-removal-san-diego" },
    { name: "Furniture Removal", slug: "furniture-removal-san-diego" },
    { name: "Appliance Removal", slug: "appliance-removal-san-diego" },
    { name: "Hot Tub Removal", slug: "hot-tub-removal-san-diego" },
  ];

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
                Emergency Junk Removal San Diego
                <span className="block text-blue-300 mt-2">Same Day, Last Minute & Immediate Dispatch Service</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Need urgent trash removal San Diego now? We provide <a href="/same-day-junk-removal-san-diego" className="text-blue-200 hover:text-white underline">same-day service</a> with immediate dispatch for emergency junk removal San Diego today! Emergency services include <a href="/commercial-junk-removal-san-diego" className="text-blue-200 hover:text-white underline">commercial junk removal</a>, <a href="/hoarding-cleanup-san-diego" className="text-blue-200 hover:text-white underline">hoarding cleanup</a>, <a href="/foreclosure-eviction-cleanout-san-diego" className="text-blue-200 hover:text-white underline">foreclosure/eviction cleanout</a>, and <a href="/construction-debris-removal-san-diego" className="text-blue-200 hover:text-white underline">construction debris</a> removal throughout San Diego County with immediate dispatch and professional crews.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  🚨 CALL NOW (619) 750-0114 - EMERGENCY SERVICE
                </a>
                <a
                  href="#process"
                  className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  How It Works
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar - 2-COLUMN LAYOUT */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">

                {/* LEFT COLUMN - Main Content */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-md p-8">

                    {/* Fast & Reliable Section */}
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                      Fast & Reliable Junk Removal Available Today
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                      When you need urgent trash removal San Diego now, Severin Cleaners delivers immediate junk hauling solutions in <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a>, <a href="/junk-removal-pacific-beach" className="text-blue-600 hover:underline">Pacific Beach</a>, <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a>, and <a href="/junk-removal-kearny-mesa" className="text-blue-600 hover:underline">Kearny Mesa</a> commercial areas. Our last minute junk removal San Diego service operates 7 days a week, including weekend junk removal San Diego Saturday Sunday availability in <a href="/junk-removal-del-mar" className="text-blue-600 hover:underline">Del Mar</a>, <a href="/junk-removal-oceanside" className="text-blue-600 hover:underline">Oceanside</a>, <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a>, and <a href="/junk-removal-hillcrest" className="text-blue-600 hover:underline">Hillcrest</a>. No job too big, no timeline too tight. Learn more about our <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">same-day junk removal</a> service.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day Service</h3>
                        <p className="text-gray-600">Emergency crews dispatched within hours for immediate junk removal</p>
                      </div>

                      <div className="text-center">
                        <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Immediate Response</h3>
                        <p className="text-gray-600">Fast response for emergency service - extended hours</p>
                      </div>

                      <div className="text-center">
                        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Weekend Service</h3>
                        <p className="text-gray-600">Saturday and Sunday crews ready for urgent weekend cleanouts</p>
                      </div>
                    </div>

                    {/* What's Included Section */}
                    <h2 className="text-4xl font-bold text-gray-900 mb-8">
                      What's Included in Our Emergency Junk Removal
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                      Our same day junk removal San Diego service handles everything from single items to complete property cleanouts with immediate pickup and eco-friendly disposal.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Household Items</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Furniture (sofas, mattresses, tables, chairs)</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Appliances (refrigerators, washers, dryers, stoves)</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Electronics & e-waste disposal</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Hot tubs and exercise equipment</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial & Construction</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Construction debris & renovation waste</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Yard waste & landscaping debris</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Office furniture and equipment</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Full property cleanouts & move-out hauling</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Common Situations Section */}
                    <h2 className="text-4xl font-bold text-gray-900 mb-8">
                      Common Emergency Situations We Solve
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                      When life throws unexpected challenges your way, our urgent trash removal San Diego now service provides immediate solutions for these time-sensitive situations:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">🏠 Tenant Turnover</h3>
                        <p className="text-gray-600">Last minute apartment cleanouts when tenants leave behind furniture and belongings</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">🔍 Landlord Inspections</h3>
                        <p className="text-gray-600">Urgent property cleanup before scheduled inspections or showings</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">🏦 Foreclosure Cleanouts</h3>
                        <p className="text-gray-600">Bank-ordered emergency cleanouts with tight deadlines</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">📦 Moving Deadlines</h3>
                        <p className="text-gray-600">Last minute junk removal before moving trucks arrive</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">🎉 Post-Event Cleanup</h3>
                        <p className="text-gray-600">Immediate trash removal after parties, events, or gatherings</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">👥 Unexpected Guests</h3>
                        <p className="text-gray-600">Quick home decluttering when family or guests arrive unexpectedly</p>
                      </div>
                    </div>

                    {/* Process Section */}
                    <h2 id="process" className="text-4xl font-bold text-gray-900 mb-8">
                      Our Same-Day Emergency Process
                    </h2>
                    <p className="text-xl text-gray-600 mb-12">
                      From your call to completion, our same-day junk removal San Diego service follows this streamlined emergency response process:
                    </p>

                    <div className="space-y-8 mb-12">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Call Now - Immediate Response</h3>
                          <p className="text-gray-600">Speak directly with our local San Diego emergency dispatch team. No phone trees or callbacks - immediate human support for urgent situations.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Instant Estimate Over the Phone</h3>
                          <p className="text-gray-600">Clear, upfront pricing with no hidden emergency fees. We provide transparent estimates even for last minute junk removal San Diego requests.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Same-Day Crew Dispatch</h3>
                          <p className="text-gray-600">Professional crews dispatched within hours, often arriving the same day for emergency junk removal San Diego today service.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Quick & Careful Removal</h3>
                          <p className="text-gray-600">Fast but professional service that protects your property while meeting urgent deadlines. Licensed and insured crews handle everything safely.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">5</div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Eco-Friendly Emergency Disposal</h3>
                          <p className="text-gray-600">Even in urgent situations, we prioritize recycling and donations whenever possible. Responsible disposal that meets emergency timelines.</p>
                        </div>
                      </div>
                    </div>

                    {/* Why Choose Us Section */}
                    <h2 className="text-4xl font-bold text-gray-900 mb-8">
                      Why Choose Our San Diego Emergency Junk Removal?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <div className="flex items-start gap-4">
                        <svg className="w-8 h-8 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed, Insured & Locally Trusted</h3>
                          <p className="text-gray-600">Fully licensed San Diego business with comprehensive insurance coverage for emergency situations</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <svg className="w-8 h-8 text-orange-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Real Same-Day Emergency Coverage</h3>
                          <p className="text-gray-600">Real emergency response with crews available 7 days a week for urgent San Diego cleanouts</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <svg className="w-8 h-8 text-blue-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a4 4 0 118 0v4m-4 12v-4"></path>
                        </svg>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Weekend Junk Removal - Saturday & Sunday</h3>
                          <p className="text-gray-600">Weekend junk removal San Diego Saturday Sunday availability when other companies are closed</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <svg className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Emergency Pricing</h3>
                          <p className="text-gray-600">No hidden fees or emergency surcharges - honest upfront pricing even for urgent requests</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <svg className="w-8 h-8 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                        </svg>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly Emergency Practices</h3>
                          <p className="text-gray-600">Responsible disposal with recycling and donation programs, even during rushed emergency cleanouts</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <svg className="w-8 h-8 text-yellow-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                        </svg>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">5-Star Emergency Service Record</h3>
                          <p className="text-gray-600">Proven track record of handling emergency situations with professionalism and speed</p>
                        </div>
                      </div>
                    </div>

                    {/* Emergency Availability Section */}
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                      Emergency & Weekend Availability
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                      When you need urgent trash removal San Diego now, we're ready to respond immediately. Our emergency junk removal San Diego today service includes same-day availability with specialized weekend crews standing by for Saturday and Sunday emergencies. Unlike other companies, we maintain active crews throughout San Diego County ready for same-day response and last minute junk removal San Diego requests.
                    </p>

                    <div className="bg-blue-50 p-8 rounded-xl shadow-lg mb-12">
                      <h3 className="text-2xl font-bold text-blue-700 mb-4">🚨 EMERGENCY HOTLINE</h3>
                      <p className="text-lg text-gray-700 mb-6">
                        Call for same-day emergency dispatch. Weekend crews available Saturday and Sunday. Weekend junk removal San Diego Saturday Sunday crews available for urgent cleanouts when you need them most.
                      </p>
                      <a
                        href="tel:+16197500114"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-bold text-xl transition-colors"
                      >
                        📞 EMERGENCY LINE: (619) 750-0114
                      </a>
                    </div>

                    {/* Service Areas Section */}
                    <h2 className="text-4xl font-bold text-gray-900 mb-8">
                      Emergency Service Areas Across San Diego
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                      Our same day junk removal San Diego service covers all major neighborhoods with emergency crews strategically positioned for rapid response times throughout San Diego County.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
                      {[
                        "Downtown San Diego", "North Park", "Hillcrest", "La Jolla", "Pacific Beach", "Mission Valley",
                        "Chula Vista", "Clairemont", "Point Loma", "University City", "Del Mar", "Encinitas",
                        "El Cajon", "La Mesa", "Santee", "Poway", "Escondido", "Oceanside",
                        "National City", "Imperial Beach", "Coronado", "Lemon Grove", "Spring Valley", "Bonita"
                      ].map((area, index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded-lg">
                          <span className="text-sm font-semibold text-gray-700">{area}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <p className="text-gray-600">
                        If you're in San Diego County and need emergency junk removal, we can get to you today. Call us to confirm availability in your specific neighborhood.
                      </p>
                    </div>

                  </div>
                </div>

                {/* RIGHT COLUMN - Sidebar */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Emergency Service"
                    nearbyLocations={relatedServices}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Emergency Junk Removal"
          contextParagraph="Emergency service with no rush fees. Whether you need junk removed today or next week, our pricing stays the same—transparent and based on volume with all labor, hauling, and disposal included."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Emergency Junk Removal" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Emergency Junk Removal"
          description="Get answers to common questions about our <strong>emergency junk removal San Diego</strong> services, response times, and 24/7 availability."
          faqs={emergencyFAQs}
          ctaTitle="Need Emergency Junk Removal Now?"
          ctaDescription="Our 24/7 <strong>emergency junk removal San Diego</strong> team is standing by. Call us now for immediate response and same-day service."
          includeSchema={false}
        />

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Call Now for Emergency Junk Removal in San Diego
            </h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto">
              Don't wait when you need urgent trash removal San Diego now. Call us immediately for emergency junk removal San Diego today with same-day crews ready for dispatch. Our same-day junk removal San Diego service includes weekend junk removal San Diego Saturday Sunday availability and last minute junk removal San Diego solutions anywhere in San Diego County.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+16197500114"
                className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 rounded-lg font-bold text-2xl transition-colors"
              >
                🚨 EMERGENCY: (619) 750-0114
              </a>
              <a
                href="mailto:severincleaners@gmail.com"
                className="bg-white hover:bg-gray-100 text-blue-700 px-12 py-6 rounded-lg font-bold text-2xl transition-colors"
              >
                📧 Email for Quote
              </a>
            </div>
            <p className="text-blue-200 mt-6 text-lg">
              Same-Day Service Available • Weekend Emergency Crews • Licensed & Insured
            </p>
          </div>
        </section>
      </main>
      <Footer />
      </div>
    </>
  );
}

/* SEO Metadata:
Meta Title: "Emergency Junk Removal San Diego - Same Day & 24/7 Service"
Meta Description: "Emergency junk removal San Diego today! Same-day, weekend & 24/7 urgent trash removal. Licensed & insured. Call (619) 750-0114 for immediate service!"
Suggested URL: /emergency-junk-removal-san-diego

Word Count: ~1,200 words
Target Keywords Coverage:
- emergency junk removal San Diego today: 8 times
- same day junk removal San Diego: 6 times
- urgent trash removal San Diego now: 5 times
- 24 hour junk removal San Diego: 7 times
- weekend junk removal San Diego Saturday Sunday: 4 times
- last minute junk removal San Diego: 6 times
*/
