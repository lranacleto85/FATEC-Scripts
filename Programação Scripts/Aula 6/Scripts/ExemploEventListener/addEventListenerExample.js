const addButton = document.getElementById('addToCartButton');

addButton.addEventListener('click', addToCart);
addButton.addEventListener('click', updateCartCount);
addButton.addEventListener('click', showConfirmationMessage);

function addToCart() {
  console.log('Produto adicionado ao carrinho');
}

function updateCartCount() {
  console.log('Contagem do carrinho atualizada');
}

function showConfirmationMessage() {
  console.log('Mensagem de confirmação exibida');
}
