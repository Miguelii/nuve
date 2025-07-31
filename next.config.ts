import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
  experimental: {
    //ppr: 'incremental',
    webpackBuildWorker: true,
    webpackMemoryOptimizations: true,
    reactCompiler: true,
  },
  poweredByHeader: true,
  images: {
    remotePatterns: [
      {
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com'
      },
      {
        hostname: '64.media.tumblr.com'
      },
      {
        hostname: 'i.pinimg.com'
      }
    ]
  }
};

export default nextConfig;
