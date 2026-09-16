class Livro {
    #preco;
    #estoque;


    constructor(titulo, autor, preco, estoque, categoria) {
        this.titulo = titulo;
        this.autor = autor;
        this.#preco = preco;
        this.#estoque = estoque;
        this.categoria = categoria;
    }

    get preco() {
        return this.#preco;
    }

    get estoque() {
        return this.#estoque;
    }

    descrever() {
        console.log("Titulo: " + this.titulo);
        console.log("Autor: " + this.autor);
        console.log("Preco: R$ " + this.#preco);
        console.log("Categoria: " + this.categoria.nome)
    }


    toJSON() {
        return {
            titulo: this.titulo,
            autor: this.autor,
            preco: this.#preco,
            estoque: this.#estoque,
            categoria: this.categoria
        };
    }
}

module.exports = Livro;