'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const animatedOnScrollRef = useRef([]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target); // Animate only once
          }
        });
      },
      {
        threshold: 0.1, // Trigger animation when 10% of the element is visible
      }
    );

    animatedOnScrollRef.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });
    
    // Clean up the observer when the component is unmounted
    return () => {
      animatedOnScrollRef.current.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <section id="main" className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={`${styles.subtitle} ${styles.typewriter}`}>
          TURNING CAFFEINE INTO CODE...
        </p>

        <h1 
          className={`${styles.mainHeading} ${styles.hidden} ${styles.delay2}`}
          ref={(el) => animatedOnScrollRef.current[0] = el}
        >
          I build digital experiences <br /> that aren't just functional<br /> they're genuinely intuitive.
        </h1>
        <p 
          className={`${styles.description} ${styles.hidden} ${styles.delay3}`}
          ref={(el) => animatedOnScrollRef.current[1] = el}
        >
          Deep in the logic, crafting clean code and scalable systems. It's not just a job; it's a whole vibe. Ten billion percent focused on the details.
        </p>
        <div 
          className={`${styles.buttonsContainer} ${styles.hidden} ${styles.delay4}`}
          ref={(el) => animatedOnScrollRef.current[2] = el}
        >
          {/* Anchor tags instead of buttons — crawlable links, no redirect hops */}
          <a
            href="/docs/DurgeshAP_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryButton}
          >
            See the Receipts
          </a>
          <a href="/#projects" className={styles.secondaryButton}>Explore the Builds</a>
        </div>
        
        <div 
          className={`${styles.scrollIndicator} ${styles.hidden} ${styles.delay4}`}
          ref={(el) => animatedOnScrollRef.current[3] = el}
        >
          <p>Scroll to explore</p>
          <span className={styles.arrowDown}></span>
        </div>
      </div>
    </section>
  );
}

