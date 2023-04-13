# Forms
1. Qual é a importância de um `form`?
No `form` será passado os dados de um cliente, funcionario, produto, usuario, etc. A partir dos dados passados é possivel instânciar um novo objeto e persistir esses dados posteriormente.

2. Quais tipos de `input` você conhece?
`text`, `number`, `email` e `password`, `datetime`.

3. Mencione no minimo quatro atributos de um elemento `input`
`type`, `name`, `value`, `placeholder`.

4. Qual é a importancia do `htmlFor`?
`htmlFor` "conecta" a `label` com o `input`, quando o usuario clicar na `label` o mouse será levado para o `input`.

5. Escreva um tipo de `input`, no qual não foi dado no exemplo, se houve.
Nos exemplos foram usados: `checkbox`, `radio`, `number`, `color`, `date`, `tel`, `email`, `text`, `file`, `button`, `submit`, `search`, `reset`, `time`, `week`, `month`, `datetime-local`, `hidden`, `image`, `url`, `range`, `password`.

6. O que é `controlled input`?
`controlled input` é aquele que recebe valores do `state` do componente. Um exemplo desse tipo de `input` está logo abaixo:
```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  // declaring state
  // initial state
  state = {
    firstName: '',
  }
  handleChange = (e) => {
    const value = e.target.value
    this.setState({ firstName: value })
  }

  render() {
    /*
     accessing the state value and 
     this value will injected to the input in the value attribute
     */

    const firstName = this.state.firstName
    return (
      <div className='App'>
        <label htmlFor='firstName'>First Name: </label>
        <input
          type='text'
          id='firstName'
          name='firstName'
          placeholder='First Name'
          value={firstName}
          onChange={this.handleChange}
        />
        <h1>{this.state.firstName}</h1>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

7. Qual tipo de evento é usado para "escutar" as mudanças de um campo `input`?
`onChange`

8. Quando é necessario escrever um `controlled input`?
Quando é necessario persistir os dados ou enviar dados para outros componentes vindo de um formulario.

9. Qual é o tipo de valor de uma checked checkbox?
É um objeto que possui as propriedades nome (nome da checkbox que foi marcada) e valor (string).

10. Quando usar o `onChange`, `onBlur`, `onSubmit`?
[`onChange`](https://www.w3schools.com/jsref/event_onchange.asp): ocorre quando o valor de um elemento HTML é mudado.
[`onBlur`](https://www.w3schools.com/jsref/event_onblur.asp):  ocorre quando o elemento HTML perde o foco (*focus*).
[`onSubmit`](https://www.w3schools.com/jsref/event_onsubmit.asp): ocorre quando um formulario é submetido.

11. Qual é a necessidade de escrever `e.preventDefault()` dentro de um método `submit handler`.
Usando o `preventDefault()` é chamado previne que a pagina será recarregada quando o usuario clicar em `submit`.

12. Como vincular (*bind*) dados em React?
Usando a propriedade `value={nome_da_variavel_onde_sera_salvo}`.

13. O que é validação?
Validação é ação ou processo de checagem ou provar a validade ou acurácia de algo neste dados de caso.

14. Quais são os tipos de eventos é usado para validar um `input`?
o `input` é validado usando o `state` do React. Usando o `touched`:
```js
this.state.touched.firstName && this.state.firstName.length < 3
```


