let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let closeIcon = document.querySelector('#close-icon'); // Selecionando o ícone "X"

menu.addEventListener('click', function() {
    navlist.style.display = 'flex';
    closeIcon.style.display = 'block'; // Exibindo o ícone "X"
});

closeIcon.addEventListener('click', function() {
    navlist.style.display = 'none';
    closeIcon.style.display = 'none'; // Ocultando o ícone "X"
});

// Adicionar verificação de largura da tela
function toggleMenu() {
    if (window.innerWidth < 960) {
        navlist.style.display = 'none';
    } else {
        navlist.style.display = 'flex';
    }
}

// Verificar a largura da tela quando a página é carregada
window.addEventListener('load', toggleMenu);

// Verificar a largura da tela quando a janela é redimensionada
window.addEventListener('resize', toggleMenu);