// Declare an empty array;
// let arr = Array();
const arr = new Array();
console.log(arr);

// Declare an array with more than 5 number of elements
let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers);

// Find the length of your array
console.log(numbers.length);

// Get the first item, the middle item and the last item of the array
console.log(numbers[0]);

// https://stackoverflow.com/questions/20904368/javascript-finding-the-most-middle-value-in-an-array
const middle = Math.floor(numbers.length / 2);
console.log(numbers[middle]);

const lastEll = numbers.length - 1;
console.log(numbers[lastEll]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [1, '2', 'Palavra', new Date(), true, null];
console.log(mixedDataTypes.length);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
//Print the array using console.log()
console.log(companies);

//Print the number of companies in the array
console.log(companies.length);

//Print the first company, middle and last company
console.log(companies[0]);
console.log(companies[middle]);
console.log(companies[companies.length - 1]);

//Print out each company
companies.forEach(el => {
  console.log(el);
});

//Change each company name to uppercase one by one and print them out
companies.forEach(el => {
  let upper = el.toUpperCase();
  console.log(upper);
});

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let joinVirgula = companies.join(', ');
joinVirgula = joinVirgula.split(' ');
let tempArr = new Array();

joinVirgula.forEach(el => {
  if (el === 'Oracle,') {
    let oracle = el.replace("Oracle,", "Oracle and ");
    tempArr.push(oracle);
  } else if (el === 'Amazon') {
    let amazon = el.replace('Amazon', 'Amazon are big IT companies');
    tempArr.push(amazon);  
  } else {
    tempArr.push(el);
  }
});

let sentence = tempArr.join(' ');
console.log(sentence);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let index = 0;
let check = companies.includes('Google') ?
      index = companies.indexOf('Google') :
      console.log('Not found');
console.log(companies[index]);

// Filter out companies which have more than one 'o' without the filter method
index = 0;
let wordWithO = Array();
companies.forEach(el => {
  let temp = el.split('');
  temp.forEach(t => {
    if(t === 'o') {
      index++;
    }
  });
  if(index === 2) {
    wordWithO.push(el);
  }
  index = 0;
});

console.log(wordWithO);

//Sort the array using sort() method
console.log(companies.sort());

//Reverse the array using reverse() method
console.log(companies.reverse());

//https://stackoverflow.com/questions/34883068/how-to-get-first-n-number-of-elements-from-an-array
// Slice out the first 3 companies from the array
console.log(companies.slice(0,3));

// Slice out the last 3 companies from the array
console.log(companies.slice(4, 7));

// Slice out the middle IT company or companies from the array
console.log(companies.slice(3, 4))

//Remove the first IT company from the array
console.log(companies.shift());
console.log(companies);

// Remove the middle IT company or companies from the array
console.log(companies.splice(3, 1));
console.log(companies);
 
// Remove the last IT company from the array
console.log(companies.pop());
console.log(companies);

// Remove all IT companies
companies.splice(0, 4); // splice() without start value and ending value not working
console.log(companies);

// continue in main.js
