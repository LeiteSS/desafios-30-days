# Components and Props
1. O que é props em um React componente?
Significa propriedades e é usado para passar dados de um componente para outro componente; na maioria das vezes do componente pai para o componente filho. É possivel dizer que `props` é um portador de dados transportando dados de um lado para o outro.


2. Como acessar um props em um componente React?
```js
const Skills = (props) => <ul>{props.skills}</ul>

const App = () => {
  <div className='app'>
    <Skills skills={['HTML', 'CSS', 'JavaScript']} />
  </div>
}

// ouuuu

const getUserInfo = (firstName, lastName, country) => {
  return `${firstName} ${lastName}. Lives in ${country}.`;
}

getUserInfo('Silas', 'Leite', 'Brazil');


const User = (props) => {
  return (
    <div>
      <h1>
          {props.firstName}
          {props.lastName}
      </h1>
      <small>{props.country}</small>
    </div>
  );
}

<User firstName='Silas' lastName='Leite' country='Brazil' />
```


3. Que tipo de dados pode ser passado como propos para o componente?
Strings, Numbers, Boolean, Array, Object:
```js
import React from 'react';
import ReactDom from 'react-dom';

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aughust',
    'September',
    'October',
    'November',
    'December',
  ];

  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const date = time.getDate();
  
  return `${month} ${date} ${year}`;
}

const Header = (props) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.data.welcome}</h1>
        <h2>{props.data.title}</h2>
        <h3>{props.data.subtitle}</h3>

        <p>
          {props.data.author.firstName} {props.data.author.lastName}
        </p>
        <small>{showDate(props.data.date)}</small>
      </div>
    </header>
  );
}

const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'Javascript Library',
    author: {
      firstName: 'Silas',
      lastName: 'Leite',
    },

    date: new Date(),
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
```

4. O que é `propTypes`?
É um pacote que ajuda a atribuir o tipo de dado do props que foi passado para o componente.

5. Qual é o padrão do `propTypes` (`defaultProps`)?
`defaultProps` pode ser usado quando é necessario definir um tipo padrão para o props que está indo para um componente.