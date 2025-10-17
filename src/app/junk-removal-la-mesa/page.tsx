import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LaMesaFAQSection from "./LaMesaFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'La Mesa Junk Removal',
  description: 'Professional La Mesa junk removal for Mount Helix, Fletcher Hills, La Mesa Village. East County family specialists with eco-friendly service. Call (619) 750-0114.',
  keywords: 'La Mesa junk removal, junk hauling La Mesa, junk pickup La Mesa, trash removal La Mesa, La Mesa San Diego junk removal, Mount Helix junk removal',
  openGraph: {
    title: 'La Mesa Junk Removal',
    description: 'Professional La Mesa junk removal for Mount Helix, Fletcher Hills, La Mesa Village. East County family specialists with eco-friendly service. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-la-mesa/',
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
    title: 'La Mesa Junk Removal',
    description: 'Professional La Mesa junk removal for Mount Helix, Fletcher Hills, La Mesa Village. East County family specialists with eco-friendly service. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-la-mesa',
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
      "name": "How much does junk removal cost in La Mesa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our La Mesa junk removal pricing is transparent and upfront with no hidden fees. We offer special rates for family homes and rental property managers throughout East County: Single Item Pickup starting at $175, 1/4 Trailer Load $249, 3/8 Trailer Load $319, 1/2 Trailer Load $349, 5/8 Trailer Load $366, 3/4 Trailer Load $429, 7/8 Trailer Load $462, Full Trailer Load $495. Mount Helix hillside properties and challenging access locations may have additional coordination fees. Final pricing depends on volume, accessibility, and disposal requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide junk hauling for hillside homes in Mount Helix?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our junk hauling La Mesa service specializes in Mount Helix hillside properties with challenging access. Our team is experienced with steep driveways, narrow roads, and scenic property considerations. We use appropriately sized vehicles and coordinate access to protect both property and natural beauty."
      }
    },
    {
      "@type": "Question",
      "name": "Can you handle same-day junk pickup in La Mesa Village or Fletcher Hills?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We provide same-day junk pickup La Mesa throughout La Mesa Village, Fletcher Hills, and all East County neighborhoods. Our local team can respond quickly for family emergencies, rental property turnovers, or urgent cleanout needs while maintaining our commitment to professional service."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with property managers and rental homes in La Mesa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our trash removal La Mesa service provides specialized support for property managers and rental home turnovers. We offer flexible scheduling, detailed documentation, and reliable service that helps maintain property values and tenant satisfaction throughout East County rental markets."
      }
    },
    {
      "@type": "Question",
      "name": "Are your junk removal services eco-friendly in East County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our La Mesa San Diego junk removal prioritizes environmental responsibility through donations to local East County charities, comprehensive recycling programs, and eco-friendly disposal methods that exceed local regulations. We handle all items in full compliance with San Diego County and East County environmental regulations, so you don't have to worry about a thing. Our team sorts materials for donation, recycling, and proper disposal—ensuring minimal landfill impact while supporting local East County community organizations. We understand East County families value environmental stewardship and we're committed to protecting our hillside communities and natural spaces."
      }
    }
  ]
};

export default function JunkremovallamesesPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "La Mesa",
    serviceName: "Junk Removal",
    description: "Professional La Mesa junk removal for Mount Helix, Fletcher Hills, La Mesa Village. East County family specialists with eco-friendly service.",
    url: "https://severincleaners.com/junk-removal-la-mesa",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "La Mesa Junk Removal", url: "https://severincleaners.com/junk-removal-la-mesa" },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema, faqSchema]
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
              ✓ East County family community with hillside and suburban homes
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              La Mesa Junk Removal
            </h1>
            <div className="text-xl mb-6">
              ⭐⭐⭐⭐⭐ 5.0 Rating • Family-Owned Service • East County Specialists
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href="tel:6197500114"
                className="btn btn-primary text-lg px-8 py-4"
              >
                📞 Call (619) 750-0114
              </a>
              <a
                href="#contact"
                className="btn btn-secondary text-lg px-8 py-4 hover:bg-orange-600 transition-colors duration-200"
              >
                Book Your La Mesa Junk Pickup – Save 15% Online
              </a>
            </div>
            <p className="text-lg">
              ✓ Same-Day Service ✓ Licensed & Insured ✓ Local Specialists
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">East County's Premier La Mesa Junk Removal Service</h2>

              <p className="text-lg text-gray-700 mb-6">
                <strong>La Mesa junk removal</strong> requires deep understanding of East County's diverse family communities, from hillside homes in Mount Helix to suburban neighborhoods in Fletcher Hills. As the "Jewel of the Hills," La Mesa features unique topography, established family neighborhoods, and growing downtown revitalization. Our <strong>junk hauling La Mesa</strong> service specializes in serving East County families with reliable, eco-friendly solutions.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                From <strong>Mount Helix hillside properties</strong> with challenging access to <strong>La Mesa Village downtown cleanouts</strong>, we understand the specific needs of East County households. Whether you need <strong>junk pickup La Mesa</strong> for a growing family home or <strong>trash removal La Mesa</strong> for rental property management, our family-owned business delivers professional service with East County values.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">La Mesa Service Areas</h3>
                <ul className="text-blue-800">
                  <li>Mount Helix hillside homes and scenic properties</li>
                  <li>Fletcher Hills suburban family neighborhoods</li>
                  <li>La Mesa Village downtown district and condos</li>
                  <li>Grossmont Center retail and residential areas</li>
                  <li>Spring Street trolley corridor communities</li>
                  <li>Lake Murray and surrounding family neighborhoods</li>
                </ul>
                <div className="mt-4 text-center">
                  <p className="text-blue-700 font-semibold">📞 Call (619) 750-0114 for immediate service</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Junk Hauling in Mount Helix and Fletcher Hills</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our <strong>junk hauling La Mesa</strong> service provides specialized attention to East County's unique geography and family-oriented communities. From navigating Mount Helix's winding hillside roads to serving Fletcher Hills' established suburban homes, our team delivers professional <strong>La Mesa junk removal</strong> that understands local challenges and community values.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Hillside & Scenic Properties</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Mount Helix hillside homes with panoramic views</li>
                    <li>Challenging access driveways and steep terrain navigation</li>
                    <li>Scenic property cleanouts respecting natural beauty</li>
                    <li>Custom home and estate property management</li>
                    <li>Hillside landscaping debris and seasonal cleanup</li>
                    <li>Fire safety clearance and brush removal coordination</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Family Neighborhoods & Communities</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Fletcher Hills suburban family homes and developments</li>
                    <li>La Mesa Village downtown condos and apartments</li>
                    <li>Grossmont Center area residential and retail properties</li>
                    <li>Spring Street corridor trolley-accessible communities</li>
                    <li>Lake Murray recreational area and surrounding homes</li>
                    <li>Established neighborhoods with mature landscaping</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Family Home & Property Management Specialists</h3>
              <p className="text-lg text-gray-700 mb-6">
                East County families often maintain multi-generational properties, rental homes, and growing household needs. Our <strong>trash removal La Mesa</strong> service understands the dynamics of family property management, from garage organization for growing families to rental property turnover support. We provide reliable <strong>junk pickup La Mesa</strong> services that work with busy family schedules and property management requirements.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h4 className="text-xl font-bold mb-3 text-green-900">East County Family Services</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 space-y-1 text-green-800">
                    <li>Growing family home organization and decluttering</li>
                    <li>Garage and storage area clearing for active families</li>
                    <li>Rental property turnover and tenant transition support</li>
                    <li>Multi-generational household cleanouts and organization</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-green-800">
                    <li>Property manager coordination and scheduling flexibility</li>
                    <li>HOA compliance for condos and managed communities</li>
                    <li>Eco-friendly disposal supporting East County environmental values</li>
                    <li>Donation coordination with local East County charities</li>
                  </ul>
                </div>
              </div>

              {/* Sticky CTA */}
              <div className="sticky top-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg shadow-lg mb-8 z-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">Call Today for Same-Day Junk Removal in La Mesa</p>
                    <p className="text-sm opacity-90">Family-owned service • East County specialists • Eco-friendly disposal</p>
                  </div>
                  <a
                    href="tel:6197500114"
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why East County Families Trust Severin Cleaners</h3>
              <p className="mb-4">
                As a family-owned business serving East County for years, we understand the importance of reliable service that fits busy family schedules and respects community values. Our <strong>La Mesa junk removal</strong> service combines local knowledge with professional standards to deliver efficient solutions for hillside properties, family homes, and rental properties throughout East County.
              </p>

              <p className="mb-6">
                We specialize in working with property managers, busy families, and multi-generational households that need flexible, reliable service. Our <strong>La Mesa San Diego junk removal</strong> team treats every property with the same care we'd want for our own family homes, from Mount Helix estates to Fletcher Hills family neighborhoods.
              </p>

              <div className="text-center bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Get La Mesa Junk Removal Quote Today</h3>
                <p className="text-lg mb-6">
                  Serving East County families with reliable service and community values
                </p>
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                >
                  📞 Call (619) 750-0114 Now
                </a>
                <div className="bg-blue-800 rounded-lg p-4">
                  <p className="text-yellow-300 font-semibold mb-2">🏡 La Mesa Family Special 🏡</p>
                  <div className="text-sm">
                    <strong>15% Off La Mesa Bookings</strong> • <strong>East County Family Service</strong><br/>
                    <strong>Hillside Property Specialists</strong> • <strong>Eco-Friendly Disposal</strong>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  Licensed & insured • Same-day service • East County family & hillside property specialists
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Now using dropdown component */}
      <LaMesaFAQSection />

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Related East County Family Services</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
              <p className="text-gray-600">Large family home furniture removal for growing East County households</p>
            </a>
            <a href="/estate-cleanout-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
              <p className="text-gray-600">Inherited hillside properties and multi-generational family estate transitions</p>
            </a>
            <a href="/construction-debris-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
              <p className="text-gray-600">Family home renovations and hillside property improvement projects</p>
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