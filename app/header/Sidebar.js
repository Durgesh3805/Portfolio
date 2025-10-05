'use client';

import styles from './Header.module.css';

export default function Sidebar({ visible, onClose }) {
  return (
    <div className={`${styles.sidebar} ${visible ? styles.show : ''}`}>
      <ul className={styles.sidebarMenu}>
        <li>
          <a href="#about" onClick={onClose}>About</a>
        </li>
        <li>
          {/* Assuming you have a section with id="values" */}
          <a href="#values" onClick={onClose}>My Values</a>
        </li>
        <li>
          {/* Assuming you have a section with id="what-i-do" */}
          <a href="#what-i-do" onClick={onClose}>What I Do</a>
        </li>
      </ul>
    </div>
  );
}