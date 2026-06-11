// /components/ProjectsSection.js
export const projects = [
  {
    title: 'Multimodal Ore Identification using Deep Learning',
    description:
      'A hybrid multimodal AI system fusing RGB, infrared, acoustic, and capacitive sensor data to classify 5 mineral types non-destructively. Built with an ensemble CNN + Vision Transformer, fuzzy logic uncertainty layer, and a real-time Next.js dashboard deployed via Raspberry Pi edge-to-cloud pipeline.',
    image: '/imgs/project_ore.png',
    tags: ['Python', 'TensorFlow', 'Next.js', 'Raspberry Pi'],
    link: '#',
  },
  {
    title: 'Mayonix — Corporate Website (Internship)',
    description:
      'Full-stack corporate website built at Mayonix Software Solutions with Next.js 15, TypeScript, and Strapi CMS v5 in a decoupled monorepo. Features SSR/ISR, Upstash Redis caching (~95% faster API responses), 25+ reusable components, dynamic blog, careers module, and full SEO infrastructure.',
    image: '/imgs/project_mayonix.png',
    tags: ['Next.js', 'TypeScript', 'Strapi CMS', 'PostgreSQL', 'Redis'],
    link: 'https://mayonix.com',
  },
  {
    title: 'Optimizing Drone–Truck Delivery using ALNS',
    description:
      'Full-stack simulation platform using Adaptive Large Neighborhood Search (ALNS) for last-mile logistics with heterogeneous fleets of fuel trucks, electric trucks, and drones. Achieved 21.1% mean optimization improvement on datasets up to 500 customers.',
    image: '/imgs/project_alns.png',
    tags: ['Python', 'FastAPI', 'PyQt5', 'ALNS'],
    link: 'https://github.com/TriSpraks/drone_truck_delivery_system.git',
  },
  {
    title: 'Automated Job Discovery in CareerTech',
    description:
      'An automated job aggregation platform that extracts, parses, and intelligently filters real-time postings from dynamic career sites using Scrapy and Selenium pipelines, with a Next.js frontend and PostgreSQL backend.',
    image: '/imgs/project_jobs.png',
    tags: ['Next.js', 'Python', 'PostgreSQL'],
    link: '#',
  },
];

import ProjectCard from './Projects';
import styles from './ProjectsSection.module.css';

export default function ProjectsSection() {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.header}>
        <p className={styles.subtitle}>SELECTED WORK</p>
        <h2 className={styles.title}>Recent Projects</h2>
      </div>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}