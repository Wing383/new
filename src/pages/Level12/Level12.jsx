import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Level12.module.css';
import { useTimer } from '../../hooks/useTimer';

function Level12() {
  const location = useLocation();
  const receivedValue = location.state?.value || ''; // ← ここで値を受け取る
  const [value, setValue] = useState('');  // stateがない時のために空オブジェクトをデフォルトに
  const count = useTimer();
  return (
    <div>
      <p>このページを開いてから{count}秒が経過しました。</p>
    </div>

  );
}

export default Level12;
