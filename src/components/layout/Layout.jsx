import React from 'react';
import styles from './Layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.app}>
      <div className={styles.leftContainer}></div>
      {children}
      <div className={styles.rightContainer}></div>
    </div>
  );
}

export default Layout;
