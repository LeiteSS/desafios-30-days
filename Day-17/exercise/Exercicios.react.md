# React Router
1. Qual pacote é usado para implementar as rotas em React?
**React-dom-router**

2. Qual é o export padrão do **react-router-dom**?
```js
import { BrowserRouter as Router } from 'react-router-dom'
``` 

3. Qual é o uso dos seguintes componentes (Route, NavLink, Switch, Redirect, Prompt)?

**BrowserRoute**: Muitas vezes é renomeado por Router e é o um componente que permite agrupar a rota do aplicativo.

**Route**: Permite navegar por cada componente. É um caminho de um componente para outro. Tem dois `props` requeridos: o caminho e o componente/render que deverá ser renderizado quando o o usuario acessar determinado caminho.

**NavLink**: Permite navegar por cada componente, ele não recarrega a pagina. Esse componente é usado na Navbar.
```js
<NavLink to='/'>Home</NavLink>
```
**Switch**: Permite que apenas que um (o) componente seja renderizado.

**Redirect**: Ajuda a redirecionar o usuario para uma rota baseado em alguma condição. Se for administrador será redirecionado para paginas relacionado ao administrador, se for usuario comum será redirecionado para paginas permitido para esse tipo de usuario.
```js
<Route
              path='/challenges'
              component={(props) => {
                return this.state.isLoggedIn ? (
                  <Challenges {...props} />
                ) : (
                  <Redirect to='/user/asabeneh' />
                )
              }}
            />
```
**Prompt**: Avisa o usuario que ele está saindo sem concluir a tarefa na pagina. Recebe dois `props` no qual são: quando e a mensagem.
```js
<Prompt
  when={formIsHalfFilledOut}
  message="Are you sure you want to leave?"
/>

```
