# Plano de Testes de Software

O requisito para realização dos testes de software são:
<ul><li>Navegador da internet: Chrome, Opera ou Edge.</li></ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.
 
<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento da parte de produtos na Home Page.</td>
  <td>
   <ul>
    <li>RF-07: A aplicação deve permitir que o usuário tenha acesso aos produtos que são aceitos para doação.</li>
   </ul>
  </td>
  <td>Verificar se a parte de produtos da Home está correta e se está dividindo corretamente os produtos.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Ir para a parte de produtos.</li>
    <li>Verificar os produtos.</li>
    <li>Clicar nas subdivisões de produtos.</li>
   </ol>
   </td>
  <td>Todos os produtos devem estar listados na home e devem ser subdivididos de forma correta ao clicar na subdivisão listada.</td>
  <td>Rodrigo</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar o funcionamento da parte de contatos na Home Page.</td>
  <td>
   <ul>
    <li>RF-06: A aplicação deve permitir e facilitar o contato entre o doador e o receptor do alimento.</li>
     <li>RF-10: O sistema deve fornecer feedback claro para ações do usuário, como confirmações de formulários e mensagens de erro.</li>
   </ul>
  </td>
  <td>Verificar se a parte de contatos da Home está correta, corretamente dividida e se está dando feedback claro das ações do usuário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Ir para a parte de contatos.</li>
    <li>Preencher os dados requisitados.</li>
    <li>Clicar em 'Enviar'.</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação das informações fornecidas pelo usuário e ao clicar em 'Enviar', deve aparecer uma mensagem agradecendo o contato.</td>
  <td>Rodrigo</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-03: Verificar o funcionamento da parte de criação de campanhas</td>
  <td>
   <ul>
    <li>RF-05: A aplicação deve permitir criar campanhas sazonais de doação de alimentos.</li>
    <li>RF-08: A aplicação deve permitir ver as campanhas que estão ativas.</li>
   </ul>
  </td>
  <td>Verificar se a parte de criação de campanhas está correta, mostrando campanhas criadas e se está criando campanhas ao usuário tentar criar.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Ir para a parte de criação de campanhas.</li>
    <li>Verificar as campanhas.</li>
    <li>Clicar em 'Criar campanha'.</li>
    <li>Preencher os dados requisitados para a criação de campanha</li>
    <li>Clicar  em 'Enviar'</li>
   </ol>
   </td>
  <td>As campanhas ativas devem aparecer, mostrando suas especificações. A opção "Criar campanhas" deve adicionar corretamente as campanhas de usuários que queiram utilizá-la.</td>
  <td>Danilo</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04: Verificar o funcionamento da parte de login do site</td>
  <td>
   <ul>
    <li>RF-02: A aplicação deve permitir ao usuário fazer o login da sua conta cadastrada.</li>
    <li>RF-09: A aplicação deve permitir ao usuário verificar as informações registradas no cadastro, após fazer seu login.</li>
    <li>RF-10: O sistema deve fornecer feedback claro para ações do usuário, como confirmações de formulários e mensagens de erro.</li>
   </ul>
  </td>
  <td>Verificar se a parte de login está correta, checando se o sistema fornece um feedback confirmando o cadastro e, posteriormente, mostrando os dados cadastrados do usuário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Ir para a parte de login.</li>
    <li>Preencher os dados requisitados para login</li>
    <li>Clicar em 'Enviar'.</li>
    <li>Verificar se recebe um feedback de login feito com sucesso</li>
    <li>Após o login, verificar se as informações de cadastro são fornecidas para o usuário</li>
   </ol>
   </td>
  <td>O usuário deverá fazer o login, recebendo um feedback mostrando se o login foi bem ou mal sucedido. Após a confirmação de login, os dados previamente cadastrados deverão aparecer para o usuário. </td>
  <td></td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-05: Verificar o funcionamento da parte de cadastro do site</td>
  <td>
   <ul>
    <li>RF-01: A aplicação deve permitir ao usuário cadastrar uma conta.</li>
    <li>RF-10: O sistema deve fornecer feedback claro para ações do usuário, como confirmações de formulários e mensagens de erro.</li>
   </ul>
  </td>
  <td>Verificar se a parte de cadastro está correta, registrando corretamente tanto pela aba de pessoa física, quanto a aba de pessoa jurídica. Verificar também se o sistema fornece um feedback após o registro do usuário, confirmando o cadastro</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Ir para a parte de login.</li>
    <li>Clicar na opção 'Cadastro' na tela de login</li>
    <li>Selecionar a opção 'Pessoa Física' ou 'Pessoa Jurídica'</li>
    <li>Preencher os dados requisitados para o cadastro (Pessoa Física ou Pessoa Jurídica)</li>
    <li>Clicar em 'Enviar'</li>
    <li>Verificar se recebe um feedback de cadastro feito com sucesso</li>
   </ol>
   </td>
  <td>O usuário deve fazer o cadastro, preenchendo informações solicitadas com base no cadastro de Pessoa Física ou Pessoa Jurídica.</td>
  <td></td>
 </tr>
</table>
