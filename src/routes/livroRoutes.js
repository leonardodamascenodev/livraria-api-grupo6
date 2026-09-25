const express = require('express');
const livroController = require('../controllers/livroController');

const router = express.Router();

router.get('/', livroController.listar);
router.get('/:indice', livroController.buscarPorIndice);
router.post('/', livroController.criar);
router.put('/:indice', livroController.atualizarCompleto);
router.patch('/:indice', livroController.atualizarParcial);
router.delete('/:indice', livroController.deletar);

module.exports = router;