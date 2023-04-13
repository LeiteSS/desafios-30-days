# Ciclo de vida dos Componentes
mounting = nascimento = renderizar ou colocar o componente React no DOM.
  1. `constructor(props)`: deve ser chamado o objeto `state`. Acontece primeiro, antes de qualquer outro método for executado. Deve ser chamado a super classe `Component`. 
  2. `static getDerivedStateFromProps(props, state)`: retorna `null`. Acontece segundo, antes de renderizar o componente no DOM. Neste método, é o lugar ideal para "setar" o estado do objeto baseado no `props`iniciais. 
  3. `render()`: retorna os elementos HTML - método requerido quando criado um componente *class-based*. Acontece em terceiro. Não é possivel "setar" o seu `state` dentro do método `render()`. 
  4. `componentDidMount()`: Acontece por ultimo, após o componente estiver renderizado. Este é o lugar para "setar" intervalos de tempo e chamar uma API. 
updating = amadurecimento = 
unmounting = morte

