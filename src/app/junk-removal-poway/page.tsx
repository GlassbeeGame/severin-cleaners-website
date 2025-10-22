import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PowayFAQSection from "./PowayFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Poway Junk Removal | Ranch & Family Home Specialists | Same-Day Service',
  description: 'Professional Poway junk removal for ranches, equestrian properties, family homes, business parks. Large property specialists with eco-friendly service. Call (619) 750-0114.',
  keywords: 'Poway junk removal, junk hauling Poway, junk pickup Poway, trash removal Poway, Poway San Diego junk removal, ranch junk removal',
  openGraph: {
    title: 'Poway Junk Removal | Ranch & Family Home Specialists | Same-Day Service',
    description: 'Professional Poway junk removal for ranches, equestrian properties, family homes, business parks. Large property specialists with eco-friendly service. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-poway',
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
    title: 'Poway Junk Removal | Ranch & Family Home Specialists | Same-Day Service',
    description: 'Professional Poway junk removal for ranches, equestrian properties, family homes, business parks. Large property specialists with eco-friendly service. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-poway',
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
      "name": "How much does junk removal cost in Poway?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Poway junk removal pricing is transparent and upfront with no hidden fees. We offer special rates for ranch properties, large estates, and volume discounts for multi-acre cleanouts: Single Item Pickup starting at $100, 1/4 Trailer Load $249, 3/8 Trailer Load $319, 1/2 Trailer Load $349, 5/8 Trailer Load $366, 3/4 Trailer Load $429, 7/8 Trailer Load $462, Full Trailer Load $495. Ranch properties and large estates may qualify for volume discounts. Most family home projects range from $349-$495. Final pricing depends on volume, property accessibility, and disposal requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle junk hauling for large ranch or equestrian properties?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our junk hauling Poway service specializes in ranch and equestrian properties throughout Poway's rural areas. We handle barn cleanouts, arena maintenance debris, fence removal, and agricultural equipment disposal. Our team is experienced with multi-acre properties and understands the unique needs of horse facilities."
      }
    },
    {
      "@type": "Question",
      "name": "Can you provide same-day junk pickup in Poway?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We offer same-day junk pickup Poway service for urgent needs throughout all Poway neighborhoods, from Old Poway Village to Green Valley. Our local team can respond quickly for family emergencies, ranch property issues, or time-sensitive business cleanouts."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with Poway Business Park offices and commercial properties?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our trash removal Poway service includes comprehensive commercial support for Poway Business Park and local businesses. We provide office cleanouts, warehouse clearing, retail renovation debris removal, and regular commercial waste management with flexible scheduling to minimize business disruption."
      }
    },
    {
      "@type": "Question",
      "name": "Are your junk removal services eco-friendly in Poway?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our Poway San Diego junk removal prioritizes environmental responsibility through comprehensive recycling, donation programs, and disposal methods that comply with all local regulations. We handle all items in accordance with San Diego County and Poway regulations, so you don't have to worry about a thing. Our team works with local Poway charities for donations, ensures proper handling of ranch and agricultural waste, and maintains eco-friendly practices that protect our community's unique 'City in the Country' rural character and natural environment."
      }
    }
  ]
};

export default function JunkremovalpowayPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Poway",
    serviceName: "Junk Removal",
    description: "Professional Poway junk removal for ranches, equestrian properties, family homes, business parks. Large property specialists with eco-friendly service.",
    url: "https://severincleaners.com/junk-removal-poway",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Poway Junk Removal", url: "https://severincleaners.com/junk-removal-poway" },
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
              ✓ Ranch properties and suburban family community
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Poway Junk Removal
            </h1>
            <div className="text-xl mb-6">
              ⭐⭐⭐⭐⭐ 5.0 Rating • Ranch Property Experts • locally-owned Service
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
                Book Your Poway Junk Pickup – Save 15% Online
              </a>
            </div>
            <p className="text-lg">
              ✓ Same-Day Service ✓ Licensed & Insured ✓ Large Property Specialists
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Poway's Premier Ranch & Family Home Junk Removal Service</h2>

              <p className="text-lg text-gray-700 mb-6">
                <strong>Poway junk removal</strong> requires specialized expertise in large ranch properties, equestrian facilities, and suburban family homes. Known as "The City in the Country," Poway features diverse properties from historic Old Poway Village to modern estates in Green Valley and Twin Peaks. Our <strong>junk hauling Poway</strong> service understands the unique needs of ranch owners, equestrian enthusiasts, and growing families throughout this distinctive community.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Whether you need <strong>junk pickup Poway</strong> for ranch equipment disposal, equestrian facility maintenance, or family home decluttering, our <strong>trash removal Poway</strong> team delivers professional service that respects both your property and Poway's rural character. From Poway Business Park commercial cleanouts to residential estate clearing, we provide comprehensive solutions for all property types.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Poway Service Areas</h3>
                <ul className="text-blue-800">
                  <li>Old Poway Village and historic downtown areas</li>
                  <li>Rancho Bernardo and Green Valley neighborhoods</li>
                  <li>Twin Peaks, Garden Road, and Bridlewood communities</li>
                  <li>Poway Business Park and commercial zones</li>
                  <li>Equestrian properties and ranch estates</li>
                  <li>Family neighborhoods near community centers</li>
                </ul>
                <div className="mt-4 text-center">
                  <p className="text-blue-700 font-semibold">📞 Call (619) 750-0114 for immediate service</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Junk Hauling for Poway Ranches and Estates</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our <strong>junk hauling Poway</strong> service specializes in large property cleanouts, ranch maintenance, and equestrian facility management. We understand the scale of ranch properties, from multi-acre estates to horse facilities, and provide equipment and expertise to handle any size project. Our <strong>Poway junk removal</strong> team respects the rural lifestyle while delivering efficient, professional service.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Ranch & Equestrian Services</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Horse barn cleanouts and stable maintenance</li>
                    <li>Arena debris removal and fence line clearing</li>
                    <li>Ranch equipment and machinery disposal</li>
                    <li>Tack room organization and old gear removal</li>
                    <li>Pasture cleanup and property boundary maintenance</li>
                    <li>Agricultural waste and feed storage clearing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Suburban Family Services</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Family home garage and attic cleanouts</li>
                    <li>Pool area and backyard organization</li>
                    <li>Kids' playroom and toy decluttering</li>
                    <li>Home renovation debris removal</li>
                    <li>Estate downsizing and senior transitions</li>
                    <li>Seasonal cleanup for growing families</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Suburban Family Junk Pickup in Poway</h3>
              <p className="text-lg text-gray-700 mb-6">
                Poway's family-friendly neighborhoods from Twin Peaks to Garden Road require reliable <strong>trash removal Poway</strong> services that understand suburban lifestyle needs. Our <strong>junk pickup Poway</strong> team works with busy families, providing flexible scheduling and efficient service that minimizes disruption to your daily routine while helping maintain beautiful, organized homes.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h4 className="text-xl font-bold mb-3 text-green-900">Poway Business Park & Commercial Services</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 space-y-1 text-green-800">
                    <li>Office cleanouts and furniture removal</li>
                    <li>Retail space renovation debris disposal</li>
                    <li>Warehouse and storage facility clearing</li>
                    <li>Tech equipment and e-waste recycling</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-green-800">
                    <li>Property management support services</li>
                    <li>Regular commercial waste management</li>
                    <li>Construction site cleanup coordination</li>
                    <li>Eco-friendly business disposal programs</li>
                  </ul>
                </div>
              </div>

              {/* Sticky CTA */}
              <div className="sticky top-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg shadow-lg mb-8 z-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">Call Today for Same-Day Junk Removal in Poway</p>
                    <p className="text-sm opacity-90">Ranch specialists • locally-owned • Large property experts</p>
                  </div>
                  <a
                    href="tel:6197500114"
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Poway Families & Ranch Owners Choose Severin Cleaners</h3>
              <p className="mb-4">
                As a locally-owned business with experience in large property management, we understand the unique needs of Poway's diverse community. Our <strong>Poway San Diego junk removal</strong> service combines ranch property expertise with suburban family values to deliver reliable, professional solutions for estates, equestrian facilities, and family homes.
              </p>

              <p className="mb-6">
                We respect Poway's "City in the Country" character, providing services that maintain the rural charm while meeting modern suburban needs. From historic Old Poway Village properties to new developments in Green Valley, our team treats every property with the same care and professionalism we'd want for our own family ranch.
              </p>

              <div className="text-center bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Get Poway Junk Removal Quote Today</h3>
                <p className="text-lg mb-6">
                  Ranch property specialists with locally-owned values and guaranteed satisfaction
                </p>
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                >
                  📞 Call (619) 750-0114 Now
                </a>
                <div className="bg-blue-800 rounded-lg p-4">
                  <p className="text-yellow-300 font-semibold mb-2">🏡 Poway Ranch & Family Special 🏡</p>
                  <div className="text-sm">
                    <strong>15% Off Large Property Cleanouts</strong> • <strong>Ranch Property Experts</strong><br/>
                    <strong>Family Home Specialists</strong> • <strong>Eco-Friendly Service</strong>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  Licensed & insured • Same-day service • Ranch property & suburban family specialists
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Now using dropdown component */}
      <PowayFAQSection />

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Related Ranch & Family Services</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/construction-debris-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
              <p className="text-gray-600">Ranch renovations and suburban home remodeling cleanup</p>
            </a>
            <a href="/estate-cleanout-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
              <p className="text-gray-600">Multi-generational family homes and inherited ranch properties</p>
            </a>
            <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
              <p className="text-gray-600">Large family home and ranch house furniture disposal</p>
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