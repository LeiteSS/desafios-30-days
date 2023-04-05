# Concatenação da String
Concatenação da string é o ato de conectar duas ou mais strings em uma unica string.

É possivel concatenar usando:
- Operator de soma: forma antiga, no qual está sujeito a erros.

## Exemplo
```js
let space = ' ';
let firstName = 'Silas';
let lastName = 'Leite';
let country = 'Brazil';
let city = 'Poá';
let language = 'Portuguese';
let job = 'student';
let age = 24;


let fullName =firstName + space + lastName;
let personInfo = fullName + '. I am ' + age + '. I live in ' + country; // ES5

console.log(personInfo);

let fullName = firstName + space + lastName;
console.log(fullName);
```



