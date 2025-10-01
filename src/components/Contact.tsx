export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-blue-500">
      <div className="container">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8">
            Ready for Same Day Junk Removal?<br />Contact Severin Cleaners Today
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch max-w-2xl mx-auto">
            <a
              href="tel:+16197500114"
              className="btn bg-white text-blue-500 hover:bg-gray-100 text-base md:text-lg px-8 md:px-10 py-4 font-black uppercase flex items-center justify-center flex-1 min-w-0 sm:min-w-[240px]"
            >
              📞 Call Now: (619) 750-0114
            </a>
            <a
              href="/contact"
              className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-500 text-base md:text-lg px-8 md:px-10 py-4 font-black uppercase flex items-center justify-center flex-1 min-w-0 sm:min-w-[240px]"
            >
              Get A Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
