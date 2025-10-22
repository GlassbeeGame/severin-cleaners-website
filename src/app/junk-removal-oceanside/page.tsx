import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OceansideFAQSection from "./OceansideFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Oceanside Junk Removal | Camp Pendleton & Coastal',
  description: 'Professional Oceanside junk removal for Camp Pendleton, coastal properties, vacation rentals. Military discounts available. North County experts. Call (619) 750-0114.',
  keywords: 'Oceanside junk removal, junk hauling Oceanside, junk pickup Oceanside, trash removal Oceanside, Oceanside San Diego junk removal, Camp Pendleton junk removal',
  openGraph: {
    title: 'Oceanside Junk Removal | Camp Pendleton & Coastal Property Specialists | Same-Day Service',
    description: 'Professional Oceanside junk removal for Camp Pendleton, coastal properties, vacation rentals. Military discounts available. North County experts. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-oceanside',
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
    title: 'Oceanside Junk Removal | Camp Pendleton & Coastal Property Specialists | Same-Day Service',
    description: 'Professional Oceanside junk removal for Camp Pendleton, coastal properties, vacation rentals. Military discounts available. North County experts. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-oceanside',
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
      "name": "How much does junk removal cost in Oceanside?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Oceanside junk removal pricing is transparent and upfront, with special military discounts for active duty families and competitive rates for vacation rental properties: Single Item Pickup starting at $100, 1/4 Trailer Load $249, 3/8 Trailer Load $319, 1/2 Trailer Load $349, 5/8 Trailer Load $366, 3/4 Trailer Load $429, 7/8 Trailer Load $462, Full Trailer Load $495. Active duty military families receive special discounts. Vacation rental turnovers typically range from $249-$349, while most residential projects run $349-$495. Custom quotes available for large coastal properties and commercial cleanouts."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide junk removal for Camp Pendleton military housing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our Camp Pendleton junk removal service specializes in military PCS moves and base housing cleanouts. We coordinate with base housing offices, understand inspection requirements, and work within tight military timelines. Active duty families receive special discounts, and we're familiar with all base access procedures."
      }
    },
    {
      "@type": "Question",
      "name": "Can you handle same-day junk pickup for vacation rentals in Oceanside?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our junk pickup Oceanside team provides same-day service for vacation rental turnovers throughout coastal Oceanside. We understand the importance of quick turnarounds for maintaining bookings and reviews, offering priority scheduling for property managers and vacation rental owners."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer coastal property cleanouts and storm debris removal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, while we're a general junk removal Oceanside company serving all types of properties, we excel at coastal property cleanouts including storm debris removal, salt air damaged furniture disposal, and beach equipment cleanup. Our trash removal Oceanside team responds quickly to weather events affecting coastal properties, handles post-storm cleanup, and provides environmentally responsible disposal that protects Oceanside's beautiful beaches and marine environment. We work with all types of coastal property needs while maintaining our core junk removal expertise."
      }
    },
    {
      "@type": "Question",
      "name": "Are your junk removal services eco-friendly in North County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our Oceanside San Diego junk removal prioritizes environmental protection through comprehensive recycling, donation programs, and disposal methods that comply with all local coastal regulations. We handle all items in accordance with San Diego County and North County Coastal regulations, so you don't have to worry about a thing. Our team works with local North County charities for donations, protects beach and marine environments through proper disposal practices, and ensures all materials are handled responsibly to minimize environmental impact on Oceanside's beautiful coastal ecosystem."
      }
    }
  ]
};

export default function JunkremovaloceansidePage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Oceanside",
    serviceName: "Junk Removal",
    description: "Professional Oceanside junk removal for Camp Pendleton, coastal properties, vacation rentals. Military discounts available. North County experts.",
    url: "https://severincleaners.com/junk-removal-oceanside",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Oceanside Junk Removal", url: "https://severincleaners.com/junk-removal-oceanside" },
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
              ✓ Military community and coastal paradise with vacation rentals
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Oceanside Junk Removal
            </h1>
            <div className="text-xl mb-6">
              ⭐⭐⭐⭐⭐ 5.0 Rating • Military Discounts • Coastal Property Experts
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
                Book Your Oceanside Junk Pickup – Save 15% Online
              </a>
            </div>
            <p className="text-lg">
              ✓ Same-Day Service ✓ Licensed & Insured ✓ Military Family Support
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">North County's Premier Oceanside Junk Removal Service</h2>

              <p className="text-lg text-gray-700 mb-6">
                <strong>Oceanside junk removal</strong> requires specialized expertise in military relocations, coastal property maintenance, and vacation rental turnovers. As North County's largest coastal city and home to Camp Pendleton, Oceanside features diverse communities from military housing to beachfront estates. Our <strong>junk hauling Oceanside</strong> service provides professional solutions for military families, coastal homeowners, and vacation property managers throughout North County.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                From <strong>Camp Pendleton junk removal</strong> for PCS moves to <strong>coastal property cleanouts</strong> near Oceanside Pier, we understand the unique challenges of military timelines and beach community living. Whether you need <strong>junk pickup Oceanside</strong> for vacation rental turnover or <strong>trash removal Oceanside</strong> for storm debris, our team delivers reliable service with military precision and coastal property expertise.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Oceanside Service Areas</h3>
                <ul className="text-blue-800">
                  <li>Camp Pendleton military housing and base facilities</li>
                  <li>Oceanside Pier and beachfront communities</li>
                  <li>Downtown Oceanside redevelopment and transit areas</li>
                  <li>Harbor and marina waterfront neighborhoods</li>
                  <li>Rancho Del Oro and Fire Mountain family homes</li>
                  <li>Vacation rentals and short-term rental properties</li>
                </ul>
                <div className="mt-4 text-center">
                  <p className="text-blue-700 font-semibold">📞 Call (619) 750-0114 for immediate service</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Military Junk Removal in Oceanside & Camp Pendleton</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our <strong>Camp Pendleton junk removal</strong> service specializes in military PCS moves, base housing cleanouts, and relocation support for service members. We understand the strict timelines, inspection requirements, and unique challenges military families face. Our <strong>junk hauling Oceanside</strong> team coordinates with base housing offices and provides efficient service that meets military standards and deadlines.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Military Housing & PCS Support</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Camp Pendleton base housing cleanouts and transitions</li>
                    <li>PCS move support with tight deadline management</li>
                    <li>Military inspection preparation and final cleaning</li>
                    <li>Deployment storage clearing and organization</li>
                    <li>Off-base military family relocation assistance</li>
                    <li>Special military discount pricing for active duty</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Coastal Property Services</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Beachfront property cleanouts and maintenance</li>
                    <li>Storm debris removal and weather damage cleanup</li>
                    <li>Salt air damaged furniture and equipment disposal</li>
                    <li>Marina and harbor community waste management</li>
                    <li>Beach equipment and water sports gear removal</li>
                    <li>Coastal erosion and property protection cleanup</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vacation Rental Cleanouts in Oceanside</h3>
              <p className="text-lg text-gray-700 mb-6">
                Oceanside's thriving vacation rental market requires fast, reliable <strong>trash removal Oceanside</strong> services for property turnovers. Our <strong>junk pickup Oceanside</strong> team specializes in vacation rental cleanouts, working with property managers to ensure quick turnarounds between guests. We understand the importance of maintaining five-star reviews and provide discreet, efficient service that keeps properties guest-ready.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h4 className="text-xl font-bold mb-3 text-green-900">Vacation Rental & Property Management Services</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 space-y-1 text-green-800">
                    <li>Same-day vacation rental turnover support</li>
                    <li>Guest damage cleanup and furniture removal</li>
                    <li>Property management coordination and billing</li>
                    <li>Beach equipment and outdoor furniture disposal</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-green-800">
                    <li>Seasonal property preparation and cleanup</li>
                    <li>HOA compliance for coastal communities</li>
                    <li>Emergency response for property issues</li>
                    <li>Eco-friendly disposal protecting beaches</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Downtown Oceanside & Harbor District Service</h3>
              <p className="text-lg text-gray-700 mb-6">
                Downtown Oceanside's redevelopment and harbor district growth create unique <strong>Oceanside San Diego junk removal</strong> needs. From new construction debris in transit-oriented developments to restaurant and retail cleanouts, our team provides comprehensive commercial and residential service throughout Oceanside's urban core and waterfront districts.
              </p>

              {/* Sticky CTA */}
              <div className="sticky top-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg shadow-lg mb-8 z-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">Call Today for Same-Day Junk Removal in Oceanside</p>
                    <p className="text-sm opacity-90">Military discounts • Vacation rental support • Coastal specialists</p>
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
                As a locally-owned business with deep respect for military service and coastal living, we understand the unique challenges of both communities. Our <strong>Oceanside junk removal</strong> service combines military precision with beach community expertise to deliver reliable solutions for Camp Pendleton families, coastal property owners, and vacation rental managers.
              </p>

              <p className="mb-6">
                We honor our military families with special discounts, flexible PCS scheduling, and coordination with base requirements. For coastal properties, we provide storm response, salt air damage disposal, and environmentally responsible service that protects Oceanside's beautiful beaches and marine environment.
              </p>

              <div className="text-center bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Get Oceanside Junk Removal Quote Today</h3>
                <p className="text-lg mb-6">
                  Military family support with coastal property expertise and vacation rental solutions
                </p>
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                >
                  📞 Call (619) 750-0114 Now
                </a>
                <div className="bg-blue-800 rounded-lg p-4">
                  <p className="text-yellow-300 font-semibold mb-2">🇺🇸 Oceanside Military & Coastal Special 🏖️</p>
                  <div className="text-sm">
                    <strong>Military Discount Available</strong> • <strong>15% Off Vacation Rental Service</strong><br/>
                    <strong>PCS Move Support</strong> • <strong>Beach Community Experts</strong>
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

      {/* FAQ Section - Now using dropdown component */}
      <OceansideFAQSection />

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Related Military & Coastal Services</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/estate-cleanout-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
              <p className="text-gray-600">Inherited coastal properties and military family estate transitions</p>
            </a>
            <a href="/commercial-junk-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Commercial Junk Removal</h4>
              <p className="text-gray-600">Vacation rental and property management cleanout specialists</p>
            </a>
            <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
              <p className="text-gray-600">Military PCS furniture disposal and coastal property furnishing removal</p>
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