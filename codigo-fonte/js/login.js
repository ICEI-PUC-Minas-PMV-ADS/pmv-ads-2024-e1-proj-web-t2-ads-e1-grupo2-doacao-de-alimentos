$(document).ready(function() {
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        var email = localStorage.getItem($('#email').val());
        console.log(email)
        if (email !== null) {
            alert('Login realizado com sucesso');
            redirectHome();
        } else {
            alert('Falha no login - Usuário ou senha inválidos');
        }
    });
});