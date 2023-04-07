# Operadores
## Operadores de Atribuição
O sinal de igual é usado para atribuir valores para uma variavel.

[Operadores de atribuição](/img/assignment_operators.png "Todos as formas de atribuição")

### Exemplos
```js
let firstName = 'Silas';
let country = 'Leite';
```

## Operadores aritméticos
Chamados também de operadores mátematicos.
- Adição: `+`
- Subtração: `-`
- Multiplicação: `*`
- Divisão: `/`
- Modulo: `%`
- Exponenciação: `**`

### Exemplos
```js
let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;

console.log(sum, diff, mult, div, remainder, powerOf)

const PI = 3.14; // Math.PI
let radius = 100; // length in meter

//calculate area of a circle
const areaOfCircle = PI * radius * radius;
console.log(areaOfCircle);

const gravity = 9.81;// in m/s2
let mass = 72;// in Kilogram

//calculate weight of an object
const weight = mass * gravity
console.log(weight);

const boilingPoint = 100;  // boiling point of water
const bodyTemp = 37;

console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
);
```

## Operadores de comparação
Usado para conferir se um valor é maior ou menor; ou ainda igual a outro valor.

- Usar `===` é mais seguro do que usar `==`. [Veja mais aqui](https://dorey.github.io/JavaScript-Equality-Table/).

[Operadores de Comparação](/img/comparison_operators.png "Todas a forma de realizar comparação")

### Exemplos
```js
console.log(3 > 2);
console.log(3 >= 2);
console.log(3 < 2);
console.log(2 < 3);
console.log(2 <= 3);
console.log(3 == 2);
console.log(3 != 2);
console.log(3 == '3');
console.log(3 === '3');
console.log(3 !== '3');
console.log(3 != 3);
console.log(3 !== 3);
console.log(0 == false);
console.log(0 === false);
console.log(0 == '');
console.log(0 == ' ');
console.log(0 === '');
console.log(1 == true);
console.log(1 === true);
console.log(undefined == null);
console.log(undefined === null);
console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(typeof NaN);
console.log('mango'.length == 'avocado'.length);
console.log('mango'.length != 'avocado'.length);
console.log('mango'.length < 'avocado'.length);
console.log('milk'.length == 'meat'.length);
console.log('milk'.length != 'meat'.length);
console.log('tomato'.length == 'potato'.length);
console.log('python'.length > 'dragon'.length);
```

## Operadores Lógicos
Existem três valores lógicos:
- `&&` (ampersand): `E` e `AND`.
- `||` (pipe): `Ou` e `OR`.
- `!` (negation): `Não` e `NOT`.

### Exemplos
```js
// && ampersand operator
const check = 4 > 3 && 10 > 5;
const check = 4 > 3 && 10 < 5;
const check = 4 < 3 && 10 < 5;

// || pipe or operator
const check = 4 > 3 || 10 > 5;
const check = 4 > 3 || 10 < 5;
const check = 4 < 3 || 10 < 5;

//! Negation
let check = 4 > 3;
let check = !(4 > 3);
let isLightOn = true;
let isLightOff = !isLightOn;
let isMarried = !false;
```

## Operador de incremento ou decremento
Usado para incrementar (somar uma vez) ou decrementar (subtrair uma vez) o valor armazenado em uma variavel, esse incremento pode ser `pre` ou `post`.

1. `Pre-increment`
 - `Pre-decrement`
2. `Post-increment`
 - `Post-decrement`

### Exemplos
```js
// pre
let count = 0
console.log(++count); // 1
console.log(count); // 1

count = 0;
console.log(--count); // -1
console.log(count);  // -1

// post
count = 0
console.log(count++); // 0
console.log(count); // 1

count = 0
console.log(count--); // 0
console.log(count);   // -1
```

## Operadores ternarios
Permite escrever condicionais de forma enxuta.

### Exemplos
```js
let isRaining = true;

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.');

isRaining = false;
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.');

let number = 5;
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);

number = -5;
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);
```

## Opedores de precedência
Assim como na matematica, alguns operadores tem alta precedencia para realizar comparações ou calculo antes de outros operadores. Por exemplo: multiplicação tem a precedencia mais alta do que a soma.

### Associatividade
Quando dois operadores tem a mesma prioridade de precedência, será analisado se o calculo deve ser feito da "direita para esquerda" (`(a OP1 b) OP2 c`) ou "esquerda para direita" (`a OP1 (b OP2 c)`). 

### Exemplos
```js
console.log(3 + 4 * 5); // 3 + 20
// Expected output: 23

console.log(4 * 3 ** 2); // 4 * 9
// Expected output: 36

let a;
let b;

console.log(a = b = 5);
// Expected output: 5

a = b = 5; // same as writing a = (b = 5);

const a = 4 ** 3 ** 2; // Same as 4 ** (3 ** 2); evaluates to 262144

const b = 4 / 3 / 2; // Same as (4 / 3) / 2; evaluates to 0.6666...
```

[Leia mais aqui](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)



