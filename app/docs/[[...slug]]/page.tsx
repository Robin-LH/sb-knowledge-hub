import { docsSource } from '@/lib/source';
import { createDocsPage } from '@/lib/create-docs-page';

const { Page, generateStaticParams, generateMetadata } = createDocsPage(docsSource, 'docs');

export default Page;
export { generateStaticParams, generateMetadata };
