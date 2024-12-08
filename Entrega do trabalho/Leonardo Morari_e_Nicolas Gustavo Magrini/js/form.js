//Abrir o modal ao clicar em fazer reserva
document.getElementById('openModal').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'block';
});

document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', (event) => {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});


// Função para validar CPF
function isValidCPF(cpf) {
  cpf = cpf.replace(/[^\d]/g, '');

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) sum += parseInt(cpf[i]) * (10 - i);
  let firstVerifier = (sum * 10) % 11;
  if (firstVerifier === 10) firstVerifier = 0;
  if (parseInt(cpf[9]) !== firstVerifier) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) sum += parseInt(cpf[i]) * (11 - i);
  let secondVerifier = (sum * 10) % 11;
  if (secondVerifier === 10) secondVerifier = 0;

  return parseInt(cpf[10]) === secondVerifier;
}

// Máscara e validação de CPF
document.getElementById('cpf').addEventListener('input', (event) => {
  const input = event.target;
  const value = input.value.replace(/\D/g, '');

  input.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

  if (value.length === 11) {
    if (!isValidCPF(value)) {
      input.setCustomValidity('CPF inválido');
      input.classList.add('invalid');
    } else {
      input.setCustomValidity('');
      input.classList.remove('invalid');
    }
  } else {
    input.setCustomValidity('');
    input.classList.remove('invalid');
  }
});

// Comportamento do formulário
document.getElementById('reservationForm').addEventListener('submit', (event) => {
  event.preventDefault(); // Evita o envio para teste local
  const form = event.target;
  const inputs = form.querySelectorAll('input');
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      isValid = false;
      input.classList.add('invalid');
      input.title = input.validationMessage;
    } else {
      input.classList.remove('invalid');
      input.removeAttribute('title');
    }
  });

  if (isValid) {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('successModal').style.display = 'block';
  } 
});


// Fechar modal de sucesso
document.getElementById('closeSuccessModal').addEventListener('click', () => {
  document.getElementById('successModal').style.display = 'none';
});

// Fechar modal principal
document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});

// Abrir modal principal
document.getElementById('openModal').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'block';
});

// Fechar modal ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
  const modal = document.getElementById('modal');
  const successModal = document.getElementById('successModal');
  if (event.target === modal) modal.style.display = 'none';
  if (event.target === successModal) successModal.style.display = 'none';
});

//Realiza o Logoff
function sair() {
  window.location.href = '../Views/login.html';
}



