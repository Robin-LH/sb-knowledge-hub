import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

/**
 * Four separate content collections — one per Knowledge Hub section.
 * Each maps to a directory under `content/` and powers its own sidebar + routes.
 */
export const docs = defineDocs({
  dir: 'content/docs',
});

export const learn = defineDocs({
  dir: 'content/learn',
});

export const faq = defineDocs({
  dir: 'content/faq',
});

export const releases = defineDocs({
  dir: 'content/releases',
});

export default defineConfig();
