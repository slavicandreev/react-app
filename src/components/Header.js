import React from 'react';
// Here we are importing a CSS file as a dependency
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className="header">
      <h1 class={styles.heading}>Home</h1>
    </header>
  );
}

export default Header;
