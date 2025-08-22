/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-icons'],
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  
  // Compression for better performance
  compress: true,
  
  // Powered by header
  poweredByHeader: false,
  
  // React strict mode for better development
  reactStrictMode: true,
}

export default nextConfig
