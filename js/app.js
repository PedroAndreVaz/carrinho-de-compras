let total ;
limpar();


function adicionar() {
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0];
let valorUnitario = produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;
let preco = valorUnitario * quantidade;
let carrinho = document.getElementById('lista-produtos');
carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
        </section>`
      total = total + preco;
      let campoTotal = document.getElementById('valor-total');
      campoTotal.textContent = `R$ ${total}`;
      document.getElementById('quantidade').value = 0;
}


function limpar() {
     total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$';
}

