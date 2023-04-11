# What is React?
1. O que é React?
È uma biblioteca criado pelo Facebook no dia 29 de maio de 2013. O React não interage diretament com o DOM, tendo seu proprio modo de lidar com a manipulação do DOM. Sendo assim, usa um virtual DOM para realizar novas mudanças e atualizar somente o elemento que precisa ser mudado.

2. O que é biblioteca?
Biblioteca é uma coleção de código pré-escrito,no qual programadores pode usar para otimizar tarefas. Essa coleção de códigos reutilizaveis, normalmente, é desenvolvida para resolver uma problemas bem especificos. Essas bibliotecas pode incluir diferente de componentes pré-codificados.

3. O que é uma single page application?
Ao invés de carregar páginas inteiras, como ocorre no método padrão de navegadores, no método **single page application**, a aplicação web ou website re-escreve dinâmicamente uma página com novos dados vindo de um *web server*, sem precisar carregar a página inteira.

4. O que é um componente?
Componentes podem ser blocos repetidos (que vão aparecer em várias páginas) como por `header`, `navbar`, `footer`, `input`, `form`, `card`. A própria pagina pode ser considerada um componente.

5. O que é DOM?
DOM é a sigla para **Document Object Model**. É uma interface de programação, no qual usa **Javascript**, que permite criar, mudar ou remover elementos de um documento de *website*.

6. O que é React Virtual DOM?
VDOM ou virtual DOM é conceito da programação onde um ideal, ou "virtual", representação de um interface do usuario é mantida na memoria e sincronizada com o DOM real por uma biblioteca com o `ReactDOM`. Este processo é chamada **reconciliação**.

7. Do que uma aplicação web ou website é composto?
`Header`, `Navigation Bar`, `Footer`, `Main`, `Section`, `Input`, `Form`, `Card`, `Table`, etc.

# Why React?
1. Porque você escolheu usar o react?
O React é flexivel, torna o desenvolvimento de aplicações com diversas páginas rápido.

2. Quais medidas você usa para saber a popularidade?
Se a comunidade do github é ativa

3. Qual é mais popular: React ou Vue?
React tem mais estrelas no github em comparação com o `Vue`.

# JSX
1. O que é um elemento HTML? 
Elemento HTML é tag no qual irá representar um elemento da página web, sendo que tudo que estiverr dentro da tag `<body>` será visivel, enquanto o que está dentro da tag `head`, será visivel apenas o titulo da página e o icone da página. O `head` poderá ter metadados ou a tag `<meta>` que serão lidos indexador ou SEO. Além disso, no `<header>` poderá ser chamado a folha de estlo usando a tag `<link>`. Scripts `javascripts` devem ser chamados com a tag `<script>` e o recomendado é que esteja dentro da tag `<body>`.

2. Como escrever um elemento HTML que auto se fecha (`self closing`)?

```html
<img src="image.png" alt="Imagem exemplo"  />
```

3. O que é babel?
É um *toolchain* muito usado para converter código ECMAScript 2015+ em uma versão anterior do JAvascript em uma versão recente ou antiga de navegadores ou ambientes.
- Tranforma a sintaxe.
- Recursos Polyfill que estão faltando no seu ambiente alvo (usando um polyfill de terceiro com o core-js).
- Codemods (transforma o código fonte)

4. O que é um transpiler?
Traduz um código escrito em linguagem para um código de outra.

# Elementos JSX
1. O que é um elemento JSX?
Elemento JSX mistura javascript com HTML.

2. Escrever o seu nome em um elemento JSX e armazene em uma variavel nome.
```js
const name = <h1>Silas</h1>
```

3. Escreva um elemento JSX que mostre o seu nome completo, pais, titulo, genero, email, numero de telefone. Use `<h1>` para o nome e `<p>` para o resto da informação e a armazene em uma variavel usuario.
```js
const fullName = <h1>Silas Santos Leite</h1>;
const country = <p>Brasil</p>;
const title = <p>Sir</p>;
const genre = <p>Masculine</p>;
const email = <p>leite.silassantos@gmail.com</p>;
const phoneNumber = <p>(11) 1111-1111</p>;
const user = (
  <section style={userStyles} id="user">
    {title} {fullName}
    <h4>Pais:</h4> {country}
    <h4>Gênero:</h4>{genre}
    <h4>Email:</h4>{email}
    <h4>Numero de Telefone: </h4>{phoneNumber}
  </section>
);
```

4. Escreva um elemento `footer`:
```js
const footer = (
  <footer id="rodape">
    <div class="container">
      <div class="logo">
        <img src="logo.png" alt="Imagem do Logo que fica no rodapé" />
      </div>
      <div class="contry_name">
        <h5>São Paulo - SP</h5>
        <h4>Leite, S. S.</h4>
      </div>
      <div class="social_media">
          <a href="github"><img src="github.svg" alt="logo do github"/>
          <a href="linkedin"><img src="linkedin.svg" alt="logo do linkedin"/>
      </div>
    </div>
  </footer>
);
```

# Inline Style
1. Escreva um objeto de estilo para o JSX principal
```js
const mainStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  pading: 0,
  margin: 0,
};

const main2 = <main style={{ backgrountColor: '#61DBFB', fontFamily: 'Helvetica Neue', pading: 0, margin: 0 }}>

const main = <main style={mainSyles}></main>;
```

2. Escreva um objeto de estilo para o `footer` e o `app` JSX:
```js
const footerStyles = {
  backgroundColor: '#453FBD',
}
```

3. Adicione mais estilo para os elementos JSX
```js
const userStyles = {
  fontSize: 16,
  color: 'black',
};
```

# Internal Styles
1. Apply differente styles to your JSX Elements
```css
/* == General style === */
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      html,
      body {
        height: 100%;
        line-height: 1.5;
        font-family: 'Montserrat';
        font-weight: 300;
        color: black;
      }

      .root {
        min-height: 100%;
        position: relative;
      }

      .header-wrapper,
      .main-wrapper,
      .footer-wrapper {
        width: 85%;
        margin: auto;
      }

      .header-wrapper,
      .main-wrapper {
        padding: 10px;
        margin: 2px auto;
      }

      h1 {
        font-size: 70px;
        font-weight: 300;
      }

      h2,
      h3 {
        font-weight: 300;
      }

      header {
        background-color: #61dbfb;
        padding: 10px;
      }

      main {
        padding: 10px;
        padding-bottom: 60px;
        /* Height of the footer */
      }

      ul {
        margin-left: 15px;
      }

      ul li {
        list-style: none;
      }

      footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        /* Height of the footer */
        background: #6cf;
      }

      .footer-wrapper {
        font-weight: 400;
        text-align: center;
        line-height: 60px;
      }
```
```js
import "./styles.css";
```

# Inject data to JSX
1. Pratique como fazer elemento JSX e injetar dados dinâmicos (string, number, boolean, array, object).
```js
const welcome = 'Hello World';
const title = 'Super Hello World';
const subtitle = 'Super mega ultra hello world';
const author = {
  firstName: 'Silas',
  lastName: 'Leite',
};

const date = 'Abril 11, 2023';

const numOne = 3;
const numTwo = 4;

const header = (
  <header style={headerStyles}>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Aluno: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
);

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
);

const main = (
  <main>
    {header}
    {result}
  </main>
)
```


