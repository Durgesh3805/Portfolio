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
          <li className={`${styles.navItem} ${styles.item1}`}>About</li>
          <li className={`${styles.navItem} ${styles.item2}`}>My Values</li>
          <li className={`${styles.navItem} ${styles.item3}`}>What I Do</li>
          <li className={`${styles.navItem} ${styles.contact}`}>Contact</li>
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
