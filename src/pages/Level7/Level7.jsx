import { useNavigate } from 'react-router-dom'//@fix7:エイリアス(@によるパス指定)をすることを進める
import styles from './Level7.module.css'//@fix7:エイリアス(@によるパス指定)をすることを進める
import ToggleHeader from '@/components/ToggleHeader/ToggleHeader.jsx'//@fix7:エイリアス(@によるパス指定)をすることを進める
import Footer from '@/components/Footer/Footer.jsx'//@fix7:エイリアス(@によるパス指定)をすることを進める
import Button from '@/components/ui/ItemList/ItemList.jsx'//@fix7:エイリアス(@によるパス指定)をすることを進める
import sampleImage from '@/assets/leve7.png'//@fix7:エイリアス(@によるパス指定)をすることを進める

const button1 = [
  { label: 'A' },
  { label: 'B' },
  { label: 'C' },
]
const button2 = [
  { label: 'D' },
  { label: 'E' },
  { label: 'F' },
]
function Level7() {
const navigate = useNavigate()

  return (
    <div>
      <div className={styles.parent}>
        <ToggleHeader >
          <div className={styles.buttonWrapper}>
            <Button buttons={button1} />
            <Button buttons={button2} />
          </div>
        </ToggleHeader>
      </div>
      <div className={styles.leftbutton}>
        <button onClick={() => navigate('/Level8')}>level8</button>
      </div>
      <img src={sampleImage} alt="sample" className={styles.bottomImage} />
      <Footer level={7} />
    </div>
  )
}

export default Level7
