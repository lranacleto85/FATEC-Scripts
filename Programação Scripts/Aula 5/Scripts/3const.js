// const:
//      1 Escopo: block scope
//      2 Redeclaração: NÃO pode ser redeclarado
//      3 Hoisting: not defined (ERRO)

// 1 Escopo
    // O que acontece?
    const nome = "JR";

    if (1+1 === 2){
        const nome = "Junior";
    }

    console.log(nome);

// 2 Redeclaração
// Redeclara?
    const nome = "JR";
    const nome = "Junior";
    
    console.log(nome);

// 3 Hoisting
// será que da undefined?
    console.log(nome);

    let nome = "JR"

// não é possível alterar um const?

    const pessoa = {
        nome: "JR",
        sobrenome: "Eloy"
    }

    pessoa.nome = "Junior";

    pessoa = {};
    pessoa = [];
    pessoa = "a";