import { useNavigate } from 'react-router-dom';
import styles from './Level14.module.css';
import { useNumberListStore } from '@/store/numberListStore';

function Level14() {
  const navigate = useNavigate(); 
  const { numbers } = useNumberListStore();

  return (
    <div className={styles.parent}>
      <p>レベル12で入力した数値</p>
      {/*@fix14:枠付きでおしゃれにした*/}
      <div className={styles.scrollContainer}>
        {numbers.map((item) => (
          <p key={item.id} className={styles.itemBox}>
            {item.value}
          </p>
        ))}
      </div>
      <button onClick={() => navigate('/')}>level1</button>
    </div>
  );
}

export default Level14;
