function toggleNavbar() {
    var toggler = document.querySelector('.navbar-toggler');
    var navCollapse = document.querySelector('.navbar-collapse');

    toggler.addEventListener('click', function () {
        if (navCollapse.classList.contains('show')) {
            navCollapse.classList.remove('show');
        } else {
            navCollapse.classList.add('show');
        }
    });
}

// Chama a função toggleNavbar para ativar o comportamento do toggler da barra de navegação
toggleNavbar();
