# Objetos de Data
Usado para manipular a data: dia, mês, ano, hora, minuto ou segundo.

[Métodos para manipular o tempo](/img/date_time_object.png "Todos os métodos para manipulação do tempo")

## Exemplos
```js
// instanciando um objeto de tempo
const now = new Date();
console.log(now);

// retorna o ano atual
console.log(now.getFullYear());
// retorna o mês atual
console.log(now.getMonth());
// retorna o mês atual
// janeiro é 0, fevereiro é 1... Dezembro é 11
console.log(now.getDate());

// obtém o dia atual
// domingo é 0, Segunda é 1... Sábado é 6
console.log(now.getDay());

console.log(now.getHours());

console.log(now.getMinutes());

console.log(now.getSeconds());

// retorna os milissegundos, começando a partir de 1 de janeiro de 1970
console.log(now.getTime());

// retorna os segundos, começando a partir de 1 de janeiro de 1970
const allSeconds = Date.now();
console.log(allSeconds);

const timeInSeconds = new Date().getTime();
console.log(allSeconds == timeInSeconds);

const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();

console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
```
