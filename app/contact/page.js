// app/contact/page.js

import Contact from '../components/contact/Contact';

const SITE_URL = "https://durgeshap.dev";

export const metadata = {
  title: "Contact — Durgesh A P",
  description: "Get in touch with Durgesh A P — Full-Stack Developer & AI Engineer from Udupi, Karnataka. Available for freelance projects, internships, and collaborations.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}