import { faqSource } from '@/lib/source';
import { createDocsPage } from '@/lib/create-docs-page';

const { Page, generateStaticParams, generateMetadata } = createDocsPage(faqSource, 'faq');

export default Page;
export { generateStaticParams, generateMetadata };
