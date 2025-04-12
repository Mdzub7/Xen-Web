/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
    domains: [
      "ext.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Configure rewrites to proxy requests to the Vite app
  async rewrites() {
    return [
      {
        source: '/v1/:path*',
        destination: 'http://localhost:5173/v1/:path*',
      },
      {
        source: '/login',
        destination: 'http://localhost:5173/login',
      },
      {
        source: '/signup',
        destination: 'http://localhost:5173/signup',
      },
      {
        source: '/@vite/client',
        destination: 'http://localhost:5173/@vite/client',
      },
      {
        source: '/@react-refresh',
        destination: 'http://localhost:5173/@react-refresh',
      },
      {
        source: '/src/:path*',
        destination: 'http://localhost:5173/src/:path*',
      },
    ];
  },
};

export default nextConfig;
