import Image from 'next/image';
import styles from './Projects.module.css'; // Assuming the CSS file is named this

// A map to assign specific colors to technologies.
// This makes sure 'React' is always the same color, for example.
const tagColorMap = {
  'React': styles.blue,
  'Node.js': styles.green,
  'MongoDB': styles.green,
  'Next.js': styles.gray,
  'TypeScript': styles.blue,
  'WebSocket': styles.purple,
  'JavaScript': styles.orange,
  'FOSS': styles.pink,
  'CSS': styles.pink,
  'Python': styles.blue,
  'TensorFlow': styles.orange,
  'FastAPI': styles.green,
  'PostgreSQL': styles.blue,
  'PyQt5': styles.purple,
  'ALNS': styles.purple,
  'Raspberry Pi': styles.orange,
  'Strapi CMS': styles.pink,
  'Redis': styles.orange,
};

// Renamed component to be more descriptive
export default function ProjectCard({ title, description, image, tags, link, spanFull }) {
  // Use a different class if the card should span the full width
  const cardClass = spanFull ? `${styles.card} ${styles.spanFull}` : styles.card;
  const imageContainerClass = spanFull
    ? `${styles.imageContainer} ${styles.imageContainerFeatured}`
    : styles.imageContainer;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={cardClass}>
      <div id="projects" className={imageContainerClass}>
        <Image
          src={image}
          alt={`${title} screenshot`}
          fill
          sizes={spanFull ? '(max-width: 768px) 100vw, 90vw' : '(max-width: 768px) 100vw, (max-width: 1400px) 45vw, 600px'}
          quality={75}
          style={{ objectFit: 'cover' }}
          className={styles.projectImage}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag) => {
            // Look up the color for the current tag. If not found, default to gray.
            const colorClass = tagColorMap[tag] || styles.gray;
            
            return (
              // Apply both the base .tag style and the specific color style
              <span key={tag} className={`${styles.tag} ${colorClass}`}>
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </a>
  );
}