import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema, generateHowToSchema, generateAggregateRatingSchema } from "@/lib/schema";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import OptimizedGradientHero from "@/components/OptimizedGradientHero";

export const metadata: Metadata = {
  title: "Furniture Disposal San Diego | Eco-Friendly Removal & Recycling",
  description: "Professional furniture disposal San Diego starting at $69. Same-day pickup, eco-friendly recycling & donation. Desks, dressers, tables & more. Free quote: (619) 750-0114.",
  keywords: [
    "furniture disposal San Diego",
    "furniture removal San Diego",
    "furniture recycling San Diego",
    "furniture hauling San Diego",
    "old furniture disposal",
    "furniture pickup San Diego",
    "same day furniture disposal",
    "eco friendly furniture removal",
    "desk disposal San Diego",
    "dresser removal San Diego"
  ],
  openGraph: {
    title: "Furniture Disposal San Diego | Eco-Friendly Removal & Recycling",
    description: "Professional furniture disposal San Diego starting at $69. Same-day service, eco-friendly recycling & donation. Call (619) 750-0114.",
    url: "https://www.severinhauling.com/furniture-disposal-san-diego",
    siteName: "Severin Hauling",
    type: "website",
    locale: "en_US",
    images: [{
      url: "https://www.severinhauling.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Furniture Disposal San Diego - Severin Hauling"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Furniture Disposal San Diego | Eco-Friendly Removal & Recycling",
    description: "Professional furniture disposal San Diego starting at $69. Same-day service available. Call (619) 750-0114!",
    images: ["https://www.severinhauling.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.severinhauling.com/furniture-disposal-san-diego",
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

const relatedServices = [
  { name: "Couch Removal", slug: "couch-removal-san-diego" },
  { name: "Mattress Disposal", slug: "san-diego-mattress-disposal" },
  { name: "Piano Removal", slug: "piano-removal-san-diego" },
  { name: "Same-Day Junk Removal", slug: "same-day-junk-removal-san-diego" },
];

const furnitureFAQs = [
  {
    question: "How much does furniture disposal cost in San Diego?",
    answer: "Furniture disposal San Diego pricing starts at $69 for small items like chairs and accent pieces. Standard items (dressers, desks, dining chairs) start at $100. Large loads range up to $495 for a full trailer. Office desks and dining sets typically run $100–$249 depending on size and number of pieces. Bedroom furniture runs $249-$429. All prices include labor, transportation, eco-friendly disposal, and recycling with no hidden fees. Call (619) 750-0114 for a free quote."
  },
  {
    question: "Is there free furniture disposal in San Diego?",
    answer: "Yes, the City of San Diego offers free bulky item pickup, but there are significant limitations. You must move furniture to the curb yourself, wait 1-2 weeks for scheduled pickup, and items must meet size/weight restrictions. Many San Diego residents find that renting a truck ($75-150/day) plus their time and physical effort makes 'free' disposal actually cost more than our professional service starting at $69. We come to you, handle all heavy lifting, provide same-day service when you call before 2 PM, and ensure eco-friendly disposal. Most customers find our furniture disposal San Diego service more cost-effective and convenient than DIY free options. Call (619) 750-0114 for a free quote."
  },
  {
    question: "Do you remove heavy furniture like pianos or safes?",
    answer: "Yes! Our furniture disposal San Diego team specializes in heavy and oversized items including pianos, pool tables, safes, and commercial furniture. We bring specialized equipment like piano dollies, furniture straps, and protective blankets. Our professional crew is trained in safe removal techniques for heavy items from any floor or location in San Diego."
  },
  {
    question: "Can you remove furniture from upstairs or apartments?",
    answer: "Absolutely. Our furniture disposal San Diego service handles multi-story homes, apartments, condos, and buildings with elevators or stairs. We navigate tight hallways, narrow staircases, and challenging doorways while protecting your walls and floors. There's no need to move furniture yourself – we handle all the heavy lifting regardless of location."
  },
  {
    question: "Do I need to move furniture to the curb?",
    answer: "No! With our full-service furniture disposal San Diego, you don't lift a finger. We come inside your home, office, or building to remove furniture from wherever it's located. Our team handles all the heavy lifting, maneuvering, and loading. Just show us what goes, and we'll take care of everything from there."
  },
  {
    question: "Do you recycle furniture in San Diego?",
    answer: "Yes! Our furniture recycling San Diego program prioritizes eco-friendly disposal. Usable furniture gets donated to local charities like Habitat for Humanity and San Diego Rescue Mission. Broken items are disassembled for recycling—metal frames go to scrap recyclers, wood gets repurposed, and fabric materials are sorted properly. We work with San Diego County recycling partners to minimize landfill waste. Only items that can't be donated or recycled are disposed of as a last resort, always following local regulations."
  },
  {
    question: "Do you offer same-day furniture disposal?",
    answer: "Yes, we provide same-day furniture disposal San Diego when you call before 2 PM. Our flexible scheduling includes evenings and weekends at no extra charge. Whether you need furniture cleared out before a delivery arriving today or last-minute space clearing before guests show up, we can typically get there within hours. Call (619) 750-0114 to check today's availability."
  },
  {
    question: "Can you remove office furniture from commercial buildings?",
    answer: "Absolutely. Our office furniture disposal San Diego service handles commercial properties including office buildings, retail spaces, and warehouses. We remove desks, cubicles, conference tables, filing cabinets, and all office equipment. Our team works efficiently to minimize disruption to your business operations and can schedule after-hours or weekend service throughout San Diego."
  },
  {
    question: "Do you disassemble furniture before removal?",
    answer: "Yes, when necessary. Our furniture disposal San Diego team disassembles bed frames, large tables, sectional sofas, and other furniture that won't fit through doorways intact. We bring all necessary tools and handle disassembly carefully to avoid property damage. This is included in our service at no extra charge for standard San Diego furniture disposal jobs."
  },
  {
    question: "What's the cheapest way to dispose of furniture in San Diego?",
    answer: "The cheapest option depends on your situation. The City of San Diego's free bulky item pickup is technically free but requires you to move furniture to the curb yourself and wait 1-2 weeks. Donation to charities like Habitat for Humanity is free if your furniture is in good shape, but pickup takes 3-7 days to schedule. Taking it to Miramar Landfill yourself costs $40-60 in dump fees plus truck rental ($75-150). Our professional furniture removal San Diego service starts at $69 with same-day availability—we handle all the work so you don't risk injury or spend your entire day. When you factor in your time, physical effort, and convenience, professional furniture disposal San Diego service provides the best overall value for most people."
  }
];

export default function FurnitureDisposalPage() {
  const serviceSchema = generateServiceSchema({
    name: "Furniture Disposal San Diego",
    description: "Professional furniture disposal and recycling in San Diego. Eco-friendly removal of bedroom sets, office furniture, dining tables, and all household and commercial pieces. Same-day service available.",
    url: "https://www.severinhauling.com/furniture-disposal-san-diego",
    serviceType: "Furniture Disposal and Recycling Service",
    areaServed: "San Diego County, CA",
  });

  // Enhanced LocalBusiness schema for furniture disposal
  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://www.severinhauling.com/furniture-disposal-san-diego#business",
    "name": "Severin Hauling - Furniture Disposal San Diego",
    "image": "https://www.severinhauling.com/og-image.jpg",
    "telephone": "+1-619-750-0114",
    "priceRange": "$69-$495",
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
    "url": "https://www.severinhauling.com/furniture-disposal-san-diego",
    "areaServed": {
      "@type": "City",
      "name": "San Diego",
      "containedInPlace": {
        "@type": "State",
        "name": "California"
      }
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Venmo", "Zelle", "Cash App"],
    "currenciesAccepted": "USD",
    "aggregateRating": generateAggregateRatingSchema(),
    "knowsAbout": [
      "San Diego Furniture Disposal and Removal Services",
      "Heavy Furniture Extraction (Dressers, Armoires, Filing Cabinets)",
      "Office and Commercial Furniture Disposal",
      "Bedroom Set and Dining Room Furniture Removal",
      "Eco-Friendly Furniture Recycling San Diego County",
      "Furniture Donation Coordination with Local Charities",
      "Multi-Story Building Furniture Removal",
      "Same-Day Furniture Pickup Throughout San Diego"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Furniture Disposal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Living Room Furniture Disposal San Diego",
            "description": "Professional removal of coffee tables, entertainment centers, bookshelves, and accent chairs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Office Furniture Disposal San Diego",
            "description": "Commercial furniture removal and recycling"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Furniture Recycling San Diego",
            "description": "Eco-friendly furniture recycling and donation service"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Heavy Furniture Disposal San Diego",
            "description": "Specialized removal of heavy bedroom and office furniture throughout San Diego"
          }
        }
      ]
    }
  };

  const neighborhoodSchema = {
    "@type": "ItemList",
    "name": "San Diego County Furniture Disposal Service Coverage",
    "description": "Professional furniture removal throughout all San Diego County neighborhoods",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Place",
          "name": "La Jolla",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "La Jolla",
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
          "name": "Pacific Beach",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Pacific Beach",
            "addressRegion": "CA",
            "postalCode": "92109"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Place",
          "name": "Chula Vista",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chula Vista",
            "addressRegion": "CA",
            "postalCode": "91910"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Place",
          "name": "El Cajon",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "El Cajon",
            "addressRegion": "CA",
            "postalCode": "92020"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Place",
          "name": "Oceanside",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Oceanside",
            "addressRegion": "CA",
            "postalCode": "92054"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Place",
          "name": "Escondido",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Escondido",
            "addressRegion": "CA",
            "postalCode": "92025"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "Place",
          "name": "Santee",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Santee",
            "addressRegion": "CA",
            "postalCode": "92071"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 8,
        "item": {
          "@type": "Place",
          "name": "National City",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "National City",
            "addressRegion": "CA",
            "postalCode": "91950"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 9,
        "item": {
          "@type": "Place",
          "name": "La Mesa",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "La Mesa",
            "addressRegion": "CA",
            "postalCode": "91942"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 10,
        "item": {
          "@type": "Place",
          "name": "Downtown San Diego",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Diego",
            "addressRegion": "CA",
            "postalCode": "92101"
          }
        }
      }
    ]
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.severinhauling.com" },
    { name: "Services", url: "https://www.severinhauling.com/services" },
    { name: "Furniture Disposal", url: "https://www.severinhauling.com/furniture-disposal-san-diego" },
  ]);

  const howToSchema = generateHowToSchema({
    cityName: "San Diego",
    pageUrl: "https://www.severinhauling.com/furniture-disposal-san-diego"
  });

  const faqSchema = generateFAQSchema(furnitureFAQs);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema, neighborhoodSchema, howToSchema]
  };

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <Header />

      <main>
        {/* Hero Section - Optimized for Core Web Vitals */}
        <OptimizedGradientHero
          title="Furniture Disposal San Diego"
          subtitle="Eco-Friendly Removal & Recycling • We Do the Heavy Lifting • Same-Day Available"
          description="Licensed & Insured • Small items $69+ • Standard items $100+ • All San Diego County"
        />

        {/* Service Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why Choose Us for Furniture Disposal
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Same-Day Service</h3>
                <p className="text-gray-600">
                  Need your furniture gone today? We offer same-day pickup throughout San Diego when you call before 2 PM.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">We Do All the Work</h3>
                <p className="text-gray-600">
                  Don't lift a finger. Our team handles everything—from your upstairs bedroom to the curb and beyond.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Upfront Pricing</h3>
                <p className="text-gray-600">
                  No surprises. You'll know exactly what you're paying before we start. Free quotes by phone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* LEFT COLUMN - Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                    Professional Furniture Disposal in San Diego
                  </h2>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg mb-4">
                      When you need to get rid of old furniture in San Diego, you want it done right. Our furniture disposal San Diego service combines fast removal with eco-friendly practices—recycling and donating whenever possible instead of sending everything to the landfill. Bedroom sets, dining tables, dressers, armoires — the pieces people genuinely cannot carry down a flight of stairs without a crew — are what we haul out most.
                    </p>

                    <p className="text-lg mb-6">
                      We handle all types of furniture removal San Diego needs: beds, dressers, desks, dining tables, office furniture, bedroom sets, patio furniture, and everything in between. We also offer dedicated <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:text-blue-700 underline">mattress disposal</a> and a specialized <a href="/couch-removal-san-diego" className="text-blue-600 hover:text-blue-700 underline">couch removal service</a> for upholstered seating. Our furniture recycling San Diego program ensures usable items find new homes through donation partners, while materials like metal and wood get properly recycled. From <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a> to <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a>, we're helping San Diego stay green while keeping your space clutter-free. Need <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:text-blue-700 underline">same-day service</a>? Call before 2 PM.
                    </p>

                    <h2 className="text-3xl font-bold mt-10 mb-4">Free vs. Professional Furniture Disposal San Diego</h2>

                    <p className="text-lg mb-4">
                      Many San Diego residents search for free furniture disposal options. While the city does offer free bulky item pickup, understanding the full picture helps you make the best choice.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-red-900 mb-4">The Reality of "Free" Disposal</h4>
                        <p className="text-gray-700 mb-3">
                          Free city pickup requires you to move heavy furniture to the curb yourself—risking back injury and property damage. You'll wait 1-2 weeks for your scheduled pickup date.
                        </p>
                        <p className="text-gray-700 mb-3">
                          If you take it to Miramar Landfill yourself, you need to rent a truck ($75-150/day), load heavy furniture, drive across town, wait in dump lines, and pay disposal fees ($40-60).
                        </p>
                        <p className="text-gray-700 mb-4">
                          When you add up truck rental, fuel costs, your time, and physical effort, the "free" option often costs just as much or more than professional removal.
                        </p>
                        <p className="font-semibold text-red-800">
                          Typical DIY cost: $100-200+ when factoring in all expenses
                        </p>
                      </div>

                      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-green-900 mb-4">Our Professional Service</h4>
                        <p className="text-gray-700 mb-3">
                          Our furniture disposal San Diego service starts at $69 for small items, with upfront quotes over the phone. No hidden fees—the price we quote covers everything.
                        </p>
                        <p className="text-gray-700 mb-3">
                          We come directly to your location anywhere in San Diego County. Whether you're in a ground-floor home or a 20th-floor high-rise, our team handles all the heavy lifting and protects your walls and floors.
                        </p>
                        <p className="text-gray-700 mb-4">
                          Call before 2 PM for same-day service. The entire process takes just 15-30 minutes. You don't lift a finger, and we ensure proper recycling or donation.
                        </p>
                        <p className="font-semibold text-green-800">
                          Professional service from $69: Similar cost to DIY, zero hassle, no physical risk
                        </p>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h4>
                      <p className="text-gray-700 mb-4">
                        While free furniture disposal San Diego options exist through the city, most people find that our professional service offers better overall value. When you factor in truck rental, time, physical effort, and injury risk, the "free" option often costs more in both money and convenience.
                      </p>
                      <p className="text-gray-700">
                        Call <a href="tel:6197500114" className="text-blue-600 font-bold hover:underline">(619) 750-0114</a> for a free quote that saves you time, effort, and often money compared to DIY alternatives.
                      </p>
                    </div>

                    <h2 className="text-3xl font-bold mt-10 mb-4">What We Remove</h2>
                    <p className="text-lg mb-4">
                      If it's furniture, we'll take it. Here's what we haul away most often:
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h4 className="font-bold text-xl mb-3 text-blue-600">Living Room</h4>
                        <ul className="list-disc pl-4 space-y-2 text-gray-700">
                          <li><a href="/couch-removal-san-diego" className="text-blue-600 hover:underline">Couches & Sofas (dedicated service) →</a></li>
                          <li>Coffee tables & end tables</li>
                          <li>Entertainment centers & TV stands</li>
                          <li>Bookshelves & cabinets</li>
                          <li>Accent chairs & ottomans</li>
                        </ul>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h4 className="font-bold text-xl mb-3 text-blue-600">Bedroom</h4>
                        <ul className="list-disc pl-4 space-y-2 text-gray-700">
                          <li>Beds, <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:text-blue-700 underline">mattresses & box springs</a></li>
                          <li>Dressers & nightstands</li>
                          <li>Armoires & wardrobes</li>
                          <li>Mirrors & headboards</li>
                          <li>Children's furniture</li>
                        </ul>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h4 className="font-bold text-xl mb-3 text-blue-600">Office</h4>
                        <ul className="list-disc pl-4 space-y-2 text-gray-700">
                          <li>Desks (all sizes)</li>
                          <li>Office chairs</li>
                          <li>Conference tables</li>
                          <li>Filing cabinets</li>
                          <li>Cubicles & workstations</li>
                          <li>Storage units</li>
                        </ul>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h4 className="font-bold text-xl mb-3 text-blue-600">Other Items</h4>
                        <ul className="list-disc pl-4 space-y-2 text-gray-700">
                          <li>Dining tables & chairs</li>
                          <li>Patio furniture</li>
                          <li>Exercise equipment</li>
                          <li><a href="/piano-removal-san-diego" className="text-blue-600 hover:text-blue-700 underline">Pianos</a> (expert piano removal services)</li>
                          <li>Pool tables</li>
                        </ul>
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-10 mb-4">How It Works</h2>
                    <p className="text-lg mb-4">
                      Getting rid of unwanted furniture couldn't be simpler:
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
                        <h4 className="font-bold text-lg mb-2">Call or Book Online</h4>
                        <p className="text-gray-700 text-sm">
                          Give us a call at <a href="tel:+16197500114" className="text-blue-600 underline font-semibold">(619) 750-0114</a> or request a quote. We'll give you upfront pricing.
                        </p>
                      </div>

                      <div className="bg-blue-50 p-6 rounded-lg">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
                        <h4 className="font-bold text-lg mb-2">We Show Up & Haul It</h4>
                        <p className="text-gray-700 text-sm">
                          Our team arrives on time, handles all the lifting, and carefully removes your furniture without damaging your home.
                        </p>
                      </div>

                      <div className="bg-blue-50 p-6 rounded-lg">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
                        <h4 className="font-bold text-lg mb-2">Done!</h4>
                        <p className="text-gray-700 text-sm">
                          We dispose of your furniture properly according to local regulations. You're done—no truck rental, no heavy lifting.
                        </p>
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-10 mb-4">Common Furniture We Remove</h2>

                    <h3 className="text-2xl font-semibold mt-6 mb-3">Coffee Tables, Entertainment Centers & More</h3>
                    <p className="text-lg mb-6">
                      Coffee tables, entertainment centers, bookshelves, TV stands, accent chairs—these are furniture disposal staples. Too big for trash pickup, too heavy to move alone. We get them out fast from <a href="/junk-removal-rancho-santa-fe" className="text-blue-600 hover:underline">Rancho Santa Fe</a> to <a href="/junk-removal-oceanside" className="text-blue-600 hover:underline">Oceanside</a>. Need help with upholstered seating like sectionals or recliners? Our dedicated <a href="/couch-removal-san-diego" className="text-blue-600 hover:underline">couch removal service</a> handles those specifically.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-3">Office Furniture & Desks</h3>
                    <p className="text-lg mb-6">
                      Closing an office or upgrading your workspace? We remove desks, cubicles, conference tables, and filing cabinets with minimal disruption to your business. From <a href="/junk-removal-carmel-valley" className="text-blue-600 hover:underline">Carmel Valley</a> executive suites to downtown San Diego offices, we work efficiently and professionally. Need that heavy executive desk disassembled? We've got the tools and know-how.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-3">Bedroom Furniture</h3>
                    <p className="text-lg mb-6">
                      Old beds, broken dressers, outdated armoires—we remove all bedroom furniture throughout San Diego. Our team can disassemble bed frames, navigate narrow hallways, and protect your floors and walls during removal. Moving to a smaller place? Redecorating? We make furniture removal simple.
                    </p>

                    <h2 className="text-3xl font-bold mt-10 mb-4">What Happens to Your Old Furniture?</h2>
                    <p className="text-lg mb-6">
                      When you choose our furniture disposal San Diego service, you're choosing responsible disposal. Usable furniture gets donated to local charities like Habitat for Humanity and San Diego Rescue Mission. Broken items are recycled when possible—metal frames, wood components, and fabric materials all get sorted properly. Only true waste reaches the landfill as a last resort. We follow all local San Diego disposal regulations and work with recycling partners throughout the county to minimize environmental impact.
                    </p>

                    {/* Local Neighborhoods Section */}
                    <h2 className="text-3xl font-bold mt-12 mb-6">San Diego Neighborhoods We Serve</h2>
                    <p className="text-lg mb-6">
                      Our furniture disposal San Diego service covers every neighborhood across San Diego County. From coastal communities to inland suburbs, we provide fast, professional furniture removal wherever you are:
                    </p>

                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600 p-8 mb-8 rounded-lg">
                      <div className="grid md:grid-cols-3 gap-8">
                        <div>
                          <h4 className="font-bold text-lg mb-4 text-blue-900">Coastal Communities</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li>• <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline font-semibold">La Jolla</a> - Luxury furniture disposal</li>
                            <li>• <a href="/junk-removal-pacific-beach" className="text-blue-600 hover:underline font-semibold">Pacific Beach</a> - Apartment furniture</li>
                            <li>• <a href="/junk-removal-carlsbad" className="text-blue-600 hover:underline font-semibold">Carlsbad</a> - Coastal community service</li>
                            <li>• <a href="/junk-removal-point-loma" className="text-blue-600 hover:underline font-semibold">Point Loma</a> - Waterfront homes</li>
                            <li>• <a href="/junk-removal-del-mar" className="text-blue-600 hover:underline font-semibold">Del Mar</a> - Estate furniture</li>
                            <li>• Mission Beach - Vacation rental cleanouts</li>
                            <li>• Sunset Cliffs - Coastal property service</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-lg mb-4 text-blue-900">Central San Diego</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li>• <a href="/junk-removal-north-park" className="text-blue-600 hover:underline font-semibold">North Park</a> - Urban furniture disposal</li>
                            <li>• <a href="/junk-removal-hillcrest" className="text-blue-600 hover:underline font-semibold">Hillcrest</a> - High-rise apartments</li>
                            <li>• Downtown/Gaslamp - Commercial offices</li>
                            <li>• University Heights - Historic homes</li>
                            <li>• Normal Heights - Residential service</li>
                            <li>• Bankers Hill - Luxury condos</li>
                            <li>• Mission Hills - Estate properties</li>
                            <li>• South Park - Neighborhood service</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-lg mb-4 text-blue-900">North County</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li>• <a href="/junk-removal-oceanside" className="text-blue-600 hover:underline font-semibold">Oceanside</a> - Beach & inland</li>
                            <li>• <a href="/junk-removal-escondido" className="text-blue-600 hover:underline font-semibold">Escondido</a> - North inland</li>
                            <li>• <a href="/junk-removal-vista" className="text-blue-600 hover:underline font-semibold">Vista</a> - Residential areas</li>
                            <li>• <a href="/junk-removal-carlsbad" className="text-blue-600 hover:underline font-semibold">Carlsbad</a> - Coastal service</li>
                            <li>• <a href="/junk-removal-san-marcos" className="text-blue-600 hover:underline font-semibold">San Marcos</a> - Family neighborhoods</li>
                            <li>• <a href="/junk-removal-rancho-santa-fe" className="text-blue-600 hover:underline font-semibold">Rancho Santa Fe</a> - Luxury estates</li>
                          </ul>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-8 mt-8">
                        <div>
                          <h4 className="font-bold text-lg mb-4 text-blue-900">East County</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li>• <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline font-semibold">El Cajon</a> - Valley communities</li>
                            <li>• <a href="/junk-removal-la-mesa" className="text-blue-600 hover:underline font-semibold">La Mesa</a> - Village district</li>
                            <li>• <a href="/junk-removal-santee" className="text-blue-600 hover:underline font-semibold">Santee</a> - Family homes</li>
                            <li>• <a href="/junk-removal-lakeside" className="text-blue-600 hover:underline font-semibold">Lakeside</a> - Rural properties</li>
                            <li>• <a href="/junk-removal-lemon-grove" className="text-blue-600 hover:underline font-semibold">Lemon Grove</a> - Residential service</li>
                            <li>• Alpine - Mountain communities</li>
                            <li>• Jamul - Rural estate service</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-lg mb-4 text-blue-900">South Bay</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li>• <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline font-semibold">Chula Vista</a> - Eastlake, Otay Ranch</li>
                            <li>• National City - Urban service</li>
                            <li>• Imperial Beach - Beach community</li>
                            <li>• Bonita - Residential areas</li>
                            <li>• Otay Mesa - Commercial zones</li>
                            <li>• San Ysidro - Border communities</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-lg mb-4 text-blue-900">North Central</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li>• <a href="/junk-removal-mira-mesa" className="text-blue-600 hover:underline font-semibold">Mira Mesa</a> - Tech corridor</li>
                            <li>• <a href="/junk-removal-kearny-mesa" className="text-blue-600 hover:underline font-semibold">Kearny Mesa</a> - Commercial district</li>
                            <li>• <a href="/junk-removal-clairemont" className="text-blue-600 hover:underline font-semibold">Clairemont</a> - Family neighborhoods</li>
                            <li>• <a href="/junk-removal-carmel-valley" className="text-blue-600 hover:underline font-semibold">Carmel Valley</a> - Executive homes</li>
                            <li>• <a href="/junk-removal-poway" className="text-blue-600 hover:underline font-semibold">Poway</a> - Suburban service</li>
                            <li>• Rancho Peñasquitos - Master planned</li>
                            <li>• Scripps Ranch - Residential areas</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 text-center">
                        <p className="text-gray-700 font-semibold text-lg">
                          Don't see your neighborhood? We serve the entire San Diego County area. <a href="tel:+16197500114" className="text-blue-600 hover:underline">Call (619) 750-0114</a> to confirm service in your area!
                        </p>
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-10 mb-6">Common Furniture Disposal Situations in San Diego</h2>
                    <p className="text-lg mb-8">
                      San Diego homeowners and businesses call us when they need furniture removed quickly and professionally. Here are the most common situations:
                    </p>

                    <div className="space-y-6 mb-12">
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                        <h3 className="text-2xl font-bold text-blue-900 mb-3">📦 Moving & Downsizing</h3>
                        <p className="text-gray-700 mb-3">
                          Moving to a smaller place and the bedroom set won't fit? The dining table is too long for the new condo's kitchen? Dressers and armoires are the pieces nobody wants to deal with on move day — too heavy to carry down two flights alone, too bulky for most SUVs, and donation pickup usually takes two weeks you don't have. We take them same-day or scheduled around your move-out date.
                        </p>
                        <p className="text-gray-700">
                          <strong>Common scenarios:</strong> King bedroom set that won't fit the new apartment • Dining table too large for a condo • Dresser or armoire too heavy to move without a crew • Downsizing from a 4-bedroom home — the furniture math doesn't work • Relocating out of state and leaving bulky pieces behind • Combining households with duplicate bedroom or dining furniture
                        </p>
                      </div>

                      <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
                        <h3 className="text-2xl font-bold text-purple-900 mb-3">🏡 Estate & Inherited Property Cleanouts</h3>
                        <p className="text-gray-700 mb-3">
                          Clearing an inherited San Diego property after losing a family member is overwhelming. You need to remove decades of furniture from a home you didn't grow up in, often while managing estate proceedings and property sales. We handle complete estate furniture removal with sensitivity and professionalism—you don't have to sort through every piece or make dozens of decisions. Point to what stays, we remove everything else. We do a steady stream of these in Del Cerro, Allied Gardens, and Rolando — '50s and '60s ranch homes where the same dining set has sat in the same room for 30 years.
                        </p>
                        <p className="text-gray-700">
                          <strong>Common scenarios:</strong> Estate sales preparation • Probate property clearing • Inherited homes needing quick turnaround • Preparing property for sale • Family member moved to care facility
                        </p>
                      </div>

                      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                        <h3 className="text-2xl font-bold text-green-900 mb-3">💼 Commercial Office Furniture Disposal</h3>
                        <p className="text-gray-700 mb-3">
                          Office lease ending or company downsizing? Removing desks, cubicles, conference tables, and filing cabinets from San Diego office buildings requires coordination and speed. We work around your business hours (evenings and weekends available), handle disassembly of modular furniture, and clear everything in one visit. From single-office cleanouts to entire floor removals in downtown high-rises, we minimize disruption to neighboring tenants. Most of our commercial furniture disposal calls come from Sorrento Valley, Kearny Mesa, and the buildings off Friars Road in Mission Valley.
                        </p>
                        <p className="text-gray-700">
                          <strong>Common scenarios:</strong> Lease expiration furniture removal • Company relocation • Startup closure cleanouts • Office remodeling • WeWork or co-working space exits
                        </p>
                      </div>

                      <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
                        <h3 className="text-2xl font-bold text-orange-900 mb-3">🏢 Apartment & Multi-Story Furniture Removal</h3>
                        <p className="text-gray-700 mb-3">
                          Removing heavy furniture from San Diego apartments—especially high-rises—is a logistical challenge. Narrow hallways, small elevators, tight stairwells, and building access restrictions make DIY removal nearly impossible. Our team handles furniture extraction from any floor (we've done 20th-floor condos in downtown), navigates building requirements, protects hallways and elevators, and coordinates with property management. You avoid the back-breaking work and potential property damage.
                        </p>
                        <p className="text-gray-700">
                          <strong>Common scenarios:</strong> High-rise condo furniture removal • Walk-up apartment cleanouts • Elevator scheduling logistics • Building access coordination • Protecting common areas during removal
                        </p>
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-10 mb-4">Why Hire Professionals for Furniture Disposal?</h2>
                    <p className="text-lg mb-4">
                      You could try to haul that old dresser or dining set yourself. Here's why that usually goes badly:
                    </p>

                    <ul className="list-disc pl-6 mb-6 space-y-2">
                      <li><strong>Heavy & Awkward:</strong> Furniture is heavier than it looks. Dressers and dining tables can hit 150–300 lbs—and the bulk makes them nearly impossible to maneuver solo.</li>
                      <li><strong>Risk of Injury:</strong> Back strains, pinched fingers, and worse. It happens more often than you'd think.</li>
                      <li><strong>Property Damage:</strong> Scratched floors, dented walls, broken railings. One wrong move can cost you.</li>
                      <li><strong>No Truck Needed:</strong> Why rent a truck and make multiple trips when we handle it all?</li>
                      <li><strong>Proper Disposal:</strong> Furniture can't just go to the curb. We know where it needs to go.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN - Sidebar */}
              <div className="lg:col-span-1">
                <LocationSidebarCTA
                  locationName="Furniture Disposal"
                  nearbyLocations={relatedServices}
                  nearbyHeading="Services We Provide"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Furniture Disposal"
          contextParagraph="Know what you'll pay before we arrive. All prices include labor, hauling, and proper eco-friendly disposal. Prices shown are for standard furniture disposal. Heavy items like pianos or items requiring special handling may have additional fees."
        />

        {/* Trust Signals */}
        <TrustSignalsSection locationName="Furniture Disposal" />

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FAQSection
          title="Frequently Asked Questions - Furniture Disposal San Diego"
          description="Get answers to common questions about our furniture disposal San Diego service, eco-friendly recycling, pricing, and same-day pickup options."
          faqs={furnitureFAQs}
          ctaTitle="Still Have Questions About Furniture Disposal?"
          ctaDescription="Our experienced team is ready to answer any questions about our furniture disposal San Diego and recycling services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related Specialized Services</h3>
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <a href="/couch-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Couch Removal</h4>
                <p className="text-gray-600">Fast sofa and sectional pickup throughout San Diego</p>
              </a>
              <a href="/san-diego-mattress-disposal" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Mattress Disposal</h4>
                <p className="text-gray-600">Eco-friendly mattress and box spring removal</p>
              </a>
              <a href="/piano-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Piano Removal</h4>
                <p className="text-gray-600">Expert piano removal services with careful handling</p>
              </a>
              <a href="/same-day-junk-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Same-Day Service</h4>
                <p className="text-gray-600">Fast same-day furniture pickup when you need it</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
