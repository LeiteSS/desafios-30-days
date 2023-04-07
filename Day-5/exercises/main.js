// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
//https://stackoverflow.com/questions/58580824/in-javascript-how-to-import-an-array-from-another-javascript-file
const countries = require('./countries');
const webTechs = require('./web_techs');

let countriesArr = countries.countries;
let webTechsArr = webTechs.webTechs;

// First remove all the punctuations and change the string to array and count the number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let words = text.split(' ');
console.log(words);
console.log(words.length);

//In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart);
let indexOfMeat = shoppingCart.indexOf('Meat');

// add 'Meat' in the beginning of your shopping cart if it has not been already added
if (indexOfMeat === -1) {
 shoppingCart.unshift('Meat');
} else {
  console.log('Meat already was added to the list');
}

console.log(shoppingCart);

let indexOfSugar = shoppingCart.indexOf('Sugar');

if (indexOfSugar === -1) {
  shoppingCart.push('Sugar');
} else {
  console.log('Suga already was added to the list');
}

console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey
let isAllergicToHoney = true;

if (isAllergicToHoney) {
  let indexOfHoney = shoppingCart.indexOf('Honey');
  // https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript
  shoppingCart.splice(indexOfHoney, 1);
}

console.log(shoppingCart);

// modify Tea to 'Green Tea'
let indexOfTea = shoppingCart.indexOf('Tea');
shoppingCart[indexOfTea] = 'Green Tea';
console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let indexOfEthiopia = countriesArr.indexOf('Ethiopia');

if (indexOfEthiopia === -1) {
  countriesArr.push('Ethiopia');
} else {
  countriesArr.forEach(el => {
    if (el.includes('Ethiopia')) {
      console.log(el.toUpperCase());
    }
  })
}

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
let indexOfSass = webTechsArr.indexOf('Sass');

if (indexOfSass === -1) {
  webTechsArr.push('Sass');
  console.log(webTechsArr);
} else {
  console.log('Sass is a CSS preprocess');
}

// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack = Array();

frontEnd.forEach(ell => {
  fullStack.push(ell);
});

frontEnd.forEach(ell => {
  fullStack.push(ell);
})

console.log(fullStack);

// The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
ages.sort();
console.log(ages);
let max = 0;
let min = 0;
ages.forEach(ell => {
  if (max === 0 && min === 0) {
    max = ell;
    min = ell;
  }

  if (max < ell) {
    max = ell;
  } else if (min > ell) {
    min = ell;
  }  
});

console.log('Minimo: ', min);
console.log('Maximo: ', max);

// Find the median age(one middle item or two middle items divided by two)
const middle = Math.floor(ages.length / 2);
console.log(ages[middle]);

//Find the average age(all items divided by number of items)
let sum = 0;
ages.forEach(el => {
  sum = sum + el;
});

let averageAge = sum / ages.length;
console.log(averageAge);

//Find the range of the ages(max minus min)
let range = max - min;
console.log(range);

//Compare the value of (min - average) and (max - average), use abs() method 
let averageMin = Math.abs(min - averageAge);
let averageMax = Math.abs(max - averageAge);

console.log('Min - Average = ', averageMin);
console.log('Max - average = ', averageMax);
//1.Slice the first ten countries from the countries array
countriesArr.slice(0, 9);
console.log(countriesArr);

let middleCountry = Math.floor(countriesArr.length / 2);
console.log(countriesArr[middleCountry]);

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
//https://stackoverflow.com/questions/9933662/split-array-into-two-arrays
let partI = Array(5);
let partII = Array(5);
if (countriesArr.length % 2 === 0) {
  partI = countriesArr.slice(0, middleCountry);
  partII = countriesArr.slice(middleCountry + 1);
} else {
  partI.length = 6;
  partI = countriesArr.slice(0, middleCountry + 1);
  partII = countriesArr.slice(middleCountry + 1);
}

console.log(partI);
console.log(partII);

