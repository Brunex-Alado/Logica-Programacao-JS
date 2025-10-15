let totalGeral = 0;
let quantidadeTotal = 0;

let carrinho = document.getElementById('lista-produtos');
let valorTotal = document.getElementById('valor-total');
let quantidadeTotalSpan = document.getElementById('quantidade-total');
let mensagemVazio = document.getElementById('mensagem-vazio');

atualizarCarrinho();

function adicionar() {
  let produto = document.getElementById('produto').value;
  let nomeProduto = produto.split('-')[0].trim();
  let valorUnitario = parseFloat(produto.split('R$')[1].trim());
  let quantidade = parseInt(document.getElementById('quantidade').value);

  if (!quantidade || quantidade <= 0) {
    alert('Por favor, informe uma quantidade válida!');
    return;
  }

  let preco = valorUnitario * quantidade;

  let item = document.createElement('section');
  item.classList.add('carrinho__produtos__produto');
  item.innerHTML = `
    <div>
      <span class="texto-azul">${quantidade}x</span> ${nomeProduto}
      <span class="texto-azul">R$${preco}</span>
    </div>
    <button class="botao-remover" onclick="remover(this, ${preco}, ${quantidade})">Remover</button>
  `;

  carrinho.appendChild(item);

  totalGeral += preco;
  quantidadeTotal += quantidade;

  atualizarCarrinho();
  document.getElementById('quantidade').value = '';
}

function remover(botao, preco, quantidade) {
  botao.parentElement.remove();
  totalGeral -= preco;
  quantidadeTotal -= quantidade;
  atualizarCarrinho();
}

function limpar() {
  carrinho.innerHTML = '';
  totalGeral = 0;
  quantidadeTotal = 0;
  atualizarCarrinho();
}

function atualizarCarrinho() {
  valorTotal.textContent = `R$ ${totalGeral}`;
  quantidadeTotalSpan.textContent = quantidadeTotal;

  if (carrinho.children.length === 0) {
    mensagemVazio.style.display = 'block';
  } else {
    mensagemVazio.style.display = 'none';
  }
}
