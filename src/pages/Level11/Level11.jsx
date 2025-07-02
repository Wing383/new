import { useNavigate,useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Level11.module.css';
import { useTimer } from '../../hooks/useTimer';

function Level11() {
  const navigate = useNavigate();
  const location = useLocation();
  const count = useTimer();
  return (
    <div className={styles.parent}>
      <p>このページを開いてから{count}秒が経過しました。</p>
      <div>
        <button onClick={() => navigate('/Level12')}>level12</button>
      </div>
    </div>

  );
}

export default Level11;
