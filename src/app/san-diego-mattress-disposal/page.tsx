import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import OptimizedGradientHero from "@/components/OptimizedGradientHero";

export const metadata: Metadata = {
  title: "Mattress Disposal San Diego | Same-Day Recycling & Removal | (619) 750-0114",
  description: "Professional mattress disposal San Diego. Mattress removal $100 (general junk removal from $69). Same-day service, eco-friendly recycling. Call (619) 750-0114.",
  keywords: [
    "mattress disposal san diego",
    "mattress recycling san diego",
    "mattress removal san diego",
    "mattress pick up san diego",
    "free mattress disposal san diego",
    "free mattress recycling san diego",
    "san diego mattress disposal",
    "box spring removal san diego",
    "mattress haul away san diego",
    "eco-friendly mattress disposal"
  ],
  openGraph: {
    title: "Mattress Disposal San Diego | Same-Day Recycling & Removal",
    description: "Professional mattress disposal San Diego. Mattress removal $100 (general junk removal from $69). Same-day service, eco-friendly recycling.",
    url: 'https://severincleaners.com/san-diego-mattress-disposal',
    siteName: 'Severin Cleaners',
    type: 'website',
    locale: 'en_US',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Mattress Disposal San Diego - Severin Cleaners'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mattress Disposal San Diego | Same-Day Recycling & Removal",
    description: "Professional mattress disposal San Diego. Mattress removal $100 (general junk removal from $69). Same-day service, eco-friendly recycling.",
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: "https://severincleaners.com/san-diego-mattress-disposal",
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
    'geo.placename': 'San Diego',
    'geo.position': '32.7157;-117.1611',
    'ICBM': '32.7157, -117.1611',
  },
};

const mattressFAQs = [
    {
      question: "How much does mattress disposal San Diego cost?",
      answer: "Mattress removal costs $100. That includes all labor, hauling, and recycling. Our general junk removal starts at $69 for small items. Have multiple mattresses? We offer volume pricing: 1/4 Load ($249), 1/2 Load ($349), Full Load ($495). No hidden fees. Call (619) 750-0114 for an exact quote."
    },
    {
      question: "Is there free mattress disposal San Diego or free mattress recycling San Diego?",
      answer: "Yes, the City of San Diego offers free mattress recycling San Diego programs. The Bye Bye Mattress program and mattress collection sites are available. But there's a catch. You take it there yourself. You need a truck. You wait in long lines at Miramar Greenery or other sites. Limited hours only. It takes your whole day. Our mattress disposal San Diego service costs $100. We come to you. We do all the work. Same-day pick up available. Most people find our service easier and cheaper than DIY when you count truck rental, gas, and your time."
    },
    {
      question: "Do you offer mattress recycling San Diego services?",
      answer: "Yes! Mattress recycling San Diego is what we do. We partner with certified recycling facilities. They recycle up to 80% of mattress materials. Steel springs become scrap metal. Foam padding becomes carpet underlay. Wood frames become mulch or fuel. Fabric gets reused for industrial use. Our mattress recycling San Diego service keeps waste out of landfills."
    },
    {
      question: "Do you offer same-day mattress removal San Diego?",
      answer: "Yes! Call before 2 PM for same-day mattress removal San Diego. Our mattress pick up San Diego team serves all neighborhoods. Pacific Beach to Chula Vista. La Jolla to El Cajon. Same-day mattress removal San Diego works great for rental turnovers, HOA violations, or quick property sales."
    },
    {
      question: "What areas do you serve for mattress pick up San Diego?",
      answer: "We cover all San Diego County. Downtown, North Park, Hillcrest, La Jolla, Pacific Beach. Chula Vista, El Cajon, La Mesa, Oceanside, Escondido. Everywhere in between. We handle apartments, houses, condos, and commercial properties. Call (619) 750-0114 to confirm your area."
    },
    {
      question: "Do you remove box springs and bed frames too?",
      answer: "Yes! Our mattress disposal San Diego service removes everything. Mattresses, box springs, bed frames, headboards. We handle complete bedroom furniture sets. Multiple items? No problem. We use volume-based pricing. One trip. Easy and affordable."
    },
    {
      question: "Can you pick up from apartments or multi-story buildings?",
      answer: "Yes! Our mattress removal San Diego team works in apartments, high-rises, and multi-story buildings. We take elevators or stairs. We protect your walls and floors. Ground floor or 20th floor? Doesn't matter. We handle all the heavy lifting for your mattress pick up San Diego."
    }
  ];

export default function MattressDisposalPage() {
  const relatedServices = [
    { name: "Furniture Removal", slug: "furniture-disposal-san-diego" },
    { name: "Couch Removal", slug: "couch-removal-san-diego" },
    { name: "Same-Day Junk Removal", slug: "same-day-junk-removal-san-diego" },
    { name: "Estate Cleanouts", slug: "estate-cleanout-san-diego" },
  ];

  const serviceSchema = generateServiceSchema({
    name: "Mattress Disposal San Diego",
    description: "Professional mattress disposal San Diego with same-day mattress pick up, eco-friendly mattress recycling San Diego, and responsible mattress removal San Diego. Licensed and insured service throughout San Diego County.",
    url: "https://severincleaners.com/san-diego-mattress-disposal",
    serviceType: "Mattress Removal Service",
    areaServed: "San Diego County, CA",
  });

  // Enhanced LocalBusiness schema for mattress disposal
  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://severincleaners.com/san-diego-mattress-disposal#business",
    "name": "Severin Cleaners - Mattress Disposal San Diego",
    "image": "https://severincleaners.com/og-image.jpg",
    "telephone": "+1-619-750-0114",
    "priceRange": "$69-$495",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Diego",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.7157,
      "longitude": -117.1611
    },
    "url": "https://severincleaners.com/san-diego-mattress-disposal",
    "areaServed": {
      "@type": "City",
      "name": "San Diego",
      "containedInPlace": {
        "@type": "State",
        "name": "California"
      }
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mattress Disposal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mattress Recycling San Diego",
            "description": "Eco-friendly mattress recycling San Diego service"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mattress Removal San Diego",
            "description": "Same-day mattress removal San Diego service"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mattress Pick Up San Diego",
            "description": "Professional mattress pick up San Diego throughout county"
          }
        }
      ]
    }
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "Mattress Disposal San Diego", url: "https://severincleaners.com/san-diego-mattress-disposal" },
  ]);

  const faqSchema = generateFAQSchema(mattressFAQs);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, localBusinessSchema, breadcrumbSchema, faqSchema]
  };

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <Header />
      <main>
        <OptimizedGradientHero
          title="Mattress Disposal San Diego | Recycling & Removal"
          subtitle="⭐ Same-Day Mattress Pick Up • Eco-Friendly Recycling • Licensed & Insured"
          description="✓ Mattress removal $100 ✓ General junk removal from $69 ✓ All San Diego County"
        />

        {/* Main Content Section with 2-Column Layout */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* LEFT COLUMN - Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Professional Mattress Disposal San Diego Trusts
                  </h2>
                  <p className="text-xl text-gray-600 mb-3">
                    Need <strong>mattress disposal San Diego</strong>? We make it easy.
                  </p>

                  <p className="text-lg text-gray-700 mb-3">
                    Our <strong>mattress removal San Diego</strong> team picks up your old mattress fast. Same-day <strong>mattress pick up San Diego</strong> available when you call before 2 PM.
                  </p>

                  <p className="text-lg text-gray-700 mb-3">
                    <strong>Mattress removal is $100.</strong> Our general junk removal starts at $69 for small items like chairs.
                  </p>

                  <p className="text-lg text-gray-700 mb-3">
                    We handle all the work. You just point to the mattress. We lift it, haul it, and recycle it.
                  </p>

                  <p className="text-lg text-gray-700 mb-8">
                    Our <strong>mattress recycling San Diego</strong> service is eco-friendly. We keep mattresses out of landfills when possible.
                  </p>

                  <p className="text-lg text-gray-700 mb-3">
                    <strong>We serve all San Diego County.</strong>
                  </p>

                  <p className="text-lg text-gray-700 mb-8">
                    <a href="/junk-removal-pacific-beach" className="text-blue-600 hover:underline">Pacific Beach</a>, <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a>, <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a>, <a href="/junk-removal-north-park" className="text-blue-600 hover:underline">North Park</a>, <a href="/junk-removal-hillcrest" className="text-blue-600 hover:underline">Hillcrest</a>, <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a>, <a href="/junk-removal-oceanside" className="text-blue-600 hover:underline">Oceanside</a>, <a href="/junk-removal-clairemont" className="text-blue-600 hover:underline">Clairemont</a>, and everywhere in between.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                    <p className="text-gray-800 font-semibold mb-2">📞 Need Same-Day Mattress Pick Up San Diego?</p>
                    <p className="text-gray-700">
                      Call <a href="tel:6197500114" className="text-blue-600 font-bold hover:underline">(619) 750-0114</a> before 2 PM for same-day <strong>mattress removal San Diego</strong> service. Free quotes, upfront pricing, and eco-friendly <strong>mattress recycling San Diego</strong> guaranteed.
                    </p>
                  </div>

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

                  {/* Free Mattress Disposal Section */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      Free Mattress Disposal San Diego vs. Professional Service
                    </h3>
                    <p className="text-lg text-gray-700 mb-3">
                      Looking for <strong>free mattress disposal San Diego</strong>? Or <strong>free mattress recycling San Diego</strong>?
                    </p>

                    <p className="text-lg text-gray-700 mb-6">
                      The City of San Diego offers free programs at mattress collection sites. The Bye Bye Mattress program provides free recycling. But "free" isn't always better. Let us show you why.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-red-900 mb-4">❌ "Free" City Programs Reality</h4>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-red-600 mr-2">•</span>
                            <span><strong>You do all the work:</strong> Rent a truck ($75-150). Load the mattress. Secure it. Drive there.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-600 mr-2">•</span>
                            <span><strong>Limited hours:</strong> Mattress collection sites like Miramar Greenery open weekdays only. Wait 1-2 hours in line.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-600 mr-2">•</span>
                            <span><strong>Heavy lifting:</strong> You load it. You unload it. Risk injury.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-600 mr-2">•</span>
                            <span><strong>Takes your whole day:</strong> Rental. Driving. Waiting. Return trip.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-600 mr-2">•</span>
                            <span><strong>Hidden costs add up:</strong> Truck rental, gas, fees, your time.</span>
                          </li>
                        </ul>
                        <p className="mt-4 font-semibold text-red-800">
                          Real DIY cost: $100-200+ in rental, fuel, time, physical effort, and risk
                        </p>
                      </div>

                      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-green-900 mb-4">✓ Our Professional Mattress Disposal San Diego</h4>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span><strong>We come to you:</strong> Any room. Any floor. Any building.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span><strong>Same-day service:</strong> Call before 2 PM. We arrive same day.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span><strong>No work for you:</strong> We lift. We load. We haul.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span><strong>Fast service:</strong> Done in 15-30 minutes.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span><strong>All-in pricing:</strong> $100 flat rate. Covers everything.</span>
                          </li>
                        </ul>
                        <p className="mt-4 font-semibold text-green-800">
                          Professional service: $100 flat rate. Similar cost, zero hassle, no risk.
                        </p>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <p className="text-lg text-gray-800 mb-3">
                        <strong>Bottom Line:</strong> <strong>Free mattress disposal San Diego</strong> programs cost you time, truck rental, gas, and hard work.
                      </p>

                      <p className="text-lg text-gray-800 mb-3">
                        Most people spend $100-200 on DIY disposal at Miramar Landfill or Bye Bye Mattress collection sites. Our $100 service saves you money and your whole day.
                      </p>

                      <p className="text-gray-700">
                        Call <a href="tel:6197500114" className="text-blue-600 font-bold hover:underline">(619) 750-0114</a> for <strong>mattress disposal San Diego</strong> that's actually easy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN - Sidebar */}
              <div className="lg:col-span-1">
                <LocationSidebarCTA
                  locationName="Mattress Disposal"
                  nearbyLocations={relatedServices}
                  nearbyHeading="Services We Provide"
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
                Complete Mattress Removal San Diego Service
              </h2>
              <p className="text-xl text-gray-600 mb-4 text-center">
                Our <strong>mattress removal San Diego</strong> service handles all mattress types, sizes, and conditions.
              </p>
              <p className="text-lg text-gray-700 mb-4 text-center">
                Twin to California king beds? We remove it all. Bulky items like box springs and bed frames too.
              </p>
              <p className="text-lg text-gray-700 mb-12 text-center">
                Same-day <strong>mattress pick up San Diego</strong> with eco-friendly <strong>mattress recycling San Diego</strong>.
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
                      <span className="text-gray-700">Headboards and <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:text-blue-700 underline">bedroom furniture</a></span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 bg-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">💚 Donation & Proper Disposal</h3>
                <p className="text-gray-700 text-center mb-3">
                  Mattresses in good condition may be donated to local charities.
                </p>
                <p className="text-gray-700 text-center mb-3">
                  Mattresses soiled or infested with bedbugs? We handle safe disposal. All items disposed in full compliance with City of San Diego Environmental Services Department regulations.
                </p>
                <p className="text-gray-700 text-center mb-4">
                  <strong>Note:</strong> We don't remove household hazardous waste. That requires special handling.
                </p>
                <p className="text-gray-700 text-center">
                  We provide quick and affordable mattress haul away in San Diego. Perfect for removing old or damaged mattresses. Need other items removed too? Check out our <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:text-blue-700 font-semibold underline">furniture removal services</a> or full <a href="/san-diego-junk-removal" className="text-blue-600 hover:text-blue-700 font-semibold underline">junk removal in San Diego</a>.
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
                Eco-Friendly Mattress Recycling San Diego
              </h2>
              <p className="text-xl text-gray-600 mb-4 text-center">
                Professional <strong>mattress recycling San Diego</strong> service that diverts up to 80% of materials from landfills.
              </p>
              <p className="text-lg text-gray-700 mb-8 text-center">
                Our <strong>mattress disposal San Diego</strong> process prioritizes environmental responsibility. Full compliance with City of San Diego regulations guaranteed.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h3 className="text-2xl font-bold text-green-900 mb-3">Why Choose Eco-Friendly Mattress Recycling San Diego?</h3>
                <p className="text-gray-700 mb-3">
                  San Diego generates thousands of unwanted mattresses every year. Traditional Miramar Landfill disposal wastes valuable materials.
                </p>
                <p className="text-gray-700 mb-3">
                  Our <strong>mattress recycling San Diego</strong> partnership with certified local facilities ensures proper recycling. Your old mattress gets dismantled. Components get reused responsibly.
                </p>
                <p className="text-gray-700">
                  This protects San Diego's environment. It supports the local circular economy. Much better than sending bulky items to the landfill.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">♻️ What Gets Recycled in Mattress Recycling San Diego</h3>
                  <p className="text-gray-700 mb-4">
                    Our <strong>mattress recycling San Diego</strong> partners dismantle mattresses. They recycle up to 80% of materials through recycling programs:
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
                      Foam padding for carpet padding insulation
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
          contextParagraph="Mattress removal is $100 (standard-sized items). Our general junk removal pricing starts at $69 for small items like chairs. We can handle multiple items in one trip including box springs, bed frames, and other furniture. Every price includes hauling, labor, and responsible disposal."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Mattress Disposal" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Mattress Disposal San Diego"
          description="Get answers to common questions about our <strong>San Diego mattress disposal</strong> service and eco-friendly recycling options."
          faqs={mattressFAQs}
          ctaTitle="Still Have Questions About Mattress Disposal?"
          ctaDescription="Our experienced team is ready to answer any questions about our <strong>San Diego mattress disposal</strong> services, provide detailed quotes, or schedule your pickup."
          includeSchema={false}
        />

        {/* Service Areas Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                San Diego Neighborhoods Served
              </h2>
              <p className="text-xl text-gray-600 mb-4 text-center">
                We serve all San Diego neighborhoods. Coastal communities to East County and beyond.
              </p>
              <p className="text-lg text-gray-700 mb-8 text-center">
                North Park, La Mesa, Pacific Beach, Hillcrest, Downtown San Diego? We've got you covered.
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
              Schedule Your Mattress Disposal San Diego Today
            </h2>
            <p className="text-xl mb-4 max-w-4xl mx-auto">
              Professional <strong>mattress disposal San Diego</strong> with same-day <strong>mattress pick up San Diego</strong> service.
            </p>
            <p className="text-lg mb-8 max-w-4xl mx-auto">
              Eco-friendly <strong>mattress recycling San Diego</strong> • Licensed & Insured • Upfront Pricing • All San Diego County. Better than Bye Bye Mattress program or <strong>free mattress disposal San Diego</strong> at mattress collection sites—we come to you! View all our <a href="/san-diego-junk-removal" className="text-blue-200 hover:text-white underline">San Diego junk removal services</a>.
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
    </>
  );
}
