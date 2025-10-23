import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpringValleyFAQSection from "./SpringValleyFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Spring Valley Junk Removal | Hillside Property Experts | (619) 750-0114",
  description: "Spring Valley hillside junk removal Dictionary Hill, Casa de Oro. Steep driveways, apartment complexes, family homes. (619) 750-0114",
  keywords: "Spring Valley junk removal, junk hauling Spring Valley, junk pickup Spring Valley, trash removal Spring Valley, Spring Valley San Diego junk removal, Dictionary Hill junk removal, Casa de Oro junk hauling, Sweetwater Reservoir junk pickup",
  openGraph: {
    title: "Spring Valley Junk Removal | Affordable Family & Hillside Specialists",
    description: "Professional Spring Valley junk removal for East County families, hillside homes & apartments. Same-day junk hauling Spring Valley, eco-friendly disposal.",
    url: "https://severincleaners.com/junk-removal-spring-valley",
  },
  alternates: {
    canonical: "https://severincleaners.com/junk-removal-spring-valley",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does junk removal cost in Spring Valley?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Spring Valley junk removal pricing is transparent and affordable, designed with East County families in mind. We offer upfront pricing with no hidden fees: Single Item Pickup starting at $100, 1/4 Trailer Load $249, 3/8 Trailer Load $319, 1/2 Trailer Load $349, 5/8 Trailer Load $366, 3/4 Trailer Load $429, 7/8 Trailer Load $462, Full Trailer Load $495. Most residential jobs range from $249-$429, with flexible payment options for families. Hillside properties may have additional access coordination. We provide family-friendly rates for apartments, mobile homes, and multi-family properties throughout Dictionary Hill and Casa de Oro."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide hillside junk hauling in Spring Valley?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We specialize in hillside property junk pickup Spring Valley services, especially in Dictionary Hill and Casa de Oro areas. Our team has specialized equipment and experience handling challenging terrain, steep driveways, and unique access situations. We're experts at safely navigating hillside properties throughout East County."
      }
    },
    {
      "@type": "Question",
      "name": "Can you offer same-day junk pickup for apartments and mobile homes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We provide fast Spring Valley junk removal service, typically offering next-day service with same-day available when you call before 2 PM for apartments, mobile home parks, and multi-family properties. Our team works efficiently with property managers and understands the unique requirements of rental properties. We coordinate with building management and respect community guidelines for all trash removal Spring Valley projects."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle large family cleanouts and estate junk removal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, while we're a professional junk removal Spring Valley company, we excel at large family cleanouts and estate property junk removal. Our core service is hauling away unwanted items, furniture, and debris from inherited homes and multi-generational households. Our compassionate junk hauling Spring Valley team understands the sensitivity required when families are dealing with estate transitions or downsizing situations. We efficiently remove and haul away items while working respectfully with families during difficult times in East County communities. We focus on the junk removal aspect, making the physical cleanout process smooth and stress-free."
      }
    },
    {
      "@type": "Question",
      "name": "Are your junk removal services eco-friendly in East County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We handle all items in accordance with San Diego County and East County regulations. Our team recycles metals, electronics, and materials through certified facilities, and donates usable furniture to local charities when appropriate."
      }
    }
  ]
};

export default function JunkRemovalSpringValleyPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Spring Valley",
    serviceName: "Junk Removal",
    description: "Professional Spring Valley junk removal for East County families, hillside homes & apartments. Same-day junk hauling Spring Valley, eco-friendly disposal. Serving Dictionary Hill, Casa de Oro.",
    url: "https://severincleaners.com/junk-removal-spring-valley",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Spring Valley Junk Removal", url: "https://severincleaners.com/junk-removal-spring-valley" },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema, faqSchema],
  };

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <div className="min-h-screen bg-background">
        <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Spring Valley Junk Removal | Hillside Property Experts
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Professional junk hauling for Dictionary Hill, Casa de Oro, and Sweetwater Reservoir neighborhoods
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  CALL NOW: (619) 750-0114
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  Get Spring Valley Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why Spring Valley Residents Choose Severin Cleaners
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Affordable Family Pricing</h3>
                <p className="text-gray-600">Budget-friendly rates designed for East County families and hillside properties.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Fast Response Service</h3>
                <p className="text-gray-600">Quick response throughout Spring Valley - from Dictionary Hill to Casa de Oro. <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">Same-day pickup</a> available when you call before 2 PM.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Hillside Property Experts</h3>
                <p className="text-gray-600">Specialized equipment and experience for challenging terrain and steep driveways.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Affordable Spring Valley San Diego Junk Removal for East County Families
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                When East County families need reliable <strong>Spring Valley junk removal</strong> services, Severin Cleaners delivers affordable solutions for hillside homes, apartments, and multi-family properties. Our experienced team provides fast <strong>junk hauling Spring Valley</strong> (including <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">same-day service</a> when you call before 2 PM) with transparent pricing that works for family budgets.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                From Dictionary Hill to Casa de Oro neighborhoods, we specialize in <strong>trash removal Spring Valley</strong> for challenging hillside properties, mobile home parks, and apartment complexes. Our reliable service supports multi-generational households and rental properties throughout East County. We also serve nearby communities including <a href="/junk-removal-la-mesa" className="text-blue-600 hover:underline">La Mesa</a>, <a href="/junk-removal-lemon-grove" className="text-blue-600 hover:underline">Lemon Grove</a>, and <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Local Areas */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Junk Hauling in Spring Valley Hillside Homes & East County Properties
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Dictionary Hill Area</h3>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li>• Hillside homes and steep driveways</li>
                  <li>• Custom-built properties with unique access</li>
                  <li>• Multi-level home cleanouts</li>
                  <li>• Scenic property junk removal</li>
                </ul>
                <a href="tel:+16197500114" className="text-green-600 font-semibold hover:text-green-700">
                  Call for Dictionary Hill Service →
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Casa de Oro–Mount Helix</h3>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li>• <a href="/estate-cleanout-san-diego" className="text-green-600 hover:text-green-700">Estate cleanouts</a> for family properties</li>
                  <li>• Multi-generational household cleanouts</li>
                  <li>• Inherited home junk removal</li>
                  <li>• Family downsizing assistance</li>
                </ul>
                <a href="tel:+16197500114" className="text-green-600 font-semibold hover:text-green-700">
                  Call for Casa de Oro Service →
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Jamacha Boulevard Corridor</h3>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li>• Apartment and condo complexes</li>
                  <li>• Mobile home park services</li>
                  <li>• <a href="/furniture-removal-san-diego" className="text-green-600 hover:text-green-700">Furniture removal</a> for rentals</li>
                  <li>• Retail space cleanouts</li>
                </ul>
                <a href="tel:+16197500114" className="text-green-600 font-semibold hover:text-green-700">
                  Call for Jamacha Boulevard Service →
                </a>
              </div>
            </div>

            <div className="mt-12 bg-green-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Sweetwater Reservoir & Surrounding Areas
              </h3>
              <p className="text-gray-700 text-center mb-6">
                Serving all Spring Valley neighborhoods including mobile home communities, apartment complexes, and hillside properties near Sweetwater Reservoir with specialized access solutions.
              </p>
              <div className="text-center">
                <a
                  href="tel:+16197500114"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  📞 Call for Reservoir Area Service
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Apartment & Mobile Home Junk Pickup in Spring Valley
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Family & Hillside Properties</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Hillside home access solutions</h4>
                      <p className="text-gray-600 text-sm">Specialized equipment for steep driveways and challenging terrain</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Multi-generational household cleanouts</h4>
                      <p className="text-gray-600 text-sm">Sensitive handling of family belongings and heirlooms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Estate and inheritance cleanouts</h4>
                      <p className="text-gray-600 text-sm">Compassionate service for inherited East County properties</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Garage and storage area clearing</h4>
                      <p className="text-gray-600 text-sm">Organizing and clearing family storage spaces</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Apartments & Mobile Homes</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Apartment turnover cleanouts</h4>
                      <p className="text-gray-600 text-sm">Quick, efficient service for property managers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Mobile home park services</h4>
                      <p className="text-gray-600 text-sm">Respectful service for mobile home communities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Multi-family property assistance</h4>
                      <p className="text-gray-600 text-sm">Coordination with landlords and property management</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Tenant move-out support</h4>
                      <p className="text-gray-600 text-sm">Helping families with affordable moving transitions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="tel:+16197500114"
                className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-bold text-xl transition-colors inline-flex items-center"
              >
                📞 Call (619) 750-0114 - Affordable Spring Valley Junk Removal
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Spring Valley Residents Choose Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Affordable Family Pricing</h3>
                <p className="text-gray-600 text-sm">Budget-friendly <strong>junk pickup Spring Valley</strong> rates for East County families</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Hillside Property Experts</h3>
                <p className="text-gray-600 text-sm">Specialized equipment and experience for challenging terrain</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2"><a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">Same-Day Service</a> Available</h3>
                <p className="text-gray-600 text-sm">Emergency <strong>trash removal Spring Valley</strong> available when you need it</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Community Focused</h3>
                <p className="text-gray-600 text-sm">Supporting East County families and multi-generational households</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 mt-12 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Reliable Service for Multi-Generational Households
              </h3>
              <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                Understanding the unique needs of East County families, we provide respectful, affordable <strong>Spring Valley junk removal</strong> services that work for households with multiple generations, rental properties, and mobile home communities.
              </p>
              <a
                href="tel:+16197500114"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                📞 Call for Family-Friendly Pricing
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section - Now using dropdown component */}
        <SpringValleyFAQSection />

        {/* Contact CTA */}
        <section id="quote" className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Get Your Free Spring Valley Junk Removal Quote Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional <strong>Spring Valley junk removal</strong> with affordable pricing for East County families, hillside properties, apartments, and mobile home communities throughout Dictionary Hill and Casa de Oro.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+16197500114"
                className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-lg font-bold text-xl transition-colors inline-flex items-center justify-center"
              >
                📞 Call (619) 750-0114
              </a>
              <div className="flex flex-col items-center">
                <span className="text-gray-400 text-sm mb-2">Email Us</span>
                <a
                  href="mailto:severincleaners@gmail.com"
                  className="text-green-400 hover:text-green-300 font-semibold"
                >
                  severincleaners@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </>
  );
}