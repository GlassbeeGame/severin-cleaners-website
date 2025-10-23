import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PointLomaFAQSection from "./PointLomaFAQSection";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Point Loma Junk Removal | Peninsula & Naval Service | (619) 750-0114',
  description: 'Point Loma junk removal Liberty Station, Sunset Cliffs. Military PCS moves, peninsula homes, ocean-view properties. (619) 750-0114',
  keywords: 'Point Loma junk removal, junk hauling Point Loma, junk pickup Point Loma, trash removal Point Loma, Point Loma San Diego junk removal, military PCS moves',
  openGraph: {
    title: 'Point Loma Junk Removal | Military Family & Coastal Property Specialists | Same-Day Service',
    description: 'Professional Point Loma junk removal for military families, Liberty Station, Sunset Cliffs coastal homes. PCS move specialists with military discounts. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-point-loma',
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
    title: 'Point Loma Junk Removal | Military Family & Coastal Property Specialists | Same-Day Service',
    description: 'Professional Point Loma junk removal for military families, Liberty Station, Sunset Cliffs coastal homes. PCS move specialists with military discounts. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-point-loma',
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
      "name": "Do you provide junk removal for military PCS moves in Point Loma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our Point Loma junk removal service specializes in military PCS moves and base housing transitions. We coordinate with Naval Base San Diego housing offices, work within tight PCS timelines, and provide special military discounts for active duty families. Our team understands base housing regulations and inspection requirements."
      }
    },
    {
      "@type": "Question",
      "name": "How much does junk removal cost in Point Loma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Single Item Pickup starting at $100, 1/4 Trailer Load $249, 3/8 Trailer Load $319, 1/2 Trailer Load $349, 5/8 Trailer Load $366, 3/4 Trailer Load $429, 7/8 Trailer Load $462, Full Trailer Load $495. Our junk hauling Point Loma pricing includes labor, hauling, proper disposal, and cleanup. We offer special military discounts for active duty families and competitive rates for coastal property cleanouts."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle coastal property cleanouts and storm debris?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our trash removal Point Loma service specializes in coastal property maintenance including storm debris cleanup, salt air corrosion disposal, and weather damage removal. We understand the unique challenges of Sunset Cliffs and oceanfront properties, providing environmentally responsible disposal methods."
      }
    },
    {
      "@type": "Question",
      "name": "Can you provide same-day junk hauling in Liberty Station or Sunset Cliffs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer same-day junk pickup Point Loma service throughout Liberty Station, Sunset Cliffs, and all Point Loma neighborhoods. Our local team can respond quickly for urgent military moves, storm cleanup, or emergency coastal property needs while maintaining our commitment to quality and environmental responsibility."
      }
    },
    {
      "@type": "Question",
      "name": "Are your junk removal services eco-friendly and HOA-compliant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our Point Loma San Diego junk removal prioritizes environmental responsibility and community compliance. We donate usable items, recycle materials, and follow HOA guidelines for Liberty Station and coastal communities. Our service protects Point Loma's beautiful environment while respecting community standards."
      }
    }
  ]
};

export default function JunkremovalpointlomaPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Point Loma",
    serviceName: "Junk Removal",
    description: "Professional Point Loma junk removal for military families, Liberty Station, Sunset Cliffs coastal homes. PCS move specialists with military discounts.",
    url: "https://severincleaners.com/junk-removal-point-loma",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Point Loma Junk Removal", url: "https://severincleaners.com/junk-removal-point-loma" },
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
              ✓ Military community with coastal properties
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Point Loma Junk Removal | Peninsula & Naval Service
            </h1>
            <div className="text-xl mb-6">
              ⭐⭐⭐⭐⭐ 5.0 Rating • Military Family Support • Coastal Specialists
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
                Book Your Military or Coastal Junk Pickup – Save 15% Online
              </a>
            </div>
            <p className="text-lg">
              ✓ <a href="/same-day-junk-removal-san-diego" className="text-white hover:underline">Same-Day Service</a> Available ✓ Licensed & Insured ✓ Local Specialists
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <TrustSignalsSection locationName="Point Loma" />

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Military & Coastal Point Loma Junk Removal Experts</h2>

              <p className="text-lg text-gray-700 mb-6">
                <strong>Point Loma junk removal</strong> requires specialized expertise in both military relocations and coastal property maintenance. As San Diego's premier military and coastal community, Point Loma features Naval Base San Diego housing, historic Liberty Station developments, and stunning Sunset Cliffs properties. Our <strong>junk hauling Point Loma</strong> service specializes in PCS moves, coastal cleanouts, and historic property projects throughout this unique peninsula neighborhood.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                From <strong>military PCS move support</strong> at Naval Base San Diego to <strong>coastal property cleanouts</strong> in Sunset Cliffs, we understand the unique challenges of both military families and coastal homeowners. Whether you need <strong>junk pickup Point Loma</strong> for a military relocation with tight deadlines or <strong>trash removal Point Loma</strong> for storm debris and salt-damaged items, our team delivers reliable service with military precision and coastal property expertise. We navigate steep peninsula streets, coordinate with base housing offices, and understand the specific needs of this waterfront community.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Point Loma Neighborhoods & Communities We Serve</h2>
              <p className="text-lg mb-4">
                Point Loma's diverse peninsula communities require specialized local knowledge:
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-3">
                <li><strong>Naval Base San Diego (NBSD)</strong> – One of the Navy's largest west coast installations houses thousands of sailors and their families in base housing communities. Our <strong>Point Loma junk removal</strong> service specializes in PCS move support, understands base housing inspection requirements, coordinates with housing offices, and provides military discount pricing. We're familiar with gate access procedures and base regulations.</li>
                <li><strong>Liberty Station / NTC</strong> – The former Naval Training Center transformed into San Diego's premier mixed-use community features historic buildings repurposed as residential lofts, restaurants, arts spaces, and offices. Properties here require sensitivity to historic preservation, coordination with various HOAs and management companies, and understanding of the arts district's community character.</li>
                <li><strong>Sunset Cliffs</strong> – Dramatic oceanfront neighborhood perched on sandstone cliffs offers spectacular Pacific views and mid-century beach cottages to modern estates. Properties experience salt air corrosion, challenging hillside access via narrow streets, and unique coastal maintenance needs. We regularly remove salt-damaged patio furniture, sun-faded outdoor equipment, and storm debris from these exposed locations.</li>
                <li><strong>Ocean Beach Adjacent Areas</strong> – The neighborhoods bordering OB feature a mix of vintage California bungalows, apartments, and newer developments. This eclectic area shares OB's laid-back beach culture while maintaining Point Loma's residential character. Street parking challenges and narrow driveways require careful logistics planning.</li>
                <li><strong>Wooded Area / Roseville</strong> – Mid-peninsula residential neighborhoods feature tree-lined streets, established single-family homes, and excellent schools. These family-oriented areas generate steady estate cleanout demand and renovation projects. Mature landscaping and traditional home layouts require experienced crews.</li>
                <li><strong>Loma Portal</strong> – Prestigious neighborhood at Point Loma's geographic center features larger lots, Spanish Colonial Revival architecture, and the community's most sought-after properties. Homes here often require estate services, luxury furniture removal, and high-end renovation debris handling.</li>
                <li><strong>La Playa</strong> – Waterfront neighborhood along San Diego Bay offers bay views, beach access, and marina proximity. Properties range from historic cottages to modern bay-front estates. Salt exposure from both ocean and bay creates accelerated corrosion requiring frequent outdoor item replacement.</li>
                <li><strong>Shelter Island</strong> – Man-made peninsula jutting into San Diego Bay hosts hotels, marinas, restaurants, and bay-front properties. <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">Commercial properties</a> here require specialized service coordination, and residential properties face unique waterfront challenges.</li>
                <li><strong>Harbor Island</strong> – Another man-made island in the bay features high-rise condominiums, hotels, and bay-view properties. Elevator buildings require advance coordination, and the island's exposed location creates wind and salt air impacts.</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Major Roads & Navigation Throughout Point Loma</h2>
              <p className="text-lg mb-4">
                Point Loma's peninsula geography creates unique traffic patterns and access challenges:
              </p>

              <h3 className="text-2xl font-bold mb-4">Primary Access Routes</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Rosecrans Street (CA-209)</strong> – The main artery running the length of Point Loma from I-8/I-5 interchange to Cabrillo National Monument. This heavily traveled route serves as the primary access to Naval Base San Diego, Liberty Station, Shelter Island, and all peninsula neighborhoods. Morning (7-9 AM) and evening (4-6 PM) commute traffic creates significant congestion, especially near the Naval Base gates. We schedule around peak traffic when servicing properties along this corridor.</li>
                <li><strong>Catalina Boulevard</strong> – The scenic western spine of Point Loma winds along the elevated ridge from Cabrillo Memorial Drive through Sunset Cliffs to Ocean Beach. This narrow, winding two-lane road features dramatic ocean views but challenging access with steep drop-offs, tight curves, and limited pullouts. Properties along Catalina require careful navigation and often street parking coordination.</li>
                <li><strong>Nimitz Boulevard (CA-209 extension)</strong> – Runs along Point Loma's eastern bayfront from downtown San Diego past Harbor Island and Shelter Island to meet Rosecrans. This waterfront route provides access to marina communities, Shelter Island properties, and Liberty Station's eastern edge. Generally less congested than Rosecrans but peak hours still impact flow.</li>
                <li><strong>Sports Arena Boulevard</strong> – Forms Point Loma's northeastern boundary, connecting to Midway District and providing I-8 access. The Sports Arena/Rosecrans intersection experiences heavy traffic during events and rush hours.</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Key Residential Streets & Neighborhoods</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Voltaire Street</strong> – Ocean Beach's main commercial street extends into Point Loma's northern neighborhoods, providing shopping and restaurant access. Mixed residential-commercial character creates daytime activity and parking challenges.</li>
                <li><strong>Sunset Cliffs Boulevard</strong> – Parallels the dramatic cliff line through the Sunset Cliffs neighborhood, providing access to cliff-side parks and residential streets. Sunset seekers create evening traffic surges during summer months (June-September).</li>
                <li><strong>Hill Street</strong> – Steep residential street climbing Point Loma's western slope features challenging grades and bay views. Properties here require careful equipment positioning on steep driveways.</li>
                <li><strong>Worden Street / Byron Street</strong> – Central residential streets through Wooded Area/Roseville neighborhoods feature mature trees, established homes, and family-oriented character. These streets offer relatively easy access compared to hillside areas.</li>
                <li><strong>Avenida De Portugal</strong> – Runs through Loma Portal's prestigious neighborhoods with larger lots and Spanish Colonial architecture. Street parking and mature landscaping require coordination.</li>
                <li><strong>Talbot Street</strong> – Connects Sunset Cliffs to Catalina Boulevard through residential neighborhoods. This east-west connector provides alternative routing during Catalina congestion.</li>
                <li><strong>Canon Street</strong> – Parallel to Rosecrans through mid-peninsula residential areas, providing local access and route alternatives during Rosecrans gridlock.</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Base Access & Security Considerations</h3>
              <p className="text-lg mb-6">
                Naval Base San Diego access requires advance coordination:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Gate security protocols</strong> – All crew members undergo background checks and carry proper identification. We coordinate with base housing offices 24-48 hours before service.</li>
                <li><strong>Multiple gate locations</strong> – Main Gate (Rosecrans/Harbor Drive), 32nd Street Gate (for NBSD access from south), and various pedestrian gates. We use the most efficient gate based on housing location.</li>
                <li><strong>Housing office coordination</strong> – For PCS cleanouts, we work directly with housing inspectors to ensure all requirements are met for final inspection clearance.</li>
                <li><strong>Vehicle inspection requirements</strong> – Our trucks undergo inspection at gates; we factor this time into scheduling to ensure on-time arrival.</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Point Loma Landmarks & Reference Points</h2>
              <p className="text-lg mb-4">
                Our <strong>junk hauling Point Loma</strong> service uses these well-known locations for scheduling and navigation:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">Cabrillo National Monument</h3>
                  <p className="mb-4">
                    At the southern tip of Point Loma, this National Park Service site commemorates Juan Rodriguez Cabrillo's 1542 landing. The Old Point Loma Lighthouse and dramatic Pacific views make this a major tourist destination. Nearby properties on Catalina Boulevard experience increased traffic during peak season (June-September). We service surrounding neighborhoods understanding monument visitor patterns.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Liberty Station / NTC Promenade</h3>
                  <p className="mb-4">
                    The 361-acre former Naval Training Center now serves as San Diego's Arts District with restaurants (Stone Brewing Liberty Station), retailers, arts organizations (San Diego Watercolor Society, Museum of Contemporary Art San Diego), offices, and residential lofts. We provide both residential and commercial services throughout this historic district, respecting the community's cultural character.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Sunset Cliffs Natural Park</h3>
                  <p className="mb-4">
                    68 acres of dramatic sandstone cliffs offering Pacific sunset viewing and tide pooling. The park attracts thousands of visitors, especially during summer sunsets. Properties adjacent to the park on Sunset Cliffs Boulevard require scheduling around sunset crowds (approximately 6-8 PM during summer).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Naval Base San Diego</h3>
                  <p className="mb-4">
                    The principal homeport of the Pacific Fleet houses over 50 ships and submarines. Thousands of military families live in base housing communities. We specialize in PCS move support, understanding the tight timelines and specific requirements of military relocations. Military discounts available for active duty families.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Point Loma Nazarene University</h3>
                  <p className="mb-4">
                    Private Christian university perched on the bluff overlooking the Pacific. The campus and surrounding neighborhoods experience student-related moving activity during summer and semester transitions (August/September and May/June). We provide services for student housing, faculty relocations, and campus facilities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Shelter Island Yacht Basin</h3>
                  <p className="mb-4">
                    Five marinas provide 2,000+ boat slips serving San Diego's boating community. Surrounding hotels, restaurants (Bali Hai, Island Prime), and bay-front properties require specialized waterfront service. We handle marine-related debris, boat equipment, and coastal property items affected by constant bay exposure.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Loma Portal Elementary / Correia Middle</h3>
                  <p className="mb-4">
                    These highly-rated public schools serve Point Loma families and define desirable residential neighborhoods. Morning drop-off (7:30-8:15 AM) and afternoon pickup (2:15-3:00 PM) create brief traffic concentrations on surrounding streets. We avoid these windows when servicing nearby properties.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Liberty Public Market</h3>
                  <p className="mb-4">
                    Popular food hall in a historic Navy mess hall features 30+ artisan vendors. This community gathering spot drives foot traffic throughout Liberty Station. We service surrounding residential lofts and commercial spaces, coordinating around peak dining hours (11 AM-2 PM, 5-8 PM).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Ocean Beach Pier & Dog Beach</h3>
                  <p className="mb-4">
                    While technically in Ocean Beach, these landmarks border Point Loma's northern neighborhoods. Dog Beach attracts visitors year-round, creating parking and access challenges for adjacent Point Loma properties. Weekend beach traffic impacts northern peninsula neighborhoods.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Harbor Island Drive High-Rises</h3>
                  <p className="mb-4">
                    The row of bay-view condominium towers requires elevator coordination, building management approval, and understanding of high-rise logistics. We schedule service elevator reservations, protect common areas, and coordinate with concierge services at these upscale buildings.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Point Loma Traffic Patterns & Service Optimization</h2>
              <p className="text-lg mb-4">
                Strategic scheduling around Point Loma's unique traffic patterns ensures efficient service:
              </p>

              <h3 className="text-2xl font-bold mb-4">Military Base Commute Impact</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Morning rush (6-8 AM)</strong> – Naval Base San Diego morning watch shift changes and civilian worker arrivals create heavy inbound traffic on Rosecrans. Base gates experience long entry lines. We schedule most Point Loma services after 9 AM to avoid this congestion or provide early morning service (before 6 AM) for urgent military moves.</li>
                <li><strong>Shift changes throughout day</strong> – Navy operational rhythm creates traffic pulses beyond typical civilian patterns. Midday (10 AM-2 PM) generally offers optimal access throughout Point Loma.</li>
                <li><strong>Evening departure (3:30-5:30 PM)</strong> – Outbound Rosecrans traffic from base to I-8/I-5 creates peninsula-wide backup. We complete most jobs before 3 PM or offer evening service (after 6 PM) when traffic subsides.</li>
                <li><strong>PCS season surges (May-September)</strong> – Summer military transfer season brings additional moving trucks and heightened base activity. We maintain extra crew availability during peak PCS months.</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Coastal Recreation Traffic (Summer Months)</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Sunset Cliffs evening surge (6-8 PM, June-September)</strong> – Sunset seekers pack Sunset Cliffs Natural Park and surrounding streets during summer evenings. Properties on Sunset Cliffs Boulevard are best serviced during morning or early afternoon.</li>
                <li><strong>Weekend beach traffic</strong> – Saturday and Sunday bring visitors to Ocean Beach, Sunset Cliffs, and bay beaches via Rosecrans and Voltaire. Coastal neighborhood access is easier on weekdays.</li>
                <li><strong>Holiday and special event impacts</strong> – July 4th (bay fireworks viewing), Over-the-Line Tournament (July), Fleet Week (October) bring massive traffic increases. We coordinate with clients well in advance during these periods.</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Optimal Service Windows by Location</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Naval Base housing</strong> – 9 AM-2 PM weekdays offer best access, avoiding shift change congestion</li>
                <li><strong>Liberty Station</strong> – Morning service (7-11 AM) before lunch crowds arrive at restaurants and food hall</li>
                <li><strong>Sunset Cliffs</strong> – Morning through early afternoon (8 AM-3 PM), avoiding sunset hour traffic</li>
                <li><strong>Shelter/Harbor Islands</strong> – Midday (10 AM-3 PM) avoids both commute and hotel check-in/out activity</li>
                <li><strong>Mid-peninsula residential</strong> – Flexible timing, though school drop-off/pickup windows (7:30-8:30 AM, 2:15-3:15 PM) create brief congestion near schools</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Point Loma Coastal Climate & Property Impacts</h2>
              <p className="text-lg mb-4">
                Point Loma's exposed peninsula location creates unique weather patterns affecting property maintenance:
              </p>

              <h3 className="text-2xl font-bold mb-4">Marine Layer & Coastal Fog (Year-Round)</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Persistent morning fog (May-August)</strong> – Point Loma's western neighborhoods experience dense marine layer that often lingers until noon. This keeps temperatures cool (60-65°F mornings) but accelerates metal corrosion and creates moisture accumulation in outdoor storage. We regularly remove rust-damaged items from properties within sight of the ocean.</li>
                <li><strong>East-west microclimate split</strong> – Bayside properties (La Playa, Shelter Island) often enjoy sunshine while oceanside neighborhoods (Sunset Cliffs) remain socked in fog. This creates scheduling flexibility.</li>
                <li><strong>Salt air omnipresence</strong> – Both Pacific Ocean and San Diego Bay surround Point Loma, creating double exposure to salt-laden air. Outdoor furniture, BBQ grills, metal fixtures, and patio equipment deteriorate faster than inland areas. We handle constant flow of corroded outdoor items.</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Mild Year-Round Climate (60-72°F Average)</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Consistent service availability</strong> – Point Loma's temperate climate allows reliable year-round junk removal without weather delays</li>
                <li><strong>Outdoor living wear patterns</strong> – Constant use of patios, decks, and outdoor spaces creates steady furniture replacement demand rather than seasonal surges</li>
                <li><strong>Garden debris generation</strong> – Year-round growing season produces continuous landscape waste, especially in established neighborhoods with mature vegetation</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Winter Storm Systems (December-March)</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Rainfall (10-12 inches annually)</strong> – Point Loma receives minimal precipitation concentrated in winter months. When storms arrive, hillside properties can experience water intrusion in garages and storage areas. We provide rapid response for water-damaged items.</li>
                <li><strong>Wind-driven ocean swells</strong> – Pacific storms bring large surf and occasional coastal flooding near Sunset Cliffs. Storm debris removal requests spike following major swell events.</li>
                <li><strong>Eucalyptus tree hazards</strong> – Point Loma's many eucalyptus trees shed branches during storms. Post-storm yard debris cleanup is common in Wooded Area and Loma Portal neighborhoods.</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Santa Ana Wind Events (September-December)</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Peninsula wind exposure</strong> – Point Loma's exposed geography makes it vulnerable to Santa Ana winds from multiple directions. Properties experience furniture blow-overs, fence damage, and landscaping debris.</li>
                <li><strong>Fire risk awareness</strong> – While Point Loma itself is urban, strong winds raise awareness of regional fire danger. We maintain protocols for debris management during high fire danger periods.</li>
                <li><strong>Temperature spikes</strong> – Santa Ana days can hit 85-95°F, unusual for typically cool Point Loma. We adjust crew protocols during these occasional heat events.</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Specialized Services for Point Loma</h2>

              <h3 className="text-2xl font-bold mb-4">Military PCS Move Support</h3>
              <p className="text-lg mb-4">
                We specialize in the unique requirements of military relocations:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Rapid response for tight timelines</strong> – PCS orders often provide limited notice. We offer same-day and next-day service for urgent military moves.</li>
                <li><strong>Base housing inspection preparation</strong> – We understand Navy housing inspection requirements and ensure properties meet cleanliness standards for final inspection clearance.</li>
                <li><strong>Military discount pricing</strong> – Special rates for active duty service members and their families</li>
                <li><strong>Coordination with housing offices</strong> – We work directly with base housing management to coordinate access, timing, and requirements</li>
                <li><strong>Deployment-related cleanouts</strong> – Helping families prepare for or return from deployments, understanding the emotional and logistical challenges involved</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Coastal Property Maintenance</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Salt air damage disposal</strong> – Regular removal of corroded patio furniture, rusted equipment, and weather-damaged outdoor items from ocean and bay-facing properties</li>
                <li><strong>Storm debris cleanup</strong> – Rapid response following Pacific storm events for wind damage, fallen branches, and flood-affected items</li>
                <li><strong>Sunset Cliffs special access</strong> – Navigating challenging hillside terrain and narrow streets in this dramatic coastal neighborhood</li>
                <li><strong>Marina and waterfront services</strong> – Boat-related equipment, dock furniture, and marine debris from Shelter Island and La Playa waterfront properties</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Liberty Station Historic Properties</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Historic building sensitivity</strong> – Careful handling in adaptive reuse properties respecting original architecture</li>
                <li><strong>Arts district coordination</strong> – Working around gallery events, performances, and community activities</li>
                <li><strong>Mixed-use property services</strong> – Both residential loft cleanouts and commercial space debris removal</li>
                <li><strong>HOA and management company coordination</strong> – Liberty Station has multiple property management entities requiring specific protocols</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <LocationPricingSection
        locationName="Point Loma"
        contextParagraph="Military PCS moves, coastal estate cleanouts, and Liberty Station renovations all use the same transparent pricing. Active duty military families receive special discount pricing."
      />

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Military Families & Coastal Residents Choose Us</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🇺🇸</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Military Specialist Expertise</h3>
                  <p className="text-gray-600">We understand PCS timelines, base housing requirements, and inspection standards. Military discount pricing for active duty families serving at Naval Base San Diego.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌊</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Coastal Property Experience</h3>
                  <p className="text-gray-600">Expert handling of salt air damage, storm debris, and oceanfront property challenges unique to Sunset Cliffs, Shelter Island, and bay-front homes.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🗺️</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Peninsula Navigation</h3>
                  <p className="text-gray-600">We know every street, hill, and access challenge in Point Loma. From steep Catalina Boulevard curves to Liberty Station's historic district, we navigate efficiently.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Same-Day Service Available</h3>
                  <p className="text-gray-600">Urgent PCS deadline? Storm cleanup emergency? We provide same-day response throughout Point Loma when scheduled before 2 PM.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✅</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Licensed & Fully Insured</h3>
                  <p className="text-gray-600">Complete coverage for base housing, coastal estates, and historic Liberty Station properties. Documentation provided for housing office requirements.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">♻️</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Eco-Friendly Disposal</h3>
                  <p className="text-gray-600">Protecting Point Loma's beautiful coastal environment through responsible recycling, donation programs, and proper hazardous waste handling.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-xl font-bold mb-3">Point Loma Communities We Serve:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li>✓ Naval Base San Diego housing</li>
                  <li>✓ Liberty Station / NTC District</li>
                  <li>✓ Sunset Cliffs coastal homes</li>
                  <li>✓ Loma Portal estates</li>
                  <li>✓ La Playa waterfront</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Shelter Island properties</li>
                  <li>✓ Harbor Island high-rises</li>
                  <li>✓ Wooded Area / Roseville</li>
                  <li>✓ Ocean Beach adjacent areas</li>
                  <li>✓ All Point Loma neighborhoods</li>
                </ul>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Schedule Your Point Loma Service?</h3>
              <p className="text-xl mb-6">
                Military Discounts • Coastal Specialists • Same-Day Available • Licensed & Insured
              </p>
              <a
                href="tel:6197500114"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-4"
              >
                📞 Call (619) 750-0114 Now
              </a>
              <p className="text-sm">
                Or <a href="/contact" className="underline hover:text-blue-200">book online</a> and save 15% on your first service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <PointLomaFAQSection />

      {/* Related Services */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Related Military & Coastal Services</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
              <p className="text-gray-600">Inherited coastal homes and military family estate transitions</p>
            </a>
            <a href="/construction-debris-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
              <p className="text-gray-600">Liberty Station renovations and historic property remodeling</p>
            </a>
            <a href="/furniture-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
              <p className="text-gray-600">Military PCS furniture disposal and coastal home furnishing removal</p>
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
