let space = ' ';
let firstName = 'Silas';
let lastName = 'Leite';
let country = 'Brazil';
let city = 'Poá';
let language = 'Portuguese';
let job = 'student';
let quote = "The saying,'Seeing is Believing' is not correct in 2020.";
let quotWithBackTick = `The saying,'Seeing is`;

let firstLetter = job[0];
console.log(firstLetter);

let secondLetter = job[1];
let thirdLetter = job[2];
let lastLetter = job[9];

console.log(lastLetter);

let lastIndex = job.length - 1;
console.log(lastIndex);
console.log(job[lastIndex]);


console.log(firstName.length);
console.log(city.length);
console.log(quotWithBackTick.toUpperCase());
console.log(firstName.toUpperCase());
console.log(job.toUpperCase());
console.log(city.toLowerCase());
console.log(job.toLowerCase());
console.log(country.toLowerCase());

console.log(language.substr(4,6));
console.log(quote.substr(3, 4));
console.log(quotWithBackTick.substring(0,4));
console.log(quote.substring(4,10));
console.log(quote.substring(4));
console.log(country.substring(0, 3));
console.log(country.substring(3, 5));
console.log(country.substring(3));
console.log(quote.split());
console.log(quote.split(' '));
console.log(firstName.split());
console.log(firstName.split(''));

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland';
console.log(countries.split(','));
console.log(countries.split(', '));

let string = '   30 Days Of JavaScript   '

console.log(string);
console.log(string.trim(' '));

firstName = ' Leite, S.S. ';

console.log(firstName);
console.log(firstName.trim());

console.log(string.includes('Days'));   
console.log(string.includes('days'));     //it is case sensitive!
console.log(string.includes('Script'));   
console.log(string.includes('script'));   
console.log(string.includes('java'));     
console.log(string.includes('Java'));

console.log(country.includes('bra'));  
console.log(country.includes('Bra')); 
console.log(country.includes('Zil'));   
console.log(country.includes('zil'));

console.log(string.replace('JavaScript', 'Python'));
console.log(country.replace('zil', 'za'));   

console.log(string.charAt(0));

lastIndex = string.length - 1;
console.log(string.charAt(lastIndex));
console.log(string.charCodeAt(3));

console.log(string.charCodeAt(lastIndex));
console.log(string.indexOf('D'));
console.log(string.indexOf('Days'));
console.log(string.indexOf('days'));
console.log(string.indexOf('a'));
console.log(string.indexOf('JavaScript'));
console.log(string.indexOf('Script'));
console.log(string.indexOf('script'));

string = 'I love JavaScript. If you do not love JavaScript what else can you love.';

console.log(string.lastIndexOf('love'));
console.log(string.lastIndexOf('you'));
console.log(string.lastIndexOf('JavaScript'));

string = '30';
console.log(string.concat("Days", "Of", "JavaScript"));

country = 'Fin';
console.log(country.concat("land"));

string = 'Love is the best to in this world';

console.log(string.startsWith('Love'));
console.log(string.startsWith('love'));
console.log(string.startsWith('world'));

country = 'Finland';

console.log(country.startsWith('Fin'));
console.log(country.startsWith('fin'));
console.log(country.startsWith('land'));

console.log(string.endsWith('world'));
console.log(string.endsWith('love'));
console.log(string.endsWith('in the world'));

console.log(country.endsWith('land'));
console.log(country.endsWith('fin'));
console.log(country.endsWith('Fin'));

string = 'I love JavaScript. If you do not love JavaScript what else can you love.';
console.log(string.search('love'));

// g: significa que deve procurar em todo o texto
// i: case insensitive
console.log(string.search(/javascript/gi));

// Regex
let patternOne = /love/;
let patternTwo = /love/gi;

console.log(string.match('love'));
console.log(string.match(patternTwo));

let txt = 'Faça chuva ou faça sal, eu estou aqui com o Mano Brown.'
let regEx = /\d+/

// \d significa digito
// + significa um ou mais digitos
// se colocar o g após esse regex, será procurado em toda string.

console.log(txt.match(regEx));
console.log(txt.match(/\d+/g));
console.log(firstName.repeat(10));