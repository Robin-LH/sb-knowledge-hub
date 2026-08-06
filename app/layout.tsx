import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import './styles.css';

export const metadata: Metadata = {
  title: {
    default: 'SiteBeacon Knowledge Hub',
    template: '%s | SiteBeacon Knowledge Hub',
  },
  description:
    'Product documentation, educational resources, FAQs, and release notes for SiteBeacon — website accessibility, performance, and carbon monitoring.',
  alternates: {
    canonical: './',
  },
  openGraph: {
    type: 'website',
    siteName: 'SiteBeacon Knowledge Hub',
    title: 'SiteBeacon Knowledge Hub',
    description:
      'Product documentation, educational resources, FAQs, and release notes for SiteBeacon.',
    url: 'https://help.sitebeacon.io',
    locale: 'en_US',
    images: [
      {
        url: '/logo-white.png',
        width: 1200,
        height: 630,
        alt: 'SiteBeacon Knowledge Hub Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SiteBeacon Knowledge Hub',
    description:
      'Product documentation, educational resources, FAQs, and release notes for SiteBeacon.',
    images: ['/logo-white.png'],
  },
  robots: {
    index: false,
    follow: false,
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
