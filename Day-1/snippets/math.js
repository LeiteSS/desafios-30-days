const PI = Math.PI;
console.log(PI);

// 3 to round values to the nearest number
console.log(Math.round(PI));

// 3 rounding down
console.log(Math.floor(PI));

// 4 rounding up
console.log(Math.ceil(PI));

console.log(Math.round(9.81));

console.log(Math.min(-5, 3, 20, 4, 5, 10));
console.log(Math.max(-5, 3, 20, 4, 5, 10));

const randNum = Math.random();
console.log(randNum);

// cria um numero aleatorio de 0 a 10
const num = Math.floor(Math.random () * 11);
console.log(num);

let randomNum = Math.random();
let numBtnZeroAndTen = randomNum * 11;

console.log(numBtnZeroAndTen);

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
console.log(randomNumRoundToFloor);


// Absolute value
console.log(Math.abs(-10));

// Square root
console.log(Math.sqrt(100));

// Pontenciação
console.log(Math.pow(3, 2))

console.log(Math.E);

// Logaritmo
console.log(Math.log(2));
console.log(Math.log(10));

// Retorna o logaritmo natural de 2 e 10, respectivamente
console.log(Math.LN2);
console.log(Math.LN10);

// Trigonometria
Math.sin(0);
Math.sin(60);

Math.cos(0);
Math.cos(60);