document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita o envio do formulário

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("password").value;

    // Credenciais de login
    const validEmail = "teste@teste";
    const validPassword = "teste";

    if (email === validEmail && password === validPassword) {
        alert("Login bem-sucedido!");
        window.location.href = "cadastro.html"; // Redireciona para a página de cadastro
    } else {
        alert("Usuário ou senha inválidos.");
    }
});
