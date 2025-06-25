import styles from './Header.module.css'

function Header({ level }) {
  return (
    <header className={styles.header}>
      <div className={styles.levelDisplay}>レベル{level}</div>
    </header>
  )
}

export default Header
