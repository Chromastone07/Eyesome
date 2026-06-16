import { MetadataRoute } from 'next'
import { getAllChallenges, getChallengeDays } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  // Update this to your actual Vercel domain or custom domain once deployed
  const baseUrl = 'https://eyesome-tech.vercel.app' 

  // Add the homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]

  const challenges = getAllChallenges()

  for (const challenge of challenges) {
    // Add the challenge overview page (e.g., /system-design)
    routes.push({
      url: `${baseUrl}/${challenge.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })

    // Add individual day pages (e.g., /system-design/day-01)
    const days = getChallengeDays(challenge.slug)
    for (const day of days) {
      if (day.available) {
        routes.push({
          url: `${baseUrl}/${challenge.slug}/${day.slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.6,
        })
      }
    }
  }

  return routes
}
