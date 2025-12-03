import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000, // 1 year cache (365 days)
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: false,
  },
  compress: true,
  poweredByHeader: false,
  trailingSlash: false,
  reactStrictMode: true,
  // Add onDemandEntries config to prevent memory leaks
  onDemandEntries: {
    maxInactiveAge: 60 * 1000, // 1 minute
    pagesBufferLength: 5,
  },
  experimental: {
    optimizePackageImports: ['@/components'],
    // Optimize client-side bundle
    optimizeCss: true,
  },
  // Production-only optimizations
  productionBrowserSourceMaps: false,
  // Acknowledge we're using webpack configuration (silences Turbopack warning)
  turbopack: {},
  // Aggressive code splitting and tree-shaking for TBT optimization
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Minimize bundle size
      config.optimization = {
        ...config.optimization,
        // Aggressive module concatenation
        concatenateModules: true,
        // Better tree shaking
        usedExports: true,
        sideEffects: false,
        // Minimize chunk overhead
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: 25,
          minSize: 20000,
          cacheGroups: {
            default: false,
            vendors: false,
            // Separate React framework (deferred load)
            framework: {
              name: 'framework',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              priority: 40,
              enforce: true,
            },
            // Next.js runtime
            nextRuntime: {
              name: 'next-runtime',
              chunks: 'all',
              test: /[\\/]node_modules[\\/]next[\\/]/,
              priority: 39,
              enforce: true,
            },
            // Common code
            commons: {
              name: 'commons',
              minChunks: 2,
              priority: 20,
              reuseExistingChunk: true,
            },
          },
        },
      };

      // Remove source maps in production
      if (config.mode === 'production') {
        config.devtool = false;
      }
    }
    return config;
  },
};

export default nextConfig;