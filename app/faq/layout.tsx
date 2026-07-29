import CustomHeader from '@/components/layout-header';
import { faqSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';

export default function FaqLayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={faqSource.pageTree}
      nav={{
        title: 'SiteBeacon',
        url: '/',
      }}
      slots={{
        header: CustomHeader,
      }}
      themeSwitch={{ enabled: false }}
    >
      {children}
    </DocsLayout>
  );
}
