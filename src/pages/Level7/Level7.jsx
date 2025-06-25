import { useNavigate } from 'react-router-dom'
import './Level7.css'
import Header from '../../components/Header.jsx'
import Footer from '../../components/footer.jsx'

const labels1 = ['あ', 'い', 'う']
const labels2 = ['え','お','か']
function Level6() {
  const navigate = useNavigate()

  return (
    <div>
      <Header level={6} />
      <div className='top-button'>
        <button onClick={() => navigate('/Level4')}>
          level4
        </button>
      </div>
      <div className="vertical-buttons">
        {labels1.map((label, index) => (
          <button key={index}>{label}</button>
        ))}
      </div>
      <div className='bottom-button'>
        <button onClick={() => navigate('/Level5')}>
          level5
        </button>
      </div>
      <Footer level={6} />
    </div>
  )
}

export default Level6
