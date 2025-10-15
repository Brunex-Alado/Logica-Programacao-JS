// 🔢 Variável global para contar quantos jogos estão alugados
let jogosAlugados = 0;

// 🧮 Função que atualiza o contador na tela e mostra no console
function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);

    // Atualiza o texto do contador no HTML
    let contador = document.getElementById('contador-jogos');
    contador.textContent = `Total de jogos alugados: ${jogosAlugados}`;
}

// 🎮 Função principal que altera o status de aluguel/devolução de cada jogo
function alterarStatus(id) {
    // Captura o elemento do jogo clicado
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    // Verifica se o jogo já está alugado
    if (imagem.classList.contains('dashboard__item__img--rented')) {

        // 🔒 Desafio 1: Confirmação antes da devolução
        if (confirm(`Você tem certeza que deseja devolver o jogo "${nomeJogo.textContent}"?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados--; // diminui a contagem
        }

    } else {
        // Se o jogo ainda não está alugado, aluga
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++; // aumenta a contagem
    }

    // Atualiza o contador sempre que algo mudar
    contarEExibirJogosAlugados();
}

// 🚀 Quando a página carregar, contar quantos jogos já estão alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});
