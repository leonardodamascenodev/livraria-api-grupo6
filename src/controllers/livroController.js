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

    if (parcial && recebidos.length === 0) {
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

    return null;
}

// LISTAR LIVROS
async function listar(req, res) {
    try {
        const livros = await livroService.listarLivros(req.query);
        return res.status(200).json(livros);
    } catch (erro) {
        console.error(erro);
        return res.status(500).json({
            mensagem: "Erro ao listar livros."
        });
    }
}

// BUSCAR POR ID
async function buscarPorId(req, res) {
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
        console.error(erro);
        return res.status(500).json({
            mensagem: "Erro ao buscar livro."
        });
    }
}

// CRIAR LIVRO
async function criar(req, res) {
    try {
        const erroValidacao = validarDados(req.body);

        if (erroValidacao) {
            return res.status(400).json({
                mensagem: erroValidacao
            });
        }

        const novoLivro = await livroService.criarLivro(req.body);

        return res.status(201).json(novoLivro);
    } catch (erro) {
        console.error(erro);
        return res.status(500).json({
            mensagem: "Erro ao criar livro."
        });
    }
}

// ATUALIZAR COMPLETAMENTE
async function atualizarCompleto(req, res) {
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
        console.error(erro);
        return res.status(500).json({
            mensagem: "Erro ao atualizar livro."
        });
    }
}

// ATUALIZAR PARCIALMENTE
async function atualizarParcial(req, res) {
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
        console.error(erro);
        return res.status(500).json({
            mensagem: "Erro ao atualizar livro."
        });
    }
}

// DELETAR LIVRO
async function deletar(req, res) {
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
        console.error(erro);
        return res.status(500).json({
            mensagem: "Erro ao deletar livro."
        });
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
