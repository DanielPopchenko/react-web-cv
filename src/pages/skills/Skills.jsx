import React from 'react';
import styles from './Skills.module.css';
import { AiFillStar } from 'react-icons/ai';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Rating } from '@mui/material';

function Skills() {
  const navigate = useNavigate();
  return (
    <div className={styles.skills}>
      <h2>Skills</h2>

      <ul className={styles.skillsList}>
        <li className={styles.item}>
          <p>HTML5</p>
          <div className={styles.stars}>
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              sx={{ color: '#003056', fontSize: '26px' }}
              readOnly
            />
          </div>
        </li>
        <li className={styles.item}>
          <p>CSS3</p>
          <div className={styles.stars}>
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              sx={{ color: '#003056', fontSize: '26px' }}
              readOnly
            />
          </div>
        </li>
        <li className={styles.item}>
          <p>JS</p>
          <div className={styles.stars}>
            <Rating name="half-rating-read" defaultValue={4} sx={{ color: '#003056', fontSize: '26px' }} readOnly />{' '}
          </div>
        </li>
        <li className={styles.item}>
          <p>REACT.JS</p>
          <div className={styles.stars}>
            <Rating
              name="half-rating-read"
              defaultValue={4}
              precision={0.5}
              sx={{ color: '#003056', fontSize: '26px' }}
              readOnly
            />
          </div>
        </li>
        <li className={styles.item}>
          <p>TypeScript</p>
          <div className={styles.stars}>
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              sx={{ color: '#003056', fontSize: '26px' }}
              readOnly
            />{' '}
          </div>
        </li>
        <li className={styles.item}>
          <p>SCSS</p>
          <div className={styles.stars}>
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              sx={{ color: '#003056', fontSize: '26px' }}
              readOnly
            />{' '}
          </div>
        </li>
        <li className={styles.item}>
          <p>GitHub</p>
          <div className={styles.stars}>
            <Rating name="half-rating-read" defaultValue={4} sx={{ color: '#003056', fontSize: '26px' }} readOnly />
          </div>
        </li>
        <li className={styles.item}>
          <p>GIT</p>
          <div className={styles.stars}>
            <Rating name="half-rating-read" defaultValue={4} sx={{ color: '#003056', fontSize: '26px' }} readOnly />
          </div>
        </li>
        <li className={styles.item}>
          <p>Eng /Ukr / Rus</p>
          <br />
          <div className={styles.stars}>
            <Rating name="half-rating-read" defaultValue={5} sx={{ color: '#003056', fontSize: '26px' }} readOnly />
          </div>
        </li>
      </ul>

      <button className="goBackBtn" style={{ marginTop: 30 }} type="button" onClick={() => navigate(-1)}>
        <span>
          <FaArrowLeft fontSize={20} />
        </span>
      </button>
    </div>
  );
}

export default Skills;
