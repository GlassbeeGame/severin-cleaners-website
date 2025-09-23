import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Construction Debris Removal San Diego | Hauling & Demolition Cleanup | Same-Day Service",
  description: "Professional construction debris removal San Diego - licensed construction hauling, demolition cleanup, job site debris removal. OSHA compliant, LEED documentation. Call (619) 750-0114!",
  keywords: "construction debris removal San Diego, construction hauling San Diego, demolition cleanup San Diego, construction waste disposal San Diego, job site debris removal San Diego, construction waste management San Diego, licensed construction debris disposal",
  openGraph: {
    title: "Construction Debris Removal San Diego | Professional Construction Hauling",
    description: "Fast, reliable construction debris removal for contractors and property managers in San Diego. Same-day service and proper disposal.",
    url: "https://severincleaners.com/construction-debris-removal-san-diego",
  },
  alternates: {
    canonical: "https://severincleaners.com/construction-debris-removal-san-diego",
  },
};

export default function ConstructionDebrisRemovalPage() {
  return (
    <div className={`${inter.variable} font-sans antialiased`}>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Construction Debris Removal San Diego – Professional Hauling & Demolition Cleanup
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Licensed Construction Hauling • OSHA Compliant • Same-Day Job Site Debris Removal
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  CALL FOR SAME-DAY CONSTRUCTION HAULING: (619) 750-0114
                </a>
                <a
                  href="#contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  GET CONTRACTOR QUOTE IN MINUTES
                </a>
              </div>
              <p className="mt-6 text-sm text-blue-100">
                🏗️ Licensed & insured • LEED documentation • Avoid delays — keep your project on schedule
              </p>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why San Diego Contractors Trust Our Licensed Construction Debris Disposal
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Same-Day Emergency Service</h3>
                <p className="text-gray-600">
                  Rapid job site debris removal San Diego to prevent project delays. Emergency construction hauling available 7 days a week.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">OSHA & LEED Compliant</h3>
                <p className="text-gray-600">
                  Licensed construction waste disposal San Diego with full permit documentation. OSHA compliance and LEED project support included.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Contractor Volume Pricing</h3>
                <p className="text-gray-600">
                  Competitive rates for construction waste management San Diego. Volume discounts, NET terms, and ongoing contracts available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Licensed Construction Debris Removal San Diego - OSHA Compliant & Fully Insured
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                  When your construction, renovation, or demolition project generates debris, Severin Cleaners provides licensed <strong>construction debris removal San Diego</strong> services that keep your project on schedule and your job site compliant. Our experienced team understands the critical demands of construction work and provides the prompt, professional construction hauling San Diego contractors depend on for project success.
                </p>

                <p className="text-lg mb-6">
                  Our <strong>construction hauling San Diego</strong> service handles everything from daily job site cleanup to complete demolition cleanouts. We work with general contractors, specialty contractors, property managers, and project developers to provide efficient construction waste management San Diego that meets permit requirements, OSHA compliance standards, and project deadlines while ensuring proper disposal at licensed facilities.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Complete Job Site Debris Removal San Diego Services</h3>
                <p className="text-lg mb-4">
                  Severin Cleaners offers comprehensive <strong>construction debris removal San Diego</strong> services for all types of construction, renovation, and demolition projects throughout San Diego County:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Demolition Cleanup Services</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Complete <strong>demolition cleanup San Diego</strong> for residential and commercial projects</li>
                      <li>Structural demolition debris removal and site clearing</li>
                      <li>Concrete, masonry, and foundation debris hauling</li>
                      <li>Steel beam, metal framing, and rebar removal</li>
                      <li>Hazardous material coordination and abatement support</li>
                      <li>Post-demolition site preparation and grading support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Renovation & Remodel Debris</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Complete renovation debris removal for all trade contractors</li>
                      <li>Kitchen and bathroom remodel construction waste disposal</li>
                      <li>Flooring removal, tile debris, and carpet disposal</li>
                      <li>Drywall, sheetrock, and insulation material hauling</li>
                      <li>Window, door, and trim replacement debris removal</li>
                      <li>Roofing material and shingle disposal service</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">New Construction Support</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Daily construction cleanup and job site debris removal</li>
                      <li>Material packaging waste and shipping debris disposal</li>
                      <li>Cut-off materials, lumber scraps, and excess material hauling</li>
                      <li>Final construction cleanup and move-in preparation</li>
                      <li>Site preparation, land clearing, and excavation support</li>
                      <li>Ongoing project construction waste management contracts</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Commercial & Industrial Projects</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Large-scale commercial construction debris removal San Diego</li>
                      <li>Office building and tenant improvement debris disposal</li>
                      <li>Retail, restaurant, and hospitality construction cleanup</li>
                      <li>Industrial facility demolition and equipment removal</li>
                      <li>Multi-unit residential and mixed-use project support</li>
                      <li>Coordinated multi-phase construction waste management</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Construction Waste Disposal San Diego - All Material Types</h3>
                <p className="text-lg mb-4">
                  Our licensed <strong>construction debris removal San Diego</strong> service handles all types of construction and demolition materials with proper disposal documentation:
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold mb-2">Structural Materials</h4>
                    <ul className="list-disc pl-4 text-sm space-y-1">
                      <li>Lumber, framing materials, and engineered wood</li>
                      <li>Drywall, sheetrock, and wallboard debris</li>
                      <li>Concrete, masonry, and brick demolition debris</li>
                      <li>Roofing materials, shingles, and membrane systems</li>
                      <li>Insulation, vapor barriers, and weather-proofing</li>
                      <li>Siding, stucco, and exterior cladding materials</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Interior & Finish Materials</h4>
                    <ul className="list-disc pl-4 text-sm space-y-1">
                      <li>Flooring debris - carpet, tile, hardwood, vinyl</li>
                      <li>Cabinets, countertops, and millwork removal</li>
                      <li>Doors, windows, and frame removal</li>
                      <li>Trim, molding, and architectural elements</li>
                      <li>Bathroom and kitchen fixtures and appliances</li>
                      <li>Light fixtures, electrical panels, and wiring</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Heavy Equipment & Systems</h4>
                    <ul className="list-disc pl-4 text-sm space-y-1">
                      <li>Steel beams, metal framing, and structural steel</li>
                      <li>HVAC equipment, ductwork, and mechanical systems</li>
                      <li>Plumbing fixtures, pipes, and water systems</li>
                      <li>Construction equipment and machinery removal</li>
                      <li>Concrete chunks, asphalt, and paving materials</li>
                      <li>Mixed construction waste and general debris</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Our Licensed Construction Hauling Process</h3>
                <p className="text-lg mb-4">
                  When you choose our <strong>construction hauling San Diego</strong> service, here's our proven contractor-focused process:
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                  <li><strong>Project Assessment & Estimation:</strong> Licensed estimator evaluates debris volume, material types, and access requirements for accurate contractor pricing</li>
                  <li><strong>Permit & Documentation Review:</strong> Ensure full compliance with San Diego County construction waste regulations and permit requirements</li>
                  <li><strong>Flexible Project Scheduling:</strong> Service scheduled around your construction timeline with same-day emergency pickup available</li>
                  <li><strong>Professional Job Site Removal:</strong> Experienced crews safely load and remove all construction debris while maintaining OSHA compliance</li>
                  <li><strong>LEED-Compliant Material Sorting:</strong> Materials sorted for recycling, disposal, or donation according to environmental best practices</li>
                  <li><strong>Licensed Facility Disposal:</strong> All debris disposed of at certified construction waste facilities with full documentation</li>
                  <li><strong>Compliance Documentation:</strong> Disposal receipts, recycling certificates, and permit documentation provided for all projects</li>
                </ol>

                <h3 className="text-2xl font-bold mt-8 mb-4">Specialized Construction Waste Management San Diego</h3>

                <h4 className="text-xl font-bold mb-3">Daily Job Site Debris Removal</h4>
                <p className="text-lg mb-4">
                  For ongoing construction projects, we provide scheduled daily, weekly, or bi-weekly <strong>job site debris removal San Diego</strong> to maintain clean, safe work environments. Regular construction cleanup helps ensure OSHA compliance, improves worker safety and productivity, and prevents project delays from debris accumulation that can interfere with trade scheduling and inspections.
                </p>

                <h4 className="text-xl font-bold mb-3">Expanded Emergency and Rush Construction Hauling</h4>
                <p className="text-lg mb-4">
                  When construction schedules change, inspections are moved up, or unexpected debris emergencies arise, our emergency <strong>construction hauling San Diego</strong> service provides same-day response to keep critical projects on track. We understand that construction delays compound costs exponentially, so we maintain priority dispatch for established contractor clients and urgent construction deadlines.
                </p>
                <p className="text-lg mb-4">
                  Our emergency response includes weekend and after-hours service, coordinated debris removal for permit inspections, and rapid response for weather-related construction emergencies. We maintain standby crews during peak construction seasons to ensure reliable service when contractors need it most.
                </p>

                <h4 className="text-xl font-bold mb-3">Enhanced Property Manager Construction Support</h4>
                <p className="text-lg mb-4">
                  Property managers throughout San Diego rely on our <strong>construction debris removal San Diego</strong> services for tenant improvements, maintenance projects, property renovations, and emergency repairs. We provide specialized billing solutions including direct billing to property management companies, detailed cost breakdowns for tenant billing, and flexible scheduling that accommodates occupied properties and business operations.
                </p>
                <p className="text-lg mb-4">
                  Our property management services include coordination with maintenance staff, after-hours service for emergency repairs, and comprehensive documentation for property accounting and insurance purposes. We understand the unique challenges of managing construction projects in occupied buildings and provide discreet, professional service that minimizes tenant disruption.
                </p>

                <h4 className="text-xl font-bold mb-3">LEED & Green Building Compliance</h4>
                <p className="text-lg mb-4">
                  For LEED-certified projects and green building initiatives, our <strong>construction waste disposal San Diego</strong> service provides detailed documentation and material tracking required for certification. We maintain relationships with specialized recycling facilities and provide comprehensive reporting on material diversion rates, recycling percentages, and waste stream documentation required for LEED submissions.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                  <p className="font-bold text-yellow-800">
                    🏠 Construction Involving Appliances or Estate Properties?
                  </p>
                  <p className="text-yellow-700 mt-2">
                    If your construction project includes appliance removal, see our <Link href="/appliance-removal-san-diego" className="text-blue-600 underline">specialized appliance removal services</Link>. For estate properties requiring construction work, our <Link href="/estate-cleanout-san-diego" className="text-blue-600 underline">estate cleanout specialists</Link> coordinate seamlessly with construction teams.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">San Diego Construction Areas We Serve</h3>
                <p className="text-lg mb-4">
                  Our licensed <strong>construction debris removal San Diego</strong> service covers all major construction zones throughout San Diego County with priority response:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <ul className="list-disc pl-4">
                    <li>Downtown & Urban Core construction projects</li>
                    <li>Mission Valley & Hillcrest development zones</li>
                    <li>Pacific Beach & coastal construction sites</li>
                    <li>La Jolla & UTC commercial developments</li>
                    <li>Point Loma & Liberty Station mixed-use projects</li>
                  </ul>
                  <ul className="list-disc pl-4">
                    <li>Chula Vista & South Bay residential developments</li>
                    <li>El Cajon & East County commercial construction</li>
                    <li>Escondido & North County industrial projects</li>
                    <li>Oceanside & Carlsbad resort construction</li>
                    <li>Poway & Rancho Penasquitos master-planned communities</li>
                  </ul>
                  <ul className="list-disc pl-4">
                    <li>National City & Paradise Hills redevelopment</li>
                    <li>La Mesa & Santee residential construction</li>
                    <li>Vista & San Marcos commercial projects</li>
                    <li>Imperial Beach & Coronado specialty construction</li>
                    <li>All unincorporated San Diego County areas</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Advanced Environmental Construction Waste Management</h3>
                <p className="text-lg mb-4">
                  Severin Cleaners leads San Diego in environmentally responsible <strong>construction waste disposal San Diego</strong> practices. Our licensed team follows strict environmental protocols while maximizing material recovery for construction projects:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Construction Material Recycling:</strong> Wood, metal, concrete, asphalt, and drywall recycled through certified construction waste facilities</li>
                  <li><strong>LEED Documentation:</strong> Detailed material tracking and diversion reporting for LEED certification requirements</li>
                  <li><strong>Hazardous Material Coordination:</strong> Proper coordination for asbestos, lead, and other hazardous construction materials</li>
                  <li><strong>Salvage and Reuse Programs:</strong> Coordination with architectural salvage and material reuse organizations</li>
                  <li><strong>Landfill Diversion:</strong> 75% average diversion rate from landfills through aggressive recycling and reuse programs</li>
                  <li><strong>Compliance Documentation:</strong> Complete disposal records, recycling certificates, and environmental compliance reporting</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Contractor-Focused Pricing and Payment Terms</h3>
                <p className="text-lg mb-4">
                  Our <strong>construction hauling San Diego</strong> pricing is designed specifically for contractor needs with transparent, competitive rates:
                </p>
                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                  <ul className="space-y-2">
                    <li><strong>Small Load (under 2 cubic yards):</strong> $199-$299 (renovation debris, single room projects)</li>
                    <li><strong>Medium Load (2-5 cubic yards):</strong> $399-$599 (bathroom/kitchen remodels, small demolition)</li>
                    <li><strong>Large Load (5-15 cubic yards):</strong> $799-$1,499 (whole house renovation, commercial projects)</li>
                    <li><strong>Commercial/Industrial:</strong> $1,500+ (large commercial, multi-phase projects)</li>
                    <li><strong>Contract Pricing:</strong> Volume discounts for ongoing construction waste management</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4">
                    * Pricing includes labor, transportation, licensed disposal, and documentation. NET-30 payment terms available for established contractors.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Licensed Construction Debris Disposal</h3>
                <p className="text-lg mb-4">
                  Professional construction projects require properly licensed, insured, and compliant waste management services:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Full Licensing & Insurance:</strong> California contractor's license, commercial liability, and workers compensation coverage</li>
                  <li><strong>OSHA Compliance:</strong> Trained crews following all workplace safety regulations for construction sites</li>
                  <li><strong>Permit Documentation:</strong> Complete disposal documentation for permit compliance and project closeout</li>
                  <li><strong>Specialized Equipment:</strong> Commercial trucks, roll-off containers, and construction-specific hauling equipment</li>
                  <li><strong>Contractor-Focused Service:</strong> Understanding of construction schedules, deadlines, and project coordination requirements</li>
                  <li><strong>Environmental Compliance:</strong> Meeting all California construction waste regulations and disposal requirements</li>
                </ul>

                {/* FAQ Section */}
                <div className="bg-blue-50 p-8 rounded-lg mt-12 mb-8">
                  <h2 className="text-3xl font-bold mb-8 text-blue-900">
                    Frequently Asked Questions - Construction Debris Removal San Diego
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        How much does construction debris removal cost in San Diego?
                      </h3>
                      <p className="text-gray-700">
                        Construction debris removal San Diego costs range from $199 for small loads to $1,500+ for large commercial projects. Most renovation projects average $399-$599, while demolition cleanup San Diego typically costs $799-$1,499. Our licensed construction haulers provide transparent contractor pricing with NET-30 terms available for established clients.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        Do you provide same-day or emergency construction hauling?
                      </h3>
                      <p className="text-gray-700">
                        Yes, we offer same-day construction hauling San Diego when you call before 2 PM. Emergency job site debris removal is available 7 days a week for urgent construction deadlines, permit inspections, and weather-related emergencies. We understand construction delays cost money and prioritize contractor emergency requests.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        Can you handle hazardous or restricted materials?
                      </h3>
                      <p className="text-gray-700">
                        Our construction waste disposal San Diego service coordinates with certified hazardous material contractors for asbestos, lead, and other restricted materials. While we don't handle hazmat directly, we work with licensed specialists and can coordinate combined removal for streamlined project management and compliance documentation.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        Do you provide documentation for permits or LEED projects?
                      </h3>
                      <p className="text-gray-700">
                        Absolutely. Our licensed construction debris disposal includes complete documentation for permit compliance, LEED certification, and environmental reporting. We provide disposal receipts, recycling certificates, material diversion reports, and waste stream documentation required for project closeout and green building certification.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        Do you offer ongoing debris removal contracts for large projects?
                      </h3>
                      <p className="text-gray-700">
                        Yes, we specialize in construction waste management San Diego contracts for ongoing projects. We offer daily, weekly, or bi-weekly job site debris removal with volume pricing, NET payment terms, and dedicated project coordinators. Contract pricing includes emergency service and priority scheduling for established clients.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg mt-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">
                    🏗️ Ready for Professional Construction Debris Removal?
                  </h3>
                  <p className="text-lg mb-4 text-gray-800">
                    Keep your construction project on schedule with reliable, licensed <strong>construction debris removal San Diego</strong> service. Same-day emergency service available. Avoid delays — contact us for competitive contractor pricing and immediate scheduling.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:+16197500114"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-center font-bold transition-colors inline-block"
                    >
                      Call Today for Same-Day Construction Hauling: (619) 750-0114
                    </a>
                    <a
                      href="#contact"
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg text-center font-bold transition-colors inline-block"
                    >
                      Get a Contractor Quote in Minutes
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Licensed & OSHA compliant • NET-30 terms available • LEED documentation • All San Diego County
                  </p>
                </div>

                {/* Trust Signals */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="grid md:grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold text-blue-600">2,000+</p>
                      <p className="text-sm text-gray-600">Construction Projects Completed</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">Licensed</p>
                      <p className="text-sm text-gray-600">OSHA Compliant & Insured</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">75%</p>
                      <p className="text-sm text-gray-600">Landfill Diversion Rate</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">Same-Day</p>
                      <p className="text-sm text-gray-600">Emergency Service</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}