import { useNavigate } from 'react-router-dom'
import styles from './Level7.module.css'
import ToggleHeader from '../../components/ToggleHeader/ToggleHeader.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Button from '../../components/ui/ItemList/Mbutton.jsx'
import sampleImage from '../../assets/leve7.png'

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
