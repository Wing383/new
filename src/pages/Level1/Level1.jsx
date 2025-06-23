import { useNavigate } from 'react-router-dom'
import './Level1.css'

function Level1() {
  const navigate = useNavigate()

  return (
    <div className="center-container">
      <button onClick={() => navigate('/Level2')}>
        level2
      </button>
    </div>
  )
}

export default Level1
