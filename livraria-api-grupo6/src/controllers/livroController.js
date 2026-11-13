// CONTROLLER (o "chef"): decide o que fazer com cada pedido.
// Recebe da rota, chama o service certo, devolve a resposta.
// Implementacao chega no Bloco 3.

const livroService = require("../services/livroService");

async function listar(req, res) {
const filtros = req.query;
const livros = await livroService.listarLivros(filtros);
res.status(200).json(livros);
}


async function buscarPorId(req, res) {
const id = req.params.id;
const livro = await livroService.buscarLivroPorId(id);
}


function criar(req, res) {
  const novoLivro = livroService.criarLivro(req.body);
  res.status(201).json(novoLivro);
}

module.exports = { listar, buscarPorIndice, criar };
