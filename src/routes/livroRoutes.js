const express = require('express');
const livroController = require('../controllers/livroController');

// Importando as validações do middleware que você criou
const { 
    validarGetSemBody, 
    validarCriacaoLivro, 
    validarAtualizacaoParcial 
} = require('../middlewares/validarLivros');

const router = express.Router();

// Aplicando as validações certas em cada rota
router.get("/", validarGetSemBody, livroController.listar);
router.get("/:id", validarGetSemBody, livroController.buscarPorId);

router.post("/", validarCriacaoLivro, livroController.criar);
router.patch("/:id", validarAtualizacaoParcial, livroController.atualizarParcial);

// Demais rotas continuam sem alteração
router.put("/:id", livroController.atualizarCompleto);
router.delete("/:id", livroController.deletar);

module.exports = router;
