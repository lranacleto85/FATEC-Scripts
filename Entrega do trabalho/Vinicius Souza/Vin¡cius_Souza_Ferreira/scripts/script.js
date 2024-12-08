

const carrinho = [];
function adicionarAoCarrinho(produto, preco) {
    carrinho.push({ produto, preco });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}


function adicionarAoCarrinho(produto, preco) {
    alert(`${produto} foi adicionado ao carrinho!`);
    console.log(`Produto: ${produto}, Preço: R$ ${preco}`);
    
}


let indiceAtual = 0;


const cadastroForm = document.getElementById('cadastro-form');


const mensagemCadastro = document.getElementById('mensagem-cadastro');

cadastroForm.addEventListener('submit', function (event) {
    event.preventDefault(); 
    const nomeValido = "admin";
    const cpfValido = "333.111.444-06"; 
    const nome = document.getElementById('nome').value; 
    const cpf = document.getElementById('cpf').value; 

    if (nome === nomeValido & cpf === cpfValido ) {
        mensagemCadastro.textContent = `Usuário ${nome} cadastrado com sucesso!`;
        mensagemCadastro.style.color = "black"; 
    } else{
        Swal.fire({
            title: "Usuário ou CPF não cadastrado!",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
    }

});


