# Context
Permite transferir dados através a árvore de componentes sem ter que passar `props` manualmente para todos os componentes "filhos" em todos levels. 

Em React, dados são passados no sentido *top-down* (do pai para o filho) via `props`, mas isto pode ser pesado para certos tipos de `props` (e.g. preferências locais, theme da Interface do Usuario) no qual são requeridas por muitos componentes dentro de uma aplicação. Contexto prover um modo de compartilhar valores como estes datos entre componentes sem precisar explicitar a passagem de um `prop` atraves de todos niveis da arvore. 

## Quando to usar Context
Context é projetado para compartilhar dados que pode ser considerado "global" para um arvore de componentes React, como por exemplo o usuario que está logado, tema, ou linguagem preferida.