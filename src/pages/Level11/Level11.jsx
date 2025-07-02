import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Level11.module.css';

function Level11() {
  const location = useLocation();
  const receivedValue = location.state?.value || ''; // ← ここで値を受け取る
  const [value, setValue] = useState('');  // stateがない時のために空オブジェクトをデフォルトに

  return (
    <div>
      <p>
        レベル10で入力した数値
      </p>
      <p>{receivedValue}</p>
      <p>レベル12で表示させたい数値を入力してください</p>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.input}
        placeholder="数値を入力"
      />
    </div>

  );
}

export default Level11;
