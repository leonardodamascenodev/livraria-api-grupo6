const { Livro } = require("../models/Livro");
const { db } = require("../config/db");

// const livros = [];
// let proximoId = 1;

// criarLivro({ titulo: "Clean Code", autor: "Robert C. Martin", preco: 89.9, estoque: 12 });
// criarLivro({ titulo: "Eloquent JavaScript", autor: "Marijn Haverbeke", preco: 45.0, estoque: 20 });

function listarTodos() {
    return livros;
}

async function listarLivros(filtros) {
    const [linhas] = await db.query("SELECT * FROM livros");
    let resultado = linhas;

    // Filtrar por título
    if (filtros.titulo) {
        resultado = resultado.filter((livro) =>
            livro.titulo.toLowerCase().includes(filtros.titulo.toLowerCase())
        );
    }

    // Filtrar por autor
    if (filtros.autor) {
        resultado = resultado.filter((livro) =>
            livro.autor.toLowerCase().includes(filtros.autor.toLowerCase())
        );
    }

    // Filtrar por preço máximo
    if (filtros.precoMax !== undefined) {
        resultado = resultado.filter((livro) =>
            Number(livro.preco) <= Number(filtros.precoMax)
        );
    }

    // Filtrar por preço mínimo
    if (filtros.precoMin !== undefined) {
        resultado = resultado.filter((livro) =>
            Number(livro.preco) >= Number(filtros.precoMin)
        );
    }

    return resultado;
}

function buscarLivroPorId(id) {
    return livros.find((livro) => livro.id === Number(id));
}

function criarLivro(dados) {
    const novoLivro = new Livro(dados.titulo, dados.autor, dados.preco, dados.estoque);
    novoLivro.id = proximoId;
    proximoId++;
    livros.push(novoLivro);
    return novoLivro;
}

function atualizarLivroCompleto(indice, dados) {
    const livro = buscarLivroPorId(indice);
    if (!livro) return null;

    livro.titulo = dados.titulo;
    livro.autor = dados.autor;
    livro.preco = dados.preco;     // Dispara o set preco
    livro.estoque = dados.estoque; // Dispara o set estoque
    if (dados.categoria !== undefined) livro.categoria = dados.categoria;

    return livro;
}

function atualizarLivroParcial(indice, dados) {
    const livro = buscarLivroPorId(indice);
    if (!livro) return null;

    if (dados.titulo !== undefined) livro.titulo = dados.titulo;
    if (dados.autor !== undefined) livro.autor = dados.autor;
    if (dados.preco !== undefined) livro.preco = dados.preco;     // Dispara o set preco
    if (dados.estoque !== undefined) livro.estoque = dados.estoque; // Dispara o set estoque
    if (dados.categoria !== undefined) livro.categoria = dados.categoria;

    return livro;
}

function deletarLivro(id) {
    const posicao = livros.findIndex((livro) => livro.id === Number(id));
    if (posicao === -1) return false;

    livros.splice(posicao, 1);
    return true;
}

module.exports = {
    listarTodos,
    listarLivros,
    buscarLivroPorId,
    criarLivro,
    atualizarLivroCompleto,
    atualizarLivroParcial,
    deletarLivro
};