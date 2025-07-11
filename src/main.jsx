import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'//"@fix:自分も最初勘違いしていたがreactではindex.cssで最初に全体に反映されるレイアウトを設定するのが一般的みたいだ"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Level1 from './pages/Level1/Level1.jsx'
import Level2 from './pages/Level2/Level2.jsx'
import Level3 from './pages/Level3/Level3.jsx'
import Level4 from './pages/Level4/Level4.jsx'
import Level5 from './pages/Level5/Level5.jsx'
import Level6 from './pages/Level6/Level6.jsx'
import Level7 from './pages/Level7/Level7.jsx'
import Level8 from './pages/Level8/Level8.jsx'
import Level9 from './pages/Level9/Level9.jsx'
import Level10 from './pages/Level10/Level10.jsx'
import Level11 from './pages/Level11/Level11.jsx'
import Level12 from './pages/Level12/Level12.jsx'
import Level13 from './pages/Level13/Level13.jsx'
import Level14 from './pages/Level14/Level14.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Level1 />} />
      <Route path="/Level2" element={<Level2 />} />
      <Route path="/Level3" element={<Level3 />} />
      <Route path="/Level4" element={<Level4 />} />
      <Route path="/Level5" element={<Level5 />} />
      <Route path="/Level6" element={<Level6 />} />
      <Route path="/Level7" element={<Level7 />} />
      <Route path="/Level8" element={<Level8 />} />
      <Route path="/Level9" element={<Level9 />} />
      <Route path="/Level9" element={<Level9 />} />
      <Route path="/Level10" element={<Level10 />} />
      <Route path="/Level11" element={<Level11 />} />
      <Route path="/Level12" element={<Level12 />} />
      <Route path="/Level13" element={<Level13 />} />
      <Route path="/Level14" element={<Level14 />} />
    </Routes>
  </BrowserRouter>
)
