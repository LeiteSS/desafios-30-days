# useRef
`useRef` é usado para obter dados de `inputs` ou para acessar qualquer elemento DOM na aplicação React.

O `useRef` retorna um objeto ref mutavel, no qual a propriedade atual é inicializada para passar argumentos (`initialValue`). O objeto retornado será persistido para a vida inteira do objeto.

- `uncontrolled input`:
```js
import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const ref = useRef(null)
  const onClick = () => {
    let value = ref.current.value
    alert(value)
  }
  return (
    <div className='App'>
      <h1>How to use data from uncontrolled input using useRef</h1>
      <input type='text' ref={ref} />
      <br />
      <button onClick={onClick}>Get Input Data</button>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

- Permite acionar o focus do evento em um `input`:
```js
import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const ref = useRef(null)
  const onClick = () => {
    ref.current.focus()
  }
  return (
    <div className='App'>
      <h1>How to focus on input element useRef</h1>
      <input type='text' ref={ref} />
      <br />
      <button onClick={onClick}>Click to Focus on input</button>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

- Obter o conteúdo vindo da arvore de DOM:
```js
import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const ref = useRef(null)
  const onClick = () => {
    let content = ref.current.textContent
    alert(content)
    console.log(content)
  }
  return (
    <div className='App'>
      <h1 ref={ref}>How to getting content from the DOM tree</h1>
      <button onClick={onClick}>Getting Content</button>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

- É possivel acessar e estilizar um elemento vindo da arvore de DOM:
```js
import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const ref = useRef(null)
  const onClick = () => {
    ref.current.style.backgroundColor = '#61dbfb'
    ref.current.style.padding = '50px'
    ref.current.style.textAlign = 'center'
  }
  return (
    <div className='App'>
      <h1 ref={ref}>How to style HTML from the DOM tree using useRef</h1>
      <button onClick={onClick}>Style it</button>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement
```
