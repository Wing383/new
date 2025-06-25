// Level3.jsx
import { useNavigate } from 'react-router-dom'
import styles from './Level3.module.css'
import Header from '../../components/Header/Header.jsx'

function Level3() {
  const navigate = useNavigate()

  return (
    <div>
      <Header level={3} />
      <div className={styles.centerContainer}>
        <button className={styles.button} onClick={() => navigate('/Level4')}>
          level4
        </button>
      </div>
    </div>
  )
}

export default Level3
