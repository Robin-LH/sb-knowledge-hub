import { docsSource, learnSource, faqSource, releasesSource } from '@/lib/source';
import type { MetadataRoute } from 'next';

/**
 * Next.js dynamic sitemap generator.
 * Aggregates the root landing page and all pages from the four content loaders.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://help.sitebeacon.io';

  const docsPages = docsSource.getPages().map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const learnPages = learnSource.getPages().map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const faqPages = faqSource.getPages().map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const releasesPages = releasesSource.getPages().map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    ...docsPages,
    ...learnPages,
    ...faqPages,
    ...releasesPages,
  ];
}
