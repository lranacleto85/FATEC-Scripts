// Função para verificar o login
function verificarLogin() {
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if (usuario === "admin" && senha === "admin") {
        alert("Login bem-sucedido!");
        window.location.href = "index.html"; // Redireciona para a página inicial
    } else {
        alert("Usuário ou senha incorretos.");
    }
}
