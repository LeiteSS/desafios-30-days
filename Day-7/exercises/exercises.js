// Declare a function fullName and it print out your full name.
function fullName() {
  console.log(`Silas Leite`);
}

fullName();

//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullNameWithParam(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

let fullNamee = fullNameWithParam('Silas', 'Leite');
console.log(fullNamee);

//Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(a, b) {
  return a + b;
}

let res = addNumbers(3, 4);
console.log(res);

//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
  return length * width;
}

let area = areaOfRectangle(3.4, 5);
console.log(area);

//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}

let perimeter = perimeterOfRectangle(5, 5);
console.log(perimeter);

//A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfARectangular(length, width, height) {
	return length * width * height;
}

let volume = volumeOfARectangular(3, 3, 3);
console.log(volume);

//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfACircle(radius) {
	return Math.PI * radius * radius;
}

area = areaOfACircle(8);
console.log(area);

//Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumferenceOfACircle(radius) {
	return 2 * Math.PI * radius;
}

let circumference = circumferenceOfACircle(8);
console.log(circumference);

//Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function densityOfASubstance(mass, volume) {
	return mass / volume;
}

let density = densityOfASubstance(4, 2);
console.log(density);

//Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(distance, time) {
	return distance / time;
}

let speedTotal = speed(100, 10);
console.log(speedTotal);

//Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weightOfASubstance(mass, gravity) {
	return mass * gravity;
}

let weight = weightOfASubstance(40, 2);
console.log(weight);

//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertTemperature(celsius) {
	return (celsius * 9 / 5) + 32;
}

let fahrenheight = convertTemperature(32);
console.log(fahrenheight);

//Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
function bodyMassIndex(weight, height) {
  let bmi = weight / (height * height);

  if (bmi < 18.5) {
    console.log(`BMI: ${bmi}. Underweight`);
  } else if (bmi < 24.9) {
    console.log(`BMI: ${bmi}. Normal weight`);
  } else if (bmi < 29.9) {
    console.log(`BMI: ${bmi}. Overweight`);
  } else {
    console.log(`BMI: ${bmi}. Obese`);
  }
}

bodyMassIndex(29, 1.60);

//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
  if (month === 'September' || month === 'October' || month === 'November') {
    return 'The season is Autumn';
  } else if (month === 'December' || month === 'January' || month === 'February') {
    return 'The season is Winter';
  } else if  (month === 'March' || month === 'April' || month === 'May') {
    return 'The Season is Spring';
  } else if (month === 'June' || month === 'July' || month === 'August') {
    return 'The Season is Summer';
  }
}

let season = checkSeason('January');

//Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(a, b, c) {
  if (a > b || a > c) {
    return a;
  } else if (b > a || b > c) {
    return b;
  } else if (c > a || c > b) {
    return c;
  } else {
    return 'Equal';
  }
}

let num = findMax(0, 10, 5);
console.log(num);
num = findMax(0, -10, -2);
console.log(num);

//Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c) {
  let y = calculateY(b, c);
  let x = calculateX(a, y, b, c);

  console.log(`Valor de x: ${x}`);
  console.log(`Valor de y: ${y}`);
}

function calculateX(a, y, b, c) {
  y = y * b;
  let x = -c-y/a;
  return x;
}

function calculateY(b, c) {
  let y = -c/b;
  return y;
}

solveLinEquation(4, 2, -4);

//Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(...arguments) {
  if (arguments.length > 1 && arguments.length === 3) {
    let a = arguments[0];
    let b = arguments[1];
    let c = arguments[2];
    let d = delta(a, b, c);
    d = Math.sqrt(d);
    let x1 = calculateX1(a, b, d);
    let x2 = calculateX2(a, b, d);

    console.log(`{${x1}, ${x2}}`);

  } else {
    console.log(`{0}`);
  }
}

function delta(a, b, c) {
  let delta =  (b * b) -4 * a * c;
  return delta;
}

function calculateX1(a, b, delta) {
  let x1 = (-b - delta) / 2 * a;

  return x1;
}

function calculateX2(a, b, delta) {
  let x2 = (-b + delta) / 2 * a;
  return x2;
}

solveQuadEquation();
solveQuadEquation(1, 4, 4);
solveQuadEquation(1, -1, -2);
solveQuadEquation(1, 7, 12);
solveQuadEquation(1, 0, -4);
solveQuadEquation(1, -1, 0);
solveQuadEquation(1, -3, -10);


//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
  for(const ell of arr) {
    console.log(ell);
  }
}

let array = [1, 2, 3, 4, 5, 6];
printArray(array);

//Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
  let dateTime = new Date();

  console.log(`0${dateTime.getDate()}/0${dateTime.getMonth() + 1}/${dateTime.getFullYear()} ${dateTime.getHours()}:${dateTime.getMinutes()}`);
}

showDateTime();

//Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
function randomHexaNumberGenerator() {
  const randoHex = (Math.random() * 0xfffff * 1000000).toString(16);
  let hex = '#' + randoHex.slice(0, 6);
  return hex;  
}

console.log(randomHexaNumberGenerator());

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator() {
  const charset = "abcdefghijklmnopqrstuvwxyz0123456789";
  let id = '';
  const randoLen = Math.floor(Math.random() * 11); 
  for (let index = 0; index < randoLen; index++) {
    id += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return id;
}

//console.log(userIdGenerator());

//Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function userIdGeneratedByUser() {
  
  let ids = [];
  
  let numbersOfCharacters = arguments[0];
  let numbersOfId = arguments[1];
  
  let counter = 0;
  while(counter < numbersOfId) {
    let id = generatedId(numbersOfCharacters);
    ids.push(id);

    counter++;
  }
  
  return ids;
}

function generatedId(numbersOfCharacters) {
  let id = '';
  const charset = "abcdefghijklmnopqrstuvwxyz0123456789";
  for (let index = 0; index < numbersOfCharacters; index++) {
    id += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return id;
}

//let numbersOfCharacters = prompt('Enter a number of characters');
//let numbersOfIdsGenerated = prompt('Enter a number of Ids to generate');

//alert(userIdGeneratedByUser(numbersOfCharacters, numbersOfIdsGenerated))

console.log(userIdGeneratedByUser(11, 3));

//Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator() {
  let rgb =  new Array();
  for (let index = 0; index < 3; index++) {
    let randomRgb = Math.floor(Math.random() * 255);
    rgb.push(randomRgb);
  }

  return rgb;
}

let rgb = rgbColorGenerator();
console.log(`rgb(${rgb[0]},${rgb[1]}, ${rgb[2]})`);


//Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(numberOfHexa) {
  let hexaArr = [];
  let counter = 0;
  while (counter < numberOfHexa) {
    let hex = randomHexaNumberGenerator();
    hexaArr.push(hex);
    counter++;
  }

  return hexaArr;  
}

console.log(arrayOfHexaColors(3));

//Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(numberOfRgb) {
  let rgbArr = [];
  let counter = 0;
  while (counter < numberOfRgb) {
    let rgb = rgbColorGenerator();
    rgbArr.push(rgb);
    counter++;
  }

  return rgbArr;  
}

console.log(arrayOfRgbColors(3));

//Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
//https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function convertHexaToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

let hexConverted = convertHexaToRgb(randomHexaNumberGenerator());
console.log(hexConverted);

//Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function convertToRgbToHexa(rgb) {
  let r = rgb[0];
  let g = rgb[1];
  let b = rgb[2];
  
  return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

console.log(convertToRgbToHexa(rgbColorGenerator()));

//Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(type, numberColors) {
  let arr = []
  if (type === 'hexa') {
    arr = arrayOfHexaColors(numberColors);
    
  } else if (type === 'rgb') {
    arr = arrayOfRgbColors(numberColors);
  }
  
  return arr;
}

console.log(generateColors('rgb', 2));
console.log(generateColors('hexa', 4));
console.log(generateColors('rgb', 1));

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(arr) {
  return arr.map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
}

let arr = ['a', 'b', 'c', 'd', 'e'];
let shuffledArray = shuffleArray(arr);
console.log(shuffledArray);

//Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(number) {
  if (number < 0) {
    console.log('Numero negativos não fatoram');
  } else if (number === 0) {
    console.log(`Fatorial do ${number} é 1`);
  } else {
    let fatorial = 1;
    for (let i = 1; i <= number; i++) {
      fatorial *= i;
    }

    console.log(`O fatorial do ${number} é ${fatorial}`);
  }
}

factorial(4);
factorial(5);

//Call your function isEmpty, it takes a parameter and it checks if it is empty or not
//https://developer.mozilla.org/en-US/docs/Glossary/Falsy
function isEmpty(param) {
  if (!param) {
    return true;
  } else {
    return false;
  }
}

let emptyString;
let notEmptyString = 'aaaa';
let estaVazio = isEmpty(emptyString);
let nEstaVazio = isEmpty(notEmptyString);

console.log(estaVazio);
console.log(nEstaVazio);

//Call your function sum, it takes any number of arguments and it returns the sum.
function sum() {
  let sum = 0;
  for (const ell of arguments) {
    sum += ell;
  }

  return sum;
}

console.log(sum());
console.log(sum(1, 2, 3, 4));
console.log(sum(2, 3, 4));
console.log(sum(5, 5));

//Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      sum += array[i];
    } else {
      console.log(`Existem valores de outros tipos no arranjo, como por exemplo: ${typeof array[i]}`);
      break;
    }
  }

  return sum;
}

let array1 = [1, 2, 3, 4, 5, 6];
let arr2  = ['1', 2, '3', 4]
let arr3 = [5, 5];
let sum1 = sumOfArrayItems(array1);
console.log(sum1);
console.log(sumOfArrayItems(arr2));
console.log(sumOfArrayItems(arr3));

//Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum += element;
  }

  return sum/array.length;
}

console.log(average(array1));
console.log(average(arr3));

//Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
function modifyArray(arr) {
  if (arr.length < 5) {
    return 'item not found';
  }

  let tempArr = [];

  let counter = 0;
  arr.forEach(ell => {
    if(counter === 4) {
      let upper = ell.toUpperCase();
      tempArr.push(upper);
    } else {
      tempArr.push(ell);
    }
    counter++;
  });

  return tempArr;
}

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));

//Write a function called isPrime, which checks if a number is prime number.
function isPrime(number) {
  let isPrime = true;
  if (number === 1) {
    console.log('Nem primo nem composto');
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`${number} é um numero primo`);
    } else {
      console.log(`${number} não é primo`);
    }
  } else {
    console.log('Numero menor do que 1');
  }
}

isPrime(5);
isPrime(1);
isPrime(-1);
isPrime(3);
isPrime(18);

//Write a functions which checks if all items are unique in the array.
function uniqueElement(array) {
  let tempEl;
  for (let i = 0; i < array.length; i++) {
    if (tempEl !== array[i]) {
      tempEl = array[i];
    } else {
      return false;
    }
  }
  return true;
}

console.log(uniqueElement([1, 1, 2, 3, 4]));
console.log(uniqueElement([1, 2, 3, 4, 5]));
console.log(uniqueElement([6, 7, 4, 4, 5]));
console.log(uniqueElement([6, 8, 3, 4, 5]));
console.log(uniqueElement([6, 8, 3, 4, 5]));

//Write a function which checks if all the items of the array are the same data type.
function checkDataType(array) {
  let tempEl = array[0];
  for (let i = 0; i < array.length; i++) {
    if (typeof tempEl === typeof array[i]) {
      tempEl = array[i];
    } else {
      return false;
    }
  }
  return true
}

console.log('');
console.log(checkDataType([1, 1, 2, 3, 4]));
console.log(checkDataType([1, 1, 2, 3, 4]));
console.log(checkDataType(['1', '2', 3, '4', 5]));
console.log(checkDataType(['1', '2', '3', '4', '5']));
console.log(checkDataType(['1', 2]));

//JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVariable() {
  let regex = /^[a-zA-Z0-9\$_]+$/g
  let variable = arguments[0]; // altera o nome da variavel
  const [variableName] = Object.keys({ variable });

  if (regex.test(variableName)) {
    return true;
  } else {
    return false;
  }
}

let $TEST = '';
let _TEST = '';

console.log(isValidVariable(_TEST));
console.log(isValidVariable($TEST));

// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
function sevenRandomNumbers() {
  let array = [];
  for (let i = 0; i < 7; i++) {
    let randomNum = Math.random() * 10;

    array.push(parseInt(randomNum));
  }
  
  return array;
}

console.log(sevenRandomNumbers());

//Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Iceland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];

function reverseCountries(countries) {
  let copy = countries;

  return copy.reverse();
}

console.log(reverseCountries(countries));