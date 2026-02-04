import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateAreasListSchema, generateBreadcrumbSchema, type AreaListItem } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Areas We Serve | Junk Removal Throughout San Diego County",
  description: "Professional junk removal services throughout San Diego County. Serving all neighborhoods from coastal communities to East County. Same-day service available. Call (619) 750-0114!",
  keywords: [
    "junk removal San Diego County",
    "junk hauling areas served",
    "trash removal locations",
    "El Cajon junk removal",
    "La Mesa junk removal",
    "Chula Vista junk removal",
    "Oceanside junk removal"
  ],
  openGraph: {
    title: "Areas We Serve | Junk Removal Throughout San Diego County",
    description: "Professional junk removal services throughout San Diego County. Serving all neighborhoods from coastal communities to East County. Same-day service available.",
    url: "https://severincleaners.com/areas-we-serve",
    siteName: "Severin Cleaners",
    type: "website",
    locale: "en_US",
    images: [{
      url: "https://severincleaners.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Areas We Serve - San Diego County Junk Removal - Severin Cleaners"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Areas We Serve | Junk Removal Throughout San Diego County",
    description: "Professional junk removal services throughout San Diego County. Serving all neighborhoods from coastal communities to East County. Same-day service available.",
    images: ["https://severincleaners.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://severincleaners.com/areas-we-serve",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "US-CA",
  },
};

export default function AreasWeServePage() {
  const areas = [
    { name: "Carlsbad", link: "/junk-removal-carlsbad", description: "North County coastal community" },
    { name: "Carmel Valley", link: "/junk-removal-carmel-valley", description: "Upscale planned community" },
    { name: "Chula Vista", link: "/junk-removal-chula-vista", description: "Large suburban city" },
    { name: "Clairemont", link: "/junk-removal-clairemont", description: "Family-friendly mid-century homes" },
    { name: "Del Mar", link: "/junk-removal-del-mar", description: "Exclusive beach city" },
    { name: "El Cajon", link: "/junk-removal-el-cajon", description: "Family-friendly suburban city" },
    { name: "Escondido", link: "/junk-removal-escondido", description: "North County inland hub" },
    { name: "Hillcrest", link: "/junk-removal-hillcrest", description: "Urban village atmosphere" },
    { name: "Kearny Mesa", link: "/junk-removal-kearny-mesa", description: "Commercial hub with industrial parks" },
    { name: "La Jolla", link: "/junk-removal-la-jolla", description: "Upscale coastal community" },
    { name: "La Mesa", link: "/junk-removal-la-mesa", description: "Village charm with modern amenities" },
    { name: "Lakeside", link: "/junk-removal-lakeside", description: "Rural feel, close to city" },
    { name: "Lemon Grove", link: "/junk-removal-lemon-grove", description: "Small town character" },
    { name: "Mira Mesa", link: "/junk-removal-mira-mesa", description: "Diverse neighborhood with tech corridor" },
    { name: "North Park", link: "/junk-removal-north-park", description: "Hip arts and culture district" },
    { name: "Oceanside", link: "/junk-removal-oceanside", description: "Military town with beach culture" },
    { name: "Pacific Beach", link: "/junk-removal-pacific-beach", description: "Beach town living" },
    { name: "Point Loma", link: "/junk-removal-point-loma", description: "Harbor views and naval community" },
    { name: "Poway", link: "/junk-removal-poway", description: "City in the country" },
    { name: "Rancho Santa Fe", link: "/junk-removal-rancho-santa-fe", description: "Exclusive equestrian community" },
    { name: "San Marcos", link: "/junk-removal-san-marcos", description: "North County's fastest-growing community" },
    { name: "Santee", link: "/junk-removal-santee", description: "Growing family community" },
    { name: "Spring Valley", link: "/junk-removal-spring-valley", description: "Hillside homes and apartments" },
    { name: "Vista", link: "/junk-removal-vista", description: "Family neighborhoods and business" }
  ];

  const areaSchemaList: AreaListItem[] = areas.map(area => ({
    name: area.name,
    url: `https://severincleaners.com${area.link}`
  }));

  const areasListSchema = generateAreasListSchema(areaSchemaList);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" }
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [areasListSchema, breadcrumbSchema]
  };

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <div className="min-h-screen bg-background">
        <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl font-bold mb-6">
                Areas We Serve
                <span className="block text-blue-300 mt-2">Throughout San Diego County</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Professional junk removal and hauling services across all San Diego County neighborhoods. From coastal communities to East County, we provide same-day service wherever you are.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  📞 Call (619) 750-0114 - Same Day Service
                </a>
                <a
                  href="#areas"
                  className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  Find Your Area
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Coverage Map */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Complete San Diego County Coverage
              </h2>
              <p className="text-xl text-gray-600">
                No matter where you are in San Diego County, we're ready to help with professional junk removal services including <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">furniture hauling</a> and <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">mattress disposal</a>. Our local team knows every neighborhood and can navigate any location with <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">same-day service</a>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">25 Communities</h3>
                <p className="text-gray-600">Serving established neighborhoods across San Diego County</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day Service</h3>
                <p className="text-gray-600">Emergency junk removal available in most areas within 2-4 hours</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Local Expertise</h3>
                <p className="text-gray-600">locally-owned business with deep knowledge of San Diego neighborhoods</p>
              </div>
            </div>
          </div>
        </section>

        {/* Areas Grid */}
        <section id="areas" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Choose Your Area
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Click on your neighborhood below to learn more about our junk removal services in your specific area.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {areas.map((area, index) => (
                  <a
                    key={index}
                    href={area.link}
                    className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all group border border-gray-200 hover:border-blue-500"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {area.name}
                      </h3>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600 text-sm">{area.description}</p>
                  </a>
                ))}
              </div>

              <div className="mt-12 text-center">
                <a
                  href="tel:+16197500114"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  📞 Call (619) 750-0114 - Same Day Service
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Guarantee */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-50 rounded-xl p-8 text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Don't See Your Area Listed?
                </h3>
                <p className="text-xl text-gray-700 mb-6">
                  We're constantly expanding our service areas throughout San Diego County. Even if your specific neighborhood isn't listed above, we may still be able to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+16197500114"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                  >
                    📞 Call (619) 750-0114 to Check
                  </a>
                  <a
                    href="mailto:severincleaners@gmail.com"
                    className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                  >
                    ✉️ Email Us Your Location
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready for Professional Junk Removal?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              No matter where you are in San Diego County, we're ready to provide fast, professional junk removal services at fair prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+16197500114"
                className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-lg font-bold text-xl transition-colors"
              >
                📞 Call (619) 750-0114
              </a>
              <a
                href="/services"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-lg font-bold text-xl transition-colors"
              >
                View Our Services
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