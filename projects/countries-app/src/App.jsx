
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Detail from './pages/Detail'
import Theme from './components/Theme';

import './App.css'


//https://qu3bin.github.io/rest-countries/
function App() {

  return (
    <>
      <header>
        <h1 className='title'>Hello, World</h1>
        <Theme />
      </header>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:id' element={<Detail />}/>
      </Routes>
    </>
  )
}

export default App
