import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Junk Removal Blog | Tips, Guides & Cost Savings | Severin Cleaners",
  description: "Expert junk removal tips, cost guides, and how-to articles for San Diego homeowners and businesses. Learn how to save money and prepare for junk removal services.",
  keywords: [
    "junk removal tips",
    "junk removal cost guide",
    "San Diego junk removal blog",
    "junk hauling advice",
    "dump fees San Diego",
    "same day junk removal"
  ],
  openGraph: {
    title: "Junk Removal Blog | Tips & Guides | Severin Cleaners",
    description: "Expert junk removal tips, cost guides, and how-to articles for San Diego homeowners and businesses.",
    url: "https://severincleaners.com/blog",
    siteName: "Severin Cleaners",
    type: "website",
    locale: "en_US",
    images: [{
      url: "https://severincleaners.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Junk Removal Blog - Tips & Guides - Severin Cleaners"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Junk Removal Blog | Tips & Guides | Severin Cleaners",
    description: "Expert junk removal tips, cost guides, and how-to articles for San Diego homeowners and businesses.",
    images: ["https://severincleaners.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://severincleaners.com/blog",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "US-CA",
    "geo.placename": "La Mesa",
    "geo.position": "32.7678;-117.0231",
    "ICBM": "32.7678, -117.0231",
  },
};

const blogPosts = [
  {
    title: "How Much Does Junk Removal Cost in San Diego? (2025 Complete Guide)",
    slug: "how-much-does-junk-removal-cost-san-diego",
    excerpt: "Discover transparent pricing for junk removal services in San Diego. From single items ($100) to full loads ($495), learn what affects costs and how to save money.",
    category: "Pricing & Costs",
    date: "2025-01-15",
    readTime: "8 min read",
    featured: true,
  },
  {
    title: "San Diego Dump Fees Guide 2025: What You'll Actually Pay",
    slug: "san-diego-dump-fees-guide",
    excerpt: "Complete guide to San Diego dump fees, transfer station locations, and disposal costs. Learn what you'll pay at Miramar, Otay, and Sycamore landfills, plus why professional junk removal often costs less.",
    category: "Local Resources",
    date: "2025-01-15",
    readTime: "7 min read",
    featured: true,
  },
  {
    title: "Same Day Junk Removal: Everything You Need to Know",
    slug: "same-day-junk-removal-guide",
    excerpt: "Need junk removed TODAY? Learn how same-day junk removal works, what to expect, pricing, and how to prepare for immediate pickup in San Diego.",
    category: "Emergency Services",
    date: "2025-01-14",
    readTime: "6 min read",
    featured: false,
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Junk Removal Tips & Guides
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Expert advice on junk removal, cost savings, and property cleanouts in San Diego
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Featured Articles</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {blogPosts.filter(post => post.featured).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-all overflow-hidden shadow-sm hover:shadow-lg"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="text-blue-600 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                          Read Article →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* All Articles */}
              <h2 className="text-3xl font-bold mb-8 text-gray-900">All Articles</h2>
              <div className="space-y-6">
                {blogPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block bg-white rounded-lg border border-gray-200 hover:border-blue-500 transition-all p-6 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                            {post.category}
                          </span>
                          <span className="text-sm text-gray-500">{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-3">
                          {post.excerpt}
                        </p>
                        <span className="text-sm text-gray-500">
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                      </div>
                      <div className="hidden md:block text-blue-600 group-hover:translate-x-1 transition-transform">
                        →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready for Professional Junk Removal?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get a free quote for same-day junk removal service in San Diego
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  Call (619) 750-0114
                </a>
                <a
                  href="/contact"
                  className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-all"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
