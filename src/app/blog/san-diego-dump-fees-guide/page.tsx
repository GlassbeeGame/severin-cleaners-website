import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "San Diego Dump Fees Guide 2025 | Transfer Station Costs & Locations",
  description: "Complete guide to San Diego dump fees, transfer station locations, and disposal costs. Learn what you'll pay at Miramar Landfill, Otay Landfill, and why junk removal might cost less.",
  keywords: [
    "San Diego dump fees",
    "Miramar Landfill fees",
    "Otay Landfill costs",
    "transfer station San Diego",
    "dump fees 2025",
    "San Diego disposal costs",
    "landfill prices San Diego"
  ],
  openGraph: {
    title: "San Diego Dump Fees Guide 2025 | Transfer Station Costs",
    description: "Complete guide to San Diego dump fees, locations, and disposal costs. Compare DIY vs professional junk removal.",
    url: "https://www.severinhauling.com/blog/san-diego-dump-fees-guide",
    siteName: "Severin Hauling",
    type: "article",
    locale: "en_US",
    images: [{
      url: "https://www.severinhauling.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "San Diego Dump Fees Guide 2025 - Severin Hauling"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "San Diego Dump Fees Guide 2025 | Transfer Station Costs",
    description: "Complete guide to San Diego dump fees, locations, and disposal costs. Compare DIY vs professional junk removal.",
    images: ["https://www.severinhauling.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.severinhauling.com/blog/san-diego-dump-fees-guide",
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
  },
};

export default function SanDiegoDumpFeesGuide() {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      // Article Schema
      {
        "@type": "BlogPosting",
        "headline": "San Diego Dump Fees Guide 2025: Complete Cost Breakdown & Locations",
        "description": "Complete guide to San Diego dump fees, transfer station locations, disposal costs, and comparison with professional junk removal services.",
        "image": "https://www.severinhauling.com/og-image.jpg",
        "datePublished": "2025-01-15",
        "dateModified": "2025-01-15",
        "author": {
          "@type": "Organization",
          "name": "Severin Hauling",
          "url": "https://www.severinhauling.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Severin Hauling",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.severinhauling.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.severinhauling.com/blog/san-diego-dump-fees-guide"
        }
      },
      // HowTo Schema - How to Calculate DIY Costs
      {
        "@type": "HowTo",
        "name": "How to Calculate the True Cost of a DIY Dump Run in San Diego",
        "description": "Learn how to calculate all hidden costs when taking junk to the dump yourself.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Calculate Truck Rental Cost",
            "text": "Rent a pickup truck from Home Depot or U-Haul. Typical cost: $50-$150 depending on size and rental duration.",
            "url": "https://www.severinhauling.com/blog/san-diego-dump-fees-guide#diy-costs"
          },
          {
            "@type": "HowToStep",
            "name": "Factor in Fuel Costs",
            "text": "Calculate round trip distance to the dump and back. Average gas cost for a loaded truck: $15-$30.",
            "url": "https://www.severinhauling.com/blog/san-diego-dump-fees-guide#diy-costs"
          },
          {
            "@type": "HowToStep",
            "name": "Add Landfill Dump Fees",
            "text": "San Diego landfills charge $38 minimum plus $75-$150 per ton. Typical pickup load: $70-$150.",
            "url": "https://www.severinhauling.com/blog/san-diego-dump-fees-guide#diy-costs"
          },
          {
            "@type": "HowToStep",
            "name": "Account for Uncovered Load Penalties",
            "text": "If your load isn't properly covered, expect a $50+ penalty fee at the dump.",
            "url": "https://www.severinhauling.com/blog/san-diego-dump-fees-guide#diy-costs"
          },
          {
            "@type": "HowToStep",
            "name": "Calculate Your Time Value",
            "text": "Loading, driving, unloading, and returning the truck typically takes 3-5 hours of your time.",
            "url": "https://www.severinhauling.com/blog/san-diego-dump-fees-guide#diy-costs"
          },
          {
            "@type": "HowToStep",
            "name": "Total the Costs",
            "text": "Add all costs together: Truck rental + Gas + Dump fees + Penalties = $185-$330+. Compare with professional junk removal starting at $69 (small items) or $100 (standard items).",
            "url": "https://www.severinhauling.com/blog/san-diego-dump-fees-guide#comparison"
          }
        ]
      },
      // FAQ Schema
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does it cost to dump junk at Miramar Landfill?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Miramar Landfill (Greenery) charges a $38 minimum for loads up to 300 lbs, then $75-$150+ per ton over that. A typical pickup truck load costs $70-$100. Hours are Monday-Saturday 7:00 AM - 4:30 PM. Located at 5180 Convoy St, San Diego, CA 92111. Call (858) 694-7000."
            }
          },
          {
            "@type": "Question",
            "name": "What are the hours for San Diego landfills?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "All three San Diego County landfills (Miramar, Otay, and Sycamore) are open Monday through Saturday only. Miramar and Otay: 7:00 AM - 4:30 PM. Sycamore: 7:00 AM - 4:00 PM. All are closed on Sundays. Professional junk removal services operate 7 days per week."
            }
          },
          {
            "@type": "Question",
            "name": "Is it cheaper to take junk to the dump yourself or hire junk removal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "DIY dump runs often cost more than professional junk removal when you factor in all costs. DIY: Truck rental ($50-$150) + Gas ($15-$30) + Dump fees ($70-$150) + Your time (3-5 hours) = $185-$330+. Professional junk removal: $100-$495 all-inclusive with zero time or labor from you."
            }
          },
          {
            "@type": "Question",
            "name": "What items can't you take to San Diego dumps?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "San Diego landfills prohibit hazardous waste, tires (separate facility required), batteries, electronics (e-waste recycling required), asbestos, medical waste, and liquids of any kind. Professional junk removal services can handle most of these items through proper disposal channels."
            }
          },
          {
            "@type": "Question",
            "name": "Where is the closest dump to me in San Diego?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "San Diego has three main landfills: Miramar Landfill (5180 Convoy St - serves central/north SD), Otay Landfill (1700 Maxwell Rd, Chula Vista - serves south county), and Sycamore Landfill (8514 Mast Blvd, Santee - serves east county). All charge similar fees."
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
          <article className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {/* Breadcrumbs */}
                <nav className="mb-8 text-sm">
                  <Link href="/" className="text-blue-600 hover:text-blue-700">Home</Link>
                  <span className="mx-2 text-gray-400">→</span>
                  <Link href="/blog" className="text-blue-600 hover:text-blue-700">Blog</Link>
                  <span className="mx-2 text-gray-400">→</span>
                  <span className="text-gray-600">San Diego Dump Fees Guide</span>
                </nav>

                {/* Article Meta */}
                <div className="mb-8">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    Local Resources
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    San Diego Dump Fees Guide 2025: What You'll Actually Pay
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>Updated January 15, 2025</span>
                    <span>•</span>
                    <span>7 min read</span>
                  </div>
                </div>

                {/* Quick Answer */}
                <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer</h2>
                  <p className="text-gray-700 leading-relaxed">
                    San Diego dump fees range from <strong>$70-$150+</strong> depending on load size and material type. Add truck rental ($50-$150), gas, and your time (3-5 hours), and DIY disposal often costs more than professional junk removal <strong>starting at $69 (small items) or $100 (standard items)</strong>.
                  </p>
                </div>

                {/* Main Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Planning to haul junk to the dump yourself? Understanding San Diego's dump fees, locations, and hidden costs helps you decide if DIY or <Link href="/san-diego-junk-removal" className="text-blue-600 hover:text-blue-700 font-semibold">professional junk removal</Link> saves you more money and time.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">San Diego Dump Locations & Fees (2025)</h2>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Miramar Landfill (Greenery)</h3>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
                    <div className="mb-4">
                      <p className="text-gray-700 mb-2"><strong>Address:</strong> 5180 Convoy St, San Diego, CA 92111</p>
                      <p className="text-gray-700 mb-2"><strong>Hours:</strong> Monday-Saturday 7:00 AM - 4:30 PM (Closed Sundays)</p>
                      <p className="text-gray-700 mb-2"><strong>Phone:</strong> (858) 694-7000</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-3">Disposal Fees:</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span className="text-gray-700">Minimum charge (up to 300 lbs)</span>
                          <span className="font-bold text-gray-900">$38</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-700">Per ton (over 300 lbs)</span>
                          <span className="font-bold text-gray-900">$75-$150+</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-700">Typical pickup truck load</span>
                          <span className="font-bold text-gray-900">$70-$100</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Otay Landfill</h3>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
                    <div className="mb-4">
                      <p className="text-gray-700 mb-2"><strong>Address:</strong> 1700 Maxwell Rd, Chula Vista, CA 91911</p>
                      <p className="text-gray-700 mb-2"><strong>Hours:</strong> Monday-Saturday 7:00 AM - 4:30 PM (Closed Sundays)</p>
                      <p className="text-gray-700 mb-2"><strong>Phone:</strong> (619) 409-5200</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-3">Disposal Fees:</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span className="text-gray-700">Minimum charge</span>
                          <span className="font-bold text-gray-900">$38</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-700">Per ton rate</span>
                          <span className="font-bold text-gray-900">$75-$150+</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-700"><Link href="/construction-debris-removal-san-diego" className="text-blue-600 hover:text-blue-700">Construction debris</Link> (per ton)</span>
                          <span className="font-bold text-gray-900">$100-$175</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Sycamore Landfill</h3>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-8">
                    <div className="mb-4">
                      <p className="text-gray-700 mb-2"><strong>Address:</strong> 8514 Mast Blvd, Santee, CA 92071</p>
                      <p className="text-gray-700 mb-2"><strong>Hours:</strong> Monday-Saturday 7:00 AM - 4:00 PM (Closed Sundays)</p>
                      <p className="text-gray-700 mb-2"><strong>Phone:</strong> (619) 596-5100</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-3">Disposal Fees:</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span className="text-gray-700">Minimum charge</span>
                          <span className="font-bold text-gray-900">$38</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-700">Per ton rate</span>
                          <span className="font-bold text-gray-900">$75-$150</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-gray-700 font-semibold mb-2">⚠️ Important Notes:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Fees increase for <Link href="/construction-debris-removal-san-diego" className="text-blue-600 hover:text-blue-700">construction debris</Link>, <Link href="/appliance-removal-san-diego" className="text-blue-600 hover:text-blue-700">appliances</Link>, and special waste</li>
                      <li>• Uncovered loads may incur $50+ penalty fees</li>
                      <li>• Some materials (tires, batteries, electronics) have separate fees or restrictions</li>
                      <li>• Fees are subject to change - call ahead to confirm current rates</li>
                    </ul>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Hidden Costs of DIY Dump Runs</h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    The dump fee is just one part of the total cost. Here's what most people forget:
                  </p>

                  <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden mb-8">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Cost Item</th>
                          <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Amount</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 text-gray-900">Truck rental (Home Depot/U-Haul)</td>
                          <td className="px-6 py-4 text-gray-700">$50-$150</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-900">Gas (round trip to dump)</td>
                          <td className="px-6 py-4 text-gray-700">$15-$30</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-900">Dump fee</td>
                          <td className="px-6 py-4 text-gray-700">$70-$150</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-900">Uncovered load penalty (if applicable)</td>
                          <td className="px-6 py-4 text-gray-700">$50+</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-900">Your time (3-5 hours)</td>
                          <td className="px-6 py-4 text-gray-700">Priceless</td>
                        </tr>
                        <tr className="bg-blue-50">
                          <td className="px-6 py-4 text-gray-900 font-bold">TOTAL DIY COST</td>
                          <td className="px-6 py-4 text-blue-600 font-bold text-lg">$185-$330+</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Professional Junk Removal vs DIY Dump Run</h2>

                  <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden mb-8">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Factor</th>
                          <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">DIY Dump Run</th>
                          <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Junk Removal</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 text-gray-900 font-semibold">Total Cost</td>
                          <td className="px-6 py-4 text-gray-700">$185-$330+</td>
                          <td className="px-6 py-4 text-green-600 font-bold">$100-$495</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-900 font-semibold">Your Time</td>
                          <td className="px-6 py-4 text-red-600">3-5 hours</td>
                          <td className="px-6 py-4 text-green-600">0 hours (we do it)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-900 font-semibold">Physical Labor</td>
                          <td className="px-6 py-4 text-red-600">You load, unload, lift</td>
                          <td className="px-6 py-4 text-green-600">✓ We do everything</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-900 font-semibold">Multiple Trips</td>
                          <td className="px-6 py-4 text-gray-700">Often needed</td>
                          <td className="px-6 py-4 text-green-600">One visit</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-900 font-semibold">Recycling/Donation</td>
                          <td className="px-6 py-4 text-red-600">You coordinate</td>
                          <td className="px-6 py-4 text-green-600">✓ Included</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-900 font-semibold">Risk of Injury</td>
                          <td className="px-6 py-4 text-red-600">High (heavy lifting)</td>
                          <td className="px-6 py-4 text-green-600">None</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-900 font-semibold">Dump Hours</td>
                          <td className="px-6 py-4 text-gray-700">Mon-Sat only</td>
                          <td className="px-6 py-4 text-green-600">7 days/week</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What Can't You Take to San Diego Dumps?</h2>

                  <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Prohibited Items at San Diego Landfills:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>✗ Hazardous waste (paint, chemicals, solvents)</li>
                      <li>✗ Tires (separate facility required)</li>
                      <li>✗ Batteries (recycling center only)</li>
                      <li>✗ Electronics (e-waste recycling required)</li>
                      <li>✗ Asbestos materials</li>
                      <li>✗ Medical waste</li>
                      <li>✗ Liquids of any kind</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      <strong>Note:</strong> Professional <Link href="/san-diego-junk-removal" className="text-blue-600 hover:text-blue-700 font-semibold">junk removal services</Link> can handle most of these items through proper disposal channels.
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">When DIY Makes Sense vs Professional Junk Removal</h2>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">✓ DIY Dump Run Makes Sense If:</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• You have a truck already</li>
                        <li>• It's just 1-2 small items</li>
                        <li>• You have help with heavy items</li>
                        <li>• Dump is close to your location</li>
                        <li>• You enjoy physical work</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">✓ Junk Removal Makes Sense If:</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• You value your time</li>
                        <li>• Multiple heavy items (like <Link href="/san-diego-mattress-disposal" className="text-blue-600 hover:text-blue-700">mattresses</Link> or <Link href="/scrap-metal-removal" className="text-blue-600 hover:text-blue-700">scrap metal</Link>)</li>
                        <li>• No truck available</li>
                        <li>• Need it done quickly</li>
                        <li>• Want eco-friendly disposal</li>
                      </ul>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Real Cost Comparison Examples</h2>

                  <div className="space-y-6 mb-8">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Scenario 1: Single Couch Removal</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="font-semibold text-gray-900 mb-2">DIY:</p>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>Truck rental: $75</li>
                            <li>Gas: $20</li>
                            <li>Dump fee: $38</li>
                            <li>Your time: 3 hours</li>
                            <li className="font-bold pt-2 border-t mt-2">Total: $133 + time</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 mb-2">Professional:</p>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li><Link href="/couch-removal-san-diego" className="text-blue-600 hover:text-blue-700">Couch removal</Link>: $100</li>
                            <li>Labor: Included</li>
                            <li>Disposal: Included</li>
                            <li>Your time: 0 hours</li>
                            <li className="font-bold pt-2 border-t mt-2 text-green-600">Total: $100 ✓ SAVES MONEY</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Scenario 2: Garage Cleanout</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="font-semibold text-gray-900 mb-2">DIY:</p>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>Truck rental (2 days): $200</li>
                            <li>Gas (2 trips): $40</li>
                            <li>Dump fees (2 loads): $150</li>
                            <li>Your time: 8+ hours</li>
                            <li className="font-bold pt-2 border-t mt-2">Total: $390 + time</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 mb-2">Professional:</p>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>Garage cleanout: $249-$349</li>
                            <li>All labor: Included</li>
                            <li>Disposal: Included</li>
                            <li>Your time: 0 hours</li>
                            <li className="font-bold pt-2 border-t mt-2 text-green-600">Total: $249-$349 ✓ SAVES $40-$140</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Skip the Dump - Get Professional Service</h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    For most San Diego residents, professional junk removal offers better value than DIY dump runs. You save time, avoid heavy lifting, and often pay less when you factor in all costs.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Call <a href="tel:+16197500114" className="text-blue-600 hover:text-blue-700 font-bold">(619) 750-0114</a> for a free quote. <Link href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:text-blue-700 font-semibold">Same-day service</Link> available throughout San Diego County including <Link href="/junk-removal-chula-vista" className="text-blue-600 hover:text-blue-700">Chula Vista</Link>, <Link href="/junk-removal-el-cajon" className="text-blue-600 hover:text-blue-700">El Cajon</Link>, <Link href="/la-mesa-junk-removal" className="text-blue-600 hover:text-blue-700">La Mesa</Link>, <Link href="/junk-removal-santee" className="text-blue-600 hover:text-blue-700">Santee</Link>, and <Link href="/junk-removal-oceanside" className="text-blue-600 hover:text-blue-700">Oceanside</Link>.
                  </p>
                </div>

                {/* CTA Box */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 mt-12 text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Skip the Dump - We Handle Everything</h3>
                  <p className="text-blue-100 mb-6 text-lg">
                    Professional junk removal starting at $69 (small items) or $100 (standard items) - often less than DIY when you count all costs
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
                    <Link href="/blog/how-much-does-junk-removal-cost-san-diego" className="group block border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition-all">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">Junk Removal Cost Guide</h4>
                      <p className="text-gray-600 text-sm">Complete pricing breakdown for all junk removal services</p>
                    </Link>
                    <Link href="/san-diego-dump-fees" className="group block border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition-all">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">Dump Fees Service Page</h4>
                      <p className="text-gray-600 text-sm">Learn why professional junk removal beats DIY dump runs</p>
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
