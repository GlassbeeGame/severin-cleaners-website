import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PacificBeachFAQSection from "./PacificBeachFAQSection";
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

        {/* Main Content */}
        <section className="py-16">
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

                <h2 className="text-3xl font-bold mt-8 mb-4">Complete Coverage of Pacific Beach</h2>
                <p className="text-lg mb-4">
                  Our junk removal services cover every neighborhood in Pacific Beach:
                </p>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li><strong>North PB</strong> - Tourmaline to Diamond Street, vintage cottages and modern condos</li>
                  <li><strong>Crown Point</strong> - Bay-side neighborhood from Lamont Street to Crown Point Park</li>
                  <li><strong>Garnet District</strong> - Heart of PB commercial corridor with restaurants and shops</li>
                  <li><strong>Beach Area</strong> - Ocean Front Walk and numbered courts near Crystal Pier</li>
                  <li><strong>Bay Park</strong> - Eastern PB from I-5 to Morena Boulevard hillside homes</li>
                </ul>

                <h2 className="text-3xl font-bold mt-8 mb-4">Streets We Service Daily</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Garnet Avenue - Main commercial strip</li>
                    <li>Mission Boulevard - Beach cruiser highway</li>
                    <li>Grand Avenue - East-west residential</li>
                    <li>Cass Street - PB Library area</li>
                    <li>Ingraham Street - Bayside dining</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Bayard Street - Tuesday Farmers Market</li>
                    <li>Turquoise Street - North PB commercial</li>
                    <li>Ocean Front Walk - Beachfront properties</li>
                    <li>Crown Point Drive - Bay-front homes</li>
                    <li>Lamont Street - Eastern border</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold mt-8 mb-4">Pacific Beach Landmarks & Neighborhoods We Cover</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Crystal Pier and surrounding vacation rentals - Same-day junk removal</li>
                    <li><strong>Kate Sessions Memorial Park area</strong> - Residential junk removal and estate cleanouts</li>
                    <li>PB Library and Recreation Center vicinity - Furniture and appliance removal</li>
                    <li>Tourmaline Surf Park neighborhood - Beach house cleanouts</li>
                    <li>Belmont Park border area - Commercial and residential hauling</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Mission Bay Park properties - Waterfront home cleanouts</li>
                    <li>Fanuel Park neighborhoods - Full-service junk removal</li>
                    <li>The Promenade shopping center - <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">Retail and commercial cleanouts</a></li>
                    <li>PB Shore Club luxury condos - High-rise junk removal</li>
                    <li>Tuesday Farmers Market on Bayard - Local business support</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold mt-8 mb-4">Specialty Junk Removal Services in Pacific Beach</h2>

                <h3 className="text-2xl font-bold mb-3">Vacation Rental Turnovers</h3>
                <p className="text-lg mb-4">
                  Pacific Beach has hundreds of Airbnb and VRBO properties requiring quick turnovers between guests. We provide same-day cleanouts for Ocean Front Walk rentals, Crystal Pier vacation homes, and properties throughout the beach area. Our service includes removal of left-behind items, old furniture, and damaged beach gear.
                </p>

                <h3 className="text-2xl font-bold mb-3">Beach House Cleanouts</h3>
                <p className="text-lg mb-4">
                  Salt air and sand damage furniture and outdoor equipment. We regularly remove sun-damaged patio sets, rusted beach cruisers, broken surfboards, weathered umbrellas, and worn-out beach gear from PB properties.
                </p>

                <h3 className="text-2xl font-bold mb-3">Student Housing Cleanouts</h3>
                <p className="text-lg mb-4">
                  With many SDSU and UCSD students living in Pacific Beach, we handle May and August move-outs from apartments along Garnet Avenue, Mission Boulevard, and the numbered courts. We understand tight schedules and limited parking during move-out season.
                </p>

                <h3 className="text-2xl font-bold mb-3">Restaurant & Bar Cleanouts</h3>
                <p className="text-lg mb-4">
                  Garnet Avenue's bustling nightlife district requires specialized commercial cleanouts. We service PB restaurants and bars with flexible scheduling to avoid disrupting business operations during peak hours.
                </p>

                <h3 className="text-2xl font-bold mb-3">Garage & Alley Cleanouts</h3>
                <p className="text-lg mb-4">
                  The narrow alleys between Mission Boulevard and Bayard Street present unique access challenges. Our team has specialized equipment and experience navigating PB's tight alleyways and limited parking areas.
                </p>

                <h2 className="text-3xl font-bold mt-8 mb-4">Junk Hauling Near Garnet Avenue & Mission Boulevard</h2>
                <p className="text-lg mb-6">
                  The bustling Garnet Avenue commercial corridor and Mission Boulevard beachfront present unique access challenges for <strong>junk hauling Pacific Beach</strong>. Our team coordinates with building managers, navigates permit parking zones, and schedules around peak tourist traffic hours to provide efficient service. We specialize in multi-story apartment cleanouts, commercial property debris removal, and vacation rental furniture disposal throughout PB's most active corridors.
                </p>

                <h2 className="text-3xl font-bold mt-8 mb-4">Appliance & Furniture Removal in Pacific Beach</h2>
                <p className="text-lg mb-4">
                  Beach living is tough on furniture and appliances. Salt air corrodes outdoor sets, sand damages upholstery, and the constant sun fades fabric. Our <strong>junk pickup PB</strong> service removes:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Furniture:</strong> sofas, mattresses, tables, beach-damaged patio sets</li>
                    <li><strong>Appliances:</strong> refrigerators, washers, dryers, dishwashers</li>
                    <li><strong>Beach gear:</strong> surfboards, paddleboards, beach cruisers</li>
                    <li><strong>Hot tubs:</strong> salt-air damaged jacuzzis and spas</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Construction debris:</strong> home remodel materials and fixtures</li>
                    <li><strong>Yard waste:</strong> palm fronds, plant trimmings, landscaping debris</li>
                    <li><strong>E-waste:</strong> TVs, computers, electronics</li>
                    <li><strong>Commercial items:</strong> restaurant equipment, retail fixtures</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold mt-8 mb-4">Transparent Pricing for Pacific Beach Junk Removal</h2>
                <p className="text-lg mb-4">
                  Our <strong>trash removal Pacific Beach</strong> pricing is based on trailer volume with no hidden fees:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Single Item Pickup:</strong> Starting at $100</li>
                  <li><strong>1/4 Trailer Load:</strong> $249</li>
                  <li><strong>3/8 Trailer Load:</strong> $319</li>
                  <li><strong>1/2 Trailer Load:</strong> $349</li>
                  <li><strong>5/8 Trailer Load:</strong> $366</li>
                  <li><strong>3/4 Trailer Load:</strong> $429</li>
                  <li><strong>7/8 Trailer Load:</strong> $462</li>
                  <li><strong>Full Trailer Load:</strong> $495</li>
                </ul>
                <p className="text-sm text-gray-600 mb-8">
                  <em>Call <a href="tel:6197500114" className="text-blue-600 hover:underline">(619) 750-0114</a> for a quote based on your specific items and PB location. All prices include labor, hauling, and environmentally responsible disposal.</em>
                </p>

                {/* Sticky CTA */}
                <div className="sticky top-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg shadow-lg mb-8 z-10">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold">Call Today for Fast Junk Removal in Pacific Beach</p>
                      <p className="text-sm opacity-90">Vacation rental experts • Licensed & insured • Transparent pricing</p>
                    </div>
                    <a
                      href="tel:6197500114"
                      className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                    >
                      📞 Call Now
                    </a>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mt-8 mb-4">Why PB Residents & Property Managers Choose Severin Cleaners</h2>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li><strong>Local traffic expertise</strong> - We know back routes via Ingraham and Grand during beach rush hours</li>
                  <li><strong>Event coordination</strong> - Scheduling around Tuesday Farmers Market, Over-the-Line, summer concerts</li>
                  <li><strong>Permit parking mastery</strong> - Expert navigation of PB's complex parking regulations and time limits</li>
                  <li><strong>Beach property access</strong> - Experience with Ocean Front Walk boardwalk, narrow alleys, elevator buildings</li>
                  <li><strong>Summer surge readiness</strong> - Extra crews during peak vacation rental and student move-out seasons</li>
                  <li><strong>Licensed and insured</strong> - Full coverage for residential, commercial, and vacation rental properties</li>
                  <li><strong>Coastal property expertise</strong> - Salt air damage assessment, sand-damaged furniture handling, beach access logistics</li>
                </ul>

                <h2 className="text-3xl font-bold mt-8 mb-4">Property Types We Service in Pacific Beach</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Ocean-front condos with elevator access</li>
                    <li>Garnet Avenue mixed-use buildings</li>
                    <li>Bay-front homes in Crown Point</li>
                    <li>Classic PB beach cottages</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Luxury condos near Crystal Pier</li>
                    <li>Multi-unit apartment complexes</li>
                    <li>Vacation rental properties</li>
                    <li>Commercial spaces on Garnet</li>
                  </ul>
                </div>

                <div className="text-center bg-blue-900 text-white p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold mb-4">Get PB Junk Removal Quote Today</h3>
                  <p className="text-lg mb-6">
                    Serving Crystal Pier to Crown Point with same-day beach community expertise
                  </p>
                  <a
                    href="tel:6197500114"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                  >
                    📞 Call (619) 750-0114 Now
                  </a>
                  <div className="bg-blue-800 rounded-lg p-4">
                    <p className="text-yellow-300 font-semibold mb-2">🏖️ Pacific Beach Special 🏖️</p>
                    <div className="text-sm">
                      <strong>15% Off Vacation Rental Cleanouts</strong> • <strong>Same-Day Service Available</strong><br/>
                      <strong>Beach Property Specialists</strong> • <strong>Licensed & Insured</strong>
                    </div>
                  </div>
                  <p className="text-sm mt-4">
                    Transparent pricing • Same-day junk hauling • PB vacation rental experts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Now using dropdown component */}
        <PacificBeachFAQSection />

        {/* Related Services */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related Beach Community Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Sofas, mattresses, and bulky beach-damaged furniture removal throughout PB</p>
              </a>
              <a href="/appliance-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal San Diego</h4>
                <p className="text-gray-600">Fridges, washers, dryers, and salt-air damaged appliance disposal</p>
              </a>
              <a href="/construction-debris-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
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