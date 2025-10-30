import Link from 'next/link';
import { REVIEW_CONFIG } from '@/config/reviews';

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
                <span className="text-blue-300"> Cleaners</span>
              </div>
              <p className="text-blue-400 text-lg font-medium mb-4 italic">
                &quot;From Junk to Shine, We Handle Every Grime."
              </p>
              <p className="text-white/90 text-base leading-relaxed mb-6">
                Full service junk removal in San Diego and surrounding areas.
                We provide professional junk hauling, estate cleanouts, furniture removal, and more
                with same-day service and exceptional quality.
              </p>

              {/* Social Media Links */}
              <div className="mb-6">
                <div className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wider">Follow Us</div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/severinhauling/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-blue-500 p-2.5 rounded-lg transition-all duration-200 group"
                    aria-label="Follow us on Instagram"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/severinhauling"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-blue-500 p-2.5 rounded-lg transition-all duration-200 group"
                    aria-label="Follow us on Facebook"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.yelp.com/biz/severin-cleaners-san-diego"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-red-500 p-2.5 rounded-lg transition-all duration-200 group"
                    aria-label="Review us on Yelp"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 384 512">
                      <path d="M42.9 240.32l99.62 48.61c19.2 9.4 16.2 37.51-4.5 42.71L30.5 358.45a22.79 22.79 0 0 1-28.21-19.6 197.16 197.16 0 0 1 9-85.32 22.8 22.8 0 0 1 31.61-13.21zm44 239.25a199.45 199.45 0 0 0 79.42 32.11A22.78 22.78 0 0 0 192.94 490l3.9-110.82c.7-21.3-25.5-31.91-39.81-16.1l-74.21 82.4a22.82 22.82 0 0 0 4.09 34.09zm145.34-109.92l58.81 94a22.93 22.93 0 0 0 34 5.5 198.36 198.36 0 0 0 52.71-67.61A23 23 0 0 0 364.17 370l-105.42-34.26c-20.31-6.5-37.81 15.8-26.51 33.91zm148.33-132.23a197.44 197.44 0 0 0-50.41-69.31 22.85 22.85 0 0 0-34 4.4l-62 91.92c-11.9 17.7 4.7 40.61 25.2 34.71L366 268.63a23 23 0 0 0 14.61-31.21zM62.11 30.18a22.86 22.86 0 0 0-9.9 32l104.12 180.44c11.7 20.2 42.61 11.9 42.61-11.4V22.88a22.67 22.67 0 0 0-24.5-22.8 320.37 320.37 0 0 0-112.33 30.1z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.thumbtack.com/ca/la-mesa/junk-removal/severin-hauling/service/541381661422116888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-blue-500 p-2.5 rounded-lg transition-all duration-200 group"
                    aria-label="View us on Thumbtack"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM171.5 259.5l-71 71c-4.7 4.7-4.7 12.3 0 17l17 17c4.7 4.7 12.3 4.7 17 0l71-71c18.8-18.8 18.8-49.1 0-67.9l-73-73c-18.8-18.8-49.1-18.8-67.9 0l-17 17c-4.7 4.7-4.7 12.3 0 17l17 17c4.7 4.7 12.3 4.7 17 0l73 73c4.6 4.7 4.6 12.3-.1 17zm195-162.9l-73 73c-4.7 4.7-4.7 12.3 0 17l73 73c18.8 18.8 49.1 18.8 67.9 0l17-17c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-73-73c-4.7-4.7-12.3-4.7-17 0l-71 71c-4.7 4.7-4.7 12.3 0 17l17 17c4.7 4.7 12.3 4.7 17 0l71-71c4.7-4.6 12.3-4.6 17 .1z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a
                  href="tel:+16197500114"
                  className="text-white hover:text-blue-300 transition-colors duration-200 font-medium"
                >
                  (619) 750-0114
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a
                  href="mailto:severincleaners@gmail.com"
                  className="text-white hover:text-blue-300 transition-colors duration-200"
                >
                  severincleaners@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <a
                  href="https://share.google/OzHkUoiWXUIaJ20K6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-blue-400 transition-colors duration-200"
                >
                  8900 Grossmont Blvd, Suite 1, La Mesa, CA 91941
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-300">Our Services</h3>
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
              <li>
                <Link href="/couch-removal-san-diego" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  Couch Removal
                </Link>
              </li>
              <li>
                <Link href="/san-diego-mattress-disposal" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  Mattress Disposal
                </Link>
              </li>
              <li>
                <Link href="/scrap-metal-removal" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  Scrap Metal Removal
                </Link>
              </li>
              <li>
                <Link href="/san-diego-dump-fees" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  Dump Fees Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-300">Quick Links</h3>
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
              <li>
                <Link href="/blog" className="text-white/80 hover:text-blue-400 transition-colors duration-200">
                  Blog & Guides
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-center text-blue-300">Service Areas</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-sm text-white/80">
            {[
              { name: 'San Diego', link: '/san-diego-junk-removal' },
              { name: 'Carmel Valley', link: '/junk-removal-carmel-valley' },
              { name: 'Chula Vista', link: '/junk-removal-chula-vista' },
              { name: 'Clairemont', link: '/junk-removal-clairemont' },
              { name: 'Del Mar', link: '/junk-removal-del-mar' },
              { name: 'El Cajon', link: '/junk-removal-el-cajon' },
              { name: 'Escondido', link: '/junk-removal-escondido' },
              { name: 'Hillcrest', link: '/junk-removal-hillcrest' },
              { name: 'Kearny Mesa', link: '/junk-removal-kearny-mesa' },
              { name: 'La Jolla', link: '/junk-removal-la-jolla' },
              { name: 'La Mesa', link: '/junk-removal-la-mesa' },
              { name: 'Lakeside', link: '/junk-removal-lakeside' },
              { name: 'Lemon Grove', link: '/junk-removal-lemon-grove' },
              { name: 'Mira Mesa', link: '/junk-removal-mira-mesa' },
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