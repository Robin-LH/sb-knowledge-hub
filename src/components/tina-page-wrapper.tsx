'use client';

import { useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page';
import FeedbackWidget from '@/components/feedback';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';

interface RelatedPage {
  url: string;
  data: {
    title: string;
    description?: string;
  };
}

interface TinaPageWrapperProps {
  tinaData: {
    query: string;
    variables: Record<string, unknown>;
    data: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  };
  collectionName: string;
  readingTimeMin: number;
  relatedPages: RelatedPage[];
}

export default function TinaPageWrapper({
  tinaData,
  collectionName,
  readingTimeMin,
  relatedPages,
}: TinaPageWrapperProps) {
  // Hook to connect this page's preview to the Tina CMS editor fields
  const { data } = useTina({
    query: tinaData.query,
    variables: tinaData.variables as any, // eslint-disable-line @typescript-eslint/no-explicit-any
    data: tinaData.data,
  });

  const doc = data[collectionName];
  if (!doc) return null;

  const components = {
    Cards: (props: { children: React.ReactNode }) => <Cards {...props} />,
    Card: (props: { title: string; href: string; description: string }) => <Card {...props} />,
  };

  return (
    <DocsPage
      toc={[]} // In visual edit mode, sidebar/form editing is primary; TOC can be omitted or computed dynamically
      tableOfContent={{
        style: 'clerk',
      }}
      className="max-w-3xl"
    >
      <div className="flex items-center gap-2 text-xs text-fd-muted-foreground mb-4">
        <span className="flex items-center gap-1 font-medium bg-fd-muted px-2 py-0.5 rounded">
          {collectionName.toUpperCase()}
        </span>
        <span>•</span>
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {readingTimeMin} min read
        </span>
      </div>

      <DocsTitle>{doc.title}</DocsTitle>
      <DocsDescription>{doc.description}</DocsDescription>
      <DocsBody>
        <TinaMarkdown content={doc.body} components={components} />
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
