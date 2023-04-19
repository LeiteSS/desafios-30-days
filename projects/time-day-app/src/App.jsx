import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import moment from 'moment';
import { useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState('default');

  const time = new Date("April 19, 2023 05:00");

  // https://www.britannica.com/dictionary/eb/qa/parts-of-the-day-early-morning-late-morning-etc
  useEffect(() => {
    // 5 da manhã até meio dia
    if (time.getHours() >= 5 && time.getHours() < 12) {
      setTheme('morning');
      // meio dia até 17 horas
    } else if (time.getHours() >= 12 && time.getHours() < 17) {
      setTheme('afternoon');
      // 5 horas da tarde até 
    } else if (time.getHours() >= 17 && time.getHours() < 21) {
      setTheme('evening');
      // 21 horas até 4 horas da manhã
    } else {
      setTheme('night');
    }
  }, [time.getHours(), theme])
  
  document.body.className = theme;

  return (
    <div className={`App ${theme}`}>
     <h1>Now it's {time.getHours()}:{time.getMinutes()}</h1>
     <h2>And it's {theme}</h2>
    </div>
  )
}

export default App
