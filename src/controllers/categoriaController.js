const categoriaService = require('../services/categoriaService');

function listar(req, res) {
    const filtros = req.query;
    const livros = categoriaService.listarCategorias(filtros);
    res.status(200).json(livros);
}

function buscarPorId(req, res) {
    const id = parseInt(req.params.id);
    const livro = categoriaService.buscarCategoriaPorId(id);

    if (!livro) {
        return res.status(404).json({ mensagem: "Categoria não encontrada." });
    }

    res.status(200).json(livro);
}

function criar(req, res) {
    const erro = categoriaService.validarCategoria(req.body, true);
    if (erro) {
        res.status(400).json({ erro: erro });
        return;
    }

    const novoLivro = categoriaService.criarCategoria(req.body);
    res.status(201).json(novoLivro);
}

function atualizarCompleto(req, res) {
    const erro = categoriaService.validarCategoria(req.body, true);
    if (erro) {
        res.status(400).json({ erro: erro });
        return;
    }
    const indice = parseInt(req.params.id);
    const livroAtualizado = categoriaService.atualizarCategoria(indice, req.body);

    if (!livroAtualizado) {
        return res.status(404).json({ mensagem: "Categoria não encontrada." });
    }

    res.status(200).json(livroAtualizado);
}

function atualizarParcial(req, res) {
    const erro = categoriaService.validarCategoria(req.body, false);
    if (erro) {
        res.status(400).json({ erro: erro });
        return;
    }
    const indice = parseInt(req.params.id);
    const livroAtualizado = categoriaService.atualizarParcialCategoria(indice, req.body);

    if (!livroAtualizado) {
        return res.status(404).json({ mensagem: "Categoria não encontrada." });
    }

    res.status(200).json(livroAtualizado);
}

function deletar(req, res) {
    const indice = parseInt(req.params.id);
    const deletado = categoriaService.deletarCategoria(indice);

    if (!deletado) {
        return res.status(404).json({ mensagem: "Categoria não encontrada." });
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