require("dotenv").config();

const { testarConexao } = require("./config/db")
const express = require('express');
const logger = require('./middlewares/logger');
const routes = require('./routes/index');
const tratarErros = require('./middlewares/tratarErros');

const app = express();

const PORT = 3000;

app.use(logger);
app.use(express.json());

// As rotas "/" e "/sobre" vem ANTES do app.use(routes):
// o routes termina com o 404 de "rota nao encontrada", que pega tudo o que chegar nele.
app.get("/", (req, res) => {
  res.send("Bem-vindo à API da Livraria!");
});

app.get("/sobre", (req, res) => {
  res.send("Informações sobre a Livraria.");
});

app.use(routes);

// O tratarErros fica DEPOIS de todas as rotas: recebe os erros que elas nao trataram.
app.use(tratarErros); 

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  // So avisa no terminal se o banco esta fora. O servidor continua de pe:
  // cada requisicao que precisar do banco cai no tratarErros (ex.: 503).
  testarConexao();
});
