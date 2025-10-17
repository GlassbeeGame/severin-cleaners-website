import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NorthParkFAQSection from "./NorthParkFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'North Park Junk Removal | Same-Day Hauling | Licensed & Insured',
  description: 'Professional North Park junk removal for University Avenue, 30th Street, apartments & historic homes. Same-day service, transparent pricing. Licensed & insured. Call (619) 750-0114!',
  keywords: 'North Park junk removal, junk hauling North Park, junk pickup North Park, trash removal North Park, North Park San Diego junk removal, University Avenue junk hauling, 30th Street junk removal',
  openGraph: {
    title: 'North Park Junk Removal | Same-Day Hauling | Licensed & Insured',
    description: 'Professional North Park junk removal for University Avenue, 30th Street, apartments & historic homes. Same-day service, transparent pricing. Licensed & insured. Call (619) 750-0114!',
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
    title: 'North Park Junk Removal | Same-Day Hauling | Licensed & Insured',
    description: 'Professional North Park junk removal for University Avenue, 30th Street, apartments & historic homes. Same-day service, transparent pricing. Licensed & insured. Call (619) 750-0114!',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-north-park',
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
      "name": "How much does junk removal cost in North Park?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our North Park junk removal pricing is transparent and based on trailer volume: Single Item Pickup starting at $175, 1/4 Trailer Load $249, 3/8 Trailer Load $319, 1/2 Trailer Load $349, 5/8 Trailer Load $366, 3/4 Trailer Load $429, 7/8 Trailer Load $462, Full Trailer Load $495. For the most accurate estimate, please call (619) 750-0114 for a custom quote based on your specific needs in North Park."
      }
    },
    {
      "@type": "Question",
      "name": "Can you remove heavy items like couches and appliances in North Park?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our junk hauling North Park team specializes in removing heavy furniture and appliances from apartments, condos, and Craftsman homes throughout North Park. We safely handle sofas, sectionals, and bulky furniture from University Avenue apartments, refrigerators, washers, dryers, and kitchen appliances, entertainment centers and bookshelves from condos near El Cajon Blvd, hot tubs and outdoor furniture from historic homes, and exercise equipment and home office furniture. Our crew is experienced with North Park's tight parking near 30th Street and University Avenue, narrow staircases in historic Craftsman homes, and multi-story apartment buildings along the nightlife corridor."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide same-day junk hauling in North Park?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer same-day junk pickup North Park service when you call before 2 PM. This is especially helpful for apartment cleanouts near University Avenue, restaurant or bar waste removal from the 30th Street nightlife district, and emergency situations throughout the North Park arts community. During busy weekends, we recommend scheduling morning appointments to guarantee same-day service."
      }
    },
    {
      "@type": "Question",
      "name": "What types of junk do you not remove?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We handle all standard household items, furniture, appliances, construction debris, yard waste, and more in accordance with local regulations. If you're unsure about a specific item, please call us at (619) 750-0114 and we can discuss it — there are various factors that can affect pricing and service options."
      }
    },
    {
      "@type": "Question",
      "name": "Are you licensed and insured for junk removal in San Diego?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Severin Cleaners is fully licensed and insured to provide North Park San Diego junk removal services throughout North Park and all of San Diego County. We carry comprehensive liability insurance to protect your property during removal, and we dispose of all items responsibly at licensed facilities. Our team follows all local regulations for waste handling and environmental compliance."
      }
    }
  ]
};

export default function JunkremovalnorthparkPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "North Park",
    serviceName: "Junk Removal",
    description: "Professional North Park junk removal for University Avenue, 30th Street, apartments & historic homes. Same-day service, transparent pricing. Licensed & insured.",
    url: "https://severincleaners.com/junk-removal-north-park",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "North Park Junk Removal", url: "https://severincleaners.com/junk-removal-north-park" },
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
              ✓ Same-Day Service • Licensed & Insured • Transparent Pricing
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              North Park Junk Removal
            </h1>
            <div className="text-xl mb-6">
              ⭐⭐⭐⭐⭐ 5.0 Rating • University Avenue to Morley Field • Local Experts
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href="tel:6197500114"
                className="btn btn-primary text-lg px-8 py-4"
              >
                📞 Call Now for Same-Day Junk Removal in North Park: (619) 750-0114
              </a>
              <a
                href="#contact"
                className="btn btn-secondary text-lg px-8 py-4 hover:bg-orange-600 transition-colors duration-200"
              >
                Book Your North Park Junk Pickup – Save 15% Online
              </a>
            </div>
            <p className="text-lg">
              ✓ Same-Day Service ✓ Licensed & Insured ✓ Eco-Friendly Disposal
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Junk Hauling North Park – University Avenue to Morley Field</h2>

              <p className="text-lg text-gray-700 mb-6">
                <strong>North Park junk removal</strong> requires understanding one of San Diego's most dynamic urban neighborhoods. From historic Craftsman-style homes east of Balboa Park to modern condo complexes near El Cajon Boulevard, our <strong>junk hauling North Park</strong> team navigates tight parking along University Avenue and 30th Street's bustling commercial corridors with expert efficiency. We're fully licensed and insured, providing same-day <strong>trash removal North Park</strong> throughout this vibrant arts district with transparent pricing and eco-friendly disposal practices.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Whether you need <strong>junk pickup North Park</strong> for an apartment cleanout near the nightlife district, furniture removal from a historic bungalow, construction debris hauling from a home renovation, or commercial waste pickup along 30th & University, our <strong>North Park San Diego junk removal</strong> experts understand the unique challenges. We coordinate with building managers, navigate permit parking zones, schedule around North Park's busy restaurant and bar scene, and provide the responsive service this community demands.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                North Park's mix of multi-family apartments, single-family Craftsman homes, and condo developments creates unique access challenges for <strong>junk hauling North Park</strong> services. Our team regularly handles narrow driveways off Idaho Street and Utah Street, limited street parking during evening hours when the 30th & University restaurant scene peaks, and multi-story walk-ups without elevator access. We understand the neighborhood's rhythm and schedule our <strong>trash removal North Park</strong> services to minimize disruption while maximizing efficiency for both residential and commercial clients throughout the 92104 zip code.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">North Park Neighborhoods & Streets We Serve</h3>
                <ul className="text-blue-800">
                  <li>University Avenue commercial and arts corridor</li>
                  <li>30th Street restaurant, bar, and nightlife district</li>
                  <li>El Cajon Boulevard condo complexes and multi-family units</li>
                  <li>Craftsman-style homes east of Balboa Park</li>
                  <li>North Park Community Park & surrounding apartments</li>
                  <li>Morley Field and recreation area neighborhoods</li>
                  <li>Idaho Street, Utah Street, 32nd Street, Polk Avenue residential areas</li>
                </ul>
                <div className="mt-4 text-center">
                  <p className="text-blue-700 font-semibold">📞 Call (619) 750-0114 for immediate service</p>
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

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Junk Hauling Near University Avenue & 30th Street</h3>
              <p className="text-lg text-gray-700 mb-6">
                The bustling University Avenue and 30th Street corridors present unique challenges for <strong>junk hauling North Park</strong>. Our team understands the tight parking, active nightlife districts, and busy commercial zones that define North Park's core. We coordinate removals around restaurant hours, navigate permit parking restrictions, and provide efficient service for apartments, condos, and businesses along these vibrant streets. From multi-story apartment cleanouts to commercial space renovations, we handle North Park's urban density with professional expertise.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                The 30th & University intersection represents the heart of North Park's commercial activity, with craft breweries, restaurants, bars, and creative businesses requiring specialized <strong>junk pickup North Park</strong> services. Our commercial clients along this corridor trust us for restaurant equipment removal, bar cleanouts, retail space renovations, and ongoing waste management that accommodates their business hours. We schedule early-morning or late-evening pickups to avoid peak customer traffic, understand loading zone restrictions, and maintain the professional standards North Park businesses expect from their <strong>North Park San Diego junk removal</strong> partner.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Furniture & Appliance Removal in North Park Apartments</h3>
              <p className="text-lg text-gray-700 mb-4">
                North Park's diverse housing—from Craftsman bungalows to modern El Cajon Boulevard condos—requires specialized <strong>junk pickup North Park</strong> expertise. We handle everything from heavy furniture in historic homes with narrow staircases to appliance removal from multi-family complexes near North Park Community Park. Our <strong>trash removal North Park</strong> team understands the architectural uniqueness of early 20th-century homes with tight hallways, as well as the logistical demands of condo buildings along El Cajon Boulevard with strict HOA guidelines and limited loading zones.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li><strong>Furniture:</strong> Sofas, mattresses, tables, chairs, bookshelves from apartments and historic homes</li>
                  <li><strong>Appliances:</strong> Refrigerators, washers, dryers, dishwashers from condos and multi-family units</li>
                  <li><strong>Yard waste:</strong> Tree trimmings, plant debris, landscaping materials from residential properties</li>
                  <li><strong>Construction debris:</strong> Renovation materials, flooring, fixtures from home improvement projects</li>
                </ul>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li><strong>Household clutter:</strong> Boxes, bags, general junk accumulation from downsizing or estate situations</li>
                  <li><strong>Electronics:</strong> TVs, computers, stereo equipment for eco-friendly e-waste recycling</li>
                  <li><strong>Apartment items:</strong> Move-out cleanouts, tenant debris near University Avenue and 30th Street</li>
                  <li><strong>Commercial waste:</strong> Restaurant, bar, retail, and creative business cleanouts</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                Our <strong>junk hauling North Park</strong> crews are experienced with the specific challenges of removing bulky items from properties near Morley Field, navigating the tree-lined streets off Polk Avenue, and coordinating with property managers for condo complexes throughout the neighborhood. We carry the equipment needed for safe furniture disassembly, appliance disconnection, and careful transport through historic homes without damaging original woodwork, built-ins, or architectural details that make North Park's Craftsman homes so distinctive.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Arts District & Eco-Friendly Junk Removal</h3>
              <p className="text-lg text-gray-700 mb-6">
                North Park's creative community deserves environmentally responsible <strong>trash removal North Park</strong> that supports local values. As a family-owned business, we understand the importance of eco-friendly disposal, supporting local charities, and treating creative spaces with respect. Our <strong>North Park San Diego junk removal</strong> service actively contributes to the community's sustainability goals through responsible waste management and material redistribution.
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

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Historic Home Renovations & Construction Debris Removal</h3>
              <p className="text-lg text-gray-700 mb-6">
                North Park's ongoing revitalization brings constant home improvement projects to the neighborhood's classic Craftsman and bungalow-style homes. Our <strong>junk hauling North Park</strong> service specializes in construction debris removal for kitchen and bathroom remodels, room additions, garage conversions, and restoration projects that preserve these historic properties. We understand contractors need reliable debris removal that won't delay projects, and homeowners appreciate our respect for their properties during renovation chaos. From old cabinetry and flooring tear-outs to drywall, lumber, and plumbing fixtures, we handle all construction waste in compliance with San Diego disposal regulations.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why North Park Residents & Businesses Choose Severin Cleaners</h3>
              <p className="text-lg text-gray-700 mb-4">
                As a family-owned business, we understand the importance of treating creative spaces, historic homes, and local businesses with care. Our <strong>junk pickup North Park</strong> service combines neighborhood expertise with professional standards to deliver environmentally responsible solutions for North Park's diverse community—from artists and students to families and business owners.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-bold mb-3 text-gray-900">Service Benefits for North Park Clients</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Same-day service:</strong> Available when scheduled before 2 PM for urgent apartment cleanouts, business needs, and emergency situations</li>
                  <li><strong>Licensed & insured:</strong> Comprehensive liability coverage protects your property during removal throughout the 92104 area</li>
                  <li><strong>Compliant with San Diego disposal regulations:</strong> All items disposed responsibly at licensed facilities with proper documentation</li>
                  <li><strong>Local neighborhood expertise:</strong> Deep familiarity with North Park's streets, parking challenges, and community standards</li>
                  <li><strong>Transparent pricing:</strong> Clear, upfront quotes with no hidden fees or surprise charges—$175 to $495 based on volume</li>
                  <li><strong>Eco-friendly practices:</strong> Donation partnerships with local charities, recycling programs, and zero-landfill commitment for reusable items</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                We actively support North Park's vibrant arts scene and small business community through sustainable practices, local partnerships, and respectful handling of all materials. Our <strong>trash removal North Park</strong> team understands the value of artistic supplies, vintage furniture, and unique items—working to redistribute materials to local schools, community programs, and charities whenever possible rather than defaulting to landfill disposal.
              </p>

              <div className="text-center bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Get Your North Park Junk Removal Quote Today</h3>
                <p className="text-lg mb-6">
                  Professional <strong>junk hauling North Park</strong> service with transparent pricing, local expertise, and guaranteed satisfaction
                </p>
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                >
                  📞 Call Now for Same-Day North Park Junk Removal: (619) 750-0114
                </a>
                <div className="bg-blue-800 rounded-lg p-4">
                  <p className="text-yellow-300 font-semibold mb-2">💰 Transparent Pricing • Book Online & Save 15% 💰</p>
                  <div className="text-sm">
                    <strong>$175-$495 Based on Volume</strong> • <strong>Same-Day Service Available</strong><br/>
                    <strong>Licensed & Insured</strong> • <strong>Eco-Friendly Disposal</strong>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  Serving University Avenue • 30th Street • El Cajon Blvd • Morley Field • All North Park neighborhoods
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <NorthParkFAQSection />

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Related North Park Junk Removal Services</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
              <p className="text-gray-600">Apartment and historic home furniture removal throughout North Park with eco-friendly donation options</p>
            </a>
            <a href="/appliance-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal San Diego</h4>
              <p className="text-gray-600">Safe appliance removal from condos and multi-family units near El Cajon Boulevard</p>
            </a>
            <a href="/construction-debris-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
              <p className="text-gray-600">Renovation and remodel debris hauling for North Park's historic Craftsman homes</p>
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