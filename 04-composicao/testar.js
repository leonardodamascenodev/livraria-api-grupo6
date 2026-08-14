const Categoria = require("./Categoria");
const Livro = require("./livro");

const catTec = new Categoria("Tecnologia", "livros sobre programacao");
const l1 = new Livro("Dates & Dragons", "Robert C. Martin", 43.14, 12, catTec);

// l1.descrever();
// console.log(l1.categoria.descricao);

const Carrinho = require("./Carrinho");

const l2 = new Livro("A razão do Amor ", "Ali Hazelwood", 44.83, 999, catTec);

const carrinho = new Carrinho();
carrinho.adicionarLivro(l1);
carrinho.adicionarLivro(l2);
carrinho.listar();

console.log("Total: R$ " + carrinho.calcularTotal().toFixed(2));