# Variaveis
Variaveis são usadas para armazenar um dados em uma localização da memoria. Quando uma variavel é declarada, uma localização da memoria é reservada. Quando uma variavel é atribuida para um valor (dado), o espaço na memoria é preenchido com aquele dado.

Para declarar uma variavel em javascript, existem três palavras reservadas:
- `var`: Não é recomentado usar essa palavra reservada para declarar variaveis, pois é possivel "vazar" dados.
- `let`: Para variaveis que mudam de tempos em tempos.
- `const`: Para variaveis que não mudam o seu valor; são constantes;

## Exemplo
```js
/* 
  atribuindo um valor para uma varivel
  Não precisa passar o tipo!!

  let nameOfVariable = value
*/


let firstName = 'Silas';
let lastName = 'Leite';
let country = 'Brazil';
let city = 'Poá';
let age = 24;
let isSingle = true;

console.log(firstName, lastName, country, city, age, isSingle);
```

Variaveis constantes:
```js
const gravity = 9.81;
const boilingPoint = 100;
const PI = 3.41;

console.log(gravity, boilingPoint, PI);
```

Declarando em uma linha:
```js
let name = 'Silas', job = 'student', live = 'Brazil';

console.log(name, job, live);
```

## Boas práticas
Para nomear as variaveis existem algumas boas práticas:
- Não deve começar com um numero;
- Não permite caracteres especiais além do sinal de dolar e o sublinhado.
- Segue a convenção `camelCase`.
- Não pode ter espaço entre as palavras.

### Exemplos
Variaveis validas:
```js
// convenção camelCase
firstName
lastName

country
city
capitalCity
age
isMarried

first_name
last_name
is_married
capital_city

num1
num_1
_num_1
$num1
year2020
year_2020
```
Variaveis invalidas:
```js
first-name
1_num
num_#_1
```

