import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'North Park Junk Removal | Arts District & Community Specialists | Same-Day Service',
  description: 'Professional North Park junk removal for 30th Street, University Avenue, apartments, condos. Eco-friendly service for the arts community. Call (619) 750-0114.',
  keywords: 'North Park junk removal, junk hauling North Park, junk pickup North Park, trash removal North Park, North Park San Diego junk removal, arts district junk removal',
  openGraph: {
    title: 'North Park Junk Removal | Arts District & Community Specialists | Same-Day Service',
    description: 'Professional North Park junk removal for 30th Street, University Avenue, apartments, condos. Eco-friendly service for the arts community. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-north-park/',
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
    title: 'North Park Junk Removal | Arts District & Community Specialists | Same-Day Service',
    description: 'Professional North Park junk removal for 30th Street, University Avenue, apartments, condos. Eco-friendly service for the arts community. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-north-park/',
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

export default function JunkremovalnorthparkPage() {
  return (
    <div className={`${inter.variable} font-sans antialiased`}>
      <Header />
      <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ✓ Arts and craft beer community with diverse housing
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              North Park Junk Removal – Serving the Arts & Craft Beer Community
            </h1>
            <div className="text-xl mb-6">
              ⭐⭐⭐⭐⭐ 5.0 Rating • Arts District Friendly • Community Focused
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
                Supporting North Park's Creative Community - Save 15%
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">North Park Junk Removal Experts</h2>

              <p className="text-lg text-gray-700 mb-6">
                North Park&apos;s vibrant arts scene and craft beer culture attract creative residents and young professionals to diverse housing options from vintage bungalows to modern condos. Severin Cleaners supports the creative community with flexible service that understands the neighborhood&apos;s artistic spirit and community values.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">North Park Service Areas</h3>
                <ul className="text-blue-800">
                  <li>University Avenue arts and business corridor</li>
                  <li>30th Street restaurant and bar district</li>
                  <li>Vintage bungalows and craftsman homes</li>
                  <li>Modern condos and apartment complexes</li>
                  <li>Morley Field and Balboa Park adjacent areas</li>
                  <li>North Park neighborhood commercial zones</li>
                </ul>
                <div className="mt-4 text-center">
                  <p className="text-blue-700 font-semibold">📞 Call (619) 271-6411 for immediate service</p>
                </div>
              </div>

              {/* Sticky CTA */}
              <div className="sticky top-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg shadow-lg mb-8 z-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">Ready for Junk Removal in North Park?</p>
                    <p className="text-sm opacity-90">Free quotes • Same-day service • Licensed & insured</p>
                  </div>
                  <a
                    href="tel:6197500114"
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Arts District & Eco-Friendly Junk Removal</h3>
              <p className="text-lg text-gray-700 mb-6">
                North Park's creative community deserves environmentally responsible <strong>North Park junk removal</strong> that supports local values. As a family-owned business, we understand the importance of eco-friendly disposal, supporting local charities, and treating creative spaces with respect. Our <strong>junk hauling North Park</strong> service actively contributes to the community's sustainability goals.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-green-600">Eco-Friendly Practices</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Donations to North Park Community Foundation and local charities</li>
                    <li>Art supply recycling and creative material redistribution</li>
                    <li>Zero-landfill commitment for reusable creative materials</li>
                    <li>Sustainable disposal methods protecting Balboa Park</li>
                    <li>Support for local artists through material donations</li>
                    <li>Electronic waste recycling for creative studios</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Community Support</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Local artist studio and gallery cleanout specialists</li>
                    <li>Small business support for craft breweries and cafes</li>
                    <li>Apartment and condo services for creative professionals</li>
                    <li>Event cleanup for North Park festivals and art walks</li>
                    <li>Music venue and performance space cleaning</li>
                    <li>Co-working space and shared studio organization</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why North Park Creatives Choose Severin Cleaners</h3>
              <p className="mb-4">
                As a family-owned business, we understand the importance of treating creative spaces and artistic materials with care. Our <strong>junk pickup North Park</strong> service combines respect for the arts community with professional standards to deliver environmentally responsible solutions for North Park's creative residents.
              </p>

              <p className="mb-6">
                We actively support North Park's vibrant arts scene through sustainable practices, community partnerships, and respectful handling of creative materials. Our <strong>trash removal North Park</strong> team understands the value of artistic supplies and works to redistribute materials to local schools and community programs whenever possible.
              </p>

              <div className="text-center bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Ready for North Park Junk Removal?</h3>
                <p className="text-lg mb-6">
                  Professional service with local expertise and guaranteed satisfaction
                </p>
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                >
                  📞 Call (619) 750-0114 Now
                </a>
                <div className="bg-blue-800 rounded-lg p-4">
                  <p className="text-yellow-300 font-semibold mb-2">🎨 North Park Arts Community Special 🎨</p>
                  <div className="text-sm">
                    <strong>15% Off Creative Community Bookings</strong> • <strong>Supporting Local Artists</strong><br/>
                    <strong>Eco-Friendly Disposal</strong> • <strong>Art Supply Donations</strong>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  Licensed & insured • Same-day service • Supporting North Park's creative community with sustainable junk removal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions - North Park Junk Removal</h2>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do you provide junk removal for apartments and condos in North Park?</h3>
                <p className="text-gray-700">
                  Yes, our <strong>North Park junk removal</strong> service specializes in apartment and condo cleanouts throughout the arts district. We understand the unique challenges of urban living, including limited parking, narrow hallways, and building access requirements. Our team coordinates with property management and respects community living standards.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What eco-friendly practices do you use for junk disposal?</h3>
                <p className="text-gray-700">
                  Our <strong>junk hauling North Park</strong> prioritizes environmental responsibility through donations to local charities, art supply redistribution to schools and community programs, and zero-landfill commitment for reusable materials. We support North Park's sustainability values by recycling electronics, repurposing creative materials, and protecting the Balboa Park environment.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Can you help small businesses and artists with studio cleanouts?</h3>
                <p className="text-gray-700">
                  Absolutely. Our <strong>junk pickup North Park</strong> service supports the creative community with specialized studio cleanouts, gallery preparation, and small business waste removal. We understand the value of artistic materials and work with local artists to redistribute supplies to community programs and emerging artists.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do you offer same-day service for North Park residents?</h3>
                <p className="text-gray-700">
                  Yes, we provide same-day <strong>trash removal North Park</strong> for urgent needs throughout the University Avenue and 30th Street corridors. Our local team can respond quickly for apartment moves, studio transitions, or emergency cleanouts while maintaining our commitment to community standards and environmental responsibility.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How much does junk removal cost in the North Park arts district?</h3>
                <p className="text-gray-700">
                  Our <strong>North Park San Diego junk removal</strong> pricing starts at $99 for small loads and varies based on volume and access requirements. We offer special rates for artists, students, and small businesses, plus volume discounts for larger creative studio cleanouts. Call for your free arts district estimate today.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="tel:6197500114"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block"
              >
                📞 Call Now for Same-Day North Park Service: (619) 750-0114
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Related Creative Community Services</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
              <p className="text-gray-600">Artist studio and apartment furniture removal with eco-friendly donation</p>
            </a>
            <a href="/construction-debris-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
              <p className="text-gray-600">Studio renovation and creative space construction cleanup</p>
            </a>
            <a href="/estate-cleanout-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
              <p className="text-gray-600">Respectful estate cleanouts with art collection and antique handling</p>
            </a>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}