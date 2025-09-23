const junkServices = [
  {
    id: 'residential-junk',
    title: 'Residential Junk Removal',
    icon: '🏠',
    description: 'Full-service home cleanouts including furniture, appliances, and household debris. We handle everything from single items to complete home cleanouts.',
    features: [
      'Furniture & appliance removal',
      'Garage & basement cleanouts',
      'Attic & shed clearing',
      'Yard waste & debris',
      'Same-day service available'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'commercial-junk',
    title: 'Commercial Junk Removal',
    icon: '🏢',
    description: 'Professional commercial cleanout services for offices, retail spaces, and warehouses. Licensed and insured for your protection.',
    features: [
      'Office furniture removal',
      'Retail fixture disposal',
      'Warehouse cleanouts',
      'Construction debris',
      'Flexible scheduling'
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'estate-cleanout',
    title: 'Estate Cleanouts',
    icon: '🏡',
    description: 'Compassionate and efficient estate cleanout services. We handle the entire process with respect and care during difficult times.',
    features: [
      'Complete property cleanouts',
      'Donation coordination',
      'Valuable item sorting',
      'Document shredding',
      'Flexible timelines'
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'construction-debris',
    title: 'Construction Debris',
    icon: '🔨',
    description: 'Safe and efficient removal of construction and renovation debris. We handle all types of building materials and demolition waste.',
    features: [
      'Drywall & lumber removal',
      'Concrete & brick disposal',
      'Roofing material cleanup',
      'Scrap metal recycling',
      'Job site cleanup'
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'appliance-furniture',
    title: 'Appliance & Furniture',
    icon: '🛋️',
    description: 'Specialized removal of heavy appliances and furniture. Our team handles all the heavy lifting and proper disposal.',
    features: [
      'Refrigerator & freezer removal',
      'Washer & dryer disposal',
      'Couch & mattress hauling',
      'Office furniture removal',
      'Safe disconnection & transport'
    ],
    image: 'https://images.unsplash.com/photo-1556909114-44e3e70034e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'hoarding-cleanup',
    title: 'Hoarding Cleanup',
    icon: '🧹',
    description: 'Sensitive and professional hoarding cleanup services. We work discreetly to restore properties to safe, livable conditions.',
    features: [
      'Compassionate approach',
      'Complete property restoration',
      'Biohazard certified team',
      'Sorting & organizing',
      'Follow-up support'
    ],
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
];

const additionalServices = [
  {
    title: 'Pressure Washing',
    description: 'Professional pressure washing for driveways, sidewalks, patios, and building exteriors.',
    icon: '💦'
  },
  {
    title: 'Car Detailing',
    description: 'Complete auto detailing services including interior, exterior, and engine bay cleaning.',
    icon: '🚗'
  }
];

export default function Services() {
  return (
    <>
      <section id="services" className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              Professional Junk Removal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              El Cajon's trusted junk hauling experts. We handle everything from single items to complete property cleanouts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {junkServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">{service.icon}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="btn btn-primary w-full text-center"
                  >
                    Get Free Quote
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Additional Services We Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h4>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-blue-500 text-white">
        <div className="container">
          <div className="text-center">
            <h2 className="text-white mb-6">Why Choose Severin Cleaners?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                {
                  title: 'Same Day Service',
                  description: 'Emergency junk removal available 24/7',
                  icon: '⚡'
                },
                {
                  title: 'Eco-Friendly',
                  description: 'We recycle and donate whenever possible',
                  icon: '♻️'
                },
                {
                  title: 'Licensed & Insured',
                  description: 'Fully licensed and insured for your protection',
                  icon: '🛡️'
                },
                {
                  title: 'Transparent Pricing',
                  description: 'No hidden fees, upfront quotes always',
                  icon: '💰'
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-white/90 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Serving All of San Diego County
            </h3>
            <p className="text-gray-600 mb-8 text-center text-lg">
              Professional junk removal services available throughout:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'El Cajon', 'La Mesa', 'Santee', 'Lakeside',
                'Spring Valley', 'Lemon Grove', 'San Diego', 'Chula Vista',
                'National City', 'Bonita', 'Alpine', 'Jamul',
                'Rancho San Diego', 'La Jolla', 'Pacific Beach', 'Mission Valley'
              ].map((area, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                  <span className="text-gray-700 font-medium">{area}</span>
                </div>
              ))}
            </div>
            <p className="text-center mt-8">
              <span className="text-gray-600">Don't see your area? </span>
              <a href="tel:+16197500114" className="text-blue-500 font-bold hover:underline">
                Call us at (619) 750-0114
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}