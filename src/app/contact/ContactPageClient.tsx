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
          email: formData.email || 'severincleaners@gmail.com',
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
              alt="Contact Severin Cleaners for junk removal"
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
                          <option value="Detailing">Detailing</option>
                          <option value="Pressure Washing">Pressure Washing</option>
                          <option value="Multiple Services">Multiple Services</option>
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
                  Call Severin Cleaners at <a href="tel:6197500114" className="text-white font-black hover:text-blue-400 transition-colors bg-blue-600 px-3 py-1 rounded whitespace-nowrap inline-block">(619) 750-0114</a>
                  <br />
                  or fill out our service request form.
                </p>

                <p className="text-base md:text-lg text-white/90">
                  We're ready to help anywhere in San Diego, from East County to the Coast.
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
