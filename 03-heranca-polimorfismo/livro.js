class Livro {
    #titulo;
    #autor;
    #preco;
    #estoque;

    constructor(titulo, autor, preco, estoque) {
        this.#titulo = titulo;
        this.#autor = autor;
        this.#preco = preco;
        this.#estoque = estoque;
    }

    get titulo() {
        return this.#titulo;
    }

    get autor() {
        return this.#autor;
    }

    get preco() {
        return this.#preco;
    }

    get estoque() {
        return this.#estoque;
    }

    descrever() {
        console.log("Título: " + this.#titulo);
        console.log("Autor: " + this.#autor);
        console.log("Preço: R$ " + this.#preco.toFixed(2));
        console.log("Estoque: " + this.#estoque);
    }
}

module.exports = Livro;