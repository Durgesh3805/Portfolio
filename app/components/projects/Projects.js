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
  // Add any other technologies and their desired colors
};

// Renamed component to be more descriptive
export default function ProjectCard({ title, description, image, tags, link, spanFull }) {
  // Use a different class if the card should span the full width
  const cardClass = spanFull ? `${styles.card} ${styles.spanFull}` : styles.card;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={cardClass}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={`${title} screenshot`}
          fill
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