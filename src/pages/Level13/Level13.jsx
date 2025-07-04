import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Level13.module.css';

function Level13() {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [savedValue, setSavedValue] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('savedValue');
    if (stored !== null) {
      setSavedValue(stored);
    }
  }, []);
  // 🔽 保存処理
  const handleSaveToLocalStorage = () => {
    localStorage.setItem('savedValue', value); // "savedValue" は任意のキー名
    alert('ローカルストレージに保存しました');
    setSavedValue(value);
  };

  return (
    <div className={styles.parent}>
      <p>ローカルストレージに値を保存させたい値を入力してください。</p>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.input}
        placeholder="数値を入力"
      />

      <button onClick={handleSaveToLocalStorage} style={{ width: '200px' }}>
        ローカルストレンジに保存する
      </button>
      <p>ローカルストレージの値を取得して表示する</p>
      <p>保存されている値：{savedValue}</p>
      <button onClick={() => navigate('/Level14')}>level14</button>
    </div>
  );
}

export default Level13;
