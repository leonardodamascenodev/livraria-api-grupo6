# Atividade — Orçamento e Papéis do Projeto da Livraria

**UC:** Projetos de Software (PSOF) — Bloco 4

**Grupo:** Grupo 6 — Livraria API **Integrantes:** João Lucas de Abreu, Ana Vitória Napoli Sigole, Maria Eduarda Pereira dos Santos, Leonardo Correia Damasceno

**Tragam abertos:** a estimativa escolhida em 23/10, a lista de recursos e a matriz de riscos revisada em 16/10.

**Custos-hora de referência (iguais para todos os grupos):** Desenvolvedor(a) R$ 40,00 · Gerente de projeto/PO R$ 60,00

> As horas vêm da atividade de estimativas de 23/10 (`docs/atividade-estimativas.md`). A matriz de riscos e os papéis no Scrum vêm da atividade de 16/10 (`docs/atividade-matriz-riscos-sprint-planning.md`), e os responsáveis vêm das issues do GitHub. Os valores foram corrigidos na consolidação do plano (`docs/atividade-consolidacao-plano.md`).

---

## Parte 1 — Orçamento do projeto

### 1.1. Base da estimativa

**Estimativa usada:** ☒ Planning Poker ☐ Pontos de Função ☐ Outra: _______________

**Total de horas de desenvolvimento:** **120** horas

De onde vêm as 120 horas (corrigido na consolidação do plano para cada hora apontar para uma issue ou entrega):

| Parte | O que inclui | Origem do número | Horas |
|---|---|---|:---:|
| Blocos 1 e 2 (antes do backlog) | Diagrama UML e classes (16 h), esqueleto MVC e auditoria UML × código (20 h) | Horas das entregas, feitas antes de existirem issues | 36 |
| Issues #1 a #14 | CRUD de livros, filtros, categorias, padronização HTTP, testes e README | Planning Poker de 23/10 (`docs/atividade-estimativas.md`) | 62 |
| Issue #15 | Migração de livros e categorias para o MySQL | Planning Poker (21, quebrada em 3 + 8 + 8 + 3) | 22 |
| **Total** | | | **120** |

**Por que o grupo escolheu essa estimativa?**
O Planning Poker encaixa no jeito que o grupo trabalha: as tarefas eram pequenas (uma rota, um middleware, uma pasta de testes) e todos os integrantes votam juntos, o que ajuda quem tem menos experiência a entender o tamanho de cada tarefa. Pontos de Função exigiriam contar entradas, saídas e arquivos lógicos de um sistema já bem definido, e o escopo da livraria foi mudando a cada bloco (primeiro em memória, depois no MySQL). Com o Planning Poker o grupo reestimou a cada bloco sem refazer a contagem inteira.

---

### 1.2. Custo de pessoal

**Percentual de horas de gestão adotado** (entre 10% e 20%): **15** %

| Papel | Horas | Custo-hora | Custo (horas × custo-hora) |
|---|---|---|---|
| Desenvolvimento | 120 h | R$ 40,00 | 120 × R$ 40,00 = **R$ 4.800,00** |
| Gestão (horas de dev × percentual) | 120 × 15% = 18 h | R$ 60,00 | 18 × R$ 60,00 = **R$ 1.080,00** |
| **Total de pessoal** | **138 h** | | **R$ 5.880,00** |

Usamos 15% (meio da faixa) porque o grupo tem reunião de acompanhamento a cada bloco, quadro no GitHub Project e rodízio de responsabilidades, mas o projeto é pequeno e não tem cliente externo para negociar.

### 1.3. Infraestrutura

| Item | Valor mensal ou único | Meses de uso | Custo |
|---|---|---|---|
| Computadores de desenvolvimento (laboratório SENAI) | R$ 0,00 (equipamento já existente) | 4 | 4 × R$ 0,00 = R$ 0,00 |
| Internet do laboratório | R$ 0,00 (já contratada pela escola) | 4 | 4 × R$ 0,00 = R$ 0,00 |
| MySQL rodando em cada máquina (`localhost`) | R$ 0,00 | 4 | 4 × R$ 0,00 = R$ 0,00 |
| **Total de infraestrutura** | | | **R$ 0,00** |

Os 4 meses correspondem ao período do projeto (ago a nov). A versão anterior previa um servidor (R$ 140,00) e um banco em nuvem (R$ 180,00). Foram retirados na consolidação, porque a hospedagem em produção está no **escopo excluído**: a API só roda em `localhost`.

### 1.4. Software e serviços

| Item | Gratuito ou pago? | Custo |
|---|---|---|
| Node.js, Express 5, mysql2, dotenv, nodemon (npm) | Gratuito (código aberto) | R$ 0,00 |
| MySQL Community Server + MySQL Workbench | Gratuito (Community) | R$ 0,00 |
| Postman (plano Free) | Gratuito | R$ 0,00 |
| GitHub (repositório + GitHub Projects) e VS Code | Gratuito | R$ 0,00 |
| **Total de software e serviços** | | **R$ 0,00** |

Todas as ferramentas usadas no projeto são gratuitas; o plano Free do Postman e do GitHub atende um time de 4 pessoas.

### 1.5. Reserva de contingência

**Riscos médios e altos da matriz** (só o número e o nome):

- **1** — Ambiente diferente em cada máquina (Node, MySQL, senha, `.env`) — **alto** (16)
- **2** — Concentração do código em um único integrante — **alto** (16)
- **3** — Conflitos de merge no Git / perda de código — **médio** (9)
- **4** — Atraso no cronograma (faltas, provas de outras UCs) — **médio** (9)
- **6** — Migração de memória para o MySQL quebrar rotas que já funcionavam — **médio** (12)

> Mesma numeração da matriz revisada em 16/10 (`docs/atividade-matriz-riscos-sprint-planning.md`). O risco 5 ficou baixo e não entra aqui.

**Percentual escolhido:** **15** %

**Justificativa** (ligada aos riscos acima):
Três desses riscos já aconteceram durante o projeto. O risco 1: o servidor caía quando o MySQL estava desligado ou com a senha errada, e isso só foi corrigido em 13/11. O risco 2: a maior parte dos commits ficou com um integrante. O risco 3: alguns merges precisaram ser corrigidos. O risco 6 é a própria migração para o MySQL feita no Bloco 4. Todos geram retrabalho de desenvolvimento, que é o maior custo do orçamento, por isso escolhemos 15% em vez de 10%. Não fomos para 20% porque nenhum risco envolve compra ou serviço pago e todas as ferramentas são gratuitas.

### 1.6. Resumo do orçamento

| Bloco | Valor |
|---|---|
| 1. Pessoal | R$ 5.880,00 |
| 2. Infraestrutura | R$ 0,00 |
| 3. Software e serviços | R$ 0,00 |
| **Subtotal (1 + 2 + 3)** | **R$ 5.880,00** |
| 4. Reserva de contingência (subtotal × **15** %) | R$ 5.880,00 × 15% = R$ 882,00 |
| **TOTAL DO PROJETO** | **R$ 6.762,00** |

> Total corrigido na consolidação do plano: era R$ 7.130,00 antes de sair a hospedagem (R$ 320,00 + 15% = R$ 368,00 a menos).

---

## Parte 2 — Equipe, papéis e matriz RACI

### 2.1. Papéis de cada integrante

| Integrante | Papel(éis) no projeto | Papel no Scrum (16/10) |
|---|---|---|
| Maria Eduarda Pereira dos Santos | Requisitos, modelagem UML, cadastro e filtros de livros (#5, #9), README (#14) | Product Owner |
| João Lucas de Abreu | Gestão do GitHub Project, listagem e PUT de livros (#2, #6), padronização de respostas HTTP (#10) | Scrum Master |
| Ana Vitória Napoli Sigole | GET e PATCH de livros (#3, #7), categorias (#11), erros do banco, acompanhamento dos riscos | Time de Desenvolvimento |
| Leonardo Correia Damasceno | Modelo Livro, busca e exclusão (#1, #4, #8), banco MySQL, categorias × livros (#12), testes gerais (#13) | Time de Desenvolvimento |
| — | — | — |

> O grupo tem 4 integrantes, por isso a 5ª linha e a 5ª coluna ficam vazias. Os papéis no Scrum são os da simulação de sprint planning de 16/10, e os números das issues são os do GitHub.

### 2.2. Matriz RACI

**R** = Responsável (executa) · **A** = Aprovador (responde pelo resultado) · **C** = Consultado · **I** = Informado

| Atividade | Integrante 1: Maria Eduarda | Integrante 2: João Lucas | Integrante 3: Ana Vitória | Integrante 4: Leonardo | Integrante 5: — |
|---|:---:|:---:|:---:|:---:|:---:|
| Atividade | Issues no GitHub | Integrante 1: Maria Eduarda | Integrante 2: João Lucas | Integrante 3: Ana Vitória | Integrante 4: Leonardo | Integrante 5: — |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| Levantamento e revisão de requisitos | — | A/R | C | I | C | |
| Modelagem do banco de dados | — | C | I | I | A/R | |
| Migração para o MySQL | #15 | I | R | R | A/R | |
| Rotas de livros (CRUD e busca) | #1 a #9 | R | R | R | A/R | |
| Rotas de categorias | #11, #12 | I | I | A/R | R | |
| Testes da API | #13 | I | C | A | R | |
| Gestão do Project no GitHub | — | C | A/R | I | I | |
| Acompanhamento da matriz de riscos | — | I | A | R | C | |
| Documento de Planejamento do Projeto | — | A/R | R | C | C | |
| Preparação da defesa oral | — | R | A/R | R | R | |
| Padronização de respostas e erros HTTP | #10 | I | A/R | R | C | |
| README e documentação da API | #14 | A/R | I | I | R | |

### 2.3. Conferência da matriz

- [x] Toda linha tem **exatamente um A**
- [x] Toda linha tem **pelo menos um R**
- [x] Nenhum integrante tem R em quase todas as linhas

Contagem de R por integrante (12 atividades): Maria Eduarda 5 · João Lucas 6 · Ana Vitória 6 · Leonardo 7.

**Algum integrante ficou sobrecarregado? O que o grupo decidiu fazer?**
Sim, o Leonardo. No GitHub ele tem 5 das 14 issues (#1, #4, #8, #12, #13), enquanto cada colega tem 3. No histórico do repositório a diferença é maior: cerca de 43 dos 56 commits são dele. O grupo decidiu que cada integrante faz o commit da própria issue e que outra pessoa revisa antes do merge (Definição de Pronto). Também decidiu que, a partir do próximo bloco, uma das issues do Leonardo passa para quem tiver menos horas na sprint, seguindo o rodízio de responsabilidades previsto no README.

**A matriz bate com os assignees das issues no Project?** ☒ Sim ☐ Não → o que foi ajustado?
Conferido nas issues do GitHub em 18/11. Antes, a matriz não batia nas linhas de testes, padronização HTTP e README, e foi a matriz que mudou para seguir as issues:
- **Testes da API:** o R passou para o Leonardo (assignee da #13).
- **Padronização de respostas e erros HTTP:** o A/R passou para o João Lucas (assignee da #10).
- **README e documentação:** o A/R passou para a Maria Eduarda (assignee da #14).
- **Rotas de livros:** todos ficaram com R, porque as issues #1 a #9 estão divididas entre os 4.

No GitHub, as 14 issues foram fechadas, receberam labels e foram colocadas nos milestones M1, M2 e M3. Todas estão no Project [Livraria API - Grupo 6](https://github.com/users/leonardodamascenodev/projects/1). Na consolidação foi criada a #15 (migração para o MySQL), com Leonardo, João e Ana como assignees, os mesmos R da nova linha da matriz.

---

## Antes de encerrar, confiram

- [ ] A estimativa usada é a mesma escolhida em 23/10, com justificativa *(conferir: foi usado Planning Poker com 120 h)*
- [x] As horas de gestão foram incluídas
- [x] Cada linha do orçamento mostra a conta (quantidade × valor)
- [x] A reserva de contingência tem percentual justificado pelos riscos
- [x] O total do projeto confere com a soma dos blocos
- [x] A matriz RACI respeita as regras (um A e pelo menos um R por atividade)
- [x] Os papéis da matriz conferem com os assignees das issues no Project
- [ ] Orçamento e matriz foram salvos no espaço compartilhado do grupo
