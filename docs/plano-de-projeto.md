# Plano de Projeto — API de Gestão da Livraria

| Campo | Informação |
|---|---|
| **Projeto** | API REST de gestão do acervo de uma livraria (livros e categorias) |
| **Grupo** | Grupo 6 |
| **Integrantes** | João Lucas de Abreu · Ana Vitória Napoli Sigole · Maria Eduarda Pereira dos Santos · Leonardo Correia Damasceno |
| **Cliente** | Dono da livraria (cliente simulado, representado pelo Product Owner) |
| **Curso / UCs** | Técnico em Desenvolvimento de Sistemas — Projetos de Software (PSOF) e Programação Back-End |
| **Escola / Turma** | SENAI "Santo Paschoal Crepaldi" — 1-2026-SESI_DEV_OC_1 |
| **Repositório** | https://github.com/leonardodamascenodev/livraria-api-grupo6 |
| **Quadro do projeto (GitHub Project)** | https://github.com/users/leonardodamascenodev/projects/1 |
| **Versão do documento** | 1.0 — 18/11/2026 |

---

## 1. Visão geral

Hoje o dono da livraria controla o acervo em planilhas: não sabe com rapidez quais livros tem, quanto custam e quantos sobraram no estoque. O projeto entrega uma **API REST**, um serviço que outros programas (um site, um app, um sistema de caixa) podem chamar pela internet para consultar e alterar o acervo.

A API guarda **livros** e **categorias** em um banco de dados **MySQL**. Com ela é possível:
- listar e buscar livros por título, autor, faixa de preço ou categoria;
- cadastrar, alterar e apagar livros;
- organizar os livros em categorias (Ficção, Tecnologia, Infantil, História…).

O banco garante que nenhum livro aponte para uma categoria que não existe, e que nenhuma categoria seja apagada enquanto ainda tiver livros.

**Objetivo do projeto:** entregar até 13/11/2026 a API funcionando com o banco MySQL, testada automaticamente e documentada, de forma que qualquer pessoa consiga instalar e usar seguindo o README.

**Tecnologias usadas** (só as que estão no projeto):

| Tecnologia | Para que serve |
|---|---|
| Node.js | Executa o JavaScript no servidor |
| Express 5 | Cria as rotas e os middlewares da API |
| MySQL e mysql2 | Banco de dados e a biblioteca que conversa com ele |
| dotenv | Lê a senha do banco do arquivo `.env`, que não vai para o GitHub |
| nodemon | Reinicia o servidor a cada alteração durante o desenvolvimento |
| Postman | Coleção de testes automáticos da API |
| Git, GitHub e GitHub Projects | Versionamento do código e quadro de tarefas |

---

## 2. Metodologia

O grupo usa o **Scrum**, um método ágil em que o trabalho é dividido em **sprints**: ciclos curtos, de duas semanas, que terminam sempre com algo funcionando.

**Por que Scrum?**
- O escopo foi mudando a cada bloco da disciplina. Primeiro a API guardava os dados em memória, depois passou a usar o MySQL. O Scrum aceita essas mudanças porque o backlog é revisado a cada sprint.
- Ciclos de duas semanas encaixam com o ritmo das aulas e das entregas dos blocos.
- O quadro do GitHub Project deixa visível quem está fazendo o quê, o que ajuda a combater o risco 2 (concentração do código em uma pessoa).

Um modelo em cascata, com todo o planejamento feito no início, não se adaptaria à troca de memória para banco que aconteceu no meio do projeto.

**Como o Scrum foi aplicado:**

| Elemento do Scrum | Como funciona no grupo |
|---|---|
| **Product Owner (PO)** | Maria Eduarda: representa o dono da livraria e ordena o backlog por prioridade |
| **Scrum Master (SM)** | João Lucas: conduz as reuniões, controla o tempo e remove impedimentos |
| **Time de desenvolvimento** | Ana Vitória e Leonardo (PO e SM também pegam issues) |
| **Product backlog** | As issues do GitHub Project (#1 a #15) |
| **Sprint planning** | O time puxa issues do backlog até a capacidade da sprint (horas disponíveis × fator de foco 0,7) |
| **Estimativa** | Planning Poker, com 1 ponto ≈ 1 hora (ver seção 7) |
| **Acompanhamento** | Quadro do Project, com as colunas Todo, In Progress e Done, conferido em toda aula |

**Definição de Pronto.** Uma issue só vai para "Done" quando:
1. todos os critérios de aceite da issue estão marcados e o código está no `main` sem conflito;
2. a rota foi testada no Postman: a requisição nova está salva na coleção, inclusive um teste de erro, e o Runner da coleção inteira passa sem falhas;
3. outro integrante revisou o código, o README foi atualizado se a rota mudou, e a issue foi fechada pelo commit ou PR (`closes #nº`).

---

## 3. Escopo

O escopo diz o que o projeto entrega e o que fica de fora. Tudo que não está em "Incluído" precisa de uma nova decisão do PO para entrar.

### 3.1. Incluído

- API REST com CRUD (cadastrar, consultar, alterar e apagar) de **livros** e de **categorias**.
- Filtros na listagem de livros: título, autor, preço mínimo, preço máximo e categoria.
- Relacionamento livro × categoria no banco, com chave estrangeira (**FK**, *foreign key*).
- Validação dos dados de entrada e respostas de erro padronizadas em JSON.
- Banco MySQL criado por script (`src/database/livraria.sql`), com dados de exemplo.
- Coleção de testes automáticos no Postman.
- Documentação de instalação e de uso no README.
- Modelagem UML do domínio (diagrama em `docs/esquemauml.png`).

### 3.2. Excluído

| Item | Por que ficou de fora |
|---|---|
| Vendas: pedidos, itens do pedido e carrinho de compras | Exigiria cadastro de clientes e pagamento, e não cabe no prazo. As classes `Pedido`, `ItemPedido` e `Carrinho` ficam só no UML e nos modelos, como planejamento futuro |
| Cadastro e login de clientes e funcionários | Sem vendas, a API não precisa de usuários. As classes `Pessoa`, `Cliente` e `Funcionario` existem só como modelo |
| Livro físico × livro digital | A diferença aparece no UML (herança), mas a API trata todos como "livro" |
| Interface visual (site ou app) | A disciplina é de Back-End. A API é usada pelo Postman |
| Hospedagem em produção (deploy) | A API roda em `localhost` em cada máquina. Por isso o orçamento não tem custo de servidor (ver seção 8) |

---

## 4. Requisitos

**RF** = requisito funcional (o que o sistema faz para o usuário). **RNF** = requisito não funcional (como o sistema deve ser, sem ser uma função visível).

Cada requisito aponta para as issues do GitHub Project que o implementam e para a estimativa delas em horas (Planning Poker, seção 7).

### 4.1. Requisitos funcionais

| Código | Requisito | Issues | Estimativa |
|---|---|---|:---:|
| RF001 | Listar livros, com filtros por título, autor, preço mínimo/máximo e categoria | #2, #3, #9 | 8 h |
| RF002 | Consultar um livro pelo id | #4 | 3 h |
| RF003 | Cadastrar livro, validando título, autor, preço e estoque | #1, #5 | 8 h |
| RF004 | Alterar livro: todos os campos (PUT) ou só os enviados (PATCH) | #6, #7 | 6 h |
| RF005 | Excluir livro | #8 | 2 h |
| RF006 | Gerenciar categorias: listar, consultar, cadastrar, alterar e excluir | #11 | 8 h |
| RF007 | Associar livro a uma categoria e mostrar o nome dela na resposta | #12 | 11 h |
| | **Total** | | **46 h** |

### 4.2. Requisitos não funcionais

| Código | Requisito | Issues | Estimativa |
|---|---|---|:---:|
| RNF001 | Respostas em JSON com códigos HTTP padronizados (200, 201, 204, 400, 404, 409, 500 e 503) | #10 | 5 h |
| RNF002 | Todas as rotas cobertas por testes automáticos no Postman | #13 | 8 h |
| RNF003 | API documentada no README: instalação, rotas, exemplos e erros | #14 | 3 h |
| RNF004 | Dados guardados no MySQL, com integridade referencial entre livro e categoria | #15 | 22 h |
| | **Total** | | **38 h** |

Toda issue do Project corresponde a um requisito, e todo requisito tem pelo menos uma issue.

---

## 5. Riscos

Os riscos são avaliados com **probabilidade** (P) e **impacto** (I) de 1 a 5. A pontuação é P × I e define a classificação: **1 a 6 = baixo**, **8 a 12 = médio**, **15 a 25 = alto**. A matriz foi feita em 25/09 e revisada em 16/10.

### 5.1. Matriz de riscos (revisada em 16/10)

| # | Risco | P | I | Pontuação | Classificação |
|:---:|---|:---:|:---:|:---:|:---:|
| 1 | Ambiente diferente em cada máquina (Node, MySQL, senha, `.env`) impede rodar a API | 4 | 4 | 16 | 🔴 Alto |
| 2 | Concentração do código em um único integrante | 4 | 4 | 16 | 🔴 Alto |
| 3 | Conflitos de merge no Git / perda de código | 3 | 3 | 9 | 🟡 Médio |
| 4 | Atraso no cronograma (faltas, provas e trabalhos de outras UCs) | 3 | 3 | 9 | 🟡 Médio |
| 5 | Requisitos mal entendidos / escopo mudando | 2 | 3 | 6 | 🟢 Baixo |
| 6 | Migração de memória para o MySQL quebrar rotas que já funcionavam | 3 | 4 | 12 | 🟡 Médio |

Na revisão de 16/10, os riscos 1 e 2 subiram para **alto**: o Bloco 4 exigiria o MySQL em todas as máquinas, e até então quase todos os commits eram de uma só pessoa. O risco 5 caiu para **baixo**, porque as 14 issues criadas em 02/10 deixaram o escopo claro. O risco 6 surgiu com a decisão de levar a API para o banco.

### 5.2. Plano de resposta (riscos médios e altos)

O **gatilho** é o sinal observável que mostra que o risco está acontecendo. A **contingência** é o que o grupo faz quando o gatilho dispara.

| # | Estratégia | Ação | Dono | Gatilho | Contingência |
|:---:|---|---|---|---|---|
| 1 | Mitigar | `.env.example`, passo a passo no README e `livraria.sql` que recria o banco do zero | Leonardo | Até 30/10, alguém não vê `Conectado ao MySQL!` ou recebe `503` / `ECONNREFUSED` | Configurar em dupla com quem já tem a API rodando |
| 2 | Mitigar | Issues divididas entre os 4, cada um faz commit do próprio trabalho e outra pessoa revisa | João | Mais de 60% dos commits da semana em uma pessoa (`git shortlog`), ou alguém 7 dias sem issue em andamento | O SM redistribui as issues e monta pair programming |
| 3 | Mitigar | `git pull` antes de começar, branch por issue, commits pequenos | Ana | Merge com conflito em 2 ou mais arquivos | `git revert` para o último commit estável e refazer em branch nova |
| 4 | Mitigar | Fator de foco 0,7 e acompanhamento do quadro em toda aula | João | Na metade da sprint, mais de 50% das horas ainda em "Todo" | O PO tira da sprint a issue de menor prioridade |
| 6 | Mitigar | Coleção do Postman cobrindo todas as rotas, rodada após cada commit da migração | Ana | Qualquer teste do Runner falha, ou uma rota que dava `200` passa a dar `500` | `git revert` do commit e correção em branch até o Runner ficar 100% verde |

**Onde os riscos aparecem no resto do plano:**
- **Risco 1:** os arquivos de configuração estão no repositório, e a API responde `503` quando o banco está desligado.
- **Risco 2:** os responsáveis estão divididos nas issues e na matriz RACI (seção 9).
- **Risco 3:** está na Definição de Pronto.
- **Risco 4:** está no fator de foco e na reserva de contingência do orçamento (seção 8).
- **Risco 6:** a #10 foi antecipada para a Sprint 1 e a #15 tem estimativa própria.

---

## 6. Cronograma

O trabalho seguiu os quatro blocos da disciplina. A partir de 02/10, as tarefas passaram a ser issues no [GitHub Project](https://github.com/users/leonardodamascenodev/projects/1), organizadas em dois **marcos** (*milestones*, entregas que podem ser verificadas) e duas sprints.

### 6.1. Blocos do projeto

| Bloco | Período | Entrega |
|---|---|---|
| Bloco 1 — Modelagem | 29/07 a 04/09 | Ambiente Node, classes do domínio (herança e composição) e diagrama UML |
| Bloco 2 — Arquitetura | 26/08 a 16/09 | Esqueleto MVC (routes, controllers, services) e auditoria UML × código |
| Bloco 3 — API em memória | 16/09 a 28/10 | CRUD de livros e categorias, filtros, validações e middlewares |
| Bloco 4 — MySQL | 28/10 a 13/11 | Banco MySQL, relacionamento livro × categoria, erros do banco e testes no Postman |

### 6.2. Marcos e sprints

| Sprint | Período | Issues | Horas estimadas | Capacidade | Marco |
|---|---|---|:---:|:---:|---|
| Sprint 1 | 16/10 a 30/10 | #1 a #8 e #10 | 29 h | 29 h | **M1 — CRUD de Livros Concluído** (30/10) |
| Sprint 2 | 31/10 a 13/11 | #9, #11, #12, #13, #14 e #15 | 55 h | ~29 h | **M2 — Filtros e Categorias** e **M3 — Testes e Documentação** (13/11) |

**Lição registrada:** a Sprint 2 recebeu quase o dobro da capacidade (55 h para cerca de 29 h), porque a migração para o MySQL (#15) só virou issue depois de pronta. O risco 4 aconteceu e foi coberto com horas extras perto da entrega de 13/11. Em um próximo ciclo, a #13, a #14 e a #15 ficariam em uma Sprint 3.

### 6.3. Documentos de planejamento

| Data | Documento |
|---|---|
| 11/09 | Escopo |
| 18/09 | Requisitos |
| 25/09 | Matriz de riscos |
| 02/10 | Cronograma e issues no GitHub |
| 16/10 | Matriz de riscos revisada e sprint planning — `docs/atividade-matriz-riscos-sprint-planning.md` |
| 23/10 | Estimativas — `docs/atividade-estimativas.md` |
| 30/10 | Orçamento e RACI — `docs/atividade-orcamento-raci.md` |
| 18/11 | Consolidação deste plano — `docs/atividade-consolidacao-plano.md` |

---

## 7. Estimativa e recursos

### 7.1. Técnica escolhida: Planning Poker

No **Planning Poker**, cada integrante mostra ao mesmo tempo uma carta com a sua estimativa (1, 2, 3, 5, 8, 13, 21 ou "?"). Quem deu a menor e a maior carta explica o motivo, e o time vota de novo até chegar a um acordo. A tarefa de referência foi a #2 (revisar o serviço de listagem), que vale 2 pontos ≈ 2 horas, então **1 ponto ≈ 1 hora**.

O grupo comparou três técnicas antes de escolher:

| Técnica | O que estimou | Total |
|---|---|:---:|
| Chute de 16/10 | Backlog da Sprint 1 | 27 h |
| Planning Poker | 14 issues (Sprint 1 + backlog do produto) | 62 h |
| Pontos de Função (**PF**) | O software inteiro: 44 PF × 8 h | 352 h |

**Por que Planning Poker?**
- É do próprio time, feito sobre as issues reais, e a Sprint 1 confirmou a velocidade de 1 ponto ≈ 1 hora.
- Os Pontos de Função usam uma produtividade de referência (8 h por PF) feita para equipes profissionais, com análise e homologação formais. No nosso projeto, cada PF é uma rota pequena em Express, então 352 h ficaria muito acima do esforço real.

O PF fica como teto de comparação: mostra que o projeto não é maior do que o grupo imaginou.

### 7.2. Base de horas do projeto

| Parte | Origem | Horas |
|---|---|:---:|
| Blocos 1 e 2 (UML e esqueleto MVC, antes de existir backlog) | Horas das entregas | 36 |
| Requisitos funcionais (RF001 a RF007) | Planning Poker | 46 |
| Requisitos não funcionais (RNF001 a RNF004) | Planning Poker | 38 |
| **Total de desenvolvimento** | | **120** |

A estimativa de cada issue também está registrada no campo "Estimativa" do GitHub Project.

### 7.3. Recursos

Os recursos se dividem em humanos, materiais e de software. Os custos estão na seção 8.

| Tipo | Recurso | Quantidade | Custo |
|---|---|:---:|---|
| Humano | Desenvolvedores | 4 pessoas | R$ 40,00/h |
| Humano | Gestão (PO e SM, papéis acumulados) | 2 papéis | R$ 60,00/h nas horas de gestão |
| Material | Computadores do laboratório do SENAI | 4 | Gratuito (já existentes) |
| Material | Internet do laboratório | 1 | Gratuito (já existente) |
| Software | Node.js, Express 5, mysql2, dotenv, nodemon | — | Gratuito (código aberto) |
| Software | MySQL Community Server + Workbench | 4 instalações | Gratuito |
| Software | Postman Free, GitHub + Projects, VS Code | 4 contas | Gratuito |

---

## 8. Orçamento

Os custos-hora são os de referência da disciplina: **R$ 40,00** para desenvolvimento e **R$ 60,00** para gestão (gerente de projeto / PO).

### 8.1. Pessoal

As horas de gestão são **15%** das horas de desenvolvimento, o meio da faixa permitida (10% a 20%). O grupo tem acompanhamento a cada sprint e quadro no GitHub, mas o projeto é pequeno e não tem cliente externo para negociar.

| Papel | Horas | Custo-hora | Custo |
|---|:---:|:---:|:---:|
| Desenvolvimento | 120 h | R$ 40,00 | 120 × R$ 40,00 = R$ 4.800,00 |
| Gestão | 120 × 15% = 18 h | R$ 60,00 | 18 × R$ 60,00 = R$ 1.080,00 |
| **Total de pessoal** | **138 h** | | **R$ 5.880,00** |

### 8.2. Infraestrutura e software

Todo o projeto roda nos computadores do laboratório, com ferramentas gratuitas. Como a hospedagem em produção está fora do escopo (seção 3.2), não há custo de servidor nem de banco em nuvem.

| Item | Conta | Custo |
|---|---|:---:|
| Computadores do laboratório | 4 × R$ 0,00 | R$ 0,00 |
| Internet do laboratório | 4 meses × R$ 0,00 | R$ 0,00 |
| Node.js, Express, bibliotecas npm | Gratuito | R$ 0,00 |
| MySQL Community + Workbench | Gratuito | R$ 0,00 |
| Postman Free, GitHub + Projects, VS Code | Gratuito | R$ 0,00 |
| **Total de infraestrutura e software** | | **R$ 0,00** |

### 8.3. Reserva de contingência

A reserva é de **15%** sobre o subtotal. Três riscos médios ou altos já aconteceram durante o projeto:
- **risco 1:** o servidor caía quando o MySQL estava desligado (corrigido em 13/11);
- **risco 2:** a maior parte dos commits ficou com uma pessoa;
- **risco 4:** a Sprint 2 passou da capacidade.

O risco 6 é a própria migração para o banco. Todos esses riscos geram retrabalho de desenvolvimento, que é 100% do custo do projeto, por isso o grupo usa 15% e não 10%. Não usa 20% porque nenhum risco envolve compra ou serviço pago.

### 8.4. Resumo

| Bloco | Valor |
|---|:---:|
| 1. Pessoal | R$ 5.880,00 |
| 2. Infraestrutura | R$ 0,00 |
| 3. Software e serviços | R$ 0,00 |
| **Subtotal (1 + 2 + 3)** | **R$ 5.880,00** |
| 4. Reserva de contingência (subtotal × 15%) | R$ 882,00 |
| **TOTAL DO PROJETO** | **R$ 6.762,00** |

---

## 9. Equipe e papéis (RACI)

### 9.1. Papéis

| Integrante | GitHub | Papel no Scrum | Responsabilidades no projeto |
|---|---|---|---|
| Maria Eduarda Pereira dos Santos | @mariaesantos54-png | Product Owner | Requisitos, UML, cadastro e filtros de livros, README |
| João Lucas de Abreu | @Abreu010 | Scrum Master | GitHub Project, listagem e PUT de livros, códigos HTTP, migração para o MySQL |
| Ana Vitória Napoli Sigole | @anasigole-jpg | Time de desenvolvimento | GET e PATCH de livros, categorias, erros do banco, riscos |
| Leonardo Correia Damasceno | @leonardodamascenodev | Time de desenvolvimento | Modelo Livro, busca e exclusão, banco MySQL, relacionamento, testes gerais |

### 9.2. Matriz RACI

A matriz RACI mostra o papel de cada pessoa em cada atividade:
- **R** (Responsável): executa a atividade;
- **A** (Aprovador): responde pelo resultado. Cada atividade tem um só;
- **C** (Consultado): é ouvido antes;
- **I** (Informado): fica sabendo do resultado.

A coluna "Issues" liga cada atividade ao Project, e os R de cada linha são os assignees das issues.

| Atividade | Issues | Maria Eduarda | João Lucas | Ana Vitória | Leonardo |
|---|:---:|:---:|:---:|:---:|:---:|
| Levantamento e revisão de requisitos | — | A/R | C | I | C |
| Modelagem do banco de dados | — | C | I | I | A/R |
| Migração para o MySQL | #15 | I | R | R | A/R |
| Rotas de livros (CRUD e busca) | #1 a #9 | R | R | R | A/R |
| Rotas de categorias | #11, #12 | I | I | A/R | R |
| Testes da API | #13 | I | C | A | R |
| Gestão do Project no GitHub | — | C | A/R | I | I |
| Acompanhamento da matriz de riscos | — | I | A | R | C |
| Documento de Planejamento do Projeto | — | A/R | R | C | C |
| Preparação da defesa oral | — | R | A/R | R | R |
| Padronização de respostas e erros HTTP | #10 | I | A/R | R | C |
| README e documentação da API | #14 | A/R | I | I | R |

Toda linha tem exatamente um A e pelo menos um R. Contagem de R: Maria 5 · João 6 · Ana 6 · Leonardo 7. O Leonardo tem mais R porque concentrou o banco de dados. Para equilibrar, a migração (#15) foi dividida com João e Ana, e as rotas de livros têm os quatro como R.

---

## Histórico de versões

| Versão | Data | O que mudou | Autor(es) |
|---|---|---|---|
| 0.1 | 11/09/2026 | Escopo incluído e excluído | Maria Eduarda |
| 0.2 | 18/09/2026 | Lista de requisitos | Maria Eduarda |
| 0.3 | 25/09/2026 | Primeira matriz de riscos | Ana Vitória |
| 0.4 | 02/10/2026 | Cronograma e issues #1 a #14 no GitHub | João Lucas |
| 0.5 | 16/10/2026 | Matriz de riscos revisada e sprint planning da Sprint 1 | Grupo |
| 0.6 | 23/10/2026 | Estimativas (Planning Poker e Pontos de Função) | Grupo |
| 0.7 | 30/10/2026 | Orçamento e matriz RACI | Leonardo, João Lucas |
| 1.0 | 18/11/2026 | Consolidação: rastreabilidade conferida, issue #15 criada, RNF001 a RNF004, hospedagem retirada do orçamento (R$ 7.130,00 → R$ 6.762,00) | Grupo |
