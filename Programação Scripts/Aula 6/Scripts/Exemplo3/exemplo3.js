let quadrado = (numero) => {
    return numero*numero;
}

function receber(){
    let n1 = quadrado(parseInt(document.getElementById('num1').value));
    document.write("<h1>Resultado:</h1>" + "<h2>" + n1 + "</h2>")
}