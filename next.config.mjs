const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd ? '/test1' : '',
  assetPrefix: isProd ? '/test1/' : '',
};

export default nextConfig;
