# State
1. O que é `State` no React?
`state` é um objeto em react no qual faz com que o componente renderize novamente, quando o estado dos dados mudam. Além disso, `state` mantem as informações sobre um componente.

2. Qual é a diferença entre `props` e `state` no React?
`props` permite transportar dados de um componente para outro como argumento, podendo ser acessado por componentes "filhos". Enquanto o `state` mantém as informações de um componente e não pode ser acessado por componentes "filhos".


3. Como um `state` é acessado em componente React?
```js
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  
  // declara o `state`
  state = {
    count: 0,
  }

  // incrementa o valor da propriedade count, dentro do `state`
  increment(count) {
    this.setState({ count: count + 1});
  }

  render() {
    // acessa o valor do `state`
    const count = this.state.count;

    return (
      <div className='App'>
        <h1>{count}</h1>
        <button onClick={() => increment(this.state.count)}>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
```

5. Como mudar o valor de um `state` usando o `set` no React Componente?
```js
this.setState({ count: this.state.count + 1 });
```

