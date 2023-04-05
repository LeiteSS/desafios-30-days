# Conversão de Tipo
Casting é a conversão de um tipo para outro. O javascript dá um erro em algum operações aritméticas.

É possivel realizar a conversão de:
 - String para Int: usando o `parseInt()`, `Number()` ou um sinal de mais (`+`).
 - String para Float: usando o `parseFloat()`, `Number()` ou um sinal de mais (`+`).
 - Float para Int: usando o `parseInt()`.

## Exemplos
```js
let num = '10';

let numInt = parseInt(num);
console.log(numInt);

let numInt2 = Number(num);
console.log(numInt2);

let numInt3 = +num;

console.log(numInt3);


num = '9.81';

let numFloat = parseFloat(num);
console.log(numFloat);

let numFloat2 = Number(num);
console.log(numFloat2);

let numFloat3 = +num;
console.log(numFloat3);

num = 9.81;
let numInt4 = parseInt(num);

console.log(numInt4);
```