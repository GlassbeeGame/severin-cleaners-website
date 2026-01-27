import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import LocationPricingSection from "@/components/LocationPricingSection";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import OptimizedGradientHero from "@/components/OptimizedGradientHero";

export const metadata: Metadata = {
  title: "Cleanout Services San Diego | Property & Garage",
  description: "Expert cleanout services San Diego for garages, attics, basements, sheds, storage units & full properties. Same-day junk hauling available. Licensed & insured. Call (619) 750-0114 for free quote!",
  keywords: [
    "cleanout services San Diego",
    "property cleanout San Diego",
    "garage cleanout San Diego",
    "attic cleanout San Diego",
    "basement cleanout San Diego",
    "storage unit cleanout San Diego",
    "shed cleanout San Diego",
    "junk hauling San Diego"
  ],
  openGraph: {
    title: "Cleanout Services San Diego - Professional Junk Hauling & Property Cleanouts",
    description: "Expert cleanout services San Diego for all types of properties. Same-day service, eco-friendly disposal, transparent pricing. Free quotes!",
    url: 'https://severincleaners.com/cleanout-services-san-diego',
    siteName: 'Severin Cleaners',
    type: 'website',
    locale: 'en_US',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Cleanout Services San Diego - Severin Cleaners'
    }]
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

const cleanoutFAQs = [
  {
    question: "What are your cleanout service prices in San Diego?",
    answer: "Our cleanout services San Diego pricing is volume-based and completely transparent. Pricing includes: Small Items starting at $69, Standard Items at $100, 1/4 Trailer Load (3 cubic yards) for $249, 1/2 Trailer Load (6 cubic yards) for $349, and Full Trailer Load (12 cubic yards) for $495. We also offer 3/8 load ($319), 5/8 load ($366), 3/4 load ($429), and 7/8 load ($462) options. All pricing includes labor, hauling, eco-friendly disposal, and recycling or donation coordination. No hidden fees or surprise charges."
  },
  {
    question: "Do you offer shed cleanout San Diego services?",
    answer: "Yes! Shed cleanout San Diego is one of our specialty services. We handle everything from small tool sheds to large storage buildings, removing years of accumulated tools, equipment, yard waste, and miscellaneous items. Most shed cleanouts take 1-2 hours and range from $200-$400 depending on volume. We can also assist with shed demolition coordination if needed."
  },
  {
    question: "Can you handle large property cleanouts like estates or multi-unit homes?",
    answer: "Absolutely. Property cleanout San Diego projects are our specialty, including estate cleanouts, multi-unit residential buildings, move-out situations, and properties being prepared for sale or rent. We work with families, realtors, and landlords to completely clear properties of all unwanted items, handling everything from furniture to appliances to personal belongings with care and professionalism."
  },
  {
    question: "What happens to items after you haul them away?",
    answer: "We prioritize eco-friendly disposal for all our cleanout services San Diego. Items in good condition are donated to local charities, recyclable materials go to San Diego recycling facilities, and only true waste goes to approved landfills. We partner with Goodwill, Salvation Army, and local nonprofits to give items a second life whenever possible."
  },
  {
    question: "How long does a typical cleanout take?",
    answer: "Cleanout duration varies by project size. Garage cleanout San Diego and attic cleanout San Diego jobs typically take 2-3 hours, storage unit cleanout San Diego takes 1-2 hours, while full property cleanout San Diego or basement cleanout San Diego projects may take 4-8 hours or require multiple visits for large estates."
  },
  {
    question: "Do you offer same-day cleanout service?",
    answer: "Yes! We offer same-day cleanout services San Diego for urgent situations including emergency move-outs, realtor deadlines, and property turnovers. Call us early in the day for best availability, and we'll do everything possible to accommodate your timeline with professional junk hauling service."
  },
  {
    question: "Do I need to be present during the cleanout?",
    answer: "Not necessarily. Many property cleanout San Diego clients provide us with access and clear instructions on what to remove, then let us work independently. This is common for landlords, property managers, and busy professionals. We can send before and after photos to document our work."
  }
];

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

  const faqSchema = generateFAQSchema(cleanoutFAQs);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema, faqSchema]
  };

  const relatedServices = [
    { name: "Same-Day Junk Removal", slug: "/same-day-junk-removal-san-diego" },
    { name: "Estate Cleanout", slug: "/estate-cleanout-san-diego" },
    { name: "Foreclosure Cleanout", slug: "/foreclosure-eviction-cleanout-san-diego" },
    { name: "Furniture Removal", slug: "/furniture-disposal-san-diego" }
  ];

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <Header />
      <main>
        <OptimizedGradientHero
          title="Cleanout Services San Diego"
          subtitle="Professional Junk Hauling for Every Space • Garages • Attics • Basements • Storage"
          description="Same-Day Available • Transparent Pricing • Licensed & Insured"
        />

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
                      We handle complete property cleanouts in <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a> property cleanouts, <a href="/junk-removal-pacific-beach" className="text-blue-600 hover:underline">Pacific Beach</a>, <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a>, <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a>, <a href="/junk-removal-poway" className="text-blue-600 hover:underline">Poway</a>, <a href="/junk-removal-oceanside" className="text-blue-600 hover:underline">Oceanside</a>, <a href="/junk-removal-santee" className="text-blue-600 hover:underline">Santee</a>, and <a href="/junk-removal-la-mesa" className="text-blue-600 hover:underline">La Mesa</a>. Entire homes, estates, multi-unit buildings, and commercial spaces all receive professional service. Families settling estates trust us. Landlords use us for tenant turnovers. Realtors prepare homes for sale with our help.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Project scope varies widely. Single-family homes typically take 4-8 hours. Estate cleanouts may need multiple days. We work room by room systematically. Personal items receive careful handling.
                    </p>
                    <p className="text-gray-700 mb-6">
                      Estate cleanouts require sensitivity and care. These situations are often emotional and stressful. Our crews work respectfully every time. Items of value or sentiment get set aside. Discretion is maintained throughout the entire process. For specialized services, visit our <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanout services</a>, <a href="/hoarding-cleanup-san-diego" className="text-blue-600 hover:underline">hoarding cleanout</a>, and <a href="/foreclosure-eviction-cleanout-san-diego" className="text-blue-600 hover:underline">property cleanout</a> pages.
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
                  <LocationSidebarCTA
                    locationName="Cleanout Services"
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
          locationName="Cleanout Services"
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Cleanout Services" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions About Cleanout Services"
          description="Get answers to common questions about our cleanout services San Diego, pricing, and what to expect when you hire our professional junk hauling team."
          faqs={cleanoutFAQs}
          ctaTitle="Still Have Questions About Our Cleanout Services?"
          ctaDescription="Our experienced team is ready to provide your free cleanout quote and answer any questions about garage cleanout San Diego, attic cleanout San Diego, or any other junk hauling needs."
          includeSchema={false}
        />
      </main>
      <Footer />
    </>
  );
}
