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

    // Caso 3: Verifica se o preço é um número válido
    if (typeof preco !== 'number' || isNaN(preco)) {
        return res.status(400).json({ error: "O preço deve ser um número válido." });
    }

    // Caso 2: Impede preço ou estoque negativos
    if (preco < 0 || estoque < 0) {
        return res.status(400).json({ error: "Preço e estoque não podem ser negativos." });
    }

    next();
}

function validarAtualizacaoParcial(req, res, next) {
    // 💡 SOLUÇÃO AQUI: Adicionado "|| {}" para evitar o TypeError se o body estiver vazio/indefinido
    const { preco, estoque } = req.body || {};

    // Caso 4: Se atualizar estoque, não pode ser negativo
    if (estoque !== undefined && (typeof estoque !== 'number' || estoque < 0)) {
        return res.status(400).json({ error: "O estoque não pode ser negativo." });
    }

    // Validação extra para preço no PATCH
    if (preco !== undefined && (typeof preco !== 'number' || preco < 0)) {
        return res.status(400).json({ error: "O preço não pode ser negativo." });
    }

    next();
}

module.exports = {
    validarGetSemBody,
    validarCriacaoLivro,
    validarAtualizacaoParcial
};
