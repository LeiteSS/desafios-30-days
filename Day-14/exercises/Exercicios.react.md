# Ciclo de vida dos Componentes
mounting = nascimento = renderizar ou colocar o componente React no DOM.
  1. `constructor(props)`: deve ser chamado o objeto `state`. Acontece primeiro, antes de qualquer outro método for executado. Deve ser chamado a super classe `Component`. 
  2. `static getDerivedStateFromProps(props, state)`: retorna `null`. Acontece segundo, antes de renderizar o componente no DOM. Neste método, é o lugar ideal para "setar" o estado do objeto baseado no `props`iniciais. 
  3. `render()`: retorna os elementos HTML - método requerido quando criado um componente *class-based*. Acontece em terceiro. Não é possivel "setar" o seu `state` dentro do método `render()`. 
  4. `componentDidMount()`: Acontece por ultimo, após o componente estiver renderizado. Este é o lugar para "setar" intervalos de tempo e chamar uma API. 
updating = amadurecimento = Após um componente ser montado no DOM, pode ser atualizado quando um `state` ou `props` mudar. Uma atualização de um React componente pode ser causado por mudanças no `props` ou `state`.
  1. `static getDerivedStateFromProps()`: Similar a fase de mounting, este métdo pode ser também chamado de fase de atualização. Este é o primeiro método que é chamado quando um componente for atualizado. 
  2. `shouldComponentUpdate()`: deve retornar um booleano. Se este método não retorne a aplicação não irá atualizar. Se o método não retornar `true` a aplicação não vai atualizar. Este pode ser usado para instanciar um bloco quando alcançar um certo ponto um certo usuario.
  3. `render()`: Este método é chamado quando um componente atualiza; atualiza o HTML para o DOM com novas mudanças.
  4. `getSnapshotBeforeUpdate()`: É executado antes de atualizar, `componentDidUpdate` roda depois. Salva o que for necessario antes de sobreescrever. 
  5. `componentDidUpdate(prevProps, prevState)`: É chamado depois que um componente atualiza no DOM.

unmounting = morte = A fase final do ciclo de vida de um componente. Esta fase remove o componente do DOM. `componentWillUnmount` é unico métod que será chamado quando um componente é "desmontado" (*unmouted*).

1. O que é ciclo de vida de um componente?
É o processo de montar, atualizar e desmontar um componenter em uma aplicação React. 
2. Qual é o proposito de um ciclo de vida de um componente?
O componente poderá ser renderizado pela primeira vez, ser atualizado após um dado ser mudado e também pode ser destruido quando não for mais necessario.

3. Quais são os três estagios de um ciclo de vida de um componente?
`mounting`, `updating` e `unmounting`.

4. O que `mounting` significa?
Processo de montagem ou quando o componente é renderizado pela primeira vez. 

5. O que `updating` significa?
Processo de atualização do componente, quando um dado muda. 

6. O que `unmounting` significa?
Processo de desmontagem de um componente, quando o componente não é mais necessario e será destruido.

7. Quais são os métodos mais comuns do `mounting`?
`render` e `componentDidMount()`.

8. Quais são os métodos do ciclo de vida `mounting`?
`constructor()`, `static getDerivedStateFromProps()`, `render()`, `componentDidMount()`.

9. Quais são os métodos do ciclo de vida `updating`?
`static getDerivedStateFromProps()`, `shouldComponentUpdate()`, `render()`, `getSnapshotBeforeUpdate()`, `componentDidUpdate()`.

10. Quais são os métodos do ciclo de vida `unmounting`?
`componentWillUnmount()`.
