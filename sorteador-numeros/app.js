// Função principal: sorteia os números de acordo com os valores digitados
function sortear() {
    // Captura os valores dos campos e converte para número inteiro
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // Array que armazenará os números sorteados (sem repetição)
    let sorteados = [];
    let numero;

    // Gera os números até atingir a quantidade solicitada
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        // Enquanto o número já existir na lista, gera outro
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        // Adiciona o número único ao array
        sorteados.push(numero);
    }

    // Exibe o resultado no HTML
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    // Habilita o botão de reiniciar
    alterarStatusBotao();
}

// Gera um número aleatório entre dois valores (mínimo e máximo)
function obterNumeroAleatorio(min, max) {
    // Math.random() → número entre 0 e 1
    // Multiplica pelo intervalo e soma o valor mínimo
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Alterna o estado do botão "Reiniciar"
function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');

    // Se o botão estiver desabilitado, habilita
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } 
    // Caso contrário, desabilita novamente
    else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

// Limpa os campos e reseta o resultado
function reiniciar() {
    // Limpa os valores digitados
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

    // Volta o texto padrão do resultado
    document.getElementById('resultado').innerHTML =
        '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';

    // Desabilita novamente o botão reiniciar
    alterarStatusBotao();
}
