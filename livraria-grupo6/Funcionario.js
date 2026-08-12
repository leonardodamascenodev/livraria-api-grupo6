const Pessoa = require("./Pessoa");

class Funcionario extends Pessoa {
  #salario;

  constructor(nome, email, salario) 
  {
    super(nome, email);
    this.#salario = salario;
  }

  get salario() 
  {
    return this.#salario;
  }

  calcularBonus() 
  {
    return this.#salario * 0.1;
  }

  apresentar() 
  {
    super.apresentar();
    console.log("Tipo: funcionario");
    console.log("Bonus: R$ " + this.calcularBonus().toFixed(2));
  }
}

module.exports = Funcionario;
