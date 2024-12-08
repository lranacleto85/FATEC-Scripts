function Contato(){

    const nomeContato = document.getElementById('nome').value; // obtenção dos valores de entrada
    const emailContato = document.getElementById('emailAddres').value;
    const telContato = document.getElementById('phoneNumber').value;
    const descricaoContato = document.getElementById('descricao').value;

    if(nomeContato !== "" || emailContato !== "" || telContato !== "" || descricaoContato !== ""){ // processo de validação
        alert("Contato realizado com sucesso!"); //alerta para contato realizado
    }
}