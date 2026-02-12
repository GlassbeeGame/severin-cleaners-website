export default function NeighborhoodCoverage() {
  const regions = [
    {
      title: "Coastal Communities",
      description: "Professional junk removal San Diego coastal areas",
      neighborhoods: [
        { name: "La Jolla", link: "/junk-removal-la-jolla" },
        { name: "Pacific Beach", link: "/junk-removal-pacific-beach" },
        { name: "Point Loma", link: "/junk-removal-point-loma" },
        { name: "Mission Beach", link: "#" },
        { name: "Ocean Beach", link: "#" },
        { name: "Del Mar", link: "/junk-removal-del-mar" }
      ]
    },
    {
      title: "Central Urban",
      description: "Same-day junk hauling San Diego central neighborhoods",
      neighborhoods: [
        { name: "Hillcrest", link: "/junk-removal-hillcrest" },
        { name: "North Park", link: "/junk-removal-north-park" },
        { name: "Clairemont", link: "/junk-removal-clairemont" },
        { name: "Kearny Mesa", link: "/junk-removal-kearny-mesa" },
        { name: "Mira Mesa", link: "/junk-removal-mira-mesa" }
      ]
    },
    {
      title: "East County",
      description: "Reliable trash removal San Diego eastern communities",
      neighborhoods: [
        { name: "El Cajon", link: "/junk-removal-el-cajon" },
        { name: "La Mesa", link: "/la-mesa-junk-removal" },
        { name: "Santee", link: "/junk-removal-santee" },
        { name: "Lemon Grove", link: "/junk-removal-lemon-grove" },
        { name: "Spring Valley", link: "/junk-removal-spring-valley" },
        { name: "Lakeside", link: "/junk-removal-lakeside" }
      ]
    },
    {
      title: "South Bay",
      description: "Comprehensive junk pickup San Diego south county",
      neighborhoods: [
        { name: "Chula Vista", link: "/junk-removal-chula-vista" },
        { name: "National City", link: "#" },
        { name: "Imperial Beach", link: "#" },
        { name: "San Ysidro", link: "#" },
        { name: "Bonita", link: "#" },
        { name: "Otay Mesa", link: "#" }
      ]
    },
    {
      title: "North County",
      description: "Professional junk removal San Diego northern areas",
      neighborhoods: [
        { name: "Oceanside", link: "/junk-removal-oceanside" },
        { name: "Carlsbad", link: "#" },
        { name: "Vista", link: "/junk-removal-vista" },
        { name: "Escondido", link: "/junk-removal-escondido" },
        { name: "Poway", link: "/junk-removal-poway" },
        { name: "Rancho Santa Fe", link: "/junk-removal-rancho-santa-fe" }
      ]
    },
    {
      title: "Exclusive Communities",
      description: "Premium junk hauling San Diego upscale neighborhoods",
      neighborhoods: [
        { name: "Carmel Valley", link: "/junk-removal-carmel-valley" },
        { name: "Rancho Bernardo", link: "#" },
        { name: "Scripps Ranch", link: "#" },
        { name: "Torrey Pines", link: "#" },
        { name: "Solana Beach", link: "#" },
        { name: "Encinitas", link: "#" }
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            San Diego Junk Hauling Coverage – From Coast to County
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our professional <strong>junk removal San Diego</strong> team serves every neighborhood
            across San Diego County with <strong>same-day junk removal San Diego</strong> services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{region.title}</h3>
              <p className="text-blue-600 font-semibold mb-4 text-sm">{region.description}</p>

              <div className="space-y-2">
                {region.neighborhoods.map((neighborhood, nIndex) => (
                  <div key={nIndex} className="flex items-center justify-between">
                    <a
                      href={neighborhood.link}
                      className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                    >
                      {neighborhood.name}
                    </a>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <a
                  href="tel:+16197500114"
                  className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                >
                  📞 Call Now for Same-Day Junk Removal in {region.title}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Serving All San Diego County
          </h3>
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            From coastal communities to inland valleys, our <strong>junk pickup San Diego</strong> team
            covers every ZIP code with professional, same-day service. Licensed, insured, and ready
            to handle any <strong>trash removal San Diego</strong> project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16197500114"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              📞 Call (619) 750-0114
            </a>
            <a
              href="#contact"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}