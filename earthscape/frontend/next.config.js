const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8000'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['flagcdn.com'],
  },
  webpack: (config) => {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  },
  async rewrites() {
    return [
      // Proxy all API calls (except NextAuth) to FastAPI backend
      {
        source: '/api/auth/login',
        destination: `${BACKEND_URL}/api/auth/login`,
      },
      {
        source: '/api/auth/register',
        destination: `${BACKEND_URL}/api/auth/register`,
      },
      {
        source: '/api/dashboard/:path*',
        destination: `${BACKEND_URL}/api/dashboard/:path*`,
      },
      {
        source: '/api/climate-data/:path*',
        destination: `${BACKEND_URL}/api/climate-data/:path*`,
      },
      {
        source: '/api/climate-data',
        destination: `${BACKEND_URL}/api/climate-data`,
      },
      {
        source: '/api/countries/:path*',
        destination: `${BACKEND_URL}/api/countries/:path*`,
      },
      {
        source: '/api/countries',
        destination: `${BACKEND_URL}/api/countries`,
      },
      {
        source: '/api/analytics/:path*',
        destination: `${BACKEND_URL}/api/analytics/:path*`,
      },
      {
        source: '/api/analytics',
        destination: `${BACKEND_URL}/api/analytics`,
      },
      {
        source: '/api/alerts/:path*',
        destination: `${BACKEND_URL}/api/alerts/:path*`,
      },
      {
        source: '/api/alerts',
        destination: `${BACKEND_URL}/api/alerts`,
      },
      {
        source: '/api/reports/:path*',
        destination: `${BACKEND_URL}/api/reports/:path*`,
      },
      {
        source: '/api/reports',
        destination: `${BACKEND_URL}/api/reports`,
      },
      {
        source: '/api/support/:path*',
        destination: `${BACKEND_URL}/api/support/:path*`,
      },
      {
        source: '/api/support',
        destination: `${BACKEND_URL}/api/support`,
      },
      {
        source: '/api/admin/:path*',
        destination: `${BACKEND_URL}/api/admin/:path*`,
      },
      {
        source: '/api/health',
        destination: `${BACKEND_URL}/api/health`,
      },
    ]
  },
}

module.exports = nextConfig

