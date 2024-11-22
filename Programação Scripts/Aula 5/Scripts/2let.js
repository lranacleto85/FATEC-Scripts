// let:
//      1 Escopo: block scope
//      2 Redeclaração: pode ser redeclarado
//      3 Hoisting: not defined (ERRO)

// 1 Escopo
    // O que acontece?
        var nome = "JR";

        if (1+1 === 2){
            var nome = "Junior";
        }

        console.log(nome);

    // O que acontece?
        var nome = "JR";

        if (1+1 === 2){
            let nome = "Junior";
        }

        console.log(nome);

// 2 Redeclaração
    // Redeclara?
        let nome = "JR";
        let nome = "Junior";
        
        console.log(nome);

// 3 Hoisting
    // será que da undefined?
        console.log(nome);

        let nome = "JR"