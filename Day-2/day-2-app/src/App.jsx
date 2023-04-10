import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // JSX sytax
  // we don't need to use quotes with JSX


  /*
    Primeiro dia do React usando o TypeScript.
    Projeto gerado no Vite.
  */
  const jsxElement = <h1>I am a JSX Element</h1>
  const welcome = <h1>Welcome to 30 days of react Challenge</h1>
  const title = <h2>Getting Started React</h2>
  const date = <small>10 de abril de 2023</small>
  const author = <p>Leite, S. S.</p>
  const header = (
    <header>
      {jsxElement}
      {welcome}
      {title}
      {date}
      {author}
    </header>
  );
  
  


  const [count, setCount] = useState(0)

  return (
    <>
      {header}
      <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
    </>
  )
}

export default App
