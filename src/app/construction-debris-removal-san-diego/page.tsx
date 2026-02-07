import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import OptimizedGradientHero from "@/components/OptimizedGradientHero";

export const metadata: Metadata = {
  title: "Construction Debris Removal San Diego | Contractor Hauling & Cleanup",
  description: "Professional construction debris removal San Diego. Fast, reliable service for contractors. Same-day available. Licensed & insured. Call (619) 750-0114 for contractor quote.",
  keywords: [
    "construction debris removal San Diego",
    "construction waste removal",
    "contractor hauling San Diego",
    "renovation debris removal",
    "demolition debris removal",
    "construction cleanup San Diego",
    "c&d waste removal",
    "drywall removal San Diego",
    "lumber removal",
    "contractor junk removal"
  ],
  openGraph: {
    title: "Construction Debris Removal San Diego | Contractor Hauling & Cleanup",
    description: "Professional construction debris removal San Diego. Fast, reliable service for contractors. Same-day available. Licensed & insured.",
    url: "https://www.severinhauling.com/construction-debris-removal-san-diego",
    siteName: "Severin Hauling",
    type: "website",
    locale: "en_US",
    images: [{
      url: "https://www.severinhauling.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Construction Debris Removal San Diego - Severin Hauling"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Debris Removal San Diego | Contractor Services",
    description: "Professional construction debris removal San Diego. Fast, reliable service for contractors. Same-day available. Call (619) 750-0114!",
    images: ["https://www.severinhauling.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.severinhauling.com/construction-debris-removal-san-diego",
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

const constructionFAQs = [
    {
      question: "How much does construction debris removal cost in San Diego?",
      answer: "Pricing starts at $69 for small items and $100 for standard items, ranging up to $495 for a full trailer load (12 cubic yards). Most small to medium construction projects fall in the $249-$429 range. Large demolition projects requiring multiple loads are quoted on-site. Volume pricing available for ongoing contracts."
    },
    {
      question: "Do you offer same-day service for construction projects?",
      answer: "Yes. Call before 2 PM and we can usually provide same-day pickup to keep your project moving. We understand construction delays cost money, so we prioritize contractor requests."
    },
    {
      question: "How much does demolition debris removal San Diego cost?",
      answer: "Demolition debris removal typically requires multiple trailer loads due to volume. Small demolition jobs start around $495 for a full load, while larger projects requiring 2-4 loads range from $1,000-$2,000. Heavy materials like concrete may have additional fees. We provide on-site quotes for demolition projects."
    },
    {
      question: "Can you handle concrete and heavy materials?",
      answer: "Yes. We have equipment to handle concrete, brick, masonry, and other heavy construction materials. These materials may have additional fees due to weight and disposal requirements. Call for a quote on concrete removal projects."
    },
    {
      question: "Do you provide documentation for permits?",
      answer: "Yes. We provide disposal receipts and documentation needed for permit compliance, inspections, and project closeout. We comply with San Diego disposal regulations and can coordinate with licensed facilities when required for specific materials."
    },
    {
      question: "Do you offer ongoing service for active job sites?",
      answer: "Absolutely. We provide scheduled pickups for active construction sites—daily, weekly, or as needed. Volume pricing available for ongoing contracts. This keeps your site clean, safe, and compliant without the hassle of managing debris yourself."
    }
  ];

export default function ConstructionDebrisRemovalPage() {
  const serviceSchema = generateServiceSchema({
    name: "Construction Debris Removal San Diego",
    description: "Professional construction debris removal for contractors. Fast, reliable service for renovation debris, demolition materials, and construction waste.",
    url: "https://www.severinhauling.com/construction-debris-removal-san-diego",
    serviceType: "Construction Debris Removal Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.severinhauling.com" },
    { name: "Services", url: "https://www.severinhauling.com/services" },
    { name: "Construction Debris Removal", url: "https://www.severinhauling.com/construction-debris-removal-san-diego" },
  ]);

  const faqSchema = generateFAQSchema(constructionFAQs);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema, faqSchema]
  };

  const relatedServices = [
    { name: "Commercial Junk Removal", slug: "commercial-junk-removal-san-diego" },
    { name: "Estate Cleanout", slug: "estate-cleanout-san-diego" },
    { name: "Same Day Junk Removal", slug: "same-day-junk-removal-san-diego" },
    { name: "Appliance Removal", slug: "appliance-removal-san-diego" },
  ];

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <Header />
      <main>
        <OptimizedGradientHero
          title="Construction Debris Removal San Diego"
          subtitle="Fast, Reliable Service for Contractors • Same-Day Available • Licensed & Insured"
          description="Keep Your Project on Schedule • Professional Crews • All Debris Types"
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
                Professional Construction Hauling for San Diego Contractors
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-4">
                  Construction projects generate debris. That's where we come in.
                </p>

                <p className="text-lg mb-6">
                  Our construction debris removal San Diego service handles everything from daily site cleanup to full demolition hauling. We work with contractors in <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a> active development areas, <a href="/junk-removal-oceanside" className="text-blue-600 hover:underline">Oceanside</a> coastal development projects, and <a href="/junk-removal-escondido" className="text-blue-600 hover:underline">Escondido</a>. We also serve <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a> luxury remodels, <a href="/junk-removal-del-mar" className="text-blue-600 hover:underline">Del Mar</a>, <a href="/junk-removal-mira-mesa" className="text-blue-600 hover:underline">Mira Mesa</a>, <a href="/junk-removal-kearny-mesa" className="text-blue-600 hover:underline">Kearny Mesa</a>, and <a href="/junk-removal-poway" className="text-blue-600 hover:underline">Poway</a>—keeping projects on schedule and job sites compliant throughout San Diego County. We also offer <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">commercial construction services</a>, <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">deck and outdoor demolition</a>, and <a href="/scrap-metal-removal" className="text-blue-600 hover:underline">construction metal recycling</a>.
                </p>

                {/* Construction Debris Image */}
                <div className="my-8 max-w-3xl mx-auto">
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/optimized/Woodpile.jpg"
                      alt="Construction debris removal San Diego - wood, lumber, and renovation waste hauling"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4">What We Haul</h3>
                <p className="text-lg mb-4">
                  We handle all types of construction and renovation debris:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">Common Materials</h4>
                    <ul className="list-disc pl-4 space-y-2 text-gray-700">
                      <li>Lumber, framing, and wood scraps</li>
                      <li>Drywall, sheetrock, and wallboard</li>
                      <li>Flooring (carpet, tile, hardwood, vinyl)</li>
                      <li>Roofing materials and shingles</li>
                      <li>Cabinets, countertops, and fixtures</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">Heavy Materials</h4>
                    <ul className="list-disc pl-4 space-y-2 text-gray-700">
                      <li>Concrete, brick, and masonry</li>
                      <li>Asphalt and paving materials</li>
                      <li>Steel beams and metal framing</li>
                      <li>HVAC equipment and ductwork</li>
                      <li>Mixed construction waste</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4">Construction Cleanup San Diego</h3>
                <p className="text-lg mb-6">
                  Need ongoing cleanup for an active job site? Our construction cleanup San Diego service provides scheduled pickups—daily, weekly, or as needed. Regular debris removal keeps your site safe, improves workflow, and helps you pass inspections without delays. For ongoing commercial construction projects, see our <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">commercial junk removal services</a>.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Renovation Debris Removal San Diego</h3>
                <p className="text-lg mb-6">
                  Kitchen remodels, bathroom renovations, whole-house updates—we handle it all. Our renovation debris removal San Diego service is designed for residential and commercial remodeling contractors who need fast, reliable hauling without the hassle of renting dumpsters or making multiple dump runs.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Demolition Debris Removal San Diego</h3>
                <p className="text-lg mb-6">
                  Full demolition projects generate massive amounts of debris. Our demolition debris removal San Diego team has the equipment and experience to handle large-scale cleanouts efficiently. We load, haul, and dispose of everything—from structural materials to mixed waste—so you can move to the next phase faster.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Drywall Removal San Diego</h3>
                <p className="text-lg mb-6">
                  Drywall is heavy, bulky, and creates dust everywhere. Our drywall removal San Diego service handles sheetrock debris from remodels, repairs, and demolition work. We'll haul it all away and dispose of it properly according to local regulations.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Concrete Removal San Diego</h3>
                <p className="text-lg mb-6">
                  Broken concrete, old foundations, demolished driveways—our concrete removal San Diego service handles heavy concrete debris that most haulers won't touch. We have the equipment to load and transport concrete, brick, and masonry waste to proper disposal facilities.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">How It Works</h3>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
                    <h4 className="font-bold text-lg mb-2">Call for Quote</h4>
                    <p className="text-gray-700 text-sm">
                      Tell us what you've got and when you need it gone. We'll give you an upfront price.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
                    <h4 className="font-bold text-lg mb-2">We Show Up & Load</h4>
                    <p className="text-gray-700 text-sm">
                      Our team arrives on schedule, loads everything safely, and cleans up the area.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
                    <h4 className="font-bold text-lg mb-2">Proper Disposal</h4>
                    <p className="text-gray-700 text-sm">
                      We haul it to licensed facilities and provide documentation when needed.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4">Compliance & Documentation</h3>
                <p className="text-lg mb-6">
                  We comply with San Diego disposal regulations and can provide documentation for permits, inspections, and project closeout. For materials requiring special handling, we coordinate with licensed facilities when required.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Serving All San Diego County</h3>
                <p className="text-lg mb-4">
                  From downtown San Diego to North County, we provide construction hauling across the county. Fast response wherever your project is located.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-blue-600">Central & Coastal</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Downtown San Diego</li>
                      <li>• La Jolla & UTC</li>
                      <li>• Pacific Beach</li>
                      <li>• Mission Valley</li>
                      <li>• Point Loma</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-blue-600">East County</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• El Cajon</li>
                      <li>• La Mesa</li>
                      <li>• Santee</li>
                      <li>• Lakeside</li>
                      <li>• Poway</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-blue-600">North County</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Oceanside</li>
                      <li>• Carlsbad</li>
                      <li>• Escondido</li>
                      <li>• Vista</li>
                      <li>• All North County</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Sidebar (lg:col-span-1) */}
          <div className="lg:col-span-1">
            <LocationSidebarCTA
              locationName="Construction Debris Removal"
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
          locationName="Construction Debris Removal"
          contextParagraph="Professional construction debris removal with straightforward pricing. Volume-based pricing for all types of construction materials—perfect for contractors and renovation projects."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Construction Debris Removal" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Construction Debris Removal San Diego"
          description="Get answers to common questions about our construction debris removal San Diego services, contractor pricing, and job site cleanup process."
          faqs={constructionFAQs}
          ctaTitle="Still Have Questions About Construction Debris Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our construction debris removal San Diego services, provide detailed quotes, or schedule your job site cleanup."
          includeSchema={false}
        />
      </main>
      <Footer />
    </>
  );
}
