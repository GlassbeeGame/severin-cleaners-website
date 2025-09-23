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
  title: "Hoarding Cleanup San Diego | Compassionate, Judgment-Free Support | Confidential Service",
  description: "Professional hoarding cleanup San Diego with compassion and discretion. Judgment-free hoarding help, biohazard cleanup, family support. Licensed & insured. Call (619) 750-0114.",
  keywords: "hoarding cleanup San Diego, hoarding help San Diego, hoarding cleanout San Diego, compassionate hoarding services San Diego, biohazard hoarding cleanup San Diego, professional hoarding help, confidential hoarding cleanup",
  openGraph: {
    title: "Hoarding Cleanup San Diego | Compassionate Professional Service",
    description: "Discreet, compassionate hoarding cleanup services in San Diego. Professional team trained in sensitivity and safety protocols.",
    url: "https://severincleaners.com/hoarding-cleanup-san-diego",
  },
  alternates: {
    canonical: "https://severincleaners.com/hoarding-cleanup-san-diego",
  },
};

export default function HoardingCleanupPage() {
  return (
    <div className={`${inter.variable} font-sans antialiased`}>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hoarding Cleanup San Diego – Compassionate & Confidential Help
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Professional Hoarding Help • Judgment-Free Support • Biohazard Cleanup
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  CALL FOR CONFIDENTIAL HOARDING CLEANUP: (619) 750-0114
                </a>
                <a
                  href="#contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  COMPASSIONATE HOARDING HELP – GET SUPPORT NOW
                </a>
              </div>
              <p className="mt-6 text-sm text-blue-100">
                🤝 Judgment-free support • Complete confidentiality • Licensed biohazard cleanup
              </p>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why San Diego Families Trust Our Compassionate Hoarding Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Compassionate Hoarding Approach</h3>
                <p className="text-gray-600">
                  Non-judgmental, respectful professional hoarding help that treats every person with dignity and understanding during this difficult process.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Complete Confidential Service</h3>
                <p className="text-gray-600">
                  Discreet hoarding cleanout San Diego with unmarked vehicles and confidential handling. Your privacy and dignity are our top priorities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Biohazard Safety Certified</h3>
                <p className="text-gray-600">
                  Licensed biohazard hoarding cleanup San Diego with proper safety protocols. Trained in mold, pest, and contamination removal.
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
                Confidential Hoarding Cleanup Services in San Diego
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                  Hoarding is a complex mental health condition that affects millions of people, and when it comes time for cleanup, families need professional, compassionate help. Severin Cleaners provides specialized <strong>hoarding cleanup San Diego</strong> services with the sensitivity, safety protocols, and understanding that these sensitive situations require. Our trained team approaches every hoarding cleanout San Diego with respect, dignity, and a judgment-free attitude that prioritizes your emotional wellbeing.
                </p>

                <p className="text-lg mb-6">
                  Our <strong>hoarding help San Diego</strong> service goes beyond simple cleanup – we provide comprehensive compassionate hoarding services San Diego for individuals and families dealing with hoarding situations. Whether you're helping a loved one, dealing with an inherited property requiring cleanup, or facing your own hoarding challenges, we're here to help with professional, discreet service that maintains complete confidentiality throughout the process.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Understanding Hoarding Disorder & Professional Hoarding Help</h3>
                <p className="text-lg mb-4">
                  Hoarding disorder is a recognized mental health condition characterized by persistent difficulty discarding possessions, regardless of their actual value. It affects 2-6% of the population and can create unsafe living conditions that require immediate intervention. Our <strong>hoarding cleanup San Diego</strong> team is specially trained to understand the complexities of hoarding disorder and approach each situation with appropriate sensitivity and professional expertise.
                </p>

                <p className="text-lg mb-4">
                  Hoarding differs from simple clutter or disorganization. It involves deep emotional attachments to objects and significant distress when faced with discarding items. Our compassionate hoarding services San Diego team recognizes these emotional challenges and works patiently with individuals to ensure the cleanup process doesn't cause additional trauma or shame.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h4 className="text-xl font-bold mb-3 text-blue-900">Recognizing When Professional Hoarding Help is Needed:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Inability to use rooms for their intended purpose due to excessive accumulation</li>
                    <li>Narrow pathways through the home creating safety hazards</li>
                    <li>Difficulty moving around safely due to blocked exits and walkways</li>
                    <li>Excessive accumulation of items with little to no practical value</li>
                    <li>Strong emotional attachment to possessions preventing disposal</li>
                    <li>Social isolation due to embarrassment about the home's condition</li>
                    <li>Health and safety risks from unsanitary conditions or structural damage</li>
                    <li>Interference with daily activities like cooking, bathing, or sleeping</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Our Compassionate Hoarding Cleanout San Diego Process</h3>
                <p className="text-lg mb-4">
                  Every <strong>hoarding cleanup San Diego</strong> project is unique and requires a customized approach tailored to the individual's specific needs and emotional state. Our proven process is designed to be respectful, thorough, and supportive while ensuring safety and sanitation:
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-3">
                  <li><strong>Confidential Initial Consultation:</strong> Private, judgment-free assessment with the individual and family members to understand specific needs, concerns, timeline, and emotional considerations affecting the cleanup process</li>
                  <li><strong>Comprehensive Safety Evaluation:</strong> Professional assessment of health and safety hazards including structural issues, biohazards, mold, pest infestations, and accessibility concerns that require immediate attention</li>
                  <li><strong>Customized Cleanup Plan:</strong> Development of a detailed, step-by-step cleanup plan that respects the individual's emotional needs, timeline preferences, and specific requests for handling personal belongings</li>
                  <li><strong>Collaborative Item Sorting:</strong> Methodical sorting of possessions with the individual's direct input whenever possible, carefully preserving items of sentimental, financial, or practical value</li>
                  <li><strong>Professional Safe Removal:</strong> Expert removal of unwanted items using appropriate safety equipment, protective gear, and biohazard protocols to ensure crew and client safety</li>
                  <li><strong>Deep Cleaning & Sanitization:</strong> Thorough cleaning, disinfection, and sanitization of all cleared areas using professional-grade equipment and EPA-approved cleaning agents</li>
                  <li><strong>Ongoing Support & Resources:</strong> Connections to mental health resources, support groups, and follow-up services to help prevent re-accumulation and support long-term recovery</li>
                </ol>

                <h3 className="text-2xl font-bold mt-8 mb-4">Specialized Biohazard Hoarding Cleanup San Diego</h3>
                <p className="text-lg mb-4">
                  Many hoarding situations involve biohazards that require specialized training, equipment, and disposal methods. Our team is fully certified for <strong>biohazard hoarding cleanup San Diego</strong> and equipped to handle the most challenging situations safely and effectively:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Severe Biohazard Situations</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Complete home cleanouts with extensive biological contamination</li>
                      <li>Human and animal waste cleanup requiring hazmat protocols</li>
                      <li>Mold remediation and moisture damage from water accumulation</li>
                      <li>Pest infestation cleanup including rodent and insect contamination</li>
                      <li>Decomposition cleanup and odor elimination using industrial equipment</li>
                      <li>Blood and bodily fluid cleanup with proper biohazard disposal</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Comprehensive Hoarding Cleanup Support</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Room-by-room gradual cleanup approach respecting emotional needs</li>
                      <li>Maintenance and ongoing organization support for long-term success</li>
                      <li>Preparation for family visits, medical care, or home health services</li>
                      <li>Assistance with downsizing, organization, and space planning</li>
                      <li>Preventive cleanup and maintenance to avoid situation escalation</li>
                      <li>Coordination with contractors for necessary home repairs</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Advanced Safety Protocols and Specialized Equipment</h3>
                <p className="text-lg mb-4">
                  Professional <strong>hoarding cleanup San Diego</strong> often involves significant health and safety hazards that require specialized training, equipment, and disposal methods. Our certified team is properly equipped and trained to handle all aspects of hoarding cleanup safely:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Biohazard Materials & Contamination:</strong> Proper handling, removal, and disposal of biological contaminants, human and animal waste, mold growth, and pest infestations using EPA-approved methods</li>
                  <li><strong>Structural Safety Concerns:</strong> Professional assessment of floor integrity, wall stability, blocked exits, fire hazards, and weight-bearing capacity before beginning cleanup operations</li>
                  <li><strong>Air Quality & Ventilation Issues:</strong> Use of industrial air filtration systems, protective respiratory equipment, and air quality monitoring for safe working conditions</li>
                  <li><strong>Chemical Hazards & Unknown Substances:</strong> Safe identification and removal of expired medications, cleaning chemicals, pesticides, and unknown substances requiring specialized disposal</li>
                  <li><strong>Pest Control & Infestation Management:</strong> Coordination with licensed pest control professionals when rodent, insect, or other pest infestations are present in the hoarding environment</li>
                  <li><strong>Large Volume Debris Removal:</strong> Safe extraction and transportation of massive volumes of accumulated items using appropriate equipment and disposal methods</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Family Support & Professional Hoarding Help</h3>
                <p className="text-lg mb-4">
                  Family members often feel overwhelmed, frustrated, and helpless when dealing with a loved one's hoarding disorder. Our <strong>compassionate hoarding services San Diego</strong> include comprehensive support and guidance for family members throughout the entire process, helping them understand the condition and their role in recovery.
                </p>

                <p className="text-lg mb-4">
                  We recognize that hoarding affects entire families, not just the individual with the disorder. Family relationships can become strained, and family members may struggle with their own emotions of anger, guilt, shame, and helplessness. Our team provides education, support, and practical guidance to help families navigate this challenging situation with greater understanding and effectiveness.
                </p>

                <h4 className="text-xl font-bold mb-3">Comprehensive Family Support Services:</h4>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Education about hoarding disorder, its causes, and available treatment options for long-term recovery</li>
                  <li>Guidance on effective communication strategies when discussing cleanup with their loved one</li>
                  <li>Referrals to mental health professionals specifically trained in hoarding disorder treatment</li>
                  <li>Emotional support for family members dealing with frustration, guilt, and other complex emotions</li>
                  <li>Assistance in establishing and maintaining healthy boundaries and realistic expectations</li>
                  <li>Follow-up support and resources to help prevent re-accumulation and maintain progress</li>
                  <li>Coordination with therapists, social workers, and other professionals involved in treatment</li>
                  <li>Support group referrals for families affected by hoarding disorder</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Professional Coordination with Mental Health Specialists</h3>
                <p className="text-lg mb-4">
                  Successful long-term hoarding cleanup and recovery often requires coordination with mental health professionals who specialize in hoarding disorder treatment. We work closely with therapists, psychologists, social workers, and hoarding specialists to ensure our cleanup process supports and enhances the individual's overall treatment plan and therapeutic goals.
                </p>

                <p className="text-lg mb-4">
                  Our team understands that cleanup alone doesn't address the underlying psychological causes of hoarding. We coordinate our services with ongoing therapy to ensure the cleanup process doesn't interfere with treatment and actually supports the individual's recovery journey. This collaborative approach significantly improves long-term success rates and reduces the likelihood of re-accumulation.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Emergency Hoarding Cleanup & Crisis Intervention</h3>
                <p className="text-lg mb-4">
                  Sometimes <strong>hoarding cleanup San Diego</strong> becomes urgent due to health department violations, eviction notices, medical emergencies, or family crises. We provide rapid emergency response for these critical situations while maintaining our compassionate, respectful approach and ensuring the individual's emotional wellbeing during this stressful time.
                </p>

                <h4 className="text-xl font-bold mb-3">Emergency Situations Requiring Immediate Response:</h4>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Health department violations, citations, and court-ordered cleanup deadlines</li>
                  <li>Eviction prevention and landlord-required cleanup with tight timelines</li>
                  <li>Medical emergency preparation including home health care setup and hospital discharge preparation</li>
                  <li>Fire department access requirements and safety compliance violations</li>
                  <li>Adult protective services interventions and mandated cleanup</li>
                  <li>Property management company requirements and lease violation responses</li>
                  <li>Family intervention situations requiring immediate professional support</li>
                  <li>Insurance claim requirements and damage assessment cleanup</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Complete Discretion and Privacy Protection</h3>
                <p className="text-lg mb-4">
                  We understand that <strong>hoarding cleanout San Diego</strong> is deeply personal and often involves significant shame and embarrassment for individuals and families. Our service includes comprehensive privacy protection measures designed to maintain complete confidentiality and protect the dignity of all involved parties.
                </p>

                <h4 className="text-xl font-bold mb-3">Privacy Protection Measures:</h4>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Unmarked vehicles and equipment for complete neighborhood discretion</li>
                  <li>Signed confidentiality agreements with all team members and subcontractors</li>
                  <li>Flexible scheduling including evenings and weekends to minimize neighbor awareness</li>
                  <li>Use of private entrances, garages, and staging areas whenever possible</li>
                  <li>Secure handling and protection of personal documents, photographs, and sensitive information</li>
                  <li>Strict no-photography policy without explicit written permission from the client</li>
                  <li>Anonymous billing and payment options to protect client identity</li>
                  <li>Discrete disposal methods that protect client privacy during item removal</li>
                </ul>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                  <p className="font-bold text-yellow-800">
                    🏠 Inherited Property or Construction Needs?
                  </p>
                  <p className="text-yellow-700 mt-2">
                    If your hoarding cleanup involves an inherited property, our <Link href="/estate-cleanout-san-diego" className="text-blue-600 underline">compassionate estate cleanout specialists</Link> provide additional support. When structural damage requires repair, we coordinate with <Link href="/construction-debris-removal-san-diego" className="text-blue-600 underline">licensed construction debris removal services</Link> for comprehensive property restoration.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">San Diego County Hoarding Cleanup Service Areas</h3>
                <p className="text-lg mb-4">
                  Our compassionate <strong>hoarding cleanup San Diego</strong> service is available throughout all of San Diego County with complete confidentiality and professional discretion:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <ul className="list-disc pl-4">
                    <li>Downtown & Central San Diego</li>
                    <li>Hillcrest & University Heights</li>
                    <li>Pacific Beach & Mission Beach</li>
                    <li>La Jolla & UTC neighborhoods</li>
                    <li>Point Loma & Ocean Beach</li>
                  </ul>
                  <ul className="list-disc pl-4">
                    <li>Chula Vista & South Bay communities</li>
                    <li>El Cajon & East County areas</li>
                    <li>National City & Paradise Hills</li>
                    <li>La Mesa & Santee communities</li>
                    <li>Spring Valley & Lemon Grove</li>
                  </ul>
                  <ul className="list-disc pl-4">
                    <li>Escondido & North County</li>
                    <li>Oceanside & Carlsbad</li>
                    <li>Vista & San Marcos</li>
                    <li>Poway & Scripps Ranch</li>
                    <li>All unincorporated San Diego County areas</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Local Resources and Ongoing Support Network</h3>
                <p className="text-lg mb-4">
                  Beyond our professional hoarding cleanup services, we maintain partnerships with local San Diego mental health professionals and support organizations to provide comprehensive ongoing support for individuals and families affected by hoarding disorder:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Licensed mental health professionals and therapists specializing in hoarding disorder treatment</li>
                  <li>Support groups for individuals with hoarding disorder offering peer support and understanding</li>
                  <li>Family support groups and educational resources for loved ones affected by hoarding</li>
                  <li>Professional organizational coaching and maintenance services for long-term success</li>
                  <li>Legal resources for housing, property, and tenant rights issues related to hoarding</li>
                  <li>Social services and community support programs providing ongoing assistance</li>
                  <li>Medical and healthcare coordination for health issues related to hoarding conditions</li>
                  <li>Financial counseling for those dealing with hoarding-related financial difficulties</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Understanding Hoarding Cleanup Costs and Investment</h3>
                <p className="text-lg mb-4">
                  We understand that <strong>hoarding help San Diego</strong> represents a significant emotional and financial investment for families. Our pricing is transparent, fair, and based on the specific scope and complexity of each unique situation:
                </p>
                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                  <ul className="space-y-2">
                    <li><strong>Consultation & Assessment:</strong> Free confidential consultation and detailed cost estimate</li>
                    <li><strong>Room-by-Room Cleanup:</strong> $500-$1,500 per room depending on severity and contents</li>
                    <li><strong>Partial Home Cleanup:</strong> $2,000-$8,000 for multiple rooms and common areas</li>
                    <li><strong>Whole Home Cleanup:</strong> $8,000-$25,000+ for complete house cleanout and restoration</li>
                    <li><strong>Biohazard Cleanup:</strong> Additional fees for specialized contamination and disposal</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4">
                    * Pricing includes assessment, sorting, removal, cleaning, and disposal. Payment plans available for qualifying situations.
                  </p>
                </div>

                {/* FAQ Section */}
                <div className="bg-blue-50 p-8 rounded-lg mt-12 mb-8">
                  <h2 className="text-3xl font-bold mb-8 text-blue-900">
                    Frequently Asked Questions - Hoarding Cleanup San Diego
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        How much does hoarding cleanup cost in San Diego?
                      </h3>
                      <p className="text-gray-700">
                        Hoarding cleanup San Diego costs vary significantly based on severity, ranging from $500-$1,500 per room to $8,000-$25,000+ for complete home restoration. Our compassionate hoarding services San Diego include free consultations and transparent pricing. Biohazard hoarding cleanup San Diego may require additional specialized services. Payment plans are available for qualifying situations.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        Do you keep the hoarding cleanup process confidential?
                      </h3>
                      <p className="text-gray-700">
                        Absolutely. Our hoarding cleanout San Diego service uses unmarked vehicles, signed confidentiality agreements, and discrete scheduling. We understand the sensitive nature of hoarding and prioritize your privacy and dignity throughout the entire process. All team members are trained in confidentiality protocols and respectful service.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        Can you handle biohazards, pests, or mold in hoarding situations?
                      </h3>
                      <p className="text-gray-700">
                        Yes, our team is certified for biohazard hoarding cleanup San Diego including mold remediation, pest infestation cleanup, and biological contamination removal. We use proper safety equipment, EPA-approved cleaning agents, and licensed disposal methods. Our professional hoarding help includes coordination with pest control and mold specialists when needed.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        How long does hoarding cleanup take?
                      </h3>
                      <p className="text-gray-700">
                        Hoarding cleanup San Diego timelines vary from 1-2 days for single rooms to several weeks for severe whole-home situations. We work at a pace that respects the individual's emotional needs while ensuring safety. Our compassionate hoarding services allow for breaks and emotional processing time throughout the cleanup process.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        Do you work with therapists, social workers, or family members during cleanup?
                      </h3>
                      <p className="text-gray-700">
                        Yes, we actively coordinate with mental health professionals, social workers, and family members to ensure our hoarding help San Diego supports overall treatment goals. We provide family education, therapeutic coordination, and referrals to specialized hoarding disorder therapists. Our team understands that successful cleanup requires comprehensive support.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg mt-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">
                    🤝 Ready for Compassionate Hoarding Help?
                  </h3>
                  <p className="text-lg mb-4 text-gray-800">
                    Taking the first step toward <strong>hoarding cleanup San Diego</strong> requires courage. We're here to support you with judgment-free compassion, complete confidentiality, and professional expertise every step of the way. You're not alone in this journey.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:+16197500114"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-center font-bold transition-colors inline-block"
                    >
                      Call Today for Confidential Hoarding Cleanup Consultation: (619) 750-0114
                    </a>
                    <a
                      href="#contact"
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg text-center font-bold transition-colors inline-block"
                    >
                      Compassionate Hoarding Help – Private Consultation
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Licensed & certified • Complete confidentiality • Biohazard cleanup certified • Judgment-free support
                  </p>
                </div>

                {/* Trust Signals */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="grid md:grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold text-blue-600">200+</p>
                      <p className="text-sm text-gray-600">Hoarding Cleanup Projects</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">100%</p>
                      <p className="text-sm text-gray-600">Confidential Service</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">Licensed</p>
                      <p className="text-sm text-gray-600">Biohazard Certified</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">24/7</p>
                      <p className="text-sm text-gray-600">Emergency Response</p>
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