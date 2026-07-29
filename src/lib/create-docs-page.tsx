import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import FeedbackWidget from '@/components/feedback';
import { Card, Cards } from 'fumadocs-ui/components/card';
import type { ComponentType } from 'react';

import type { TOCItemType } from 'fumadocs-core/toc';

interface DocsPageProps {
  params: Promise<{ slug?: string[] }>;
}

export interface GenericPage {
  url: string;
  data: {
    title: string;
    description?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body: ComponentType<any>;
    toc: TOCItemType[];
    full?: boolean;
    structuredData?: {
      headings: Array<{
        id: string;
        content: string;
      }>;
      contents: Array<{
        heading?: string;
        content: string;
      }>;
    };
  };
}

export interface GenericSource {
  getPage: (slug?: string[]) => GenericPage | undefined;
  getPages: () => GenericPage[];
  generateParams: () => Array<{ slug?: string[] }>;
}

/**
 * Creates a documentation page component and its helpers (generateStaticParams, generateMetadata)
 * for a given Fumadocs source. This avoids duplicating the same page logic across
 * the four Knowledge Hub sections (docs, learn, faq, releases).
 */
export function createDocsPage(source: GenericSource) {
  async function Page({ params }: DocsPageProps) {
    const { slug } = await params;
    const page = source.getPage(slug);

    if (!page) notFound();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const MDX = page.data.body as ComponentType<any>;

    // Calculate reading time based on word count of structuredData contents
    const contents = page.data.structuredData?.contents || [];
    const wordCount = contents.reduce(
      (acc: number, item) => acc + (item.content ? item.content.split(/\s+/).length : 0),
      0
    );
    const readingTimeMin = Math.max(1, Math.round(wordCount / 200));

    // Find related articles (same category or directory path)
    const allPages = source.getPages();
    const currentUrlParts = page.url.split('/');
    const parentPath = currentUrlParts.slice(0, -1).join('/');
    const relatedPages = allPages
      .filter((p) => p.url !== page.url && p.url.startsWith(parentPath) && p.url !== parentPath)
      .slice(0, 3);

    return (
      <DocsPage
        toc={page.data.toc}
        full={page.data.full}
        tableOfContent={{
          style: 'clerk',
        }}
        className="max-w-3xl"
      >
        <div className="flex items-center gap-2 text-xs text-fd-muted-foreground mb-4">
          <span className="flex items-center gap-1 font-medium bg-fd-muted px-2 py-0.5 rounded">
            {page.url.split('/')[1]?.toUpperCase()}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {readingTimeMin} min read
          </span>
        </div>

        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <DocsBody>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <MDX components={{ Card: Card as any, Cards: Cards as any }} />
        </DocsBody>

        {relatedPages.length > 0 && (
          <div className="mt-12 border-t border-fd-border pt-8">
            <h3 className="text-base font-semibold text-fd-foreground mb-4">Related Articles</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {relatedPages.map((related) => (
                <Link
                  key={related.url}
                  href={related.url}
                  className="group flex flex-col justify-between rounded-lg border border-fd-border bg-fd-card p-4 transition-all hover:border-fd-primary/30 hover:shadow-sm"
                >
                  <div>
                    <h4 className="text-sm font-semibold text-fd-foreground group-hover:text-fd-primary transition-colors line-clamp-1">
                      {related.data.title}
                    </h4>
                    <p className="text-xs text-fd-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                      {related.data.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-medium text-fd-muted-foreground group-hover:text-fd-foreground mt-3 transition-colors">
                    Read article{' '}
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <FeedbackWidget />
      </DocsPage>
    );
  }

  function generateStaticParams() {
    return source.generateParams();
  }

  async function generateMetadata({ params }: DocsPageProps): Promise<Metadata> {
    const { slug } = await params;
    const page = source.getPage(slug);

    if (!page) notFound();

    return {
      title: page.data.title,
      description: page.data.description,
      openGraph: {
        title: page.data.title,
        description: page.data.description,
        type: 'article',
      },
    };
  }

  return { Page, generateStaticParams, generateMetadata };
}
