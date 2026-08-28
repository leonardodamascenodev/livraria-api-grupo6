class Carrinho {
    #livros;

    constructor() {
        this.#livros = []
    }

    adicionarLivro(livro) {
        this.#livros.push(livro)
    }

    listar() {
        console.log("Livros no carrinho:")
        this.#livros.forEach((livro) => {
            livro.descrever()
            console.log(livro.titulo + " - R$ " + livro.preco)
        })
    }

    calcularTotal() {
        let total = 0;
        this.#livros.forEach((livro) => {
            total = total + livro.preco;
        });
        return total;
    }

}
module.exports = Carrinho;