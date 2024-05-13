$(document).ready(function(){
    $('input[type="radio"]').change(function(){
        if($(this).val() == "pf"){
            $('#formPhysicsPerson').removeClass('hidden');
            $('#formInstitution').addClass('hidden');
        } else {
            $('#formPhysicsPerson').addClass('hidden');
            $('#formInstitution').removeClass('hidden');
        }
    });
});

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


function findAddr(){
    let addr = document.getElementById('cep-pf')
    if(addr.value.length !== 0){
        var apiUrl = 'https://viacep.com.br/ws/' + addr.value +'/json/';

        // Realiza a requisição à API usando fetch
        fetch(apiUrl)
        .then(response => {
            // Verifica se a resposta da API foi bem-sucedida
            if (!response.ok) {
                throw new Error('Erro ao consultar a API: ' + response.status);
            }
            // Converte a resposta para JSON
            return response.json();
        })
        .then(data => {
            // Manipula os dados recebidos da API
            loadAddrResult(data);
        })
        .catch(error => {
            // Captura e exibe erros
            console.error('Erro na consulta da API:', error);
            document.getElementById('resultado').innerHTML = 'Erro na consulta da API: ' + error.message;
        });
    }
}


function loadAddrResult(data) {
    // Exibe os dados recebidos da API de CEP
    document.getElementById('estado-pf').value = data['uf'];
    document.getElementById('cidade-pf').value = data['localidade'];
    document.getElementById('bairro-pf').value = data['bairro'];
    document.getElementById('logradouro-pf').value = data['logradouro'];
}

function validateCPF() {
    let cpf = document.getElementById('cpf')
    // Remover caracteres especiais do CPF
    cpf = cpf.value.replace(/[^\d]/g, '');

    // Verificar se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
        invalidBox('#cpf');
        return;
    }

    // Verificar se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cpf)) {
        invalidBox('#cpf');
        return;
    }

    // Calcular o primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let digit1 = 11 - (sum % 11);
    if (digit1 >= 10) {
        digit1 = 0;
    }

    // Calcular o segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    let digit2 = 11 - (sum % 11);
    if (digit2 >= 10) {
        digit2 = 0;
    }

    // Verificar se os dígitos verificadores são válidos
    if (parseInt(cpf.charAt(9)) !== digit1 || parseInt(cpf.charAt(10)) !== digit2) {
        invalidBox('#cpf');
        return;
    }

    $('#cpf').removeClass('redBox');
}

function validateEmail() {
    // Expressão regular para validar o formato do e-mail
    let email = document.getElementById('email-pf')
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(regex.test(email.value)){
        console.log('true no regx')
        invalidBox(false, '#email-pf')
    }
    else{
        console.log('false no regx')
        invalidBox(true, '#email-pf')
    }

}

function invalidBox(invalid, box){
    if(invalid){
        $(box).addClass('redBox'); 
    }
    else{
        $(box).removeClass('redBox');
    }
}