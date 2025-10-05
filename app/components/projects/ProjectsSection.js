// /components/ProjectsSection.js
// This is the corrected data
export const projects = [
  {
    title: 'Kleats — Online Food Pre-ordering Platform',
    description: 'Collaborative FOSS project...',
    image: '/images/kleats-project.png',
    tags: ['React', 'Node.js', 'MongoDB', 'FOSS'],
    link: '#',
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