const categoriaService = require('../services/categoriaService');

async function listar(req, res) {
    const filtros = req.query;
    const livros = await categoriaService.listarCategorias(filtros);
    res.status(200).json(livros);
}

async function buscarPorId(req, res) {
    const id = parseInt(req.params.id);
    const livro = await categoriaService.buscarCategoriaPorId(id);

    if (!livro) {
        return res.status(404).json({ mensagem: "Categoria não encontrada." });
    }

    res.status(200).json(livro);
}

async function criar(req, res) {
    const erro = categoriaService.validarCategoria(req.body, true);
    if (erro) {
        res.status(400).json({ erro: erro });
        return;
    }

    const novoLivro = await categoriaService.criarCategoria(req.body);
    res.status(201).json(novoLivro);
}

async function atualizarCompleto(req, res) {
    const erro = await categoriaService.validarCategoria(req.body, true);
    if (erro) {
        res.status(400).json({ erro: erro });
        return;
    }
    const indice = parseInt(req.params.id);
    const livroAtualizado = await categoriaService.atualizarCategoria(indice, req.body);

    if (!livroAtualizado) {
        return res.status(404).json({ mensagem: "Categoria não encontrada." });
    }

    res.status(200).json(livroAtualizado);
}

async function atualizarParcial(req, res) {
    const erro = await categoriaService.validarCategoria(req.body, false);
    if (erro) {
        res.status(400).json({ erro: erro });
        return;
    }
    const indice = parseInt(req.params.id);
    const livroAtualizado = await categoriaService.atualizarParcialCategoria(indice, req.body);

    if (!livroAtualizado) {
        return res.status(404).json({ mensagem: "Categoria não encontrada." });
    }

    res.status(200).json(livroAtualizado);
}

async function deletar(req, res) {
    const indice = parseInt(req.params.id);
    const deletado = await categoriaService.deletarCategoria(indice);

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