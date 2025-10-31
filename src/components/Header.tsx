import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          #mobile-menu-toggle { display: none; }
          #mobile-menu-toggle:checked ~ #mobile-menu { display: block !important; }
          #mobile-menu-toggle:checked ~ label .menu-icon { display: none; }
          #mobile-menu-toggle:checked ~ label .close-icon { display: block; }
          .close-icon { display: none; }
        `
      }} />
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Severin Cleaners Logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
                priority
              />
              <div className="text-2xl font-black text-gray-900 uppercase">
                Severin
                <span className="text-blue-500"> Cleaners</span>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-semibold py-2"
            >
              Home
            </Link>

            <Link
              href="/services"
              className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-semibold py-2"
            >
              Services
            </Link>

            <Link
              href="/areas-we-serve"
              className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-semibold py-2"
            >
              Areas We Serve
            </Link>

            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-semibold py-2"
            >
              About
            </Link>
            <Link
              href="/junk-removal-cost-san-diego"
              className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-semibold py-2"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-semibold py-2"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-semibold py-2"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+16197500114"
              className="btn btn-primary"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (619) 750-0114
            </a>
          </div>

          <div className="md:hidden">
            <input type="checkbox" id="mobile-menu-toggle" />
            <label
              htmlFor="mobile-menu-toggle"
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200 cursor-pointer inline-block"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6 menu-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="h-6 w-6 close-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>

            <div id="mobile-menu" className="hidden md:hidden border-t border-gray-200 absolute left-0 right-0 bg-white shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  className="block px-3 py-2 text-base font-semibold text-gray-700 hover:text-blue-500 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="block px-3 py-2 text-base font-semibold text-gray-700 hover:text-blue-500 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  Services
                </Link>
                <Link
                  href="/areas-we-serve"
                  className="block px-3 py-2 text-base font-semibold text-gray-700 hover:text-blue-500 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  Areas We Serve
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-2 text-base font-semibold text-gray-700 hover:text-blue-500 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  About
                </Link>
                <Link
                  href="/junk-removal-cost-san-diego"
                  className="block px-3 py-2 text-base font-semibold text-gray-700 hover:text-blue-500 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  Pricing
                </Link>
                <Link
                  href="/blog"
                  className="block px-3 py-2 text-base font-semibold text-gray-700 hover:text-blue-500 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-base font-semibold text-gray-700 hover:text-blue-500 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}