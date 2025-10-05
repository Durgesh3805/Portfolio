'use client';

import styles from './Header.module.css';

export default function Header({ onHamburgerClick, isOpen }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoLetter}>D</span>
        <span className={styles.Letters}>urgesh A P</span>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {/* We've nested the <a> tag and moved the classes to it */}
          <li>
            <a href="#about" className={`${styles.navItem} ${styles.item1}`}>
              About
            </a>
          </li>
          <li>
            <a href="#values" className={`${styles.navItem} ${styles.item2}`}>
              My Values
            </a>
          </li>
          <li>
            <a href="#what-i-do" className={`${styles.navItem} ${styles.item3}`}>
              What I Do
            </a>
          </li>
          <li>
            <a href="#contact" className={`${styles.navItem} ${styles.contact} ${isOpen ? styles.contactActive : ''}`}>
              Contact
            </a>
          </li>
        </ul>
      </nav>


      <button
        className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
        onClick={onHamburgerClick}
        aria-label="Toggle sidebar"
        aria-expanded={isOpen}
      >
        <div className={styles.hamburgerIcon}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </header>
  );
}
