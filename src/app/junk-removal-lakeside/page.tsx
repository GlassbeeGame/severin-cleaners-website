import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LakesideFAQSection from "./LakesideFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Lakeside Junk Removal | Ranch & Property Specialists',
  description: 'Professional Lakeside junk removal for large properties, ranches, Riverview, Winter Gardens. East County rural specialists with yard debris removal. Call (619) 750-0114.',
  keywords: 'Lakeside junk removal, junk hauling Lakeside, junk pickup Lakeside, trash removal Lakeside, Lakeside San Diego junk removal, large property junk removal',
  openGraph: {
    title: 'Lakeside Junk Removal | Large Property & Ranch Specialists | Same-Day Service',
    description: 'Professional Lakeside junk removal for large properties, ranches, Riverview, Winter Gardens. East County rural specialists with yard debris removal. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-lakeside',
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
    title: 'Lakeside Junk Removal | Large Property & Ranch Specialists | Same-Day Service',
    description: 'Professional Lakeside junk removal for large properties, ranches, Riverview, Winter Gardens. East County rural specialists with yard debris removal. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-lakeside',
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
      "name": "How much does junk removal cost in Lakeside?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Lakeside junk removal pricing is transparent and upfront with no hidden fees. We offer special rates for large properties, ranches, and recurring rural property maintenance: Single Item Pickup starting at $100, 1/4 Trailer Load $249, 3/8 Trailer Load $319, 1/2 Trailer Load $349, 5/8 Trailer Load $366, 3/4 Trailer Load $429, 7/8 Trailer Load $462, Full Trailer Load $495. Large properties and ranch cleanouts may qualify for volume discounts. Final pricing depends on volume, property accessibility, and disposal requirements. Contact us for a free quote tailored to your rural property needs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle large property and ranch junk hauling?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our junk hauling Lakeside service specializes in large properties, ranches, and agricultural facilities. We handle multi-acre cleanouts, ranch equipment disposal, barn cleanouts, and agricultural waste removal. Our team is experienced with the scale and unique requirements of East County's rural properties."
      }
    },
    {
      "@type": "Question",
      "name": "Can you provide same-day junk pickup in Lakeside?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We provide same-day junk pickup Lakeside for urgent needs throughout East County rural areas. Our team can respond quickly for large property emergencies, seasonal cleanouts, or time-sensitive agricultural operations while respecting working ranch and farm schedules."
      }
    },
    {
      "@type": "Question",
      "name": "Do you remove yard debris and outdoor storage items?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our trash removal Lakeside includes comprehensive yard debris removal, outdoor storage cleanouts, and landscaping waste disposal. We handle tree trimming debris, seasonal cleanup, garden renovation waste, and outdoor equipment disposal common to Lakeside's rural lifestyle."
      }
    },
    {
      "@type": "Question",
      "name": "Are your junk removal services eco-friendly in East County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our Lakeside San Diego junk removal prioritizes environmental responsibility through agricultural waste recycling, donation programs with local East County charities, and eco-friendly disposal methods that exceed local regulations. We handle all items in full compliance with San Diego County and East County environmental regulations, so you don't have to worry about a thing. Our team sorts materials for agricultural waste recycling, donation, and proper disposal—ensuring minimal landfill impact while supporting local rural community organizations. We understand East County's rural communities' commitment to environmental stewardship and work to protect our natural spaces and working lands."
      }
    }
  ]
};

export default function JunkremovallakesidePage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Lakeside",
    serviceName: "Junk Removal",
    description: "Professional Lakeside junk removal for large properties, ranches, Riverview, Winter Gardens. East County rural specialists with yard debris removal.",
    url: "https://severincleaners.com/junk-removal-lakeside",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Lakeside Junk Removal", url: "https://severincleaners.com/junk-removal-lakeside" },
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
              ✓ Large properties and rural East County community
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Lakeside Junk Removal
            </h1>
            <div className="text-xl mb-6">
              ⭐⭐⭐⭐⭐ 5.0 Rating • Large Property Specialists • Rural Community Experts
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
                Book Your Lakeside Junk Pickup – Save 15% Online
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">East County's Premier Lakeside Junk Removal Service</h2>

              <p className="text-lg text-gray-700 mb-6">
                <strong>Lakeside junk removal</strong> requires specialized expertise in large properties, rural settings, and East County's unique community character. As one of San Diego's most spacious communities, Lakeside features expansive ranch properties, large family homes, and abundant outdoor storage areas. Our <strong>junk hauling Lakeside</strong> service specializes in serving East County's rural lifestyle with reliable, comprehensive solutions for properties of all sizes.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                From <strong>large property cleanouts</strong> in Willowbrook Estates to <strong>yard debris removal</strong> near Lake Jennings, we understand the specific needs of Lakeside's rural and suburban households. Whether you need <strong>junk pickup Lakeside</strong> for ranch equipment disposal or <strong>trash removal Lakeside</strong> for seasonal property maintenance, our team delivers professional service that respects East County's rural values and community spirit.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Lakeside Service Areas</h3>
                <ul className="text-blue-800">
                  <li>Riverview and Winter Gardens family neighborhoods</li>
                  <li>Moreno Valley and Eucalyptus Hills rural properties</li>
                  <li>Lake Jennings recreation area and surrounding homes</li>
                  <li>Willowbrook Estates and large property developments</li>
                  <li>Ranch properties and equestrian facilities</li>
                  <li>Large rural and hillside home communities</li>
                </ul>
                <div className="mt-4 text-center">
                  <p className="text-blue-700 font-semibold">📞 Call (619) 750-0114 for immediate service</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Large Property & Ranch Junk Hauling Specialists</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our <strong>junk hauling Lakeside</strong> service provides specialized attention to East County's large properties, ranch facilities, and rural lifestyle needs. From multi-acre estate cleanouts to ranch equipment disposal, our team delivers professional <strong>Lakeside junk removal</strong> that understands the scale and complexity of rural property management in East County.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Large Property & Rural Services</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Multi-acre property cleanouts and estate management</li>
                    <li>Ranch and equestrian facility debris removal</li>
                    <li>Large outdoor storage area organization and clearing</li>
                    <li>Agricultural equipment and machinery disposal</li>
                    <li>Barn cleanouts and livestock facility maintenance</li>
                    <li>Fence line clearing and property boundary cleanup</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-green-600">Yard Debris & Outdoor Cleanup</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Seasonal yard debris and landscaping waste removal</li>
                    <li>Tree trimming debris and brush clearing services</li>
                    <li>Garden renovation and outdoor project cleanup</li>
                    <li>Pool area and patio furniture disposal</li>
                    <li>Outdoor storage shed cleanouts and organization</li>
                    <li>Fire safety clearance and defensible space maintenance</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rural Community & Family Property Support</h3>
              <p className="text-lg text-gray-700 mb-6">
                Lakeside's rural community values and family-oriented lifestyle require <strong>trash removal Lakeside</strong> services that understand the unique needs of large properties and multi-generational households. Our <strong>junk pickup Lakeside</strong> service respects the community's agricultural heritage, outdoor lifestyle, and commitment to maintaining beautiful rural properties throughout East County.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h4 className="text-xl font-bold mb-3 text-green-900">Rural Lakeside Community Services</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 space-y-1 text-green-800">
                    <li>Family ranch and large property maintenance support</li>
                    <li>Multi-generational household cleanouts and organization</li>
                    <li>Seasonal property cleanup and preparation services</li>
                    <li>Community event cleanup and festival support</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-green-800">
                    <li>Agricultural waste disposal and recycling coordination</li>
                    <li>Eco-friendly disposal respecting rural environmental values</li>
                    <li>Flexible scheduling for working farm and ranch operations</li>
                    <li>Donation coordination with local East County charities</li>
                  </ul>
                </div>
              </div>

              {/* Sticky CTA */}
              <div className="sticky top-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg shadow-lg mb-8 z-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">Call Today for Same-Day Junk Removal in Lakeside</p>
                    <p className="text-sm opacity-90">Large property specialists • Rural community experts • Yard debris removal</p>
                  </div>
                  <a
                    href="tel:6197500114"
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Lakeside Property Owners Choose Severin Cleaners</h3>
              <p className="mb-4">
                As a locally-owned business with deep appreciation for East County's rural lifestyle, we understand the importance of reliable service that respects large properties and agricultural operations. Our <strong>Lakeside junk removal</strong> service combines rural property expertise with professional standards to deliver efficient solutions for ranches, large family homes, and outdoor facilities throughout East County.
              </p>

              <p className="mb-6">
                We specialize in working with property owners who maintain large acreage, agricultural operations, and multi-generational rural properties. Our <strong>Lakeside San Diego junk removal</strong> team treats every property with the same care and respect we'd want for our own family ranch, understanding the unique challenges and opportunities of rural property management.
              </p>

              <div className="text-center bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Get Lakeside Junk Removal Quote Today</h3>
                <p className="text-lg mb-6">
                  Serving East County's large properties and rural families with reliable, comprehensive service
                </p>
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                >
                  📞 Call (619) 750-0114 Now
                </a>
                <div className="bg-blue-800 rounded-lg p-4">
                  <p className="text-yellow-300 font-semibold mb-2">🏡 Lakeside Large Property Special 🏡</p>
                  <div className="text-sm">
                    <strong>15% Off Large Property Bookings</strong> • <strong>Rural Community Service</strong><br/>
                    <strong>Ranch & Farm Specialists</strong> • <strong>Yard Debris Removal</strong>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  Licensed & insured • Same-day service • Large property & rural community specialists
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Now using dropdown component */}
      <LakesideFAQSection />

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Related Large Property & Rural Services</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/construction-debris-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
              <p className="text-gray-600">Ranch improvements and large property construction cleanup</p>
            </a>
            <a href="/estate-cleanout-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
              <p className="text-gray-600">Multi-generational rural properties and inherited ranch estates</p>
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