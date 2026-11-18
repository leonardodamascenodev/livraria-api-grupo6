# Atividade — Orçamento e Papéis do Projeto da Livraria

**UC:** Projetos de Software (PSOF) — Bloco 4

**Grupo:** Grupo 6 — Livraria API **Integrantes:** João Lucas de Abreu, Ana Vitória Napoli Sigole, Maria Eduarda Pereira dos Santos, Leonardo Correia Damasceno

**Tragam abertos:** a estimativa escolhida em 23/10, a lista de recursos e a matriz de riscos revisada em 16/10.

**Custos-hora de referência (iguais para todos os grupos):** Desenvolvedor(a) R$ 40,00 · Gerente de projeto/PO R$ 60,00

> ⚠️ **Conferir antes de entregar:** a estimativa de 23/10 não está no repositório; as horas foram montadas a partir do que o projeto entregou (commits, README e Postman). A matriz de riscos e os papéis no Scrum vêm da atividade de 16/10 (`docs/atividade-matriz-riscos-sprint-planning.md`), e os responsáveis vêm das issues do GitHub.

---

## Parte 1 — Orçamento do projeto

### 1.1. Base da estimativa

**Estimativa usada:** ☒ Planning Poker ☐ Pontos de Função ☐ Outra: _______________

**Total de horas de desenvolvimento:** **120** horas

Distribuição das horas pelas entregas do projeto:

| Entrega | O que inclui | Horas |
|---|---|:---:|
| Bloco 1 — Modelagem | Diagrama UML, classes `Livro`, `Categoria`, `Pessoa`, `Cliente`, `Funcionario`, `Carrinho` | 16 |
| Bloco 2 — Arquitetura | Esqueleto MVC (routes, controllers, services) e auditoria UML × código | 20 |
| Bloco 3 — API em memória | CRUD de livros e categorias, filtros, validações e middlewares | 32 |
| Bloco 4 — MySQL | Script do banco, integração com `mysql2`, relacionamento livro × categoria, tratamento de erros do banco | 36 |
| Testes | Coleção do Postman (71 requisições, 89 testes) | 16 |
| **Total** | | **120** |

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
| Servidor para hospedar a API Node.js (VPS básica) | R$ 35,00 / mês | 4 | 4 × R$ 35,00 = R$ 140,00 |
| Banco MySQL gerenciado em nuvem | R$ 45,00 / mês | 4 | 4 × R$ 45,00 = R$ 180,00 |
| Computadores de desenvolvimento (laboratório SENAI) | R$ 0,00 (equipamento já existente) | 4 | 4 × R$ 0,00 = R$ 0,00 |
| **Total de infraestrutura** | | | **R$ 320,00** |

Os 4 meses correspondem ao período do projeto (ago a nov). Durante as aulas a API rodou em `localhost`, mas o orçamento prevê onde ela ficaria hospedada para uso real.

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
| 2. Infraestrutura | R$ 320,00 |
| 3. Software e serviços | R$ 0,00 |
| **Subtotal (1 + 2 + 3)** | **R$ 6.200,00** |
| 4. Reserva de contingência (subtotal × **15** %) | R$ 6.200,00 × 15% = R$ 930,00 |
| **TOTAL DO PROJETO** | **R$ 7.130,00** |

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

Contagem de R por integrante (11 atividades): Maria Eduarda 5 · João Lucas 5 · Ana Vitória 5 · Leonardo 6.

**Algum integrante ficou sobrecarregado? O que o grupo decidiu fazer?**
Sim, o Leonardo. No GitHub ele tem 5 das 14 issues (#1, #4, #8, #12, #13), enquanto cada colega tem 3. No histórico do repositório a diferença é maior: cerca de 43 dos 56 commits são dele. O grupo decidiu que cada integrante faz o commit da própria issue e que outra pessoa revisa antes do merge (Definição de Pronto). Também decidiu que, a partir do próximo bloco, uma das issues do Leonardo passa para quem tiver menos horas na sprint, seguindo o rodízio de responsabilidades previsto no README.

**A matriz bate com os assignees das issues no Project?** ☒ Sim ☐ Não → o que foi ajustado?
Conferido nas issues do GitHub em 18/11. Antes, a matriz não batia nas linhas de testes, padronização HTTP e README, e foi a matriz que mudou para seguir as issues:
- **Testes da API:** o R passou para o Leonardo (assignee da #13).
- **Padronização de respostas e erros HTTP:** o A/R passou para o João Lucas (assignee da #10).
- **README e documentação:** o A/R passou para a Maria Eduarda (assignee da #14).
- **Rotas de livros:** todos ficaram com R, porque as issues #1 a #9 estão divididas entre os 4.

No GitHub, as 14 issues foram fechadas, receberam labels e foram colocadas nos milestones M1, M2 e M3. Todas estão no Project [Livraria API - Grupo 6](https://github.com/users/leonardodamascenodev/projects/1).

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
