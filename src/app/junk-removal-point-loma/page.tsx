import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PointLomaFAQSection from "./PointLomaFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Point Loma Junk Removal | Military & Coastal Specialists',
  description: 'Professional Point Loma junk removal for military families, Liberty Station, Sunset Cliffs coastal homes. PCS move specialists with military discounts. Call (619) 750-0114.',
  keywords: 'Point Loma junk removal, junk hauling Point Loma, junk pickup Point Loma, trash removal Point Loma, Point Loma San Diego junk removal, military PCS moves',
  openGraph: {
    title: 'Point Loma Junk Removal | Military Family & Coastal Property Specialists | Same-Day Service',
    description: 'Professional Point Loma junk removal for military families, Liberty Station, Sunset Cliffs coastal homes. PCS move specialists with military discounts. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-point-loma',
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
    title: 'Point Loma Junk Removal | Military Family & Coastal Property Specialists | Same-Day Service',
    description: 'Professional Point Loma junk removal for military families, Liberty Station, Sunset Cliffs coastal homes. PCS move specialists with military discounts. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-point-loma',
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
      "name": "Do you provide junk removal for military PCS moves in Point Loma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our Point Loma junk removal service specializes in military PCS moves and base housing transitions. We coordinate with Naval Base San Diego housing offices, work within tight PCS timelines, and provide special military discounts for active duty families. Our team understands base housing regulations and inspection requirements."
      }
    },
    {
      "@type": "Question",
      "name": "How much does junk removal cost in Point Loma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Single Item Pickup starting at $100, 1/4 Trailer Load $249, 3/8 Trailer Load $319, 1/2 Trailer Load $349, 5/8 Trailer Load $366, 3/4 Trailer Load $429, 7/8 Trailer Load $462, Full Trailer Load $495. Our junk hauling Point Loma pricing includes labor, hauling, eco-friendly disposal, and cleanup. We offer special military discounts for active duty families and competitive rates for coastal property cleanouts."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle coastal property cleanouts and storm debris?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our trash removal Point Loma service specializes in coastal property maintenance including storm debris cleanup, salt air corrosion disposal, and weather damage removal. We understand the unique challenges of Sunset Cliffs and oceanfront properties, providing environmentally responsible disposal methods."
      }
    },
    {
      "@type": "Question",
      "name": "Can you provide same-day junk hauling in Liberty Station or Sunset Cliffs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer same-day junk pickup Point Loma service throughout Liberty Station, Sunset Cliffs, and all Point Loma neighborhoods. Our local team can respond quickly for urgent military moves, storm cleanup, or emergency coastal property needs while maintaining our commitment to quality and environmental responsibility."
      }
    },
    {
      "@type": "Question",
      "name": "Are your junk removal services eco-friendly and HOA-compliant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our Point Loma San Diego junk removal prioritizes environmental responsibility and community compliance. We donate usable items, recycle materials, and follow HOA guidelines for Liberty Station and coastal communities. Our service protects Point Loma's beautiful environment while respecting community standards."
      }
    }
  ]
};

export default function JunkremovalpointlomaPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Point Loma",
    serviceName: "Junk Removal",
    description: "Professional Point Loma junk removal for military families, Liberty Station, Sunset Cliffs coastal homes. PCS move specialists with military discounts.",
    url: "https://severincleaners.com/junk-removal-point-loma",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Point Loma Junk Removal", url: "https://severincleaners.com/junk-removal-point-loma" },
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
              ✓ Military community with coastal properties
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Point Loma Junk Removal
            </h1>
            <div className="text-xl mb-6">
              ⭐⭐⭐⭐⭐ 5.0 Rating • Military Family Support • Coastal Specialists
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
                Book Your Military or Coastal Junk Pickup – Save 15% Online
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Military & Coastal Point Loma Junk Removal Experts</h2>

              <p className="text-lg text-gray-700 mb-6">
                <strong>Point Loma junk removal</strong> requires specialized expertise in both military relocations and coastal property maintenance. As San Diego&apos;s premier military and coastal community, Point Loma features Naval Base San Diego housing, historic Liberty Station developments, and stunning Sunset Cliffs properties. Our <strong>junk hauling Point Loma</strong> service specializes in PCS moves, coastal cleanouts, and historic property projects.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                From <strong>military PCS move support</strong> at Naval Base San Diego to <strong>coastal property cleanouts</strong> in Sunset Cliffs, we understand the unique challenges of both military families and coastal homeowners. Whether you need <strong>junk pickup Point Loma</strong> for a military relocation or <strong>trash removal Point Loma</strong> for storm debris, our team delivers reliable service with military precision and coastal property expertise.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Point Loma Service Areas</h3>
                <ul className="text-blue-800">
                  <li>Naval Base San Diego and military housing</li>
                  <li>Sunset Cliffs and coastal communities</li>
                  <li>Liberty Station and historic areas</li>
                  <li>Ocean Beach adjacent neighborhoods</li>
                  <li>Cabrillo National Monument vicinity</li>
                  <li>Harbor and marina communities</li>
                </ul>
                <div className="mt-4 text-center">
                  <p className="text-blue-700 font-semibold">📞 Call (619) 750-0114 for immediate service</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Military Junk Removal in Point Loma</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our <strong>junk hauling Point Loma</strong> service provides specialized support for military families during PCS moves and base housing transitions. We understand the tight timelines, strict regulations, and unique challenges of military relocations at Naval Base San Diego. Our team coordinates with base housing offices and provides efficient <strong>Point Loma junk removal</strong> that meets military standards.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Military Housing & PCS Services</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Naval Base San Diego housing cleanouts and transitions</li>
                    <li>PCS move support with tight timeline coordination</li>
                    <li>Base housing inspection preparation and final cleanings</li>
                    <li>Military family relocation assistance and support</li>
                    <li>Coordination with base housing offices and regulations</li>
                    <li>Special military discount pricing for active duty families</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-green-600">Coastal Property Services</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Sunset Cliffs coastal home cleanouts and maintenance</li>
                    <li>Storm debris removal and weather damage cleanup</li>
                    <li>Ocean-facing property salt air corrosion disposal</li>
                    <li>Marina and harbor community waste management</li>
                    <li>Cabrillo National Monument area property services</li>
                    <li>Liberty Station historic property preservation cleanouts</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Coastal Property Cleanouts in Sunset Cliffs</h3>
              <p className="text-lg text-gray-700 mb-6">
                Point Loma&apos;s stunning coastal properties require specialized <strong>trash removal Point Loma</strong> approaches due to salt air exposure, storm damage potential, and environmental considerations. Our <strong>junk pickup Point Loma</strong> service understands the unique maintenance needs of oceanfront homes, from corrosion-damaged items to storm debris cleanup.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h4 className="text-xl font-bold mb-3 text-blue-900">Historic Liberty Station & NTC District</h4>
                <p className="text-blue-800 mb-4">
                  Our <strong>Point Loma San Diego junk removal</strong> service specializes in Liberty Station&apos;s historic properties and adaptive reuse developments. We understand preservation requirements, architectural sensitivities, and community standards for this unique mixed-use district.
                </p>
                <ul className="list-disc pl-6 space-y-1 text-blue-800">
                  <li>Historic building preservation during cleanouts</li>
                  <li>Adaptive reuse project debris removal and coordination</li>
                  <li>Community standards compliance for mixed-use developments</li>
                  <li>Artistic and cultural district respectful waste management</li>
                  <li>HOA and community association coordination</li>
                  <li>Environmental responsibility for waterfront properties</li>
                </ul>
              </div>

              {/* Sticky CTA */}
              <div className="sticky top-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg shadow-lg mb-8 z-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">Call Today for Same-Day Junk Removal in Point Loma</p>
                    <p className="text-sm opacity-90">Military discounts • Coastal specialists • PCS move support</p>
                  </div>
                  <a
                    href="tel:6197500114"
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Military Families & Coastal Residents Choose Severin Cleaners</h3>
              <p className="mb-4">
                As a locally-owned business with deep respect for military service, we understand the unique challenges of both PCS moves and coastal property maintenance. Our <strong>Point Loma junk removal</strong> service combines military precision with coastal property expertise to deliver reliable solutions for Point Loma&apos;s diverse community.
              </p>

              <p className="mb-6">
                We honor our military families with special discounts, flexible scheduling for PCS timelines, and coordination with base housing requirements. For coastal properties, we provide storm debris cleanup, salt air corrosion disposal, and environmentally responsible waste management that protects our beautiful Point Loma coastline.
              </p>

              <div className="text-center bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Get Point Loma Junk Removal Quote Today</h3>
                <p className="text-lg mb-6">
                  Military family support with coastal property expertise and guaranteed satisfaction
                </p>
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                >
                  📞 Call (619) 750-0114 Now
                </a>
                <div className="bg-blue-800 rounded-lg p-4">
                  <p className="text-yellow-300 font-semibold mb-2">🇺🇸 Point Loma Military & Coastal Special 🇺🇸</p>
                  <div className="text-sm">
                    <strong>Military Discount Available</strong> • <strong>15% Off Coastal Bookings</strong><br/>
                    <strong>PCS Move Support</strong> • <strong>Storm Debris Cleanup</strong>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  Licensed & insured • Same-day service • Military family & coastal property specialists
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <PointLomaFAQSection />

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Related Military & Coastal Services</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/estate-cleanout-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
              <p className="text-gray-600">Inherited coastal homes and military family estate transitions</p>
            </a>
            <a href="/construction-debris-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
              <p className="text-gray-600">Liberty Station renovations and historic property remodeling</p>
            </a>
            <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
              <p className="text-gray-600">Military PCS furniture disposal and coastal home furnishing removal</p>
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