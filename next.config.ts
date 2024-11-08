import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'live.staticflickr.com',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
},
};

export default nextConfig;
