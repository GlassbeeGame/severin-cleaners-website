import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import { generateAggregateRatingSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "La Mesa Dump (EDCO Station) 2026: Hours, Fees & Complete Guide",
  description: "Complete La Mesa dump guide - 2026 hours, fees, recycling buyback & directions. Open weekends! Plus: why junk removal beats DIY dump runs and dumpster rentals.",
  keywords: [
    "la mesa dump",
    "la mesa landfill",
    "la mesa dump site",
    "la mesa recycle center",
    "la mesa transfer station",
    "EDCO la mesa",
    "la mesa disposal",
    "dump near la mesa",
    "la mesa waste",
    "east county dump",
    "dump near el cajon",
    "dumpster rental la mesa",
    "dumpster rental la mesa ca"
  ],
  openGraph: {
    title: "La Mesa Dump (EDCO Station) 2026: Hours, Fees & Complete Guide",
    description: "Complete La Mesa dump guide - 2026 hours, fees, recycling buyback. Open weekends! When junk removal costs less than DIY.",
    url: "https://severincleaners.com/blog/la-mesa-dump-guide",
    siteName: "Severin Cleaners",
    type: "article",
    locale: "en_US",
    images: [{
      url: "https://severincleaners.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "La Mesa Dump Guide 2026 - EDCO Station"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "La Mesa Dump (EDCO Station) 2026: Complete Guide",
    description: "Complete La Mesa dump guide - hours, fees, recycling buyback. Open weekends! Why junk removal beats DIY.",
    images: ["https://severincleaners.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://severincleaners.com/blog/la-mesa-dump-guide",
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
    "article:published_time": "2026-01-29T08:00:00-08:00",
    "article:modified_time": "2026-01-29T08:00:00-08:00",
    "article:section": "Local Resources",
    "article:tag": "la mesa dump, edco la mesa, dump fees, junk removal, la mesa"
  },
};

export default function LaMesaDumpGuide() {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      // BreadcrumbList Schema
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://severincleaners.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://severincleaners.com/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "La Mesa Dump Guide",
            "item": "https://severincleaners.com/blog/la-mesa-dump-guide"
          }
        ]
      },
      // BlogPosting Schema
      {
        "@type": "BlogPosting",
        "headline": "La Mesa Dump (EDCO Station) 2026: Hours, Fees & Complete Guide",
        "description": "Comprehensive guide to La Mesa dump (EDCO Station) including 2026 hours, fees, recycling buyback center, accepted materials, and cost comparison with professional junk removal and dumpster rental.",
        "image": "https://severincleaners.com/og-image.jpg",
        "datePublished": "2026-01-29",
        "dateModified": "2026-01-29",
        "wordCount": 2500,
        "articleSection": "Local Resources",
        "inLanguage": "en-US",
        "keywords": ["la mesa dump", "la mesa landfill", "EDCO la mesa", "la mesa dump hours", "la mesa dump fees", "la mesa recycle center"],
        "timeRequired": "PT9M",
        "author": {
          "@type": "Organization",
          "name": "Severin Cleaners",
          "url": "https://severincleaners.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://severincleaners.com/logo.png"
          }
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
          "@id": "https://severincleaners.com/blog/la-mesa-dump-guide"
        }
      },
      // FAQPage Schema
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are La Mesa dump hours?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EDCO Station La Mesa public disposal hours: Monday-Friday 5:00 AM to 2:30 PM (note the early close!), Saturday 7:00 AM to 4:30 PM, Sunday 8:00 AM to 4:30 PM. Open all days except Thanksgiving, Christmas, and New Year's Day. The Recycling Buyback Center has different hours."
            }
          },
          {
            "@type": "Question",
            "name": "How much does it cost to dump at La Mesa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "$80 flat fee for loads under 800 lbs, $115/ton for larger loads. At $80 minimum, La Mesa is cheaper than some other San Diego County facilities. Professional junk removal starts at $69 for small items, often costing about the same when you factor in truck rental and time."
            }
          },
          {
            "@type": "Question",
            "name": "Is La Mesa dump open on Sunday?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! EDCO Station La Mesa is open Sunday 8:00 AM to 4:30 PM. This is convenient for weekend disposal. The Recycling Buyback Center is CLOSED on Sundays."
            }
          },
          {
            "@type": "Question",
            "name": "What time does La Mesa dump close?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Weekdays close at 2:30 PM (earlier than most dumps!). Weekends open until 4:30 PM. May close early on high-volume days, so call ahead if making a long trip. Professional junk removal operates all day with no early closure risk."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get paid for recycling at La Mesa dump?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! The EDCO Recycling Buyback Center pays for CRV plastics, cans, and bottles. Open Monday-Friday 7:30 AM to 12:00 PM (Noon), Saturday 8:00 AM to 4:00 PM, CLOSED Sunday. Bring your recyclables separately - you might offset some of your disposal costs!"
            }
          },
          {
            "@type": "Question",
            "name": "Is there a La Mesa landfill?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EDCO Station La Mesa is technically a transfer station, not a landfill, but locals call it 'La Mesa dump' or 'La Mesa landfill.' Located at 8184 Commercial St., La Mesa, CA."
            }
          },
          {
            "@type": "Question",
            "name": "Where can I drop off e-waste in La Mesa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EDCO Station La Mesa accepts e-waste drop-off open to the public. For batteries and sharps, you must be an EDCO customer - or use a junk removal service like Severin Cleaners that handles these items through proper disposal channels."
            }
          },
          {
            "@type": "Question",
            "name": "Should I rent a dumpster or use junk removal in La Mesa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Junk removal is usually better - same or lower cost, we do all the work, and no dumpster blocking your driveway for a week. Dumpster rental costs $300-$600+ PLUS dump fees PLUS 8-12 hours of your labor. Professional junk removal costs $100-$495 all-in with zero work from you."
            }
          },
          {
            "@type": "Question",
            "name": "What's the difference between La Mesa dump and Santee dump?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "La Mesa (EDCO) is open Sundays and has a recycling buyback center where you get paid for CRV items. Santee (Sycamore) has longer weekday hours (until 4:30 PM vs 2:30 PM) but is closed Sundays. Both have similar pricing. Professional junk removal eliminates the trip to either facility."
            }
          }
        ]
      },
      // HowTo Schema
      {
        "@type": "HowTo",
        "name": "How to Dispose of Junk at La Mesa Dump",
        "description": "Step-by-step guide for using EDCO Station La Mesa transfer station",
        "totalTime": "PT2H30M",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Rent or borrow a truck",
            "text": "Rent a pickup truck ($75-$150) or borrow one. Must have secured load and tarp."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Load your junk",
            "text": "Load items into truck bed. Heavy lifting required. Secure and tarp load ($20 for tarp if needed)."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Drive to EDCO Station",
            "text": "Navigate to 8184 Commercial St., La Mesa. Budget 30-60 min for driving and waiting. Must arrive before 2:30 PM on weekdays!"
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Weigh and pay",
            "text": "Weigh in at entrance. Pay $80 minimum (under 800 lbs) or $115/ton. Cash, card, or check accepted."
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Unload yourself",
            "text": "Drive to designated area. Unload all items yourself. More heavy lifting."
          },
          {
            "@type": "HowToStep",
            "position": 6,
            "name": "Return truck and clean up",
            "text": "Drive back, return rental truck, clean up. Total time: 2-3 hours plus your physical labor."
          }
        ]
      },
      // CivicStructure Schema
      {
        "@type": "CivicStructure",
        "name": "EDCO Station - La Mesa",
        "alternateName": ["La Mesa dump", "La Mesa landfill", "La Mesa transfer station"],
        "description": "Public disposal site and recycling buyback center serving La Mesa and East San Diego County",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "8184 Commercial St",
          "addressLocality": "La Mesa",
          "addressRegion": "CA",
          "postalCode": "91942",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "32.7678",
          "longitude": "-117.0231"
        },
        "telephone": "(619) 287-7555",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "05:00",
            "closes": "14:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "07:00",
            "closes": "16:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "08:00",
            "closes": "16:30"
          }
        ]
      },
      // LocalBusiness Schema (Severin Cleaners)
      {
        "@type": "LocalBusiness",
        "@id": "https://severincleaners.com/#business",
        "name": "Severin Cleaners",
        "description": "Professional junk removal serving La Mesa, El Cajon, and East San Diego County. Same-day service available.",
        "image": [
          "https://severincleaners.com/optimized/couchwithlogo.jpg",
          "https://severincleaners.com/optimized/toiletteam.jpg",
          "https://severincleaners.com/optimized/commercial.jpg"
        ],
        "logo": "https://severincleaners.com/logo.png",
        "telephone": "+1-619-750-0114",
        "email": "severincleaners@gmail.com",
        "url": "https://severincleaners.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "8900 Grossmont Blvd, Suite 1",
          "addressLocality": "La Mesa",
          "addressRegion": "CA",
          "postalCode": "91941",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "32.7781",
          "longitude": "-117.0229"
        },
        "priceRange": "$$",
        "areaServed": [
          {
            "@type": "City",
            "name": "La Mesa"
          },
          {
            "@type": "City",
            "name": "El Cajon"
          },
          {
            "@type": "City",
            "name": "Santee"
          },
          {
            "@type": "City",
            "name": "Spring Valley"
          },
          {
            "@type": "City",
            "name": "Lemon Grove"
          }
        ],
        "openingHours": "Mo-Su 00:00-23:59",
        "aggregateRating": generateAggregateRatingSchema()
      },
      // Service Schema
      {
        "@type": "Service",
        "serviceType": "Junk Removal",
        "name": "Junk Removal Service in La Mesa",
        "description": "Professional junk removal alternative to DIY dump runs and dumpster rental in La Mesa and East County",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Severin Cleaners"
        },
        "areaServed": {
          "@type": "City",
          "name": "La Mesa",
          "containedInPlace": {
            "@type": "State",
            "name": "California"
          }
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "69",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "69",
            "maxPrice": "495",
            "priceCurrency": "USD"
          }
        }
      },
      // ItemList Schema
      {
        "@type": "ItemList",
        "name": "Related San Diego Dump and Junk Removal Resources",
        "description": "Helpful guides for dump fees, junk removal, and waste disposal in San Diego County",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Article",
              "name": "San Diego Dump Fees Guide",
              "url": "https://severincleaners.com/blog/san-diego-dump-fees-guide"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Article",
              "name": "Santee Dump Guide",
              "url": "https://severincleaners.com/blog/santee-dump-guide"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Article",
              "name": "Dumpster Rental San Diego Alternatives",
              "url": "https://severincleaners.com/blog/dumpster-rental-san-diego-alternatives"
            }
          }
        ]
      }
    ]
  };

  const nearbyLocations = [
    { name: "Junk Removal La Mesa", slug: "/junk-removal-la-mesa" },
    { name: "Junk Removal El Cajon", slug: "/junk-removal-el-cajon" },
    { name: "Junk Removal Santee", slug: "/junk-removal-santee" },
    { name: "Junk Removal Spring Valley", slug: "/junk-removal-spring-valley" },
    { name: "Junk Removal Lemon Grove", slug: "/junk-removal-lemon-grove" }
  ];

  const serviceItems = [
    { name: "Furniture Disposal", slug: "/furniture-disposal-san-diego" },
    { name: "Mattress Disposal", slug: "/san-diego-mattress-disposal" },
    { name: "Appliance Removal", slug: "/appliance-removal-san-diego" },
    { name: "Estate Cleanout", slug: "/estate-cleanout-san-diego" },
    { name: "Construction Debris", slug: "/construction-debris-removal-san-diego" }
  ];

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  La Mesa Dump (EDCO Station) 2026: Hours, Fees & Complete Guide
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  Complete guide to EDCO Station La Mesa - hours, fees, recycling buyback, and why junk removal often costs less than DIY
                </p>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Main Column */}
                  <div className="lg:col-span-2">

                    {/* Quick Info Box */}
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">La Mesa Dump Quick Info</h2>
                      <div className="space-y-3 text-gray-700">
                        <p><strong>Official Name:</strong> EDCO Station – La Mesa</p>
                        <p><strong>Address:</strong> 8184 Commercial St., La Mesa, CA 91942</p>
                        <p><strong>Phone:</strong> <a href="tel:6192877555" className="text-blue-600 hover:underline">(619) 287-7555</a></p>
                        <p><strong>Hours:</strong> Mon-Fri 5AM-2:30PM, Sat 7AM-4:30PM, Sun 8AM-4:30PM</p>
                        <p><strong>Key Fee:</strong> $80 under 800 lbs, $115/ton over</p>
                        <p><strong>Special Feature:</strong> Recycling Buyback Center (get paid for CRV items!)</p>
                      </div>
                    </div>

                    {/* Quick Answer Section */}
                    <div className="prose prose-lg max-w-none mb-12">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        <strong>EDCO Station La Mesa</strong> (commonly called "La Mesa dump" or "La Mesa landfill") is open 7 days including weekends, with unique early weekday hours starting at 5 AM but closing at 2:30 PM. Fees are $80 for most loads under 800 lbs, with a unique <strong>Recycling Buyback Center</strong> where you can GET PAID for CRV items. However, when you factor in truck rental ($75-$150), gas ($10-$15), and especially your time (2-3 hours), <Link href="/junk-removal-la-mesa" className="text-blue-600 hover:underline font-semibold">professional junk removal starting at $69</Link> often costs about the same with zero work from you.
                      </p>
                    </div>

                    {/* La Mesa Dump Hours 2026 */}
                    <div className="mb-12">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">La Mesa Dump Hours (2026)</h2>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Public Disposal Site Hours</h3>
                      <div className="overflow-x-auto mb-6">
                        <table className="min-w-full bg-white border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="py-3 px-4 text-left font-bold text-gray-900 border-b">Day</th>
                              <th className="py-3 px-4 text-left font-bold text-gray-900 border-b">Hours</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="py-3 px-4 text-gray-700">Monday - Friday</td>
                              <td className="py-3 px-4 text-gray-700"><strong>5:00 AM to 2:30 PM</strong></td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 text-gray-700">Saturday</td>
                              <td className="py-3 px-4 text-gray-700">7:00 AM to 4:30 PM</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-gray-700">Sunday</td>
                              <td className="py-3 px-4 text-gray-700">8:00 AM to 4:30 PM</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r mb-6">
                        <p className="text-sm text-gray-700">
                          <strong>⚠️ Important:</strong> La Mesa dump opens at 5 AM on weekdays - great for early birds! But it <strong>closes at 2:30 PM</strong> on weekdays - much earlier than most dumps. Plan accordingly! Professional junk removal operates all day with no early closure risk.
                        </p>
                      </div>

                      <div className="space-y-3 text-gray-700 mb-6">
                        <p><strong>Holiday Closures:</strong> EDCO Station La Mesa is CLOSED on Thanksgiving, Christmas, and New Year's Day. Open all other days.</p>
                        <p><strong>Warning:</strong> Subject to early closure on high-volume days. Call ahead if making a long trip: <a href="tel:6192877555" className="text-blue-600 hover:underline">(619) 287-7555</a></p>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Recycling Buyback Center Hours (Different Hours!)</h3>
                      <div className="overflow-x-auto mb-6">
                        <table className="min-w-full bg-white border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="py-3 px-4 text-left font-bold text-gray-900 border-b">Day</th>
                              <th className="py-3 px-4 text-left font-bold text-gray-900 border-b">Hours</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="py-3 px-4 text-gray-700">Monday - Friday</td>
                              <td className="py-3 px-4 text-gray-700">7:30 AM to 12:00 PM (Noon)</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 text-gray-700">Saturday</td>
                              <td className="py-3 px-4 text-gray-700">8:00 AM to 4:00 PM</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-gray-700">Sunday</td>
                              <td className="py-3 px-4 text-gray-700"><strong>CLOSED</strong></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-gray-700">
                        <strong>Buyback Center Closed:</strong> New Year's Day, Memorial Day, Fourth of July, Labor Day, Thanksgiving, Christmas
                      </p>
                    </div>

                    {/* La Mesa Dump Fees 2026 */}
                    <div className="mb-12">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">La Mesa Dump Fees (2026)</h2>

                      <div className="overflow-x-auto mb-6">
                        <table className="min-w-full bg-white border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="py-3 px-4 text-left font-bold text-gray-900 border-b">Material Type</th>
                              <th className="py-3 px-4 text-center font-bold text-gray-900 border-b">Under 800 lbs</th>
                              <th className="py-3 px-4 text-center font-bold text-gray-900 border-b">Over 800 lbs</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="py-3 px-4 text-gray-700">Trash</td>
                              <td className="py-3 px-4 text-center text-gray-700">$80 flat fee</td>
                              <td className="py-3 px-4 text-center text-gray-700">$115 per ton</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 text-gray-700">Green waste</td>
                              <td className="py-3 px-4 text-center text-gray-700">$80 flat fee</td>
                              <td className="py-3 px-4 text-center text-gray-700">$115 per ton</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 text-gray-700">Organics</td>
                              <td className="py-3 px-4 text-center text-gray-700">$80 flat fee</td>
                              <td className="py-3 px-4 text-center text-gray-700">$115 per ton</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 text-gray-700">Clean green</td>
                              <td className="py-3 px-4 text-center text-gray-700">$80 flat fee</td>
                              <td className="py-3 px-4 text-center text-gray-700">$115 per ton</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-gray-700">Certified waste</td>
                              <td className="py-3 px-4 text-center text-gray-700">$80 flat fee</td>
                              <td className="py-3 px-4 text-center text-gray-700">$115 per ton</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r mb-6">
                        <p className="text-sm text-gray-700">
                          <strong>💰 Good News:</strong> At $80 minimum, La Mesa's dump fee is LOWER than Escondido's $95! However, professional junk removal starts at $69 - potentially even cheaper when you skip the truck rental.
                        </p>
                      </div>

                      <div className="space-y-3 text-gray-700">
                        <p><strong>Payment Methods:</strong> Visa, MasterCard, Cash, Check</p>
                        <p><strong>Public Scale Available:</strong> For Weighmaster Certificates</p>
                      </div>
                    </div>

                    {/* La Mesa Recycle Center & Buyback */}
                    <div className="mb-12">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">La Mesa Recycle Center & Buyback</h2>

                      <p className="text-lg text-gray-700 mb-6">
                        This is a <strong>unique feature</strong> of EDCO Station La Mesa - the Recycling Buyback Center where you can <strong>GET PAID</strong> for recyclables! This sets La Mesa apart from many other San Diego County transfer stations.
                      </p>

                      <h3 className="text-xl font-bold text-gray-900 mb-4">Items Accepted for Cash Payment (CRV)</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                        <li>CRV glass bottles and jars</li>
                        <li>CRV aluminum cans</li>
                        <li>CRV plastic bottles (check for CRV marking)</li>
                      </ul>

                      <h3 className="text-xl font-bold text-gray-900 mb-4">Donation Items Accepted</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                        <li>Paper and cardboard</li>
                        <li>Non-CRV containers (donation value only)</li>
                      </ul>

                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r mb-6">
                        <p className="text-sm text-gray-700">
                          <strong>💡 Pro Tip:</strong> Bring your recyclables separately from your trash disposal! You might offset some of your $80 disposal fee with CRV buyback cash. Best on Saturday when both facilities have longer hours.
                        </p>
                      </div>

                      <p className="text-gray-700">
                        <strong>Buyback Center Hours:</strong> Monday-Friday 7:30 AM to Noon, Saturday 8:00 AM to 4:00 PM, CLOSED Sunday
                      </p>
                    </div>

                    {/* Free Drop-Off Services */}
                    <div className="mb-12">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">Free Drop-Off Services at EDCO La Mesa</h2>

                      <div className="space-y-4 text-gray-700">
                        <div className="border-l-4 border-green-500 pl-4">
                          <p className="font-bold">✓ E-waste drop-off</p>
                          <p className="text-sm">Open to public - electronics, computers, TVs, etc.</p>
                        </div>

                        <div className="border-l-4 border-green-500 pl-4">
                          <p className="font-bold">✓ Used motor oil drop-off</p>
                          <p className="text-sm">Certified drop-off location</p>
                        </div>

                        <div className="border-l-4 border-green-500 pl-4">
                          <p className="font-bold">✓ Fat, Oil, Grease (FOG) drop-off</p>
                          <p className="text-sm">Available for proper disposal</p>
                        </div>

                        <div className="border-l-4 border-yellow-500 pl-4">
                          <p className="font-bold">⚠️ Household battery drop-off</p>
                          <p className="text-sm">EDCO customers only</p>
                        </div>

                        <div className="border-l-4 border-yellow-500 pl-4">
                          <p className="font-bold">⚠️ Sharps drop-off</p>
                          <p className="text-sm">EDCO customers only</p>
                        </div>
                      </div>

                      <div className="mt-6 bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r">
                        <p className="text-sm text-gray-700">
                          <strong>Not an EDCO customer?</strong> Professional junk removal services like <Link href="/junk-removal-la-mesa" className="text-blue-600 hover:underline">Severin Cleaners</Link> can handle batteries and sharps through proper disposal channels - no EDCO customer status required. Call <a href="tel:6197500114" className="text-blue-600 hover:underline">(619) 750-0114</a>.
                        </p>
                      </div>
                    </div>

                    {/* What You Can Bring */}
                    <div className="mb-12">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">What You Can Bring to La Mesa Dump</h2>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h3 className="font-bold text-gray-900 mb-3">✓ Accepted Materials</h3>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• Household trash</li>
                            <li>• Green waste</li>
                            <li>• Organics</li>
                            <li>• Clean green</li>
                            <li>• Construction debris (certified waste)</li>
                            <li>• Recyclables (CRV - get paid!)</li>
                            <li>• E-waste</li>
                            <li>• Used motor oil</li>
                          </ul>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg">
                          <h3 className="font-bold text-gray-900 mb-3">✗ Restrictions</h3>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• Batteries (EDCO customers only)</li>
                            <li>• Sharps (EDCO customers only)</li>
                            <li>• Hazardous materials not listed</li>
                            <li>• Check with facility for specific items</li>
                          </ul>
                        </div>
                      </div>

                      <p className="text-gray-700 mt-6">
                        <Link href="/junk-removal-la-mesa" className="text-blue-600 hover:underline font-semibold">Severin Cleaners</Link> can handle most items through proper disposal channels, including items restricted to EDCO customers.
                      </p>
                    </div>

                    {/* Directions */}
                    <div className="mb-12">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">Directions to La Mesa Dump</h2>

                      <div className="space-y-6 text-gray-700">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">From I-8 Eastbound:</h3>
                          <ol className="list-decimal pl-6 space-y-2">
                            <li>Take the <strong>SPRING ST.</strong> exit towards DOWNTOWN</li>
                            <li>Keep LEFT at the first fork in the ramp</li>
                            <li>Keep LEFT at the second fork in the ramp</li>
                            <li>Keep RIGHT at the third fork in the ramp</li>
                            <li>Turn RIGHT onto CENTER ST.</li>
                            <li>Turn LEFT onto COMMERCIAL ST.</li>
                            <li>EDCO Station is on your left</li>
                          </ol>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">From I-8 Westbound:</h3>
                          <ol className="list-decimal pl-6 space-y-2">
                            <li>Take the <strong>EL CAJON BLVD.</strong> exit</li>
                            <li>Keep RIGHT at the fork in the ramp</li>
                            <li>Turn RIGHT onto CENTER ST.</li>
                            <li>Turn LEFT onto COMMERCIAL ST.</li>
                            <li>EDCO Station is on your left</li>
                          </ol>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r">
                          <p className="text-sm">
                            <strong>Location Tip:</strong> EDCO Station is in La Mesa's industrial loop, a short distance west of Dixieline. Enter next to Up & Down Garage Doors. Look for the sign!
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* DIY Cost Comparison */}
                    <div className="mb-12">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">Is a DIY Dump Run to La Mesa Worth It?</h2>

                      <p className="text-lg text-gray-700 mb-6">
                        Let's break down the <strong>real cost</strong> of taking junk to the La Mesa dump yourself versus calling a professional junk removal service.
                      </p>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Scenario: Weekend Garage Cleanout (~600 lbs)</h3>

                      <div className="overflow-x-auto mb-8">
                        <table className="min-w-full bg-white border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="py-3 px-4 text-left font-bold text-gray-900 border-b">Cost Factor</th>
                              <th className="py-3 px-4 text-center font-bold text-gray-900 border-b">DIY to La Mesa Dump</th>
                              <th className="py-3 px-4 text-center font-bold text-gray-900 border-b">Professional Junk Removal</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="py-3 px-4 text-gray-700">Truck rental</td>
                              <td className="py-3 px-4 text-center text-gray-700">$75-$150</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">$0</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 text-gray-700">Gas (round trip)</td>
                              <td className="py-3 px-4 text-center text-gray-700">$10-$15</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">$0</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 text-gray-700">La Mesa dump fee</td>
                              <td className="py-3 px-4 text-center text-gray-700">$80</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">$0</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 text-gray-700">Tarp (if needed)</td>
                              <td className="py-3 px-4 text-center text-gray-700">$20</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">$0</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 text-gray-700">Your time</td>
                              <td className="py-3 px-4 text-center text-gray-700">2-3 hours</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">0 hours</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 text-gray-700">Physical labor</td>
                              <td className="py-3 px-4 text-center text-gray-700">All you</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">None</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="py-3 px-4 font-bold text-gray-900">TOTAL</td>
                              <td className="py-3 px-4 text-center font-bold text-gray-900">$185-$265 + your time</td>
                              <td className="py-3 px-4 text-center font-bold text-green-600">$149-$349 all-in</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Scenario: Weekday Disposal (Remember: Closes at 2:30 PM!)</h3>

                      <div className="overflow-x-auto mb-6">
                        <table className="min-w-full bg-white border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="py-3 px-4 text-left font-bold text-gray-900 border-b">Challenge</th>
                              <th className="py-3 px-4 text-center font-bold text-gray-900 border-b">DIY</th>
                              <th className="py-3 px-4 text-center font-bold text-gray-900 border-b">Professional</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="py-3 px-4 text-gray-700">Must arrive before 2:30 PM</td>
                              <td className="py-3 px-4 text-center text-red-600">✓ Take time off work?</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">We work around YOUR schedule</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 text-gray-700">Risk of early closure</td>
                              <td className="py-3 px-4 text-center text-red-600">✓ Wasted trip possible</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">Guaranteed appointment</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-gray-700">Weekend availability</td>
                              <td className="py-3 px-4 text-center text-gray-700">Wait until Saturday/Sunday</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">Available all week</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r">
                        <p className="text-gray-700 mb-4">
                          <strong>The Verdict:</strong> When you factor in truck rental, gas, dump fees, tarp, and especially your TIME, professional junk removal is often the same price or less - with zero work from you.
                        </p>
                        <p className="text-gray-700">
                          <Link href="/junk-removal-la-mesa" className="text-blue-600 hover:underline font-semibold">Severin Cleaners</Link> starts at $69 for small items, $100 for standard furniture. No 2:30 PM cutoff, no early closure risk, no heavy lifting. Call <a href="tel:6197500114" className="text-blue-600 hover:underline font-bold">(619) 750-0114</a> for same-day service.
                        </p>
                      </div>
                    </div>

                    {/* Dumpster Rental Section */}
                    <div className="mb-12">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">Considering Dumpster Rental in La Mesa? Read This First</h2>

                      <p className="text-lg text-gray-700 mb-6">
                        If you're searching for <strong>dumpster rental La Mesa</strong> or <strong>dumpster rental La Mesa CA</strong>, you should know the full cost before making a decision.
                      </p>

                      <h3 className="text-xl font-bold text-gray-900 mb-4">What Dumpster Rental Actually Costs:</h3>
                      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                        <li><strong>Rental fee:</strong> $300-$600+ for 3-7 days</li>
                        <li><strong>PLUS dump fees:</strong> $80-$200+ when it's hauled to La Mesa dump</li>
                        <li><strong>PLUS all the loading:</strong> 8-12 hours of YOUR labor loading the dumpster</li>
                        <li><strong>PLUS driveway blocked:</strong> Dumpster sits in your way for 3-7 days</li>
                        <li><strong>PLUS overage fees:</strong> If you exceed weight limit (common!)</li>
                      </ul>

                      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">A Better Alternative: Professional Junk Removal</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li>✓ <strong>All-inclusive pricing:</strong> $100-$495 total (no hidden fees)</li>
                          <li>✓ <strong>We do ALL the lifting:</strong> Zero work from you</li>
                          <li>✓ <strong>Done in 1-2 hours:</strong> No dumpster blocking your driveway for a week</li>
                          <li>✓ <strong>Same-day available:</strong> Call before 2 PM, we're there today</li>
                          <li>✓ <strong>Lower minimum than the dump:</strong> Starting at $69 vs La Mesa's $80</li>
                        </ul>
                      </div>

                      <p className="text-gray-700">
                        Learn more: <Link href="/blog/dumpster-rental-san-diego-alternatives" className="text-blue-600 hover:underline font-semibold">Dumpster Rental San Diego: Why Junk Removal Is the Better Alternative</Link>
                      </p>
                    </div>

                    {/* When DIY Makes Sense */}
                    <div className="mb-12">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">When DIY to La Mesa Dump Makes Sense</h2>

                      <p className="text-gray-700 mb-6">
                        We believe in being honest with you. Here are scenarios where a DIY dump run to EDCO Station La Mesa might make sense:
                      </p>

                      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                        <li><strong>You already own a truck</strong> and just have 1-2 small items</li>
                        <li><strong>You want to use the buyback center</strong> to get paid for CRV recyclables (unique to La Mesa!)</li>
                        <li><strong>You're an early bird</strong> and can make the 5 AM weekday opening</li>
                        <li><strong>You live within 10 minutes</strong> of 8184 Commercial St.</li>
                        <li><strong>You enjoy the physical work</strong> and have the time</li>
                      </ul>

                      <p className="text-gray-700 mb-4">
                        But for most La Mesa residents, here's why professionals save you time and money:
                      </p>

                      <ul className="list-disc pl-6 space-y-3 text-gray-700">
                        <li>No 2:30 PM weekday cutoff to rush against</li>
                        <li>No risk of early closure on busy days</li>
                        <li>No truck rental costs ($75-$150 saved)</li>
                        <li>No heavy lifting or physical strain</li>
                        <li>We handle items restricted to EDCO customers (batteries, sharps)</li>
                        <li>Often costs LESS when you factor in all DIY costs</li>
                      </ul>
                    </div>

                    {/* Junk Removal Services */}
                    <div className="mb-12">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">Junk Removal Services in La Mesa</h2>

                      <p className="text-lg text-gray-700 mb-6">
                        <Link href="/junk-removal-la-mesa" className="text-blue-600 hover:underline font-semibold">Severin Cleaners</Link> provides professional junk removal throughout La Mesa, El Cajon, Santee, Spring Valley, Lemon Grove, and East San Diego County - offering a better alternative to DIY dump runs and dumpster rental.
                      </p>

                      <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Professional Junk Removal:</h3>

                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-green-50 p-5 rounded-lg">
                          <h4 className="font-bold text-gray-900 mb-3">✓ Convenience</h4>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• No 2:30 PM weekday cutoff</li>
                            <li>• No early closure risk</li>
                            <li>• Available 7 days/week</li>
                            <li>• Same-day service available</li>
                          </ul>
                        </div>

                        <div className="bg-blue-50 p-5 rounded-lg">
                          <h4 className="font-bold text-gray-900 mb-3">✓ Cost Savings</h4>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• Lower minimum ($69 vs $80)</li>
                            <li>• No truck rental needed</li>
                            <li>• No gas or tarp costs</li>
                            <li>• All-inclusive pricing</li>
                          </ul>
                        </div>

                        <div className="bg-purple-50 p-5 rounded-lg">
                          <h4 className="font-bold text-gray-900 mb-3">✓ Zero Work</h4>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• We do all the lifting</li>
                            <li>• No loading required</li>
                            <li>• No driving/waiting</li>
                            <li>• Done in 1-2 hours</li>
                          </ul>
                        </div>

                        <div className="bg-orange-50 p-5 rounded-lg">
                          <h4 className="font-bold text-gray-900 mb-3">✓ More Accepted</h4>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• Batteries (non-EDCO customers)</li>
                            <li>• Sharps (non-EDCO customers)</li>
                            <li>• Proper disposal channels</li>
                            <li>• Licensed & insured</li>
                          </ul>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Comparison</h3>
                      <div className="overflow-x-auto mb-8">
                        <table className="min-w-full bg-white border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="py-3 px-4 text-left font-bold text-gray-900 border-b">Feature</th>
                              <th className="py-3 px-4 text-center font-bold text-gray-900 border-b">EDCO La Mesa</th>
                              <th className="py-3 px-4 text-center font-bold text-gray-900 border-b">Severin Cleaners</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="py-3 px-4 text-gray-700">Minimum cost</td>
                              <td className="py-3 px-4 text-center text-gray-700">$80</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">$69</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 text-gray-700">Weekday availability</td>
                              <td className="py-3 px-4 text-center text-gray-700">Until 2:30 PM only</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">All day</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 text-gray-700">You do lifting</td>
                              <td className="py-3 px-4 text-center text-red-600">✓ Yes</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">❌ We do it</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 text-gray-700">Early closure risk</td>
                              <td className="py-3 px-4 text-center text-red-600">✓ On busy days</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">❌ Guaranteed appt</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 text-gray-700">Battery/sharps disposal</td>
                              <td className="py-3 px-4 text-center text-gray-700">EDCO customers only</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">✓ Anyone</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-gray-700">Your time</td>
                              <td className="py-3 px-4 text-center text-gray-700">2-3 hours</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">0 hours</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl text-center">
                        <h3 className="text-2xl font-bold mb-4">SKIP THE LA MESA DUMP - WE HANDLE EVERYTHING</h3>
                        <ul className="space-y-2 mb-6 text-left max-w-2xl mx-auto">
                          <li>✓ Same-day junk removal for La Mesa & East County</li>
                          <li>✓ No 2:30 PM cutoff - we work YOUR schedule</li>
                          <li>✓ Starting at $69 (less than the dump's $80 minimum!)</li>
                          <li>✓ We take items restricted to EDCO customers</li>
                        </ul>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                          <a
                            href="tel:6197500114"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center"
                          >
                            📞 CALL NOW: (619) 750-0114
                          </a>
                          <Link
                            href="/contact"
                            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                          >
                            Get Free Quote
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* La Mesa vs Santee Comparison */}
                    <div className="mb-12">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">La Mesa Dump vs. Santee Dump - Which is Closer?</h2>

                      <p className="text-gray-700 mb-6">
                        Both La Mesa (EDCO Station) and <Link href="/blog/santee-dump-guide" className="text-blue-600 hover:underline">Santee dump (Sycamore Landfill)</Link> serve East County. Here's how they compare:
                      </p>

                      <div className="overflow-x-auto mb-6">
                        <table className="min-w-full bg-white border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="py-3 px-4 text-left font-bold text-gray-900 border-b">Factor</th>
                              <th className="py-3 px-4 text-center font-bold text-gray-900 border-b">EDCO La Mesa</th>
                              <th className="py-3 px-4 text-center font-bold text-gray-900 border-b">Sycamore Santee</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="py-3 px-4 text-gray-700">Address</td>
                              <td className="py-3 px-4 text-center text-gray-700">8184 Commercial St</td>
                              <td className="py-3 px-4 text-center text-gray-700">8514 Mast Blvd</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 text-gray-700">Minimum fee</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">$80</td>
                              <td className="py-3 px-4 text-center text-gray-700">~$76</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 text-gray-700">Sunday hours</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">OPEN (8AM-4:30PM)</td>
                              <td className="py-3 px-4 text-center text-red-600">CLOSED</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 text-gray-700">Weekday close</td>
                              <td className="py-3 px-4 text-center text-red-600">2:30 PM</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">4:30 PM</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-gray-700">Recycling buyback</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">✓ Yes (get paid!)</td>
                              <td className="py-3 px-4 text-center text-red-600">❌ No</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r mb-6">
                        <p className="text-sm text-gray-700">
                          <strong>Recommendation:</strong> La Mesa is better for weekends (open Sunday!) and if you have recyclables to sell. Santee has longer weekday hours if you can't make La Mesa's 2:30 PM cutoff. Either way, <Link href="/junk-removal-la-mesa" className="text-blue-600 hover:underline font-semibold">professional junk removal</Link> saves you the trip entirely.
                        </p>
                      </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="mb-12">
                      <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>

                      <div className="space-y-4">
                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">What are La Mesa dump hours?</h3>
                            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </summary>
                          <div className="px-6 py-4 bg-white">
                            <p className="text-gray-700 leading-relaxed">
                              EDCO Station La Mesa public disposal hours: Monday-Friday 5:00 AM to 2:30 PM (note the early close!), Saturday 7:00 AM to 4:30 PM, Sunday 8:00 AM to 4:30 PM. Open all days except Thanksgiving, Christmas, and New Year's Day. The Recycling Buyback Center has different hours.
                            </p>
                          </div>
                        </details>

                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">How much does it cost to dump at La Mesa?</h3>
                            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </summary>
                          <div className="px-6 py-4 bg-white">
                            <p className="text-gray-700 leading-relaxed">
                              $80 flat fee for loads under 800 lbs, $115/ton for larger loads. At $80 minimum, La Mesa is cheaper than some other San Diego County facilities. Professional junk removal starts at $69 for small items, often costing about the same when you factor in truck rental and time.
                            </p>
                          </div>
                        </details>

                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">Is La Mesa dump open on Sunday?</h3>
                            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </summary>
                          <div className="px-6 py-4 bg-white">
                            <p className="text-gray-700 leading-relaxed">
                              Yes! EDCO Station La Mesa is open Sunday 8:00 AM to 4:30 PM. This is convenient for weekend disposal. The Recycling Buyback Center is CLOSED on Sundays.
                            </p>
                          </div>
                        </details>

                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">What time does La Mesa dump close?</h3>
                            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </summary>
                          <div className="px-6 py-4 bg-white">
                            <p className="text-gray-700 leading-relaxed">
                              Weekdays close at 2:30 PM (earlier than most dumps!). Weekends open until 4:30 PM. May close early on high-volume days, so call ahead if making a long trip. Professional junk removal operates all day with no early closure risk.
                            </p>
                          </div>
                        </details>

                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">Can I get paid for recycling at La Mesa dump?</h3>
                            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </summary>
                          <div className="px-6 py-4 bg-white">
                            <p className="text-gray-700 leading-relaxed">
                              Yes! The EDCO Recycling Buyback Center pays for CRV plastics, cans, and bottles. Open Monday-Friday 7:30 AM to 12:00 PM (Noon), Saturday 8:00 AM to 4:00 PM, CLOSED Sunday. Bring your recyclables separately - you might offset some of your disposal costs!
                            </p>
                          </div>
                        </details>

                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">Is there a La Mesa landfill?</h3>
                            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </summary>
                          <div className="px-6 py-4 bg-white">
                            <p className="text-gray-700 leading-relaxed">
                              EDCO Station La Mesa is technically a transfer station, not a landfill, but locals call it "La Mesa dump" or "La Mesa landfill." Located at 8184 Commercial St., La Mesa, CA.
                            </p>
                          </div>
                        </details>

                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">Where can I drop off e-waste in La Mesa?</h3>
                            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </summary>
                          <div className="px-6 py-4 bg-white">
                            <p className="text-gray-700 leading-relaxed">
                              EDCO Station La Mesa accepts e-waste drop-off open to the public. For batteries and sharps, you must be an EDCO customer - or use a junk removal service like Severin Cleaners that handles these items through proper disposal channels.
                            </p>
                          </div>
                        </details>

                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">Should I rent a dumpster or use junk removal in La Mesa?</h3>
                            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </summary>
                          <div className="px-6 py-4 bg-white">
                            <p className="text-gray-700 leading-relaxed">
                              Junk removal is usually better - same or lower cost, we do all the work, and no dumpster blocking your driveway for a week. Dumpster rental costs $300-$600+ PLUS dump fees PLUS 8-12 hours of your labor. Professional junk removal costs $100-$495 all-in with zero work from you.
                            </p>
                          </div>
                        </details>

                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">What's the difference between La Mesa dump and Santee dump?</h3>
                            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </summary>
                          <div className="px-6 py-4 bg-white">
                            <p className="text-gray-700 leading-relaxed">
                              La Mesa (EDCO) is open Sundays and has a recycling buyback center where you get paid for CRV items. Santee (Sycamore) has longer weekday hours (until 4:30 PM vs 2:30 PM) but is closed Sundays. Both have similar pricing. Professional junk removal eliminates the trip to either facility.
                            </p>
                          </div>
                        </details>
                      </div>
                    </div>

                    {/* Related Resources */}
                    <div className="mb-12">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Resources</h2>

                      <div className="grid md:grid-cols-2 gap-4">
                        <Link href="/blog/san-diego-dump-fees-guide" className="block p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
                          <h3 className="font-bold text-gray-900 mb-2">San Diego Dump Fees Guide</h3>
                          <p className="text-sm text-gray-600">Complete guide to all San Diego County dump fees and transfer stations</p>
                        </Link>

                        <Link href="/blog/santee-dump-guide" className="block p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
                          <h3 className="font-bold text-gray-900 mb-2">Santee Dump Guide</h3>
                          <p className="text-sm text-gray-600">Hours, fees & guide to Sycamore Landfill in Santee (nearby alternative)</p>
                        </Link>

                        <Link href="/blog/escondido-dump-guide" className="block p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
                          <h3 className="font-bold text-gray-900 mb-2">Escondido Dump Guide</h3>
                          <p className="text-sm text-gray-600">Complete guide to Escondido Resource Recovery facility</p>
                        </Link>

                        <Link href="/blog/dumpster-rental-san-diego-alternatives" className="block p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
                          <h3 className="font-bold text-gray-900 mb-2">Dumpster Rental Alternatives</h3>
                          <p className="text-sm text-gray-600">Why junk removal is better than dumpster rental in San Diego</p>
                        </Link>

                        <Link href="/furniture-disposal-san-diego" className="block p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
                          <h3 className="font-bold text-gray-900 mb-2">Furniture Disposal</h3>
                          <p className="text-sm text-gray-600">Professional furniture removal and disposal in San Diego</p>
                        </Link>

                        <Link href="/san-diego-mattress-disposal" className="block p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
                          <h3 className="font-bold text-gray-900 mb-2">Mattress Disposal</h3>
                          <p className="text-sm text-gray-600">Eco-friendly mattress recycling and disposal from $69</p>
                        </Link>
                      </div>
                    </div>

                    {/* Footer CTA */}
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 rounded-xl text-center">
                      <h2 className="text-3xl font-bold mb-4">Skip the La Mesa Dump - Call Us Instead</h2>
                      <p className="text-xl mb-6">
                        Same-day junk removal • No 2:30 PM cutoff • Starting at $69
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                          href="tel:6197500114"
                          className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center"
                        >
                          📞 (619) 750-0114
                        </a>
                        <Link
                          href="/contact"
                          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                        >
                          Get Free Quote
                        </Link>
                      </div>
                    </div>

                  </div>

                  {/* Sidebar */}
                  <div className="lg:col-span-1">
                    <LocationSidebarCTA
                      locationName="La Mesa"
                      nearbyLocations={nearbyLocations}
                      serviceItems={serviceItems}
                      nearbyHeading="East County Junk Removal"
                      ctaHeader="SKIP THE DUMP - CALL US"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
