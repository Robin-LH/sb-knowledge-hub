import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-fd-border bg-fd-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="transition-opacity hover:opacity-90">
          <Image
            src="/logo-white.png"
            alt="SiteBeacon logo"
            height={32}
            width={115}
            className="w-auto h-8"
          />
        </Link>
        <nav className="flex items-center gap-1 text-sm font-medium">
          <Link
            href="/docs"
            className="rounded-lg px-3.5 py-2 text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-foreground"
          >
            Docs
          </Link>
          <Link
            href="/learn"
            className="rounded-lg px-3.5 py-2 text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-foreground"
          >
            Learn
          </Link>
          <Link
            href="/faq"
            className="rounded-lg px-3.5 py-2 text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-foreground"
          >
            FAQ
          </Link>
          <Link
            href="/releases"
            className="rounded-lg px-3.5 py-2 text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-foreground"
          >
            Releases
          </Link>
        </nav>
      </div>
    </header>
  );
}
