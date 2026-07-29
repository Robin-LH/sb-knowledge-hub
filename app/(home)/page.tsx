import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen,
  GraduationCap,
  HelpCircle,
  Sparkles,
  Search,
  ArrowRight,
  Accessibility,
  Gauge,
  Leaf,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'SiteBeacon Knowledge Hub',
  description:
    'Find answers, learn best practices, and get the most out of SiteBeacon. Documentation, guides, FAQs, and release notes.',
};

const sections = [
  {
    title: 'Documentation',
    description:
      'Step-by-step guides for setting up and using SiteBeacon. Learn about accessibility scores, performance metrics, and carbon tracking.',
    href: '/docs',
    icon: BookOpen,
    color: 'from-blue-500/10 to-cyan-500/10',
    iconColor: 'text-blue-600 dark:text-blue-400',
    borderColor: 'border-blue-500/20',
  },
  {
    title: 'Learn',
    description:
      'Educational articles on web accessibility, Core Web Vitals, digital sustainability, and industry best practices.',
    href: '/learn',
    icon: GraduationCap,
    color: 'from-violet-500/10 to-purple-500/10',
    iconColor: 'text-violet-600 dark:text-violet-400',
    borderColor: 'border-violet-500/20',
  },
  {
    title: 'FAQ',
    description:
      'Quick answers to common questions about scanning, scoring, billing, team management, and more.',
    href: '/faq',
    icon: HelpCircle,
    color: 'from-amber-500/10 to-orange-500/10',
    iconColor: 'text-amber-600 dark:text-amber-400',
    borderColor: 'border-amber-500/20',
  },
  {
    title: 'Release Notes',
    description:
      'Stay up to date with the latest features, improvements, and bug fixes shipped in SiteBeacon.',
    href: '/releases',
    icon: Sparkles,
    color: 'from-emerald-500/10 to-teal-500/10',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    borderColor: 'border-emerald-500/20',
  },
];

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

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-fd-border bg-fd-background/80 backdrop-blur-lg">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5 font-semibold text-fd-foreground">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#005461] to-[#3bc1a8]">
              <span className="text-xs font-bold text-white">SB</span>
            </div>
            <span className="hidden sm:inline">SiteBeacon</span>
          </Link>
          <nav className="flex items-center gap-1 text-sm">
            <Link
              href="/docs"
              className="rounded-md px-3 py-1.5 text-fd-muted-foreground transition-colors hover:text-fd-foreground"
            >
              Docs
            </Link>
            <Link
              href="/learn"
              className="rounded-md px-3 py-1.5 text-fd-muted-foreground transition-colors hover:text-fd-foreground"
            >
              Learn
            </Link>
            <Link
              href="/faq"
              className="rounded-md px-3 py-1.5 text-fd-muted-foreground transition-colors hover:text-fd-foreground"
            >
              FAQ
            </Link>
            <Link
              href="/releases"
              className="rounded-md px-3 py-1.5 text-fd-muted-foreground transition-colors hover:text-fd-foreground"
            >
              Releases
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-fd-border bg-gradient-to-b from-fd-background to-fd-muted/30 px-4 py-20 sm:px-6 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#005461]/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium tracking-wide text-[#0c7779] dark:text-[#3bc1a8]">
            KNOWLEDGE HUB
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-fd-foreground sm:text-5xl lg:text-6xl">
            How can we help you?
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-fd-muted-foreground">
            Find documentation, tutorials, and answers for SiteBeacon&apos;s website accessibility,
            performance, and carbon monitoring tools.
          </p>

          {/* Search CTA */}
          <Link
            href="/docs"
            className="group mx-auto flex max-w-xl items-center gap-3 rounded-xl border border-fd-border bg-fd-card px-5 py-3.5 text-left text-fd-muted-foreground shadow-sm transition-all hover:border-fd-border hover:shadow-md"
          >
            <Search className="h-5 w-5 shrink-0" />
            <span className="flex-1">Search documentation...</span>
            <kbd className="hidden rounded-md border border-fd-border bg-fd-muted px-2 py-0.5 text-xs font-medium sm:inline-block">
              ⌘K
            </kbd>
          </Link>
        </div>
      </section>

      {/* Section Cards */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.href}
                href={section.href}
                className={`group relative flex flex-col rounded-xl border ${section.borderColor} bg-gradient-to-br ${section.color} p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-fd-background shadow-sm ${section.iconColor}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-semibold text-fd-foreground">{section.title}</h2>
                </div>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-fd-muted-foreground">
                  {section.description}
                </p>
                <div className="flex items-center gap-1 text-sm font-medium text-fd-foreground">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Popular Topics */}
      <section className="border-t border-fd-border bg-fd-muted/30 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-fd-foreground">
            Popular Topics
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {popularTopics.map((topic) => {
              const Icon = topic.icon;
              return (
                <Link
                  key={topic.href}
                  href={topic.href}
                  className="group flex items-center gap-3 rounded-lg border border-fd-border bg-fd-card p-4 transition-all hover:border-fd-primary/30 hover:shadow-sm"
                >
                  <Icon className="h-5 w-5 shrink-0 text-fd-muted-foreground transition-colors group-hover:text-fd-primary" />
                  <span className="text-sm font-medium text-fd-foreground">{topic.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-fd-border bg-fd-card px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-fd-muted-foreground">
            <div className="flex h-5 w-5 items-center justify-center rounded bg-gradient-to-br from-[#005461] to-[#3bc1a8]">
              <span className="text-[8px] font-bold text-white">SB</span>
            </div>
            © {new Date().getFullYear()} SiteBeacon. All rights reserved.
          </div>
          <nav className="flex gap-6 text-sm text-fd-muted-foreground">
            <a
              href="https://sitebeacon.io"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-fd-foreground"
            >
              SiteBeacon.io
            </a>
            <Link href="/docs" className="transition-colors hover:text-fd-foreground">
              Documentation
            </Link>
            <Link href="/releases" className="transition-colors hover:text-fd-foreground">
              Changelog
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
