# API de Gestão da Livraria — Grupo Nº6

Projeto da UC de Programação Back-End — Curso Técnico em Desenvolvimento de Sistemas  
Escola SENAI "Santo Paschoal Crepaldi" — Turma 1-2026-SESI_DEV_OC_1

## Integrantes

* Nome Completo 1 — @abreu010
* Nome Completo 2 — @anasigole-jpg
* Nome Completo 3 — @mariaesantos54-png
* Nome Completo 4 — @leonardodamascenodev

## Divisão de responsabilidades

| Bloco | Integrante | O que ficou sob responsabilidade dele(a) |
|---|---|---|
| Bloco 1 | (a preencher) | (a preencher) |
| Bloco 2 | Grupo Nº6 | Estruturação da arquitetura MVC (routes, controllers, services), auditoria de coerência UML x código e consolidação do modelo em `src/models/`. |

*Esta tabela é atualizada a cada bloco, com rodízio de responsabilidades entre os integrantes.*

## Auditoria: UML x MVC (28/08/2026)

Comparação do diagrama de classes de 14/08 com os arquivos presentes na pasta `src/models/` do repositório do grupo:

| Classe do diagrama | Existe em src/models/? | Se não existe, por quê |
|---|---|---|
| Livro | Sim | Já consolidado em código no repositório. |
| Categoria | Sim | Já consolidado em código no repositório. |
| LivroFisico | Sim | Já consolidado em código no repositório. |
| LivroDigital | Sim | Já consolidado em código no repositório. |
| Pessoa | Sim | Já consolidado em código no repositório. |
| Cliente | Sim | Já consolidado em código no repositório. |
| Funcionario | Sim | Já consolidado em código no repositório. |
| Carrinho | Sim | Já consolidado em código no repositório. |
| Pedido | Não | Ainda não existe em código nenhum, foi desenhada em 14/08 para o Bloco 3. |
| ItemPedido | Não | Ainda não existe em código nenhum, foi desenhada em 14/08 para o Bloco 3. |

### Decisão do Grupo (Atividade do dia 28/08/2026)
* As classes `LivroFisico`, `LivroDigital`, `Carrinho`, `Pessoa`, `Cliente`, `Funcionario`, `Livro` e `Categoria` já se encontram devidamente consolidadas na pasta `src/models/` do repositório.
* As classes `Pedido` e `ItemPedido` permanecem apenas no diagrama UML e serão desenvolvidas no Bloco 3, quando a integração com o banco de dados for realizada.

## Tecnologias

* Node.js
* npm