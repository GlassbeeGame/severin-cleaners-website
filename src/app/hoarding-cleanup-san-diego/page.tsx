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
  title: "Hoarding Cleanup San Diego | Compassionate Service",
  description: "Professional hoarding cleanup San Diego with compassion and discretion. Judgment-free hoarding junk removal, confidential service. Licensed & insured. Call (619) 750-0114.",
  keywords: [
    "hoarding cleanup San Diego",
    "hoarding junk removal San Diego",
    "hoarder cleanup San Diego",
    "compassionate hoarding services",
    "hoarding cleanout San Diego",
    "extreme cleaning San Diego",
    "hoarding disorder cleanup",
    "discreet hoarding services",
    "judgment-free hoarding cleanup",
    "confidential hoarding removal"
  ],
  openGraph: {
    title: "Hoarding Cleanup San Diego | Compassionate Professional Service",
    description: "Discreet, compassionate hoarding cleanup services in San Diego. Professional junk removal team trained in sensitivity.",
    url: "https://severincleaners.com/hoarding-cleanup-san-diego",
    siteName: "Severin Cleaners",
    type: "website",
    locale: "en_US",
    images: [{
      url: "https://severincleaners.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Hoarding Cleanup San Diego - Severin Cleaners"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoarding Cleanup San Diego | Compassionate Service",
    description: "Professional hoarding cleanup San Diego with compassion and discretion. Judgment-free, confidential service. Call (619) 750-0114.",
    images: ["https://severincleaners.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://severincleaners.com/hoarding-cleanup-san-diego",
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

const hoardingFAQs = [
    {
      question: "How much does hoarding cleanup cost?",
      answer: "Costs vary based on volume. Single trailer loads range from $100-$495. Most hoarding cleanouts require multiple loads and typically cost $1,500-$5,000+ for complete removal. We provide free confidential consultations and written estimates."
    },
    {
      question: "Do you keep the cleanup confidential?",
      answer: "Absolutely. We use unmarked trucks and maintain complete discretion. All team members sign confidentiality agreements. We schedule around your needs and use private entrances when possible. Your privacy is our priority."
    },
    {
      question: "Do you handle biohazards, pests, or mold?",
      answer: "We handle general junk and debris removal following safe handling practices. For severe biohazard issues, extensive pest infestations, or significant mold problems, we coordinate with trusted professionals to ensure the entire cleanup gets done safely and properly."
    },
    {
      question: "How long does hoarding cleanup take?",
      answer: "Timeline depends on volume and the individual's comfort level. Small jobs (1-2 rooms) typically take 1-2 days. Larger properties can take several days to weeks. We work at a pace that respects emotional needs while making steady progress."
    },
    {
      question: "Is your team judgment-free?",
      answer: "Yes. Our team is trained in compassionate service and treats every person with dignity and respect. We understand hoarding is complex, and we're here to help without judgment. Many families tell us they appreciate our patient, understanding approach."
    },
    {
      question: "Can families be present during cleanup?",
      answer: "Yes, absolutely. Many families prefer to be present to help with decisions about what to keep. We work collaboratively and move at a pace that's comfortable. Some families prefer we work independently—either approach is fine."
    }
  ];

export default function HoardingCleanupPage() {
  const serviceSchema = generateServiceSchema({
    name: "Hoarding Cleanup San Diego",
    description: "Compassionate hoarding cleanup services with professional organizing. Judgment-free, confidential hoarding junk removal.",
    url: "https://severincleaners.com/hoarding-cleanup-san-diego",
    serviceType: "Hoarding Cleanup Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "Hoarding Cleanup", url: "https://severincleaners.com/hoarding-cleanup-san-diego" },
  ]);

  const faqSchema = generateFAQSchema(hoardingFAQs);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema, faqSchema]
  };

  const relatedServices = [
    { name: "Estate Cleanout", slug: "estate-cleanout-san-diego" },
    { name: "Foreclosure & Eviction Cleanout", slug: "foreclosure-eviction-cleanout-san-diego" },
    { name: "Furniture Removal", slug: "furniture-disposal-san-diego" },
    { name: "Appliance Removal", slug: "appliance-removal-san-diego" },
  ];

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <Header />
      <main>
        <OptimizedGradientHero
          title="Hoarding Cleanup San Diego"
          subtitle="Compassionate Junk Removal • Judgment-Free Support • Confidential Service"
          description="Complete Confidentiality • Licensed & Insured • Sensitive Approach"
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
                Confidential Hoarding Junk Removal Services
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-4">
                  Hoarding situations are complex and deeply personal. When it's time for cleanup, you need a junk hauling service that understands the emotional challenges involved.
                </p>

                <p className="text-lg mb-6">
                  Our hoarding cleanup San Diego team provides compassionate junk removal for individuals and families dealing with hoarding situations. We're not counselors or therapists—we're a professional hauling company that specializes in discreet, respectful removal of accumulated items while treating everyone involved with dignity and understanding. We also offer <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanout services</a>, <a href="/cleanout-services-san-diego" className="text-blue-600 hover:underline">property cleanout services</a>, and <a href="/foreclosure-eviction-cleanout-san-diego" className="text-blue-600 hover:underline">property cleanout</a> for challenging situations.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Understanding Hoarding Situations</h3>
                <p className="text-lg mb-6">
                  Hoarding disorder affects many people and can create overwhelming accumulations of items. Our hoarder cleanup San Diego service approaches each situation with patience and respect, working at a pace that's comfortable for the individual while clearing spaces safely and efficiently.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">What We Handle</h3>
                <p className="text-lg mb-4">
                  Our hoarder junk removal San Diego service removes all types of accumulated items:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">General Junk & Belongings</h4>
                    <ul className="list-disc pl-4 space-y-2 text-gray-700">
                      <li>Furniture, boxes, and household items</li>
                      <li>Clothing, papers, and accumulated belongings</li>
                      <li>Electronics, appliances, and equipment</li>
                      <li>Books, magazines, and stored materials</li>
                      <li>General debris and accumulated items</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">Hoarded Waste Handling</h4>
                    <ul className="list-disc pl-4 space-y-2 text-gray-700">
                      <li>Room-by-room clearing services</li>
                      <li>Basement, attic, and garage cleanouts</li>
                      <li>Accumulated storage and clutter</li>
                      <li>Safe removal of items from all areas</li>
                      <li>Property clearing and cleanup</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4">Our Compassionate Process</h3>
                <p className="text-lg mb-4">
                  Every hoarding cleanout services San Diego project is unique. Here's how we approach each situation:
                </p>

                <div className="space-y-4 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">1. Private Consultation</h4>
                    <p className="text-gray-700">
                      Confidential, judgment-free discussion to understand your needs, timeline, and concerns.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">2. Respectful Sorting</h4>
                    <p className="text-gray-700">
                      Work with you to identify items to keep, donate, or remove. We move at your pace.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">3. Careful Removal</h4>
                    <p className="text-gray-700">
                      Discreet hauling using unmarked trucks. Safe handling of all items with proper disposal.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">4. Property Cleanup</h4>
                    <p className="text-gray-700">
                      Basic cleaning and clearing of spaces. Leave the property clean and ready for next steps.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4">Handling Complex Situations</h3>
                <p className="text-lg mb-6">
                  Some hoarding situations involve complications beyond standard junk removal—severe biohazards, extensive pest infestations, or significant mold issues. We follow safe handling practices and comply with San Diego disposal regulations for general debris. For severe biohazard, pest, or mold issues, we coordinate with trusted professionals to ensure the situation is handled properly and completely.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Extreme Cleaning San Diego</h3>
                <p className="text-lg mb-6">
                  When hoarding situations require extensive cleaning beyond junk removal, our extreme cleaning San Diego service includes thorough post-removal cleanup. We handle the heavy-duty cleaning needed after items are hauled away, working to restore spaces to livable condition.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Complete Discretion</h3>
                <p className="text-lg mb-4">
                  We understand hoarding cleanup is deeply personal. Our service includes:
                </p>

                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li>Unmarked vehicles for neighborhood discretion</li>
                  <li>Flexible scheduling including evenings and weekends</li>
                  <li>Confidentiality agreements with all team members</li>
                  <li>Use of private entrances when possible</li>
                  <li>Respectful, non-judgmental approach throughout</li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4">Working with Families</h3>
                <p className="text-lg mb-6">
                  Family members often feel overwhelmed when helping a loved one with a hoarding situation. We provide patient, understanding service that respects both the individual and the family's needs. We're here to handle the physical work so families can focus on emotional support.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Serving All San Diego County</h3>
                <p className="text-lg mb-4">
                  Our discreet hoarding cleanup service is available throughout San Diego County:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <ul className="list-disc pl-4 text-gray-700">
                    <li><a href="/junk-removal-pacific-beach" className="text-blue-600 hover:underline">Pacific Beach</a></li>
                    <li><a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a></li>
                    <li><a href="/junk-removal-point-loma" className="text-blue-600 hover:underline">Point Loma</a></li>
                    <li><a href="/junk-removal-north-park" className="text-blue-600 hover:underline">North Park</a></li>
                  </ul>
                  <ul className="list-disc pl-4 text-gray-700">
                    <li><a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a></li>
                    <li><a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a></li>
                    <li><a href="/junk-removal-la-mesa" className="text-blue-600 hover:underline">La Mesa</a></li>
                    <li><a href="/junk-removal-santee" className="text-blue-600 hover:underline">Santee</a></li>
                  </ul>
                  <ul className="list-disc pl-4 text-gray-700">
                    <li><a href="/junk-removal-escondido" className="text-blue-600 hover:underline">Escondido</a></li>
                    <li><a href="/junk-removal-oceanside" className="text-blue-600 hover:underline">Oceanside</a></li>
                    <li><a href="/junk-removal-carmel-valley" className="text-blue-600 hover:underline">Carmel Valley</a></li>
                    <li><a href="/junk-removal-poway" className="text-blue-600 hover:underline">Poway</a></li>
                  </ul>
                </div>
              </div>
                  </div>
                </div>

                {/* RIGHT COLUMN - Sidebar (lg:col-span-1) */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Hoarding Cleanup"
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
          locationName="Hoarding Cleanup"
          contextParagraph="Compassionate hoarding cleanup with transparent, volume-based pricing. Confidential service with all labor, hauling, and proper disposal included. We work at your pace with complete discretion."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Hoarding Cleanup" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Hoarding Cleanup San Diego"
          description="Get answers to common questions about our compassionate <strong>hoarding cleanup San Diego</strong> services and specialized support."
          faqs={hoardingFAQs}
          ctaTitle="Need Compassionate Hoarding Cleanup Help?"
          ctaDescription="Our experienced, non-judgmental team is ready to help with <strong>hoarding cleanup San Diego</strong> services. Confidential, respectful, and thorough."
          includeSchema={false}
        />
      </main>
      <Footer />
    </>
  );
}
