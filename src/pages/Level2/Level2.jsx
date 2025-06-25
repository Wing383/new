// Level2.jsx
import { useNavigate } from 'react-router-dom'
import styles from './Level2.module.css'  // CSSモジュールとして読み込む

function Level2() {
  const navigate = useNavigate()

  return (
    <div className={styles.centerContainer}>
      <div className={styles.buttonContainer}>
        <button onClick={() => navigate('/Level3')}>
          level3
        </button>
        <button onClick={() => navigate('/Level3')}>
          level3
        </button>
      </div>
    </div>
  )
}

export default Level2
