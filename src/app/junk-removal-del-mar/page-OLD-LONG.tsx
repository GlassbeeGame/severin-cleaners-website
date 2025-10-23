import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DelMarFAQSection from "./DelMarFAQNew";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Professional Junk Hauling Del Mar – Del Mar Village to Crest Canyon</h2>
                <p className="text-lg mb-6">
                  <strong>Del Mar junk removal</strong> requires understanding one of San Diego's most exclusive coastal communities. From oceanfront homes near Powerhouse Park and Seagrove Park to Del Mar Heights estates overlooking the Pacific, our <strong>junk hauling Del Mar</strong> team delivers premium service with the discretion and professionalism luxury properties demand. We're fully licensed and insured, providing same-day <strong>trash removal Del Mar</strong> throughout the 92014 area with transparent pricing and eco-friendly disposal practices.
                </p>

                <p className="text-lg mb-6">
                  Whether you need <strong>junk pickup Del Mar</strong> for a Del Mar Village coastal cottage, estate cleanout in Del Mar Heights, vacation rental turnover near the Fairgrounds, or construction debris removal along Camino Del Mar, our <strong>Del Mar San Diego junk removal</strong> experts understand the unique requirements. We navigate narrow residential streets, coordinate with HOAs and gated communities, schedule around Fairgrounds events, and provide the white-glove service Del Mar properties deserve.
                </p>

                <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Del Mar Neighborhoods We Serve</h2>
                <p className="text-lg mb-4">
                  Our <strong>Del Mar junk removal</strong> service covers every neighborhood in this prestigious coastal community:
                </p>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li><strong>Del Mar Village</strong> - Historic downtown area near Camino Del Mar with charming coastal cottages, boutique shops, and oceanfront properties. This walkable neighborhood features narrow streets requiring careful navigation and HOA coordination for many properties.</li>
                  <li><strong>Del Mar Heights</strong> - Luxury hillside homes with ocean views perched above the village. These elevated estates require expertise in steep driveway access and multi-level home logistics.</li>
                  <li><strong>Flower Hill</strong> - Upscale residential neighborhood with mature landscaping, featuring mid-century to modern homes on spacious lots. The Flower Hill Promenade shopping center serves as this community's hub.</li>
                  <li><strong>Del Mar Highlands</strong> - Master-planned community near town center with family-oriented neighborhoods, parks, and the Highlands Town Center retail complex.</li>
                  <li><strong>Stratford Court</strong> - Exclusive gated community properties requiring security coordination and adherence to strict community standards.</li>
                  <li><strong>Coastal Zone</strong> - Beachfront and near-beach luxury properties experiencing salt air exposure and requiring specialized coastal property services.</li>
                  <li><strong>Carmel Valley Border</strong> - Transition areas between Del Mar and Carmel Valley featuring newer developments and modern estates.</li>
                  <li><strong>Solana Beach Border</strong> - Properties along the southern Del Mar boundary near the Del Mar Racetrack and Via De La Valle corridor.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-12 mb-6">Streets We Service Throughout Del Mar</h3>
                <p className="text-lg mb-4">
                  Our <strong>Del Mar junk hauling</strong> team navigates every street in this coastal community:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Main Thoroughfares</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Camino Del Mar - Historic main street through Village running parallel to the coast</li>
                      <li>Del Mar Heights Road - Major east-west connector linking I-5 to coastal areas</li>
                      <li>Jimmy Durante Boulevard - Northern access route named after the legendary entertainer</li>
                      <li>Via de la Valle - Eastern boundary providing Fairgrounds and Racetrack access</li>
                      <li>Coast Boulevard - Scenic coastal route through beachfront neighborhoods</li>
                      <li>15th Street - Central Village connector with beach access</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Residential Areas</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Stratford Court - Exclusive gated properties requiring advance coordination</li>
                      <li>Dolphin Drive - Flower Hill luxury homes with mature landscaping</li>
                      <li>Cordero Road - Del Mar Heights estates with panoramic ocean views</li>
                      <li>Durango Drive - Hillside residential streets with challenging access</li>
                      <li>Rimini Road - Coastal access neighborhoods near beach</li>
                      <li>Torrey Pines Court - Premium residential area with luxury properties</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-12 mb-6">Local Landmarks & Community Hubs</h3>
                <p className="text-lg mb-4">
                  Our team knows Del Mar's landmarks for easy scheduling and navigation:
                </p>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li><strong>Del Mar Racetrack</strong> - "Where the Turf Meets the Surf" - This iconic seasonal destination operates summer racing (mid-July through early September) and fall racing (November). Major events include the Pacific Classic Stakes and Bing Crosby Season Opening Day. We coordinate scheduling around race days when Via De La Valle and Jimmy Durante Boulevard experience heavy traffic.</li>
                  <li><strong>Del Mar Plaza</strong> - Upscale shopping and dining complex at 1555 Camino Del Mar overlooking the ocean. This multi-level retail center features restaurants like Jake's Del Mar and Pacifica Del Mar. We service nearby commercial spaces and coordinate timing around peak dining hours.</li>
                  <li><strong>Del Mar City Beach</strong> - Central beach access and community gathering point at the west end of 15th Street. Powerhouse Park and Seagrove Park flank this popular beach area. Summer weekends bring heavy crowds requiring adjusted scheduling for nearby properties.</li>
                  <li><strong>Flower Hill Promenade</strong> - Neighborhood shopping center at I-5 and Via De La Valle serving as a community hub with restaurants, services, and retail. We provide <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">commercial cleanout services</a> for businesses in this center.</li>
                  <li><strong>Del Mar Highlands Town Center</strong> - Major retail and entertainment destination featuring big-box retailers, restaurants, and a movie theater. Located along Del Mar Heights Road east of I-5.</li>
                  <li><strong>Torrey Pines State Natural Reserve</strong> - Protected coastal environment immediately south of Del Mar featuring rare Torrey Pine trees and scenic trails. Properties backing to the reserve require environmentally sensitive disposal practices.</li>
                  <li><strong>Del Mar Civic Center</strong> - City hall and community services center at 1050 Camino Del Mar. We coordinate with city regulations and permitting requirements through this facility.</li>
                  <li><strong>L'Auberge Del Mar</strong> - Luxury resort at 1540 Camino Del Mar serving as a local landmark and community focal point. Surrounding properties share similar luxury service expectations.</li>
                  <li><strong>Del Mar Country Club</strong> - Historic golf course and social club serving Del Mar's established community. Properties throughout the club area require discreet, professional service.</li>
                  <li><strong>San Dieguito Lagoon & River Valley</strong> - Protected wetlands and nature trails on Del Mar's northern boundary near Solana Beach. Properties adjacent to this sensitive environmental area require careful debris management.</li>
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6">Del Mar Traffic Patterns & Scheduling Strategy</h2>
                <p className="text-lg mb-4">
                  Strategic scheduling ensures efficient service while respecting Del Mar's quiet coastal character:
                </p>

                <h3 className="text-2xl font-bold mb-4">Racing Season Impact (July-September, November)</h3>
                <p className="text-lg mb-4">
                  Del Mar Racetrack operations dramatically affect local traffic patterns:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Race day congestion</strong> – Via De La Valle and Jimmy Durante Boulevard experience heavy traffic from 10 AM-7 PM on racing days (typically Wednesday-Sunday during season). Properties near the Fairgrounds require morning service (before 10 AM) or evening service (after 7 PM).</li>
                  <li><strong>Opening Day and Pacific Classic</strong> – Major events bring crowds exceeding 40,000 people, creating gridlock throughout eastern Del Mar. We recommend rescheduling non-urgent services during these peak events.</li>
                  <li><strong>Off-season optimal access</strong> – October, December-June offer minimal racing-related traffic, providing ideal scheduling windows for large estate cleanouts near the Fairgrounds.</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4">Summer Beach Traffic (Memorial Day-Labor Day)</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Weekend beach crowds</strong> – Camino Del Mar, Coast Boulevard, and streets leading to beach access points fill with visitors from 9 AM-6 PM on summer weekends. We prioritize early morning service (6-9 AM) for Village properties during summer.</li>
                  <li><strong>Vacation rental turnover season</strong> – June-August brings peak demand for same-day rental cleanouts. Our teams handle Friday-Sunday turnovers efficiently despite summer crowds.</li>
                  <li><strong>Weekday advantages</strong> – Monday-Thursday offer significantly better access throughout Del Mar during summer months, ideal for larger estate projects.</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4">Daily Traffic Flow Patterns</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Morning commute (7-9 AM)</strong> – I-5 and Del Mar Heights Road carry southbound commuter traffic. Surface streets remain relatively quiet, making this ideal for most service appointments.</li>
                  <li><strong>Midday optimal window (10 AM-2 PM)</strong> – Lightest traffic throughout Del Mar, perfect for complex estate cleanouts requiring extended access.</li>
                  <li><strong>Afternoon return (4-6 PM)</strong> – Brief uptick on major routes but minimal impact to residential street access.</li>
                  <li><strong>Evening calm</strong> – After 6 PM, Del Mar's residential character creates very quiet conditions ideal for privacy-conscious luxury estate services.</li>
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6">Del Mar Coastal Climate & Property Impacts</h2>
                <p className="text-lg mb-4">
                  Del Mar's coastal microclimate directly influences property maintenance needs and junk removal demand:
                </p>

                <h3 className="text-2xl font-bold mb-4">Marine Layer & Coastal Moisture (Year-Round)</h3>
                <p className="text-lg mb-4">
                  Del Mar's oceanfront location creates persistent morning marine layer conditions:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>June Gloom intensity</strong> – May-July brings dense morning fog that often persists until noon in beachfront areas while Del Mar Heights enjoys sunshine. This creates cooler working conditions for morning services and reduces tourist crowds until afternoon.</li>
                  <li><strong>Salt air corrosion</strong> – Properties within 1/2 mile of the ocean experience accelerated deterioration of outdoor furniture, metal fixtures, and appliances. We regularly remove rusted patio sets, corroded BBQ grills, and salt-damaged outdoor equipment from coastal properties.</li>
                  <li><strong>Humidity and mold concerns</strong> – Coastal moisture accelerates mold growth in stored items, garages, and outdoor storage areas. We provide rapid response for water-damaged and mold-affected item removal.</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4">Year-Round Mild Climate (60-75°F Average)</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Consistent service availability</strong> – Del Mar's temperate climate allows year-round estate services without weather delays common in other regions.</li>
                  <li><strong>Outdoor living wear</strong> – Constant use of patios, pools, and outdoor spaces creates steady furniture replacement cycles. UV damage from 280+ annual sunny days fades fabrics and degrades materials.</li>
                  <li><strong>Garden and landscape debris</strong> – Continuous growing season generates year-round landscaping waste, palm fronds, and yard debris requiring regular removal.</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4">Winter Rainfall (December-March)</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Limited annual rainfall (10-12 inches)</strong> – Del Mar receives minimal precipitation concentrated in winter months. Infrequent rain events catch property owners off-guard, leading to water-damaged items in outdoor storage.</li>
                  <li><strong>Storm drainage concerns</strong> – Hillside Del Mar Heights properties can experience water runoff issues during heavy rain, occasionally flooding garages or storage areas. We provide rapid response for water-damaged item removal.</li>
                  <li><strong>Post-storm landscape debris</strong> – High winds accompanying winter Pacific storms topple tree branches, outdoor furniture, and landscaping elements requiring prompt removal.</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4">Santa Ana Wind Events (September-December)</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Offshore wind protection</strong> – Del Mar's coastal location provides partial protection from the most intense Santa Ana winds, but events still impact properties.</li>
                  <li><strong>Debris generation</strong> – Winds topple outdoor furniture, umbrellas, decorative items, and eucalyptus tree branches throughout Del Mar Heights and Flower Hill areas.</li>
                  <li><strong>Fire risk awareness</strong> – Del Mar's proximity to Torrey Pines State Reserve and inland canyons creates wildfire awareness during Santa Ana conditions. We maintain protocols for safe debris management during high fire danger periods.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-12 mb-6">Specialty Services for Del Mar Properties</h3>
                <p className="text-lg mb-4">
                  Del Mar's unique coastal lifestyle requires specialized <strong>junk removal</strong> services:
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

                <h3 className="text-2xl font-bold mt-12 mb-4">Eco-Friendly Disposal for Coastal Del Mar</h3>
                <p className="text-lg mb-4">
                  As a coastal community, Del Mar values environmental protection. Our <strong>junk removal near me Del Mar</strong> service prioritizes sustainability:
                </p>
                <ul className="list-disc pl-6 mb-8">
                  <li><strong>Donation Programs:</strong> Partner with local charities and nonprofits for usable items</li>
                  <li><strong>Comprehensive Recycling:</strong> Metals, electronics, and materials properly processed</li>
                  <li><strong>Coastal Protection:</strong> Ensure no debris reaches ocean or waterways</li>
                  <li><strong>Furniture Restoration:</strong> Connect valuable pieces with restoration specialists</li>
                  <li><strong>Hazardous Material Handling:</strong> Proper disposal away from sensitive coastal areas</li>
                  <li><strong>Construction Debris:</strong> Recycling and material recovery for renovation waste</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Del Mar"
          contextParagraph="Estate cleanouts, vacation rental turnovers, and luxury property renovations from Del Mar Village to Del Mar Heights all use transparent, volume-based pricing. Racing season or beach traffic doesn't change our rates."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Del Mar" coverageArea="North County Coastal" />

        {/* Why Choose Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Del Mar Residents Choose Us</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span><strong>Coastal Access Expertise:</strong> Navigate narrow Village streets, beachfront access, and hillside Heights properties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span><strong>Luxury Home Experience:</strong> White-glove service for high-value properties, designer furniture, art handling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span><strong>Discreet Operations:</strong> Professional, unmarked vehicles for privacy-conscious coastal estates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span><strong>HOA Coordination:</strong> Work seamlessly with Stratford Court and gated community requirements</span>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span><strong>Vacation Rental Ready:</strong> Quick turnovers for short-term rental properties near Fairgrounds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span><strong>Racetrack Scheduling:</strong> Plan around Del Mar Racing season traffic and event schedules</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span><strong>Property Protection:</strong> Floor runners, door padding, wall protection for luxury finishes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span><strong>Multi-Story Navigation:</strong> Experienced with Del Mar Heights hillside homes and complex layouts</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8 mb-8">
                <h4 className="text-xl font-bold mb-3">Property Types We Serve in Del Mar</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <ul className="space-y-1">
                    <li>✓ Luxury Beach Homes</li>
                    <li>✓ Gated Communities</li>
                    <li>✓ Vacation Rentals</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>✓ Hillside Estates</li>
                    <li>✓ Condominiums</li>
                    <li>✓ Historic Properties</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>✓ Commercial Spaces</li>
                    <li>✓ Coastal Cottages</li>
                    <li>✓ Modern Estates</li>
                  </ul>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Schedule Your Del Mar Junk Removal?</h3>
                <p className="text-xl mb-6">
                  Serving Del Mar Village to Del Mar Heights • Same-Day Available • Licensed & Insured
                </p>
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-4"
                >
                  📞 Call (619) 750-0114 Now
                </a>
                <p className="text-sm">
                  Or <a href="/contact" className="underline hover:text-blue-200">book online</a> and save 15% on your first service
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <DelMarFAQSection />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related Luxury Coastal Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Designer furniture and luxury coastal home furnishings removal</p>
              </a>
              <a href="/appliance-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal San Diego</h4>
                <p className="text-gray-600">High-end kitchen appliances and estate equipment disposal</p>
              </a>
              <a href="/construction-debris-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
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
