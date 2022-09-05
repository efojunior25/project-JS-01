const livros = require("./database");

const readline = require("readline-sync");

const entradaInicial = readline.question("Deseja buscar um livro? Sim ou Nao");

if (entradaInicial.toLocaleUpperCase() === "SIM"){ 
    const categorias = livros.filter(categorias)
    console.log(`Estas são as categorias disponíveis: ${categorias}`);
    console.log("Produtividade e estilo de Vida", "/História Brasileira", "/Américas", "/Tecnologia", "/Estilo de Vida",);

    const entradaCategoria = readline.question("Qual Categoria você esolhe?");
    
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log("Esses São todos os livros disponíveis:")
    console.table(livrosOrdenados)
}