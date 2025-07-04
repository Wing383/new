import { useNavigate} from 'react-router-dom';
import styles from './Level11.module.css';
import { useTimer } from '@/hooks/useTimer';

function Level11() {
  const navigate = useNavigate();
  const {count} = useTimer();//@fix11:useTimer内でreturnの値を{count,setCount}にして置いた場合はこのような呼び出しになる。
  //const {count,setCount} = useTimer();にすると値も関数も呼び出すことが可能

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
