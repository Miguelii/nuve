import { loadEnv } from '@/utils/load-envs'
import type { NextConfig } from 'next'

loadEnv()

const nextConfig: NextConfig = {
   turbopack: {
      resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
      rules: {
         '*.glsl': {
            loaders: ['raw-loader'],
            as: '*.js',
         },
      },
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
            hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
         },
         {
            hostname: '64.media.tumblr.com',
         },
         {
            hostname: 'i.pinimg.com',
         },
      ],
   },
   webpack: (config, { webpack }) => {
      const buildDate = new Date()

      const timeStamp = buildDate.getTime()

      config.plugins.push(
         new webpack.DefinePlugin({
            'process.env.NEXT_PUBLIC_BUILD_TIMESTAMP': timeStamp
               ? JSON.stringify(String(timeStamp))
               : null,
         })
      );

      return config
   },
}

export default nextConfig
