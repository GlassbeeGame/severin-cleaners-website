import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Junk Removal Services San Diego | Same Day Hauling & Disposal",
  description: "Complete junk removal services in San Diego. Same-day service, furniture removal, appliance disposal, estate cleanouts, construction debris removal. Licensed & insured. Call (619) 750-0114!",
  keywords: [
    "junk removal services San Diego",
    "furniture removal",
    "appliance removal",
    "estate cleanouts",
    "construction debris removal",
    "commercial junk removal",
    "same day junk removal",
    "hoarding cleanup"
  ],
  openGraph: {
    title: "Junk Removal Services San Diego | Same Day Hauling & Disposal",
    description: "Complete junk removal services in San Diego. Same-day service, furniture removal, appliance disposal, estate cleanouts, construction debris removal. Licensed & insured.",
    url: "https://severincleaners.com/services",
    siteName: "Severin Cleaners",
    type: "website",
    locale: "en_US",
    images: [{
      url: "https://severincleaners.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Junk Removal Services San Diego - Severin Cleaners"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Junk Removal Services San Diego | Same Day Hauling & Disposal",
    description: "Complete junk removal services in San Diego. Same-day service, furniture removal, appliance disposal, estate cleanouts, construction debris removal.",
    images: ["https://severincleaners.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://severincleaners.com/services",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "US-CA",
    "geo.placename": "La Mesa",
    "geo.position": "32.7678;-117.0231",
    "ICBM": "32.7678, -117.0231",
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: "Same Day Junk Removal",
      link: "/same-day-junk-removal-san-diego",
      description: "Emergency junk removal service for urgent cleanouts and immediate needs.",
      icon: "⚡",
      features: ["Emergency Service", "Same-Day Pickup", "Urgent Cleanouts", "Fast Response Time"]
    },
    {
      title: "Furniture Removal",
      link: "/furniture-removal-san-diego",
      description: "Professional furniture removal for homes, offices, and businesses throughout San Diego.",
      icon: "🛋️",
      features: ["Couches & Sofas", "Beds & Mattresses", "Tables & Chairs", "Office Furniture"]
    },
    {
      title: "Couch Removal",
      link: "/couch-removal-san-diego",
      description: "Fast, affordable couch and sofa removal service. We handle sectionals, loveseats, recliners, and all upholstered furniture.",
      icon: "🛋️",
      features: ["Sectionals", "Loveseats & Sofas", "Recliners", "Same-Day Available"]
    },
    {
      title: "Mattress Disposal & Pickup",
      link: "/san-diego-mattress-disposal",
      description: "Fast, affordable mattress pickup and disposal with responsible recycling when possible.",
      icon: "🛏️",
      features: ["Same-Day Pickup", "All Mattress Types", "Eco-Friendly Recycling", "Box Springs Too"]
    },
    {
      title: "Appliance Removal",
      link: "/appliance-removal-san-diego",
      description: "Safe removal and eco-friendly disposal of all types of household and commercial appliances.",
      icon: "🔧",
      features: ["Refrigerators", "Washers & Dryers", "Kitchen Appliances", "HVAC Units"]
    },
    {
      title: "Estate Cleanouts",
      link: "/estate-cleanout-san-diego",
      description: "Compassionate estate cleanout services for families dealing with inherited properties.",
      icon: "🏠",
      features: ["Full Property Clearing", "Donation Coordination", "Document Sorting", "Respectful Service"]
    },
    {
      title: "Construction Debris Removal",
      link: "/construction-debris-removal-san-diego",
      description: "Efficient removal of construction waste, renovation debris, and demolition materials.",
      icon: "🚧",
      features: ["Renovation Debris", "Demolition Waste", "Drywall & Lumber", "Concrete Removal"]
    },
    {
      title: "Hoarding Cleanup",
      link: "/hoarding-cleanup-san-diego",
      description: "Sensitive hoarding cleanup with professional organizing and mental health awareness.",
      icon: "🧹",
      features: ["Compassionate Service", "Professional Organizing", "Hoard Junk Handling", "Ongoing Support"]
    },
    {
      title: "Hot Tub Removal",
      link: "/hot-tub-removal-san-diego",
      description: "Complete hot tub and spa removal including dismantling and eco-friendly disposal.",
      icon: "🛁",
      features: ["Complete Dismantling", "Heavy Equipment", "Deck Restoration", "Eco-Friendly Disposal"]
    },
    {
      title: "Piano Removal",
      link: "/piano-removal-san-diego",
      description: "Professional piano and musical instrument removal with specialized equipment and care.",
      icon: "🎹",
      features: ["Grand & Upright Pianos", "Specialized Equipment", "Stair Navigation", "Safe Transport"]
    },
    {
      title: "Commercial Junk Removal",
      link: "/commercial-junk-removal-san-diego",
      description: "Business-focused junk removal for offices, retail spaces, warehouses, and commercial properties.",
      icon: "🏢",
      features: ["Office Cleanouts", "Retail Spaces", "Warehouse Clearing", "Scheduled Service"]
    },
    {
      title: "Emergency Junk Removal",
      link: "/emergency-junk-removal-san-diego",
      description: "Emergency junk removal service for urgent situations and last-minute cleanouts.",
      icon: "🚨",
      features: ["Emergency Availability", "Same-Day Response", "Weekend Service", "Court Deadlines"]
    },
    {
      title: "Pricing & Cost Information",
      link: "/junk-removal-cost-san-diego",
      description: "Transparent pricing with free quotes and competitive rates for all junk removal services.",
      icon: "💰",
      features: ["Free Quotes", "Transparent Pricing", "No Hidden Fees", "Volume-Based Rates"]
    },
    {
      title: "Foreclosure & Eviction Cleanouts",
      link: "/foreclosure-eviction-cleanout-san-diego",
      description: "Professional, discreet cleanout services for banks, landlords, and property managers.",
      icon: "🏦",
      features: ["Discreet Service", "Fast Turnaround", "Bank Experience", "Property Management"]
    },
    {
      title: "Complete Cleanout Services",
      link: "/cleanout-services-san-diego",
      description: "Full-service cleanouts for homes, garages, storage units, and commercial properties.",
      icon: "🧹",
      features: ["All Cleanout Types", "Same-Day Available", "Donation Handling", "Deep Cleaning Add-Ons"]
    },
    {
      title: "San Diego Dump Fees Guide",
      link: "/san-diego-dump-fees",
      description: "Complete 2025 guide to San Diego landfill dump fees including Miramar, Otay, Sycamore, and Ramona. Compare dump prices and learn when hiring costs less than DIY.",
      icon: "💰",
      features: ["All Landfills Covered", "2025 Pricing Data", "Free Programs Info", "DIY vs. Hauler Cost"]
    },
    {
      title: "Scrap Metal Removal",
      link: "/scrap-metal-removal",
      description: "Professional scrap metal pickup and recycling for homes and businesses. We handle all metal types with eco-friendly disposal.",
      icon: "♻️",
      features: ["All Metal Types", "Eco-Friendly Recycling", "Same-Day Available", "Competitive Pricing"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl font-bold mb-6">
                Complete Junk Removal Services
                <span className="block text-blue-300 mt-2">San Diego County</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Professional junk removal and hauling services for homes, businesses, and commercial properties. Same-day service available throughout San Diego County.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  📞 Call (619) 750-0114 - Same Day Service
                </a>
                <a
                  href="#services"
                  className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  View All Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Junk Removal Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                From emergency same-day pickups to scheduled commercial cleanouts, we provide comprehensive junk removal solutions for every need.
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Serving all of San Diego County including <a href="/junk-removal-poway" className="text-blue-600 hover:underline">Poway</a>, <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a>, <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a>, <a href="/junk-removal-spring-valley" className="text-blue-600 hover:underline">Spring Valley</a>, and all surrounding areas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden h-full flex flex-col">
                  <div className="p-6 flex flex-col h-full">
                    <div className="text-4xl mb-4 text-center">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6 flex-grow">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">What We Handle:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="text-xs text-gray-600 flex items-center">
                            <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={service.link}
                      className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors mt-auto"
                    >
                      View
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Why Choose Severin Cleaners for Your Junk Removal Needs?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Same-Day Service</h3>
                  <p className="text-gray-600 text-sm">Emergency junk removal available when you need it most</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Licensed & Insured</h3>
                  <p className="text-gray-600 text-sm">Fully licensed and insured for your protection and peace of mind</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Locally Owned</h3>
                  <p className="text-gray-600 text-sm">San Diego owned and operated, serving our community</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Fair Pricing</h3>
                  <p className="text-gray-600 text-sm">Transparent, upfront pricing with no hidden fees</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose from our comprehensive range of junk removal services. Same-day service available throughout San Diego County.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+16197500114"
                className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-lg font-bold text-xl transition-colors"
              >
                📞 Call (619) 750-0114
              </a>
              <a
                href="#services"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-lg font-bold text-xl transition-colors"
              >
                Browse Services Above
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}