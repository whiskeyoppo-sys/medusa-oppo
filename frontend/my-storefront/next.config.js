/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: false,
  },
  compiler: {
    swcMinify: false, // Disable SWC minification
  },
  swcMinify: false, // Use Babel instead
  images: {
    unoptimized: true // Disable image optimization for Termux
  }
}

module.exports = nextConfig
