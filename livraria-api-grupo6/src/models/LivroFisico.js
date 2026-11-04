const Livro = require("./Livro");

class LivroFisico extends Livro {
    #peso;

    constructor(titulo, autor, preco, estoque, peso) {
        super(titulo, autor, preco, estoque)
        this.#peso = peso
    }

    get peso() {
        return this.#peso;
    }

    calcularFrete() {
        const PRECO_POR_KG = 2.5;
        return this.#peso * PRECO_POR_KG;
    }

    descrever() {
        super.descrever()
        console.log("Tipo:    Fisico")
        console.log("Peso:   " + this.#peso + "MB")
    }
}

module.exports = LivroFisico;