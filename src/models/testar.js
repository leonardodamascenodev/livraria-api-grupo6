const Cliente = require("./Cliente")
const Funcionario = require("./Funcionario")

const c1 = new Cliente("Maria Silva", "maria@email.com", 150)
const f1 = new Funcionario("Joao Souza", "joao@livraria.com", 2500)

c1.apresentar()
console.log("")
f1.apresentar()