// Level1.jsx
import { useNavigate } from 'react-router-dom'
import styles from './Level1.module.css'  // CSSモジュールを読み込む

function Level1() {
  const navigate = useNavigate()

  return (
    <div className={styles.centerContainer}>
      <button className={styles.button} onClick={() => navigate('/Level2')}>
        level2
      </button>
    </div>
  )
}

export default Level1
