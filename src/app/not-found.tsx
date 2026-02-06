import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found (404) | Severin Hauling",
  description: "The page you're looking for doesn't exist. Explore our San Diego junk removal services or contact us for same-day service.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero-style 404 Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/optimized/landingpage.jpg"
              alt="Severin Hauling San Diego"
              fill
              priority
              quality={85}
              className="object-cover"
              sizes="100vw"
            />
            <div className="gradient-overlay"></div>
          </div>

          <div className="relative z-20 w-full px-4">
            <div className="max-w-5xl mx-auto text-center">

              {/* 404 Error Code */}
              <div className="mb-6 md:mb-8">
                <div className="text-8xl md:text-9xl lg:text-[12rem] font-black text-white/20 leading-none">
                  404
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white uppercase mb-6 md:mb-8 leading-tight">
                Page Not Found
                <span className="block text-blue-500 mt-2">
                  This Page Got Hauled Away!
                </span>
              </h1>

              {/* Tagline */}
              <p className="text-lg md:text-2xl lg:text-3xl text-white font-bold mb-8 md:mb-12 max-w-3xl mx-auto">
                The page you're looking for doesn't exist or has been moved.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch mb-12 md:mb-16 max-w-2xl mx-auto px-4">
                <Link
                  href="/"
                  className="btn btn-primary text-base md:text-lg px-8 md:px-10 py-4 font-black uppercase flex items-center justify-center flex-1 min-w-0 sm:min-w-[240px]"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                  Go Home
                </Link>
                <a
                  href="tel:+16197500114"
                  className="btn btn-outline text-base md:text-lg px-8 md:px-10 py-4 font-black uppercase flex items-center justify-center flex-1 min-w-0 sm:min-w-[240px]"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  Call Now
                </a>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-6 max-w-3xl mx-auto px-4">
                <Link href="/services" className="bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full border-2 border-white/20 hover:bg-white/30 transition-colors">
                  <span className="text-white font-semibold text-sm md:text-base lg:text-lg whitespace-nowrap">View Services</span>
                </Link>
                <Link href="/areas-we-serve" className="bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full border-2 border-white/20 hover:bg-white/30 transition-colors">
                  <span className="text-white font-semibold text-sm md:text-base lg:text-lg whitespace-nowrap">Areas We Serve</span>
                </Link>
                <Link href="/contact" className="bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full border-2 border-white/20 hover:bg-white/30 transition-colors">
                  <span className="text-white font-semibold text-sm md:text-base lg:text-lg whitespace-nowrap">Contact Us</span>
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
