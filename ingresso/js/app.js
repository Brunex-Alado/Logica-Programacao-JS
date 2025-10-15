// ======== VARIÁVEIS GLOBAIS ========
let pista = 100;
let superior = 200;
let inferior = 400;

// Função principal chamada ao clicar em "Comprar"
function comprar() {
  const tipo = document.getElementById('tipo-ingresso').value;
  const qtd = parseInt(document.getElementById('qtd').value);
  const mensagem = document.getElementById('mensagem');

  // Validação de entrada
  if (!qtd || qtd <= 0) {
    mostrarMensagem('Informe uma quantidade válida!', 'erro');
    return;
  }

  // Redireciona para a função específica de tipo
  if (tipo === 'pista') comprarPista(qtd);
  else if (tipo === 'superior') comprarSuperior(qtd);
  else comprarInferior(qtd);
}

// ======== FUNÇÕES DE COMPRA POR TIPO ========

function comprarPista(qtd) {
  if (qtd > pista) {
    mostrarMensagem('Quantidade indisponível para tipo Pista.', 'erro');
  } else {
    pista -= qtd;
    document.getElementById('qtd-pista').textContent = pista;
    mostrarMensagem('Compra de ingressos Pista realizada com sucesso!', 'sucesso');
  }
}

function comprarSuperior(qtd) {
  if (qtd > superior) {
    mostrarMensagem('Quantidade indisponível para tipo Superior.', 'erro');
  } else {
    superior -= qtd;
    document.getElementById('qtd-superior').textContent = superior;
    mostrarMensagem('Compra de ingressos Cadeira Superior realizada com sucesso!', 'sucesso');
  }
}

function comprarInferior(qtd) {
  if (qtd > inferior) {
    mostrarMensagem('Quantidade indisponível para tipo Inferior.', 'erro');
  } else {
    inferior -= qtd;
    document.getElementById('qtd-inferior').textContent = inferior;
    mostrarMensagem('Compra de ingressos Cadeira Inferior realizada com sucesso!', 'sucesso');
  }
}

// ======== FUNÇÃO DE FEEDBACK VISUAL ========
// Substitui os alerts por uma mensagem exibida na tela
function mostrarMensagem(texto, tipo) {
  const mensagem = document.getElementById('mensagem');
  mensagem.textContent = texto;

  // Estiliza conforme o tipo (sucesso ou erro)
  mensagem.style.color = tipo === 'sucesso' ? '#00F4BF' : '#ff5555';

  // Remove a mensagem automaticamente após 3 segundos
  setTimeout(() => {
    mensagem.textContent = '';
  }, 3000);
}
