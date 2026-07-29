import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import { RootProvider } from 'fumadocs-ui/provider/next';
import './styles.css';

export const metadata: Metadata = {
  title: {
    default: 'SiteBeacon Knowledge Hub',
    template: '%s | SiteBeacon Knowledge Hub',
  },
  description:
    'Product documentation, educational resources, FAQs, and release notes for SiteBeacon — website accessibility, performance, and carbon monitoring.',
  metadataBase: new URL('https://help.sitebeacon.io'),
  openGraph: {
    type: 'website',
    siteName: 'SiteBeacon Knowledge Hub',
    title: 'SiteBeacon Knowledge Hub',
    description:
      'Product documentation, educational resources, FAQs, and release notes for SiteBeacon.',
    url: 'https://help.sitebeacon.io',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
