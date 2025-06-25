import { useNavigate } from 'react-router-dom'
import './Level6.css'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'



function Level6() {
  const navigate = useNavigate()

  return (
    <div>
      <Header level={6} />


      <Footer level={6} />
    </div>
  )
}

export default Level6
