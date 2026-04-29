import type { NextConfig } from "next";
import path from "node:path";

const isDev = process.env.NODE_ENV === 'development';

// Loader path from orchids-visual-edits - use direct resolve to get the actual file
const loaderPath = isDev ? require.resolve('orchids-visual-edits/loader.js') : null;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  ...(isDev && { outputFileTracingRoot: path.resolve(__dirname, '../../') }),
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  ...(isDev && loaderPath && {
    turbopack: {
      rules: {
        "*.{jsx,tsx}": {
          loaders: [loaderPath]
        }
      }
    }
  })
} as NextConfig;

export default nextConfig;
