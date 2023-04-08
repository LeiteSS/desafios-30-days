//Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let index = 0; index <= 10; index++) {
  console.log(index);
}

let index = 0;
while (index <= 10) {
  console.log(index);
  index++;
}

//Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let index = 10; index >= 0; index--) {
  console.log(index);
}

index = 10;
while (index >= 0) {
  console.log(index);
  index--;
}

//Iterate 0 to n using for loop
let n = 5;
for (let index = 0; index <= n; index++) {
  console.log(index);
}

//Write a loop that makes the following pattern using console.log():
/*
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/
for (let index = 0; index <= 7; index++) {
  console.log('#'.repeat(index));
}

//Use loop to print the following pattern:
/*
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/
for (let index = 0; index <= 10; index++) {
  console.log(`${index} x ${index} = ${index * index}`);
}

//Using loop print the following pattern
/*
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
*/
index = 0;
console.log('');
console.log("i\ti^2\ti^3");
do {
  console.log(`${index}\t${index ** 2}\t${index **3}`);
  index++;
} while(index <= 10);

// Use for loop to iterate from 0 to 100 and print only even numbers
for (let index = 0; index <= 100; index++) {
  if(index % 2 !== 0) {
    console.log(index);
  }
}

//Use for loop to iterate from 0 to 100 and print only odd numbers
for (let index = 0; index <= 100; index++) {
  if(index % 2 === 0) {
    console.log(index);
  }
}

//Use for loop to iterate from 0 to 100 and print only prime numbers
let count=0
let i,j 
for(j=2; j <= 100; j++) {
 for( i=1;i<=j;i++) {
   if(j%i==0) count++ 
 }

 if(count==2) console.log(j)
 
 count=0 
}

//Use for loop to iterate from 0 to 100 and print the sum of all numbers
let sum = 0;
for (let index = 0; index <= 100; index++) {
  sum = sum + index;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumEven = 0;
let sumOdd = 0;

for (let index = 0; index <= 100; index++) {
  if (index % 2 === 0) {
    sumEven = sumEven + index;
  } else {
    sumOdd = sumOdd + index;
  }
}

console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}.`);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let totalSum = Array();
totalSum.push(sumEven);
totalSum.push(sumOdd);

console.log(totalSum);

//Develop a small script which generate array of 5 random numbers
let randomNumbers = new Array();

for (let index = 0; index <= 4; index++) {
  let random = Math.random() * 100;
  randomNumbers.push(random);
}

console.log(randomNumbers);

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
let randomNumbers2 = new Array();

for (let index = 0; index <= 4; index++) {
  let randomNum = Math.random() * 100;
  const random = Symbol(randomNum);
  randomNumbers2.push(random.description);
}

console.log(randomNumbers2);

//Develop a small script which generate a six characters random id:
//https://stackoverflow.com/questions/16106701/how-to-generate-a-random-string-of-letters-and-numbers-in-javascript
let result = '';
const charset = "abcdefghijklmnopqrstuvwxyz0123456789";
for (let index = 0; index < 5; index++) {
  result += charset.charAt(Math.floor(Math.random() * charset.length));
}

console.log(result);

//Develop a small script which generate any number of characters random id:
result = '';
const randoLen = Math.floor(Math.random() * 100); 
for (let index = 0; index < randoLen; index++) {
  result += charset.charAt(Math.floor(Math.random() * charset.length));
}

console.log(result);

//Write a script which generates a random hexadecimal number.
//https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-11.php
const randoHex = (Math.random() * 0xfffff * 1000000).toString(16);
let hex = '#' + randoHex.slice(0, 6);

console.log(hex);

//Write a script which generates a random rgb color number.
let rgb =  new Array();
for (let index = 0; index < 3; index++) {
  let randomRgb = Math.floor(Math.random() * 255);
  rgb.push(randomRgb);
}

console.log(`rgb(${rgb[0]},${rgb[1]}, ${rgb[2]})`);

// Using the above countries array, create the following new array.
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

const countriesUpper = new Array();

countries.forEach(el => {
  let upper = el.toUpperCase();
  countriesUpper.push(upper);
});

console.log(countriesUpper);

//Using the above countries array, create an array for countries length'.
const countriesLength = new Array();

countries.forEach(el => {
  let lengthString = el.length;
  countriesLength.push(lengthString);
});

console.log(countriesLength);

//Use the countries array to create the following array of arrays:
const countriesFinal = new Array();

countries.forEach(el => {
  let upper = el.toUpperCase();
  let code = upper.slice(0, 3);
  let lengthString = el.length;

  countriesFinal.push([el, code, lengthString]);
});

console.log(countriesFinal);

//In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let lands = Array();
countries.forEach(el => {
  if (el.endsWith('land')) {
    lands.push(el);
  }
});

if (lands.length > 1) {
  console.log(lands);
} else {
  console.log('All these countries are without land');
}

//In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let ia = Array();
countries.forEach(el => {
  if (el.includes('ia')) {
    ia.push(el);
  }
});

if (ia.length > 1) {
  console.log(ia);
} else {
  console.log('All these countries are without land');
}

//Using the above countries array, find the country containing the biggest number of characters.
let biggest = countries[0];
countries.forEach(el => {
 if (biggest.length < el.length) {
  biggest = el;
 }
});

console.log(biggest);

//Using the above countries array, find the country containing only 5 characters.
let fiveLetter = Array();
countries.forEach(el => {
 if (el.length === 5) {
  fiveLetter.push(el);
 }
});

console.log(fiveLetter);

//Find the longest word in the webTechs array
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];

biggest = webTechs[0];
webTechs.forEach(el => {
 if (biggest.length < el.length) {
  biggest = el;
 }
});

console.log(biggest);

//Use the webTechs array to create the following array of arrays:
let techAndWordLen = Array();

webTechs.forEach(el => {
  let upperCase = el.toUpperCase();
  let wordNum = el.length;

  techAndWordLen.push([upperCase, wordNum]);
});

console.log(techAndWordLen);

//An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

let mern = '';
mernStack.forEach(el => {
  let initialLetter = el.slice(0, 1);

  mern += initialLetter;
});

console.log(mern);

//Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for (let index = 0; index < mernStack.length; index++) {
  console.log(mernStack[index]);
}

//This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruits = ['banana', 'orange', 'mango', 'lemon'];
fruits.reverse();

console.log(fruits);

//Print all the elements of array as shown below.
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];

for (let index = 0; index < fullStack.length; index++) {
  console.log(fullStack[index]);
}

//Copy countries array(Avoid mutation)
let countriesCopy = countries;

//Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
let sortedCountries = countriesCopy.sort();
console.log(sortedCountries);

//Sort the webTechs array and mernStack array
webTechs.sort();
mernStack.sort();

console.log(webTechs);
console.log(mernStack);

//Extract all the countries contain the word 'land' from the countries array and print it as array
lands = Array();
countries.forEach(el => {
  if (el.endsWith('land')) {
    lands.push(el);
  }
});

console.log(lands);

//Find the country containing the hightest number of characters in the countries array
biggest = countries[0];
countries.forEach(el => {
 if (biggest.length < el.length) {
  biggest = el;
 }
});

console.log(biggest);

//Extract all the countries containing only four characters from the countries array and print it as array
let fourLetter = Array();
countries.forEach(el => {
 if (el.length === 4) {
  fourLetter.push(el);
 }
});

console.log(fourLetter);

//Extract all the countries containing two or more words from the countries array and print it as array
let twoOrMoreWords = Array();
countries.forEach(el => {
 if (el.length >= 4) {
  twoOrMoreWords.push(el);
 }
});

console.log(twoOrMoreWords);

//Reverse the countries array and capitalize each country and stored it as an array
let capitalizeWords = Array();

countries.reverse();

countries.forEach(el => {
 let word = el.toLowerCase();

 capitalizeWords.push(word);
});

console.log(capitalizeWords);