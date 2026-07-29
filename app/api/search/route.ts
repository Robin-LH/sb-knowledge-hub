import { docsSource, faqSource, learnSource, releasesSource } from '@/lib/source';
import { createSearchAPI } from 'fumadocs-core/search/server';

/**
 * Orama search API indexing all four Knowledge Hub sections.
 * Fumadocs UI's search dialog (⌘K) queries this endpoint automatically.
 */
export const { GET } = createSearchAPI('advanced', {
  indexes: [
    ...docsSource.getPages().map((page) => ({
      title: page.data.title,
      description: page.data.description,
      url: page.url,
      id: page.url,
      structuredData: page.data.structuredData,
    })),
    ...learnSource.getPages().map((page) => ({
      title: page.data.title,
      description: page.data.description,
      url: page.url,
      id: page.url,
      structuredData: page.data.structuredData,
    })),
    ...faqSource.getPages().map((page) => ({
      title: page.data.title,
      description: page.data.description,
      url: page.url,
      id: page.url,
      structuredData: page.data.structuredData,
    })),
    ...releasesSource.getPages().map((page) => ({
      title: page.data.title,
      description: page.data.description,
      url: page.url,
      id: page.url,
      structuredData: page.data.structuredData,
    })),
  ],
});
