import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import data from './data/data';
import Country from './components/Country';

function App() {
  const [count, setCount] = useState(0)

  const firstCountry = data[count];

  return (
    <div className="App">
      <Country country={firstCountry} />
      <button onClick={() => setCount(count + 1)}>Select Country</button>
    </div>
  )
}

export default App
