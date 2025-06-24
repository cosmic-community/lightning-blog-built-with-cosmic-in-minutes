/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['imgix.cosmicjs.com'],
  },
  experimental: {
    typedRoutes: false
  }
}

module.exports = nextConfig