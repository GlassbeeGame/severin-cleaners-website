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
  description: "Professional mattress disposal San Diego. Same-day mattress recycling, removal & pick up starting at $100. Eco-friendly, licensed & insured. Serving all SD County.",
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
    description: "Professional mattress disposal San Diego. Same-day mattress recycling, removal & pick up starting at $100. Eco-friendly, licensed & insured.",
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
    description: "Professional mattress disposal San Diego. Same-day mattress recycling, removal & pick up starting at $100. Eco-friendly, licensed & insured.",
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
      answer: "Our mattress disposal San Diego service starts at $100 for standard mattress pick up, including all labor, hauling, and eco-friendly disposal or recycling. Multiple mattresses or additional items like box springs and bed frames can be combined for volume pricing: 1/4 Load ($249), 1/2 Load ($349), Full Load ($495). We provide upfront quotes with no hidden fees. Call (619) 750-0114 for exact pricing based on your needs."
    },
    {
      question: "Is there free mattress disposal San Diego or free mattress recycling San Diego?",
      answer: "While City of San Diego programs offer limited free mattress recycling San Diego options, they require transporting mattresses yourself to specific facilities during limited hours and often involve long wait times. Most free mattress disposal San Diego services through the city have restrictions and scheduling delays. Our professional mattress disposal San Diego service at $100 includes same-day pick up, all labor, hauling, and guaranteed proper recycling or disposal—saving you time, vehicle rental costs, and physical strain. For most San Diego residents, our service is more convenient and cost-effective than DIY free options."
    },
    {
      question: "Do you offer mattress recycling San Diego services?",
      answer: "Yes! Mattress recycling San Diego is a core part of our eco-friendly approach. We partner with certified San Diego mattress recycling facilities that dismantle and recycle up to 80% of mattress materials. Steel springs are recycled as scrap metal, foam padding becomes carpet underlay, wood frames are processed into mulch or fuel, and fabric is repurposed for industrial use. Our mattress recycling San Diego service helps keep San Diego clean while diverting waste from landfills."
    },
    {
      question: "Do you offer same-day mattress removal San Diego?",
      answer: "Yes! We provide same-day mattress removal San Diego service when you call before 2 PM. Our mattress pick up San Diego team serves all neighborhoods throughout San Diego County, from Pacific Beach and La Jolla to Chula Vista and El Cajon. Same-day mattress removal San Diego is perfect for urgent situations like rental turnovers, HOA violations, or quick property sales."
    },
    {
      question: "What areas do you serve for mattress pick up San Diego?",
      answer: "Our mattress pick up San Diego service covers all San Diego County neighborhoods including downtown San Diego, North Park, Hillcrest, La Jolla, Pacific Beach, Chula Vista, El Cajon, La Mesa, Oceanside, Escondido, and everywhere in between. We handle apartment buildings, houses, condos, and commercial properties throughout the entire county. Call (619) 750-0114 to confirm service in your specific area."
    },
    {
      question: "Do you remove box springs and bed frames too?",
      answer: "Absolutely! Our mattress disposal San Diego service includes removal of mattresses, box springs, bed frames, headboards, and complete bedroom furniture sets. We can handle multiple items in one trip with our volume-based pricing, making it easy and affordable to clear out entire bedrooms during moves, upgrades, or estate cleanouts."
    },
    {
      question: "Can you pick up from apartments or multi-story buildings?",
      answer: "Yes, our mattress removal San Diego team is experienced with apartment complexes, high-rises, and multi-story buildings. We navigate elevators, narrow stairways, and tight hallways while protecting walls and floors. Whether you're on the ground floor or the 20th floor, we handle all the heavy lifting and logistics for your mattress pick up San Diego."
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
    "priceRange": "$100-$495",
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
    "openingHours": "Mo-Su 06:00-20:00",
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
          description="✓ Starting at $100 ✓ All San Diego County ✓ Professional Mattress Removal San Diego"
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
                  <p className="text-xl text-gray-600 mb-6">
                    When you need reliable <strong>mattress disposal San Diego</strong>, Severin Cleaners delivers fast, affordable, and eco-friendly service throughout San Diego County. Our professional <strong>mattress removal San Diego</strong> team provides same-day <strong>mattress pick up San Diego</strong> service starting at just $100, including all labor, hauling, and responsible <strong>mattress recycling San Diego</strong> or compliant disposal.
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Whether you're upgrading your bedroom, clearing out a rental property in <a href="/junk-removal-pacific-beach" className="text-blue-600 hover:underline">Pacific Beach</a>, handling an estate cleanout in <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a>, or managing a property turnover in <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a>, our <strong>mattress disposal San Diego</strong> service handles everything from single mattresses to complete bedroom furniture removal. We serve all San Diego neighborhoods including <a href="/junk-removal-north-park" className="text-blue-600 hover:underline">North Park</a>, <a href="/junk-removal-hillcrest" className="text-blue-600 hover:underline">Hillcrest</a>, <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a>, <a href="/junk-removal-oceanside" className="text-blue-600 hover:underline">Oceanside</a>, and <a href="/junk-removal-clairemont" className="text-blue-600 hover:underline">Clairemont</a>.
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
                    <p className="text-lg text-gray-700 mb-6">
                      Many San Diego residents search for <strong>free mattress disposal San Diego</strong> or <strong>free mattress recycling San Diego</strong> options. While the City of San Diego does offer some limited free programs, understanding the full picture helps you make the best choice:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-red-900 mb-4">❌ "Free" City Programs Reality</h4>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-red-600 mr-2">•</span>
                            <span><strong>You transport it yourself:</strong> Rent a truck ($75-150), load heavy mattress, secure it, and drive to facility</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-600 mr-2">•</span>
                            <span><strong>Limited hours & locations:</strong> Miramar Greenery weekdays only, often 1-2 hour wait times</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-600 mr-2">•</span>
                            <span><strong>Physical labor required:</strong> Load, unload, and risk injury handling bulky mattresses</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-600 mr-2">•</span>
                            <span><strong>Time investment:</strong> Entire day consumed with rental, driving, waiting, return</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-600 mr-2">•</span>
                            <span><strong>Hidden costs:</strong> Vehicle rental, gas, potential disposal fees, your time value</span>
                          </li>
                        </ul>
                        <p className="mt-4 font-semibold text-red-800">
                          Real DIY cost: $100-200+ in rental, fuel, time, and physical effort
                        </p>
                      </div>

                      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-green-900 mb-4">✓ Our Professional Mattress Disposal San Diego</h4>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span><strong>We come to you:</strong> Pick up from any room, any floor, any building</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span><strong>Same-day service:</strong> Call before 2 PM, we arrive same day throughout SD County</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span><strong>Zero physical work for you:</strong> We handle all lifting, loading, hauling</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span><strong>15-30 minute service:</strong> Quick, efficient, professional removal</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span><strong>True all-inclusive pricing:</strong> $100 flat rate covers everything—labor, hauling, recycling</span>
                          </li>
                        </ul>
                        <p className="mt-4 font-semibold text-green-800">
                          Professional service: $100 flat rate. Similar cost, zero hassle, no risk.
                        </p>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <p className="text-lg text-gray-800 mb-3">
                        <strong>Bottom Line:</strong> While <strong>free mattress disposal San Diego</strong> programs exist, the hidden costs in time, vehicle rental, fuel, and physical labor often equal or exceed our $100 professional service. Plus, you avoid injury risk and save your entire day.
                      </p>
                      <p className="text-gray-700">
                        Call <a href="tel:6197500114" className="text-blue-600 font-bold hover:underline">(619) 750-0114</a> for fast, affordable <strong>mattress disposal San Diego</strong> that's actually convenient.
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
              <p className="text-xl text-gray-600 mb-12 text-center">
                Our <strong>mattress removal San Diego</strong> service handles all mattress types, sizes, and conditions. From standard twin mattresses to California king beds, our <strong>mattress pick up San Diego</strong> team removes everything with same-day service and eco-friendly <strong>mattress recycling San Diego</strong>.
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
                <p className="text-gray-700 text-center mb-4">
                  Mattresses in good condition may be donated to local charities whenever possible. All items are disposed of in full compliance with City of San Diego waste management regulations.
                </p>
                <p className="text-gray-700 text-center">
                  We also provide quick and affordable mattress haul away in San Diego, perfect for removing old or damaged mattresses that you just want gone. Need other items removed too? Check out our <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:text-blue-700 font-semibold underline">furniture removal services</a> or full <a href="/san-diego-junk-removal" className="text-blue-600 hover:text-blue-700 font-semibold underline">junk removal in San Diego</a>.
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
              <p className="text-xl text-gray-600 mb-8 text-center">
                Professional <strong>mattress recycling San Diego</strong> service that diverts up to 80% of mattress materials from landfills. Our <strong>mattress disposal San Diego</strong> process prioritizes environmental responsibility while ensuring full compliance with City of San Diego regulations.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h3 className="text-2xl font-bold text-green-900 mb-3">Why Choose Eco-Friendly Mattress Recycling San Diego?</h3>
                <p className="text-gray-700">
                  San Diego generates thousands of discarded mattresses annually. Traditional landfill disposal wastes valuable materials and contributes to environmental problems. Our <strong>mattress recycling San Diego</strong> partnership with certified local facilities ensures your old mattress is dismantled and its components are reused responsibly—protecting San Diego's environment while supporting the local circular economy.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">♻️ What Gets Recycled in Mattress Recycling San Diego</h3>
                  <p className="text-gray-700 mb-4">
                    Our <strong>mattress recycling San Diego</strong> partners dismantle mattresses and recycle up to 80% of materials:
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
              Schedule Your Mattress Disposal San Diego Today
            </h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto">
              Professional <strong>mattress disposal San Diego</strong> with same-day <strong>mattress pick up San Diego</strong> service. Eco-friendly <strong>mattress recycling San Diego</strong> • Licensed & Insured • Upfront Pricing • All San Diego County. Better than <strong>free mattress disposal San Diego</strong> programs—we come to you! View all our <a href="/san-diego-junk-removal" className="text-blue-200 hover:text-white underline">San Diego junk removal services</a>.
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
