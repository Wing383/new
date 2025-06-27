// src/components/MyButtonList/MyButtonList.jsx
import { useNavigate } from 'react-router-dom'
import styles from './Button.module.css'

function MyButtonList({ buttons }) {
  return (
    <div className={styles.buttonList}>
      {buttons.map((btn, index) => (
        <button key={index} className={styles.button} >
          {btn.label}
        </button>
      ))}
    </div>
  )
}

export default MyButtonList
