import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KearnyMesaFAQSection from "./KearnyMesaFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Kearny Mesa Junk Removal | Commercial Specialists',
  description: 'Professional Kearny Mesa junk removal for offices, warehouses, industrial parks. Commercial junk hauling experts serving Convoy District, auto businesses. Call (619) 750-0114.',
  keywords: 'Kearny Mesa junk removal, junk hauling Kearny Mesa, junk pickup Kearny Mesa, trash removal Kearny Mesa, commercial junk removal Kearny Mesa, office cleanout Kearny Mesa',
  openGraph: {
    title: 'Kearny Mesa Junk Removal | Commercial & Residential Specialists | Same-Day Service',
    description: 'Professional Kearny Mesa junk removal for offices, warehouses, industrial parks. Commercial junk hauling experts serving Convoy District, auto businesses. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-kearny-mesa',
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
    title: 'Kearny Mesa Junk Removal | Commercial & Residential Specialists | Same-Day Service',
    description: 'Professional Kearny Mesa junk removal for offices, warehouses, industrial parks. Commercial junk hauling experts serving Convoy District, auto businesses. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-kearny-mesa',
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
      "name": "How much does junk removal cost in Kearny Mesa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Kearny Mesa junk removal pricing is transparent and upfront with no hidden fees. Here's our standard pricing structure: Single Item Pickup starting at $100, 1/4 Trailer Load $249, 3/8 Trailer Load $319, 1/2 Trailer Load $349, 5/8 Trailer Load $366, 3/4 Trailer Load $429, 7/8 Trailer Load $462, Full Trailer Load $495. Volume discounts and business account pricing available for commercial clients. Call (619) 750-0114 for a free, customized quote tailored to your specific junk hauling Kearny Mesa needs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide same-day junk hauling in Kearny Mesa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We offer same-day junk pickup Kearny Mesa service for urgent commercial and residential needs. Our local team understands the fast-paced business environment of Kearny Mesa and can respond quickly for office closures, warehouse cleanouts, or emergency residential situations."
      }
    },
    {
      "@type": "Question",
      "name": "Can you handle office and warehouse junk removal in Kearny Mesa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our commercial junk removal Kearny Mesa service specializes in office cleanouts, warehouse junk hauling, and industrial equipment removal. We handle cubicles, filing cabinets, pallets, shelving, electronics, and construction debris. We offer flexible scheduling including after-hours and weekend service to minimize business disruption."
      }
    },
    {
      "@type": "Question",
      "name": "Do you recycle or donate items collected in Kearny Mesa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our trash removal Kearny Mesa approach prioritizes environmental responsibility through comprehensive recycling, donation programs, and disposal methods that comply with all local regulations. We handle all items in accordance with San Diego County regulations, so you don't have to worry about a thing. Our team recycles metals, electronics, and office equipment through certified facilities, donates usable furniture and items to local charities, and ensures eco-friendly disposal that benefits both Kearny Mesa businesses and the environment."
      }
    },
    {
      "@type": "Question",
      "name": "Is commercial junk removal available for Kearny Mesa businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide comprehensive commercial junk removal Kearny Mesa for businesses throughout the area including office parks, industrial complexes, auto dealerships, restaurants in Convoy District, and warehouse facilities. We offer business account pricing, flexible scheduling, and recurring service options tailored to your operational needs."
      }
    }
  ]
};

export default function JunkRemovalKearnyMesaPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Kearny Mesa",
    serviceName: "Junk Removal",
    description: "Professional Kearny Mesa junk removal for offices, warehouses, industrial parks. Commercial junk hauling experts serving Convoy District, auto businesses.",
    url: "https://severincleaners.com/junk-removal-kearny-mesa",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Kearny Mesa Junk Removal", url: "https://severincleaners.com/junk-removal-kearny-mesa" },
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
              ✓ Commercial & Industrial Specialists
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kearny Mesa Junk Removal
            </h1>
            <div className="text-xl mb-6">
              ⭐⭐⭐⭐⭐ 5.0 Rating • Industrial & Office Experts • Same-Day Service
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
                Book Your Kearny Mesa Junk Pickup – Save 15%
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Kearny Mesa Junk Removal Services</h2>

              <p className="text-lg text-gray-700 mb-6">
                Severin Cleaners provides professional <strong>Kearny Mesa junk removal</strong> with same-day <strong>junk hauling</strong>, transparent pricing, and eco-friendly disposal. Whether you're a resident clearing out your garage or a business needing warehouse <strong>junk hauling in Kearny Mesa</strong>, our team delivers efficient, reliable service tailored to this unique commercial hub.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                From <strong>office cleanouts Kearny Mesa</strong> to <strong>commercial junk removal</strong> for auto dealerships, restaurants in Convoy District, and industrial parks, we understand the fast-paced business environment and residential needs throughout this dynamic neighborhood. Our <strong>trash removal Kearny Mesa</strong> service combines commercial expertise with residential care.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Kearny Mesa Service Areas</h3>
                <ul className="text-blue-800">
                  <li>Convoy District restaurants and retail</li>
                  <li>Business parks and industrial complexes</li>
                  <li>Auto dealerships and repair shops</li>
                  <li>Residential pockets and apartment complexes</li>
                  <li>Balboa Avenue corridor and commercial areas</li>
                  <li>Office buildings and corporate centers</li>
                </ul>
                <div className="mt-4 text-center">
                  <p className="text-blue-700 font-semibold">📞 Call (619) 750-0114 for immediate service</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial Junk Removal in Kearny Mesa Business Parks</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our <strong>commercial junk removal Kearny Mesa</strong> service specializes in office cleanouts, warehouse junk hauling, and industrial equipment removal. We understand Kearny Mesa's role as San Diego's commercial hub and provide flexible scheduling including after-hours and weekend service to minimize business disruption. From office furniture to warehouse pallets, our <strong>junk pickup Kearny Mesa</strong> team handles it all.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Commercial & Industrial Services</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:text-blue-700">Office cleanouts</a> (cubicles, desks, electronics)</li>
                    <li>Warehouse junk removal (pallets, shelving, equipment)</li>
                    <li><a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:text-blue-700">Construction debris</a> (renovation, commercial fit-outs)</li>
                    <li>Industrial equipment and machinery disposal</li>
                    <li>Restaurant and retail space cleanouts</li>
                    <li>Auto dealership and repair shop junk hauling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Residential Services</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Apartment and condo cleanouts</li>
                    <li><a href="/furniture-removal-san-diego" className="text-blue-600 hover:text-blue-700">Furniture removal</a> (couches, beds, dining sets)</li>
                    <li>Appliance disposal (refrigerators, washers, dryers)</li>
                    <li>Garage and storage area clearing</li>
                    <li>Estate cleanouts and downsizing</li>
                    <li>HOA compliant service for residential pockets</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Convoy District & Mixed-Use Property Junk Hauling</h3>
              <p className="text-lg text-gray-700 mb-6">
                Kearny Mesa's vibrant Convoy District features restaurants, shops, and mixed-use properties requiring specialized <strong>junk hauling Kearny Mesa</strong> services. Our <strong>trash removal Kearny Mesa</strong> team works with property managers, restaurant owners, and retail businesses to provide efficient cleanouts that respect busy commercial schedules and diverse community needs.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h4 className="text-xl font-bold mb-3 text-green-900">Why Kearny Mesa Businesses Choose Severin Cleaners</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 space-y-1 text-green-800">
                    <li>Licensed & insured commercial service</li>
                    <li>Flexible scheduling (after-hours/weekends)</li>
                    <li>Business account pricing available</li>
                    <li>Familiar with industrial park requirements</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-green-800">
                    <li>HOA compliance for residential areas</li>
                    <li>Eco-friendly disposal & recycling</li>
                    <li>Same-day emergency service</li>
                    <li>Volume discounts for large projects</li>
                  </ul>
                </div>
              </div>

              {/* Sticky CTA */}
              <div className="sticky top-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg shadow-lg mb-8 z-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">Call Today for Same-Day Junk Removal in Kearny Mesa</p>
                    <p className="text-sm opacity-90">Commercial specialists • Residential service • Industrial expertise</p>
                  </div>
                  <a
                    href="tel:6197500114"
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Severin Cleaners for Kearny Mesa Junk Removal</h3>
              <p className="mb-4">
                As a family-owned business serving San Diego's commercial heart, we understand the unique needs of Kearny Mesa's diverse business community and residential neighborhoods. Our <strong>Kearny Mesa junk removal</strong> service combines commercial expertise with local knowledge to deliver reliable solutions for offices, warehouses, restaurants, and homes.
              </p>

              <p className="mb-6">
                We respect business operations with flexible scheduling, provide HOA-compliant service for residential areas, and maintain eco-friendly practices that benefit the entire Kearny Mesa community. Our team is familiar with industrial park access, loading dock logistics, and the fast-paced environment that makes Kearny Mesa San Diego's premier business district.
              </p>

              <div className="text-center bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Get Your Kearny Mesa Junk Removal Quote Today</h3>
                <p className="text-lg mb-6">
                  Serving Kearny Mesa businesses and residents with professional commercial and residential junk hauling
                </p>
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                >
                  📞 Call (619) 750-0114 Now
                </a>
                <div className="bg-blue-800 rounded-lg p-4">
                  <p className="text-yellow-300 font-semibold mb-2">🏢 Kearny Mesa Business Special 🏢</p>
                  <div className="text-sm">
                    <strong>Volume Discounts Available</strong> • <strong>Business Account Pricing</strong><br/>
                    <strong>After-Hours Service</strong> • <strong>Eco-Friendly Disposal</strong>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  Licensed & insured • Same-day service • Commercial & residential specialists
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <KearnyMesaFAQSection />

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Related Commercial & Residential Services</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/commercial-junk-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Commercial Junk Removal</h4>
              <p className="text-gray-600">Office, warehouse, and industrial park cleanout specialists</p>
            </a>
            <a href="/construction-debris-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
              <p className="text-gray-600">Commercial renovation and fit-out debris hauling</p>
            </a>
            <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
              <p className="text-gray-600">Residential and commercial furniture disposal</p>
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
