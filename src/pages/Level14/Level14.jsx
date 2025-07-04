import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Level14.module.css';
import InputItem from '../../components/ui/InputItem/InputItem';
import { useNumberListStore } from '../../atom/numberListStore';

function Level14() {
  const navigate = useNavigate(); 
  const { numbers } = useNumberListStore();

  return (
    <div className={styles.parent}>
      <p>レベル12で入力した数値</p>
      <div className={styles.scrollContainer}>
        {numbers.map((item) => (
          <p key={item.id}>{item.value}</p>
        ))}
      </div>
      <button onClick={() => navigate('/')}>level1</button>
    </div>
  );
}

export default Level14;
