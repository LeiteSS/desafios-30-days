# Internal script
Este *script* pode ser escrito dentro da tag `head` ou `body` e usa a tag `<script>` para mesclar o HTML com javascript sem a necessidade de escrever um arquivo para isso.

## Exemplos
*Internal script* escrito dentro da tag `head`:
```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <title>Internal Script</title>
    <script>
      console.log('Hello world!');
    </script>
  </head>
  <body>
    <h1>Pagina deixada em branco intencionalmente</h1>
  </body>
</html>
```

*Internal script* escrito dentro da tag `body`:
```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <title>Internal Script</title>
  </head>
  <body>
    <button onclick="alert('Hello World!');">Clique aqui!</button>
    <script>
      console.log('Hello World!');
    </script>
  </body>
</html>
```