const express = require("express");
const livroRoutes = require("./livroRoutes");
const categoriaRoutes = require("./categoriaRoutes");
const { message } = require("statuses");

const router = express.Router();
router.use('/livros', livroRoutes);
router.use('/categorias', categoriaRoutes);

router.use((req, res) => {
    res.status(404).json({ "erro": "Rota nao encontrada" });
});

module.exports = router;