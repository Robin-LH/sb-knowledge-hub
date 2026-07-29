import CustomHeader from '@/components/layout-header';
import { releasesSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';

export default function ReleasesLayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={releasesSource.pageTree}
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
