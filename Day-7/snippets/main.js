// function without parameter,  a function which make a number square
function square() {
  let num = 2
  let sq = num * num
  console.log(sq)
}

square() // 4

// function without parameter
function addTwoNumbers() {
  let numOne = 10
  let numTwo = 20
  let sum = numOne + numTwo

  console.log(sum)
}

addTwoNumbers();

  function printFullName (){
      let firstName = 'Silas'
      let lastName = 'Leite'
      let space = ' '
      let fullName = firstName + space + lastName
      console.log(fullName)
}

printFullName() // calling a function

function printFullName (){
      let firstName = 'Silas'
      let lastName = 'Leite'
      let space = ' '
      let fullName = firstName + space + lastName
      return fullName
}

console.log(printFullName());


  function addTwoNumbers() {
      let numOne = 2
      let numTwo = 3
      let total = numOne + numTwo
      return total

  }

console.log(addTwoNumbers())

function areaOfCircle(r) {
  let area = Math.PI * r * r
  return area
}

console.log(areaOfCircle(10)) 

function square(number) {
  return number * number
}

console.log(square(10));

functionName(parm1, parm2);

function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  console.log(sum)
}
sumTwoNumbers(10, 20);

function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  return sum
}

console.log(sumTwoNumbers(10, 20))
function printFullName(firstName, lastName) {
  return `${firstName} ${lastName}`
}
console.log(printFullName('Silas', 'Leite'))

function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
    //calling a function
console.log(sumArrayValues(numbers));


    const areaOfCircle = (radius) => {
      let area = Math.PI * radius * radius;
      return area;
    }
console.log(areaOfCircle(10));

function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) 
console.log(sumAllNums(10, 20, 13, 40, 10))
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))

const sumAllNums = (...args) => {
 console.log(args)
}

sumAllNums(1, 2, 3, 4)

const sumAllNums = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40));

const anonymousFun = function() {
  console.log(
    'I am an anonymous function and my value is stored in anonymousFun'
  )
}

const square = function(n) {
  return n * n
}

console.log(square(2));

(function(n) {
  console.log(n * n)
})(2);

let squaredNum = (function(n) {
  return n * n
})(10)

console.log(squaredNum);

function square(n) {
  return n * n
}

console.log(square(2)) // 4

const square = n => {
  return n * n
}

console.log(square(2));
const square = n => n * n;

const changeToUpperCase = arr => {
  const newArr = []
  for (const element of arr) {
    newArr.push(element.toUpperCase())
  }
  return newArr
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries));

const printFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}

console.log(printFullName('Silas', 'Leite'));

const printFullName = (firstName, lastName) => `${firstName} ${lastName}`

console.log(printFullName('Silas', 'Leite'));

function greetings(name = 'Peter Parker') {
  let message = `${name}, welcome to 30 Days Of JavaScript!`
  return message
}

console.log(greetings())
console.log(greetings('Silas'));

function generateFullName(firstName = 'Silas', lastName = 'Leite') {
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}

console.log(generateFullName())
console.log(generateFullName('David', 'Smith'));

function calculateAge(birthYear, currentYear = 2023) {
  let age = currentYear - birthYear
  return age
}

console.log('Age: ', calculateAge(1819));

function weightOfObject(mass, gravity = 9.81) {
  let weight = mass * gravity + ' N' // the value has to be changed to string first
  return weight
}

console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon

const greetings = (name = 'Peter Parker') => {
  let message = name + ', welcome to 30 Days Of JavaScript!'
  return message
}

console.log(greetings())
console.log(greetings('Silas'));

const generateFullName = (firstName = 'Silas', lastName = 'Leite') => {
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}

console.log(generateFullName())
console.log(generateFullName('David', 'Smith'));

const calculateAge = (birthYear, currentYear = 2023) => currentYear - birthYear
console.log('Age: ', calculateAge(1819))

const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N'
  
console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon