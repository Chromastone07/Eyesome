/** @type {import('next').NextConfig} */

const baseSecurityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
]

// 'unsafe-eval' is required for Mermaid.js, which uses new Function()
// internally to render diagrams. This is an accepted tradeoff since:
// (a) Mermaid content is authored entirely by us, never user-submitted
// (b) the other directives still block all external script sources
// (c) all other headers remain strict
const cspHeader = {
  key: 'Content-Security-Policy',
  value: [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data:",
    "connect-src 'self'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; '),
}

const securityHeaders =
  process.env.NODE_ENV === 'production'
    ? [...baseSecurityHeaders, cspHeader]
    : baseSecurityHeaders

const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig
