import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "How Much Does Junk Removal Cost in San Diego? (2025 Guide)",
  description: "Complete San Diego junk removal cost guide. Pricing from $100-$495, factors that affect cost, how to save money, and what's included. Free quotes available.",
  keywords: [
    "junk removal cost San Diego",
    "junk removal prices",
    "how much does junk removal cost",
    "San Diego junk hauling prices",
    "junk removal pricing 2025",
    "affordable junk removal",
    "junk removal rates"
  ],
  openGraph: {
    title: "How Much Does Junk Removal Cost in San Diego? (2025 Guide)",
    description: "Complete pricing guide for junk removal in San Diego. Learn costs, save money, and get transparent pricing.",
    url: "https://severincleaners.com/blog/how-much-does-junk-removal-cost-san-diego",
    siteName: "Severin Cleaners",
    type: "article",
    locale: "en_US",
    images: [{
      url: "https://severincleaners.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "How Much Does Junk Removal Cost in San Diego? - Severin Cleaners"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "How Much Does Junk Removal Cost in San Diego? (2025 Guide)",
    description: "Complete pricing guide for junk removal in San Diego. Learn costs, save money, and get transparent pricing.",
    images: ["https://severincleaners.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://severincleaners.com/blog/how-much-does-junk-removal-cost-san-diego",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "US-CA",
    "geo.placename": "La Mesa",
    "geo.position": "32.7678;-117.0231",
    "ICBM": "32.7678, -117.0231",
  },
};

export default function JunkRemovalCostGuide() {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      // Article Schema
      {
        "@type": "BlogPosting",
        "headline": "How Much Does Junk Removal Cost in San Diego? (2025 Complete Guide)",
        "description": "Complete San Diego junk removal cost guide with transparent pricing, cost factors, and money-saving tips.",
        "image": "https://severincleaners.com/og-image.jpg",
        "datePublished": "2025-01-15",
        "dateModified": "2025-01-15",
        "author": {
          "@type": "Organization",
          "name": "Severin Cleaners",
          "url": "https://severincleaners.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Severin Cleaners",
          "logo": {
            "@type": "ImageObject",
            "url": "https://severincleaners.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://severincleaners.com/blog/how-much-does-junk-removal-cost-san-diego"
        }
      },
      // HowTo Schema - How to Save Money
      {
        "@type": "HowTo",
        "name": "How to Save Money on Junk Removal in San Diego",
        "description": "Learn how to reduce junk removal costs through preparation and smart decisions.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Pre-Sort Your Items",
            "text": "Separate items into keep, donate, and dispose categories before the junk removal team arrives. This reduces volume and lowers costs.",
            "url": "https://severincleaners.com/blog/how-much-does-junk-removal-cost-san-diego#save-money"
          },
          {
            "@type": "HowToStep",
            "name": "Donate Usable Items Yourself",
            "text": "Take gently used furniture and items to donation centers yourself to reduce the volume that needs to be hauled.",
            "url": "https://severincleaners.com/blog/how-much-does-junk-removal-cost-san-diego#save-money"
          },
          {
            "@type": "HowToStep",
            "name": "Consolidate Items in One Location",
            "text": "Gather all junk in a garage or driveway for easy access. This speeds up the process and can reduce costs.",
            "url": "https://severincleaners.com/blog/how-much-does-junk-removal-cost-san-diego#save-money"
          },
          {
            "@type": "HowToStep",
            "name": "Schedule During Weekdays",
            "text": "Book services during weekday hours when possible for better availability and potentially lower rates.",
            "url": "https://severincleaners.com/blog/how-much-does-junk-removal-cost-san-diego#save-money"
          }
        ]
      },
      // FAQ Schema
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does junk removal cost in San Diego?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Junk removal in San Diego costs $100 to $495 depending on volume. Single items start at $100, a 1/4 load costs $249, a 1/2 load costs $349, and a full trailer load costs $495. All prices include labor, hauling, disposal fees, and eco-friendly recycling."
            }
          },
          {
            "@type": "Question",
            "name": "What's included in the junk removal price?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Junk removal pricing includes full-service labor (all heavy lifting), loading and hauling from any location on your property, San Diego dump fees and disposal costs, eco-friendly recycling and donation coordination, and cleanup after removal. There are no hidden fees."
            }
          },
          {
            "@type": "Question",
            "name": "Is junk removal cheaper than renting a dumpster?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Professional junk removal often costs less than DIY dumpster rental when you factor in all costs. Dumpster rental ($300-$600) plus truck rental ($50-$150), gas, dump fees ($70-$100+), and your time (3-5 hours) totals $420-$850+. Junk removal costs $100-$495 all-inclusive with zero time or labor from you."
            }
          },
          {
            "@type": "Question",
            "name": "How can I save money on junk removal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Save money by pre-sorting items to reduce volume, donating usable items yourself, consolidating junk in one accessible location, and scheduling during weekdays when possible. The less volume and easier the access, the lower the cost."
            }
          },
          {
            "@type": "Question",
            "name": "Do you charge extra for stairs or difficult access?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Items on the first floor are included in our base rates. Stairs, narrow hallways, or difficult access situations may require additional coordination, but we provide upfront pricing before starting work. Call (619) 750-0114 for an accurate quote."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Article Header */}
          <article className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {/* Breadcrumbs */}
                <nav className="mb-8 text-sm">
                  <Link href="/" className="text-blue-600 hover:text-blue-700">Home</Link>
                  <span className="mx-2 text-gray-400">→</span>
                  <Link href="/blog" className="text-blue-600 hover:text-blue-700">Blog</Link>
                  <span className="mx-2 text-gray-400">→</span>
                  <span className="text-gray-600">Junk Removal Cost Guide</span>
                </nav>

                {/* Article Meta */}
                <div className="mb-8">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    Pricing & Costs
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    How Much Does Junk Removal Cost in San Diego?
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>Updated January 15, 2025</span>
                    <span>•</span>
                    <span>8 min read</span>
                  </div>
                </div>

                {/* Quick Answer Box */}
                <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Junk removal in San Diego costs <strong>starting at $100</strong> depending on volume. Single items start at <strong>$100</strong>, while a full trailer load costs <strong>$495</strong>. Pricing includes labor, hauling, disposal fees, and eco-friendly recycling.
                  </p>
                </div>

                {/* Main Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    If you're planning a cleanout in San Diego, understanding junk removal costs helps you budget effectively. Unlike rental dumpsters with hidden fees, professional <Link href="/san-diego-junk-removal" className="text-blue-600 hover:text-blue-700 font-semibold">junk removal services</Link> offer transparent, all-inclusive pricing.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">San Diego Junk Removal Pricing (2025)</h2>

                  <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden mb-8">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Load Size</th>
                          <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Volume</th>
                          <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Price</th>
                          <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Examples</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 font-semibold text-gray-900">Single Item</td>
                          <td className="px-6 py-4 text-gray-700">1-2 items</td>
                          <td className="px-6 py-4 text-green-600 font-bold">$100</td>
                          <td className="px-6 py-4 text-gray-600 text-sm">Couch, <Link href="/san-diego-mattress-disposal" className="text-blue-600 hover:text-blue-700">mattress</Link>, appliance</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-semibold text-gray-900">1/4 Load</td>
                          <td className="px-6 py-4 text-gray-700">3 cubic yards</td>
                          <td className="px-6 py-4 text-green-600 font-bold">$249</td>
                          <td className="px-6 py-4 text-gray-600 text-sm">Few <Link href="/furniture-removal-san-diego" className="text-blue-600 hover:text-blue-700">furniture</Link> pieces, boxes</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-semibold text-gray-900">1/2 Load</td>
                          <td className="px-6 py-4 text-gray-700">6 cubic yards</td>
                          <td className="px-6 py-4 text-green-600 font-bold">$349</td>
                          <td className="px-6 py-4 text-gray-600 text-sm">Garage cleanout, small room</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-semibold text-gray-900">3/4 Load</td>
                          <td className="px-6 py-4 text-gray-700">9 cubic yards</td>
                          <td className="px-6 py-4 text-green-600 font-bold">$429</td>
                          <td className="px-6 py-4 text-gray-600 text-sm">Full bedroom, office cleanout</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-semibold text-gray-900">Full Load</td>
                          <td className="px-6 py-4 text-gray-700">12 cubic yards</td>
                          <td className="px-6 py-4 text-green-600 font-bold">$495</td>
                          <td className="px-6 py-4 text-gray-600 text-sm">Whole house cleanout, estate</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-gray-700 font-semibold mb-2">💡 Pro Tip:</p>
                    <p className="text-gray-700">
                      All prices include labor, loading, hauling, disposal fees, and recycling. No hidden charges or surprise fees.
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What's Included in the Price?</h2>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Unlike dumpster rentals where you do the work, professional junk removal includes:
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700"><strong>Full-service labor</strong> – We do ALL the heavy lifting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700"><strong>Loading & hauling</strong> – From any location on your property</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700"><strong><Link href="/blog/san-diego-dump-fees-guide" className="text-blue-600 hover:text-blue-700">San Diego dump fees</Link></strong> – All disposal costs covered</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700"><strong>Eco-friendly recycling</strong> – Items donated or recycled when possible</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700"><strong>Cleanup</strong> – Sweep up debris and leave area clean</span>
                    </li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Factors That Affect Junk Removal Cost</h2>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Volume of Junk</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Volume is the biggest cost factor. We measure by how much space your items take in our trailer. A single <Link href="/couch-removal-san-diego" className="text-blue-600 hover:text-blue-700 font-semibold">couch removal</Link> costs $100, while a full <Link href="/estate-cleanout-san-diego" className="text-blue-600 hover:text-blue-700 font-semibold">estate cleanout</Link> requiring multiple loads costs more.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Type of Items</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <Link href="/appliance-removal-san-diego" className="text-blue-600 hover:text-blue-700 font-semibold">Appliances</Link>, <Link href="/hot-tub-removal-san-diego" className="text-blue-600 hover:text-blue-700 font-semibold">hot tubs</Link>, and <Link href="/construction-debris-removal-san-diego" className="text-blue-600 hover:text-blue-700 font-semibold">construction debris</Link> may require special disposal, affecting final cost.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Location & Access</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Items on the first floor cost the same as our base rate. Stairs, narrow hallways, or difficult access may require additional coordination.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How to Save Money on Junk Removal</h2>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Money-Saving Tips:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span className="text-gray-700">Pre-sort items to reduce volume</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span className="text-gray-700">Donate usable items yourself first</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span className="text-gray-700">Consolidate items in one location</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span className="text-gray-700">Schedule during weekdays when possible</span>
                      </li>
                    </ul>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Junk Removal vs. Dumpster Rental Costs</h2>

                  <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden mb-8">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Cost Factor</th>
                          <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Junk Removal</th>
                          <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Dumpster Rental</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 text-gray-900 font-semibold">Base Price</td>
                          <td className="px-6 py-4 text-gray-700">$100-$495 all-in</td>
                          <td className="px-6 py-4 text-gray-700">$300-$600 rental</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-900 font-semibold">Labor</td>
                          <td className="px-6 py-4 text-green-600">✓ Included</td>
                          <td className="px-6 py-4 text-red-600">✗ You do it</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-900 font-semibold">Dump Fees</td>
                          <td className="px-6 py-4 text-green-600">✓ Included</td>
                          <td className="px-6 py-4 text-red-600">✗ Extra $50-$100+</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-900 font-semibold">Time Required</td>
                          <td className="px-6 py-4 text-gray-700">1-2 hours</td>
                          <td className="px-6 py-4 text-gray-700">3-7 days rental</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-900 font-semibold">Permits</td>
                          <td className="px-6 py-4 text-green-600">Not needed</td>
                          <td className="px-6 py-4 text-gray-700">Sometimes required</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Junk Removal Costs in San Diego</h2>

                <p className="text-lg text-gray-700 mb-6">
                  Our transparent pricing applies throughout San Diego County, including <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a>, <a href="/junk-removal-spring-valley" className="text-blue-600 hover:underline">Spring Valley</a>, <a href="/junk-removal-la-mesa" className="text-blue-600 hover:underline">La Mesa</a>, <Link href="/junk-removal-la-jolla" className="text-blue-600 hover:text-blue-700">La Jolla</Link>, <Link href="/junk-removal-pacific-beach" className="text-blue-600 hover:text-blue-700">Pacific Beach</Link>, <Link href="/junk-removal-del-mar" className="text-blue-600 hover:text-blue-700">Del Mar</Link>, <Link href="/junk-removal-chula-vista" className="text-blue-600 hover:text-blue-700">Chula Vista</Link>, <Link href="/junk-removal-oceanside" className="text-blue-600 hover:text-blue-700">Oceanside</Link>, <Link href="/junk-removal-carlsbad" className="text-blue-600 hover:text-blue-700">Carlsbad</Link>, <Link href="/junk-removal-encinitas" className="text-blue-600 hover:text-blue-700">Encinitas</Link>, <Link href="/junk-removal-poway" className="text-blue-600 hover:text-blue-700">Poway</Link>, <Link href="/junk-removal-santee" className="text-blue-600 hover:text-blue-700">Santee</Link>, <Link href="/junk-removal-escondido" className="text-blue-600 hover:text-blue-700">Escondido</Link>, <Link href="/junk-removal-vista" className="text-blue-600 hover:text-blue-700">Vista</Link>, <Link href="/junk-removal-rancho-santa-fe" className="text-blue-600 hover:text-blue-700">Rancho Santa Fe</Link>, <Link href="/junk-removal-carmel-valley" className="text-blue-600 hover:text-blue-700">Carmel Valley</Link>, <Link href="/junk-removal-point-loma" className="text-blue-600 hover:text-blue-700">Point Loma</Link>, <Link href="/junk-removal-north-park" className="text-blue-600 hover:text-blue-700">North Park</Link>, <Link href="/junk-removal-hillcrest" className="text-blue-600 hover:text-blue-700">Hillcrest</Link>, <Link href="/junk-removal-mira-mesa" className="text-blue-600 hover:text-blue-700">Mira Mesa</Link>, <Link href="/junk-removal-kearny-mesa" className="text-blue-600 hover:text-blue-700">Kearny Mesa</Link>, and <Link href="/junk-removal-clairemont" className="text-blue-600 hover:text-blue-700">Clairemont</Link>.
                </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Single Couch Removal</h3>
                      <p className="text-3xl font-bold text-green-600 mb-2">$100</p>
                      <p className="text-sm text-gray-600">Standard couch, loveseat, or recliner removal</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Refrigerator Removal</h3>
                      <p className="text-3xl font-bold text-green-600 mb-2">$100</p>
                      <p className="text-sm text-gray-600">Eco-friendly appliance disposal</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Garage Cleanout</h3>
                      <p className="text-3xl font-bold text-green-600 mb-2">$249-$349</p>
                      <p className="text-sm text-gray-600">Typical single-car <Link href="/cleanout-services-san-diego" className="text-blue-600 hover:text-blue-700">garage cleanout</Link></p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Full House Cleanout</h3>
                      <p className="text-3xl font-bold text-green-600 mb-2">$495+</p>
                      <p className="text-sm text-gray-600">Complete <Link href="/cleanout-services-san-diego" className="text-blue-600 hover:text-blue-700">property cleanout</Link>, may need multiple loads</p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Get Transparent Pricing Today</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Call <a href="tel:+16197500114" className="text-blue-600 hover:text-blue-700 font-bold">(619) 750-0114</a> for a free quote based on your specific needs. We provide upfront pricing with no hidden fees or surprises.
                  </p>
                </div>

                {/* CTA Box */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 mt-12 text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Remove Your Junk?</h3>
                  <p className="text-blue-100 mb-6 text-lg">
                    Get a free quote for <Link href="/same-day-junk-removal-san-diego" className="text-white hover:text-blue-200 underline font-semibold">same-day junk removal</Link> in San Diego
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:+16197500114"
                      className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      Call (619) 750-0114
                    </a>
                    <a
                      href="/contact"
                      className="bg-blue-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-900 transition-colors"
                    >
                      Get Free Quote
                    </a>
                  </div>
                </div>

                {/* Related Articles */}
                <div className="mt-12 pt-8 border-t-2 border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Link href="/blog/same-day-junk-removal-guide" className="group block border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition-all">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">Same Day Junk Removal Guide</h4>
                      <p className="text-gray-600 text-sm">Learn how same-day service works and what to expect</p>
                    </Link>
                    <Link href="/junk-removal-cost-san-diego" className="group block border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition-all">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">Our Pricing Page</h4>
                      <p className="text-gray-600 text-sm">View detailed pricing for all junk removal services</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
}
