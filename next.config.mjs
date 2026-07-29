import { createMDX } from 'fumadocs-mdx/next';

/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [{ hostname: '*' }],
  },
};

const withMDX = createMDX();

export default withMDX(config);
