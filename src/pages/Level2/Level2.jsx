import { useNavigate } from 'react-router-dom'
import './Level2.css'

function Level2() {
  const navigate = useNavigate()

  return (
    <div className="center-container">
      <div className="button-container">
        <button onClick={() => navigate('/Level3')}>
          level3
        </button>
        <button onClick={() => navigate('/Level3')}>
          level3
        </button>
      </div>
    </div>
  )
}

export default Level2
