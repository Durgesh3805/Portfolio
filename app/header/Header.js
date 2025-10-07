"use client";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header({ onHamburgerClick, isOpen }) {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
      <div className={styles.logo}>
        <span className={styles.logoLetter}>D</span>
        <span className={styles.Letters}>urgesh A P</span>
      </div>
       </Link>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {/* We've nested the <a> tag and moved the classes to it */}
          <li>
            <Link href="/#about" className={`${styles.navItem} ${styles.item1}`}>
              About
            </Link>
          </li>
          <li>
            <Link href="/#skills" className={`${styles.navItem} ${styles.item2}`}>
              Skills
            </Link>
          </li>
          <li>
           <Link href="/#projects" className={`${styles.navItem} ${styles.item3}`}>
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${styles.navItem} ${styles.contact} ${isOpen ? styles.contactActive : ""}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <button
        className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
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
