import './Header.css'
function Header({ level }) {
  return (
    <header className="header">
      <div className="level-display">レベル{level}</div>
    </header>
  )
}

export default Header

