# Fetch and Axios
1. O que é HTTP request?
Requisições HTTPs são métodos que são enviados do client para o servidor, a fim de realizar alguma operação como obter dados cadastrado, salvar dados no banco de dados, deletar dados no banco de dados ou atualizar dados.

2. Quais são HTTP requests mais comuns?
`GET`, `DELETE`, `PUT` e `POST`.

3. O que é fetch?
`fetch API` é uma API nativa do Javascript, no qual permite realizar requisições HTTP. Esta API não é suportada por todos os navegadores.

4. O que é Axios?
Axios é um pacote de terceiros deve ser instalado usando `npm`. É a forma mais comum de realizar requisições HTTP (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`).

5. Qual é a diferença entre `fetch` e `axios`?
Axios é suportado por toos os navegadores, enquanto o `fetch` não. Não precisa adicionar mais pacotes para que o navegador suporte aceite o Axios. Axios deixa o código mais limpo do que o `fetch`.