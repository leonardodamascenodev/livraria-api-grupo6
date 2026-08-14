class Categoria {
  #nome;
  #descricao;
  #totalDeLivros;
  
  constructor(nome, descricao) {
    this.#totalDeLivros = 0;
    this.#nome = nome;
    this.#descricao = descricao;
  }

  get totalDeLivros() {
    return this.#totalDeLivros;
  }

  get nome() {
    return this.#nome;
  }
  get descricao() {
    return this.#descricao;
  }

  set nome(novoNome) {
    if (novoNome.length < 3) {
      console.log("ERRO: o nome da categoria precisa de pelo menos 3 letras.");
      return;
    }
    this.#nome = novoNome;
  }

  set descricao(novaDescricao) {
    if (novaDescricao.length < 5) {
        console.log("ERRO: a descricao precisa de pelo menos 5 letras.");
        return;
    }
    this.#descricao = novaDescricao;

  }

  descrever() {
    console.log("Categoria: " + this.#nome);
    console.log("Descricao: " + this.#descricao);
    console.log("Total de Livros: " + this.#totalDeLivros)
  }

  
}
module.exports = Categoria;