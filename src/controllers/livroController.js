const livroService = require('../services/livroService');

async function listar(req, res) {
    const filtros = req.query;
    const livros = await livroService.listarLivros(filtros)
    res.status(200).json(livros);
}

function buscarPorId(req, res) {
    const id = parseInt(req.params.id);
    const livro = livroService.buscarLivroPorId(id);

    if (!livro) {
        return res.status(404).json({ mensagem: "Livro não encontrado." });
    }

    res.status(200).json(livro);
}

function criar(req, res) {
    const novoLivro = livroService.criarLivro(req.body);
    res.status(201).json(novoLivro);
}

function atualizarCompleto(req, res) {
    const indice = parseInt(req.params.id);
    const livroAtualizado = livroService.atualizarLivroCompleto(indice, req.body);

    if (!livroAtualizado) {
        return res.status(404).json({ mensagem: "Livro não encontrado." });
    }

    res.status(200).json(livroAtualizado);
}

function atualizarParcial(req, res) {
    const indice = parseInt(req.params.id);
    const livroAtualizado = livroService.atualizarLivroParcial(indice, req.body);

    if (!livroAtualizado) {
        return res.status(404).json({ mensagem: "Livro não encontrado." });
    }

    res.status(200).json(livroAtualizado);
}

function deletar(req, res) {
    const indice = parseInt(req.params.id);
    const deletado = livroService.deletarLivro(indice);

    if (!deletado) {
        return res.status(404).json({ mensagem: "Livro não encontrado." });
    }

    res.status(204).send(); // Status 204 No Content para remoção bem-sucedida
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizarCompleto,
    atualizarParcial,
    deletar
};