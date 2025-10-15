'use client';

import { useState } from 'react';
import { getFeaturedTestimonials, getReviewCount, getRating, REVIEW_CONFIG } from '@/config/reviews';

/**
 * Testimonials Component
 *
 * Displays featured Google reviews in a carousel format
 * All review data is managed centrally in /src/config/reviews.ts
 *
 * To update reviews:
 * 1. Edit /src/config/reviews.ts
 * 2. Update REVIEW_CONFIG.totalReviews with current Google count
 * 3. Update FEATURED_TESTIMONIALS array with new reviews from Google
 */

export default function Testimonials() {
  const testimonials = getFeaturedTestimonials();
  const totalReviews = getReviewCount();
  const rating = getRating();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of satisfied customers who trust Severin Cleaners for their junk removal needs
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-start gap-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
              {testimonials[currentIndex].googleReview && (
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="text-xs font-medium text-gray-700">Google Review</span>
                </div>
              )}
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-900 mb-6 leading-relaxed">
              &ldquo;{testimonials[currentIndex].text}&rdquo;
            </blockquote>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-lg text-gray-900">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentIndex].location} • {testimonials[currentIndex].service}
                </div>
              </div>
              <div className="text-sm text-gray-500">
                {testimonials[currentIndex].date}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'w-8 bg-blue-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">200+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">{rating}★</div>
            <div className="text-gray-600">Google Rating ({totalReviews} Reviews)</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">Same Day</div>
            <div className="text-gray-600">Service Available</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <a
            href="#contact"
            className="btn btn-primary text-lg px-8 py-4"
          >
            Get Your Free Quote Today
          </a>
          <a
            href={REVIEW_CONFIG.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-blue-500 text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-200 text-lg shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            Review Us on Google
          </a>
        </div>

      </div>
    </section>
  );
}