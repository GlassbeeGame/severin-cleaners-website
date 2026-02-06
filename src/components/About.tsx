import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-6">
              About Severin Hauling
            </h2>
            <p className="text-lg text-neutral mb-6 leading-relaxed">
              With years of experience serving the greater San Diego area,
              Severin Hauling has built a reputation for reliable, professional hauling services.
              We understand that every job is unique, and we&apos;re committed to delivering
              exceptional results that exceed your expectations.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 rounded-full p-2 flex-shrink-0 mt-1">
                  <span className="text-accent text-lg">⚡</span>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-dark mb-1">Fast Response Time</h3>
                  <p className="text-neutral text-sm sm:text-base">
                    We respond to quote requests within 1 hour and can often provide same-day service.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 rounded-full p-2 flex-shrink-0 mt-1">
                  <span className="text-accent text-lg">🛡️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-dark mb-1">Professional & Licensed</h3>
                  <p className="text-neutral text-sm sm:text-base">
                    Our top rated team is fully licensed, insured, and committed to delivering quality work every time.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 rounded-full p-2 flex-shrink-0 mt-1">
                  <span className="text-accent text-lg">💬</span>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-dark mb-1">Easy Communication</h3>
                  <p className="text-neutral text-sm sm:text-base">
                    We&apos;re friendly, flexible, and easy to work with. Clear communication throughout the process.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+16197500114"
                className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg text-center touch-target transition-colors duration-200"
              >
                Call (619) 750-0114
              </a>
              <Link
                href="#contact"
                className="bg-neutral-light hover:bg-neutral text-neutral-dark font-semibold py-3 px-6 rounded-lg text-center touch-target transition-colors duration-200"
              >
                Get Free Quote
              </Link>
            </div>
          </div>

          {/* Stats/Features */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-primary/5 rounded-xl p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">24hr</div>
              <div className="text-neutral-dark font-medium text-sm sm:text-base">Response Time</div>
            </div>
            
            <div className="bg-accent/5 rounded-xl p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-neutral-dark font-medium text-sm sm:text-base">Satisfaction</div>
            </div>
            
            <div className="bg-primary/5 rounded-xl p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">3+</div>
              <div className="text-neutral-dark font-medium text-sm sm:text-base">Service Types</div>
            </div>
            
            <div className="bg-accent/5 rounded-xl p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">Local</div>
              <div className="text-neutral-dark font-medium text-sm sm:text-base">San Diego Area</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
