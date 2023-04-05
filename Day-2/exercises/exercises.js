// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript';
//Print the string on the browser console using console.log()
console.log(challenge);
//Print the length of the string on the browser console using console.log()
console.log("Length of challenge variable: ", challenge.length);
//Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());
//Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());
//Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(0, 2)); // deprecated
console.log(challenge.substring(0, 2)); 
//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.slice(3));

//Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));

//Split the string into an array using split() method
let challengeArr = challenge.split();
console.log(challengeArr);

//Split the string 30 Days Of JavaScript at the space using split() method
let arr = challenge.split(' ');
console.log(arr);

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let arrCompanies = companies.split(', ');
console.log(arrCompanies);

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Python'));
//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));
//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(11));
// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'));
//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'))


let because = 'You cannot end a sentence with because because because is a conjunction';
//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('because index: ', because.indexOf('because'));

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(because.lastIndexOf('because'));
// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(because.search('because'));

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
challenge = ' 30 Days Of JavaScript ';
console.log(challenge);

challenge = challenge.trim();
console.log(challenge);

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30 Days Of JavaScript and make'));
//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('30 Days Of JavaScript'));

//Use match() method to find all the a’s in 30 Days Of JavaScript
let arrDeLetraA = challenge.match(/a/g,);
console.log(arrDeLetraA);

//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let txtOne = '30 Days of ';
console.log(txtOne);
let txtTwo = 'JavaScript';
console.log(txtTwo);
console.log(txtOne.concat(txtTwo));

//Use repeat() method to print 30 Days Of JavaScript 2 times
let txtComplete = txtOne.concat(txtTwo);
console.log(txtComplete.repeat(2));

// Level 2
// Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')

// Using console.log() print out the following quote by Mother Teresa:
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"');

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let check = typeof '10' === 10;
console.log(check);

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
check = parseFloat('9.8') === 10;
console.log(check);
check = Math.ceil(9.8) === 10;
console.log(check);

// Check if 'on' is found in both python and jargon
let python = 'python';
let jargon = 'jargon';
check = python.endsWith('on') === jargon.endsWith('on');
console.log(check);

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence = 'I hope this course is not full of jargon';
check = sentence.includes('jargon');
console.log(check);

// Generate a random number between 0 and 100 inclusively.
let randomNumberZeroToHundred = Math.floor(Math.random() * 101);
console.log(randomNumberZeroToHundred);

// Generate a random number between 50 and 100 inclusively.
//https://stackoverflow.com/questions/18921134/math-random-numbers-between-50-and-80
let randomNumberFifteenToHundred = Math.floor(Math.random() * ((100 - 50) + 1)) + 50;
console.log(randomNumberFifteenToHundred);

// Generate a random number between 0 and 255 inclusively.
let randomNumberZeroToTwoHundredAndMore = Math.floor(Math.random() * 256);
console.log(randomNumberZeroToTwoHundredAndMore);

// Access the 'JavaScript' string characters using a random number.
let randomStringChar = Math.floor(Math.random() * 11);
let javascript = 'JavaScript';
console.log(javascript[randomStringChar]);

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125\n');

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
because = because.slice(31, 54);
console.log(because);

// Level 3
// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love';
let arrLove = love.match(/love/gi);
console.log(arrLove);
console.log('Quantidade de Love: ', arrLove.length);


// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction
let arrCuz = because.match(/because/g);
console.log(arrCuz);
console.log('Quantidade de Because: ', arrCuz.length);

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentenceFinal = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

let cleanString = sentenceFinal.replace(/[|&;$%#@"<>()+,]/g, "");
console.log(cleanString);

/* let frequentWord = 0;
let words = cleanString.split(' ');
console.log(words);

for(let i = 0; i < words.length; i++) {
  let tempWord = words[i];
  if(words[i] === tempWord) {
    words.pop(i);
  }
}
console.log(words); */
//https://stackoverflow.com/questions/71616231/how-to-search-a-string-for-the-most-common-character-or-word-in-javascript
let word = sentenceFinal.replace(/[^\w\s]/g, "")
            .match(/\w+/g)
            .reduce((acc, word) => {
                acc[word] = (acc[word] || 0) + 1;
                if (!(acc[word] < acc[acc.$])) acc.$ = word;
                return acc;
            }, {}).$;
            
console.log(word);

// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let extractingString = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month';
let arrExtracting = extractingString.split(' ');
let arrNumbers = [];
for(let i = 0; i < arrExtracting.length; i++) {
  if (parseInt(arrExtracting[i])) {
    arrNumbers.push(parseInt(arrExtracting[i]));
  }
}

let sum = 0;
for(let i = 0; i < arrNumbers.length; i++) {
  console.log(arrNumbers[i]);
  sum = arrNumbers[i] + sum;
}

let res = (sum * 12) - 10000;
console.log(res);
