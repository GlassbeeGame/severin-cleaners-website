'use client';

import { useState } from 'react';

export default function Hero() {
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    phone: '',
    email: '',
    location: '',
    timeline: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Free Junk Removal Estimate Request');
    const body = encodeURIComponent(
      `Service: ${formData.service}\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nLocation: ${formData.location}\nTimeline: ${formData.timeline}`
    );
    window.location.href = `mailto:severincleaners@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/webphotos/landingpage.jpg')"
        }}
      >
        <div className="gradient-overlay"></div>
      </div>

      <div className="relative z-20 w-full container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="text-white">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400">
                {'★'.repeat(5)}
              </div>
              <span className="text-white/90">5.0 • 18 Reviews on Google</span>
            </div>

            <h1 className="text-white uppercase mb-6">
              San Diego&apos;s Best
              <span className="block text-blue-500 mt-2">
                Junk Removal Service
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Same Day Junk Hauling • Emergency Junk Removal • From Junk to Shine, We Handle Every Grime.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-white/90">Same Day Junk Removal</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <span className="text-white/90">24/7 Availability</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <span className="text-white/90">Free Estimates</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <span className="text-white/90">Licensed & Insured</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+16197500114"
                className="btn btn-primary text-lg px-8 py-4"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                CALL (619) 750-0114
              </a>
              <a
                href="#contact"
                className="btn btn-outline text-lg px-8 py-4"
              >
                GET FREE QUOTE
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 max-w-md mx-auto lg:mx-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                GET YOUR FREE
              </h2>
              <h3 className="text-3xl font-bold text-blue-500 mb-6">
                JUNK REMOVAL QUOTE
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Service Type *</option>
                    <option value="Junk Removal">Junk Removal</option>
                    <option value="Estate Cleanout">Estate Cleanout</option>
                    <option value="Furniture Removal">Furniture Removal</option>
                    <option value="Appliance Removal">Appliance Removal</option>
                    <option value="Construction Debris">Construction Debris</option>
                    <option value="Yard Waste">Yard Waste</option>
                    <option value="Pressure Washing">Pressure Washing</option>
                    <option value="Car Detailing">Car Detailing</option>
                    <option value="Multiple Services">Multiple Services</option>
                  </select>
                </div>

                <div>
                  <input
                    required
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <input
                    required
                    type="tel"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address (Optional)"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <input
                    required
                    type="text"
                    placeholder="Service Address or ZIP Code *"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <select
                    required
                    value={formData.timeline}
                    onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">When Do You Need Service? *</option>
                    <option value="ASAP - Emergency">ASAP - Emergency</option>
                    <option value="Today">Today</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="Within 3 Days">Within 3 Days</option>
                    <option value="Within a Week">Within a Week</option>
                    <option value="Flexible">Flexible Schedule</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full btn btn-primary text-lg py-4 uppercase font-black"
                >
                  Get Free Quote Now
                </button>

                <p className="text-xs text-gray-500 text-center">
                  No obligation • 100% free quote • Same-day service available
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}