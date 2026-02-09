import Image from 'next/image';
import { getReviewCount, getRating } from '@/config/reviews';

export default function Hero() {
  const reviewCount = getReviewCount();
  const rating = getRating();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/optimized/landingpage.webp"
          alt="San Diego junk removal service background"
          fill
          priority
          quality={35}
          className="object-cover"
          sizes="100vw"
          fetchPriority="high"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
        />
        <div className="gradient-overlay"></div>
      </div>

      <div className="relative z-20 w-full px-4">
        <div className="max-w-5xl mx-auto text-center">

          {/* Reviews */}
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
            <div className="flex text-yellow-400 text-lg md:text-xl lg:text-2xl" aria-label={`${rating} star rating`}>
              {'★'.repeat(5)}
            </div>
            <span className="text-white text-sm md:text-base lg:text-lg font-medium">{rating} • {reviewCount} Reviews on Google</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white uppercase mb-6 md:mb-8 leading-tight">
            San Diego&apos;s Best
            <span className="block text-blue-500 mt-2">
              Junk Removal Service
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-2xl lg:text-3xl text-white font-bold mb-8 md:mb-12 max-w-3xl mx-auto">
            <a href="/same-day-junk-removal-san-diego" className="text-blue-300 hover:text-blue-200 underline">Same Day Service</a> • Licensed & Insured
          </p>

          {/* CTA Buttons - Balanced & Aesthetic */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch mb-12 md:mb-16 max-w-2xl mx-auto px-4">
            <a
              href="tel:+16197500114"
              className="btn btn-primary text-base md:text-lg px-8 md:px-10 py-4 font-black uppercase flex items-center justify-center flex-1 min-w-0 sm:min-w-[240px]"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              Call Now
            </a>
            <a
              href="/contact"
              className="btn btn-outline text-base md:text-lg px-8 md:px-10 py-4 font-black uppercase flex items-center justify-center flex-1 min-w-0 sm:min-w-[240px]"
            >
              Get Free Quote
            </a>
          </div>

          {/* Feature Pills - Symmetrical Layout */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 max-w-3xl mx-auto px-4">
            <div className="bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full border-2 border-white/20">
              <span className="text-white font-semibold text-sm md:text-base lg:text-lg whitespace-nowrap">✓ Same Day Service</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full border-2 border-white/20">
              <span className="text-white font-semibold text-sm md:text-base lg:text-lg whitespace-nowrap">✓ Free Estimates</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full border-2 border-white/20">
              <span className="text-white font-semibold text-sm md:text-base lg:text-lg whitespace-nowrap">✓ Licensed & Insured</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}