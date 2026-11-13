function validarGetSemBody(req, res, next) {
    // Adicionado || {} para proteger contra req.body indefinido
    const body = req.body || {};
    if (Object.keys(body).length > 0) {
        return res.status(400).json({ error: "Requisições GET não devem conter corpo." });
    }
    next();
}

function validarCriacaoLivro(req, res, next) {
    // Adicionado || {} para proteger contra req.body indefinido
    const { titulo, autor, preco, estoque } = req.body || {};

    // Caso 1: Verifica campos obrigatórios
    if (!titulo || !autor || preco === undefined || estoque === undefined) {
        return res.status(400).json({ error: "Campos obrigatórios ausentes (titulo, autor, preco, estoque)." });
    }

    // 🌟 LIMITE AJUSTADO: Se passar de 50 caracteres, retorna 400
    if (titulo.length > 50) {
        return res.status(400).json({ error: "Título grande demais." });
    }

    // Caso 3: Verifica se o preço é um número válido
    if (typeof preco !== 'number' || isNaN(preco)) {
        return res.status(400).json({ error: "O preço deve ser um número válido." });
    }

    // Caso 2: Impede preço ou estoque negativos
    if (preco < 0 || estoque < 0) {
        return res.status(400).json({ error: "Preço e estoque não podem ser negativos." });
    }

    // 🌟 LIMITE AJUSTADO: Se o preço for maior que 9999, retorna 400
    if (preco > 9999) {
        return res.status(400).json({ error: "Preço grande demais." });
    }

    next();
}

function validarAtualizacaoParcial(req, res, next) {
    // Adicionado "|| {}" para evitar o TypeError se o body estiver vazio/indefinido
    const { titulo, preco, estoque } = req.body || {}; 

    // 🌟 LIMITE AJUSTADO: Validação de título também no PATCH
    if (titulo !== undefined && titulo.length > 50) {
        return res.status(400).json({ error: "Título grande demais." });
    }

    // Caso 4: Se atualizar estoque, não pode ser negativo
    if (estoque !== undefined && (typeof estoque !== 'number' || estoque < 0)) {
        return res.status(400).json({ error: "O estoque não pode ser negativo." });
    }

    // Validação extra para preço no PATCH
    if (preco !== undefined && (typeof preco !== 'number' || preco < 0)) {
        return res.status(400).json({ error: "O preço não pode ser negativo." });
    }

    // 🌟 LIMITE AJUSTADO: Validação de preço máximo no PATCH
    if (preco !== undefined && preco > 9999) {
        return res.status(400).json({ error: "Preço grande demais." });
    }

    next();
}

module.exports = {
    validarGetSemBody,
    validarCriacaoLivro,
    validarAtualizacaoParcial
};
