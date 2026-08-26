const Pessoa = require("./Pessoa")

class Cliente extends Pessoa {
    #pontosFidelidade


    constructor(nome, email, pontosFidelidade) {
        // LACUNA 1
        super(nome, email)
        this.#pontosFidelidade = pontosFidelidade
    }

    get pontosFidelidade() {
        return this.#pontosFidelidade
    }

    apresentar() {
        super.apresentar()
        console.log("Tipo:  Cliente")
        console.log("Peso: " + this.#pontosFidelidade)
    }
}

module.exports = Cliente;