'use client';

import Link from 'next/link'; // Import Link for Next.js routing
import styles from './Header.module.css';

export default function Sidebar({ visible, onClose }) {
  return (
    <div className={`${styles.sidebar} ${visible ? styles.show : ''}`}>
      <ul className={styles.sidebarMenu}>
        <li>
          {/* Link to About section on the home page */}
          <Link href="/#about" onClick={onClose} className={styles.navItem}>
            About
          </Link>
        </li>
        <li>
          {/* Link to Skills section on the home page */}
          <Link href="/#skills" onClick={onClose} className={styles.navItem}>
            Skills
          </Link>
        </li>
        <li>
          {/* Link to Projects section on the home page */}
          <Link href="/#projects" onClick={onClose} className={styles.navItem}>
            Projects
          </Link>
        </li>
      
      </ul>
    </div>
  );
}