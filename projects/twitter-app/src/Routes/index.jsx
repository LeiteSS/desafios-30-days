import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import Delete from '../pages/Delete'
import Update from '../pages/Update'

const Routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route component={ App } path="/" exact />
        <Route component={ Delete } path="/delete/:id" exact/>
        <Route component={ Update } path="/update/:id" exact/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routes