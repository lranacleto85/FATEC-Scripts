function funcao1(){
    let info = {
        nome: "JR",
        sobrenome: "Eloy"
    }

    document.write("<h1>Resultado</h1>");
    document.write("<h2>"+ info.nome +"</h2>");
    document.write("<h2>"+ info.sobrenome +"</h2>");
}

function funcao2(x){
    return function (y){
        return x + y;
    }
}

function receber(){
    let n1 = funcao2(parseInt(document.getElementById("num1").value));

    document.write("<h1>Resultado</h1>");
    document.write("<h2>"+ n1(3) +"</h2>");
    document.write("<h2>"+ funcao2(10)(20) +"</h2>");
}