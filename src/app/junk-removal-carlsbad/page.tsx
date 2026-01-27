import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/SchemaMarkup";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import { generateBreadcrumbSchema } from "@/lib/schema";
import OptimizedGradientHero from "@/components/OptimizedGradientHero";

export const metadata: Metadata = {
  title: "Junk Removal Carlsbad | Same-Day Service | (619) 750-0114",
  description: "Professional junk removal Carlsbad services for homes and businesses. Expert junk removal Carlsbad CA team serving La Costa, Aviara, Carlsbad Village. Same-day hauling, licensed & insured.",
  keywords: [
    "junk removal carlsbad",
    "junk removal carlsbad ca",
    "carlsbad junk removal",
    "same day junk removal carlsbad"
  ],
  openGraph: {
    title: "Junk Removal Carlsbad | Same-Day Pickup & Hauling Service",
    description: "Professional junk removal Carlsbad services for homes and businesses. Expert junk removal Carlsbad CA team. Same-day service, licensed & insured.",
    url: "https://severincleaners.com/junk-removal-carlsbad",
    siteName: "Severin Cleaners",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://severincleaners.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Junk Removal Carlsbad - Severin Cleaners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junk Removal Carlsbad | Same-Day Pickup & Hauling Service",
    description: "Professional junk removal Carlsbad services for homes and businesses. Expert junk removal Carlsbad CA team. Same-day service, licensed & insured.",
    images: ["https://severincleaners.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://severincleaners.com/junk-removal-carlsbad",
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
    'geo.placename': 'Carlsbad',
    'geo.position': '33.1581;-117.3506',
    'ICBM': '33.1581, -117.3506',
  },
};

const carlsbadFAQs = [
    {
      question: "How much does junk removal Carlsbad cost?",
      answer: "Our junk removal Carlsbad CA pricing is transparent and upfront with no hidden fees. Single item pickup starts at $100, perfect for removing one couch or appliance. Quarter-load service costs $249, ideal for small cleanouts like a closet or bathroom. Half-load runs $349 for garage corners or bedroom furniture. Three-quarter load is $429 for larger projects, and full-load service tops out at $495 for complete garage, estate, or commercial cleanouts. All prices include labor, hauling, disposal fees, and cleanup. Properties in La Costa, Aviara, Carlsbad Village, or Bressi Ranch all receive the same transparent pricing—no surcharges for coastal access or hillside properties. We provide free estimates over the phone and confirm final pricing on-site before starting work, ensuring you know exactly what you'll pay."
    },
    {
      question: "Do you offer same-day service in Carlsbad?",
      answer: "Yes, we provide same-day junk removal Carlsbad service when you call before noon. Our local North County coastal team can often arrive within 2-4 hours for urgent situations throughout the 92008, 92009, 92010, and 92011 zip codes. Same-day service is especially valuable for time-sensitive needs like vacation rental turnovers between guests, real estate closing deadlines for luxury home sales, resort property cleanouts requiring immediate attention, or emergency cleanouts after unexpected events. We coordinate scheduling around Carlsbad's traffic patterns—avoiding El Camino Real congestion during peak tourist season and rush hours—to ensure reliable arrival times. Even during busy summer months when LEGOLAND visitors increase traffic, or during the Flower Fields season (March-May), our expanded crew capacity keeps same-day appointments available. Whether you're in coastal Carlsbad Village, resort-area Aviara, or inland Bressi Ranch, same-day junk hauling helps you meet deadlines without delay."
    },
    {
      question: "What areas of Carlsbad do you serve?",
      answer: "We provide junk removal throughout all of Carlsbad and surrounding North County coastal areas. Our service covers Carlsbad Village historic downtown with its coastal properties and beach cottages, the luxury resort communities of La Costa and Aviara with their golf course estates and high-end vacation rentals, Bressi Ranch planned community with mixed-use residential and commercial properties, Calavera Hills hillside neighborhoods with challenging access roads, South Carlsbad's high-tech business corridor along Faraday Avenue, coastal properties near Carlsbad State Beach and South Carlsbad State Beach requiring specialized access, and newer developments near the eastern boundary. We regularly serve all four Carlsbad zip codes: 92008 (coastal Village and beach areas), 92009 (inland Bressi Ranch and eastern neighborhoods), 92010 (La Costa and Aviara resort areas), and 92011 (southern Carlsbad and tech corridor). Our trucks navigate everything from narrow coastal village streets to long gated resort driveways on large estates. We also serve nearby Oceanside, Vista, Encinitas, and San Marcos with the same reliable service Carlsbad residents expect."
    },
    {
      question: "Do you serve vacation rentals and resort properties in Carlsbad?",
      answer: "Absolutely. We specialize in vacation rental and resort property service throughout Carlsbad's thriving hospitality market. Coastal vacation rentals near the beaches require fast turnover between guest bookings—we provide same-day junk removal for furniture replacement, damaged item disposal, and guest-left belongings requiring immediate clearing. La Costa and Aviara resort properties with luxury furnishings need careful handling during updates and renovations—our team understands the high standards luxury properties demand. Property management companies overseeing multiple vacation rentals throughout Carlsbad appreciate our reliable scheduling, professional crew conduct, and ability to work during tight turnover windows between reservations. We coordinate with resort maintenance teams for large-property cleanouts, furniture replacement projects, and seasonal property updates. Carlsbad's proximity to LEGOLAND and beaches creates consistent vacation rental demand year-round, and we're equipped to handle the quick-turnaround junk removal these properties require. Whether you manage one beachfront cottage or multiple resort properties, our vacation rental expertise ensures minimal downtime between bookings."
    },
    {
      question: "Do you recycle or donate items in Carlsbad?",
      answer: "Yes, eco-friendly disposal is central to our junk removal Carlsbad service. We sort every load to maximize recycling and donation opportunities, minimizing what goes to landfills. Usable furniture, working appliances, and household goods in good condition go to North County charities including Goodwill, Salvation Army, and local family resource centers serving Carlsbad residents. Metal items—appliances, scrap metal, bed frames—are delivered to recycling facilities that process materials responsibly. Mattresses and box springs are taken to specialized recycling centers that break them down into foam, fabric, and metal components rather than sending them to landfills. Electronics go to certified e-waste recyclers who handle hazardous materials safely per California regulations. Wood debris, yard waste, and organic materials are sent to composting facilities when possible. Given Carlsbad's environmental consciousness and coastal location, we take extra care with disposal methods that protect the ocean and local ecosystem. We're familiar with San Diego County disposal regulations and use licensed facilities for all materials, ensuring environmental compliance throughout the entire junk removal process."
    },
    {
      question: "Are you licensed and insured for junk removal in Carlsbad?",
      answer: "Yes, Severin Cleaners is fully licensed and insured to provide junk removal services throughout Carlsbad and all of San Diego County. We carry comprehensive general liability insurance that protects your property during the removal process—particularly important for Carlsbad's luxury homes and resort properties where property values are high and careful handling is essential. If our crew accidentally damages walls, floors, landscaping, or valuable finishes while hauling items, our insurance covers repairs. Our licensing ensures compliance with California waste hauling regulations, San Diego County disposal requirements, and local Carlsbad ordinances. We use only licensed disposal facilities and transfer stations, providing documentation when needed for commercial clients, property management companies, or resort operators. Our team follows OSHA safety protocols for heavy lifting and hazardous material handling. For HOA-governed communities throughout Carlsbad, we provide proof of insurance upon request to meet community requirements. Resort property managers and vacation rental companies receive certificates of insurance for their records. Our licensing and insurance give you peace of mind that junk removal is handled professionally, legally, and safely."
    },
    {
      question: "Do you offer free estimates for Carlsbad junk removal?",
      answer: "Yes, we provide free, no-obligation estimates for all junk removal Carlsbad jobs. You can get an initial estimate over the phone by describing what you need removed—we'll give you a price range based on estimated volume. For larger or complex jobs like full estate cleanouts of La Costa luxury homes, resort property renovations, or commercial cleanouts along the Faraday Avenue tech corridor, we offer free on-site estimates where our team visits your Carlsbad property to assess items and provide exact pricing. On-site estimates are especially helpful for Aviara properties with gated access and long driveways, beachfront properties requiring coastal parking coordination, or multi-unit vacation rental complexes with accumulations across several properties. During same-day service calls, we provide final pricing on arrival before starting work—you approve the quote before we touch anything. Our volume-based pricing is transparent and includes all labor, hauling, and disposal fees with no hidden charges for coastal access, resort property coordination, or luxury home handling. Whether you're in Carlsbad Village or a hilltop La Costa estate, our free estimates ensure you know costs upfront."
    },
    {
      question: "Can you remove construction debris in Carlsbad?",
      answer: "Yes, we handle construction debris removal for Carlsbad residential and commercial projects of all sizes. Our service covers renovation debris from kitchen and bathroom remodels in luxury coastal homes, demolition waste from room additions and structural changes, roofing materials like tile and underlayment common in Carlsbad's Mediterranean-style architecture, drywall and lumber scraps from custom home builds, flooring removal including tile, hardwood, and carpet, window and door replacement materials during hurricane window installations, and general contractor cleanup after project completion. Carlsbad's active luxury home construction market—from La Costa custom estates to Aviara resort property renovations to Carlsbad Village coastal cottage updates—creates consistent debris removal needs. We coordinate with contractors on timing, often providing same-day or next-day service to keep job sites clear and projects on schedule. For commercial projects along Faraday Avenue or new resort developments, we arrange multiple pickups as needed. All construction debris goes to licensed facilities that sort materials for recycling when possible. We handle permits and documentation required for commercial construction waste in Carlsbad, making contractor partnerships simple and compliant."
    }
  ];

export default function JunkRemovalCarlsbadPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Junk Removal Carlsbad", url: "https://severincleaners.com/junk-removal-carlsbad" },
  ]);

  const faqSchema = generateFAQSchema(carlsbadFAQs);

  const serviceSchema = {
    "@type": "Service",
    "name": "Junk Removal in Carlsbad",
    "description": "Professional Carlsbad junk removal services for residential and commercial properties. Fast, reliable, eco-friendly disposal with same-day service available.",
    "url": "https://severincleaners.com/junk-removal-carlsbad",
    "serviceType": "Junk Removal",
    "provider": {
      "@id": "https://severincleaners.com/junk-removal-carlsbad#business"
    }
  };

  // Enhanced LocalBusiness schema for Carlsbad
  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://severincleaners.com/junk-removal-carlsbad#business",
    "name": "Severin Cleaners LLC",
    "image": "https://severincleaners.com/og-image.jpg",
    "telephone": "+1-619-750-0114",
    "priceRange": "$100-$495",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8900 Grossmont Blvd Ste 1",
      "addressLocality": "La Mesa",
      "addressRegion": "CA",
      "postalCode": "91941",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.7678,
      "longitude": -117.0231
    },
    "url": "https://severincleaners.com/junk-removal-carlsbad",
    "areaServed": [
      {
        "@type": "City",
        "name": "Carlsbad",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "PostalCode",
        "postalCode": "92008",
        "addressLocality": "Carlsbad",
        "addressRegion": "CA"
      },
      {
        "@type": "PostalCode",
        "postalCode": "92009",
        "addressLocality": "Carlsbad",
        "addressRegion": "CA"
      },
      {
        "@type": "PostalCode",
        "postalCode": "92010",
        "addressLocality": "Carlsbad",
        "addressRegion": "CA"
      },
      {
        "@type": "PostalCode",
        "postalCode": "92011",
        "addressLocality": "Carlsbad",
        "addressRegion": "CA"
      }
    ],
    "openingHours": "Mo-Su 00:00-23:59",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "27",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/severinhauling",
      "https://www.instagram.com/severinhauling/",
      "https://www.yelp.com/biz/severin-cleaners-san-diego",
      "https://www.thumbtack.com/ca/la-mesa/junk-removal/severin-hauling/service/541381661422116888"
    ]
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema]
  };

  const nearbyLocations = [
    { name: "Oceanside", slug: "junk-removal-oceanside" },
    { name: "San Marcos", slug: "junk-removal-san-marcos" },
    { name: "Vista", slug: "junk-removal-vista" },
    { name: "Escondido", slug: "junk-removal-escondido" },
  ];

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />

      <Header />

      <main>
        <OptimizedGradientHero
          title="Junk Removal Carlsbad"
          subtitle="North County Coastal #1 Choice • La Costa to Village • Same-Day Available"
          description="✓ Luxury Property Experts ✓ Licensed & Insured ✓ Serving All of Carlsbad CA"
        />

        {/* Main Content with Sidebar */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">

                {/* Main Content - Left Column */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-md p-8">

                    {/* Introduction */}
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">
                      Professional Junk Removal Carlsbad – La Costa to Carlsbad Village
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      Looking for reliable junk removal Carlsbad services? Our expert junk removal Carlsbad CA team serves North County's premier coastal community with same-day hauling available. From luxury La Costa golf course estates to historic Carlsbad Village beachfront properties, from Aviara resort homes to Bressi Ranch mixed-use developments, we navigate gated communities, coastal access restrictions, and resort property coordination with expertise. We provide professional junk removal throughout Carlsbad's 92008, 92009, 92010, and 92011 zip codes with transparent pricing and eco-friendly disposal.
                    </p>

                    <p className="text-gray-700 mb-6">
                      Our Carlsbad operation is uniquely equipped to handle the demands of North County's most affluent coastal city. We understand that junk pickup Carlsbad requires more than just hauling trucks—it demands experience with luxury property handling, knowledge of resort and vacation rental turnovers, familiarity with HOA requirements in premium communities, and the ability to coordinate around tourist season traffic and LEGOLAND visitors. Whether you're clearing out a beachfront vacation rental after guest checkout, removing furniture from an Aviara estate during renovation, or handling a full commercial cleanout in the Faraday Avenue tech corridor, our team brings the specialized experience Carlsbad's high-value properties demand.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Carlsbad Neighborhoods We Serve</h3>
                    <p className="text-gray-700 mb-4">
                      Our furniture removal Carlsbad service covers every corner of North County's premier coastal destination, from beachfront villages to inland golf communities. We've completed thousands of trash removal Carlsbad jobs throughout Carlsbad's diverse neighborhoods, each with unique access requirements and property characteristics that inform our service approach:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        <li><strong>Carlsbad Village:</strong> Historic coastal downtown with beach cottages, vacation rentals, and limited parking requiring coordination</li>
                        <li><strong>La Costa:</strong> Exclusive golf course community with luxury estates, resort properties, and gated access requiring advance coordination</li>
                        <li><strong>Aviara:</strong> Ultra-luxury resort area with high-end homes, vacation rentals, and strict HOA standards</li>
                        <li><strong>Bressi Ranch:</strong> Master-planned mixed-use community with residential and commercial properties requiring efficient service</li>
                      </ul>
                      <ul className="space-y-2">
                        <li><strong>Calavera Hills:</strong> Hillside neighborhoods with challenging terrain and extended driveway access</li>
                        <li><strong>South Carlsbad:</strong> High-tech business corridor along Faraday Avenue with commercial cleanout needs</li>
                        <li><strong>Coastal Zone:</strong> Beachfront properties near State Beach with parking restrictions and coastal access coordination</li>
                        <li><strong>East Carlsbad:</strong> Newer residential developments with standard suburban access and family home cleanouts</li>
                      </ul>
                    </div>

                    {/* Major Streets */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Key Streets & Access</h3>
                    <p className="text-gray-700 mb-4">
                      Our appliance removal Carlsbad team knows every major thoroughfare and neighborhood street in Carlsbad. This local expertise matters when navigating North County coastal traffic—tourist congestion near LEGOLAND, beach visitor parking challenges, resort area access protocols, and business corridor timing. We plan each <strong>estate cleanout Carlsbad</strong> job with detailed route mapping to ensure our trucks can access your property efficiently:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      <li>• <strong>El Camino Real (Highway 101):</strong> Main coastal corridor with peak congestion during tourist season</li>
                      <li>• <strong>Carlsbad Village Drive:</strong> Coastal route through historic downtown with limited parking</li>
                      <li>• <strong>Palomar Airport Road:</strong> Major east-west connector to inland communities</li>
                      <li>• <strong>Cannon Road:</strong> Commercial route with business access and shopping centers</li>
                      <li>• <strong>Poinsettia Lane:</strong> East-west corridor connecting coastal and inland neighborhoods</li>
                      <li>• <strong>Faraday Avenue:</strong> High-tech business park corridor with commercial properties</li>
                      <li>• <strong>Aviara Parkway:</strong> Luxury resort access road with gated community coordination</li>
                      <li>• <strong>La Costa Avenue:</strong> Golf course community access with estate properties</li>
                    </ul>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Carlsbad Landmarks</h3>
                    <p className="text-gray-700 mb-4">
                      We provide commercial junk removal Carlsbad service near all major landmarks. These familiar reference points help us navigate quickly to your property and provide accurate arrival time estimates throughout this popular tourist and residential destination:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• LEGOLAND California Resort—major theme park and tourist draw</li>
                        <li>• Carlsbad Flower Fields—seasonal attraction (March-May)</li>
                        <li>• Carlsbad State Beach—primary coastal recreation area</li>
                        <li>• Park Hyatt Aviara Resort—luxury resort landmark</li>
                        <li>• The Crossings at Carlsbad—golf course community</li>
                        <li>• Aviara Golf Club—championship golf course</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• McClellan-Palomar Airport—regional airport</li>
                        <li>• Carlsbad Premium Outlets—shopping destination</li>
                        <li>• Carlsbad Village Farmers Market—downtown weekly event</li>
                        <li>• South Carlsbad State Beach—coastal recreation</li>
                        <li>• Bressi Ranch Town Center—mixed-use development</li>
                        <li>• Cannon Park—central recreation facility</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Traffic & Service Timing</h3>
                    <p className="text-gray-700 mb-4">
                      Carlsbad's coastal location and tourist attractions affect same day junk removal Carlsbad timing significantly. Our dispatch team actively monitors North County coastal traffic patterns and coordinates with you to schedule service windows that minimize wait times and maximize efficiency:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      <li><strong>Morning commute (7-9 AM):</strong> El Camino Real experiences heavy southbound traffic as workers commute to San Diego and UTC employment centers. We schedule early morning (6-7 AM) starts or wait until after 9:30 AM for coastal properties requiring Highway 101 access.</li>
                      <li><strong>Tourist season (May-September):</strong> LEGOLAND visitors create significant traffic on Cannon Road and Palomar Airport Road, particularly during midday (10 AM-3 PM) and summer weekends. We coordinate around peak tourist times when serving properties near theme park areas.</li>
                      <li><strong>Flower Fields season (March-May):</strong> The Carlsbad Ranch Flower Fields attract thousands of daily visitors, creating congestion on Palomar Airport Road and surrounding areas. We plan routes avoiding this corridor during peak bloom season hours (9 AM-5 PM).</li>
                      <li><strong>Beach traffic (summer weekends):</strong> Carlsbad State Beach and South Carlsbad State Beach draw heavy visitor traffic on summer weekends, saturating coastal parking and creating congestion on Carlsbad Village Drive. We recommend weekday or early morning service for coastal properties during peak beach season.</li>
                    </ul>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Coastal Climate Considerations</h3>
                    <p className="text-gray-700 mb-6">
                      Carlsbad's coastal North County climate impacts junk removal year-round with moderate temperatures and marine layer influence that differentiate it from inland communities. Summer temperatures remain mild (65-75°F) thanks to ocean proximity, making Carlsbad comfortable for outdoor work year-round unlike inland areas that exceed 95°F. However, marine layer fog affects coastal neighborhoods—especially Carlsbad Village and beachfront properties—during May-July mornings, typically clearing by 11 AM-1 PM. We schedule coastal property service for afternoon windows during fog season to ensure clear access and visibility. Winter brings Carlsbad's limited rainfall (December-February), with occasional coastal storms creating drainage issues in low-lying areas and landscape debris from wind. The mild climate year-round makes Carlsbad's vacation rental and resort properties consistently active, creating steady junk removal demand across all seasons. Salt air and coastal humidity affect stored items—garage and outdoor storage accumulations show accelerated corrosion and deterioration compared to inland properties, making timely junk removal particularly important for preventing rust damage and pest attraction in this premium real estate market.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in Carlsbad</h3>
                    <p className="text-gray-700 mb-4">
                      Our junk removal Carlsbad CA service handles the unique mix of items common to coastal luxury living and resort properties—from vacation rental turnovers to estate cleanouts and commercial property clearances. We remove everything from single items to complete property cleanouts:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Furniture & Household</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">Sofas, couches, sectionals</a> from luxury homes</li>
                          <li>• <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">Mattresses</a>, box springs from vacation rentals</li>
                          <li>• Dining sets, patio furniture from coastal properties</li>
                          <li>• Desks, cabinets from estate cleanouts</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances & Electronics</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Refrigerators, washers, dryers</a> from rental properties</li>
                          <li>• High-end appliances from luxury home remodels</li>
                          <li>• TVs, electronics from vacation home updates</li>
                          <li>• HVAC units, water heaters needing replacement</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Outdoor & Coastal Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Patio furniture, outdoor grills, beach equipment</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs and spas</a> from backyard renovations</li>
                          <li>• Landscaping waste, yard debris, coastal vegetation</li>
                          <li>• Pool equipment, outdoor structures</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Cleanouts & Debris</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">Estate</a> cleanouts for luxury properties</li>
                          <li>• Vacation rental turnovers and property updates</li>
                          <li>• <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">Construction debris</a> from remodels</li>
                          <li>• <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">Commercial property</a> cleanouts in tech corridor</li>
                        </ul>
                      </div>
                    </div>

                    {/* How Our Service Works */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">How Our Carlsbad Junk Removal Service Works</h3>
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <ol className="space-y-3 text-gray-700">
                        <li><strong>1. Contact Us:</strong> Call (619) 750-0114 or book online. Describe what you need removed and your Carlsbad location. We'll provide estimated pricing based on volume and schedule your service window.</li>
                        <li><strong>2. Same-Day Scheduling Available:</strong> Call before noon for same-day junk pickup Carlsbad service throughout North County coastal areas. We coordinate arrival times around traffic patterns, tourist season, and your schedule preferences.</li>
                        <li><strong>3. We Arrive & Assess:</strong> Our uniformed crew arrives in clearly marked trucks during your scheduled window. We assess items for removal and provide a final quote before starting work—no hidden fees or surprises.</li>
                        <li><strong>4. We Load & Haul Everything:</strong> Our team does all lifting, loading, and hauling. We protect floors and doorways in luxury properties, navigate gated communities and coastal access, and complete removal efficiently. You simply point—we handle the rest.</li>
                        <li><strong>5. Eco-Friendly Disposal:</strong> We sort items for donation, recycling, and responsible disposal. Usable furniture goes to local charities, recyclables to proper facilities, and only true trash to landfill as last resort.</li>
                        <li><strong>6. Clean Sweep & Payment:</strong> We sweep the area clean after removal and collect payment. Most jobs are completed in under two hours from arrival to departure.</li>
                      </ol>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Cleaners for Carlsbad Junk Removal</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Luxury Property Expertise:</strong> We handle Carlsbad's premium properties with the care they deserve—from La Costa golf estates to Aviara resort homes to beachfront Village cottages. Our crews understand high-end property standards, gated community protocols, and the careful handling luxury furnishings require.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Same-Day Service Available:</strong> Call before noon for same-day junk removal throughout Carlsbad and the 92008, 92009, 92010, 92011 zip codes. Our dispatch team monitors coastal traffic, tourist season congestion, and beach visitor patterns to ensure reliable service even during busy periods.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> No hidden fees, no surprises. Upfront quotes based on volume with all labor, hauling, and disposal included. Gated community access or coastal parking challenges don't change our rates—you pay for volume removed, not time or access complexity.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Insured:</strong> Fully licensed California junk removal company with comprehensive liability insurance. We carry proper coverage for luxury properties, resort coordination, and vacation rental service—protecting your high-value investment throughout the removal process.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Carlsbad"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Carlsbad"
          contextParagraph="Estate cleanouts and vacation rental turnovers throughout Carlsbad—from La Costa luxury homes to Village beach cottages—all use the same transparent pricing. No hidden fees, same-day service available."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Carlsbad" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Junk Removal Carlsbad"
          description="Get answers to common questions about our junk removal Carlsbad services, pricing, and same-day availability."
          faqs={carlsbadFAQs}
          ctaTitle="Still Have Questions About Carlsbad Junk Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our junk removal Carlsbad services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related North County Coastal Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-disposal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Luxury furniture removal for Carlsbad estates and vacation rentals</p>
              </a>
              <a href="/appliance-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal San Diego</h4>
                <p className="text-gray-600">High-end appliance disposal for coastal properties</p>
              </a>
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanout San Diego</h4>
                <p className="text-gray-600">Complete luxury property cleanouts throughout Carlsbad</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
