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
    
module.exports = { listarLivros, buscarLivroPorIndice };