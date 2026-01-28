import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, '')
  const now = new Date().toISOString()
  const routes = ['', '/about', '/projects', '/blog', '/contact']

  return routes.map((route) => ({
    url: `${base}${route || '/'}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7,
  }))
}

