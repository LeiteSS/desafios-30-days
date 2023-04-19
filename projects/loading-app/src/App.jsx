import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [load, setLoad] = useState(true);

  setTimeout(() => {
    console.log('Pagina carregada!');
    setLoad(false);
  }, 7000);

  return (
    <div className="App">
      <div>
        {load === false ? 
        <>
          <p>Pagina carregada!</p>
          <img src={reactLogo} className='logo-react'/>
        </> : 
        <>
          <p>Carregando...</p>
          <img src={viteLogo} className='logo' />
        </>}
      </div>
    </div>
  )
}

export default App
