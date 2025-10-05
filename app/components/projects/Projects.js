
import Image from 'next/image';
import styles from './Projects.module.css';

export default function Projects({ title, description, image, tags, link, spanFull }) {
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
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}