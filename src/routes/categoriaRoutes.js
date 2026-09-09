const express = require('express');
const router = express.Router();

const livroController = require('../controllers/livroController');

router.get('/', livroController.listarTodos);
router.get('/:id', livroController.buscarPorId);

module.exports = router;