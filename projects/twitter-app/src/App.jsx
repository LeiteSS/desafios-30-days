import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import Home from './pages/Home';
import Delete from './pages/Delete';
import Update from './pages/Update';

const App = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>go back</button>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path='/delete/:id' element={<Delete />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
    </div>
  )
}

export default App