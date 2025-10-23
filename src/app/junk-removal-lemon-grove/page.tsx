import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LemonGroveFAQSection from "./LemonGroveFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Lemon Grove Junk Removal | Local Family-Owned Service | (619) 750-0114',
  description: 'Lemon Grove budget junk removal apartments, Broadway corridor. Affordable multi-family, student rentals. (619) 750-0114',
  keywords: 'Lemon Grove junk removal, junk hauling Lemon Grove, junk pickup Lemon Grove, trash removal Lemon Grove, Lemon Grove San Diego junk removal, apartment junk removal',
  openGraph: {
    title: 'Lemon Grove Junk Removal | Family Homes & Apartment Specialists | Same-Day Service',
    description: 'Affordable Lemon Grove junk removal for apartments, family homes, Broadway corridor. Community-focused service with eco-friendly disposal. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-lemon-grove',
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
    title: 'Lemon Grove Junk Removal | Family Homes & Apartment Specialists | Same-Day Service',
    description: 'Affordable Lemon Grove junk removal for apartments, family homes, Broadway corridor. Community-focused service with eco-friendly disposal. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-lemon-grove',
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
      "name": "How much does junk removal cost in Lemon Grove?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Lemon Grove junk removal pricing is transparent and affordable, designed with families and apartment residents in mind. We offer upfront pricing with no hidden fees: Single Item Pickup starting at $100, 1/4 Trailer Load $249, 3/8 Trailer Load $319, 1/2 Trailer Load $349, 5/8 Trailer Load $366, 3/4 Trailer Load $429, 7/8 Trailer Load $462, Full Trailer Load $495. Most apartment cleanouts range from $249-$349, while family home projects typically run $349-$495. Special discounts available for seniors, repeat customers, and multifamily properties. Contact us for a free, no-obligation quote."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer same-day junk pickup in Lemon Grove?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide fast junk pickup Lemon Grove service, typically offering next-day service with same-day available when you call before 2 PM for urgent needs throughout the community. Whether you're dealing with an apartment move-out deadline or unexpected family situation, our local team can respond quickly with professional, affordable service."
      }
    },
    {
      "@type": "Question",
      "name": "Can you handle junk hauling for apartments and multifamily housing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our junk hauling Lemon Grove service specializes in apartment complexes and multifamily housing throughout the community. We coordinate with property managers, respect tenant privacy, and work efficiently to minimize disruption while providing affordable bulk item removal and turnover support."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide trash removal services for small businesses in Lemon Grove?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our trash removal Lemon Grove service supports local small businesses along Broadway and throughout the community. We offer flexible scheduling, competitive commercial rates, and regular service options that help small businesses maintain clean, professional spaces without breaking their budgets."
      }
    },
    {
      "@type": "Question",
      "name": "Are your junk removal services eco-friendly and affordable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We handle all items in accordance with San Diego County and local Lemon Grove regulations. Our team donates usable items to local charities, recycles whenever possible, and ensures proper disposal through certified facilities—all while keeping our prices competitive."
      }
    }
  ]
};

export default function JunkremovallemongovePage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Lemon Grove",
    serviceName: "Junk Removal",
    description: "Affordable Lemon Grove junk removal for apartments, family homes, Broadway corridor. Community-focused service with eco-friendly disposal.",
    url: "https://severincleaners.com/junk-removal-lemon-grove",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Lemon Grove Junk Removal", url: "https://severincleaners.com/junk-removal-lemon-grove" },
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
              ✓ Family-friendly community with affordable service
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Lemon Grove Junk Removal | Local Family-Owned Service
            </h1>
            <div className="text-xl mb-6">
              ⭐⭐⭐⭐⭐ 5.0 Rating • locally-owned Business • Affordable Service
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
                Book Your Lemon Grove Junk Pickup – Save 15% Online
              </a>
            </div>
            <p className="text-lg">
              ✓ <a href="/same-day-junk-removal-san-diego" className="text-white hover:underline">Same-Day Service</a> Available ✓ Licensed & Insured ✓ Community Specialists
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Affordable Lemon Grove Junk Removal Service</h2>

              <p className="text-lg text-gray-700 mb-6">
                <strong>Lemon Grove junk removal</strong> requires understanding the unique needs of this family-oriented community, from apartments along Broadway to single-family homes near Berry Street Park. Known for its historic giant lemon landmark and tight-knit community spirit, Lemon Grove residents need affordable, reliable <strong>junk hauling Lemon Grove</strong> services that respect their neighborhoods and budgets.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Whether you need <strong>junk pickup Lemon Grove</strong> for apartment turnover, family home decluttering, or small business cleanouts, our <strong>trash removal Lemon Grove</strong> service delivers professional results at affordable prices. As a locally-owned business, we understand the importance of value and reliability for Lemon Grove's working families and residents. We also proudly serve nearby East County communities including <a href="/junk-removal-la-mesa" className="text-blue-600 hover:underline">La Mesa</a> and <a href="/junk-removal-spring-valley" className="text-blue-600 hover:underline">Spring Valley</a>.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Lemon Grove Service Areas</h3>
                <ul className="text-blue-800">
                  <li>Broadway and Lemon Grove Avenue business corridor</li>
                  <li>Berry Street Park and surrounding family neighborhoods</li>
                  <li>Apartment complexes and multifamily housing units</li>
                  <li>Historic downtown Lemon Grove and civic center area</li>
                  <li>Residential neighborhoods off Massachusetts Avenue</li>
                  <li>Small business districts and local commercial areas</li>
                </ul>
                <div className="mt-4 text-center">
                  <p className="text-blue-700 font-semibold">📞 Call (619) 750-0114 for immediate service</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Junk Hauling in Lemon Grove Apartments and Family Homes</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our <strong>junk hauling Lemon Grove</strong> service specializes in both apartment communities and single-family homes throughout this diverse community. We understand the challenges of apartment living, from limited parking to elevator scheduling, as well as the needs of family homeowners managing busy households. Our <strong>Lemon Grove junk removal</strong> team provides flexible, affordable solutions for all housing types.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Apartment & Multifamily Services</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Apartment turnover and tenant move-out cleanouts</li>
                    <li>Common area and storage unit clearing</li>
                    <li>Property management coordination and scheduling</li>
                    <li>Bulk item removal from apartment complexes</li>
                    <li>Elevator and hallway protection during removal</li>
                    <li>Flexible scheduling for working residents</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Family Home Services</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Garage cleanouts for growing families</li>
                    <li>Backyard and shed organization assistance</li>
                    <li>Kids' room decluttering and toy removal</li>
                    <li>Home renovation debris disposal</li>
                    <li>Estate transitions and downsizing support</li>
                    <li>Seasonal cleanup and organization services</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Small Business & Community Support</h3>
              <p className="text-lg text-gray-700 mb-6">
                Lemon Grove's local businesses along Broadway and throughout the community need affordable <strong>trash removal Lemon Grove</strong> services that understand small business budgets. Our <strong>junk pickup Lemon Grove</strong> service supports local shops, restaurants, and offices with flexible scheduling and competitive pricing that helps keep our community thriving.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h4 className="text-xl font-bold mb-3 text-green-900">Community-Focused Services</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 space-y-1 text-green-800">
                    <li>Small business cleanouts with budget-friendly pricing</li>
                    <li>Community event support and festival cleanup</li>
                    <li>Church and nonprofit organization assistance</li>
                    <li>School and daycare facility maintenance support</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-green-800">
                    <li>Senior citizen discounts and special assistance</li>
                    <li>Eco-friendly disposal and recycling programs</li>
                    <li>Donation coordination with local charities</li>
                    <li>Bilingual service for diverse community needs</li>
                  </ul>
                </div>
              </div>

              {/* Sticky CTA */}
              <div className="sticky top-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg shadow-lg mb-8 z-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">Call Today for Fast Junk Removal in Lemon Grove</p>
                    <p className="text-sm opacity-90">Affordable rates • locally-owned • Community focused</p>
                  </div>
                  <a
                    href="tel:6197500114"
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Lemon Grove Residents Choose Us</h3>
              <p className="mb-4">
                Lemon Grove's compact layout and dense housing create unique challenges - narrow streets, limited parking, and close-proximity neighbors. Our team knows how to navigate Broadway's tight residential streets, work efficiently in apartment complexes with limited loading areas, and coordinate around Lemon Grove Avenue traffic. We understand the neighborhood's mix of older homes and multi-unit properties.
              </p>

              <p className="mb-6">
                Apartment turnovers require quick scheduling, small-scale pricing, and coordination with property managers. Older homes often have accumulated storage from decades of occupancy. We offer flexible appointment times, efficient service for smaller jobs, and understand the budget constraints that matter to working families. Our pricing structure accommodates both single-item pickups and full-home cleanouts.
              </p>

              <div className="text-center bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Get Lemon Grove Junk Removal Quote Today</h3>
                <p className="text-lg mb-6">
                  Affordable service for families and apartments with guaranteed satisfaction
                </p>
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                >
                  📞 Call (619) 750-0114 Now
                </a>
                <div className="bg-blue-800 rounded-lg p-4">
                  <p className="text-yellow-300 font-semibold mb-2">💰 Lemon Grove Community Special 💰</p>
                  <div className="text-sm">
                    <strong>15% Off Your First Service</strong> • <strong>Affordable Family Rates</strong><br/>
                    <strong>Apartment Complex Discounts</strong> • <strong>Senior Citizen Savings</strong>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  Licensed & insured • <a href="/same-day-junk-removal-san-diego" className="text-white hover:underline">Same-day service</a> available • Affordable community-focused junk removal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Now using dropdown component */}
      <LemonGroveFAQSection />

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Related Community Services</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
              <p className="text-gray-600">Affordable furniture disposal for apartments and family homes</p>
            </a>
            <a href="/commercial-junk-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Commercial Junk Removal</h4>
              <p className="text-gray-600">Small business cleanouts with budget-friendly pricing</p>
            </a>
            <a href="/estate-cleanout-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
              <p className="text-gray-600">Compassionate family estate transitions and downsizing support</p>
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