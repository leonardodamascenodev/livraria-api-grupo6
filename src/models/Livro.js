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

    set preco(valor) {
        this.#preco = valor;
    }

    get estoque() {
        return this.#estoque;
    }

    set estoque(valor) {
        this.#estoque = valor;
    }

    descrever() {
        console.log("Titulo: " + this.titulo);
        console.log("Autor: " + this.autor);
        console.log("Preco: R$ " + this.#preco);
        console.log("Categoria: " + (this.categoria ? this.categoria.nome : 'Sem categoria'));
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