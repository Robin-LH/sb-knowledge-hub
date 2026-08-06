import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative z-10 mt-auto border-t border-fd-border bg-fd-card px-4 py-5 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <span className="text-sm">
          © {new Date().getFullYear()} SiteBeacon. All rights reserved.
        </span>

        <nav className="flex items-center gap-6 text-xs font-medium text-fd-muted-foreground">
          <a
            href="https://sitebeacon.io"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand-light"
          >
            SiteBeacon.io
          </a>
          <Link href="/releases" className="transition-colors hover:text-brand-light">
            Changelog
          </Link>
        </nav>
      </div>
    </footer>
  );
}
