# Exercises: Leve 1
1. O que é um módulo?
Um modulo encapsula um conjunto de funções relacionadas e componentes semanticamente relacionado com suas proprias responsibilidades funcionais.

2. O que é um pacote?
Pacote é uma dependência ou uma biblioteca no qual realiza uma determinada função.

3. Qual é a diferença entre um modulo e um pacote?
Modulo são pequenas funções e componentes, enquanto pacote são um conjuntos de varios codigos, no qual é mais extenso do que modulos.

4. O que é NPM?
NPM é um gerenciador de dependências e gerenciador de projetos usado em projetos NodeJs.

5. O que é um Webpack?
É uma empacotador de módulos para Javascript. No geral, é um *static module bundler, quando um webpack processa sua aplicação, internamente constroi um grafo de dependência que vai de um ou mais *entry points* e então combina tudos os modulos que seu projeto precisa dentro de um ou mais *bundles*, no quais são *assets* estaticos que rosteia (veicular) o conteúdo da página. 

https://webpack.js.org/concepts/

6. Como gerar um novo projeto React?
(Javascript tradicional)
```bash
npm create vite@latest [projeto_nome] -- --template react
```

(Typescript)
```bash
npm create vite@latest [projeto_nome] -- --template react-ts
```

7. Qual são os arquivos e pastas dentro de uma pasta de projeto (`package.json`, `package-lock.json` ou `yarn.lock`, `.gitignore`, `node_module` e `public`)?

`node_module`: onde fica as dependências (após baixada) pedidas no `package.json`.

`package.json`: Onde é pedido as dependências necessarias para o projeto, configurado os comandos para `build`, `start`, `test`, versão do projeto, autor do projeto e etc.

`package-lock.json`: Descreve as características das dependências usadas no projeto. Versão, subdependências, links de verificação de integridade, etc. Esse arquivo "tranca" as dependências com as versõa instalada.

9. Tente fazer um modulo customizado em um arquivo diferente e importa no `index.js`.



