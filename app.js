let listaDeAmigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value.trim();
    if (nomeAmigo !== '') {
        // Verifica se o nome já existe antes de adicionar
        if (!listaDeAmigos.includes(nomeAmigo)) {
            listaDeAmigos.push(nomeAmigo);
            document.getElementById('amigo').value = '';
            exibirAmigosNaTela(); // Chama a nova função para atualizar a exibição
        } else {
            alert('Nome já adicionado!');
        }
    }
}

function exibirAmigosNaTela() {
    let listaUI = document.getElementById('listaAmigos');
    listaUI.innerHTML = ''; // Limpa a lista antes de exibir novamente

    // Loop para cada nome na lista e exibe na tela
    listaDeAmigos.forEach(nome => {
        let item = document.createElement('li');
        item.textContent = nome;
        listaUI.appendChild(item);
    });
}

function embaralhar (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function sortearAmigo() {
    if (listaDeAmigos.length >= 2) {
        let amigosEmbaralhados = embaralhar([...listaDeAmigos]);
        let listaSorteio = document.getElementById('resultado');
        listaSorteio.innerHTML = '';

        for (let i = 0; i < amigosEmbaralhados.length; i++) {
            let amigo1 = amigosEmbaralhados[i];
            let amigo2 = amigosEmbaralhados[(i + 1) % amigosEmbaralhados.length];
            let item = document.createElement('p');
            item.textContent = `${amigo1} pega ${amigo2}`;
            listaSorteio.appendChild(item);
        }
    } else {
        alert ('Adicione pelo menos dois amigos para sortear.');
    }
}
