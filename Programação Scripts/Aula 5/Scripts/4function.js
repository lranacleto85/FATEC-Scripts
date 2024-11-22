//Qual a diferença entre essas duas?

//1
function myFunc(){
    //function declaration
}
//2
var myFunc = function(){
    //function expression
}

// o primeiro tem que ser chamado no inicio do script
// a segunda depois da inicialização

//1
    test();

    function test(){
        console.log("Testando");
    }

//2
    test();

    var test = function(){
        console.log("Testando");
    }
//a variável está como undefined nesse momento do teste
