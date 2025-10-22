import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VistaFAQSection from "./VistaFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Vista Junk Removal | Same-Day Hauling | Licensed & Insured",
  description: "Professional Vista junk removal for families, apartments & businesses. Same-day junk hauling Vista, eco-friendly disposal. Serving Shadowridge, Downtown Vista Village, Rancho Buena Vista, Buena Creek. Call (619) 750-0114!",
  keywords: "Vista junk removal, junk hauling Vista, junk pickup Vista, trash removal Vista, Vista San Diego junk removal, Shadowridge junk removal, Downtown Vista junk hauling, Vista Business Park cleanout, Rancho Buena Vista junk removal, Buena Creek junk hauling",
  openGraph: {
    title: "Vista Junk Removal | Same-Day Hauling | Licensed & Insured",
    description: "Professional Vista junk removal for families, apartments & businesses. Same-day junk hauling Vista, eco-friendly disposal. Serving all Vista neighborhoods including Shadowridge and Rancho Buena Vista.",
    url: "https://severincleaners.com/junk-removal-vista",
  },
  alternates: {
    canonical: "https://severincleaners.com/junk-removal-vista",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does junk removal cost in Vista?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Vista junk removal pricing is transparent and upfront with no hidden fees. Here's our standard pricing structure: Single Item Pickup starting at $100, 1/4 Trailer Load $249, 3/8 Trailer Load $319, 1/2 Trailer Load $349, 5/8 Trailer Load $366, 3/4 Trailer Load $429, 7/8 Trailer Load $462, Full Trailer Load $495. Most residential jobs range from $249-$429, while commercial projects vary based on scope. Call (619) 750-0114 for a free, customized quote tailored to your specific junk hauling Vista needs for both homes and businesses."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle apartment and condo junk hauling in Vista?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We specialize in apartment and condo junk pickup Vista services, especially in Downtown Vista Village and Shadowridge complexes. Our team navigates stairs, elevators, and tight spaces with care. We coordinate with property managers and respect HOA guidelines for all trash removal Vista projects."
      }
    },
    {
      "@type": "Question",
      "name": "Can you provide same-day junk pickup in Vista?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We offer same-day Vista junk removal service 7 days a week. Our local team can often arrive within 2-4 hours of your call for emergency cleanouts. Whether you need urgent help for moving deadlines or unexpected situations, our same-day junk hauling Vista service is ready to help."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with Vista businesses and warehouses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide comprehensive commercial Vista San Diego junk removal for businesses throughout Vista Business Park, downtown breweries, and warehouse facilities. Our services include office cleanouts, retail space clearing, and industrial equipment removal. We work with contractors, property managers, and business owners on projects of all sizes."
      }
    },
    {
      "@type": "Question",
      "name": "Are your junk removal services eco-friendly in North County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our Vista junk removal approach prioritizes environmental responsibility through comprehensive recycling, donation programs, and disposal methods that comply with all local regulations. We handle all items in accordance with San Diego County and North County regulations, so you don't have to worry about a thing. Our team recycles metals, electronics, and materials through certified facilities, donates usable furniture to local North County charities, and ensures eco-friendly disposal methods that benefit both Vista families and businesses while protecting our community environment."
      }
    }
  ]
};

export default function JunkRemovalVistaPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Vista",
    serviceName: "Junk Removal",
    description: "Professional Vista junk removal for families, apartments & businesses. Same-day junk hauling Vista, eco-friendly disposal. Serving Shadowridge, Downtown Vista Village, Rancho Buena Vista, Buena Creek.",
    url: "https://severincleaners.com/junk-removal-vista",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Vista Junk Removal", url: "https://severincleaners.com/junk-removal-vista" },
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
                Vista Junk Removal
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Professional junk hauling for Downtown Vista Village, Shadowridge, Rancho Buena Vista, and Buena Creek
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
                  Get Vista Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why Vista Residents Choose Severin Cleaners
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Same Day Service</h3>
                <p className="text-gray-600">Quick response throughout Vista - from Shadowridge to Downtown Village. Same-day pickup available for urgent needs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Family & Business Focus</h3>
                <p className="text-gray-600">Specialized service for Vista families, apartments, and businesses including the Vista Business Park.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Eco-Friendly Disposal</h3>
                <p className="text-gray-600">Responsible disposal with recycling and donation programs to benefit the Vista community.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Service Areas Callout */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Vista Neighborhoods We Serve
              </h2>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <p className="mb-2"><strong>Main Areas:</strong></p>
                  <ul className="space-y-1 text-sm">
                    <li>• Downtown Vista Village</li>
                    <li>• Shadowridge</li>
                    <li>• Rancho Buena Vista</li>
                    <li>• Buena Creek</li>
                    <li>• Vista Business Park</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2"><strong>Key Landmarks:</strong></p>
                  <ul className="space-y-1 text-sm">
                    <li>• Brengle Terrace Park</li>
                    <li>• Vista Civic Center</li>
                    <li>• North County Breweries</li>
                    <li>• Tri-City Medical Center</li>
                    <li>• Vista Village Drive corridor</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Professional Vista Junk Removal for North County Families & Businesses
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                  When Vista families and businesses need reliable <strong>Vista junk removal</strong> services, Severin Cleaners delivers professional solutions for the unique needs of this thriving North County community. Our experienced team provides same-day <strong>junk hauling Vista</strong> with transparent pricing that works for family budgets and business operations throughout Shadowridge, Rancho Buena Vista, and Downtown Vista Village.
                </p>
                <p className="text-lg mb-6">
                  From residential neighborhoods near Brengle Terrace Park to commercial properties in Vista Business Park, we specialize in comprehensive <strong>trash removal Vista</strong> for family homes, apartments, condos, and business properties. Our reliable service supports the diverse Vista community with eco-friendly disposal and professional handling of all types of unwanted items, from single furniture pieces to complete property cleanouts.
                </p>
                <p className="text-lg mb-6">
                  Vista's mix of established family neighborhoods, growing business districts, and vibrant downtown breweries creates diverse junk removal needs. Whether you're a family downsizing near Buena Creek, a brewery renovating in Downtown Vista, or a business clearing warehouse space, our <strong>Vista San Diego junk removal</strong> team understands the unique requirements of North County properties and delivers solutions that work for your schedule and budget.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Transparent Pricing for Vista Junk Removal
              </h2>
              <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
                Our <strong>Vista junk removal</strong> pricing is straightforward with no hidden fees. We charge based on the volume of items, not by the hour, so you know exactly what you'll pay before we start.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$100</div>
                  <div className="font-semibold mb-2">Single Item Pickup</div>
                  <p className="text-gray-600 text-sm">Perfect for one couch, mattress, or appliance removal</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$249</div>
                  <div className="font-semibold mb-2">1/4 Trailer Load</div>
                  <p className="text-gray-600 text-sm">Small cleanout or several furniture pieces</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$319</div>
                  <div className="font-semibold mb-2">3/8 Trailer Load</div>
                  <p className="text-gray-600 text-sm">Garage cleanout or apartment junk removal</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$349</div>
                  <div className="font-semibold mb-2">1/2 Trailer Load</div>
                  <p className="text-gray-600 text-sm">Medium room cleanout or storage clearing</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$366</div>
                  <div className="font-semibold mb-2">5/8 Trailer Load</div>
                  <p className="text-gray-600 text-sm">Multiple rooms or larger furniture sets</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$429</div>
                  <div className="font-semibold mb-2">3/4 Trailer Load</div>
                  <p className="text-gray-600 text-sm">Full home cleanout or business inventory</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$462</div>
                  <div className="font-semibold mb-2">7/8 Trailer Load</div>
                  <p className="text-gray-600 text-sm">Large estate or commercial cleanout</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-600">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$495</div>
                  <div className="font-semibold mb-2">Full Trailer Load</div>
                  <p className="text-gray-600 text-sm">Maximum capacity - complete property cleanout</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 text-center">
                <p className="text-gray-700 mb-4">
                  <strong>All prices include:</strong> Labor, hauling, proper disposal, recycling fees, and cleanup. No hidden charges for Vista families and businesses.
                </p>
                <a
                  href="tel:+16197500114"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors inline-block"
                >
                  Call (619) 750-0114 for Free Vista Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Common Items Removed */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Common Items We Remove in Vista
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Furniture & Household</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Couches and sectionals</li>
                    <li>✓ Mattresses and box springs</li>
                    <li>✓ Dining sets and tables</li>
                    <li>✓ Dressers and cabinets</li>
                    <li>✓ Office desks and chairs</li>
                    <li>✓ Patio furniture sets</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Appliances & Electronics</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Refrigerators and freezers</li>
                    <li>✓ Washers and dryers</li>
                    <li>✓ Stoves and microwaves</li>
                    <li>✓ TVs and monitors</li>
                    <li>✓ Computer equipment</li>
                    <li>✓ Exercise equipment</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Business & Commercial</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:text-blue-700">Construction debris</a></li>
                    <li>✓ Office furniture and equipment</li>
                    <li>✓ Brewery and restaurant gear</li>
                    <li>✓ Retail fixtures and displays</li>
                    <li>✓ Warehouse inventory</li>
                    <li>✓ Industrial equipment</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 text-center bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 text-lg">
                  <strong>Don't see your item?</strong> We handle almost everything! Call us at{" "}
                  <a href="tel:+16197500114" className="text-blue-600 font-bold hover:text-blue-700">
                    (619) 750-0114
                  </a>{" "}
                  to discuss your specific <strong>Vista junk hauling</strong> needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Junk Hauling in Shadowridge and Downtown Vista
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Downtown Vista Village</h3>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li>• Historic core apartments and condos</li>
                  <li>• Local brewery and restaurant cleanouts</li>
                  <li>• Small business junk removal</li>
                  <li>• Vintage home furniture removal</li>
                </ul>
                <a href="tel:+16197500114" className="text-blue-600 font-semibold hover:text-blue-700">
                  Call for Downtown Vista Service →
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Shadowridge & Buena Creek</h3>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li>• Family home cleanouts and moves</li>
                  <li>• Garage and storage clearing</li>
                  <li>• Backyard and patio furniture</li>
                  <li>• HOA community cleanups</li>
                </ul>
                <a href="tel:+16197500114" className="text-blue-600 font-semibold hover:text-blue-700">
                  Call for Shadowridge Service →
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Vista Business Park</h3>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li>• <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:text-blue-700">Commercial office cleanouts</a></li>
                  <li>• Warehouse and storage facility clearing</li>
                  <li>• Retail space renovation debris</li>
                  <li>• Industrial equipment removal</li>
                </ul>
                <a href="tel:+16197500114" className="text-blue-600 font-semibold hover:text-blue-700">
                  Call for Business Park Service →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Complete Junk Pickup Vista Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Residential Vista Families</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900"><a href="/furniture-removal-san-diego" className="text-blue-600 hover:text-blue-700">Furniture removal Vista</a> for family homes</h4>
                      <p className="text-gray-600 text-sm">Couches, beds, dining sets, and living room furniture</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900"><a href="/appliance-removal-san-diego" className="text-blue-600 hover:text-blue-700">Appliance and electronics disposal</a></h4>
                      <p className="text-gray-600 text-sm">Refrigerators, washers, TVs, and computer equipment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Garage and storage cleanouts</h4>
                      <p className="text-gray-600 text-sm">Decluttering and organizing family storage areas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Moving and downsizing support</h4>
                      <p className="text-gray-600 text-sm">Helping Vista families during transitions</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Vista Business & Commercial</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Office building cleanouts</h4>
                      <p className="text-gray-600 text-sm">Desk furniture, filing cabinets, and office equipment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Retail and restaurant spaces</h4>
                      <p className="text-gray-600 text-sm">Equipment removal for brewery and dining renovations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Warehouse and storage facilities</h4>
                      <p className="text-gray-600 text-sm">Large-scale commercial cleanouts in Business Park</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Construction and renovation debris</h4>
                      <p className="text-gray-600 text-sm">Supporting Vista contractors and property managers</p>
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
                📞 Call (619) 750-0114 - Same-Day Vista Junk Removal
              </a>
            </div>
          </div>
        </section>

        {/* Streets Served */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Vista Streets We Serve
              </h2>
              <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
                Our <strong>junk pickup Vista</strong> team provides reliable service throughout the entire Vista area,
                including residential neighborhoods, business districts, and commercial zones.
              </p>

              <div className="grid md:grid-cols-3 gap-6 text-gray-700">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Downtown & Village</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Main Street</li>
                    <li>• Broadway</li>
                    <li>• Vista Village Drive</li>
                    <li>• California Avenue</li>
                    <li>• Santa Fe Avenue</li>
                    <li>• Eucalyptus Avenue</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Shadowridge & Buena Creek</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Shadow Ridge Drive</li>
                    <li>• Shadowridge View</li>
                    <li>• Buena Creek Road</li>
                    <li>• Thibodo Road</li>
                    <li>• Vandegrift Boulevard</li>
                    <li>• Mar Vista Drive</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Business & Commercial</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Sycamore Avenue (Business Park)</li>
                    <li>• Corporate Place</li>
                    <li>• Industrial Court</li>
                    <li>• Commerce Drive</li>
                    <li>• Business Park Avenue</li>
                    <li>• Rancho Del Oro Drive</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Don't see your street listed? We serve all of Vista! Call{" "}
                  <a href="tel:+16197500114" className="text-blue-600 font-bold hover:text-blue-700">
                    (619) 750-0114
                  </a>{" "}
                  to confirm service availability in your neighborhood.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Vista Families & Businesses Choose Severin Cleaners
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Same-Day Service</h3>
                <p className="text-gray-600 text-sm">Emergency <strong>junk pickup Vista</strong> available within hours of your call</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">locally-owned Local</h3>
                <p className="text-gray-600 text-sm">Vista neighbors serving Vista families with personalized care</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Eco-Friendly Disposal</h3>
                <p className="text-gray-600 text-sm">Responsible recycling and donation programs for North County</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                <p className="text-gray-600 text-sm">Upfront quotes with no hidden fees for all Vista services</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Now using dropdown component */}
        <VistaFAQSection />

        {/* Contact CTA */}
        <section id="quote" className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Get Your Free Vista Junk Removal Quote Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional <strong>Vista junk removal</strong> with same-day service for families and businesses throughout Vista, Shadowridge, and surrounding North County areas.
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
                  className="text-blue-400 hover:text-blue-300 font-semibold"
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