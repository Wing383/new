import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './Level10.module.css';
import { useAtom } from 'jotai'; // ← JotaiのuseAtomをインポート
import { valueAtom } from '@/atom/valueAtom';

function Level10() {
  const navigate = useNavigate();
  const [value, setValue] = useAtom(valueAtom);  
  const [localValue, setLocalValue] = useState('');

  return (
    <div className={styles.wrapper}>
       {/*@fix10:className={styles.textFont}で少し説明文をおしゃれにした*/}
      <p className={styles.textFont}>
        レベル9で入力した数値
      </p>
      <p>{value}</p>
      <p>レベル12で表示させたい数値を入力してください</p>
      <input
        type="number"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        className={styles.input}
        placeholder="数値を入力"
      />
      <div>
        <button onClick={() => {
          setValue(localValue);
          navigate('/Level11')}}>level11</button>
      </div>
    </div>

  );
}

export default Level10;
