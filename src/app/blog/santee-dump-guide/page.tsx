import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import { generateAggregateRatingSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Santee Dump (Sycamore Landfill) 2026: Hours, Fees & Complete Guide",
  description: "Complete guide to Santee dump (Sycamore Landfill) - 2026 hours, fees, accepted items & directions. Plus: when professional junk removal is actually cheaper than DIY.",
  keywords: [
    "santee dump",
    "santee landfill",
    "sycamore landfill",
    "santee dump hours",
    "santee landfill hours",
    "santee dump fees",
    "santee landfill fees",
    "sycamore landfill santee",
    "santee dump location",
    "east county dump",
    "dump near el cajon",
    "dump near la mesa"
  ],
  openGraph: {
    title: "Santee Dump (Sycamore Landfill) 2026: Hours, Fees & Complete Guide",
    description: "Complete guide to Santee dump (Sycamore Landfill) - 2026 hours, fees, accepted items. Learn when professional junk removal actually costs less than DIY.",
    url: "https://www.severinhauling.com/blog/santee-dump-guide",
    siteName: "Severin Hauling",
    type: "article",
    locale: "en_US",
    images: [{
      url: "https://www.severinhauling.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Santee Dump Guide 2026 - Severin Hauling"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Santee Dump (Sycamore Landfill) 2026: Hours, Fees & Complete Guide",
    description: "Complete Santee dump guide: hours, fees, requirements. Learn when professional junk removal saves money vs DIY.",
    images: ["https://www.severinhauling.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.severinhauling.com/blog/santee-dump-guide",
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
    "geo.placename": "Santee",
    "geo.position": "32.8384;-116.9739",
    "ICBM": "32.8384, -116.9739",
    "article:published_time": "2026-01-29T08:00:00-08:00",
    "article:modified_time": "2026-01-29T08:00:00-08:00",
    "article:section": "Local Resources",
    "article:tag": "santee dump, sycamore landfill, dump fees, junk removal, santee"
  },
};

export default function SanteeDumpGuide() {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      // BreadcrumbList Schema - Shows navigation path in search results
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
            "name": "Santee Dump Guide",
            "item": "https://www.severinhauling.com/blog/santee-dump-guide"
          }
        ]
      },
      // Enhanced BlogPosting Schema
      {
        "@type": "BlogPosting",
        "headline": "Santee Dump (Sycamore Landfill) 2026: Complete Hours, Fees & Guide",
        "description": "Comprehensive guide to Santee dump (Sycamore Landfill) including 2026 hours, current fees, requirements, accepted materials, free passes for residents, and cost comparison with professional junk removal.",
        "image": "https://www.severinhauling.com/og-image.jpg",
        "datePublished": "2026-01-29",
        "dateModified": "2026-01-29",
        "wordCount": 2400,
        "articleSection": "Local Resources",
        "inLanguage": "en-US",
        "keywords": ["santee dump", "santee landfill", "sycamore landfill", "santee dump hours", "santee dump fees", "east county dump"],
        "timeRequired": "PT8M",
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
          },
          "sameAs": [
            "https://www.facebook.com/severinhauling",
            "https://www.instagram.com/severinhauling/"
          ]
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.severinhauling.com/blog/santee-dump-guide"
        }
      },
      // Enhanced FAQ Schema - 13 Questions for Maximum Rich Snippet Coverage
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What time does Santee dump open?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Santee dump (Sycamore Landfill) is open Monday-Friday 7:00 AM to 4:30 PM, and Saturday 7:30 AM to 3:00 PM. The dump is CLOSED on Sundays and major holidays. Professional junk removal services like Severin Hauling operate 7 days per week including Sundays. Call (619) 750-0114 for same-day service."
            }
          },
          {
            "@type": "Question",
            "name": "How much does it cost to dump at Santee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Santee dump (Sycamore Landfill) charges $125 per ton for general trash, $76 per ton for green waste and base materials. You'll also need a hard hat ($6 if you don't have one) and must tarp your load. Factor in truck rental ($75-$150), gas ($10-$20), and your time (3-5 hours), and professional junk removal often costs less. Severin Hauling starts at $69 for small items with all-inclusive pricing."
            }
          },
          {
            "@type": "Question",
            "name": "Is Santee dump open on Sunday?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, Santee dump (Sycamore Landfill) is CLOSED on Sundays. The landfill is only open Monday-Saturday. If you need junk removal on Sunday, professional services like Severin Hauling operate 7 days per week throughout Santee, El Cajon, La Mesa, and East County. Call (619) 750-0114."
            }
          },
          {
            "@type": "Question",
            "name": "What's the difference between Santee dump and Sycamore Landfill?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Santee dump and Sycamore Landfill are the same facility. The official name is Sycamore Landfill, but locals call it Santee dump or Santee landfill. Located at 8514 Mast Boulevard, Santee, CA 92071. Phone: (619) 562-0530."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a hard hat at Santee dump?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, hard hats are REQUIRED at Santee dump (Sycamore Landfill). If you don't have one, you can purchase a hard hat for approximately $6 at the entrance booth. Closed-toe shoes are also required. Professional junk removal services handle everything, so you don't need any safety equipment."
            }
          },
          {
            "@type": "Question",
            "name": "Can Santee residents dump for free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Santee residents receive TWO free passes per year (per household). Each pass covers up to ONE TON of solid waste, bulky items, or concrete. To obtain passes, visit the landfill office with a valid driver's license AND residential utility bill. Passes expire one year from issuance."
            }
          },
          {
            "@type": "Question",
            "name": "What can't I bring to Santee dump?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Santee dump restricts hazardous waste, certain chemicals, and liquids. However, they DO accept appliances (with on-site Freon removal), electronics, tires, mattresses, carpet, and large animal remains. Professional junk removal services like Severin Hauling can handle most restricted items through proper disposal channels. Call (619) 750-0114."
            }
          },
          {
            "@type": "Question",
            "name": "Is professional junk removal cheaper than going to Santee dump?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Often yes, when you factor in all costs. DIY to Santee dump: truck rental ($75-$150) + gas ($10-$20) + dump fees ($60-$125) + hard hat ($6) + your time (3-5 hours) = $151-$301+. Professional junk removal from Severin Hauling: $149-$349 all-inclusive with zero work from you. Call (619) 750-0114 for a free quote."
            }
          },
          {
            "@type": "Question",
            "name": "What payment methods does Santee dump accept?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sycamore Landfill accepts cash, check, and credit cards. Payment is made after weighing your load. Professional junk removal from Severin Hauling offers flexible payment including cash, credit card, Venmo, Zelle, and Cash App for your convenience."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to dump at Santee landfill?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Expect 30-60 minutes at Sycamore Landfill including wait time, weighing, unloading, and payment. Add 1-2 hours for loading your truck and 1-2 hours for truck rental pickup/return. Total DIY time: 3-5 hours. Professional junk removal from Severin Hauling takes zero hours of your time with same-day service available."
            }
          },
          {
            "@type": "Question",
            "name": "Can I dump mattresses at Santee dump?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Sycamore Landfill accepts mattresses and box springs for disposal as part of general waste ($125/ton). Professional mattress disposal through Severin Hauling includes pickup from your home, hauling, and eco-friendly recycling when possible. Call (619) 750-0114 for same-day mattress removal in Santee and East County."
            }
          },
          {
            "@type": "Question",
            "name": "Where is the Santee dump located exactly?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sycamore Landfill (Santee dump) is located at 8514 Mast Boulevard, Santee, CA 92071. From downtown Santee, take Mission Gorge Rd east to Mast Blvd, turn right. Approximately 8 minutes from Santee Town Center. GPS coordinates: 32.8384, -116.9739. Phone: (619) 562-0530."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need an appointment to go to Santee dump?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No appointment needed for Sycamore Landfill. It operates first-come, first-served during open hours (Mon-Fri 7AM-4:30PM, Sat 7:30AM-3PM, CLOSED Sunday). Wait times vary from 15-45 minutes. Severin Hauling offers scheduled appointments for junk removal with no wait time. Call (619) 750-0114."
            }
          }
        ]
      },
      // HowTo Schema - Step-by-step guide to visiting dump (positions professional service as alternative)
      {
        "@type": "HowTo",
        "name": "How to Take Junk to Santee Dump (Sycamore Landfill)",
        "description": "Complete step-by-step process for visiting Sycamore Landfill in Santee, CA including costs, requirements, and time needed",
        "totalTime": "PT3H30M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "151"
        },
        "tool": [
          {
            "@type": "HowToTool",
            "name": "Pickup truck or rental truck"
          },
          {
            "@type": "HowToTool",
            "name": "Hard hat (available at entrance for $6)"
          },
          {
            "@type": "HowToTool",
            "name": "Tarp to cover load"
          },
          {
            "@type": "HowToTool",
            "name": "Closed-toe shoes (required)"
          }
        ],
        "step": [
          {
            "@type": "HowToStep",
            "name": "Rent a Truck",
            "text": "Rent a pickup truck from Home Depot or U-Haul. Cost: $75-$150 depending on size and rental duration.",
            "url": "https://www.severinhauling.com/blog/santee-dump-guide#cost-comparison"
          },
          {
            "@type": "HowToStep",
            "name": "Load Your Junk",
            "text": "Load items into truck bed. Secure load with tarp (REQUIRED - uncovered loads incur penalties). Estimated time: 1-2 hours of physical labor.",
            "url": "https://www.severinhauling.com/blog/santee-dump-guide#requirements"
          },
          {
            "@type": "HowToStep",
            "name": "Drive to Sycamore Landfill",
            "text": "Navigate to 8514 Mast Boulevard, Santee, CA 92071. Check hours BEFORE going: Mon-Fri 7AM-4:30PM, Sat 7:30AM-3PM. CLOSED Sundays and holidays.",
            "url": "https://www.severinhauling.com/blog/santee-dump-guide#hours"
          },
          {
            "@type": "HowToStep",
            "name": "Purchase Safety Equipment",
            "text": "Buy hard hat at entrance booth if you don't have one ($6). Wear closed-toe shoes (required). Both are mandatory safety requirements.",
            "url": "https://www.severinhauling.com/blog/santee-dump-guide#requirements"
          },
          {
            "@type": "HowToStep",
            "name": "Weigh In and Pay Fees",
            "text": "Drive to scale for initial weigh-in. Fees: $125/ton general trash, $76/ton green waste. Typical pickup load costs $60-$125. Payment: cash, check, or credit card.",
            "url": "https://www.severinhauling.com/blog/santee-dump-guide#fees"
          },
          {
            "@type": "HowToStep",
            "name": "Unload at Designated Area",
            "text": "Follow staff directions to unloading zone. Unload items yourself (all physical labor required). Estimated time: 30-60 minutes depending on load size.",
            "url": "https://www.severinhauling.com/blog/santee-dump-guide"
          },
          {
            "@type": "HowToStep",
            "name": "Return Rental Truck",
            "text": "Drive back to rental location, return truck. Total time commitment: 3-5 hours. Alternatively, professional junk removal from Severin Hauling requires zero time and often costs less. Call (619) 750-0114.",
            "url": "https://www.severinhauling.com/blog/santee-dump-guide#cost-comparison"
          }
        ]
      },
      // Enhanced CivicStructure Schema for Sycamore Landfill
      {
        "@type": "CivicStructure",
        "name": "Sycamore Landfill",
        "alternateName": ["Santee Dump", "Santee Landfill"],
        "description": "County-operated landfill serving Santee and East San Diego County",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "8514 Mast Boulevard",
          "addressLocality": "Santee",
          "addressRegion": "CA",
          "postalCode": "92071",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 32.8384,
          "longitude": -116.9739
        },
        "telephone": "+1-619-562-0530",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "07:00",
            "closes": "16:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "07:30",
            "closes": "15:00"
          }
        ],
        "isAccessibleForFree": false,
        "publicAccess": true
      },
      // LocalBusiness Schema for Severin Hauling (SERVICE AREA BUSINESS - not storefront)
      {
        "@type": "LocalBusiness",
        "@id": "https://www.severinhauling.com/#organization",
        "name": "Severin Hauling",
        "description": "Professional junk removal service serving San Diego County. Service area business - we come to you.",
        "url": "https://www.severinhauling.com",
        "telephone": "+1-619-750-0114",
        "priceRange": "$69-$495",
        "email": "severinhauling@gmail.com",
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
          "longitude": -117.0231
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Santee",
            "containedInPlace": {
              "@type": "State",
              "name": "California"
            }
          },
          {
            "@type": "City",
            "name": "El Cajon",
            "containedInPlace": {
              "@type": "State",
              "name": "California"
            }
          },
          {
            "@type": "City",
            "name": "La Mesa",
            "containedInPlace": {
              "@type": "State",
              "name": "California"
            }
          },
          {
            "@type": "City",
            "name": "Lakeside",
            "containedInPlace": {
              "@type": "State",
              "name": "California"
            }
          },
          {
            "@type": "City",
            "name": "Alpine",
            "containedInPlace": {
              "@type": "State",
              "name": "California"
            }
          }
        ],
        "openingHours": "Mo-Su 00:00-23:59",
        "aggregateRating": generateAggregateRatingSchema(),
        "sameAs": [
          "https://www.facebook.com/severinhauling",
          "https://www.instagram.com/severinhauling/",
          "https://www.yelp.com/biz/severin-hauling-san-diego",
          "https://www.thumbtack.com/ca/la-mesa/junk-removal/severin-hauling/service/541381661422116888"
        ]
      },
      // Service Schema - Junk Removal Alternative to Dump
      {
        "@type": "Service",
        "serviceType": "Junk Removal",
        "name": "Santee Junk Removal Service",
        "description": "Professional junk removal service in Santee, CA as a convenient alternative to DIY dump runs at Sycamore Landfill",
        "provider": {
          "@id": "https://www.severinhauling.com/#organization"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Santee",
            "containedInPlace": {
              "@type": "State",
              "name": "California"
            }
          },
          {
            "@type": "PostalCode",
            "postalCode": "92071",
            "addressLocality": "Santee"
          }
        ],
        "offers": {
          "@type": "Offer",
          "url": "https://www.severinhauling.com/junk-removal-santee",
          "priceCurrency": "USD",
          "price": "69",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "69.00",
            "priceCurrency": "USD",
            "minPrice": "69",
            "maxPrice": "495"
          },
          "availability": "https://schema.org/InStock",
          "availabilityStarts": "2026-01-29",
          "validFrom": "2026-01-29"
        },
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      // ItemList Schema for Accepted Materials at Dump
      {
        "@type": "ItemList",
        "name": "Materials Accepted at Santee Dump (Sycamore Landfill)",
        "description": "Complete list of materials and items accepted for disposal at Sycamore Landfill in Santee, CA",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Municipal solid waste (household junk)"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Construction and demolition debris"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Appliances (with on-site Freon removal)"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Electronics and e-waste"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Tires (automotive)"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Mattresses and box springs"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "Carpet and flooring materials"
          },
          {
            "@type": "ListItem",
            "position": 8,
            "name": "Green waste and yard debris"
          },
          {
            "@type": "ListItem",
            "position": 9,
            "name": "Concrete, dirt, and asphalt (base materials)"
          },
          {
            "@type": "ListItem",
            "position": 10,
            "name": "Furniture and household items"
          }
        ]
      }
    ]
  };

  const nearbyLocations = [
    { name: "Junk Removal Santee", slug: "/junk-removal-santee" },
    { name: "Junk Removal El Cajon", slug: "/junk-removal-el-cajon" },
    { name: "Junk Removal La Mesa", slug: "/la-mesa-junk-removal" },
    { name: "Junk Removal Lakeside", slug: "/junk-removal-lakeside" },
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
        {/* Hero Section - Matching Location Pages */}
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumbs */}
              <nav className="mb-6 text-sm">
                <Link href="/" className="text-blue-200 hover:text-white">Home</Link>
                <span className="mx-2 text-blue-300">→</span>
                <Link href="/blog" className="text-blue-200 hover:text-white">Blog</Link>
                <span className="mx-2 text-blue-300">→</span>
                <span className="text-white">Santee Dump Guide</span>
              </nav>

              {/* Category Badge */}
              <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Local Resources
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Santee Dump (Sycamore Landfill) 2026: Complete Guide
              </h1>

              <p className="text-lg md:text-xl mb-4 text-blue-100">
                Hours, Fees, Requirements & When Professional Junk Removal Costs Less
              </p>

              <div className="flex items-center gap-4 text-sm text-blue-200">
                <span>Updated January 29, 2026</span>
                <span>•</span>
                <span>8 min read</span>
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
                        Santee Dump Quick Info
                      </h2>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-semibold text-gray-600 mb-1">ADDRESS</p>
                          <p className="text-gray-900">8514 Mast Boulevard<br/>Santee, CA 92071</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600 mb-1">PHONE</p>
                          <p className="text-gray-900">(619) 562-0530</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600 mb-1">HOURS</p>
                          <p className="text-gray-900">Mon-Fri: 7:00 AM - 4:30 PM<br/>Sat: 7:30 AM - 3:00 PM<br/>Sun: <span className="text-red-600 font-bold">CLOSED</span></p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600 mb-1">FEES</p>
                          <p className="text-gray-900">General Trash: $125/ton<br/>Green Waste: $76/ton</p>
                        </div>
                      </div>
                    </div>

                    {/* Quick Answer Section */}
                    <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
                      <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer</h2>
                      <p className="text-gray-700 leading-relaxed">
                        The <strong>Santee dump</strong> (officially Sycamore Landfill) charges <strong>$125 per ton</strong> for general trash. But when you add truck rental ($75-$150), gas ($10-$20), required hard hat ($6), tarping supplies, and your time (3-5 hours), DIY dump runs often cost <strong>$150-$300+</strong>. Professional junk removal from <Link href="/junk-removal-santee" className="text-blue-600 hover:text-blue-700 font-semibold">Severin Hauling</Link> starts at $69 (small items) or $100 (standard items) with zero work from you—and we're open Sundays when the dump is closed.
                      </p>
                    </div>

                    {/* Main Content */}
                    <div className="prose prose-lg max-w-none">

                      <p className="text-gray-700 leading-relaxed mb-6">
                        Planning to haul junk to the <strong>Santee landfill</strong>? This complete 2026 guide covers everything you need to know about <strong>Sycamore Landfill</strong>—hours, fees, requirements, accepted materials, and most importantly, when professional <Link href="/junk-removal-santee" className="text-blue-600 hover:text-blue-700 font-semibold">junk removal in Santee</Link> actually saves you money compared to the DIY dump run.
                      </p>

                      {/* Hours Section */}
                      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" id="hours">Sycamore Landfill Hours (2026)</h2>

                      <p className="text-gray-700 mb-4">
                        The <strong>Santee dump hours</strong> are limited compared to professional junk removal services. Here's the current schedule:
                      </p>

                      <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Weekly Schedule</h3>
                        <table className="w-full">
                          <tbody className="divide-y divide-gray-200">
                            <tr>
                              <td className="py-3 font-semibold text-gray-900">Monday - Friday</td>
                              <td className="py-3 text-gray-700 text-right">7:00 AM - 4:30 PM</td>
                            </tr>
                            <tr>
                              <td className="py-3 font-semibold text-gray-900">Saturday</td>
                              <td className="py-3 text-gray-700 text-right">7:30 AM - 3:00 PM <span className="text-orange-600 text-sm">(Shorter hours!)</span></td>
                            </tr>
                            <tr>
                              <td className="py-3 font-semibold text-gray-900">Sunday</td>
                              <td className="py-3 text-red-600 font-bold text-right">CLOSED</td>
                            </tr>
                            <tr>
                              <td className="py-3 font-semibold text-gray-900">Major Holidays</td>
                              <td className="py-3 text-red-600 font-bold text-right">CLOSED</td>
                            </tr>
                          </tbody>
                        </table>

                        <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
                          <p className="text-sm text-gray-700">
                            <strong>Pass Office Hours:</strong> Monday - Friday, 8:00 AM to 3:00 PM (for Santee residents obtaining free passes)
                          </p>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-5 mb-6">
                        <p className="text-gray-700 mb-2">
                          <strong>💡 Pro Tip:</strong> The <strong>Santee dump</strong> gets busiest on Saturday mornings and weekday afternoons. Weekday mornings (7:00-9:00 AM) typically have the shortest wait times.
                        </p>
                        <p className="text-gray-700">
                          <strong>Need Sunday service?</strong> <Link href="/junk-removal-santee" className="text-blue-600 hover:text-blue-700 font-semibold">Professional junk removal</Link> operates 7 days per week including Sundays. Call <a href="tel:6197500114" className="text-blue-600 hover:text-blue-700 font-semibold">(619) 750-0114</a> for same-day service.
                        </p>
                      </div>

                      {/* Fees Section */}
                      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" id="fees">Santee Dump Fees (2026)</h2>

                      <p className="text-gray-700 mb-4">
                        The <strong>Santee landfill fees</strong> are charged by weight. Here's the current pricing structure for <strong>Sycamore Landfill</strong>:
                      </p>

                      <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">2026 Disposal Fees</h3>
                        <table className="w-full">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="py-3 px-4 text-left font-semibold text-gray-900">Material Type</th>
                              <th className="py-3 px-4 text-right font-semibold text-gray-900">Fee Per Ton</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            <tr>
                              <td className="py-3 px-4 text-gray-700">General Trash / Municipal Solid Waste</td>
                              <td className="py-3 px-4 text-right font-bold text-gray-900">$125</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-gray-700">Green Waste (yard debris, branches)</td>
                              <td className="py-3 px-4 text-right font-bold text-gray-900">$76</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-gray-700">Base Materials (dirt, concrete, asphalt)</td>
                              <td className="py-3 px-4 text-right font-bold text-gray-900">$76</td>
                            </tr>
                          </tbody>
                        </table>

                        <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
                          <p className="text-sm text-gray-700 mb-2">
                            <strong>⚠️ Minimum charges may apply</strong> for small loads. Call ahead to confirm current rates: <span className="font-semibold">(619) 562-0530</span>
                          </p>
                          <p className="text-sm text-gray-700">
                            A typical pickup truck load (500-1,000 lbs) costs approximately <strong>$60-$125</strong> in dump fees alone.
                          </p>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hidden Costs Most People Forget</h3>

                      <p className="text-gray-700 mb-4">
                        The <strong>Santee dump fees</strong> are just the start. Here are the additional costs that add up quickly:
                      </p>

                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <span className="text-orange-500 font-bold text-xl mr-3">→</span>
                          <div>
                            <strong className="text-gray-900">Hard Hat:</strong>
                            <span className="text-gray-700"> $6 purchase at entrance booth (required, no exceptions)</span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-500 font-bold text-xl mr-3">→</span>
                          <div>
                            <strong className="text-gray-900">Uncovered Load Penalty:</strong>
                            <span className="text-gray-700"> Potential fines if your load isn't properly tarped</span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-500 font-bold text-xl mr-3">→</span>
                          <div>
                            <strong className="text-gray-900">Payment Methods:</strong>
                            <span className="text-gray-700"> Cash, check, or credit card accepted</span>
                          </div>
                        </li>
                      </ul>

                      <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-r mb-8">
                        <p className="text-gray-700">
                          <strong>These fees add up fast.</strong> See our <Link href="#cost-comparison" className="text-blue-600 hover:text-blue-700 font-semibold">cost comparison below</Link> to understand when professional junk removal actually costs LESS than a DIY dump run to the <strong>Santee landfill</strong>.
                        </p>
                      </div>

                      {/* Requirements Section */}
                      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" id="requirements">Requirements Before You Go</h2>

                      <p className="text-gray-700 mb-4">
                        Before heading to the <strong>Santee dump</strong>, you must meet these mandatory requirements:
                      </p>

                      <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-6">
                        <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                          <span className="text-2xl mr-2">⚠️</span>
                          Mandatory Requirements
                        </h3>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="text-red-600 font-bold text-xl mr-3 mt-1">✓</span>
                            <div>
                              <strong className="text-gray-900">Hard Hat REQUIRED</strong>
                              <p className="text-gray-700 text-sm mt-1">Available for purchase (~$6) at entrance booth if you don't have one. This is strictly enforced.</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-600 font-bold text-xl mr-3 mt-1">✓</span>
                            <div>
                              <strong className="text-gray-900">Closed-Toe Shoes REQUIRED</strong>
                              <p className="text-gray-700 text-sm mt-1">No sandals, flip-flops, or open-toe footwear allowed. Safety regulation.</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-600 font-bold text-xl mr-3 mt-1">✓</span>
                            <div>
                              <strong className="text-gray-900">All Loads MUST Be Tarped</strong>
                              <p className="text-gray-700 text-sm mt-1">Uncovered loads will be turned away or charged penalties. Bring a tarp and secure it properly.</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-600 font-bold text-xl mr-3 mt-1">✓</span>
                            <div>
                              <strong className="text-gray-900">NO Motorcycles Allowed</strong>
                              <p className="text-gray-700 text-sm mt-1">Motorcycles are prohibited from entering <strong>Sycamore Landfill</strong> for safety reasons.</p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-green-50 rounded-lg p-5 mb-8">
                        <p className="text-gray-700">
                          <strong>Skip the hassle.</strong> Professional <Link href="/junk-removal-santee" className="text-blue-600 hover:text-blue-700 font-semibold">junk removal in Santee</Link> requires ZERO safety equipment from you. We handle everything from loading to disposal. Call <a href="tel:6197500114" className="text-blue-600 hover:text-blue-700 font-semibold">(619) 750-0114</a>.
                        </p>
                      </div>

                      {/* What You Can Bring */}
                      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" id="accepted-items">What You Can Bring to Sycamore Landfill</h2>

                      <p className="text-gray-700 mb-4">
                        The <strong>Santee dump</strong> accepts a wide range of materials:
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-white border-2 border-green-200 rounded-lg p-5">
                          <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                            <span className="text-green-500 text-xl mr-2">✓</span>
                            General Waste
                          </h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• Municipal solid waste (household junk)</li>
                            <li>• Construction & demolition debris</li>
                            <li>• Furniture and household items</li>
                            <li>• Carpet and flooring materials</li>
                          </ul>
                        </div>

                        <div className="bg-white border-2 border-green-200 rounded-lg p-5">
                          <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                            <span className="text-green-500 text-xl mr-2">✓</span>
                            Specialty Items
                          </h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• Appliances (Freon removal on-site)</li>
                            <li>• Electronics and e-waste</li>
                            <li>• Tires (automotive)</li>
                            <li>• Mattresses and box springs</li>
                          </ul>
                        </div>

                        <div className="bg-white border-2 border-green-200 rounded-lg p-5">
                          <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                            <span className="text-green-500 text-xl mr-2">✓</span>
                            Yard Waste
                          </h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• Green waste (branches, leaves)</li>
                            <li>• Tree trimmings and brush</li>
                            <li>• Grass clippings</li>
                            <li>• Organic yard debris</li>
                          </ul>
                        </div>

                        <div className="bg-white border-2 border-green-200 rounded-lg p-5">
                          <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                            <span className="text-green-500 text-xl mr-2">✓</span>
                            Other Materials
                          </h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• Concrete, dirt, asphalt</li>
                            <li>• Base materials</li>
                            <li>• Large animal remains</li>
                            <li>• Mixed loads</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r mb-8">
                        <p className="text-gray-700">
                          <strong>Good news:</strong> The <strong>Santee landfill</strong> CAN handle appliances with Freon through their on-site removal service. However, this adds extra time to your visit. <Link href="/appliance-removal-san-diego" className="text-blue-600 hover:text-blue-700 font-semibold">Professional appliance removal</Link> handles all of this for you.
                        </p>
                      </div>

                      {/* Free Passes for Santee Residents */}
                      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" id="free-passes">Free Passes for Santee Residents</h2>

                      <p className="text-gray-700 mb-4">
                        If you live in Santee, you qualify for FREE dump passes—a genuinely useful benefit for residents:
                      </p>

                      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-xl p-6 mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <span className="text-2xl mr-2">🎫</span>
                          Santee Resident Free Pass Program
                        </h3>

                        <div className="space-y-4">
                          <div className="bg-white rounded-lg p-4">
                            <p className="font-bold text-gray-900 mb-2">What You Get:</p>
                            <ul className="space-y-2 text-gray-700">
                              <li>• <strong>TWO free passes per year</strong> (per household)</li>
                              <li>• Each pass covers up to <strong>ONE TON</strong> of materials</li>
                              <li>• Valid for: solid waste, bulky items, OR concrete</li>
                            </ul>
                          </div>

                          <div className="bg-white rounded-lg p-4">
                            <p className="font-bold text-gray-900 mb-2">How to Obtain Passes:</p>
                            <ul className="space-y-2 text-gray-700">
                              <li>• Visit the landfill pass office in person</li>
                              <li>• Bring: Valid driver's license (showing Santee address)</li>
                              <li>• Bring: Residential utility bill (gas, electric, water)</li>
                              <li>• Pass Office Hours: Monday-Friday, 8:00 AM - 3:00 PM</li>
                            </ul>
                          </div>

                          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
                            <p className="text-sm text-gray-700">
                              <strong>Important:</strong> Free passes expire one year from the date of issuance. Plan accordingly!
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-8">
                        This free pass program is excellent for Santee residents doing occasional cleanups. However, if you need more than 2 tons per year or want to avoid the time investment, <Link href="/junk-removal-santee" className="text-blue-600 hover:text-blue-700 font-semibold">professional junk removal</Link> offers unlimited service with transparent pricing.
                      </p>

                      {/* Directions Section */}
                      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" id="directions">Directions to Santee Dump</h2>

                      <p className="text-gray-700 mb-4">
                        <strong>Sycamore Landfill</strong> is located in East County San Diego, easily accessible from Santee, El Cajon, La Mesa, and Lakeside.
                      </p>

                      <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 mb-6">
                        <p className="font-bold text-gray-900 mb-3">📍 Address:</p>
                        <p className="text-gray-700 text-lg mb-4">8514 Mast Boulevard, Santee, CA 92071</p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2">From Downtown Santee:</h4>
                            <p className="text-gray-700 text-sm mb-2">Take Mission Gorge Rd east, turn right on Mast Blvd. Landfill is on the right.</p>
                            <p className="text-blue-600 text-sm font-semibold">Drive time: ~8 minutes</p>
                          </div>

                          <div>
                            <h4 className="font-bold text-gray-900 mb-2">From El Cajon:</h4>
                            <p className="text-gray-700 text-sm mb-2">Take I-8 West to Mission Gorge Rd, turn north then right on Mast Blvd.</p>
                            <p className="text-blue-600 text-sm font-semibold">Drive time: ~12 minutes</p>
                          </div>

                          <div>
                            <h4 className="font-bold text-gray-900 mb-2">From La Mesa:</h4>
                            <p className="text-gray-700 text-sm mb-2">Take I-8 East to Mission Gorge Rd exit, turn north then right on Mast Blvd.</p>
                            <p className="text-blue-600 text-sm font-semibold">Drive time: ~15 minutes</p>
                          </div>

                          <div>
                            <h4 className="font-bold text-gray-900 mb-2">From Lakeside:</h4>
                            <p className="text-gray-700 text-sm mb-2">Take Woodside Ave west to Mast Blvd, turn left. Landfill ahead on right.</p>
                            <p className="text-blue-600 text-sm font-semibold">Drive time: ~10 minutes</p>
                          </div>
                        </div>
                      </div>

                      {/* Cost Comparison - THE KEY SECTION */}
                      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" id="cost-comparison">Is a DIY Dump Run Worth It? The Real Cost</h2>

                      <p className="text-gray-700 mb-6">
                        Most people assume taking junk to the <strong>Santee dump</strong> saves money. Let's break down the <strong>actual costs</strong> for a typical garage cleanout:
                      </p>

                      <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-xl p-6 mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Half-Garage Cleanout: DIY vs Professional</h3>

                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b-2 border-gray-300">
                                <th className="py-3 px-4 text-left font-bold text-gray-900">Cost Factor</th>
                                <th className="py-3 px-4 text-right font-bold text-orange-600">DIY Santee Dump</th>
                                <th className="py-3 px-4 text-right font-bold text-green-600">Professional Removal</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              <tr>
                                <td className="py-3 px-4 text-gray-700">Truck rental (Home Depot/U-Haul)</td>
                                <td className="py-3 px-4 text-right text-gray-900">$75-$150</td>
                                <td className="py-3 px-4 text-right text-green-600 font-semibold">$0</td>
                              </tr>
                              <tr>
                                <td className="py-3 px-4 text-gray-700">Gas (round trip)</td>
                                <td className="py-3 px-4 text-right text-gray-900">$10-$20</td>
                                <td className="py-3 px-4 text-right text-green-600 font-semibold">$0</td>
                              </tr>
                              <tr>
                                <td className="py-3 px-4 text-gray-700">Sycamore Landfill fees (~500 lbs)</td>
                                <td className="py-3 px-4 text-right text-gray-900">$60-$125</td>
                                <td className="py-3 px-4 text-right text-green-600 font-semibold">$0</td>
                              </tr>
                              <tr>
                                <td className="py-3 px-4 text-gray-700">Hard hat purchase</td>
                                <td className="py-3 px-4 text-right text-gray-900">$6</td>
                                <td className="py-3 px-4 text-right text-green-600 font-semibold">$0</td>
                              </tr>
                              <tr>
                                <td className="py-3 px-4 text-gray-700">Your time (loading, driving, waiting)</td>
                                <td className="py-3 px-4 text-right text-gray-900">3-5 hours</td>
                                <td className="py-3 px-4 text-right text-green-600 font-semibold">0 hours</td>
                              </tr>
                              <tr>
                                <td className="py-3 px-4 text-gray-700">Physical labor / injury risk</td>
                                <td className="py-3 px-4 text-right text-gray-900">YOU do it all</td>
                                <td className="py-3 px-4 text-right text-green-600 font-semibold">None</td>
                              </tr>
                              <tr className="bg-gray-100 font-bold">
                                <td className="py-4 px-4 text-gray-900">TOTAL COST</td>
                                <td className="py-4 px-4 text-right text-orange-600 text-lg">$151-$301 + time</td>
                                <td className="py-4 px-4 text-right text-green-600 text-lg">$149-$349 all-in</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">💡 The Bottom Line</h3>
                        <p className="text-gray-700 mb-3">
                          For most loads, <strong>professional junk removal costs THE SAME or LESS</strong> than doing it yourself—and requires <strong>zero work, zero time, and zero risk</strong> from you.
                        </p>
                        <p className="text-gray-700">
                          Plus, we're available <strong>7 days per week</strong> (the Santee dump is closed Sundays), handle items the landfill restricts, and you never need a hard hat or tarp.
                        </p>
                      </div>

                      {/* When DIY Makes Sense */}
                      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">When DIY to Santee Dump Makes Sense</h2>

                      <p className="text-gray-700 mb-4">
                        To be fair, there ARE situations where a DIY dump run makes sense:
                      </p>

                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold text-xl mr-3">✓</span>
                          <span className="text-gray-700"><strong>You already own a truck</strong> and don't need to rent one</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold text-xl mr-3">✓</span>
                          <span className="text-gray-700"><strong>Just 1-2 small items</strong> that fit in your car trunk</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold text-xl mr-3">✓</span>
                          <span className="text-gray-700"><strong>You have the free Santee resident pass</strong> and it's still valid</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold text-xl mr-3">✓</span>
                          <span className="text-gray-700"><strong>You live within 5 minutes</strong> of Sycamore Landfill</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold text-xl mr-3">✓</span>
                          <span className="text-gray-700"><strong>You enjoy physical work</strong> and have the free time</span>
                        </li>
                      </ul>

                      <p className="text-gray-700 mb-8">
                        If none of these apply, professional junk removal is usually the smarter choice—both financially and for your time.
                      </p>

                      {/* Service Pitch Section */}
                      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Professional Junk Removal in Santee</h2>

                      <p className="text-gray-700 mb-6">
                        <Link href="/junk-removal-santee" className="text-blue-600 hover:text-blue-700 font-semibold">Severin Hauling</Link> provides professional <strong>junk removal in Santee</strong>, El Cajon, La Mesa, Lakeside, and throughout East County San Diego. We're the local alternative to DIY dump runs.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                          <h3 className="font-bold text-gray-900 mb-4 flex items-center text-lg">
                            <span className="text-blue-600 text-2xl mr-2">✓</span>
                            Service Areas
                          </h3>
                          <ul className="space-y-2 text-gray-700">
                            <li>• <Link href="/junk-removal-santee" className="text-blue-600 hover:text-blue-700">Santee</Link></li>
                            <li>• <Link href="/junk-removal-el-cajon" className="text-blue-600 hover:text-blue-700">El Cajon</Link></li>
                            <li>• <Link href="/la-mesa-junk-removal" className="text-blue-600 hover:text-blue-700">La Mesa</Link></li>
                            <li>• <Link href="/junk-removal-lakeside" className="text-blue-600 hover:text-blue-700">Lakeside</Link></li>
                            <li>• Alpine & East County</li>
                          </ul>
                        </div>

                        <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                          <h3 className="font-bold text-gray-900 mb-4 flex items-center text-lg">
                            <span className="text-blue-600 text-2xl mr-2">✓</span>
                            Key Benefits
                          </h3>
                          <ul className="space-y-2 text-gray-700">
                            <li>• Open 7 days/week (dump closed Sundays)</li>
                            <li>• Same-day service available</li>
                            <li>• We handle items the dump restricts</li>
                            <li>• No hard hat, tarp, or closed-toe shoes needed</li>
                            <li>• Zero physical labor from you</li>
                          </ul>
                        </div>
                      </div>

                      {/* Comparison Table */}
                      <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Sycamore Landfill vs Professional Junk Removal</h3>

                      <div className="overflow-x-auto mb-8">
                        <table className="w-full border-2 border-gray-200 rounded-lg">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="py-3 px-4 text-left font-bold text-gray-900">Feature</th>
                              <th className="py-3 px-4 text-center font-bold text-gray-900">Sycamore Landfill</th>
                              <th className="py-3 px-4 text-center font-bold text-gray-900">Severin Hauling</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            <tr>
                              <td className="py-3 px-4 text-gray-700 font-semibold">Sunday availability</td>
                              <td className="py-3 px-4 text-center text-red-600 font-bold">❌ Closed</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">✓ Open</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="py-3 px-4 text-gray-700 font-semibold">You do the lifting</td>
                              <td className="py-3 px-4 text-center text-red-600">✓ Yes (injury risk)</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">❌ We do it</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-gray-700 font-semibold">Hard hat required</td>
                              <td className="py-3 px-4 text-center text-red-600">✓ Yes ($6)</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">❌ No</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="py-3 px-4 text-gray-700 font-semibold">Tarp required</td>
                              <td className="py-3 px-4 text-center text-red-600">✓ Yes</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">❌ No</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-gray-700 font-semibold">Wait time</td>
                              <td className="py-3 px-4 text-center text-gray-700">15-45 min</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">Scheduled appointment</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="py-3 px-4 text-gray-700 font-semibold">Items with Freon</td>
                              <td className="py-3 px-4 text-center text-gray-700">Hassle</td>
                              <td className="py-3 px-4 text-center text-green-600 font-bold">✓ We handle it</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* CTA Box */}
                      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 my-12 text-center">
                        <h3 className="text-3xl font-bold mb-4">Skip the Santee Dump — We Handle Everything</h3>
                        <p className="text-xl text-blue-100 mb-6">
                          Same-day junk removal for Santee & East County
                        </p>
                        <ul className="text-left max-w-xl mx-auto mb-6 space-y-2">
                          <li className="flex items-center text-blue-100">
                            <span className="text-green-400 text-xl mr-3">✓</span>
                            Open 7 days/week (dump closed Sundays)
                          </li>
                          <li className="flex items-center text-blue-100">
                            <span className="text-green-400 text-xl mr-3">✓</span>
                            We take items the landfill restricts
                          </li>
                          <li className="flex items-center text-blue-100">
                            <span className="text-green-400 text-xl mr-3">✓</span>
                            Often CHEAPER than DIY
                          </li>
                          <li className="flex items-center text-blue-100">
                            <span className="text-green-400 text-xl mr-3">✓</span>
                            No hard hat, no tarp, no truck needed
                          </li>
                        </ul>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <a
                            href="tel:6197500114"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors inline-block"
                          >
                            📞 (619) 750-0114
                          </a>
                          <Link
                            href="/contact"
                            className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg text-xl font-bold transition-colors inline-block"
                          >
                            Get Free Quote
                          </Link>
                        </div>
                        <p className="text-blue-200 text-sm mt-4">
                          Starting at $69 for small items • Same-day service available
                        </p>
                      </div>

                      {/* FAQ Section */}
                      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" id="faq">Frequently Asked Questions</h2>

                      <div className="space-y-4 mb-12">
                        {/* FAQ 1 */}
                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">
                            What time does Santee dump open?
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
                            <p className="text-gray-700 leading-relaxed">Santee dump (Sycamore Landfill) is open Monday-Friday 7:00 AM to 4:30 PM, and Saturday 7:30 AM to 3:00 PM. The dump is CLOSED on Sundays and major holidays. Professional junk removal services like Severin Hauling operate 7 days per week including Sundays. Call <a href="tel:6197500114" className="text-blue-600 hover:text-blue-700 font-semibold">(619) 750-0114</a> for same-day service.</p>
                          </div>
                        </details>

                        {/* FAQ 2 */}
                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">
                            How much does it cost to dump at Santee?
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
                            <p className="text-gray-700 leading-relaxed">Santee dump (Sycamore Landfill) charges $125 per ton for general trash, $76 per ton for green waste and base materials. You'll also need a hard hat ($6 if you don't have one) and must tarp your load. Factor in truck rental ($75-$150), gas ($10-$20), and your time (3-5 hours), and professional junk removal often costs less. Severin Hauling starts at $69 for small items with all-inclusive pricing.</p>
                          </div>
                        </details>

                        {/* FAQ 3 */}
                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">
                            Is Santee dump open on Sunday?
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
                            <p className="text-gray-700 leading-relaxed">No, Santee dump (Sycamore Landfill) is CLOSED on Sundays. The landfill is only open Monday-Saturday. If you need junk removal on Sunday, professional services like Severin Hauling operate 7 days per week throughout Santee, El Cajon, La Mesa, and East County. Call <a href="tel:6197500114" className="text-blue-600 hover:text-blue-700 font-semibold">(619) 750-0114</a>.</p>
                          </div>
                        </details>

                        {/* FAQ 4 */}
                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">
                            What's the difference between Santee dump and Sycamore Landfill?
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
                            <p className="text-gray-700 leading-relaxed">Santee dump and Sycamore Landfill are the same facility. The official name is Sycamore Landfill, but locals call it Santee dump or Santee landfill. Located at 8514 Mast Boulevard, Santee, CA 92071. Phone: (619) 562-0530.</p>
                          </div>
                        </details>

                        {/* FAQ 5 */}
                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">
                            Do I need a hard hat at Santee dump?
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
                            <p className="text-gray-700 leading-relaxed">Yes, hard hats are REQUIRED at Santee dump (Sycamore Landfill). If you don't have one, you can purchase a hard hat for approximately $6 at the entrance booth. Closed-toe shoes are also required. Professional junk removal services handle everything, so you don't need any safety equipment.</p>
                          </div>
                        </details>

                        {/* FAQ 6 */}
                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">
                            Can Santee residents dump for free?
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
                            <p className="text-gray-700 leading-relaxed">Santee residents receive TWO free passes per year (per household). Each pass covers up to ONE TON of solid waste, bulky items, or concrete. To obtain passes, visit the landfill office with a valid driver's license AND residential utility bill. Passes expire one year from issuance.</p>
                          </div>
                        </details>

                        {/* FAQ 7 */}
                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">
                            What can't I bring to Santee dump?
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
                            <p className="text-gray-700 leading-relaxed">Santee dump restricts hazardous waste, certain chemicals, and liquids. However, they DO accept appliances (with on-site Freon removal), electronics, tires, mattresses, carpet, and large animal remains. Professional junk removal services like Severin Hauling can handle most restricted items through proper disposal channels. Call <a href="tel:6197500114" className="text-blue-600 hover:text-blue-700 font-semibold">(619) 750-0114</a>.</p>
                          </div>
                        </details>

                        {/* FAQ 8 */}
                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">
                            Is professional junk removal cheaper than going to Santee dump?
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
                            <p className="text-gray-700 leading-relaxed">Often yes, when you factor in all costs. DIY to Santee dump: truck rental ($75-$150) + gas ($10-$20) + dump fees ($60-$125) + hard hat ($6) + your time (3-5 hours) = $151-$301+. Professional junk removal from Severin Hauling: $149-$349 all-inclusive with zero work from you. Call <a href="tel:6197500114" className="text-blue-600 hover:text-blue-700 font-semibold">(619) 750-0114</a> for a free quote.</p>
                          </div>
                        </details>

                        {/* FAQ 9 */}
                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">
                            What payment methods does Santee dump accept?
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
                            <p className="text-gray-700 leading-relaxed">Sycamore Landfill accepts cash, check, and credit cards. Payment is made after weighing your load. Professional junk removal from Severin Hauling offers flexible payment including cash, credit card, Venmo, Zelle, and Cash App for your convenience.</p>
                          </div>
                        </details>

                        {/* FAQ 10 */}
                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">
                            How long does it take to dump at Santee landfill?
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
                            <p className="text-gray-700 leading-relaxed">Expect 30-60 minutes at Sycamore Landfill including wait time, weighing, unloading, and payment. Add 1-2 hours for loading your truck and 1-2 hours for truck rental pickup/return. Total DIY time: 3-5 hours. Professional junk removal from Severin Hauling takes zero hours of your time with same-day service available.</p>
                          </div>
                        </details>

                        {/* FAQ 11 */}
                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">
                            Can I dump mattresses at Santee dump?
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
                            <p className="text-gray-700 leading-relaxed">Yes, Sycamore Landfill accepts mattresses and box springs for disposal as part of general waste ($125/ton). Professional mattress disposal through Severin Hauling includes pickup from your home, hauling, and eco-friendly recycling when possible. Call <a href="tel:6197500114" className="text-blue-600 hover:text-blue-700 font-semibold">(619) 750-0114</a> for same-day mattress removal in Santee and East County.</p>
                          </div>
                        </details>

                        {/* FAQ 12 */}
                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">
                            Where is the Santee dump located exactly?
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
                            <p className="text-gray-700 leading-relaxed">Sycamore Landfill (Santee dump) is located at 8514 Mast Boulevard, Santee, CA 92071. From downtown Santee, take Mission Gorge Rd east to Mast Blvd, turn right. Approximately 8 minutes from Santee Town Center. GPS coordinates: 32.8384, -116.9739. Phone: (619) 562-0530.</p>
                          </div>
                        </details>

                        {/* FAQ 13 */}
                        <details className="border border-gray-200 rounded-xl overflow-hidden group">
                          <summary className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between cursor-pointer list-none">
                            <h3 className="font-bold text-gray-900 text-lg">
                            Do I need an appointment to go to Santee dump?
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
                            <p className="text-gray-700 leading-relaxed">No appointment needed for Sycamore Landfill. It operates first-come, first-served during open hours (Mon-Fri 7AM-4:30PM, Sat 7:30AM-3PM, CLOSED Sunday). Wait times vary from 15-45 minutes. Severin Hauling offers scheduled appointments for junk removal with no wait time. Call <a href="tel:6197500114" className="text-blue-600 hover:text-blue-700 font-semibold">(619) 750-0114</a>.</p>
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

                        <Link href="/junk-removal-santee" className="block p-5 bg-gray-50 border-2 border-gray-200 hover:border-blue-400 rounded-lg transition-colors">
                          <h4 className="font-bold text-lg mb-2 text-blue-600">Junk Removal Santee</h4>
                          <p className="text-gray-600 text-sm">Professional junk removal throughout Santee and East County</p>
                        </Link>

                        <Link href="/furniture-disposal-san-diego" className="block p-5 bg-gray-50 border-2 border-gray-200 hover:border-blue-400 rounded-lg transition-colors">
                          <h4 className="font-bold text-lg mb-2 text-blue-600">Furniture Disposal</h4>
                          <p className="text-gray-600 text-sm">Professional furniture removal and disposal services</p>
                        </Link>

                        <Link href="/san-diego-mattress-disposal" className="block p-5 bg-gray-50 border-2 border-gray-200 hover:border-blue-400 rounded-lg transition-colors">
                          <h4 className="font-bold text-lg mb-2 text-blue-600">Mattress Disposal</h4>
                          <p className="text-gray-600 text-sm">Eco-friendly mattress removal and recycling</p>
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Santee"
                    nearbyLocations={nearbyLocations}
                    nearbyHeading="East County Junk Removal"
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
                Ready to Skip the Santee Dump?
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                We serve Santee, El Cajon, La Mesa, Lakeside, and all of East County with professional junk removal that's often cheaper than DIY—and requires zero work from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  📞 Call (619) 750-0114
                </a>
                <Link
                  href="/contact"
                  className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  Get Free Quote
                </Link>
              </div>
              <p className="text-blue-200 text-lg">
                Same-Day Service Available • 7 Days Per Week • Licensed & Insured
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
