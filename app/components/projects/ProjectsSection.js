// /components/ProjectsSection.js
// This is the corrected data
export const projects = [
  {
    title: 'Optimizing Drone Truck Delivery: An ALNS Algorithm Approach for Environmental and Economic Efficiency in Last-Mile Logistics',
    description: ' framework for a sustainable drone-truck logistics system tailored to the Indian context',
    image: '/imgs/Project1.webp',
    tags: ['Python', 'PyQt5', 'ALNS', 'Artificial Intelligence'],
    link: 'https://github.com/TriSpraks/drone_truck_delivery_system.git',
  },
  {
    title: 'Typing Speed Test Platform (typ.ly)',
    description: 'Aesthetic and interactive typing speed test...',
    image: '/imgs/Project2.png',
    tags: ['Next.js', 'React', 'TypeScript', 'WebSocket'],
    link: '#',
  },
  {
    title: 'Hub Spot Website', // It's best to have a unique title
    description: 'Build and manage your HubSpot tech',
    image: '/imgs/Project3.png',
    tags: ['React', 'CSS'],
    link: '#',
    // The `spanFull` property is removed or set to false
  },
  {
    title: 'Blog website', // It's best to have a unique title
    description: 'Website for Blog management',
    image: '/imgs/Project4.png',
    tags: ['React', 'CSS'],
    link: '#',
    // The `spanFull` property is removed or set to false
  },
   
];
import ProjectCard from './Projects';
import styles from './ProjectsSection.module.css';

export default function ProjectsSection() {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.header}>
        <p className={styles.subtitle}>SELECTED WORK</p>
        <h2 className={styles.title}>Recent projects</h2>
      </div>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}