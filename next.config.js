/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript errors during production builds
    ignoreBuildErrors: true,
  },
  output: 'export', // Generate static HTML files for deployment
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
