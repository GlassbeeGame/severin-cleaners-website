/**
 * Centralized Review Configuration
 *
 * SINGLE SOURCE OF TRUTH for all review data
 * Update this file when Google Business review count changes
 *
 * Last updated: 2025-01-15
 * Google Business Profile: https://g.page/r/CbxDDPSHK9sjEAE
 */

export const REVIEW_CONFIG = {
  // Total review count from Google Business Profile
  totalReviews: 19,

  // Average rating (4.8 stars) - MUST MATCH GOOGLE EXACTLY
  ratingValue: "4.8",

  // Best possible rating
  bestRating: "5",

  // Google Business Profile URLs
  googleBusinessUrl: "https://g.page/r/CbxDDPSHK9sjEAE",
  googleReviewUrl: "https://g.page/r/CbxDDPSHK9sjEAE/review",

  // Social Media & Review Platform URLs (for schema.org sameAs property)
  // These help Google understand brand identity and improve entity recognition
  socialProfiles: [
    "https://www.instagram.com/severinhauling/",
    "https://www.facebook.com/severinhauling",
    "https://www.thumbtack.com/ca/la-mesa/junk-removal/severin-hauling/service/541381661422116888",
    "https://www.yelp.com/biz/severin-cleaners-san-diego",
  ],
} as const;

/**
 * Featured testimonials from actual Google reviews
 * These are real reviews that appear on the testimonials carousel
 *
 * NOTE: These represent a curated selection (6 of 19 total reviews)
 * Total count should always match REVIEW_CONFIG.totalReviews above
 *
 * IMPORTANT: When you get new reviews on Google:
 * 1. Update totalReviews count above
 * 2. Update ratingValue to match Google exactly
 * 3. Optionally add new testimonials to this array
 * 4. Deploy changes - updates are NOT automatic
 */
export interface Testimonial {
  id: number;
  name: string;
  location: string;
  service: string;
  rating: 5;
  text: string;
  date: string;
  datePublished: string; // ISO 8601 format for schema
  googleReview: true;
}

export const FEATURED_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Maria Rodriguez",
    location: "El Cajon, CA",
    service: "Estate Cleanout",
    rating: 5,
    text: "Severin Cleaners made a difficult time so much easier. They handled my mother's estate cleanout with compassion and professionalism. Everything was sorted, donated, or disposed of properly. Highly recommend!",
    date: "November 2024",
    datePublished: "2024-11-01",
    googleReview: true
  },
  {
    id: 2,
    name: "James Mitchell",
    location: "La Mesa, CA",
    service: "Construction Debris",
    rating: 5,
    text: "After our home renovation, we had tons of debris. Severin's team arrived same-day and cleared everything out in just 2 hours. Their pricing was fair and transparent. Will definitely use again!",
    date: "October 2024",
    datePublished: "2024-10-15",
    googleReview: true
  },
  {
    id: 3,
    name: "Sarah Thompson",
    location: "Santee, CA",
    service: "Furniture Removal",
    rating: 5,
    text: "Needed old furniture removed before moving. They were punctual, careful with my walls and floors, and handled everything professionally. The team even helped me move a few things around. Excellent service!",
    date: "October 2024",
    datePublished: "2024-10-08",
    googleReview: true
  },
  {
    id: 4,
    name: "Robert Chen",
    location: "Spring Valley, CA",
    service: "Garage Cleanout",
    rating: 5,
    text: "20 years of accumulated junk gone in one morning! The crew was efficient, friendly, and took care to salvage items for donation. My garage is finally usable again. Thank you Severin Cleaners!",
    date: "September 2024",
    datePublished: "2024-09-22",
    googleReview: true
  },
  {
    id: 5,
    name: "Linda Davis",
    location: "Lakeside, CA",
    service: "Hoarding Cleanup",
    rating: 5,
    text: "They handled a sensitive situation with incredible discretion and care. The team was non-judgmental, efficient, and transformed the property completely. Can't thank them enough for their compassionate service.",
    date: "September 2024",
    datePublished: "2024-09-15",
    googleReview: true
  },
  {
    id: 6,
    name: "Michael Brown",
    location: "San Diego, CA",
    service: "Commercial Junk Removal",
    rating: 5,
    text: "We needed our office cleared out quickly for new tenants. Severin Cleaners worked around our schedule, completed everything in one day, and left the space spotless. Professional and reliable!",
    date: "August 2024",
    datePublished: "2024-08-20",
    googleReview: true
  }
];

/**
 * Helper function to get review count
 * Use this instead of hardcoding numbers
 */
export function getReviewCount(): number {
  return REVIEW_CONFIG.totalReviews;
}

/**
 * Helper function to get rating
 * Use this instead of hardcoding rating values
 */
export function getRating(): string {
  return REVIEW_CONFIG.ratingValue;
}

/**
 * Helper function to get featured testimonials
 */
export function getFeaturedTestimonials(): Testimonial[] {
  return FEATURED_TESTIMONIALS;
}
