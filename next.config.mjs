import { createMDX } from 'fumadocs-mdx/next';

/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [{ hostname: '*' }],
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX();

export default withMDX(config);
