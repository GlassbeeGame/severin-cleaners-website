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
  title: "Estate Cleanout San Diego | Respectful Probate Cleanout Services",
  description: "Compassionate estate cleanout San Diego services. Probate cleanout, senior downsizing, inheritance property cleanout. Licensed, respectful, professional. Call (619) 750-0114.",
  keywords: "estate cleanout San Diego, probate cleanout San Diego, estate clearing services San Diego, senior downsizing services, inherited property cleanout San Diego, estate sale cleanout, death cleanup",
  openGraph: {
    title: "Estate Cleanout San Diego | Respectful Probate & Senior Downsizing",
    description: "Compassionate, professional estate cleanout services in San Diego. Probate cleanout, estate sales, senior downsizing with dignity and care.",
    url: "https://severincleaners.com/estate-cleanout-san-diego",
  },
  alternates: {
    canonical: "https://severincleaners.com/estate-cleanout-san-diego",
  },
};

export default function EstateCleanoutPage() {
  return (
    <div className={`${inter.variable} font-sans antialiased`}>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Estate Cleanout San Diego - Respectful & Professional
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Compassionate Probate Cleanout • Senior Downsizing • Inheritance Property Services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  CALL FOR COMPASSIONATE CONSULTATION: (619) 750-0114
                </a>
                <a
                  href="#contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  GET FREE ESTATE CLEANOUT QUOTE
                </a>
              </div>
              <p className="mt-6 text-sm text-blue-100">
                🤍 Serving families with dignity during difficult times • Licensed & insured
              </p>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why San Diego Families Trust Our Estate Clearing Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Compassionate & Respectful</h3>
                <p className="text-gray-600">
                  We understand estate cleanouts are emotional. Our probate cleanout San Diego team handles every belonging with dignity and sensitivity.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Licensed Estate Specialists</h3>
                <p className="text-gray-600">
                  Fully licensed, bonded, and insured for estate clearing services. Professional inheritance property cleanout San Diego families rely on.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Probate Deadline Experts</h3>
                <p className="text-gray-600">
                  Fast response for court deadlines and estate sales. We understand the urgency while maintaining respectful service standards.
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
                Professional Estate Cleanout San Diego - Serving Families with Dignity
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                  When facing the emotional task of clearing a loved one's estate, Severin Cleaners provides compassionate <strong>estate cleanout San Diego</strong> services that honor your family's needs during this difficult time. Our experienced team understands the profound emotional weight of sorting through a lifetime of memories and belongings.
                </p>

                <p className="text-lg mb-6">
                  Whether you're managing a <strong>probate cleanout San Diego</strong> court deadline, preparing for an estate sale, or helping an elderly family member with <strong>senior downsizing services</strong>, we provide comprehensive estate clearing services. Our goal is to reduce your stress while ensuring every precious memory and valuable item is handled with the respect it deserves.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Comprehensive Estate Clearing Services San Diego</h3>
                <p className="text-lg mb-4">
                  Our <strong>estate cleanout San Diego</strong> specialists provide full-service solutions for every type of estate situation:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Probate Cleanout San Diego</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Court-ordered <strong>probate cleanout San Diego</strong> deadline compliance</li>
                      <li>Complete inherited property cleanout for legal proceedings</li>
                      <li>Valuable asset identification and secure preservation</li>
                      <li>Important document organization and protection</li>
                      <li>Property preparation for probate sale or transfer</li>
                      <li>Direct coordination with probate attorneys and executors</li>
                      <li>Detailed inventory documentation for court requirements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Estate Sale Preparation</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Professional estate sale cleanout and staging</li>
                      <li>Valuable item appraisal coordination</li>
                      <li>Antique and collectible identification services</li>
                      <li>Post-sale cleanout and debris removal</li>
                      <li>Partnership with San Diego estate sale companies</li>
                      <li>Charitable donation of unsold items with tax receipts</li>
                      <li>Complete property staging for maximum sale value</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Senior Downsizing Services</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Compassionate <strong>senior downsizing services</strong> with dignity</li>
                      <li>Assisted living transition preparation and support</li>
                      <li>Lifetime possession sorting with family involvement</li>
                      <li>Precious memory preservation and distribution</li>
                      <li>Patient, gentle approach respecting senior clients</li>
                      <li>Family coordination for smooth transitions</li>
                      <li>Emotional support throughout the downsizing process</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Inherited Property Cleanout San Diego</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Complete <strong>inherited property cleanout San Diego</strong> services</li>
                      <li>Long-distance estate coordination for out-of-state families</li>
                      <li>Property staging for quick sale or rental preparation</li>
                      <li>Utility disconnection coordination and final cleanup</li>
                      <li>Real estate agent partnership for seamless transitions</li>
                      <li>Property security during extended cleanout projects</li>
                      <li>Neighborhood-respectful service maintaining property values</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Our Compassionate Estate Cleanout Process</h3>
                <p className="text-lg mb-4">
                  Every <strong>estate cleanout San Diego</strong> project begins with understanding your family's unique needs, timeline, and emotional situation:
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-3">
                  <li><strong>Initial Family Consultation:</strong> We meet with family members to understand specific wishes, identify valuable items, discuss family heirlooms, and create a personalized cleanout plan that honors your loved one's memory</li>
                  <li><strong>Careful Item Sorting:</strong> Our trained team methodically sorts belongings, identifying items to preserve, donate, sell, or dispose of according to detailed family instructions and emotional significance</li>
                  <li><strong>Valuable Item Protection:</strong> Important documents, jewelry, family photographs, heirlooms, and valuable collectibles are carefully preserved, cataloged, and securely returned to designated family members</li>
                  <li><strong>Charitable Donation Coordination:</strong> Usable items are donated to respected local San Diego charities, providing meaningful tax deduction opportunities while honoring your loved one's generosity</li>
                  <li><strong>Environmentally Responsible Disposal:</strong> Remaining items are disposed of properly at licensed facilities with full environmental responsibility and documentation</li>
                  <li><strong>Complete Property Preparation:</strong> Final deep cleaning and preparation for sale, rental, or continued family use, leaving the property move-in ready</li>
                </ol>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                  <p className="font-bold text-yellow-800">
                    🏗️ Estate with Construction or Renovation Debris?
                  </p>
                  <p className="text-yellow-700 mt-2">
                    If the estate includes construction materials, renovation debris, or major structural cleanout needs, <Link href="/construction-debris-removal-san-diego" className="text-blue-600 underline">see our specialized construction debris removal services</Link> for comprehensive property clearing.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Specialized Estate Clearing Situations</h3>

                <h4 className="text-xl font-bold mb-3">Probate Court Deadline Compliance</h4>
                <p className="text-lg mb-4">
                  <strong>Probate cleanout San Diego</strong> court proceedings often involve strict deadlines and detailed legal requirements. Our estate specialists work efficiently to meet all probate timelines while ensuring no valuable asset is overlooked or improperly handled. We coordinate directly with probate attorneys, court-appointed executors, and administrators to ensure complete compliance with all legal obligations during the estate clearing process.
                </p>

                <h4 className="text-xl font-bold mb-3">Hoarding and Accumulation Situations</h4>
                <p className="text-lg mb-4">
                  When estates involve hoarding or excessive accumulation situations, we approach the cleanout with specialized training and extra sensitivity. Our team understands the complexity of these situations and works methodically to ensure no important documents, valuables, or family treasures are missed among accumulated items. We maintain complete dignity and respect throughout the process.
                </p>

                <h4 className="text-xl font-bold mb-3">Multi-Family Estate Coordination</h4>
                <p className="text-lg mb-4">
                  Estate cleanouts often involve multiple family members with different emotional needs, geographic locations, and opinions about item distribution. We facilitate smooth communication and help families navigate disagreements with professional mediation. Our neutral, compassionate approach helps families focus on honoring their loved one's memory rather than conflict over possessions.
                </p>

                <h4 className="text-xl font-bold mb-3">Long-Distance Family Support</h4>
                <p className="text-lg mb-4">
                  Many families live far from San Diego and need trusted local support for <strong>inherited property cleanout San Diego</strong> services. We provide detailed photo documentation, regular progress updates, and can coordinate shipping of precious items to family members nationwide. Our team serves as your local representatives, handling all aspects of the estate cleanout with the same care as if you were present.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Complete Estate Item Handling</h3>
                <p className="text-lg mb-4">
                  Our comprehensive <strong>estate cleanout San Diego</strong> service carefully handles all types of personal property and household belongings:
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold mb-2">Personal & Sentimental Items</h4>
                    <ul className="list-disc pl-4 text-sm space-y-1">
                      <li>Clothing and personal effects</li>
                      <li>Jewelry and valuable accessories</li>
                      <li>Important documents and legal papers</li>
                      <li>Photo albums and family memories</li>
                      <li>Books and personal libraries</li>
                      <li>Religious and spiritual items</li>
                      <li>Military memorabilia and awards</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Household & Furnishings</h4>
                    <ul className="list-disc pl-4 text-sm space-y-1">
                      <li>Furniture and home furnishings</li>
                      <li>Kitchen items and appliances</li>
                      <li>Electronics and entertainment systems</li>
                      <li>Tools and workshop equipment</li>
                      <li>Linens and household textiles</li>
                      <li>Gardening and outdoor equipment</li>
                      <li>Sporting goods and recreational items</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Valuable & Collectible Items</h4>
                    <ul className="list-disc pl-4 text-sm space-y-1">
                      <li>Antiques and collectibles</li>
                      <li>Artwork and precious items</li>
                      <li>Coins and precious metals</li>
                      <li>Musical instruments</li>
                      <li>Vintage and specialty collections</li>
                      <li>Crystal and fine china</li>
                      <li>Designer and luxury items</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">San Diego Areas We Serve for Estate Cleanouts</h3>
                <p className="text-lg mb-4">
                  Our compassionate <strong>estate cleanout San Diego</strong> services are available throughout all of San Diego County, with specialized experience in:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <ul className="list-disc pl-4">
                    <li>La Jolla & Bird Rock luxury estates</li>
                    <li>Del Mar & Solana Beach coastal properties</li>
                    <li>Rancho Santa Fe estate properties</li>
                    <li>Carmel Valley & Torrey Pines homes</li>
                    <li>Pacific Beach & Mission Beach residences</li>
                  </ul>
                  <ul className="list-disc pl-4">
                    <li>Point Loma & Ocean Beach properties</li>
                    <li>Hillcrest & Bankers Hill historic homes</li>
                    <li>Mission Hills & University Heights</li>
                    <li>Normal Heights & Kensington neighborhoods</li>
                    <li>Coronado & Imperial Beach homes</li>
                  </ul>
                  <ul className="list-disc pl-4">
                    <li>Chula Vista & Bonita family homes</li>
                    <li>El Cajon & La Mesa properties</li>
                    <li>Santee & Lakeside communities</li>
                    <li>Poway & Scripps Ranch estates</li>
                    <li>Escondido & San Marcos properties</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Professional Estate Service Partnerships</h3>
                <p className="text-lg mb-4">
                  We maintain trusted professional relationships with San Diego estate attorneys, probate specialists, real estate agents, estate sale companies, and appraisers. Our team understands the legal, financial, and emotional requirements of estate settlement and works cooperatively with all professionals involved to ensure seamless coordination throughout the entire estate process.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Flexible Scheduling for Estate Needs</h3>
                <p className="text-lg mb-4">
                  <strong>Estate clearing services San Diego</strong> can be scheduled according to your family's emotional readiness, travel schedules, and probate court timelines. We offer compassionate flexibility including evenings and weekends when necessary to accommodate court deadlines, out-of-state family visits, or emotional processing time. Our team can typically begin estate cleanout services within 24-48 hours for urgent probate situations.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Transparent Estate Cleanout Pricing</h3>
                <p className="text-lg mb-4">
                  Estate cleanout pricing varies based on property size, contents volume, emotional complexity, and services required. We provide compassionate, transparent pricing with detailed written estimates. We can work directly with estate executors for payment processing and provide comprehensive invoicing for estate accounting purposes. Many estate cleanout costs qualify as legitimate estate expenses for tax purposes.
                </p>

                <div className="bg-gray-100 p-6 rounded-lg mb-8">
                  <h4 className="text-xl font-bold mb-4">Typical Estate Cleanout Investment</h4>
                  <ul className="space-y-2">
                    <li><strong>Small Estate (1-2 bedroom):</strong> $800-$1,500</li>
                    <li><strong>Medium Estate (3-4 bedroom):</strong> $1,500-$3,000</li>
                    <li><strong>Large Estate (5+ bedroom):</strong> $3,000-$6,000+</li>
                    <li><strong>Complex Hoarding Situations:</strong> Custom pricing based on scope</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4">
                    * Pricing includes sorting, valuable item identification, donation coordination, disposal, and basic cleaning. Additional services available.
                  </p>
                </div>

                <p className="text-lg mb-6">
                  For estate cleanouts involving significant construction debris or structural elements, we coordinate with our <Link href="/construction-debris-removal-san-diego" className="text-blue-600 underline">specialized construction debris removal team</Link> to ensure complete property clearing.
                </p>

                {/* FAQ Section */}
                <div className="bg-blue-50 p-8 rounded-lg mt-12 mb-8">
                  <h2 className="text-3xl font-bold mb-8 text-blue-900">
                    Frequently Asked Questions - Estate Cleanout San Diego
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        How much does estate cleanout cost in San Diego?
                      </h3>
                      <p className="text-gray-700">
                        Estate cleanout San Diego costs typically range from $800-$6,000+ depending on property size and contents. Small 1-2 bedroom estates average $800-$1,500, while larger 3-4 bedroom properties cost $1,500-$3,000. Complex situations or large estates may cost more. We provide transparent written estimates and can work directly with estate executors for payment processing.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        Do you handle probate deadlines and court requirements?
                      </h3>
                      <p className="text-gray-700">
                        Yes, our probate cleanout San Diego specialists understand court deadlines and legal requirements. We work efficiently to meet probate timelines while ensuring no valuable assets are overlooked. We coordinate directly with probate attorneys and executors, providing detailed documentation and inventory reports as needed for court proceedings.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        Can you work with attorneys or real estate agents directly?
                      </h3>
                      <p className="text-gray-700">
                        Absolutely. We maintain professional relationships with San Diego estate attorneys, real estate agents, and estate sale companies. Our inherited property cleanout San Diego team coordinates directly with all professionals involved in the estate process, providing seamless communication and ensuring all legal and practical requirements are met efficiently.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        How do you handle family heirlooms or valuable items?
                      </h3>
                      <p className="text-gray-700">
                        We treat every item with respect and care. Our team carefully identifies and preserves valuable items, important documents, jewelry, antiques, and family heirlooms. We catalog valuable items, coordinate with family members for distribution, and can arrange professional appraisals when needed. Nothing of value is ever discarded without explicit family approval.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        Do you provide donation receipts for tax purposes?
                      </h3>
                      <p className="text-gray-700">
                        Yes, we partner with respected local San Diego charities and provide detailed donation receipts for tax deduction purposes. Our estate clearing services San Diego include proper documentation of all donated items with fair market values when possible. These donations can provide significant tax benefits for the estate while honoring your loved one's legacy of generosity.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg mt-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">
                    🤍 Ready for Compassionate Estate Cleanout Services?
                  </h3>
                  <p className="text-lg mb-4 text-gray-800">
                    Let our experienced team support your family through this difficult time with professional, respectful <strong>estate cleanout San Diego</strong> services. We're here to honor your loved one's memory while providing the practical support you need during this emotional journey.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:+16197500114"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-center font-bold transition-colors inline-block"
                    >
                      Call Today for Compassionate Consultation: (619) 750-0114
                    </a>
                    <a
                      href="#contact"
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg text-center font-bold transition-colors inline-block"
                    >
                      Get Your Estate Cleanout Quote
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Available 7 days a week • Licensed & insured • Serving families with dignity since 2020
                  </p>
                </div>

                {/* Trust Signals */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="grid md:grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold text-blue-600">150+</p>
                      <p className="text-sm text-gray-600">Estate Cleanouts Completed</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">24-48hr</p>
                      <p className="text-sm text-gray-600">Response Time</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">100%</p>
                      <p className="text-sm text-gray-600">Family Satisfaction</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">Licensed</p>
                      <p className="text-sm text-gray-600">Bonded & Insured</p>
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