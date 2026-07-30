import { defineConfig, TinaField } from 'tinacms';

// Your hosting provider client id
const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null;
// Super-duper secret token from app.tina.io
const token = process.env.TINA_TOKEN || null;

const tinaFields: TinaField[] = [
  {
    type: 'string',
    name: 'title',
    label: 'Title',
    isTitle: true,
    required: true,
  },
  {
    type: 'string',
    name: 'description',
    label: 'Description',
  },
  {
    type: 'rich-text',
    name: 'body',
    label: 'Body',
    isBody: true,
    templates: [
      {
        name: 'Cards',
        label: 'Cards Grid',
        fields: [
          {
            type: 'string',
            name: 'className',
            label: 'Class Name',
          },
        ],
      },
      {
        name: 'Card',
        label: 'Card Item',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
          },
          {
            type: 'string',
            name: 'href',
            label: 'Href',
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
          },
        ],
      },
    ],
  },
];

export default defineConfig({
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH || // Custom branch env var
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || // Vercel branch env var
    process.env.HEAD || // Netlify branch env var
    'main', // default branch
  clientId,
  token,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'docs',
        label: 'Documentation',
        path: 'content/docs',
        format: 'mdx',
        ui: {
          router: ({ document }) => `/docs/${document._sys.breadcrumbs.join('/')}`,
        },
        fields: tinaFields,
      },
      {
        name: 'learn',
        label: 'Learn',
        path: 'content/learn',
        format: 'mdx',
        ui: {
          router: ({ document }) => `/learn/${document._sys.breadcrumbs.join('/')}`,
        },
        fields: tinaFields,
      },
      {
        name: 'faq',
        label: 'FAQ',
        path: 'content/faq',
        format: 'mdx',
        ui: {
          router: ({ document }) => `/faq/${document._sys.breadcrumbs.join('/')}`,
        },
        fields: tinaFields,
      },
      {
        name: 'releases',
        label: 'Releases',
        path: 'content/releases',
        format: 'mdx',
        ui: {
          router: ({ document }) => `/releases/${document._sys.breadcrumbs.join('/')}`,
        },
        fields: tinaFields,
      },
      {
        name: 'menu',
        label: 'Navigation Menus',
        path: 'content',
        format: 'json',
        match: {
          include: '**/meta',
        },
        ui: {
          global: true,
        },
        fields: [
          {
            type: 'string',
            name: 'pages',
            label: 'Menu Items',
            list: true,
            description: 'Drag and drop items to reorder the sidebar navigation.',
          },
        ],
      },
    ],
  },
});
