import CustomHeader from '@/components/layout-header';
import { learnSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';

export default function LearnLayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={learnSource.pageTree}
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
