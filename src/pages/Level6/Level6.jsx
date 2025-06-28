import { useNavigate } from 'react-router-dom'
import styles from './Level6.module.css' 
import Header from '@/components/Header/Header'/*@fix:自分も最初勘違いしていたが、どうやらReactで.jsxファイルをimportする際拡張子は不要らしい*/
import Footer from '@/components/Footer/Footer'//@fix:一般的にはパスはこのように@で指定することが多いい。(設定はjsconfig.jsonフォルダ内とvite.config.js内で行っている)
import ItemList from '@/components/ui/ItemList/ItemList'//@fix:uiフォルダにまとめているのは良い点。しかしそのなかでItemListフォルダを作ってjsxとcssをまとめる際は、コンポーネント名もフォルダ名も.module.css拡張子のファイルも全て同じ名前に統一したほうが良い(※ここではItemListに統一させておいた)

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
          <ItemList buttons={button1} />
          <ItemList buttons={button3} />
        </div>
        <div className={styles.verticalbuttons}>
          <button onClick={() => navigate('/Level7')}>level7</button>
          <ItemList buttons={button2} />
          <ItemList buttons={button4} />
        </div>
      </div>
      <Footer level={6} />
    </div>
  )
}

export default Level6
