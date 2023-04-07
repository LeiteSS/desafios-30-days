# Métodos Window
São métodos usado para pode interagir com o usuario usando o HTML.

## Método `alert()`
Usado para mostrar uma caixa de alerta com uma mensagem especifica e um botão `OK`.

## Método `prompt()`
Usado para mostrar uma caixa, no qual irá receber o input do usuario. `prompt()` recebe dois argumentos, sendo o secundo opcional.

## Método `confirm()`
Usado para mostrar uma caixa de dialogo com uma mensagem especifica, junto dos botões OK e Cancelar.  Uma caixa para confirma é geralmente usada para pedir por confirmação para executar alguma. 

## Exemplos
```js
alert(message);

let number = prompt('Enter number', 'number goes here');
console.log(number);

const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // true ou false
```
