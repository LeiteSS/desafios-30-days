# Condicionais
Usado para tomada de decisões baseado em diferentes condições. Por padrão, essas declarações são executadas sequencialmente de cima para baixo. Porém, se necessario é possivel alterar o fluxo de execução de duas formas:
- Execução condicional: Um bloco de um ou mais declarações será executada se uma determinada expressão for verdadeira.
- Execução repetitiva: Um bloco de um ou mais declarações será executada reptitivamente contanto que uma determinada expressão seja verdadeira.

Condições pode ser implementadas da seguinte forma:
- `If`: usado para conferir se uma condição é verdadeira e executar o bloco. Se a condição for falsa, o bloco if é ignorado.
- `If Else`: Com o else a condição falsa é executada e algo é mostrado.
- `If Else If Else`: Quando existem mais condições, é possivel adicionar mais `if` em frente do `else`. Usado quando existem multiplas condições.
- `Switch`: Como alternativa ao `If Else If Else`, o `Switch` possui varios `cases`, no qual são casos que são executado caso a condição seja verdadeira. Se nenhum `case` for verdadeiro, então entra no bloco `default`.
- Operador ternario:

## Exemplos
```js
let num = 3;
if (num > 0) {
  console.log(`${num} is a positive number`)
}


let isRaining = true
if (isRaining) {
  console.log('Remember to take your rain coat.')
}

 num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}


num = -3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}

isRaining = true
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}


isRaining = false
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}


let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}


let weather = 'sunny'
if (weather === 'rainy') {
  console.log('You need a rain coat.')
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
}

let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}

// Switch More Examples
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}

num = prompt('Enter number');
switch (true) {
  case num > 0:
    console.log('Number is positive');
    break;
  case num == 0:
    console.log('Numbers is zero');
    break;
  case num < 0:
    console.log('Number is negative');
    break;
  default:
    console.log('Entered value was not a number');
}
```