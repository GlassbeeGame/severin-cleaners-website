export default function ServiceHub() {
  const services = [
    {
      title: "Furniture Removal San Diego",
      description: "Professional furniture removal San Diego services for couches, beds, tables, and all household furniture.",
      link: "/furniture-disposal-san-diego",
      icon: "🛋️"
    },
    {
      title: "Appliance Removal San Diego",
      description: "Safe appliance removal San Diego including refrigerators, washers, dryers, and kitchen appliances.",
      link: "/appliance-removal-san-diego",
      icon: "🔧"
    },
    {
      title: "Estate Cleanouts San Diego",
      description: "Compassionate estate cleanout San Diego services for complete property clearing and organization.",
      link: "/estate-cleanout-san-diego",
      icon: "🏠"
    },
    {
      title: "Construction Debris Removal San Diego",
      description: "Professional construction debris removal San Diego for contractors and homeowners.",
      link: "/construction-debris-removal-san-diego",
      icon: "🚧"
    },
    {
      title: "Hoarding Cleanup San Diego",
      description: "Sensitive hoarding cleanup San Diego with professional organizing and disposal services.",
      link: "/hoarding-cleanup-san-diego",
      icon: "🧹"
    },
    {
      title: "Hot Tub Removal San Diego",
      description: "Specialized hot tub removal San Diego including complete dismantling and disposal.",
      link: "/hot-tub-removal-san-diego",
      icon: "🛁"
    },
    {
      title: "Commercial Junk Removal San Diego",
      description: "Business-focused commercial junk removal San Diego for offices, retail, and warehouses.",
      link: "/commercial-junk-removal-san-diego",
      icon: "🏢"
    },
    {
      title: "Same Day Junk Removal San Diego",
      description: "Emergency same day junk removal San Diego for urgent cleanouts and immediate needs.",
      link: "/same-day-junk-removal-san-diego",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Junk Removal San Diego Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From <strong>furniture removal San Diego</strong> to <strong>construction debris removal San Diego</strong>,
            we provide comprehensive junk hauling San Diego solutions for every need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <a href={service.link} className="hover:text-blue-600 transition-colors">
                  {service.title}
                </a>
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <a
                href={service.link}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-600 text-white p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need Multiple Services?</h3>
            <p className="text-blue-100 mb-6">
              Combine our junk removal San Diego services for complete property cleanouts and save on bundled pricing.
            </p>
            <a
              href="tel:+16197500114"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              📞 Call (619) 750-0114 for Custom Package Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}