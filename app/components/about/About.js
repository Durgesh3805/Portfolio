// File: app/components/about/About.js

import styles from './About.module.css';

// A helper array for skills to keep the JSX clean
const skills = {
  languages: ['Java', 'Python', 'C', 'C++', 'JavaScript', 'SQL'],
  web: ['React.js', 'Node.js', 'Express.js', 'Spring Boot', 'HTML', 'CSS', 'JSX', 'TailwindCSS'],
  backend: ['REST API Development', 'Microservices', 'JWT Authentication', 'Secure Payments'],
};

export default function About() {
  return (
    <section className={styles.aboutPage}>
      {/* ABOUT SECTION */}
      <div className={styles.sectionContainer}>
        <div className={styles.headingColumn}>
          <p className={styles.subheading}>ABOUT</p>
          <h2 className={styles.mainHeading}>Building with purpose and precision</h2>
        </div>
        <div className={styles.contentColumn}>
          <p className={styles.description}>
            I'm a passionate designer and developer focused on creating beautiful, functional digital experiences. My work sits at the intersection of design and code, where aesthetics meet functionality.
          </p>
          <p className={styles.description}>
            With a focus on minimalism and attention to detail, I help brands and individuals bring their visions to life through thoughtful design systems and clean, maintainable code.
          </p>
        </div>
      </div>

      {/* SKILLS SECTION */}
      <div className={styles.sectionContainer}>
        <div className={styles.headingColumn}>
          <p className={styles.subheading}>SKILLS</p>
          <h2 className={styles.mainHeading}>Technologies & expertise</h2>
        </div>
        <div className={styles.contentColumn}>
          <div className={styles.skillCategory}>
            <h3>Programming Languages</h3>
            <div className={styles.skillsGrid}>
              {skills.languages.map(skill => <span key={skill} className={`${styles.skillPill} ${styles.blue}`}>{skill}</span>)}
            </div>
          </div>
          <div className={styles.skillCategory}>
            <h3>Web Development</h3>
            <div className={styles.skillsGrid}>
              {skills.web.map(skill => <span key={skill} className={`${styles.skillPill} ${styles.green}`}>{skill}</span>)}
            </div>
          </div>
          <div className={styles.skillCategory}>
            <h3>Backend & APIs</h3>
            <div className={styles.skillsGrid}>
              {skills.backend.map(skill => <span key={skill} className={`${styles.skillPill} ${styles.purple}`}>{skill}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}