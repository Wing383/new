// Level3.jsx
import { useNavigate } from 'react-router-dom'
import styles from './Level3.module.css'
import Header from '@/components/Header/Header'//@fix:一般的にはパスはこのように@で指定することが多いい。(設定はjsconfig.jsonフォルダ内とvite.config.js内で行っている)

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
