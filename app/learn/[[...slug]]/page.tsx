import { learnSource } from '@/lib/source';
import { createDocsPage } from '@/lib/create-docs-page';

const { Page, generateStaticParams, generateMetadata } = createDocsPage(learnSource, 'learn');

export default Page;
export { generateStaticParams, generateMetadata };
