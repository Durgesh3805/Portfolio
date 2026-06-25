<div align="center">

<br />

# Durgesh A P — Portfolio

**Full-Stack Developer · AI Engineer**

<br />

[![Live](https://img.shields.io/badge/durgeshap.dev-live-0d0d0d?style=flat-square)](https://durgeshap.dev)
&nbsp;&nbsp;
[![Next.js](https://img.shields.io/badge/Next.js-16-000?style=flat-square&logo=next.js&logoColor=fff)](https://nextjs.org/)
&nbsp;&nbsp;
[![React](https://img.shields.io/badge/React-19-58c4dc?style=flat-square&logo=react&logoColor=fff)](https://react.dev/)
&nbsp;&nbsp;
[![Vercel](https://img.shields.io/badge/Vercel-deployed-000?style=flat-square&logo=vercel)](https://vercel.com)
&nbsp;&nbsp;
[![MIT](https://img.shields.io/badge/License-MIT-22c55e?style=flat-square)](LICENSE)

<br />
<br />

<img src="public/imgs/portfolio.png" alt="Portfolio — Hero Section" width="780" />

<br />
<br />

*A single-page portfolio engineered from scratch to present my work, technical depth, and design sensibility.*
*No templates. No boilerplate. Every component, animation, and security header is intentional.*

<br />

[**View Live**](https://durgeshap.dev)&ensp;·&ensp;[**Projects**](https://durgeshap.dev/#projects)&ensp;·&ensp;[**Contact**](https://durgeshap.dev/contact)

<br />

</div>

---

## Overview

This portfolio is built as a modern Next.js 16 application using the App Router architecture. It combines server-rendered pages with client-side interactivity, custom typography (Satoshi & Austin), and a carefully tuned sage-green palette — all deployed on Vercel with production-grade security headers.

The codebase prioritizes three things: **performance**, **accessibility**, and **search visibility**.

<br />

## Architecture

```
app/
├── api/                        → Server-side API routes (contact form handler)
├── components/
│   ├── hero/                   → Typewriter animation · scroll-triggered reveals
│   ├── about/                  → Split-panel layout · color-coded skill pills
│   ├── projects/               → Card grid with tech tags and live links
│   ├── contact/                → Turnstile-protected form · Resend integration
│   └── footer/
├── contact/                    → /contact route
├── header/                     → Responsive navigation
├── globals.css                 → Design system · fonts · decorative stripes
├── layout.js                   → Root layout · metadata · JSON-LD structured data
├── page.js                     → Homepage composition
├── robots.js                   → Dynamic robots.txt
└── sitemap.js                  → Dynamic sitemap.xml

public/
├── docs/                       → Resume PDF
├── fonts/                      → Satoshi Medium · Austin Italic
└── imgs/                       → Project screenshots
```

<br />

## Technology

| Layer | Stack |
|:--|:--|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **UI** | React 19, Vanilla CSS, CSS Modules, PostCSS |
| **Typography** | Satoshi Medium, Austin Italic (self-hosted, `font-display: swap`) |
| **Email** | Resend API (server-side, via API route) |
| **Bot Protection** | Cloudflare Turnstile (widget + server verification) |
| **Analytics** | Vercel Analytics |
| **SEO** | JSON-LD (`Person` + `WebSite`), Open Graph, Twitter Cards, sitemap, robots |
| **Security** | CSP, HSTS, X-Frame-Options, CORS lockdown, Permissions-Policy |
| **Deployment** | Vercel (edge, `www` → non-`www` redirect, immutable asset caching) |

<br />

## Features

### Design & Interaction
- Custom typewriter animation on the hero subtitle
- Staggered `IntersectionObserver`-based scroll reveals with configurable delays
- Smooth anchor scrolling with `scroll-padding-top` offset for the fixed header
- Decorative vertical stripe overlays on desktop (CSS pseudo-elements)
- Randomized color-coded skill pills across 6 categories (30+ technologies)

### Engineering
- Server and Client Components used intentionally — no unnecessary hydration
- API route for contact form with server-side Turnstile token verification
- Email delivery via Resend with `@react-email/render` templates
- Font preloading via `<link rel="preload">` to eliminate render-blocking delays
- `www` → non-`www` redirects at both the Vercel and `next.config.mjs` level

### Security
- **Content Security Policy** — whitelisted `script-src`, `style-src`, `connect-src`, `font-src`
- **HSTS** — `max-age=63072000; includeSubDomains; preload`
- **CORS** — API routes restricted to `https://durgeshap.dev` origin only
- **Permissions Policy** — camera, microphone, geolocation, payment all disabled
- **Cache Control** — HTML pages: `no-cache, no-store, must-revalidate, private`; static assets: `immutable`

### SEO & Discoverability
- JSON-LD structured data graph (`Person` + `WebSite` schemas)
- Open Graph and Twitter Card meta tags with preview image
- Programmatic `sitemap.xml` and `robots.txt` generation
- Google Search Console verified
- Hidden server-side `<nav>` for crawler-visible internal section links

<br />

## Projects

| Project | Description | Stack |
|:--|:--|:--|
| **Multimodal Ore Identification** | Hybrid CNN + Vision Transformer ensemble fusing RGB, IR, acoustic, and capacitive sensor data for non-destructive mineral classification. Edge-to-cloud pipeline via Raspberry Pi. | Python · TensorFlow · Next.js |
| **Mayonix Corporate Website** | Production full-stack platform with SSR/ISR, Upstash Redis caching (~95% faster API responses), 25+ reusable components, dynamic blog, and careers module. | Next.js · TypeScript · Strapi CMS · PostgreSQL · Redis |
| **Drone–Truck Delivery (ALNS)** | Adaptive Large Neighborhood Search simulation for last-mile logistics with heterogeneous fleets. 21.1% mean optimization improvement on 500-customer datasets. | Python · FastAPI · PyQt5 |
| **Automated Job Discovery** | Real-time job aggregation platform using Scrapy + Selenium pipelines with intelligent filtering and a Next.js frontend. | Next.js · Python · PostgreSQL |

<br />

## Getting Started

**Prerequisites:** Node.js 18+ or [Bun](https://bun.sh/)

```bash
git clone https://github.com/Durgesh3805/Portfolio.git
cd Portfolio
npm install          # or: bun install
npm run dev          # or: bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

For the contact form to work, create `.env.local`:

```env
RESEND_API_KEY=
TURNSTILE_SECRET_KEY=
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
```

<br />

## License

Released under the [MIT License](LICENSE).

<br />

---

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/durgeshap)
&nbsp;&nbsp;
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Durgesh3805)
&nbsp;&nbsp;
[![Email](https://img.shields.io/badge/Email-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:durgesh3805@gmail.com)

<br />

<sub>Designed and built by <b>Durgesh A P</b> — Udupi, Karnataka</sub>

</div>
