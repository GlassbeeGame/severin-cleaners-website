import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from "@/lib/schema";
import OptimizedGradientHero from "@/components/OptimizedGradientHero";

export const metadata: Metadata = {
  title: "San Diego Dump Fees 2025 | Landfill Prices & Free Drop-Off Guide",
  description: "See 2025 San Diego dump prices by site and material. Typical fees $70–$100 per load and ~$97–$103/ton. What each landfill accepts, hours, and how to avoid extra charges.",
  keywords: [
    "san diego dump fees",
    "san diego landfill prices",
    "miramar dump fees",
    "otay landfill cost",
    "sycamore landfill fees",
    "san diego dump prices 2025",
    "dump fees san diego",
    "landfill fees san diego",
    "san diego waste disposal cost",
    "chula vista dump fees",
    "santee landfill prices",
    "ramona transfer station fees",
    "san diego green waste fees",
    "san diego c&d disposal cost",
    "san diego mattress recycling",
    "miramar greenery fees",
    "san diego junk removal cost",
    "dump vs hauler cost",
  ],
  openGraph: {
    title: "San Diego Dump Fees 2025 | Landfill Prices & Free Drop-Off Guide",
    description: "See 2025 San Diego dump prices by site and material. Typical fees $70–$100 per load and ~$97–$103/ton. What each landfill accepts, hours, and how to avoid extra charges.",
    url: "https://www.severinhauling.com/san-diego-dump-fees",
    siteName: "Severin Hauling",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.severinhauling.com/og-dump-fees.jpg",
        width: 1200,
        height: 630,
        alt: "San Diego Dump Fees 2025 Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "San Diego Dump Fees 2025 | Landfill Prices & Free Drop-Off Guide",
    description: "See 2025 San Diego dump prices by site and material. Typical fees $70–$100 per load and ~$97–$103/ton.",
    images: ["https://www.severinhauling.com/og-dump-fees.jpg"],
  },
  alternates: {
    canonical: "https://www.severinhauling.com/san-diego-dump-fees",
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

const dumpFeesFAQs = [
    {
      question: "How much are San Diego landfill dump fees right now?",
      answer: "Small loads are typically $70–$100. Weighed general trash is about $97–$103 per ton at the City site and ~$100+/ton at private landfills."
    },
    {
      question: "Which San Diego landfill is cheapest?",
      answer: "Miramar's posted rates are transparent and competitive. Private sites can be similar per ton but some cities offer resident passes (e.g., Santee, Chula Vista) that make certain trips free up to 1 ton."
    },
    {
      question: "Is green waste cheaper than regular trash?",
      answer: "Yes. Separated green waste and clean wood are discounted. Keep loads clean to qualify for lower rates."
    },
    {
      question: "Are mattresses free to dump?",
      answer: "At select sites, yes—San Diego participates in the state mattress recycling program. Keep items dry/unsoiled and use designated drop areas and hours."
    },
    {
      question: "What's the uncovered load fee?",
      answer: "Plan on about $50 extra at City facilities if your load isn't tarped. Private sites require covered loads too and may charge or refuse entry."
    },
    {
      question: "Do landfills take cash?",
      answer: "Miramar does not; it accepts card or check only. Private sites commonly accept cash—always confirm before you go."
    }
  ];

export default function SanDiegoDumpFeesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.severinhauling.com" },
    { name: "San Diego Dump Fees", url: "https://www.severinhauling.com/san-diego-dump-fees" },
  ]);

  const localBusinessSchema = generateLocalBusinessSchema();

  const faqArticleSchema = {
    "@context": "https://schema.org",
    "@type": ["FAQPage", "Article"],
    "headline": "San Diego Landfill Dump Fees & Dump Prices (2025 Guide)",
    "description": "Comprehensive 2025 guide to San Diego landfill dump fees, including Miramar, Otay, Sycamore, and Ramona. Compare dump prices by material, learn about free programs, and find out when hiring a hauler costs less than DIY.",
    "datePublished": "2025-01-20",
    "dateModified": "2025-01-20",
    "author": {
      "@type": "Organization",
      "name": "Severin Hauling",
      "url": "https://www.severinhauling.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Severin Hauling",
      "url": "https://www.severinhauling.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.severinhauling.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.severinhauling.com/san-diego-dump-fees"
    },
    "about": {
      "@type": "Thing",
      "name": "San Diego Landfill Fees",
      "description": "Information about dump fees, landfill costs, and waste disposal pricing in San Diego County"
    },
    "keywords": "san diego dump fees, san diego landfill prices, miramar dump fees, otay landfill cost, sycamore landfill fees, dump prices san diego, landfill fees 2025",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much are San Diego landfill dump fees right now?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Small loads are typically $70–$100. Weighed general trash is about $97–$103 per ton at the City site and ~$100+/ton at private landfills."
        }
      },
      {
        "@type": "Question",
        "name": "Which San Diego landfill is cheapest?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Miramar's posted rates are transparent and competitive. Private sites can be similar per ton but some cities offer resident passes (e.g., Santee, Chula Vista) that make certain trips free up to 1 ton."
        }
      },
      {
        "@type": "Question",
        "name": "Is green waste cheaper than regular trash?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Separated green waste and clean wood are discounted. Keep loads clean to qualify for lower rates."
        }
      },
      {
        "@type": "Question",
        "name": "Are mattresses free to dump?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At select sites, yes—San Diego participates in the state mattress recycling program. Keep items dry/unsoiled and use designated drop areas and hours."
        }
      },
      {
        "@type": "Question",
        "name": "What's the uncovered load fee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Plan on about $50 extra at City facilities if your load isn't tarped. Private sites require covered loads too and may charge or refuse entry."
        }
      },
      {
        "@type": "Question",
        "name": "Do landfills take cash?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Miramar does not; it accepts card or check only. Private sites commonly accept cash—always confirm before you go."
        }
      }
    ]
  };

  // Landfill schema - structured data about each facility
  const landfillsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "San Diego County Landfills and Transfer Stations",
    "description": "Major landfills and transfer stations serving San Diego County with 2025 dump fees",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Place",
          "name": "Miramar Landfill",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "5180 Convoy St",
            "addressLocality": "San Diego",
            "addressRegion": "CA",
            "postalCode": "92111",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "32.9066",
            "longitude": "-117.1441"
          },
          "description": "City of San Diego landfill with public pricing and recycling programs"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Place",
          "name": "Otay Landfill",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1700 Maxwell Rd",
            "addressLocality": "Chula Vista",
            "addressRegion": "CA",
            "postalCode": "91911",
            "addressCountry": "US"
          },
          "description": "Private landfill serving South Bay with resident dump pass program"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Place",
          "name": "Sycamore Landfill",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "8514 Mast Blvd",
            "addressLocality": "Santee",
            "addressRegion": "CA",
            "postalCode": "92071",
            "addressCountry": "US"
          },
          "description": "Private landfill serving East County with free mattress recycling"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Place",
          "name": "Ramona Transfer Station",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "324 Maple St",
            "addressLocality": "Ramona",
            "addressRegion": "CA",
            "postalCode": "92065",
            "addressCountry": "US"
          },
          "description": "EDCO transfer station serving North Inland with indoor tipping floor"
        }
      }
    ]
  };

  const faqSchema = generateFAQSchema(dumpFeesFAQs);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [faqArticleSchema, breadcrumbSchema, localBusinessSchema, landfillsSchema, faqSchema]
  };

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <Header />
      <main>
        <OptimizedGradientHero
          title="San Diego Landfill Dump Fees & Dump Prices (2025 Guide)"
          subtitle="Current costs, what each site takes, and how to avoid surprise charges."
          description="We Handle Loading, Hauling & Disposal • Same-Day Available • Licensed & Insured"
        />

        {/* Quick Snapshot */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                Quick Snapshot: 2025 San Diego Dump Fees
              </h2>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <p className="text-lg mb-6">
                  If you're searching for <strong>San Diego landfill dump fees</strong> or comparing <strong>San Diego dump prices</strong> before you load up the truck, this guide summarizes the current 2025 fee ranges, policies, and programs at Miramar, Otay, Sycamore, and the Ramona Transfer Station. Whether you're in <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a>, <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a>, <a href="/la-mesa-junk-removal" className="text-blue-600 hover:underline">La Mesa</a>, <a href="/junk-removal-santee" className="text-blue-600 hover:underline">Santee</a>, <a href="/junk-removal-oceanside" className="text-blue-600 hover:underline">Oceanside</a>, <a href="/junk-removal-escondido" className="text-blue-600 hover:underline">Escondido</a>, <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a>, or <a href="/junk-removal-pacific-beach" className="text-blue-600 hover:underline">Pacific Beach</a>, you'll see typical per-load and per-ton pricing, what's accepted, what's prohibited, and when hiring a hauler actually costs less than a DIY dump run.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                  <p className="font-semibold text-lg mb-2">💰 Quick snapshot (2025):</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Small self-haul loads: <strong>$70–$100</strong></li>
                    <li>• Standard mixed trash (City): <strong>~$97–$103/ton</strong></li>
                    <li>• Private sites: <strong>~$100+/ton</strong></li>
                    <li>• Green waste & clean wood: <strong>Discounted rates</strong></li>
                    <li>• C&D debris: <strong>Premium pricing</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Dump Prices Work */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                How San Diego Dump Prices Work
              </h2>

              <p className="text-lg mb-6">
                <strong>San Diego dump prices</strong> vary by load type (flat vs. weighed), material, origin (city vs. non-city), and site operator (public vs. private). Expect an uncovered-load penalty if you don't tarp your load, and separate handling for electronics, appliances, and hazardous materials. Bring ID and a payment method accepted by the site you visit.
              </p>
            </div>
          </div>
        </section>

        {/* Landfill Details */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                San Diego County Landfills & Transfer Stations
              </h2>

              {/* Miramar Landfill */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600 mb-2">Miramar Landfill (City of San Diego)</h3>
                    <p className="text-gray-600">Central SD Location</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold">
                    Public Site
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">ADDRESS</p>
                    <p className="text-gray-900">5180 Convoy St., San Diego, CA</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">HOURS</p>
                    <p className="text-gray-900">Mon–Sat 7:00a–4:00p (entry by ~4:30p)</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <h4 className="font-bold text-lg mb-3">Typical 2025 Fees:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">Small flat-rate loads</span>
                      <span className="font-bold text-gray-900">~$71 (City) / $82 (Non-City)</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">Weighed general trash</span>
                      <span className="font-bold text-gray-900">$97–$103/ton</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">Green waste</span>
                      <span className="font-bold text-gray-900">$70/ton</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">Clean wood</span>
                      <span className="font-bold text-gray-900">$35/ton</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700">Uncovered load penalty</span>
                      <span className="font-bold text-red-600">+$50</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                  <p className="text-sm font-semibold mb-2">💳 Payment:</p>
                  <p className="text-gray-700">No cash—card/check only</p>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-2">✓ On-Site Programs:</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Free mattress recycling (weekdays)</li>
                    <li>• HHW appointments (Saturdays)</li>
                    <li>• Recycling center (electronics, appliances, metals)</li>
                    <li>• Miramar Greenery for composting</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-600 mt-4 italic">
                  <strong>Good to know:</strong> Arrive early on Saturdays; separate e-waste/appliances before you hit the scale to avoid delays/fees.
                </p>
              </div>

              {/* Otay Landfill */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600 mb-2">Otay Landfill</h3>
                    <p className="text-gray-600">Chula Vista / South Bay</p>
                  </div>
                  <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg text-sm font-semibold">
                    Private Site
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">ADDRESS</p>
                    <p className="text-gray-900">1700 Maxwell Rd., Chula Vista, CA</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">HOURS</p>
                    <p className="text-gray-900">Mon–Fri 7:00a–4:00p; Sat 8:00a–3:30p</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <h4 className="font-bold text-lg mb-3">Typical 2025 Fees:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">General trash</span>
                      <span className="font-bold text-gray-900">~$100+/ton (market-based)</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">Small minimum charge</span>
                      <span className="font-bold text-gray-900">~$60–$70</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700">Green/organics (separated)</span>
                      <span className="font-bold text-gray-900">Discounted</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                  <p className="text-sm font-semibold mb-2">🎟️ Chula Vista Residents:</p>
                  <p className="text-gray-700">Two free dump passes/year (up to 1 ton each); separate yard-waste passes available</p>
                </div>

                <p className="text-sm text-gray-600 mt-4 italic">
                  <strong>Good to know:</strong> Ask the scalehouse about separated loads (clean green, metal, concrete) for potential savings.
                </p>
              </div>

              {/* Sycamore Landfill */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600 mb-2">Sycamore Landfill</h3>
                    <p className="text-gray-600">Santee / East County</p>
                  </div>
                  <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg text-sm font-semibold">
                    Private Site
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">ADDRESS</p>
                    <p className="text-gray-900">8514 Mast Blvd., Santee, CA</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">HOURS</p>
                    <p className="text-gray-900">Mon–Fri 7:00a–4:30p; Sat to ~3:00p</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <h4 className="font-bold text-lg mb-3">Typical 2025 Fees:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">General trash</span>
                      <span className="font-bold text-gray-900">~$100+/ton</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700">Small minimum charge</span>
                      <span className="font-bold text-gray-900">~$60–$70</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-2">✓ Programs:</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Free mattress & carpet recycling (when separated)</li>
                    <li>• Appliances/e-waste accepted at designated areas</li>
                    <li>• Treated wood waste (with prior notice)</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4 mb-4">
                  <p className="text-sm font-semibold mb-2">🎟️ Santee Residents:</p>
                  <p className="text-gray-700">Two free passes/year (up to 1 ton per pass)</p>
                </div>

                <p className="text-sm text-gray-600 mt-4 italic">
                  <strong>Good to know:</strong> One of the few sites that can accept large animal remains; always call ahead for special waste profiles.
                </p>
              </div>

              {/* Ramona Transfer Station */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600 mb-2">Ramona Transfer Station (EDCO)</h3>
                    <p className="text-gray-600">North County Inland</p>
                  </div>
                  <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg text-sm font-semibold">
                    Transfer Station
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">ADDRESS</p>
                    <p className="text-gray-900">324 Maple St., Ramona, CA</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">HOURS</p>
                    <p className="text-gray-900">Mon–Sat 7:00a–4:30p</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <h4 className="font-bold text-lg mb-3">Typical 2025 Fees:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">General trash (transfer pricing)</span>
                      <span className="font-bold text-gray-900">~$75–$85/ton</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700">Small minimum</span>
                      <span className="font-bold text-gray-900">~$30–$40</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-2">✓ Programs:</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Free mulch/wood chips pickup</li>
                    <li>• E-waste & battery drop-offs</li>
                    <li>• Mattress recycling (EDCO service-area residents)</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-600 mt-4 italic">
                  <strong>Good to know:</strong> Indoor tipping = fast, clean unload; ideal for smaller vehicles and mixed household junk.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fees by Material */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                San Diego Dump Fees by Material
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-4 text-blue-600">General Loads</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-gray-700">Small car/pickup load</span>
                      <span className="font-bold text-gray-900">$70–$100</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-gray-700">General mixed trash (City)</span>
                      <span className="font-bold text-gray-900">$97–$103/ton</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-gray-700">General trash (private)</span>
                      <span className="font-bold text-gray-900">~$100+/ton</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-4 text-green-600">Discounted Materials</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-gray-700">Green waste (clean)</span>
                      <span className="font-bold text-gray-900">~$70/ton</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-gray-700">Clean wood</span>
                      <span className="font-bold text-gray-900">~$35/ton</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-4 text-orange-600">Premium Materials</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-gray-700">Mixed C&D debris</span>
                      <span className="font-bold text-gray-900">Premium rate</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-4 text-purple-600">Special Items</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-gray-700">Appliances</span>
                      <span className="font-bold text-gray-900">Handling fees</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-gray-700">Tires</span>
                      <span className="font-bold text-gray-900">Per-tire fee</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-gray-700">Mattresses/box springs</span>
                      <span className="font-bold text-green-600">FREE at select sites</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mt-8">
                <p className="text-sm font-semibold mb-2">⚠️ Avoid Surprise Fees:</p>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• <strong>Tarp your load</strong> (uncovered = $50+ penalty)</li>
                  <li>• <strong>Separate recyclables</strong> for lower rates</li>
                  <li>• <strong>Confirm hours</strong> before driving</li>
                  <li>• Weekday mornings = fastest service</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* DIY vs. Hiring */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                DIY vs. Hiring a Hauler (Real-World Cost)
              </h2>

              <p className="text-lg mb-8 text-center text-gray-600 max-w-3xl mx-auto">
                A DIY dump run sounds cheap—until you factor in your time, truck/trailer, fuel, multiple trips, tarps, safety gear, and the dump fee.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-red-600">DIY Hidden Costs</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span className="text-gray-700">Truck/trailer rental: $50–$150</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span className="text-gray-700">Fuel & mileage costs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span className="text-gray-700">Your time (3–5 hours)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span className="text-gray-700">Dump fee: $70–$100+</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span className="text-gray-700">Multiple trips often needed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span className="text-gray-700">Risk of injury or property damage</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-green-600">Professional Hauler</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">All-in-one price: $100–$495</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">We do all the loading</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">We handle transport & disposal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Donation/recycling included</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Same-day service available</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Licensed, insured professionals</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Transparent Pricing</h3>
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <p className="text-3xl font-bold text-blue-600">$100</p>
                    <p className="text-sm text-gray-600">Single item pickup</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">$249</p>
                    <p className="text-sm text-gray-600">¼ load</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">$349</p>
                    <p className="text-sm text-gray-600">½ load</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">$495</p>
                    <p className="text-sm text-gray-600">Full load</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Includes loading, transport, and disposal. Donation/recycling when possible.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+16197500114"
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                  >
                    Call (619) 750-0114
                  </a>
                  <a
                    href="/contact"
                    className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                  >
                    Get Free Quote
                  </a>
                </div>
              </div>

              <p className="text-center text-gray-600 mt-6 italic">
                If your debris fills more than a small pickup or includes stairs/elevator access, hiring out is usually cheaper (and much faster) than self-hauling.
              </p>
            </div>
          </div>
        </section>

        {/* Where To Go */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                Where To Go (Driving Context)
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3 text-blue-600">Central/Coastal</h3>
                  <p className="text-gray-700 mb-2"><strong>Miramar</strong> off Convoy</p>
                  <p className="text-sm text-gray-600">20 min from Downtown outside rush hour</p>
                  <p className="text-sm text-gray-500 mt-2">Best for: <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a>, <a href="/junk-removal-pacific-beach" className="text-blue-600 hover:underline">Pacific Beach</a>, Clairemont, Kearny Mesa</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3 text-blue-600">South Bay</h3>
                  <p className="text-gray-700 mb-2"><strong>Otay</strong> east of I-805</p>
                  <p className="text-sm text-gray-600">Closest from Chula Vista/Eastlake/Otay Mesa</p>
                  <p className="text-sm text-gray-500 mt-2">Best for: <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a>, Imperial Beach, San Ysidro</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3 text-blue-600">East County</h3>
                  <p className="text-gray-700 mb-2"><strong>Sycamore</strong> via Mission Gorge</p>
                  <p className="text-sm text-gray-600">Closest for Santee/La Mesa/El Cajon</p>
                  <p className="text-sm text-gray-500 mt-2">Best for: <a href="/junk-removal-santee" className="text-blue-600 hover:underline">Santee</a>, <a href="/la-mesa-junk-removal" className="text-blue-600 hover:underline">La Mesa</a>, <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a>, <a href="/junk-removal-lakeside" className="text-blue-600 hover:underline">Lakeside</a></p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3 text-blue-600">North Inland</h3>
                  <p className="text-gray-700 mb-2"><strong>Ramona Transfer Station</strong></p>
                  <p className="text-sm text-gray-600">Ideal for Ramona/Julian/Valley Center</p>
                  <p className="text-sm text-gray-500 mt-2">Best for: North inland communities</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mt-8">
                <p className="text-sm font-semibold mb-2">🚗 Traffic Tips:</p>
                <p className="text-gray-700">Plan around Padres game traffic, beach congestion, and weekend lines. After storms, expect slower tipping-deck operations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Not Allowed */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                What's Not Allowed (and Where It Goes)
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="font-bold text-lg mb-3 text-red-600">Hazardous Waste</h3>
                  <p className="text-sm text-gray-600 mb-3">Paints, chemicals, fuels, batteries</p>
                  <p className="text-sm text-gray-700"><strong>Where:</strong> City/County HHW facilities (appointments often required)</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="font-bold text-lg mb-3 text-orange-600">E-Waste & Appliances</h3>
                  <p className="text-sm text-gray-600 mb-3">Electronics, refrigerators, washers</p>
                  <p className="text-sm text-gray-700"><strong>Where:</strong> On-site recycling areas or designated centers. See our <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">appliance removal service</a></p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="font-bold text-lg mb-3 text-green-600">Mattresses</h3>
                  <p className="text-sm text-gray-600 mb-3">Beds, box springs</p>
                  <p className="text-sm text-gray-700"><strong>Where:</strong> Free recycling sites (Miramar weekdays; Sycamore ongoing). Learn more about our <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">mattress disposal service</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - San Diego Dump Fees"
          description="Get answers to common questions about <strong>San Diego dump fees</strong>, disposal costs, and waste management regulations."
          faqs={dumpFeesFAQs}
          ctaTitle="Have Questions About San Diego Dump Fees?"
          ctaDescription="Let us handle the dump fees and disposal for you. Our transparent pricing includes all <strong>San Diego dump fees</strong> and disposal costs."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Related Junk Removal Services</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <a href="/furniture-disposal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal</h3>
                <p className="text-gray-600 text-sm">Professional furniture and couch removal with same-day service</p>
              </a>
              <a href="/couch-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2 text-blue-600">Couch Removal</h3>
                <p className="text-gray-600 text-sm">Fast sofa and sectional pickup throughout San Diego</p>
              </a>
              <a href="/san-diego-mattress-disposal" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2 text-blue-600">Mattress Disposal</h3>
                <p className="text-gray-600 text-sm">Eco-friendly mattress and box spring removal</p>
              </a>
              <a href="/appliance-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal</h3>
                <p className="text-gray-600 text-sm">Safe removal of refrigerators, washers, and all appliances</p>
              </a>
              <a href="/same-day-junk-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2 text-blue-600">Same-Day Junk Removal</h3>
                <p className="text-gray-600 text-sm">Need it gone today? We arrive within 2-4 hours</p>
              </a>
              <a href="/commercial-junk-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2 text-blue-600">Commercial Junk Removal</h3>
                <p className="text-gray-600 text-sm">Business cleanouts and office furniture removal</p>
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prefer to Skip the Dump Trip?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Our locally owned San Diego junk removal team handles loading, hauling, and disposal—with transparent pricing and same-day availability in most neighborhoods. We recycle or donate when we can.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  Call (619) 750-0114 for Fast Quote
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  Get Free Quote
                </a>
              </div>
              <p className="mt-6 text-sm text-blue-200">
                Same-day service available • Licensed & insured • Serving all San Diego County
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
