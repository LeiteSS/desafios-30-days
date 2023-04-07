# Booleanos
Um valor boolean pode ser verdadeiro ou falso, se eu uso se dá quando se há operadores de comparação. Qualquer comparação retorna um valor booleano, no qual pode ser verdadeiro ou falos.

## Truthy values
- Todos numeros (positivos e negativos) são `truthy`, exceto o zero.
- Todas as strings são `truthy`, exceto a string vazia (`''`);
- O boolean `true`.

## Falsy values
- 0
- On
- `null`
- `undefined`
- `NaN`
- O boolean `false`.
- '', "", ``, strings vazias no geral.

## Exemplos
```js
let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3   
let falseValue = 4 < 3
```