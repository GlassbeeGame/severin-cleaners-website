import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PacificBeachFAQSection from "./PacificBeachFAQSection";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Pacific Beach Junk Removal | Beach House & Rental Experts | (619) 750-0114',
  description: 'Pacific Beach vacation rental junk removal Crystal Pier to Crown Point. Boardwalk debris, beach furniture. (619) 750-0114',
  keywords: 'Pacific Beach junk removal, junk hauling Pacific Beach, junk pickup PB, trash removal Pacific Beach, PB San Diego junk removal, junk removal 92109, Garnet Avenue junk hauling',
  openGraph: {
    title: 'Pacific Beach Junk Removal | Same-Day Hauling | Licensed & Insured',
    description: 'Professional Pacific Beach junk removal from Crystal Pier to Crown Point. Same-day service, transparent pricing, vacation rental experts. Licensed & insured. Call (619) 750-0114!',
    url: 'https://severincleaners.com/junk-removal-pacific-beach',
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pacific Beach Junk Removal | Same-Day Hauling | Licensed & Insured',
    description: 'Professional Pacific Beach junk removal from Crystal Pier to Crown Point. Same-day service, transparent pricing, vacation rental experts. Licensed & insured. Call (619) 750-0114!',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-pacific-beach',
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
};

export default function JunkRemovalPacificBeachPage() {
  // Service schema for Pacific Beach location
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Pacific Beach",
    serviceName: "Junk Removal",
    description: "Professional Pacific Beach junk removal from Crystal Pier to Crown Point. Same-day service, transparent pricing, vacation rental experts. Licensed & insured.",
    url: "https://severincleaners.com/junk-removal-pacific-beach",
  });

  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Pacific Beach Junk Removal", url: "https://severincleaners.com/junk-removal-pacific-beach" },
  ]);

  // Existing WasteRemovalService and FAQ schemas
  const existingSchemas = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WasteRemovalService",
        "@id": "https://severincleaners.com/junk-removal-pacific-beach#service",
        "name": "Junk Removal Pacific Beach",
        "description": "Professional junk removal and hauling services for Pacific Beach, CA (92109)",
        "areaServed": {
          "@type": "Place",
          "name": "Pacific Beach",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Pacific Beach",
            "addressRegion": "CA",
            "postalCode": "92109",
            "addressCountry": "US"
          }
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Pacific Beach Junk Removal Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Single Item Removal",
                "description": "Individual furniture and appliance removal"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "USD",
                "price": "95.00",
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "unitText": "from"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Quarter Truck Load",
                "description": "Small volume junk removal"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "USD",
                "price": "250.00",
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "unitText": "from"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Half Truck Load",
                "description": "Medium volume junk removal"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "USD",
                "price": "450.00",
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "unitText": "from"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Full Truck Load",
                "description": "Large volume junk removal and cleanouts"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "USD",
                "price": "700.00",
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "unitText": "from"
                }
              }
            }
          ]
        },
        "serviceType": [
          "Vacation Rental Cleanouts",
          "Beach House Cleanouts",
          "Student Housing Cleanouts",
          "Restaurant & Bar Cleanouts",
          "Same-Day Junk Removal"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you service all of Pacific Beach?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We service every street in PB from Tourmaline Surf Beach to Belmont Park, including Crown Point, Bay Park, and all of Garnet Avenue. Our team knows every alley and access point."
            }
          },
          {
            "@type": "Question",
            "name": "Can you handle vacation rental turnovers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We specialize in same-day vacation rental cleanouts throughout Pacific Beach, including Airbnb and VRBO properties. We understand the tight turnaround times required."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work around PB's Tuesday Farmers Market?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we're familiar with all PB events including the Tuesday Farmers Market on Bayard Street, Over-the-Line Tournament, and summer concerts. We schedule accordingly."
            }
          },
          {
            "@type": "Question",
            "name": "How much does junk removal cost in Pacific Beach?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pricing starts from $95 for single items and varies based on volume. Most PB jobs range from $250-$700. We provide upfront quotes from photos with no hidden fees."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer same-day or evening pickups?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide same-day service when scheduled before 2 PM and offer evening pickups for urgent situations. Perfect for vacation rental emergencies or move-out deadlines."
            }
          },
          {
            "@type": "Question",
            "name": "Can you remove heavy items from upstairs apartments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Our team safely removes heavy furniture and appliances from multi-story buildings, including the narrow staircases common in PB apartments. We use proper equipment and protection."
            }
          }
        ]
      }
    ]
  };

  // Combine all schemas into @graph
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      serviceSchema,
      breadcrumbSchema,
      ...existingSchemas["@graph"],
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
                ✓ Same-Day Service • Licensed & Insured • Transparent Pricing
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Pacific Beach Junk Removal | Beach House & Rental Experts
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                ⭐⭐⭐⭐⭐ 5.0 Rating • Crystal Pier to Crown Point • Your Local PB Experts
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  📞 Call Now for Same-Day Junk Removal: (619) 750-0114
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  Book Your Pacific Beach Junk Pickup – Save 15% Online
                </a>
              </div>
              <p className="text-lg mt-4">
                ✓ Vacation Rental Specialists ✓ Same-Day Hauling ✓ Beach Property Experts
              </p>
            </div>
          </div>
        </section>

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Pacific Beach" />

        {/* Main Content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Professional Junk Hauling Pacific Beach – Crystal Pier to Crown Point
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                  <strong>Pacific Beach junk removal</strong> requires specialized knowledge of one of San Diego's most vibrant beach communities. From Ocean Front Walk condos near Crystal Pier to Crown Point bay-front homes, our <strong>junk hauling Pacific Beach</strong> team navigates narrow alleys, tight parking, and vacation rental schedules with expert efficiency. We're fully licensed and insured, providing same-day <strong>trash removal Pacific Beach</strong> service throughout the 92109 area with transparent pricing—no hidden fees, no surprises.
                </p>

                <p className="text-lg mb-6">
                  Whether you need <strong>junk pickup PB</strong> for a Garnet Avenue apartment cleanout, beach house furniture removal near Tourmaline Surf Park, or commercial debris hauling along Mission Boulevard, our <strong>PB San Diego junk removal</strong> experts handle it all. We understand PB's unique challenges: tourist traffic, student move-outs, vacation rental turnovers, and salt-air damaged furniture. Our local team knows the backstreets, parking regulations, and building access points throughout North PB cottages, Crown Point neighborhoods, and Bay Park hillside properties.
                </p>

                <p className="text-lg mb-6">
                  From removing sun-faded patio furniture at beachfront properties along Ocean Boulevard to hauling away broken surfboards and beach cruisers from garages on Lamont Street, we provide comprehensive <strong>junk removal 92109</strong> service. Our trucks are equipped to handle everything from single-item pickups to complete estate cleanouts, and our team understands the access challenges of PB's narrow alleys, permit parking zones, and multi-story walkups. We schedule around the Tuesday Farmers Market on Bayard Street, coordinate with vacation rental turnovers, and know the best times to navigate <strong>Garnet Avenue junk hauling</strong> during peak tourist seasons.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">Complete Coverage of Pacific Beach Neighborhoods</h2>
                <p className="text-lg mb-4">
                  Our <strong>Pacific Beach junk removal</strong> service covers every corner of this diverse beach community. We know PB intimately—from the classic beach cottages north of Diamond Street to the luxury high-rises overlooking Mission Bay, and everything in between. Our team navigates the unique characteristics of each neighborhood with precision:
                </p>
                <ul className="list-disc pl-6 mb-8 space-y-3">
                  <li><strong>North Pacific Beach</strong> – Tourmaline Surf Park to Diamond Street corridor features vintage beach cottages from the 1940s-1960s mixed with modern condo developments. We regularly service these properties for surf gear removal, garage cleanouts, and salt-damaged patio furniture disposal. The narrow driveways and limited street parking require specialized equipment and scheduling expertise.</li>
                  <li><strong>Crown Point</strong> – This prestigious bayside neighborhood from Lamont Street to Crown Point Park offers stunning Mission Bay views and higher-end properties. We handle luxury home cleanouts, waterfront property furniture removal, and boat-related debris disposal. Access via Crown Point Drive and Riviera Road requires familiarity with HOA regulations and careful navigation of the tight residential streets.</li>
                  <li><strong>Garnet District</strong> – The bustling commercial heart of PB along Garnet Avenue from Ingraham to Mission Boulevard includes hundreds of restaurants, bars, and mixed-use buildings. We specialize in restaurant equipment removal, retail space cleanouts, and upstairs apartment cleanouts. Permit parking and loading zone coordination are essential in this high-density area.</li>
                  <li><strong>Beach Area</strong> – Ocean Front Walk and the numbered courts (1st through 50th) near Crystal Pier present unique access challenges. Boardwalk-only access properties, narrow alleys, and vacation rental turnovers dominate this zone. We provide same-day service for rental cleanouts and understand the strict parking enforcement in this tourist-heavy corridor.</li>
                  <li><strong>Bay Park</strong> – Eastern PB from I-5 to Morena Boulevard features hillside homes with sweeping bay views. These larger properties on elevated lots like Soledad Mountain Road and Loring Street often require estate cleanouts, construction debris removal, and landscaping waste disposal. The steep driveways and distance from main corridors make local expertise crucial.</li>
                  <li><strong>The Promenade Area</strong> – Clustered around the shopping center at Mission Boulevard and Grand Avenue, this mixed residential-commercial zone includes modern apartments and retail spaces. We service property management companies, retail businesses, and apartment complexes with flexible scheduling to minimize disruption.</li>
                  <li><strong>Fanuel Street Corridor</strong> – The tree-lined streets between Garnet and Grand feature classic California bungalows and small apartment buildings. These older properties often need garage cleanouts, estate cleanouts, and removal of accumulated items from decades of ownership. Narrow driveways and mature landscaping require careful navigation.</li>
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6">Major Streets & Routes We Service Daily</h2>
                <p className="text-lg mb-4">
                  Our <strong>junk hauling Pacific Beach</strong> team knows every major corridor, residential street, and hidden alley in PB. We've mapped optimal routes for different times of day and coordinated thousands of pickups throughout the neighborhood:
                </p>

                <h3 className="text-2xl font-bold mb-4">Main Commercial Corridors</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Garnet Avenue</strong> – The iconic 1.5-mile commercial spine running from I-5 to the beach. We service restaurants, bars, retail spaces, and mixed-use buildings along this busy corridor. Weekday mornings (6-10 AM) and early afternoons (1-3 PM) offer the best access before evening crowds arrive. Permit parking zones and loading zones require advance coordination.</li>
                  <li><strong>Mission Boulevard</strong> – The beachfront "cruiser highway" from Pacific Beach Drive to Law Street. This scenic route features vacation rentals, surf shops, and beachfront businesses. Summer weekend traffic (May-September) creates challenges, so we prioritize early morning (7-9 AM) or evening (after 6 PM) pickups during peak season. Salt air corrosion makes furniture and appliance removal particularly common along this corridor.</li>
                  <li><strong>Grand Avenue</strong> – A key east-west residential artery connecting I-5 to the beach. This mixed-use street includes apartment buildings, single-family homes, and The Promenade shopping center. We service this corridor daily for apartment cleanouts, retail debris removal, and residential junk pickup. Less congested than Garnet, Grand Avenue offers better midday access.</li>
                  <li><strong>Cass Street</strong> – Running parallel to Ingraham from Law Street to Pacific Beach Drive, Cass Street features the PB Library, Cass Street Bar & Grill, and numerous apartments. We frequently service student housing cleanouts and restaurant equipment removal along this route. The library plaza on Tuesdays hosts the Farmers Market, requiring schedule coordination for nearby properties.</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4">Key Residential Streets</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Ingraham Street</strong> – The primary bayside corridor from I-5 to Crown Point features restaurants like Café Bahia, The Patio on Lamont Street, and numerous bay-view apartments. We handle regular pickups from restaurants, apartment complexes, and single-family homes. Morning service (before 11 AM) avoids brunch traffic at popular dining spots.</li>
                  <li><strong>Lamont Street</strong> – The eastern boundary of Crown Point from Mission Bay Drive to Crown Point Drive. Properties here include bay-front homes, boat docks, and luxury condos. We specialize in waterfront property cleanouts, boat-related debris removal, and high-end furniture disposal. HOA coordination is often required for multi-unit complexes.</li>
                  <li><strong>Bayard Street</strong> – Hosts the popular Tuesday Farmers Market from 2-7 PM year-round. We avoid scheduling pickups on this street Tuesday afternoons and coordinate with nearby property managers for alternative access. The rest of the week offers excellent residential access for single-family home and apartment cleanouts.</li>
                  <li><strong>Turquoise Street</strong> – North PB's main commercial street features the Vons shopping center, OAKS Brewing, and neighborhood retail. We service retail spaces, apartments above shops, and surrounding residential properties. The grocery store loading zone provides strategic access for larger jobs when coordinated with center management.</li>
                  <li><strong>Ocean Boulevard / Ocean Front Walk</strong> – The boardwalk running from Law Street to Pacific Beach Drive includes Crystal Pier and dozens of beachfront vacation rentals. Vehicle access is limited to designated alley crossings. We specialize in vacation rental turnovers, carrying items from boardwalk properties to street-accessible loading points. Same-day service is standard during summer rental turnover season.</li>
                  <li><strong>Crown Point Drive</strong> – The scenic loop around Crown Point Park offers Mission Bay panoramas and upscale homes. These properties often require estate cleanouts, luxury furniture removal, and landscaping debris disposal. Wide streets and larger lots make access easier than beach-side properties, but HOA guidelines must be followed.</li>
                  <li><strong>Diamond Street</strong> – The northern boundary of Pacific Beach proper, separating it from North PB neighborhoods. Properties along Diamond often include larger lots, detached garages, and mature landscaping. We handle garage cleanouts, yard waste removal, and estate cleanouts in this established residential area.</li>
                  <li><strong>Riviera Drive / Riviera Road</strong> – Winding through the Crown Point hillside with bay views, these streets feature mid-century homes on elevated lots. Steep driveways and limited street parking require careful equipment positioning. We regularly service these properties for furniture removal, appliance disposal, and construction debris hauling.</li>
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6">Local Landmarks & Service Areas</h2>
                <p className="text-lg mb-4">
                  Our <strong>junk pickup PB</strong> team uses Pacific Beach's iconic landmarks as reference points for precise scheduling and route optimization. We've completed thousands of jobs near these well-known locations:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-3">Crystal Pier & Oceanfront Properties</h3>
                    <p className="mb-4">
                      The historic Crystal Pier (opened 1927) at 4500 Ocean Boulevard serves as PB's most recognizable landmark. We service the dozens of vacation rental cottages on the pier itself and hundreds of beachfront properties within walking distance. Salt air damage accelerates furniture deterioration here, making our <strong>junk removal Pacific Beach</strong> service essential for property managers. Boardwalk access limitations require specialized equipment and timing—we schedule early morning pickups (6-8 AM) to avoid tourist traffic.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Kate Sessions Memorial Park</h3>
                    <p className="mb-4">
                      This 79-acre hillside park offers panoramic bay and ocean views from its elevated position on Soledad Mountain Road. Surrounding neighborhoods feature larger homes on spacious lots, often requiring estate cleanouts, garage clear-outs, and landscaping debris removal. We navigate the winding access roads (Loring Street, Lamont Street) with ease and regularly service properties in this prestigious area.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Pacific Beach Library & Recreation Center</h3>
                    <p className="mb-4">
                      Located at 4275 Cass Street, the PB Library anchors the central neighborhood. Surrounding apartments and mixed-use buildings generate steady demand for our <strong>junk hauling Pacific Beach</strong> service. The Tuesday Farmers Market (2-7 PM) on the adjacent plaza requires schedule coordination, but the rest of the week offers excellent access for cleanouts along Cass Street and neighboring blocks.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Tourmaline Surfing Park</h3>
                    <p className="mb-4">
                      North PB's premier surf spot at Tourmaline Street and La Jolla Boulevard marks the northern edge of Pacific Beach. Nearby neighborhoods feature classic beach cottages and modern townhomes. We regularly remove old surfboards, broken beach cruisers, and sun-damaged patio furniture from garages and storage areas. The community's laid-back vibe contrasts with central PB's bustle, offering easier parking and access during midday hours.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Belmont Park</h3>
                    <p className="mb-4">
                      The historic amusement park at 3146 Mission Boulevard marks PB's southern boundary with Mission Beach. Properties near Belmont Park experience high tourist traffic year-round, with peak congestion May-September. We service vacation rentals, restaurants, and retail spaces in this zone, scheduling pickups during early morning hours (6-9 AM) or evenings (after 7 PM) to avoid beach traffic gridlock.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Mission Bay Park & Crown Point Shores</h3>
                    <p className="mb-4">
                      The expansive Mission Bay waterfront along Ingraham Street and Crown Point Drive features bay-front homes, sailing clubs, and water recreation facilities. We specialize in waterfront property cleanouts, boat-related debris removal, and luxury furniture disposal. Properties here often include boat docks, outdoor entertainment areas, and expansive yards requiring comprehensive <strong>trash removal Pacific Beach</strong> service.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">The Promenade Shopping Center</h3>
                    <p className="mb-4">
                      Located at Mission Boulevard and Grand Avenue, this retail hub includes major stores, restaurants, and services. We provide <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">commercial junk removal</a> for retail spaces, restaurant equipment disposal, and dumpster overflow solutions. Loading dock access at the rear of the center facilitates efficient pickups. Surrounding apartments and condos also generate residential cleanout business.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">PB Shore Club & Luxury Condos</h3>
                    <p className="mb-4">
                      High-rise luxury condos along Mission Boulevard and Garnet Avenue require elevator coordination, building management approval, and careful scheduling. We're experienced with multi-story building protocols, including service elevator reservations, loading dock access, and HOA requirements. Our team carries items from upper floors and protects hallways, elevators, and lobbies during removal.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Fanuel Park & Residential Streets</h3>
                    <p className="mb-4">
                      This quiet pocket park at Fanuel Street and Chalcedony Street serves surrounding residential neighborhoods of classic California bungalows. We handle estate cleanouts, garage clear-outs, and accumulated item removal from these older properties. Many homes date to the 1940s-1960s with narrow driveways and detached garages, requiring careful equipment maneuvering.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">UCSD Recreation / Kendall-Frost Marsh Reserve</h3>
                    <p className="mb-4">
                      The eastern edges of Crown Point border this protected wetland and UCSD recreation facilities. Adjacent properties on Crown Point Drive East and East Mission Bay Drive offer bay views and larger lots. We service these properties for estate cleanouts, construction debris removal, and landscaping waste disposal, appreciating the environmental sensitivity of the neighboring preserve.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">PB Taylor Branch Library Vicinity</h3>
                    <p className="mb-4">
                      Surrounding apartments, condos, and retail spaces along Grand Avenue near Lamont Street generate consistent demand for our services. The nearby retail corridor includes restaurants and shops requiring commercial cleanout services, while apartment complexes need regular tenant turnover cleanouts and bulk item removal.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Garnet Avenue Bar & Restaurant District</h3>
                    <p className="mb-4">
                      The dense concentration of nightlife venues from Bayard Street to Mission Boulevard requires specialized commercial service. We schedule restaurant equipment removal, bar furniture disposal, and debris cleanouts during early morning hours (5-9 AM) when street parking is available and business operations are paused. Our team understands the urgency of renovation projects and same-day service needs.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6">Pacific Beach Traffic Patterns & Scheduling Expertise</h2>
                <p className="text-lg mb-4">
                  Successful <strong>PB San Diego junk removal</strong> requires intimate knowledge of traffic patterns that shift dramatically by season, day of week, and time of day. Our team has mastered the rhythm of Pacific Beach's streets:
                </p>

                <h3 className="text-2xl font-bold mb-4">Tourist Season Congestion (Memorial Day to Labor Day)</h3>
                <p className="text-lg mb-4">
                  Summer transforms Pacific Beach into one of San Diego's most congested neighborhoods. Weekend beach traffic on Mission Boulevard from 10 AM to 6 PM creates gridlock, with visitors circling for parking near Crystal Pier and Ocean Front Walk. We adapt by:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Early morning priority</strong> – Scheduling beach-adjacent properties for 6-9 AM pickups before tourist arrivals</li>
                  <li><strong>Alternative routing</strong> – Using Ingraham Street and Grand Avenue to bypass Mission Boulevard backups</li>
                  <li><strong>Evening service expansion</strong> – Offering 6-8 PM pickups after beach crowds disperse</li>
                  <li><strong>Vacation rental coordination</strong> – Aligning with Saturday-Sunday turnover schedules when rental cleanouts are urgent</li>
                  <li><strong>Permit parking mastery</strong> – Understanding 2-hour limit zones and permit-only streets to avoid tickets and delays</li>
                </ul>
                <p className="text-lg mb-6">
                  The July 4th weekend, Over-the-Line Tournament (mid-July), and August beach days represent peak chaos. We increase crew availability but recommend clients schedule non-urgent pickups for weekdays during these high-traffic periods. Garnet Avenue remains navigable during summer days, making it our preferred corridor for cross-town routing.
                </p>

                <h3 className="text-2xl font-bold mb-4">Student Housing Move-Out Surges</h3>
                <p className="text-lg mb-4">
                  Pacific Beach houses thousands of SDSU and UCSD students in apartments and rental homes concentrated along Garnet Avenue, Grand Avenue, and the numbered streets. Two annual move-out periods create overwhelming demand:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>May move-outs (late April to mid-May)</strong> – Spring semester ends trigger mass apartment turnovers. We double crew capacity and extend hours to 8 PM to handle furniture, mattresses, broken electronics, and accumulated clutter from departing students. Properties along Bayard, Lamont, and the 4000-block of Mission Boulevard see heaviest activity.</li>
                  <li><strong>August move-ins (mid-August to early September)</strong> – New students arrive with parents hauling old furniture to make room for new. We coordinate with property managers for bulk pickup days and offer discounted multi-unit pricing. Alley access behind Garnet Avenue buildings gets congested with moving trucks, requiring early morning (6-8 AM) scheduling.</li>
                </ul>
                <p className="text-lg mb-6">
                  Student housing properties also generate steady business year-round for broken furniture, failed appliances, and eviction cleanouts. We maintain relationships with major property management companies in PB to provide priority same-day response during emergencies.
                </p>

                <h3 className="text-2xl font-bold mb-4">Tuesday Farmers Market & Weekly Events</h3>
                <p className="text-lg mb-4">
                  The beloved Pacific Beach Tuesday Farmers Market runs year-round from 2-7 PM at the PB Library plaza (Bayard Street and Cass Street). Street closures affect three blocks:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Bayard Street closed</strong> – Between Garnet Avenue and Reed Avenue from noon to 8 PM for setup and breakdown</li>
                  <li><strong>Alternative access required</strong> – Properties on Bayard need service via Grand Avenue or alley access during market hours</li>
                  <li><strong>Parking enforcement intensifies</strong> – Surrounding streets fill with market visitors; permit zones strictly enforced</li>
                  <li><strong>Optimal scheduling</strong> – We coordinate Bayard Street area pickups for Wednesday-Monday, or early Tuesday mornings before noon</li>
                </ul>
                <p className="text-lg mb-6">
                  Additional regular events impacting traffic include Thursday night summer concerts at the Library plaza (June-August), the annual PB Block Party (spring), and holiday parades. We track the community calendar and proactively contact clients when events affect scheduled service.
                </p>

                <h3 className="text-2xl font-bold mb-4">Restaurant & Nightlife Scheduling Considerations</h3>
                <p className="text-lg mb-4">
                  Garnet Avenue's restaurant and bar district (Bayard to Mission Boulevard) presents unique timing challenges:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Morning access window (5-10 AM)</strong> – Streets quiet after bar close at 2 AM; optimal time for commercial debris removal and equipment hauling</li>
                  <li><strong>Lunch service protection (11 AM-2 PM)</strong> – Avoid disrupting restaurant operations during peak dining hours</li>
                  <li><strong>Late afternoon gaps (2-5 PM)</strong> – Post-lunch, pre-dinner window good for smaller commercial cleanouts and upstairs apartment access</li>
                  <li><strong>Evening constraints (5 PM-2 AM)</strong> – Street parking disappears; nightlife crowds make debris removal impractical except for emergencies</li>
                  <li><strong>Weekend intensity</strong> – Friday-Saturday nights bring heavy foot traffic; we prioritize early Sunday morning (6-9 AM) pickups for bar and restaurant cleanouts</li>
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6">Pacific Beach Weather & Climate Impacts on Junk Removal</h2>
                <p className="text-lg mb-4">
                  Pacific Beach's coastal microclimate directly influences both the types of junk we remove and our operational strategies. Understanding these weather patterns ensures efficient service year-round:
                </p>

                <h3 className="text-2xl font-bold mb-4">Marine Layer & Morning Fog (May-August)</h3>
                <p className="text-lg mb-4">
                  "May Gray" and "June Gloom" bring persistent morning fog that blankets Pacific Beach from Ocean Front Walk to Lamont Street, typically clearing by noon. This weather phenomenon actually benefits our <strong>junk removal 92109</strong> operations:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Cooler working conditions</strong> – Foggy mornings (50-60°F) make physically demanding furniture removal more comfortable for our crew</li>
                  <li><strong>Reduced tourist traffic</strong> – Overcast mornings keep beach crowds away until afternoon, giving us easier access to beachfront properties</li>
                  <li><strong>Extended morning window</strong> – We schedule more pickups between 6 AM-noon during marine layer season, knowing sunshine and crowds arrive later</li>
                  <li><strong>Moisture protection protocols</strong> – We tarp electronics and water-sensitive items when removing from storage areas to prevent fog moisture damage during transport</li>
                </ul>
                <p className="text-lg mb-6">
                  The marine layer also accelerates rust and corrosion on metal furniture, outdoor appliances, and beach equipment stored in open garages or patios. We see increased removal requests for deteriorated patio sets, rusted barbecue grills, and oxidized metal shelving units from properties within four blocks of the ocean.
                </p>

                <h3 className="text-2xl font-bold mb-4">Year-Round Mild Climate & Salt Air Damage</h3>
                <p className="text-lg mb-4">
                  Pacific Beach enjoys one of America's most enviable climates—average temperatures of 65-75°F with minimal temperature swings. However, this mild weather comes with a corrosive partner: salt-laden ocean breezes. Properties within a half-mile of the coast experience accelerated deterioration:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Patio furniture destruction</strong> – Wicker, rattan, and metal outdoor sets degrade 2-3x faster than inland locations. We remove dozens of salt-damaged furniture sets monthly from Ocean Front Walk, Mission Boulevard, and Crown Point Drive properties.</li>
                  <li><strong>Appliance corrosion</strong> – Washers, dryers, and refrigerators in garages or outdoor areas develop rust and electrical failures. Beachfront vacation rentals replace appliances every 5-7 years versus 10-15 years inland.</li>
                  <li><strong>Vehicle and bicycle decay</strong> – Beach cruisers, old cars, and motorcycles stored in open garages deteriorate rapidly. We regularly remove rusted bicycles and non-functional vehicles from PB properties.</li>
                  <li><strong>Wood rot acceleration</strong> – Outdoor wooden furniture, decks, and fences absorb salt moisture, leading to rot and mold. We handle frequent removal of deteriorated wooden items from coastal properties.</li>
                </ul>
                <p className="text-lg mb-6">
                  The consistent mild weather also means year-round outdoor living—and year-round accumulation of broken outdoor items. Unlike climates with harsh winters that force seasonal cleanouts, PB residents often accumulate patio debris, broken umbrellas, and failed outdoor equipment for years before calling for removal.
                </p>

                <h3 className="text-2xl font-bold mb-4">Santa Ana Wind Events (September-December)</h3>
                <p className="text-lg mb-4">
                  While Pacific Beach's ocean proximity provides protection from the most intense Santa Ana winds, these hot, dry easterly winds still impact the community several times per fall and early winter:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Debris generation</strong> – Winds blow over patio furniture, umbrellas, and decorative items, often breaking them beyond repair. We see pickup requests spike 24-48 hours after wind events.</li>
                  <li><strong>Tree and palm frond damage</strong> – Bay Park's hillside properties with mature trees experience branch drops. We offer expedited yard waste removal following wind storms.</li>
                  <li><strong>Wildfire awareness</strong> – During severe Santa Ana events, we stay alert for inland wildfire smoke that can affect operations, though PB's coastal location provides significant protection.</li>
                  <li><strong>Temperature spikes</strong> – Santa Ana days can hit 85-95°F in PB (versus normal 70°F). We adjust crew schedules, increase hydration protocols, and may shift larger jobs to early morning hours.</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4">Winter Rainfall & Storm Drainage (November-March)</h3>
                <p className="text-lg mb-4">
                  Pacific Beach receives about 10-12 inches of annual rainfall concentrated in winter months. While rain is infrequent, it impacts our operations when it arrives:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Saturated items</strong> – Furniture, mattresses, and upholstered items left in rain become significantly heavier and require different handling. We warn clients about wet item surcharges during rainy periods.</li>
                  <li><strong>Alley flooding</strong> – PB's narrow alleys (especially between Mission Boulevard and Bayard Street) can experience poor drainage during heavy rain. We monitor conditions and adjust equipment deployment accordingly.</li>
                  <li><strong>Garage flooding discoveries</strong> – Winter storms sometimes flood garages in low-lying areas near Crown Point, prompting emergency cleanout calls for water-damaged items. We offer rapid response (often same-day) to prevent mold.</li>
                  <li><strong>Post-storm surges</strong> – After significant rainfall events (2+ inches), we see increased removal requests for rain-damaged outdoor furniture, waterlogged storage boxes, and failed sump pumps within 3-5 days.</li>
                </ul>
                <p className="text-lg mb-6">
                  We maintain weather monitoring protocols and proactively contact clients with scheduled outdoor pickups when rain is forecast, offering rescheduling or tarp protection for weather-sensitive items.
                </p>

                <h3 className="text-2xl font-bold mb-4">Summer Heat & Tourist Season Overlap (June-September)</h3>
                <p className="text-lg mb-4">
                  Pacific Beach's warmest months coincide with peak tourist season, creating compound scheduling challenges. While temperatures rarely exceed 80°F due to ocean influence, the combination of heat, crowds, and vacation rental turnovers requires strategic planning:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Early shift prioritization</strong> – We expand 6-10 AM crew capacity to handle maximum jobs before midday heat and crowds arrive</li>
                  <li><strong>Vacation rental urgency</strong> – Same-day cleanout demand peaks as rental properties turn over every Saturday-Sunday. We dedicate specialized crews to Ocean Front Walk and Crystal Pier area during summer weekends.</li>
                  <li><strong>Heat exhaustion protocols</strong> – Though PB stays cooler than inland San Diego, our crew uses enhanced hydration, sunscreen, and shade breaks during multi-hour estate cleanouts</li>
                  <li><strong>Tourist consideration</strong> – We coordinate with vacation rental owners to perform cleanouts during checkout windows (typically 10 AM-3 PM) while avoiding beach access disruption</li>
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6">Comprehensive Specialty Services for Pacific Beach Properties</h2>

                <h3 className="text-2xl font-bold mb-4">Vacation Rental & Airbnb Turnovers</h3>
                <p className="text-lg mb-4">
                  Pacific Beach ranks among San Diego's top vacation rental markets, with hundreds of Airbnb, VRBO, and short-term rental properties concentrated near Crystal Pier, Ocean Front Walk, and Crown Point. Our <strong>junk removal Pacific Beach</strong> service specializes in the unique demands of vacation rental operations:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Same-day response</strong> – When guests leave behind items or damage furniture, property managers need immediate removal to prepare for incoming guests. We offer 2-4 hour response times during summer season.</li>
                  <li><strong>Checkout window coordination</strong> – We align our arrival with standard checkout times (10 AM-11 AM) to remove items after guest departure but before cleaning crews arrive at 1-2 PM.</li>
                  <li><strong>Typical turnover items</strong> – Broken beach chairs, damaged coolers, left-behind luggage, failed beach cruisers, sun-faded outdoor cushions, guest-damaged furniture</li>
                  <li><strong>Photo documentation</strong> – We provide before/after photos for insurance and guest damage claims at property manager request</li>
                  <li><strong>Bulk furniture replacement</strong> – When rental properties refresh all furniture (typically every 3-5 years), we coordinate full cleanouts and donation of usable items</li>
                  <li><strong>Off-season refresh service</strong> – January-March is prime time for vacation rental upgrades; we handle complete property cleanouts and furniture swaps</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4">Beach House & Coastal Property Cleanouts</h3>
                <p className="text-lg mb-4">
                  Salt air, sand infiltration, and constant sunshine create unique maintenance challenges for Pacific Beach homes within four blocks of the ocean. Our specialized <strong>junk hauling Pacific Beach</strong> service addresses coastal property needs:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Salt-damaged patio furniture</strong> – Wicker, rattan, aluminum, and steel outdoor sets deteriorate rapidly. We remove and properly dispose of corroded furniture while salvaging recyclable metal components.</li>
                  <li><strong>Sun-faded upholstery</strong> – Intense UV exposure fades and degrades indoor furniture near windows. We handle removal of couches, chairs, and cushions damaged by sun exposure.</li>
                  <li><strong>Beach equipment accumulation</strong> – Broken surfboards, paddleboards, boogie boards, snorkeling gear, beach umbrellas, and sand toys pile up in garages. We sort, haul, and donate usable items to surf clubs and youth programs.</li>
                  <li><strong>Sand-clogged appliances</strong> – Washers and dryers in beachfront properties fail prematurely from sand infiltration. We remove heavy appliances from multi-story walkups and elevated properties.</li>
                  <li><strong>Outdoor shower removal</strong> – Failed or outdated outdoor showers and rinse stations require specialized disconnection and hauling</li>
                  <li><strong>Weathered decking materials</strong> – We remove old deck boards, failed railings, and deteriorated outdoor structures</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4">Student Housing & Apartment Cleanouts</h3>
                <p className="text-lg mb-4">
                  Thousands of SDSU and UCSD students rent apartments and houses throughout Pacific Beach, creating consistent demand for move-out cleanouts, especially along Garnet Avenue, Grand Avenue, and surrounding streets:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>May move-out madness</strong> – Late April through mid-May brings hundreds of simultaneous student move-outs. We expand crews and extend hours to meet demand.</li>
                  <li><strong>Typical student items</strong> – Cheap furniture (Target/Ikea), futons, floor mattresses, broken electronics, mini fridges, abandoned clothing, textbooks, beer pong tables</li>
                  <li><strong>Multi-unit efficiency</strong> – We offer discounted rates for property managers cleaning out multiple units simultaneously in the same building</li>
                  <li><strong>Tight deadline coordination</strong> – Students often face noon-checkout deadlines with security deposit on the line. We provide early morning (6-9 AM) priority service.</li>
                  <li><strong>Trash-out service</strong> – For properties left in poor condition, we remove everything—trash, furniture, abandoned belongings, and debris—returning units to rent-ready condition</li>
                  <li><strong>Donation sorting</strong> – We separate usable furniture and clothing for donation to local charities, reducing landfill waste from student move-outs</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4">Restaurant, Bar & Commercial Cleanouts</h3>
                <p className="text-lg mb-4">
                  Garnet Avenue's restaurant and nightlife district generates steady commercial debris removal demand. Our <strong>Garnet Avenue junk hauling</strong> expertise includes:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Restaurant equipment removal</strong> – Commercial refrigerators, ovens, fryers, prep tables, walk-in cooler panels, and failed kitchen equipment. We coordinate early morning (5-9 AM) pickups to avoid disrupting business.</li>
                  <li><strong>Bar furniture and fixtures</strong> – Old bar tops, damaged stools, booth seating, neon signs, and decorative elements during renovations or closures</li>
                  <li><strong>Retail space cleanouts</strong> – Shelving systems, display cases, mannequins, and fixtures when businesses relocate or close</li>
                  <li><strong>Construction debris</strong> – Remodel materials, drywall, flooring, and renovation waste from restaurant and retail upgrades. (See our full <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">construction debris removal services</a>)</li>
                  <li><strong>Grease trap coordination</strong> – While we don't service grease traps directly, we coordinate with specialized services and handle surrounding equipment removal</li>
                  <li><strong>Flexible scheduling</strong> – We work around business hours, offering late evening (after 8 PM) and early morning (before 6 AM) service for minimal disruption</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4">Garage & Alley Cleanouts</h3>
                <p className="text-lg mb-4">
                  Pacific Beach's compact development pattern features narrow alleys, detached garages, and limited parking access. Our specialized approach handles these constraints:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Narrow alley navigation</strong> – The alleys between Mission Boulevard and Bayard Street are notoriously tight. We use compact equipment and hand-carry techniques when truck access is impossible.</li>
                  <li><strong>Permit parking coordination</strong> – We secure temporary parking permits when needed for street access during garage cleanouts in residential permit zones</li>
                  <li><strong>Decades of accumulation</strong> – Many PB garages house 20-30 years of stored items. We sort, organize, and remove everything from vintage surfboards to rusty tools to old car parts.</li>
                  <li><strong>Environmental hazards</strong> – Old paint cans, chemicals, batteries, and automotive fluids require proper hazardous waste disposal. We coordinate with certified facilities.</li>
                  <li><strong>Vehicle removal</strong> – Non-functional cars, motorcycles, and boats stored in PB garages. We coordinate with vehicle recyclers and donation programs.</li>
                  <li><strong>Estate sale remnants</strong> – After estate sales, we remove unsold items, furniture, and debris to return properties to market-ready condition</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4">Estate Cleanouts & Senior Downsizing</h3>
                <p className="text-lg mb-4">
                  Pacific Beach's established neighborhoods (especially Crown Point, Bay Park, and North PB) include many longtime homeowners and seniors. Our compassionate estate service includes:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Full-home cleanouts</strong> – We coordinate with executors and family members to clear entire properties after estate settlement</li>
                  <li><strong>Donation maximization</strong> – We identify valuable, antique, and usable items for donation to maximize charitable deductions and minimize waste</li>
                  <li><strong>Document handling</strong> – We separate important papers, photos, and documents for family review before disposal</li>
                  <li><strong>Sensitive timing</strong> – We understand the emotional difficulty of estate cleanouts and work respectfully with families through the process</li>
                  <li><strong>Downsizing assistance</strong> – Helping seniors move from houses to condos or assisted living, removing excess furniture and belongings</li>
                  <li><strong>Coordination with realtors</strong> – We work with real estate agents to prepare estate properties for sale, including final cleanout and minor debris removal</li>
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6">Items We Remove Throughout Pacific Beach</h2>
                <p className="text-lg mb-4">
                  Our comprehensive <strong>trash removal Pacific Beach</strong> service handles virtually any non-hazardous item. From single pieces to full estates, we remove:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-3">Furniture & Household Items</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Sofas, couches, sectionals, recliners</li>
                      <li>Mattresses, box springs, bed frames</li>
                      <li>Tables, chairs, dining sets</li>
                      <li>Dressers, wardrobes, armoires</li>
                      <li>Bookshelves, cabinets, entertainment centers</li>
                      <li>Desks, office furniture, filing cabinets</li>
                      <li>Patio furniture, outdoor dining sets</li>
                      <li>Beach-damaged furniture of all types</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Appliances & Electronics</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Refrigerators, freezers, wine coolers</li>
                      <li>Washers, dryers, combo units</li>
                      <li>Dishwashers, garbage disposals</li>
                      <li>Stoves, ovens, microwaves</li>
                      <li>Air conditioners, heaters</li>
                      <li>TVs, computers, monitors</li>
                      <li>Stereos, speakers, electronics</li>
                      <li>Small appliances (blenders, toasters, etc.)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Beach & Outdoor Equipment</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Surfboards, paddleboards, kayaks</li>
                      <li>Beach cruisers, bicycles, scooters</li>
                      <li>Broken beach chairs, umbrellas</li>
                      <li>Coolers, beach wagons, sand toys</li>
                      <li>BBQ grills, smokers, fire pits</li>
                      <li>Patio heaters, umbrellas, cushions</li>
                      <li><a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs and spas</a></li>
                      <li>Pool equipment, inflatable toys</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Construction & Renovation Debris</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Drywall, lumber, framing materials</li>
                      <li>Flooring (carpet, tile, hardwood)</li>
                      <li>Cabinets, countertops, fixtures</li>
                      <li>Windows, doors, trim</li>
                      <li>Roofing materials (non-asbestos)</li>
                      <li>Concrete, brick, stone (limited quantities)</li>
                      <li>Plumbing fixtures, pipe</li>
                      <li>Electrical fixtures, wire</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Yard & Garden Materials</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Palm fronds, tree branches</li>
                      <li>Lawn mowers, garden tools</li>
                      <li>Planters, pots, garden ornaments</li>
                      <li>Soil, mulch, rocks (small quantities)</li>
                      <li>Outdoor play equipment</li>
                      <li>Fencing materials, lattice</li>
                      <li>Garden sheds, storage boxes</li>
                      <li>Artificial turf, landscape fabric</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Commercial & Specialty Items</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Restaurant equipment, commercial appliances</li>
                      <li>Retail fixtures, display cases</li>
                      <li>Office cubicles, desks, chairs</li>
                      <li>Gym equipment, weights</li>
                      <li>Medical equipment (non-biohazard)</li>
                      <li>Retail inventory, overstock</li>
                      <li>Bar equipment, kegs, taps</li>
                      <li>Industrial shelving, racking</li>
                    </ul>
                  </div>
                </div>

                <p className="text-lg mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <strong>Items We Cannot Accept:</strong> Hazardous waste (paint, chemicals, asbestos, biohazards), wet paint, regulated medical waste, explosives, and materials requiring special permits. Call <a href="tel:6197500114" className="text-blue-600 hover:underline">(619) 750-0114</a> if you're unsure about specific items.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Pacific Beach"
          contextParagraph="Vacation rental turnovers, beach property cleanouts, and student housing move-outs throughout PB—from Crystal Pier to Crown Point—all use the same transparent pricing. No hidden fees, same-day service available."
        />

        {/* Why Choose Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Pacific Beach Residents & Property Managers Choose Severin Cleaners</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🏖️</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Beach Community Expertise</h3>
                    <p className="text-gray-600">We know every street, alley, and landmark in Pacific Beach. From Crystal Pier boardwalk access to Crown Point bay-front properties, our team navigates PB's unique challenges with ease.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">⚡</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Same-Day Service Available</h3>
                    <p className="text-gray-600">Vacation rental emergency? Student move-out deadline? We offer same-day pickup when scheduled before 2 PM, with evening service available during peak season.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🚗</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Traffic & Event Coordination</h3>
                    <p className="text-gray-600">We schedule around Tuesday Farmers Market, adjust for summer tourist traffic, and know alternative routes via Ingraham and Grand when Mission Boulevard is gridlocked.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🏠</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Vacation Rental Specialists</h3>
                    <p className="text-gray-600">We understand checkout windows, turnover urgency, and property damage documentation. Hundreds of PB property managers trust us for reliable, fast rental cleanouts.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">✅</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Licensed & Fully Insured</h3>
                    <p className="text-gray-600">Complete coverage for residential, commercial, and vacation rental properties. We carry liability insurance and workers' compensation for your protection.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💰</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                    <p className="text-gray-600">No hidden fees, no surprises. We provide upfront quotes based on photos and volume. All prices include labor, hauling, and responsible disposal.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-bold mb-3">Property Types We Service Throughout Pacific Beach:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li>✓ Ocean-front condos with elevator access</li>
                    <li>✓ Classic PB beach cottages and bungalows</li>
                    <li>✓ Garnet Avenue mixed-use buildings</li>
                    <li>✓ Crown Point bay-front homes</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>✓ Vacation rental properties (Airbnb/VRBO)</li>
                    <li>✓ Student housing apartments</li>
                    <li>✓ Bay Park hillside properties</li>
                    <li>✓ Commercial spaces on Garnet Avenue</li>
                  </ul>
                </div>
              </div>

              <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Schedule Your Pacific Beach Junk Removal?</h3>
                <p className="text-xl mb-6">
                  Serving Crystal Pier to Crown Point • Same-Day Service Available • Licensed & Insured
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
        <PacificBeachFAQSection />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related Beach Community Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Sofas, mattresses, and bulky beach-damaged furniture removal throughout PB</p>
              </a>
              <a href="/appliance-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal San Diego</h4>
                <p className="text-gray-600">Fridges, washers, dryers, and salt-air damaged appliance disposal</p>
              </a>
              <a href="/construction-debris-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
                <p className="text-gray-600">Beach house remodel and renovation debris cleanup services</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
