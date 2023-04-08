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
const solveLinEquation = (...args) => {
  
}