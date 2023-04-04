# Multiple External script
É possivel chamar vários arquivos **Javascript** na mesma página HTML. Entretanto é importante lembrar que o arquivo principal, normalmente chamado de `main.js` deve estar abaixo de todos os outros scripts.

## Exemplo

Crie outro arquivo javascript com o comando:
```js
console.log("Hello World na Main!");
```

E chame-o na página html

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
    <script src="main.js"></script>
  </body>
</html>
```