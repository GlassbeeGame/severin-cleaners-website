import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <div className="text-2xl font-bold mb-4">
                <span className="text-white">Severin</span>
                <span className="text-blue-500"> Cleaners</span>
              </div>
              <p className="text-blue-400 text-lg font-medium mb-4 italic">
                &quot;From Junk to Shine, We Handle Every Grime."
              </p>
              <p className="text-white/90 text-base leading-relaxed mb-6">
                Full service junk removal in San Diego and surrounding areas.
                We provide professional junk hauling, estate cleanouts, furniture removal, and more
                with same-day service and exceptional quality.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a
                  href="tel:+16197500114"
                  className="text-white hover:text-blue-500 transition-colors duration-200 font-medium"
                >
                  (619) 750-0114
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a
                  href="mailto:severincleaners@gmail.com"
                  className="text-white hover:text-blue-500 transition-colors duration-200"
                >
                  severincleaners@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-white/90">San Diego, CA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-500">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  Junk Removal
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  Estate Cleanouts
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  Furniture Removal
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  Construction Debris
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  Pressure Washing
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  Car Detailing
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-500">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  Free Quote
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-center text-blue-500">Service Areas</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 text-sm text-white/80">
            {[
              { name: 'San Diego', link: '/san-diego-junk-removal' },
              { name: 'Carmel Valley', link: '/junk-removal-carmel-valley' },
              { name: 'Chula Vista', link: '/junk-removal-chula-vista' },
              { name: 'Del Mar', link: '/junk-removal-del-mar' },
              { name: 'El Cajon', link: '/junk-removal-el-cajon' },
              { name: 'Hillcrest', link: '/junk-removal-hillcrest' },
              { name: 'La Jolla', link: '/junk-removal-la-jolla' },
              { name: 'La Mesa', link: '/junk-removal-la-mesa' },
              { name: 'Lakeside', link: '/junk-removal-lakeside' },
              { name: 'Lemon Grove', link: '/junk-removal-lemon-grove' },
              { name: 'North Park', link: '/junk-removal-north-park' },
              { name: 'Oceanside', link: '/junk-removal-oceanside' },
              { name: 'Pacific Beach', link: '/junk-removal-pacific-beach' },
              { name: 'Point Loma', link: '/junk-removal-point-loma' },
              { name: 'Poway', link: '/junk-removal-poway' },
              { name: 'Rancho Santa Fe', link: '/junk-removal-rancho-santa-fe' },
              { name: 'Santee', link: '/junk-removal-santee' },
              { name: 'Spring Valley', link: '/junk-removal-spring-valley' },
              { name: 'Vista', link: '/junk-removal-vista' }
            ].map((area, index) => (
              <a
                key={index}
                href={area.link}
                className="text-center hover:text-blue-400 transition-colors duration-200 block"
              >
                {area.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/70 text-center sm:text-left">
              © 2024 Severin Cleaners. All rights reserved.
            </div>

            <div className="flex items-center gap-6 text-sm">
              <span className="text-white/70">Licensed & Insured</span>
              <span className="text-white/70">•</span>
              <span className="text-white/70">Local Business</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}