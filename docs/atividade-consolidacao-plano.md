# Atividade — Consolidação do Documento de Planejamento do Projeto

**UC:** Projetos de Software (PSOF) — Bloco 4

**Grupo:** Grupo 6 — Livraria API **Integrantes:** João Lucas de Abreu, Ana Vitória Napoli Sigole, Maria Eduarda Pereira dos Santos, Leonardo Correia Damasceno

**Tragam abertos:** escopo (11/09), requisitos (18/09), matriz de riscos revisada (16/10), cronograma e Project do GitHub, estimativas (23/10), orçamento e RACI (30/10).

> ⚠️ **Conferir antes de entregar:** as listas de escopo (11/09) e de requisitos (18/09) não estão no repositório. Os requisitos RF001 a RF007 e RNF001 a RNF004 foram reconstruídos a partir das issues e do README. Se a numeração do grupo for outra, troquem só os códigos; as issues e as horas são as do Project.

---

## Parte 1 — Conferência de rastreabilidade

### 1.1. Linha 1 — Requisito → Issue → Estimativa

| Requisito | Issue(s) no Project | Estimativa (horas) | Problema encontrado |
|---|---|:---:|---|
| RF001 — Listar livros com filtros (título, autor, preço, categoria) | #2, #3, #9 | 2 + 3 + 3 = 8 h | Nenhum |
| RF002 — Consultar livro por id | #4 | 3 h | O título da issue dizia "por índice", mas a API usa `id` desde 16/10 → título corrigido |
| RF003 — Cadastrar livro com validação | #1, #5 | 3 + 5 = 8 h | Nenhum |
| RF004 — Alterar livro (completo e parcial) | #6, #7 | 3 + 3 = 6 h | Nenhum |
| RF005 — Excluir livro | #8 | 2 h | Nenhum |
| RF006 — Gerenciar categorias (CRUD) | #11 | 8 h | Nenhum |
| RF007 — Associar livro a uma categoria | #12 | 11 h | Recebeu "?" e 21 no Planning Poker → foi quebrada em 3 partes |
| **Total dos RF** | **12 issues** | **46 h** | |

**Existe alguma issue que não corresponde a nenhum requisito?** ☐ Não ☒ Sim → qual(is)? O que fazer com ela?
Sim, quatro: **#10** (padronizar respostas HTTP), **#13** (testes gerais), **#14** (README) e **#15** (migração para o MySQL). Elas não são funções que o usuário enxerga, então não cabem em um RF. Também não podem sair do backlog, porque são trabalho real. A decisão foi ligar cada uma a um requisito **não funcional**:

| Requisito não funcional | Issue | Estimativa |
|---|:---:|:---:|
| RNF001 — Respostas em JSON com códigos HTTP padronizados (200, 201, 204, 400, 404, 409, 500, 503) | #10 | 5 h |
| RNF002 — Todas as rotas testadas automaticamente no Postman | #13 | 8 h |
| RNF003 — API documentada no README (instalação, rotas, exemplos, erros) | #14 | 3 h |
| RNF004 — Dados guardados no MySQL, com integridade referencial entre livro e categoria | #15 | 22 h |
| **Total dos RNF** | | **38 h** |

**A soma das estimativas é a mesma base de horas usada no orçamento?** ☐ Sim ☒ Não → qual valor fica?
Não batia. O orçamento usava **120 h** divididas por bloco, e as issues somavam **62 h** (Planning Poker de 23/10). A diferença vinha de duas coisas que não tinham issue:
- o trabalho dos Blocos 1 e 2 (UML e esqueleto MVC), feito antes de existir backlog;
- a migração para o MySQL, que virou a issue #15.

**Fica o valor de 120 h**, agora explicado: 36 h (Blocos 1 e 2) + 46 h (RF) + 38 h (RNF) = **120 h**. A tabela 1.1 do orçamento foi refeita com essa conta.

### 1.2. Linha 2 — Risco → Resposta → Onde aparece no plano

| Risco médio/alto | Resposta (estratégia + ação) | Onde aparece no plano |
|---|---|---|
| **1** — Ambiente diferente em cada máquina (alto, 16) | Mitigar: `.env.example`, passo a passo no README e `livraria.sql` que recria o banco | Dono: Leonardo. Entregue no repositório (`.env.example`, README "Como rodar", `src/database/livraria.sql`). Na API, o banco desligado responde 503 em vez de derrubar o servidor |
| **2** — Concentração do código em um integrante (alto, 16) | Mitigar: issues divididas entre os 4 e PR revisado por outra pessoa | Dono: João (SM). Assignees distribuídos nas 15 issues, matriz RACI e item 3 da Definição de Pronto (revisão por outro integrante) |
| **3** — Conflitos de merge (médio, 9) | Mitigar: `git pull` antes, branch por issue, merge só com o Postman verde | Dona: Ana. Item 1 da Definição de Pronto (código no `main` sem conflito) |
| **4** — Atraso no cronograma (médio, 9) | Mitigar: fator de foco 0,7 e acompanhamento do quadro | Dono: João (SM). Capacidade da sprint (42 h × 0,7), contingência de 15% no orçamento e gatilho em 23/10 |
| **6** — Migração para o MySQL quebrar rotas (médio, 12) | Mitigar: coleção do Postman completa e rodada a cada commit | Dona: Ana. A #10 foi antecipada para a Sprint 1, a #15 tem a sua própria estimativa e o Runner passou 89 de 89 testes na entrega do Bloco 4 |

**Algum risco médio ou alto não aparece em lugar nenhum além da matriz?** ☒ Não ☐ Sim
Todos aparecem em algum lugar além da matriz. O risco 4 foi o que menos funcionou na prática: a Sprint 2 recebeu 55 h de trabalho para uma capacidade de cerca de 29 h (ver correção 5).

### 1.3. Linha 3 — Escopo excluído

| Item do escopo excluído | Voltou como requisito ou issue? | Decisão |
|---|---|---|
| Vendas: pedidos, itens do pedido e carrinho de compras | ☒ Não ☐ Sim | Continua fora. As classes `Pedido` e `ItemPedido` ficam só no diagrama UML e a classe `Carrinho` só em `src/models`, como planejamento futuro. Nenhuma rota |
| Cadastro e login de clientes e funcionários | ☒ Não ☐ Sim | Continua fora. As classes `Pessoa`, `Cliente` e `Funcionario` existem só como modelo (Bloco 1). Isso já está registrado na auditoria UML × código do README |
| Hospedagem da API em produção (deploy) | ☐ Não ☒ Sim | **Voltou no orçamento** como servidor (R$ 140,00) e banco em nuvem (R$ 180,00). Decisão: retirar do orçamento, porque a API só roda em `localhost`. Total corrigido de R$ 7.130,00 para R$ 6.762,00 |

### 1.4. Linha 4 — RACI → Assignees

| Atividade | R na matriz RACI | Assignee(s) das issues no Project | Confere? |
|---|---|---|:---:|
| Rotas de livros (#1 a #9) | Maria, João, Ana, Leonardo | #1, #4, #8 Leonardo · #2, #6 João · #3, #7 Ana · #5, #9 Maria | ☒ |
| Rotas de categorias (#11, #12) | Ana, Leonardo | #11 Ana · #12 Leonardo | ☒ |
| Padronização HTTP (#10) | João, Ana | #10 João | ☒ *(a Ana é R pelo tratamento de erros do banco, que está dentro da #15)* |
| Testes da API (#13) | Leonardo | #13 Leonardo | ☒ |
| README e documentação (#14) | Maria, Leonardo | #14 Maria | ☒ *(o Leonardo é R pelas atualizações do README no Bloco 4)* |
| Migração para o MySQL (#15) | Leonardo, João, Ana | #15 Leonardo, João, Ana | ☒ |

### 1.5. Lista de correções

| # | Contradição | Correção | Responsável |
|:---:|---|---|---|
| 1 | O orçamento cobrava hospedagem (R$ 320,00), que está no escopo excluído | Hospedagem retirada; infraestrutura = R$ 0,00 e total = **R$ 6.762,00** | Leonardo |
| 2 | As 120 h do orçamento não batiam com as 62 h do Planning Poker | Base explicada: 36 h (Blocos 1 e 2) + 62 h (issues #1 a #14) + 22 h (#15) = 120 h | Leonardo |
| 3 | A migração para o MySQL (Bloco 4) foi feita sem issue no Project | Criada a issue **#15**, com estimativa de 22 h, assignees, milestone M3 e Sprint 2, e incluída na RACI | João (SM) |
| 4 | As issues #10, #13, #14 e #15 não correspondiam a nenhum requisito | Criados RNF001 a RNF004 e cada issue ligada a um deles | Maria (PO) |
| 5 | A Sprint 2 recebeu 55 h de trabalho para cerca de 29 h de capacidade | Registrado como lição no plano (seção 6): o risco 4 aconteceu e foi coberto com horas extras perto de 13/11. Nas próximas sprints, a #13, a #14 e a #15 ficariam em uma Sprint 3 | João (SM) |
| 6 | A issue #4 falava em "índice", mas a API usa `id` desde 16/10 | Título da issue corrigido para "Implementar consulta de livro por id" | João (SM) |

---

## Parte 2 — Montagem do documento

Arquivo criado: **`docs/plano-de-projeto.md`**.

| Seção | Quem escreve | Concluída |
|---|---|:---:|
| Cabeçalho de identificação | João Lucas | ☒ |
| 1. Visão geral | Maria Eduarda | ☒ |
| 2. Metodologia | João Lucas | ☒ |
| 3. Escopo | Maria Eduarda | ☒ |
| 4. Requisitos | Maria Eduarda | ☒ |
| 5. Riscos | Ana Vitória | ☒ |
| 6. Cronograma (com link do Project) | João Lucas | ☒ |
| 7. Estimativa e recursos | Leonardo | ☒ |
| 8. Orçamento | Leonardo | ☒ |
| 9. Equipe e papéis (RACI) | Ana Vitória | ☒ |
| Histórico de versões | Ana Vitória | ☒ |
| **Revisão final de coerência** | **Ana Vitória** | ☐ |

A revisão final ficou com a Ana porque ela é dona dos riscos 3 e 6 e escreveu menos seções técnicas. Assim ela lê o documento com olhar de fora.

**Todas as correções da Parte 1.5 foram aplicadas no documento?** ☒ Sim ☐ Não
As correções 1 a 6 estão no `docs/plano-de-projeto.md`. As correções 1 a 4 também foram aplicadas no `docs/atividade-orcamento-raci.md`, e as correções 3 e 6 no GitHub.

**Link do arquivo no GitHub:** https://github.com/leonardodamascenodev/livraria-api-grupo6/blob/main/docs/plano-de-projeto.md

---

## Parte 3 — Revisão cruzada

**Nosso grupo revisou o documento do grupo:** __ *(pendente: combinar com o professor qual grupo revisamos, até 13/11)*

| Critério | Sim | Parcial | Não |
|---|:---:|:---:|:---:|
| Dá para entender o projeto sem ter acompanhado as aulas | ☐ | ☐ | ☐ |
| As siglas são explicadas e as tabelas têm frase de contexto | ☐ | ☐ | ☐ |
| Todo requisito funcional tem tarefa e estimativa | ☐ | ☐ | ☐ |
| Os riscos médios/altos têm resposta com dono e gatilho | ☐ | ☐ | ☐ |
| A contingência do orçamento é justificada pelos riscos | ☐ | ☐ | ☐ |
| As contas do orçamento conferem | ☐ | ☐ | ☐ |
| A matriz RACI tem um A e pelo menos um R por atividade | ☐ | ☐ | ☐ |
| As escolhas (metodologia, estimativa, contingência) estão justificadas | ☐ | ☐ | ☐ |

**Até 3 pontos de melhoria para o outro grupo:**

1.
2.
3.

**Uma pergunta que a banca provavelmente faria a esse grupo:**

> Esta parte depende de ler o documento de outro grupo e fica para o grupo preencher em aula.

---

## Antes de encerrar, confiram

- [x] As quatro linhas de rastreabilidade foram conferidas
- [x] As contradições encontradas foram corrigidas no documento (ou registradas como pendentes)
- [x] O documento tem todas as seções do modelo
- [x] As escolhas do grupo estão justificadas, não só registradas
- [x] O documento cita apenas as tecnologias que a Back-End realmente usa
- [x] `docs/plano-de-projeto.md` foi commitado no repositório do grupo
- [ ] A revisão cruzada foi feita (ou agendada até 13/11) e os apontamentos foram entregues ao outro grupo
