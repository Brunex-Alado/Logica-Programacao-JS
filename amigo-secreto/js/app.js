// ======== VARIÁVEL GLOBAL ========
let amigos = []; // Lista que guardará os nomes

// ======== ADICIONAR AMIGO ========
function adicionar() {
  const input = document.getElementById("nome-amigo");
  const nome = input.value.trim(); // remove espaços extras

  if (nome === "") {
    alert("Digite o nome de um amigo!");
    return;
  }

  // Evita nomes repetidos (sem diferenciar maiúsculas)
  if (amigos.some(a => a.toLowerCase() === nome.toLowerCase())) {
    alert("Esse nome já foi adicionado!");
    return;
  }

  amigos.push(nome);
  input.value = "";
  atualizarLista();
}

// ======== ATUALIZAR LISTA DE AMIGOS ========
function atualizarLista() {
  const lista = document.getElementById("lista-amigos");
  lista.innerHTML = ""; // limpa antes de redesenhar

  amigos.forEach((amigo, index) => {
    const item = document.createElement("div");
    item.classList.add("friend-item");

    const nomeSpan = document.createElement("span");
    nomeSpan.textContent = amigo;

    // Botão de remover
    const btn = document.createElement("button");
    btn.textContent = "✖";
    btn.classList.add("remove-btn");
    btn.onclick = () => removerAmigo(index);

    item.appendChild(nomeSpan);
    item.appendChild(btn);
    lista.appendChild(item);
  });
}

// ======== REMOVER AMIGO ========
function removerAmigo(index) {
  amigos.splice(index, 1); // remove pelo índice
  atualizarLista(); // atualiza a tela
}

// ======== SORTEAR AMIGOS ========
function sortear() {
  if (amigos.length < 4) {
    alert("Adicione pelo menos 4 amigos!");
    return;
  }

  // Embaralhar array
  const embaralhados = [...amigos];
  embaralhar(embaralhados);

  const sorteio = document.getElementById("lista-sorteio");
  sorteio.innerHTML = "";

  for (let i = 0; i < embaralhados.length; i++) {
    const amigoAtual = embaralhados[i];
    const amigoSecreto = i === embaralhados.length - 1 ? embaralhados[0] : embaralhados[i + 1];
    sorteio.innerHTML += `${amigoAtual} ➜ ${amigoSecreto}<br>`;
  }
}

// ======== EMBARALHAR (Algoritmo Fisher–Yates) ========
function embaralhar(lista) {
  for (let i = lista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lista[i], lista[j]] = [lista[j], lista[i]];
  }
}

// ======== REINICIAR ========
function reiniciar() {
  amigos = [];
  document.getElementById("lista-amigos").innerHTML = "";
  document.getElementById("lista-sorteio").innerHTML = "";
}
