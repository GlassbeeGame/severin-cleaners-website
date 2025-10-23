import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SanteeFAQSection from "./SanteeFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Santee Junk Removal | East County Family Service | (619) 750-0114',
  description: 'Santee family junk removal Carlton Hills, Trolley district. Garage cleanouts, RV debris, lake recreation equipment. (619) 750-0114',
  keywords: 'Santee junk removal, junk hauling Santee, junk pickup Santee, trash removal Santee, Santee San Diego junk removal, garage cleanouts',
  openGraph: {
    title: 'Santee Junk Removal | Family Homes & Garage Cleanout Specialists | Same-Day Service',
    description: 'Professional Santee junk removal for family homes, garage cleanouts, Carlton Hills, Sky Ranch. East County specialists with trolley-accessible service. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-santee',
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santee Junk Removal | Family Homes & Garage Cleanout Specialists | Same-Day Service',
    description: 'Professional Santee junk removal for family homes, garage cleanouts, Carlton Hills, Sky Ranch. East County specialists with trolley-accessible service. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-santee',
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
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does junk removal cost in Santee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Santee junk removal pricing is transparent and upfront with no hidden fees. We offer competitive rates for garage cleanouts, family homes, and apartment complexes: Single Item Pickup starting at $100, 1/4 Trailer Load $249, 3/8 Trailer Load $319, 1/2 Trailer Load $349, 5/8 Trailer Load $366, 3/4 Trailer Load $429, 7/8 Trailer Load $462, Full Trailer Load $495. Most garage cleanouts range from $249-$429, while full family home decluttering projects typically run $349-$495. We provide upfront pricing for all East County neighborhoods from Carlton Hills to Sky Ranch."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle garage cleanouts and bulky item pickup in Santee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our junk hauling Santee service specializes in garage cleanouts and bulky item removal throughout East County. We handle furniture, appliances, exercise equipment, and accumulated household items, helping families reclaim garage space for vehicles and organized storage."
      }
    },
    {
      "@type": "Question",
      "name": "Can you provide same-day junk hauling in Santee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer rapid-response junk pickup Santee service, typically providing next-day service with same-day available when you call before 2 PM. Our East County team can respond quickly for family emergencies, property management needs, or time-sensitive home organization projects throughout Carlton Hills, Sky Ranch, and all Santee neighborhoods."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with Santee property managers and apartment complexes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our trash removal Santee service provides comprehensive support for property managers and apartment complexes throughout East County. We coordinate tenant turnovers, common area cleanouts, and bulk item removal with flexible scheduling and competitive commercial rates."
      }
    },
    {
      "@type": "Question",
      "name": "Are your junk removal services eco-friendly in East County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We handle all items in accordance with San Diego County and East County regulations. Our team works with local charities for donations and recycles electronics and metals through certified facilities."
      }
    }
  ]
};

export default function JunkremovalsanteePage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Santee",
    serviceName: "Junk Removal",
    description: "Professional Santee junk removal for family homes, garage cleanouts, Carlton Hills, Sky Ranch. East County specialists with trolley-accessible service.",
    url: "https://severincleaners.com/junk-removal-santee",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Santee Junk Removal", url: "https://severincleaners.com/junk-removal-santee" },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema, faqSchema],
  };

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <div className={`${inter.variable} font-sans antialiased`}>
        <Header />
      <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ✓ East County suburban family community with convenient trolley access
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Santee Junk Removal | East County Family Service
            </h1>
            <div className="text-xl mb-6">
              ⭐⭐⭐⭐⭐ 5.0 Rating • Garage Cleanout Experts • locally-owned Service
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href="tel:6197500114"
                className="btn btn-primary text-lg px-8 py-4"
              >
                📞 Call (619) 750-0114
              </a>
              <a
                href="/contact"
                className="btn btn-secondary text-lg px-8 py-4 hover:bg-orange-600 transition-colors duration-200"
              >
                Book Your Santee Junk Pickup – Save 15% Online
              </a>
            </div>
            <p className="text-lg">
              ✓ <a href="/same-day-junk-removal-san-diego" className="text-white hover:underline">Same-Day Service</a> Available ✓ Licensed & Insured ✓ East County Specialists
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">East County's Premier Santee Junk Removal Service</h2>

              <p className="text-lg text-gray-700 mb-6">
                <strong>Santee junk removal</strong> requires understanding East County's family-oriented suburban lifestyle and diverse housing developments. From established neighborhoods in Carlton Hills to newer communities in Sky Ranch, Santee features growing families, active lifestyles, and homes that need regular organization support. Our <strong>junk hauling Santee</strong> service specializes in garage cleanouts, family home decluttering, and suburban property maintenance throughout East County.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Whether you need <strong>junk pickup Santee</strong> for a garage renovation project, family home organization, or apartment complex cleanout, our <strong>trash removal Santee</strong> team provides reliable service that fits busy family schedules. From Santee Trolley Square retail areas to RiverView Parkway trail communities, we deliver professional solutions throughout this dynamic East County city.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Santee Service Areas</h3>
                <ul className="text-blue-800">
                  <li>Carlton Hills and Carlton Oaks established neighborhoods</li>
                  <li>Sky Ranch and West Hills newer housing developments</li>
                  <li>Santee Trolley Square and retail commercial areas</li>
                  <li>RiverView Parkway and recreational trail communities</li>
                  <li>Mission Gorge Road business and mixed-use districts</li>
                  <li>Family neighborhoods near Santee Lakes and recreation areas</li>
                </ul>
                <div className="mt-4 text-center">
                  <p className="text-blue-700 font-semibold">📞 Call (619) 750-0114 for immediate service</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Junk Hauling in Carlton Hills and Sky Ranch</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our <strong>junk hauling Santee</strong> service provides specialized attention to East County's diverse family neighborhoods, from established Carlton Hills homes to growing Sky Ranch developments. We understand the challenges of suburban family living, from garage storage overflow to home renovation projects, and deliver <strong>Santee junk removal</strong> solutions that help maintain organized, functional family spaces.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Family Home Services</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Garage cleanouts and organization for growing families</li>
                    <li>Attic and basement clearing for storage optimization</li>
                    <li>Kids' room decluttering and toy organization</li>
                    <li>Home office setup and paper clutter removal</li>
                    <li>Backyard and patio furniture disposal</li>
                    <li>Exercise equipment and sports gear removal</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Neighborhood & Community Services</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Apartment complex and condo cleanout support</li>
                    <li>Property management coordination and scheduling</li>
                    <li>HOA compliance for community developments</li>
                    <li>Retail and business cleanouts along trolley corridors</li>
                    <li>New construction debris and move-in preparation</li>
                    <li>Estate transitions and downsizing assistance</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Garage Cleanouts in Santee Family Homes</h3>
              <p className="text-lg text-gray-700 mb-6">
                Santee's suburban family homes often feature attached garages that become catch-all storage areas for busy households. Our <strong>trash removal Santee</strong> service specializes in garage organization projects, helping families reclaim these valuable spaces for vehicles, workshops, or organized storage. We provide efficient <strong>junk pickup Santee</strong> that transforms cluttered garages into functional family spaces.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h4 className="text-xl font-bold mb-3 text-green-900">Santee Trolley Square & Commercial Services</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 space-y-1 text-green-800">
                    <li>Retail store cleanouts and renovation support</li>
                    <li>Office space organization and furniture removal</li>
                    <li>Restaurant and food service equipment disposal</li>
                    <li>Property management for commercial developments</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-green-800">
                    <li>Trolley-accessible service areas and transit coordination</li>
                    <li>Mixed-use development construction debris removal</li>
                    <li>Flexible scheduling for active business districts</li>
                    <li>Eco-friendly disposal for community sustainability</li>
                  </ul>
                </div>
              </div>

              {/* Sticky CTA */}
              <div className="sticky top-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg shadow-lg mb-8 z-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">Call Today for Fast Junk Removal in Santee</p>
                    <p className="text-sm opacity-90">Garage cleanout experts • locally-owned • East County specialists</p>
                  </div>
                  <a
                    href="tel:6197500114"
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Santee Families Choose Us</h3>
              <p className="mb-4">
                Santee's suburban layout features large two-car garages that accumulate decades of storage - we specialize in garage cleanouts that reclaim parking space. Mission Gorge Road corridor properties have different needs than Fanita Ranch's newer developments or Riverview's hillside homes. Our team navigates Santee's growing traffic patterns, understands Carlton Hills Road access challenges, and knows which neighborhoods require HOA coordination versus direct scheduling.
              </p>

              <p className="mb-6">
                East County families often have boats, RVs, and outdoor equipment competing for garage space. Santee's warm climate means year-round outdoor projects creating debris. We handle everything from Costco-sized bulk purchases that didn't work out to complete property cleanouts for downsizing families. Our pricing accommodates both small garage organization projects and full estate clearances across Santee's diverse neighborhoods.
              </p>

              <div className="text-center bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Get Santee Junk Removal Quote Today</h3>
                <p className="text-lg mb-6">
                  Serving East County families with garage cleanout expertise and suburban community values
                </p>
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                >
                  📞 Call (619) 750-0114 Now
                </a>
                <div className="bg-blue-800 rounded-lg p-4">
                  <p className="text-yellow-300 font-semibold mb-2">🏠 Santee Family Special 🏠</p>
                  <div className="text-sm">
                    <strong>15% Off Garage Cleanouts</strong> • <strong>East County Family Service</strong><br/>
                    <strong>Suburban Home Specialists</strong> • <strong>Trolley Area Experts</strong>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  Licensed & insured • <a href="/same-day-junk-removal-san-diego" className="text-white hover:underline">Same-day service</a> available • East County suburban family specialists
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Now using dropdown component */}
      <SanteeFAQSection />

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Related East County Family Services</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
              <p className="text-gray-600">Family home furniture disposal and apartment complex cleanouts</p>
            </a>
            <a href="/construction-debris-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
              <p className="text-gray-600">Home remodeling cleanup and new development construction debris</p>
            </a>
            <a href="/estate-cleanout-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
              <p className="text-gray-600">Family estate transitions and suburban home downsizing support</p>
            </a>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
    </>
  );
}