// app/components/hero/Hero.js
'use client'; // This is important if you use client-side features like state or effects later

import styles from './Hero.module.css'; // Import the new CSS module

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.subtitle}>TURNING CAFFEINE INTO CODE...</p>
        <h1 className={styles.mainHeading}>
            I build digital experiences <br /> that aren't just functional<br /> they're genuinely intuitive.        </h1>
        <p className={styles.description}>
          Deep in the logic, crafting clean code and scalable systems. It's not just a job; it's a whole vibe. Ten billion percent focused on the details.
        </p>
        <div className={styles.buttonsContainer}>
          <button className={styles.primaryButton}>See the Receipts</button>
          <button className={styles.secondaryButton}>Explore the Builds</button>
        </div>
        <div className={styles.scrollIndicator}>
          <p>Scroll to explore</p>
          <span className={styles.arrowDown}></span> {/* Placeholder for an arrow icon */}
        </div>
      </div>
    </section>
  );
}