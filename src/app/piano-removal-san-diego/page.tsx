import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema, generateAggregateRatingSchema, generateHowToSchema } from "@/lib/schema";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import OptimizedGradientHero from "@/components/OptimizedGradientHero";

export const metadata: Metadata = {
  title: 'Piano Removal San Diego | Musical Instrument Specialists',
  description: 'Professional piano removal throughout San Diego — upright pianos, grand pianos, and organs. Careful handling guaranteed. Same-day available. Call (619) 750-0114.',
  keywords: [
    'piano removal san diego',
    'piano disposal san diego',
    'upright piano removal san diego',
    'grand piano removal san diego',
    'piano hauling san diego',
    'piano removal service san diego',
    'organ removal san diego',
  ],
  openGraph: {
    title: 'Piano Removal San Diego | Musical Instrument Specialists',
    description: 'Professional piano removal throughout San Diego — upright pianos, grand pianos, and organs. Careful handling guaranteed. Same-day available. Call (619) 750-0114.',
    url: 'https://www.severinhauling.com/piano-removal-san-diego',
    siteName: 'Severin Hauling',
    images: [{
      url: 'https://www.severinhauling.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Piano Removal San Diego - Severin Hauling'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piano Removal San Diego | Musical Instrument Specialists',
    description: 'Professional piano removal throughout San Diego — upright pianos, grand pianos, and organs. Careful handling guaranteed. Same-day available. Call (619) 750-0114.',
    images: ['https://www.severinhauling.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.severinhauling.com/piano-removal-san-diego',
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

const pianoFAQs = [
  {
    question: "How much does piano removal cost in San Diego?",
    answer: "Piano removal is priced separately from standard junk removal because of the weight and specialized handling required. Upright pianos in San Diego typically cost $149-$249 to remove. Grand pianos run $299-$599 depending on size and accessibility. If we remove other items at the same time, standard volume pricing applies to the remaining load."
  },
  {
    question: "Is piano removal more expensive than regular junk removal?",
    answer: "Yes. Pianos require additional crew members, specialized dollies, protective padding, and careful maneuvering that standard junk removal does not. An upright piano weighs 200-600 lbs. A baby grand starts at 500 lbs and goes up from there. The pricing reflects the extra labor and equipment needed to remove them safely without damaging your floors, walls, or doorframes."
  },
  {
    question: "Can you remove a piano from upstairs or tight spaces?",
    answer: "Yes. We handle challenging piano removals including second and third floor locations, narrow staircases, tight doorways, and elevator transport. Our team uses specialized equipment and proper techniques to work pianos through difficult spaces without damage to your property. We assess the removal path before starting and will tell you upfront if partial disassembly is needed."
  },
  {
    question: "What types of pianos do you remove?",
    answer: "We remove all piano types: upright pianos (spinet, console, studio, full upright), grand pianos (baby grand, parlor grand, concert grand), digital pianos, player pianos, organs (church organs, Hammond organs, pipe organs), and other large instruments like harpsichords."
  },
  {
    question: "Do you donate pianos or just throw them away?",
    answer: "We prioritize donation whenever possible. Pianos in playable condition are donated to local San Diego charities, music programs, and community centers. For pianos that cannot be donated or repaired, we disassemble and recycle the materials — cast iron harps, steel strings, and wood components are separated and sent to appropriate recycling facilities. Only what cannot be recycled goes to landfill."
  },
  {
    question: "How quickly can you remove a piano in San Diego?",
    answer: "We offer same-day and next-day piano removal throughout San Diego County. Call (619) 750-0114 for immediate scheduling. Most piano removals are completed within 1-2 hours depending on piano type and access."
  },
  {
    question: "Do you remove organs and digital pianos too?",
    answer: "Yes. We remove church organs, Hammond organs, pipe organs, and digital or electric pianos of all sizes. Organ removal often requires disassembly of the console and pedal board — our team handles that as part of the job."
  }
];

export default function PianoRemovalSanDiegoPage() {
  const serviceSchema = generateServiceSchema({
    name: "Piano Removal San Diego",
    description: "Professional piano removal for upright pianos, grand pianos, organs, and musical instruments throughout San Diego. Careful handling with specialized equipment.",
    url: "https://www.severinhauling.com/piano-removal-san-diego",
    serviceType: "Piano Removal Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.severinhauling.com" },
    { name: "Services", url: "https://www.severinhauling.com/services" },
    { name: "Piano Removal", url: "https://www.severinhauling.com/piano-removal-san-diego" },
  ]);

  const faqSchema = generateFAQSchema(pianoFAQs);

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://www.severinhauling.com/piano-removal-san-diego#business",
    "name": "Severin Hauling - Piano Removal San Diego",
    "image": "https://www.severinhauling.com/og-image.jpg",
    "telephone": "+1-619-750-0114",
    "priceRange": "$149-$599",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8900 Grossmont Blvd Ste 1",
      "addressLocality": "La Mesa",
      "addressRegion": "CA",
      "postalCode": "91941",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.7736,
      "longitude": -117.0228
    },
    "url": "https://www.severinhauling.com/piano-removal-san-diego",
    "areaServed": {
      "@type": "City",
      "name": "San Diego",
      "@id": "https://en.wikipedia.org/wiki/San_Diego"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Venmo", "Zelle", "Cash App"],
    "currenciesAccepted": "USD",
    "aggregateRating": generateAggregateRatingSchema(),
    "knowsAbout": [
      "Professional Piano Removal and Disposal San Diego County",
      "Upright Piano and Grand Piano Specialist Removal",
      "Musical Instrument Hauling and Transport Services",
      "Staircase and Tight Space Piano Maneuvering",
      "Estate Piano Evaluation and Removal Services",
      "Church Organ and Hammond Organ Removal",
      "Piano Donation Coordination with Local Charities",
      "Property-Safe Piano Removal with Floor and Wall Protection"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Piano Removal Services San Diego",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Upright Piano Removal San Diego",
            "description": "Professional removal of spinet, console, studio, and full upright pianos with specialized equipment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Grand Piano Removal San Diego",
            "description": "Expert removal of baby grand, parlor grand, and concert grand pianos with careful handling"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Player Piano and Organ Removal",
            "description": "Specialized removal of antique player pianos, church organs, and Hammond organs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Estate and Music School Piano Cleanouts",
            "description": "Complete musical instrument removal for estates, music schools, and venues"
          }
        }
      ]
    }
  };

  const neighborhoodSchema = {
    "@type": "ItemList",
    "name": "San Diego County Piano Removal Service Coverage",
    "description": "Piano removal services throughout San Diego County neighborhoods",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Place",
          "name": "La Jolla",
          "address": { "@type": "PostalAddress", "addressLocality": "San Diego", "addressRegion": "CA", "postalCode": "92037" }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Place",
          "name": "Rancho Santa Fe",
          "address": { "@type": "PostalAddress", "addressLocality": "Rancho Santa Fe", "addressRegion": "CA", "postalCode": "92067" }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Place",
          "name": "Del Mar",
          "address": { "@type": "PostalAddress", "addressLocality": "Del Mar", "addressRegion": "CA", "postalCode": "92014" }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Place",
          "name": "Point Loma",
          "address": { "@type": "PostalAddress", "addressLocality": "San Diego", "addressRegion": "CA", "postalCode": "92106" }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Place",
          "name": "Carmel Valley",
          "address": { "@type": "PostalAddress", "addressLocality": "San Diego", "addressRegion": "CA", "postalCode": "92130" }
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Place",
          "name": "Poway",
          "address": { "@type": "PostalAddress", "addressLocality": "Poway", "addressRegion": "CA", "postalCode": "92064" }
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "Place",
          "name": "Coronado",
          "address": { "@type": "PostalAddress", "addressLocality": "Coronado", "addressRegion": "CA", "postalCode": "92118" }
        }
      },
      {
        "@type": "ListItem",
        "position": 8,
        "item": {
          "@type": "Place",
          "name": "Encinitas",
          "address": { "@type": "PostalAddress", "addressLocality": "Encinitas", "addressRegion": "CA", "postalCode": "92024" }
        }
      },
      {
        "@type": "ListItem",
        "position": 9,
        "item": {
          "@type": "Place",
          "name": "Solana Beach",
          "address": { "@type": "PostalAddress", "addressLocality": "Solana Beach", "addressRegion": "CA", "postalCode": "92075" }
        }
      },
      {
        "@type": "ListItem",
        "position": 10,
        "item": {
          "@type": "Place",
          "name": "Carlsbad",
          "address": { "@type": "PostalAddress", "addressLocality": "Carlsbad", "addressRegion": "CA", "postalCode": "92008" }
        }
      }
    ]
  };

  const howToSchema = generateHowToSchema({
    cityName: "San Diego (Piano Removal)",
    pageUrl: "https://www.severinhauling.com/piano-removal-san-diego"
  });

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema, neighborhoodSchema, howToSchema]
  };

  const relatedServices = [
    { name: "Furniture Removal", slug: "furniture-disposal-san-diego" },
    { name: "Appliance Removal", slug: "appliance-removal-san-diego" },
    { name: "Estate Cleanout", slug: "estate-cleanout-san-diego" },
    { name: "Same Day Junk Removal", slug: "same-day-junk-removal-san-diego" },
  ];

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <Header />
      <main>
        <OptimizedGradientHero
          title="Piano Removal San Diego"
          subtitle="Upright & Grand Piano Specialists • Careful Handling • Same-Day Service"
          description="Estate & Moving Cleanouts • Licensed & Insured • Free Estimates"
        />

        {/* Main Content with Sidebar */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">

                {/* Left Column - Main Content */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-md p-8">

                    <h2 className="text-3xl font-bold text-gray-900 mb-6">San Diego Piano Removal Specialists</h2>

                    <p className="text-lg text-gray-700 mb-4">
                      Piano removal is not standard junk removal. Pianos weigh 200-1,200 lbs, sit on delicate legs, and live in rooms with hardwood floors, narrow doorways, and stairs that were not built with them in mind. Severin Hauling provides piano removal throughout San Diego County — from <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a> and <a href="/junk-removal-rancho-santa-fe" className="text-blue-600 hover:underline">Rancho Santa Fe</a> to <a href="/junk-removal-point-loma" className="text-blue-600 hover:underline">Point Loma</a> and <a href="/junk-removal-poway" className="text-blue-600 hover:underline">Poway</a> — whether you are relocating, downsizing, or handling an inherited instrument that needs to go. We also specialize in <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">furniture removal</a> and <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanouts</a>.
                    </p>

                    <p className="text-lg text-gray-700 mb-8">
                      Piano disposal in San Diego is priced higher than general junk removal because of the specialized crew, equipment, and care required. Upright pianos typically start at $149. Grand pianos start at $299. We give you a firm price before we touch anything.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Piano Types We Remove</h3>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-lg font-bold mb-3 text-blue-600">Instrument Types</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li><strong>Upright Pianos:</strong> Spinet, console, studio, and full upright models</li>
                          <li><strong>Grand Pianos:</strong> Baby grands, parlor grands, and concert grands</li>
                          <li><strong>Digital Pianos:</strong> Electric and electronic piano removal</li>
                          <li><strong>Player Pianos:</strong> Antique and modern player piano systems</li>
                          <li><strong>Organs:</strong> Church organs, Hammond organs, and pipe organs</li>
                          <li><strong>Other Instruments:</strong> Harpsichords, spinets, and large instruments</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-3 text-blue-600">What We Handle</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Professional piano preparation and disconnection</li>
                          <li>Staircase and tight space maneuvering</li>
                          <li>Floor, wall, and doorframe protection</li>
                          <li>Estate piano evaluation and removal</li>
                          <li>Music school and venue cleanouts</li>
                          <li>Piano donation coordination when possible</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Piano Removal Requires a Specialist</h3>

                    <p className="text-lg text-gray-700 mb-4">
                      Pianos are heavy, fragile, and awkward. An upright piano can weigh 600 lbs and be taller than the person moving it. A baby grand requires the lid, legs, and pedal lyre removed before it can fit through most doorways. Done wrong, you are looking at a ruined floor, a damaged doorframe, or a crew injury. Our team brings piano dollies, furniture pads, and enough people for the specific weight class of your instrument.
                    </p>

                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                      <h4 className="text-lg font-bold mb-3 text-gray-900">Access Challenges We Handle</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li><strong>Narrow Staircases:</strong> Complex piano maneuvering through tight spaces</li>
                          <li><strong>Elevator Transport:</strong> Proper piano positioning for elevator removal</li>
                          <li><strong>Apartment Complexes:</strong> Coordination with property management</li>
                          <li><strong>Historic Homes:</strong> Protecting original woodwork and architecture</li>
                        </ul>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li><strong>Second/Third Floor:</strong> Safe multi-level piano removal</li>
                          <li><strong>Tight Doorways:</strong> Partial disassembly when required</li>
                          <li><strong>Delicate Surroundings:</strong> Protecting artwork, furniture, and finishes</li>
                          <li><strong>Heavy Weight:</strong> Right crew size and equipment for each piano type</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Piano Removal Situations</h3>

                    <div className="space-y-6 mb-8">
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-blue-900 mb-3">Estate Cleanouts &amp; Inherited Pianos</h4>
                        <p className="text-gray-700 mb-3">
                          You inherited your grandmother&apos;s upright piano after the estate sale in Rancho Santa Fe. It has been sitting in the living room for months and you need the space cleared before listing the property. Or you are the executor handling an estate cleanout in La Jolla and the family does not want the old player piano. Estate pianos often hold sentimental value but are not practical to keep — and moving them yourself risks injury and property damage.
                        </p>
                        <p className="text-gray-700">
                          <strong>Common scenarios:</strong> Inherited pianos from family estates • Estate sale leftovers • Downsizing elderly parents • Probate timelines requiring fast removal • Family disagreements over who takes the piano
                        </p>
                      </div>

                      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-red-900 mb-3">Moving &amp; Relocation Conflicts</h4>
                        <p className="text-gray-700 mb-3">
                          Your movers quoted $1,200 to move your grand piano from Point Loma to your new condo — and it will not even fit through the doorway. Or you are relocating from Del Mar to Arizona and the moving company will not touch your 800-pound upright. Many people find it cheaper to remove the old piano and buy a new digital one at their destination than pay professional piano movers $1,000+ for interstate transport.
                        </p>
                        <p className="text-gray-700">
                          <strong>Common scenarios:</strong> Cross-country moves where piano does not fit the budget • Downsizing to apartments where pianos will not fit • Military PCS moves with strict weight limits • Last-minute moving day conflicts • New home layout cannot accommodate a large piano
                        </p>
                      </div>

                      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-green-900 mb-3">Church, School &amp; Venue Upgrades</h4>
                        <p className="text-gray-700 mb-3">
                          The church in Carmel Valley is upgrading to a new digital worship piano and needs the old Hammond organ removed by Sunday. Or the music school in Poway replaced their teaching pianos and has six uprights that need to go. Churches, schools, and performance venues regularly upgrade instruments — but they are left with heavy, bulky pianos that are too expensive to move and too old to sell.
                        </p>
                        <p className="text-gray-700">
                          <strong>Common scenarios:</strong> Church organ and piano replacements • Music school instrument upgrades • Theater and venue equipment swaps • Worship center renovations • School district surplus piano disposal
                        </p>
                      </div>

                      <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-orange-900 mb-3">Broken, Damaged &amp; Unplayable Pianos</h4>
                        <p className="text-gray-700 mb-3">
                          The piano in your Coronado home has not been tuned in 15 years and half the keys do not work. Or water damage from a roof leak destroyed the soundboard on your Encinitas upright and repair quotes came back at $3,000+. Broken pianos are expensive to repair, too heavy to move yourself, and worthless to sell. They take up valuable space. Professional removal is the practical solution.
                        </p>
                        <p className="text-gray-700">
                          <strong>Common scenarios:</strong> Water-damaged pianos from roof leaks • Broken soundboards or cracked frames • Severely out-of-tune pianos not worth repairing • Coastal humidity damage to mechanisms • Pet-damaged pianos with structural issues
                        </p>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Severin Hauling for Piano Removal</h3>

                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-5 rounded-lg">
                        <h4 className="font-bold mb-2 text-gray-900">We Know the Weight Classes</h4>
                        <p className="text-gray-700">A spinet piano runs 200-300 lbs. A studio upright hits 400-600 lbs. A baby grand starts at 500 lbs and goes up. We bring the right crew size and dolly rating for each instrument — not a guess, not the same two-person crew for everything.</p>
                      </div>
                      <div className="bg-gray-50 p-5 rounded-lg">
                        <h4 className="font-bold mb-2 text-gray-900">Property Protection Before We Start</h4>
                        <p className="text-gray-700">We lay down moving blankets on hardwood floors, pad doorframes, and assess the removal path before we lift anything. If a doorway requires partial disassembly of the piano, we tell you upfront rather than discovering it mid-move.</p>
                      </div>
                      <div className="bg-gray-50 p-5 rounded-lg">
                        <h4 className="font-bold mb-2 text-gray-900">Donation First</h4>
                        <p className="text-gray-700">Playable pianos go to local San Diego music programs and charities rather than landfill. If your piano can be donated, we coordinate that as part of the job. If it cannot, we recycle the materials responsibly.</p>
                      </div>
                      <div className="bg-gray-50 p-5 rounded-lg">
                        <h4 className="font-bold mb-2 text-gray-900">Firm Price Before We Touch It</h4>
                        <p className="text-gray-700">We give you a firm quote based on piano type and access before starting. No surprises at the end. Piano removal pricing starts at $149 for uprights and $299 for grands, with the final price confirmed on-site after we see the access conditions.</p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Right Column - Sidebar */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Piano Removal"
                    nearbyLocations={relatedServices}
                    nearbyHeading="Services We Provide"
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Piano Removal"
          contextParagraph="Piano removal is priced differently from standard junk removal. Upright pianos start at $149 and grand pianos start at $299 due to specialized equipment and crew requirements. If you are removing additional items at the same time, standard volume pricing applies to the rest of the load. All pricing is confirmed on-site before we begin."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Piano Removal" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Piano Removal San Diego"
          description="Get answers to common questions about our <strong>piano removal San Diego</strong> services, pricing, and same-day availability."
          faqs={pianoFAQs}
          ctaTitle="Ready to Remove Your Piano?"
          ctaDescription="Our trained team handles pianos of all types throughout San Diego County. Get a firm quote before we start — call (619) 750-0114."
          includeSchema={false}
        />

      </main>
      <Footer />
    </>
  );
}
