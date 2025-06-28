// src/components/MyButtonList/MyButtonList.jsx
import styles from './ItemList.module.css'

function ItemList({ buttons }) {
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

export default ItemList
