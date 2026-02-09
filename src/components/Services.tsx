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
    image: '/optimized/residential.webp',
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
    image: '/optimized/commercial.webp',
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
    image: '/optimized/estate.webp',
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
    image: '/optimized/construction.webp',
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
    image: '/optimized/toiletteam.webp',
    link: '/furniture-disposal-san-diego'
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
    image: '/optimized/5Q8A8965.webp',
    link: '/hoarding-cleanup-san-diego'
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              El Cajon's trusted junk hauling experts. We handle everything from single items to complete property cleanouts. Need <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline font-semibold">furniture removal</a> or <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline font-semibold">mattress disposal</a>? We've got you covered with <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline font-semibold">same-day service</a>.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proudly serving <a href="/junk-removal-poway" className="text-blue-600 hover:underline">Poway</a>, <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a>, <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a>, <a href="/junk-removal-spring-valley" className="text-blue-600 hover:underline">Spring Valley</a>, and all of San Diego County.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
                    loading="lazy"
                    quality={50}
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 380px"
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

          {/* See All Services Button */}
          <div className="text-center">
            <a
              href="/services"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors shadow-lg hover:shadow-xl"
            >
              <span>See All Services</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Need Junk Removed Today?
            </h2>
            <a
              href="tel:+16197500114"
              className="inline-flex items-center gap-3 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-2xl md:text-3xl font-black shadow-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-6"
            >
              <span className="text-3xl">📞</span>
              <span>(619) 750-0114</span>
            </a>
            <div className="mt-6">
              <a
                href="/san-diego-junk-removal"
                className="inline-block text-white hover:text-blue-200 transition-colors duration-200 text-lg font-semibold underline"
              >
                Learn More About Our San Diego Junk Removal Services →
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Same Day Service',
                description: 'Fast response for urgent junk removal needs',
                icon: '⚡'
              },
              {
                title: 'Locally Owned',
                description: 'Proudly serving San Diego County communities',
                icon: '🏡'
              },
              {
                title: 'Licensed & Insured',
                description: 'Fully licensed and insured professionals',
                icon: '🛡️'
              },
              {
                title: 'Upfront Pricing',
                description: 'Transparent quotes with no hidden fees',
                icon: '💰'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container">
          {/* Mobile: Clickable Card with Image */}
          <a href="/areas-we-serve" className="md:hidden block bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
            <div className="relative h-48">
              <Image
                src="/optimized/locations.webp"
                alt="San Diego County junk removal service areas map"
                fill
                loading="lazy"
                quality={50}
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 640px"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-black mb-1">Serving</h3>
                  <h3 className="text-3xl font-black text-blue-400">San Diego County</h3>
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <p className="text-gray-700 font-semibold group-hover:text-blue-500 transition-colors">
                Click to view all areas we serve →
              </p>
            </div>
          </a>

          {/* Desktop: Full Area List */}
          <div className="hidden md:block bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left: Image */}
              <div className="relative h-64 lg:h-full min-h-[400px]">
                <Image
                  src="/optimized/locations.webp"
                  alt="San Diego County junk removal service areas map"
                  fill
                  loading="lazy"
                  quality={50}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 640px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center lg:justify-start lg:pl-12">
                  <div className="text-white text-center lg:text-left">
                    <h3 className="text-3xl md:text-4xl font-black mb-2">Serving</h3>
                    <h3 className="text-4xl md:text-5xl font-black text-blue-400">San Diego</h3>
                    <h3 className="text-4xl md:text-5xl font-black text-blue-400">County</h3>
                  </div>
                </div>
              </div>

              {/* Right: Areas Grid */}
              <div className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Serving All of San Diego County
                </h3>
                <p className="text-gray-600 mb-8 text-base">
                  Local junk removal near me - we serve these San Diego areas:
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { name: 'El Cajon', link: '/junk-removal-el-cajon' },
                    { name: 'La Mesa', link: '/junk-removal-la-mesa' },
                    { name: 'Santee', link: '/junk-removal-santee' },
                    { name: 'Lakeside', link: '/junk-removal-lakeside' },
                    { name: 'Spring Valley', link: '/junk-removal-spring-valley' },
                    { name: 'Lemon Grove', link: '/junk-removal-lemon-grove' },
                    { name: 'Kearny Mesa', link: '/junk-removal-kearny-mesa' },
                    { name: 'Clairemont', link: '/junk-removal-clairemont' },
                    { name: 'Chula Vista', link: '/junk-removal-chula-vista' },
                    { name: 'Carmel Valley', link: '/junk-removal-carmel-valley' },
                    { name: 'Del Mar', link: '/junk-removal-del-mar' },
                    { name: 'Escondido', link: '/junk-removal-escondido' },
                    { name: 'Hillcrest', link: '/junk-removal-hillcrest' },
                    { name: 'La Jolla', link: '/junk-removal-la-jolla' },
                    { name: 'Mira Mesa', link: '/junk-removal-mira-mesa' },
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
                      className="bg-gray-50 rounded-lg px-3 py-2 text-center hover:bg-blue-500 hover:text-white transition-colors duration-200 block text-sm font-medium"
                    >
                      {area.name}
                    </a>
                  ))}
                </div>
                <p className="text-center pt-4 border-t border-gray-200">
                  <span className="text-gray-600 text-sm">Don't see your area? </span>
                  <a href="tel:+16197500114" className="text-blue-500 font-bold hover:underline text-sm">
                    Call us at (619) 750-0114
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}