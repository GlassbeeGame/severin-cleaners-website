import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarmelValleyFAQSection from "./CarmelValleyFAQSection";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Junk Removal Carmel Valley | North County Premium Service | (619) 750-0114",
  description: "Carmel Valley junk removal for Torrey Highlands, Pacific Highlands Ranch. Estate cleanouts, luxury furniture. Licensed. (619) 750-0114",
  keywords: "junk removal Carmel Valley, Carmel Valley junk hauling, estate cleanout Carmel Valley, furniture removal Carmel Valley, junk removal near me Carmel Valley, same-day junk pickup, Del Mar Mesa junk removal",
  openGraph: {
    title: "Junk Removal Carmel Valley | Professional Hauling Service",
    description: "Reliable junk removal serving all of Carmel Valley from Torrey Highlands to Del Mar Mesa. Upscale residential cleanouts and luxury home services.",
    url: "https://severincleaners.com/junk-removal-carmel-valley",
  },
  alternates: {
    canonical: "https://severincleaners.com/junk-removal-carmel-valley",
  },
};

export default function JunkRemovalCarmelValleyPage() {
  // Service schema for Carmel Valley location
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Carmel Valley",
    serviceName: "Junk Removal",
    description: "Professional junk removal services in Carmel Valley, San Diego. Same-day pickup, eco-friendly disposal, and transparent pricing.",
    url: "https://severincleaners.com/junk-removal-carmel-valley",
  });

  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Carmel Valley Junk Removal", url: "https://severincleaners.com/junk-removal-carmel-valley" },
  ]);

  // Existing WasteRemovalService and FAQ schemas
  const wasteRemovalSchema = {
    "@type": "WasteRemovalService",
    "name": "Severin Cleaners - Junk Removal Carmel Valley",
    "image": "https://severincleaners.com/carmel-valley-junk-removal.jpg",
    "description": "Professional junk removal services in Carmel Valley, San Diego. Same-day pickup, eco-friendly disposal, and transparent pricing.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Severin Cleaners",
      "image": "https://severincleaners.com/logo.png",
      "telephone": "+1-619-750-0114",
      "url": "https://severincleaners.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "8900 Grossmont Blvd",
        "addressLocality": "La Mesa",
        "addressRegion": "CA",
        "postalCode": "91941",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "Place",
      "name": "Carmel Valley, San Diego, CA",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Diego",
        "addressRegion": "CA",
        "postalCode": "92130"
      }
    },
    "serviceType": ["Junk Removal", "Furniture Removal", "Appliance Disposal", "Estate Cleanout", "Same-day Pickup"],
    "offers": {
      "@type": "Offer",
      "priceSpecification": [
        {
          "@type": "PriceSpecification",
          "description": "Single Item Pickup",
          "price": "175",
          "priceCurrency": "USD"
        },
        {
          "@type": "PriceSpecification",
          "description": "1/4 Trailer Load",
          "price": "249",
          "priceCurrency": "USD"
        },
        {
          "@type": "PriceSpecification",
          "description": "1/2 Trailer Load",
          "price": "349",
          "priceCurrency": "USD"
        },
        {
          "@type": "PriceSpecification",
          "description": "Full Trailer Load",
          "price": "495",
          "priceCurrency": "USD"
        }
      ]
    }
  };

  const faqSchema = {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you provide same-day junk removal in Carmel Valley?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer same-day junk pickup throughout Carmel Valley including Torrey Highlands, Del Mar Mesa, and Pacific Highlands Ranch. Call (619) 750-0114 before 2 PM for same-day service availability."
        }
      },
      {
        "@type": "Question",
        "name": "What areas of Carmel Valley do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve all neighborhoods in Carmel Valley 92130 including Torrey Highlands, Del Mar Mesa, Pacific Highlands Ranch, Carmel Creek, and Torrey Hills. We also cover surrounding areas like 4S Ranch and Rancho Penasquitos."
        }
      },
      {
        "@type": "Question",
        "name": "How much does junk removal cost in Carmel Valley?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our transparent pricing: Single Item Pickup starting at $100, 1/4 Trailer Load $249, 3/8 Trailer Load $319, 1/2 Trailer Load $349, 5/8 Trailer Load $366, 3/4 Trailer Load $429, 7/8 Trailer Load $462, Full Trailer Load $495. Price includes labor, disposal fees, and cleanup. Call for a free quote."
        }
      },
      {
        "@type": "Question",
        "name": "Do you remove furniture and appliances from Carmel Valley homes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we remove all types of furniture, appliances, and household items. This includes sofas, mattresses, refrigerators, washers, dryers, and exercise equipment. We handle both indoor and outdoor removal."
        }
      },
      {
        "@type": "Question",
        "name": "Are you licensed and insured for junk removal in San Diego?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Severin Cleaners is fully licensed and insured for junk removal services throughout San Diego County. We carry comprehensive liability insurance and proper waste hauling permits."
        }
      },
      {
        "@type": "Question",
        "name": "What items cannot be removed during junk hauling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We cannot remove hazardous materials like paint, chemicals, asbestos, or medical waste. However, we handle electronics, furniture, appliances, yard waste, construction debris, and most household items."
        }
      }
    ]
  };

  // Combine all schemas into @graph
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      serviceSchema,
      breadcrumbSchema,
      wasteRemovalSchema,
      faqSchema,
    ],
  };

  return (
    <div className={`${inter.variable} font-sans antialiased`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Carmel Valley Junk Removal | North County Premium Service
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Professional junk hauling services for Carmel Valley's premier residential community
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  GET FREE QUOTE
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why Carmel Valley Residents Choose Severin Cleaners
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Same Day Service</h3>
                <p className="text-gray-600">Quick response throughout Carmel Valley - from Del Mar Mesa to Torrey Highlands. Same-day pickup available for urgent needs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">Upfront quotes with no hidden fees. See exactly what you&apos;ll pay before we start. Photo estimates available via text.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Master-Planned Expert</h3>
                <p className="text-gray-600">We navigate Torrey Highlands gated access, Pacific Highlands Ranch HOA requirements, and Torrey Hills business park logistics seamlessly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Fast, Reliable Junk Removal in Carmel Valley
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                  Our Carmel Valley junk removal team offers same-day service throughout 92130, from Torrey Highlands to Del Mar Mesa. We&apos;re fully licensed and insured, providing upfront quotes based on photos you text or email. No surprises, no hidden fees.
                </p>

                <p className="text-lg mb-6">
                  Whether you need furniture removed from your Pacific Highlands Ranch home or estate cleanout services in Torrey Hills, our professional crew handles every job with care and efficiency. We protect your floors, walls, and property during removal.
                </p>

                <h2 className="text-3xl font-bold mt-8 mb-4">Carmel Valley Neighborhoods We Serve</h2>
                <p className="text-lg mb-4">
                  Our <strong>junk removal Carmel Valley</strong> service covers every area of this prestigious North County community:
                </p>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li><strong>Torrey Highlands</strong> - Luxury homes, gated communities, and junk removal services</li>
                  <li><strong>Del Mar Mesa</strong> - Master-planned neighborhoods and family estate cleanouts</li>
                  <li><strong>Pacific Highlands Ranch</strong> - Newer developments, modern homes, furniture removal</li>
                  <li><strong>Carmel Creek</strong> - Established neighborhoods with mature landscaping</li>
                  <li><strong>Torrey Hills</strong> - Premium residential areas and <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">commercial junk removal for business parks</a></li>
                  <li><strong>Village of Fairbanks Ranch</strong> - Exclusive equestrian community and luxury estate service</li>
                  <li><strong>Santaluz</strong> - Golf course community and luxury property cleanouts</li>
                  <li><strong>4S Ranch Border</strong> - Adjacent neighborhoods and connecting areas, same-day junk hauling</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Streets We Service Throughout Carmel Valley</h3>
                <p className="text-lg mb-4">
                  Our <strong>Carmel Valley junk hauling</strong> team knows every street and can navigate the community&apos;s unique layout:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Major Streets & Corridors</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Carmel Valley Road - Main thoroughfare access</li>
                      <li>Del Mar Heights Road - Coastal connection route</li>
                      <li>Carmel Mountain Road - North County access</li>
                      <li>El Camino Real - Primary north-south corridor</li>
                      <li>Torrey Santa Fe Road - Business district connection</li>
                      <li>High Bluff Drive - Torrey Pines area access</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Residential Streets</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Creekstone Circle - Carmel Creek neighborhood</li>
                      <li>Canyon Point Lane - Del Mar Mesa homes</li>
                      <li>Torrey Mesa Way - Torrey Highlands estates</li>
                      <li>Pacific Rim Court - Pacific Highlands Ranch</li>
                      <li>Vista Del Lago - Fairbanks Ranch area</li>
                      <li>Country Club Lane - Golf course communities</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Local Landmarks & Reference Points</h3>
                <p className="text-lg mb-4">
                  Our team uses these familiar Carmel Valley landmarks for easy scheduling and directions:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li><strong>Torrey Pines High School</strong> - Premier educational facility serving the community</li>
                  <li><strong>Del Mar Highlands Town Center</strong> - Major shopping and dining destination</li>
                  <li><strong>Carmel Valley Library</strong> - Community gathering and educational center</li>
                  <li><strong>Torrey Pines Golf Course</strong> - World-renowned golf destination</li>
                  <li><strong>One Paseo</strong> - Upscale shopping and entertainment complex</li>
                  <li><strong>Carmel Valley Recreation Center</strong> - Community sports and activities hub</li>
                  <li><strong>Sage Canyon Elementary</strong> - Local school serving family neighborhoods</li>
                  <li><strong>Whole Foods Carmel Valley</strong> - Central shopping and community meeting point</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Specialty Junk Removal Services</h3>
                <p className="text-lg mb-4">
                  Carmel Valley&apos;s diverse community requires specialized <strong>junk removal</strong> services:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Residential Specialties</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Luxury home staging and preparation</li>
                      <li>Executive relocation cleanouts</li>
                      <li>Multi-generational family cleanouts</li>
                      <li>Home office and tech equipment removal</li>
                      <li>Pool house and guest quarters clearing</li>
                      <li>Three-car garage organization and cleanouts</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Property-Specific Services</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Estate cleanouts for luxury properties</li>
                      <li>Downsizing assistance for empty nesters</li>
                      <li>Student move-out from nearby UCSD</li>
                      <li>Corporate housing and temporary resident cleanouts</li>
                      <li>Vacation rental turnover and deep cleaning prep</li>
                      <li>New construction debris and moving prep</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Transparent Pricing for Carmel Valley</h3>
                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h4 className="text-xl font-bold mb-4 text-blue-900">Our Upfront Pricing Structure</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">Starting at $100</div>
                      <div className="font-semibold mb-1">Single Item Pickup</div>
                      <div className="text-sm text-gray-600">Perfect for one large item like a sofa, mattress, or appliance</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">$249</div>
                      <div className="font-semibold mb-1">1/4 Trailer Load</div>
                      <div className="text-sm text-gray-600">Small cleanouts, few boxes, or couple pieces of furniture</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">$319</div>
                      <div className="font-semibold mb-1">3/8 Trailer Load</div>
                      <div className="text-sm text-gray-600">Medium-sized cleanouts with multiple items</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">$349</div>
                      <div className="font-semibold mb-1">1/2 Trailer Load</div>
                      <div className="text-sm text-gray-600">Room cleanouts, multiple furniture pieces, or renovation debris</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">$366</div>
                      <div className="font-semibold mb-1">5/8 Trailer Load</div>
                      <div className="text-sm text-gray-600">Large room or garage cleanouts</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">$429</div>
                      <div className="font-semibold mb-1">3/4 Trailer Load</div>
                      <div className="text-sm text-gray-600">Multi-room cleanouts or large furniture sets</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">$462</div>
                      <div className="font-semibold mb-1">7/8 Trailer Load</div>
                      <div className="text-sm text-gray-600">Near-complete house cleanouts</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">$495</div>
                      <div className="font-semibold mb-1">Full Trailer Load</div>
                      <div className="text-sm text-gray-600">Whole house cleanouts, complete furniture sets, or large projects</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-4 text-center">
                    Pricing includes labor, disposal fees, and cleanup. Call for a free quote tailored to your specific needs.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Eco-Friendly Disposal Practices</h3>
                <p className="text-lg mb-4">
                  As a environmentally conscious community, Carmel Valley values responsible disposal. Our <strong>junk removal near me Carmel Valley</strong> service prioritizes sustainability:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Donation partnerships with local San Diego charities and nonprofits</li>
                  <li>Comprehensive recycling of metals, electronics, and materials</li>
                  <li>Furniture restoration referrals for antiques and quality pieces</li>
                  <li>Proper hazardous material handling and disposal</li>
                  <li>Construction debris recycling and material recovery</li>
                  <li>Organic waste composting when appropriate</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Property Types We Serve</h3>
                <p className="text-lg mb-4">
                  Carmel Valley&apos;s diverse real estate market requires expertise with various property types:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h5 className="font-bold text-blue-600 mb-2">Luxury Single-Family Homes</h5>
                    <p className="text-sm text-gray-600">Custom estates, Mediterranean villas, and contemporary luxury homes with complex layouts and high-end finishes.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h5 className="font-bold text-blue-600 mb-2">Townhomes & Condominiums</h5>
                    <p className="text-sm text-gray-600">Multi-level townhomes, luxury condos, and planned community properties with HOA considerations.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h5 className="font-bold text-blue-600 mb-2">Gated Communities</h5>
                    <p className="text-sm text-gray-600">Exclusive neighborhoods with security protocols, guest access procedures, and community standards.</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mt-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">Ready for Professional Junk Removal in Carmel Valley?</h3>
                  <p className="text-lg mb-4">
                    From Torrey Highlands luxury estates to Del Mar Mesa family homes, Severin Cleaners provides the reliable <strong>junk removal Carmel Valley</strong> service that meets your community&apos;s high standards.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:+16197500114"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-center font-bold transition-colors"
                    >
                      Call Now: (619) 750-0114
                    </a>
                    <a
                      href="/contact"
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg text-center font-bold transition-colors"
                    >
                      Get Free Carmel Valley Quote
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 text-center">
                    Serving all of Carmel Valley from Pacific Highlands Ranch to Torrey Hills • Same-day service available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CarmelValleyFAQSection />
      </main>

      <Footer />
    </div>
  );
}