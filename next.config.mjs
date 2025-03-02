/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  // Disable image optimization to allow local images to be used
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  // Add a custom asset prefix for images
  assetPrefix: '',
  // Configure basePath to handle locale prefixes
  basePath: '',
};

export default nextConfig;
