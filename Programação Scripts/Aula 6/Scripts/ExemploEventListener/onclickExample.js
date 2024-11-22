const addButton = document.getElementById('addToCartButton');

addButton.onclick = function() {
  addToCart();
};

addButton.onclick = function() {
  updateCartCount();
};

addButton.onclick = function() {
  showConfirmationMessage();
};

function addToCart() {
  console.log('Produto adicionado ao carrinho');
}

function updateCartCount() {
  console.log('Contagem do carrinho atualizada');
}

function showConfirmationMessage() {
  console.log('Mensagem de confirmação exibida');
}
