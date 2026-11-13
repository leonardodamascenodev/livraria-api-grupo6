require("dotenv").config();

const { testarConexao } = require("./config/db")
const express = require('express');
const logger = require('./middlewares/logger');
const routes = require('./routes/index');
const tratarErros = require('./middlewares/tratarErros'); // 1. IMPORTADO AQUI

const app = express();

const PORT = 3000;

let bancoDeDadosConectado = true;

// Middleware para interceptar se o banco já estiver offline antes de bater nas rotas
app.use((req, res, next) => {
  if (!bancoDeDadosConectado) {
    // 2. FORÇA A REQUISIÇÃO A CAIR NO SEU TRATARERROS COM O CÓDIGO CORRETO
    const err = new Error("Banco de dados indisponivel");
    err.code = "ECONNREFUSED";
    return next(err); 
  }
  next();
});

app.use(logger);
app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
  res.send("Bem-vindo à API da Livraria!");
});

app.get("/sobre", (req, res) => {
  res.send("Informações sobre a Livraria.");
});

// 3. O SEU TRATAR ERROS TEM QUE FICAR AQUI, DEPOIS DE TODAS AS ROTAS!
app.use(tratarErros); 

app.listen(PORT, async () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  
  try {
    await testarConexao();
    bancoDeDadosConectado = true;
  } catch (error) {
    // 4. CHAMA O SEU TRATARERROS DIRETAMENTE PARA PRINTAR "ERRO: ECONNREFUSED ..." NO TERMINAL ASSIM QUE O APP LIGA
    bancoDeDadosConectado = false;
    error.code = error.code || "ECONNREFUSED"; 
    tratarErros(error, null, null, () => {}); 
  }
});
