# External script
Assim como o [Internal script](Internal script.md), este tipo de script pode ser chamado dentro da tag `body` ou `head`. Sendo o `body`, mas usado para esse fim.

Se trata de um arquivo com a extensão `.js` com código Javascript.

## Exemplos
Crie um arquivo chamado `intro.js`:

```js
console.log("Hello world na Intro");
```

Na página HTML, escreva:
```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <title>External script</title>
    <script src="intro.js"></script>
  </head>
  <body>
    <h1>Página deixada intencionalmente em branco</h1>
  </body>
</html>
```

Ou:
```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <title>External script</title>
    
  </head>
  <body>
    <h1>Página deixada intencionalmente em branco</h1>

    <!-- Deve ficar antes de fechar a tag body -->
    <script src="intro.js"></script>
  </body>
</html>
```

