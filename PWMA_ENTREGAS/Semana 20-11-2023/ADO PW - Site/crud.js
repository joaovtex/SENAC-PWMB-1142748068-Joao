var listaItens = [];

function exibirListaItens() {
    var listaItensElemento = document.getElementById('listaItens');
    listaItensElemento.innerHTML = '';

    listaItens.forEach(function (item) {
        var itemLista = document.createElement('li');
        itemLista.innerHTML = `
            Código: ${item.codigo},
            Nome do Item: ${item.nomeItem},
            Tamanho: ${item.tamanhoItem}
            <button onclick="editarItem('${item.codigo}')">Editar</button>
            <button onclick="removerItem('${item.codigo}')">Remover</button>
        `;
        listaItensElemento.appendChild(itemLista);
    });
}

function adicionarItem() {
    var codigo = document.getElementById('codigo').value;
    var nomeItem = document.getElementById('nomeItem').value;
    var tamanhoItem = document.getElementById('tamanhoItem').value;

    var itemExistente = listaItens.find(item => item.codigo === codigo);

    if (itemExistente) {
        alert('Item com código já existente. Por favor, escolha outro código.');
    } else {
        listaItens.push({ codigo, nomeItem, tamanhoItem });
        document.getElementById('codigo').value = '';
        document.getElementById('nomeItem').value = '';
        document.getElementById('tamanhoItem').value = '';
        exibirListaItens();
    }
}

function removerItem(codigo) {
    listaItens = listaItens.filter(item => item.codigo !== codigo);
    exibirListaItens();
}

function editarItem(codigo) {
    var itemSelecionado = listaItens.find(item => item.codigo === codigo);

    if (itemSelecionado) {
        var novoNome = prompt('Digite o novo nome do item:', itemSelecionado.nomeItem);
        var novoTamanho = prompt('Digite o novo tamanho do item:', itemSelecionado.tamanhoItem);

        if (novoNome !== null && novoTamanho !== null) {
            itemSelecionado.nomeItem = novoNome;
            itemSelecionado.tamanhoItem = novoTamanho;
            exibirListaItens();
        }
    }
}

function abrirPaginaHome() {
    window.location.href = 'home.html';
}

exibirListaItens();