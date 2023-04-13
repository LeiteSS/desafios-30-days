# Uncotrolled Components
1. O que é um `controlled input`?
Um `controlled input` é input no qual recebe dados, no qual serão armazenados após o `submit`.

2. O que é um `uncontrolled input`?
`Uncontrolled input` usa a forma tradicional de obter dados vindo de um `input`; como era usado no HTML.

3. Como obter o conteúdo de um determinado elemento HTML no React?
Atribuindo o valor vindo de  `React.createRef()` para uma determinada variavel então no `input` será usado a propriedade `ref={nome_da_variavel_com_o_valor_do_createRef}`.

4. Porque não é um boa ideia manipular o DOM diretamente no React?
Pois o React tem o seu proprio método de lidar com a manipulação do DOM.


5. O que é frequentemente usado no React? `Controlled` ou `Uncontrolled` `input`.
`Uncontrolled input`, para poder marcar algum elemento do DOM e obter o seu conteudo; para isso é usado o `ref`. Entretanto, o `controlled input` é recomendado pela documentação oficial do React.


6. O que você precisa para escrever um `uncontroled input`?
Declarar uma variavel e atribuir o valor de `React.createRef()` para essa variavel, então essa variavel será referenciada no elemento usando a propriedade `ref={}`.

7. Precisa do `state` para escrever `uncontrolled input`?
Não é necessario o `state`.

8. Quando usar um `uncrontrolled input`?
Quando é necessario marcar algum elemento do DOM e obter o seu elemento.

9. Quando usar um `controlled input`?
Quando é necessario obter dados, persistir dados e validar dados.

10. É usado `controlled ou uncontrolled input` para validar `input` de um formulario? `controlled input`.