import React from 'react';
import styles from './About.module.css';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export default function About() {
  const navigate = useNavigate();
  return (
    <div className={styles.about}>
      <p className={styles.text}>
        My name is Daniil Popchenko, I am from a beautiful country - Ukraine and I am a Front-end developer. I am
        familiar with HTML / CSS, JS, currently in the process of studying React.js and TypeScript. Looking for
        challenges to improve my knowledge in web developing. Also I`m a professional football player
      </p>

      <button className="goBackBtn" type="button" onClick={() => navigate(-1)}>
        <span>
          <FaArrowLeft fontSize={20} />
        </span>
      </button>
    </div>
  );
}
