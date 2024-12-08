// Pega os modais
var lemonModal = document.getElementById("lemonModal");
var skyModal = document.getElementById("skyModal");
var rainbowModal = document.getElementById("rainbowModal");

// Pega os botões para abrir os modais
var openLemonModalBtn = document.getElementById("openLemonModalBtn");
var openSkyModalBtn = document.getElementById("openSkyModalBtn");
var openRainbowModalBtn = document.getElementById("openRainbowModalBtn");

// Pega os <span> (x) para fechar os modais
var lemonCloseBtn = document.getElementById("lemonCloseBtn");
var skyCloseBtn = document.getElementById("skyCloseBtn");
var rainbowCloseBtn = document.getElementById("rainbowCloseBtn");

// Quando o usuário clicar no botão de Lemon Drink, abrir o modal
openLemonModalBtn.onclick = function() {
  lemonModal.style.display = "block";
}

// Quando o usuário clicar no botão de Sky Drink, abrir o modal
openSkyModalBtn.onclick = function() {
  skyModal.style.display = "block";
}

// Quando o usuário clicar no botão de Rainbow Drink, abrir o modal
openRainbowModalBtn.onclick = function() {
  rainbowModal.style.display = "block";
}

// Quando o usuário clicar no <span> (x), fecha o modal do Lemon Drink
lemonCloseBtn.onclick = function() {
  lemonModal.style.display = "none";
}

// Quando o usuário clicar no <span> (x), fecha o modal do Sky Drink
skyCloseBtn.onclick = function() {
  skyModal.style.display = "none";
}

// Quando o usuário clicar no <span> (x), fecha o modal do Rainbow Drink
rainbowCloseBtn.onclick = function() {
  rainbowModal.style.display = "none";
}

// Quando o usuário clicar fora do modal, ele fecha
window.onclick = function(event) {
  if (event.target == lemonModal) {
    lemonModal.style.display = "none";
  } else if (event.target == skyModal) {
    skyModal.style.display = "none";
  } else if (event.target == rainbowModal) {
    rainbowModal.style.display = "none";
  }
}
