import { useNavigate } from 'react-router-dom'
import styles from './Level6.module.css' 
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Button from '../../components/ui/ItemList/Mbutton.jsx' // ← 追加

function Level6() {
  const navigate = useNavigate()

  // ボタン情報（名前とクリック処理）を配列で定義
  
  const button1 = [
    { label: 'あ' },
    { label: 'い' },
  ]
  const button2 = [
    { label: '1個'},
    { label: '2個'},
    { label: '3個'},
  ]
  const button3 = [
    { label: 'ま'},
    { label: 'み'},
    { label: 'む'},
    { label: 'め'},
  ]
  const button4 = [
    { label: 'A'},
    { label: 'B'},
    { label: 'C'},
  ]

  return (
    <div>
      <Header level={6} />
      <div className={styles.buttonWrapper}>
        <div className={styles.verticalbuttons}>
          <button onClick={() => navigate('/Level5')}>level5</button>
          <Button buttons={button1} />
          <Button buttons={button3} />
        </div>
        <div className={styles.verticalbuttons}>
          <button onClick={() => navigate('/Level7')}>level7</button>
          <Button buttons={button2} />
          <Button buttons={button4} />
        </div>
      </div>
      


      <Footer level={6} />
    </div>
  )
}

export default Level6
