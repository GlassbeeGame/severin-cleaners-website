'use client';

import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Maria Rodriguez",
    location: "El Cajon, CA",
    service: "Estate Cleanout",
    rating: 5,
    text: "Severin Cleaners made a difficult time so much easier. They handled my mother's estate cleanout with compassion and professionalism. Everything was sorted, donated, or disposed of properly. Highly recommend!",
    date: "November 2024"
  },
  {
    id: 2,
    name: "James Mitchell",
    location: "La Mesa, CA",
    service: "Construction Debris",
    rating: 5,
    text: "After our home renovation, we had tons of debris. Severin's team arrived same-day and cleared everything out in just 2 hours. Their pricing was fair and transparent. Will definitely use again!",
    date: "October 2024"
  },
  {
    id: 3,
    name: "Sarah Thompson",
    location: "Santee, CA",
    service: "Furniture Removal",
    rating: 5,
    text: "Needed old furniture removed before moving. They were punctual, careful with my walls and floors, and handled everything professionally. The team even helped me move a few things around. Excellent service!",
    date: "October 2024"
  },
  {
    id: 4,
    name: "Robert Chen",
    location: "Spring Valley, CA",
    service: "Garage Cleanout",
    rating: 5,
    text: "20 years of accumulated junk gone in one morning! The crew was efficient, friendly, and took care to salvage items for donation. My garage is finally usable again. Thank you Severin Cleaners!",
    date: "September 2024"
  },
  {
    id: 5,
    name: "Linda Davis",
    location: "Lakeside, CA",
    service: "Hoarding Cleanup",
    rating: 5,
    text: "They handled a sensitive situation with incredible discretion and care. The team was non-judgmental, efficient, and transformed the property completely. Can't thank them enough for their compassionate service.",
    date: "September 2024"
  },
  {
    id: 6,
    name: "Michael Brown",
    location: "San Diego, CA",
    service: "Commercial Junk Removal",
    rating: 5,
    text: "We needed our office cleared out quickly for new tenants. Severin Cleaners worked around our schedule, completed everything in one day, and left the space spotless. Professional and reliable!",
    date: "August 2024"
  }
];

export default function Testimonials() {
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
            <div className="flex items-start gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
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
            <div className="text-4xl font-bold text-blue-500 mb-2">5.0★</div>
            <div className="text-gray-600">Google Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">Same Day</div>
            <div className="text-gray-600">Service Available</div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="btn btn-primary text-lg px-8 py-4"
          >
            Get Your Free Quote Today
          </a>
        </div>
      </div>
    </section>
  );
}