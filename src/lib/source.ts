import { docs, faq, learn, releases } from 'collections/server';
import { loader } from 'fumadocs-core/source';

/**
 * Four Fumadocs source loaders — one per Knowledge Hub section.
 *
 * Each loader provides:
 *  - `pageTree`   → sidebar navigation tree
 *  - `getPage()`  → fetch a page by slug
 *  - `getPages()` → all pages (for search indexing / sitemap)
 *  - `generateParams()` → static params for `generateStaticParams()`
 */
export const docsSource = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
});

export const learnSource = loader({
  baseUrl: '/learn',
  source: learn.toFumadocsSource(),
});

export const faqSource = loader({
  baseUrl: '/faq',
  source: faq.toFumadocsSource(),
});

export const releasesSource = loader({
  baseUrl: '/releases',
  source: releases.toFumadocsSource(),
});
