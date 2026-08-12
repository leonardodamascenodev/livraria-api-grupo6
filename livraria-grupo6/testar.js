const Cliente = require("./Cliente");
const Funcionario = require("./Funcionario");

const c1 = new Cliente("Maria Eduarda Pereira", "maria.e.santos54@edu.senai.br", 150);
const f1 = new Funcionario("Lara Caroliny", "lara.piva@edu.senai.br", 2500);

c1.apresentar();
console.log("");
f1.apresentar();
