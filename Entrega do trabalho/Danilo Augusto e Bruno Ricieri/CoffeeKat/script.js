// Função para validar o cadastro
function validarCadastro(evento) {
    evento.preventDefault();

    const nome = document.getElementById("pnome").value.trim();
    const sobrenome = document.getElementById("snome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const campoErro = document.getElementById("erroCadastro");

    campoErro.textContent = "";

    if (!nome || !sobrenome || !cpf || !email || !senha) {
        campoErro.textContent = "existem campos a serem preenchidos";
        return;
    }

    if (!validarCPF(cpf)) {
        campoErro.textContent = "CPF invalido";
        return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        campoErro.textContent = "Email invlido";
        return;
    }

    if (senha.length < 6) {
        campoErro.textContent = "A senha deve ter no mínimo 6 caracteres";
        return;
    }

    localStorage.setItem("nome", nome);
    localStorage.setItem("sobrenome", sobrenome);
    localStorage.setItem("cpf", cpf);
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);

    alert("Cadastro realizado");
    window.location.href = "login.html";
}

// Função validar o CPF
function validarCPF(cpf) {
    cpf = limparCPF(cpf);

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let soma = 0, resto;

    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;

    return true;
}

// Limpar caracteres não numericos
function limparCPF(cpf) {
    return cpf.replace(/[^\d]+/g, '');
}

// eventos de validação
document.addEventListener("DOMContentLoaded", function() {
    const formularioCadastro = document.getElementById("formularioCadastro");
    if (formularioCadastro) formularioCadastro.addEventListener("submit", validarCadastro);

    function validarLogin(evento) {
        evento.preventDefault(); 

        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();
        const campoErro = document.getElementById("erro");

        campoErro.textContent = "";

        const emailSalvo = localStorage.getItem("email");
        const senhaSalva = localStorage.getItem("senha");

        if (email === "" || senha === "") {
            campoErro.textContent = "Preencha todos os campos";
            return;
        }

        if (email !== emailSalvo || senha !== senhaSalva) {
            campoErro.textContent = "Email ou senha incorretos";
            return;
        }

        alert("Login realizado");
        window.location.href = "index.html"; 
    }

    const formularioLogin = document.getElementById("formularioLogin");
    if (formularioLogin) formularioLogin.addEventListener("submit", validarLogin);
});

// Função para validar o formulario
document.getElementById("formularioContato").addEventListener("submit", function(evento) {
    evento.preventDefault();

    const mensagem = document.getElementById("textcontato").value.trim();
    let mensagemErro = "";

    if (mensagem === "") {
        mensagemErro = "Preencha o formulario";
    }

    if (mensagemErro === "") {
        alert("Mensagem enviada");
        document.getElementById("textcontato").value = "";
    } else {
        alert(mensagemErro);
    }
});