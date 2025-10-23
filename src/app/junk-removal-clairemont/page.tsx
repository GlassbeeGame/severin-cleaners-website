import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClairemontFAQSection from "./ClairemontFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Clairemont Junk Removal | Central San Diego Specialists | (619) 750-0114',
  description: 'Clairemont family home junk removal Bay Park to Bay Ho. Garage cleanouts, pool equipment, 1950s-era homes. (619) 750-0114',
  keywords: 'Clairemont junk removal, junk hauling Clairemont, junk pickup Clairemont Mesa, trash removal Clairemont, Clairemont San Diego junk removal, garage cleanouts',
  openGraph: {
    title: 'Clairemont Junk Removal | Family Home & Garage Cleanout Specialists | Same-Day Service',
    description: 'Professional Clairemont junk removal for family homes, garage cleanouts, Clairemont Village, Balboa Ave corridor. Residential specialists with eco-friendly service. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-clairemont',
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
    title: 'Clairemont Junk Removal | Family Home & Garage Cleanout Specialists | Same-Day Service',
    description: 'Professional Clairemont junk removal for family homes, garage cleanouts, Clairemont Village, Balboa Ave corridor. Residential specialists with eco-friendly service. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-clairemont',
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
      "name": "How much does junk removal cost in Clairemont?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Clairemont junk removal pricing is transparent and upfront with no hidden fees. Here's our standard pricing structure: Single Item Pickup starting at $100, 1/4 Trailer Load $249, 3/8 Trailer Load $319, 1/2 Trailer Load $349, 5/8 Trailer Load $366, 3/4 Trailer Load $429, 7/8 Trailer Load $462, Full Trailer Load $495. Final pricing depends on volume, type of items, and access. Call (619) 750-0114 for a free, customized quote tailored to your specific junk hauling Clairemont needs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide same-day junk hauling in Clairemont Mesa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer fast junk pickup Clairemont Mesa service, typically providing next-day service with same-day available when you call before 2 PM. Our local team understands Clairemont families' schedules and can respond quickly for emergency cleanouts, moving deadlines, or unexpected situations throughout North Clairemont, South Clairemont, and Clairemont Mesa East."
      }
    },
    {
      "@type": "Question",
      "name": "Can you handle garage and attic cleanouts in Clairemont?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our trash removal Clairemont service specializes in garage cleanouts, attic clearing, and storage area organization. We handle everything from accumulated household items to old furniture, appliances, and boxes. Our team helps Clairemont families reclaim valuable space with efficient, respectful service."
      }
    },
    {
      "@type": "Question",
      "name": "Do you recycle or donate items collected in Clairemont?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We handle all items in accordance with San Diego County regulations. Our team recycles metals, electronics, and appliances through certified facilities, and donates usable furniture and household items to local charities when appropriate."
      }
    },
    {
      "@type": "Question",
      "name": "Is commercial junk removal available for Clairemont businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide comprehensive commercial junk hauling Clairemont for local businesses along Balboa Avenue and throughout Clairemont Mesa. Our services include office cleanouts, retail space clearing, restaurant equipment removal, and small business junk hauling. We offer flexible scheduling and competitive commercial rates to support Clairemont's business community."
      }
    }
  ]
};

export default function JunkremovalclairemontPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Clairemont",
    serviceName: "Junk Removal",
    description: "Professional Clairemont junk removal for family homes, garage cleanouts, Clairemont Village, Balboa Ave corridor. Residential specialists with eco-friendly service. Call (619) 750-0114.",
    url: "https://severincleaners.com/junk-removal-clairemont",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Clairemont Junk Removal", url: "https://severincleaners.com/junk-removal-clairemont" },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [faqSchema, serviceSchema, breadcrumbSchema],
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
              ✓ Family-friendly community with convenient Balboa Avenue corridor access
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Clairemont Junk Removal | Central San Diego Specialists
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
                Book Your Clairemont Junk Pickup – Save 15% Online
              </a>
            </div>
            <p className="text-lg">
              ✓ <a href="/same-day-junk-removal-san-diego" className="text-white hover:underline">Same-Day Service</a> Available ✓ Licensed & Insured ✓ Residential Specialists
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Clairemont's Premier Family Home Junk Removal Service</h2>

              <p className="text-lg text-gray-700 mb-6">
                <strong>Clairemont junk removal</strong> requires understanding one of San Diego's most established family communities, from historic Clairemont Village to bustling Balboa Avenue corridor neighborhoods. Known for its mid-century homes, family-friendly parks, and convenient central location, Clairemont features diverse residential properties from North Clairemont hillside homes to South Clairemont bay-area communities. Our <strong>junk hauling Clairemont</strong> service specializes in garage cleanouts, family home decluttering, and residential property maintenance throughout this classic San Diego neighborhood.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Whether you need <strong>junk pickup Clairemont Mesa</strong> for a garage renovation project, family home organization, or estate cleanout support, our <strong>trash removal Clairemont</strong> team provides reliable service that respects the character of this established community. From Bay Park boundaries to Tecolote Canyon natural areas, we deliver professional solutions throughout all Clairemont neighborhoods while honoring the area's family-focused values.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Clairemont Service Areas</h3>
                <ul className="text-blue-800">
                  <li>Clairemont Village and historic downtown district</li>
                  <li>North Clairemont and Clairemont Mesa East neighborhoods</li>
                  <li>South Clairemont and Bay Park boundary areas</li>
                  <li>Balboa Avenue corridor and commercial zones</li>
                  <li>Tecolote Canyon and recreational trail communities</li>
                  <li>Family neighborhoods near schools and community centers</li>
                </ul>
                <div className="mt-4 text-center">
                  <p className="text-blue-700 font-semibold">📞 Call (619) 750-0114 for immediate service</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Junk Hauling for Clairemont Family Homes</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our <strong>junk hauling Clairemont</strong> service provides specialized attention to the area's classic mid-century family homes, many featuring attached garages, spacious yards, and decades of accumulated household items. We understand the unique needs of Clairemont families maintaining older homes, from garage organization projects to whole-house decluttering, and deliver <strong>Clairemont junk removal</strong> solutions that help preserve these beloved family properties while creating functional living spaces.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Residential Family Services</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Garage cleanouts and organization for mid-century homes</li>
                    <li>Attic and storage area clearing for established properties</li>
                    <li>Backyard and patio furniture disposal near canyons</li>
                    <li>Home office setup and paper clutter removal</li>
                    <li>Kids' room decluttering and family organization</li>
                    <li>Exercise equipment and recreational gear removal</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Neighborhood & Estate Services</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Estate transitions and downsizing assistance</li>
                    <li>Multi-generational family home support</li>
                    <li>Senior living transitions and organization</li>
                    <li>Property management coordination for rentals</li>
                    <li>Home renovation debris and remodeling cleanup</li>
                    <li>Seasonal cleanup for family properties</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Garage Cleanouts in Clairemont Village & Mesa East</h3>
              <p className="text-lg text-gray-700 mb-6">
                Clairemont's classic homes often feature attached garages that have served families for generations, accumulating tools, sports equipment, holiday decorations, and household items over decades. Our <strong>trash removal Clairemont</strong> service specializes in garage transformation projects, helping families reclaim these valuable spaces for vehicles, workshops, or organized storage. We provide efficient <strong>junk pickup Clairemont Mesa</strong> that respects family memories while creating functional garage spaces.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h4 className="text-xl font-bold mb-3 text-green-900">Balboa Avenue Corridor & Commercial Services</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 space-y-1 text-green-800">
                    <li>Office cleanouts and furniture removal</li>
                    <li>Retail space renovation debris disposal</li>
                    <li>Restaurant and food service equipment removal</li>
                    <li>Property management support for commercial properties</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-green-800">
                    <li>Flexible scheduling for active business districts</li>
                    <li>Warehouse and storage facility clearing</li>
                    <li>Construction site cleanup coordination</li>
                    <li>Eco-friendly business disposal programs</li>
                  </ul>
                </div>
              </div>

              {/* Sticky CTA */}
              <div className="sticky top-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg shadow-lg mb-8 z-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">Call Today for Fast Junk Removal in Clairemont</p>
                    <p className="text-sm opacity-90">Garage cleanout experts • locally-owned • Residential specialists</p>
                  </div>
                  <a
                    href="tel:6197500114"
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Clairemont Families Choose Us</h3>
              <p className="mb-4">
                Clairemont's mid-century homes present unique challenges - attached garages filled with decades of accumulation, attics with limited access, and floor plans that require careful navigation. Our team has extensive experience working in these classic 1950s-1970s properties, protecting original hardwood floors, maneuvering through narrow hallways, and accessing difficult storage spaces without damaging walls or doorframes.
              </p>

              <p className="mb-6">
                We understand North Clairemont's hillside access challenges, South Clairemont's proximity to canyons and parks, and the Balboa Avenue corridor's mix of residential and commercial properties. Multi-generational households are common here, and we approach each project with patience and care - whether it's helping families downsize, clearing inherited properties, or simply reclaiming garage space that hasn't been used for parking in years.
              </p>

              <div className="text-center bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Get Clairemont Junk Removal Quote Today</h3>
                <p className="text-lg mb-6">
                  Serving Clairemont families with garage cleanout expertise and residential community values
                </p>
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                >
                  📞 Call (619) 750-0114 Now
                </a>
                <div className="bg-blue-800 rounded-lg p-4">
                  <p className="text-yellow-300 font-semibold mb-2">🏠 Clairemont Family Special 🏠</p>
                  <div className="text-sm">
                    <strong>15% Off Garage Cleanouts</strong> • <strong>Residential Family Service</strong><br/>
                    <strong>Mid-Century Home Specialists</strong> • <strong>Estate Transition Support</strong>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  Licensed & insured • <a href="/same-day-junk-removal-san-diego" className="text-white hover:underline">Same-day service</a> available • Clairemont residential family specialists
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Now using dropdown component */}
      <ClairemontFAQSection />

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Related Residential & Family Services</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
              <p className="text-gray-600">Family home furniture disposal and mid-century home cleanouts</p>
            </a>
            <a href="/estate-cleanout-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
              <p className="text-gray-600">Multi-generational family homes and estate transition support</p>
            </a>
            <a href="/construction-debris-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
              <p className="text-gray-600">Home remodeling cleanup and renovation debris disposal</p>
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
