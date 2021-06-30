const livros = require('./database');


const readline = require('readline-sync');

const inicio = readline.question('Gostaria de pesquisar por categoria? S/N: ');

if(inicio.toUpperCase() === 'S'){
    console.table('Essas são as categorias disponíveis:');
    console.log('Fantasia', '/RPG', '/Tecnologia');

    const entcategoria = readline.question('Digite a Categoria que deseja pesquisar:');
    
    const retorno = livros.filter(livros => livros.categoria === entcategoria)
    console.table(retorno);
}else{
    const todosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.table(todosOrdenados);
}



