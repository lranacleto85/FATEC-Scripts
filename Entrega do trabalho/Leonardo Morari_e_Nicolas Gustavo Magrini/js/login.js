
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Credenciais estáticas
  const staticUser = 'teste@teste';
  const staticPassword = 'teste';
  

  // Valores do formulário
  const username = document.getElementById('usuario').value; // Corrigido para "usuario"
  const password = document.getElementById('senha').value;

  const errorMessage = document.getElementById('error');

  // Verificar credenciais
  if (username === staticUser && password === staticPassword) {
    alert('Login bem-sucedido!');
    errorMessage.style.display = 'none';
    
    // Redirecionar para outra página
    window.location.href = '../Views/main.html';
  } else {
    errorMessage.textContent = 'Usuário ou senha incorretos.';
    errorMessage.style.display = 'block';
  }
});






