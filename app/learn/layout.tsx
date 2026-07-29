import CustomHeader from '@/components/layout-header';
import { learnSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import Image from 'next/image';
import type { ReactNode } from 'react';

export default function LearnLayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={learnSource.pageTree}
      nav={{
        title: (
          <Image
            src={'/sb-icon-white.png'}
            alt=""
            height={70}
            width={200}
            className="w-auto h-full"
          />
        ),
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
