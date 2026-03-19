import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema, generateAggregateRatingSchema, generateHowToSchema } from "@/lib/schema";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import OptimizedGradientHero from "@/components/OptimizedGradientHero";

export const metadata: Metadata = {
  title: 'Piano Removal San Diego | Musical Instrument Specialists',
  description: 'Professional piano removal throughout San Diego - upright pianos, grand pianos, and musical instruments. Careful handling guaranteed. Call (619) 750-0114.',
  keywords: [
    'piano removal san diego',
    'piano disposal san diego',
    'musical instrument removal',
    'upright piano removal',
    'grand piano removal',
    'piano movers san diego',
    'piano hauling san diego',
    'piano removal service'
  ],
  openGraph: {
    title: 'Piano Removal San Diego | Musical Instrument Specialists',
    description: 'Professional piano removal throughout San Diego - upright pianos, grand pianos, and musical instruments. Careful handling guaranteed. Call (619) 750-0114.',
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
    description: 'Professional piano removal throughout San Diego - upright pianos, grand pianos, and musical instruments. Careful handling guaranteed. Call (619) 750-0114.',
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
  },
};

export default function PianoremovalsandiegoPage() {
  const serviceSchema = generateServiceSchema({
    name: "Piano Removal San Diego",
    description: "Professional piano removal for upright pianos, grand pianos, and musical instruments. Careful handling with specialized equipment.",
    url: "https://www.severinhauling.com/piano-removal-san-diego",
    serviceType: "Piano Removal Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.severinhauling.com" },
    { name: "Services", url: "https://www.severinhauling.com/services" },
    { name: "Piano Removal", url: "https://www.severinhauling.com/piano-removal-san-diego" },
  ]);

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
      "Stair Navigation and Tight Space Piano Maneuvering",
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

  const faqSchema = {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does piano removal cost in San Diego?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Piano removal in San Diego typically costs $149-$249 for upright pianos and $299-$599 for grand pianos, depending on size, location, and accessibility. This includes all labor, specialized equipment, stair navigation, property protection, and responsible disposal or donation coordination."
        }
      },
      {
        "@type": "Question",
        "name": "Can you remove a piano from upstairs or tight spaces?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in challenging piano removals including second and third floor locations, narrow staircases, tight doorways, and elevator transport. Our trained team uses specialized equipment and proper techniques to safely navigate pianos through difficult spaces without damage to your property."
        }
      },
      {
        "@type": "Question",
        "name": "What types of pianos do you remove?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We remove all piano types including upright pianos (spinet, console, studio, full upright), grand pianos (baby grand, parlor grand, concert grand), digital pianos, player pianos, organs (church organs, Hammond organs, pipe organs), and other large musical instruments like harpsichords."
        }
      },
      {
        "@type": "Question",
        "name": "Do you donate pianos or just throw them away?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We prioritize piano donation whenever possible. Pianos in good working condition are donated to local San Diego charities, music programs, and community centers. Only pianos that cannot be repaired or donated are responsibly disposed of with material recycling."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you remove a piano in San Diego?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer same-day and next-day piano removal service throughout San Diego County. Call (619) 750-0114 for immediate scheduling. Most piano removals are completed within 1-2 hours depending on piano size and location accessibility."
        }
      }
    ]
  };

  const neighborhoodSchema = {
    "@type": "ItemList",
    "name": "San Diego County Piano Removal Service Coverage",
    "description": "Premium piano removal services throughout San Diego's finest neighborhoods",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Place",
          "name": "La Jolla",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Diego",
            "addressRegion": "CA",
            "postalCode": "92037"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Place",
          "name": "Rancho Santa Fe",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Rancho Santa Fe",
            "addressRegion": "CA",
            "postalCode": "92067"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Place",
          "name": "Del Mar",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Del Mar",
            "addressRegion": "CA",
            "postalCode": "92014"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Place",
          "name": "Point Loma",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Diego",
            "addressRegion": "CA",
            "postalCode": "92106"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Place",
          "name": "Carmel Valley",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Diego",
            "addressRegion": "CA",
            "postalCode": "92130"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Place",
          "name": "Poway",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Poway",
            "addressRegion": "CA",
            "postalCode": "92064"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "Place",
          "name": "Coronado",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Coronado",
            "addressRegion": "CA",
            "postalCode": "92118"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 8,
        "item": {
          "@type": "Place",
          "name": "Encinitas",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Encinitas",
            "addressRegion": "CA",
            "postalCode": "92024"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 9,
        "item": {
          "@type": "Place",
          "name": "Solana Beach",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Solana Beach",
            "addressRegion": "CA",
            "postalCode": "92075"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 10,
        "item": {
          "@type": "Place",
          "name": "Carlsbad",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Carlsbad",
            "addressRegion": "CA",
            "postalCode": "92008"
          }
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
          subtitle="⭐⭐⭐⭐⭐ 5.0 Rating • Piano Experts • Careful Handling Guaranteed"
          description="✓ Same-Day Service ✓ Licensed & Insured ✓ Local Specialists"
        />

      {/* Main Content - NEW 2-COLUMN LAYOUT */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">

              {/* LEFT COLUMN - Main Content (lg:col-span-2) */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <div className="prose prose-lg max-w-none">

                    <h2 className="text-3xl font-bold text-gray-900 mb-6">San Diego Piano Removal Specialists</h2>

              <p className="text-lg text-gray-700 mb-6">
                Piano removal requires specialized knowledge and equipment to handle these valuable, heavy instruments safely. Severin Hauling provides expert piano removal San Diego services throughout <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a>, <a href="/junk-removal-rancho-santa-fe" className="text-blue-600 hover:underline">Rancho Santa Fe</a>, <a href="/junk-removal-del-mar" className="text-blue-600 hover:underline">Del Mar</a>, <a href="/junk-removal-point-loma" className="text-blue-600 hover:underline">Point Loma</a>, <a href="/junk-removal-carmel-valley" className="text-blue-600 hover:underline">Carmel Valley</a>, and <a href="/junk-removal-poway" className="text-blue-600 hover:underline">Poway</a>, whether you&apos;re relocating, downsizing, or dealing with an inherited instrument that needs professional disposal. We also specialize in <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">furniture removal</a>, <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanouts</a>, and are <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">heavy item specialists</a>.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialized Piano Removal Services</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our piano disposal San Diego service handles all types of pianos and musical instruments with the care and expertise they deserve. From apartment upright pianos to concert grand pianos, we have the specialized equipment and trained professionals to ensure safe removal without damage to your property.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Piano Types We Remove</h4>
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
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Specialized Services</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Professional piano disconnection and preparation</li>
                    <li>Stairs, elevators, and tight space navigation</li>
                    <li>Protection for walls, floors, and doorways</li>
                    <li>Estate piano evaluation and removal</li>
                    <li>Music school and venue cleanouts</li>
                    <li>Piano donation coordination when possible</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Piano Removal Requires Expertise</h2>
              <p className="text-lg text-gray-700 mb-4">
                Musical instrument removal is not like typical junk removal. Pianos are incredibly heavy (200-1,200 pounds), delicately balanced, and often located in challenging spaces. Our trained team understands piano construction, weight distribution, and proper lifting techniques to ensure safe removal.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h4 className="text-xl font-bold mb-3 text-gray-900">Piano Removal Challenges We Handle</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><strong>Narrow Staircases:</strong> Complex piano maneuvering through tight spaces</li>
                    <li><strong>Elevator Transport:</strong> Proper piano positioning for elevator removal</li>
                    <li><strong>Apartment Complexes:</strong> Coordination with property management</li>
                    <li><strong>Historic Homes:</strong> Protecting original woodwork and architecture</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><strong>Second/Third Floor:</strong> Safe multi-level piano removal</li>
                    <li><strong>Tight Doorways:</strong> Sometimes requiring partial piano disassembly</li>
                    <li><strong>Delicate Surroundings:</strong> Protecting artwork, furniture, and finishes</li>
                    <li><strong>Heavy Weight:</strong> Proper team size and equipment for each piano type</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">San Diego Service Areas</h3>
                <ul className="text-blue-800">
                  <li>Upright piano removal and disposal</li>
                  <li>Grand piano relocation and removal</li>
                  <li>Musical instrument cleanouts</li>
                  <li>Estate piano services</li>
                  <li>Music studio and school cleanouts</li>
                  <li>Apartment and condo piano removal</li>
                </ul>
                <div className="mt-4 text-center">
                  <p className="text-blue-700 font-semibold">📞 Call (619) 750-0114 for immediate service</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Severin Hauling</h2>
              <p className="mb-4">
                As a locally-owned business, we understand the importance of treating your property and belongings
                with care. Our San Diego service combines local knowledge with professional standards
                to deliver the best junk removal experience possible.
              </p>

              <h2 className="text-3xl font-bold mt-10 mb-6">Common Piano Removal Situations</h2>

              <div className="space-y-6 mb-12">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">🏡 Estate Cleanouts & Inherited Pianos</h3>
                  <p className="text-gray-700 mb-3">
                    You inherited your grandmother's upright piano after the estate sale in Rancho Santa Fe. It's been sitting in the living room for months and you need the space cleared before listing the property. Or you're the executor handling an estate cleanout in La Jolla and the family doesn't want the old player piano. Estate pianos often hold sentimental value but aren't practical to keep—and moving them yourself risks injury and property damage.
                  </p>
                  <p className="text-gray-700">
                    <strong>Common scenarios:</strong> Inherited pianos from family estates • Estate sale leftovers requiring removal • Downsizing elderly parents with pianos they can't take • Trust property cleanouts with deadline pressures • Probate timelines requiring fast furniture removal • Family disagreements over who takes the piano
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-red-900 mb-3">🎹 Moving & Relocation Conflicts</h3>
                  <p className="text-gray-700 mb-3">
                    Your movers quoted $1,200 to move your grand piano from Point Loma to your new condo—and it won't even fit through the doorway. Or you're relocating from Del Mar to Arizona and the moving company won't touch your 800-pound upright. Piano moving is expensive and risky. Many people realize mid-move that it's cheaper to remove the old piano and buy a new digital one at their destination than pay professional piano movers $1,000+ for interstate transport.
                  </p>
                  <p className="text-gray-700">
                    <strong>Common scenarios:</strong> Cross-country moves where piano won't fit in budget • Downsizing to apartments where pianos won't fit • Military PCS moves with strict weight limits • Last-minute moving day piano conflicts • Piano too damaged to justify moving costs • New home layout won't accommodate large piano
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-green-900 mb-3">🏫 Church, School & Venue Upgrades</h3>
                  <p className="text-gray-700 mb-3">
                    The church in Carmel Valley is upgrading to a new digital worship piano and needs the old Hammond organ removed by Sunday. Or the music school in Poway replaced their teaching pianos and has six uprights that need to go. Churches, schools, and performance venues regularly upgrade instruments—but they're left with heavy, bulky pianos that are too expensive to move and too old to sell. These institutions need reliable removal that won't damage their facilities.
                  </p>
                  <p className="text-gray-700">
                    <strong>Common scenarios:</strong> Church organ and piano replacements • Music school instrument upgrades • Theater and venue equipment swaps • Worship center renovations requiring space clearing • School district surplus piano disposal • Community center furniture turnovers
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-orange-900 mb-3">🔧 Broken, Damaged & Unplayable Pianos</h3>
                  <p className="text-gray-700 mb-3">
                    The piano in your Coronado home hasn't been tuned in 15 years and half the keys don't work. Or water damage from a roof leak destroyed the soundboard on your Encinitas upright and repair quotes came back at $3,000+. Broken pianos are expensive paperweights—too costly to repair, too heavy to move yourself, and worthless to sell. They take up valuable space and remind you daily of the money you spent. Professional removal is the only practical solution.
                  </p>
                  <p className="text-gray-700">
                    <strong>Common scenarios:</strong> Water-damaged pianos from roof leaks • Pianos with broken soundboards or cracked frames • Severely out-of-tune pianos not worth repairing • Coastal humidity damage to piano mechanisms • Pet-damaged pianos with scratched finishes • Pianos with missing or broken keys beyond economical repair
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>

              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">How much does piano removal cost in San Diego?</h3>
                  <p className="text-gray-700">
                    Piano removal in San Diego typically costs $149-$249 for upright pianos and $299-$599 for grand pianos, depending on size, location, and accessibility. This includes all labor, specialized equipment, stair navigation, property protection, and responsible disposal or donation coordination.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Can you remove a piano from upstairs or tight spaces?</h3>
                  <p className="text-gray-700">
                    Yes, we specialize in challenging piano removals including second and third floor locations, narrow staircases, tight doorways, and elevator transport. Our trained team uses specialized equipment and proper techniques to safely navigate pianos through difficult spaces without damage to your property.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">What types of pianos do you remove?</h3>
                  <p className="text-gray-700">
                    We remove all piano types including upright pianos (spinet, console, studio, full upright), grand pianos (baby grand, parlor grand, concert grand), digital pianos, player pianos, organs (church organs, Hammond organs, pipe organs), and other large musical instruments like harpsichords.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Do you donate pianos or just throw them away?</h3>
                  <p className="text-gray-700">
                    We prioritize piano donation whenever possible. Pianos in good working condition are donated to local San Diego charities, music programs, and community centers. Only pianos that cannot be repaired or donated are responsibly disposed of with material recycling.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">How quickly can you remove a piano in San Diego?</h3>
                  <p className="text-gray-700">
                    We offer same-day and next-day piano removal service throughout San Diego County. Call (619) 750-0114 for immediate scheduling. Most piano removals are completed within 1-2 hours depending on piano size and location accessibility.
                  </p>
                </div>
              </div>

                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN - Sidebar (lg:col-span-1) */}
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
        contextParagraph="Expert piano removal with specialized equipment and trained professionals. Pricing includes careful handling, stair navigation, property protection, removal, and proper disposal or donation coordination."
      />

      {/* Trust Signals Section */}
      <TrustSignalsSection locationName="Piano Removal" />
      </main>
      <Footer />
    </>
  );
}