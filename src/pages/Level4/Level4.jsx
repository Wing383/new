import { useNavigate } from 'react-router-dom'
import styles from './Level4.module.css'
import Header from '@/components/Header/Header'//@fix:一般的にはパスはこのように@で指定することが多いい。(設定はjsconfig.jsonフォルダ内とvite.config.js内で行っている)

function Level4() {
  const navigate = useNavigate()
  const labels = ['あ', 'い', 'う']

  return (
    <div>
      <Header level={4} />

      <div className={styles.rightBottomButton}>
        <button onClick={() => navigate('/Level3')}>
          level3
        </button>
      </div>

      <div className={styles.verticalButtons}>
        {labels.map((label, index) => (
          <button key={index}>{label}</button>
        ))}
      </div>

      <div className={styles.leftBottomButton}>
        <button onClick={() => navigate('/Level5')}>
          level5
        </button>
      </div>
    </div>
  )
}

export default Level4
