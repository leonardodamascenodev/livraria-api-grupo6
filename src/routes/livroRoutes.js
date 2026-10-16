const express = require('express');
const livroController = require('../controllers/livroController');

const router = express.Router();

router.get("/", livroController.listar);
router.get("/:id", livroController.buscarPorId);
router.post("/", livroController.criar);
router.put("/:id", livroController.atualizarCompleto);
router.patch("/:id", livroController.atualizarParcial);
router.delete("/:id", livroController.deletar);

module.exports = router;