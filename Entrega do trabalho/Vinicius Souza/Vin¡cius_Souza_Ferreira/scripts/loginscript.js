document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username === "admin" && password === "1234") {
        alert("Login realizado com sucesso!");
        window.location.href = "index.html"; 
    } else {
        alert("Usuário ou senha inválidos!");
    }
});