'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real app, you would send this to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-lg text-neutral max-w-3xl mx-auto">
            Ready to get started? Contact us today for a free estimate. 
            We respond to all inquiries within 1 hour.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          {/* Contact Form */}
          <div className="bg-surface rounded-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-dark mb-6">
              Request a Quote
            </h3>
            
            {submitStatus === 'success' && (
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-accent">Thank you!</h4>
                    <p className="text-neutral text-sm">We'll contact you within 1 hour.</p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-red-500 text-xl">⚠</span>
                  <div>
                    <h4 className="font-semibold text-red-700">Error</h4>
                    <p className="text-red-600 text-sm">Please try again or call us directly.</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-dark mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-base touch-target"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-dark mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-base touch-target"
                  placeholder="(619) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-base touch-target"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-neutral-dark mb-2">
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-base touch-target"
                >
                  <option value="">Select a service</option>
                  <option value="junk-removal">Junk Removal</option>
                  <option value="detailing">Detailing</option>
                  <option value="pressure-washing">Pressure Washing</option>
                  <option value="multiple">Multiple Services</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-dark mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-base resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark disabled:bg-neutral text-white font-semibold py-4 px-6 rounded-lg text-lg touch-target transition-colors duration-200"
              >
                {isSubmitting ? 'Sending...' : 'Get Free Quote'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-primary/5 rounded-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-dark mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                    <span className="text-primary text-lg">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-dark">Phone</h4>
                    <a 
                      href="tel:+16197500114" 
                      className="text-primary hover:underline text-lg font-medium"
                    >
                      (619) 750-0114
                    </a>
                    <p className="text-neutral text-sm">Call for immediate assistance</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 rounded-full p-2 flex-shrink-0">
                    <span className="text-accent text-lg">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-dark">Email</h4>
                    <a 
                      href="mailto:severincleaners@gmail.com" 
                      className="text-primary hover:underline"
                    >
                      severincleaners@gmail.com
                    </a>
                    <p className="text-neutral text-sm">Email for non-urgent inquiries</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                    <span className="text-primary text-lg">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-dark">Service Area</h4>
                    <p className="text-neutral-dark">El Cajon, CA</p>
                    <p className="text-neutral text-sm">Serving San Diego and surrounding areas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-surface rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-neutral-dark mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-neutral-dark">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Emergency Only</span>
                </div>
              </div>
              <p className="text-neutral text-sm mt-4">
                * Emergency services available 24/7
              </p>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <a
                href="tel:+16197500114"
                className="block w-full bg-accent hover:bg-accent-light text-white font-semibold py-4 px-6 rounded-lg text-center text-lg touch-target transition-colors duration-200"
              >
                📞 Call Now for Immediate Service
              </a>
              <a
                href="sms:+16197500114"
                className="block w-full bg-neutral-light hover:bg-neutral text-neutral-dark font-semibold py-4 px-6 rounded-lg text-center text-lg touch-target transition-colors duration-200"
              >
                💬 Send Text Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
