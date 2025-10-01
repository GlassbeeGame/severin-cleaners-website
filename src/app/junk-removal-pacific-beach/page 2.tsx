import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Junk Removal Pacific Beach | Same-Day Service (92109)',
  description: 'Pacific Beach junk removal experts. Vacation rental turnovers, beach house cleanouts, student moves. Garnet Ave to Ocean Front Walk. Same-day service.',
  keywords: 'junk removal Pacific Beach, vacation rental cleanouts, PB junk hauling, same-day junk removal 92109, apartment cleanouts Garnet Avenue, beach house cleanouts',
  openGraph: {
    title: 'Junk Removal Pacific Beach | Same-Day Service (92109)',
    description: 'Pacific Beach junk removal experts. Vacation rental turnovers, beach house cleanouts, student moves. Garnet Ave to Ocean Front Walk. Same-day service.',
    url: 'https://severincleaners.com/junk-removal-pacific-beach/',
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
    title: 'Junk Removal Pacific Beach | Same-Day Service (92109)',
    description: 'Pacific Beach junk removal experts. Vacation rental turnovers, beach house cleanouts, student moves. Garnet Ave to Ocean Front Walk. Same-day service.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-pacific-beach/',
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
  return (
    <div className={`${inter.variable} font-sans antialiased`}>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Junk Removal in Pacific Beach, CA (92109)
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                From Crystal Pier to Crown Point - Your Local PB Experts
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  CALL NOW: (619) 750-0114
                </a>
                <a
                  href="#contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  GET FREE QUOTE
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Pacific Beach Junk Removal Experts
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                  Our Pacific Beach junk removal team offers same-day service throughout 92109, from Tourmaline to Mission Bay. We're fully licensed and insured, providing upfront quotes based on photos you text or email. As locals, we understand PB's unique challenges from narrow Ocean Front Walk access to vacation rental turnovers.
                </p>

                <p className="text-lg mb-6">
                  Whether you need furniture removed from your Garnet Avenue apartment or beach house cleanouts near Crystal Pier, our professional crew handles every job with care and efficiency. We specialize in vacation rental cleanouts, student housing moves, and beach property challenges.
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

                <h2 className="text-3xl font-bold mt-8 mb-4">Pacific Beach Landmarks We Cover</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Crystal Pier and surrounding vacation rentals</li>
                    <li>Kate Sessions Memorial Park</li>
                    <li>PB Library and Recreation Center</li>
                    <li>Tourmaline Surf Park</li>
                    <li>Belmont Park border area</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Mission Bay Park properties</li>
                    <li>Fanuel Park neighborhoods</li>
                    <li>The Promenade shopping center</li>
                    <li>PB Shore Club luxury condos</li>
                    <li>Tuesday Farmers Market on Bayard</li>
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

                <h2 className="text-3xl font-bold mt-8 mb-4">Transparent, Photo-Based Pricing</h2>
                <p className="text-lg mb-4">
                  Get an instant quote by texting photos of your items. Our pricing is straightforward with no hidden fees:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Single item:</strong> from $95</li>
                  <li><strong>¼ truck:</strong> from $250</li>
                  <li><strong>½ truck:</strong> from $450</li>
                  <li><strong>Full truck:</strong> from $700</li>
                </ul>
                <p className="text-sm text-gray-600 mb-8">
                  <em>Final quote confirmed from photos or quick onsite assessment; includes labor, haul-away, disposal fees.</em>
                </p>

                <h2 className="text-3xl font-bold mt-8 mb-4">Why PB Residents Choose Us</h2>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li><strong>Local traffic expertise</strong> - We know back routes via Ingraham during beach rush</li>
                  <li><strong>Event coordination</strong> - We schedule around Tuesday Farmers Market and PB events</li>
                  <li><strong>Permit parking knowledge</strong> - Familiar with PB's complex parking regulations</li>
                  <li><strong>Beach property access</strong> - Experienced with Ocean Front Walk and pier area challenges</li>
                  <li><strong>Summer surge readiness</strong> - Extra crews during peak vacation rental season</li>
                  <li><strong>Licensed and insured</strong> - Full coverage for residential and commercial properties</li>
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

                <h2 className="text-3xl font-bold mt-8 mb-4">FAQs About Junk Removal in Pacific Beach</h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Do you service all of Pacific Beach?</h3>
                    <p>Yes! We service every street in PB from Tourmaline Surf Beach to Belmont Park, including Crown Point, Bay Park, and all of Garnet Avenue. Our team knows every alley and access point.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Can you handle vacation rental turnovers?</h3>
                    <p>Absolutely. We specialize in same-day vacation rental cleanouts throughout Pacific Beach, including Airbnb and VRBO properties. We understand the tight turnaround times required.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Do you work around PB's Tuesday Farmers Market?</h3>
                    <p>Yes, we're familiar with all PB events including the Tuesday Farmers Market on Bayard Street, Over-the-Line Tournament, and summer concerts. We schedule accordingly.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">How much does junk removal cost in Pacific Beach?</h3>
                    <p>Pricing starts from $95 for single items and varies based on volume. Most PB jobs range from $250-$700. We provide upfront quotes from photos with no hidden fees.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Do you offer same-day or evening pickups?</h3>
                    <p>Yes, we provide same-day service when scheduled before 2 PM and offer evening pickups for urgent situations. Perfect for vacation rental emergencies or move-out deadlines.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Can you remove heavy items from upstairs apartments?</h3>
                    <p>Absolutely. Our team safely removes heavy furniture and appliances from multi-story buildings, including the narrow staircases common in PB apartments. We use proper equipment and protection.</p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mt-8 mb-4">Ready for Same-Day Junk Removal in Pacific Beach?</h2>
                <p className="text-lg mb-4">
                  Whether you're managing a vacation rental on Ocean Front Walk, clearing out a beach cottage near Crystal Pier, or handling a student move-out on Garnet Avenue, we're your local Pacific Beach junk removal experts.
                </p>
                <p className="text-lg mb-6">
                  Text photos for an instant quote or call for immediate scheduling. Licensed, insured, and ready for same-day service throughout 92109.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:+16197500114"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                    >
                      Call Now: (619) 750-0114
                    </a>
                    <a
                      href="#contact"
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                    >
                      Get Free PB Quote
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Serving all of Pacific Beach • Same-day service available • Licensed & insured
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          })
        }}
      />
    </div>
  );
}