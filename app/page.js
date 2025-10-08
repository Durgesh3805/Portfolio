import Hero from './components/hero/Hero';
import About from './components/about/About';
import ProjectsSection from './components/projects/ProjectsSection';
import Footer from './components/footer/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProjectsSection/>
      <Footer/>
    </main>
  );
}