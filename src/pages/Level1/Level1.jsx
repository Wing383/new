import { useNavigate } from 'react-router-dom'
import './level1.css'

function Level1() {
  const navigate = useNavigate()

  return (
    <div className="center-container">
      <button onClick={() => navigate('/level2')}>
        level2
      </button>
    </div>
  )
}

export default Level1
