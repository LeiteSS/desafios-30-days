let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3   
let falseValue = 4 < 3

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

alert(message);

let number = prompt('Enter number', 'number goes here');
console.log(number);

const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // true ou false

let empty = null;
console.log(empty);

console.log(3 + 4 * 5); // 3 + 20
// Expected output: 23

console.log(4 * 3 ** 2); // 4 * 9
// Expected output: 36

a;
b;

console.log(a = b = 5);
// Expected output: 5

a = b = 5; // same as writing a = (b = 5);

const a = 4 ** 3 ** 2; // Same as 4 ** (3 ** 2); evaluates to 262144

const b = 4 / 3 / 2; // Same as (4 / 3) / 2; evaluates to 0.6666...

isRaining = true;

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.');

isRaining = false;
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.');

number = 5;
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);

number = -5;
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);

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

check = 4 > 3;
check = !(4 > 3);
isLightOn = true;
isLightOff = !isLightOn;
isMarried = !false;

// && ampersand operator
check = 4 > 3 && 10 > 5;
check = 4 > 3 && 10 < 5;
check = 4 < 3 && 10 < 5;

// || pipe or operator
check = 4 > 3 || 10 > 5;
check = 4 > 3 || 10 < 5;
check = 4 < 3 || 10 < 5;

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

let firstName;
console.log(firstName);