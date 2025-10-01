import Image from 'next/image';

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
    image: '/webphotos/residential.jpg',
    link: '/cleanout-services-san-diego'
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
    image: '/webphotos/commercial.jpg',
    link: '/commercial-junk-removal-san-diego'
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
    image: '/webphotos/estate.jpg',
    link: '/estate-cleanout-san-diego'
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
    image: '/webphotos/construction.jpg',
    link: '/cleanout-services-san-diego'
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
    image: '/webphotos/furniture.jpg',
    link: '/cleanout-services-san-diego'
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
    image: '/webphotos/hoarding.jpg',
    link: '/hoarding-cleanup-san-diego'
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
              <a
                key={service.id}
                href={service.link}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group block cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <span className="text-white text-xl">{service.icon}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed hidden md:block">
                    {service.description}
                  </p>

                  <ul className="space-y-2 hidden md:block">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
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
                      <p className="text-gray-600 text-sm hidden md:block">{service.description}</p>
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
                  description: 'Professional emergency junk removal available 24/7',
                  icon: '⚡'
                },
                {
                  title: 'Eco-Friendly',
                  description: 'We recycle and donate whenever possible',
                  icon: '♻️'
                },
                {
                  title: 'Licensed & Insured',
                  description: 'Top rated, fully licensed and insured professionals',
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
          {/* Mobile: Clickable Card */}
          <a href="/areas-we-serve" className="md:hidden block bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 group">
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center group-hover:text-blue-500 transition-colors">
              Serving All of San Diego County
            </h3>
            <p className="text-gray-600 text-center text-sm">
              Click to view all areas we serve →
            </p>
          </a>

          {/* Desktop: Full Area List */}
          <div className="hidden md:block bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Serving All of San Diego County
            </h3>
            <p className="text-gray-600 mb-8 text-center text-lg">
              Local junk removal near me - we serve these San Diego areas:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'El Cajon', link: '/junk-removal-el-cajon' },
                { name: 'La Mesa', link: '/junk-removal-la-mesa' },
                { name: 'Santee', link: '/junk-removal-santee' },
                { name: 'Lakeside', link: '/junk-removal-lakeside' },
                { name: 'Spring Valley', link: '/junk-removal-spring-valley' },
                { name: 'Lemon Grove', link: '/junk-removal-lemon-grove' },
                { name: 'San Diego', link: '/san-diego-junk-removal' },
                { name: 'Chula Vista', link: '/junk-removal-chula-vista' },
                { name: 'Carmel Valley', link: '/junk-removal-carmel-valley' },
                { name: 'Del Mar', link: '/junk-removal-del-mar' },
                { name: 'Hillcrest', link: '/junk-removal-hillcrest' },
                { name: 'La Jolla', link: '/junk-removal-la-jolla' },
                { name: 'North Park', link: '/junk-removal-north-park' },
                { name: 'Oceanside', link: '/junk-removal-oceanside' },
                { name: 'Pacific Beach', link: '/junk-removal-pacific-beach' },
                { name: 'Point Loma', link: '/junk-removal-point-loma' },
                { name: 'Poway', link: '/junk-removal-poway' },
                { name: 'Rancho Santa Fe', link: '/junk-removal-rancho-santa-fe' },
                { name: 'Vista', link: '/junk-removal-vista' }
              ].map((area, index) => (
                <a
                  key={index}
                  href={area.link}
                  className="bg-gray-50 rounded-lg p-3 text-center hover:bg-blue-500 hover:text-white transition-colors duration-200 block"
                >
                  <span className="font-medium">{area.name}</span>
                </a>
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