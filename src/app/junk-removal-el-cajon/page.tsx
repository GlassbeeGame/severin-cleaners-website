import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ElCajonFAQSection from "./ElCajonFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'El Cajon Junk Removal | East County Junk Hauling | Family-Owned Specialists',
  description: 'Professional El Cajon junk removal for Fletcher Hills, Rancho San Diego, Granite Hills. East County family specialists with same-day service. Call (619) 750-0114.',
  keywords: 'El Cajon junk removal, junk hauling El Cajon, trash removal El Cajon, junk pickup El Cajon, East County junk removal, Fletcher Hills junk removal',
  openGraph: {
    title: 'El Cajon Junk Removal | East County Junk Hauling | Family-Owned Specialists',
    description: 'Professional El Cajon junk removal for Fletcher Hills, Rancho San Diego, Granite Hills. East County family specialists with same-day service. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-el-cajon/',
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
    title: 'El Cajon Junk Removal | East County Junk Hauling | Family-Owned Specialists',
    description: 'Professional El Cajon junk removal for Fletcher Hills, Rancho San Diego, Granite Hills. East County family specialists with same-day service. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-el-cajon/',
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
      "name": "How much does junk removal cost in El Cajon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our El Cajon junk removal pricing is transparent and volume-based with no hidden fees. We offer comprehensive service to all Fletcher Hills, Rancho San Diego, Granite Hills, and East County neighborhoods with family-focused service: Single Item Pickup starting at $175, 1/4 Trailer Load $249, 3/8 Trailer Load $319, 1/2 Trailer Load $349, 5/8 Trailer Load $366, 3/4 Trailer Load $429, 7/8 Trailer Load $462, Full Trailer Load $495. All prices include labor, hauling, disposal fees, and eco-friendly recycling. Volume discounts available for large East County family properties and multi-generational homes. Call for your free estimate today."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide same-day junk hauling in East County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer same-day junk hauling El Cajon service for urgent needs throughout East County. Whether you're in Fletcher Hills, Rancho San Diego, Granite Hills, Crest, or Downtown El Cajon, our family-owned team can respond quickly for emergency cleanouts, estate situations, and time-sensitive property needs. Same-day availability depends on scheduling and crew availability."
      }
    },
    {
      "@type": "Question",
      "name": "What neighborhoods in El Cajon do you cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our East County junk removal covers all El Cajon neighborhoods including Fletcher Hills, Rancho San Diego, Granite Hills, Bostonia, Crest, Mount Helix, Downtown El Cajon, Jamacha-Lomita, Casa de Oro, and the Fletcher Parkway corridor. We serve from Parkway Plaza to the mountain communities, including hillside properties, master-planned communities, and established family neighborhoods throughout East County."
      }
    },
    {
      "@type": "Question",
      "name": "Can you handle large family properties or multi-generational homes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our junk pickup El Cajon service specializes in large family properties and multi-generational households common throughout East County. As a family-owned business, we understand the unique needs of family cleanouts, inherited properties, and estate transitions. We provide respectful, compassionate service that preserves important family memories while handling extensive property cleanouts with care and professionalism."
      }
    },
    {
      "@type": "Question",
      "name": "Do you serve Fletcher Hills and Rancho San Diego?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide comprehensive trash removal El Cajon service throughout Fletcher Hills and Rancho San Diego. We specialize in these premier East County neighborhoods, understanding their unique characteristics - from Fletcher Hills' established hillside properties and luxury estates to Rancho San Diego's master-planned communities and HOA requirements. Our team delivers professional service that respects community standards and family values in both areas."
      }
    }
  ]
};

export default function JunkremovalelcajonPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "El Cajon",
    serviceName: "Junk Removal",
    description: "Professional El Cajon junk removal for Fletcher Hills, Rancho San Diego, Granite Hills. East County family specialists with same-day service. Call (619) 750-0114.",
    url: "https://severincleaners.com/junk-removal-el-cajon",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "El Cajon Junk Removal", url: "https://severincleaners.com/junk-removal-el-cajon" },
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
              ✓ East County family community with diverse neighborhoods
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              El Cajon Junk Removal – East County Family Service Specialists
            </h1>
            <div className="text-xl mb-6">
              ⭐⭐⭐⭐⭐ 5.0 Rating • Family-Owned Service • East County Experts
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
                Book East County Junk Pickup - Save 15%
              </a>
            </div>
            <p className="text-lg">
              ✓ Same-Day Service ✓ Licensed & Insured ✓ Local Specialists
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent El Cajon Junk Removal Pricing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Upfront pricing for all East County neighborhoods - Fletcher Hills, Rancho San Diego, Granite Hills, and beyond. No hidden fees, just honest junk hauling El Cajon service.
              </p>
            </div>

            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white text-center">
                  <div className="text-4xl font-bold mb-2">$175</div>
                  <div className="text-blue-100 mb-4">Single Item</div>
                  <div className="font-bold text-lg mb-2">Quick Pickup</div>
                  <div className="text-blue-100 text-sm">
                    One large item, couch, appliance, mattress
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white text-center">
                  <div className="text-4xl font-bold mb-2">$249</div>
                  <div className="text-green-100 mb-4">1/4 Load (3 cu yd)</div>
                  <div className="font-bold text-lg mb-2">Small Cleanout</div>
                  <div className="text-green-100 text-sm">
                    Bedroom furniture, small shed, partial garage
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg p-6 text-white text-center">
                  <div className="text-4xl font-bold mb-2">$349</div>
                  <div className="text-orange-100 mb-4">1/2 Load (6 cu yd)</div>
                  <div className="font-bold text-lg mb-2">Medium Cleanout</div>
                  <div className="text-orange-100 text-sm">
                    Full garage, storage unit, attic cleanout
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white text-center">
                  <div className="text-4xl font-bold mb-2">$495</div>
                  <div className="text-purple-100 mb-4">Full Load (12 cu yd)</div>
                  <div className="font-bold text-lg mb-2">Large Cleanout</div>
                  <div className="text-purple-100 text-sm">
                    Whole house, estate, multiple rooms
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Additional Load Sizes Available</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="font-bold text-gray-900">3/8 Load</div>
                    <div className="text-green-600 font-bold">$319</div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">5/8 Load</div>
                    <div className="text-green-600 font-bold">$366</div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">3/4 Load</div>
                    <div className="text-green-600 font-bold">$429</div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">7/8 Load</div>
                    <div className="text-green-600 font-bold">$462</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">What's Included in Every Price:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    All labor and loading
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Transportation and hauling
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Eco-friendly disposal fees
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Donation coordination
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Recycling services
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Same-day service available
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <a
                href="tel:6197500114"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200"
              >
                📞 Get Your Free El Cajon Quote - Call (619) 750-0114
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">East County's Premier El Cajon Junk Removal Service</h2>

              <p className="text-lg text-gray-700 mb-6">
                El Cajon junk removal requires understanding the unique character of East County's family-oriented communities. From Fletcher Hills' established hillside neighborhoods to Rancho San Diego's master-planned developments, our junk hauling El Cajon service specializes in serving multi-generational households and family properties throughout East County. We provide professional trash removal El Cajon for all property types, from compact homes near Parkway Plaza to sprawling estates in the hills.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                As a family-owned business, Severin Cleaners provides respectful, reliable East County junk removal that understands the importance of household transitions and property improvements. Whether you need junk pickup El Cajon for a family move, estate cleanout, or trash removal El Cajon for home renovations, we deliver professional service with family values. Our team handles everything from single-item junk hauling El Cajon to complete multi-generational home cleanouts across Fletcher Hills, Rancho San Diego, Granite Hills, and beyond.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Serving East County families with care and reliability, our junk pickup El Cajon service extends throughout the region's diverse neighborhoods. From the Fletcher Parkway corridor to mountain communities like Crest, we understand local access requirements and community standards. Our East County junk removal team treats every property with respect, whether handling trash removal El Cajon for Downtown businesses near Main Street or residential junk hauling El Cajon in Bostonia family neighborhoods.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">El Cajon Service Areas</h3>
                <ul className="text-blue-800">
                  <li>Central El Cajon residential neighborhoods</li>
                  <li>Rancho San Diego and Fletcher Hills</li>
                  <li>Bostonia and Granite Hills communities</li>
                  <li>East County shopping and business districts</li>
                  <li>Crest and surrounding hillside areas</li>
                  <li>Multi-generational family properties</li>
                </ul>
                <div className="mt-4 text-center">
                  <p className="text-blue-700 font-semibold">📞 Call (619) 750-0114 for immediate service</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Junk Hauling in Rancho San Diego and Fletcher Hills</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our junk hauling El Cajon service provides specialized attention to East County's premier neighborhoods. From luxury estates in Fletcher Hills to master-planned communities in Rancho San Diego, our team delivers professional El Cajon junk removal that respects HOA standards and family values. We understand the unique requirements of these established communities and provide trash removal El Cajon that maintains neighborhood aesthetics while serving multi-generational properties efficiently.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Fletcher Hills residents rely on our East County junk removal for hillside property cleanouts, estate management, and family home transitions. With established properties often requiring sensitive handling of inherited items and multi-generational belongings, our junk pickup El Cajon service combines professionalism with compassion. We navigate hillside access challenges and understand the community's established character, delivering junk hauling El Cajon that preserves property values and respects family histories.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-blue-600">North El Cajon & Hills</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Fletcher Hills</strong> - Luxury homes, established hillside properties, family estates with multi-generational history</li>
                    <li><strong>Granite Hills</strong> - Larger lots, rural properties, multi-generational family homes and ranches</li>
                    <li><strong>Bostonia</strong> - Established residential neighborhoods, family properties, traditional East County community</li>
                    <li><strong>Crest</strong> - Mountain communities, unique access challenges, rural estate properties</li>
                    <li><strong>Mount Helix</strong> - Scenic hillside residences, luxury properties, panoramic view estates</li>
                    <li><strong>Dehesa Road area</strong> - Rural properties, larger parcels, equestrian estates</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-blue-600">Central & South El Cajon</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Rancho San Diego</strong> - Master-planned community, HOA properties, modern family developments</li>
                    <li><strong>Downtown El Cajon</strong> - Main Street businesses, commercial district, urban properties</li>
                    <li><strong>Casa de Oro</strong> - Family neighborhoods, established homes, East County residential areas</li>
                    <li><strong>Jamacha-Lomita</strong> - Diverse residential areas, family properties, traditional neighborhoods</li>
                    <li><strong>Fletcher Parkway corridor</strong> - Commercial and residential mix, busy thoroughfare properties</li>
                    <li><strong>Parkway Plaza area</strong> - Shopping district surroundings, commercial and residential mixed use</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Serving Multi-Generational Homes Across El Cajon</h2>
              <p className="text-lg text-gray-700 mb-6">
                East County families often maintain multi-generational households and inherited properties across Fletcher Hills, Granite Hills, and established neighborhoods. Our trash removal El Cajon service understands the sensitivity required for family cleanouts, estate transitions, and property management. We provide compassionate junk pickup El Cajon services that respect family dynamics and preserve important memories while handling the extensive cleanout needs of large family properties.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                As a family-owned business ourselves, we understand the emotional complexity of clearing inherited properties and transitioning family estates. Our East County junk removal team works with families throughout the process, from initial consultation to final cleanout. Whether you're managing a Fletcher Hills estate, downsizing a Rancho San Diego family home, or clearing a multi-generational property in Granite Hills, our junk hauling El Cajon service provides respectful, professional support that honors family legacies while accomplishing necessary property transitions.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h4 className="text-xl font-bold mb-3 text-green-900">Family Property Services</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 space-y-1 text-green-800">
                    <li>Multi-generational household cleanouts</li>
                    <li>Inherited property preparation and clearing</li>
                    <li>Family estate organization and sorting</li>
                    <li>Garage and storage area clearing for growing families</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-green-800">
                    <li>Large family property maintenance</li>
                    <li>Renovation debris removal for home improvements</li>
                    <li>Moving support for family relocations</li>
                    <li>Respectful handling of personal belongings</li>
                  </ul>
                </div>
              </div>

              {/* Sticky CTA */}
              <div className="sticky top-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg shadow-lg mb-8 z-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">Call Today for Same-Day Junk Removal in El Cajon</p>
                    <p className="text-sm opacity-90">Free quotes • Family-owned service • East County specialists</p>
                  </div>
                  <a
                    href="tel:6197500114"
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">East County's Trusted Family Junk Removal Service</h2>
              <p className="text-lg text-gray-700 mb-6">
                As a family-owned business serving East County for years, we understand the importance of treating your property and belongings with care and respect. Our El Cajon junk removal service combines deep local knowledge with professional standards to deliver the best experience for East County families. From Fletcher Hills to Rancho San Diego, Granite Hills to Downtown El Cajon, we've built our reputation on reliable junk hauling El Cajon that puts family values first.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                We specialize in working with multi-generational households, family estate transitions, and large property cleanouts that require sensitivity and attention to detail. Our East County junk removal team treats every family property with the same care we'd want for our own homes. Whether providing trash removal El Cajon for a Bostonia renovation or junk pickup El Cajon for a Crest mountain property, we deliver consistent, professional service that East County families trust.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Local expertise matters when navigating East County's diverse terrain and communities. Our junk hauling El Cajon service understands hillside access in Fletcher Hills, HOA requirements in Rancho San Diego, and the unique characteristics of rural Granite Hills properties. We handle trash removal El Cajon efficiently while respecting neighborhood standards and family privacy. Our team knows the Fletcher Parkway corridor, Main Street commercial district, and mountain communities, ensuring prompt, professional junk pickup El Cajon service wherever you're located.
              </p>

              <div className="text-center bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Get El Cajon Junk Removal Quote Today</h3>
                <p className="text-lg mb-6">
                  Serving East County families with care and reliability for years
                </p>
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                >
                  📞 Call (619) 750-0114 Now
                </a>
                <div className="bg-blue-800 rounded-lg p-4">
                  <p className="text-yellow-300 font-semibold mb-2">⭐ El Cajon Special ⭐</p>
                  <div className="text-sm">
                    <strong>15% Off El Cajon Bookings</strong> • <strong>Family Property Special</strong>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  Licensed & insured • Same-day service • Local specialists
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ElCajonFAQSection />

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Related East County Services</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal for Large East County Properties</h4>
              <p className="text-gray-600">Specialized furniture removal San Diego service for Fletcher Hills estates and multi-generational Rancho San Diego family homes</p>
            </a>
            <a href="/estate-cleanout-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts for Inherited Properties</h4>
              <p className="text-gray-600">Compassionate estate cleanout San Diego service for multi-generational homes and inherited East County properties</p>
            </a>
            <a href="/appliance-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal</h4>
              <p className="text-gray-600">Professional appliance disposal with eco-friendly practices</p>
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