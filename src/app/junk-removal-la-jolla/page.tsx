import type { Metadata } from "next";
import Image from "next/image";
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
  title: "La Jolla Junk Removal | Professional Estate Service | (619) 750-0114",
  description: "La Jolla junk removal Bird Rock to UTC (92037). Oceanfront & hillside properties. Same-day available. (619) 750-0114",
  keywords: [
    "La Jolla junk removal",
    "junk hauling La Jolla",
    "trash removal La Jolla",
    "junk pickup La Jolla",
    "estate cleanout La Jolla",
    "La Jolla furniture removal",
    "La Jolla 92037 junk removal",
    "Bird Rock junk removal",
    "Muirlands junk removal",
    "Mount Soledad junk removal",
    "UTC junk removal"
  ],
  openGraph: {
    title: "La Jolla Junk Removal | Estate Cleanouts & Furniture Disposal | Same-Day Service",
    description: "Professional La Jolla junk removal for estates, homes, Bird Rock, Muirlands, and UTC. Discreet service, expert furniture handling. Call (619) 750-0114.",
    url: "https://www.severinhauling.com/junk-removal-la-jolla",
    siteName: 'Severin Hauling',
    type: 'website',
    locale: 'en_US',
    images: [{
      url: 'https://www.severinhauling.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'La Jolla Junk Removal - Severin Hauling Luxury Estate Service'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "La Jolla Junk Removal | Estate Cleanouts & Furniture Disposal",
    description: "Professional La Jolla junk removal for estates, homes, Bird Rock, Muirlands, and UTC (92037). Discreet service, expert furniture handling.",
    images: ['https://www.severinhauling.com/og-image.jpg']
  },
  alternates: {
    canonical: "https://www.severinhauling.com/junk-removal-la-jolla",
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
    'geo.placename': 'La Jolla',
    'geo.position': '32.8328;-117.2713',
    'ICBM': '32.8328, -117.2713',
  },
};

const laJollaFAQs = [
  {
    question: "How much does junk removal cost in La Jolla?",
    answer: "Our pricing is transparent and volume-based: small items $69, standard items $100, quarter-load $249, half-load $349, three-quarter load $429, full-load $495. All pricing includes labor, hauling, and disposal with no hidden fees for coastal access, hillside properties, or gated community coordination throughout the 92037 and 92093 areas."
  },
  {
    question: "Do you provide discreet junk removal service?",
    answer: "Yes, we provide discreet, professional service throughout La Jolla. Our crews wear professional uniforms and maintain a low-profile presence. For gated communities like Hidden Valley, Muirlands, or La Jolla Farms, we coordinate security clearance in advance. Unmarked vehicles available upon request for high-profile properties."
  },
  {
    question: "Can you handle valuable furniture and specialty items?",
    answer: "Absolutely. We have extensive experience with valuable furniture, antiques, designer pieces, and specialty items. We use proper lifting techniques, protective materials, and appropriate equipment for safe removal. For high-value items, we coordinate with consignment services, auction houses (Sotheby's, Christie's), and charitable organizations."
  },
  {
    question: "Do you offer estate cleanout services in La Jolla?",
    answer: "Yes, we provide comprehensive estate cleanout services for families, trustees, and property managers. We handle Bird Rock oceanfront homes to Mount Soledad hillside estates with sensitivity and care. Services include sorting, donation coordination, responsible disposal, and final property preparation for sale or transfer throughout 92037 and 92093."
  },
  {
    question: "What eco-friendly disposal options do you offer?",
    answer: "We recycle, donate, and work with consignment services to minimize waste. Usable furniture and appliances go to San Diego charities, recyclables to proper facilities. We minimize landfill disposal throughout La Jolla."
  },
  {
    question: "Do you serve gated communities in La Jolla?",
    answer: "Yes, we regularly serve Hidden Valley, Muirlands, and La Jolla Farms. We coordinate security clearance with gate staff in advance, communicate arrival times clearly, and respect all community access protocols. Our crews are experienced in restricted-access neighborhoods throughout the 92037 area."
  },
  {
    question: "How do you handle Mount Soledad hillside property access?",
    answer: "Our team has extensive experience navigating Mount Soledad's steep properties with grades up to 15%, switchback driveways, and narrow access roads. We use appropriately sized trucks, plan routes carefully, and coordinate parking to ensure safe access without impacting neighbors."
  },
  {
    question: "What's your experience with oceanfront properties in Bird Rock and Windansea?",
    answer: "We specialize in oceanfront property removal throughout Bird Rock, Windansea, and La Jolla Shores. Our crews understand narrow coastal streets, limited parking zones, salt air exposure challenges, and beachside property access coordination. We've completed hundreds of oceanfront cleanouts along the coastal corridor."
  },
  {
    question: "Do you serve the UTC and UCSD areas?",
    answer: "Absolutely. We serve the UTC area, UCSD campus housing, and executive residential neighborhoods in the 92093 zip code. We handle student housing move-outs, executive residences near Westfield UTC, and property cleanouts with efficient same-day service."
  }
];

export default function JunkRemovalLaJollaPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.severinhauling.com" },
    { name: "Areas We Serve", url: "https://www.severinhauling.com/areas-we-serve" },
    { name: "La Jolla Junk Removal", url: "https://www.severinhauling.com/junk-removal-la-jolla" },
  ]);

  const faqSchema = generateFAQSchema(laJollaFAQs);

  const serviceSchema = {
    "@type": "Service",
    "name": "Junk Removal in La Jolla",
    "description": "Premium La Jolla junk removal for estates, luxury homes, Bird Rock, Muirlands. Discreet service with unmarked vehicles. Expert luxury furniture handling.",
    "url": "https://www.severinhauling.com/junk-removal-la-jolla",
    "serviceType": "Junk Removal",
    "provider": {
      "@id": "https://www.severinhauling.com/junk-removal-la-jolla#business"
    }
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://www.severinhauling.com/junk-removal-la-jolla#business",
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
    "url": "https://www.severinhauling.com/junk-removal-la-jolla",
    "knowsAbout": [
      "Oceanfront Property Access and Navigation",
      "Hillside Terrain and Steep Driveway Access",
      "Gated Community Security Coordination",
      "Coastal Environment and Salt Air Conditions",
      "Mount Soledad Hillside Navigation",
      "Bird Rock Narrow Street Access",
      "La Jolla Village Downtown Service",
      "UTC and UCSD Area Property Service"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "La Jolla Junk Removal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Oceanfront Property Cleanouts",
            "description": "Estate cleanout service for Bird Rock, Windansea, and La Jolla Shores oceanfront properties with coastal access expertise"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mount Soledad Hillside Service",
            "description": "Specialized junk removal for hillside estates with steep driveways and challenging terrain access"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gated Community Coordinated Service",
            "description": "Professional junk removal with security clearance coordination for Muirlands, Hidden Valley, and La Jolla Farms"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UTC and UCSD Area Service",
            "description": "Junk removal for executive residences and properties in the UTC corridor and UCSD campus area"
          }
        }
      ]
    },
    "areaServed": {
      "@type": "City",
      "name": "La Jolla",
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
    "name": "La Jolla San Diego Neighborhoods Served",
    "description": "Complete junk removal coverage throughout all La Jolla neighborhoods and communities",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Place",
          "name": "La Jolla Village",
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
          "name": "Bird Rock",
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
        "position": 3,
        "item": {
          "@type": "Place",
          "name": "Windansea",
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
          "name": "La Jolla Shores",
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
        "position": 5,
        "item": {
          "@type": "Place",
          "name": "Muirlands",
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
        "position": 6,
        "item": {
          "@type": "Place",
          "name": "Mount Soledad",
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
        "position": 7,
        "item": {
          "@type": "Place",
          "name": "Upper Hermosa",
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
        "position": 8,
        "item": {
          "@type": "Place",
          "name": "UTC",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "La Jolla",
            "addressRegion": "CA",
            "postalCode": "92093"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 9,
        "item": {
          "@type": "Place",
          "name": "La Jolla Farms",
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
        "position": 10,
        "item": {
          "@type": "Place",
          "name": "Hidden Valley",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "La Jolla",
            "addressRegion": "CA",
            "postalCode": "92037"
          }
        }
      }
    ]
  };

  const howToSchema = generateHowToSchema({
    cityName: "La Jolla",
    pageUrl: "https://www.severinhauling.com/junk-removal-la-jolla"
  });

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema, neighborhoodSchema, howToSchema]
  };

  const nearbyLocations = [
    { name: "Pacific Beach", slug: "junk-removal-pacific-beach" },
    { name: "Del Mar", slug: "junk-removal-del-mar" },
    { name: "Clairemont", slug: "junk-removal-clairemont" },
    { name: "Carmel Valley", slug: "junk-removal-carmel-valley" },
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
                  #1 La Jolla Junk Removal Service
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Junk Removal La Jolla
                </h1>

                <p className="text-xl md:text-2xl mb-8 text-blue-100">
                  Luxury Estate Specialists • White-Glove Service • Discreet & Professional
                </p>

                <p className="text-lg mb-8">
                  ✓ Exclusive Communities ✓ Bird Rock to UTC ✓ Licensed & Insured
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

                      {/* Introduction Content */}
                      <div className="prose prose-lg max-w-none">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                          Professional Junk Removal La Jolla – Luxury Estate Specialists
                        </h2>

                        {/* La Jolla Junk Removal Image - Integrated */}
                        <div className="mb-6 md:float-right md:ml-6 w-full md:w-80">
                          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                            <Image
                              src="/optimized/cabniets.jpg"
                              alt="junk removal La Jolla - luxury estate remodel debris, cabinets, and renovation cleanout in 92037"
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 320px"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        <p className="text-lg text-gray-700 mb-4">
                          Need junk removal in La Jolla? <a href="/" className="text-blue-600 hover:underline">Severin Hauling</a> serves the entire 92037 and 92093 area—from oceanfront estates in Bird Rock and Windansea to hillside mansions in Muirlands and Mount Soledad, from gated communities in Hidden Valley to UTC executive residences. Booking junk removal is easy and stress free: call, get a free no-obligation estimate, and we handle the rest.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                          Our team provides discreet, professional service for luxury <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanouts</a> and <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">high-end furniture removal</a>. We navigate steep hillside driveways, narrow coastal roads, and gated community security coordination—all without disrupting your property or schedule.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                          Whether you're preparing a property for sale or clearing an estate, we haul everything away and leave the space clutter free. <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">Same-day service available</a>. Call (619) 750-0114 for transparent <a href="/junk-removal-pricing-san-diego" className="text-blue-600 hover:underline">pricing</a>.
                        </p>

                        {/* Complete Neighborhood Coverage */}
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                          La Jolla Neighborhoods We Serve (92037, 92093)
                        </h2>
                        <ul className="list-disc pl-6 mb-6 text-gray-700 columns-2">
                          <li>La Jolla Village</li>
                          <li>Bird Rock</li>
                          <li>Windansea</li>
                          <li>La Jolla Shores & Cove</li>
                          <li>Prospect Street</li>
                          <li>Muirlands & Hidden Valley</li>
                          <li>Mount Soledad</li>
                          <li>Upper Hermosa</li>
                          <li>UTC / Torrey Pines</li>
                          <li>La Jolla Farms</li>
                        </ul>

                        {/* Local Landmarks & Reference Points */}
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                          Major Landmarks & Streets We Navigate
                        </h2>
                        <ul className="list-disc pl-6 mb-6 text-gray-700 columns-2">
                          <li>La Jolla Cove & Prospect Street</li>
                          <li>Mount Soledad Memorial & Soledad Avenue</li>
                          <li>Torrey Pines Golf Course & Torrey Pines Road</li>
                          <li>UCSD Campus & Genesee Avenue</li>
                          <li>Westfield UTC Mall & La Jolla Village Drive</li>
                          <li>La Valencia Hotel & Girard Avenue</li>
                          <li>La Jolla Boulevard (Bird Rock to Shores)</li>
                          <li>Neptune Place & Camino de la Costa</li>
                          <li>Via Capri & Hidden Valley Road</li>
                          <li>Regents Road & Nobel Drive (UTC)</li>
                        </ul>

                        {/* Why Choose Us - La Jolla Specific */}
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                          Why La Jolla Residents Choose Severin Hauling in 2026
                        </h2>

                        <ul className="space-y-3 mb-6">
                          <li className="flex items-start">
                            <span className="text-green-500 text-xl mr-3">✓</span>
                            <span><strong>Discreet Luxury Service:</strong> We provide unmarked vehicles and professional uniforms for $5-50M properties. Non-disclosure agreements available for celebrity and executive clients. We coordinate security clearance with gate staff and offer flexible scheduling to avoid high-visibility hours. See our complete <a href="/junk-removal-pricing-san-diego" className="text-blue-600 hover:underline">pricing guide</a> for transparent rates.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 text-xl mr-3">✓</span>
                            <span><strong>Challenging Terrain Expertise:</strong> Our crews navigate Mount Soledad's 15% grade driveways, Hidden Valley single-lane canyon roads, narrow La Jolla Boulevard coastal access, and Prospect Street mansion valet-style positioning. We schedule around peak traffic (avoid Torrey Pines Road 7-9 AM, Prospect Street 3-6 PM) and coordinate with narrow coastal street parking (Bird Rock, Windansea).</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 text-xl mr-3">✓</span>
                            <span><strong>White-Glove Item Handling:</strong> We specialize in museum-quality furnishings, antiques, and designer pieces. Coordination with auction houses (Sotheby's, Christie's), certified art handlers for fine art, bonded piano removal, and insurance documentation for high-value items.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 text-xl mr-3">✓</span>
                            <span><strong>Coastal Environmental Values:</strong> We exceed California coastal environmental standards with premium eco-luxury practices while maintaining discreet, professional service that luxury estates demand. Salt air damage removal and responsible coastal disposal.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 text-xl mr-3">✓</span>
                            <span><strong>Comprehensive Coastal Coverage:</strong> Beyond La Jolla, we serve <a href="/junk-removal-pacific-beach" className="text-blue-600 hover:underline">Pacific Beach</a>, <a href="/junk-removal-del-mar" className="text-blue-600 hover:underline">Del Mar</a>, <a href="/junk-removal-clairemont" className="text-blue-600 hover:underline">Clairemont</a>, and <a href="/junk-removal-carmel-valley" className="text-blue-600 hover:underline">Carmel Valley</a> with the same luxury-grade service and coastal expertise.</span>
                          </li>
                        </ul>

                        {/* Premium Services Section */}
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                          Premium Services for La Jolla Estates (92037, 92093)
                        </h2>

                        <p className="text-lg text-gray-700 mb-4">
                          La Jolla properties have needs most junk removal crews aren't equipped for. We specialize in <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">luxury estate cleanouts</a> for Bird Rock oceanfront, Mount Soledad hillside, and Muirlands gated estates. <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">High-end furniture removal</a> for antiques, designer pieces, and La Valencia Hotel-quality furnishings. <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Luxury appliance removal</a> for Sub-Zero, Viking, and Wolf equipment.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                          <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tub removal</a> from oceanfront decks. <a href="/piano-removal-san-diego" className="text-blue-600 hover:underline">Piano removal</a> from hillside estates. Property sale preparation for $5M+ listings. Renovation debris, salt-damaged coastal items, and executive relocations. We coordinate with auction houses (Sotheby's, Christie's) and provide appraisal coordination so you can reclaim your space on your timeline.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                          <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">Same-day service</a> available throughout 92037 and 92093. Early morning slots (7–9 AM) available to avoid peak tourist traffic on Prospect Street and La Jolla Boulevard.
                        </p>

                      </div>
                    </div>
                  </div>

                  {/* Sidebar - Right Column */}
                  <div className="lg:col-span-1">
                    <LocationSidebarCTA
                      locationName="La Jolla"
                      nearbyLocations={nearbyLocations}
                    />
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <LocationPricingSection
            locationName="La Jolla"
            contextParagraph="Transparent pricing for luxury estates throughout La Jolla—from oceanfront Bird Rock to hillside Muirlands. Whether you're clearing a multi-million dollar estate or updating a Village condo, call for a free no-obligation estimate. You'll know the exact cost before we begin."
          />

          {/* Trust Signals Section */}
          <TrustSignalsSection locationName="La Jolla" coverageArea="Coastal San Diego" />

          {/* FAQ Section */}
          <FAQSection
          title="Frequently Asked Questions - Junk Removal La Jolla"
          description="Get answers to common questions about our junk removal La Jolla services, pricing, and same-day availability."
          faqs={laJollaFAQs}
          ctaTitle="Still Have Questions About La Jolla Junk Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our junk removal La Jolla services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

          {/* Final CTA Section */}
          <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">
                  Book Your La Jolla Junk Removal Today
                </h2>
                <p className="text-xl mb-8 leading-relaxed">
                  Whether you're clearing out a Muirlands estate, renovating a Bird Rock home, or updating a La Jolla Shores property, Severin Hauling delivers the trusted junk removal La Jolla residents depend on. Discreet, professional, white-glove service for La Jolla's most exclusive properties.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <a
                    href="tel:+16197500114"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                  >
                    📞 Call (619) 750-0114
                  </a>
                  <a
                    href="/contact"
                    className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                  >
                    Get Free Quote
                  </a>
                </div>
                <p className="text-blue-200 text-lg">
                  Serving all of La Jolla — from the Village to UTC • Same-Day Service Available • Licensed & Insured
                </p>
              </div>
            </div>
          </section>

          {/* Related Services */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <h3 className="text-2xl font-bold text-center mb-8">Premium La Jolla Services</h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <a href="/estate-cleanout-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
                  <p className="text-gray-600">Luxury estate cleanouts for inherited properties and high-value family transitions</p>
                </a>
                <a href="/furniture-disposal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Luxury Furniture Removal</h4>
                  <p className="text-gray-600">Expert handling of designer furniture, antiques, and museum-quality pieces</p>
                </a>
                <a href="/appliance-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Luxury Appliance Removal</h4>
                  <p className="text-gray-600">Professional removal of high-end kitchen equipment and luxury appliances</p>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
    </>
  );
}
