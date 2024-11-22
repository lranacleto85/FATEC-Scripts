function operador(x1,x2,op){
    if (op == "/" || op == "%"){
        if (x2 == 0){
            return "ERRO: Divisão por 0";
        }
    }
    return eval(`${x1} ${op} ${x2}`);
}

function receber(){
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let op = document.getElementById('select').value;

    // document.write("Resultado:");
    // document.write("<h2>"+ operador(n1,n2,op) +"</h2>")
    alert("Resultado: "+operador(n1,n2,op))
}