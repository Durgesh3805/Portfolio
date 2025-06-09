'use client';

import styles from './Header.module.css';

export default function Sidebar({ visible, onClose }) {
  return (
    <div className={`${styles.sidebar} ${visible ? styles.show : ''}`}>
      <ul className={styles.sidebarMenu}>
        <li onClick={onClose}>About</li>
        <li onClick={onClose}>My Values</li>
        <li onClick={onClose}>What I Do</li>
        <li onClick={onClose}>Contact</li>
      </ul>
    </div>
  );
}
