

const form = document.getElementById("btnLogin")
const inputs = document.querySelectorAll("input")
form.addEventListener('click',() => {
    if(inputs[0].value == "teste@teste" || inputs[1].value == 'teste'){
        alert("Usuário Logado com sucesso !!!")
    }else{
        alert("Usuário Invalido")
    }
})