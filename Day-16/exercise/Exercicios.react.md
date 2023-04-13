# Componente de Alta Prioridade
In javascript, uma função de alta prioridade é uma função que carrega outra função como parametro ou retorna outra função. Similar a isso, um componente de alta prioridade, recebe como parÇametro um componente e retorna outro componente.

```js
import React from 'react';

const higherOrderComponent = (Component) => {
  return (props) => {
    return <Component {...props} />
  }
}
```

1. O que é uma função de alta prioridade?
Um função que recebe outra função passado por parâmetro e retorna uma função.

2. O que é um componente de alta prioridade?
Um componente que recebe outro componente passado por parâmetro e retorna outro componente.

3. Qual é a diferença entre função de alta prioridade e componente de alta prioridade?
Uma função Javascript simples não pode ser usada na interface do usuario, enquanto o componente sim. Entretatno, um componente poderá ser usado apenas no React.

4. Um componente de alta prioridade pode ajudar a melhorar um componente? **True**; componente de alta prioridade (*High Order Component (HOC)*), ajuda a tornar os componentes reutilizaveis e melhorar um componente com estilo e funcionalidade. 