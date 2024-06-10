$(document).ready(function(){
    $('input[type="radio"]').change(function(){
        if($(this).val() == "pf"){
            $('#formPhysicsPerson').removeClass('hidden');
            $('#formInstitution').addClass('hidden');
            $('#pj-save').addClass('hidden');
            $('#pf-save').removeClass('hidden')
        } else {
            $('#formPhysicsPerson').addClass('hidden');
            $('#formInstitution').removeClass('hidden');
            $('#pj-save').removeClass('hidden')
            $('#pf-save').addClass('hidden');
        }
    });
});


function findAddr(field){
    let addr = document.getElementById(field)
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
            loadAddrResult(data, field);
        })
        .catch(error => {
            // Captura e exibe erros
            console.error('Erro na consulta da API:', error);
            document.getElementById('resultado').innerHTML = 'Erro na consulta da API: ' + error.message;
        });
    }
}


function loadAddrResult(data, _type) {
    if(_type == 'pf'){
        document.getElementById('estado-pf').value = data['uf'];
        document.getElementById('cidade-pf').value = data['localidade'];
        document.getElementById('bairro-pf').value = data['bairro'];
        document.getElementById('logradouro-pf').value = data['logradouro'];
    }
    else{
        document.getElementById('estado-pj').value = data['uf'];
        document.getElementById('cidade-pj').value = data['localidade'];
        document.getElementById('bairro-pj').value = data['bairro'];
        document.getElementById('logradouro-pj').value = data['logradouro'];
    }
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

function validateEmail(field) {
    // Expressão regular para validar o formato do e-mail
    let email = document.getElementById(field)
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(regex.test(email.value)){
        validateBox(true, '#'+ field)
    }
    else{
        validateBox(false, '#'+ field)
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

function save(_type){
    if (_type == 'pf'){
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
    else{
        var nome_pj = document.getElementById('nome-pj').value;
        var cnpj = document.getElementById('cnpj').value;
        var email_pj = document.getElementById('email-pj').value;
        var cep_pj = document.getElementById('cep-pj').value;
        var estado_pj = document.getElementById('estado-pj').value;
        var cidade_pj = document.getElementById('cidade-pj').value;
        var bairro_pj = document.getElementById('bairro-pj').value;
        var log_pj = document.getElementById('logradouro-pj').value;
        var num_pj = document.getElementById('numero-pj').value;
        var comp_pj = document.getElementById('completo-end-pj').value;
        var doacao = document.getElementById('lista-doacao').value;

        if(nome_pj.length !== 0 || email_pj.length !== 0 || cep_pj.length !== 0){

            var cookie_value = { 
                "nome_fantasia": nome_pj,
                "cnpj": cnpj,
                "email": email_pj,
                "cep": cep_pj,
                "estado": estado_pj,
                "cidade": cidade_pj,
                "bairro": bairro_pj,
                "logradouro": log_pj,
                "numero_residencia": num_pj,
                "complemento": comp_pj,
                "lista-doacao": doacao
            };
        
            createLocalStorage(cookie_value);
            redirectHome();
        }
        else{
            alert("Preencha os campos obrigatórios (nome fantasia, email e cep)");
        }
    }
}

function createLocalStorage(json) {
    // Convertendo o JSON para uma string
    var jsonStr = JSON.stringify(json);    
    localStorage.setItem(json['email'], jsonStr);
}

function redirectHome(){
    window.location.replace("../home/index.html");
}

function validarCNPJ() {
    let cnpj = document.getElementById('cnpj')
 
    cnpj = cnpj.value.replace(/[^\d]+/g,'');
     
    if (cnpj.length != 14){
        validateBox(false, '#cnpj');
        return;
    }
        
 
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999"){

        validateBox(false, '#cnpj');
        return;
    }
         
    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)){
        validateBox(false, '#cnpj');
        return;
    }
         
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)){
        validateBox(false, '#cnpj');
        return;
    }
    
    validateBox(true, '#cnpj');
    
}