'use client';
import { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoLetter}>D</span>
        <span className={styles.Letters}>urgesh A P</span> 
      </div>

      {/* Desktop Nav */}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${styles.item1}`}>About</li>
          <li className={`${styles.navItem} ${styles.item2}`}>My Values</li>
          <li className={`${styles.navItem} ${styles.item3}`}>What I Do</li>
          <li className={`${styles.navItem} ${styles.contact}`}>Contact</li>
        </ul>
      </nav>

      {/* Mobile: Hamburger Button */}
      <button className={styles.hamburger} onClick={() => setIsSidebarOpen(true)}>
        ☰
      </button>

      {/* Mobile: Sidebar Drawer */}
      {/* <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
        <button className={styles.closeBtn} onClick={() => setIsSidebarOpen(false)}>×</button>
        <div className={styles.sidebarItem}>About</div>
        <div className={styles.sidebarItem}>My Values</div>
        <div className={styles.sidebarItem}>What I Do</div>
      </div> */}
    </header>
  );
};

export default Header;
