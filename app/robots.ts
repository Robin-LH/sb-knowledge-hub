import type { MetadataRoute } from 'next';

/**
 * Standard search engine crawling rules pointing to the generated sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://help.sitebeacon.io/sitemap.xml',
  };
}
