import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RanchoSantaFeFAQSection from "./RanchoSantaFeFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Rancho Santa Fe Junk Removal | Luxury Estate Service',
  description: 'Professional Rancho Santa Fe junk removal for The Covenant, Fairbanks Ranch & luxury estates. Licensed & insured, HOA-approved, same-day service. Call (619) 750-0114.',
  keywords: 'Rancho Santa Fe junk removal, junk hauling Rancho Santa Fe, junk pickup Rancho Santa Fe, trash removal Rancho Santa Fe, Rancho Santa Fe San Diego junk removal',
  openGraph: {
    title: 'Rancho Santa Fe Junk Removal | Luxury Estate & Equestrian Specialists | Same-Day Service',
    description: 'Professional Rancho Santa Fe junk removal for luxury estates, equestrian properties, gated communities. HOA-approved with white-glove service. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-rancho-santa-fe',
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
    title: 'Rancho Santa Fe Junk Removal | Luxury Estate & Equestrian Specialists | Same-Day Service',
    description: 'Professional Rancho Santa Fe junk removal for luxury estates, equestrian properties, gated communities. HOA-approved with white-glove service. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-rancho-santa-fe',
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
      "name": "Do you service all areas of Rancho Santa Fe including gated communities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our Rancho Santa Fe junk removal service covers all areas including The Covenant, Fairbanks Ranch, The Bridges, and other exclusive gated communities. We're pre-approved vendors familiar with gate access procedures and HOA requirements throughout Rancho Santa Fe."
      }
    },
    {
      "@type": "Question",
      "name": "How much does junk removal cost in Rancho Santa Fe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Rancho Santa Fe junk removal pricing is transparent and based on trailer volume: Single Item Pickup starting at $100, 1/4 Trailer Load $249, 3/8 Trailer Load $319, 1/2 Trailer Load $349, 5/8 Trailer Load $366, 3/4 Trailer Load $429, 7/8 Trailer Load $462, Full Trailer Load $495. For large estate cleanouts, equestrian facilities, and multi-acre properties, please call (619) 750-0114 for a custom quote tailored to your luxury property needs."
      }
    },
    {
      "@type": "Question",
      "name": "Can you remove heavy items like couches, appliances, and large outdoor equipment in Rancho Santa Fe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our junk hauling Rancho Santa Fe team specializes in removing heavy and oversized items from luxury estates and equestrian properties. We safely handle high-end sofas, sectionals, and custom furniture from estate homes, professional-grade kitchen appliances, wine refrigerators, and outdoor kitchens, hot tubs, pool equipment, and outdoor entertainment systems, gym equipment, exercise machines, and home theater components, equestrian equipment, saddles, tack, and barn fixtures, and antiques, valuable furniture, and collectibles with white-glove handling. Our crews are specially trained in white-glove handling of valuable items and understand the unique access challenges of gated estates, multi-acre properties, and equestrian facilities throughout The Covenant and Fairbanks Ranch."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide same-day junk hauling in Rancho Santa Fe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer same-day junk pickup Rancho Santa Fe service when you call before 2 PM. Our team understands the urgency often required for estate management, property staging, last-minute renovations, and HOA compliance issues. We coordinate with gate security, property managers, and household staff to provide discreet, professional service that respects your privacy and your community's standards throughout The Covenant, Fairbanks Ranch, and all Rancho Santa Fe gated communities."
      }
    },
    {
      "@type": "Question",
      "name": "What types of junk do you not remove?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We handle all standard household items, furniture, appliances, construction debris, yard waste, equestrian property materials, and more in accordance with local regulations. If you're unsure about a specific item, please call us at (619) 750-0114 and we can discuss it — there are various factors that can affect pricing and service options for luxury estates and large properties."
      }
    },
    {
      "@type": "Question",
      "name": "Are you licensed and insured for junk removal in San Diego County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Severin Cleaners is fully licensed and insured to provide Rancho Santa Fe San Diego junk removal services throughout all of San Diego County, including exclusive communities like Rancho Santa Fe. We carry comprehensive liability insurance specifically covering luxury estates, valuable property contents, and equestrian facilities. Our trash removal Rancho Santa Fe service is pre-approved by multiple HOAs and provides all necessary documentation for gated community access, property management requirements, and compliance with local disposal regulations."
      }
    }
  ]
};

export default function JunkremovalranchosantafePage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Rancho Santa Fe",
    serviceName: "Junk Removal",
    description: "Professional Rancho Santa Fe junk removal for The Covenant, Fairbanks Ranch & luxury estates. Licensed & insured, HOA-approved, same-day service.",
    url: "https://severincleaners.com/junk-removal-rancho-santa-fe",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Rancho Santa Fe Junk Removal", url: "https://severincleaners.com/junk-removal-rancho-santa-fe" },
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
              ✓ Luxury estates and equestrian properties with exclusive service
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rancho Santa Fe Junk Removal
            </h1>
            <div className="text-xl mb-6">
              ⭐⭐⭐⭐⭐ 5.0 Rating • HOA-Approved • White-Glove Service
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
                Get Your Luxury Estate Quote – Save 15%
              </a>
            </div>
            <p className="text-lg">
              ✓ Same-Day Service ✓ Licensed & Insured ✓ Estate Specialists
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Rancho Santa Fe Junk Removal – Del Dios Highway to The Covenant</h2>

              <p className="text-lg text-gray-700 mb-6">
                <strong>Rancho Santa Fe junk removal</strong> requires the highest level of discretion and professionalism for one of San Diego County's most prestigious communities. From multi-acre estates along Del Dios Highway to exclusive homes in The Covenant gated community, our <strong>junk hauling Rancho Santa Fe</strong> service provides white-glove handling with the expertise expected by discerning property owners, estate managers, and luxury real estate professionals throughout Rancho Santa Fe, Fairbanks Ranch, and Rancho Valencia Resort neighborhoods.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Whether you need <strong>junk pickup Rancho Santa Fe</strong> for estate home renovations, equestrian facility maintenance, large property cleanouts, or discreet <strong>trash removal Rancho Santa Fe</strong> that respects your privacy and community standards, our <strong>Rancho Santa Fe San Diego junk removal</strong> team coordinates seamlessly with gate security, HOA requirements, property management teams, and household staff. We understand the unique access challenges of rolling hills estates, long private driveways, and gated community protocols that define Rancho Santa Fe's exclusive residential landscape.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Rancho Santa Fe's luxury estates and equestrian properties demand specialized <strong>junk hauling Rancho Santa Fe</strong> expertise. Our team regularly services properties along La Granada, Paseo Delicias, El Camino Del Norte, and Via De La Valle, providing the same meticulous attention to detail whether handling a single-item pickup from a Rancho Santa Fe Golf Club residence or coordinating multi-day estate cleanouts for large lot properties near Rancho Valencia. Every <strong>junk pickup Rancho Santa Fe</strong> project receives professional crews trained in luxury property protocols, valuable item handling, and the discretion required by high-profile estates throughout this exclusive community.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Rancho Santa Fe Streets & Communities We Serve</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-blue-800">
                    <li>The Covenant gated community estates</li>
                    <li>Fairbanks Ranch luxury homes</li>
                    <li>Del Dios Highway large lot properties</li>
                    <li>La Granada & Paseo Delicias residences</li>
                    <li>El Camino Del Norte estates</li>
                    <li>Via De La Valle properties</li>
                  </ul>
                  <ul className="text-blue-800">
                    <li>Rancho Valencia Resort neighborhoods</li>
                    <li>Rancho Santa Fe Golf Club area homes</li>
                    <li>Equestrian estates & horse properties</li>
                    <li>Rolling hills multi-acre lots</li>
                    <li>The Bridges exclusive community</li>
                    <li>Crosby Estates & Del Rayo Estates</li>
                  </ul>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-blue-700 font-semibold">📞 Call (619) 750-0114 for same-day estate service</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Junk Hauling in Rancho Santa Fe's Covenant & Fairbanks Ranch</h3>
              <p className="text-lg text-gray-700 mb-6">
                The Covenant and Fairbanks Ranch represent Rancho Santa Fe's most exclusive gated communities, where <strong>trash removal Rancho Santa Fe</strong> services must meet exceptional standards for discretion, professionalism, and HOA compliance. Our <strong>junk pickup Rancho Santa Fe</strong> team is pre-approved by multiple prestigious communities and fully trained in white-glove service protocols. We coordinate with 24/7 gate security, understand community regulations, schedule around resident events, and provide unmarked vehicles when privacy is paramount for high-profile estates throughout The Covenant's tree-lined streets and Fairbanks Ranch's equestrian-friendly neighborhoods.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Large Estate Furniture & Appliance Removal in RSF</h3>
              <p className="text-lg text-gray-700 mb-4">
                Rancho Santa Fe's luxury estates feature oversized rooms, professional-grade kitchens, and custom furniture that demands specialized <strong>junk hauling Rancho Santa Fe</strong> expertise. From Del Dios Highway mansions to Rancho Valencia estate homes, we handle:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h4 className="text-xl font-bold mb-3 text-gray-900">Common Items Removed from Rancho Santa Fe Estates</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><strong>Oversized furniture:</strong> Custom sofas, estate dining sets, bedroom suites</li>
                    <li><strong>High-end appliances:</strong> Wolf ranges, Sub-Zero refrigerators, wine cellars</li>
                    <li><strong>Outdoor equipment:</strong> Hot tubs, pool furniture, outdoor kitchens</li>
                    <li><strong>Yard waste:</strong> Tree trimmings, landscaping debris, palm fronds</li>
                    <li><strong>Construction debris:</strong> Renovation materials, custom cabinetry, fixtures</li>
                    <li><strong>Gym equipment:</strong> Treadmills, weight machines, home gym setups</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><strong>Equestrian property items:</strong> Barn equipment, fencing, tack, feed storage</li>
                    <li><strong>Estate sale leftovers:</strong> Antiques, art, collectibles requiring care</li>
                    <li><strong>Guest house cleanouts:</strong> Casita furniture, pool house items</li>
                    <li><strong>Household clutter:</strong> Boxes, storage items, general accumulation</li>
                    <li><strong>Electronics:</strong> Home theater systems, computers, audio equipment</li>
                    <li><strong>Garage & workshop:</strong> Tools, machinery, automotive equipment</li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-8">
                Our <strong>Rancho Santa Fe San Diego junk removal</strong> service provides professional crews experienced with the unique challenges of luxury estate management. We navigate long private driveways, coordinate with property managers and household staff, respect your schedule and privacy, and maintain the meticulous standards expected throughout Rancho Santa Fe's prestigious communities.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Estate & Mansion Service Benefits</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Same-day service:</strong> Available for urgent estate needs, property staging, HOA compliance</li>
                    <li><strong>Licensed & insured:</strong> Comprehensive coverage for luxury estates and valuable contents</li>
                    <li><strong>Compliance with San Diego County regulations:</strong> Proper disposal documentation</li>
                    <li><strong>Discreet professional crews:</strong> Uniformed teams trained in luxury property protocols</li>
                    <li><strong>White-glove handling:</strong> Special care for antiques, art, and high-value items</li>
                    <li><strong>Transparent pricing:</strong> $100-$495 standard, custom quotes for large estates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-green-600">Gated Community & HOA Benefits</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Pre-approved vendor:</strong> Multiple Rancho Santa Fe HOA relationships established</li>
                    <li><strong>Gate access coordination:</strong> Smooth security clearance and entry procedures</li>
                    <li><strong>Community standards compliance:</strong> Adherence to all aesthetic and operational rules</li>
                    <li><strong>Flexible scheduling:</strong> Work around community events and resident schedules</li>
                    <li><strong>Privacy protection:</strong> Unmarked vehicles available for high-profile residents</li>
                    <li><strong>Documentation provided:</strong> Full service records for property management needs</li>
                  </ul>
                </div>
              </div>


              {/* Sticky CTA */}
              <div className="sticky top-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg shadow-lg mb-8 z-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">Call Today for Same-Day Luxury Estate Service</p>
                    <p className="text-sm opacity-90">White-glove service • HOA-approved • Estate specialists</p>
                  </div>
                  <a
                    href="tel:6197500114"
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Rancho Santa Fe Estate Owners Trust Severin Cleaners</h3>
              <p className="text-lg text-gray-700 mb-4">
                As a locally-owned business with deep understanding of luxury property management, we provide the discretion, professionalism, and expertise that Rancho Santa Fe estates demand. Our <strong>trash removal Rancho Santa Fe</strong> service combines white-glove handling with efficient execution for properties throughout The Covenant, Fairbanks Ranch, Del Dios Highway estates, and Rancho Valencia neighborhoods—from historic Spanish Colonial adobes to modern equestrian facilities and contemporary luxury homes.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                We specialize in high-value item handling, sensitive estate transitions, and large-scale property management support. Our <strong>junk pickup Rancho Santa Fe</strong> team understands the unique requirements of multi-acre estates, from coordinating with household staff and property managers to managing discretely sensitive family situations during estate cleanouts. Whether you're a long-time Rancho Santa Fe resident, luxury real estate professional staging a high-end listing, or property manager overseeing multiple estates, you can trust our HOA-approved service to maintain the standards your community expects while providing transparent pricing and reliable same-day service when needed.
              </p>

              <div className="text-center bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Call Now for Same-Day Junk Removal in Rancho Santa Fe</h3>
                <p className="text-lg mb-6">
                  Professional <strong>Rancho Santa Fe junk removal</strong> with white-glove service, HOA approval, and guaranteed discretion for luxury estates
                </p>
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                >
                  📞 Call Now for Same-Day Estate Service: (619) 750-0114
                </a>
                <div className="bg-blue-800 rounded-lg p-4">
                  <p className="text-yellow-300 font-semibold mb-2">💰 Transparent Pricing • Book Your Rancho Santa Fe Junk Pickup – Save 15% Online 💰</p>
                  <div className="text-sm">
                    <strong>$100-$495 Standard Pricing</strong> • <strong>Custom Quotes for Large Estates</strong><br/>
                    <strong>Licensed & Insured</strong> • <strong>HOA-Approved Vendor</strong>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  Serving The Covenant • Fairbanks Ranch • Del Dios Highway • Rancho Valencia • All Rancho Santa Fe estates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <RanchoSantaFeFAQSection />

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Related Rancho Santa Fe Estate Services</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
              <p className="text-gray-600">Large furniture removal from estate homes with white-glove handling for antiques and custom pieces</p>
            </a>
            <a href="/appliance-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal San Diego</h4>
              <p className="text-gray-600">Professional-grade kitchen appliances, outdoor kitchens, and gym equipment removal from luxury properties</p>
            </a>
            <a href="/construction-debris-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
              <p className="text-gray-600">Major remodels and estate renovation debris hauling with HOA-compliant service</p>
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