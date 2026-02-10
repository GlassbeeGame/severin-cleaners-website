import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import { generateAggregateRatingSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Escondido Dump (Resource Recovery) 2026: Hours, Fees & Complete Guide",
  description: "Complete Escondido dump guide - 2026 hours, fees, directions & accepted items. Open 7 days/week. Plus: when junk removal is actually cheaper than DIY.",
  keywords: [
    "escondido dump",
    "escondido transfer station",
    "escondido resource recovery",
    "escondido dump hours",
    "escondido dump fees",
    "north county dump",
    "dump near escondido"
  ],
  openGraph: {
    title: "Escondido Dump (Resource Recovery) 2026: Hours, Fees & Guide",
    description: "Complete guide to Escondido dump (Resource Recovery): hours 7 days/week, fees, resident passes, and directions. Learn when professional junk removal costs less than DIY dump runs.",
    url: "https://www.severinhauling.com/blog/escondido-dump-guide",
    siteName: "Severin Hauling",
    type: "article",
    locale: "en_US",
    images: [{
      url: "https://www.severinhauling.com/images/og/escondido-dump-guide.jpg",
      width: 1200,
      height: 630,
      alt: "Escondido Dump Guide 2026 - Resource Recovery Hours & Fees"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Escondido Dump (Resource Recovery) 2026: Complete Guide",
    description: "Complete Escondido dump guide - hours, fees, directions. Open 7 days/week. When junk removal costs less than DIY.",
    images: ["https://www.severinhauling.com/images/og/escondido-dump-guide.jpg"]
  },
  alternates: {
    canonical: "https://www.severinhauling.com/blog/escondido-dump-guide",
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
    "geo.placename": "Escondido",
    "geo.position": "33.1192;-117.0864",
    "ICBM": "33.1192, -117.0864",
    "article:published_time": "2026-01-29T10:00:00-08:00",
    "article:modified_time": "2026-01-29T10:00:00-08:00",
    "article:section": "Local Resources",
    "article:tag": "escondido dump, escondido transfer station, dump fees, junk removal, escondido"
  }
};

export default function EscondidoDumpGuide() {
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
            "item": "https://www.severinhauling.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.severinhauling.com/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Escondido Dump Guide",
            "item": "https://www.severinhauling.com/blog/escondido-dump-guide"
          }
        ]
      },
      // Enhanced BlogPosting Schema
      {
        "@type": "BlogPosting",
        "headline": "Escondido Dump (Resource Recovery) 2026: Complete Hours, Fees & Guide",
        "description": "Complete guide to Escondido Resource Recovery transfer station including current hours, fees, resident free passes, accepted materials, directions, and cost comparison with professional junk removal services.",
        "image": "https://www.severinhauling.com/images/og/escondido-dump-guide.jpg",
        "datePublished": "2026-01-29T10:00:00-08:00",
        "dateModified": "2026-01-29T10:00:00-08:00",
        "wordCount": 2400,
        "articleSection": "Local Resources",
        "inLanguage": "en-US",
        "keywords": ["escondido dump", "escondido transfer station", "escondido resource recovery", "escondido dump hours", "escondido dump fees", "north county dump"],
        "timeRequired": "PT9M",
        "author": {
          "@type": "Organization",
          "name": "Severin Hauling",
          "url": "https://www.severinhauling.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.severinhauling.com/logo.png"
          },
          "sameAs": [
            "https://www.facebook.com/severinhauling",
            "https://www.instagram.com/severinhauling/",
            "https://www.yelp.com/biz/severin-hauling-san-diego"
          ]
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
          "@id": "https://www.severinhauling.com/blog/escondido-dump-guide"
        }
      },
      // Enhanced FAQ Schema - 10 Questions for Maximum Rich Snippet Coverage
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are Escondido dump hours?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Escondido Resource Recovery (Escondido dump) is open 7:00 AM to 4:30 PM, 7 DAYS A WEEK including weekends. The transfer station is only closed 3 days per year: Thanksgiving Day, Christmas Day, and New Year's Day. Open all other holidays. Professional junk removal services like Severin Hauling also operate 7 days per week. Call (619) 750-0114 for same-day service."
            }
          },
          {
            "@type": "Question",
            "name": "How much does it cost to dump at Escondido?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Escondido Resource Recovery charges $95 flat fee for loads under 800 lbs, and $135 per ton for loads over 800 lbs (prorated if under 1 ton). Single item drop-off is $30. Appliances are $30 each, refrigerators and AC units with Freon are $55 each. All loads MUST be tarped. Professional junk removal from Severin Hauling starts at $69 for small items with no tarping required and all-inclusive pricing."
            }
          },
          {
            "@type": "Question",
            "name": "Is Escondido dump open on Sunday?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Escondido Resource Recovery is open Sunday 7:00 AM to 4:30 PM. The Escondido transfer station is open all 7 days of the week. Professional junk removal from Severin Hauling also operates 7 days per week throughout Escondido, San Marcos, Rancho Bernardo, and North County. Call (619) 750-0114."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to tarp my load at Escondido dump?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes - ALL loads MUST be tarped at Escondido Resource Recovery. This requirement is strictly enforced with no exceptions. If you don't have a tarp, you'll need to purchase one ($20). Professional junk removal services handle tarping for you, so you don't need to worry about it. Severin Hauling provides all equipment."
            }
          },
          {
            "@type": "Question",
            "name": "Do Escondido residents get free dump passes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Escondido residents receive TWO free coupons per year mailed to residential addresses. Each coupon covers up to 2 TONS of waste (total 4 tons per year free - very generous!). You must show ID with matching Escondido address to use coupons. Lost your coupon? Visit the Mission Avenue office with a utility bill to get a reprint. This is one of the best resident programs in San Diego County."
            }
          },
          {
            "@type": "Question",
            "name": "What can't I bring to Escondido dump?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Escondido Resource Recovery does not accept tires, hazardous waste, paint, oil, electronics, or treated wood. For tires, contact Big-O-Tires (760-741-2076) or Discount Tires (760-741-9805). For hazardous waste, call (760) 745-3203 for disposal information. Professional junk removal services like Severin Hauling can handle most restricted items through proper disposal channels. Call (619) 750-0114."
            }
          },
          {
            "@type": "Question",
            "name": "What's the difference between Escondido dump and a landfill?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Escondido Resource Recovery is a modern transfer station, not a traditional open-air landfill. It features 59,000 square feet of covered concrete floor space for all-weather disposal. Transfer stations receive waste and then transfer it to landfills for final disposal. The covered facility is cleaner and more pleasant than traditional dumps. Located at 1044 W. Washington Avenue, Escondido, CA 92025."
            }
          },
          {
            "@type": "Question",
            "name": "Is professional junk removal cheaper than Escondido dump?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Often yes, when you factor in all costs. DIY to Escondido dump: truck rental ($75-$150) + gas ($15-$25 from Rancho Bernardo) + dump fee ($95-$135) + tarp ($20) + your time (3-4 hours) = $205-$345+. Professional junk removal from Severin Hauling: $149-$349 all-inclusive with zero work from you. We start at $69 for small items, lower than the dump's $95 minimum. Call (619) 750-0114 for a free quote."
            }
          },
          {
            "@type": "Question",
            "name": "Where is the Escondido dump located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Escondido Resource Recovery is located at 1044 W. Washington Avenue, Escondido, CA 92025. From I-15, take Valley Parkway exit, go east on Valley Parkway, turn left on Tulip St, turn right on Hale Ave (cross railroad tracks), then turn into Washington Ave - facility is on your right. Approximately 20-25 minutes from Rancho Bernardo. Phone: (760) 745-3203."
            }
          },
          {
            "@type": "Question",
            "name": "What payment methods does Escondido dump accept?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Escondido Resource Recovery accepts Visa, MasterCard, cash, and checks. Payment is made after weighing your load. Professional junk removal from Severin Hauling offers flexible payment including cash, credit card, Venmo, Zelle, and Cash App for your convenience."
            }
          }
        ]
      },
      // HowTo Schema - Step-by-step guide to visiting dump
      {
        "@type": "HowTo",
        "name": "How to Take Junk to Escondido Dump (Resource Recovery)",
        "description": "Complete step-by-step process for visiting Escondido Resource Recovery transfer station including costs, requirements, and time needed",
        "totalTime": "PT3H30M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "205"
        },
        "tool": [
          {
            "@type": "HowToTool",
            "name": "Pickup truck or rental truck"
          },
          {
            "@type": "HowToTool",
            "name": "Tarp to cover load (REQUIRED - strictly enforced)"
          },
          {
            "@type": "HowToTool",
            "name": "Tie-down straps or bungee cords"
          }
        ],
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Rent a Truck (if needed)",
            "text": "Rent a pickup truck from Home Depot or U-Haul. Cost: $75-$150 depending on size and rental duration. Check if they provide tarps - if not, you'll need to purchase one separately.",
            "url": "https://www.severinhauling.com/blog/escondido-dump-guide#cost-comparison"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Load Your Junk",
            "text": "Load items into truck bed. Secure load with tarp and tie-downs (REQUIRED - strictly enforced at Escondido Resource Recovery). Estimated time: 1-2 hours of physical labor.",
            "url": "https://www.severinhauling.com/blog/escondido-dump-guide#requirements"
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Drive to Escondido Resource Recovery",
            "text": "Navigate to 1044 W. Washington Avenue, Escondido, CA 92025. From I-15: Valley Parkway east, left on Tulip, right on Hale (cross tracks), into Washington Ave. Hours: 7AM-4:30PM daily.",
            "url": "https://www.severinhauling.com/blog/escondido-dump-guide#directions"
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Check In and Weigh In",
            "text": "Check in at entrance. Drive to scale for initial weigh-in. Fees: $95 flat for under 800 lbs, $135/ton over 800 lbs. Single items $30. Payment: Visa, MC, cash, or check.",
            "url": "https://www.severinhauling.com/blog/escondido-dump-guide#fees"
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Unload at Covered Facility",
            "text": "Follow staff directions to 59,000 sq ft covered unloading area. Unload items yourself (all physical labor required). Estimated time: 30-60 minutes depending on load size.",
            "url": "https://www.severinhauling.com/blog/escondido-dump-guide"
          },
          {
            "@type": "HowToStep",
            "position": 6,
            "name": "Final Weigh and Payment",
            "text": "Drive to exit scale for final weight. Pay difference based on weight. Keep your receipt in case you need proof of disposal.",
            "url": "https://www.severinhauling.com/blog/escondido-dump-guide#fees"
          },
          {
            "@type": "HowToStep",
            "position": 7,
            "name": "Return Rental Truck",
            "text": "Drive back to rental location, return truck. Total time commitment: 3-4 hours plus driving time. Alternatively, professional junk removal from Severin Hauling requires zero time and often costs about the same when you factor in truck rental and your time. Call (619) 750-0114.",
            "url": "https://www.severinhauling.com/junk-removal-escondido"
          }
        ]
      },
      // Enhanced CivicStructure Schema for Escondido Resource Recovery
      {
        "@type": "CivicStructure",
        "name": "Escondido Resource Recovery",
        "alternateName": "Escondido Dump",
        "description": "Modern 59,000 square foot covered transfer station operated by EDCO serving Escondido and North County San Diego. Open 7 days per week for household junk, construction debris, appliances, and more.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1044 W. Washington Avenue",
          "addressLocality": "Escondido",
          "addressRegion": "CA",
          "postalCode": "92025",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 33.1192,
          "longitude": -117.0864
        },
        "telephone": "+1-760-745-3203",
        "url": "https://edcodisposal.com",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "07:00",
            "closes": "16:30"
          }
        ],
        "isAccessibleForFree": false,
        "publicAccess": true
      },
      // LocalBusiness Schema for Severin Hauling (SERVICE AREA BUSINESS)
      {
        "@type": "LocalBusiness",
        "@id": "https://www.severinhauling.com/#organization",
        "name": "Severin Hauling",
        "description": "Professional junk removal service serving San Diego County. Service area business - we come to you.",
        "image": "https://www.severinhauling.com/logo.png",
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
          "latitude": 32.7678,
          "longitude": -117.0230
        },
        "url": "https://www.severinhauling.com",
        "telephone": "+1-619-750-0114",
        "priceRange": "$69 - $495",
        "openingHours": "Mo-Su 00:00-23:59",
        "areaServed": [
          {
            "@type": "City",
            "name": "Escondido",
            "containedInPlace": {
              "@type": "State",
              "name": "California"
            }
          },
          {
            "@type": "City",
            "name": "San Marcos",
            "containedInPlace": {
              "@type": "State",
              "name": "California"
            }
          },
          {
            "@type": "City",
            "name": "Rancho Bernardo",
            "containedInPlace": {
              "@type": "State",
              "name": "California"
            }
          },
          {
            "@type": "City",
            "name": "Valley Center",
            "containedInPlace": {
              "@type": "State",
              "name": "California"
            }
          },
          {
            "@type": "City",
            "name": "Vista",
            "containedInPlace": {
              "@type": "State",
              "name": "California"
            }
          },
          {
            "@type": "City",
            "name": "Poway",
            "containedInPlace": {
              "@type": "State",
              "name": "California"
            }
          }
        ],
        "aggregateRating": generateAggregateRatingSchema(),
        "sameAs": [
          "https://www.facebook.com/severinhauling",
          "https://www.instagram.com/severinhauling/",
          "https://www.yelp.com/biz/severin-hauling-san-diego"
        ]
      },
      // Service Schema
      {
        "@type": "Service",
        "serviceType": "Junk Removal",
        "name": "Escondido Junk Removal Service",
        "description": "Professional junk removal service in Escondido and North County as a convenient alternative to DIY dump runs to Escondido Resource Recovery transfer station",
        "provider": {
          "@type": "Organization",
          "@id": "https://www.severinhauling.com/#organization",
          "name": "Severin Hauling"
        },
        "areaServed": {
          "@type": "City",
          "name": "Escondido"
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://www.severinhauling.com/junk-removal-escondido",
          "servicePhone": {
            "@type": "ContactPoint",
            "telephone": "+1-619-750-0114",
            "contactType": "Customer Service"
          }
        },
        "offers": {
          "@type": "Offer",
          "price": "69",
          "priceCurrency": "USD",
          "description": "Starting price for small items - lower than Escondido dump's $95 minimum",
          "minPrice": "69",
          "maxPrice": "495"
        },
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      // ItemList Schema for accepted materials
      {
        "@type": "ItemList",
        "name": "Materials Accepted at Escondido Resource Recovery",
        "description": "Complete list of materials and items accepted at Escondido transfer station",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Household junk and debris"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Furniture and mattresses"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Construction debris and materials"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Yard waste and green waste"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Appliances (standard $30, Freon items $55)"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Electronics (some restrictions apply)"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "Concrete and masonry"
          },
          {
            "@type": "ListItem",
            "position": 8,
            "name": "Metal and scrap metal"
          },
          {
            "@type": "ListItem",
            "position": 9,
            "name": "Wood and lumber"
          },
          {
            "@type": "ListItem",
            "position": 10,
            "name": "Carpet and flooring materials"
          }
        ]
      }
    ]
  };

  const nearbyLocations = [
    { name: "Junk Removal Escondido", slug: "/junk-removal-escondido" },
    { name: "Junk Removal San Marcos", slug: "/junk-removal-san-marcos" },
    { name: "Junk Removal Rancho Santa Fe", slug: "/junk-removal-rancho-santa-fe" },
    { name: "Junk Removal Vista", slug: "/junk-removal-vista" },
    { name: "Junk Removal Poway", slug: "/junk-removal-poway" }
  ];

  const serviceItems = [
    { name: "Furniture Disposal", slug: "/furniture-disposal-san-diego" },
    { name: "Mattress Disposal", slug: "/san-diego-mattress-disposal" },
    { name: "Appliance Removal", slug: "/appliance-removal-san-diego" },
    { name: "Hot Tub Removal", slug: "/hot-tub-removal-san-diego" },
    { name: "Construction Debris", slug: "/construction-debris-removal-san-diego" }
  ];

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumbs */}
              <nav className="mb-6 text-sm">
                <Link href="/" className="text-blue-200 hover:text-white">Home</Link>
                <span className="mx-2 text-blue-300">→</span>
                <Link href="/blog" className="text-blue-200 hover:text-white">Blog</Link>
                <span className="mx-2 text-blue-300">→</span>
                <span className="text-white">Escondido Dump Guide</span>
              </nav>

              {/* Category Badge */}
              <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Local Resources
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Escondido Dump (Resource Recovery) 2026: Complete Guide
              </h1>

              <p className="text-lg md:text-xl mb-4 text-blue-100">
                Hours, Fees, Free Resident Passes & When Professional Junk Removal Costs Less
              </p>

              <div className="flex items-center gap-4 text-sm text-blue-200">
                <span>Updated January 29, 2026</span>
                <span>•</span>
                <span>9 min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">

                {/* Main Content - Left Column */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-md p-6 md:p-8">

                    {/* Quick Info Box */}
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <span className="text-3xl mr-3">📍</span>
                        Escondido Dump Quick Info
                      </h2>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-semibold text-gray-600 mb-1">OFFICIAL NAME</p>
                          <p className="text-gray-900">Escondido Resource Recovery</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600 mb-1">ADDRESS</p>
                          <p className="text-gray-900">1044 W. Washington Avenue<br/>Escondido, CA 92025</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600 mb-1">PHONE</p>
                          <p className="text-gray-900">(760) 745-3203</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600 mb-1">HOURS</p>
                          <p className="text-gray-900">7 Days/Week: 7:00 AM - 4:30 PM</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600 mb-1">FEES</p>
                          <p className="text-gray-900">Under 800 lbs: $95<br/>Over 800 lbs: $135/ton</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600 mb-1">RESIDENT PERK</p>
                          <p className="text-green-700 font-bold">2 FREE passes/year<br/>(up to 2 tons each!)</p>
                        </div>
                      </div>
                    </div>

                    {/* Quick Answer Section */}
                    <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
                      <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer</h2>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Escondido Resource Recovery</strong> (commonly called the <strong>Escondido dump</strong> or <strong>Escondido transfer station</strong>) is a modern, 59,000 sq ft covered facility open <strong>7 days a week</strong> from 7:00 AM to 4:30 PM. Fees are <strong>$95 flat for loads under 800 lbs</strong> or <strong>$135 per ton</strong> for larger loads. But when you factor in truck rental ($75-$150), gas ($15-$25 from Rancho Bernardo), tarp requirements (strictly enforced!), and your time (3-4 hours), DIY costs <strong>$205-$345+</strong>. Professional junk removal from <Link href="/junk-removal-escondido" className="text-blue-600 hover:text-blue-700 font-semibold">Severin Hauling</Link> starts at $69 for small items with zero work from you—often the same price or less than doing it yourself.
                      </p>
                    </div>

                    {/* Main Content */}
                    <div className="prose prose-lg max-w-none">

                      <p className="text-gray-700 leading-relaxed mb-6">
                        Planning to haul junk to the <strong>Escondido dump</strong>? This complete 2026 guide covers everything you need to know about <strong>Escondido Resource Recovery</strong>—hours, fees, requirements, free resident passes, accepted materials, and most importantly, when professional <Link href="/junk-removal-escondido" className="text-blue-600 hover:text-blue-700 font-semibold">junk removal in Escondido</Link> actually saves you money compared to the DIY dump run.
                      </p>

                      {/* Hours Section */}
                      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" id="hours">Escondido Transfer Station Hours (2026)</h2>

                      <p className="text-gray-700 mb-4">
                        Unlike many San Diego County facilities, the <strong>Escondido dump hours</strong> are quite convenient. Here's the current schedule for <strong>Escondido Resource Recovery</strong>:
                      </p>

                      <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Weekly Schedule</h3>
                        <table className="w-full">
                          <tbody className="divide-y divide-gray-200">
                            <tr>
                              <td className="py-3 font-semibold text-gray-900">Every Day of the Week</td>
                              <td className="py-3 text-gray-700 text-right">7:00 AM - 4:30 PM <span className="text-green-600 font-bold">(Open 7 Days!)</span></td>
                            </tr>
                            <tr>
                              <td className="py-3 font-semibold text-gray-900">Thanksgiving Day</td>
                              <td className="py-3 text-red-600 font-bold text-right">CLOSED</td>
                            </tr>
                            <tr>
                              <td className="py-3 font-semibold text-gray-900">Christmas Day</td>
                              <td className="py-3 text-red-600 font-bold text-right">CLOSED</td>
                            </tr>
                            <tr>
                              <td className="py-3 font-semibold text-gray-900">New Year's Day</td>
                              <td className="py-3 text-red-600 font-bold text-right">CLOSED</td>
                            </tr>
                            <tr>
                              <td className="py-3 font-semibold text-gray-900">All Other Holidays</td>
                              <td className="py-3 text-green-600 font-bold text-right">OPEN</td>
                            </tr>
                          </tbody>
                        </table>

                        <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                          <p className="text-sm text-gray-700">
                            <strong>✓ Major Advantage:</strong> The <strong>Escondido transfer station</strong> is open 7 days per week including weekends. Only closed 3 days per year!
                          </p>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-5 mb-6">
                        <p className="text-gray-700 mb-2">
                          <strong>💡 Pro Tip:</strong> The <strong>Escondido dump</strong> gets busiest on Saturday and Sunday. Weekday mornings (7:00-9:00 AM) typically have the shortest wait times. Even though it's open weekends, expect 30-45 minute waits on Saturday mornings.
                        </p>
                        <p className="text-gray-700">
                          <strong>Skip the wait entirely:</strong> <Link href="/junk-removal-escondido" className="text-blue-600 hover:text-blue-700 font-semibold">Professional junk removal</Link> provides scheduled appointment times with no waiting in line. Call <a href="tel:6197500114" className="text-blue-600 hover:text-blue-700 font-semibold">(619) 750-0114</a> for same-day service.
                        </p>
                      </div>

                      {/* Fees Section */}
                      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" id="fees">Escondido Dump Fees (2026)</h2>

                      <p className="text-gray-700 mb-4">
                        The <strong>Escondido dump fees</strong> at <strong>Escondido Resource Recovery</strong> are straightforward but add up quickly. Here's the current pricing structure:
                      </p>

                      <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">2026 Disposal Fees</h3>
                        <table className="w-full">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="py-3 px-4 text-left font-semibold text-gray-900">Load Size / Item</th>
                              <th className="py-3 px-4 text-right font-semibold text-gray-900">Fee</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            <tr>
                              <td className="py-3 px-4 text-gray-700">Loads Under 800 lbs</td>
                              <td className="py-3 px-4 text-right font-bold text-gray-900">$95 flat fee</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-gray-700">Loads Over 800 lbs</td>
                              <td className="py-3 px-4 text-right font-bold text-gray-900">$135 per ton (prorated)</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-gray-700">Single Item Drop-off</td>
                              <td className="py-3 px-4 text-right font-bold text-gray-900">$30</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-gray-700">Appliances (standard)</td>
                              <td className="py-3 px-4 text-right font-bold text-gray-900">$30 each</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-gray-700">Refrigerators, AC units (Freon items)</td>
                              <td className="py-3 px-4 text-right font-bold text-gray-900">$55 each</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-gray-700">Mattress Recycling</td>
                              <td className="py-3 px-4 text-right font-bold text-gray-900">Available (fee applies)</td>
                            </tr>
                          </tbody>
                        </table>

                        <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
                          <p className="text-sm text-gray-700">
                            <strong>⚠️ Important:</strong> Single items are $30 at the dump, but <strong>$95 is the minimum</strong> for loads under 800 lbs. Factor in truck rental ($75), gas ($10-$25), and tarp ($20), and professional junk removal starting at $69 for small items often makes more sense.
                          </p>
                        </div>
                      </div>

                      <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Methods</h3>
                        <div className="flex flex-wrap gap-3">
                          <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-semibold">Visa</span>
                          <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-semibold">MasterCard</span>
                          <span className="bg-green-50 text-green-700 px-4 py-2 rounded-full font-semibold">Cash</span>
                          <span className="bg-green-50 text-green-700 px-4 py-2 rounded-full font-semibold">Check</span>
                        </div>
                        <p className="text-gray-600 text-sm mt-4">
                          Professional junk removal from Severin Hauling also accepts Venmo, Zelle, and Cash App for added convenience.
                        </p>
                      </div>

                      {/* What Makes It Different */}
                      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" id="facility">What Makes Escondido Resource Recovery Different</h2>

                      <p className="text-gray-700 mb-4">
                        <strong>Escondido Resource Recovery</strong> is a modern transfer station, not a traditional open-air landfill. Here's what makes it unique:
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                          <h4 className="font-bold text-lg mb-2 text-gray-900">✓ 59,000 Sq Ft Covered Facility</h4>
                          <p className="text-gray-700 text-sm">All-weather disposal under roof. Rain, shine, or heat - you're covered.</p>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                          <h4 className="font-bold text-lg mb-2 text-gray-900">✓ Transfer Station (Not Landfill)</h4>
                          <p className="text-gray-700 text-sm">Cleaner, more modern facility. Waste is transferred to final landfills elsewhere.</p>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                          <h4 className="font-bold text-lg mb-2 text-gray-900">✓ Public Scales Available</h4>
                          <p className="text-gray-700 text-sm">Weighmaster Certificates available if needed for documentation.</p>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                          <h4 className="font-bold text-lg mb-2 text-gray-900">✓ Open 7 Days/Week</h4>
                          <p className="text-gray-700 text-sm">More convenient than most San Diego County facilities that close Sundays.</p>
                        </div>
                      </div>

                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r mb-8">
                        <p className="text-gray-700">
                          <strong>But here's the catch:</strong> Even with a nice facility, you still need to rent a truck, tarp your load (strictly enforced!), do all the physical labor, drive 20+ minutes (from Rancho Bernardo), wait in line, and spend 3-4 hours of your day. Professional junk removal eliminates ALL of these hassles for about the same total cost.
                        </p>
                      </div>

                      {/* Requirements Section */}
                      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" id="requirements">Requirements Before You Go</h2>

                      <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-6">
                        <h3 className="text-xl font-bold text-red-700 mb-4">🚨 TARP REQUIREMENT (Strictly Enforced)</h3>
                        <p className="text-gray-700 mb-3">
                          <strong>ALL loads MUST be tarped</strong> at <strong>Escondido Resource Recovery</strong>. This is strictly enforced with NO exceptions. If you arrive without a tarp, you'll be turned away.
                        </p>
                        <p className="text-gray-700 mb-3">
                          Don't have a tarp? You'll need to purchase one ($20) before your dump run. Secure it properly with tie-downs or bungee cords.
                        </p>
                        <p className="text-gray-700">
                          <strong>Professional junk removal services provide all equipment</strong> - no tarping required from you. We handle everything.
                        </p>
                      </div>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-start">
                          <span className="text-blue-600 text-2xl mr-3">✓</span>
                          <div>
                            <h4 className="font-bold text-gray-900">Valid Payment Method</h4>
                            <p className="text-gray-600 text-sm">Visa, MasterCard, cash, or check accepted</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <span className="text-red-600 text-2xl mr-3">✗</span>
                          <div>
                            <h4 className="font-bold text-gray-900">No End-Dump Trucks Allowed</h4>
                            <p className="text-gray-600 text-sm">Standard pickups, trailers, and box trucks welcome</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <span className="text-blue-600 text-2xl mr-3">✓</span>
                          <div>
                            <h4 className="font-bold text-gray-900">Escondido Resident Free Pass (Optional)</h4>
                            <p className="text-gray-600 text-sm">Must show ID with matching Escondido address to use free coupons</p>
                          </div>
                        </div>
                      </div>

                      {/* What You Can Bring */}
                      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" id="accepted">What You Can Bring to Escondido Dump</h2>

                      <p className="text-gray-700 mb-4">
                        <strong>Escondido Resource Recovery</strong> accepts "almost everything" according to EDCO. Here's what you can bring to the <strong>Escondido transfer station</strong>:
                      </p>

                      <div className="grid md:grid-cols-2 gap-3 mb-8">
                        <div className="flex items-start">
                          <span className="text-green-500 text-xl mr-2">✓</span>
                          <span className="text-gray-700">Household junk and debris</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-500 text-xl mr-2">✓</span>
                          <span className="text-gray-700">Furniture and upholstery</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-500 text-xl mr-2">✓</span>
                          <span className="text-gray-700">Mattresses (recycling available)</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-500 text-xl mr-2">✓</span>
                          <span className="text-gray-700">Appliances ($30 each)</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-500 text-xl mr-2">✓</span>
                          <span className="text-gray-700">Refrigerators, AC units ($55 each)</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-500 text-xl mr-2">✓</span>
                          <span className="text-gray-700">Construction debris</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-500 text-xl mr-2">✓</span>
                          <span className="text-gray-700">Yard waste and green waste</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-500 text-xl mr-2">✓</span>
                          <span className="text-gray-700">Concrete and masonry</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-500 text-xl mr-2">✓</span>
                          <span className="text-gray-700">Wood and lumber</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-500 text-xl mr-2">✓</span>
                          <span className="text-gray-700">Carpet and flooring</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-500 text-xl mr-2">✓</span>
                          <span className="text-gray-700">Metal and scrap metal</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-500 text-xl mr-2">✓</span>
                          <span className="text-gray-700">General municipal waste</span>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-5 mb-6">
                        <p className="text-gray-700">
                          <strong>💡 Mattress Recycling Program:</strong> The <strong>Escondido dump</strong> participates in mattress recycling. There's a fee, but it's an eco-friendly option. Professional <Link href="/san-diego-mattress-disposal" className="text-blue-600 hover:text-blue-700 font-semibold">mattress disposal from Severin Hauling</Link> also includes recycling when possible.
                        </p>
                      </div>

                      {/* What's NOT Accepted */}
                      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" id="not-accepted">What's NOT Accepted at Escondido Transfer Station</h2>

                      <p className="text-gray-700 mb-4">
                        Some items cannot be disposed of at <strong>Escondido Resource Recovery</strong>. Here's where to take them instead:
                      </p>

                      <div className="overflow-x-auto mb-8">
                        <table className="w-full border-2 border-gray-200 rounded-lg">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="py-3 px-4 text-left font-bold text-gray-900">Item</th>
                              <th className="py-3 px-4 text-left font-bold text-gray-900">Where to Take It / Alternative</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            <tr>
                              <td className="py-3 px-4 text-gray-700 font-semibold">Tires</td>
                              <td className="py-3 px-4 text-gray-700">Big-O-Tires: (760) 741-2076 or Discount Tires: (760) 741-9805</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-gray-700 font-semibold">Hazardous Waste</td>
                              <td className="py-3 px-4 text-gray-700">Call (760) 745-3203 for disposal information</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-gray-700 font-semibold">Paint</td>
                              <td className="py-3 px-4 text-gray-700">Hazardous waste facility (call for location)</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-gray-700 font-semibold">Oil</td>
                              <td className="py-3 px-4 text-gray-700">Auto parts stores (free drop-off)</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-gray-700 font-semibold">Electronics</td>
                              <td className="py-3 px-4 text-gray-700">E-waste recycling centers</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-gray-700 font-semibold">Treated Wood</td>
                              <td className="py-3 px-4 text-gray-700">Special disposal required</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r mb-8">
                        <p className="text-gray-700">
                          <strong>✓ Professional Solution:</strong> <Link href="/junk-removal-escondido" className="text-blue-600 hover:text-blue-700 font-semibold">Severin Hauling</Link> can handle most restricted items through proper disposal channels. We take electronics, paint (in some cases), and other items the <strong>Escondido transfer station</strong> won't accept. Call <a href="tel:6197500114" className="text-blue-600 hover:text-blue-700 font-semibold">(619) 750-0114</a>.
                        </p>
                      </div>

                      {/* Free Disposal for Escondido Residents */}
                      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" id="free-passes">Free Disposal for Escondido Residents</h2>

                      <p className="text-gray-700 mb-6">
                        <strong>Escondido residents get a very generous deal</strong> - one of the best resident programs in San Diego County. Here are both free programs:
                      </p>

                      {/* Free Coupons Program */}
                      <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-6">
                        <h3 className="text-2xl font-bold text-green-800 mb-4">🎟️ Free Annual Coupons (Extremely Generous!)</h3>

                        <div className="bg-white rounded-lg p-5 mb-4">
                          <h4 className="font-bold text-lg mb-3 text-gray-900">What You Get:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="text-green-600 text-xl mr-2">✓</span>
                              <span className="text-gray-700"><strong>TWO free coupons per year</strong> (mailed to Escondido residential addresses)</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-600 text-xl mr-2">✓</span>
                              <span className="text-gray-700"><strong>Each coupon covers up to 2 TONS</strong> of solid waste, bulky items, or concrete</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-600 text-xl mr-2">✓</span>
                              <span className="text-gray-700"><strong>Total: 4 tons per year FREE</strong> (much better than Santee's 2 tons!)</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-white rounded-lg p-5 mb-4">
                          <h4 className="font-bold text-lg mb-3 text-gray-900">How to Use:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="text-blue-600 text-xl mr-2">1.</span>
                              <span className="text-gray-700">Wait for coupons to arrive in the mail (mailed to Escondido addresses)</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-600 text-xl mr-2">2.</span>
                              <span className="text-gray-700">Load your junk (still need to tarp it!)</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-600 text-xl mr-2">3.</span>
                              <span className="text-gray-700">Bring coupon + ID with matching Escondido address to the dump</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-600 text-xl mr-2">4.</span>
                              <span className="text-gray-700">Dispose of up to 2 tons for FREE</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
                          <p className="text-sm text-gray-700">
                            <strong>Lost your coupon?</strong> Visit the Mission Avenue office with a current utility bill showing your Escondido address to get a reprint. Coupons expire one year from issuance.
                          </p>
                        </div>
                      </div>

                      {/* Free Drop-Off Program */}
                      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
                        <h3 className="text-2xl font-bold text-blue-800 mb-4">🔋 Free Drop-Off Items (Escondido Residents Only)</h3>

                        <div className="bg-white rounded-lg p-5 mb-4">
                          <h4 className="font-bold text-lg mb-3 text-gray-900">Location:</h4>
                          <p className="text-gray-700 mb-2">
                            <strong>1021 W. Mission Ave entrance</strong><br/>
                            (Between Metcalf and Rock Springs Rd, across from U-Haul)
                          </p>
                        </div>

                        <div className="bg-white rounded-lg p-5">
                          <h4 className="font-bold text-lg mb-3 text-gray-900">FREE Items Accepted:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="text-green-600 text-xl mr-2">✓</span>
                              <span className="text-gray-700">Batteries</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-600 text-xl mr-2">✓</span>
                              <span className="text-gray-700">Sharps (needles, syringes - in proper containers)</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-600 text-xl mr-2">✓</span>
                              <span className="text-gray-700">Clean, broken-down cardboard</span>
                            </li>
                          </ul>
                          <p className="text-gray-600 text-sm mt-3">
                            <strong>Escondido residents only.</strong> Available during normal business hours.
                          </p>
                        </div>
                      </div>

                      {/* Directions Section */}
                      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" id="directions">Directions to Escondido Dump</h2>

                      <p className="text-gray-700 mb-6">
                        <strong>Escondido Resource Recovery</strong> is located at <strong>1044 W. Washington Avenue, Escondido, CA 92025</strong>. Here are detailed directions from major areas:
                      </p>

                      <div className="space-y-4 mb-8">
                        {/* From I-15 */}
                        <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                          <h4 className="font-bold text-lg mb-3 text-gray-900">From Interstate 15 (Main Route)</h4>
                          <ol className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                              <span className="font-bold mr-2">1.</span>
                              <span>Take <strong>Valley Parkway exit</strong></span>
                            </li>
                            <li className="flex items-start">
                              <span className="font-bold mr-2">2.</span>
                              <span>Go <strong>east</strong> on Valley Parkway</span>
                            </li>
                            <li className="flex items-start">
                              <span className="font-bold mr-2">3.</span>
                              <span>Turn <strong>left</strong> on Tulip St.</span>
                            </li>
                            <li className="flex items-start">
                              <span className="font-bold mr-2">4.</span>
                              <span>Turn <strong>right</strong> on Hale Ave. (you'll cross railroad tracks)</span>
                            </li>
                            <li className="flex items-start">
                              <span className="font-bold mr-2">5.</span>
                              <span>Turn into <strong>Washington Ave.</strong> - facility will be on your right</span>
                            </li>
                          </ol>
                        </div>

                        {/* From Rancho Bernardo */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                          <h4 className="font-bold text-lg mb-2 text-gray-900">From Rancho Bernardo</h4>
                          <p className="text-gray-700">Take I-15 North to Valley Parkway exit, then follow directions above. <strong>Drive time: 20-25 minutes each way.</strong> Add 1-2 hours for loading, waiting, and unloading = 3-4 hours total.</p>
                        </div>

                        {/* From San Marcos */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                          <h4 className="font-bold text-lg mb-2 text-gray-900">From San Marcos</h4>
                          <p className="text-gray-700">Take SR-78 East to I-15 South. Exit Valley Parkway, then follow main directions. Drive time: 15-20 minutes.</p>
                        </div>

                        {/* From Valley Center */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                          <h4 className="font-bold text-lg mb-2 text-gray-900">From Valley Center</h4>
                          <p className="text-gray-700">Take Valley Center Rd south to I-15 South. Exit Valley Parkway, follow main directions. Drive time: 20-25 minutes.</p>
                        </div>

                        {/* From Vista */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                          <h4 className="font-bold text-lg mb-2 text-gray-900">From Vista</h4>
                          <p className="text-gray-700">Take SR-78 East to I-15 South. Exit Valley Parkway. Drive time: 20 minutes.</p>
                        </div>
                      </div>

                      {/* Cost Comparison Section - THE CONVERSION SECTION */}
                      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" id="cost-comparison">Is a DIY Dump Run Worth It? (Real Cost for North County Residents)</h2>

                      <p className="text-gray-700 mb-6">
                        The <strong>$95 minimum fee</strong> at <strong>Escondido dump</strong> seems reasonable - until you factor in ALL the hidden costs. Here's the real math:
                      </p>

                      {/* Scenario 1: Garage Cleanout */}
                      <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Scenario 1: Garage Cleanout (~700 lbs)</h3>

                        <div className="overflow-x-auto mb-4">
                          <table className="w-full">
                            <thead className="bg-gray-100">
                              <tr>
                                <th className="py-3 px-4 text-left font-bold text-gray-900">Cost Factor</th>
                                <th className="py-3 px-4 text-center font-bold text-gray-900">DIY Dump Run</th>
                                <th className="py-3 px-4 text-center font-bold text-gray-900">Professional Junk Removal</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              <tr>
                                <td className="py-3 px-4 text-gray-700">Truck rental (if needed)</td>
                                <td className="py-3 px-4 text-center text-gray-700">$75-$150</td>
                                <td className="py-3 px-4 text-center text-green-600 font-bold">$0</td>
                              </tr>
                              <tr>
                                <td className="py-3 px-4 text-gray-700">Gas (round trip from RB)</td>
                                <td className="py-3 px-4 text-center text-gray-700">$15-$25</td>
                                <td className="py-3 px-4 text-center text-green-600 font-bold">$0</td>
                              </tr>
                              <tr>
                                <td className="py-3 px-4 text-gray-700">Escondido dump fee</td>
                                <td className="py-3 px-4 text-center text-gray-700">$95</td>
                                <td className="py-3 px-4 text-center text-green-600 font-bold">$0</td>
                              </tr>
                              <tr>
                                <td className="py-3 px-4 text-gray-700">Tarp (if you don't have one)</td>
                                <td className="py-3 px-4 text-center text-gray-700">$20</td>
                                <td className="py-3 px-4 text-center text-green-600 font-bold">$0</td>
                              </tr>
                              <tr>
                                <td className="py-3 px-4 text-gray-700">Your time</td>
                                <td className="py-3 px-4 text-center text-red-600 font-bold">3-4 hours</td>
                                <td className="py-3 px-4 text-center text-green-600 font-bold">0 hours</td>
                              </tr>
                              <tr>
                                <td className="py-3 px-4 text-gray-700">Physical labor / injury risk</td>
                                <td className="py-3 px-4 text-center text-red-600 font-bold">All you</td>
                                <td className="py-3 px-4 text-center text-green-600 font-bold">None</td>
                              </tr>
                              <tr className="bg-blue-50">
                                <td className="py-4 px-4 font-bold text-gray-900">TOTAL</td>
                                <td className="py-4 px-4 text-center font-bold text-red-600">$205-$305 + your Saturday</td>
                                <td className="py-4 px-4 text-center font-bold text-green-600">$249-$349 all-inclusive</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                          <p className="text-gray-700">
                            <strong>The Verdict:</strong> Professional junk removal costs about the same (or less!) when you factor in truck rental, gas, and tarp - and you don't lift a finger or waste your Saturday.
                          </p>
                        </div>
                      </div>

                      {/* Scenario 2: Single Couch */}
                      <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Scenario 2: Single Couch Removal</h3>

                        <div className="overflow-x-auto mb-4">
                          <table className="w-full">
                            <thead className="bg-gray-100">
                              <tr>
                                <th className="py-3 px-4 text-left font-bold text-gray-900">Cost Factor</th>
                                <th className="py-3 px-4 text-center font-bold text-gray-900">DIY</th>
                                <th className="py-3 px-4 text-center font-bold text-gray-900">Professional</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              <tr>
                                <td className="py-3 px-4 text-gray-700">Truck rental</td>
                                <td className="py-3 px-4 text-center text-gray-700">$75</td>
                                <td className="py-3 px-4 text-center text-green-600 font-bold">$0</td>
                              </tr>
                              <tr>
                                <td className="py-3 px-4 text-gray-700">Gas</td>
                                <td className="py-3 px-4 text-center text-gray-700">$10</td>
                                <td className="py-3 px-4 text-center text-green-600 font-bold">$0</td>
                              </tr>
                              <tr>
                                <td className="py-3 px-4 text-gray-700">Dump fee (single item)</td>
                                <td className="py-3 px-4 text-center text-gray-700">$30</td>
                                <td className="py-3 px-4 text-center text-green-600 font-bold">$0</td>
                              </tr>
                              <tr>
                                <td className="py-3 px-4 text-gray-700">Tarp (if needed)</td>
                                <td className="py-3 px-4 text-center text-gray-700">$20</td>
                                <td className="py-3 px-4 text-center text-green-600 font-bold">$0</td>
                              </tr>
                              <tr>
                                <td className="py-3 px-4 text-gray-700">Your time</td>
                                <td className="py-3 px-4 text-center text-red-600 font-bold">2 hours</td>
                                <td className="py-3 px-4 text-center text-green-600 font-bold">0 hours</td>
                              </tr>
                              <tr className="bg-blue-50">
                                <td className="py-4 px-4 font-bold text-gray-900">TOTAL</td>
                                <td className="py-4 px-4 text-center font-bold text-red-600">$135 + time</td>
                                <td className="py-4 px-4 text-center font-bold text-green-600">$100</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                          <p className="text-gray-700">
                            <strong>The Verdict:</strong> For a single couch, professional removal costs about the same as DIY but with zero work from you. We start at $69 for small items, $100 for standard furniture like couches, vs. your $135 total DIY cost plus 2 hours of your time.
                          </p>
                        </div>
                      </div>

                      {/* When DIY Makes Sense */}
                      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" id="when-diy">When DIY to Escondido Dump Makes Sense</h2>

                      <p className="text-gray-700 mb-4">
                        Let's be honest - there ARE situations where the <strong>Escondido transfer station</strong> is your best option:
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-start">
                          <span className="text-green-500 text-xl mr-3">✓</span>
                          <span className="text-gray-700"><strong>You have the free Escondido resident coupons</strong> (and already own a truck and tarp) - this is genuinely free!</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-500 text-xl mr-3">✓</span>
                          <span className="text-gray-700"><strong>You already own a truck and have a tarp</strong> - no rental costs</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-500 text-xl mr-3">✓</span>
                          <span className="text-gray-700"><strong>You live within 10 minutes</strong> of the facility - minimal driving time</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-500 text-xl mr-3">✓</span>
                          <span className="text-gray-700"><strong>It's 1-2 small, light items</strong> - minimal physical labor</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-500 text-xl mr-3">✓</span>
                          <span className="text-gray-700"><strong>You enjoy physical work</strong> and have time to spare</span>
                        </div>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r mb-8">
                        <p className="text-gray-700 mb-3">
                          <strong>But for most North County residents, professional junk removal makes more sense:</strong>
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">→</span>
                            <span className="text-gray-700">You don't own a truck (most Rancho Bernardo, San Marcos residents don't)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">→</span>
                            <span className="text-gray-700">You live 15+ minutes away (RB, San Marcos, Valley Center)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">→</span>
                            <span className="text-gray-700">It's heavy items (furniture, appliances)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">→</span>
                            <span className="text-gray-700">Your time is valuable (3-4 hours is a lot!)</span>
                          </li>
                        </ul>
                      </div>

                      {/* Junk Removal Services Section */}
                      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" id="junk-removal">Professional Junk Removal in Escondido & North County</h2>

                      <p className="text-gray-700 mb-6">
                        <Link href="/junk-removal-escondido" className="text-blue-600 hover:text-blue-700 font-semibold">Severin Hauling</Link> provides professional junk removal throughout <strong>Escondido</strong>, San Marcos, Rancho Bernardo, Valley Center, Vista, Poway, and all of North County San Diego.
                      </p>

                      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-8">
                        <h3 className="text-3xl font-bold mb-4 text-center">Skip the Escondido Dump - We Come to You</h3>
                        <p className="text-xl text-blue-100 mb-6 text-center">
                          Professional junk removal throughout Escondido & North County
                        </p>
                        <ul className="space-y-3 mb-6 max-w-2xl mx-auto">
                          <li className="flex items-start">
                            <span className="text-green-400 text-xl mr-3">✓</span>
                            <span className="text-blue-100"><strong>Lower minimum cost:</strong> We start at $69 vs. Escondido dump's $95 minimum</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 text-xl mr-3">✓</span>
                            <span className="text-blue-100"><strong>No tarping required:</strong> We bring the truck and all equipment</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 text-xl mr-3">✓</span>
                            <span className="text-blue-100"><strong>No driving time:</strong> Save 20-25 minutes each way from Rancho Bernardo/San Marcos</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 text-xl mr-3">✓</span>
                            <span className="text-blue-100"><strong>We take items they won't:</strong> Electronics, certain hazardous items through proper channels</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 text-xl mr-3">✓</span>
                            <span className="text-blue-100"><strong>All-inclusive pricing:</strong> No surprise fees or truck rentals</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 text-xl mr-3">✓</span>
                            <span className="text-blue-100"><strong>Zero labor from you:</strong> Professional crew handles all lifting and loading</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 text-xl mr-3">✓</span>
                            <span className="text-blue-100"><strong>Same-day available:</strong> Call before 2 PM for same-day service</span>
                          </li>
                        </ul>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <a
                            href="tel:6197500114"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors inline-block text-center"
                          >
                            📞 (619) 750-0114
                          </a>
                          <Link
                            href="/contact"
                            className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg text-xl font-bold transition-colors inline-block text-center"
                          >
                            Get Free Quote
                          </Link>
                        </div>
                        <p className="text-blue-200 text-sm mt-4 text-center">
                          Starting at $69 for small items • Same-day service available • Serving all of North County
                        </p>
                      </div>

                      {/* Comparison Table */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Escondido Dump vs. Professional Junk Removal</h3>

                      <div className="overflow-x-auto mb-8">
                        <table className="w-full border-2 border-gray-200 rounded-lg">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="py-3 px-4 text-left font-bold text-gray-900">Feature</th>
                              <th className="py-3 px-4 text-center font-bold text-gray-900">Escondido Resource Recovery</th>
                              <th className="py-3 px-4 text-center font-bold text-gray-900">Severin Hauling</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            <tr>
                              <td className="py-3 px-4 text-gray-700 font-semibold">Minimum cost</td>
                              <td className="py-3 px-4 text-center text-gray-700">$95</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">$69</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-gray-700 font-semibold">You do lifting</td>
                              <td className="py-3 px-4 text-center text-red-600">✓ Yes</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">❌ We do it</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-gray-700 font-semibold">Tarp required</td>
                              <td className="py-3 px-4 text-center text-red-600">✓ Strictly enforced</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">❌ No</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-gray-700 font-semibold">Drive from Rancho Bernardo</td>
                              <td className="py-3 px-4 text-center text-gray-700">20-25 min each way</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">We come to you</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-gray-700 font-semibold">Electronics accepted</td>
                              <td className="py-3 px-4 text-center text-red-600">❌ Not accepted</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">✓ We handle it</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-gray-700 font-semibold">Your time required</td>
                              <td className="py-3 px-4 text-center text-red-600 font-bold">3-4 hours</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">0 hours</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-gray-700 font-semibold">Open weekends</td>
                              <td className="py-3 px-4 text-center text-green-600">✓ Yes</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">✓ Yes</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-gray-700 font-semibold">Wait in line</td>
                              <td className="py-3 px-4 text-center text-red-600">30-45 min weekends</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">Scheduled appointment</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Service Areas</h3>
                        <p className="text-gray-700 mb-3">
                          We provide professional junk removal throughout North County San Diego:
                        </p>
                        <div className="grid md:grid-cols-3 gap-3">
                          <Link href="/junk-removal-escondido" className="text-blue-600 hover:text-blue-700 font-semibold">Escondido</Link>
                          <Link href="/junk-removal-san-marcos" className="text-blue-600 hover:text-blue-700 font-semibold">San Marcos</Link>
                          <Link href="/junk-removal-rancho-santa-fe" className="text-blue-600 hover:text-blue-700 font-semibold">Rancho Bernardo</Link>
                          <Link href="/junk-removal-vista" className="text-blue-600 hover:text-blue-700 font-semibold">Vista</Link>
                          <Link href="/junk-removal-poway" className="text-blue-600 hover:text-blue-700 font-semibold">Poway</Link>
                          <span className="text-gray-700">Valley Center</span>
                          <span className="text-gray-700">Hidden Meadows</span>
                        </div>
                      </div>

                      {/* FAQ Section */}
                      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" id="faq">Frequently Asked Questions</h2>

                      <div className="space-y-4 mb-12">
                        {/* FAQ 1 */}
                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">What are Escondido dump hours?</h3>
                            <svg
                              className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </summary>
                          <div className="px-6 py-4 bg-white">
                            <p className="text-gray-700 leading-relaxed">
                              Escondido Resource Recovery (Escondido dump) is open 7:00 AM to 4:30 PM, 7 DAYS A WEEK including weekends. The transfer station is only closed 3 days per year: Thanksgiving Day, Christmas Day, and New Year's Day. Open all other holidays. Professional junk removal services like Severin Hauling also operate 7 days per week. Call <a href="tel:6197500114" className="text-blue-600 hover:text-blue-700 font-semibold">(619) 750-0114</a> for same-day service.
                            </p>
                          </div>
                        </details>

                        {/* FAQ 2 */}
                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">
                            How much does it cost to dump at Escondido?
                            </h3>
                            <svg
                              className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </summary>
                          <div className="px-6 py-4 bg-white">
                            <p className="text-gray-700 leading-relaxed">Escondido Resource Recovery charges $95 flat fee for loads under 800 lbs, and $135 per ton for loads over 800 lbs (prorated if under 1 ton). Single item drop-off is $30. Appliances are $30 each, refrigerators and AC units with Freon are $55 each. All loads MUST be tarped. Professional junk removal from Severin Hauling starts at $69 for small items with no tarping required and all-inclusive pricing.</p>
                          </div>
                        </details>

                        {/* FAQ 3 */}
                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">
                            Is Escondido dump open on Sunday?
                            </h3>
                            <svg
                              className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </summary>
                          <div className="px-6 py-4 bg-white">
                            <p className="text-gray-700 leading-relaxed">Yes! Escondido Resource Recovery is open Sunday 7:00 AM to 4:30 PM. The Escondido transfer station is open all 7 days of the week. Professional junk removal from Severin Hauling also operates 7 days per week throughout Escondido, San Marcos, Rancho Bernardo, and North County. Call <a href="tel:6197500114" className="text-blue-600 hover:text-blue-700 font-semibold">(619) 750-0114</a>.</p>
                          </div>
                        </details>

                        {/* FAQ 4 */}
                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">
                            Do I need to tarp my load at Escondido dump?
                            </h3>
                            <svg
                              className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </summary>
                          <div className="px-6 py-4 bg-white">
                            <p className="text-gray-700 leading-relaxed">Yes - ALL loads MUST be tarped at Escondido Resource Recovery. This requirement is strictly enforced with no exceptions. If you don't have a tarp, you'll need to purchase one ($20). Professional junk removal services handle tarping for you, so you don't need to worry about it. Severin Hauling provides all equipment.</p>
                          </div>
                        </details>

                        {/* FAQ 5 */}
                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">
                            Do Escondido residents get free dump passes?
                            </h3>
                            <svg
                              className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </summary>
                          <div className="px-6 py-4 bg-white">
                            <p className="text-gray-700 leading-relaxed">Yes! Escondido residents receive TWO free coupons per year mailed to residential addresses. Each coupon covers up to 2 TONS of waste (total 4 tons per year free - very generous!). You must show ID with matching Escondido address to use coupons. Lost your coupon? Visit the Mission Avenue office with a utility bill to get a reprint. This is one of the best resident programs in San Diego County.</p>
                          </div>
                        </details>

                        {/* FAQ 6 */}
                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">
                            What can't I bring to Escondido dump?
                            </h3>
                            <svg
                              className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </summary>
                          <div className="px-6 py-4 bg-white">
                            <p className="text-gray-700 leading-relaxed">Escondido Resource Recovery does not accept tires, hazardous waste, paint, oil, electronics, or treated wood. For tires, contact Big-O-Tires (760-741-2076) or Discount Tires (760-741-9805). For hazardous waste, call (760) 745-3203 for disposal information. Professional junk removal services like Severin Hauling can handle most restricted items through proper disposal channels. Call <a href="tel:6197500114" className="text-blue-600 hover:text-blue-700 font-semibold">(619) 750-0114</a>.</p>
                          </div>
                        </details>

                        {/* FAQ 7 */}
                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">
                            What's the difference between Escondido dump and a landfill?
                            </h3>
                            <svg
                              className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </summary>
                          <div className="px-6 py-4 bg-white">
                            <p className="text-gray-700 leading-relaxed">Escondido Resource Recovery is a modern transfer station, not a traditional open-air landfill. It features 59,000 square feet of covered concrete floor space for all-weather disposal. Transfer stations receive waste and then transfer it to landfills for final disposal. The covered facility is cleaner and more pleasant than traditional dumps. Located at 1044 W. Washington Avenue, Escondido, CA 92025.</p>
                          </div>
                        </details>

                        {/* FAQ 8 */}
                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">
                            Is professional junk removal cheaper than Escondido dump?
                            </h3>
                            <svg
                              className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </summary>
                          <div className="px-6 py-4 bg-white">
                            <p className="text-gray-700 leading-relaxed">Often yes, when you factor in all costs. DIY to Escondido dump: truck rental ($75-$150) + gas ($15-$25 from Rancho Bernardo) + dump fee ($95-$135) + tarp ($20) + your time (3-4 hours) = $205-$345+. Professional junk removal from Severin Hauling: $149-$349 all-inclusive with zero work from you. We start at $69 for small items, lower than the dump's $95 minimum. Call <a href="tel:6197500114" className="text-blue-600 hover:text-blue-700 font-semibold">(619) 750-0114</a> for a free quote.</p>
                          </div>
                        </details>

                        {/* FAQ 9 */}
                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">
                            Where is the Escondido dump located?
                            </h3>
                            <svg
                              className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </summary>
                          <div className="px-6 py-4 bg-white">
                            <p className="text-gray-700 leading-relaxed">Escondido Resource Recovery is located at 1044 W. Washington Avenue, Escondido, CA 92025. From I-15, take Valley Parkway exit, go east on Valley Parkway, turn left on Tulip St, turn right on Hale Ave (cross railroad tracks), then turn into Washington Ave - facility is on your right. Approximately 20-25 minutes from Rancho Bernardo. Phone: (760) 745-3203.</p>
                          </div>
                        </details>

                        {/* FAQ 10 */}
                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">
                            What payment methods does Escondido dump accept?
                            </h3>
                            <svg
                              className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </summary>
                          <div className="px-6 py-4 bg-white">
                            <p className="text-gray-700 leading-relaxed">Escondido Resource Recovery accepts Visa, MasterCard, cash, and checks. Payment is made after weighing your load. Professional junk removal from Severin Hauling offers flexible payment including cash, credit card, Venmo, Zelle, and Cash App for your convenience.</p>
                          </div>
                        </details>
                      </div>

                      {/* Related Resources */}
                      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Related Resources</h2>

                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <Link href="/blog/san-diego-dump-fees-guide" className="block p-5 bg-gray-50 border-2 border-gray-200 hover:border-blue-400 rounded-lg transition-colors">
                          <h4 className="font-bold text-lg mb-2 text-blue-600">San Diego Dump Fees Guide</h4>
                          <p className="text-gray-600 text-sm">Complete guide to all San Diego area dumps, fees, and locations</p>
                        </Link>

                        <Link href="/blog/santee-dump-guide" className="block p-5 bg-gray-50 border-2 border-gray-200 hover:border-blue-400 rounded-lg transition-colors">
                          <h4 className="font-bold text-lg mb-2 text-blue-600">Santee Dump Guide</h4>
                          <p className="text-gray-600 text-sm">Complete guide to Sycamore Landfill for East County residents</p>
                        </Link>

                        <Link href="/junk-removal-escondido" className="block p-5 bg-gray-50 border-2 border-gray-200 hover:border-blue-400 rounded-lg transition-colors">
                          <h4 className="font-bold text-lg mb-2 text-blue-600">Junk Removal Escondido</h4>
                          <p className="text-gray-600 text-sm">Professional junk removal throughout Escondido and North County</p>
                        </Link>

                        <Link href="/furniture-disposal-san-diego" className="block p-5 bg-gray-50 border-2 border-gray-200 hover:border-blue-400 rounded-lg transition-colors">
                          <h4 className="font-bold text-lg mb-2 text-blue-600">Furniture Disposal</h4>
                          <p className="text-gray-600 text-sm">Professional furniture removal and disposal services</p>
                        </Link>

                        <Link href="/san-diego-mattress-disposal" className="block p-5 bg-gray-50 border-2 border-gray-200 hover:border-blue-400 rounded-lg transition-colors">
                          <h4 className="font-bold text-lg mb-2 text-blue-600">Mattress Disposal</h4>
                          <p className="text-gray-600 text-sm">Eco-friendly mattress removal and recycling</p>
                        </Link>

                        <Link href="/junk-removal-san-marcos" className="block p-5 bg-gray-50 border-2 border-gray-200 hover:border-blue-400 rounded-lg transition-colors">
                          <h4 className="font-bold text-lg mb-2 text-blue-600">Junk Removal San Marcos</h4>
                          <p className="text-gray-600 text-sm">Professional junk removal service in San Marcos</p>
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Escondido"
                    nearbyLocations={nearbyLocations}
                    nearbyHeading="North County Junk Removal"
                    ctaHeader="SKIP THE DUMP"
                    serviceItems={serviceItems}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Skip the Escondido Dump - Get Professional Junk Removal
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Same-day junk removal for Escondido, San Marcos, Rancho Bernardo & all of North County
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors inline-block"
                >
                  📞 Call (619) 750-0114
                </a>
                <Link
                  href="/contact"
                  className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg text-xl font-bold transition-colors inline-block"
                >
                  Get Free Quote
                </Link>
              </div>
              <p className="text-blue-200">
                Starting at $69 • Lower than Escondido dump's $95 minimum • Zero work from you
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
