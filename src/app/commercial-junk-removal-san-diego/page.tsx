import { Metadata } from 'next';
import Image from "next/image";
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
  title: 'Commercial Junk Removal San Diego | Office, Retail & Warehouse | (619) 750-0114',
  description: 'Commercial junk removal San Diego for operating businesses. Office cleanouts, retail fixtures, warehouse equipment. NET-30 terms, after-hours service. Licensed & insured.',
  keywords: [
    'commercial junk removal san diego',
    'commercial debris removal san diego',
    'business junk removal san diego',
    'office cleanout san diego',
    'retail cleanout san diego',
    'warehouse junk removal san diego',
    'office junk removal san diego',
    'business debris removal'
  ],
  openGraph: {
    title: 'Commercial Junk Removal San Diego | Office, Retail & Warehouse Cleanouts',
    description: 'Commercial junk removal San Diego for operating businesses. Office cleanouts, retail fixtures, warehouse equipment. NET-30 terms, after-hours service.',
    url: 'https://www.severinhauling.com/commercial-junk-removal-san-diego',
    siteName: 'Severin Hauling',
    images: [{
      url: 'https://www.severinhauling.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Commercial Junk Removal San Diego - Severin Hauling'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Junk Removal San Diego | Office, Retail & Warehouse',
    description: 'Commercial junk removal San Diego for operating businesses. NET-30 terms, after-hours service, minimal business disruption.',
    images: ['https://www.severinhauling.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.severinhauling.com/commercial-junk-removal-san-diego',
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

const commercialFAQs = [
  {
    question: "How much does commercial junk removal cost in San Diego?",
    answer: "Commercial junk removal San Diego pricing starts at $100 for small amounts and goes up to $495 for full loads. Most office cleanouts fall in the $249-$349 range depending on volume. We offer NET-30 payment terms for qualified business accounts, volume discounts for recurring services, and all-inclusive pricing with no hidden fees. Commercial pricing includes after-hours scheduling, disposal documentation, and coordination with your facilities team. Unlike residential service, we provide detailed invoicing with project breakdowns for your accounting department. Call (619) 750-0114 for a free business account quote."
  },
  {
    question: "Do you provide after-hours or weekend commercial junk removal?",
    answer: "Yes, after-hours service is standard for our commercial junk removal San Diego clients. We schedule around your business operations with evening appointments (after 5 PM), weekend service (Saturday and Sunday), and holiday scheduling when needed. Most businesses can't afford downtime during regular hours, so we work when your customers and employees aren't there. Our crews coordinate with building security, property management, and your facilities team to ensure smooth service delivery without disrupting your business operations."
  },
  {
    question: "What types of businesses do you serve in San Diego?",
    answer: "Our business junk removal San Diego service covers all types of operating businesses including office buildings and corporate headquarters, retail stores and shopping centers, restaurants and hospitality venues, warehouses and distribution centers, medical offices and healthcare facilities, legal firms and professional services, technology companies and startups, manufacturing and industrial facilities. We handle office furniture removal, retail fixtures and displays, restaurant equipment, warehouse shelving, medical office equipment, and general business debris removal. Each industry has unique requirements and we provide specialized service for compliance, confidential materials, and business-specific needs."
  },
  {
    question: "Do you offer recurring service contracts for businesses?",
    answer: "Yes, recurring contracts are popular for our commercial debris removal San Diego clients. We provide scheduled service on your terms with weekly, bi-weekly, or monthly pickups for ongoing needs, quarterly cleanouts for seasonal inventory or office reorganization, annual contracts with volume discounts, and on-call service with priority scheduling. Recurring clients get dedicated account management, consistent crews familiar with your facility, volume-based pricing discounts, and simplified billing with monthly invoicing. This keeps your business clean and compliant without managing disposal yourself. Many San Diego businesses use us as their primary commercial junk removal partner."
  },
  {
    question: "Can you provide disposal documentation for compliance?",
    answer: "Absolutely. Our office cleanout San Diego service includes comprehensive compliance documentation with certificates of disposal for regulatory requirements, chain of custody records for sensitive materials, environmental compliance reports showing proper disposal, weight tickets and manifests for audit trails, and recycling documentation for sustainability reporting. We handle HIPAA-compliant document destruction through certified partners, EPA-certified e-waste recycling with certificates, and hazardous materials disposal with full documentation. This is critical for businesses in regulated industries like healthcare, legal, financial services, and government contractors."
  },
  {
    question: "How quickly can you complete a commercial cleanout?",
    answer: "Timeline depends on project size, but we typically complete small office cleanouts in 2-4 hours (5-10 workstations), medium retail cleanouts in 4-8 hours (store fixtures and inventory), and large warehouse projects in 1-3 days (multi-bay facilities). We understand business interruptions cost money, so we work efficiently and can often provide same-day service when you call before 2 PM. For planned relocations or renovations, we schedule around your timeline and can expedite urgent projects. Our commercial junk removal San Diego crews are experienced with business environments and work quickly without disrupting adjacent tenants or operations."
  },
  {
    question: "Do you handle confidential documents and sensitive materials?",
    answer: "Yes, confidential material handling is standard for our business junk removal San Diego clients. All confidential documents receive secure handling with chain of custody documentation, HIPAA-compliant shredding through certified destruction partners, certificates of destruction for compliance records, and secure transport in locked containers. For IT equipment with sensitive data, we provide data destruction certification, EPA-certified e-waste recycling, and hard drive shredding when needed. Our crews sign confidentiality agreements and can coordinate secure handling protocols with your facilities or IT team. This makes us the trusted choice for law firms, medical offices, financial institutions, and businesses with compliance requirements throughout San Diego County."
  },
  {
    question: "What's the difference between commercial junk removal and construction debris removal?",
    answer: "Commercial junk removal San Diego focuses on operating businesses (offices, retail, warehouses) while construction debris removal targets active construction sites and contractors. Commercial service handles office furniture and equipment, retail fixtures and displays, warehouse shelving and inventory, restaurant equipment and appliances, and general business operational waste. We emphasize after-hours scheduling to avoid business disruption, NET-30 payment terms for businesses, recurring service contracts for ongoing needs, and minimal impact on your customers and employees. Construction debris service handles building materials like lumber, drywall, concrete, demo waste, and contractor materials from renovation or construction sites. If you're an operating business needing cleanout service, this is the right page. If you're a contractor with construction waste, see our construction debris removal page."
  },
  {
    question: "Can you coordinate with our property manager or facilities team?",
    answer: "Absolutely. Our retail cleanout San Diego service includes full coordination with property managers, facilities directors, building management, general contractors, and your designated contacts. We provide detailed project timelines and scheduling, coordinate freight elevator reservations and loading dock access, communicate directly with your facilities team, adapt to building-specific requirements and protocols, and work within your security and access procedures. For multi-location businesses, we assign dedicated account management to ensure consistency across all San Diego properties. We carry $2M liability insurance and provide certificates of insurance to property management for building access and compliance requirements."
  },
  {
    question: "Do you offer NET-30 payment terms for businesses?",
    answer: "Yes, NET-30 payment terms are available for qualified commercial accounts. This is one of the key benefits of our commercial junk removal San Diego service compared to residential options. Business account benefits include NET-30 invoicing (pay 30 days after service), detailed monthly statements with project breakdowns, purchase order acceptance for corporate procurement, volume discounts for recurring contracts, and dedicated account management. To set up a business account, we require business verification (EIN or business license), credit application for NET-30 terms, and a W-9 for your accounting department. Most San Diego businesses qualify immediately. Call (619) 750-0114 to open your commercial account today."
  }
];

const relatedServices = [
  { name: "Office Furniture Removal", slug: "furniture-disposal-san-diego" },
  { name: "Appliance Removal", slug: "appliance-removal-san-diego" },
  { name: "Same Day Junk Removal", slug: "same-day-junk-removal-san-diego" },
  { name: "Estate Cleanout", slug: "estate-cleanout-san-diego" },
];

export default function CommercialJunkRemovalSanDiegoPage() {
  const serviceSchema = generateServiceSchema({
    name: "Commercial Junk Removal San Diego",
    description: "Professional commercial junk removal San Diego for offices, retail stores, warehouses. Business cleanouts with NET-30 terms, after-hours service, and disposal documentation.",
    url: "https://www.severinhauling.com/commercial-junk-removal-san-diego",
    serviceType: "Commercial Junk Removal Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.severinhauling.com" },
    { name: "Services", url: "https://www.severinhauling.com/services" },
    { name: "Commercial Junk Removal", url: "https://www.severinhauling.com/commercial-junk-removal-san-diego" },
  ]);

  // Enhanced LocalBusiness schema with all required fields per CLAUDE.md
  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://www.severinhauling.com/commercial-junk-removal-san-diego#business",
    "name": "Severin Hauling - Commercial Junk Removal San Diego",
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
      "latitude": 32.7157,
      "longitude": -117.1611
    },
    "url": "https://www.severinhauling.com/commercial-junk-removal-san-diego",
    "areaServed": [
      {
        "@type": "City",
        "name": "San Diego",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      }
    ],
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Venmo", "Zelle", "Cash App"],
    "currenciesAccepted": "USD",
    "openingHours": "Mo-Su 00:00-23:59",
    "knowsAbout": [
      "Commercial junk removal for San Diego businesses",
      "Office furniture and equipment removal",
      "Retail fixture and display disposal",
      "Warehouse cleanout services",
      "Business electronics recycling and data destruction",
      "After-hours commercial service scheduling",
      "NET-30 business account management",
      "HIPAA-compliant document destruction"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Commercial Junk Removal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Office Cleanout San Diego",
            "description": "Complete office junk removal and cleanout services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Retail Cleanout San Diego",
            "description": "Store closure and retail fixture removal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Warehouse Junk Removal San Diego",
            "description": "Large-scale warehouse and industrial cleanout"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Debris Removal San Diego",
            "description": "Business debris and equipment disposal"
          }
        }
      ]
    },
    "aggregateRating": generateAggregateRatingSchema()
  };

  const faqSchema = generateFAQSchema(commercialFAQs);

  const neighborhoodSchema = {
    "@type": "ItemList",
    "name": "San Diego Business Districts We Serve",
    "description": "Commercial areas throughout San Diego County where we provide business junk removal services",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
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
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Place",
          "name": "Kearny Mesa",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Diego",
            "addressRegion": "CA",
            "postalCode": "92111"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Place",
          "name": "Mission Valley",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Diego",
            "addressRegion": "CA",
            "postalCode": "92108"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
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
        "position": 5,
        "item": {
          "@type": "Place",
          "name": "Sorrento Valley",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Diego",
            "addressRegion": "CA",
            "postalCode": "92121"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Place",
          "name": "Mira Mesa",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Diego",
            "addressRegion": "CA",
            "postalCode": "92126"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "Place",
          "name": "North Park",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Diego",
            "addressRegion": "CA",
            "postalCode": "92104"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 8,
        "item": {
          "@type": "Place",
          "name": "Gaslamp Quarter",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Diego",
            "addressRegion": "CA",
            "postalCode": "92101"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 9,
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
        "position": 10,
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
      }
    ]
  };

  const howToSchema = generateHowToSchema({
    cityName: "San Diego (Commercial Service)",
    pageUrl: "https://www.severinhauling.com/commercial-junk-removal-san-diego"
  });

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, neighborhoodSchema, howToSchema]
  };

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <Header />
      <main>
        <OptimizedGradientHero
          title="Commercial Junk Removal San Diego"
          subtitle="⭐ NET-30 Terms • After-Hours Service • Minimal Business Disruption"
          description="✓ Office Cleanouts ✓ Retail Fixtures ✓ Warehouse Equipment ✓ Licensed & Insured"
        />

        {/* Main Content with Sidebar */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* LEFT COLUMN - Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <div className="prose prose-lg max-w-none">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Commercial Junk Removal for San Diego Businesses</h2>

                    {/* Commercial Image - Desktop float-right */}
                    <div className="float-right ml-6 mb-6 w-80 hidden md:block">
                      <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                        <Image
                          src="/optimized/commercial.jpg"
                          alt="Commercial junk removal San Diego - office cleanout and business debris removal service"
                          fill
                          className="object-cover"
                          sizes="320px"
                        />
                      </div>
                    </div>

                    {/* Mobile image - stacks above content */}
                    <div className="block md:hidden mb-6">
                      <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                        <Image
                          src="/optimized/commercial.jpg"
                          alt="Commercial junk removal San Diego - office cleanout and business debris removal service"
                          fill
                          className="object-cover"
                          sizes="100vw"
                          priority
                        />
                      </div>
                    </div>

                    <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                      Running a business in San Diego means you can't afford downtime. Our commercial junk removal San Diego service handles office cleanouts, retail fixtures, and warehouse equipment without disrupting your operations.
                    </p>

                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                      We schedule around your business with after-hours service, provide NET-30 payment terms for qualified accounts, and handle everything from office furniture to retail displays. Pricing starts at $100 with all-inclusive rates covering labor, hauling, disposal documentation, and coordination with your facilities team.
                    </p>

                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      Whether you're relocating offices in downtown San Diego, closing a retail store in <a href="/junk-removal-north-park" className="text-blue-600 hover:underline">North Park</a>, or clearing out a warehouse in <a href="/junk-removal-kearny-mesa" className="text-blue-600 hover:underline">Kearny Mesa</a>, we work fast and professionally. Our business junk removal San Diego crews are experienced with commercial environments, building access protocols, and the need for minimal disruption to your employees and customers.
                    </p>

                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      We serve offices, retail stores, restaurants, warehouses, medical facilities, legal firms, technology companies, and all types of operating businesses throughout San Diego County. If you need <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">construction debris removal</a> for an active construction site, that's a separate service designed for contractors.
                    </p>

                    <div className="clear-both"></div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Commercial vs Construction Debris Removal</h2>

                    <p className="text-lg text-gray-700 mb-4">
                      Many San Diego businesses wonder which service they need. Here's the difference:
                    </p>

                    <div className="overflow-x-auto mb-8">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">Commercial Junk Removal (This Page)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Construction Debris Removal</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">Operating businesses (offices, retail, warehouses)</td>
                            <td className="border border-gray-300 px-4 py-2">Active construction sites and contractors</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">Office furniture, equipment, fixtures</td>
                            <td className="border border-gray-300 px-4 py-2">Building materials, lumber, drywall, concrete</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">After-hours service to avoid business disruption</td>
                            <td className="border border-gray-300 px-4 py-2">Job site scheduling during construction hours</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">NET-30 payment terms for businesses</td>
                            <td className="border border-gray-300 px-4 py-2">Contractor volume pricing and project-based</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">Recurring contracts for ongoing service</td>
                            <td className="border border-gray-300 px-4 py-2">Per-project or per-load pricing</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="text-lg text-gray-700 mb-8 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <strong>Still not sure?</strong> If you're an operating business needing furniture, equipment, or operational waste removed, you're in the right place. If you're a contractor with building materials and demo waste, visit our <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">construction debris removal page</a>.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Businesses We Serve</h2>

                    <p className="text-lg text-gray-700 mb-4">
                      Our commercial debris removal San Diego service handles all types of operating businesses across San Diego County. Each industry has unique requirements and we provide specialized service for your business type.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                        <h4 className="font-bold text-lg mb-3 text-blue-600">Office Buildings & Corporate</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Complete <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">office furniture removal</a> and workstation dismantling</li>
                          <li>Conference room and reception area clearing</li>
                          <li>Break room equipment and appliance disposal</li>
                          <li>IT equipment recycling with data destruction</li>
                          <li>Confidential document shredding services</li>
                          <li>After-hours service for minimal disruption</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                        <h4 className="font-bold text-lg mb-3 text-blue-600">Retail Stores & Shopping Centers</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Store fixture and display removal</li>
                          <li>Point-of-sale systems and technology</li>
                          <li>Inventory and merchandise disposal with documentation</li>
                          <li>Storage room and back-of-house clearing</li>
                          <li>Shopping mall unit complete cleanouts</li>
                          <li>Store closure and relocation services</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                        <h4 className="font-bold text-lg mb-3 text-blue-600">Restaurants & Hospitality</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Commercial kitchen equipment removal</li>
                          <li>Restaurant <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">appliance disposal</a> and recycling</li>
                          <li>Dining room furniture and booth removal</li>
                          <li>Bar equipment and fixtures disposal</li>
                          <li>Health department compliance documentation</li>
                          <li>Hotel renovation and remodel cleanouts</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                        <h4 className="font-bold text-lg mb-3 text-blue-600">Warehouses & Distribution</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Large-scale warehouse cleanouts</li>
                          <li>Industrial shelving and racking removal</li>
                          <li>Equipment and machinery disposal</li>
                          <li>Loading dock and bay area clearing</li>
                          <li>Pallet and packaging material removal</li>
                          <li>Facility relocation services</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                        <h4 className="font-bold text-lg mb-3 text-blue-600">Medical & Healthcare</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Medical office equipment removal</li>
                          <li>Dental practice relocations</li>
                          <li>HIPAA-compliant material handling</li>
                          <li>Medical furniture and equipment disposal</li>
                          <li>Clinic renovation cleanouts</li>
                          <li>Proper medical waste coordination</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                        <h4 className="font-bold text-lg mb-3 text-blue-600">Technology & Startups</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Server room and data center equipment</li>
                          <li>Startup office relocations and downsizing</li>
                          <li>Tech equipment recycling with data security</li>
                          <li>24/7 operation scheduling flexibility</li>
                          <li>Biotech and research facility cleanouts</li>
                          <li>Rapid deployment for pivot relocations</li>
                        </ul>
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-10 mb-6">Common Commercial Cleanout Situations</h2>
                    <div className="space-y-6 mb-12">
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                        <h3 className="text-2xl font-bold text-blue-900 mb-3">🏢 Office Relocation & Downsizing</h3>
                        <p className="text-gray-700 mb-3">
                          Moving offices in downtown San Diego, Kearny Mesa, or Mission Valley means clearing old furniture fast. New tenant moves in Monday and you still have 40 workstations, filing cabinets, and conference room furniture to remove. We handle office relocations and downsizing cleanouts over weekends so your business operations don't stop.
                        </p>
                        <p className="text-gray-700">
                          <strong>Common scenarios:</strong> Lease expiration cleanouts • Office relocation to smaller space • Merger consolidations • Startup pivot downsizing • Remote-first transitions
                        </p>
                      </div>

                      <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
                        <h3 className="text-2xl font-bold text-purple-900 mb-3">🛍️ Retail Store Closure & Remodels</h3>
                        <p className="text-gray-700 mb-3">
                          Closing a retail location in North Park, Gaslamp, or UTC means clearing fixtures, displays, and inventory before lease ends. Store remodels require removing old fixtures while keeping the business operational. We coordinate with property management for freight elevator access and loading dock scheduling to minimize disruption.
                        </p>
                        <p className="text-gray-700">
                          <strong>Common scenarios:</strong> Store closure cleanouts • Retail remodel fixture removal • Shopping mall unit turnovers • POS system disposal • Inventory liquidation debris
                        </p>
                      </div>

                      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                        <h3 className="text-2xl font-bold text-green-900 mb-3">📦 Warehouse & Distribution Center Cleanouts</h3>
                        <p className="text-gray-700 mb-3">
                          Warehouse operations in Mira Mesa, Otay Mesa, or Airport Area generate equipment, shelving, and pallets that need removal. Facility relocations or equipment upgrades mean clearing industrial shelving, machinery, and loading dock areas without stopping distribution operations. We schedule around your receiving windows and peak shipping times.
                        </p>
                        <p className="text-gray-700">
                          <strong>Common scenarios:</strong> Warehouse relocation cleanouts • Industrial shelving removal • Equipment upgrade disposal • Facility consolidation • Distribution center reorganization
                        </p>
                      </div>

                      <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
                        <h3 className="text-2xl font-bold text-orange-900 mb-3">⏰ Lease Expiration & Tenant Improvement Deadlines</h3>
                        <p className="text-gray-700 mb-3">
                          Commercial lease ends Friday and the landlord requires the space cleared for tenant improvements. Property management needs the space broom-clean or you forfeit your security deposit. We provide documentation (before/after photos, removal receipts) for your landlord showing compliance with lease-end cleanout requirements.
                        </p>
                        <p className="text-gray-700">
                          <strong>Common scenarios:</strong> Lease expiration cleanouts • Landlord required cleanouts • Security deposit compliance • Tenant improvement prep • Property manager deadlines
                        </p>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Account Benefits</h2>

                    <p className="text-lg text-gray-700 mb-4">
                      Our office cleanout San Diego service includes business account options designed specifically for San Diego companies. Unlike residential service, we understand businesses have different needs around billing, scheduling, and documentation.
                    </p>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                      <h4 className="text-xl font-bold mb-3 text-yellow-900">NET-30 Payment Terms Available</h4>
                      <p className="text-yellow-800 mb-3">
                        Qualified businesses get invoice terms instead of paying at service. This includes:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc pl-6 space-y-1 text-yellow-800">
                          <li>NET-30 invoicing (pay 30 days after service)</li>
                          <li>Monthly statements with project breakdowns</li>
                          <li>Purchase order acceptance</li>
                          <li>W-9 provided for your accounting</li>
                        </ul>
                        <ul className="list-disc pl-6 space-y-1 text-yellow-800">
                          <li>Volume discounts for recurring contracts</li>
                          <li>Dedicated account management</li>
                          <li>Priority scheduling for urgent needs</li>
                          <li>Single point of contact for all locations</li>
                        </ul>
                      </div>
                      <p className="text-yellow-800 mt-3">
                        <strong>To open a business account:</strong> We need your business EIN or license, a credit application for NET-30 terms, and your accounting contact. Most San Diego businesses qualify immediately.
                      </p>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">After-Hours & Weekend Service</h2>

                    <p className="text-lg text-gray-700 mb-4">
                      Business operations can't be disrupted during regular hours. That's why after-hours service is standard for our commercial junk removal San Diego clients, not an upcharge.
                    </p>

                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                      <h4 className="text-xl font-bold mb-3 text-gray-900">Flexible Scheduling for Business Operations</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li><strong>Evening appointments:</strong> After 5 PM when employees leave</li>
                          <li><strong>Weekend service:</strong> Saturday and Sunday availability</li>
                          <li><strong>Holiday scheduling:</strong> Work around your calendar</li>
                          <li><strong>Night operations:</strong> For 24/7 businesses</li>
                        </ul>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Coordinate with building security and property management</li>
                          <li>Freight elevator reservations and loading dock scheduling</li>
                          <li>Minimal impact on customers and employees</li>
                          <li>Work within your building access protocols</li>
                        </ul>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance & Documentation</h2>

                    <p className="text-lg text-gray-700 mb-4">
                      Our business junk removal San Diego service goes beyond hauling. We provide the compliance documentation and professional standards businesses need for regulatory requirements, audits, and corporate policies.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                        <h4 className="text-lg font-bold mb-3 text-blue-900">Professional Compliance</h4>
                        <ul className="list-disc pl-6 space-y-1 text-blue-800">
                          <li>$2M liability insurance coverage</li>
                          <li>Certificates of disposal for regulatory compliance</li>
                          <li>Chain of custody documentation</li>
                          <li>Environmental compliance reporting</li>
                          <li>Certificate of insurance for property management</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                        <h4 className="text-lg font-bold mb-3 text-blue-900">Confidential Material Handling</h4>
                        <ul className="list-disc pl-6 space-y-1 text-blue-800">
                          <li>HIPAA-compliant document destruction</li>
                          <li>Data destruction certification for IT equipment</li>
                          <li>Confidentiality agreements signed by crews</li>
                          <li>Secure transport in locked containers</li>
                          <li>EPA-certified e-waste recycling</li>
                        </ul>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">San Diego Business Districts We Serve</h2>

                    <p className="text-lg text-gray-700 mb-4">
                      Our retail cleanout San Diego and warehouse junk removal San Diego services cover all major business districts throughout San Diego County. We understand the unique challenges of different commercial zones and provide tailored solutions for each area.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-blue-600">Major Business Districts</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li><strong>Downtown San Diego:</strong> High-rise offices, Gaslamp Quarter businesses</li>
                          <li><strong>Mission Valley:</strong> Corporate headquarters, shopping centers</li>
                          <li><strong>UTC/La Jolla:</strong> Tech companies, biotech firms, medical offices</li>
                          <li><strong><a href="/junk-removal-kearny-mesa" className="text-blue-600 hover:underline">Kearny Mesa</a>:</strong> Manufacturing, warehouses, industrial</li>
                          <li><strong>Sorrento Valley:</strong> Biotech corridor, research facilities</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-blue-600">Regional Business Areas</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li><strong><a href="/junk-removal-north-park" className="text-blue-600 hover:underline">North Park</a>:</strong> Retail corridors, restaurants, boutiques</li>
                          <li><strong><a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a>:</strong> South County offices and retail</li>
                          <li><strong><a href="/junk-removal-oceanside" className="text-blue-600 hover:underline">Oceanside</a>:</strong> North County commercial</li>
                          <li><strong>Airport Area:</strong> Logistics, cargo facilities</li>
                          <li><strong>Harbor District:</strong> Maritime businesses, port operations</li>
                        </ul>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Why San Diego Businesses Choose Us</h2>

                    <p className="text-lg text-gray-700 mb-4">
                      As a locally-owned business serving San Diego's commercial community, we understand what businesses need. Fast response, professional crews, proper documentation, and zero disruption to your operations.
                    </p>

                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>NET-30 Payment Terms:</strong> Invoice billing for qualified business accounts instead of payment at service. We accept purchase orders and provide detailed monthly statements.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>After-Hours Service:</strong> Evening, weekend, and holiday scheduling to avoid business disruption. We work when your customers and employees aren't there.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Professional Documentation:</strong> Certificates of disposal, compliance reports, and environmental documentation for regulatory requirements and corporate audits.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Recurring Contracts:</strong> Weekly, monthly, or quarterly service with volume discounts and dedicated account management for consistent service.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Confidential Material Handling:</strong> HIPAA-compliant document destruction, data destruction certification, and secure handling protocols for sensitive business materials.</span>
                      </li>
                    </ul>

                    <div className="text-center bg-blue-900 text-white p-8 rounded-lg mt-8">
                      <h3 className="text-2xl font-bold mb-4">Ready for Commercial Junk Removal Service?</h3>
                      <p className="text-lg mb-6 leading-relaxed">
                        Professional commercial junk removal San Diego with NET-30 terms, after-hours service, and minimal business disruption. Open your business account today.
                      </p>
                      <a
                        href="tel:6197500114"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                      >
                        📞 Call (619) 750-0114 Now
                      </a>
                      <div className="bg-blue-800 rounded-lg p-4">
                        <p className="text-yellow-300 font-semibold mb-2">Commercial Junk Removal San Diego from $100</p>
                        <div className="text-sm">
                          NET-30 Terms • After-Hours Service • Business Account Benefits • All San Diego County
                        </div>
                      </div>
                      <p className="text-sm mt-4">
                        Licensed and insured • Locally owned • Professional business service
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN - Sidebar */}
              <div className="lg:col-span-1">
                <LocationSidebarCTA
                  locationName="Commercial Junk Removal"
                  nearbyLocations={relatedServices}
                  nearbyHeading="Related Services"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Commercial Junk Removal"
          contextParagraph="Commercial junk removal San Diego pricing starts at $100 for small amounts and goes up to $495 for full loads. Qualified businesses get NET-30 payment terms, volume discounts for recurring contracts, and all-inclusive pricing with no hidden fees. Call (619) 750-0114 to open your business account."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Commercial Junk Removal" />

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FAQSection
                title="Frequently Asked Questions - Commercial Junk Removal San Diego"
                description="Get answers to common questions about our commercial junk removal San Diego services, business accounts, NET-30 terms, and after-hours scheduling."
                faqs={commercialFAQs}
                ctaTitle="Still Have Questions About Commercial Junk Removal?"
                ctaDescription="Our experienced team is ready to answer any questions about our commercial junk removal San Diego services, open your business account, or schedule your cleanout."
                includeSchema={false}
              />
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related Business Services</h3>
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <a href="/furniture-disposal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Office Furniture Removal</h4>
                <p className="text-gray-600">Complete office furniture and workstation dismantling services</p>
              </a>
              <a href="/appliance-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Commercial Appliance Removal</h4>
                <p className="text-gray-600">Restaurant and office equipment removal with EPA compliance</p>
              </a>
              <a href="/same-day-junk-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Same Day Junk Removal</h4>
                <p className="text-gray-600">Emergency business cleanout service for urgent situations</p>
              </a>
              <a href="/construction-debris-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
                <p className="text-gray-600">For contractors with building materials and construction waste</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
