import { Accessibility, Activity, Gauge, Leaf, Search, ShieldCheck, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative z-10 overflow-hidden px-4 pt-20 pb-16 sm:px-6 lg:pt-28 lg:pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Content */}
          <div className="text-center lg:col-span-7 lg:text-left">
            {/* Feature Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-secondary bg-brand/25 px-3.5 py-1 text-xs font-semibold backdrop-blur-xs mb-6">
              <Sparkles className="h-3.5 w-3.5 text-brand-secondary" />
              <span>SiteBeacon Knowledge Hub</span>
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-fd-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
              Everything you need to{' '}
              <span className="bg-linear-to-r from-brand to-brand-secondary bg-clip-text text-transparent">
                optimise
              </span>{' '}
              your website.
            </h1>
            <p className="mx-auto lg:mx-0 mb-8 max-w-2xl text-lg leading-relaxed text-fd-muted-foreground">
              Explore guides, educational articles, and quick solutions built to maximize web
              accessibility, core performance, and sustainability across your platform.
            </p>

            {/* Search Trigger Mock Button */}
            <Link
              href="/docs"
              className="group mx-auto lg:mx-0 flex max-w-lg items-center gap-3.5 rounded-2xl border border-fd-border bg-fd-card/50 backdrop-blur-xs px-5 py-4 text-left text-fd-muted-foreground shadow-sm transition-all hover:border-brand-secondary hover:bg-fd-card/80 hover:shadow-md hover:shadow-brand"
            >
              <Search className="h-5 w-5 text-fd-muted-foreground group-hover:text-brand-light transition-colors" />
              <span className="flex-1 text-sm font-medium">
                Search documentation, FAQs, tutorials...
              </span>
              <kbd className="hidden rounded-lg border border-fd-border bg-fd-muted px-2.5 py-1 text-xs font-semibold sm:inline-block">
                ⌘K
              </kbd>
            </Link>
          </div>

          {/* Right Graphics Panel: Visual Dashboard Mockup */}
          <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            {/* Outer Glow */}
            <div className="absolute -inset-1.5 rounded-3xl bg-linear-to-tr from-brand to-brand-secondary opacity-20 blur-xl" />

            {/* Dashboard Container */}
            <div className="relative rounded-2xl border border-fd-border bg-fd-card/90 p-6 shadow-2xl backdrop-blur-md">
              <div className="mb-4 flex items-center justify-between border-b border-fd-border/50 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-semibold text-fd-muted-foreground tracking-wider uppercase flex items-center gap-1.5">
                  <Activity className="h-3.5 w-3.5 text-brand-light" /> Live Scanner
                </span>
              </div>

              <div className="space-y-4">
                {/* Accessibility Card */}
                <div className="flex items-center justify-between rounded-xl border border-fd-border bg-fd-background/50 p-4 transition-colors hover:border-emerald-500/20">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                      <Accessibility className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-fd-foreground">Accessibility</h4>
                      <p className="text-xs text-fd-muted-foreground">WCAG 2.1 Compliance</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-black text-emerald-500">98</span>
                    <span className="text-xs font-semibold text-emerald-500/60 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      A+
                    </span>
                  </div>
                </div>

                {/* Performance Card */}
                <div className="flex items-center justify-between rounded-xl border border-fd-border bg-fd-background/50 p-4 transition-colors hover:border-brand-light/20">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-light/10 text-brand-light">
                      <Gauge className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-fd-foreground">Performance</h4>
                      <p className="text-xs text-fd-muted-foreground">Core Web Vitals metrics</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-black text-brand-light">94</span>
                    <span className="text-xs font-semibold text-brand-light/60 bg-brand-light/10 px-2 py-0.5 rounded-full">
                      Fast
                    </span>
                  </div>
                </div>

                {/* Carbon Sustainability Card */}
                <div className="flex items-center justify-between rounded-xl border border-fd-border bg-fd-background/50 p-4 transition-colors hover:border-teal-500/20">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/10 text-teal-500">
                      <Leaf className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-fd-foreground">Sustainability</h4>
                      <p className="text-xs text-fd-muted-foreground">CO2 Emissions rating</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black text-teal-500 bg-teal-500/15 px-3 py-1 rounded-lg">
                      0.18g
                    </span>
                    <span className="text-xs font-semibold text-teal-500/60 bg-teal-500/10 px-2 py-0.5 rounded-full">
                      Low
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 border-t border-fd-border/50 pt-4 flex justify-between items-center text-xs text-fd-muted-foreground">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-brand-light" /> Fully Optimized
                </span>
                <span>Updated 2m ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
