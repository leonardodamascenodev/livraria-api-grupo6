-- Script do banco da Livraria
-- Rode este arquivo inteiro no MySQL Workbench (raio ⚡).
-- Ele apaga e recria tudo: pode rodar de novo sempre que quiser começar do zero.
DROP DATABASE IF EXISTS livraria;
CREATE DATABASE livraria;
USE livraria;

-- A tabela categorias vem primeiro: a tabela livros aponta para ela.
CREATE TABLE
    categorias (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(50) NOT NULL,
        descricao VARCHAR(200)
    );

CREATE TABLE livros (
        id INT AUTO_INCREMENT PRIMARY KEY,
        titulo VARCHAR(150) NOT NULL,
        autor VARCHAR(100) NOT NULL,
        preco DECIMAL(10, 2) NOT NULL,
        estoque INT NOT NULL,
        categoria_id INT,
        FOREIGN KEY (categoria_id) REFERENCES categorias (id)
);

INSERT INTO categorias (nome, descricao) VALUES
    ( 'Ficção', 'Romances, fantasia e ficção científica'),
    ( 'Tecnologia', 'Programação, engenharia de software e afins'),
    ( 'Infantil', 'Livros para crianças de 6 a 10 anos'),
    ( 'História', 'Fatos, biografias e a história da humanidade');

INSERT INTO livros (titulo, autor, preco, estoque, categoria_id) VALUES
    ('Clean Code', 'Robert C. Martin', 89.90, 12, 2),
    ('Eloquent JavaScript', 'Marijn Haverbeke', 45.00, 20, 2),
    ('O Hobbit', 'J.R.R. Tolkien', 39.90, 8, 1),
    -- Carga inicial do grupo (Bloco 4): todos os livros com categoria
    ('Entendendo Algoritmos', 'Aditya Bhargava', 59.90, 6, 2),
    ('Harry Potter e a Pedra Filosofal', 'J.K. Rowling', 49.90, 10, 1),
    ('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 29.90, 15, 3),
    ('O Menino Maluquinho', 'Ziraldo', 32.00, 14, 3),
    ('Sapiens', 'Yuval Noah Harari', 69.90, 7, 4),
    ('O Diário de Anne Frank', 'Anne Frank', 34.90, 9, 4);

-- Confere a carga: todo livro tem que aparecer com o nome da categoria
SELECT livros.titulo, categorias.nome AS categoria
FROM livros
JOIN categorias ON livros.categoria_id = categorias.id;