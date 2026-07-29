'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FullSearchTrigger, SearchTrigger } from 'fumadocs-ui/layouts/shared/slots/search-trigger';
import { ThemeSwitch } from 'fumadocs-ui/layouts/shared/slots/theme-switch';
import { SidebarTrigger } from 'fumadocs-ui/layouts/docs/slots/sidebar';
import { cn } from '@/utils/class-merge';

const navLinks = [
  { text: 'Docs', url: '/docs' },
  { text: 'Learn', url: '/learn' },
  { text: 'FAQ', url: '/faq' },
  { text: 'Releases', url: '/releases' },
];

export default function CustomHeader(props: React.ComponentPropsWithoutRef<'header'>) {
  const pathname = usePathname();

  const isActive = (url: string) => {
    if (url === '/') return pathname === '/';
    return pathname.startsWith(url);
  };

  return (
    <header
      id="nd-subnav"
      {...props}
      className={cn(
        '[grid-area:header] sticky top-0 z-30 flex items-center justify-between border-b bg-fd-background/80 backdrop-blur-sm px-4 md:px-6 h-(--fd-header-height)',
        props.className
      )}
    >
      {/* Mobile-only menu and brand trigger */}
      <div className="flex items-center gap-2.5 md:hidden">
        <SidebarTrigger className="-ms-1.5 p-2 text-fd-muted-foreground hover:text-fd-foreground cursor-pointer" />
        <Link href="/">
          <Image src="/logo.png" alt="" height={70} width={200} className="w-auto h-7" />
        </Link>
      </div>

      {/* Desktop-only centered links and search bar */}
      <div className="hidden md:flex flex-1 items-center justify-center gap-8 mx-4">
        <nav className="flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className={cn(
                'font-medium transition-colors hover:text-fd-foreground text-sm',
                isActive(link.url) ? 'text-fd-primary' : 'text-fd-muted-foreground'
              )}
            >
              {link.text}
            </Link>
          ))}
        </nav>
        <div className="w-full max-w-[240px]">
          <FullSearchTrigger className="w-full h-9 bg-fd-secondary/30 rounded-lg cursor-pointer" />
        </div>
      </div>

      {/* Right side: Search trigger icon on mobile, Theme switch on all screens */}
      <div className="flex items-center gap-2">
        <div className="md:hidden">
          <SearchTrigger className="p-2 text-fd-muted-foreground hover:text-fd-foreground cursor-pointer" />
        </div>
        <ThemeSwitch className="h-9 cursor-pointer" />
      </div>
    </header>
  );
}
