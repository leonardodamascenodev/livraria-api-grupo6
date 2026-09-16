const express = require("express");
const livroRoutes = require("./livroRoutes");

const router = express.Router();
router.use('/livros', livroRoutes);

module.exports = router;