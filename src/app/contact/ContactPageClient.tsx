'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/xvgwrwqe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email || 'severinhauling@gmail.com',
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          _replyto: formData.email || '',
          _subject: `New Service Request: ${formData.service}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className={`${inter.variable} font-sans antialiased`}>
      <Header />

      <main>
        {/* Hero Contact Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/optimized/contact.jpg"
              alt="Contact Severin Hauling for junk removal"
              fill
              priority
              quality={85}
              className="object-cover"
              sizes="100vw"
            />
            <div className="gradient-overlay"></div>
          </div>

          {/* Content */}
          <div className="relative z-20 w-full container section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Contact Form - First on Mobile, Right on Desktop */}
              <div className="order-1 lg:order-2 lg:pl-8">
                <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 max-w-md mx-auto lg:mx-0">
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    GET YOUR FREE
                  </h2>
                  <h3 className="text-3xl font-bold text-blue-500 mb-6">
                    JUNK REMOVAL QUOTE
                  </h3>

                  {status === 'success' ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                      <p className="text-gray-600 mb-6">
                        We've received your request and will contact you shortly.
                      </p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <select
                          required
                          value={formData.service}
                          onChange={(e) => setFormData({...formData, service: e.target.value})}
                          disabled={status === 'loading'}
                          className="w-full px-4 py-4 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                        >
                          <option value="">Select a service</option>
                          <option value="Junk Removal">Junk Removal</option>
                          <option value="Furniture Removal">Furniture Removal</option>
                          <option value="Appliance Removal">Appliance Removal</option>
                          <option value="Estate Cleanout">Estate Cleanout</option>
                          <option value="Commercial Junk Removal">Commercial Junk Removal</option>
                          <option value="Construction Debris">Construction Debris</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <input
                          required
                          type="text"
                          name="name"
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          disabled={status === 'loading'}
                          className="w-full px-4 py-4 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                        />
                      </div>

                      <div>
                        <input
                          required
                          type="tel"
                          name="phone"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          disabled={status === 'loading'}
                          className="w-full px-4 py-4 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address (Optional)"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          disabled={status === 'loading'}
                          className="w-full px-4 py-4 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                        />
                      </div>

                      <div>
                        <textarea
                          rows={4}
                          name="message"
                          placeholder="Tell us about your junk removal needs..."
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          disabled={status === 'loading'}
                          className="w-full px-4 py-4 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none disabled:opacity-50"
                        />
                      </div>

                      {/* Honeypot for spam protection */}
                      <input type="text" name="_gotcha" style={{ display: 'none' }} />

                      {status === 'error' && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                          Sorry, there was an error submitting your request. Please try again or call us at (619) 750-0114.
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full btn btn-primary text-lg py-4 uppercase font-black disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {status === 'loading' ? 'Sending...' : 'Get Free Quote Now'}
                      </button>

                      <p className="text-xs text-gray-500 text-center">
                        No obligation • 100% free quote • Same-day service available
                      </p>
                    </form>
                  )}
                </div>
              </div>

              {/* Contact Info - Second on Mobile, Left on Desktop */}
              <div className="order-2 lg:order-1 text-white">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-white uppercase mb-6">
                  Same-Day Junk Removal
                </h1>

                <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                  Call Severin Hauling at <a href="tel:6197500114" className="text-white font-black hover:text-blue-400 transition-colors bg-blue-600 px-3 py-1 rounded whitespace-nowrap inline-block">(619) 750-0114</a>
                  <br />
                  or fill out our service request form.
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                  <h2 className="text-xl font-bold text-white mb-4">Business Information</h2>
                  <div className="space-y-3 text-white/90">
                    <p className="flex items-start">
                      <svg className="w-5 h-5 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span>8900 Grossmont Blvd, Suite 1<br />La Mesa, CA 91941</span>
                    </p>
                    <p className="flex items-center">
                      <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <a href="tel:6197500114" className="hover:text-white transition-colors">(619) 750-0114</a>
                    </p>
                    <p className="flex items-center">
                      <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <a href="mailto:severinhauling@gmail.com" className="hover:text-white transition-colors">severinhauling@gmail.com</a>
                    </p>
                    <p className="flex items-start">
                      <svg className="w-5 h-5 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Open 7 Days a Week<br />Same-Day Service Available</span>
                    </p>
                  </div>
                </div>

                <p className="text-base md:text-lg text-white/90">
                  We're ready to help anywhere in San Diego County, from East County to the Coast. Severin Hauling is a locally owned junk removal company serving residential and commercial customers throughout the greater San Diego area. We specialize in same-day service, furniture removal, appliance disposal, estate cleanouts, and comprehensive junk hauling solutions. Our licensed and insured team provides transparent pricing with no hidden fees.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
