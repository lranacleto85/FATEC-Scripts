// 1

var nome = "JR";
console.log(nome);

// 2 - escopo chain

var nome = "JR";

function returnNome(){
    return nome;
}

returnNome();

// 3 - var, let e const
    // var:
    //      1 Escopo: function scope
    //      2 Redeclaração: pode ser redeclarado
    //      3 Hoisting: undefined

    function returnNome(){
        var nome = "JR";
        return nome;
    }

    console.log(nome);

    // 1 exemplo de Escopo
        var nome = "Junior";

        function returnNome(){
            var nome = "JR";
            return nome;
        }

        console.log(nome);

    // 2 exemplo de Redeclaração
        var nome = "JR";
        var nome = "Junior";

        console.log(nome);

    // ainda em Redeclaração
        var nome = "JR";

        function returnNome(){
            nome = "Junior";
            return nome;
        }

        returnNome();
        console.log(nome);

    // 3 exemplo de Hoisting
        //nome is not defined
        console.log(nome); 
        
        //undefined
        var nome;
        console.log(nome); 
        
        //undefined
        console.log(nome);

        var nome = "JR";
        
        //Hoisting como funciona ?
        var nome;

        console.log(nome);

        var nome = "JR";

        //DICA: SEMPRE CRIE A VARIÁVEL VAR NO TOPO DO CÓDIGO