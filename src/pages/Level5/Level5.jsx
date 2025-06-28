import { useNavigate } from 'react-router-dom'
import styles from './Level5.module.css' // CSSモジュールとして読み込む
import Header from '@/components/Header/Header' //@fix:一般的にはパスはこのように@で指定することが多いい。(設定はjsconfig.jsonフォルダ内とvite.config.js内で行っている)
import Footer from '@/components/Footer/Footer' //@fix:一般的にはパスはこのように@で指定することが多いい。(設定はjsconfig.jsonフォルダ内とvite.config.js内で行っている)

//@fix:最初の翼の書き方でも全く問題がないが、一応このような書き方でも可能ということだけ
//知識として持っておいてほしいため一応2次元リストの形に変更した
//(※実際は好きな方を選んで活用してくれればと思う)
const labelGroups = [
  ['あ', 'い', 'う'],
  ['え', 'お', 'か'],
]

function Level5() {
  const navigate = useNavigate()

  return (
    <div>
      <Header level={5} />

      <div className={styles.topButton}>
        <button onClick={() => navigate('/Level4')}>level4</button>
      </div>
      {/*@fix:2重.mapで表示させることが可能。ただ今回の規模であれば
      ぶっちゃけ2重でなくても問題ないため実際は好きな方を選択してくれればと思う
      (※恐らくレベル6以降はこの書き方は登場しないためこういう書き方があるということだけ知ってくれればと思う)*/}
      <div className={styles.buttonWrapper}>
        {labelGroups.map((group, groupIndex) => (
          <div key={groupIndex} className={styles.verticalButtons}>
            {group.map((label, labelIndex) => (
              <button key={labelIndex}>{label}</button>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.bottomButton}>
        <button onClick={() => navigate('/Level6')}>level6</button>
      </div>

      <Footer level={5} />
    </div>
  )
}

export default Level5
