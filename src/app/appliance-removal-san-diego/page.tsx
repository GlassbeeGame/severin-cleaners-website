import type { Metadata } from "next";
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
  title: "Appliance Removal San Diego | Fridge & Washer Disposal",
  description: "Professional appliance removal in San Diego. We remove refrigerators, washers, dryers, stoves, and all appliance types. Same-day service available. Call (619) 750-0114. Starting at $100.",
  keywords: [
    "appliance removal San Diego",
    "refrigerator removal San Diego",
    "washer dryer removal San Diego",
    "stove removal San Diego",
    "appliance disposal San Diego",
    "appliance hauling San Diego",
    "old appliance removal",
    "appliance pickup San Diego",
    "same day appliance removal",
    "eco-friendly appliance disposal"
  ],
  openGraph: {
    title: "Appliance Removal San Diego | Refrigerator & Washer Disposal | Severin Hauling",
    description: "Professional appliance removal in San Diego. We remove refrigerators, washers, dryers, stoves, and all appliance types. Same-day service available. Call (619) 750-0114. Starting at $100.",
    url: "https://www.severinhauling.com/appliance-removal-san-diego",
    siteName: "Severin Hauling",
    type: "website",
    locale: "en_US",
    images: [{
      url: "https://www.severinhauling.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Appliance Removal San Diego - Severin Hauling"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Appliance Removal San Diego | Fridge & Washer Disposal",
    description: "Professional appliance removal in San Diego. We remove refrigerators, washers, dryers, stoves. Same-day service. Call (619) 750-0114!",
    images: ["https://www.severinhauling.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.severinhauling.com/appliance-removal-san-diego",
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

const applianceFAQs = [
  {
    question: "How much does appliance removal cost in San Diego?",
    answer: "Our appliance removal San Diego pricing starts at $100 for a single appliance. Two appliances (like a washer and dryer set) cost $249, while 3-4 appliances cost $319. For larger jobs with 5-6 appliances, pricing is $349, and a full kitchen with 7+ appliances is $495. All prices include removal from anywhere on your property, loading, hauling, and proper disposal. Call (619) 750-0114 for an accurate quote based on your specific needs."
  },
  {
    question: "Do you disconnect appliances before removal?",
    answer: "For basic disconnection of already-accessible appliances (unplugging, unhooking water lines), this is typically included in our standard appliance removal San Diego pricing. However, built-in appliances or items requiring special disconnection (gas lines, hardwired electrical, complex installations) may have additional fees. We'll provide a clear quote upfront so you know exactly what to expect."
  },
  {
    question: "Can you remove built-in appliances?",
    answer: "Yes, we handle appliance disposal San Diego for built-in units including dishwashers, microwaves, ovens, and more. Built-in appliances often require additional labor to safely disconnect and extract without damaging cabinetry or countertops. We'll assess the situation and provide an accurate quote that includes any necessary additional work."
  },
  {
    question: "Do I need to empty the refrigerator before removal?",
    answer: "Yes, please empty all food and liquids from refrigerators and freezers before our refrigerator removal San Diego team arrives. This prevents spills during transport and ensures safe handling. Remove all shelves and drawers if they're loose, or let us know if you'd like us to secure them for transport."
  },
  {
    question: "Can you remove appliances from upstairs?",
    answer: "Absolutely! Our professional team handles washer dryer removal San Diego from any floor, including upstairs units, basements, and tight spaces. We have the specialized equipment and experience to safely navigate stairs and doorways. We take care to protect your walls, floors, and railings during the removal process."
  },
  {
    question: "What happens to old appliances after pickup?",
    answer: "Refrigerators go to certified Freon disposal facilities that meet California Air Resources Board standards. Metal appliances get recycled at Allan Company Recycling or Miramar Greenery. Working units go to Father Joe's Villages and other San Diego charities. Everything gets processed according to EPA and California regulations—no landfill dumping, no illegal disposal."
  },
  {
    question: "Do you offer same-day appliance removal?",
    answer: "Yes! Same-day appliance removal San Diego is available throughout San Diego when you call early. We offer flexible scheduling including evenings and weekends at no extra charge. Same-day service is perfect for kitchen remodels, emergency removals, or when your new appliances are being delivered and you need the old ones hauled away immediately."
  },
  {
    question: "Can you remove multiple appliances at once?",
    answer: "Yes! We specialize in removing multiple appliances in a single trip. Whether you're doing a complete kitchen remodel, clearing out a rental property, or handling an estate cleanout, we can remove all your appliances at once. Our pricing structure offers better value for multiple items - for example, 3-4 appliances cost $319 total, which is more economical than individual removal. Call (619) 750-0114 for a quote on your specific project."
  }
];

export default function ApplianceRemovalPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.severinhauling.com" },
    { name: "Services", url: "https://www.severinhauling.com/services" },
    { name: "Appliance Removal", url: "https://www.severinhauling.com/appliance-removal-san-diego" },
  ]);

  const faqSchema = generateFAQSchema(applianceFAQs);

  const serviceSchema = {
    "@type": "Service",
    "name": "Appliance Removal in San Diego",
    "description": "Professional appliance removal and recycling in San Diego. We remove refrigerators, washers, dryers, stoves, and all appliance types with eco-friendly disposal.",
    "url": "https://www.severinhauling.com/appliance-removal-san-diego",
    "serviceType": "Appliance Removal Service",
    "provider": {
      "@id": "https://www.severinhauling.com/appliance-removal-san-diego#business"
    }
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://www.severinhauling.com/appliance-removal-san-diego#business",
    "name": "Severin Hauling LLC",
    "image": "https://www.severinhauling.com/og-image.jpg",
    "telephone": "+1-619-750-0114",
    "priceRange": "$100-$495",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Venmo", "Zelle", "Cash App"],
    "currenciesAccepted": "USD",
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
    "url": "https://www.severinhauling.com/appliance-removal-san-diego",
    "knowsAbout": [
      "Refrigerator Freon-Compliant Disposal and Recycling",
      "Gas Line Appliance Disconnection and Removal",
      "Heavy Appliance Stair Navigation and Transport",
      "Built-In Appliance Cabinet Extraction",
      "Commercial Kitchen Equipment Removal",
      "Water Heater Safe Disposal and Recycling",
      "Washer Dryer Stackable Unit Removal",
      "San Diego County Appliance Recycling Regulations"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Appliance Removal Services San Diego",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Refrigerator Removal and Recycling",
            "description": "Professional refrigerator removal with Freon-compliant recycling at certified San Diego facilities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Washer Dryer Removal Service",
            "description": "Complete washer and dryer removal with disconnection and eco-friendly appliance recycling"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Stove and Built-In Appliance Removal",
            "description": "Safe gas and electric stove removal with cabinet-friendly extraction techniques"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Same-Day Appliance Disposal San Diego",
            "description": "Emergency appliance removal with same-day pickup and responsible recycling throughout San Diego County"
          }
        }
      ]
    },
    "areaServed": {
      "@type": "City",
      "name": "San Diego",
      "containedInPlace": {
        "@type": "State",
        "name": "California"
      }
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "aggregateRating": generateAggregateRatingSchema(),
    "sameAs": [
      "https://www.facebook.com/severinhauling",
      "https://www.instagram.com/severinhauling/",
      "https://www.yelp.com/biz/severin-hauling-san-diego",
      "https://www.thumbtack.com/ca/la-mesa/junk-removal/severin-hauling/service/541381661422116888"
    ]
  };

  const neighborhoodSchema = {
    "@type": "ItemList",
    "name": "San Diego Neighborhoods for Appliance Removal",
    "description": "Complete appliance removal and recycling coverage throughout San Diego County",
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
          "name": "Pacific Beach",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Diego",
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
        "position": 4,
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
        "position": 5,
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
        "position": 6,
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
        "position": 7,
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
        "position": 8,
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
      },
      {
        "@type": "ListItem",
        "position": 9,
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
        "position": 10,
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
      }
    ]
  };

  const howToSchema = generateHowToSchema({
    cityName: "San Diego",
    pageUrl: "https://www.severinhauling.com/appliance-removal-san-diego"
  });

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema, neighborhoodSchema, howToSchema]
  };

  const relatedServices = [
    { name: "Furniture Removal", slug: "furniture-disposal-san-diego" },
    { name: "Hot Tub Removal", slug: "hot-tub-removal-san-diego" },
    { name: "Mattress Disposal", slug: "san-diego-mattress-disposal" },
    { name: "Same Day Junk Removal", slug: "same-day-junk-removal-san-diego" },
  ];

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <Header />

      <main>
        {/* Hero Section - Optimized for Core Web Vitals */}
        <OptimizedGradientHero
          title="Appliance Removal San Diego"
          subtitle="Fast, Professional Service • We Handle the Heavy Lifting • Same-Day Pickup Available"
          description="Licensed & Insured • Starting at $100 • Serving All of San Diego County"
        />

        {/* Main Content with Sidebar - 2-COLUMN LAYOUT */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">

                {/* LEFT COLUMN - Main Content (lg:col-span-2) */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Old Appliances Taking Up Space? We'll Haul Them Away.
              </h2>

              <div className="prose prose-lg max-w-none">
                {/* Appliance Removal Image - Integrated */}
                <div className="float-right ml-6 mb-6 w-80 hidden md:block">
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/optimized/fridge.jpg"
                      alt="Refrigerator removal San Diego - professional appliance disposal and recycling"
                      fill
                      className="object-cover"
                      sizes="320px"
                    />
                  </div>
                </div>

                <p className="text-lg mb-4">
                  Got an old fridge in the garage? Washer that quit last month still sitting in the laundry room? We haul appliances out of homes across San Diego County—from <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla condos on Prospect Street</a> to <a href="/junk-removal-pacific-beach" className="text-blue-600 hover:underline">Pacific Beach walk-ups off Garnet</a>. Call (619) 750-0114 and we'll get it out today.
                </p>

                <p className="text-lg mb-6">
                  Refrigerators, washers, dryers, stoves, dishwashers—if it plugs in or connects to a gas line, we remove it. We work in <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a>, Point Loma, North Park, <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a>—all over the county. Also need <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">furniture gone</a> or <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">a mattress hauled</a>? Same truck, same day.
                </p>

                <div className="clear-both"></div>

                <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove</h3>
                <p className="text-lg mb-4">
                  If it's an appliance and you need it gone, we'll take it. Here's what we haul away most often:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">Kitchen Appliances</h4>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Refrigerators & freezers (all sizes)</li>
                      <li>Stoves, ovens & cooktops (gas or electric)</li>
                      <li>Dishwashers & range hoods</li>
                      <li>Microwaves, garbage disposals, ice makers</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">Laundry & Home Appliances</h4>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Washers & dryers (stackable or side-by-side)</li>
                      <li>Water heaters & dehumidifiers</li>
                      <li>AC units, fans, and small appliances</li>
                      <li>Space heaters & compact freezers</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">How It Works</h3>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
                    <h4 className="font-bold text-lg mb-2">Call for Pricing</h4>
                    <p className="text-gray-700">
                      Tell us what you've got. One fridge? Full kitchen? We'll quote you over the phone—(619) 750-0114.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
                    <h4 className="font-bold text-lg mb-2">We Show Up & Haul It</h4>
                    <p className="text-gray-700">
                      Our crew arrives on time, handles disconnections, and removes your appliance safely—no floor damage, no mess.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
                    <h4 className="font-bold text-lg mb-2">Proper Recycling</h4>
                    <p className="text-gray-700">
                      Refrigerators go to certified Freon disposal. Metals get recycled at Allan Company on 28th Street. Working units go to Father Joe's Villages. No landfill dumping.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mt-8 mb-4">Specialized Appliance Removal Services</h2>

                <h3 className="text-2xl font-bold mt-6 mb-3">Refrigerator Removal San Diego</h3>
                <p className="text-lg mb-6">
                  Refrigerators are heavy and awkward—especially getting them down stairs or through narrow San Diego hallways. We handle garages, upstairs kitchens, <a href="/junk-removal-kearny-mesa" className="text-blue-600 hover:underline">Kearny Mesa restaurant equipment</a>, and <a href="/junk-removal-la-mesa" className="text-blue-600 hover:underline">La Mesa residential units</a>. Freon gets disposed of at certified facilities that meet California Air Resources Board standards—no shortcuts.
                </p>

                <h3 className="text-2xl font-bold mt-6 mb-3">Washer & Dryer Removal San Diego</h3>
                <p className="text-lg mb-6">
                  We disconnect both units, haul them out together, and handle the recycling. Perfect when you're upgrading or when the delivery guys show up tomorrow and the old set is still sitting there. From <a href="/junk-removal-mira-mesa" className="text-blue-600 hover:underline">Mira Mesa apartment complexes</a> to <a href="/junk-removal-santee" className="text-blue-600 hover:underline">Santee houses</a>, we do this every day.
                </p>

                <h3 className="text-2xl font-bold mt-6 mb-3">Stove & Dishwasher Removal San Diego</h3>
                <p className="text-lg mb-6">
                  From gas ranges to built-in dishwashers, our stove removal San Diego team handles careful extraction without damaging cabinetry.
                </p>

                <h3 className="text-2xl font-bold mt-6 mb-3">Freezer Removal San Diego</h3>
                <p className="text-lg mb-6">
                  We remove garage or chest freezers of all sizes—no need to lift a thing. Just empty the contents, and we'll handle the rest. Also removing furniture? Check our <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">furniture removal service</a>.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Eco-Friendly Appliance Recycling San Diego</h3>
                <p className="text-lg mb-4">
                  Every appliance we remove gets processed at certified recycling facilities here in San Diego. Refrigerators and freezers go to Freon recovery centers that meet California Air Resources Board standards—no shortcuts on refrigerant handling. Washers, dryers, stoves, and other metal appliances head to Allan Company Recycling on 28th Street or Miramar Greenery, where they're broken down and the metal gets recycled. Working appliances that still have life left go to Father Joe's Villages and other San Diego charities.
                </p>
                <p className="text-lg mb-6">
                  We follow EPA regulations and California disposal requirements because it's the law, not because it's a marketing angle. Freon gets captured at certified facilities before refrigerators are scrapped. Metals get separated and recycled locally instead of dumped. If an appliance still works, it goes to someone who needs it. That's how appliance recycling San Diego should work—straightforward, legal, local.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">When San Diego Homeowners Call Us</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Kitchen Remodels</h4>
                    <p className="text-gray-700 text-sm">
                      Old units out before the new ones arrive.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Upgrading Appliances</h4>
                    <p className="text-gray-700 text-sm">
                      We'll remove your old fridge before tomorrow's delivery.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Moving Out</h4>
                    <p className="text-gray-700 text-sm">
                      Leave the property appliance-free for sale or rental.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Broken Units</h4>
                    <p className="text-gray-700 text-sm">
                      Non-working dishwashers or washers? We'll handle it.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Property Management</h4>
                    <p className="text-gray-700 text-sm">
                      Fast service for turnover or eviction cleanouts.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Estate Cleanouts</h4>
                    <p className="text-gray-700 text-sm">
                      Multiple appliances removed in one visit.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Not Do It Yourself?</h3>
                <p className="text-lg mb-4">
                  Refrigerators weigh 200-300 pounds. Washers aren't much lighter. You risk throwing your back out, scratching floors, or cracking a gas line if you don't know what you're doing. We've done this thousands of times—you probably haven't.
                </p>

                <ul className="list-none space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Gas line and water line disconnection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Floor protection (cardboard, dollies, straps)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Freon-compliant recycling for refrigerators</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Licensed and insured (CA contractor requirements)</span>
                  </li>
                </ul>

                <p className="text-lg mb-6">
                  You could rent a truck, find someone to help, figure out where to legally dispose of a refrigerator with Freon. Or call us and it's done in an hour.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Where We Work in San Diego County</h3>
                <p className="text-lg mb-4">
                  We run jobs all over—from <a href="/junk-removal-oceanside" className="text-blue-600 hover:underline">Oceanside</a> down to <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a>, <a href="/junk-removal-del-mar" className="text-blue-600 hover:underline">Del Mar</a> to <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a>. If you're in San Diego County, we'll get there.
                </p>

                <p className="text-lg mb-6 text-gray-700">
                  La Jolla • Pacific Beach • Downtown • North Park • Hillcrest • Mission Valley • La Mesa • Santee • Poway • El Cajon • Chula Vista • Oceanside • Vista • Del Mar • Carlsbad • Escondido • Mira Mesa • Kearny Mesa • Point Loma
                </p>

                <p className="text-lg mb-6">
                  Recycling gets handled at Allan Company Recycling off 28th Street, Miramar Greenery, and certified Freon recovery facilities. Everything follows California Air Resources Board and EPA standards.
                </p>

              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Sidebar (lg:col-span-1) */}
          <div className="lg:col-span-1">
            <LocationSidebarCTA
              locationName="Appliance Removal"
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
          locationName="Appliance Removal"
          contextParagraph="Professional appliance removal with transparent pricing. From single appliances to multiple units, our pricing includes all labor, hauling, and eco-friendly disposal at licensed San Diego facilities."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Appliance Removal" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Appliance Removal San Diego"
          description="Get answers to common questions about our professional appliance removal San Diego service and pricing."
          faqs={applianceFAQs}
          ctaTitle="Still Have Questions About Appliance Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our appliance removal San Diego services, provide detailed quotes, or schedule your same-day service."
          includeSchema={false}
        />
      </main>

      <Footer />
    </>
  );
}
