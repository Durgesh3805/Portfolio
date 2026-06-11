"use client";

import { useState, useEffect } from "react";
import styles from "./About.module.css";

// Using the more detailed skills data object
const skillsData = {
  "Languages": ["Java", "Python", "TypeScript", "R", "C"],
  "Frameworks & Libraries": [
    "React",
    "Next.js",
    "Node.js",
    "FastAPI",
    "Strapi CMS",
    "Tailwind CSS",
    "Bootstrap",
  ],
  "Databases": ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis"],
  "Developer Tools": [
    "Git",
    "GitHub",
    "Postman",
    "Prisma",
    "Selenium",
    "Scrapy",
    "Jenkins",
    "Power BI",
    "LaTeX",
  ],
  "Cloud & Platforms": [
    "Google Cloud Platform",
    "Vercel",
    "Cloudinary",
    "Upstash",
    "Neon",
    "Linux",
  ],
  "Design & Visualization": [
    "Figma",
    "Canva",
    "Matplotlib",
    "Seaborn",
    "Plotly",
  ],
};

export default function About() {
  const colorClasses = ["blue", "green", "purple", "gray", "orange", "pink"];

  // Map each individual skill to a random color, computed once on mount
  const [skillColorMap, setSkillColorMap] = useState({});

  useEffect(() => {
    const map = {};
    Object.values(skillsData).flat().forEach((skill) => {
      map[skill] = colorClasses[Math.floor(Math.random() * colorClasses.length)];
    });
    setSkillColorMap(map);
  }, []);

  if (Object.keys(skillColorMap).length === 0) {
    return null;
  }

  return (
    <section id="about" className={styles.aboutPage}>
      {/* --- ABOUT SECTION --- */}
      <div className={styles.sectionContainer}>
        <div className={styles.headingColumn}>
          <p className={styles.subheading}>ABOUT</p>
          <h2 className={styles.mainHeading}>
            My Formula for Digital Solutions
          </h2>
        </div>
        <div className={styles.contentColumn}>
          <p className={`${styles.description} ${styles.firstParagraph}`}>
            The mission is simple: engineer beautiful, functional, and scalable web experiences from the ground up. My process starts at the first principles — the intersection of elegant design and stone-cold logic.
          </p>
          <p className={styles.description}>
            This philosophy applies to everything I do, whether I'm sprinting through a rapid-fire build against the clock or breaking down complex architecture for aspiring developers. The formula is always the same: no shortcuts, no fluff — just a meticulous roadmap from a problem statement to a fully deployed application.
          </p>
        </div>
      </div>

      {/* --- SKILLS SECTION --- */}
      <div id="skills" className={styles.sectionContainer}>
        <div className={styles.headingColumn}>
          <p className={styles.subheading}>SKILLS</p>
          <h2 className={styles.mainHeading}>Technologies & expertise</h2>
        </div>
        <div className={styles.contentColumn}>
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className={styles.skillCategory}>
              <h3>{category}</h3>
              <div className={styles.skillsGrid}>
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`${styles.skillPill} ${styles[skillColorMap[skill]]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
