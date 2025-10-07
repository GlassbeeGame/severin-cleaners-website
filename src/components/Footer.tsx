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
                <a
                  href="https://share.google/OzHkUoiWXUIaJ20K6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-blue-400 transition-colors duration-200"
                >
                  8900 Grossmont Blvd, La Mesa, CA 91941
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-500">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/san-diego-junk-removal" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  Junk Removal
                </Link>
              </li>
              <li>
                <Link href="/furniture-removal-san-diego" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  Furniture Removal
                </Link>
              </li>
              <li>
                <Link href="/appliance-removal-san-diego" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  Appliance Removal
                </Link>
              </li>
              <li>
                <Link href="/estate-cleanout-san-diego" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  Estate Cleanouts
                </Link>
              </li>
              <li>
                <Link href="/commercial-junk-removal-san-diego" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  Commercial Junk Removal
                </Link>
              </li>
              <li>
                <Link href="/construction-debris-removal-san-diego" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  Construction Debris
                </Link>
              </li>
              <li>
                <Link href="/hoarding-cleanup-san-diego" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  Hoarding Cleanup
                </Link>
              </li>
              <li>
                <Link href="/hot-tub-removal-san-diego" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  Hot Tub Removal
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-500">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/areas-we-serve" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  Areas We Serve
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/junk-removal-cost-san-diego" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-center text-blue-500">Service Areas</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-sm text-white/80">
            {[
              { name: 'San Diego', link: '/san-diego-junk-removal' },
              { name: 'Carmel Valley', link: '/junk-removal-carmel-valley' },
              { name: 'Chula Vista', link: '/junk-removal-chula-vista' },
              { name: 'Clairemont', link: '/junk-removal-clairemont' },
              { name: 'Del Mar', link: '/junk-removal-del-mar' },
              { name: 'El Cajon', link: '/junk-removal-el-cajon' },
              { name: 'Hillcrest', link: '/junk-removal-hillcrest' },
              { name: 'Kearny Mesa', link: '/junk-removal-kearny-mesa' },
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
              <Link
                key={index}
                href={area.link}
                className="text-center hover:text-blue-400 transition-colors duration-200 block"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/70 text-center sm:text-left">
              © 2024 Severin Cleaners. All rights reserved.
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-6 text-sm">
              <span className="text-white/70">Licensed & Insured</span>
              <span className="text-white/70 hidden sm:inline">•</span>
              <span className="text-white/70">Local Business</span>
              <span className="text-white/70 hidden sm:inline">•</span>
              <a
                href="https://share.google/OzHkUoiWXUIaJ20K6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                </svg>
                Find us on Google
              </a>
              <span className="text-white/70 hidden sm:inline">•</span>
              <a
                href="https://g.page/r/CbxDDPSHK9sjEAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 font-medium flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                Review Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}