class Categoria {
    #id;
    #nome;
    #descricao;

    constructor(nome, descricao) {
        this.#nome = nome;
        this.#descricao = descricao;
    }

    get id() {
        return this.#id;
    }

    set id(novoId) {
        this.#id = Number(novoId);
    }

    get nome() {
        return this.#nome;
    }

    get descricao() {
        return this.#descricao;
    }

    set nome(novoNome) {
        if (novoNome.length < 3) {
            console.log("ERRO: o nome da categoria precisa de pelo menos 3 letras.")
            return;
        }
        this.#nome = novoNome
    }

    set descricao(novaDescricao) {
        this.#descricao = novaDescricao;
    }


    descrever() {
        console.log("Categoria: " + this.#nome);
        console.log("Descrição: " + this.#descricao);
    }

    toJSON() {
        return {
            id: this.#id,
            nome: this.#nome,
            descricao: this.#descricao,
        };
    }
}

module.exports = Categoria;