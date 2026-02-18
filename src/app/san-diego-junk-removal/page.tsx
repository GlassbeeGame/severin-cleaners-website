import { Metadata } from 'next';
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/SchemaMarkup";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import { generateServiceSchema, combineSchemas, generateAggregateRatingSchema, generateHowToSchema } from "@/lib/schema";
import OptimizedGradientHero from "@/components/OptimizedGradientHero";

export const metadata: Metadata = {
  title: 'Junk Removal San Diego | Licensed Local Team • Same-Day Service',
  description: 'Professional San Diego junk removal. Same-day service, transparent pricing $100-$495, licensed & insured. Serving all county neighborhoods. Call (619) 750-0114.',
  keywords: [
    'junk removal san diego',
    'san diego junk removal',
    'san diego junk hauling',
    'junk removal san diego prices',
    'junk pickup San Diego',
    'trash removal San Diego',
    'San Diego County junk removal',
    'same-day junk removal',
    'junk removal cost San Diego',
    'furniture removal San Diego',
    'appliance removal San Diego',
    'estate cleanout san diego',
    'commercial junk removal san diego',
    'free junk removal san diego'
  ],
  openGraph: {
    title: 'Junk Removal San Diego | Licensed Local Team • Same-Day Service',
    description: 'Professional San Diego junk removal. Same-day service, transparent pricing $100-$495, licensed & insured. Serving all county neighborhoods.',
    url: 'https://www.severinhauling.com/san-diego-junk-removal',
    siteName: 'Severin Hauling',
    images: [{
      url: 'https://www.severinhauling.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Junk Removal San Diego - Severin Hauling'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junk Removal San Diego | Licensed Local Team • Same-Day Service',
    description: 'Professional San Diego junk removal. Same-day service, transparent pricing $100-$495, licensed & insured.',
    images: ['https://www.severinhauling.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.severinhauling.com/san-diego-junk-removal',
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
  other: {
    'geo.region': 'US-CA',
  },
};

const sanDiegoFAQs = [
  {
    question: "How much does junk removal cost in San Diego?",
    answer: `San Diego junk removal prices typically range from $100 for a single item pickup to $495 for a full trailer load. Costs vary based on several factors:

• Volume: The amount of space your junk takes up in our trailer
• Access: Stairs, elevators, parking distance from your property
• Weight: Heavier materials like concrete cost more than furniture
• Material type: Some items require special handling or disposal

Our transparent pricing includes all labor, hauling, and proper eco-friendly disposal—no hidden fees ever. Call (619) 750-0114 for an accurate upfront quote based on your specific needs.`
  },
  {
    question: "Do you offer same-day junk removal in San Diego?",
    answer: "Yes! We provide same-day and next-day junk removal across all San Diego neighborhoods when you call before 2 PM. Our locally-based team serves coastal areas (La Jolla, Pacific Beach, Del Mar), central urban (Downtown, North Park, Hillcrest), East County (El Cajon, La Mesa, Santee), North County (Oceanside, Poway, Rancho Santa Fe), and South Bay (Chula Vista, National City). Same-day availability depends on our schedule, so contact us early for the fastest service."
  },
  {
    question: "Where does the junk go after pickup?",
    answer: "We prioritize eco-friendly disposal through recycling and donation whenever possible. Usable furniture and items in good condition go to local San Diego charities like the San Diego Rescue Mission and Habitat for Humanity ReStore. Metal, wood, electronics, and appliances are sent to licensed recycling facilities. Only non-recyclable waste goes to approved disposal sites. We handle everything in full compliance with San Diego County environmental regulations, so you can trust your junk is disposed of responsibly."
  },
  {
    question: "Is your company licensed and insured for San Diego County?",
    answer: "Yes—Severin Hauling is fully licensed and insured to operate throughout all of San Diego County. We carry comprehensive liability insurance to protect your property during removal and follow all local waste handling regulations. Our team is trained in safe lifting techniques, proper material handling, and San Diego County disposal compliance. You're working with legitimate, professional junk haulers who take responsibility seriously."
  },
  {
    question: "What are junk removal San Diego prices?",
    answer: "Junk removal San Diego prices start at $100 for single-item pickups and range up to $495 for full trailer loads. Our volume-based pricing is transparent and all-inclusive: 1/4 trailer ($249), 3/8 trailer ($319), 1/2 trailer ($349), 5/8 trailer ($366), 3/4 trailer ($429), 7/8 trailer ($462), and full load ($495). Every quote includes labor, hauling, disposal fees, and eco-friendly recycling—no hidden charges. Call (619) 750-0114 for a free, accurate quote based on your specific items and volume."
  },
  {
    question: "Does Severin offer free junk removal in San Diego?",
    answer: "We don't offer free junk removal service in San Diego. Professional junk removal requires trained crews, proper equipment, licensed disposal, insurance, and eco-friendly recycling—all of which have real costs. Our transparent pricing starts at $69 for small items and $100 for standard items, and includes all labor, hauling, and responsible disposal. Many San Diegans find our service costs less than DIY options when factoring in truck rental ($75-150), disposal fees ($50-200+), time, and injury risk. Some items with scrap value (like certain metals) may offset costs, but we're upfront about pricing from the start. Call (619) 750-0114 for an honest quote—no surprises, just professional service at fair prices."
  }
];

export default function SanDiegoJunkRemovalPage() {
  const serviceSchema = generateServiceSchema({
    name: "San Diego Junk Removal",
    description: "Professional junk removal serving all San Diego County. Same-day service available for furniture removal, appliance disposal, estate cleanouts, construction debris removal, and comprehensive junk hauling services.",
    url: "https://www.severinhauling.com/san-diego-junk-removal",
    serviceType: "Junk Removal Service",
    areaServed: "San Diego County, CA",
  });

  // LocalBusiness schema with comprehensive details
  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://www.severinhauling.com/san-diego-junk-removal#business",
    "name": "Severin Hauling - San Diego Junk Removal",
    "image": "https://www.severinhauling.com/og-image.jpg",
    "telephone": "+1-619-750-0114",
    "priceRange": "$69-$495",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Diego",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.7157,
      "longitude": -117.1611
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "San Diego",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 32.7157,
        "longitude": -117.1611
      },
      "geoRadius": "50000"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "aggregateRating": generateAggregateRatingSchema(),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Junk Removal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Furniture Disposal San Diego",
            "url": "https://www.severinhauling.com/furniture-disposal-san-diego"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Appliance Removal San Diego",
            "url": "https://www.severinhauling.com/appliance-removal-san-diego"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mattress Disposal San Diego",
            "url": "https://www.severinhauling.com/san-diego-mattress-disposal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Estate Cleanout San Diego",
            "url": "https://www.severinhauling.com/estate-cleanout-san-diego"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Junk Removal San Diego",
            "url": "https://www.severinhauling.com/commercial-junk-removal-san-diego"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Construction Debris Removal San Diego",
            "url": "https://www.severinhauling.com/construction-debris-removal-san-diego"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Same Day Junk Removal San Diego",
            "url": "https://www.severinhauling.com/same-day-junk-removal-san-diego"
          }
        }
      ]
    }
  };

  const faqSchema = generateFAQSchema(sanDiegoFAQs);

  const howToSchema = generateHowToSchema({
    cityName: "San Diego",
    pageUrl: "https://www.severinhauling.com/san-diego-junk-removal"
  });

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, localBusinessSchema, faqSchema, howToSchema]
  };

  const nearbyLocations = [
    { name: "La Jolla", slug: "junk-removal-la-jolla" },
    { name: "Pacific Beach", slug: "junk-removal-pacific-beach" },
    { name: "Chula Vista", slug: "junk-removal-chula-vista" },
    { name: "El Cajon", slug: "junk-removal-el-cajon" },
  ];

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <Header />
      <main>
        <OptimizedGradientHero
          title="Professional Junk Removal San Diego Trusts"
          subtitle="⭐⭐⭐⭐⭐ 5.0 Rating • Licensed & Insured • Same-Day Service Available"
          description="✓ Transparent Pricing $100-$495 ✓ All San Diego County ✓ Eco-Friendly Disposal"
        />

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">

              {/* Main Content - Left Column */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Junk Removal San Diego Services</h2>

              {/* San Diego Junk Removal Image - Integrated */}
              <div className="float-right ml-6 mb-6 w-80 hidden md:block">
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/optimized/couch3.jpg"
                    alt="Professional junk removal San Diego - furniture and household item disposal service"
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-4">
                Need <strong>junk removal in San Diego</strong>? Severin Hauling delivers professional hauling services throughout San Diego County. Booking junk removal with us is easy and stress free: call for a free no-obligation estimate, and our locally owned team shows up same-day.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From single-item pickups to complete property cleanouts, we handle every job with the same commitment to quality, efficiency, and customer satisfaction. No hidden fees, no surprises—just honest service from licensed and insured professionals who know San Diego neighborhoods.
              </p>

              <p className="text-lg text-gray-700 mb-4">
                We've built our reputation on reliability and local expertise. Whether you're clearing a garage in <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a>, handling an <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanout</a> in <a href="/junk-removal-rancho-santa-fe" className="text-blue-600 hover:underline">Rancho Santa Fe</a>, or managing a renovation in <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a>, our team brings the experience and equipment to get the job done right.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We're not just haulers. We're your partners in helping you reclaim your space through responsible disposal that supports San Diego's coastal community.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <p className="text-gray-800 font-semibold mb-2">📞 Ready to Clear Your Space?</p>
                <p className="text-gray-700">
                  Call <a href="tel:6197500114" className="text-blue-600 font-bold hover:underline">(619) 750-0114</a> before 2 PM for same-day <strong>junk removal San Diego</strong> service. Free quotes, transparent pricing, and professional service guaranteed.
                </p>
              </div>

              <div className="clear-both"></div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Why Choose Our San Diego Junk Removal Service</h3>

              <p className="text-lg text-gray-700 mb-4">
                The difference between good service and great service comes down to details. We focus on what matters most to San Diego residents and businesses: speed, transparency, and professionalism. Here's what sets our <strong>San Diego junk removal</strong> service apart from national chains and other local haulers.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span><strong>Same-Day Service Throughout San Diego County:</strong> We understand that timing matters. Whether you're facing an HOA deadline, preparing for a quick property sale, or simply need your space back today, our same-day service responds to your urgency. Call before 2 PM and we'll typically arrive the same day across all San Diego County neighborhoods. From coastal <a href="/junk-removal-pacific-beach" className="text-blue-600 hover:underline">Pacific Beach</a> to inland <a href="/junk-removal-poway" className="text-blue-600 hover:underline">Poway</a>, we're positioned to reach you quickly.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span><strong>Transparent Pricing, No Hidden Fees:</strong> Our pricing is straightforward: $100 to $495 based on volume, not time. The quote we give you is the price you pay. No hourly rates that balloon if traffic is bad. No fuel surcharges. No surprise fees for stairs or parking. We assess your items, provide an honest quote, and stick to it. This transparency has made us the trusted choice for <strong>San Diego junk hauling</strong> that residents recommend to friends and family.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span><strong>Licensed, Insured & Locally Owned:</strong> We're fully licensed and insured to operate throughout San Diego County, with comprehensive liability coverage protecting your property during every job. Unlike national franchises that route calls to different contractors, we're a local family business invested in our reputation. When you call Severin Hauling, you're working with San Diego neighbors who take pride in serving our community properly.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span><strong>Eco-Friendly Disposal & Recycling:</strong> Everything doesn't belong in the landfill. We prioritize donation and recycling whenever possible, partnering with local San Diego charities, recycling facilities, and responsible disposal sites. Usable furniture goes to families in need. Metals get recycled. Electronics are properly processed. Only true waste reaches the landfill. This commitment to environmental responsibility reflects San Diego's values and protects our coastal community.</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Complete Range of Junk Removal Services</h3>

              <p className="text-lg text-gray-700 mb-4">
                Our <strong>junk removal San Diego</strong> service covers every type of hauling need across residential, commercial, and specialty situations. We've developed expertise in handling unique challenges that come with San Diego's diverse properties—from beachfront condos with limited access to hillside estates with steep driveways to downtown high-rises requiring elevator coordination.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-bold mb-4 text-gray-900">Residential Junk Removal</h4>
                <p className="text-gray-700 mb-4">
                  Home cleanouts form the core of what we do. Whether you're downsizing, moving, decluttering, or handling a life transition, we make the process simple. Our team arrives on schedule, handles all the heavy lifting, and leaves your property clean. No need to sort, organize, or drag items to the curb—just point to what goes, and we take care of everything else.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline"><strong>Furniture removal</strong></a> including sofas, beds, tables, chairs, dressers</li>
                    <li><a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline"><strong>Appliance disposal</strong></a> for refrigerators, washers, dryers, stoves</li>
                    <li><a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline"><strong>Mattress & box spring pickup</strong></a> with recycling when possible</li>
                    <li><strong>Electronics removal</strong> including TVs, computers, stereos, printers</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><a href="/cleanout-services-san-diego" className="text-blue-600 hover:underline"><strong>Garage & basement cleanouts</strong></a> clearing accumulated storage</li>
                    <li><strong>Yard waste removal</strong> for landscaping debris, tree trimmings</li>
                    <li><a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline"><strong>Hot tub & spa removal</strong></a> with proper dismantling</li>
                    <li><strong>General household junk</strong> from any room or storage space</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-bold mb-4 text-gray-900">Commercial Junk Removal</h4>
                <p className="text-gray-700 mb-4">
                  Businesses throughout San Diego County rely on our <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">commercial junk removal</a> services for office cleanouts, retail space clearing, and ongoing waste management. We work around your business hours, coordinate with building management, and maintain the professionalism your workplace demands. From Sorrento Valley tech offices to downtown corporate spaces to Otay Ranch retail locations, we understand commercial requirements.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Office furniture removal</strong> including desks, cubicles, filing cabinets, conference tables</li>
                  <li><strong>Electronics & IT equipment disposal</strong> with secure data destruction options</li>
                  <li><strong>Retail fixtures & displays</strong> during store remodels or closures</li>
                  <li><strong>Warehouse cleanouts</strong> including pallets, equipment, excess inventory</li>
                  <li><strong>Restaurant equipment removal</strong> for commercial kitchens and dining areas</li>
                  <li><a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline"><strong>Construction & renovation debris</strong></a> from remodeling projects</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h4 className="text-xl font-bold mb-4 text-gray-900">Specialty Removal Services</h4>
                <p className="text-gray-700 mb-4">
                  Some situations require more than standard hauling. We provide specialized services for challenging cleanouts that demand sensitivity, expertise, or special handling. Our team has experience with complex scenarios and brings the right approach to each unique situation.
                </p>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2"><a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">Estate Cleanouts</a></h5>
                    <p className="text-gray-700">
                      Handling an estate after a loved one passes requires both efficiency and compassion. We work respectfully with family members, coordinate with estate executors, provide documentation for probate, and ensure valuables are set aside while clearing unwanted items. Our team understands this is more than just a cleanout—it's helping families through a difficult transition.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2"><a href="/hoarding-cleanup-san-diego" className="text-blue-600 hover:underline">Hoarding Cleanup</a></h5>
                    <p className="text-gray-700">
                      Hoarding situations require special care and understanding. Our team approaches these cleanouts with compassion and discretion, working at a pace that respects the individual's feelings while making real progress. We coordinate with family members and mental health professionals when appropriate, ensuring the process supports recovery rather than causing additional stress.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2"><a href="/foreclosure-eviction-cleanout-san-diego" className="text-blue-600 hover:underline">Foreclosure & Eviction Cleanouts</a></h5>
                    <p className="text-gray-700">
                      Property managers and real estate investors throughout San Diego County count on our fast turnaround for foreclosure and eviction cleanouts. We clear properties quickly and completely, handle abandoned belongings according to legal requirements, and prepare spaces for new tenants or sale. Our service helps you minimize vacancy time and get properties back on the market fast.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2"><a href="/emergency-junk-removal-san-diego" className="text-blue-600 hover:underline">Emergency Junk Removal</a></h5>
                    <p className="text-gray-700">
                      Sometimes junk removal can't wait. Water damage, fire damage, sudden moves, or urgent deadlines require immediate response. Our emergency service provides rapid junk removal when you need it most, with same-day availability throughout San Diego County. We understand that emergencies don't follow regular business hours, and we're here to help.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sticky CTA */}
              <div className="sticky top-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg shadow-lg mb-8 z-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">Need Junk Removal in San Diego Today?</p>
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


              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Why Not Just Haul It to the Dump Yourself?</h3>

              <p className="text-lg text-gray-700 mb-4">
                Many San Diego residents consider hauling junk to the Miramar Landfill themselves to save money. While some search for "<strong>free junk removal San Diego</strong>" options, the reality is that DIY disposal has hidden costs that add up quickly—and often exceed professional <strong>San Diego junk hauling</strong> service pricing. Here's what you're actually facing when you choose the DIY route:
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6 border-l-4 border-red-500">
                <h4 className="text-lg font-bold text-red-900 mb-3">The Hidden Costs of DIY Junk Removal</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>❌ Truck or trailer rental:</strong> $75-$150+ per day from U-Haul or Home Depot, plus fuel costs</li>
                  <li><strong>❌ Your time and labor:</strong> Loading heavy items yourself risks injury and takes hours</li>
                  <li><strong>❌ Miramar Landfill drive:</strong> Located at 5180 Convoy St, often 30-60 minutes each way depending on your neighborhood</li>
                  <li><strong>❌ Long wait times:</strong> Weekend lines at Miramar regularly exceed 1-2 hours during peak times</li>
                  <li><strong>❌ Disposal fees:</strong> $50-$200+ depending on weight and material type</li>
                  <li><strong>❌ Unloading everything:</strong> You load, drive, wait, unload, and return the rental—all yourself</li>
                  <li><strong>❌ Multiple trips:</strong> If your load exceeds rental capacity, you're making several trips</li>
                </ul>
                <p className="text-gray-700 mt-4 font-semibold">
                  Total DIY cost: Often $200-$400+ when you factor in rental fees, fuel, disposal costs, and your valuable time. That's comparable to professional service—but with all the work falling on you. True <strong>free junk removal San Diego</strong> services don't exist without strings attached or hidden costs.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-8 border-l-4 border-green-500">
                <h4 className="text-lg font-bold text-green-900 mb-3">✓ Professional Junk Removal San Diego Service</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>✓ We arrive on YOUR schedule</strong> at your home or business</li>
                  <li><strong>✓ We do ALL the heavy lifting</strong> so you avoid injury risk</li>
                  <li><strong>✓ We load, haul, and dispose</strong> of everything—start to finish</li>
                  <li><strong>✓ Transparent flat-rate pricing</strong> with no hidden fees or surprises</li>
                  <li><strong>✓ Eco-friendly recycling & donation</strong> whenever possible, not just landfill dumping</li>
                  <li><strong>✓ Licensed, insured professionals</strong> handling everything safely and properly</li>
                  <li><strong>✓ Same-day service available</strong> throughout San Diego County</li>
                </ul>
                <p className="text-gray-700 mt-4 font-semibold">
                  For $100-$495 depending on volume, you save time, avoid physical strain, eliminate rental hassles, and often spend similar or less than DIY costs. Call <a href="tel:6197500114" className="text-green-700 hover:underline">(619) 750-0114</a> and skip the dump trip entirely.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Serving All San Diego County Neighborhoods</h3>

              <p className="text-lg text-gray-700 mb-6">
                Our <strong>San Diego junk removal</strong> service covers every neighborhood and community throughout San Diego County. From coastal areas with beach access challenges to hillside properties with steep terrain, from downtown high-rises requiring elevator coordination to suburban homes with ample parking, we've handled it all. Our team understands the unique characteristics of each San Diego neighborhood and adapts our approach accordingly.
              </p>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
                <h4 className="text-xl font-bold mb-4 text-blue-900">San Diego Neighborhoods We Serve</h4>

                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h5 className="font-bold text-blue-700 mb-3 text-lg">Coastal Communities</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a> – Luxury home cleanouts</li>
                      <li>• <a href="/junk-removal-pacific-beach" className="text-blue-600 hover:underline">Pacific Beach</a> – Apartment & condo junk removal</li>
                      <li>• <a href="/junk-removal-del-mar" className="text-blue-600 hover:underline">Del Mar</a> – Beachfront property service</li>
                      <li>• <a href="/junk-removal-point-loma" className="text-blue-600 hover:underline">Point Loma</a> – Hillside estate cleanouts</li>
                      <li>• Ocean Beach – Beach community hauling</li>
                      <li>• Mission Beach – Vacation rental cleanouts</li>
                      <li>• Coronado – Island access service</li>
                      <li>• Sunset Cliffs – Coastal property removal</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-blue-700 mb-3 text-lg">Central San Diego</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <a href="/junk-removal-north-park" className="text-blue-600 hover:underline">North Park</a> – Urban apartment cleanouts</li>
                      <li>• <a href="/junk-removal-hillcrest" className="text-blue-600 hover:underline">Hillcrest</a> – Multi-story building service</li>
                      <li>• Downtown / Gaslamp – High-rise junk removal</li>
                      <li>• Mission Valley – Commercial & residential</li>
                      <li>• University Heights – Historic home service</li>
                      <li>• Normal Heights – Family home cleanouts</li>
                      <li>• South Park – Neighborhood hauling</li>
                      <li>• Golden Hill – Property cleanouts</li>
                      <li>• Bankers Hill – Downtown edge service</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-blue-700 mb-3 text-lg">North County</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <a href="/junk-removal-oceanside" className="text-blue-600 hover:underline">Oceanside</a> – Coastal North County</li>
                      <li>• Carlsbad – Beach city hauling</li>
                      <li>• <a href="/junk-removal-escondido" className="text-blue-600 hover:underline">Escondido</a> – Inland community service</li>
                      <li>• <a href="/junk-removal-vista" className="text-blue-600 hover:underline">Vista</a> – North County residential</li>
                      <li>• <a href="/junk-removal-poway" className="text-blue-600 hover:underline">Poway</a> – Suburban family homes</li>
                      <li>• <a href="/junk-removal-rancho-santa-fe" className="text-blue-600 hover:underline">Rancho Santa Fe</a> – Estate properties</li>
                      <li>• San Marcos – College town service</li>
                      <li>• Encinitas – Coastal community</li>
                      <li>• <a href="/junk-removal-carmel-valley" className="text-blue-600 hover:underline">Carmel Valley</a> – Master-planned neighborhoods</li>
                      <li>• Rancho Bernardo – HOA community service</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-blue-700 mb-3 text-lg">East County</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a> – Valley community hauling</li>
                      <li>• <a href="/junk-removal-la-mesa" className="text-blue-600 hover:underline">La Mesa</a> – Hillside property service</li>
                      <li>• <a href="/junk-removal-santee" className="text-blue-600 hover:underline">Santee</a> – Family neighborhood cleanouts</li>
                      <li>• <a href="/junk-removal-lakeside" className="text-blue-600 hover:underline">Lakeside</a> – Rural East County</li>
                      <li>• <a href="/junk-removal-lemon-grove" className="text-blue-600 hover:underline">Lemon Grove</a> – Established neighborhoods</li>
                      <li>• <a href="/junk-removal-spring-valley" className="text-blue-600 hover:underline">Spring Valley</a> – Residential hauling</li>
                      <li>• Alpine – Mountain community service</li>
                      <li>• Jamul – Rural property cleanouts</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-blue-700 mb-3 text-lg">South Bay</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a> – South County hub</li>
                      <li>• National City – Multi-family service</li>
                      <li>• Imperial Beach – Border community hauling</li>
                      <li>• Bonita – Suburban cleanouts</li>
                      <li>• Eastlake – Master-planned neighborhoods</li>
                      <li>• Otay Ranch – New community service</li>
                      <li>• San Ysidro – Border area properties</li>
                      <li>• Paradise Hills – Residential hauling</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-blue-700 mb-3 text-lg">North Central</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <a href="/junk-removal-mira-mesa" className="text-blue-600 hover:underline">Mira Mesa</a> – Suburban neighborhoods</li>
                      <li>• <a href="/junk-removal-kearny-mesa" className="text-blue-600 hover:underline">Kearny Mesa</a> – Commercial district</li>
                      <li>• <a href="/junk-removal-clairemont" className="text-blue-600 hover:underline">Clairemont</a> – Established community</li>
                      <li>• Scripps Ranch – Planned community</li>
                      <li>• Rancho Peñasquitos – Family neighborhoods</li>
                      <li>• Sabre Springs – Newer developments</li>
                      <li>• Linda Vista – Diverse neighborhood</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-gray-700 mb-3">
                    <strong>Don't see your specific neighborhood listed?</strong> We serve all of San Diego County. Call us to confirm service in your area.
                  </p>
                  <a href="tel:6197500114" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors">
                    📞 Call (619) 750-0114 for Your Area
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Understanding San Diego's Disposal & Recycling</h3>

              <p className="text-lg text-gray-700 mb-4">
                Where your junk ends up matters—both legally and environmentally. All <strong>junk removal San Diego</strong> companies must comply with California and San Diego County waste regulations, but not all haulers prioritize eco-friendly disposal. We take our environmental responsibility seriously, partnering with legitimate recycling facilities, donation centers, and licensed disposal sites throughout the county.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Here's how we handle different materials: Usable furniture in good condition goes to local charities like the San Diego Rescue Mission, Father Joe's Villages, and Habitat for Humanity ReStore, where families in need benefit directly. Metal items from appliances to scrap metal get separated and sent to recycling facilities. Electronics require special handling through certified e-waste processors who prevent toxic materials from entering landfills. Wood gets recycled into mulch or biomass fuel when possible. Mattresses go to specialized recycling facilities that separate foam, metal springs, and fabric. Construction debris gets sorted, with recyclable materials diverted from landfills. Only items that truly cannot be recycled or donated reach the landfill—and we maintain complete documentation of where everything goes.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h4 className="font-bold text-green-900 mb-3">Our Environmental Commitment</h4>
                <p className="text-gray-700 mb-3">
                  We divert 60-70% of collected junk from landfills through recycling and donation. This commitment reflects San Diego's environmental values and protects our coastal community, beaches, and natural spaces. When you choose our service, your space is left clutter free—and you're supporting responsible waste management that benefits our entire region.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Common Situations Requiring Junk Removal</h3>

              <p className="text-lg text-gray-700 mb-6">
                People call us for <strong>San Diego junk removal</strong> service during life transitions and property changes. Understanding when professional hauling makes sense helps you recognize the value we provide. Here are the most common situations where our service proves invaluable:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500">
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Moving & Downsizing</h4>
                  <p className="text-gray-700">
                    San Diego's high housing costs make downsizing common. Whether you're moving to a smaller condo, relocating out of state, or simply reducing possessions, we help you purge unwanted items before the move. This reduces moving truck costs, simplifies the process, and lets you start fresh in your new space. Our <a href="/cleanout-services-san-diego" className="text-blue-600 hover:underline">cleanout services</a> coordinate with your moving timeline, clearing items on your schedule.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-green-500">
                  <h4 className="text-xl font-bold mb-3 text-green-600">Property Sale Preparation</h4>
                  <p className="text-gray-700">
                    Real estate agents throughout San Diego recommend us to their clients for pre-sale cleanouts. Empty, decluttered homes show better, photograph better, and sell faster. We clear unwanted furniture, old appliances, garage accumulation, and yard waste—creating the clean slate that attracts buyers and maximizes sale price. Quick turnaround helps you list properties on schedule.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-purple-500">
                  <h4 className="text-xl font-bold mb-3 text-purple-600">Renovation & Remodeling</h4>
                  <p className="text-gray-700">
                    Home renovations generate substantial debris. Old cabinets, flooring, drywall, fixtures, and demolished materials need removal before new installation begins. Our <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">construction debris removal</a> keeps your project site clean and safe, allowing contractors to work efficiently. We coordinate pickups around your construction schedule, hauling away demolition debris promptly.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-orange-500">
                  <h4 className="text-xl font-bold mb-3 text-orange-600">Estate Settlement</h4>
                  <p className="text-gray-700">
                    After losing a loved one, families face the overwhelming task of clearing their property. Our <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanout service</a> provides compassionate assistance during this difficult time. We work respectfully with families, separate valuables from disposal items, provide documentation for probate, and coordinate with estate sales or auctions. The process moves at your pace with the sensitivity the situation demands.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-red-500">
                  <h4 className="text-xl font-bold mb-3 text-red-600">HOA Compliance</h4>
                  <p className="text-gray-700">
                    San Diego HOAs enforce strict property standards. Notices about garage clutter, yard accumulation, or exterior storage violations require quick action. Our <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">same-day junk removal</a> helps you meet HOA deadlines and avoid fines. We've helped countless homeowners resolve violations quickly and affordably throughout San Diego's many HOA-governed communities.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-indigo-500">
                  <h4 className="text-xl font-bold mb-3 text-indigo-600">Rental Property Turnovers</h4>
                  <p className="text-gray-700">
                    Property managers across San Diego County rely on our service for tenant move-out cleanouts. Abandoned furniture, appliances, garage items, and general debris need immediate removal to minimize vacancy time. Our fast turnaround, clear documentation, and reliable service help you get rental properties cleaned, repaired, and back on the market quickly. We understand the rental business and deliver accordingly.
                  </p>
                </div>
              </div>

              <div className="text-center bg-blue-600 text-white p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">Get Your Free Junk Removal Quote Today</h3>
                <p className="text-lg mb-6">
                  Professional <strong>junk removal San Diego</strong> service with transparent pricing, same-day availability, and complete peace of mind
                </p>
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block"
                >
                  📞 Call Now: (619) 750-0114
                </a>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">What Makes Professional San Diego Junk Hauling Worth It</h3>

              <p className="text-lg text-gray-700 mb-4">
                The value of professional <strong>San Diego junk hauling</strong> extends beyond just removal. It's about saving time, avoiding injury, ensuring proper disposal, and reclaiming your space without the stress of doing it yourself. Consider what you're actually getting:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg mb-3 text-blue-600">Time Savings</h4>
                  <p className="text-gray-700">
                    Your time has value. Hauling junk yourself requires renting equipment, loading items, driving to disposal sites, waiting in lines, unloading, and returning rentals—often consuming an entire day or weekend. Professional service completes the job in a fraction of the time, letting you focus on more important priorities. For busy professionals, families, and business owners, this time savings alone justifies the service.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg mb-3 text-green-600">Injury Prevention</h4>
                  <p className="text-gray-700">
                    Heavy lifting causes thousands of injuries annually. Furniture, appliances, and loaded boxes all pose injury risks—especially when navigating stairs, tight spaces, or uneven terrain. Our trained team uses proper techniques, appropriate equipment, and safety protocols to move heavy items safely. The medical costs and recovery time from one back injury far exceed professional junk removal costs.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg mb-3 text-purple-600">Proper Disposal</h4>
                  <p className="text-gray-700">
                    Many items require special handling beyond standard landfill disposal. Appliances with refrigerants, electronics with toxic components, mattresses that can be recycled, and usable items suitable for donation all need appropriate processing. We know where everything goes, maintain the necessary relationships with facilities, and ensure legal, environmentally responsible disposal of all materials.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg mb-3 text-orange-600">Complete Service</h4>
                  <p className="text-gray-700">
                    From the moment we arrive until we sweep up afterward, we handle everything. You don't sort, organize, or prepare anything—just point to what goes, and we take care of it. This complete, hassle-free service eliminates the mental burden of planning, organizing, and executing a cleanout. For estate situations, business cleanouts, or overwhelming hoarding cases, this comprehensive approach proves invaluable.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Comparing Junk Removal Options in San Diego</h3>

              <p className="text-lg text-gray-700 mb-6">
                San Diego residents have several options for junk disposal. Understanding how professional <strong>junk removal San Diego</strong> service compares to alternatives helps you make the right choice for your situation. Here's an honest comparison:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-700">Feature</th>
                      <th className="px-6 py-4 text-center font-semibold text-green-700">Severin Hauling</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-700">National Franchises</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-700">DIY Miramar Landfill</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Response Time</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">Same-Day Available</td>
                      <td className="px-6 py-4 text-center">2-5 Days Typical</td>
                      <td className="px-6 py-4 text-center">Anytime (Your Schedule)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Pricing Model</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">Flat-Rate Volume</td>
                      <td className="px-6 py-4 text-center">Hourly + Fees</td>
                      <td className="px-6 py-4 text-center">Rental + Per-Ton</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Typical Cost</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">$100-$495</td>
                      <td className="px-6 py-4 text-center">$150-$600+</td>
                      <td className="px-6 py-4 text-center">$125-$400+</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Labor</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">We Do Everything</td>
                      <td className="px-6 py-4 text-center">They Do Everything</td>
                      <td className="px-6 py-4 text-center">You Do Everything</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Recycling</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">Priority Focus</td>
                      <td className="px-6 py-4 text-center">Varies by Franchise</td>
                      <td className="px-6 py-4 text-center">Landfill Only</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Local Knowledge</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">San Diego Based</td>
                      <td className="px-6 py-4 text-center">National Corporate</td>
                      <td className="px-6 py-4 text-center">You Navigate</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Hidden Fees</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">None Ever</td>
                      <td className="px-6 py-4 text-center">Common (Fuel, Stairs)</td>
                      <td className="px-6 py-4 text-center">Weight Surprises</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-center bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Schedule San Diego Junk Removal Service</h3>
                <p className="text-lg mb-6">
                  Transparent pricing • Same-day availability • Licensed & insured • Eco-friendly disposal
                </p>
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                >
                  📞 Call (619) 750-0114 for Free Quote
                </a>
                <div className="bg-blue-800 rounded-lg p-4">
                  <p className="text-yellow-300 font-semibold mb-2">💰 All-Inclusive Pricing • No Hidden Fees 💰</p>
                  <div className="text-sm">
                    <strong>$100-$495 Standard Pricing</strong> • <strong>Same-Day Service Available</strong><br/>
                    <strong>Licensed & Insured</strong> • <strong>Serving All San Diego County</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Right Column */}
        <div className="lg:col-span-1">
          <LocationSidebarCTA
            locationName="San Diego"
            nearbyLocations={nearbyLocations}
          />
        </div>

      </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="San Diego"
          contextParagraph="Junk removal throughout San Diego County—from downtown high-rises to coastal communities to East County neighborhoods—all use the same transparent pricing. No hidden fees, same-day service available. Call for a free, no-obligation estimate."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="San Diego" />

      {/* Related Services Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">Specialized Junk Removal Services</h3>
            <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
              We offer comprehensive removal services throughout San Diego County. Explore our specialized services below:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/furniture-disposal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-blue-500">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">🪑 Furniture Disposal</h4>
                <p className="text-gray-600">Complete furniture removal with eco-friendly recycling</p>
              </a>
              <a href="/appliance-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-green-500">
                <h4 className="font-semibold text-lg mb-2 text-green-600">📦 Appliance Removal</h4>
                <p className="text-gray-600">Safe disposal of refrigerators, washers, and appliances</p>
              </a>
              <a href="/san-diego-mattress-disposal" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-purple-500">
                <h4 className="font-semibold text-lg mb-2 text-purple-600">🛏️ Mattress Disposal</h4>
                <p className="text-gray-600">Eco-friendly mattress recycling and removal</p>
              </a>
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-orange-500">
                <h4 className="font-semibold text-lg mb-2 text-orange-600">🏠 Estate Cleanouts</h4>
                <p className="text-gray-600">Compassionate estate and probate property clearing</p>
              </a>
              <a href="/commercial-junk-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-red-500">
                <h4 className="font-semibold text-lg mb-2 text-red-600">🏢 Commercial Removal</h4>
                <p className="text-gray-600">Business and office cleanout services</p>
              </a>
              <a href="/construction-debris-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-indigo-500">
                <h4 className="font-semibold text-lg mb-2 text-indigo-600">🔨 Construction Debris</h4>
                <p className="text-gray-600">Renovation and construction waste removal</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
          title="Frequently Asked Questions - Junk Removal San Diego"
          description="Get answers to common questions about our <strong>junk removal San Diego</strong> services, pricing, and same-day availability."
          faqs={sanDiegoFAQs}
          ctaTitle="Still Have Questions About San Diego Junk Removal?"
          ctaDescription="Our experienced <strong>San Diego junk removal</strong> team is ready to answer your questions, provide detailed quotes, or schedule your pickup today."
          includeSchema={false}
        />

      {/* Service Pages Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Complete San Diego Junk Removal Solutions</h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <a href="/couch-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Couch Removal</h4>
              <p className="text-gray-600 text-sm">Sofa and sectional disposal service</p>
            </a>
            <a href="/hot-tub-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Hot Tub Removal</h4>
              <p className="text-gray-600 text-sm">Professional spa removal and disposal</p>
            </a>
            <a href="/hoarding-cleanup-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Hoarding Cleanup</h4>
              <p className="text-gray-600 text-sm">Compassionate hoarding situation service</p>
            </a>
            <a href="/foreclosure-eviction-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Foreclosure Cleanout</h4>
              <p className="text-gray-600 text-sm">Property manager cleanout services</p>
            </a>
            <a href="/emergency-junk-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Emergency Service</h4>
              <p className="text-gray-600 text-sm">Urgent and emergency junk removal</p>
            </a>
            <a href="/piano-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Piano Removal</h4>
              <p className="text-gray-600 text-sm">Specialized piano removal service</p>
            </a>
            <a href="/same-day-junk-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Same-Day Service</h4>
              <p className="text-gray-600 text-sm">Fast same-day pickup available</p>
            </a>
            <a href="/cleanout-services-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Property Cleanouts</h4>
              <p className="text-gray-600 text-sm">Complete property clearing services</p>
            </a>
            <a href="/junk-removal-cost-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Pricing Information</h4>
              <p className="text-gray-600 text-sm">Transparent pricing and cost details</p>
            </a>
            <a href="/san-diego-dump-fees" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Dump Fees Guide</h4>
              <p className="text-gray-600 text-sm">Understanding disposal costs</p>
            </a>
            <a href="/scrap-metal-removal" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Scrap Metal Removal</h4>
              <p className="text-gray-600 text-sm">Metal recycling and disposal</p>
            </a>
            <a href="/services" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">All Services</h4>
              <p className="text-gray-600 text-sm">View our complete service list</p>
            </a>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-700 mb-4">
              Looking for a specific service? We handle all types of <strong>junk removal San Diego</strong> projects.
            </p>
            <a
              href="tel:6197500114"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors inline-block"
            >
              📞 Call (619) 750-0114 for Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* Neighborhood Pages */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Local San Diego Neighborhood Service</h3>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            We provide <strong>junk removal San Diego</strong> service in every neighborhood throughout the county. Select your area below for local information:
          </p>
          <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
            <a href="/junk-removal-la-jolla" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">La Jolla</span>
            </a>
            <a href="/junk-removal-del-mar" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Del Mar</span>
            </a>
            <a href="/junk-removal-pacific-beach" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Pacific Beach</span>
            </a>
            <a href="/junk-removal-point-loma" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Point Loma</span>
            </a>
            <a href="/junk-removal-north-park" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">North Park</span>
            </a>
            <a href="/junk-removal-hillcrest" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Hillcrest</span>
            </a>
            <a href="/junk-removal-kearny-mesa" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Kearny Mesa</span>
            </a>
            <a href="/junk-removal-clairemont" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Clairemont</span>
            </a>
            <a href="/junk-removal-el-cajon" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">El Cajon</span>
            </a>
            <a href="/junk-removal-la-mesa" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">La Mesa</span>
            </a>
            <a href="/junk-removal-chula-vista" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Chula Vista</span>
            </a>
            <a href="/junk-removal-oceanside" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Oceanside</span>
            </a>
            <a href="/junk-removal-poway" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Poway</span>
            </a>
            <a href="/junk-removal-rancho-santa-fe" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Rancho Santa Fe</span>
            </a>
            <a href="/junk-removal-vista" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Vista</span>
            </a>
            <a href="/junk-removal-santee" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Santee</span>
            </a>
            <a href="/junk-removal-lakeside" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Lakeside</span>
            </a>
            <a href="/junk-removal-spring-valley" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Spring Valley</span>
            </a>
            <a href="/junk-removal-lemon-grove" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Lemon Grove</span>
            </a>
            <a href="/junk-removal-carmel-valley" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Carmel Valley</span>
            </a>
            <a href="/junk-removal-mira-mesa" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Mira Mesa</span>
            </a>
            <a href="/junk-removal-escondido" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Escondido</span>
            </a>
          </div>
          <p className="text-center mt-8">
            <span className="text-gray-600">Don't see your neighborhood? </span>
            <a href="tel:+16197500114" className="text-blue-500 font-bold hover:underline">
              Call (619) 750-0114 for service availability
            </a>
          </p>
          <div className="text-center mt-6">
            <a href="/areas-we-serve" className="text-blue-600 font-semibold hover:underline text-lg">
              View All San Diego Service Areas →
            </a>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
