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
  description: "Professional mattress disposal San Diego starting at $69. Same-day mattress removal with eco-friendly recycling. Upfront pricing, no hidden fees. Call (619) 750-0114.",
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
    description: "Professional mattress disposal San Diego starting at $69. Same-day mattress removal with eco-friendly recycling. Upfront pricing, no hidden fees.",
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
    description: "Professional mattress disposal San Diego starting at $69. Same-day mattress removal with eco-friendly recycling. Upfront pricing, no hidden fees.",
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
      answer: "Mattress removal in San Diego starts at $69 and varies based on the size and type of mattress. A twin or crib mattress typically costs $69-79, while a queen or king size ranges from $89-129. The exact price depends on your specific mattress dimensions and condition. We provide upfront quotes over the phone before we arrive. Once we give you a price, that covers everything—all labor, hauling, and eco-friendly recycling. No hidden fees or surprises. For multiple mattresses or full bedroom cleanouts, we offer volume pricing: 1/4 Load ($249), 1/2 Load ($349), Full Load ($495). Call (619) 750-0114 for your free quote based on your specific mattress."
    },
    {
      question: "Is there free mattress disposal San Diego or free mattress recycling San Diego?",
      answer: "Yes, the City of San Diego does offer free mattress recycling San Diego options through programs like Bye Bye Mattress and mattress collection sites at locations like Miramar Greenery. However, these free options require you to transport the mattress yourself. You'll need to rent a truck, which typically costs $75-150 for the day. Then you have to load the mattress, drive to the facility, wait in line for 1-2 hours during limited weekday hours, and unload it yourself. When you factor in truck rental fees, gas, your time, and the physical effort of moving a bulky mattress, most people spend just as much or more than our professional service. Our mattress disposal San Diego starts at $69 for smaller mattresses. We come to you, handle all the lifting and loading, and complete the job in 15-30 minutes. Same-day service available when you call before 2 PM. For most San Diego residents, our service is more convenient and cost-effective than DIY free mattress disposal San Diego options."
    },
    {
      question: "Do you offer mattress recycling San Diego services?",
      answer: "Absolutely. Mattress recycling San Diego is a core part of our eco-friendly approach to mattress disposal. We partner with certified San Diego mattress recycling facilities that participate in recycling programs to dismantle and recycle up to 80% of mattress materials. Steel springs are recycled as scrap metal. Foam padding is repurposed as carpet padding insulation. Wood frames are processed into mulch or fuel. Fabric components are reused for industrial applications. Our mattress recycling San Diego service helps divert bulky items from Miramar Landfill and keeps thousands of unwanted mattresses out of San Diego County landfills each year. This process is fully compliant with City of San Diego Environmental Services Department regulations while protecting our local environment."
    },
    {
      question: "Do you offer same-day mattress removal San Diego?",
      answer: "Yes, we provide same-day mattress removal San Diego service when you call before 2 PM. Our professional mattress pick up San Diego team serves all neighborhoods throughout San Diego County, from Pacific Beach and La Jolla to Chula Vista and El Cajon. Same-day mattress removal San Diego is perfect for urgent situations like rental property turnovers, HOA violation notices, quick property sales, or last-minute moving needs. We understand that mattress disposal often needs to happen quickly, which is why we prioritize fast response times while maintaining our commitment to eco-friendly mattress recycling San Diego practices."
    },
    {
      question: "What areas do you serve for mattress pick up San Diego?",
      answer: "Our mattress pick up San Diego service covers all San Diego County neighborhoods and communities. This includes downtown San Diego, North Park, Hillcrest, La Jolla, Pacific Beach, Mission Valley, Chula Vista, National City, El Cajon, La Mesa, Santee, Poway, Escondido, Oceanside, Carlsbad, Encinitas, Del Mar, and everywhere in between. We serve residential properties including apartments, single-family homes, condos, and townhouses, as well as commercial properties, property management companies, and real estate offices. Whether you're in a coastal community or East County, we provide the same reliable mattress disposal San Diego service. Call (619) 750-0114 to confirm service availability in your specific area."
    },
    {
      question: "Do you remove box springs and bed frames too?",
      answer: "Yes, our comprehensive mattress disposal San Diego service removes mattresses, box springs, bed frames, headboards, footboards, and complete bedroom furniture sets. We can haul away multiple items in a single trip using our volume-based pricing structure. If you're clearing out an entire bedroom, we can combine mattresses, box springs, dressers, nightstands, and other furniture into one load for better value. This makes bedroom cleanouts, estate cleanouts, and furniture upgrades much easier and more affordable. Just let us know what you need removed when you call for your free quote, and we'll provide upfront pricing that covers everything in one convenient pickup."
    },
    {
      question: "Can you pick up from apartments or multi-story buildings?",
      answer: "Absolutely. Our experienced mattress removal San Diego team regularly services apartment complexes, high-rise buildings, and multi-story properties throughout San Diego. We navigate elevators, stairways, narrow hallways, and tight doorways while protecting your walls, floors, and property. Whether you're on the ground floor or the 20th floor of a downtown high-rise, we handle all the heavy lifting and logistics. Our team brings the right equipment and expertise to safely remove mattresses from any location. This includes walk-up apartments in North Park, luxury condos in La Jolla, beachfront rentals in Pacific Beach, and apartment communities throughout the county. The price for your mattress pick up San Diego remains the same regardless of which floor you're on."
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
          description="✓ Mattress removal from $69 ✓ Upfront pricing ✓ Same-day service ✓ All San Diego County"
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
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    When you need reliable mattress disposal San Diego, Severin Cleaners delivers fast, affordable, and eco-friendly service throughout San Diego County. Our professional mattress removal San Diego team provides same-day mattress pick up San Diego service starting at just $69, including all labor, hauling, and responsible mattress recycling San Diego or compliant disposal. The exact price varies based on your mattress size and type, and we provide upfront quotes before we arrive so you know exactly what to expect.
                  </p>

                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Whether you're upgrading your bedroom furniture, clearing out a rental property in <a href="/junk-removal-pacific-beach" className="text-blue-600 hover:underline">Pacific Beach</a>, handling an estate cleanout in <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a>, or managing a property turnover in <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a>, our mattress disposal San Diego service handles everything from single mattresses to complete bedroom furniture removal. We serve all San Diego neighborhoods including <a href="/junk-removal-north-park" className="text-blue-600 hover:underline">North Park</a>, <a href="/junk-removal-hillcrest" className="text-blue-600 hover:underline">Hillcrest</a>, <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a>, <a href="/junk-removal-oceanside" className="text-blue-600 hover:underline">Oceanside</a>, <a href="/junk-removal-clairemont" className="text-blue-600 hover:underline">Clairemont</a>, and communities throughout the county.
                  </p>

                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Our mattress recycling San Diego process prioritizes environmental responsibility while ensuring full compliance with City of San Diego Environmental Services Department regulations. We work with certified recycling facilities that participate in recycling programs to dismantle and recycle up to 80% of mattress materials, keeping thousands of unwanted mattresses out of Miramar Landfill each year. From the moment you call us at (619) 750-0114 to the final pickup, we make mattress disposal as simple and stress-free as possible.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                    <p className="text-gray-800 font-semibold mb-2">📞 Need Same-Day Mattress Pick Up San Diego?</p>
                    <p className="text-gray-700 leading-relaxed">
                      Call <a href="tel:6197500114" className="text-blue-600 font-bold hover:underline">(619) 750-0114</a> before 2 PM for same-day mattress removal San Diego service starting at $69. Get a free quote over the phone with upfront pricing that covers all labor, hauling, and eco-friendly mattress recycling San Diego. No hidden fees guaranteed.
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
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      Many San Diego residents search for free mattress disposal San Diego or free mattress recycling San Diego options. While the City of San Diego does offer some programs through mattress collection sites and the Bye Bye Mattress program, understanding the full picture helps you make the best choice for your situation.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-red-900 mb-4">The Reality of "Free" Mattress Disposal</h4>
                        <p className="text-gray-700 mb-3 leading-relaxed">
                          Free mattress recycling San Diego programs through the city require you to transport the mattress yourself to designated mattress collection sites like Miramar Greenery. This means renting a truck, which typically costs $75-150 for the day, plus gas and mileage fees.
                        </p>
                        <p className="text-gray-700 mb-3 leading-relaxed">
                          You'll need to navigate loading the bulky mattress into the truck, securing it properly for transport, and driving to the facility during limited weekday-only hours. Once there, expect to wait 1-2 hours in line with other San Diego residents before you can unload.
                        </p>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          The entire process takes most of your day and involves heavy lifting that risks injury or damage to your vehicle and property. When you add up truck rental, fuel costs, your time, and physical effort, the "free" option often costs just as much or more than professional removal.
                        </p>
                        <p className="font-semibold text-red-800">
                          Typical DIY cost: $100-200+ when factoring in all expenses and your valuable time
                        </p>
                      </div>

                      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-green-900 mb-4">Our Professional Mattress Disposal San Diego Service</h4>
                        <p className="text-gray-700 mb-3 leading-relaxed">
                          Our mattress disposal San Diego service starts at $69 for smaller mattresses, with pricing varying based on size and type. We provide upfront quotes over the phone, so you know the exact cost before we arrive. Once we quote you a price, that covers everything with no hidden fees.
                        </p>
                        <p className="text-gray-700 mb-3 leading-relaxed">
                          We come directly to your location anywhere in San Diego County. Whether you're in a ground-floor apartment or a 20th-floor high-rise, our team handles all the heavy lifting, navigation through tight spaces, and protection of your walls and floors.
                        </p>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          Call us before 2 PM for same-day mattress pick up San Diego service. The entire process takes just 15-30 minutes from start to finish. You don't lift a finger, and we ensure your mattress goes to certified recycling facilities that participate in proper mattress recycling San Diego programs.
                        </p>
                        <p className="font-semibold text-green-800">
                          Professional service from $69: Similar or lower cost than DIY, zero hassle, no physical risk
                        </p>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        While free mattress disposal San Diego options exist through the Bye Bye Mattress program and mattress collection sites at Miramar Landfill, most people find that our professional service offers better overall value. When you factor in truck rental fees, gas, time off work, physical effort, and the risk of injury, the "free" option often ends up costing more in both money and convenience.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Call <a href="tel:6197500114" className="text-blue-600 font-bold hover:underline">(619) 750-0114</a> for a free quote on professional mattress disposal San Diego service that saves you time, effort, and often money compared to DIY alternatives.
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
              <p className="text-xl text-gray-600 mb-6 text-center leading-relaxed">
                Our comprehensive mattress removal San Diego service handles all mattress types, sizes, and conditions throughout San Diego County. From standard twin mattresses to California king beds, memory foam to innerspring, and everything in between, we remove bulky items like mattresses and box springs with the same care and professionalism. We offer same-day mattress pick up San Diego service paired with eco-friendly mattress recycling San Diego practices that keep unwanted mattresses out of local landfills.
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
                <p className="text-gray-700 text-center mb-4 leading-relaxed">
                  Mattresses in good, clean condition may be donated to local San Diego charities whenever possible, giving them a second life and helping those in need. For mattresses soiled or infested with bedbugs, we handle safe and compliant disposal in accordance with City of San Diego Environmental Services Department regulations to protect public health.
                </p>
                <p className="text-gray-700 text-center mb-4 leading-relaxed">
                  Please note that we do not remove household hazardous waste, as that requires specialized handling through designated city programs. Our focus is on bulky items like mattresses, box springs, and bedroom furniture.
                </p>
                <p className="text-gray-700 text-center leading-relaxed">
                  We provide quick and affordable mattress haul away in San Diego, perfect for removing old or damaged mattresses from any property type. Need other items removed during the same trip? Check out our comprehensive <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:text-blue-700 font-semibold underline">furniture removal services</a> or full-service <a href="/san-diego-junk-removal" className="text-blue-600 hover:text-blue-700 font-semibold underline">junk removal in San Diego</a> for volume-based pricing on larger cleanouts.
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
              <p className="text-xl text-gray-600 mb-8 text-center leading-relaxed">
                Professional mattress recycling San Diego service that diverts up to 80% of mattress materials from landfills through certified recycling programs. Our mattress disposal San Diego process prioritizes environmental responsibility while ensuring full compliance with City of San Diego Environmental Services Department regulations.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h3 className="text-2xl font-bold text-green-900 mb-4">Why Choose Eco-Friendly Mattress Recycling San Diego?</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  San Diego generates thousands of unwanted mattresses annually, and traditional Miramar Landfill disposal wastes valuable materials that could be recycled and reused. Our mattress recycling San Diego partnership with certified local facilities ensures that your old mattress is properly dismantled and its components are responsibly recycled through established recycling programs.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This approach protects San Diego's environment, reduces waste sent to landfills, and supports the local circular economy. Rather than adding more bulky items to already overburdened landfills, we work with facilities that extract and recycle steel, foam, wood, and fabric components from every mattress we collect.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">♻️ What Gets Recycled in Mattress Recycling San Diego</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Our mattress recycling San Diego partners carefully dismantle each mattress and recycle up to 80% of its materials through specialized recycling programs:
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
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    All mattresses are handled in full compliance with City of San Diego and San Diego County waste management regulations, ensuring legal and environmentally responsible disposal.
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
          contextParagraph="Mattress removal in San Diego starts at $69 and varies based on the size and type of mattress. Twin and crib mattresses typically cost $69-79, while queen and king size mattresses range from $89-129. We provide upfront quotes over the phone before we arrive. Once we give you a price, it covers everything—all labor, hauling, eco-friendly recycling, and responsible disposal. No hidden fees or surprises. We can also combine multiple items like box springs, bed frames, and bedroom furniture into volume loads for better value."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Mattress Disposal" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Mattress Disposal San Diego"
          description="Get answers to common questions about our San Diego mattress disposal service and eco-friendly recycling options."
          faqs={mattressFAQs}
          ctaTitle="Still Have Questions About Mattress Disposal?"
          ctaDescription="Our experienced team is ready to answer any questions about our San Diego mattress disposal services, provide detailed quotes, or schedule your pickup."
          includeSchema={false}
        />

        {/* Service Areas Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                San Diego Neighborhoods Served
              </h2>
              <p className="text-xl text-gray-600 mb-8 text-center leading-relaxed">
                We provide mattress pick up San Diego service throughout all San Diego neighborhoods, from coastal communities like Pacific Beach and La Jolla to East County areas like El Cajon and Santee. Whether you're in North Park, La Mesa, Hillcrest, Downtown San Diego, or any other San Diego County neighborhood, our team delivers the same reliable, professional service.
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
            <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Professional mattress disposal San Diego with same-day mattress pick up San Diego service starting at $69. Eco-friendly mattress recycling San Diego through certified facilities. Licensed and insured with upfront pricing and no hidden fees. Serving all San Diego County neighborhoods. More convenient than Bye Bye Mattress program or free mattress disposal San Diego at mattress collection sites because we come directly to you. View all our <a href="/san-diego-junk-removal" className="text-blue-200 hover:text-white underline">San Diego junk removal services</a>.
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
