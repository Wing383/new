// components/Footer.jsx
import React from 'react'
import styles from './Footer.module.css' // CSSモジュールとして読み込む

function Footer({ level }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.levelDisplay}>レベル{level}</div>
    </footer>
  )
}

export default Footer
