const livroService = require('../services/livroService');

function listar(req, res) {
    res.status(200).json(livroService.listarLivros());
}

function buscarPorIndice(req, res) {
    const indice = parseInt(req.params.indice);
    const livro = livroService.buscarLivroPorIndice(indice);

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
    const indice = parseInt(req.params.indice);
    const livroAtualizado = livroService.atualizarLivroCompleto(indice, req.body);

    if (!livroAtualizado) {
        return res.status(404).json({ mensagem: "Livro não encontrado." });
    }

    res.status(200).json(livroAtualizado);
}

function atualizarParcial(req, res) {
    const indice = parseInt(req.params.indice);
    const livroAtualizado = livroService.atualizarLivroParcial(indice, req.body);

    if (!livroAtualizado) {
        return res.status(404).json({ mensagem: "Livro não encontrado." });
    }

    res.status(200).json(livroAtualizado);
}

function deletar(req, res) {
    const indice = parseInt(req.params.indice);
    const deletado = livroService.deletarLivro(indice);

    if (!deletado) {
        return res.status(404).json({ mensagem: "Livro não encontrado." });
    }

    res.status(204).send(); // Status 204 No Content para remoção bem-sucedida
}

module.exports = {
    listar,
    buscarPorIndice,
    criar,
    atualizarCompleto,
    atualizarParcial,
    deletar
};