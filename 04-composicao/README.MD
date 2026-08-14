# 04 — Composição e Clean Code

## O que foi feito

`Livro` passou a ter uma `Categoria` (composição "tem um"). Criação da classe `Carrinho`,que guarda vários `Livro` em um array (composição "tem muitos"), usando forEach para listar itens e calcular o total. Revisão das classes com principios de clean code.

## O que eu aprendi

- A diferenca entre "é um" (heranca) e "tem um" (composição)
- Um atributo pode guardar um objeto inteiro, não só texto ou numero
- Array guarda varios itens; forEach repete uma acao para cada um
- Nomes claros, responsabilidade unica, metodos pequenos e evitar numeros magicos

## Como executar

```bash
node testar.js
```