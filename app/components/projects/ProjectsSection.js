// /components/ProjectsSection.js
// This is the corrected data
export const projects = [
  {
    title: 'Optimizing Drone Truck Delivery: An ALNS Algorithm Approach for Environmental and Economic Efficiency in Last-Mile Logistics',
    description: ' framework for a sustainable drone-truck logistics system tailored to the Indian context',
    image: '/imgs/Project1.png',
    tags: ['Python', 'PyQt5', 'ALNS', 'Artificial Intelligence'],
    link: 'https://github.com/TriSpraks/drone_truck_delivery_system.git',
  },
  {
    title: 'Typing Speed Test Platform (typ.ly)',
    description: 'Aesthetic and interactive typing speed test...',
    image: '/images/typly-project.png',
    tags: ['Next.js', 'React', 'TypeScript', 'WebSocket'],
    link: '#',
  },
  {
    title: 'Another Project', // It's best to have a unique title
    description: 'This will now fit into the first column of the next row.',
    image: '/images/another-project.png',
    tags: ['React', 'CSS'],
    link: '#',
    // The `spanFull` property is removed or set to false
  },
  {
    title: 'Another Project', // It's best to have a unique title
    description: 'This will now fit into the first column of the next row.',
    image: '/images/another-project.png',
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