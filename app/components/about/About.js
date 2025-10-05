"use client";

import { useState, useEffect } from "react";
import styles from "./About.module.css";

// Using the more detailed skills data object
const skillsData = {
  "Programming Languages": ["Java", "Python", "C", "JavaScript"],
  "Web Development": [
    "HTML",
    "CSS",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap",
  ],
  Databases: ["MySQL", "PostgreSQL", "MongoDB"],
  "Data Science & AI": ["NumPy", "Matplotlib", "Scikit-learn", "Power BI"],
  "Web Scraping": ["Selenium", "Scrapy", "Beautiful Soup"],
  "Tools & Platforms": ["Git", "GitHub", "Figma", "Canva", "LaTeX", "REST API"],
};

export default function About() {
  // Array of color classes for random assignment
  const colorClasses = ["blue", "green", "purple", "gray", "orange", "pink"];

  const [shuffledColors, setShuffledColors] = useState([]);

  // useEffect shuffles the colors once when the component loads
  useEffect(() => {
    const shuffled = [...colorClasses].sort(() => 0.5 - Math.random());
    setShuffledColors(shuffled);
  }, []);

  if (shuffledColors.length === 0) {
    return null;
  }

  return (
    <section className={styles.aboutPage}>
      {/* --- ABOUT SECTION (from your first file) --- */}
      <div className={styles.sectionContainer}>
        <div className={styles.headingColumn}>
          <p className={styles.subheading}>ABOUT</p>
          <h2 className={styles.mainHeading}>
            My Formula for Digital Solutions
          </h2>
        </div>
        <div className={styles.contentColumn}>
          <p className={`${styles.description} ${styles.firstParagraph}`}>
            The mission is simple: engineer beautiful, functional, and scalable web experiences from the ground up. My process starts at the first principles the intersection of elegant design and stone-cold logic.
          </p>
          <p className={styles.description}>
            This philosophy applies to everything I do, whether I'm sprinting through a rapid-fire build against the clock or breaking down complex architecture for aspiring developers. The formula is always the same: no shortcuts, no fluff just a meticulous roadmap from a problem statement to a fully deployed application.
          </p>
        </div>
      </div>

      {/* --- DYNAMIC SKILLS SECTION (from your second file) --- */}
      <div className={styles.sectionContainer}>
        <div className={styles.headingColumn}>
          <p className={styles.subheading}>SKILLS</p>
          <h2 className={styles.mainHeading}>Technologies & expertise</h2>
        </div>
        <div className={styles.contentColumn}>
          {Object.entries(skillsData).map(([category, skills], index) => {
            const colorClass = shuffledColors[index];
            return (
              <div key={category} className={styles.skillCategory}>
                <h3>{category}</h3>
                <div className={styles.skillsGrid}>
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`${styles.skillPill} ${styles[colorClass]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
