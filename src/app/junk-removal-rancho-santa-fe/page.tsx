import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RanchoSantaFeFAQSection from "./RanchoSantaFeFAQSection";
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
  title: 'Rancho Santa Fe Junk Removal | Exclusive Estate Service | (619) 750-0114',
  description: 'Rancho Santa Fe estate junk removal The Covenant, Fairbanks Ranch. Gated equestrian, white-glove luxury. (619) 750-0114',
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
        "text": "Yes! We offer rapid-response junk pickup Rancho Santa Fe service, typically providing next-day service with same-day available when you call before 2 PM. Our team understands the urgency often required for estate management, property staging, last-minute renovations, and HOA compliance issues. We coordinate with gate security, property managers, and household staff to provide discreet, professional service that respects your privacy and your community's standards throughout The Covenant, Fairbanks Ranch, and all Rancho Santa Fe gated communities."
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
              Rancho Santa Fe Junk Removal | Exclusive Estate Service
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
              ✓ <a href="/same-day-junk-removal-san-diego" className="text-white hover:underline">Same-Day Service</a> Available ✓ Licensed & Insured ✓ Estate Specialists
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <TrustSignalsSection locationName="Rancho Santa Fe" coverageArea="North County Coastal" />

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Professional Rancho Santa Fe Junk Removal – Del Dios Highway to The Covenant</h2>

              <p className="text-lg text-gray-700 mb-6">
                <strong>Rancho Santa Fe junk removal</strong> requires the highest level of discretion and professionalism for one of San Diego County's most prestigious communities. From multi-acre estates along Del Dios Highway to exclusive homes in The Covenant gated community, our <strong>junk hauling Rancho Santa Fe</strong> service provides white-glove handling with the expertise expected by discerning property owners, estate managers, and luxury real estate professionals throughout Rancho Santa Fe, Fairbanks Ranch, and Rancho Valencia Resort neighborhoods.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Whether you need <strong>junk pickup Rancho Santa Fe</strong> for estate home renovations, equestrian facility maintenance, large property cleanouts, or discreet <strong>trash removal Rancho Santa Fe</strong> that respects your privacy and community standards, our <strong>Rancho Santa Fe San Diego junk removal</strong> team coordinates seamlessly with gate security, HOA requirements, property management teams, and household staff. We understand the unique access challenges of rolling hills estates, long private driveways, and gated community protocols that define Rancho Santa Fe's exclusive residential landscape.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Rancho Santa Fe's luxury estates and equestrian properties demand specialized <strong>junk hauling Rancho Santa Fe</strong> expertise. Our team regularly services properties along La Granada, Paseo Delicias, El Camino Del Norte, and Via De La Valle, providing the same meticulous attention to detail whether handling a single-item pickup from a Rancho Santa Fe Golf Club residence or coordinating multi-day estate cleanouts for large lot properties near Rancho Valencia. Every <strong>junk pickup Rancho Santa Fe</strong> project receives professional crews trained in luxury property protocols, valuable item handling, and the discretion required by high-profile estates throughout this exclusive community.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Exclusive Neighborhoods & Gated Communities We Serve</h2>
              <p className="text-lg mb-4">
                Rancho Santa Fe's 9,000+ acres encompass some of Southern California's most exclusive residential enclaves. Our <strong>junk removal Rancho Santa Fe</strong> service provides comprehensive coverage throughout the community's diverse neighborhoods:
              </p>

              <ul className="list-disc pl-6 mb-8 space-y-3">
                <li><strong>The Covenant</strong> – The original 6,200-acre master-planned community established by the Santa Fe Land Improvement Company in the 1920s. Properties in The Covenant must adhere to strict architectural review board guidelines for all modifications, including debris removal. We're familiar with the Art Jury approval processes, community standards, and privacy expectations of homeowners on estates ranging from 2 to 20+ acres. Long gated driveways, multi-structure properties (main houses, guest casitas, pool houses), and championship-level equestrian facilities require specialized logistics and discretion.</li>
                <li><strong>Fairbanks Ranch</strong> – This 1,100-acre master-planned community northeast of The Covenant features two championship golf courses and 800+ luxury homes on larger lots (typically 1-3 acres). Properties here often include extensive outdoor amenities—pool complexes, outdoor kitchens, sport courts, and mature landscaping. We coordinate with the Fairbanks Ranch POA requirements and respect community aesthetic standards. Gate access coordination and HOA documentation are seamlessly managed.</li>
                <li><strong>The Bridges</strong> – An exclusive 55+ active adult community featuring luxury homes, resort-style amenities, and meticulously maintained properties. Residents here often downsize from larger estates, requiring sensitive handling of valuable collections, fine furnishings, and decades of accumulated items. We provide white-glove estate cleanout services that respect the community's quiet, refined atmosphere.</li>
                <li><strong>Rancho Valencia Estates</strong> – Surrounding the world-renowned Rancho Valencia Resort & Spa, these properties epitomize Southern California luxury living. Homes here feature expansive indoor-outdoor spaces, chef's kitchens, wine cellars, and resort-quality landscaping. We handle high-end furniture removal, luxury appliance disposal, and renovation debris with the care these multi-million-dollar properties deserve.</li>
                <li><strong>Del Rayo Estates</strong> – Nestled in Rancho Santa Fe's eastern hills, these properties offer privacy, panoramic views, and large lots. The winding Del Rayo Road and elevated topography create access challenges that our experienced crews navigate expertly. We've serviced numerous estate cleanouts, property staging projects, and renovation debris removals in this prestigious enclave.</li>
                <li><strong>Crosby Estates</strong> – Named after Bing Crosby, one of Rancho Santa Fe's most famous historical residents, this exclusive neighborhood features sprawling estates on generous lots. Many properties date to Rancho Santa Fe's golden age and contain valuable antiques, historical furnishings, and collections requiring expert handling. Our team provides museum-quality care for sensitive estate items.</li>
                <li><strong>Equestrian Estates (Various locations)</strong> – Rancho Santa Fe is renowned for world-class equestrian facilities. We service working ranches, training facilities, and private equestrian estates throughout the community. This specialized work includes barn equipment removal, fencing materials, arena footing disposal, tack room cleanouts, and feed storage facilities. Our team understands horse property operations and coordinates around training schedules and animal welfare concerns.</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Major Roads & Access Routes Throughout Rancho Santa Fe</h2>
              <p className="text-lg mb-4">
                Navigating Rancho Santa Fe's winding roads, long private driveways, and secured gates requires local knowledge and careful planning. Our <strong>junk hauling Rancho Santa Fe</strong> team knows every major route and access point:
              </p>

              <h3 className="text-2xl font-bold mb-4">Primary Access Corridors</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Del Dios Highway (County S6)</strong> – The main east-west route through northern Rancho Santa Fe connects Escondido to Via De La Valle. Properties along Del Dios Highway range from historic estates to modern compounds, often on 5-20+ acre parcels. This scenic, winding two-lane road requires careful navigation with large vehicles, especially during morning commute hours (7-9 AM) when parents drive children to The Covenant School or Rancho Santa Fe School. We schedule estate services during midday hours (10 AM-3 PM) for optimal access and minimal traffic.</li>
                <li><strong>Via De La Valle (Highway 56 extension)</strong> – This major arterial forms Rancho Santa Fe's southern boundary, connecting I-5 to Fairbanks Ranch and The Covenant. The intersection with Linea Del Cielo provides access to The Bridges and southern Rancho Santa Fe neighborhoods. Morning and evening commute traffic (7-9 AM and 4-6 PM) can slow access, so we coordinate scheduling accordingly. The Via De La Valle/I-5 interchange area experiences heavy congestion during Del Mar Racing Season (summer) and major events at the Del Mar Fairgrounds.</li>
                <li><strong>Paseo Delicias</strong> – The heart of Rancho Santa Fe Village, this charming street hosts the community's boutique shopping district, art galleries, and fine dining restaurants (Mille Fleurs, Delicias). We service mixed-use buildings, commercial spaces, and nearby residential properties. Street parking is limited, requiring coordination with business owners and advance planning for commercial cleanouts. Morning hours (7-11 AM) before lunch crowds arrive offer best access.</li>
                <li><strong>La Granada / Avenida De Acacias</strong> – These parallel roads form the central spine through The Covenant's residential core. La Granada features the Rancho Santa Fe Golf Club, the Inn at Rancho Santa Fe, and historic estates on both sides. Avenida De Acacias runs through prime equestrian country with horse trails, arenas, and working ranches. We regularly service properties along both routes, respecting equestrian right-of-way rules and coordinating around horse traffic (common during early morning and evening hours).</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Key Secondary Streets & Neighborhoods</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Linea Del Cielo</strong> – Access to The Bridges community and surrounding estates. The gatehouse security requires advance coordination for vendor access. We maintain pre-approved vendor status and work closely with community management.</li>
                <li><strong>El Camino Del Norte</strong> – A scenic route through northern Covenant estates, this road winds through some of Rancho Santa Fe's most private properties. Long gated driveways (some exceeding 1/4 mile) are common, requiring advance gate code coordination and careful navigation of narrow tree-lined entries.</li>
                <li><strong>Rambla De Las Flores</strong> – Serving estates in the southwestern Covenant area near the Rancho Santa Fe School. Properties here often include extensive landscaping, requiring coordination for yard waste removal and landscape renovation debris.</li>
                <li><strong>El Montevideo</strong> – Winding through hillside estates with elevation changes and tight turns. Our drivers are trained in navigating these challenging access routes with full safety protocols.</li>
                <li><strong>Calzada Del Bosque</strong> – Tree-lined streets serving established neighborhoods with mature estates. Properties often contain decades of accumulated items, requiring sensitive estate cleanout services.</li>
                <li><strong>San Dieguito Road</strong> – Forms the eastern boundary of Rancho Santa Fe proper, transitioning to more rural properties and horse ranches. We service working equestrian facilities and large agricultural properties in this area.</li>
                <li><strong>El Tordo / El Secreto / El Brazo</strong> – Intimate cul-de-sac neighborhoods in the northern Covenant featuring privacy, seclusion, and high-end properties. Narrow streets and limited turnaround space require compact equipment and careful planning.</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Private Gated Entry Considerations</h3>
              <p className="text-lg mb-6">
                Most Rancho Santa Fe properties feature gated entries with advanced security systems. Our <strong>junk pickup Rancho Santa Fe</strong> team coordinates seamlessly:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>24-hour advance notice to gate security with crew names and vehicle descriptions</li>
                <li>Temporary access codes or security escort arrangements</li>
                <li>Coordination with estate managers, property management companies, or household staff</li>
                <li>Understanding of private community regulations regarding service vehicle hours and access points</li>
                <li>Respect for privacy requirements, including unmarked vehicles when requested for high-profile residents</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Iconic Rancho Santa Fe Landmarks & Service Areas</h2>
              <p className="text-lg mb-4">
                Rancho Santa Fe's landmarks define this exclusive community's character. Our <strong>trash removal Rancho Santa Fe</strong> service uses these well-known locations as reference points:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">Rancho Santa Fe Golf Club</h3>
                  <p className="mb-4">
                    The historic 1929 Max Behr-designed championship course at 5827 La Granada serves as Rancho Santa Fe's social centerpiece. Surrounding estates along La Granada and Avenida De Acacias represent some of the community's most valuable properties. We service these luxury homes for estate cleanouts, renovation debris, and property staging needs. Golf course view properties often require special care to protect pristine landscaping and maintain the aesthetic standards expected in this prestigious location.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">The Inn at Rancho Santa Fe</h3>
                  <p className="mb-4">
                    This luxury boutique hotel at 5951 Linea Del Cielo, established in 1941, anchors Rancho Santa Fe Village. We service nearby estates, provide <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">commercial junk removal</a> for village businesses, and coordinate with property owners in the surrounding residential blocks. The Inn's location makes it an ideal reference point for properties along Linea Del Cielo and Paseo Delicias.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Rancho Santa Fe Village Shopping District</h3>
                  <p className="mb-4">
                    Paseo Delicias and surrounding streets host boutique retailers (Turquoise & Tobacco, Chico's), art galleries (Adelman Fine Art), and fine dining (Mille Fleurs, Delicias). We provide commercial cleanout services for retail transitions, restaurant renovations, and office space updates. Loading zone access and coordination with neighboring businesses ensure minimal disruption to this charming pedestrian-friendly village center.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Rancho Santa Fe Schools (RSF School & The Covenant School)</h3>
                  <p className="mb-4">
                    These top-tier schools serve Rancho Santa Fe's families. We service surrounding neighborhoods during non-peak hours to avoid morning drop-off (7:30-8:30 AM) and afternoon pickup (2:30-3:30 PM) traffic. Many families moving into or out of school-area properties require our estate services for furniture, appliances, and accumulated household items.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Helen Woodward Animal Center</h3>
                  <p className="mb-4">
                    Located at 6461 El Apajo Road, this renowned animal care facility serves as a community gathering point. We donate usable items when appropriate and understand local residents' passion for animal welfare. Equestrian properties throughout Rancho Santa Fe often coordinate animal charity donations through our services.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Rancho Valencia Resort & Spa</h3>
                  <p className="mb-4">
                    This five-star resort at 5921 Valencia Circle epitomizes Rancho Santa Fe luxury. Surrounding estates share the same commitment to excellence, meticulous maintenance, and privacy. We service properties throughout the Rancho Valencia neighborhood with white-glove care matching the resort's world-class standards.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">The Bridges Golf Club</h3>
                  <p className="mb-4">
                    This Rees Jones-designed championship course serves The Bridges community. We're pre-approved vendors for estate services throughout this 55+ neighborhood, understanding the unique needs of residents transitioning from larger homes or managing decades of accumulated collections and fine furnishings.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Morgan Run Resort & Club</h3>
                  <p className="mb-4">
                    While technically outside The Covenant, this neighboring private club community shares similar luxury property characteristics. We service the surrounding area with the same professionalism and discretion expected throughout Rancho Santa Fe proper.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">San Dieguito River Park & Trails</h3>
                  <p className="mb-4">
                    The eastern boundary of Rancho Santa Fe includes protected open space and equestrian trails. Properties backing to these natural areas often require landscape debris removal, trail maintenance materials disposal, and environmentally sensitive cleanout services. We coordinate with county regulations for proper disposal of materials from these ecologically sensitive areas.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Lake Hodges & Del Dios Gorge Area</h3>
                  <p className="mb-4">
                    Properties with Lake Hodges views along Del Dios Highway represent some of Rancho Santa Fe's most scenic estates. Access via winding roads and elevated topography creates unique logistics challenges. Our experienced crews navigate these routes safely while protecting mature landscaping and pristine driveways.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Rancho Santa Fe Farms / Equestrian Facilities</h3>
                  <p className="mb-4">
                    Scattered throughout The Covenant and surrounding areas, working farms and equestrian training facilities define Rancho Santa Fe's agricultural heritage. We provide specialized services for barn cleanouts, arena maintenance debris, fencing materials removal, and agricultural equipment disposal. Our team understands horse property operations and coordinates around training schedules.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">RSF Association Community Center</h3>
                  <p className="mb-4">
                    This community hub hosts events, meetings, and serves as a gathering point for Rancho Santa Fe residents. We're familiar with community events that may affect traffic or access (horse shows, community fundraisers, Art Jury meetings) and schedule accordingly.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Rancho Santa Fe Traffic Patterns & Optimal Service Scheduling</h2>
              <p className="text-lg mb-4">
                While Rancho Santa Fe experiences minimal traffic compared to urban San Diego, strategic scheduling ensures efficient service and respects community tranquility. Our <strong>junk removal Rancho Santa Fe</strong> team has mastered these timing considerations:
              </p>

              <h3 className="text-2xl font-bold mb-4">School Schedule Coordination</h3>
              <p className="text-lg mb-4">
                The Covenant School and Rancho Santa Fe School generate predictable daily traffic patterns:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Morning drop-off (7:30-8:30 AM)</strong> – Roads near schools (Rambla De Las Flores, Via De La Cumbre) experience increased traffic. We avoid scheduling large-vehicle access during this window.</li>
                <li><strong>Midday optimal window (9 AM-2 PM)</strong> – Quiet roads, minimal traffic, optimal access for estate services throughout The Covenant and Fairbanks Ranch. This is our preferred service window for large estate cleanouts.</li>
                <li><strong>Afternoon pickup (2:30-3:30 PM)</strong> – Brief surge near schools and surrounding neighborhoods. We complete large jobs before this window or delay arrival until after 4 PM.</li>
                <li><strong>Evening and weekend service</strong> – Available by request for high-profile residents requiring maximum privacy. Many luxury estate owners prefer discreet evening service (after 5 PM) when fewer community members are circulating.</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Equestrian Community Considerations</h3>
              <p className="text-lg mb-4">
                Rancho Santa Fe's equestrian culture influences daily rhythms:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Early morning riding (6-9 AM)</strong> – Horses in training or recreational riding on trails and roads. Our drivers exercise extreme caution around horse traffic and yield completely to equestrians. Loud noises, sudden movements, and rushed driving are prohibited near horses.</li>
                <li><strong>Midday barn operations</strong> – Optimal time for equestrian facility services (barn cleanouts, arena maintenance, equipment removal) when horses are typically in paddocks or out on trails.</li>
                <li><strong>Evening feeding time (4-6 PM)</strong> – We avoid scheduling equestrian property services during this critical horse care window when barn staff need uninterrupted access.</li>
                <li><strong>Show and event coordination</strong> – Major equestrian events throughout the year require advance scheduling adjustments. We maintain awareness of the horse show calendar and coordinate with facility managers.</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Seasonal Traffic Considerations</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Del Mar Racing Season (summer months)</strong> – Via De La Valle experiences increased traffic during racing days, particularly afternoons and evenings. We schedule southern Rancho Santa Fe properties during morning hours or non-race days.</li>
                <li><strong>Holiday periods (Thanksgiving, Christmas, New Year)</strong> – Family gatherings increase residential activity. Many estate cleanouts are scheduled immediately after holidays when families depart and property owners address accumulated items.</li>
                <li><strong>Fire season (September-November)</strong> – Santa Ana wind events may trigger evacuation alerts or road closures. We monitor conditions closely and can provide emergency debris removal services if needed.</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Weekend vs. Weekday Service</h3>
              <p className="text-lg mb-6">
                Most Rancho Santa Fe residents prefer weekday service (Tuesday-Thursday) for minimal disruption. Weekend appointments are available for working professionals or urgent needs but require advance scheduling due to limited weekend crew availability.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Rancho Santa Fe Climate & Weather Impacts on Estate Services</h2>
              <p className="text-lg mb-4">
                Rancho Santa Fe's inland North County coastal location creates a Mediterranean microclimate distinct from both coastal and inland areas. Understanding these weather patterns ensures year-round service excellence:
              </p>

              <h3 className="text-2xl font-bold mb-4">Dry Mediterranean Climate & Year-Round Service</h3>
              <p className="text-lg mb-4">
                Rancho Santa Fe enjoys approximately 280 sunny days annually with average temperatures of 60-80°F. This consistent climate allows year-round estate services without weather delays common in other regions:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Predictable service scheduling</strong> – Weather rarely forces rescheduling, allowing estate managers and property owners to plan with confidence</li>
                <li><strong>Optimal conditions for outdoor work</strong> – Pool equipment removal, outdoor kitchen dismantling, patio furniture disposal, and landscape debris hauling proceed comfortably year-round</li>
                <li><strong>Lower humidity</strong> – Unlike coastal properties, Rancho Santa Fe experiences dry air that preserves outdoor furniture and equipment longer. However, items stored outdoors for years still deteriorate from UV exposure and require eventual disposal.</li>
                <li><strong>Extended outdoor living season</strong> – Residents use outdoor spaces year-round, leading to gradual furniture replacement cycles rather than seasonal surges</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Santa Ana Wind Events (September-December)</h3>
              <p className="text-lg mb-4">
                Hot, dry easterly Santa Ana winds represent Rancho Santa Fe's most significant weather events:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Wind damage debris</strong> – Mature trees, eucalyptus groves, and large property landscaping can sustain wind damage. We provide rapid-response yard waste removal following major wind events, often fielding dozens of calls for tree limb cleanup, fallen fences, and blown-over outdoor structures.</li>
                <li><strong>Fire risk awareness</strong> – Rancho Santa Fe's eucalyptus-lined streets and open space wildfire risk increases during Santa Ana conditions. We maintain heightened awareness during red flag warnings and can provide emergency evacuation debris removal if needed. Our team follows all fire marshal guidelines for debris staging during high-risk periods.</li>
                <li><strong>Dust and air quality</strong> – Strong winds create dusty conditions on dirt driveways and equestrian properties. We tarp loads carefully to prevent debris blow-off during transport through the community.</li>
                <li><strong>Temperature spikes</strong> – Santa Ana events can push temperatures to 85-95°F. We adjust crew protocols with enhanced hydration and shade breaks during multi-hour estate cleanouts.</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Winter Rainfall & Drainage Considerations (December-March)</h3>
              <p className="text-lg mb-4">
                Rancho Santa Fe receives 12-14 inches of annual rainfall concentrated in winter months:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Muddy access routes</strong> – Long dirt driveways and equestrian properties can become muddy during heavy rain. We assess conditions and may suggest delayed service to prevent property damage from heavy vehicles. Estate managers appreciate this cautious approach.</li>
                <li><strong>Water-damaged items</strong> – Rain can infiltrate storage areas, garages, and barns on large properties. We provide rapid response for water-damaged furniture, appliances, and stored items requiring immediate removal to prevent mold.</li>
                <li><strong>Landscape debris surge</strong> – Winter storms trigger tree trimming and landscape maintenance projects. We see increased demand for yard waste removal and green waste disposal during February-March as properties prepare for spring.</li>
                <li><strong>Equipment staging</strong> – We use tarps and moisture protection for weather-sensitive items during rainy period removals, ensuring valuable furnishings aren't damaged during transport from covered areas to trucks.</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Spring & Fall Optimal Service Periods</h3>
              <p className="text-lg mb-6">
                March-May and September-November represent peak estate service seasons in Rancho Santa Fe:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Spring refresh (March-May)</strong> – Property owners undertake major cleanouts, furniture replacement, and estate reorganization after winter. Pleasant 65-75°F temperatures and clear skies make this ideal for large multi-day projects. We recommend booking 1-2 weeks in advance during this busy season.</li>
                <li><strong>Fall transitions (September-November)</strong> – Families return from summer travel, students go back to school, and estate managers tackle accumulated projects. Pre-holiday cleanouts and preparation for winter entertaining drive service demand. Morning fog is rare, unlike coastal areas, providing full-day optimal working conditions.</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">UV Exposure & Furniture Deterioration</h3>
              <p className="text-lg mb-6">
                Rancho Santa Fe's abundant sunshine (280+ sunny days) accelerates outdoor furniture aging:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Patio furniture fading</strong> – Even high-quality outdoor furniture experiences UV fabric fading and frame degradation after 5-10 years. We regularly remove sun-damaged patio sets, pool loungers, and outdoor dining furniture from estate properties.</li>
                <li><strong>Pool equipment degradation</strong> – Pumps, heaters, and pool furniture stored outside show faster wear than coastal or shaded areas. We handle disposal of failed pool equipment and coordinate with property managers on replacement logistics.</li>
                <li><strong>Canvas and fabric items</strong> – Awnings, umbrellas, cushions, and fabric shades require replacement every 3-7 years. We remove these items and can coordinate bulk disposal for properties replacing multiple outdoor fabric elements simultaneously.</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Comprehensive Luxury Estate Services</h2>

              <h3 className="text-2xl font-bold mb-4">White-Glove Estate Cleanouts</h3>
              <p className="text-lg mb-4">
                Rancho Santa Fe estates often contain valuable antiques, art collections, and heirloom furnishings requiring specialized handling:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Valuable item protection</strong> – We use furniture blankets, custom padding, and careful handling techniques for museum-quality pieces, even when removing items for disposal</li>
                <li><strong>Estate executor coordination</strong> – We work closely with attorneys, executors, and family members during sensitive estate transitions following death or major life changes</li>
                <li><strong>Appraisal and donation facilitation</strong> – We help identify potentially valuable items and coordinate with appraisers or donation centers for tax-deductible charitable giving</li>
                <li><strong>Complete property clearance</strong> – From attics to wine cellars, guest casitas to pool houses, we clear entire multi-structure estates efficiently and respectfully</li>
                <li><strong>Staging preparation</strong> – Luxury real estate agents rely on us to prepare estates for high-end staging and listing photography</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Equestrian Property Specialized Services</h3>
              <p className="text-lg mb-4">
                Rancho Santa Fe's world-class equestrian facilities require specialized <strong>junk hauling Rancho Santa Fe</strong> expertise:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Barn and tack room cleanouts</strong> – Old saddles, bridles, equipment, and supplies accumulate over decades of ownership. We sort through items, identify donation candidates (local riding programs welcome usable equipment), and dispose of unusable materials properly.</li>
                <li><strong>Arena footing and fencing</strong> – Failed arena materials, old jump equipment, and deteriorated fencing require proper disposal. We coordinate with equestrian facility managers on timing that doesn't disrupt training schedules.</li>
                <li><strong>Feed and storage buildings</strong> – Cleaning out old feed storage, hay barns, and equipment sheds. We understand rodent control concerns and work efficiently to prevent attracting pests during cleanout operations.</li>
                <li><strong>Trailer and vehicle debris</strong> – Old horse trailers, farm vehicles, and equipment beyond repair. We coordinate with vehicle recyclers and salvage companies when appropriate.</li>
                <li><strong>Animal welfare considerations</strong> – Our crews are trained in working around horses safely, understanding horse behavior, and coordinating with barn staff to ensure animal comfort during operations.</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Luxury Renovation & Construction Debris</h3>
              <p className="text-lg mb-6">
                High-end estate renovations generate substantial debris requiring specialized removal:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Custom cabinetry and millwork</strong> – Removing hand-crafted cabinets, built-ins, and architectural elements from kitchen, wine cellar, and library renovations</li>
                <li><strong>Stone and tile materials</strong> – Granite, marble, and designer tile from bathroom and kitchen remodels require proper disposal due to weight and volume</li>
                <li><strong>Outdoor kitchen demolition</strong> – Gas grills, refrigerators, pizza ovens, and built-in outdoor entertainment systems</li>
                <li><strong>Pool and spa renovation debris</strong> – Old pool equipment, deck materials, and spa components. (See our specialized <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">hot tub removal services</a>)</li>
                <li><strong>Smart home technology</strong> – Outdated automation systems, old theater equipment, and replaced technology infrastructure</li>
                <li><strong>Estate generator and mechanical</strong> – Failed backup generators, old HVAC systems, and obsolete mechanical equipment</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Downsizing & Senior Transition Support</h3>
              <p className="text-lg mb-6">
                Many Rancho Santa Fe residents transition from large estates to smaller homes or assisted living:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Compassionate service</strong> – We understand the emotional difficulty of leaving a longtime family home and work with sensitivity during these transitions</li>
                <li><strong>Item sorting and organization</strong> – Helping families identify keep, donate, sell, and discard items from decades of accumulation</li>
                <li><strong>Multi-visit coordination</strong> – Large estates may require several sessions to properly sort and remove items without overwhelming families</li>
                <li><strong>Storage coordination</strong> – Working with moving companies and storage facilities to coordinate complex relocations</li>
                <li><strong>Charity tax documentation</strong> – Providing detailed donation receipts for tax deduction purposes when we deliver items to qualified charities</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Items We Remove from Rancho Santa Fe Estates</h2>
              <p className="text-lg mb-4">
                Our comprehensive <strong>trash removal Rancho Santa Fe</strong> service handles virtually any non-hazardous estate item:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">Luxury Furniture & Furnishings</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Custom sofas, sectionals, estate seating</li>
                    <li>Formal dining sets, conference tables</li>
                    <li>Bedroom suites, armoires, dressers</li>
                    <li>Antique furniture, heirloom pieces</li>
                    <li>Home office furniture, libraries</li>
                    <li>Designer outdoor furniture sets</li>
                    <li>Piano removal (grands, uprights, player pianos)</li>
                    <li>Billiard tables, game room equipment</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">High-End Appliances</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Sub-Zero refrigerators, wine cellars</li>
                    <li>Wolf, Viking, Thermador ranges</li>
                    <li>Miele dishwashers, steam ovens</li>
                    <li>Commercial-grade kitchen equipment</li>
                    <li>Outdoor kitchen appliances</li>
                    <li>Washers, dryers, laundry room equipment</li>
                    <li>Water treatment systems, softeners</li>
                    <li>HVAC components, ductwork</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Equestrian & Agricultural</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Saddles, bridles, tack equipment</li>
                    <li>Barn equipment, stable supplies</li>
                    <li>Arena fencing, jump equipment</li>
                    <li>Feed storage bins, containers</li>
                    <li>Horse trailers, farm vehicles</li>
                    <li>Livestock equipment, feeders</li>
                    <li>Hay storage, agricultural supplies</li>
                    <li>Property fencing, gates, posts</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Outdoor & Recreation</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Pool furniture, loungers, umbrellas</li>
                    <li>Hot tubs, spas, jacuzzis</li>
                    <li>Outdoor kitchens, BBQ equipment</li>
                    <li>Patio heaters, fire pits</li>
                    <li>Sport court equipment (tennis, basketball)</li>
                    <li>Playground equipment, trampolines</li>
                    <li>Garden statuary, fountains, ornaments</li>
                    <li>Landscape lighting, irrigation components</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Estate Collections & Storage</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Wine collections (empty bottles, racks)</li>
                    <li>Book collections, library contents</li>
                    <li>Art studio equipment, supplies</li>
                    <li>Hobby and craft materials</li>
                    <li>Holiday decorations, storage</li>
                    <li>Luggage, travel equipment</li>
                    <li>Boxes, bins, accumulated storage</li>
                    <li>Garage and workshop tools, equipment</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Technology & Entertainment</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Home theater systems, projectors</li>
                    <li>Smart home equipment, automation</li>
                    <li>Computer equipment, servers</li>
                    <li>Audio systems, speakers</li>
                    <li>Security systems, cameras</li>
                    <li>Exercise equipment, home gyms</li>
                    <li>Saunas, steam rooms</li>
                    <li>Golf simulators, entertainment tech</li>
                  </ul>
                </div>
              </div>

              <p className="text-lg mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <strong>Items Requiring Special Handling:</strong> Hazardous materials (paint, chemicals, asbestos), regulated waste, and certain construction materials require specialized disposal. Call <a href="tel:6197500114" className="text-blue-600 hover:underline">(619) 750-0114</a> to discuss specific items and disposal requirements for your estate property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <LocationPricingSection
        locationName="Rancho Santa Fe"
        contextParagraph="Estate cleanouts, equestrian facility services, and luxury property renovations throughout The Covenant, Fairbanks Ranch, and all Rancho Santa Fe communities use our transparent pricing. For multi-acre properties and large estate projects, call for custom quotes."
      />

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Rancho Santa Fe Estate Owners Trust Severin Cleaners</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏛️</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Luxury Estate Expertise</h3>
                  <p className="text-gray-600">Our crews are specially trained in white-glove handling, valuable item protection, and the discretion expected by Rancho Santa Fe's discerning property owners and estate managers.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚪</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">HOA-Approved Vendor</h3>
                  <p className="text-gray-600">We're pre-approved by multiple Rancho Santa Fe gated communities including The Covenant, Fairbanks Ranch, and The Bridges. We understand gate protocols, community standards, and HOA requirements.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🐴</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Equestrian Property Specialists</h3>
                  <p className="text-gray-600">We understand horse property operations, barn logistics, and equestrian facility needs. Our team coordinates around training schedules and respects animal welfare at all times.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Absolute Discretion</h3>
                  <p className="text-gray-600">High-profile residents appreciate our privacy protection protocols, including unmarked vehicles when requested. We coordinate with household staff and maintain complete confidentiality.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Same-Day Service Available</h3>
                  <p className="text-gray-600">Estate emergencies, property staging deadlines, and HOA compliance issues require rapid response. We provide same-day service when scheduled before 2 PM.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✅</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Licensed & Fully Insured</h3>
                  <p className="text-gray-600">Comprehensive liability insurance specifically covering luxury estates, valuable property contents, and equestrian facilities. All documentation provided for property management needs.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-xl font-bold mb-3">Rancho Santa Fe Communities We Serve:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li>✓ The Covenant gated estates</li>
                  <li>✓ Fairbanks Ranch luxury homes</li>
                  <li>✓ The Bridges 55+ community</li>
                  <li>✓ Rancho Valencia estates</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Del Rayo Estates</li>
                  <li>✓ Crosby Estates</li>
                  <li>✓ Equestrian properties throughout RSF</li>
                  <li>✓ All Rancho Santa Fe neighborhoods</li>
                </ul>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Schedule Your Rancho Santa Fe Estate Service?</h3>
              <p className="text-xl mb-6">
                White-Glove Service • HOA-Approved • Same-Day Available • Licensed & Insured
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
      <RanchoSantaFeFAQSection />

      {/* Related Services */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Related Rancho Santa Fe Estate Services</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/furniture-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
              <p className="text-gray-600">Large furniture removal from estate homes with white-glove handling for antiques and custom pieces</p>
            </a>
            <a href="/appliance-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal San Diego</h4>
              <p className="text-gray-600">Professional-grade kitchen appliances, outdoor kitchens, and gym equipment removal from luxury properties</p>
            </a>
            <a href="/construction-debris-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
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
