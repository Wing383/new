import { useNavigate } from 'react-router-dom'
import './Level3.css'
import Header from '../../components/Header.jsx'
function Level3() {
  const navigate = useNavigate()

  return (
    <div>
      <Header level={3} />
      <div className="center-container">
        <button onClick={() => navigate('/Level4')}>
          level4
        </button>
      </div>
    </div>
  )
}

export default Level3
