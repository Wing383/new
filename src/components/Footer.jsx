// components/Footer.jsx
import React from 'react'
import './Footer.css'

function Footer({ level }) {
  return (
    <footer className="footer">
        <div className="level-display">レベル{level}</div>
    </footer>
  )
}

export default Footer
