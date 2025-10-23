import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Image from "next/image";
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
  title: 'Junk Removal El Cajon | East County\'s #1 Rated | (619) 750-0114',
  description: 'East County junk removal Fletcher Hills, Bostonia. Garage cleanouts, estate hauling, classic car debris. (619) 750-0114',
  keywords: 'junk removal El Cajon, scrap metal removal El Cajon, metal recycling El Cajon, junk hauling El Cajon, trash removal El Cajon, junk pickup El Cajon CA, East County junk removal, scrap metal recycling East County',
  openGraph: {
    title: 'Junk Removal El Cajon | Scrap Metal Recycling & Junk Hauling East County',
    description: 'Professional junk removal and scrap metal recycling in El Cajon CA. We haul appliances, copper, aluminum, steel & all junk. Same-day service East County.',
    url: 'https://severincleaners.com/junk-removal-el-cajon',
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
    title: 'Junk Removal El Cajon | Scrap Metal Recycling & Junk Hauling East County',
    description: 'Professional junk removal and scrap metal recycling in El Cajon CA. We haul appliances, copper, aluminum, steel & all junk. Same-day service East County.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-el-cajon',
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
        "text": "Our El Cajon junk removal pricing is transparent and volume-based with no hidden fees. We offer comprehensive service to all Fletcher Hills, Rancho San Diego, Granite Hills, and East County neighborhoods: Single Item Pickup starting at $100, 1/4 Trailer Load $249, 3/8 Trailer Load $319, 1/2 Trailer Load $349, 5/8 Trailer Load $366, 3/4 Trailer Load $429, 7/8 Trailer Load $462, Full Trailer Load $495. All prices include labor, hauling, and proper disposal. Volume discounts available for large East County properties and multi-generational homes. Call for your free estimate today."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide same-day junk hauling in East County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer same-day junk hauling El Cajon service for urgent needs throughout East County. Whether you're in Fletcher Hills, Rancho San Diego, Granite Hills, Crest, or Downtown El Cajon, our locally owned team can respond quickly for emergency cleanouts, estate situations, and time-sensitive property needs. Same-day availability depends on scheduling and crew availability."
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
        "text": "Absolutely. Our junk pickup El Cajon service specializes in large family properties and multi-generational households common throughout East County. As a locally owned business, we understand the unique needs of family cleanouts, inherited properties, and estate transitions. We provide respectful, compassionate service that preserves important family memories while handling extensive property cleanouts with care and professionalism."
      }
    },
    {
      "@type": "Question",
      "name": "Do you serve Fletcher Hills and Rancho San Diego?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide comprehensive trash removal El Cajon service throughout Fletcher Hills and Rancho San Diego. We specialize in these premier East County neighborhoods, understanding their unique characteristics - from Fletcher Hills' established hillside properties and luxury estates to Rancho San Diego's master-planned communities and HOA requirements. Our team delivers professional service that respects community standards and family values in both areas."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer scrap metal removal and recycling in El Cajon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our El Cajon scrap metal removal service accepts all types of metal including appliances, copper wire, aluminum, steel, brass, iron, and more. We provide fair pricing for scrap metal recycling El Cajon and haul to certified recycling facilities in East County. Whether you have old appliances, construction metal, or yard scrap, we offer same-day metal pickup El Cajon CA for residential and commercial properties throughout East County."
      }
    },
    {
      "@type": "Question",
      "name": "What types of scrap metal do you accept in East County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our metal recycling El Cajon service accepts: refrigerators, washers, dryers, stoves, water heaters, copper pipes and wire, aluminum siding and gutters, steel beams and rebar, brass fixtures, iron railings and gates, metal furniture, filing cabinets, and more. We handle both ferrous and non-ferrous metals. For large quantities of scrap metal removal East County, we offer competitive pricing and can often provide credits toward your total cost."
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Junk Removal El Cajon | East County's #1 Rated
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
              El Cajon Scrap Metal Recycling & Junk Hauling
            </h2>
            <div className="text-xl mb-6">
              ⭐⭐⭐⭐⭐ 5.0 Rating • Locally Owned Service • East County Experts
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
                Book East County Junk Pickup - Save 15%
              </a>
            </div>
            <p className="text-lg">
              ✓ <a href="/same-day-junk-removal-san-diego" className="text-white hover:underline">Same-Day Service</a> Available ✓ Licensed & Insured ✓ Local Specialists
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
                  <div className="text-4xl font-bold mb-2">$100</div>
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

              <div className="mb-8 float-right ml-6 mb-6">
                <Image
                  src="/optimized/toiletteam.jpg"
                  alt="Severin Cleaners team providing junk removal and appliance hauling service in El Cajon"
                  width={300}
                  height={225}
                  className="rounded-lg shadow-lg"
                />
                <p className="text-xs text-gray-600 text-center mt-2 italic">
                  Our team serving El Cajon families
                </p>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                We provide junk removal throughout El Cajon and East County. Our team serves family-oriented communities from Fletcher Hills to Rancho San Diego. We help homeowners in all neighborhoods, whether you live near Parkway Plaza or in the hillside estates. Same-day service is available for urgent needs.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                East County families trust our team for house cleanouts and property services. We handle multi-generational homes with care and respect. From single-item pickups to whole-house cleanouts, we do it all. Our service covers Fletcher Hills, Rancho San Diego, Granite Hills, and beyond.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                As a locally owned business, we understand East County values. We work with families during moves, renovations, and estate transitions. Our team treats your property like our own. We deliver service you can count on.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                We serve diverse neighborhoods across the region. Our trucks reach the Fletcher Parkway corridor and mountain areas like Crest. We work with Downtown businesses and residential areas alike. Every job gets the same professional treatment, whether in Bostonia or Mount Helix.
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
                We give special attention to East County's premier neighborhoods. Fletcher Hills and Rancho San Diego have unique needs. Our team works with luxury estates and master-planned communities. We follow HOA standards and respect your neighborhood. Your property values matter to us.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Fletcher Hills homeowners choose us for estate cleanouts and property transitions. We handle inherited items with care. Multi-generational families need sensitive service during difficult times. We combine professionalism with compassion in every job.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Hillside access can be challenging in these areas. Our team knows how to work in tight spaces and steep driveways. We preserve your property and respect your family's history. Years of experience in Fletcher Hills makes us the right choice for your cleanout needs.
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
                Many East County families have multi-generational households. We understand these homes need special care. Family cleanouts and estate transitions can be emotional. Our team provides compassionate service that respects your family's memories and needs.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                We work with you from start to finish. The first step is a free consultation to understand your needs. Then we create a plan that works for your timeline and budget. We handle everything so you don't have to stress.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Clearing an inherited home is never easy. We've helped hundreds of families in Fletcher Hills, Granite Hills, and Rancho San Diego. Our team treats your belongings with respect. We help you decide what to keep, donate, or remove.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Large family properties have unique challenges. You might have decades of accumulated items. Garages, attics, and sheds can fill up over time. We have the crew and equipment to handle any size cleanout. Call us for a free estimate.
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
                    <p className="font-semibold">Call Today for Fast Junk Removal in El Cajon</p>
                    <p className="text-sm opacity-90">Free quotes • locally-owned service • East County specialists</p>
                  </div>
                  <a
                    href="tel:6197500114"
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why East County Residents Choose Us</h2>
              <p className="text-lg text-gray-700 mb-6">
                East County's terrain creates unique challenges. Fletcher Hills properties sit on steep slopes with narrow driveways. Granite Hills homes have long access roads. Crest properties require mountain driving experience. We have the right equipment and skills for every situation - from backing trailers up hillside streets to navigating unpaved roads in rural areas.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Rancho San Diego's master-planned communities have strict HOA requirements for truck parking and pickup times. Downtown El Cajon properties face street parking limitations. Casa de Oro's established neighborhoods have mature trees that create overhead clearance issues. We understand these location-specific challenges and plan accordingly.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Multi-generational households are common in East County. Decades of accumulation means garages, sheds, and storage areas are often completely full. Inherited properties in Fletcher Hills and Bostonia can span 2,000+ square feet with attached structures. We have the crew size and equipment capacity to handle these large-scale cleanouts efficiently.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Temperature extremes matter in East County - summer heat in Jamacha-Lomita reaches over 100°F, requiring early morning scheduling for safety. Winter rains make unpaved Dehesa Road properties inaccessible. We plan jobs around weather and coordinate timing to protect your property and our crew.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                From the urban Fletcher Parkway corridor to remote mountain properties, we adapt our approach. The Parkway Plaza area has heavy traffic requiring strategic scheduling. Mount Helix's winding roads need skilled drivers. Each location gets the specific expertise it requires.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Scrap Metal Removal & Recycling in El Cajon</h2>
              <p className="text-lg text-gray-700 mb-6">
                Need scrap metal removed from your El Cajon property? We handle all types of metal. Our team picks up appliances, copper, aluminum, steel, and more. We recycle everything at certified facilities. You get competitive pricing and eco-friendly disposal.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                From single appliances to commercial cleanouts, we do it all. Many East County homeowners have old metal in garages and yards. We haul it away so you don't have to worry about it. Same-day pickup is available.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Metals We Accept for Recycling</h3>
              <p className="text-lg text-gray-700 mb-4">
                We accept a wide variety of metal materials:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Appliances & Large Items</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Refrigerators and freezers (Freon removal included)</li>
                    <li>Washers, dryers, and dishwashers</li>
                    <li>Stoves, ovens, and microwaves</li>
                    <li>Water heaters and HVAC units</li>
                    <li>Metal furniture and filing cabinets</li>
                    <li>Exercise equipment and weight sets</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Construction & Raw Metals</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Copper pipes, wire, and plumbing fixtures</li>
                    <li>Aluminum siding, gutters, and window frames</li>
                    <li>Steel beams, rebar, and construction metal</li>
                    <li>Brass fixtures and hardware</li>
                    <li>Iron railings, gates, and fencing</li>
                    <li>Metal roofing and flashing materials</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">How Our Metal Recycling Pricing Works</h3>
              <p className="text-lg text-gray-700 mb-4">
                Metal recycling pricing is simple and transparent:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li><strong>Standard Hauling Rates</strong> - Our regular volume-based pricing applies (see pricing section above)</li>
                <li><strong>Scrap Metal Credits</strong> - Large quantities of valuable metals may reduce your total cost</li>
                <li><strong>Mixed Loads Welcome</strong> - Combine junk removal with metal recycling in one trip</li>
                <li><strong>Certified Disposal</strong> - We haul to licensed East County recycling facilities</li>
              </ul>

              <p className="text-lg text-gray-700 mb-6">
                Valuable metals like copper, aluminum, and brass can lower your bill. Call for a free quote. We'll explain your options and give you an honest price.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h4 className="text-xl font-bold mb-3 text-green-900">Where We Take Your Scrap Metal</h4>
                <p className="text-gray-700 mb-3">
                  We partner with certified recycling facilities throughout East County. All metals are properly sorted and processed. We follow California environmental regulations. Hazardous materials like Freon are professionally removed before recycling.
                </p>
                <p className="text-gray-700">
                  <strong>Common East County Drop Locations:</strong> Licensed metal recyclers in El Cajon, Santee, and La Mesa areas • California-certified e-waste facilities for appliances • Specialized copper and aluminum processing centers
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Testimonial: Rancho San Diego</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
                <div className="flex items-center mb-2">
                  <div className="text-yellow-500 text-lg mr-2">⭐⭐⭐⭐⭐</div>
                  <p className="font-bold text-gray-900">Tony Murphy</p>
                </div>
                <p className="text-gray-700 italic mb-2">
                  "They stopped by to help my grandfather remove his old fridge and install the new one. They were kind, quick to respond, and got everything done in no time. We thought it would be a hassle since the new fridge had to be picked up last minute, but they made it effortless and even took the time to coordinate everything."
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Location:</strong> Rancho San Diego, El Cajon • <strong>Service:</strong> Refrigerator removal & installation coordination
                </p>
              </div>

              <div className="text-center bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Get El Cajon Junk Removal & Scrap Metal Quote Today</h3>
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
                  Licensed & insured • <a href="/same-day-junk-removal-san-diego" className="text-white hover:underline">Same-day service</a> available • Local specialists
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
            <a href="/scrap-metal-removal" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Scrap Metal Removal & Recycling</h4>
              <p className="text-gray-600">Professional metal recycling San Diego for copper, aluminum, steel, appliances and all scrap metal types</p>
            </a>
            <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal for Large East County Properties</h4>
              <p className="text-gray-600">Specialized furniture removal San Diego service for Fletcher Hills estates and multi-generational Rancho San Diego family homes</p>
            </a>
            <a href="/estate-cleanout-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts for Inherited Properties</h4>
              <p className="text-gray-600">Compassionate estate cleanout San Diego service for multi-generational homes and inherited East County properties</p>
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