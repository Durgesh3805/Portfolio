/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      // ─── HTML pages: strict no-cache + full security headers ──────────────
      {
        source: "/((?!_next/static|_next/image|favicon.ico|imgs|fonts|docs).*)",
        headers: [
          // Fix: X-Content-Type-Options Header Missing (ZAP Low)
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Fix: Missing Anti-clickjacking Header (ZAP Medium)
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          // Fix: Content Security Policy (CSP) Header Not Set (ZAP Medium)
          // frame-ancestors also fixes clickjacking independently of X-Frame-Options
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https:",
              "connect-src 'self' https://resend.com https://api.resend.com",
              "media-src 'none'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
          // Fix: Referrer-Policy (privacy)
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Fix: Re-examine Cache-control Directives (ZAP Informational)
          // HTML pages should not be cached by shared/proxy caches
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate, private",
          },
          {
            key: "Pragma",
            value: "no-cache",
          },
          {
            key: "Expires",
            value: "0",
          },
          // HSTS (belt-and-suspenders — Vercel already sets this, but belt-and-suspenders)
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // Permissions policy
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },

      // ─── API routes: restrict CORS (fixes Cross-Domain Misconfiguration) ──
      // ZAP flagged Access-Control-Allow-Origin: * as a medium risk.
      // Override it for /api/* routes to only allow the canonical origin.
      {
        source: "/api/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://durgeshap.dev",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "POST, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Content-Security-Policy",
            value: "default-src 'none'; frame-ancestors 'none'",
          },
        ],
      },

      // ─── Static assets: long-lived cache (intentional, not a security risk) ─
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Redirect www to non-www to avoid canonical confusion
      {
        source: "/(.*)",
        has: [{ type: "host", value: "www.durgeshap.vercel.app" }],
        destination: "https://durgeshap.vercel.app/:path*",
        permanent: true,
      },
      // Redirect www.durgeshap.dev to durgeshap.dev
      {
        source: "/(.*)",
        has: [{ type: "host", value: "www.durgeshap.dev" }],
        destination: "https://durgeshap.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
