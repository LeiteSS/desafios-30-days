# Introducing React Hook
React Hook permite usar `state`, método de ciclo de vida e outras recursos do React sem escrever um componente classe. Hooks use o método de componente funcional em toda a aplicação. Existem: 
- Hooks basicos; e
- Hooks adicionais.

## Hooks basicos
Este tipo de hook inclui:
- `useState`
- `useEffect`
- `useContext`


### State Hook
Permite acessar um `state` sem precisar escrever a `class based` componente.

Sintaxe:
```js
import React, { useState } from 'react';

...

const [count, setCount] = useState(0);

// or
const [count, setCount] = React.useState(0);
```

O `setCount` no exemplo é usado para atualizar o estado da variavel `count`.

### [Efect Hook](https://react.dev/reference/react/useEffect)
Permite sincronizar um componente com um sistema externo. 

```js
import { useEffect } from 'react';

//useEffect(setup, dependencies?);
useEffect(() => {
  const connection = createConnection(serverUrl,roomId);
  connection.connect();
  return () => {
    connection.disconnect();
  };
}, [serverUrl, roomId]);

// ou

//React.useEffect()
React.useEffect(() => {
  const connection = createConnection(serverUrl, roomId);
  connection.connect();
    
  return () => {
    connection.disconnect();
  };
}, [serverUrl, roomId]);
```

Na sintaxe `setup`: se refere a função com a `Effect`'s logic. Pode opcionalmente retorna uma função `cleanup`. Na primeira vez o React will rodar a função `setup`. Depois de renderizar novamente (para poder atualizar) com as dependências mudadas, React irá rodar primeiro com a função `cleanup` (se tiver) com os valores antigos e, então rodar a função `setup`com os novos valores.

`dependencias`: é opcional. Onde vai todo os valores reativos referenciados dentro do codigo da função `setup`. Valores reativos incluem `props`, `state`, e todas as variaveis e funções declaradas dentro de um corpo do componente.

O retorno do `useEffect` é `undefined`.

## [Context Hook](https://react.dev/reference/react/useContext)
Permite ler e subscrever um [contexto](https://react.dev/learn/passing-data-deeply-with-context) de um componente.

```js
const theme = useContext(ThemeContext);
```

Contextos permite que o componente "pai" torne alguma informação disponivel para qualquer componente na árvore abaixo dele - não importando o quão fundo está - sem passar explicitamente através dos `props`, pois se passado através de `props` isso pode se torna verboso e inconveniente quando é necessario passar algum `prop` para algum componente que está no fundo da árvore de componente; ou se muitos componentes necessitam do mesmo `prop`. 

