const express = require('express');
const logger = require('./middlewares/logger');
const routes = require('./routes/index');

const app = express();

const PORT = 3000;

app.use(logger);
app.use(routes);

app.get("/", (req, res) => {
  res.send("Bem-vindo à API da Livraria!");
});


app.get("/sobre", (req, res) => {
  res.send("Informações sobre a Livraria.");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
