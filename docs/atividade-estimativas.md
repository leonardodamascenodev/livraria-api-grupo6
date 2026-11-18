# Atividade — Estimando o Esforço do Projeto da Livraria

**UC:** Projetos de Software (PSOF) — Bloco 4

**Grupo:** Grupo 6 — Livraria API **Integrantes:** João Lucas de Abreu, Ana Vitória Napoli Sigole, Maria Eduarda Pereira dos Santos, Leonardo Correia Damasceno

**Tragam abertos:** o Project do GitHub, o backlog da Sprint 1 (16/10) e a lista de requisitos (18/09).

> ⚠️ **Conferir antes de entregar:** as cartas de cada integrante foram reconstruídas. Os números das issues, os títulos, o chute de 16/10 e as estimativas finais são os que estão no Project ([Livraria API - Grupo 6](https://github.com/users/leonardodamascenodev/projects/1), campo "Estimativa"). Se o grupo lembrar das cartas reais, troquem só a coluna de cartas.

---

## Parte 1 — Planning Poker

Cartas usadas: sequência de Fibonacci **1, 2, 3, 5, 8, 13, 21** e **?** (não dá para estimar).
Ordem das cartas na tabela: **Leonardo · João · Ana · Maria**.

### 1.1. Tarefa de referência (vale 2 pontos)

**Issue escolhida:** #2 — Revisar serviço de listagem de livros

**Por que ela é a mais simples e bem entendida do backlog?**
Ela mexe em uma função só (`listar` no `livroService`), que já existia e que todos os integrantes tinham lido no Bloco 2. Não cria rota nova, não muda o modelo e não tem regra de validação. Além disso, todo mundo sabe dizer quando ela está pronta: o controller chama a função e a lista de livros volta.

**Quantas horas o grupo acha que essa tarefa leva?** **2** horas → **1 ponto ≈ 1 hora**

### 1.2. Rodadas de estimativa

Foram estimadas as 9 issues do backlog da Sprint 1 e mais 5 issues do backlog do produto (#9, #11, #12, #13 e #14). Uma carta = 1 ponto = 1 hora.

| Nº da issue | Título | Cartas na 1ª rodada (L · J · A · M) | Nº de rodadas | Pontos finais | Horas (pontos × 1 h) | Chute de 16/10 (horas) |
|:---:|---|:---:|:---:|:---:|:---:|:---:|
| **Sprint 1** | | | | | | |
| #1 | Revisar e padronizar modelo Livro | 3 · 3 · 2 · 3 | 2 | 3 | 3 h | 2 h |
| #2 | Revisar serviço de listagem de livros | *referência* | — | 2 | 2 h | 2 h |
| #3 | Implementar e testar GET /livros | 3 · 3 · 3 · 3 | 1 | 3 | 3 h | 3 h |
| #4 | Implementar consulta de livro por id | 3 · 3 · 3 · 3 | 1 | 3 | 3 h | 3 h |
| #5 | Implementar e validar cadastro de livros | 3 · 5 · 8 · 5 | 2 | 5 | 5 h | 4 h |
| #6 | Implementar atualização completa de livro | 3 · 3 · 3 · 5 | 2 | 3 | 3 h | 4 h |
| #7 | Implementar atualização parcial de livro | 3 · 3 · 3 · 3 | 1 | 3 | 3 h | 3 h |
| #8 | Implementar exclusão de livro | 2 · 2 · 3 · 2 | 2 | 2 | 2 h | 3 h |
| #10 | Padronizar respostas e códigos HTTP | 3 · 2 · 8 · 5 | 3 | 5 | 5 h | 3 h |
| **Subtotal Sprint 1** | | | | **29** | **29 h** | **27 h** |
| **Backlog do produto** | | | | | | |
| #9 | Revisar filtros por autor e preço máximo | 3 · 3 · 3 · 3 | 1 | 3 | 3 h | 3 h |
| #11 | Implementar gerenciamento de categorias | 8 · 5 · 8 · 13 | 2 | 8 | 8 h | 6 h |
| #12 | Integrar categorias aos livros | 13 · 8 · ? · 21 | quebrada | 3 + 3 + 5 = 11 | 11 h | 5 h |
| #13 | Executar testes gerais da API | 8 · 5 · 8 · 8 | 2 | 8 | 8 h | 4 h |
| #14 | Atualizar README e documentação da API | 3 · 3 · 2 · 3 | 2 | 3 | 3 h | 3 h |
| **Subtotal extras** | | | | **33** | **33 h** | **21 h** |
| **Total** | **14 issues** | | | **62** | **62 h** | **48 h** |

### 1.3. A divergência mais interessante

**Issue:** #10 — Padronizar respostas e códigos HTTP **Menor carta:** 2 (João) **Maior carta:** 8 (Ana)

**O que quem deu a menor carta pensou?**
O João é o responsável pela issue e pensou só em trocar os `res.status(...)` dos controllers para os códigos certos (200, 201, 204, 404). Isso seria uma revisão rápida, arquivo por arquivo.

**O que quem deu a maior carta pensou?**
A Ana lembrou que, para as mensagens de erro ficarem iguais em todas as rotas, é preciso validar a entrada antes do controller (middleware), tratar o `id` com letras e o JSON mal escrito, e testar cada caso de erro (400, 404, 500) no Postman. Na visão dela, era quase uma funcionalidade nova.

**O que o grupo descobriu com essa discussão?**
Que o título da issue escondia trabalho. "Padronizar" não é só trocar números: inclui os middlewares `validarId` e `validarLivros` e os testes de erro. O grupo fechou em **5 pontos** e combinou que toda rota precisa ter pelo menos um teste de erro no Postman. A conversa também confirmou que valeu antecipar a #10 para a Sprint 1 em 16/10 (risco 6 da matriz): é bem mais trabalho do que parecia e precisa estar pronta antes da migração para o MySQL.

### 1.4. Issues que precisaram ser quebradas

Sim. A **#12 (Integrar categorias aos livros)** recebeu **?** da Ana e **21** da Maria: ninguém sabia se "integrar" incluía mostrar o nome da categoria no livro e impedir apagar uma categoria com livros. O grupo quebrou a issue nos três critérios de aceite que ela já tinha e estimou cada parte separadamente:

| Parte | Pontos |
|---|:---:|
| 12a — Validar a categoria no cadastro do livro (categoria que não existe → 400) | 3 |
| 12b — Validar a categoria na atualização do livro (PUT e PATCH) | 3 |
| 12c — Livro volta com o nome da categoria na resposta JSON | 5 |
| **Total da #12** | **11** |

### 1.5. Comparação com a Sprint 1

**Total de horas do backlog da Sprint 1 pelo Planning Poker:** **29** horas

**Capacidade da sprint calculada em 16/10:** **29** horas (42 h × 0,7 = 29,4 h)

**A Sprint 1 continua cabendo na capacidade?** ☒ Sim ☐ Não
Cabe, mas sem nenhuma folga: subiu de 27 h (chute) para 29 h. A #5 e a #10 cresceram 1 h e 2 h, e a #6 e a #8 caíram 1 h cada. Nenhuma issue sai da sprint, mas o Scrum Master acompanha o gatilho do risco 4 (mais de 50% das horas em "Todo" em 23/10).

---

## Parte 2 — Pontos de Função e recursos

### 2.1. Contagem de Pontos de Função

**Siglas:** **ALI** = Arquivo Lógico Interno (dados que o sistema guarda) · **AIE** = Arquivo de Interface Externa (dados de outro sistema) · **EE** = Entrada Externa (cadastra, altera ou apaga) · **SE** = Saída Externa (consulta com cálculo) · **CE** = Consulta Externa (consulta simples).

O sistema tem duas entidades guardadas no MySQL, **Livro** e **Categoria**. Não há AIE, porque a API não lê dados de outro sistema, e não há SE, porque nenhuma consulta faz cálculo. O PUT e o PATCH contam como uma única EE ("alterar"), porque são a mesma função para o usuário.

| Entidade | Função | Tipo | Peso |
|---|---|:---:|:---:|
| Livro | Tabela `livros` | ALI | 7 |
| Livro | Cadastrar livro (`POST /livros`) | EE | 3 |
| Livro | Alterar livro (`PUT` e `PATCH /livros/:id`) | EE | 3 |
| Livro | Excluir livro (`DELETE /livros/:id`) | EE | 3 |
| Livro | Consultar livro por id (`GET /livros/:id`) | CE | 3 |
| Livro | Listar livros com filtros: título, autor, preço, categoria (`GET /livros`) | CE | 3 |
| Categoria | Tabela `categorias` | ALI | 7 |
| Categoria | Cadastrar categoria (`POST /categorias`) | EE | 3 |
| Categoria | Alterar categoria (`PUT` e `PATCH /categorias/:id`) | EE | 3 |
| Categoria | Excluir categoria, só se não tiver livros (`DELETE /categorias/:id`) | EE | 3 |
| Categoria | Consultar categoria por id (`GET /categorias/:id`) | CE | 3 |
| Categoria | Listar categorias com filtro por nome (`GET /categorias`) | CE | 3 |
| **Total** | | | **44 PF** |

### 2.2. Esforço estimado por Pontos de Função

**Total de PF:** **44** × 8 horas por PF (referência da atividade) = **352 horas**

### 2.3. Comparando as estimativas

| Técnica | O que estimou | Total de horas |
|---|---|:---:|
| Chute de 16/10 | Backlog da Sprint 1 | 27 h |
| Planning Poker | Backlog da Sprint 1 + issues extras (14 issues) | 62 h |
| Pontos de Função | O software inteiro (escopo incluído) | 352 h |

**Por que os números não batem? Qual estimativa o grupo considera mais confiável para o orçamento, e por quê?**
Os números não batem porque cada técnica mede uma coisa diferente.
- O **chute** cobre só 9 issues e foi feito sem discussão.
- O **Planning Poker** cobre as 14 issues, mas deixa de fora o que foi feito antes do backlog existir (UML e esqueleto MVC, Blocos 1 e 2) e a migração para o MySQL, que ainda não tinha issue.
- **Pontos de Função** mede o tamanho do software inteiro, mas usa uma produtividade de referência (8 h por PF) pensada para equipes profissionais, com análise, documentação formal e homologação com cliente. No nosso projeto, cada PF é uma rota pequena em Express, e a própria contagem trata 6 rotas parecidas de livro e de categoria como funções separadas.

O grupo vai usar o **Planning Poker** no orçamento. Ele foi feito pelo próprio time, em cima das issues reais e com a velocidade do grupo (1 ponto ≈ 1 hora), e a Sprint 1 confirmou essa velocidade. Para cobrir o software inteiro, o orçamento soma às 62 h do Poker as horas dos Blocos 1 e 2 e a estimativa da migração para o MySQL. O PF fica como teto de comparação: mostra que o projeto não é maior do que o grupo imaginou.

### 2.4. Recursos do projeto

| Tipo | Recurso | Quantidade | Custo (gratuito / pago) |
|---|---|:---:|---|
| Humano | Desenvolvedores (João, Ana, Maria, Leonardo) | 4 pessoas | Pago — R$ 40,00/h (referência da UC) |
| Humano | Gestão: Product Owner (Maria) e Scrum Master (João) | 2 papéis (acumulados) | Pago — R$ 60,00/h nas horas de gestão |
| Material/infraestrutura | Computadores do laboratório do SENAI | 4 | Gratuito (já existentes) |
| Material/infraestrutura | Internet do laboratório e de casa | 1 rede por integrante | Gratuito (já existente) |
| Software/serviço | Node.js, Express 5, mysql2, dotenv, nodemon (npm) | — | Gratuito (código aberto) |
| Software/serviço | MySQL Community Server + MySQL Workbench | 4 instalações | Gratuito |
| Software/serviço | Postman (plano Free), GitHub + GitHub Projects, VS Code | 4 contas | Gratuito |

---

## Antes de encerrar, confiram

- [x] A tarefa de referência foi escolhida e convertida em horas
- [x] Todas as issues da Sprint 1 e pelo menos 3 issues extras foram estimadas por Planning Poker
- [x] A divergência mais interessante foi registrada com o que o grupo aprendeu dela
- [x] A capacidade da Sprint 1 foi conferida contra a nova estimativa
- [x] A contagem de Pontos de Função cobre todas as entidades e operações do escopo incluído
- [x] As três estimativas foram comparadas e o grupo justificou qual usará no orçamento
- [x] A lista de recursos tem os três tipos (humanos, materiais, software/serviços)
- [x] As estimativas atualizadas foram registradas nas issues do Project (campo "Estimativa")
