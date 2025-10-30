import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApplianceFAQSection from "./ApplianceFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

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
    title: "Appliance Removal San Diego | Refrigerator & Washer Disposal | Severin Cleaners",
    description: "Professional appliance removal in San Diego. We remove refrigerators, washers, dryers, stoves, and all appliance types. Same-day service available. Call (619) 750-0114. Starting at $100.",
    url: "https://severincleaners.com/appliance-removal-san-diego",
    siteName: "Severin Cleaners",
    type: "website",
    locale: "en_US",
    images: [{
      url: "https://severincleaners.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Appliance Removal San Diego - Severin Cleaners"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Appliance Removal San Diego | Fridge & Washer Disposal",
    description: "Professional appliance removal in San Diego. We remove refrigerators, washers, dryers, stoves. Same-day service. Call (619) 750-0114!",
    images: ["https://severincleaners.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://severincleaners.com/appliance-removal-san-diego",
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
    'geo.placename': 'La Mesa',
    'geo.position': '32.7678;-117.0231',
    'ICBM': '32.7678, -117.0231',
  },
};

export default function ApplianceRemovalPage() {
  const serviceSchema = generateServiceSchema({
    name: "Appliance Removal San Diego",
    description: "Professional appliance removal in San Diego. We remove refrigerators, washers, dryers, stoves, and all appliance types. Eco-friendly disposal.",
    url: "https://severincleaners.com/appliance-removal-san-diego",
    serviceType: "Appliance Removal Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "Appliance Removal", url: "https://severincleaners.com/appliance-removal-san-diego" },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema]
  };

  const relatedServices = [
    { name: "Furniture Removal", slug: "furniture-removal-san-diego" },
    { name: "Hot Tub Removal", slug: "hot-tub-removal-san-diego" },
    { name: "Mattress Disposal", slug: "san-diego-mattress-disposal" },
    { name: "Same Day Junk Removal", slug: "same-day-junk-removal-san-diego" },
  ];

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <div className={`${inter.variable} font-sans antialiased`}>
        <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Appliance Removal San Diego
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Fast, Professional Service • We Handle the Heavy Lifting • Same-Day Pickup Available
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  Call Now: (619) 750-0114
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  Get Free Quote
                </a>
              </div>
              <p className="mt-6 text-sm text-blue-100">
                Licensed & Insured • Starting at $100 • Serving All of San Diego County
              </p>
            </div>
          </div>
        </section>

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
                <p className="text-lg mb-4">
                  Whether you just upgraded your kitchen or have a broken washer collecting dust, we make appliance removal in San Diego easy. From <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla high-end appliance removal</a> to <a href="/junk-removal-pacific-beach" className="text-blue-600 hover:underline">Pacific Beach appliance disposal</a>, we're the trusted choice for homeowners and businesses.
                </p>

                <p className="text-lg mb-6">
                  We remove refrigerators, washers, dryers, stoves, dishwashers—you name it. Our service covers <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista appliance hauling</a> to Point Loma, North Park to <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon refrigerator removal</a>, helping homeowners reclaim their space daily with safe, eco-friendly appliance disposal. Also need <a href="/furniture-removal-san-diego" className="text-blue-600 hover:underline">furniture disposal</a> or <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">mattress removal</a>? We handle it all.
                </p>

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
                    <h4 className="font-bold text-lg mb-2">Call or Book Online</h4>
                    <p className="text-gray-700">
                      Request your appliance removal San Diego quote and get instant pricing.
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
                    <h4 className="font-bold text-lg mb-2">Proper Disposal</h4>
                    <p className="text-gray-700">
                      We handle legal disposal and recycling according to City of San Diego regulations, keeping harmful materials out of landfills.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Specialized Appliance Removal Services</h3>

                <h4 className="text-xl font-bold mt-6 mb-3">Refrigerator Removal San Diego</h4>
                <p className="text-lg mb-6">
                  Our refrigerator removal specialists handle units from garages, condos, or upstairs kitchens. Whether it's <a href="/junk-removal-kearny-mesa" className="text-blue-600 hover:underline">commercial appliance removal in Kearny Mesa</a> or residential service in <a href="/junk-removal-la-mesa" className="text-blue-600 hover:underline">La Mesa washer and dryer removal</a>, we safely navigate tight spaces and recycle Freon-compliant units responsibly.
                </p>

                <h4 className="text-xl font-bold mt-6 mb-3">Washer & Dryer Removal San Diego</h4>
                <p className="text-lg mb-6">
                  We disconnect, remove, and haul both units together—perfect for laundry upgrades or new appliance deliveries. Our team provides efficient service from <a href="/junk-removal-mira-mesa" className="text-blue-600 hover:underline">Mira Mesa appliance recycling</a> to <a href="/junk-removal-santee" className="text-blue-600 hover:underline">Santee appliance pickup</a>.
                </p>

                <h4 className="text-xl font-bold mt-6 mb-3">Stove & Dishwasher Removal San Diego</h4>
                <p className="text-lg mb-6">
                  From gas ranges to built-in dishwashers, our stove removal San Diego team handles careful extraction without damaging cabinetry.
                </p>

                <h4 className="text-xl font-bold mt-6 mb-3">Freezer Removal San Diego</h4>
                <p className="text-lg mb-6">
                  We remove garage or chest freezers of all sizes—no need to lift a thing. Just empty the contents, and we'll handle the rest. Also removing furniture? Check our <a href="/furniture-removal-san-diego" className="text-blue-600 hover:underline">furniture removal service</a>.
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

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Hire Professionals</h3>
                <p className="text-lg mb-4">
                  Removing large appliances yourself risks injury, damage, and disposal violations. We provide safe, compliant, and efficient appliance disposal San Diego service that includes:
                </p>

                <ul className="list-none space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Proper disconnection from gas/electric/water lines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Floor and wall protection during removal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Recycling through certified facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Licensed and insured handling</span>
                  </li>
                </ul>

                <p className="text-lg mb-6">
                  Avoid back injuries, scratches, and fines — let the pros handle it.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Serving All of San Diego County</h3>
                <p className="text-lg mb-4">
                  We provide appliance removal San Diego and appliance disposal services everywhere, including <a href="/junk-removal-oceanside" className="text-blue-600 hover:underline">Oceanside appliance disposal services</a> and <a href="/junk-removal-del-mar" className="text-blue-600 hover:underline">Del Mar luxury appliance removal</a>.
                </p>

                <p className="text-lg mb-6 text-gray-700">
                  La Jolla • Pacific Beach • Downtown • North Park • Hillcrest • Mission Valley • La Mesa • Santee • Poway • El Cajon • Chula Vista • Oceanside • Vista • Del Mar
                </p>

                <p className="text-lg mb-6">
                  Disposal and recycling handled through licensed centers including Miramar Landfill and Allan Company Recycling.
                </p>

              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Sidebar (lg:col-span-1) */}
          <div className="lg:col-span-1">
            <LocationSidebarCTA
              locationName="Appliance Removal"
              nearbyLocations={relatedServices}
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
        <ApplianceFAQSection />
      </main>

        <Footer />
      </div>
    </>
  );
}
