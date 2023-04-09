const countries = require('./data');

//Create an empty object called dog
let dog = {}; // must be const

//Print the the dog object on the console
console.log(dog);

//Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog = {
  name: 'Xicão',
  legs: 8,
  color: 'Brown',
  age: 10,

  bark: function() {
    return 'woof woof';
  }
}

//Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

//Set new properties the dog object: breed, getDogInfo
dog.breed = 'Vira-lata';

dog.getDogInfo = function() {
  return `Hi, my name's ${this.name}. My breed is ${this.breed}\n \
          and I have ${this.legs} legs, my color is ${this.color}\n \
          and I have ${this.age} years old. ${this.bark()}`;
}

console.log(dog.getDogInfo());

//Find the person who has many skills in the users object.
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

let max = Number.MIN_SAFE_INTEGER;
let res;
for (const key in users) {
  const user = users[key];

  if (user.skills.length > max) {
    max = user.skills.length;
    res = user;
  }
}

console.log(max);
console.log(res);

//Count logged in users, count users having greater than equal to 50 points from the following object.
let counter = 0;
let counterGreaterUsers = 0;
res = undefined;
for (const key in users) {
  const user = users[key];

  if (user.isLoggedIn === true) {
    counter++;
  }

  if (user.points >= 50) {
    counterGreaterUsers++;
  }
}

console.log(`Usuarios Logados ${counter}`);
console.log(`Usuarios Logados com muitissimos pontos ${counterGreaterUsers}`);

//Find people who are MERN stack developer from the users object
let userMern = [];
for (const key in users) {
  const user = users[key];
  const skills = user.skills
  if (skills.includes("MongoDB", "Express", "React", "Node") ) {
    userMern.push(user);
  }
}

console.log(userMern);

//Set your name in the users object without modifying the original users object
let userCopy = users;
userCopy.Silas = {};

console.log(userCopy);

//Get all keys or properties of users object
const keys = Object.keys(userCopy);
console.log(keys);

//Get all the values of users object
const values = Object.values(userCopy);
console.log(values);

//Use the countries object to print a country name, capital, populations and languages.
const countriesObj = countries.countries;

const brazil = Object.values(countriesObj);

console.log(brazil[0]);

//Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
  firstName: 'Silas',
  lastName: 'Leite',
  incomes: 150.00,
  expenses: 23.50,
  totalIncome: function() {
    
  },
  accountBalance: function(){

  },
  accountInfo: function(){},
  addExpense: function(){},
  accountBalance: function(){}
}