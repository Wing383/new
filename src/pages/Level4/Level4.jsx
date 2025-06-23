import { useNavigate } from 'react-router-dom'
import './Level4.css'

function Level4() {
  const navigate = useNavigate()

  return (
    <div className="center-container">
      <button onClick={() => navigate('/Level5')}>
        level5
      </button>
    </div>
  )
}

export default Level4
