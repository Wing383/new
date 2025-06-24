import { useNavigate } from 'react-router-dom'
import './Level4.css'
import Header from '../../components/Header.jsx'
function Level4() {
  const navigate = useNavigate()
   const labels = ['あ', 'い', 'う']
  return (
    <div>
      <Header level={4} />
      <div className='right-bottom-button'>
        <button onClick={() => navigate('/Level3')}>
          level3
        </button>
      </div>
      <div className="vertical-buttons">
        {labels.map((label, index) => (
          <button key={index}>{label}</button>
        ))}
      </div>
      <div className='left-bottom-button'>
        <button onClick={() => navigate('/Level5')}>
          level5
        </button>
      </div>
    </div>
  )
}

export default Level4
