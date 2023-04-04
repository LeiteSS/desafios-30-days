# Tipos de Dados
Tipos de dados descrevem as caracteristicas de um dado. Tipos de dados podem ser divididos em dois grupos:
 1. Tipos primitivos
 2. Tipos não-primitivos (Referências de Objetos)

## Tipos primitivos
Esse tipo de dos é imutavel (não-modificavel) e pode ser comparado como mostra os exemplos. 

Uma vez criado não pode ser modificado.

Os tipos primitivos são:
- String: Coleção de um ou mais caracteres entre aspas simples, dupla ou crase.
- Number
  - Numeros Inteiros incluem negativos, positivo e o zero.
  - Ponto flutuante: os numeros racionais ou numeros decimais.
- Boolean: Verdadeiro (True) ou Falso (False).
- undefined: se não é atribuido um valor para uma variavel, o valor é `undefined`. Ainda, se um função não retorna nada; ela irá retornar `undefined`.
- Null: valor vazio
- Symbol: armazena um valor único; pode servir como um identificador único. Esse valor pode ser generado pelo construtor do `Symbol`.

## Exemplo
```js
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false
```

## Tipos Não-Primitivos
São tipos de dados modificaveis ou mutavel. É possivel modificar o seu valor depois de criado.

Não é possivel compara-los, como mostra o exemplo.

Os tipos não-primitivos incluem:
 1. Objetos;
 2. Arrays (Arranjos): são lista de dados dentro de colchetes; podem conter o mesmo ou variados tipos de dados. Cada elemento é referenciado pelo indice, no qual se inicia no zero.

### Exemplos
```js
let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)
```

```js
let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)

let userOne = {
name:'Silas',
role:'estudante',
country:'Brasil'
}

let userTwo = {
name:'Silas',
role:'estudante',
country:'Brasil'
}

console.log(userOne == userTwo)
```

Pelo contrario...
```js
let nums = [1, 2, 3]
let numbers = nums // atribuicao

console.log(nums == numbers) 

let userOne = {
name:'Silas',
role:'estudante',
country:'Brasil'
}

let userTwo = userOne

console.log(userOne == userTwo)  
```


## Exemplos
Numeros:
```js
console.log(1); //ichi
console.log(2); // ni
```

Strings:
```js
console.log('Hello Wolrd');
console.log("Hello World");
console.log(`Hellow`);
```

Booleans:
```js
console.log(true);
console.log(false);
```

Undefined:
```js
let firstName;
console.log(firstName);
```

Null:
```js
let emptyValue = null;
console.log(emptyValue);
```
