
const { db } = require("../config/db");

// LISTAR TODOS OS LIVROS
async function listarTodos() {
    return listarLivros({});
}

// LISTAR LIVROS COM FILTROS
async function listarLivros(filtros = {}) {
    const [linhas] = await db.query("SELECT * FROM livros");
    let resultado = linhas;

    // Filtrar por título
    if (filtros.titulo) {
        resultado = resultado.filter((livro) =>
            livro.titulo.toLowerCase().includes(
                filtros.titulo.toLowerCase()
            )
        );
    }

    // Filtrar por autor
    if (filtros.autor) {
        resultado = resultado.filter((livro) =>
            livro.autor.toLowerCase().includes(
                filtros.autor.toLowerCase()
            )
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

// BUSCAR LIVRO POR ID
async function buscarLivroPorId(id) {
    const [linhas] = await db.query(
        "SELECT * FROM livros WHERE id = ?",
        [id]
    );

    return linhas[0] || null;
}

// CRIAR LIVRO
async function criarLivro(dados) {

    const [resultado] = await db.query(
        `INSERT INTO livros (titulo, autor, preco, estoque)
         VALUES (?, ?, ?, ?)`,
        [dados.titulo, dados.autor, dados.preco, dados.estoque]
    );

    return await buscarLivroPorId(resultado.insertId);
}

// ATUALIZAR LIVRO COMPLETAMENTE
async function atualizarLivroCompleto(id, dados) {
    const livro = await buscarLivroPorId(id);

    if (!livro) return null;

    const { titulo, autor, preco, estoque } = dados;

    await db.query(
        `UPDATE livros
         SET titulo = ?, autor = ?, preco = ?, estoque = ?
         WHERE id = ?`,
        [titulo, autor, preco, estoque, id]
    );

    return buscarLivroPorId(id);
}

// ATUALIZAR LIVRO PARCIALMENTE
async function atualizarLivroParcial(id, dados) {
    const livro = await buscarLivroPorId(id);

    if (!livro) return null;

    const camposPermitidos = [
        "titulo",
        "autor",
        "preco",
        "estoque"
    ];

    const campos = camposPermitidos.filter(
        (campo) => dados[campo] !== undefined
    );

    if (campos.length === 0) return livro;

    const atualizacoes = campos.map(
        (campo) => `${campo} = ?`
    ).join(", ");

    const valores = campos.map(
        (campo) => dados[campo]
    );

    await db.query(
        `UPDATE livros SET ${atualizacoes} WHERE id = ?`,
        [...valores, id]
    );

    return buscarLivroPorId(id);
}

// DELETAR LIVRO
async function deletarLivro(id) {
    const [resultado] = await db.query(
        "DELETE FROM livros WHERE id = ?",
        [id]
    );

    return resultado.affectedRows > 0;
}

// EXPORTAR FUNÇÕES
module.exports = {
    listarTodos,
    listarLivros,
    buscarLivroPorId,
    criarLivro,
    atualizarLivroCompleto,
    atualizarLivroParcial,
    deletarLivro
};

// atualizado