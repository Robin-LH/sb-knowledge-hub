'use client';

import FeedbackWidget from '@/components/feedback';
import { AnchorProvider } from 'fumadocs-core/toc';
import { Card } from 'fumadocs-ui/components/card';
import { DocsBody, DocsPage } from 'fumadocs-ui/page';
import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

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

// --- TOC helpers ---

/** Recursively extract plain text from a TinaCMS rich-text AST node */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractText(node: any): string {
  if (node.type === 'text') return node.text || '';
  if (node.children) return node.children.map(extractText).join('');
  return '';
}

/** Turn a heading string into a URL-safe slug */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

const headingDepthMap: Record<string, number> = { h2: 2, h3: 3, h4: 4 };

// --- Component ---

// --- Helper to extract text from React children deterministically ---
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getReactText(node: any): string {
  if (!node) return '';
  if (React.isValidElement(node)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const props: any = node.props;
    if (props && Array.isArray(props.content)) {
      return extractText({ children: props.content });
    }
    if (props && props.children) {
      return getReactText(props.children);
    }
  }
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(getReactText).join('');
  if (typeof node === 'object') {
    if (node.props?.children) return getReactText(node.props.children);
    if (node.props?.text) return String(node.props.text);
    if (node.text) return String(node.text);
    if (node.value) return String(node.value);
  }
  return '';
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

  // Dynamically compute TOC and heading slugs from the rich-text body AST
  const bodyChildren = doc?.body?.children;
  const toc = useMemo(() => {
    if (!bodyChildren) return [];
    return (
      bodyChildren
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .filter((node: any) => headingDepthMap[node.type])
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map((node: any) => {
          const text = extractText(node);
          const slug = slugify(text);
          return {
            title: text,
            url: `#${slug}`,
            depth: headingDepthMap[node.type],
          };
        })
    );
  }, [bodyChildren]);

  if (!doc) return null;

  const components = {
    Card: (props: { title: string; href: string; description: string }) => <Card {...props} />,
    h2: ({ children }: { children?: React.ReactNode }) => {
      const text = getReactText(children);
      const id = slugify(text);
      return (
        <h2 id={id} className="scroll-m-20">
          {children}
        </h2>
      );
    },
    h3: ({ children }: { children?: React.ReactNode }) => {
      const text = getReactText(children);
      const id = slugify(text);
      return (
        <h3 id={id} className="scroll-m-20">
          {children}
        </h3>
      );
    },
    h4: ({ children }: { children?: React.ReactNode }) => {
      const text = getReactText(children);
      const id = slugify(text);
      return (
        <h4 id={id} className="scroll-m-20">
          {children}
        </h4>
      );
    },
  };

  return (
    <AnchorProvider toc={toc}>
      <DocsPage toc={toc} tableOfContent={{ style: 'clerk' }}>
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

        <DocsBody>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <TinaMarkdown content={doc.body} components={components as any} />
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
    </AnchorProvider>
  );
}
