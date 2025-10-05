import Hero from './components/hero/Hero';
import About from './components/about/About';
import ProjectsSection from './components/projects/ProjectsSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProjectsSection/>
    </main>
  );
}