import "./globals.css";
import ClientWrapper from "./components/ClientWrapper";
import HeaderWrapper from './header/HeaderWrapper';

export const metadata = {
  title: "Durgesh Portfolio",
  description: "Explore Durgesh’s expertise in AI, ML, and Web Development.",
  keywords: ["Durgesh", "portfolio", "developer", "ML", "Next.js"],
  authors: [{ name: "Durgesh A P", url: "https://your-portfolio-link.com" }],
  creator: "Durgesh A P",
  metadataBase: new URL("https://your-portfolio-link.com"),
  openGraph: {
    title: "Durgesh Portfolio",
    description: "Dive into Durgesh’s professional journey.",
    url: "https://your-portfolio-link.com",
    siteName: "Durgesh Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Durgesh Portfolio",
    description: "Check out Durgesh’s latest projects!",
    creator: "@your_twitter_handle",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical font to eliminate 503ms critical path delay */}
        <link
          rel="preload"
          href="/fonts/Satoshi-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
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
