import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'//"@fix:自分も最初勘違いしていたがreactではindex.cssで最初に全体に反映されるレイアウトを設定するのが一般的みたいだ"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Level1 from './pages/Level1/Level1'//@fix:自分も最初は勘違いしていたが.jsxファイルを呼び出す際は拡張子(.jsx)は付けないことが一般的みたいだ。
import Level2 from './pages/Level2/Level2'
import Level3 from './pages/Level3/Level3'
import Level4 from './pages/Level4/Level4'
import Level5 from './pages/Level5/Level5'
import Level6 from './pages/Level6/Level6'
import Level7 from './pages/Level7/Level7'
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
    </Routes>
  </BrowserRouter>
)
