import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/SchemaMarkup";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import { generateLocationServiceSchema, generateBreadcrumbSchema, generateAggregateRatingSchema, generateHowToSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Vista Junk Removal | Brewery to Shadowridge | (619) 750-0114",
  description: "Junk removal in Vista CA: Downtown Brewery District, Business Park, and Shadowridge. Same-day hauling available. Licensed and insured. Call (619) 750-0114.",
  keywords: [
    "junk removal Vista",
    "junk removal Vista CA",
    "Vista junk removal",
    "same day junk removal Vista",
    "commercial junk removal Vista",
    "junk hauling Vista",
    "Shadowridge junk removal",
  ],
  openGraph: {
    title: "Vista Junk Removal | Brewery District to Shadowridge | Severin Hauling",
    description: "Junk removal in Vista CA for homes, businesses, and apartments. Brewery District, Business Park, Shadowridge. Same-day service. Call (619) 750-0114.",
    url: "https://www.severinhauling.com/junk-removal-vista",
    siteName: 'Severin Hauling',
    images: [{
      url: 'https://www.severinhauling.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Vista Junk Removal - Severin Hauling'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vista Junk Removal | Brewery District to Shadowridge | Severin Hauling",
    description: "Junk removal in Vista CA for homes, businesses, and apartments. Brewery District, Business Park, Shadowridge. Same-day service available.",
    images: ['https://www.severinhauling.com/og-image.jpg'],
  },
  alternates: {
    canonical: "https://www.severinhauling.com/junk-removal-vista",
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
    'geo.placename': 'Vista',
    'geo.position': '33.2000;-117.2425',
    'ICBM': '33.2000, -117.2425',
  },
};

const vistaFAQs = [
  {
    question: "How much does junk removal in Vista cost?",
    answer: "Pricing is volume-based: single items start at $69, standard items like couches or appliances run around $100, and full-truck loads top out at $495. Quarter-load is $249 and half-load is $349. All pricing includes labor, hauling, and disposal with no separate fees for Shadowridge hillside access, Business Park after-hours service, or any Vista location. Call (619) 750-0114 for a free estimate."
  },
  {
    question: "Do you offer same-day junk removal in Vista?",
    answer: "Yes. Call before noon and we can typically get to you the same day anywhere in Vista or North County. We cover all three zip codes: 92081, 92083, and 92084. We give you a real arrival window, not a four-hour guess."
  },
  {
    question: "Do you work with Vista businesses and commercial properties?",
    answer: "Yes. We handle commercial cleanouts throughout Vista Business Park, the Main Street brewery district, and retail centers across the city. That includes office furniture removal, restaurant and brewery equipment disposal, warehouse inventory liquidation, and construction debris removal. After-hours and weekend slots are available for businesses that cannot shut down mid-week."
  },
  {
    question: "Do you remove furniture and appliances from Vista homes?",
    answer: "Yes, sofas, sectionals, mattresses, refrigerators, washers, dryers, and everything in between. We work in Shadowridge hillside homes, Downtown Vista apartments, and Rancho Buena Vista garages. Usable items go to North County charities; appliances go to certified recycling facilities."
  },
  {
    question: "What parts of Vista do you cover?",
    answer: "We cover all of Vista including Downtown Village, Shadowridge, Rancho Buena Vista, Buena Creek, Vista Business Park, Brengle Terrace, North Vista, Alta Vista, and the Vista Village Drive corridor. We serve all three zip codes: 92081, 92083, and 92084."
  },
  {
    question: "Can you handle apartment and condo pickups in Vista?",
    answer: "Yes. We work in apartment buildings and condos throughout Downtown Vista and Shadowridge complexes. We protect walls and common areas, coordinate with property managers, and handle tenant turnovers and estate transitions. HOA scheduling requirements in Shadowridge are routine for us."
  },
  {
    question: "What happens to items after they are hauled away?",
    answer: "We sort every load before disposal. Furniture and household items in good condition are donated to North County charities including Goodwill and Salvation Army. Metal goes to San Diego recycling facilities. Mattresses go to specialized recycling centers. Electronics receive certified e-waste handling per California regulations."
  },
  {
    question: "Do you offer free estimates for Vista jobs?",
    answer: "Yes. For most jobs, a phone estimate works fine: describe what needs to go and we will give you a price range based on our volume tiers. For larger cleanouts like estates, warehouse liquidations, or multi-room apartment turnovers, we can do an on-site estimate at no charge. Call (619) 750-0114 anytime."
  }
];

export default function JunkRemovalVistaPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.severinhauling.com" },
    { name: "Areas We Serve", url: "https://www.severinhauling.com/areas-we-serve" },
    { name: "Vista Junk Removal", url: "https://www.severinhauling.com/junk-removal-vista" },
  ]);

  const faqSchema = generateFAQSchema(vistaFAQs);

  const serviceSchema = {
    "@type": "Service",
    "name": "Junk Removal in Vista",
    "description": "Professional junk removal in Vista CA for homes, apartments, and businesses. Same-day service available. Serving Shadowridge, Downtown Vista Village, Rancho Buena Vista, Vista Business Park, and all 92081, 92083, 92084 zip codes.",
    "url": "https://www.severinhauling.com/junk-removal-vista",
    "serviceType": "Junk Removal",
    "provider": {
      "@id": "https://www.severinhauling.com/junk-removal-vista#business"
    }
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://www.severinhauling.com/junk-removal-vista#business",
    "name": "Severin Hauling LLC",
    "image": "https://www.severinhauling.com/og-image.jpg",
    "telephone": "+1-619-750-0114",
    "priceRange": "$69-$495",
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
    "url": "https://www.severinhauling.com/junk-removal-vista",
    "openingHours": "Mo-Su 00:00-23:59",
    "aggregateRating": generateAggregateRatingSchema(),
    "knowsAbout": [
      "Craft Brewery Equipment and Restaurant Fixture Removal",
      "Vista Business Park Industrial and Warehouse Cleanouts",
      "Shadowridge Golf Community HOA Compliance",
      "Tri-City Medical Center Healthcare District Properties",
      "Downtown Vista Mixed-Use and Apartment Service",
      "North County Commercial Warehouse Operations",
      "Vista Village Drive Retail Corridor Service",
      "Rancho Buena Vista Residential Estate Cleanouts"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vista Junk Removal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brewery and Restaurant Equipment Removal",
            "description": "Commercial kitchen equipment, bar fixtures, and brewery tank removal from the Downtown Vista Main Street corridor with after-hours scheduling"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vista Business Park Industrial Cleanouts",
            "description": "Warehouse inventory liquidation, office furniture removal, and industrial equipment disposal with loading dock coordination"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Shadowridge Golf Community Residential Service",
            "description": "HOA-compliant junk removal for Shadowridge hillside homes with scheduled access and community standards compliance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Same-Day Junk Removal in Vista",
            "description": "Same-day hauling throughout all Vista zip codes when you call before noon, covering residential and commercial properties"
          }
        }
      ]
    },
    "areaServed": {
      "@type": "City",
      "name": "Vista",
      "containedInPlace": {
        "@type": "State",
        "name": "California"
      }
    },
    "sameAs": [
      "https://www.facebook.com/severinhauling",
      "https://www.instagram.com/severinhauling/",
      "https://www.yelp.com/biz/severin-hauling-san-diego",
      "https://www.thumbtack.com/ca/la-mesa/junk-removal/severin-hauling/service/541381661422116888"
    ]
  };

  const neighborhoodSchema = {
    "@type": "ItemList",
    "name": "Vista California Neighborhoods Served",
    "description": "Complete junk removal coverage throughout all Vista neighborhoods and communities",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Place",
          "name": "Downtown Vista Village",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vista",
            "addressRegion": "CA",
            "postalCode": "92084"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Place",
          "name": "Shadowridge",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vista",
            "addressRegion": "CA",
            "postalCode": "92083"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Place",
          "name": "Rancho Buena Vista",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vista",
            "addressRegion": "CA",
            "postalCode": "92084"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Place",
          "name": "Buena Creek",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vista",
            "addressRegion": "CA",
            "postalCode": "92084"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Place",
          "name": "Vista Business Park",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vista",
            "addressRegion": "CA",
            "postalCode": "92081"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Place",
          "name": "Vista Village Drive Corridor",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vista",
            "addressRegion": "CA",
            "postalCode": "92081"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "Place",
          "name": "Brengle Terrace",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vista",
            "addressRegion": "CA",
            "postalCode": "92084"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 8,
        "item": {
          "@type": "Place",
          "name": "North Vista",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vista",
            "addressRegion": "CA",
            "postalCode": "92084"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 9,
        "item": {
          "@type": "Place",
          "name": "Alta Vista",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vista",
            "addressRegion": "CA",
            "postalCode": "92081"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 10,
        "item": {
          "@type": "Place",
          "name": "South Vista",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vista",
            "addressRegion": "CA",
            "postalCode": "92081"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 11,
        "item": {
          "@type": "Place",
          "name": "Buena Vista",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vista",
            "addressRegion": "CA",
            "postalCode": "92084"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 12,
        "item": {
          "@type": "Place",
          "name": "Sycamore District",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vista",
            "addressRegion": "CA",
            "postalCode": "92081"
          }
        }
      }
    ]
  };

  const howToSchema = generateHowToSchema({
    cityName: "Vista",
    pageUrl: "https://www.severinhauling.com/junk-removal-vista"
  });

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema, neighborhoodSchema, howToSchema]
  };

  const nearbyLocations = [
    { name: "Oceanside", slug: "junk-removal-oceanside" },
    { name: "San Marcos", slug: "junk-removal-san-marcos" },
    { name: "Carlsbad", slug: "junk-removal-carlsbad" },
    { name: "Escondido", slug: "junk-removal-escondido" },
  ];

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                #1 Vista Junk Removal Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Junk Removal Vista
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Brewery District • Business Park • Shadowridge Golf Community
              </p>

              <p className="text-lg mb-8">
                ✓ North County Specialists ✓ Same-Day Hauling ✓ Licensed & Insured
              </p>
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
                  <div className="bg-white rounded-lg shadow-md p-8">

                    {/* Introduction */}
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">
                      Professional Junk Removal in Vista, CA
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      Severin Hauling handles junk removal in Vista for homes, apartments, and businesses across all three zip codes: 92081, 92083, and 92084. We know the city well: brewery cleanouts on Main Street, warehouse liquidations at Vista Business Park, estate hauls in Shadowridge, and packed garages in Rancho Buena Vista.
                    </p>

                    <p className="text-gray-700 mb-6">
                      Whether you need one piece hauled or a full truck cleared, we handle all the lifting, loading, and disposal. No hidden fees. No surcharges for Shadowridge hillside access or Business Park after-hours jobs. Call (619) 750-0114 for a free estimate. <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">Same-day service</a> is available when you call before noon.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Vista Neighborhoods We Serve (92081, 92083, 92084)</h3>
                    <ul className="list-disc pl-6 mb-6 text-gray-700 columns-2">
                      <li>Downtown Vista Village</li>
                      <li>Shadowridge</li>
                      <li>Rancho Buena Vista</li>
                      <li>Buena Creek</li>
                      <li>Vista Business Park</li>
                      <li>Vista Village Drive corridor</li>
                      <li>Brengle Terrace</li>
                      <li>North Vista</li>
                      <li>Alta Vista</li>
                      <li>South Vista / Sycamore district</li>
                    </ul>

                    {/* Craft Brewery District */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Downtown Vista Craft Brewery District</h3>
                    <p className="text-gray-700 mb-6">
                      Vista&apos;s Main Street brewery corridor is one of the denser craft beer zones in North County. We clear <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">brewery equipment, commercial kitchen fixtures</a>, bar furniture, and restaurant buildouts. Early morning slots (6-9 AM Sundays) work best downtown. Parking opens up and the job does not cut into business hours.
                    </p>

                    {/* Business Park */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Vista Business Park Commercial Services</h3>
                    <p className="text-gray-700 mb-6">
                      Vista Business Park off Sycamore Avenue handles a lot of volume: office furniture, warehouse shelving, industrial equipment, inventory liquidation. We coordinate loading dock access and offer after-hours and weekend service for businesses that can&apos;t shut down mid-week. We do recurring work for property managers in the park.
                    </p>

                    {/* Shadowridge Golf Community */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Shadowridge Golf Community Services</h3>
                    <p className="text-gray-700 mb-6">
                      Shadowridge has HOA requirements and hillside driveways that most haulers are not used to. We know the area: steep grades, afternoon golf traffic, community standards for truck placement. We schedule around all of it and protect your property during the job.
                    </p>

                    {/* Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Vista Landmarks</h3>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1 text-gray-700">
                        <li>• Vista Civic Center</li>
                        <li>• Shadowridge Golf Club</li>
                        <li>• Brengle Terrace Park and amphitheater</li>
                        <li>• Downtown Vista brewery corridor</li>
                        <li>• Vista Historical Museum</li>
                        <li>• Rancho Minerva Park</li>
                      </ul>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Vista Business Park (Sycamore Avenue)</li>
                        <li>• Tri-City Medical Center</li>
                        <li>• Vista Village Shopping Center</li>
                        <li>• Buena Vista Creek and trail system</li>
                        <li>• Vista Entertainment Center</li>
                        <li>• Antique Gas and Steam Engine Museum</li>
                      </ul>
                    </div>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in Vista</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Furniture Removal</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">Sofas, sectionals, recliners</a></li>
                          <li>• <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">Mattresses</a> and bed frames</li>
                          <li>• Dining sets, chairs, bedroom furniture</li>
                          <li>• Desks, office furniture, bookshelves</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances and Electronics</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Refrigerators, washers, dryers, freezers</a></li>
                          <li>• Dishwashers, stoves, microwaves</li>
                          <li>• TVs, computers, electronics disposal</li>
                          <li>• Exercise equipment and home gym gear</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Commercial Junk Removal</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">Office furniture, cubicles, conference tables</a></li>
                          <li>• Brewery equipment and restaurant fixtures</li>
                          <li>• Warehouse shelving and storage racks</li>
                          <li>• <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">Construction debris</a> from remodels and buildouts</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Cleanouts</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">Estate cleanouts</a> for families and property managers</li>
                          <li>• Apartment turnovers and tenant move-outs</li>
                          <li>• <a href="/cleanout-services-san-diego" className="text-blue-600 hover:underline">Garage and storage unit</a> clearances</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs</a> and backyard equipment</li>
                        </ul>
                      </div>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Hauling for Vista</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>North County Knowledge:</strong> We serve Vista daily. We know where downtown loading restrictions apply, which Shadowridge streets are single-lane, and how <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">Business Park commercial jobs</a> run. That knowledge saves time on every job.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Same-Day Service Available:</strong> Call before noon and we can usually be there the same day, anywhere in Vista or North County San Diego. We give real arrival windows based on actual conditions, not a four-hour guess.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> Volume-based pricing with everything included: labor, hauling, disposal fees, recycling. Shadowridge hillside access or Business Park dock coordination does not change your rate. You know the price before we start.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed and Insured:</strong> Fully licensed California hauler with liability insurance covering residential homes, apartment complexes, and <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">commercial properties</a> throughout Vista and North County.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Vista"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Vista"
          contextParagraph="Transparent pricing for Vista homes and businesses: from Downtown Village apartments to Shadowridge estates to Business Park warehouses. No hidden fees, same-day service available."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Vista" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Junk Removal Vista"
          description="Get answers to common questions about our junk removal service in Vista, pricing, and same-day availability."
          faqs={vistaFAQs}
          ctaTitle="Still Have Questions About Vista Junk Removal?"
          ctaDescription="Our team is ready to answer questions, provide a free estimate, or schedule your pickup. Call (619) 750-0114 anytime."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Vista Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/commercial-junk-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Commercial Junk Removal</h4>
                <p className="text-gray-600">Business Park and brewery district commercial cleanouts throughout Vista</p>
              </a>
              <a href="/construction-debris-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
                <p className="text-gray-600">Renovation and buildout debris from residential and commercial properties</p>
              </a>
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts</h4>
                <p className="text-gray-600">Full estate cleanouts for Shadowridge and Rancho Buena Vista families</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </>
  );
}
