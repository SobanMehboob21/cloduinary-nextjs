/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <--- THIS IS REQUIRED
  images: {
    unoptimized: true, // Also required for static exports
  },
}

module.exports = nextConfig
