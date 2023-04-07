// Level 1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Silas';
let lastName = 'Leite';
let country = 'Brazil';
let city = 'Poá';
let age = 24;
let isMarried = false;
let year = new Date();

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year.getFullYear());

//Check if type of '10' is equal to 10
console.log('10' === 10);

//Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10);

//Boolean value is either true or false.
//Write three JavaScript statement which provide truthy value.
if (10 > 9) {
  console.log('Verdadeiro');
}

if (year !== null) {
  console.log('Verdadeiro');
}

if (country === 'Brazil') {
  console.log('Verdadeiro');
}


//Write three JavaScript statement which provide falsy value.
if (year.getFullYear() === 2010) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

if (year === null) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

if (789 < 432.654) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

/*
Figure out the result of the following comparison expression 
first without using console.log(). After you decide the 
result confirm it using console.log()
*/
//4 > 3-true 
console.log(4 > 3);
//4 >= 3 true 
console.log(4 >= 3);
//4 < 3 false 
console.log(4 < 3);
//4 <= 3 false 
console.log(4 <= 3);
//4 == 4 true 
console.log(4 == 4);
//4 === 4 true 
console.log(4 === 4);
//4 != 4 false 
console.log(4 != 4);
//4 !== 4 false 
console.log(4 !== 4);
//4 != '4' false 
console.log(4 != '4');
//4 == '4' true 
console.log(4 == '4');
//4 === '4' false 
console.log(4 === '4');
//Find the length of python and jargon and make a falsy comparison statement.
let python = 'python';
let jargon = 'jargon';

if (python.length !== python.length) {
  console.log('O tamanho é diferente');
} else {
  console.log('O tamanho é igual');
}

//Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
//4 > 3 (true) && 10 < 12 (true) - true
console.log(4 > 3 && 10 < 12);
//4 > 3 (true) && 10 > 12 (false) - false
console.log(4 > 3 && 10 > 12);
//4 > 3 (true) || 10 < 12 (true) - true
console.log(4 > 3 || 10 < 12);
//4 > 3 (true) || 10 > 12 (false) - true
console.log(4 > 3 || 10 > 12);
//!(4 > 3) - false
console.log(!(4 > 3));
//!(4 < 3) - true
console.log(!(4 < 3));
//!(false) - true
console.log(!(true));
//!(4 > 3 && 10 < 12) - false
console.log(!(4 > 3 && 10 < 12));
//!(4 > 3 && 10 > 12) - true
console.log(!(4 > 3 && 10 > 12));
//!(4 === '4') - true
console.log(!(4 === '4'));
//There is no 'on' in both dragon and python - false
let dragon = 'dragon';

if (python.endsWith('on') === dragon.endsWith('on')) {
  console.log('There is \'on\' in both dragon and python');
} else {
  console.log('There is no \'on\' in both dragon and python');
}

//Use the Date object to do the following activities
//What is the year today?
console.log(year.getFullYear());
//What is the month today as a number?
console.log(year.getMonth() + 1);
//What is the date today?
console.log(year.getDate());
//What is the day today as a number?
console.log(year.getDay());
//What is the hours now?
console.log(year.getHours());
//What is the minutes now?
console.log(year.getMinutes());
//Find out the numbers of seconds elapsed from January 1, 1970 to now.
const secondFrom1970ToNow = Date.now();
console.log(secondFrom1970ToNow);

// Level 2
// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
/*
Enter base: 20
Enter height: 10
The area of the triangle is 100
*/

let base = prompt('Enter the base');
let height = prompt('Enter the height');

let area = 0.5 * parseFloat(base) * parseFloat(height);
alert(`The area of the triangle is ${area}`);

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
/*
Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12
*/
let sideA = prompt('Enter side a');
let sideB = prompt('Enter side b');
let sideC = prompt('Enter side c');

let perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);
alert(`The perimeter of the triangle is ${perimeter}`);

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt('Enter the length');
let width = prompt('Enter the width');

let areaRectangle = parseFloat(length) * parseFloat(width);
alert(`The area of the rectangle is ${areaRectangle}`);

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const PI = 3.14;
let radius = prompt('Enter radius');
let areaCircle = PI * parseFloat(radius) * parseFloat(radius);
let circumference = 2 * PI * parseFloat(radius);

alert(`Area of the circle: ${areaCircle} and its circumference: ${circumference}`);

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
// y = mx + b
let m = 2;
let b = -2;

// calculate y-intercept (substitua o x por zero)
let y = m * 0 + b;
console.log(y); // (0, -2)

let x = -(b) / -m;
console.log(x); // (-1, 0);

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let y1 = 2;
let y2 = 2;
let x1 = 6;
let x2 = 10;

m = (y2 - y1) / (x2 - x1);
console.log(m);

// Compare the slope of above two questions.
y = m * 0 + b;
console.log(y); // -2
x = -(b) / -m;
console.log(x); // -Infinity

//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
x = -3;
y = x ** 2 + 6 * x + 9; // -3^2 = 9 + 9 = 18; 6 * -3 = -18 
console.log(y); // = 0

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = prompt('Enter hours');
let ratePerHours = prompt('Enter rate per hour');

let earning = parseFloat(hours) * parseFloat(ratePerHours);
alert(`Your weekly earning is ${earning}`);

//If the length of your name is greater than 7 say, your name is long else say your name is short.
let check = firstName > 7 ? 
    console.log('Your name is long') :
    console.log('Your name is short');


// Compare your first name length and your family name length and you should get this output.
check = firstName.length > lastName.length ? 
    console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`) :
    console.log(`Your family name, ${lastName} is longer than your first name, ${firstName}`);

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 24;
let yourAge = 30;
age = myAge - yourAge;

check = myAge > yourAge ?
    console.log(`I am ${age} years older than you.`) :
    console.log(`I am ${-(age)} years newer than you.`);

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let birthYear = prompt('Enter birth year');
let currentYear = new Date();

let difference = currentYear.getFullYear() - parseInt(birthYear);
if (difference >= 18) {
  alert(`You are ${difference}. You are old enough to drive`);
} else {
  let restant = 18 - difference; 
  alert(`You are ${difference}. You will be allowed to drive after ${restant} years`);
}

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let yearsYouLive = prompt('Enter number of years you live');

let lived = parseInt(yearsYouLive);

let current = new Date();

let yearBorned = current.getFullYear() - lived;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
let borned = new Date(yearBorned, 0, 1);

difference = Math.ceil(current.getTime() - borned.getTime());
alert(`You lived ${parseInt(difference)} seconds`);

// Create a human readable time format using the Date time object
year = current.getFullYear();
let month = current.getMonth() + 1;
let day = current.getDay();
let hour = current.getHours();
let minutes = current.getMinutes();
// YYYY-MM-DD HH:mm
console.log(`${year}-0${month}-0${day} ${hour}:${minutes}`);
//DD-MM-YYYY HH:mm
console.log(`0${day}-0${month}-${year} ${hour}:${minutes}`);
//DD/MM/YYYY HH:mm
console.log(`0${day}/0${month}/${year} ${hour}:${minutes}`);

// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//YYY-MM-DD HH:mm eg. 20120-01-02 07:05

if (hours < 10 && minutes < 10) {
  console.log(`${year}-0${month}-0${day} 0${hour}:0${minutes}`);
} else {
  console.log(`${year}-0${month}-0${day} ${hour}:${minutes}`);
}






