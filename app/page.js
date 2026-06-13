import Hero from './components/hero/Hero';
import About from './components/about/About';
import ProjectsSection from './components/projects/ProjectsSection';
import Footer from './components/footer/Footer';

const SITE_URL = "https://durgeshap.dev";

export const metadata = {
  alternates: {
    canonical: `${SITE_URL}/`,
  },
};

export default function Home() {
  return (
    <main>
      {/* Hidden server-side anchor links — ensures crawlers find internal section links
          even before JavaScript executes. Fixes "Pages Without Internal Outlinks". */}
      <nav aria-label="Page sections" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
        <a href="/#about">About</a>
        <a href="/#skills">Skills</a>
        <a href="/#projects">Projects</a>
        <a href="/contact">Contact</a>
      </nav>

      <Hero />
      <About />
      <ProjectsSection/>
      <Footer/>
    </main>
  );
}