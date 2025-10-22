export default function TrustFactors() {
  const factors = [
    {
      icon: "🏆",
      title: "Licensed & Insured",
      description: "Fully licensed junk removal San Diego company with comprehensive liability insurance for your protection."
    },
    {
      icon: "⚡",
      title: "Same-Day Junk Hauling San Diego",
      description: "Emergency and scheduled same-day junk removal San Diego services available 7 days a week."
    },
    {
      icon: "💰",
      title: "Transparent Pricing",
      description: "Upfront pricing with no hidden fees. You know the cost before we start your junk pickup San Diego service."
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Locally-Owned Local Business",
      description: "Proud San Diego locally-owned business serving our community with personalized trash removal San Diego services."
    },
    {
      icon: "♻️",
      title: "Eco-Friendly Junk Removal San Diego",
      description: "Committed to responsible disposal, recycling, and donation programs for sustainable junk hauling San Diego."
    },
    {
      icon: "🗣️",
      title: "Bilingual Junk Removal",
      description: "Professional junk removal San Diego services available in both English and Spanish for all customers."
    }
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose Severin Cleaners for Junk Removal San Diego?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            When you need reliable <strong>junk hauling San Diego</strong> services, choose the
            trusted local experts with proven results and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {factors.map((factor, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
              <div className="text-4xl mb-4">{factor.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{factor.title}</h3>
              <p className="text-gray-300 leading-relaxed">{factor.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-gray-300">Satisfied Customers</div>
            <div className="text-sm text-gray-400">Professional junk removal San Diego projects completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-gray-300">Emergency Service</div>
            <div className="text-sm text-gray-400">Same-day junk hauling San Diego availability</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
            <div className="text-gray-300">Years Experience</div>
            <div className="text-sm text-gray-400">Trusted trash removal San Diego expertise</div>
          </div>
        </div>

        <div className="bg-blue-600 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready for Professional Junk Removal San Diego?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who chose Severin Cleaners for reliable,
            eco-friendly <strong>junk pickup San Diego</strong> services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16197500114"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              📞 Call (619) 750-0114 – Book Same-Day Service & Save 15%
            </a>
            <a
              href="#contact"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors"
            >
              Get Free Quote – Save 15% When You Book Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}