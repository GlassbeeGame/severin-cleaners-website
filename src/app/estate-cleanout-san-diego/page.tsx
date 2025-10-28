import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EstateFAQSection from "./EstateFAQSection";
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
  title: "Estate Cleanout San Diego | Respectful Probate Cleanout Services",
  description: "Compassionate estate cleanout San Diego services. Probate cleanout, senior downsizing, inheritance property cleanout. Licensed, respectful, professional. Call (619) 750-0114.",
  openGraph: {
    title: "Estate Cleanout San Diego | Respectful Probate & Senior Downsizing",
    description: "Compassionate, professional estate cleanout services in San Diego. Probate cleanout, estate sales, senior downsizing with dignity and care.",
    url: "https://severincleaners.com/estate-cleanout-san-diego",
  },
  alternates: {
    canonical: "https://severincleaners.com/estate-cleanout-san-diego",
  },
};

export default function EstateCleanoutPage() {
  const serviceSchema = generateServiceSchema({
    name: "Estate Cleanout San Diego",
    description: "Compassionate estate cleanout services in San Diego. Professional probate cleanout, senior downsizing, and inheritance property cleanout with dignity and care.",
    url: "https://severincleaners.com/estate-cleanout-san-diego",
    serviceType: "Estate Cleanout Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "Estate Cleanout", url: "https://severincleaners.com/estate-cleanout-san-diego" },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema]
  };

  const relatedServices = [
    { name: "Foreclosure & Eviction Cleanout", slug: "foreclosure-eviction-cleanout-san-diego" },
    { name: "Hoarding Cleanup", slug: "hoarding-cleanup-san-diego" },
    { name: "Furniture Removal", slug: "furniture-removal-san-diego" },
    { name: "Appliance Removal", slug: "appliance-removal-san-diego" },
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
                Estate Cleanout San Diego
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Compassionate Junk Hauling for Difficult Times • Licensed & Insured • Respectful Service
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
                Respectful • Professional • Understanding
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
                Estate Junk Removal When You Need It Most
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-4">
                  Clearing a loved one's home is never easy. There's <a href="/furniture-removal-san-diego" className="text-blue-600 hover:text-blue-700 underline">furniture to move</a>, including <a href="/couch-removal-san-diego" className="text-blue-600 hover:text-blue-700 underline">old furniture and sofa removal services</a>, boxes to haul, appliances to dispose of—and you're dealing with it all while grieving or managing family logistics.
                </p>

                <p className="text-lg mb-6">
                  Our estate cleanout San Diego service takes the physical burden off your shoulders. We're a junk hauling company that specializes in estate situations. We remove everything you need gone—respectfully, efficiently, and with compassion for what you're going through.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">What We Remove</h3>
                <p className="text-lg mb-4">
                  We haul away everything from single rooms to entire homes:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">Common Items We Haul</h4>
                    <ul className="list-disc pl-4 space-y-2 text-gray-700">
                      <li>Furniture (beds, couches, dressers, tables)</li>
                      <li>Appliances (refrigerators, washers, dryers)</li>
                      <li>Boxes of belongings and packed items</li>
                      <li>Clothing, linens, and personal items</li>
                      <li>Garage contents (tools, equipment, storage)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">Full Property Clearing</h4>
                    <ul className="list-disc pl-4 space-y-2 text-gray-700">
                      <li>Complete house cleanouts</li>
                      <li>Basement and attic clearing</li>
                      <li>Yard equipment and outdoor items</li>
                      <li>Accumulated items from storage areas</li>
                      <li>Anything else that needs hauling</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4">Probate Cleanout San Diego</h3>
                <p className="text-lg mb-6">
                  Dealing with probate? Courts often require the property to be cleared by certain deadlines. Our probate cleanout San Diego service works efficiently to meet those timelines. We haul away furniture, clear rooms, and prepare the property—helping you meet legal requirements without the stress of doing it yourself. For bank-owned properties or tenant situations, see our <a href="/foreclosure-eviction-cleanout-san-diego" className="text-blue-600 hover:underline">foreclosure and eviction cleanouts</a>.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Estate Sale Cleanout San Diego</h3>
                <p className="text-lg mb-6">
                  Had an estate sale but items are left over? Our estate sale cleanout San Diego service removes everything that didn't sell. We'll haul away the remaining furniture, boxes, and miscellaneous items so you can close out the property and move forward.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Senior Downsizing San Diego</h3>
                <p className="text-lg mb-6">
                  Helping a parent or loved one move to assisted living or a smaller home? Our senior downsizing San Diego service handles the heavy lifting. We remove furniture that won't fit in the new place, haul away items they no longer need, and make the transition easier for everyone involved.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Deceased Estate Cleanup San Diego</h3>
                <p className="text-lg mb-6">
                  After losing someone, the last thing you need is the burden of clearing their home alone. Our deceased estate cleanup San Diego service provides compassionate junk hauling during a difficult time. We handle all the physical work—removing furniture, hauling boxes, clearing rooms—so you can focus on family and healing.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Estate Junk Removal San Diego</h3>
                <p className="text-lg mb-6">
                  Not everything in an estate has value or needs to be kept. Our estate junk removal San Diego service removes unwanted furniture, old belongings, and accumulated items. We're the hauling solution that makes clearing a property manageable, whether it's one room or an entire house.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">How It Works</h3>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
                    <h4 className="font-bold text-lg mb-2">Call for Quote</h4>
                    <p className="text-gray-700 text-sm">
                      Tell us what needs to be removed. We'll provide an upfront price based on volume.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
                    <h4 className="font-bold text-lg mb-2">We Haul It Away</h4>
                    <p className="text-gray-700 text-sm">
                      Our team loads everything, hauls it away, and cleans up. You don't lift a finger.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
                    <h4 className="font-bold text-lg mb-2">Property Is Clear</h4>
                    <p className="text-gray-700 text-sm">
                      We dispose of items properly and leave the property clean and ready.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4">What Happens to the Items?</h3>
                <p className="text-lg mb-6">
                  Usable furniture and items in good condition go to local charities when appropriate. Everything else is disposed of responsibly—we comply with San Diego disposal regulations to ensure proper handling.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Serving All San Diego County</h3>
                <p className="text-lg mb-4">
                  From La Jolla to Chula Vista, we provide estate cleanout services countywide. Our team serves families in all San Diego neighborhoods with the same care and professionalism.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-blue-600">Coastal Areas</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• La Jolla</li>
                      <li>• Del Mar</li>
                      <li>• Pacific Beach</li>
                      <li>• Point Loma</li>
                      <li>• Coronado</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-blue-600">Central San Diego</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Downtown</li>
                      <li>• Hillcrest</li>
                      <li>• North Park</li>
                      <li>• Mission Valley</li>
                      <li>• Kensington</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-blue-600">East & South County</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• El Cajon</li>
                      <li>• La Mesa</li>
                      <li>• Chula Vista</li>
                      <li>• Santee</li>
                      <li>• Poway</li>
                    </ul>
                  </div>
                </div>
                  </div>
                </div>

                {/* RIGHT COLUMN - Sidebar (lg:col-span-1) */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Estate Cleanout"
                    nearbyLocations={relatedServices}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Estate Cleanout"
          contextParagraph="Compassionate estate cleanout service with transparent pricing. From single rooms to full property cleanouts, our pricing is based on volume with all labor, hauling, and proper disposal included."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Estate Cleanout" />

        {/* FAQ Section */}
        <EstateFAQSection />
      </main>

      <Footer />
      </div>
    </>
  );
}
