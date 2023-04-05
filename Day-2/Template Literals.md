# Template Literals
Template Literals ou Template Strings são strings que usam a crase e podem recebem dados vindo de variáveis usando o `${}`.

Além de trazer os dados dinâmicos, com o template string ou interpolação de strings é possivel adicionar expressões lógicas (operações ternarias) ou de aritmética.

## Exemplo
```js
console.log(`The sum of 2 and 3 is 5`);
let a = 2;
let b = 3;
console.log(`The sum of ${a} and ${b} is ${a + b}`);

let firstName = 'Silas';
let lastName = 'Leite';
let country = 'Brazil';
let city = 'Poá';
let language = 'Portuguese';
let job = 'estudante';
let age = 24;
let fullName = firstName + ' ' + lastName

let personTwo = `I am ${fullName}. I am ${age}. I live in ${country}.`; //ES6
let personThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`;
console.log(personTwo);
console.log(personThree);
```
```js
let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`)
```