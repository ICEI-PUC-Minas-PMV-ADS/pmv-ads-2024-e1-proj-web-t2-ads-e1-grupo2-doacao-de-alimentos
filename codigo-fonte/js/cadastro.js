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
        validateBox(false, '#cpf');
        return;
    }

    // Verificar se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cpf)) {
        validateBox(false, '#cpf');
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
        validateBox(false, '#cpf');
        return;
    }
    validateBox(true, '#cpf');
}

function validateEmail() {
    // Expressão regular para validar o formato do e-mail
    let email = document.getElementById('email-pf')
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(regex.test(email.value)){
        validateBox(true, '#email-pf')
    }
    else{
        validateBox(false, '#email-pf')
    }

}

function validateBox(valid, box){
    if(valid){ 
        $(box).removeClass('redBox');
    }
    else{
        $(box).addClass('redBox');
    }
}

function confirmEmail(email1, email2){
    var _bool = compareFields(email1, email2);
    validateBox(_bool, '#'+email2);
}

function confirmPassword(pass1, pass2){
    var _bool = compareFields(pass1, pass2);
    validateBox(_bool, '#'+pass2);
}

function compareFields(field1, field2){
    if(document.getElementById(field1).value === document.getElementById(field2).value){
        return true;
    }
    else{
        return false;
    }
}

function save(){
    var nome_pf = document.getElementById('nome-pf').value;
    var cpf = document.getElementById('cpf').value;
    var email_pf = document.getElementById('email-pf').value;
    var cep_pf = document.getElementById('cep-pf').value;
    var estado_pf = document.getElementById('estado-pf').value;
    var cidade_pf = document.getElementById('cidade-pf').value;
    var bairro_pf = document.getElementById('bairro-pf').value;
    var log_pf = document.getElementById('logradouro-pf').value;
    var num_pf = document.getElementById('numero-pf').value;
    var comp_pf = document.getElementById('completo-end-pf').value;

    if(nome_pf.length !== 0 || email_pf.length !== 0 || cep_pf.length !== 0){

        var cookie_value = { 
            "nome": nome_pf,
            "cpf": cpf,
            "email": email_pf,
            "cep": cep_pf,
            "estado": estado_pf,
            "cidade": cidade_pf,
            "bairro": bairro_pf,
            "logradouro": log_pf,
            "numero_residencia": num_pf,
            "complemento": comp_pf
        };
    
        createLocalStorage(cookie_value);
        redirectHome();
    }
    else{
        alert("Preencha os campos obrigatórios (nome, email e cep)");
    }
}

function createLocalStorage(json) {
    // Convertendo o JSON para uma string
    var jsonStr = JSON.stringify(json);    
    localStorage.setItem(json['email'], jsonStr);
}
