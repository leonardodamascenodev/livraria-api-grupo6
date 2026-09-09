const express = require('express');
const livroRoutes = require('./routes/livroRoutes');

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Bem-vindo à API da Livraria!");
});


app.get("/sobre", (req, res) => {
  res.send("Informações sobre a Livraria.");
});

app.use('/livros', livroRoutes); 

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
