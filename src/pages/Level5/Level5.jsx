import { useNavigate } from 'react-router-dom'
import './Level5.css'

function Level5() {
  const navigate = useNavigate()

  return (
    <div className="center-container">
      <button onClick={() => navigate('/Level')}>
        level5
      </button>
    </div>
  )
}

export default Level5
