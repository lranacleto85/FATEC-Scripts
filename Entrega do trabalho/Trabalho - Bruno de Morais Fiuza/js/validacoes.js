function validarFormularioContato() {
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const cpf = document.getElementById("cpf");

    if (nome.value.trim() === "") {
        alert("Por favor, preencha o campo Nome.");
        nome.focus();
        return false;
    }

    if (email.value.trim() === "") {
        alert("Por favor, insira um e-mail válido.");
        email.focus();
        return false;
    }

    if (telefone.value.trim() === "") {
        alert("Por favor, preencha o campo Telefone.");
        telefone.focus();
        return false;
    }

    if (!validarCPF(cpf.value)) {
        alert("Por favor, insira um CPF válido (11 dígitos numéricos).");
        cpf.focus();
        return false;
    }

    alert("Formulário enviado com sucesso!");
    return true;
}

function validarCPF(cpf) {
    // Remove pontos e traços do CPF
    cpf = cpf.replaceAll('.', '').replaceAll('-', '');

    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) return false;

    // Verifica se todos os dígitos são iguais (ex.: 111.111.111-11)
    if (cpf.split('').every(d => d === cpf[0])) return false;

    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * (10 - i);
    }
    let primeiroDigito = 11 - (soma % 11);
    if (primeiroDigito >= 10) primeiroDigito = 0;

    // Verifica se o primeiro dígito está correto
    if (primeiroDigito !== parseInt(cpf[9])) return false;

    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf[i]) * (11 - i);
    }
    let segundoDigito = 11 - (soma % 11);
    if (segundoDigito >= 10) segundoDigito = 0;

    // Verifica se o segundo dígito está correto
    if (segundoDigito !== parseInt(cpf[10])) return false;

    // CPF é válido
    return true;
}

function validarLogin() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    const usuario = 'teste@teste';
    const senha = 'teste';

    if (email === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    if (usuario === email && senha === password) {
        alert('Login realizado com sucesso!');
        return true;
    }

    alert('Senha/Usuário errada!');
    return false;
}