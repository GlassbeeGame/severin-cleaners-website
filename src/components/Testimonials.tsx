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

        {/* Social Proof Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Find Us On</h3>
            <p className="text-gray-600">Connect with us on your favorite platforms</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://www.instagram.com/severinhauling/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/severinhauling"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </a>
            <a
              href="https://www.yelp.com/biz/severin-cleaners-san-diego"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.111 18.226c-.141.969-2.119 3.483-3.029 3.847-.311.124-.611.094-.85-.09-.154-.12-.314-.365-2.447-3.827l-.633-1.032c-.244-.37-.199-.857.104-1.229.297-.355.732-.525 1.186-.472l1.175.117c3.72.37 3.81.443 4.161.526.473.105.64.447.333 1.16zm-1.011-8.771c.484.301.648.677.472 1.162-.07.182-.334.572-1.436 2.121l-.65.918c-.293.41-.767.621-1.255.573-.475-.053-.911-.326-1.122-.746l-.609-1.174c-1.959-3.776-2.003-3.949-2.087-4.276-.065-.244-.018-.46.166-.686.16-.198.453-.31 1.175-.41 1.072-.098 3.653-.133 4.316.025.436.104.709.379 1.03.493zm-10.984 2.568c-.476-.032-.927-.295-1.139-.717l-.608-1.174C5.41 6.353 5.366 6.18 5.282 5.853c-.065-.244-.018-.46.166-.686.16-.198.453-.31 1.175-.41 1.072-.098 3.653-.133 4.316.025.436.104.709.379 1.03.493.484.301.648.677.472 1.162-.07.182-.334.572-1.436 2.121l-.65.918c-.294.41-.768.621-1.256.573zm-3.156 4.069c.157-.452.41-.749.857-.943.172-.078.539-.211 3.332-.85l1.04-.242c.458-.097.953.037 1.272.4.308.35.42.808.297 1.266l-.356 1.181c-1.182 3.916-1.241 3.934-1.522 4.337-.204.293-.504.395-.812.341-.27-.048-.527-.244-1.054-.77-.758-.768-2.484-2.695-2.84-3.392-.19-.371-.196-.779-.214-1.328zm14.747-8.042c-.158.453-.411.75-.858.944-.172.078-.539.211-3.332.85l-1.04.242c-.458.097-.953-.037-1.272-.4-.308-.35-.42-.808-.297-1.266l.356-1.181c1.182-3.916 1.241-3.934 1.522-4.337.204-.293.504-.395.812-.341.27.048.527.244 1.054.77.758.768 2.484 2.695 2.84 3.392.19.371.196.779.215 1.327z"/>
              </svg>
              <span>Yelp</span>
            </a>
            <a
              href="https://www.thumbtack.com/ca/la-mesa/junk-removal/severin-hauling/service/541381661422116888"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.907 14.684c-.737 2.223-2.493 3.981-4.716 4.718-.448.148-.747-.298-.448-.596l2.09-2.09c.298-.298.298-.783 0-1.081L9.415 10.22c-.298-.298-.783-.298-1.081 0l-2.09 2.09c-.298.298-.744 0-.596-.448.737-2.223 2.493-3.981 4.716-4.718.448-.148.747.298.448.596l-2.09 2.09c-.298.298-.298.783 0 1.081l5.418 5.415c.298.298.783.298 1.081 0l2.09-2.09c.298-.298.744 0 .596.448z"/>
              </svg>
              <span>Thumbtack</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}