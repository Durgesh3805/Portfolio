// components/Header.js

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoLetter}>D</span>
        <span className={styles.Letters}>urgesh A P</span> 
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${styles.item1}`} >Portfolio</li>
          <li className={`${styles.navItem} ${styles.item2}`} >My Values</li>
          <li className={`${styles.navItem} ${styles.item3}`} >What I Do</li>
          <li className={`${styles.navItem} ${styles.contact}`}>Contact</li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;
