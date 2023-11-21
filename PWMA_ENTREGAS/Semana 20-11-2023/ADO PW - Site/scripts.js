function efetuarLogin() {
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if (!usuario || !senha) {
        alert('Preencha todos os campos!');
    } else {
        window.location.href = 'home.html';
    }
}

function efetuarLogout() {
    window.location.href = 'index.html';
}

function abrirPaginaCrud() {
    window.location.href = 'crud.html';
}