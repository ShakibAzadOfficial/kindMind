const isProd = process.env.NODE_ENV === 'production';
const repoBasePath = isProd ? '/kindMind' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: repoBasePath,
  assetPrefix: repoBasePath,
  reactStrictMode: true,
};

export default nextConfig;
