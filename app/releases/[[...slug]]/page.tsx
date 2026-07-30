import { releasesSource } from '@/lib/source';
import { createDocsPage } from '@/lib/create-docs-page';

const { Page, generateStaticParams, generateMetadata } = createDocsPage(releasesSource, 'releases');

export default Page;
export { generateStaticParams, generateMetadata };
