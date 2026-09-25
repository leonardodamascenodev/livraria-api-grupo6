const Livro = require('../models/Livro');

const livros = [
    new Livro("Estilhaça-me", "Tahereh Mafi", 220.00, 10),
    new Livro("Boys of Tommen", "Chloe Walsh", 636.00, 20),
];

function listarLivros() {
    return livros;
}

function buscarLivroPorIndice(indice) {
    return livros[indice];
}

function criarLivro(dados) {
    const novoLivro = new Livro(dados.titulo, dados.autor, dados.preco, dados.estoque, dados.categoria);
    livros.push(novoLivro);
    return novoLivro;
}

function atualizarLivroCompleto(indice, dados) {
    if (!livros[indice]) return null;

    const livro = livros[indice];
    livro.titulo = dados.titulo;
    livro.autor = dados.autor;
    livro.preco = dados.preco;     // Dispara o set preco
    livro.estoque = dados.estoque; // Dispara o set estoque
    if (dados.categoria !== undefined) livro.categoria = dados.categoria;

    return livro;
}

function atualizarLivroParcial(indice, dados) {
    if (!livros[indice]) return null;

    const livro = livros[indice];

    if (dados.titulo !== undefined) livro.titulo = dados.titulo;
    if (dados.autor !== undefined) livro.autor = dados.autor;
    if (dados.preco !== undefined) livro.preco = dados.preco;     // Dispara o set preco
    if (dados.estoque !== undefined) livro.estoque = dados.estoque; // Dispara o set estoque
    if (dados.categoria !== undefined) livro.categoria = dados.categoria;

    return livro;
}

function deletarLivro(indice) {
    if (!livros[indice]) return false;

    livros.splice(indice, 1);
    return true;
}

module.exports = {
    listarLivros,
    buscarLivroPorIndice,
    criarLivro,
    atualizarLivroCompleto,
    atualizarLivroParcial,
    deletarLivro
};