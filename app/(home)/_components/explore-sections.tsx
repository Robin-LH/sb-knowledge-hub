import { ArrowRight, BookOpen, GraduationCap, HelpCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';

const sections = [
  {
    title: 'Documentation',
    description:
      'Step-by-step guides for setting up and using SiteBeacon. Learn about accessibility scores, performance metrics, and carbon tracking.',
    href: '/docs',
    icon: BookOpen,
    color: 'from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/5 dark:to-teal-500/5',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    borderColor:
      'border-emerald-500/20 dark:border-emerald-500/10 group-hover:border-emerald-500/40',
    badge: 'Core Guide',
  },
  {
    title: 'Learn',
    description:
      'Educational articles on web accessibility, Core Web Vitals, digital sustainability, and industry best practices.',
    href: '/learn',
    icon: GraduationCap,
    color: 'from-brand/10 to-brand/10 dark:from-brand/5 dark:to-brand/5',
    iconColor: 'text-brand dark:text-brand-secondary',
    borderColor: 'border-brand/20 dark:border-brand/10 group-hover:border-brand/40',
    badge: 'Guides',
  },
  {
    title: 'FAQ',
    description:
      'Quick answers to common questions about scanning, scoring, billing, team management, and more.',
    href: '/faq',
    icon: HelpCircle,
    color: 'from-amber-500/10 to-orange-500/10 dark:from-amber-500/5 dark:to-orange-500/5',
    iconColor: 'text-amber-600 dark:text-amber-400',
    borderColor: 'border-amber-500/20 dark:border-amber-500/10 group-hover:border-amber-500/40',
    badge: 'Help Center',
  },
  {
    title: 'Release Notes',
    description:
      'Stay up to date with the latest features, improvements, and bug fixes shipped in SiteBeacon.',
    href: '/releases',
    icon: Sparkles,
    color: 'from-blue-500/10 to-indigo-500/10 dark:from-blue-500/5 dark:to-indigo-500/5',
    iconColor: 'text-blue-600 dark:text-blue-400',
    borderColor: 'border-blue-500/20 dark:border-blue-500/10 group-hover:border-blue-500/40',
    badge: 'Updates',
  },
];

export function ExploreSections() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
      <div className="mb-10 text-center lg:text-left">
        <h2 className="text-2xl font-extrabold text-fd-foreground tracking-tight sm:text-3xl">
          Explore Sections
        </h2>
        <p className="text-sm text-fd-muted-foreground mt-1.5">
          Get straight to the solutions you need from our dedicated repositories.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Link
              key={section.href}
              href={section.href}
              className={`group relative flex flex-col justify-between rounded-2xl border ${section.borderColor} bg-linear-to-br ${section.color} p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/50`}
            >
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-fd-background shadow-xs group-hover:scale-105 transition-transform ${section.iconColor}`}
                  >
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <span className="text-[10px] font-bold border tracking-wider uppercase bg-fd-background/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full">
                    {section.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-fd-foreground mb-2 group-hover:text-brand-light transition-colors">
                  {section.title}
                </h3>
                <p className="text-xs leading-relaxed text-fd-muted-foreground mb-6">
                  {section.description}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-fd-foreground group-hover:text-brand-light transition-colors">
                Get Started
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
