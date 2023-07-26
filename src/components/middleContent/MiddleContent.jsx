import React from 'react';
import styles from './MiddleContent.module.css';
import Letters from '../letters/Letters';
import { Link } from 'react-router-dom';

function MiddleContent() {
  return (
    <div className={styles.middleContainer}>
      <h1 className={styles.heading}>My personal blog.</h1>
      <div className={styles.content}>
        <Letters />

        <ul className={styles.linksList}>
          <Link className={styles.link} to="/about">
            About
          </Link>
          <Link className={styles.link} to="/skills">
            Skills
          </Link>
          <Link className={styles.link} to="/education">
            Education
          </Link>

          <Link className={styles.link} to="/projects">
            Projects
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default MiddleContent;
