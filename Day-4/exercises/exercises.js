// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let input = prompt('Enter your year');

let year = parseInt(input);
if (year >= 18) {
  alert(`You are ${year}. You are old enough to drive`);
} else {
  let restant = 18 - year; 
  alert(`You are left with ${restant} years to drive.`);
}

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = prompt('Enter your age');;
let yourAge = 30;
age = parseInt(myAge) - yourAge;

check = myAge > yourAge ?
    alert(`I am ${age} years older than you.`) :
    alert(`I am ${-(age)} years newer than you.`);

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = 4
let b = 3
//using if else
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}

//ternary operator.
check = a > b ? 
          console.log(`${a} is greater than ${b}`) : // true
          console.log(`${a} is less than ${b}`); // false

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let num = prompt('Enter a number');

check = parseInt(num) % 2 === 0 ?
          alert(`${num} is a even number`) :
          alert(`${num} is an odd number`);

// Write a code which can give grades to students according to theirs scores:
let scores = prompt('Enter students\' score');

let score = parseInt(scores);

console.log(score);

if (score >= 80) {
  alert('Student\'s grade is A');
} else if (score >= 70) {
  alert('Student\'s grade is B');
} else if (score >= 60) {
  alert('Student\'s grade is C');
} else if (score >= 50) {
  alert('Student\'s grade is D');
} else if (score >= 0) {
  alert('Student\'s grade is F');
} else {
  alert('It must to be a natural number');
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
let month = prompt('Enter month');

// September, October or November, the season is Autumn.
if (month === 'September' || month === 'October' || month === 'November') {
  alert('The season is Autumn');
} else if (month === 'December' || month === 'January' || month === 'February') {
  alert('The season is Winter');
} else if  (month === 'March' || month === 'April' || month === 'May') {
  alert('The Season is Spring');
} else if (month === 'June' || month === 'July' || month === 'August') {
  alert('The Season is Summer');
}

//Check if a day is weekend day or a working day. Your script will take day as an input.
let day = prompt('What is the day today ?');

let weekday = day.toLowerCase();
console.log(weekday);

let firstChar = weekday[0];
let restString = weekday.substring(1);

let week = firstChar.toUpperCase() + restString.toLowerCase();

if (weekday === 'monday' || weekday === 'tuesday' || weekday === 'wednesday' || weekday === 'thursday' || weekday === 'friday') {
  alert(`${week} is a working day.`);
} else if (weekday === 'saturday' || weekday === 'sunday') {
  alert(`${week} is a weekend`);
}

// Write a program which tells the number of days in a month.
month = prompt('Enter a month');
let monthNumber = 0;

switch (month) {
  case 'January':
    monthNumber = 1;
    break;
  case 'February':
    monthNumber = 2;
    break;
  case 'March':
    monthNumber = 3;
    break;
  case 'April':
    monthNumber = 4;
    break;
  case 'May':
    monthNumber = 5;
    break;
  case 'June':
    monthNumber = 6;
    break;
  case 'July':
    monthNumber = 7;
    break;
  case 'August':
    monthNumber = 8;
    break;
  case 'September':
    monthNumber = 9;
    break;
  case 'October':
    monthNumber = 10;
    break;
  case 'November':
    monthNumber = 11;
    break;
  case 'December':
    monthNumber = 12;
    break;
  default:
    monthNumber = 13;
    break;
}

let daysInMonth = new Date(2023, monthNumber, 0).getDate();
alert(`${month} has ${daysInMonth} days.`);

// Write a program which tells the number of days in a month, now consider leap year.
// The year is a multiple of 400.
// The year is a multiple of 4 and not a multiple of 100.
month = prompt('Enter a month');
let yearInput =  prompt('Enter a year');

year = parseInt(yearInput);

switch (month) {
  case 'January':
    monthNumber = 1;
    break;
  case 'February':
    monthNumber = 2;
    break;
  case 'March':
    monthNumber = 3;
    break;
  case 'April':
    monthNumber = 4;
    break;
  case 'May':
    monthNumber = 5;
    break;
  case 'June':
    monthNumber = 6;
    break;
  case 'July':
    monthNumber = 7;
    break;
  case 'August':
    monthNumber = 8;
    break;
  case 'September':
    monthNumber = 9;
    break;
  case 'October':
    monthNumber = 10;
    break;
  case 'November':
    monthNumber = 11;
    break;
  case 'December':
    monthNumber = 12;
    break;
  default:
    monthNumber = 13;
    break;
}

if (year % 400 === 0 && year % 4 === 0) {
  let daysInMonth = new Date(year, monthNumber, 0).getDate();
  alert(`${month} has ${daysInMonth} days. It\'s a leap year`);
} else {
  let daysInMonth = new Date(year, monthNumber, 0).getDate();
  alert(`${month} has ${daysInMonth} days. It\'s not a leap year`);
}