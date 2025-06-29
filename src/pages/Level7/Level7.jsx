import { useNavigate } from 'react-router-dom'
import styles from './Level7.module.css'
import ToggleHeader from '../../components/ToggleHeader/ToggleHeader.jsx'
import Footer from '../../components/Footer/Footer.jsx'


function Level7() {
 

  return (
    <div>
    <ToggleHeader >
        <p>ここに詳細な説明やコンテンツを入れます。</p>
        <ul>
          <li>ポイント1</li>
          <li>ポイント2</li>
        </ul>
    </ToggleHeader>
    <Footer level={7} />
    </div>
  )
}

export default Level7
