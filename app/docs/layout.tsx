import CustomHeader from '@/components/layout-header';
import { docsSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';

export default function DocsLayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={docsSource.pageTree}
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
