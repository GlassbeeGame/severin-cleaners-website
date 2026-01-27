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
  title: "Estate Cleanout San Diego | Respectful Probate Cleanout Services",
  description: "Compassionate estate cleanout San Diego services. Probate cleanout, senior downsizing, inheritance property cleanout. Licensed, respectful, professional. Call (619) 750-0114.",
  keywords: [
    "estate cleanout San Diego",
    "probate cleanout San Diego",
    "senior downsizing San Diego",
    "inheritance property cleanout",
    "estate junk removal San Diego",
    "estate sale cleanout",
    "deceased estate cleanout",
    "family estate cleanout",
    "compassionate estate services",
    "respectful estate cleanout"
  ],
  openGraph: {
    title: "Estate Cleanout San Diego | Respectful Probate & Senior Downsizing",
    description: "Compassionate, professional estate cleanout services in San Diego. Probate cleanout, estate sales, senior downsizing with dignity and care.",
    url: "https://severincleaners.com/estate-cleanout-san-diego",
    siteName: "Severin Cleaners",
    type: "website",
    locale: "en_US",
    images: [{
      url: "https://severincleaners.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Estate Cleanout San Diego - Severin Cleaners"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Estate Cleanout San Diego | Respectful Probate Services",
    description: "Compassionate estate cleanout San Diego services. Probate cleanout, senior downsizing, inheritance property cleanout. Call (619) 750-0114.",
    images: ["https://severincleaners.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://severincleaners.com/estate-cleanout-san-diego",
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

const estateFAQs = [
    {
      question: "How much does estate cleanout cost in San Diego?",
      answer: "Estate cleanout costs depend on how much needs to be hauled away. Most full estates range from $1,500-$3,000 depending on property size and volume of items. Single trailer loads start at $69 for small items and $100 for standard items, up to $495 for full loads. We provide written estimates after seeing what needs to be removed."
    },
    {
      question: "Can you help with probate cleanout deadlines in San Diego?",
      answer: "Yes. Our probate cleanout San Diego service works efficiently to meet court deadlines. We haul away furniture, clear rooms, and remove all items so you can meet legal requirements. We understand the timeline pressure and schedule accordingly."
    },
    {
      question: "Do you handle estate sale cleanout in San Diego?",
      answer: "Absolutely. Our estate sale cleanout San Diego service removes everything left over after an estate sale. We'll haul away unsold furniture, boxes, and miscellaneous items so you can close out the property."
    },
    {
      question: "What if there are items I want to keep?",
      answer: "Simply point out what you want to keep and we'll work around it. We only haul away what you tell us to remove. Some families set aside items beforehand, others direct us during the cleanout—either way works."
    },
    {
      question: "Can you help with senior downsizing in San Diego?",
      answer: "Yes. Our senior downsizing San Diego service removes furniture and items that won't fit in the new place. We work at a comfortable pace and treat seniors with patience and respect. We handle the heavy lifting so transitions go smoothly."
    },
    {
      question: "What happens to the items after you haul them away?",
      answer: "Usable furniture and items in good condition go to local charities when appropriate. Everything else is disposed of responsibly—we comply with San Diego disposal regulations to ensure proper handling."
    },
    {
      question: "Do you offer estate junk removal services in San Diego?",
      answer: "Yes. Our estate junk removal San Diego service handles the disposal of unwanted furniture, old belongings, and accumulated items. We remove everything you don't need—from single rooms to entire houses."
    },
    {
      question: "How quickly can you start?",
      answer: "We can typically start within a few days, depending on your schedule and readiness. For urgent probate situations, we can often begin within 24-48 hours. We work around your timeline—some families need immediate help, others need time. Either way, we're here when you're ready."
    }
  ];

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

  const faqSchema = generateFAQSchema(estateFAQs);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema, faqSchema]
  };

  const relatedServices = [
    { name: "Foreclosure & Eviction Cleanout", slug: "foreclosure-eviction-cleanout-san-diego" },
    { name: "Hoarding Cleanup", slug: "hoarding-cleanup-san-diego" },
    { name: "Furniture Removal", slug: "furniture-disposal-san-diego" },
    { name: "Appliance Removal", slug: "appliance-removal-san-diego" },
  ];

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <Header />

      <main>
        {/* Hero Section - Optimized for Core Web Vitals */}
        <OptimizedGradientHero
          title="Estate Cleanout San Diego"
          subtitle="Compassionate Junk Hauling for Difficult Times • Licensed & Insured • Respectful Service"
          description="Respectful • Professional • Understanding"
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
                Estate Junk Removal When You Need It Most
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-4">
                  Clearing a loved one's home is never easy. There's <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:text-blue-700 underline">furniture to move</a>, including <a href="/couch-removal-san-diego" className="text-blue-600 hover:text-blue-700 underline">old furniture and sofa removal services</a>, boxes to haul, <a href="/appliance-removal-san-diego" className="text-blue-600 hover:text-blue-700 underline">appliances to dispose of</a>—and you're dealing with it all while grieving or managing family logistics.
                </p>

                <p className="text-lg mb-6">
                  Our estate cleanout San Diego service takes the physical burden off your shoulders. Whether you're handling an <a href="/junk-removal-escondido" className="text-blue-600 hover:text-blue-700">Escondido estate property</a> or an <a href="/junk-removal-oceanside" className="text-blue-600 hover:text-blue-700">Oceanside family home</a>, we're a junk hauling company that specializes in estate situations. We remove everything you need gone—respectfully, efficiently, and with compassion for what you're going through.
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
                  From <a href="/junk-removal-la-jolla" className="text-blue-600 hover:text-blue-700 underline">La Jolla estate cleanout services</a> to <a href="/junk-removal-chula-vista" className="text-blue-600 hover:text-blue-700 underline">Chula Vista property clearing</a>, we provide estate cleanout services countywide. Our team serves families in all San Diego neighborhoods with the same care and professionalism, including <a href="/junk-removal-rancho-santa-fe" className="text-blue-600 hover:text-blue-700 underline">Rancho Santa Fe estate services</a> and <a href="/junk-removal-del-mar" className="text-blue-600 hover:text-blue-700 underline">Del Mar luxury estate cleanouts</a>.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-blue-600">Coastal Areas</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• <a href="/junk-removal-la-jolla" className="text-blue-600 hover:text-blue-700">La Jolla</a></li>
                      <li>• <a href="/junk-removal-del-mar" className="text-blue-600 hover:text-blue-700">Del Mar</a></li>
                      <li>• <a href="/junk-removal-pacific-beach" className="text-blue-600 hover:text-blue-700">Pacific Beach</a></li>
                      <li>• <a href="/junk-removal-point-loma" className="text-blue-600 hover:text-blue-700">Point Loma</a></li>
                      <li>• <a href="/junk-removal-carmel-valley" className="text-blue-600 hover:text-blue-700">Carmel Valley</a></li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-blue-600">Central San Diego</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• <a href="/junk-removal-hillcrest" className="text-blue-600 hover:text-blue-700">Hillcrest</a></li>
                      <li>• <a href="/junk-removal-north-park" className="text-blue-600 hover:text-blue-700">North Park</a></li>
                      <li>• <a href="/junk-removal-clairemont" className="text-blue-600 hover:text-blue-700">Clairemont</a></li>
                      <li>• <a href="/junk-removal-kearny-mesa" className="text-blue-600 hover:text-blue-700">Kearny Mesa</a></li>
                      <li>• <a href="/junk-removal-mira-mesa" className="text-blue-600 hover:text-blue-700">Mira Mesa</a></li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-blue-600">East & South County</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• <a href="/junk-removal-el-cajon" className="text-blue-600 hover:text-blue-700">El Cajon</a></li>
                      <li>• <a href="/junk-removal-la-mesa" className="text-blue-600 hover:text-blue-700">La Mesa</a></li>
                      <li>• <a href="/junk-removal-chula-vista" className="text-blue-600 hover:text-blue-700">Chula Vista</a></li>
                      <li>• <a href="/junk-removal-santee" className="text-blue-600 hover:text-blue-700">Santee</a></li>
                      <li>• <a href="/junk-removal-poway" className="text-blue-600 hover:text-blue-700">Poway</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Sidebar (lg:col-span-1) */}
          <div className="lg:col-span-1">
            <LocationSidebarCTA
              locationName="Estate Cleanout"
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
          locationName="Estate Cleanout"
          contextParagraph="Compassionate estate cleanout service with transparent pricing. From single rooms to full property cleanouts, our pricing is based on volume with all labor, hauling, and proper disposal included."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Estate Cleanout" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Estate Cleanout San Diego"
          description="Get answers to common questions about our estate cleanout San Diego services, compassionate handling, and complete property clearing."
          faqs={estateFAQs}
          ctaTitle="Still Have Questions About Estate Cleanout Services?"
          ctaDescription="Our compassionate team is ready to help with your estate cleanout San Diego needs, provide detailed quotes, or answer any questions during this difficult time."
          includeSchema={false}
        />
      </main>

      <Footer />
    </>
  );
}
