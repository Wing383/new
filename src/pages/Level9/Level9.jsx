import { useNavigate } from 'react-router-dom'
import styles from './Level9.module.css'
import ToggleHeader from '../../components/ToggleHeader/ToggleHeader.jsx'
import { useState } from 'react';
import { useAtom } from 'jotai';
import { valueAtom } from '../../atom/valueAtom.js';

function Level9() {
  const navigate = useNavigate()
  const [value, setValue] = useAtom(valueAtom);


  return (
    <div>
      <ToggleHeader >
        <p>
          レベル10の画面に表示させたい数値を入力しよう!!
        </p>
        <div className={styles.parent1}>
          <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={styles.input}
          placeholder="数値を入力"
        />
        </div>
      </ToggleHeader>
      <dig className={styles.parent2}>
        <button onClick={() => navigate('/Level10')}>Level10へ</button>
      </dig>
    </div>
  )
}

export default Level9
