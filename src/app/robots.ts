import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  // Update this to your actual Vercel domain or custom domain once deployed
  const baseUrl = 'https://eyesome-tech.vercel.app'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
