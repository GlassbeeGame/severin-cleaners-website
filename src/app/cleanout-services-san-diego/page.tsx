import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CleanoutFAQSection from "./CleanoutFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import LocationPricingSection from "@/components/LocationPricingSection";
import TrustSignalsSection from "@/components/TrustSignalsSection";

export const metadata: Metadata = {
  title: "Cleanout Services San Diego | Property & Garage",
  description: "Expert cleanout services San Diego for garages, attics, basements, sheds, storage units & full properties. Same-day junk hauling available. Licensed & insured. Call (619) 750-0114 for free quote!",
  keywords: "cleanout services San Diego, property cleanout San Diego, garage cleanout San Diego, attic cleanout San Diego, basement cleanout San Diego, storage unit cleanout San Diego, shed cleanout San Diego, junk hauling San Diego",
  openGraph: {
    title: "Cleanout Services San Diego - Professional Junk Hauling & Property Cleanouts",
    description: "Expert cleanout services San Diego for all types of properties. Same-day service, eco-friendly disposal, transparent pricing. Free quotes!",
    url: 'https://severincleaners.com/cleanout-services-san-diego',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cleanout Services San Diego - Professional Junk Hauling & Property Cleanouts",
    description: "Expert cleanout services San Diego for all types of properties. Same-day service, eco-friendly disposal, transparent pricing.",
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: "https://severincleaners.com/cleanout-services-san-diego",
  },
};

export default function CleanoutServicesPage() {
  const serviceSchema = generateServiceSchema({
    name: "Cleanout Services San Diego",
    description: "Expert cleanout services for garages, attics, basements, sheds, storage units, and full properties. Same-day junk hauling available.",
    url: "https://severincleaners.com/cleanout-services-san-diego",
    serviceType: "Property Cleanout Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "Cleanout Services", url: "https://severincleaners.com/cleanout-services-san-diego" },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema]
  };

  const relatedServices = [
    { name: "Garage Cleanout", slug: "/garage-cleanout-san-diego" },
    { name: "Estate Cleanout", slug: "/estate-cleanout-san-diego" },
    { name: "Foreclosure Cleanout", slug: "/foreclosure-eviction-cleanout-san-diego" },
    { name: "Furniture Removal", slug: "/furniture-removal-san-diego" }
  ];

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <div className="min-h-screen bg-background">
        <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl font-bold mb-6">
                Cleanout Services San Diego
                <span className="block text-blue-300 mt-2">Professional Junk Hauling for Every Space</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                We handle all types of cleanout projects in San Diego. Garages, attics, basements, storage units, and full properties. Same-day service available with transparent pricing. Trusted by homeowners, landlords, and real estate pros.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  📞 Call (619) 750-0114 - Free Quote
                </a>
                <a
                  href="#pricing"
                  className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar - 2-COLUMN LAYOUT */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">

                {/* LEFT COLUMN - Main Content */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-md p-8">

                    <h2 className="text-3xl font-bold mb-6 text-gray-900">
                      Professional Cleanout Services Throughout San Diego
                    </h2>

                    <p className="text-lg mb-6 text-gray-700">
                      We handle all types of cleanout projects in San Diego. Garages, attics, basements, storage units, and full properties. Same-day service available with transparent pricing. Trusted by homeowners, landlords, and real estate pros.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4">Garage Cleanout San Diego Services</h3>
                    <p className="text-gray-700 mb-4">
                      We transform cluttered garages into clean, functional spaces. Years of tools, decorations, furniture, and automotive equipment add up fast. Our team clears everything out efficiently. You get your garage back in just a few hours.
                    </p>
                    <p className="text-gray-700 mb-6">
                      Most garage projects take 2-3 hours. Pricing ranges from $249 to $429 based on volume. We handle all heavy lifting and sort items carefully. Donations go to local charities, recyclables get recycled properly. Your garage is left broom-clean and ready to use.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4">Attic Cleanout San Diego - Safe & Thorough Junk Removal</h3>
                    <p className="text-gray-700 mb-4">
                      Attic cleanouts require special care. Our trained crews safely handle stairs, tight spaces, and extreme temperatures. We remove decades of belongings, old insulation, holiday decorations, and forgotten items. Safety is always our priority.
                    </p>
                    <p className="text-gray-700 mb-6">
                      Most attic projects take 2-4 hours. Time varies based on access and volume. We handle fragile items with extra care. Often we find valuables you forgot about. Nothing damages your home during removal.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4">Basement Cleanout San Diego - Complete Underground Space Clearing</h3>
                    <p className="text-gray-700 mb-4">
                      Basements present unique cleanout challenges. Stairs, moisture damage, heavy equipment, and years of storage accumulate quickly. Our experienced crews handle it all. Exercise equipment, old furniture, storage boxes, and water heaters are no problem.
                    </p>
                    <p className="text-gray-700 mb-6">
                      Most basement jobs take 3-5 hours. Size and access determine the timeline. We're equipped for narrow stairways and low ceilings. Our team navigates carefully to prevent wall damage. Every item is removed safely and efficiently.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4">Storage Unit Cleanout San Diego - Fast Unit Clearing</h3>
                    <p className="text-gray-700 mb-4">
                      Stop paying monthly fees for units you don't need. We clear rental units completely in 1-2 hours. This helps you avoid additional rental charges. Furniture, boxes, and everything else gets removed. Units are left broom-clean for final inspection.
                    </p>
                    <p className="text-gray-700 mb-6">
                      Projects typically cost $249 to $366. Unit size determines the price. We work quickly and efficiently. Our team handles coordination with storage facilities.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4">Shed Cleanout San Diego - Outdoor Storage Building Clearing</h3>
                    <p className="text-gray-700 mb-4">
                      Sheds often become dumping grounds over the years. Tools, lawn equipment, garden supplies, and misc items pile up. We clear outdoor storage buildings completely. Small tool sheds to large storage buildings all get the same thorough service.
                    </p>
                    <p className="text-gray-700 mb-6">
                      Most shed projects take 1-2 hours. Cost ranges from $100 to $349. Size and contents determine the price. We remove rusty tools, old paint cans, and yard chemicals. Hazardous materials receive proper disposal according to regulations.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4">Property Cleanout San Diego - Complete Estate & Multi-Unit Clearing</h3>
                    <p className="text-gray-700 mb-4">
                      We handle complete property cleanouts. Entire homes, estates, multi-unit buildings, and commercial spaces all receive professional service. Families settling estates trust us. Landlords use us for tenant turnovers. Realtors prepare homes for sale with our help.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Project scope varies widely. Single-family homes typically take 4-8 hours. Estate cleanouts may need multiple days. We work room by room systematically. Personal items receive careful handling.
                    </p>
                    <p className="text-gray-700 mb-6">
                      Estate cleanouts require sensitivity and care. These situations are often emotional and stressful. Our crews work respectfully every time. Items of value or sentiment get set aside. Discretion is maintained throughout the entire process.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4">Eco-Friendly Disposal & Donation Services</h3>
                    <p className="text-gray-700 mb-4">
                      Every project includes responsible disposal. We minimize environmental impact. Our local community benefits from our practices.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">Charitable Donations</h4>
                        <p className="text-sm text-gray-700">
                          Furniture, clothing, household goods, and electronics in good condition go to Goodwill, Salvation Army, and local San Diego charities.
                        </p>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">Recycling Programs</h4>
                        <p className="text-sm text-gray-700">
                          Metal, cardboard, plastics, and electronics are separated and taken to San Diego recycling facilities.
                        </p>
                      </div>

                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">Compliant Disposal</h4>
                        <p className="text-sm text-gray-700">
                          Items that cannot be donated or recycled go to licensed San Diego County landfills with proper documentation.
                        </p>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4">Service Areas Throughout San Diego County</h3>
                    <p className="text-gray-700 mb-4">
                      We serve all neighborhoods and communities. Professional service reaches every area. No location is too far.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6 text-sm text-gray-700">
                      <div>• Downtown San Diego</div>
                      <div>• North Park</div>
                      <div>• Hillcrest</div>
                      <div>• La Jolla</div>
                      <div>• Pacific Beach</div>
                      <div>• Mission Valley</div>
                      <div>• Chula Vista</div>
                      <div>• Clairemont</div>
                      <div>• Point Loma</div>
                      <div>• El Cajon</div>
                      <div>• La Mesa</div>
                      <div>• Santee</div>
                    </div>

                  </div>
                </div>

                {/* RIGHT COLUMN - Sidebar */}
                <div className="lg:col-span-1">
                  <div className="space-y-8 lg:sticky lg:top-24">
                    <LocationSidebarCTA
                      locationName="Cleanout Services"
                      nearbyLocations={relatedServices}
                    />
                    <LocationPricingSection
                      locationName="Cleanout Services"
                    />
                    <TrustSignalsSection
                      locationName="Cleanout Services"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <CleanoutFAQSection />
      </main>
      <Footer />
      </div>
    </>
  );
}
