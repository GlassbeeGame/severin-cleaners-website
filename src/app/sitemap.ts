import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.severinhauling.com'
  const currentDate = new Date().toISOString()

  // Main pillar page (priority 1.0)
  const pillarPage = 'san-diego-junk-removal'

  // Service pages
  const servicePages = [
    'same-day-junk-removal-san-diego',
    'appliance-removal-san-diego',
    'cleanout-services-san-diego',
    'commercial-junk-removal-san-diego',
    'construction-debris-removal-san-diego',
    'couch-removal-san-diego',
    'emergency-junk-removal-san-diego',
    'estate-cleanout-san-diego',
    'foreclosure-eviction-cleanout-san-diego',
    'furniture-disposal-san-diego',
    'hoarding-cleanup-san-diego',
    'hot-tub-removal-san-diego',
    'piano-removal-san-diego',
    'junk-removal-cost-san-diego',
    'san-diego-mattress-disposal',
    'san-diego-dump-fees',
    'scrap-metal-removal',
    'concrete-disposal-san-diego',
  ]

  // Location pages
  const locationPages = [
    'junk-removal-carlsbad',
    'junk-removal-carmel-valley',
    'junk-removal-chula-vista',
    'junk-removal-clairemont',
    'junk-removal-del-mar',
    'junk-removal-el-cajon',
    'junk-removal-escondido',
    'junk-removal-hillcrest',
    'junk-removal-kearny-mesa',
    'junk-removal-la-jolla',
    'junk-removal-la-mesa',
    'junk-removal-lakeside',
    'junk-removal-lemon-grove',
    'junk-removal-mira-mesa',
    'junk-removal-north-park',
    'junk-removal-oceanside',
    'junk-removal-pacific-beach',
    'junk-removal-point-loma',
    'junk-removal-poway',
    'junk-removal-rancho-santa-fe',
    'junk-removal-san-marcos',
    'junk-removal-santee',
    'junk-removal-spring-valley',
    'junk-removal-vista',
  ]

  // Blog posts
  const blogPosts = [
    'blog',
    'blog/dumpster-rental-san-diego-alternatives',
    'blog/escondido-dump-guide',
    'blog/how-much-does-junk-removal-cost-san-diego',
    'blog/la-mesa-dump-guide',
    'blog/same-day-junk-removal-guide',
    'blog/san-diego-dump-fees-guide',
    'blog/santee-dump-guide',
  ]

  return [
    // Homepage (navigation hub)
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Main pillar page
    {
      url: `${baseUrl}/${pillarPage}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Main pages
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/areas-we-serve`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Service pages
    ...servicePages.map((page) => ({
      url: `${baseUrl}/${page}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    // Location pages
    ...locationPages.map((page) => ({
      url: `${baseUrl}/${page}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    // Blog posts
    ...blogPosts.map((page) => ({
      url: `${baseUrl}/${page}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]
}
