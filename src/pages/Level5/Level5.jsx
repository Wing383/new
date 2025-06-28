import { useNavigate } from 'react-router-dom'
import styles from './Level5.module.css' // CSSモジュールとして読み込む
import Header from '@/components/Header/Header'//@fix:一般的にはパスはこのように@で指定することが多いい。(設定はjsconfig.jsonフォルダ内とvite.config.js内で行っている)
import Footer from '@/components/Footer/Footer'//@fix:一般的にはパスはこのように@で指定することが多いい。(設定はjsconfig.jsonフォルダ内とvite.config.js内で行っている)

const labels1 = ['あ', 'い', 'う']
const labels2 = ['え', 'お', 'か']

function Level5() {
  const navigate = useNavigate()

  return (
    <div>
      <Header level={5} />

      <div className={styles.topButton}>
        <button onClick={() => navigate('/Level4')}>level4</button>
      </div>

      <div className={styles.buttonWrapper}>
        <div className={styles.verticalButtons}>
          {labels1.map((label, index) => (
            <button key={index}>{label}</button>
          ))}
        </div>
        <div className={styles.verticalButtons}>
          {labels2.map((label, index) => (
            <button key={index}>{label}</button>
          ))}
        </div>
      </div>

      <div className={styles.bottomButton}>
        <button onClick={() => navigate('/Level6')}>level6</button>
      </div>

      <Footer level={5} />
    </div>
  )
}

export default Level5
