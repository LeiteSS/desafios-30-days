import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [showBox, setShowBox] = useState(false)
  const [x, setX] = useState(100);
  const [y, setY] = useState(100);

  let onMouseEnterStyle = {
    transform: `translate(${x}px, ${y}px)`
  }

  const handleBoxToggle = () => {
    console.log('Mouse enter');

    setX(Math.floor(Math.random() * 301));
    setY(Math.floor(Math.random() * 401));
  }


  return (
    <div className="App">
      <div onMouseEnter={handleBoxToggle} style={onMouseEnterStyle}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
    </div>
  )
}

export default App
