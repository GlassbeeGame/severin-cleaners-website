import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DelMarFAQSection from "./DelMarFAQNew";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Del Mar Junk Removal | Coastal Luxury Service | (619) 750-0114",
  description: "Del Mar coastal estate junk removal Village to Heights. Luxury beach homes, patio furniture, discreet service. (619) 750-0114",
  keywords: "Del Mar junk removal, junk hauling Del Mar, junk pickup Del Mar, trash removal Del Mar, Del Mar San Diego junk removal, junk removal 92014, Camino Del Mar junk hauling",
  openGraph: {
    title: "Del Mar Junk Removal | Same-Day Hauling | Licensed & Insured",
    description: "Professional Del Mar junk removal from Del Mar Village to Del Mar Heights. Luxury coastal estates, transparent pricing, same-day service. Licensed & insured. Call (619) 750-0114!",
    url: "https://severincleaners.com/junk-removal-del-mar",
  },
  alternates: {
    canonical: "https://severincleaners.com/junk-removal-del-mar",
  },
};

export default function JunkRemovalDelMarPage() {
  // Service schema for Del Mar location
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Del Mar",
    serviceName: "Junk Removal",
    description: "Professional junk removal services in Del Mar, San Diego. Same-day pickup, eco-friendly disposal, and transparent pricing for coastal properties.",
    url: "https://severincleaners.com/junk-removal-del-mar",
  });

  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Del Mar Junk Removal", url: "https://severincleaners.com/junk-removal-del-mar" },
  ]);

  // Existing FAQ and WasteRemovalService schema
  const wasteRemovalSchema = {
    "@type": "WasteRemovalService",
    "name": "Severin Cleaners - Junk Removal Del Mar",
    "image": "https://severincleaners.com/del-mar-junk-removal.jpg",
    "description": "Professional junk removal services in Del Mar, San Diego. Same-day pickup, eco-friendly disposal, and transparent pricing for coastal properties.",
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
      "name": "Del Mar, San Diego, CA",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Diego",
        "addressRegion": "CA",
        "postalCode": "92014"
      }
    },
    "serviceType": ["Coastal & Beach Homes", "Luxury Estate & Whole-Home Cleanouts", "Remodel & Construction Debris", "Vacation Rentals & Guest Turnovers", "HOA/Gated Access"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Del Mar Junk Removal Pricing",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Single Item Removal"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "95",
            "priceCurrency": "USD",
            "valueAddedTaxIncluded": true
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Quarter Truck Load"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "250",
            "priceCurrency": "USD",
            "valueAddedTaxIncluded": true
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Half Truck Load"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "450",
            "priceCurrency": "USD",
            "valueAddedTaxIncluded": true
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Truck Load"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "700",
            "priceCurrency": "USD",
            "valueAddedTaxIncluded": true
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you cover all of Del Mar 92014?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we serve all neighborhoods in Del Mar including Del Mar Village, Del Mar Heights, Flower Hill, Beach Colony, Olde Del Mar, and Crest Canyon area. We also cover the north border near Solana Beach and south border near Carmel Valley."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer same-day junk removal in Del Mar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, same-day service is available throughout Del Mar. Call (619) 750-0114 before 2 PM for same-day pickup. We work around your schedule and can accommodate urgent requests."
        }
      },
      {
        "@type": "Question",
        "name": "What are your pricing ranges and what affects the final quote?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pricing starts from $95 single item, $250 quarter truck, $450 half truck, $700 full truck. Final quote depends on volume, weight, location accessibility, and disposal requirements. We confirm pricing from photos or quick onsite assessment."
        }
      },
      {
        "@type": "Question",
        "name": "Can you handle heavy or bulky items from upstairs in Del Mar homes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our trained team safely removes heavy furniture, appliances, and bulky items from upstairs rooms, condos with elevators, and multi-level homes. We protect your floors and walls during removal."
        }
      },
      {
        "@type": "Question",
        "name": "Do you donate or recycle items instead of sending everything to landfills?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Usable items go to local charities, metals and electronics are properly recycled, and we follow proper disposal practices in accordance with San Diego County regulations."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with HOAs and provide certificates of insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we regularly work with Del Mar HOAs and gated communities. We can provide certificates of insurance when required, follow quiet hours and loading zone restrictions, and coordinate with property management as needed."
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
              <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ✓ Same-Day Service • Licensed & Insured • Luxury Property Experts
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Del Mar Junk Removal | Coastal Luxury Service
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                ⭐⭐⭐⭐⭐ 5.0 Rating • Del Mar Village to Del Mar Heights • Coastal Estate Specialists
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  📞 Call Now for Same-Day Junk Removal in Del Mar: (619) 750-0114
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  Book Your Del Mar Junk Pickup – Save 15% Online
                </a>
              </div>
              <p className="text-lg mt-4">
                ✓ Transparent Pricing ✓ Eco-Friendly Disposal ✓ Luxury Estate Experience
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Professional Junk Hauling Del Mar – Del Mar Village to Crest Canyon</h2>
                <p className="text-lg mb-6">
                  <strong>Del Mar junk removal</strong> requires understanding one of San Diego's most exclusive coastal communities. From oceanfront homes near Powerhouse Park and Seagrove Park to Del Mar Heights estates overlooking the Pacific, our <strong>junk hauling Del Mar</strong> team delivers premium service with the discretion and professionalism luxury properties demand. We're fully licensed and insured, providing same-day <strong>trash removal Del Mar</strong> throughout the 92014 area with transparent pricing and eco-friendly disposal practices.
                </p>

                <p className="text-lg mb-6">
                  Whether you need <strong>junk pickup Del Mar</strong> for a Del Mar Village coastal cottage, estate cleanout in Del Mar Heights, vacation rental turnover near the Fairgrounds, or construction debris removal along Camino Del Mar, our <strong>Del Mar San Diego junk removal</strong> experts understand the unique requirements. We navigate narrow residential streets, coordinate with HOAs and gated communities, schedule around Fairgrounds events, and provide the white-glove service Del Mar properties deserve.
                </p>

                <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-8">Del Mar Neighborhoods We Serve</h2>
                <p className="text-lg mb-4">
                  Our <strong>Del Mar junk removal</strong> service covers every neighborhood in this prestigious coastal community:
                </p>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li><strong>Del Mar Village</strong> - Historic downtown area near Camino Del Mar</li>
                  <li><strong>Del Mar Heights</strong> - Luxury hillside homes with ocean views</li>
                  <li><strong>Flower Hill</strong> - Upscale residential neighborhood with mature landscaping</li>
                  <li><strong>Del Mar Highlands</strong> - Master-planned community near town center</li>
                  <li><strong>Stratford Court</strong> - Exclusive gated community properties</li>
                  <li><strong>Coastal Zone</strong> - Beachfront and near-beach luxury properties</li>
                  <li><strong>Carmel Valley Border</strong> - Transition areas between Del Mar and Carmel Valley</li>
                  <li><strong>Solana Beach Border</strong> - Properties along the southern Del Mar boundary</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Streets We Service Throughout Del Mar</h3>
                <p className="text-lg mb-4">
                  Our <strong>Del Mar junk hauling</strong> team navigates every street in this coastal community:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Main Thoroughfares</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Camino Del Mar - Historic main street through Village</li>
                      <li>Del Mar Heights Road - Major east-west connector</li>
                      <li>Jimmy Durante Boulevard - Northern access route</li>
                      <li>Via de la Valle - Eastern boundary and racing access</li>
                      <li>Coast Boulevard - Scenic coastal route</li>
                      <li>15th Street - Central Village connector</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Residential Areas</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Stratford Court - Exclusive gated properties</li>
                      <li>Dolphin Drive - Flower Hill luxury homes</li>
                      <li>Cordero Road - Del Mar Heights estates</li>
                      <li>Durango Drive - Hillside residential streets</li>
                      <li>Rimini Road - Coastal access neighborhoods</li>
                      <li>Torrey Pines Court - Premium residential area</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Local Landmarks & Community Hubs</h3>
                <p className="text-lg mb-4">
                  Our team knows Del Mar&apos;s landmarks for easy scheduling and navigation:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li><strong>Del Mar Racetrack</strong> - "Where the Turf Meets the Surf" - iconic seasonal destination</li>
                  <li><strong>Del Mar Plaza</strong> - Upscale shopping and dining complex overlooking the ocean</li>
                  <li><strong>Del Mar City Beach</strong> - Central beach access and community gathering point</li>
                  <li><strong>Flower Hill Promenade</strong> - Neighborhood shopping center and community hub</li>
                  <li><strong>Del Mar Highlands Town Center</strong> - Major retail and entertainment destination</li>
                  <li><strong>Torrey Pines State Natural Reserve</strong> - Protected coastal environment and trails</li>
                  <li><strong>Del Mar Civic Center</strong> - City hall and community services center</li>
                  <li><strong>L&apos;Auberge Del Mar</strong> - Luxury resort and local landmark</li>
                  <li><strong>Del Mar Country Club</strong> - Historic golf course and social club</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Specialty Services for Del Mar Properties</h3>
                <p className="text-lg mb-4">
                  Del Mar&apos;s unique coastal lifestyle requires specialized <strong>junk removal</strong> services:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Coastal Property Services</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Vacation rental turnovers and deep cleanouts</li>
                      <li>Beach house seasonal preparation and storage</li>
                      <li>Luxury estate cleanouts and downsizing</li>
                      <li>Storm damage debris removal</li>
                      <li>Outdoor furniture and equipment removal</li>
                      <li>Pool house and cabana cleanouts</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Specialized Community Needs</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Gated community and HOA coordinated services</li>
                      <li>Executive relocation and corporate housing</li>
                      <li>Multi-generational family transitions</li>
                      <li>Art collection and valuable item handling</li>
                      <li>Remodeling and renovation debris removal</li>
                      <li>Event cleanup and preparation services</li>
                    </ul>
                  </div>
                </div>

                <div id="pricing" className="bg-blue-50 p-8 rounded-xl mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-blue-900 text-center">Transparent Pricing for Del Mar</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-3xl font-bold text-blue-600 mb-2">$95</div>
                      <div className="font-semibold mb-2">Single Item Removal</div>
                      <div className="text-sm text-gray-600">Perfect for one large item like furniture or appliances</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-3xl font-bold text-blue-600 mb-2">$250</div>
                      <div className="font-semibold mb-2">Quarter Truck Load</div>
                      <div className="text-sm text-gray-600">Small cleanouts or several items</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-3xl font-bold text-blue-600 mb-2">$450</div>
                      <div className="font-semibold mb-2">Half Truck Load</div>
                      <div className="text-sm text-gray-600">Room cleanouts or renovation debris</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-3xl font-bold text-blue-600 mb-2">$700</div>
                      <div className="font-semibold mb-2">Full Truck Load</div>
                      <div className="text-sm text-gray-600">Complete house cleanouts or large projects</div>
                    </div>
                  </div>
                  <div className="text-center mt-6 p-4 bg-green-100 rounded-lg">
                    <p className="text-green-800 font-semibold">🛡️ All prices include labor, disposal fees, and cleanup - No hidden charges!</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Eco-Friendly Disposal for Coastal Del Mar</h3>
                <p className="text-lg mb-4">
                  As a coastal community, Del Mar values environmental protection. Our <strong>junk removal near me Del Mar</strong> service prioritizes sustainability:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li><strong>Donation Programs:</strong> Partner with local charities and nonprofits for usable items</li>
                  <li><strong>Comprehensive Recycling:</strong> Metals, electronics, and materials properly processed</li>
                  <li><strong>Coastal Protection:</strong> Ensure no debris reaches ocean or waterways</li>
                  <li><strong>Furniture Restoration:</strong> Connect valuable pieces with restoration specialists</li>
                  <li><strong>Hazardous Material Handling:</strong> Proper disposal away from sensitive coastal areas</li>
                  <li><strong>Construction Debris:</strong> Recycling and material recovery for renovation waste</li>
                </ul>

                <div className="bg-gray-50 p-8 rounded-xl mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Why Del Mar Residents Choose Us</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span><strong>Coastal Access Expertise:</strong> Navigate narrow Village streets, beachfront access, and hillside Heights properties</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span><strong>Luxury Home Experience:</strong> White-glove service for high-value properties, designer furniture, art handling</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span><strong>Discreet Operations:</strong> Professional, unmarked vehicles for privacy-conscious coastal estates</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span><strong>HOA Coordination:</strong> Work seamlessly with Stratford Court and gated community requirements</span>
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span><strong>Vacation Rental Ready:</strong> Quick turnovers for short-term rental properties near Fairgrounds</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span><strong>Racetrack Scheduling:</strong> Plan around Del Mar Racing season traffic and event schedules</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span><strong>Property Protection:</strong> Floor runners, door padding, wall protection for luxury finishes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span><strong>Multi-Story Navigation:</strong> Experienced with Del Mar Heights hillside homes and complex layouts</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Property Types We Serve in Del Mar</h3>
                <p className="text-lg mb-4">
                  Del Mar&apos;s diverse coastal real estate requires specialized expertise:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                    <h5 className="font-bold text-blue-600 mb-2">Luxury Beach Homes</h5>
                    <p className="text-sm text-gray-600">Oceanfront estates, coastal cottages, and luxury beach properties with unique access requirements.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                    <h5 className="font-bold text-blue-600 mb-2">Gated Communities</h5>
                    <p className="text-sm text-gray-600">Exclusive neighborhoods like Stratford Court with security protocols and community standards.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                    <h5 className="font-bold text-blue-600 mb-2">Vacation Rentals</h5>
                    <p className="text-sm text-gray-600">Short-term rental properties requiring quick turnovers and guest-ready preparation.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                    <h5 className="font-bold text-blue-600 mb-2">Hillside Estates</h5>
                    <p className="text-sm text-gray-600">Del Mar Heights properties with challenging access and luxury home requirements.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                    <h5 className="font-bold text-blue-600 mb-2">Condominiums</h5>
                    <p className="text-sm text-gray-600">High-rise and low-rise condos with elevator access and HOA coordination needs.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                    <h5 className="font-bold text-blue-600 mb-2">Historic Properties</h5>
                    <p className="text-sm text-gray-600">Del Mar Village historic homes requiring careful handling and preservation consideration.</p>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-blue-900 text-white p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold mb-4">Get Del Mar Junk Removal Quote Today</h3>
                  <p className="text-lg mb-6">
                    Serving Del Mar Village to Del Mar Heights with luxury coastal estate expertise
                  </p>
                  <a
                    href="tel:6197500114"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                  >
                    📞 Call (619) 750-0114 Now
                  </a>
                  <div className="bg-blue-800 rounded-lg p-4">
                    <p className="text-yellow-300 font-semibold mb-2">🏖️ Del Mar Special 🏖️</p>
                    <div className="text-sm">
                      <strong>15% Off Luxury Estate Cleanouts</strong> • <strong>Same-Day Service Available</strong><br/>
                      <strong>Coastal Property Specialists</strong> • <strong>Licensed & Insured</strong>
                    </div>
                  </div>
                  <p className="text-sm mt-4">
                    Transparent pricing • Eco-friendly disposal • Del Mar luxury estate experts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Now using dropdown component */}
        <DelMarFAQSection />

        {/* Related Services */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related Luxury Coastal Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Designer furniture and luxury coastal home furnishings removal</p>
              </a>
              <a href="/appliance-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal San Diego</h4>
                <p className="text-gray-600">High-end kitchen appliances and estate equipment disposal</p>
              </a>
              <a href="/construction-debris-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
                <p className="text-gray-600">Del Mar Village and Del Mar Heights remodel cleanup services</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}