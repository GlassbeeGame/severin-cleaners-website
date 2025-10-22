export default function EcoFriendly() {
  const ecoInitiatives = [
    {
      icon: "♻️",
      title: "Recycling Programs",
      description: "We recycle metals, electronics, and materials during every junk removal San Diego project, diverting waste from landfills."
    },
    {
      icon: "💝",
      title: "Donation Partnerships",
      description: "Usable furniture and appliances are donated to local San Diego charities through our junk hauling San Diego services."
    },
    {
      icon: "🌱",
      title: "Hazardous Waste Disposal",
      description: "Safe, legal disposal of paints, chemicals, and hazardous materials with certified eco-friendly junk removal San Diego methods."
    },
    {
      icon: "🚛",
      title: "Efficient Route Planning",
      description: "Optimized routes reduce fuel consumption and environmental impact for all trash removal San Diego operations."
    }
  ];

  const donationPartners = [
    "Salvation Army San Diego",
    "Goodwill San Diego",
    "San Diego Rescue Mission",
    "Habitat for Humanity San Diego",
    "Local Community Centers",
    "Women's Resource Centers"
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Eco-Friendly Junk Removal San Diego
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our commitment to <strong>eco-friendly junk removal San Diego</strong> includes responsible disposal,
            recycling programs, and community partnerships that make a positive environmental impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {ecoInitiatives.map((initiative, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{initiative.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{initiative.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{initiative.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Environmental Impact
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">85%</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Waste Diverted from Landfills</h4>
                  <p className="text-gray-600 text-sm">Through our eco-friendly junk hauling San Diego programs</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">50+</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Tons Recycled Monthly</h4>
                  <p className="text-gray-600 text-sm">Metals, electronics, and materials from junk removal San Diego</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">25+</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Charity Partners</h4>
                  <p className="text-gray-600 text-sm">Local organizations receiving donations from our services</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Donation and Recycling Partners
            </h3>
            <p className="text-gray-600 mb-6">
              When we provide <strong>junk pickup San Diego</strong> services, usable items find new homes
              through our established donation partnerships:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {donationPartners.map((partner, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-sm">{partner}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-green-800 text-sm">
                <strong>Tax Benefits:</strong> Donations made during our <strong>trash removal San Diego</strong>
                services may qualify for tax deductions. We provide donation receipts when requested.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 mt-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Choose Responsible Junk Removal San Diego
          </h3>
          <p className="text-green-100 mb-6 max-w-3xl mx-auto">
            Make an environmental difference with your <strong>junk hauling San Diego</strong> choice.
            Our eco-friendly disposal methods and donation programs help build a sustainable community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16197500114"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              📞 Call (619) 750-0114 for Eco-Friendly Service
            </a>
            <a
              href="#contact"
              className="bg-green-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-800 transition-colors"
            >
              Schedule Green Junk Removal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}