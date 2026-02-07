import type { Metadata } from "next";
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
    answer: "After appliance disposal San Diego, all items are professionally disposed of according to local San Diego regulations and requirements. We work to ensure appliances are handled in compliance with local disposal standards. Our team ensures all items are processed at appropriate facilities according to San Diego County disposal requirements."
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
  const serviceSchema = generateServiceSchema({
    name: "Appliance Removal San Diego",
    description: "Professional appliance removal in San Diego. We remove refrigerators, washers, dryers, stoves, and all appliance types. Eco-friendly disposal.",
    url: "https://www.severinhauling.com/appliance-removal-san-diego",
    serviceType: "Appliance Removal Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.severinhauling.com" },
    { name: "Services", url: "https://www.severinhauling.com/services" },
    { name: "Appliance Removal", url: "https://www.severinhauling.com/appliance-removal-san-diego" },
  ]);

  const faqSchema = generateFAQSchema(applianceFAQs);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema, faqSchema]
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
                <p className="text-lg mb-4">
                  Whether you just upgraded your kitchen or have a broken washer collecting dust, we make appliance removal in San Diego easy. From <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla high-end appliance removal</a> to <a href="/junk-removal-pacific-beach" className="text-blue-600 hover:underline">Pacific Beach appliance disposal</a>, we're the trusted choice for homeowners and businesses.
                </p>

                <p className="text-lg mb-6">
                  We remove refrigerators, washers, dryers, stoves, dishwashers—you name it. Our service covers <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista appliance hauling</a> to Point Loma, North Park to <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon refrigerator removal</a>, helping homeowners reclaim their space daily with safe, eco-friendly appliance disposal. Also need <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">furniture disposal</a> or <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">mattress removal</a>? We handle it all.
                </p>

                {/* Appliance Removal Image */}
                <div className="my-8 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/optimized/fridge.jpg"
                    alt="Refrigerator removal San Diego - professional appliance disposal and recycling"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>

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

                <h2 className="text-3xl font-bold mt-8 mb-4">Specialized Appliance Removal Services</h2>

                <h3 className="text-2xl font-bold mt-6 mb-3">Refrigerator Removal San Diego</h3>
                <p className="text-lg mb-6">
                  Our refrigerator removal specialists handle units from garages, condos, or upstairs kitchens. Whether it's <a href="/junk-removal-kearny-mesa" className="text-blue-600 hover:underline">commercial appliance removal in Kearny Mesa</a> or residential service in <a href="/junk-removal-la-mesa" className="text-blue-600 hover:underline">La Mesa washer and dryer removal</a>, we safely navigate tight spaces and recycle Freon-compliant units responsibly.
                </p>

                <h3 className="text-2xl font-bold mt-6 mb-3">Washer & Dryer Removal San Diego</h3>
                <p className="text-lg mb-6">
                  We disconnect, remove, and haul both units together—perfect for laundry upgrades or new appliance deliveries. Our team provides efficient service from <a href="/junk-removal-mira-mesa" className="text-blue-600 hover:underline">Mira Mesa appliance recycling</a> to <a href="/junk-removal-santee" className="text-blue-600 hover:underline">Santee appliance pickup</a>.
                </p>

                <h3 className="text-2xl font-bold mt-6 mb-3">Stove & Dishwasher Removal San Diego</h3>
                <p className="text-lg mb-6">
                  From gas ranges to built-in dishwashers, our stove removal San Diego team handles careful extraction without damaging cabinetry.
                </p>

                <h3 className="text-2xl font-bold mt-6 mb-3">Freezer Removal San Diego</h3>
                <p className="text-lg mb-6">
                  We remove garage or chest freezers of all sizes—no need to lift a thing. Just empty the contents, and we'll handle the rest. Also removing furniture? Check our <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">furniture removal service</a>.
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
