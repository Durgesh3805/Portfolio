import "./globals.css";
import ClientWrapper from "./components/ClientWrapper";
import HeaderWrapper from './header/HeaderWrapper';

const SITE_URL = "https://durgeshap.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Durgesh A P — Full-Stack Developer & AI Engineer | Portfolio",
    template: "%s | Durgesh A P",
  },

  description:
    "Portfolio of Durgesh A P — Full-Stack Developer & AI Engineer from Udupi, Karnataka. 11 months building production-grade web platforms at Mayonix with Next.js 15, TypeScript, Strapi CMS, Redis, and PostgreSQL. Research in ALNS-based drone-truck logistics and multimodal deep learning for mineral identification.",

  keywords: [
    "Durgesh A P",
    "Durgesh AP",
    "Durgesh portfolio",
    "Durgesh developer",
    "Durgesh full stack developer",
    "Durgesh AI engineer",
    "Durgesh Next.js developer",
    "Durgesh Udupi developer",
    "durgesh3805",
    "Durgesh AJIET",
    "Full-Stack Developer India",
    "Next.js TypeScript developer",
    "React developer Karnataka",
    "Python FastAPI developer",
    "Strapi CMS developer",
    "AI ML engineer India",
    "Mayonix software developer",
    "ALNS drone truck delivery",
    "multimodal ore identification deep learning",
    "web developer portfolio India",
    "SDE intern India",
    "software engineering student portfolio",
  ],

  authors: [{ name: "Durgesh A P", url: SITE_URL }],
  creator: "Durgesh A P",
  publisher: "Durgesh A P",

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    title: "Durgesh A P — Full-Stack Developer & AI Engineer",
    description:
      "Explore Durgesh A P's portfolio: production Next.js web platforms, AI-driven mineral identification, drone-truck logistics optimisation, and automated job aggregation systems.",
    url: SITE_URL,
    siteName: "Durgesh A P Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/imgs/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Durgesh A P — Full-Stack Developer & AI Engineer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Durgesh A P — Full-Stack Developer & AI Engineer",
    description:
      "Portfolio of Durgesh A P: Next.js, TypeScript, Python, FastAPI, Strapi CMS, Redis, TensorFlow — building AI-driven web platforms from Udupi, India.",
    images: ["/imgs/portfolio.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },

  verification: {
    // Add your Google Search Console verification token here when available
    // google: "your-verification-token",
  },
};

// JSON-LD Person + WebSite structured data for Google rich results
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Durgesh A P",
      alternateName: ["Durgesh AP", "durgesh3805"],
      url: SITE_URL,
      image: `${SITE_URL}/imgs/portfolio.png`,
      jobTitle: "Full-Stack Developer & AI Engineer",
      description:
        "Full-Stack Developer with 11 months of production experience building scalable web platforms and AI-driven systems. Specialising in Next.js, TypeScript, Python, and machine learning.",
      email: "durgesh3805@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Udupi",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "A J Institute of Engineering & Technology",
        url: "https://www.ajiet.edu.in",
      },
      worksFor: {
        "@type": "Organization",
        name: "Mayonix Software Solutions",
        url: "https://mayonix.com",
      },
      sameAs: [
        "https://www.linkedin.com/in/durgeshap/",
        "https://github.com/Durgesh3805",
      ],
      knowsAbout: [
        "Next.js", "TypeScript", "React", "Node.js", "FastAPI", "Python",
        "Strapi CMS", "PostgreSQL", "Redis", "MongoDB", "TensorFlow",
        "Machine Learning", "Deep Learning", "Full-Stack Development",
        "Web Development", "AI Engineering", "Tailwind CSS",
        "Google Cloud Platform", "Vercel", "Docker",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Durgesh A P Portfolio",
      description: "Portfolio of Durgesh A P — Full-Stack Developer & AI Engineer from Udupi, Karnataka, India.",
      publisher: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical font to eliminate render-blocking delay */}
        <link
          rel="preload"
          href="/fonts/Satoshi-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ClientWrapper>
          <HeaderWrapper/>
          <main className="main-content">
            {children}
          </main>
        </ClientWrapper>
      </body>
    </html>
  );
}
