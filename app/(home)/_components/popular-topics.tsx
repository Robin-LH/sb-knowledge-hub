import { Accessibility, ArrowRight, Gauge, Leaf, Search } from 'lucide-react';
import Link from 'next/link';

const popularTopics = [
  {
    title: 'Understanding Accessibility Scores',
    href: '/docs/accessibility/understanding-score',
    icon: Accessibility,
  },
  {
    title: 'What are Core Web Vitals?',
    href: '/learn/performance/core-web-vitals',
    icon: Gauge,
  },
  {
    title: 'What is Website Carbon?',
    href: '/learn/sustainability/website-carbon',
    icon: Leaf,
  },
  {
    title: 'How Scanning Works',
    href: '/faq/how-scanning-works',
    icon: Search,
  },
];

export function PopularTopics() {
  return (
    <section className="relative z-10 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 mb-8 sm:flex-row">
          <div>
            <h2 className="text-xl font-extrabold text-fd-foreground tracking-tight sm:text-2xl">
              Popular Quick Links
            </h2>
            <p className="text-xs text-fd-muted-foreground mt-0.5">
              Most frequently accessed articles and help documents.
            </p>
          </div>
          <Link
            href="/docs"
            className="text-xs font-bold text-brand-secondary flex items-center gap-1 hover:underline"
          >
            View all documentation <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {popularTopics.map((topic) => {
            const Icon = topic.icon;
            return (
              <Link
                key={topic.href}
                href={topic.href}
                className="group flex items-center gap-3.5 rounded-xl border border-fd-border bg-fd-card/50 p-4 shadow-2xs hover:shadow-xs transition-all hover:border-brand-secondary hover:bg-fd-card"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-fd-accent group-hover:bg-brand-secondary transition-all">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <span className="text-xs font-bold text-fd-foreground group-hover:text-brand-light transition-colors leading-snug">
                  {topic.title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
