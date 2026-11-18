# Atividade — Matriz de Risco Aplicada e Simulação de Sprint Planning

**UC:** Projetos de Software (PSOF) — Bloco 4

**Grupo:** Grupo 6 — Livraria API **Integrantes:** João Lucas de Abreu, Ana Vitória Napoli Sigole, Maria Eduarda Pereira dos Santos, Leonardo Correia Damasceno

**Tragam abertos:** a matriz de riscos de 25/09, o cronograma de 02/10 e o Project do grupo no GitHub.

> ⚠️ **Conferir antes de entregar:** a matriz original de 25/09 não está no repositório, então as notas "antes" foram reconstruídas. As issues (#1 a #14), os responsáveis e as dependências são os reais do GitHub, criados em 02/10. Se as notas da matriz de 25/09 forem outras, troquem só as colunas "antes".

---

## Parte 1 — Matriz de riscos revisada

### 1.1. Revisão das notas

Escala de 1 a 5 para probabilidade e impacto. **Pontuação = Probabilidade × Impacto.**
Classificação: **1 a 6 = baixo** · **8 a 12 = médio** · **15 a 25 = alto**.

| # | Risco | Prob. antes | Prob. agora | Impacto antes | Impacto agora | Pontuação agora | Classificação |
|:---:|---|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 | Ambiente diferente em cada máquina (Node, MySQL, senha, `.env`) impede rodar a API | 3 | 4 | 3 | 4 | 4 × 4 = **16** | 🔴 Alto |
| 2 | Concentração do código em um único integrante | 3 | 4 | 4 | 4 | 4 × 4 = **16** | 🔴 Alto |
| 3 | Conflitos de merge no Git / perda de código | 3 | 3 | 3 | 3 | 3 × 3 = **9** | 🟡 Médio |
| 4 | Atraso no cronograma (faltas, provas e trabalhos de outras UCs) | 3 | 3 | 4 | 3 | 3 × 3 = **9** | 🟡 Médio |
| 5 | Requisitos mal entendidos / escopo mudando | 3 | 2 | 3 | 3 | 2 × 3 = **6** | 🟢 Baixo |
| 6 | *(novo)* Migração de memória para o MySQL quebrar rotas que já funcionavam | — | 3 | — | 4 | 3 × 4 = **12** | 🟡 Médio |

**Algum risco mudou de classificação? Por quê?**
Sim, três riscos:
- **Risco 1 (médio → alto):** o Bloco 4 vai levar a API para o MySQL. Cada integrante precisará ter o MySQL instalado, com a sua senha no `.env`. Se uma máquina não conectar, a pessoa fica sem conseguir testar nada.
- **Risco 2 (médio → alto):** até 16/10, quase todos os commits do repositório eram de um único integrante. Se ele faltar, o grupo para.
- **Risco 5 (médio → baixo):** em 02/10 o grupo criou 14 issues com objetivo, critérios de aceite e dependências. Com isso, o escopo ficou claro e ficou menos provável entender um requisito errado.

O risco 4 continuou médio, mas o impacto caiu de 4 para 3: o cronograma de 02/10 dividiu o trabalho em três marcos (M1, M2 e M3), e um atraso afeta só um marco.

**Surgiu algum risco novo desde 25/09?**
Sim, o **risco 6**. A API hoje guarda os livros em um array na memória e o próximo bloco troca isso pelo MySQL. Nessa troca, rotas que já funcionam (filtros, PUT, PATCH) podem quebrar sem ninguém perceber.

### 1.2. Mapa de calor

| Probabilidade ↓ / Impacto → | 1 | 2 | 3 | 4 | 5 |
|---|:---:|:---:|:---:|:---:|:---:|
| **5** | | | | | |
| **4** | | | | **1, 2** 🔴 | |
| **3** | | | **3, 4** 🟡 | **6** 🟡 | |
| **2** | | | **5** 🟢 | | |
| **1** | | | | | |

### 1.3. Plano de resposta

| # | Estratégia | Ação concreta | Dono do risco | Gatilho (sinal observável) | Plano de contingência |
|:---:|---|---|---|---|---|
| 1 | Mitigar | Criar `.env.example` e um passo a passo no README. Deixar o `livraria.sql` recriando o banco do zero. Todo mundo sobe a API em casa até 30/10. | Leonardo | Até 30/10, algum integrante não vê `Conectado ao MySQL!` no terminal, ou a API devolve `503` / `ECONNREFUSED`. | Configurar em dupla com quem já tem a API rodando. Enquanto isso, a pessoa trabalha na máquina do colega ou do laboratório. |
| 2 | Mitigar | Cada integrante fica com issues próprias no Project (3 a 5 cada) e faz commit do próprio trabalho. Os PRs são revisados por outra pessoa. | João (Scrum Master) | `git shortlog -sn --since="1 week ago"` mostra mais de 60% dos commits da semana em uma pessoa, ou alguém fica 7 dias sem issue em "In progress". | Na reunião seguinte, o Scrum Master passa as issues paradas para outra pessoa e monta uma dupla (pair programming) com quem está sobrecarregado. |
| 3 | Mitigar | Fazer `git pull` antes de começar, uma branch por issue, commits pequenos e merge só depois que o Postman passa. | Ana | Um merge com conflito em 2 ou mais arquivos, ou um commit de "merge" que precisa corrigir a estrutura de pastas. | Voltar para o último commit estável (`git revert`) e refazer a mudança em uma branch nova a partir do `main` atualizado. |
| 4 | Mitigar | Planejar com fator de foco 0,7, sem encher a sprint, e acompanhar o quadro em toda aula. | João (Scrum Master) | Em 23/10 (metade da sprint), mais de 50% das horas da sprint ainda estão em "Todo", ou uma issue fica parada mais de 3 dias. | O PO retira da sprint a issue de menor prioridade e ela volta para o backlog da Sprint 2. |
| 6 | Mitigar | Antes da migração, a coleção do Postman cobre todas as rotas. Depois de cada commit da migração, roda a coleção inteira no Runner. | Ana | Qualquer teste do Runner falha depois de um commit, ou uma rota que dava `200` passa a dar `500`. | Desfazer o commit que quebrou (`git revert`), corrigir em uma branch e só voltar ao `main` com o Runner 100% verde. |

> O risco 5 ficou baixo e por isso não precisa de plano. O grupo só acompanha.

---

## Parte 2 — Simulação de sprint planning

### 2.1. Papéis

| Papel | Integrante |
|---|---|
| Product Owner (representa o dono da livraria) | Maria Eduarda Pereira dos Santos |
| Scrum Master (conduz a reunião e controla o tempo) | João Lucas de Abreu |
| Time de desenvolvimento | Ana Vitória Napoli Sigole, Leonardo Correia Damasceno *(Maria Eduarda e João Lucas também pegam issues de desenvolvimento)* |

### 2.2. Capacidade da Sprint 1

**Duração da Sprint 1:** de **16/10** a **30/10** (2 semanas)

| Integrante | Horas disponíveis para o projeto na sprint |
|---|:---:|
| Leonardo Correia Damasceno | 12 h |
| João Lucas de Abreu | 14 h |
| Ana Vitória Napoli Sigole | 10 h |
| Maria Eduarda Pereira dos Santos | 6 h *(parte do tempo vai para o papel de PO)* |
| — | — |
| **Total** | **42 h** |

**Fator de foco adotado** (entre 0,6 e 0,8): **0,7**

**Capacidade da sprint** (total × fator de foco): 42 × 0,7 = **29,4 horas** → arredondamos para baixo: **29 horas**

Escolhemos 0,7 por causa do risco 4: o grupo também tem provas e trabalhos de outras UCs na mesma época.

### 2.3. Backlog priorizado (apresentado pelo PO)

| Ordem | Nº da issue | Título | Horas estimadas (chute do time) | Por que está nesta posição? |
|:---:|:---:|---|:---:|---|
| 1 | #1 | Revisar e padronizar modelo Livro | 2 h | Base de tudo: as issues #2 e #5 dependem dela |
| 2 | #2 | Revisar serviço de listagem de livros | 2 h | Depende de #1 e libera #3 e #4 |
| 3 | #3 | Implementar e testar GET /livros | 3 h | Rota mais usada pelo dono da livraria (consultar o acervo) |
| 4 | #4 | Implementar consulta de livro por índice | 3 h | Libera o DELETE (#8) e o 404 de livro inexistente |
| 5 | #5 | Implementar e validar cadastro de livros | 4 h | Sem cadastro a livraria não alimenta o acervo; libera o PUT (#6) |
| 6 | #6 | Implementar atualização completa de livro | 4 h | Depende de #5 e libera o PATCH (#7) |
| 7 | #7 | Implementar atualização parcial de livro | 3 h | Fecha a edição de livros (mudar só preço ou estoque) |
| 8 | #8 | Implementar exclusão de livro | 3 h | Fecha o CRUD (marco M1) |
| 9 | #10 | Padronizar respostas e códigos HTTP | 3 h | **Antecipada por causa do risco 6:** com erros padronizados (400/404/500) agora, a migração para o MySQL só precisa acrescentar os erros do banco |
| 10 | #9 | Revisar filtros por autor e preço máximo | 3 h | Os filtros já existem; é só revisar (marco M2) |
| 11 | #11 | Implementar gerenciamento de categorias | 6 h | Marco M2; depende de o modelo estar estável |
| 12 | #12 | Integrar categorias aos livros | 5 h | Depende de #11 |
| 13 | #13 | Executar testes gerais da API | 4 h | Depende de #9, #10 e #12 (marco M3) |
| 14 | #14 | Atualizar README e documentação da API | 3 h | Depende de #13; é a última entrega |

*(As horas aqui são uma primeira estimativa rápida. Na próxima aula vocês vão estimar com técnicas próprias e comparar.)*

### 2.4. Meta da Sprint 1

> **Ao final da Sprint 1, o dono da livraria consegue listar, buscar, cadastrar, alterar e apagar livros pela API, com validação dos dados e códigos HTTP padronizados, tudo testado no Postman.**

### 2.5. Backlog da Sprint 1

Issues puxadas na ordem do backlog priorizado até a capacidade de 29 h. A próxima da fila, #9 (3 h), passaria para 30 h e ficou de fora.

| Nº da issue | Título | Horas | Responsável | Depende de |
|:---:|---|:---:|---|---|
| #1 | Revisar e padronizar modelo Livro | 2 h | Leonardo | — |
| #2 | Revisar serviço de listagem de livros | 2 h | João Lucas | #1 |
| #3 | Implementar e testar GET /livros | 3 h | Ana Vitória | #2 |
| #4 | Implementar consulta de livro por índice | 3 h | Leonardo | #2 |
| #5 | Implementar e validar cadastro de livros | 4 h | Maria Eduarda | #1 |
| #6 | Implementar atualização completa de livro | 4 h | João Lucas | #5 |
| #7 | Implementar atualização parcial de livro | 3 h | Ana Vitória | #6 |
| #8 | Implementar exclusão de livro | 3 h | Leonardo | #4 |
| #10 | Padronizar respostas e códigos HTTP | 3 h | João Lucas | #4, #5, #6, #7, #8 |
| **Total** | **9 issues** | **27 h** | | |

Horas por pessoa × capacidade individual (horas disponíveis × 0,7):

| Integrante | Horas na sprint | Capacidade individual |
|---|:---:|:---:|
| Leonardo | 2 + 3 + 3 = 8 h | 12 × 0,7 = 8,4 h |
| João Lucas | 2 + 4 + 3 = 9 h | 14 × 0,7 = 9,8 h |
| Ana Vitória | 3 + 3 = 6 h | 10 × 0,7 = 7 h |
| Maria Eduarda | 4 h | 6 × 0,7 = 4,2 h |

**O total ficou dentro da capacidade da sprint?** ☒ Sim ☐ Não — 27 h de 29 h, e ninguém passou da própria capacidade.

**Algum risco da Parte 1 influenciou a escolha das issues? Qual e como?**
Sim, dois:
- **Risco 6 (migração quebrar rotas):** a issue #10 (padronizar respostas e códigos HTTP) passou na frente da #9 (filtros) e entrou na sprint. Com as respostas de erro padronizadas antes da migração, depois basta acrescentar os erros do banco, sem refazer as rotas.
- **Risco 2 (concentração em uma pessoa):** a sprint foi montada com os responsáveis já definidos nas issues, de modo que os 4 integrantes têm trabalho. A carga de cada um ficou dentro da sua capacidade individual.

### 2.6. Definição de Pronto do grupo

Uma issue só vai para "Done" quando:

1. Todos os critérios de aceite da issue estão marcados e o código está no `main` sem conflito.
2. A rota foi testada no Postman: a requisição nova está salva na coleção e o Runner da coleção inteira passa sem nenhuma falha.
3. Outro integrante revisou o código e, se a rota mudou, o README foi atualizado. A issue é fechada pelo commit ou PR (`closes #nº`).

### 2.7. Registro no GitHub

- [x] Campo **Iteration** criado no Project, com a Sprint 1 configurada (16/10 a 30/10)
- [x] Issues do backlog da sprint marcadas com a iteração "Sprint 1": #1, #2, #3, #4, #5, #6, #7, #8, #10
- [ ] Visão Board filtrada pela sprint atual (`iteration:@current`)

> **Registro feito em 18/11** no Project [Livraria API - Grupo 6](https://github.com/users/leonardodamascenodev/projects/1), ligado ao repositório:
> - as 14 issues estão no Project, fechadas e em "Done", com os milestones M1, M2 e M3 e as labels sugeridas em cada uma;
> - as 9 issues da tabela 2.5 estão na iteração "Sprint 1", e os responsáveis conferem com a tabela.
>
> A visão Board é criada no navegador, porque a API do GitHub não cria visões. A Sprint 1 já terminou, então o filtro `iteration:@current` mostra o quadro vazio; para o print, usem `iteration:"Sprint 1"`.

---

## Antes de encerrar, confiram

- [x] A matriz de riscos foi revisada e posicionada no mapa de calor
- [x] Todo risco médio ou alto tem estratégia, ação concreta, dono, gatilho e contingência
- [x] Os gatilhos são sinais observáveis (com data, evento ou número), não frases vagas
- [x] A capacidade da sprint foi calculada com fator de foco
- [x] O backlog da Sprint 1 não ultrapassa a capacidade
- [x] A meta da sprint é uma frase clara sobre o que fica pronto
- [x] A Sprint 1 está registrada no Project do GitHub
- [ ] A matriz revisada foi salva no espaço compartilhado do grupo
