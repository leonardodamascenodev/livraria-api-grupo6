const livroService = require("../services/livroService");

// VALIDAR ID
function obterId(req) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return null;
    }

    return id;
}

// VALIDAR DADOS DO LIVRO
function validarDados(dados, parcial = false) {
    const campos = ["titulo", "autor", "preco", "estoque"];

    if (!dados || typeof dados !== "object" ||
        Array.isArray(dados)) {
        return "Envie um objeto JSON válido.";
    }

    const recebidos = campos.filter((campo) =>
        Object.prototype.hasOwnProperty.call(dados, campo)
    );

    if (!parcial && recebidos.length !== campos.length) {
        return "Informe título, autor, preço e estoque.";
    }

    if (parcial && recebidos.length === 0 && dados.categoria_id === undefined) {
        return "Informe ao menos um campo para atualizar.";
    }

    if (recebidos.includes("titulo") &&
        (typeof dados.titulo !== "string" ||
         !dados.titulo.trim())) {
        return "Título inválido.";
    }

    if (recebidos.includes("autor") &&
        (typeof dados.autor !== "string" ||
         !dados.autor.trim())) {
        return "Autor inválido.";
    }

    if (recebidos.includes("preco") &&
        (typeof dados.preco !== "number" ||
         !Number.isFinite(dados.preco) ||
         dados.preco < 0)) {
        return "O preço deve ser um número maior ou igual a zero.";
    }

    if (recebidos.includes("estoque") &&
        (!Number.isInteger(dados.estoque) ||
         dados.estoque < 0)) {
        return "O estoque deve ser um inteiro maior ou igual a zero.";
    }

    if (dados.categoria_id !== undefined && typeof dados.categoria_id !== "number") {
        return "O categoria_id deve ser um numero";
    }

    return null;
}

// LISTAR LIVROS
async function listar(req, res, next) {
    try {
        const livros = await livroService.listarLivros(req.query);
        return res.status(200).json(livros);
    } catch (erro) {
        // Erros do banco vao para o tratarErros
        return next(erro);
    }
}

// BUSCAR POR ID
async function buscarPorId(req, res, next) {
    try {
        const id = obterId(req);

        if (id === null) {
            return res.status(400).json({
                mensagem: "ID inválido."
            });
        }

        const livro = await livroService.buscarLivroPorId(id);

        if (!livro) {
            return res.status(404).json({
                mensagem: "Livro não encontrado."
            });
        }

        return res.status(200).json(livro);
    } catch (erro) {
        // Erros do banco vao para o tratarErros
        return next(erro);
    }
}

// CRIAR LIVRO
async function criar(req, res, next) { // 1. Adicionado o 'next' aqui
    try {
        const erroValidacao = validarDados(req.body);

        if (erroValidacao) {
            // Dado invalido: responde 400 com a mensagem real (igual ao PUT e ao PATCH)
            return res.status(400).json({
                mensagem: erroValidacao
            });
        }

        const novoLivro = await livroService.criarLivro(req.body);
        return res.status(201).json(novoLivro);
    } catch (erro) {
        // 3. Se passar da validação mas estourar o limite de tamanho no MySQL, cai aqui
        return next(erro); 
    }
}
// ATUALIZAR COMPLETAMENTE
async function atualizarCompleto(req, res, next) {
    try {
        const id = obterId(req);

        if (id === null) {
            return res.status(400).json({
                mensagem: "ID inválido."
            });
        }

        const erroValidacao = validarDados(req.body);

        if (erroValidacao) {
            return res.status(400).json({
                mensagem: erroValidacao
            });
        }

        const livro = await livroService.atualizarLivroCompleto(
            id, req.body
        );

        if (!livro) {
            return res.status(404).json({
                mensagem: "Livro não encontrado."
            });
        }

        return res.status(200).json(livro);
    } catch (erro) {
        // Erros do banco (ex.: categoria inexistente) vao para o tratarErros
        return next(erro);
    }
}

// ATUALIZAR PARCIALMENTE
async function atualizarParcial(req, res, next) {
    try {
        const id = obterId(req);

        if (id === null) {
            return res.status(400).json({
                mensagem: "ID inválido."
            });
        }

        const erroValidacao = validarDados(req.body, true);

        if (erroValidacao) {
            return res.status(400).json({
                mensagem: erroValidacao
            });
        }

        const livro = await livroService.atualizarLivroParcial(
            id, req.body
        );

        if (!livro) {
            return res.status(404).json({
                mensagem: "Livro não encontrado."
            });
        }

        return res.status(200).json(livro);
    } catch (erro) {
        // Erros do banco (ex.: categoria inexistente) vao para o tratarErros
        return next(erro);
    }
}

// DELETAR LIVRO
async function deletar(req, res, next) {
    try {
        const id = obterId(req);

        if (id === null) {
            return res.status(400).json({
                mensagem: "ID inválido."
            });
        }

        const deletado = await livroService.deletarLivro(id);

        if (!deletado) {
            return res.status(404).json({
                mensagem: "Livro não encontrado."
            });
        }

        return res.status(204).send();
    } catch (erro) {
        // Erros do banco vao para o tratarErros
        return next(erro);
    }
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizarCompleto,
    atualizarParcial,
    deletar
};
