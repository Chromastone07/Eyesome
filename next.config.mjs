/** @type {import('next').NextConfig} */

// Headers applied to every response, in all environments.
const baseSecurityHeaders = [
  // Prevents the site from being embedded in an <iframe> on another
  // domain, which blocks clickjacking attacks.
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // Stops browsers from trying to "guess" (sniff) a file's content type,
  // which can be abused to execute disguised files.
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // Controls how much referrer information is sent when users click
  // links to other sites — avoids leaking full URLs/paths.
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // Disables access to sensitive browser APIs we never use, reducing
  // the impact of any future XSS.
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
]

// Content-Security-Policy is only applied in production. Next.js dev
// mode relies on inline/eval'd scripts for hot-reload, which a strict
// script-src would block — so we avoid surprising "works in prod,
// broken in dev" or "works in dev, broken in prod" confusion by only
// shipping CSP for production builds, where it matters for real users.
const cspHeader = {
  key: 'Content-Security-Policy',
  value: [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'",
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
